# M23 Craft Tokens UI Experiment — Sandbox Evidence

**Date:** 2026-09-10  
**Branch:** `cursor/refresh-compass-1.28.0-6044`  
**Compass:** 1.28.0  
**Scope:** Bounded design-system / craft tokens demo (in-repo CSS variables only — not a vendor install)

## What shipped

- `src/components/CraftTokensDemo.tsx` (+ CSS + vitest)
- Mounted in `App.tsx` between hero and contact
- Tokens: `--craft-ink`, `--craft-paper`, `--craft-sea`, `--craft-sand`, `--craft-signal`
- Motions: atmosphere drift, staged rise-in; reduced-motion respected

## Validation

```bash
npm test
# Test Files  3 passed (3)
# Tests  24 passed (24)
```

### Accessibility (vitest / Testing Library)

| Check | Result |
|---|---|
| Landmark region named "Craft tokens" | Pass |
| Heading association via `aria-labelledby` | Pass |
| Token controls are buttons with `aria-pressed` | Pass |
| Focus-visible outline styles present in CSS | Pass |
| `prefers-reduced-motion` disables animations | Pass |

Playwright browser capture deferred (no Playwright dep in sandbox package.json);
a11y coverage is via Testing Library roles/labels as above.

## Security / supply-chain

- No new npm dependencies
- No third-party design-system package install
- Inspired by starred TI `design-system` signals only

## Linkage

Control: `docs/SANDBOX_VALIDATION.md` (M23 section)  
Control evidence: `.agent/evidence/m23-ti-skill-flywheel/VALIDATION.md`
