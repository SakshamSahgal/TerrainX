# `<Route />`

[[../components|← Components]]

> Draws a line through an ordered list of coordinates on the map.

---

## Usage

```tsx
// Simple route
<Route
  points={[
    { lat: 28.6, lon: 77.2 },
    { lat: 19.0, lon: 72.8 },
    { lat: 12.9, lon: 77.5 },
  ]}
/>

// Styled
<Route
  points={[...]}
  color="#e74c3c"
  width={4}
  dashed
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `points` | `{ lat, lon }[]` | required | Ordered coordinate list |
| `color` | `string` | `"#3498db"` | Line color |
| `width` | `number` | `3` | Line width in px |
| `dashed` | `boolean` | `false` | Render as dashed line |
| `opacity` | `number` | `1` | Line opacity (0–1) |

---

## Notes

- Must be a child of `<Map />`
- Points are connected **in order** — sequence matters
- Rendered as a MapLibre `GeoJSON` line layer under the hood
- Use multiple `<Route />` components to draw several independent paths

---

## Related

- [[Polygon]] — for closed filled shapes
- [[Map]] — parent component
