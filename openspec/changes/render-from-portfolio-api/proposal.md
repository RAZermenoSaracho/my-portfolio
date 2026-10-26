## Why

Hero, About (which contains Skills), Experience, Education, Contact, Navbar and Footer text is hardcoded in React, so every content edit needs a commit and a Vercel deploy. Content is moving into Odoo (`razs_jobs`) and `portfolio-api` will serve it at `GET https://projects.razs.dev/portfolio` (change `serve-portfolio-from-odoo`). The site should render from that endpoint so Odoo edits go live in about 5 minutes with no redeploy.

## What Changes

- One fetch of `https://projects.razs.dev/portfolio` at the App level (small `usePortfolio()` hook, provided through context or props) and every section renders from the result. Visual design (markup, CSS, layout) is unchanged.
- Projects keeps its client-side filter and sort; `CATEGORIES` stays in React. `Projects.jsx` stops fetching on its own and reads `portfolio.projects`. `ProjectCard` props are unchanged.
- Loading state (skeleton / placeholder blocks that hold section height) and a minimal error state that keeps the page layout and offers a retry. No hardcoded content fallback (see design).
- Unchanged: CV download button (`/cv`), `LanguageBreakdown` (browser-side GitHub API), styling, routing.
- No secrets in the bundle: the browser only talks to the public `projects.razs.dev`; verified by a build-output grep.
- Vercel deploys only this code change; later content edits need no deploy.

## Acceptance

- Playwright visual and content parity against the current production site: screenshot every section at 1440 px and 390 px, before (production today) and after (preview build).
- The text content of every section is identical, except owner-accepted copy changes recorded in the change.
- Every project card has the same title, subtitle, tech, description and links.

## Capabilities

### New Capabilities
- `portfolio-rendering`: the site renders its content from `portfolio-api` `/portfolio`.

### Modified Capabilities
None (`cv-download-button` unchanged).

## Impact

- `src/App.jsx`, new `src/hooks/usePortfolio.js` (or context file), all section components, `Projects.jsx`; a parity script outside the shipped bundle.
- Depends on: razs_jobs import parity check done and `portfolio-api` `/portfolio` deployed, before this merges (merge to `main` auto-deploys to Vercel).
- Rollback: revert the merge commit on `main` (Vercel redeploys the hardcoded version).
