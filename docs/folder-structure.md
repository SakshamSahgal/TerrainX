# Folder Structure

[[index|← Back]]

---

## Full Layout

```
TerrainX/
├── docs/                         ← Obsidian vault (you are here)
├── src/
│   ├── index.ts                  ← Public exports (components, hooks, types)
│   ├── types.ts                  ← All TypeScript interfaces
│   ├── context/
│   │   └── MapContext.ts         ← React context holding the MapLibre instance
│   ├── hooks/
│   │   └── useMap.ts             ← Public useMap() hook (flyTo, setZoom, etc.)
│   ├── themes/
│   │   ├── index.ts              ← resolveTheme() + themes registry
│   │   ├── warm.ts               ← coral, copper, rustic, terracotta, japanese_ink
│   │   ├── dark.ts               ← heatwave, ruby, midnight_blue, neon, emerald, noir
│   │   ├── nature.ts             ← sage, forest, ocean, pastel_dream
│   │   └── special.ts           ← blueprint, contrast_zones, copper_patina
│   ├── style/
│   │   ├── mapStyle.ts           ← Assembles MapLibre StyleSpecification
│   │   ├── source.ts             ← OpenFreeMap tile source definition
│   │   └── layers/
│   │       ├── base.ts           ← background, park, water, aeroway, building
│   │       ├── transport.ts      ← rail
│   │       └── roads.ts          ← road-casing + road (match expression per class)
│   └── components/
│       ├── Map/index.tsx         ← Root map component, MapLibre init
│       ├── Marker/
│       │   ├── index.tsx         ← Marker component
│       │   └── markerElement.ts  ← DOM factory for pin/dot/image icons
│       ├── Popup/index.tsx       ← Props carrier, renders null (Marker reads it)
│       ├── Route/index.tsx       ← Polyline via GeoJSON source + line layer
│       ├── Polygon/index.tsx     ← Filled shape via GeoJSON fill + line layers
│       └── SearchBox/
│           ├── index.tsx         ← Search input + dropdown
│           └── useNominatim.ts   ← Debounced Nominatim fetch hook
├── package.json
├── vite.config.ts                ← Library mode build (ESM + UMD)
└── tsconfig.json
```

---

## What gets exported from `index.ts`

```ts
// Components
export { Map, Marker, Popup, Route, Polygon, SearchBox }

// Hooks
export { useMap }

// Themes
export { themes, resolveTheme, DEFAULT_THEME }

// Types
export type { LatLon, Location, MapBounds, MapTheme, ... }
```

---

## Build Output (`dist/`)

After `npm run build`:

```
dist/
├── index.es.js     ← ESM bundle (for Vite/webpack projects)
├── index.umd.js    ← UMD bundle (for CDN / non-bundler use)
├── index.d.ts      ← TypeScript declarations
└── style.css       ← MapLibre base CSS — import this in your app
```

Consumer install:
```bash
npm install ../TerrainX
```

Consumer usage:
```tsx
import 'terrainx/dist/style.css'   // required once in your app entry
import { Map, Marker } from 'terrainx'
```
