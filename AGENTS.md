# Repository Guidelines

## Project Structure & Module Organization
- Root contains `package.json`/`package-lock.json` for dependency and script definitions.
- `docs/` is the content root (Markdown). Key areas: `blog/`, `demo/`, `develop/`, `doc/`, `guide/`, and `en/` (English).
- `docs/.vuepress/` holds site config and theme files (`config.ts`, `navbar.ts`, `plume.config.ts`, `client.ts`), plus `theme/` and `public/` for UI and static assets.
- Generated output lives in `docs/.vuepress/dist/`; build caches are in `.cache/` and `.temp/` (do not edit or commit).

## Build, Test, and Development Commands
- `npm i` installs dependencies (Node `^20.6.0 || >=22.0.0`).
- `npm run docs:dev` starts the VuePress dev server with live reload.
- `npm run docs:dev-clean` starts dev mode with cache/temp cleared.
- `npm run docs:build` creates a production build in `docs/.vuepress/dist`.
- `npm run docs:preview` serves the built site locally from `docs/.vuepress/dist`.
- `npm run vp-update` runs the VuePress update helper.

## Coding Style & Naming Conventions
- ES modules are enabled (`"type": "module"`); keep `import`/`export` syntax.
- Follow existing formatting: 2-space indentation in `*.ts` and JSON, and keep lines consistent with nearby files.
- Use URL-friendly page names (lowercase, hyphenated). Place English pages under `docs/en/`.

## Testing Guidelines
- No automated test suite is present. Validate changes with `npm run docs:build`, then spot-check pages via `npm run docs:dev` or `npm run docs:preview`.

## Commit & Pull Request Guidelines
- Git history is minimal and does not show a formal convention. Use short, imperative subjects (e.g., `add auth flow diagram`) and add detail in the body when useful.
- PRs should include a concise summary, a list of doc sections updated, and screenshots/screen recordings for visual changes. Link related issues when available.

## Deployment & CI
- GitHub Actions builds on pushes to `main` and deploys `docs/.vuepress/dist` to the `gh-pages` branch. Keep build output out of source edits.
