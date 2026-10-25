# CV

The download the site expects is `petlong-dakhling-cv.pdf` in this folder.

Until that file is added, `site.cvAvailable` in `content/site.ts` stays `false` and every CV
link renders as "CV on request" pointing at a mailto with the subject "CV request". When the
PDF lands:

1. Drop it in here as `petlong-dakhling-cv.pdf` (no spaces, lowercase).
2. Set `cvAvailable: true` in `content/site.ts`. The links switch to the file and add `download`.
3. Check the file is under 5 MB and that its metadata does not carry a previous employer's template.
