# TerrainX

A reusable React map component library. Drop it into any project, render beautiful maps, pin locations, draw routes.

[![Docs](https://img.shields.io/badge/docs-live-blue)](https://your-username.github.io/TerrainX)

## Quick Start

```bash
npm install ../TerrainX
```

```tsx
import 'terrainx/dist/style.css'
import { Map, Marker, Popup } from 'terrainx'

<Map center={{ lat: 28.6, lon: 77.2 }} zoom={12} theme="midnight_blue">
  <Marker lat={28.6} lon={77.2} color="#e74c3c">
    <Popup><strong>New Delhi</strong></Popup>
  </Marker>
</Map>
```

## Documentation

Full docs at **[your-username.github.io/TerrainX](https://your-username.github.io/TerrainX)**

## License

MIT with Attribution — if you use TerrainX in your project, please include one of:
- In your README: `Map powered by TerrainX`
- In your app UI: `Map powered by TerrainX`

See [LICENSE](./LICENSE) for full terms.
