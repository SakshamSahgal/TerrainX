import { createContext, useContext } from 'react'
import type { Map } from 'maplibre-gl'

/** Holds the raw MapLibre Map instance. Null until the map finishes loading. */
export const MapContext = createContext<Map | null>(null)

/**
 * Returns the raw MapLibre Map instance from context.
 * Used internally by Marker, Route, Polygon, etc.
 * For the public API use the `useMap()` hook instead.
 */
export function useMapInstance(): Map | null {
  return useContext(MapContext)
}
