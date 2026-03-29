# `<Map />`

[[../components|← Components]] | [[../api|API Reference]]

> Root component. All other components must be children of this.

---

## Usage

```tsx
import { Map } from 'terrainx'

<Map
  center={{ lat: 28.6, lon: 77.2 }}
  zoom={12}
  theme="midnight_blue"
  height="500px"
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `center` | `{ lat, lon }` | required | Initial map center |
| `zoom` | `number` | `10` | Initial zoom (1–20) |
| `theme` | `string \| MapTheme` | `"coral"` | See [[../themes]] |
| `height` | `string` | `"100%"` | CSS height |
| `width` | `string` | `"100%"` | CSS width |
| `onMove` | `(center, zoom) => void` | — | Fires on pan/zoom |
| `onClick` | `({ lat, lon }) => void` | — | Fires on map click |
| `children` | `ReactNode` | — | Markers, Routes, Polygons etc. |

---

## Notes

- Requires **WebGL** — shows an error message if unavailable
- Fetches tile data from [[../apis#OpenFreeMap|OpenFreeMap]] on mount
- `theme` accepts either a key string (`"noir"`) or a full [[../theming|theme object]]

---

## Related

- [[Marker]] — drop pins on the map
- [[Route]] — draw paths
- [[Polygon]] — highlight regions
- [[../hooks/useMap|useMap()]] — programmatic control
