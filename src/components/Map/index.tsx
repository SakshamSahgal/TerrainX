import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef, useState } from 'react'
import { Map as MLMap } from 'maplibre-gl'
import type { MapMouseEvent } from 'maplibre-gl'
import { MapContext } from '../../context/MapContext'
import { buildStyle } from '../../style/mapStyle'
import type { MapProps } from '../../types'

export function Map({
  center,
  zoom = 10,
  theme,
  height = '100%',
  width = '100%',
  onMove,
  onClick,
  children,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<MLMap | null>(null)
  const [isReady, setIsReady] = useState(false)

  // Initialize MapLibre once on mount
  useEffect(() => {
    if (!containerRef.current) return

    const mlMap = new MLMap({
      container: containerRef.current,
      style: buildStyle(theme),
      center: [center.lon, center.lat],
      zoom,
    })

    mlMap.once('load', () => {
      setMap(mlMap)
      setIsReady(true)
    })

    return () => mlMap.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Update style when theme changes
  useEffect(() => {
    if (!map) return
    map.setStyle(buildStyle(theme))
  }, [theme, map])

  // onMove listener
  useEffect(() => {
    if (!map || !onMove) return
    const handler = () => {
      const c = map.getCenter()
      onMove({ lat: c.lat, lon: c.lng }, map.getZoom())
    }
    map.on('move', handler)
    return () => { map.off('move', handler) }
  }, [map, onMove])

  // onClick listener
  useEffect(() => {
    if (!map || !onClick) return
    const handler = (e: MapMouseEvent) => {
      onClick({ lat: e.lngLat.lat, lon: e.lngLat.lng })
    }
    map.on('click', handler)
    return () => { map.off('click', handler) }
  }, [map, onClick])

  return (
    <MapContext.Provider value={map}>
      <div style={{ position: 'relative', height, width, overflow: 'hidden' }}>
        <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
        {isReady && children}
      </div>
    </MapContext.Provider>
  )
}
