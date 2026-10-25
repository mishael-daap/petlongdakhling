# Tailwind CSS — docs snapshot

- **Version**: 4.3.3 (npm `latest`, checked 2026-10-25). CSS-first: no `tailwind.config.js` by default.
- **Source**: official docs (`tailwindcss.com/docs/theme`, `/functions-and-directives`, `/adding-custom-styles`, `/colors`, `/preflight`) plus the raw MDX from `github.com/tailwindlabs/tailwindcss.com` (`src/docs/`), fetched 2026-10-25.
- **Full pages**: `ai/dependencies/tailwindcss/raw/`.
- **Used for**: the token layer and all layout/styling. Read `theme.mdx` before inventing any token.

## Install in Next.js

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default { plugins: { '@tailwindcss/postcss': {} } }
```

```css
/* app/globals.css */
@import 'tailwindcss';
```

That single import brings in Preflight (base reset), the theme variables, and the utility generator. Content detection is automatic from the filesystem; add `@source "…"` only for files outside the project that contain class names.

## Theme variables (`@theme`)

```css
@theme {
  --font-sans: var(--font-geist), ui-sans-serif, system-ui, sans-serif;
  --color-paper: #f4f2ec;
  --color-ink: #14161a;
  --spacing: 0.25rem;
  --breakpoint-md: 48rem;
}
```

- Every variable in `@theme` becomes both a CSS custom property on `:root` and a utility namespace (`--color-ink` → `bg-ink`, `text-ink`, `border-ink`; `--font-sans` → `font-sans`).
- Namespaces are semantic: `--color-*`, `--font-*`, `--text-*` (size), `--spacing`, `--radius-*`, `--shadow-*`, `--ease-*`, `--animate-*`, `--breakpoint-*`, `--container-*`.
- **`@theme inline`** emits the utility with the variable's *value* inlined instead of a `var()` reference. Use it when a token points at another runtime variable (e.g. a `next/font` variable), so utilities resolve correctly.
- `--color-*: initial;` inside `@theme` wipes the default palette; we do not wipe it, we add our own names and leave the defaults available.
- Tokens belong in the theme block only. No literal hex values or `font-family` strings in component CSS or JSX (Hallmark Floor rule 1).

## Directives worth knowing

- `@utility name { … }` — a custom utility; `@apply` — inline utilities into a rule.
- `@custom-variant name (&:where(…))` — a custom variant.
- `@source`, `@reference` — scanning/import-context controls, not needed here.
- Arbitrary values (`p-[3px]`) work but bypass the token layer; only acceptable for one-off geometry, never for colour or type.

## Preflight notes

Preflight resets margins, headings and lists to unstyled defaults, `box-sizing: border-box`, and sets images/`svg` to `display: block`. Consequences for us:

- Every heading level needs explicit type styles; nothing inherits a default size.
- Lists need `list-style` restored where the design wants markers.
- Buttons and inputs inherit the page font only if explicitly set — do it once in the base layer.
- `next/image` output is already `display: block`, so no inline-image gap fix is needed.
