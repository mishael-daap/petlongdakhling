# Next.js — docs snapshot

- **Version**: 16.4.3 (npm `latest`, checked 2026-10-25) · React 19.3.1 · Node ≥ 20.9
- **Source**: official docs at nextjs.org, fetched 2026-10-25 as Markdown (`https://nextjs.org/docs/<path>.md`).
- **Full pages**: `ai/dependencies/nextjs/raw/` (filename = doc path with `/` → `_`).
- **Used for**: the whole site — App Router pages, metadata, fonts, images, Tailwind wiring, sitemap/robots, Vercel deploy.

## Create the app

```bash
npx create-next-app@latest . --yes
```

`--yes` takes the default setup: **TypeScript, ESLint, Tailwind CSS, App Router, Turbopack, `@/*` import alias, no `src/` directory, AGENTS.md**. Node 20.9+ required. Without `--yes` the CLI prompts for the same set.

## App Router conventions

- Every route is a folder under `app/`; `page.tsx` makes it a route, `layout.tsx` wraps it and persists across navigation.
- The **root layout** (`app/layout.tsx`) is required and must render `<html>` and `<body>`.
- A route segment's metadata comes from its own `layout.tsx`/`page.tsx` export — `metadata` (static object) or `generateMetadata` (async function). Both are **Server Components only**.
- `'use client'` at the top of a file marks a Client Component boundary. Server Components are the default; keep client components at the leaves.

## Metadata

```tsx
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://petlongdakhling.site'),
  title: { default: 'Petlong Dakhling — Climate change and energy analyst', template: '%s · Petlong Dakhling' },
  description: '…',
  openGraph: { type: 'website', url: '/', siteName: 'Petlong Dakhling', images: ['/og.png'] },
}
```

Gotchas verified in the reference:

- `metadataBase` lets URL fields below it be relative.
- `title.template` **applies only to child segments**, never to the segment that declares it. A `page.tsx` that defines its own `title` inside the same segment as the template will not get the template applied (a page is a terminal segment). Use `title.absolute` when you want a literal title.
- `title.default` is required when a template is set.
- Metadata is streamed separately for dynamic pages; our pages are static, so it is in the initial HTML.

## Fonts

```tsx
import { Geist, Hedvig_Letters_Serif } from 'next/font/google'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
```

- Self-hosted at build time: no request to Google from the browser, no layout shift.
- Expose each family as a CSS variable (`variable: '--font-…'`) and consume it from the token layer instead of using `className` on `<html>`, so tokens stay the single source of type.
- Apply the variables on `<html>` via `className={`${sans.variable} ${serif.variable}`}`.

## Images

```tsx
import Image from 'next/image'
import portrait from '@/public/images/portrait.jpg' // or '/images/portrait.jpg'

<Image src={portrait} alt="…" sizes="(min-width: 768px) 320px, 60vw" priority />
```

- Local images get width/height and a build-time hash automatically; `priority` only on the hero image.
- No remote images are used, so no `remotePatterns` config is needed.

## CSS / Tailwind v4

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

- Tailwind v4 has no `tailwind.config.js` by default — theme lives in CSS via `@theme`.
- Preflight is included by the import; our tokens layer sits after it.

## Sitemap, robots, 404

- `app/sitemap.ts` — default export returning `MetadataRoute.Sitemap` (`url`, `lastModified`, `changeFrequency`, `priority`). Cached by default.
- `app/robots.ts` — default export returning `MetadataRoute.Robots` (`rules`, `sitemap`).
- `app/not-found.tsx` — rendered for unmatched routes; Next injects `<meta name="robots" content="noindex">`. Next 16 also offers `app/global-not-found.tsx` for a 404 outside any layout; `not-found.tsx` inside the root layout is enough here.

## Deploy

- Vercel supports every feature; the site uses only static rendering, so every route is pre-rendered at build.
- `package.json` scripts must keep `dev` = `next dev`, `build` = `next build`, `start` = `next start`.
- Static export (`output: 'export'`) is **not** used: it disables `next/image` optimisation, which we want once photos land.
- No `vercel.json` needed for this project; framework detection and build settings are automatic.
