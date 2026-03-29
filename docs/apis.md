# APIs

[[index|← Back]]

> TerrainX uses two external APIs. Both are free with no authentication required.

---

## OpenFreeMap

**Purpose:** Serves the actual map tile data (roads, buildings, water, etc.)

### Request 1 — TileJSON manifest

Called **once on map load** to get the tile URL template and metadata.

```
GET https://tiles.openfreemap.org/planet
```

**Response:**
```json
{
  "tilejson": "3.0.0",
  "tiles": ["https://tiles.openfreemap.org/planet/{z}/{x}/{y}"],
  "minzoom": 0,
  "maxzoom": 14,
  "bounds": [-180, -85.05, 180, 85.05],
  "attribution": "© OpenMapTiles © OpenStreetMap"
}
```

---

### Request 2 — Vector tiles

Called **many times** as the user pans and zooms.

```
GET https://tiles.openfreemap.org/planet/{z}/{x}/{y}
```

| Param | Description |
|---|---|
| `z` | Zoom level (0–14) |
| `x` | Tile column |
| `y` | Tile row |

**Response:** Binary `.pbf` (Protocol Buffer) — decoded by MapLibre internally.

| | |
|---|---|
| Auth | None |
| Rate limit | Generous — fine for dev/test |
| Attribution required | Yes — `© OpenMapTiles © OpenStreetMap` |

---

## Nominatim

**Purpose:** Geocoding — converts a search string into coordinates.
Used only by [[components/SearchBox|`<SearchBox />`]].

```
GET https://nominatim.openstreetmap.org/search
```

**Query params:**

| Param | Value | Description |
|---|---|---|
| `q` | `"New Delhi"` | Search string |
| `format` | `"json"` | Response format |
| `limit` | `5` | Max number of results |

**Example:**
```
GET https://nominatim.openstreetmap.org/search?q=New+Delhi&format=json&limit=5
```

**Response:**
```json
[
  {
    "display_name": "New Delhi, Delhi, India",
    "lat": "28.6139391",
    "lon": "77.2090212"
  }
]
```

| | |
|---|---|
| Auth | None |
| Rate limit | **1 request/second** |
| Required header | `User-Agent: TerrainX/1.0` |
| Production use | Not recommended — dev/test only |

---

## Summary

| API | Called by | Auth | Rate limit |
|---|---|---|---|
| OpenFreeMap tiles | `<Map />` (via MapLibre) | None | Generous |
| Nominatim search | `<SearchBox />` | None | 1 req/sec |
