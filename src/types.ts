import type { ReactNode } from 'react'

export interface LatLon {
  lat: number
  lon: number
}

export interface Location extends LatLon {
  name: string
}

export interface MapBounds {
  north: number
  south: number
  east: number
  west: number
}

export interface FlyToOptions extends LatLon {
  zoom?: number
}

export interface RoadColors {
  major: string
  minor_high: string
  minor_mid: string
  minor_low: string
  path: string
  outline: string
}

export interface MapTheme {
  land: string
  water: string
  waterway: string
  parks: string
  buildings: string
  aeroway: string
  rail: string
  roads: RoadColors
}

export interface ThemePreset {
  name: string
  description: string
  ui: { bg: string; text: string }
  map: MapTheme
}

// Component props

export interface MapProps {
  center: LatLon
  zoom?: number
  theme?: string | MapTheme
  height?: string
  width?: string
  onMove?: (center: LatLon, zoom: number) => void
  onClick?: (coords: LatLon) => void
  children?: ReactNode
}

export interface MarkerProps {
  lat: number
  lon: number
  color?: string
  label?: string
  icon?: string
  size?: number
  children?: ReactNode
}

export interface PopupProps {
  children: ReactNode
  maxWidth?: string
}

export interface RouteProps {
  points: LatLon[]
  color?: string
  width?: number
  dashed?: boolean
  opacity?: number
}

export interface PolygonProps {
  coordinates: LatLon[]
  fillColor?: string
  borderColor?: string
  borderWidth?: number
  opacity?: number
}

export interface SearchBoxProps {
  onSelect?: (location: Location) => void
  placeholder?: string
}
