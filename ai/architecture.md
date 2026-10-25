# Architecture

## Stack
- Frontend: **Next.js (App Router) + TypeScript**, React Server Components by default.
- Styling: **Tailwind CSS v4** with design tokens declared in `globals.css` (`@theme`). No component library.
- Fonts: **`next/font`**, self-hosted. No external font CDN.
- Backend: none. No API routes, no server actions, no runtime data.
- Database: none. Page copy lives in typed TypeScript content modules.
- Other: **Vercel** for hosting and preview deploys; `next/image` for local images; `app/sitemap.ts`, `app/robots.ts`, and Vercel's static metadata for SEO.

## System Structure
- `app/layout.tsx` — root shell: fonts, base metadata, header, footer, skip link.
- `app/page.tsx` — Home.
- `app/work/page.tsx` — the five projects.
- `app/about/page.tsx` — story, credentials, publications, contact.
- `app/not-found.tsx` — one honest 404 that routes back to Home.
- `app/globals.css` — tokens (colour, spacing, type scale), base element styles, focus rings.
- `components/` — small presentational pieces: `SiteHeader`, `SiteFooter`, `Section`, `ProjectEntry`, `CredentialGroup`, `CallToAction`, `PageIntro`.
- `content/` — the only place copy lives: `site.ts` (name, role line, contact, nav), `story.ts`, `projects.ts`, `credentials.ts`, `publications.ts`.
- `lib/types.ts` — shared interfaces for the content modules, plus a small `seo.ts` metadata helper.
- `public/` — `cv/petlong-dakhling-cv.pdf`, and `images/` once assets arrive.

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
- **Vercel is the target environment.** Default build, preview deploy per branch, production on `petlongdakhling.site`. No static export, so `next/image` optimisation stays available.
- **Accessibility is a build-time requirement**, not a polish task: AA contrast, visible keyboard focus, semantic landmarks, one `h1` per page, real link text.

## Constraints
- Must use the App Router under `src/app` or `app`; pick one and stay consistent.
- Avoid client-side state managers, UI kits, icon packages and animation libraries — a small hand-rolled SVG set and CSS transitions cover the design.
- Never render a placeholder as if it were a fact: placeholders are visually marked in the repo and removed before launch.
- All imagery must be local files in `public/images/` that Petlong owns; nothing hotlinked.
