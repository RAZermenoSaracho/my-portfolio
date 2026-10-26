## ADDED Requirements

### Requirement: Content from the portfolio API
The site SHALL fetch `https://projects.razs.dev/portfolio` once at the App level and render Navbar, Hero, About, Skills, Experience, Education (with certifications and languages), Projects, Contact and Footer from that data, with the visual design unchanged. Page content SHALL NOT be hardcoded in the bundle.

#### Scenario: Odoo edit goes live without deploy
- **WHEN** a field is edited in Odoo
- **THEN** the site shows the new value within about 5 minutes, with no Vercel deploy

#### Scenario: Single request
- **WHEN** the page loads
- **THEN** exactly one request to `/portfolio` is made for all sections

### Requirement: Loading and error states
While the data loads, each section SHALL show a placeholder that keeps the layout. If the fetch fails, the page SHALL keep its layout, show a minimal error message with a retry action, and SHALL NOT show duplicated hardcoded content.

#### Scenario: API unreachable
- **WHEN** the request to `/portfolio` fails
- **THEN** sections show the error state, the retry action refetches, and the CV button still works

### Requirement: Projects behavior
Projects SHALL read `portfolio.projects`, keep its client-side filter and sort, and keep `CATEGORIES` defined in React. Project cards SHALL receive `id, category, priority, title, subtitle, tech, description, github, demo, appstore`; null links SHALL not render.

#### Scenario: Card parity
- **WHEN** the site is compared with the pre-change production site
- **THEN** every project card has the same title, subtitle, tech, description and links

### Requirement: Unchanged features and no secrets
The CV button and `LanguageBreakdown` SHALL behave exactly as before. The production bundle SHALL contain no API key, Bearer token or Odoo address.

#### Scenario: Bundle check
- **WHEN** the build output is searched for the key name, `Bearer`, `127.0.0.1` and `odoo.razs.dev`
- **THEN** there are no matches

### Requirement: Visual and content parity
Before merge, the preview build SHALL be compared with production by Playwright screenshots of every section at 1440 px and 390 px width, and the text content of every section SHALL be identical, except owner-accepted copy changes.

#### Scenario: Parity report
- **WHEN** the Playwright comparison runs
- **THEN** it produces before and after screenshots per section and viewport and a text diff that is empty or fully accepted by the owner
