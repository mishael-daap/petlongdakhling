# Brand mark

"P." set in Hedvig Letters Serif 400, drawn as outlines from the font (opsz 24) — no
font dependency, no `<text>` element, so it renders identically everywhere.

| File | Use |
|---|---|
| `logo.svg` | The card mark: paper "P." on forest green, 512×512, corner radius 36 |
| `logo.png`, `logo@1024.png` | Raster copies (transparent outside the card) for social previews and print |
| `logo-mark.svg` | The same "P." in forest green on transparent, for light surfaces |
| `logo-mark-reverse.svg` | Paper "P." on transparent, for green or dark surfaces |

The favicon is `app/icon.svg`, a copy of the card mark.

Colours come from `app/tokens.css`: accent `#056a3b`, paper-hi `#fcfbf6`.
Do not recolour, outline, shadow, rotate or add a second glyph. Keep clear space of at
least half the cap height on every side; the smallest legible size is 24px, where the card
still reads but the period starts to close.

To regenerate the outlines: instantiate Hedvig Letters Serif at `opsz 24`, export the `P`
and `period` glyphs with `SVGPathPen`, tighten the period by 24 font units, and scale by
0.4286 with the baseline at y=403.87 in a 512 viewBox.
