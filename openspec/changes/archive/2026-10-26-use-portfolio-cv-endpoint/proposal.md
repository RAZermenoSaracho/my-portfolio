## Why

The Download CV button calls `cv-api.razs.dev`, a separate service that renders a CV from files. The CV now lives in Odoo and `portfolio-api` proxies it at `https://projects.razs.dev/cv` (change `add-cv-proxy`). The button must switch so `cv_download` can be retired.

## What Changes

- `src/components/Hero/Hero.jsx` line 4: `CV_API_URL` becomes `https://projects.razs.dev/cv`. Nothing else in the handler changes: same fetch, blob, `<a download>`, filename and error handling.
- `CLAUDE.md` line 24: replace the `cv_download` "in progress" note with the new source (Odoo via `projects.razs.dev/cv`).

## Owner decisions

- The API key is permanent; `job.profile` 14 in Odoo is the single source of truth for the CV.
- The `cv-download-api` project entry is kept in `portfolio-data`, without its demo link.
- No observation period: `cv_download` is retired right after end-to-end verification.
- Hosting is Vercel, which auto-deploys on push to the default branch (owner-confirmed).

## Capabilities

### New Capabilities
- `cv-download-button`: the Hero button downloads the CV from the portfolio API.

### Modified Capabilities
None.

## Impact

- One constant in `Hero.jsx` and one doc line. No new dependency, no key in the frontend.
- Requires `add-cv-proxy` live and verified first (CORS already allows `https://razs.dev`).

## Out of scope

- Button styling or UX, the filename the user sees, the API itself.
