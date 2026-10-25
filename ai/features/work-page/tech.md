# Technical Plan: Work page

## Components
- `app/work/page.tsx` — page intro, project list, closing band.
- `components/PageIntro.tsx` — shared `h1` + lead block.
- `content/projects.ts` — the five `Project` records.

## Data Model
```ts
Project {
  slug: string        // anchor id
  title: string
  org: string
  role: string
  period: string      // exact months on this page
  context: string     // one line of situation
  produced: string[]  // what she did, in her voice
}
```

## Flow
Build → `projects` array → one `<article>` per project, two columns above 48rem (header 5/12, body 7/12).

## Notes
- `outcome` is intentionally absent from the type: when verified numbers arrive, add `outcome?: string` and render it as a `dl` row rather than inventing a placeholder.
- The project header is a `dl` (organisation, role, period) so a screen reader gets label-value pairs instead of a run-on line.
- Section spacing uses `border-t` rules rather than cards, matching the proof-sheet direction.
