# Overview

## Product
A three-page personal portfolio for Petlong, a climate change and energy analyst based in Abuja, Nigeria. It presents her work, credentials and contact details in her own first-person voice, in one credible and deliberately minimal place. Built and shipped before **26 October 2026**.

## Target Users
- **Recruiters and hiring managers** in climate, energy, ESG and international development, arriving from LinkedIn or a job application with 30–60 seconds to spare. They need: what she does → proof she has done it → credentials → CV or email.
- **Petlong herself**, the only copy approver and the source of every fact, number and photo on the site.
- Secondary: conference or programme organisers checking who she is, and colleagues following a link she shared.

## Problem
Her LinkedIn profile describes her specialisms in generalities and cites nothing, so a visitor cannot tell her apart from a thousand other sustainability graduates. She has real delivered work — a state emergency response plan built from scratch, IFC-aligned ESMS work, 19 current credentials — and no single page where any of it is visible, attributable and easy to act on.

## Core Features
- **Site foundation** — Next.js project, design tokens and type scale, shared page shell (header, footer, nav), base metadata, Vercel deploy from the first commit.
- **Home page** — the 30-second page: name, role line, three proof points, one call to action (download CV / email).
- **Work page** — the five selected projects in full: context, her exact role, what she produced, outcome, dates.
- **About page** — origin story in her words, the 19 credentials grouped into four areas with IFC and IFRS leading, publications, location and work-authorisation context.
- **Content pass** — real copy in place of every placeholder: outcome numbers, CV PDF, headshot, testimonials, degree institution and years.
- **Launch polish** — page titles and social preview, 404, sitemap, accessibility and contrast audit, performance check, custom domain live on Vercel.

## Constraints
- Deadline: **26 October 2026**. Tonight's scope is the groundwork — Phase 1 docs plus the first feature only.
- First person ("I"), display name **Petlong**; "Petlong Dakhling" appears only in the page title and metadata for searchability.
- No analytics, no cookies, no contact form, no blog or CMS. Copy is frozen after launch; edits happen in the repo.
- No invented facts. Every number, title, date and quote comes from `BRIEF.md` or from Petlong directly; anything unverified ships as a visible placeholder or is left out.
- Photos, project imagery and visual assets arrive later — the layout must hold without them and not collapse when they land.
