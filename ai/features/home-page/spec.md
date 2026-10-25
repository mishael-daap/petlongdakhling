# Feature: Home page

## Purpose
The 30-second page. A recruiter arriving from LinkedIn should learn what Petlong does, see three real roles and three real projects, and have one obvious action, without scrolling far.

## User Flow
1. Lands on `/`. Nav is one line: wordmark, Work, About, Email.
2. Reads the headline, one sentence and the actions inside the first screen at 1280×800.
3. Scans the record sheet: three roles with organisation and period.
4. Scrolls once to Selected work (three projects), then a credentials statement, then the availability band.
5. Emails, asks for the CV, or opens Work.

## Rules
- Hero headline is four words; the sentence under it is ten; both are real claims, not slogans.
- The record sheet shows verified employment only, and the period format is the short one (the Work page keeps the exact months).
- Selected work shows three of the five projects; the other two live on `/work`.
- Home carries at most one statement section and one band; no figures row, because the only hard number (1,000+ articles) already appears in Work.
- All copy is first person and drawn from `BRIEF.md`; nothing invented.
- No eyebrow above the `h1`, no label in tracked capitals, no arrow glued to link text.

## Acceptance Criteria
- [x] At 1440×900 the first screen holds the headline, the sentence, the actions and the record sheet — and nothing from the next section.
- [x] The page has one `h1` and no heading skips.
- [x] Hero fills the first screen on desktop (`min-height: calc(100dvh - 76px)`), stacks naturally under 60rem.
- [x] The wordmark, nav and actions keep their tap targets at 375px; no horizontal overflow.
- [x] Selected work links to `/work`; the credentials statement links to `/about`.
- [x] The closing band states availability and offers Email plus LinkedIn.
- [x] Hallmark `sloplint --render`: 0 FAIL (one WARN, 85 words on the hero screen, accepted).
