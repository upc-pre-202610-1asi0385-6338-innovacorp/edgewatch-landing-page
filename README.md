# EdgeWatch · Landing Page

Landing page of **EdgeWatch**, the HVOF thermal-spray monitoring, traceability and diagnosis
platform by the startup **InnovaCorp** (UPC · 1ASI0385 Interacción Humano-Computador · section 6338).

Live site: https://upc-pre-202610-1asi0385-6338-innovacorp.github.io/edgewatch-landing-page/

## About the project

HVOF (High Velocity Oxygen Fuel) coating shops recover worn mining components, but the process
parameters, the work order and the field performance of each part are recorded on paper or in
separate files. EdgeWatch captures the telemetry of every spray session, links it to the part and
its work order, warns the operator when a parameter leaves its range and lets the mine see how
its recovered components perform.

## Target segments

| Segment | Who they are | What they need |
|---|---|---|
| Recuperation Supplier | HVOF coating shops: operators, quality and process engineers | Monitor each session, act on deviations, trace every part and issue reports and certificates |
| Asset Owner | Mining companies: reliability and maintenance engineers | Check the evidence and performance of their recovered components and compare suppliers |

## Main features

- Real-time monitoring of HVOF spray sessions, with trends against the nominal band.
- Deviation alerts with probable causes, recommended actions and an action log with photo evidence.
- Part traceability by S/N, MO or WO, with a timeline and comparison against the recipe.
- Technical reports and application certificates, shared with the client and downloadable as PDF.
- Equipment status, versioned recipes (PCR) and stop history.
- Asset Owner portal: my components, failure review requests, operating hours and supplier comparison.

## Authors

| Name | Program |
|---|---|
| Carolina Navarro Aldoradin (Team Leader) | Ingeniería de Software |
| Kamila Quispe | Ingeniería de Sistemas |
| Leandro Segovia | Ingeniería de Sistemas |
| Aldo Condori Ramos | Ingeniería de Sistemas |
| Rodrigo Espinoza | Ingeniería de Software |
| Mathias Mendoza | Ingeniería de Sistemas |
| Alonso Vasquez | Ingeniería de Sistemas |
| Gabriel Aguirre | Ingeniería de Sistemas |

## Technology

- HTML5 + CSS3, 100 % responsive (desktop 1440 px → mobile 390 px). No CSS frameworks.
- Vanilla JavaScript for simple interactions and an in-memory simulation of the core user
  stories (no backend; the state resets on reload). Google Fonts for typography.
- Accessibility (a11y): semantic landmarks, skip link, visible focus, WAI-ARIA tabs, `aria-live`
  feedback, `alt` text, 48 px touch targets and states shown with icon + text, not color alone.
- Acceptance tests: one Gherkin `.feature` file per user story in [`features/`](features).

## Run locally

Open `public/index.html` in a browser, or serve the folder:

```bash
npx serve public
```

## Project structure

```
edgewatch-landing-page/
├── README.md
├── index.html              ← redirects GitHub Pages to public/
├── public/                 ← main folder of the site (.html files)
│   ├── index.html          ← structure (HTML): landing sections + interactive demo
│   ├── favicon.ico
│   └── assets/
│       ├── styles/
│       │   └── styles.css  ← presentation (CSS): tokens → base → components → sections → responsive
│       ├── scripts/
│       │   └── main.js     ← behavior (JavaScript): helpers → i18n → landing → demo
│       └── images/
│           └── logo.svg
└── features/               ← usNN-<story>.feature acceptance tests (Gherkin)
```

Each language lives in its own file. `public/index.html` links them with relative paths:
`<link rel="stylesheet" href="assets/styles/styles.css">` and
`<script defer src="assets/scripts/main.js">` (`defer` runs the script once the whole HTML has
been read, so every element already exists).

Inside each file, every block starts with a banner comment (`<!-- Header -->`,
`/* ==== HEADER (US52) ==== */`, `// ==== PLANS (US47) ====`). The media queries go at the end
of `styles.css`: when two rules with the same selector compete, the later one wins. Shared styles
use a base class plus a modifier (`.btn` + `.btn-primary`, `.chip` + `.chip-ok`), so common
rules are written once.

## Coding conventions

| Language | Convention |
|---|---|
| All | English names for files, classes, ids, functions, branches and commits. UTF-8, 2-space indent, LF (`.editorconfig`). Formatted with Prettier (`.prettierrc.json`). |
| HTML | [W3Schools HTML Style Guide](https://www.w3schools.com/html/html5_syntax.asp) and [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html): lowercase elements and attributes, double quotes, semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`), `alt` on images, `label` for every input. |
| CSS | Google style guide: lowercase hex colors, kebab-case class names, one declaration per line, single quotes, design tokens as custom properties in `:root`, no inline styles, media queries at the end. |
| JavaScript | Vanilla ES2015+, `const`/`let`, camelCase, single quotes, one block per responsibility inside `main.js`, elements reached by `id`, events with `addEventListener`. Blocks communicate through DOM events (e.g. `edgewatch:report-shared`). |
| Gherkin | [Gherkin conventions for readable specifications](https://specflow.org/gherkin/gherkin-conventions-for-readable-specifications/): one feature per user story, `Scenario` per acceptance criterion, steps in third person. |

## Source code management (GitFlow)

| Branch | Purpose |
|---|---|
| `main` | Published releases (GitHub Pages) |
| `develop` | Integration branch |
| `feature/<kebab-case-name>` | One branch per feature, created from `develop`, merged back with `--no-ff` |
| `release/<x.y.z>` | Release preparation following Semantic Versioning 2.0.0 |
| `hotfix/<x.y.z>` | Urgent fixes created from `main` |

Commit messages follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/):
`<type>(<scope>): <description>` with types `feat`, `fix`, `style`, `docs`, `test`, `chore`, `refactor`.

## Deployment

GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / root*. The `.nojekyll` file makes
GitHub serve the files as they are.
