import { useEffect, useRef } from 'react'
import { useMapInstance } from '../../context/MapContext'
import type { PolygonProps, LatLon } from '../../types'

let counter = 0
const uid = () => `tx-polygon-${++counter}`

function toGeoJSON(coords: LatLon[]) {
  const ring = [...coords.map((p) => [p.lon, p.lat])]
  // Close the ring if not already closed
  const first = ring[0]
  const last = ring[ring.length - 1]
  if (first[0] !== last[0] || first[1] !== last[1]) ring.push(first)

  return {
    type: 'Feature' as const,
    geometry: { type: 'Polygon' as const, coordinates: [ring] },
    properties: {},
  }
}

export function Polygon({
  coordinates,
  fillColor = 'rgba(52,152,219,0.2)',
  borderColor = '#3498db',
  borderWidth = 2,
  opacity = 1,
}: PolygonProps) {
  const map = useMapInstance()
  const id = useRef(uid()).current
  const fillId = `${id}-fill`
  const lineId = `${id}-line`

  useEffect(() => {
    if (!map || coordinates.length < 3) return

    const addLayers = () => {
      if (map.getSource(id)) return

      map.addSource(id, { type: 'geojson', data: toGeoJSON(coordinates) })
      map.addLayer({
        id: fillId,
        type: 'fill',
        source: id,
        paint: { 'fill-color': fillColor, 'fill-opacity': opacity },
      })
      map.addLayer({
        id: lineId,
        type: 'line',
        source: id,
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': borderColor, 'line-width': borderWidth, 'line-opacity': opacity },
      })
    }

    if (map.isStyleLoaded()) addLayers()
    map.on('style.load', addLayers)

    return () => {
      map.off('style.load', addLayers)
      if (map.getLayer(lineId)) map.removeLayer(lineId)
      if (map.getLayer(fillId)) map.removeLayer(fillId)
      if (map.getSource(id)) map.removeSource(id)
    }
  }, [map, id, fillId, lineId, coordinates, fillColor, borderColor, borderWidth, opacity])

  return null
}
