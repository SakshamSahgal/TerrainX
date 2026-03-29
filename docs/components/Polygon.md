# `<Polygon />`

[[../components|← Components]]

> Draws a filled, outlined closed shape on the map. Good for zones, regions, and boundaries.

---

## Usage

```tsx
// Highlight a region
<Polygon
  coordinates={[
    { lat: 28.7, lon: 77.1 },
    { lat: 28.7, lon: 77.3 },
    { lat: 28.5, lon: 77.3 },
    { lat: 28.5, lon: 77.1 },
  ]}
  fillColor="rgba(231,76,60,0.2)"
  borderColor="#e74c3c"
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `coordinates` | `{ lat, lon }[]` | required | Polygon vertices (in order) |
| `fillColor` | `string` | `"rgba(52,152,219,0.2)"` | Fill color (use rgba for transparency) |
| `borderColor` | `string` | `"#3498db"` | Border/outline color |
| `borderWidth` | `number` | `2` | Border width in px |
| `opacity` | `number` | `1` | Overall opacity (0–1) |

---

## Notes

- Must be a child of `<Map />`
- The polygon is **auto-closed** — no need to repeat the first coordinate at the end
- Rendered as a MapLibre `GeoJSON` fill + line layer
- Use `rgba()` for `fillColor` to keep the map visible underneath

---

## Related

- [[Route]] — for open paths/lines
- [[Map]] — parent component
