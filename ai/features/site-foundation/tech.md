# Technical Plan: Site foundation

## Components
- `app/layout.tsx` — root layout: font variables on `<html>`, skip link, `SiteHeader`, `<main id="main">`, `SiteFooter`, root metadata.
- `app/globals.css` — Hallmark stamp, `@import "tailwindcss"`, token layer, base element styles, the `.proof`/`.crop`/`.guide` primitives from the theme.
- `app/page.tsx`, `app/work/page.tsx`, `app/about/page.tsx` — stubs: `PageIntro` with the page's `<h1>` only.
- `app/not-found.tsx` — 404 in the site's own voice.
- `app/sitemap.ts`, `app/robots.ts` — generated from `content/site.ts`.
- `components/SiteHeader.tsx` — wordmark, desktop nav, `<details>` mobile nav, CV action.
- `components/SiteFooter.tsx` — mast: wordmark, role line, contact links, colophon ("Petlong Dakhling · Abuja, Nigeria").
- `components/PageIntro.tsx` — page label, `<h1>`, optional standfirst.
- `components/ui/SkipLink.tsx`, `components/ui/ButtonLink.tsx` — the two shared controls.
- `content/site.ts`, `lib/types.ts` — typed site profile consumed by layout, footer, sitemap and metadata.
- `public/cv/` — CV placeholder location; `public/images/` ready for feature 5.

## API
None. Static pages only.

## Data Model
```ts
// lib/types.ts
type NavItem = { href: '/' | '/work' | '/about'; label: string }
type SiteProfile = {
  displayName: string        // "Petlong"
  fullName: string           // "Petlong Dakhling" — metadata, colophon
  roleLine: string
  location: string           // "Abuja, Nigeria"
  email: string
  linkedinUrl: string
  cvPath: string             // "/cv/petlong-dakhling-cv.pdf"
  siteUrl: string            // "https://petlongdakhling.site"
  nav: NavItem[]
}
```

## Flow
Build time: `content/site.ts` → `layout.tsx` metadata + `SiteHeader`/`SiteFooter` render → Next pre-renders `/`, `/work`, `/about`, `/404`, `/sitemap.xml`, `/robots.txt` → Vercel serves static output.

## Design direction (Hallmark)
- Theme **Studio retuned to forest green on recycled paper** (the owner asked for a green, earth/sustainability register; the structure, crop marks and serif stay, the cadmium orange becomes a deep forest green and the cool studio white becomes warm recycled paper). Dealt 3/3 (`personal-portfolio-climate-change-a6d3·74ceb1a9·2026-10-25·r0`), genre **editorial**. Chosen because her material is documents and standards — the proof sheet, crop marks and metric guides read as work going through assurance, and the theme carries a page with no photography.
- Tokens: the palette lives in `app/tokens.css` as a Tailwind `@theme` block (paper `96.6% 0.014 106`, ink `22% 0.036 158`, accent `46% 0.112 155`), plus `@theme inline` for the two font families so they resolve the `next/font` variables. Measured contrast: ink 15.5:1, muted 5.4:1, white on green 6.5:1.
- Type: **Hedvig Letters Serif** 400 for display/wordmark only, tracking `-0.022em`, line-height 1.0; **Geist** 400/500 for body and labels. Two families, no third. Labels are Geist 500, one step smaller, sentence case, untracked.
- Shell: header edge-aligned — wordmark left, nav + CV action right, 1px ink rule under; footer as a mast, wordmark over contact links. Dot grid and grain only on header/footer/hero surfaces, never behind running text.
- Radius 3px, one shadow (`--shadow-sheet`) for paper objects only, orange reserved for the single CV action and construction rules.
- `prefers-reduced-motion` handled by the scaffold's base layer.

## Notes
- Next 16.4.3 defaults (`create-next-app --yes`) already include TypeScript, Tailwind v4 and the App Router. This scaffold wires Tailwind through `@tailwindcss/turbopack` in `next.config.ts` rather than PostCSS, so there is no `postcss.config.mjs` and the dependency snapshot reflects the scaffold, not the docs' PostCSS path. Package manager is **pnpm** (the scaffold produced a pnpm layout); `pnpm-workspace.yaml` carries `allowBuilds: unrs-resolver: true` so `pnpm install` does not fail on ignored build scripts.
- `title.template` does not apply to the segment that declares it — Home must set `title.absolute`, `/work` and `/about` set plain `title`.
- CV: `site.cvAvailable` is `false`, so every CV link renders "CV on request" as a mailto with subject "CV request". Flipping the flag in `content/site.ts` switches them to the PDF with `download`. This replaced the earlier placeholder-stub plan, which would have needed a disabled-looking control.
- Deployment to Vercel is the last task and needs the owner's Vercel login (`npx vercel login`) or a connected git remote. Until then, verification is `next build` + `next start` locally; the task records the blocked state rather than faking a deploy.
- Hallmark `theme.mjs log` gets one entry per build; `.hallmark/log.json` is committed so consecutive runs do not converge on the same direction.
