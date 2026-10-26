## 1. Preconditions (gate; do not merge before)

- [x] 1.1 razs_jobs import parity check passed and owner reviewed
- [x] 1.2 portfolio-api `/portfolio` deployed and returns the full imported content

## 2. Implementation

- [x] 2.1 `usePortfolio()` hook + loading/error/retry; fetch once in `App`
- [x] 2.2 Navbar, Hero, About (incl. Skills), Experience, Education (certifications, languages), Contact, Footer render from props with unchanged markup and CSS
- [x] 2.3 Projects reads `portfolio.projects`; keep `CATEGORIES`, filter and sort; remove its own fetch; `ProjectCard` unchanged
- [x] 2.4 Loading placeholders and minimal error state that keep layout; no hardcoded content fallback
- [x] 2.5 CV button and `LanguageBreakdown` untouched
- [x] 2.6 Remove the now-dead hardcoded content arrays

## 3. Verification

- [x] 3.1 `npm run lint` and `npm run build` pass
- [x] 3.2 Secret grep on `dist` reports clean
- [x] 3.3 Playwright: screenshots of every section at 1440 and 390, before (production) and after (preview)
- [x] 3.4 Section `innerText` identical to production, except owner-accepted copy changes (listed in the PR)
- [x] 3.5 Every project card: same title, subtitle, tech, description and links
- [x] 3.6 Test the error state (block `projects.razs.dev` in Playwright) and the loading state (delayed route)

## 4. Rollout

- [x] 4.1 Owner approves the PR; merge to `main` (Vercel auto-deploys)
- [ ] 4.2 Re-run the parity script against production; edit a field in Odoo and confirm it appears within ~5 minutes without a deploy
- [x] 4.3 Report production parity as verified (unblocks `retire-portfolio-data`)
