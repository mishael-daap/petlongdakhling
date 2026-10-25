# Feature: Work page

## Purpose
Show the five selected projects with the exact part Petlong played, in enough detail that a hiring manager can judge the work without asking for a portfolio deck.

## User Flow
1. Arrives from Home or the nav.
2. Reads the page lead, then five project entries in reverse-chronological weight (Bauchi first).
3. For each: title, organisation, role, period, the situation in one line, and a list of what she produced.
4. Reaches the closing band and emails or opens LinkedIn.

## Rules
- Five projects, matching `BRIEF.md` §2; reserve items (IDP camps, drug abuse awareness) stay off the page.
- Each entry names the organisation and her role; no "involved in" phrasing.
- No outcome figures. None are verified yet, so the page carries the rule explicitly in the lead and features none — an absent number is honest, an invented one is a liability.
- Exact months are used here even where Home shortens them.
- Long documents are described, not linked: no PDFs exist yet.

## Acceptance Criteria
- [x] All five projects render from `content/projects.ts`.
- [x] Each entry has a unique `id` matching its slug, so it can be linked directly.
- [x] The first entry opens the set with an ink rule; the rest are hairline-ruled.
- [x] Every list item is a complete claim about what she produced.
- [x] The lead states that outcomes appear only where verifiable.
- [x] At 375px each entry stacks (header, then context and list) with no overflow.
- [x] One `h1`; project titles are `h2`; the "What I produced" label is `h3`.
