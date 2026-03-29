import { useMapInstance } from '../context/MapContext'
import type { FlyToOptions, LatLon, MapBounds } from '../types'

/**
 * Public hook for programmatic map control.
 * Must be used inside a <Map /> component tree.
 */
export function useMap() {
  const map = useMapInstance()

  if (!map) {
    throw new Error('[TerrainX] useMap() must be used inside a <Map /> component.')
  }

  return {
    /** Animate the map to a new location. */
    flyTo({ lat, lon, zoom }: FlyToOptions): void {
      map.flyTo({ center: [lon, lat], ...(zoom !== undefined ? { zoom } : {}) })
    },

    /** Set the zoom level without changing the center. */
    setZoom(level: number): void {
      map.setZoom(level)
    },

    /** Get the current map center as { lat, lon }. */
    getCenter(): LatLon {
      const c = map.getCenter()
      return { lat: c.lat, lon: c.lng }
    },

    /** Get the current visible bounds of the map. */
    getBounds(): MapBounds {
      const b = map.getBounds()
      return {
        north: b.getNorth(),
        south: b.getSouth(),
        east: b.getEast(),
        west: b.getWest(),
      }
    },
  }
}
