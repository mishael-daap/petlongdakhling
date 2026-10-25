# Tasks: Launch polish

- [x] Add root metadata: `metadataBase`, title default and template, description, authors, canonical, robots.
- [x] Add per-page metadata and canonicals for `/work` and `/about`; use `title.absolute` on Home.
- [x] Generate the Open Graph image and wire the Twitter card to the same artwork.
- [x] Add `app/icon.svg` and remove the framework favicon.
- [x] Add `viewport` theme colour and light colour scheme.
- [x] Add JSON-LD `Person` matching the visible facts.
- [x] Make `sitemap.ts` static with a fixed `lastModified`; add `robots.ts` pointing at it.
- [x] Add the styled 404 and confirm it returns status 404.
- [x] Fix the mobile menu overflow found by sloplint (custom classes moved into `@layer components`).
- [x] Raise mobile menu link targets to 44px; give the wordmark a padded hit area.
- [x] Verify contrast ratios for every text/background pair in use.
- [x] Audit all routes at 375/768/1280/1440/1920: one `h1`, no overflow, no missing titles.
- [x] Confirm the production build prerenders every route as static and `pnpm lint` is clean.
- [ ] Deploy to Vercel with `petlongdakhling.site` and verify HTTPS.
- [ ] Run Lighthouse on the production URL; record scores here.
- [ ] Check the unfurl on LinkedIn after deploy (title, description, image).
