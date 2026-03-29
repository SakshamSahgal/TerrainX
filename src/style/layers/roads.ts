import type { LayerSpecification } from 'maplibre-gl'
import type { MapTheme } from '../../types'

const SOURCE = 'planet'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LINE_FILTER: any = ['match', ['geometry-type'], ['LineString', 'MultiLineString'], true, false]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NON_RAIL: any = ['match', ['get', 'class'], ['rail', 'transit'], false, true]

// Zoom-interpolated line widths for the casing (outline) layer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CASING_WIDTH: any = ['interpolate', ['linear'], ['zoom'], 4, 1.2, 8, 2.5, 12, 5, 16, 9]

// Zoom-interpolated line widths for the road fill layer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ROAD_WIDTH: any = ['interpolate', ['linear'], ['zoom'], 4, 0.5, 8, 1.2, 12, 2.5, 16, 5]

/**
 * Builds road casing (outline border) and road fill layers.
 * Colors are driven by a match expression on the 'class' property from OpenMapTiles.
 */
export function buildRoadLayers(theme: MapTheme): LayerSpecification[] {
  return [
    // Casing — drawn slightly wider under the road fill to create an outline effect
    {
      id: 'road-casing',
      type: 'line',
      source: SOURCE,
      'source-layer': 'transportation',
      filter: ['all', LINE_FILTER, NON_RAIL],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': theme.roads.outline,
        'line-width': CASING_WIDTH,
        'line-opacity': 0.7,
      },
    },

    // Road fill — color matched per road class
    {
      id: 'road',
      type: 'line',
      source: SOURCE,
      'source-layer': 'transportation',
      filter: ['all', LINE_FILTER, NON_RAIL],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': [
          'match', ['get', 'class'],
          ['motorway', 'trunk'],                                                    theme.roads.major,
          ['primary', 'secondary', 'primary_link', 'secondary_link',
            'motorway_link', 'trunk_link'],                                         theme.roads.minor_high,
          ['tertiary', 'tertiary_link', 'minor'],                                  theme.roads.minor_mid,
          ['path', 'pedestrian', 'cycleway', 'track', 'footway', 'bridleway'],    theme.roads.path,
          /* default — residential, service, unclassified, etc. */                 theme.roads.minor_low,
        ],
        'line-width': ROAD_WIDTH,
      },
    },
  ]
}
