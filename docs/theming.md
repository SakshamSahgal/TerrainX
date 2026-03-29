# Theming

[[index|← Back]] | [[api|API →]] | [[themes|All Themes →]]

---

## Built-in Themes

20 curated palettes ported from TerraInk. See [[themes]] for the full list with previews.

**Quick picks:**

| Key | Feel |
|---|---|
| `coral` | Warm, light |
| `noir` | Minimal, dark |
| `midnight_blue` | Rich, dark |
| `blueprint` | Technical |
| `japanese_ink` | Minimal, light |
| `neon` | Bold, dark |

```tsx
<Map theme="midnight_blue" ... />
```

---

## Custom Theme

Pass a `theme` object to override any color:

```tsx
<Map
  theme={{
    land: "#1a1a2e",
    water: "#16213e",
    roads: { major: "#e94560", minor: "#444" },
    parks: "#0f3460",
    buildings: "#222",
  }}
/>
```

---

## Theme Shape

```ts
type MapTheme = {
  land: string        // background fill
  water: string       // lakes, oceans
  waterway: string    // rivers, streams
  parks: string       // green areas
  buildings: string   // building footprints
  aeroway: string     // airports
  rail: string        // railways
  roads: {
    major: string     // motorways
    minor_high: string
    minor_mid: string
    minor_low: string
    path: string      // walking/cycling paths
    outline: string   // road casing/border
  }
}
```

---

> Road colors are drawn in layers (outline → fill) so the `outline` color shows as a border around roads at higher zoom levels.
