# Studio Maya — Design System ("The Bench")

The visual identity for studiomaya.io. Source of truth for the look, the logo, and how to build new pages on-brand. Stylesheet: `maya.css`.

## Concept

Studio Maya is a one-person product studio: an embedded builder who takes founders from idea to a shipped product, and ships its own products. The name is Raymond Loewy's **MAYA** principle — *Most Advanced Yet Acceptable* — the line between novel and familiar.

The brand expresses **curiosity + play + art + science**, via one device: **sharpie × blueprint**. A confident, hand-drawn marker line (the play, the human) annotated with crisp blueprint precision — dimension lines, figure numbers, leader callouts (the rigor, the science). Everything sits on graph paper, like a working engineering notebook.

## Logo — "Maya"

A minimal hand-drawn robot (the curious AI builder). **Level-2 marker weight** is the locked version.

- **Primary mark:** rounded head, two dot eyes, red antenna light, side ports, straight "neutral" mouth.
- **Favicon / app icon:** `brand/maya/favicon.svg`.
- **Wordmark:** lowercase **`studio maya.`** — Space Grotesk 700, the period in signal-red.
- **Lockup:** mark + wordmark, horizontal (see nav). Stacked version for avatars/square.

**Expressions (Maya's moods)** — the mouth swaps by context. Keep this system:
| mouth | context |
|---|---|
| straight line | neutral · nav / default |
| smile | wins · testimonials |
| speaker grille | building · "on the bench" / WIP |
| open "o" | idea · curiosity / 404 |
| dotted line | thinking · loading / process |
| red check | shipped · outcomes / done |

**Inline mark** (paste into `<defs>`, reference with `<use href="#maya"/>`):
```html
<g id="maya">
  <g fill="none" stroke="#14110f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 32 L50 23"/>
    <path d="M30 34 Q26 34 26 41 L26 71 Q26 79 34 79 L66 79 Q74 79 74 71 L74 41 Q74 34 70 34 Z"/>
    <path d="M26 52 L20 52"/><path d="M74 52 L80 52"/>
    <path d="M42 67 L58 67"/>
  </g>
  <circle cx="50" cy="18" r="4.5" fill="#E63329"/>
  <circle cx="41" cy="55" r="4.8" fill="#14110f"/><circle cx="59" cy="55" r="4.8" fill="#14110f"/>
</g>
```
Note: the live SVGs use a fixed-seed roughen filter for marker character in exploration pages; the production mark is clean geometry (above). To redraw expressions, swap only the mouth path.

## Palette (tokens in `maya.css :root`)

| token | hex | use |
|---|---|---|
| `--paper` | `#F4F1E8` | page background |
| `--surface` | `#FBF9F2` | cards, bands |
| `--surface-2` | `#F0EBDD` | insets |
| `--ink` | `#14110f` | text, marker strokes |
| `--ink-soft` | `#4a443d` | body text |
| `--muted` | `#6a6258` | secondary text |
| `--faint` | `#9a9388` | captions, placeholders |
| `--blue` | `#0B3D91` | blueprint blue — primary accent, links, buttons |
| `--cyan` | `#2E6FE8` | blueprint line accent |
| `--red` | `#E63329` | signal red — sparingly (antenna, the period, key markers) |
| `--grid` | `rgba(11,61,145,0.07)` | the graph-paper lines (28px) |

Avoid: warm-near-black + gold (the old generic look), AI purple/violet, healthtech sky-blue.

## Type

- **Display:** **Space Grotesk** (700 headlines, 600 subheads) — geometric, engineered.
- **Body:** **Hanken Grotesk** (400/500).
- **Labels / figures / captions:** **JetBrains Mono** (uppercase, letter-spaced) — the "instrument" voice.
- Scale lives in `maya.css` (`.h1`, `.h2`, `.h2-sec`, `.h3`, `.h1-sub`, `.h2-sub`, `.lede`, `.body`, `.eyebrow`, `.meta-label`).

## Graphic system — sharpie × blueprint

- **Sharpie:** bold marker line, round caps/joins, `~4.5–5.5px`. Class `.sk`. Hand-drawn objects (products, devices), drawn confidently, slightly imperfect.
- **Blueprint:** thin blue lines (`.bp` 1.2px), dashed leaders (`.bpd`), dimension lines with arrowheads, `Fig. n` / `1a` labels in mono (`.fig`).
- **Graph paper:** the body background grid. The page is the working surface.
- **Devices to reuse:** exploded views with numbered leader callouts, dimension lines, blueprint "spec mode" (white-on-blue), annotated figures for metrics, Isotype-style flat pictograms for offers.
- Screenshots use `.shot` (brand-tinted field, set `--tint-a` on `<body>` per page). Empty `.shot.empty` shows a labelled placeholder.

## Voice

- Direct, confident, plain. Outcome-first.
- **No em dashes (—).** They read as AI-written. Use commas, periods, or colons. (En dashes in number ranges like `8–10`, `2025–present` are fine.)
- Never fabricate metrics or testimonials — use honest placeholders until real content lands.

## Components (in `maya.css`)

`nav.bar` + `.logo` · `.btn-primary` / `.btn-secondary` · `.hero` + `.hero-art` · `.eyebrow` / `.meta-label` · `.proof` / `.logos` · `.two-col` + `.pullquote` · `.offers` / `.offer` (homepage) and `.offer-lg` / `.spec` / `.steps` (offers page) · `.cards` / `.card` / `.quote-card` · case study: `.subhero` / `.crumb` / `.meta-strip` / `.metric-band` / `.case-sec` / `.artifacts` / `.cq-band` / `.nextcase` · `.final` CTA · `footer`.

## File map

```
maya.css                  # the design system (this doc's implementation)
brand/maya/favicon.svg    # Maya mark, favicon/app-icon
index.html                # homepage (reference implementation)
offers.html               # offers hub: three offers + how I work + Build Partner
offers/*.html             # offer pillar pages (prototype, workflow-automation, full-build)
work/*.html               # case studies (all-my-parts, reputable-health, practice-with-joy)
brand/*.html              # exploration archive (moodboards, concept boards, logo studies)
```

Single CTA across the site: **"Book a fit call"** → `https://cal.com/humayunkhan`.

## Illustration (spot art)

All illustration shares **one hand** so the logo, hero, portrait, and future spot art read as the same illustrator:

- **Bold, even, confident felt-tip MARKER outline** — thick uniform weight (matches the logo), rounded ends, gentle organic wobble (never ruler-straight).
- **Flat and minimal** — no cross-hatching, no shading. Iconic, reductive, generous negative space.
- **Cream paper** (`#F4F1E8`) ground.
- **Blueprint-blue annotation** (`#0B3D91`) is the connective device: thin dimension lines, leader-dot callouts, faint grid/brick behind the subject.
- **One small signal-red** (`#E63329`) accent per illustration.

Line-weight test: if it's finer or more cross-hatched than the Maya logo, it's off-style; push bolder and flatter.

### Pipeline (Gemini image-to-image)

Spot illustrations are generated with `gemini-3.1-flash-image-preview` via the **cortex** repo (which has `@google/genai` + `GEMINI_API_KEY` in `.env`). Pattern: `node --env-file=.env <script>.mjs` from `~/Development/humayunk/cortex`, feeding a reference photo (for portraits) or text-only (for objects) plus the locked style prompt below. Output PNGs saved to `studiomaya-static/brand/maya/`.

Locked style prefix:
> Hand-drawn illustration in a BOLD, EVEN, confident black felt-tip MARKER line style: thick uniform outlines, rounded ends, gentle organic wobble, FLAT and graphic with absolutely NO cross-hatching and NO shading. Warm cream paper background hex #F4F1E8. A few thin blueprint-blue (#0B3D91) dimension lines and small leader-dot annotation marks. One small signal-red (#E63329) accent. No text, no letters, no numbers, no signature.

Live assets: `brand/maya/portrait-min-2.png` (About), `brand/maya/hero-explode.png` (hero), `brand/maya/favicon.svg` (Maya mark).
