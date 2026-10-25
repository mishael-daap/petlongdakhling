# Tasks: Site foundation

- [x] Scaffold Next.js 16 into a temporary folder (create-next-app refuses a non-empty target) and move `app/`, `components/`, `public/`, configs and `package.json` into the repo; keep `ai/`, `BRIEF.md`, `DISCOVERY.md`.
- [x] Confirm TypeScript, ESLint, Tailwind v4 (via `@tailwindcss/turbopack`), pnpm as the package manager, and a passing `pnpm install`/`pnpm build`; remove the scaffold's demo styles and assets.
- [x] Run Hallmark `theme.mjs scaffold studio --dealt "3/3, seed personal-portfolio-climate-change-a6d3·74ceb1a9·2026-10-25·r0"`; `tokens.css` and `base.css` sit beside `globals.css`, imported directly after `@import "tailwindcss"`.
- [x] Write the Hallmark stamp (line 1), critique line and waivers at the top of `globals.css`.
- [x] Load Hedvig Letters Serif (400) and Geist through `next/font/google`, expose `--font-hedvig`/`--font-geist`, and map them to `--font-display`/`--font-body` in the `@theme inline` block.
- [x] Add `lib/types.ts` and `content/site.ts` with `SiteProfile` (names, role line, location, email, LinkedIn, CV path and availability flag, site URL, nav).
- [x] Build `SiteHeader`: wordmark, desktop nav, zero-JS `<details>` mobile nav, email action; 1px rule, proof surface, no overflow at 375/768/1280.
- [x] Build `SiteFooter`: mast layout, contact links (`mailto:`, LinkedIn, CV on request), colophon with full name and location.
- [x] Add `SkipLink` and `ButtonLink`; every button has an instant `:focus-visible` ring and a 48px minimum target, mobile menu links reach 44px.
- [x] Create `app/page.tsx`, `app/work/page.tsx`, `app/about/page.tsx` with one `<h1>` each (the stubs grew into features 2–4).
- [x] Add `app/not-found.tsx` in the site's voice with a link home; returns status 404.
- [x] Set root metadata in `app/layout.tsx` — `metadataBase`, `title.default` + `%s · Petlong Dakhling` template, description, Open Graph, icons — and per-page titles (`title.absolute` on Home).
- [x] Add `app/sitemap.ts` and `app/robots.ts` driven by `content/site.ts`, both prerendered.
- [x] Verify shell behaviour: tab order, skip link, `<h1>` count per page, 404, focus rings, reduced motion, JS-disabled rendering, no off-origin requests.
- [x] Run `pnpm build`; every route prerenders static, `/nope` returns 404, no console errors, `pnpm lint` clean.
- [x] Run Hallmark `sloplint --render`; fixed the mobile menu overflow (custom classes moved into `@layer components`), the missing `:active` states and the inline colour literals. Final: 0 FAIL, 1 WARN (85-word hero screen, accepted).
- [x] Add `public/cv/README.md` documenting the CV filename and the flag that switches the links; leave `public/images/` ready for feature 5.
- [ ] Deploy: blocked on Vercel auth (no CLI login and no git remote). Tracked in `ai/features/launch-polish/tasks.md`; local production build verified instead.
