import type { LayerSpecification } from 'maplibre-gl'
import type { MapTheme } from '../../types'

const SOURCE = 'planet'

/** Background, land features, water, buildings, airports. */
export function buildBaseLayers(theme: MapTheme): LayerSpecification[] {
  return [
    {
      id: 'background',
      type: 'background',
      paint: { 'background-color': theme.land },
    },
    {
      id: 'park',
      type: 'fill',
      source: SOURCE,
      'source-layer': 'park',
      paint: { 'fill-color': theme.parks },
    },
    {
      id: 'water',
      type: 'fill',
      source: SOURCE,
      'source-layer': 'water',
      paint: { 'fill-color': theme.water },
    },
    {
      id: 'waterway',
      type: 'line',
      source: SOURCE,
      'source-layer': 'waterway',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': theme.waterway,
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.2, 12, 0.8, 18, 2.4],
      },
    },
    {
      id: 'aeroway',
      type: 'fill',
      source: SOURCE,
      'source-layer': 'aeroway',
      filter: ['match', ['geometry-type'], ['Polygon', 'MultiPolygon'], true, false],
      paint: { 'fill-color': theme.aeroway, 'fill-opacity': 0.85 },
    },
    {
      id: 'building',
      type: 'fill',
      source: SOURCE,
      'source-layer': 'building',
      minzoom: 8,
      paint: { 'fill-color': theme.buildings, 'fill-opacity': 0.84 },
    },
  ]
}
