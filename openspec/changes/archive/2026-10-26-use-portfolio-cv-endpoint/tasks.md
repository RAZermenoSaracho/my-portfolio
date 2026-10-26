## 1. Change

- [x] 1.1 `src/components/Hero/Hero.jsx:4`: `CV_API_URL = "https://projects.razs.dev/cv"`
- [x] 1.2 `CLAUDE.md:24`: replace the cv_download "in progress" line with "CV is served from Odoo via `https://projects.razs.dev/cv` (portfolio-api proxy)"
- [x] 1.3 `npm run lint` and `npm run build`; quiet checks that never print the key: `grep -rqF -- "$ODOO_CV_API_KEY" dist && echo FAIL || echo OK`, `grep -rqiE 'odoo\.razs|razs_jobs|8069|cv-api|cv/latest' dist && echo FAIL || echo OK` (narrowed from bare `odoo`, which matches unrelated text), `grep -rqF cv-api dist && echo FAIL || echo OK`; all must print OK

## 2. Deploy (Vercel, auto-deploys on push to `main`)

- [x] 2.1 Host is Vercel, auto-deploys on push to `main` (owner-confirmed)
- [x] 2.2 Only after `add-cv-proxy` acceptance checks pass: merge the PR to `main`

## 3. Verify in production

- [x] 3.1 On https://razs.dev in a fresh/incognito browser, click Download CV: file saves with the expected name and opens
- [x] 3.2 DevTools Network: request goes to `projects.razs.dev/cv`, 200, no CORS error, nothing to `cv-api.razs.dev`
- [x] 3.3 Compare `shasum -a 256` of the downloaded file with `shasum -a 256` of the CV downloaded from the Odoo UI (not the SHA-1 `checksum` field)
