# TerrainX

> A reusable React map component library. Drop it into any project, render beautiful maps, pin locations, draw routes.

## Quick Links

- [[components]] — What you can render
- [[data-flow]] — How tiles are fetched and rendered
- [[theming]] — Styling the map
- [[themes]] — All 20 theme palettes
- [[apis]] — External APIs used (OpenFreeMap, Nominatim)
- [[api]] — Props, hooks, and events
- [[stack]] — Tech decisions

## What It Is

A self-contained React component package. No backend. No API keys. Pulls map data from [OpenFreeMap](https://openfreemap.org) (free, OpenStreetMap-based).

```tsx
import { Map, Marker, Popup } from 'terrainx'

<Map center={{ lat: 28.6, lon: 77.2 }} zoom={12} theme="dark">
  <Marker lat={28.6} lon={77.2}>
    <Popup>New Delhi</Popup>
  </Marker>
</Map>
```

## Core Capabilities

| Feature | Component |
|---|---|
| Render a map | `<Map />` |
| Drop a pin | `<Marker />` |
| Info on click | `<Popup />` |
| Draw a path | `<Route />` |
| Highlight a region | `<Polygon />` |
| Search a location | `<SearchBox />` |
| Programmatic control | `useMap()` |
