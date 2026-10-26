# Feature: Site foundation

## Purpose
Ship the shell every page will live in: a Next.js app with the design system's tokens and type, a working header/footer, real metadata, and three reachable routes. No page content yet — after this feature, features 2–4 only add sections inside an already-correct frame.

## User Flow
1. A visitor lands on any of `/`, `/work`, `/about` and gets the same header, footer and typographic rhythm.
2. The header shows the wordmark **Petlong**, links to Work and About, and one action: download CV.
3. The visitor always knows which page they are on (current nav item marked in text, not only by colour).
4. On a phone the nav collapses but keeps all three destinations and the CV action reachable.
5. Any unknown URL returns a styled 404 that routes back to Home.
6. Sharing any URL produces a sensible title, description and preview.

## Rules
- Design system comes from the Hallmark **Studio** theme (tokens, Hedvig Letters Serif + Geist, cool paper ground, one cadmium-orange signal) via `theme.mjs scaffold`, not hand-invented values.
- Every colour, font and spacing value used in components resolves to a token; no literal hex or `font-family` in JSX or component CSS.
- The visible name is **Petlong**; "Petlong Dakhling" appears only in `<title>`, meta description, Open Graph and the footer colophon.
- The role line is: *Climate change and energy analyst working on ESG, climate risk and gender equality.*
- Contact is a `mailto:markpetlong@gmail.com` link plus `linkedin.com/in/petlong-dakhling`; no form, no JavaScript handler.
- CV actions read from `site.cvAvailable`. It is now `true`: every CV link points at `/cv/Petlong-Dakhling-CV.pdf` with a `download` attribute. Flipping the flag back to `false` returns the same links to a mailto with the subject "CV request". No link ever points at a missing file.
- No analytics, cookies, third-party scripts or external font requests.
- Server Components only. The mobile nav uses `<details>`/`<summary>` so no client component is needed. For the same reason the nav does not mark the current page with `aria-current`: the shell is static and zero-JS, and each page names itself in its `h1`.
- Shell must remain legible with images absent — it is a type-led design.

## Acceptance Criteria
- [x] `pnpm build` succeeds with zero TypeScript or ESLint errors; `pnpm lint` is clean.
- [x] `/`, `/work` and `/about` all return 200 and share identical header/footer markup.
- [x] An unknown route returns the styled 404 with status 404.
- [x] Each page has exactly one `<h1>`; headings descend without skipping.
- [x] Keyboard tab order starts at a skip link, then wordmark, nav, CV action, page content, footer links; every focus stop has a visible `:focus-visible` ring.
- [x] At 375, 768, 1280, 1440 and 1920 the header does not wrap or overflow (`overflow-x: clip` on `html` and `body`).
- [x] `prefers-reduced-motion: reduce` removes all transitions/animations; content is visible with JS disabled.
- [x] `<title>` on `/` reads "Petlong Dakhling — Climate change and energy analyst"; `/work` and `/about` use the `%s · Petlong Dakhling` template.
- [x] `/sitemap.xml` and `/robots.txt` are generated and list the three routes with the production origin.
- [x] No request leaves the origin for fonts, analytics or images.
- [x] Hallmark `sloplint --render` reports 0 FAIL.
