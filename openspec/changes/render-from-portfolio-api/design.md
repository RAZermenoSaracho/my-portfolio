## Decisions

**Single fetch, App level.** `usePortfolio()` fetches once on mount (`GET https://projects.razs.dev/portfolio`, browser HTTP cache honors `max-age=300` and ETag) and returns `{data, status, retry}`. App passes slices to Hero, About, Skills, Experience, Education, Contact, Navbar, Footer, Projects. One request, one loading state, one error state; the URL is a constant (`VITE_` env not needed; it is public).

**No hardcoded fallback (owner-visible choice).** Duplicating the content in React would recreate the two-sources-of-truth problem this change removes: the copy would drift silently, and edits in Odoo would appear to "not work" whenever the API is slow or down. The API already serves stale content indefinitely and the edge caches it, so a real outage is limited to a cold API plus a cold Odoo. In that case a minimal error state is more honest than a possibly outdated page. Trade-off accepted: crawlers and no-JS visitors see no content (same as today, since the site is a client-rendered SPA).

**Loading / error.** Loading: each section renders its heading and fixed-height placeholder so layout does not jump. Error: sections keep their frame with one short message and a "Retry" button calling `retry()`; Navbar, Footer and the CV button (which needs no portfolio data) keep working.

**Rendering rules.** Preserve current markup and class names. Null fields hide their element (for example no `demo` link). `profile.bio` is an array of paragraphs; description arrays render as the current lists. All strings render as text (no `dangerouslySetInnerHTML`).

**Projects.** `CATEGORIES` (labels, colors, order) stays in React. Filter and sort stay client-side, applied to `portfolio.projects`. A category present in data but not in `CATEGORIES` follows the current component behavior (verified during parity).

**Out of scope.** `LanguageBreakdown` still calls `api.github.com` from the browser. Certifications and languages render inside Education as today.

## Parity verification

A Playwright script (kept under `scripts/` or a dev-only folder, not in `src/`) loads production `https://razs.dev` and the Vercel preview, at 1440x900 and 390x844: waits for network idle, full-page and per-section screenshots (Hero, About, Skills, Experience, Education, Projects, Contact, Footer, Navbar) saved as `before/` and `after/`, plus `innerText` per section and per-card fields (title, subtitle, tech, description, hrefs) dumped to JSON and diffed. Differences must be zero or listed and accepted by the owner. Pixel diffs are reviewed by eye with a small tolerance for font anti-aliasing; dynamic parts (LanguageBreakdown) are masked.

## Secret check

After `npm run build`: `grep -rEi "ODOO_CV_API_KEY|Bearer |api[_-]?key|127\.0\.0\.1|odoo\.razs\.dev" dist || echo clean` (quiet: print only the verdict, never matched values). Expected clean; `projects.razs.dev` is the only backend host present.

## Risks

- Contract drift or empty Odoo data renders blanks: mitigated by the parity gate before merge.
- First paint is later than hardcoded content: acceptable, skeletons hold layout.
