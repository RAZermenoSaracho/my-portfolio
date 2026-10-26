## Owner decisions

- The API key is permanent; `job.profile` 14 in Odoo is the single source of truth for the CV.
- The `cv-download-api` project entry is kept in `portfolio-data`, without its demo link.
- No observation period: `cv_download` is retired right after end-to-end verification.
- Hosting is Vercel, which auto-deploys on push to the default branch (owner-confirmed).

## Context

Hosting for `razs.dev` is **Vercel** (owner-confirmed). It auto-deploys on push to the default branch (`main`), so the deploy step is merging the PR.

## Decisions

1. **Minimal edit.** Only the URL constant changes. The server sets the download filename via `Content-Disposition`, but the existing code names the file on the client, so behaviour stays identical.
2. **CORS is already sufficient.** `projects.razs.dev` allows origin `https://razs.dev`, GET. A blob fetch needs nothing more.
3. **Order.** Ship only after `add-cv-proxy` passes its acceptance checks, and `cv-api` is retired right after this is verified in production (no observation period).

## Deploy

Merge to `main`; Vercel builds and deploys. Poll https://razs.dev until the bundle references `projects.razs.dev/cv`.

## Rollback

Revert the one-line change and redeploy; `cv-api.razs.dev` still works until `retire-cv-download-api` runs, which is why that change comes last.
