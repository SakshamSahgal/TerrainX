import type { ThemePreset } from '../types'

export const nature: Record<string, ThemePreset> = {
  sage: {
    name: 'Sage', description: 'Muted botanical tones with cool green roads and gentle contrast.',
    ui: { bg: '#DDE8DD', text: '#2D4739' },
    map: {
      land: '#DDE8DD', water: '#C5D4CB', waterway: '#C5D4CB',
      parks: '#D3DFD7', buildings: '#8BAD9B', aeroway: '#D3DFD7', rail: '#2d4739',
      roads: { major: '#3F624F', minor_high: '#587A68', minor_mid: '#92B4A2', minor_low: '#AABFB4', path: '#BECCBF', outline: '#C8D8CC' },
    },
  },
  forest: {
    name: 'Forest', description: 'Deep greens and sage tones - organic botanical aesthetic.',
    ui: { bg: '#F0F4F0', text: '#2D4A3E' },
    map: {
      land: '#F0F4F0', water: '#B8D4D4', waterway: '#B8D4D4',
      parks: '#D4E8D4', buildings: '#8AB19A', aeroway: '#D4E8D4', rail: '#2d4a3e',
      roads: { major: '#3A5E4D', minor_high: '#527A66', minor_mid: '#90B4A0', minor_low: '#A8C4B4', path: '#C2D4CA', outline: '#CEDBD2' },
    },
  },
  ocean: {
    name: 'Ocean', description: 'Various blues and teals - perfect for coastal cities.',
    ui: { bg: '#F0F8FA', text: '#1A5F7A' },
    map: {
      land: '#F0F8FA', water: '#B8D8E8', waterway: '#B8D8E8',
      parks: '#D8EAE8', buildings: '#67AED0', aeroway: '#D8EAE8', rail: '#1a5f7a',
      roads: { major: '#14536A', minor_high: '#2878A0', minor_mid: '#7ABCD4', minor_low: '#AACCE0', path: '#BCD8E8', outline: '#CCE4F0' },
    },
  },
  pastel_dream: {
    name: 'Pastel Dream', description: 'Soft muted pastels with dusty blues and mauves - dreamy artistic aesthetic.',
    ui: { bg: '#FAF7F2', text: '#5D5A6D' },
    map: {
      land: '#FAF7F2', water: '#D4E4ED', waterway: '#D4E4ED',
      parks: '#E8EDE4', buildings: '#CEC3CB', aeroway: '#E8EDE4', rail: '#5d5a6d',
      roads: { major: '#6870A0', minor_high: '#9898B8', minor_mid: '#C4C2D0', minor_low: '#CCCCDA', path: '#D8D8E2', outline: '#E0E0E8' },
    },
  },
}
