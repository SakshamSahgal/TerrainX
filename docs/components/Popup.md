# `<Popup />`

[[../components|← Components]]

> A floating callout bubble anchored above a marker. Opens on click, closes on click outside.

---

## Usage

```tsx
<Marker lat={28.6} lon={77.2}>
  <Popup>
    <strong>New Delhi</strong>
    <p>Capital of India</p>
    <a href="#">More info</a>
  </Popup>
</Marker>
```

---

## How it looks

```
    ┌─────────────────┐
    │  New Delhi      │
    │  Capital of     │
    │  India          │
    └────────┬────────┘
             ▼
          📍 (marker)
```

- Floating card **anchored above the marker**
- Downward **arrow/caret** pointing to the pin
- **No backdrop** — map stays interactive behind it
- Closes on **click outside** or map pan

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Any React content to display |
| `maxWidth` | `string` | `"240px"` | Max width of the popup card |

---

## Notes

- Must be a direct child of `<Marker />`
- Not a modal — does **not** block map interaction
- Positioning and arrow are handled automatically by MapLibre's native Popup class

---

## Related

- [[Marker]] — parent component
