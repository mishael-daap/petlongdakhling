# Feature: Launch polish

## Purpose
Make the site safe and presentable when a stranger opens it: correct titles and previews, a real 404, generated sitemap and robots, accessible controls, a fast static build, and a production domain.

## User Flow
1. Search engine or LinkedIn unfurls a link and shows the right title, description and image.
2. Visitor on a bad URL gets a styled 404 with a way home.
3. Keyboard and screen-reader users move through the same content as everyone else.
4. Petlong's domain serves the site over HTTPS.

## Rules
- Every route sets its own title; Home uses `title.absolute`, the others use the `%s · Petlong Dakhling` template.
- One social image, generated at build from the same palette — no stock photograph, no invented claim.
- No cookies, no analytics, no third-party requests: the build must show zero external network calls.
- Accessibility is a gate, not a checklist: AA contrast, visible focus, one `h1`, landmarks, real link names, working reduced-motion.
- Deployment is blocked until the owner authenticates Vercel or supplies a git remote; the blocked state is recorded rather than faked.

## Acceptance Criteria
- [x] `/`, `/work` and `/about` have distinct titles, descriptions and canonicals.
- [x] Open Graph and Twitter cards resolve to the generated 1200×630 image.
- [x] JSON-LD `Person` is present and matches the visible facts.
- [x] `/sitemap.xml` and `/robots.txt` are static at build and list the production origin.
- [x] Unknown routes return the styled 404 with status 404.
- [x] Favicon is a site mark, not the framework default.
- [x] `theme-color` matches the paper colour.
- [x] Contrast: ink 15.5:1, ink-2 9.7:1, muted 5.4:1, white on green 6.5:1.
- [x] No horizontal overflow at 375/768/1280/1440/1920 on any route.
- [x] `pnpm build` and `pnpm lint` pass; all routes prerender as static.
- [ ] Production deploy on `petlongdakhling.site` with a verified HTTPS certificate.
- [ ] Lighthouse run recorded against the production URL.
