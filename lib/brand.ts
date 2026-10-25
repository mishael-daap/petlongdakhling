/**
 * Static brand colours for surfaces that cannot read CSS tokens (the generated
 * Open Graph image). Mirror of the palette in app/tokens.css — keep the two in
 * step: the values are the sRGB equivalents of those oklch tokens.
 */
export const brand = {
  paper: "#f5f5ea",
  paperHi: "#fcfbf6",
  ink: "#0a2014",
  ink2: "#304237",
  muted: "#57685e",
  rule: "#c3cec1",
  accent: "#056a3b",
} as const;
