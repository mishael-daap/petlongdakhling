# Technical Plan: Content pass

## Components
- `content/projects.ts` — add optional `outcome` per project.
- `content/story.ts` — origin paragraph, education with institution.
- `content/site.ts` — `cvAvailable`, email, optional portrait path.
- `content/testimonials.ts` — new module, rendered on About between credentials and writing.
- `lib/types.ts` — `Project.outcome?`, `Testimonial`.
- `public/cv/`, `public/images/` — files.
- `app/about/page.tsx` — render testimonials and the portrait.

## Data Model
```ts
Project.outcome?: string          // one sentence, number with a source
Testimonial { quote: string; name: string; title: string; org?: string }
```

## Flow
Content module edit → build → static pages; no new routes.

## Notes
- Adding a portrait changes the About hero from a single column to a split. The grid is already 12 columns; no token changes.
- The CV download switch is a single boolean; every CV link already reads from `site.ts`.
- Testimonials render as blockquotes with a citation, never as cards with invented company logos.
