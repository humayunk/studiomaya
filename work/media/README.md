# Case-study hero videos

Drop your recordings here with these exact filenames. The moment a file lands, the
hero on that case study swaps from the placeholder to the video, no code change needed.

| Case study | Video file | Poster (optional) |
|---|---|---|
| All My Parts | `all-my-parts-hero.mp4` | `all-my-parts-hero-poster.jpg` |
| Reputable Health | `reputable-health-hero.mp4` | `reputable-health-hero-poster.jpg` |
| Practice with Joy | `practice-with-joy-hero.mp4` | `practice-with-joy-hero-poster.jpg` |

## Specs

- **Format:** MP4 (H.264). Add a `.webm` later if we want broader/lighter delivery.
- **Aspect:** the frame is 16:10; 16:9 fits fine (letterboxed slightly). Record landscape.
- **Behaviour:** autoplays, muted, loops, inline (so it plays on mobile). Keep it short, 5-15s loops read best.
- **Weight:** aim under ~5 MB each so pages stay fast. Trim length / lower bitrate before dropping in.
- **Poster** is the still shown before the video loads. Optional; if omitted, the frame just shows the placeholder label until the video is ready.

Static screenshots can replace the videos later by swapping the `<video>` for an `<img>` in each case study's hero, or we keep both.
