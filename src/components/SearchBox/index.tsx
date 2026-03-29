import { useState } from 'react'
import { useNominatim } from './useNominatim'
import { useMap } from '../../hooks/useMap'
import type { SearchBoxProps, Location } from '../../types'

const styles = {
  wrapper: { position: 'absolute', top: 10, left: 10, zIndex: 10, width: 280 } as const,
  input: {
    width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc',
    fontSize: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', outline: 'none',
    boxSizing: 'border-box',
  } as const,
  dropdown: {
    marginTop: 4, background: '#fff', borderRadius: 8, overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)', listStyle: 'none', padding: 0, margin: 0,
  } as const,
  item: {
    padding: '8px 12px', fontSize: 13, cursor: 'pointer', borderBottom: '1px solid #f0f0f0',
    lineHeight: 1.4,
  } as const,
}

export function SearchBox({ onSelect, placeholder = 'Search location...' }: SearchBoxProps) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const { results, loading } = useNominatim(open ? query : '')
  const { flyTo } = useMap()

  function handleSelect(loc: Location) {
    flyTo({ lat: loc.lat, lon: loc.lon, zoom: 13 })
    setQuery(loc.name.split(',')[0]) // Show short name in input
    setOpen(false)
    onSelect?.(loc)
  }

  return (
    <div style={styles.wrapper}>
      <input
        style={styles.input}
        value={query}
        placeholder={loading ? 'Searching…' : placeholder}
        onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
      {open && results.length > 0 && (
        <ul style={styles.dropdown}>
          {results.map((loc, i) => (
            <li
              key={i}
              style={styles.item}
              onMouseDown={() => handleSelect(loc)}
            >
              {loc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
