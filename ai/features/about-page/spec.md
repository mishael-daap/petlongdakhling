# Feature: About page

## Purpose
Answer the questions a recruiter has after the work: what she has done, where she studied, what she is trained in, what she has published, and whether she is available where they are hiring.

## User Flow
1. Arrives from Home or the nav.
2. Reads the opening position and the current-role paragraph.
3. Sees Education first — Master of Laws (LLM), International Law and BA, International Relations, both Near East University, with the university mark beside each.
4. Expands "Certificates of completion" if they want the 18 courses, grouped by area.
5. Sees the three BellaNaija columns, each linking out.
6. Reads location and availability, then emails or asks for the CV.

## Rules
- Copy is first person and factual. No invented origin story: the "why sustainability" paragraph stays out until Petlong supplies it.
- Education names the institution and the award exactly as confirmed; years are omitted until supplied, never guessed.
- Degrees sit above certificates because they are a different category, and the page says the certificates are not auditor or lead-verifier qualifications.
- Credential count is shown as a computed number, not a typed one; `BRIEF.md`'s "19" and the verified list's 18 still disagree, so the page derives it from the data.
- The certificate list is a collapsed `<details>` so About stays scannable; it opens without JavaScript.
- External links open in a new tab, carry `rel="noopener noreferrer"` and announce themselves.
- Availability states Abuja, English, and openness to roles across Africa and internationally including remote and relocation. No visa claim.

## Acceptance Criteria
- [x] Education renders two degrees with institution and the university mark, above the credentials.
- [x] The 18 credentials render in four groups with issuer and year, inside a working `<details>`.
- [x] The count in the summary is computed from the array.
- [x] Each publication links to its real BellaNaija URL.
- [x] The closing band carries availability plus Email, CV on request and LinkedIn.
- [x] Long credential titles wrap without pushing the issuer or year columns out of the row.
- [x] One `h1`; heading order `h1 → h2 → h3`; per-page metadata and canonical set.
- [x] No horizontal overflow at 375px or 1440px; the logo loads at 48×48 with empty alt (the institution name sits beside it).

## Waived
- Hallmark 58 on this route: the checker counts the collapsed certificate text; 18 real titles plus a footer cannot fit 80 words per 600px band. See the waiver line in `app/globals.css`.
- Hallmark 44c/79: no portrait exists yet, so the hero is a Banner and the lower half is reserved for the photograph.

## Still missing
- Years for both degrees.
- The origin paragraph and testimonials (content pass).
