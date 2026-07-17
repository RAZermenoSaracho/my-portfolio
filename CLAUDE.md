# my-portfolio

Personal portfolio for Ricardo Arturo Zermeño Saracho (React/Vite).

## Project context
- Site deployed at https://razs.dev
- Project content lives in `projects.json` (DO NOT touch unless explicitly instructed, it's already up to date)
- Narrative content (about, experience, education, skills, summary) may live in a JSON file, a separate 
  data file, or be hardcoded in components — inspect the actual structure before assuming
- Target professional positioning: "Software Engineer — DeFi & Quantitative Systems"
- Target roles: web3 / DeFi / quantitative trading (e.g. Wintermute)

## Stack
React + Vite + Tailwind CSS

## Conventions
- Do not fabricate experience or credentials Ricardo doesn't have; integrate ATS vocabulary honestly
- Before modifying profile content, show a diff/summary for review before confirming
- Do not include testing instructions in work prompts — Ricardo tests independently

## Related services (same infra, personal macserver)
- job_scraper (FastAPI/Selenium) → api-jobs.razs.dev (port 8420)
- job_scraper_frontend (React/Vite) → jobs.razs.dev (port 5180)
- cv_download (Fastify/pdfmake, in progress) → generates and serves the CV as a PDF on demand

## Infra (reference)
- pm2 via `ecosystem.config.cjs` (.cjs extension required under Node 24 to force CommonJS)
- Self-hosted GitHub Actions runners per repo under `~/actions-runners/`
- Cloudflare Tunnel config at `/etc/cloudflared/config.yml` (root-owned, restart via:
  `sudo launchctl kickstart -k system/com.cloudflare.cloudflared`)
- Runner install symlinks must be relative, not absolute
