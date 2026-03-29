# `useMap()`

[[../api|← API Reference]]

> Hook for programmatic map control. Must be used inside a `<Map />` tree.

---

## Usage

```tsx
import { useMap } from 'terrainx'

function MyControls() {
  const { flyTo, setZoom, getCenter, getBounds } = useMap()

  return (
    <button onClick={() => flyTo({ lat: 48.8, lon: 2.3, zoom: 14 })}>
      Go to Paris
    </button>
  )
}

// Must be rendered inside <Map />
<Map center={...} zoom={10}>
  <MyControls />
</Map>
```

---

## Methods

### `flyTo(options)`
Animates the map to a new location.

```ts
flyTo({
  lat: 48.8,
  lon: 2.3,
  zoom: 14,      // optional, keeps current zoom if omitted
})
```

---

### `setZoom(level)`
Sets zoom without changing the center.

```ts
setZoom(10)
```

---

### `getCenter()`
Returns the current map center.

```ts
const { lat, lon } = getCenter()
```

---

### `getBounds()`
Returns the current visible map bounds.

```ts
const { north, south, east, west } = getBounds()
```

---

## Notes

- Throws if used outside a `<Map />` tree
- All methods are synchronous except `flyTo` which is animated

---

## Related

- [[../components/Map|Map]] — the provider of this context
