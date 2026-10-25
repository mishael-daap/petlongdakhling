# Technical Plan: About page

## Components
- `app/about/page.tsx` — hero, background (education + certificates), writing, availability band.
- `components/PageIntro.tsx` — shared `h1` + lead block.
- `content/story.ts` — opening, current-role paragraph, availability.
- `content/education.ts` — the two degrees, with the university mark path.
- `content/credentials.ts` — four `CredentialGroup`s.
- `content/publications.ts` — three `Publication`s.
- `public/images/near-east-university.jpg` — the university mark, 400×400, rendered at 48px with `mix-blend-multiply` so its white field drops onto the paper.

## Data Model
```ts
EducationEntry { award: string; institution: string; years?: string; logo?: string }
CredentialGroup { area: string; credentials: Credential[] }
Credential { title: string; issuer: string; date?: string }
Publication { title: string; outlet: string; date: string; url: string }
```

## Flow
Build → content modules → static page. Education rows are flex (mark, award, institution); certificates render as 12-column rows (title 7, issuer 3, year 2) inside a `<details>`; the summary count is `reduce`d from the groups.

## Notes
- Years are optional on `EducationEntry`, so the row renders without a gap until the data exists.
- Credential dates are stored with the month and rendered as the year only on this page: the list is a scan, the CV carries the month.
- The university mark is decorative (`alt=""`) because the institution is named in text beside it; repeating it would double the announcement.
- `mix-blend-multiply` removes the JPEG's white field without editing the file; the mark's own colours are left untouched.
- The section anchor `#credentials` is kept even though the heading now reads "Background", so existing links from Home still land correctly.
