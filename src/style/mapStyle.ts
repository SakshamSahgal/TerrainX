import type { StyleSpecification } from 'maplibre-gl'
import type { MapTheme } from '../types'
import { resolveTheme } from '../themes'
import { buildSource } from './source'
import { buildBaseLayers } from './layers/base'
import { buildTransportLayers } from './layers/transport'
import { buildRoadLayers } from './layers/roads'

const SOURCE_ID = 'planet'

/**
 * Generates a full MapLibre StyleSpecification from a theme.
 *
 * Layer draw order (back to front):
 *   background → parks → water → waterway → aeroway → buildings
 *   → rail → road-casing → road
 *
 * @param theme - a theme key string (e.g. "midnight_blue") or a full MapTheme object
 */
export function buildStyle(theme?: string | MapTheme): StyleSpecification {
  const resolved = resolveTheme(theme)

  return {
    version: 8,
    sources: {
      [SOURCE_ID]: buildSource(),
    },
    layers: [
      ...buildBaseLayers(resolved),
      ...buildTransportLayers(resolved),
      ...buildRoadLayers(resolved),
    ],
  }
}
