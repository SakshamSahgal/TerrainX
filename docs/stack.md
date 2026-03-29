# Stack

[[index|← Back]]

---

## Core Dependencies

| Package | Role |
|---|---|
| `maplibre-gl` | WebGL map renderer (peer dependency) |
| `react` | Component framework (peer dependency) |
| `react-dom` | `createRoot` for Popup React content |
| `typescript` | Type safety |
| `vite` + `vite-plugin-dts` | Library mode build + type declarations |

> Peer dependencies must be installed in the **consumer project**, not inside TerrainX itself.

---

## Map Data

**OpenFreeMap** (`tiles.openfreemap.org`)
- Free, no API key
- OpenStreetMap data, OpenMapTiles schema
- Vector tiles (`.pbf`) — fetched by MapLibre automatically

**Nominatim** (`nominatim.openstreetmap.org`)
- Free geocoding, no key needed
- Used only by `<SearchBox />`
- Requests are debounced at 400ms + AbortController for cleanup

---

## Build

Vite in **library mode** — outputs:

| File | Format | Use case |
|---|---|---|
| `dist/index.es.js` | ESM | Vite / webpack projects |
| `dist/index.umd.js` | UMD | CDN / non-bundler |
| `dist/index.d.ts` | TypeScript | Type checking |
| `dist/style.css` | CSS | MapLibre base styles |

```bash
npm run build
```

---

## Install in another project

```bash
npm install ../TerrainX        # local path
```

```tsx
// Once in your app entry file
import 'terrainx/dist/style.css'

// Then anywhere
import { Map, Marker, Popup } from 'terrainx'
```

---

## What's NOT included

- No backend or server
- No tile server (uses OpenFreeMap)
- No authentication anywhere
- No state persistence
