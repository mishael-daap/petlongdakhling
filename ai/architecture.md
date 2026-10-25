# Architecture

## Stack
- Frontend: **Next.js 16 (App Router) + TypeScript**, React Server Components by default.
- Styling: **Tailwind CSS v4**, wired through `@tailwindcss/turbopack`; tokens declared in `app/tokens.css` as an `@theme` block. No component library.
- Fonts: **`next/font`**, self-hosted. No external font CDN.
- Backend: none. No API routes, no server actions, no runtime data.
- Database: none. Page copy lives in typed TypeScript content modules.
- Other: **Vercel** for hosting and preview deploys; **pnpm 11** as the package manager; `next/image` for local images; `next/og` for the generated social image; `app/sitemap.ts`, `app/robots.ts`, JSON-LD `Person` and per-page metadata for SEO.

## System Structure
- `app/layout.tsx` — root shell: fonts, base metadata, header, footer, skip link.
- `app/page.tsx` — Home.
- `app/work/page.tsx` — the five projects.
- `app/about/page.tsx` — story, credentials, publications, contact.
- `app/not-found.tsx` — one honest 404 that routes back to Home.
- `app/globals.css` — the Hallmark stamp, Tailwind import, token imports, and the project's own component classes (inside `@layer components`).
- `app/tokens.css`, `app/base.css` — the Hallmark scaffold: palette, type scale, spacing and the base element rules.
- `app/icon.svg`, `app/opengraph-image.tsx`, `app/twitter-image.tsx` — site mark and generated 1200×630 preview.
- `components/` — small presentational pieces: `SiteHeader`, `SiteFooter`, `Section`, `ProjectEntry`, `CredentialGroup`, `CallToAction`, `PageIntro`.
- `content/` — the only place copy lives: `site.ts` (name, role line, contact, nav, CV state), `experience.ts` (the hero record), `story.ts`, `projects.ts`, `credentials.ts`, `publications.ts`.
- `lib/types.ts` — shared interfaces for the content modules. `lib/brand.ts` — the sRGB mirror of the palette for the OG image, which cannot read CSS variables.
- `public/` — `cv/` (the PDF and its README), `images/` once assets arrive, and `brand/` (the outlined "P." mark: `logo.svg` card, transparent marks, raster copies, README).

## Data Flow
Request → Vercel edge → statically pre-rendered HTML from `app/` pages reading `content/` modules at build time → browser. No API, no database, no client-side data fetching; the only interactivity is the mobile nav and the `mailto:`/PDF links.

## Core Entities
- **SiteProfile** — display name, metadata name, role line, location, email, LinkedIn URL, CV path, nav items.
- **Project** — slug, title, organisation, role, period, context, what she produced (list), outcome (optional — omitted rather than invented), and an optional image.
- **Credential** — title, issuer, date, area.
- **CredentialGroup** — area label, short framing line, ordered credentials.
- **Publication** — title, outlet, date, URL.
- **Story** — the origin paragraphs, in her words, plus the one idea she wants remembered.

## Key Decisions
- **Static-first, no backend.** Every page is pre-rendered at build; no route needs a request-time value. Any future need for dynamic behaviour gets discussed before a server dependency is added.
- **Server Components only.** Client components are avoided; the mobile nav uses `<details>` so the site ships with effectively zero JavaScript beyond Next's runtime.
- **Content in TypeScript modules, not MDX or a CMS.** The site is frozen after launch, the data is small, and typed objects make missing fields fail the build instead of shipping a blank space.
- **One CSS system, tokens first.** Colours, spacing and type come from `@theme` variables so a palette change is a one-file edit.
- **No third-party scripts.** No analytics, no cookie banner, no embeds, no external fonts or images.
- **The palette is green on recycled paper.** The Hallmark Studio structure (proof sheet, crop marks, serif, one signal) is kept, but the signal is forest green and the ground warm off-white at the owner's request: the site has to read as climate and sustainability work. Contrast measured: ink 15.5:1, ink-2 9.7:1, muted 5.4:1, white on green 6.5:1.
- **Zero client JavaScript.** The mobile nav is `<details>`/`<summary>`, so there is no `'use client'` boundary anywhere and the nav cannot mark the current page with `aria-current`; each page names itself in its `h1` instead.
- **The CV is a flag, not a file convention.** `site.cvAvailable` decides whether CV links download a PDF or open a mailto with the subject "CV request". No link points at a missing file.
- **Vercel is the target environment.** Default build, preview deploy per branch, production on `petlongdakhling.site`. No static export, so `next/image` optimisation stays available.
- **Accessibility is a build-time requirement**, not a polish task: AA contrast, visible keyboard focus, semantic landmarks, one `h1` per page, real link text.
- **Custom CSS lives in `@layer components`.** Unlayered rules beat Tailwind utilities in v4 and silently break `position`, padding and text-decoration overrides; the layer keeps utilities in control.

## Constraints
- Must use the App Router under `app/` (no `src/` directory) and pnpm for every install and script.
- Sitemap `lastModified` is a fixed date, not `new Date()`: the latter made the route dynamic under Cache Components.
- Avoid client-side state managers, UI kits, icon packages and animation libraries — a small hand-rolled SVG set and CSS transitions cover the design.
- Never render a placeholder as if it were a fact: placeholders are visually marked in the repo and removed before launch.
- All imagery must be local files in `public/images/` that Petlong owns; nothing hotlinked.
