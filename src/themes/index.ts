import { warm } from './warm'
import { dark } from './dark'
import { nature } from './nature'
import { special } from './special'
import type { MapTheme, ThemePreset } from '../types'

export const themes: Record<string, ThemePreset> = {
  ...warm,
  ...dark,
  ...nature,
  ...special,
}

export const DEFAULT_THEME = 'coral'

/** Resolves a theme key string or inline MapTheme object to a MapTheme. */
export function resolveTheme(theme?: string | MapTheme): MapTheme {
  if (!theme) return themes[DEFAULT_THEME].map

  // Already a full MapTheme object — use as-is
  if (typeof theme === 'object') return theme

  const preset = themes[theme]
  if (!preset) {
    console.warn(`[TerrainX] Unknown theme "${theme}". Falling back to "${DEFAULT_THEME}".`)
    return themes[DEFAULT_THEME].map
  }

  return preset.map
}

export type { ThemePreset }
