import type { SourceSpecification } from 'maplibre-gl'

const TILE_URL = 'https://tiles.openfreemap.org/planet'

/**
 * Builds the vector tile source pointing to OpenFreeMap.
 * MapLibre fetches the TileJSON manifest from this URL automatically,
 * then fetches individual tiles at /planet/{z}/{x}/{y}.pbf
 */
export function buildSource(): SourceSpecification {
  return {
    type: 'vector',
    url: TILE_URL,
    maxzoom: 14,
    attribution: '© <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
}
