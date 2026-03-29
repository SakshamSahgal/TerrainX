# Themes

[[theming|← Theming]] | [[index|Home]]

> All themes ported directly from [TerraInk](https://github.com/terraink). 20 curated palettes.

---

## Light / Warm

| Key | Name | Description |
|---|---|---|
| `coral` | Coral | Soft ivory base with warm coral roads |
| `copper` | Copper | Oxidized cream with warm metallic accents |
| `rustic` | Rustic | Earthy paper-like base with clay road tones |
| `terracotta` | Terracotta | Mediterranean warmth, burnt orange on cream |
| `japanese_ink` | Japanese Ink | Minimalist ink wash with subtle red accent |

---

## Dark / Moody

| Key | Name | Description |
|---|---|---|
| `heatwave` | Heatwave | Charred dark base with glowing orange roads |
| `ruby` | Ruby | Garnet reds over deep plum city blocks |
| `midnight_blue` | Midnight Blue | Deep navy with gold/copper roads |
| `neon` | Neon | Electric pink/cyan on near-black |
| `emerald` | Emerald City | Dark green with mint road accents |
| `noir` | Noir | Pure black with white/grey roads |

---

## Nature / Organic

| Key | Name | Description |
|---|---|---|
| `sage` | Sage | Muted botanical tones with cool green roads |
| `forest` | Forest | Deep greens and sage, organic aesthetic |
| `ocean` | Ocean | Blues and teals for coastal cities |
| `pastel_dream` | Pastel Dream | Soft dusty blues and mauves |

---

## Special / Technical

| Key | Name | Description |
|---|---|---|
| `blueprint` | Blueprint | Classic architectural drawing aesthetic |
| `contrast_zones` | Contrast | High contrast, strong urban density read |
| `copper_patina` | Copper Patina | Oxidized teal-green with copper accents |

---

## Usage

```tsx
// by key string
<Map theme="midnight_blue" ... />

// or inline custom (see theming.md)
<Map theme={{ land: "#0A1628", water: "#061020", ... }} />
```

---

## Theme Color Preview

### Dark themes
```
noir            ████ #000000  roads ░░░ #E8E8E8
heatwave        ████ #1C0E09  roads ░░░ #FF5F1F
midnight_blue   ████ #0A1628  roads ░░░ #C99C37
ruby            ████ #1A070F  roads ░░░ #C0103C
neon            ████ #0D0D1A  roads ░░░ #FF00F0
emerald         ████ #062C22  roads ░░░ #4ADEB0
```

### Light themes
```
coral           ████ #F3E1DA  roads ░░░ #B9473A
sage            ████ #DDE8DD  roads ░░░ #3F624F
terracotta      ████ #F5EDE4  roads ░░░ #A0522D
japanese_ink    ████ #FAF8F5  roads ░░░ #8B2500
blueprint       ████ #1A3A5C  roads ░░░ #D8EEFA
ocean           ████ #F0F8FA  roads ░░░ #14536A
```
