import type { LayerSpecification } from 'maplibre-gl'
import type { MapTheme } from '../../types'

const SOURCE = 'planet'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LINE_FILTER: any = ['match', ['geometry-type'], ['LineString', 'MultiLineString'], true, false]

/** Rail lines. */
export function buildTransportLayers(theme: MapTheme): LayerSpecification[] {
  return [
    {
      id: 'rail',
      type: 'line',
      source: SOURCE,
      'source-layer': 'transportation',
      filter: [
        'all',
        LINE_FILTER,
        ['match', ['get', 'class'], ['rail', 'transit'], true, false],
      ],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': theme.rail,
        'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.4, 10, 1, 18, 1.5],
        'line-opacity': 0.6,
        'line-dasharray': [2, 1.6],
      },
    },
  ]
}
