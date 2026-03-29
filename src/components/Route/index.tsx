import { useEffect, useRef } from 'react'
import { useMapInstance } from '../../context/MapContext'
import type { RouteProps } from '../../types'

let counter = 0
const uid = () => `tx-route-${++counter}`

function toGeoJSON(points: RouteProps['points']) {
  return {
    type: 'Feature' as const,
    geometry: {
      type: 'LineString' as const,
      coordinates: points.map((p) => [p.lon, p.lat]),
    },
    properties: {},
  }
}

export function Route({
  points,
  color = '#3498db',
  width = 3,
  dashed = false,
  opacity = 1,
}: RouteProps) {
  const map = useMapInstance()
  const id = useRef(uid()).current

  useEffect(() => {
    if (!map || points.length < 2) return

    const addLayers = () => {
      if (map.getSource(id)) return // already added

      map.addSource(id, { type: 'geojson', data: toGeoJSON(points) })
      map.addLayer({
        id,
        type: 'line',
        source: id,
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': color,
          'line-width': width,
          'line-opacity': opacity,
          ...(dashed ? { 'line-dasharray': [2, 2] } : {}),
        },
      })
    }

    // Add immediately if style is loaded, then re-add on every style change
    if (map.isStyleLoaded()) addLayers()
    map.on('style.load', addLayers)

    return () => {
      map.off('style.load', addLayers)
      if (map.getLayer(id)) map.removeLayer(id)
      if (map.getSource(id)) map.removeSource(id)
    }
  }, [map, id, points, color, width, dashed, opacity])

  return null
}
