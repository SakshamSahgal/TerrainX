import type { ThemePreset } from '../types'

export const warm: Record<string, ThemePreset> = {
  coral: {
    name: 'Coral', description: 'Soft ivory base with warm coral roads and muted pink-blue features.',
    ui: { bg: '#F3E1DA', text: '#6E2F28' },
    map: {
      land: '#F3E1DA', water: '#DFC0B5', waterway: '#DFC0B5',
      parks: '#EACFC6', buildings: '#E39B89', aeroway: '#EACFC6', rail: '#6e2f28',
      roads: { major: '#B9473A', minor_high: '#C86050', minor_mid: '#E09888', minor_low: '#DDAA9A', path: '#E8C4B8', outline: '#EDD2C8' },
    },
  },
  copper: {
    name: 'Copper', description: 'Oxidized cream and copper tones with warm metallic road accents.',
    ui: { bg: '#E1D2C6', text: '#4E2F22' },
    map: {
      land: '#E1D2C6', water: '#CBB5A1', waterway: '#CBB5A1',
      parks: '#D8C6B5', buildings: '#C88B72', aeroway: '#D8C6B5', rail: '#4e2f22',
      roads: { major: '#7C452E', minor_high: '#9E5A3C', minor_mid: '#C49078', minor_low: '#C8A890', path: '#CEBAA6', outline: '#D4C2AE' },
    },
  },
  rustic: {
    name: 'Rustic', description: 'Earthy paper-like base with wood and clay road tones.',
    ui: { bg: '#DFD5C8', text: '#44362C' },
    map: {
      land: '#DFD5C8', water: '#C4B8A8', waterway: '#C4B8A8',
      parks: '#D2C6B7', buildings: '#9E7A62', aeroway: '#D2C6B7', rail: '#44362c',
      roads: { major: '#563A2A', minor_high: '#7A5040', minor_mid: '#A68070', minor_low: '#B89080', path: '#C6A898', outline: '#CCB0A0' },
    },
  },
  terracotta: {
    name: 'Terracotta', description: 'Mediterranean warmth - burnt orange and clay tones on cream.',
    ui: { bg: '#F5EDE4', text: '#8B4513' },
    map: {
      land: '#F5EDE4', water: '#A8C4C4', waterway: '#A8C4C4',
      parks: '#E8E0D0', buildings: '#D9A08A', aeroway: '#E8E0D0', rail: '#8b4513',
      roads: { major: '#A0522D', minor_high: '#C07048', minor_mid: '#DCA882', minor_low: '#D8B898', path: '#E4C8B0', outline: '#EAD4C0' },
    },
  },
  japanese_ink: {
    name: 'Japanese Ink', description: 'Traditional ink wash inspired - minimalist with subtle red accent.',
    ui: { bg: '#FAF8F5', text: '#2C2C2C' },
    map: {
      land: '#FAF8F5', water: '#E8E4E0', waterway: '#E8E4E0',
      parks: '#F0EDE8', buildings: '#959595', aeroway: '#F0EDE8', rail: '#2c2c2c',
      roads: { major: '#8B2500', minor_high: '#505050', minor_mid: '#A8A8A8', minor_low: '#BCBAB6', path: '#D0CECA', outline: '#DDDBD8' },
    },
  },
}
