# Technical Plan: Home page

## Components
- `app/page.tsx` — hero, selected work, credentials statement, availability band.
- `components/ui/ButtonLink.tsx` — the single primary control.
- `content/experience.ts` — the three roles in the hero record.
- `content/projects.ts` — the first three entries feed Selected work.
- `content/site.ts` — stance sentence, email, LinkedIn, CV state.
- `public/images/petlong-dakhling.jpg` — the portrait, 400×400 source, rendered at 300px with `next/image`.

## Data Model
No new entities. `RecordEntry` (title, org, period, current) and `Project` (title, org, context) are read straight from the content modules at build time.

## Flow
Build → `content/*` → server components render static HTML → hero, work rows, statement, band.

## Notes
- Hero uses the Index posture: head, sentence and actions, then the record sheet set as a paper object (`.sheet`, `.crop`, one `.guide` rule). It is the page's signature and needs no photography.
- The record sheet is capped at the first screen on desktop so the next section never crowds the fold; the sloplint word count on that screen is 85 against an 80 target, recorded as a waiver.
- Selected work deliberately shows title, organisation and period only — context lines pushed the hero screen over the word budget and added nothing a recruiter needs before opening the project.
- Long job titles sit in `md:col-span-8` with `overflow-wrap: anywhere` so they never push the period column off the row.
- Hero grid is 8 and 4 columns: the headline takes two lines instead of three, and the portrait takes the last four at `max-w-[300px]` with `md:pl-4` and crop marks on a `figure` (a pseudo-element on `img` would not render). The 400px source is never displayed wider than 300.
- With the portrait, the hero ends at 724px on a 1280×800 screen and 824px at 1440×900, so the record sheet still lands inside the first screen.
