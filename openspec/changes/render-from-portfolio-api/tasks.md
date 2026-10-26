## 1. Preconditions (gate; do not merge before)

- [ ] 1.1 razs_jobs import parity check passed and owner reviewed
- [ ] 1.2 portfolio-api `/portfolio` deployed and returns the full imported content

## 2. Implementation

- [ ] 2.1 `usePortfolio()` hook + loading/error/retry; fetch once in `App`
- [ ] 2.2 Navbar, Hero, About, Skills, Experience, Education (certifications, languages), Contact, Footer render from props with unchanged markup and CSS
- [ ] 2.3 Projects reads `portfolio.projects`; keep `CATEGORIES`, filter and sort; remove its own fetch; `ProjectCard` unchanged
- [ ] 2.4 Loading placeholders and minimal error state that keep layout; no hardcoded content fallback
- [ ] 2.5 CV button and `LanguageBreakdown` untouched
- [ ] 2.6 Remove the now-dead hardcoded content arrays

## 3. Verification

- [ ] 3.1 `npm run lint` and `npm run build` pass
- [ ] 3.2 Secret grep on `dist` reports clean
- [ ] 3.3 Playwright: screenshots of every section at 1440 and 390, before (production) and after (preview)
- [ ] 3.4 Section `innerText` identical to production, except owner-accepted copy changes (listed in the PR)
- [ ] 3.5 Every project card: same title, subtitle, tech, description and links
- [ ] 3.6 Test the error state (block `projects.razs.dev` in Playwright) and the loading state (delayed route)

## 4. Rollout

- [ ] 4.1 Owner approves the PR; merge to `main` (Vercel auto-deploys)
- [ ] 4.2 Re-run the parity script against production; edit a field in Odoo and confirm it appears within ~5 minutes without a deploy
- [ ] 4.3 Report production parity as verified (unblocks `retire-portfolio-data`)
