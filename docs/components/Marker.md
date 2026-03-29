# `<Marker />`

[[../components|← Components]]

> Drops a pin at a coordinate. Optionally shows a [[Popup]] on click.

---

## Usage

```tsx
// Simple pin
<Marker lat={28.6} lon={77.2} />

// With label and color
<Marker lat={28.6} lon={77.2} color="red" label="New Delhi" />

// With popup
<Marker lat={28.6} lon={77.2}>
  <Popup>
    <strong>New Delhi</strong>
    <p>Capital of India</p>
  </Popup>
</Marker>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `lat` | `number` | required | Latitude |
| `lon` | `number` | required | Longitude |
| `color` | `string` | `"#e74c3c"` | Pin color (any CSS color) |
| `label` | `string` | — | Text shown below the pin |
| `icon` | `string` | `"pin"` | Icon name or image URL |
| `size` | `number` | `24` | Marker size in px |
| `children` | `ReactNode` | — | A `<Popup />` component |

---

## Notes

- Must be a child of `<Map />`
- If `children` is provided, clicking the marker opens the [[Popup]]
- `icon` can be a preset name (`"pin"`, `"dot"`, `"star"`) or any image URL

---

## Related

- [[Popup]] — info card shown on click
- [[Map]] — parent component
