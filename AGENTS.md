# AGENTS.md

## Project Overview

This is a personal portfolio built with React 19, TypeScript, Vite, and plain CSS. The app is a single-page experience served through `HashRouter`, with `App` wrapping the UI in `LanguageProvider` and `Main` composing the visible sections.

## Architecture

- `src/main.tsx` mounts the app and defines the single `/` route.
- `src/App.tsx` owns the initial loading state and provides language context.
- `src/components/Main.tsx` composes the page in order: header, home, skills, experiences, projects, contact, and floating action button.
- `src/sections/` contains page-level feature sections. Section-specific subcomponents live under each section's `components/` directory.
- `src/components/` contains shared UI components, usually as `index.tsx` plus colocated `styles.css`.
- `src/contexts/LanguageContext.tsx`, `src/hooks/useLanguage.ts`, and `src/utils/getLocalizedData.ts` provide the i18n/data access layer.
- `src/translations/{en,pt-br}/` is the source of translated page content for common strings, skills, experiences, and projects.
- `src/data/technologies.ts` defines technology metadata and imported icon assets used by the phone/skills UI.
- `src/styles/theme.css`, `src/index.css`, and section/component CSS files define styling. There is no CSS-in-JS framework.

## Conventions

- Prefer existing Vite aliases (`@components`, `@sections`, `@hooks`, `@translations`, `@utils`, etc.) over long relative imports.
- Keep React components small and colocate component styles in the same folder as `styles.css` when following existing patterns.
- When adding visible text or portfolio content, update both `src/translations/en/` and `src/translations/pt-br/`.
- Use `useLanguage()` for UI labels and `useLocalizedExperiences`, `useLocalizedProjects`, or `useLocalizedSkills` for translated data collections.
- Import static assets from `src/assets` rather than referencing string paths directly.
- Preserve the current single-page anchor structure (`#home`, `#projects`, etc.) unless changing navigation intentionally.

## Commands

- Install dependencies: `yarn install`
- Start development server: `yarn dev`
- Build production bundle: `yarn build`
- Run lint: `yarn lint`
- Preview production build: `yarn preview`
- Deploy built app to GitHub Pages: `yarn deploy`

## Verification

Before handing off code changes, run:

```bash
yarn lint
yarn build
```

There is currently no dedicated test runner configured. For UI changes, also run `yarn dev` and check the relevant section in a browser.

## Deployment Notes

Production builds use Vite `base: '/portfolio/'`; development uses `/`. The app is intended for GitHub Pages at `https://macielrsf.github.io/portfolio`, and `public/_redirects` is present for static hosting compatibility.
