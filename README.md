# petlongdakhling

The portfolio site for Petlong Dakhling, a climate change and energy analyst based in Abuja,
Nigeria. Three pages, first person, built to support job applications: what she does, the work
she has delivered, and the credentials behind it.

Live at [petlongdakhling.site](https://petlongdakhling.site).

## Stack

- Next.js 16 (App Router, React Server Components), TypeScript
- Tailwind CSS v4, wired through `@tailwindcss/turbopack`
- Fonts self-hosted with `next/font`: Hedvig Letters Serif (display), Geist (body)
- No backend, no database, no client components, no analytics, no cookies
- Deployed on Vercel

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static production build
pnpm start      # serve the build
pnpm lint
```

## Where things live

```
app/            routes, layout, metadata, tokens.css, base.css, icon
components/     SiteHeader, SiteFooter, PageIntro, ui/
content/        all copy and data: site, experience, projects, credentials, publications, story
lib/            types and the sRGB palette mirror used by the OG image
public/         brand marks, CV slot, images
ai/             project docs: overview, architecture, roadmap, feature specs, dependency snapshots
```

Copy edits belong in `content/*.ts`, not in JSX. Colours and type come from `app/tokens.css`;
`app/globals.css` only holds component classes. The CV download switches on `cvAvailable` in
`content/site.ts` — see `public/cv/README.md`.

## Deploy

Vercel detects the framework. Point the apex domain `petlongdakhling.site` at the project and
redirect `www` to it; `metadataBase` already references the apex.
