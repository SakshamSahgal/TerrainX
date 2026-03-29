import type { ThemePreset } from '../types'

export const dark: Record<string, ThemePreset> = {
  heatwave: {
    name: 'Heatwave', description: 'Charred dark base with glowing orange roads and sunlit highlights.',
    ui: { bg: '#1C0E09', text: '#FFD78A' },
    map: {
      land: '#1C0E09', water: '#2C140C', waterway: '#2C140C',
      parks: '#381A10', buildings: '#D2A55E', aeroway: '#381A10', rail: '#ffd78a',
      roads: { major: '#FF5F1F', minor_high: '#B04010', minor_mid: '#493623', minor_low: '#3c2a1b', path: '#59442c', outline: '#695235' },
    },
  },
  ruby: {
    name: 'Ruby', description: 'Garnet-inspired palette with rich reds over deep plum city blocks.',
    ui: { bg: '#1A070F', text: '#F6D7BC' },
    map: {
      land: '#1A070F', water: '#2A0D17', waterway: '#2A0D17',
      parks: '#351021', buildings: '#EE8EA4', aeroway: '#351021', rail: '#f6d7bc',
      roads: { major: '#C0103C', minor_high: '#780C2C', minor_mid: '#463132', minor_low: '#392427', path: '#553f3e', outline: '#654e4a' },
    },
  },
  midnight_blue: {
    name: 'Midnight Blue', description: 'Deep navy background with gold/copper roads - luxury atlas aesthetic.',
    ui: { bg: '#0A1628', text: '#D6B352' },
    map: {
      land: '#0A1628', water: '#061020', waterway: '#061020',
      parks: '#0F2235', buildings: '#6E5A45', aeroway: '#0F2235', rail: '#d6b352',
      roads: { major: '#C99C37', minor_high: '#8A6820', minor_mid: '#333530', minor_low: '#272c2e', path: '#414033', outline: '#4f4b36' },
    },
  },
  neon: {
    name: 'Neon', description: 'Dark background with electric pink/cyan - bold night city vibes.',
    ui: { bg: '#0D0D1A', text: '#00FFFF' },
    map: {
      land: '#0D0D1A', water: '#080815', waterway: '#080815',
      parks: '#17172A', buildings: '#007E99', aeroway: '#17172A', rail: '#00ffff',
      roads: { major: '#FF00F0', minor_high: '#9900BB', minor_mid: '#0a3d48', minor_low: '#0b2f3a', path: '#094e58', outline: '#095f68' },
    },
  },
  emerald: {
    name: 'Emerald City', description: 'Lush dark green aesthetic with mint accents.',
    ui: { bg: '#062C22', text: '#E3F9F1' },
    map: {
      land: '#062C22', water: '#0D4536', waterway: '#0D4536',
      parks: '#0F523E', buildings: '#1A785B', aeroway: '#0F523E', rail: '#e3f9f1',
      roads: { major: '#4ADEB0', minor_high: '#18A070', minor_mid: '#32554b', minor_low: '#25493f', path: '#42635a', outline: '#517268' },
    },
  },
  noir: {
    name: 'Noir', description: 'Pure black background with white/gray roads - modern gallery aesthetic.',
    ui: { bg: '#000000', text: '#FFFFFF' },
    map: {
      land: '#000000', water: '#0B0B0B', waterway: '#0B0B0B',
      parks: '#171717', buildings: '#6F6F6F', aeroway: '#171717', rail: '#ffffff',
      roads: { major: '#E8E8E8', minor_high: '#A0A0A0', minor_mid: '#333333', minor_low: '#242424', path: '#454545', outline: '#575757' },
    },
  },
}
