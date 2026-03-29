# `<SearchBox />`

[[../components|← Components]]

> Location search input. Uses Nominatim to find places, flies the map to the result.

---

## Usage

```tsx
<Map center={...} zoom={10}>
  <SearchBox
    onSelect={(location) => console.log(location)}
    placeholder="Search a city..."
  />
</Map>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `onSelect` | `(loc: Location) => void` | — | Called when user picks a result |
| `placeholder` | `string` | `"Search location..."` | Input placeholder text |

```ts
type Location = {
  name: string
  lat: number
  lon: number
}
```

---

## Behaviour

1. User types in the input
2. Requests are **debounced** (waits for user to stop typing)
3. Calls [[../apis#Nominatim|Nominatim]] with the search query
4. Shows a dropdown of results
5. On selection — map flies to the location, `onSelect` is called

---

## Notes

- Must be a child of `<Map />`
- Nominatim is rate limited to **1 req/sec** — the debounce handles this
- Not suitable for high-traffic production use — fine for personal/test projects
- No API key required

---

## Related

- [[../apis#Nominatim|Nominatim API]] — the geocoding service powering search
- [[Map]] — parent component
