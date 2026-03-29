# TerrainX

> Reusable React map component library. Drop it into any project — render beautiful maps, pin locations, draw routes, search places.

[![npm](https://img.shields.io/npm/v/terrainx)](https://www.npmjs.com/package/terrainx)
[![license](https://img.shields.io/badge/license-MIT-blue)](#license)
[![docs](https://img.shields.io/badge/docs-live-blue)](https://sakshamsahgal.github.io/TerrainX)

**[View on npm →](https://www.npmjs.com/package/terrainx)**

---

## Features

- **20 curated themes** — dark, light, neon, blueprint, and more
- **Markers** with custom colors, icons, and click popups
- **Routes** — draw paths between coordinates
- **Polygons** — highlight regions and zones
- **Search** — location autocomplete via Nominatim (no API key)
- **Programmatic control** — `useMap()` hook for flyTo, zoom, bounds
- **Zero backend** — tiles served free by OpenFreeMap
- **TypeScript** — fully typed

---

## Install

```bash
npm install terrainx maplibre-gl
```

> `maplibre-gl` is a peer dependency — install it alongside TerrainX.

---

## Setup

Import the stylesheet once in your app entry file:

```tsx
import 'terrainx/dist/style.css'
```

---

## Usage

```tsx
import { Map, Marker, Popup, Route, Polygon, SearchBox } from 'terrainx'

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Map center={{ lat: 28.6, lon: 77.2 }} zoom={12} theme="midnight_blue">

        <SearchBox />

        <Marker lat={28.6} lon={77.2} color="#e74c3c" label="New Delhi">
          <Popup>
            <strong>New Delhi</strong>
            <p>Capital of India</p>
          </Popup>
        </Marker>

        <Route
          points={[{ lat: 28.6, lon: 77.2 }, { lat: 19.0, lon: 72.8 }]}
          color="#3b82f6"
          width={2}
        />

        <Polygon
          coordinates={[
            { lat: 28.9, lon: 76.9 },
            { lat: 28.9, lon: 77.5 },
            { lat: 28.3, lon: 77.5 },
            { lat: 28.3, lon: 76.9 },
          ]}
          fillColor="rgba(231,76,60,0.15)"
          borderColor="#e74c3c"
        />

      </Map>
    </div>
  )
}
```

---

## Themes

20 built-in themes. Pass as a string or a custom object.

```tsx
<Map theme="midnight_blue" ... />
<Map theme="neon" ... />
<Map theme="coral" ... />
```

| Dark | Light | Nature | Special |
|---|---|---|---|
| `midnight_blue` | `coral` | `sage` | `blueprint` |
| `heatwave` | `terracotta` | `forest` | `contrast_zones` |
| `ruby` | `copper` | `ocean` | `copper_patina` |
| `neon` | `rustic` | `pastel_dream` | |
| `emerald` | `japanese_ink` | | |
| `noir` | | | |

Full theme reference and custom theme docs at **[sakshamsahgal.github.io/TerrainX](https://sakshamsahgal.github.io/TerrainX)**

---

## Programmatic Control

```tsx
import { useMap } from 'terrainx'

function Controls() {
  const { flyTo, setZoom, getCenter, getBounds } = useMap()

  return (
    <button onClick={() => flyTo({ lat: 48.8, lon: 2.3, zoom: 14 })}>
      Go to Paris
    </button>
  )
}
```

---

## Usage Policy

`<SearchBox />` uses [Nominatim](https://nominatim.org/) for geocoding — free, no API key needed.
Not intended for high-traffic production use. Fine for personal and test projects.

---

## Attribution

If you use TerrainX, please credit it in your README or UI:
```
Map powered by TerrainX
```

---

## License

MIT — see [LICENSE](./LICENSE)

Theme palettes derived from [TerraInk](https://github.com/yousifamanuel/terraink) — see [NOTICE](./NOTICE)
