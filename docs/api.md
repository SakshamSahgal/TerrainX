# API Reference

[[index|← Back]] | [[components|Components →]]

---

## `<Map />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `center` | `{ lat, lon }` | required | Initial map center |
| `zoom` | `number` | `10` | Initial zoom level (1–20) |
| `theme` | `string \| MapTheme` | `"light"` | See [[theming]] |
| `height` | `string` | `"100%"` | CSS height of map container |
| `width` | `string` | `"100%"` | CSS width of map container |
| `onMove` | `(center, zoom) => void` | — | Fires when map is panned/zoomed |
| `onClick` | `({ lat, lon }) => void` | — | Fires on map click |
| `children` | `ReactNode` | — | `<Marker>`, `<Route>`, `<Polygon>` etc. |

---

## `<Marker />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `lat` | `number` | required | Latitude |
| `lon` | `number` | required | Longitude |
| `color` | `string` | `"#e74c3c"` | Marker pin color |
| `label` | `string` | — | Text label below marker |
| `icon` | `string` | `"pin"` | Icon name or URL |
| `size` | `number` | `24` | Marker size in px |
| `children` | `ReactNode` | — | `<Popup>` content |

---

## `<Route />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `points` | `{ lat, lon }[]` | required | Ordered coordinate list |
| `color` | `string` | `"#3498db"` | Line color |
| `width` | `number` | `3` | Line width in px |
| `dashed` | `boolean` | `false` | Dashed line style |

---

## `<Polygon />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `coordinates` | `{ lat, lon }[]` | required | Polygon vertices |
| `fillColor` | `string` | `"rgba(52,152,219,0.2)"` | Fill color |
| `borderColor` | `string` | `"#3498db"` | Border color |
| `borderWidth` | `number` | `2` | Border width in px |

---

## `<SearchBox />`

| Prop | Type | Description |
|---|---|---|
| `onSelect` | `(loc: Location) => void` | Called with selected location |
| `placeholder` | `string` | Input placeholder text |

```ts
type Location = {
  name: string
  lat: number
  lon: number
}
```

---

## `useMap()` Hook

Must be used inside a `<Map />` tree.

```ts
const { flyTo, setZoom, getCenter, getBounds } = useMap()

flyTo({ lat: 48.8, lon: 2.3, zoom: 14 })
setZoom(10)
const center = getCenter()   // { lat, lon }
const bounds = getBounds()   // { north, south, east, west }
```
