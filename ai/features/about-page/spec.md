# Feature: About page

## Purpose
Answer the questions a recruiter has after the work: what she has done, what she is trained in, what she has published, and whether she is available where they are hiring.

## User Flow
1. Arrives from Home or the nav.
2. Reads the opening position and three paragraphs of practice.
3. Scans credentials by area, IFC and IFRS first.
4. Sees the three BellaNaija columns, each linking out.
5. Reads location and availability, then emails or asks for the CV.

## Rules
- Copy is first person and factual. No invented origin story: the "why sustainability" paragraph stays out until Petlong supplies it in the content pass.
- The education line states the field (international relations and international law) and does not name an institution, because none is confirmed.
- Credentials are certificates of completion and the page says so. No "accredited" claim.
- Credential count is not stated: `BRIEF.md` says 19, the verified list has 18, so the page shows the list and no total.
- External links open in a new tab, carry `rel="noopener noreferrer"` and announce themselves to screen readers.
- Availability states Abuja, English, and openness to roles across Africa and internationally including remote and relocation. No visa or work-authorisation claim.

## Acceptance Criteria
- [x] Four credential groups render all 18 verified credentials with issuer and date (date omitted where unknown).
- [x] IFC and IFRS Foundation entries lead the first group.
- [x] Group headings are `h3` under the `h2` "Credentials"; no heading skips.
- [x] Each publication links to its real BellaNaija URL.
- [x] The closing band carries availability plus Email, CV on request and LinkedIn.
- [x] Long credential titles wrap without pushing the issuer or date columns out of the row.
- [x] One `h1`; per-page metadata and canonical set.
