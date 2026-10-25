# Technical Plan: Launch polish

## Components
- `app/layout.tsx` — root metadata, `viewport` (theme colour, light scheme), JSON-LD `Person`.
- `app/opengraph-image.tsx`, `app/twitter-image.tsx` — generated 1200×630 preview via `next/og`.
- `app/icon.svg` — leaf mark on the paper field.
- `app/sitemap.ts`, `app/robots.ts` — static routes from `content/site.ts`.
- `app/not-found.tsx` — styled 404.
- `lib/brand.ts` — sRGB mirror of the palette for the image generator (Satori cannot read CSS variables).
- `app/work/page.tsx`, `app/about/page.tsx` — per-page metadata and canonicals.

## Data Model
No new persisted data. Metadata derives from `SiteProfile`; the sitemap is a literal list of three URLs with a fixed `lastModified` so the route stays static.

## Flow
Build → metadata objects and file conventions → static HTML plus `/opengraph-image`, `/twitter-image`, `/sitemap.xml`, `/robots.txt`, `/icon.svg`.

## Notes
- `next/og` runs Satori, which requires explicit `display: flex` on every `div` with more than one child; the image component follows that.
- The sitemap's `lastModified` is fixed at 2026-10-25. Using `new Date()` at request time made the route dynamic under Cache Components; a constant keeps it prerendered. Update the constant when content changes.
- Deploy: `pnpm dlx vercel login` (or connect a GitHub remote in the Vercel dashboard), then `pnpm dlx vercel --prod`. Set the apex domain `petlongdakhling.site` and redirect `www` to it. `metadataBase` already points at the apex, so no code change is needed.
- Vercel does not need `vercel.json`; the framework and build command are detected from `package.json`.
