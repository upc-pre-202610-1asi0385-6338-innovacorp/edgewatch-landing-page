# EdgeWatch · Landing Page

Landing page of **EdgeWatch**, the HVOF thermal-spray monitoring, traceability and diagnosis
platform by **InnovaCorp** (UPC · 1ASI0385 IHC y Tecnologías Móviles · 202610 · section 6338).

- HTML5 + CSS3 as the mandatory base, 100 % responsive (desktop 1440 px → mobile 390 px).
- Vanilla JavaScript only for simple interactions and an in-memory simulation of the core user
  stories (no backend; the state resets on reload).
- Accessibility (a11y): semantic landmarks, skip link, visible focus, WAI-ARIA tabs, `aria-live`
  feedback, `alt` text, 48 px touch targets and states shown with icon + text, not color alone.
- Acceptance tests: one Gherkin `.feature` file per user story in [`features/`](features).

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Project structure

```
edgewatch-landing-page/
├── index.html          ← structure (HTML): landing sections + interactive demo
├── favicon.svg         ← images live next to index.html (relative paths resolve from it)
├── styles/
│   └── style.css       ← presentation (CSS): tokens → base → components → sections → responsive
├── scripts/
│   └── app.js          ← behavior (JavaScript): helpers → i18n → landing → demo
└── features/           ← usNN-<story>.feature acceptance tests (Gherkin)
```

Each language lives in its own file. `index.html` links them with relative paths:
`<link rel="stylesheet" href="styles/style.css">` and `<script defer src="scripts/app.js">`
(`defer` runs the script once the whole HTML has been read, so every element already exists).

Inside each file, every block starts with a banner comment (`<!-- Header -->`,
`/* ==== HEADER (US52) ==== */`, `// ==== PLANS (US47) ====`). The media queries go at the end
of `style.css`: when two rules with the same selector compete, the later one wins. Shared styles
use a base class plus a modifier (`.btn` + `.btn-primary`, `.chip` + `.chip-ok`), so common
rules are written once.

## Coding conventions

| Language | Convention |
|---|---|
| All | English names for files, classes, ids, functions, branches and commits. UTF-8, 2-space indent, LF (`.editorconfig`). Formatted with Prettier (`.prettierrc.json`). |
| HTML | [W3Schools HTML Style Guide](https://www.w3schools.com/html/html5_syntax.asp) and [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html): lowercase elements and attributes, double quotes, semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`), `alt` on images, `label` for every input. |
| CSS | Google style guide: lowercase hex colors, kebab-case class names, one declaration per line, single quotes, design tokens as custom properties in `:root`, no inline styles, media queries at the end. |
| JavaScript | Vanilla ES2015+, `const`/`let`, camelCase, single quotes, one block per responsibility inside `app.js`, elements reached by `id`, events with `addEventListener`. Blocks communicate through DOM events (e.g. `edgewatch:report-shared`). |
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
