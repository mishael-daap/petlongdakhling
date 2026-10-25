# Technical Plan: About page

## Components
- `app/about/page.tsx` — story block, credentials, writing, availability band.
- `content/story.ts` — opening, practice paragraphs, education, availability.
- `content/credentials.ts` — four `CredentialGroup`s.
- `content/publications.ts` — three `Publication`s.

## Data Model
```ts
CredentialGroup { area: string; note: string; credentials: Credential[] }
Credential { title: string; issuer: string; date?: string }
Publication { title: string; outlet: string; date: string; url: string }
```

## Flow
Build → content modules → static page; credentials render as 12-column rows (title 7, issuer 3, date 2) and collapse to stacked lines under 48rem.

## Notes
- The page deliberately has no photograph slot until the content pass; the type and rules hold the layout, and adding a portrait later will be a split above the story, not a rebuild.
- `date` is optional so unverified completion dates render as empty rather than as a dash that looks like a value.
- The credentials section is anchored (`#credentials`) so the Home statement can link to it.
