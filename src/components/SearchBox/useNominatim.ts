import { useState, useEffect } from 'react'
import type { Location } from '../../types'

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'
const DEBOUNCE_MS = 400

interface NominatimResult {
  display_name: string
  lat: string
  lon: string
}

/** Debounced Nominatim search hook. Aborts stale requests automatically. */
export function useNominatim(query: string) {
  const [results, setResults] = useState<Location[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const trimmed = query.trim()
    if (!trimmed) { setResults([]); return }

    const controller = new AbortController()
    let timer: ReturnType<typeof setTimeout>

    timer = setTimeout(async () => {
      setLoading(true)
      try {
        const url = new URL(NOMINATIM_URL)
        url.searchParams.set('q', trimmed)
        url.searchParams.set('format', 'json')
        url.searchParams.set('limit', '5')

        const res = await fetch(url.toString(), {
          signal: controller.signal,
          headers: { 'User-Agent': 'TerrainX/1.0' },
        })
        const data: NominatimResult[] = await res.json()

        setResults(
          data.map((r) => ({
            name: r.display_name,
            lat: parseFloat(r.lat),
            lon: parseFloat(r.lon),
          })),
        )
      } catch {
        // Aborted or network error — silently ignore
      } finally {
        setLoading(false)
      }
    }, DEBOUNCE_MS)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return { results, loading }
}
