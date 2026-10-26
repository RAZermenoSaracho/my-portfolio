# cv-download-button Specification

## Purpose
Defines how the Hero Download CV button fetches and saves the CV from the portfolio API.

## Requirements

### Requirement: Button downloads from the portfolio API
The Download CV button in the Hero section SHALL request `https://projects.razs.dev/cv`, turn the response into a blob and trigger a download named as before. The frontend SHALL NOT contain any Odoo URL or key.

#### Scenario: Successful download
- **WHEN** a visitor on `https://razs.dev` clicks Download CV
- **THEN** the PDF downloads with the same filename as before and no CORS error appears in the console

#### Scenario: API failure
- **WHEN** `/cv` responds with an error or the network fails
- **THEN** the existing error handling runs unchanged

#### Scenario: Bundle contents
- **WHEN** the production bundle is searched for `odoo` or the API key
- **THEN** nothing is found, and `cv-api.razs.dev` is not referenced
