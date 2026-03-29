import type { ThemePreset } from '../types'

export const special: Record<string, ThemePreset> = {
  blueprint: {
    name: 'Blueprint', description: 'Classic architectural blueprint - technical drawing aesthetic.',
    ui: { bg: '#1A3A5C', text: '#E8F4FF' },
    map: {
      land: '#1A3A5C', water: '#0E2740', waterway: '#0E2740',
      parks: '#1F466F', buildings: '#6EA4CC', aeroway: '#1F466F', rail: '#e8f4ff',
      roads: { major: '#D8EEFA', minor_high: '#7AAED0', minor_mid: '#435f7d', minor_low: '#375473', path: '#526c88', outline: '#607993' },
    },
  },
  contrast_zones: {
    name: 'Contrast', description: 'Strong contrast showing urban density - darker in center, lighter at edges.',
    ui: { bg: '#FFFFFF', text: '#111111' },
    map: {
      land: '#FFFFFF', water: '#B0B0B0', waterway: '#B0B0B0',
      parks: '#ECECEC', buildings: '#6C6C6C', aeroway: '#ECECEC', rail: '#111111',
      roads: { major: '#1A1A1A', minor_high: '#484848', minor_mid: '#989898', minor_low: '#B8B8B8', path: '#CCCCCC', outline: '#D8D8D8' },
    },
  },
  copper_patina: {
    name: 'Copper Patina', description: 'Oxidized copper aesthetic - teal-green patina with copper accents.',
    ui: { bg: '#E8F0F0', text: '#2A5A5A' },
    map: {
      land: '#E8F0F0', water: '#C0D8D8', waterway: '#C0D8D8',
      parks: '#D8E8E0', buildings: '#8AB6B6', aeroway: '#D8E8E0', rail: '#2a5a5a',
      roads: { major: '#B87333', minor_high: '#629898', minor_mid: '#A8CACA', minor_low: '#B8D4D4', path: '#C8DEDE', outline: '#D2E6E6' },
    },
  },
}
