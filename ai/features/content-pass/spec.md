# Feature: Content pass

## Purpose
Replace the site's honest gaps with verified material: real outcome numbers, the origin story in Petlong's words, her CV, a portrait, testimonials, the degree institution, and a working domain email. Nothing here can be written by the agent without inventing facts.

## User Flow
1. Petlong sends the items below (or a subset).
2. Each item is placed in the module that owns it; no layout change is expected.
3. Re-run the build and the Hallmark sweep; the page gets heavier, not longer.

## Rules
- Never invent a metric, testimonial, institution or quote. An absent fact stays absent.
- Every number needs a source and a unit; if there is no verifiable outcome for a project, the entry keeps its list and gains nothing.
- Confidentiality is checked per project before naming an employer deliverable; the Bauchi plan is currently named on Petlong's own account that it may be published.
- Testimonials need a name, a title and permission to publish; a warm public mention is not a testimonial.
- The CV file is the only route to a download button; until it exists, links say "CV on request".

## Acceptance Criteria
- [ ] Each of the five projects carries an `outcome` only where a verifiable figure or adopted status exists.
- [ ] The origin paragraph is in Petlong's own words and in first person.
- [ ] The education line names the institution and years.
- [ ] At least two testimonials with name, title and quote, or none at all.
- [ ] `public/cv/petlong-dakhling-cv.pdf` exists and `site.cvAvailable` is `true`.
- [ ] A portrait exists in `public/images/`, is used with `next/image`, has real alt text, and does not push the hero past the fold.
- [ ] Any domain email added replaces the Gmail address in `content/site.ts` and nowhere else.

## Blocked on
All of it — see `tasks.md`. This is the only feature that cannot be completed by the agent alone.
