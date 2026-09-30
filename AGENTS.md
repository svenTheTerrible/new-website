# AGENTS.md

Guidance for AI agents working in this repo. Keep changes consistent with the notes below.

## Stack
- Vite 8 (Rolldown-based) + React 19 + TypeScript ~6.0, ESM (`"type": "module"`).
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`. Static files live in `public/`; imported assets live in `src/assets/`.

## Commands
- Dev server (HMR): `npm run start` — note the script is `start`, not `dev`.
- Type-check + build: `npm run build` (`tsc -b && vite build`). Output goes to `dist/`.
- Lint: `npm run lint` (`eslint .`).
- Preview a production build: `npm run preview`.

## Verification (no test framework)
There is no test runner and no `test` script. Do not assume one exists or add one unprompted. To verify a change, run both:
- `npm run lint`
- `npm run build` — the `tsc -b` step type-checks. ESLint here is NOT type-aware (no project service), so lint passing does not mean types are OK.

## TypeScript gotchas (build fails on these)
- `erasableSyntaxOnly`: no enums, namespaces, or class parameter properties — use only erasable TS syntax.
- `verbatimModuleSyntax`: import types with `import type`.
- `noUnusedLocals` / `noUnusedParameters`: unused locals and parameters are errors.

## React Compiler
The React Compiler is enabled (`babel-plugin-react-compiler` via `reactCompilerPreset()` in `vite.config.ts`). It auto-memoizes components; don't add manual `useMemo`/`useCallback` expecting classic semantics, and expect it to affect dev/build performance.
