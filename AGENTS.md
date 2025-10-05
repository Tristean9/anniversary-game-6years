# Repository Guidelines

## Project Structure & Module Organization
Core gameplay sits in `src/`; screens live in `src/components/`, shared data in `src/data.ts`, and types in `src/types.ts`. Place media under `src/assets/` and keep them compressed. Static files that must bypass Vite belong in `public/`, while `dist/` is generated output. Global styles are in `src/index.css`, with scene-specific rules in files like `src/App.css`.

## Build, Test, and Development Commands
Install dependencies with `pnpm install`. Use `pnpm dev` for the local Vite server; it defaults to the `test` mode required for internal toggles. Generate production bundles with `pnpm build` (`tsc -b` + `vite build`) and preview them via `pnpm preview`. Run `pnpm lint` before committing, and publish to GitHub Pages through `pnpm deploy`.

## Coding Style & Naming Conventions
Stick to functional React + TypeScript. Format files with `dprint` (4-space indent, LF, single quotes in TS, double quotes in JSX, trailing commas only on multiline lists). ESLint backs the same rules—fix every warning. Use UpperCamelCase for components, camelCase for hooks that start with `use`, and kebab-case filenames like `memory-modal.tsx` to mirror exports.

## Testing & QA Guidelines
No automated suite exists yet, so rely on manual verification. While running `pnpm dev`, toggle the in-app test controls to jump scenes, confirm each hotspot opens its memory modal, and ensure the finale triggers correctly. Check audio playback, framer-motion transitions, and responsive layouts on phones and desktops before sign-off.

## Commit & Pull Request Guidelines
History favors concise Mandarin commit messages that describe the change; follow that tone (e.g., `优化场景切换`). Keep each commit scoped to one concern. For pull requests, include a summary, screenshots or clips for UI tweaks, notes on manual testing, and links to related issues or deployment URLs so reviewers can load the experience quickly.

## Deployment & Environment Notes
Configuration flows through `import.meta.env`; local development already sets `MODE=test`. Store sensitive overrides in `.env.local`, which stays untracked. After running `pnpm deploy`, smoke-test the GitHub Pages build to confirm audio still plays and cached assets refresh.

## 协作沟通约定
与项目协作者（含自动化代理）交流时，请始终使用中文回复；文档更新或代码注释若涉及语言说明，也保持中文一致性。
