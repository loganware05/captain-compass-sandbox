---
name: craft-tokens-design-system
description: Implements bounded in-repo craft design tokens (CSS variables + accessible demo) without cloning or installing third-party design-system packages
---

# craft-tokens-design-system

## Use this Skill when

Implementing or reviewing a **bounded, in-repo craft design-tokens** UI surface
in the NorthStar sandbox (CSS custom properties / local components), inspired by
starred `design-system` discovery signals — **without** cloning or installing
third-party design-system packages.

## Lifecycle

- Stage: **AVAILABLE_SKILL** (sandbox-installed)
- Run: `NS-SKILL-001`
- Captain approval evidence: `.agent/learning-runs/NS-SKILL-001/08-captain-decision.md`
- Promotion proposal: `.agent/capabilities/candidates/available-proposals/craft-tokens-design-system/proposal.json`
- `approved_for_execution` for TI/Star repos remains **false**

## Origin candidate

- Candidate ID: `github-stars-example-org-craft-design-tokens`
- Discovery signal: `github-stars:example-org/craft-design-tokens|category:design-system`
- Star fixture (metadata only): `example-org/craft-design-tokens`
- Historical sandbox UI: `src/components/CraftTokensDemo.tsx` (+ CSS + test)

## Required evidence

- `.agent/evidence/ti-scorecards/craft-design-tokens/security-review.md`
- `.agent/evidence/ti-scorecards/craft-design-tokens/dependency-supply-chain.md`
- `.agent/evidence/ti-scorecards/craft-design-tokens/scorecard.json`
- `.agent/evidence/m23-craft-tokens/VALIDATION.md`

## Procedure (in-repo craft tokens)

1. Confirm starred provenance and scorecard evidence paths exist (fail closed if missing).
2. Prefer **in-repo CSS custom properties** (e.g. `--craft-ink`, `--craft-paper`,
   `--craft-sea`, `--craft-sand`, `--craft-signal`) over vendor packages.
3. Keep the demo accessible: named landmark/region, heading association,
   `aria-pressed` token controls, focus-visible styles, `prefers-reduced-motion`.
4. Add/extend vitest + Testing Library coverage for roles, labels, and pressed state.
5. Record evidence under `.agent/evidence/`; do not mutate lockfiles for Stars.
6. Do **not** clone or execute the starred repository; treat Stars as intelligence only.

## Prohibited actions

- Do **not** set TI `approved_for_execution: true`
- Do **not** clone or execute `example-org/craft-design-tokens` (or any Star)
- Do **not** install this Skill into the control repo without a separate Captain-reviewed upstream PR
- Do **not** treat Linear status alone as Captain approval (repo evidence is canonical)
