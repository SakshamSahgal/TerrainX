# Data Flow

[[index|← Back]]

---

## How a Map Renders

```
<Map /> mounts
    ↓
MapLibre GL initializes with a Style Spec (JSON)
    ↓
GET https://tiles.openfreemap.org/planet   ← TileJSON manifest
    ↓
MapLibre calculates visible tiles for current viewport
    ↓
GET .../planet/{z}/{x}/{y}.pbf             ← Binary vector tile per tile square
    ↓
MapLibre decodes .pbf → raw geo features
    ↓
WebGL renders each layer (water, roads, buildings...)
  using colors from the active [[theming|theme]]
```

---

## What is a Vector Tile?

A `.pbf` file (Protocol Buffer binary). Each tile covers a square of the world at a given zoom level and contains named layers:

| Layer name | Contains |
|---|---|
| `transportation` | Roads, paths, rail |
| `water` | Lakes, oceans, rivers |
| `building` | Building footprints |
| `park` | Green areas |
| `aeroway` | Airports, runways |

MapLibre picks which layers to draw and in what color based on the style spec.

---

## Tile Source

**OpenFreeMap** — free, no API key, OpenStreetMap data.
- Tile URL: `https://tiles.openfreemap.org/planet`
- Max zoom stored in tiles: **14** (MapLibre overzooms above this)

---

## No Backend Needed

Everything runs in the browser. MapLibre fetches tiles directly from OpenFreeMap. TerrainX has zero server-side code.
