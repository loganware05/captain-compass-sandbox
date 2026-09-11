---
name: craft-tokens-design-system
description: Draft Skill for in-repo craft design tokens (NS-SKILL-001 retrospective). Staging only — not installed.
---

# craft-tokens-design-system

## Use this Skill when

Implementing or reviewing a **bounded, in-repo craft design-tokens** UI experiment
in a NorthStar sandbox (CSS variables / local components), inspired by starred
`design-system` discovery signals — **without** cloning or installing third-party
design-system packages.

## Origin candidate

- Candidate ID: `craft-design-tokens` / `github-stars-example-org-craft-design-tokens`
- Discovery signal: `github-stars:example-org/craft-design-tokens|category:design-system`
- Star fixture (metadata only): `example-org/craft-design-tokens`
- Star category: `design-system`
- Starred provenance: required
- Run: `NS-SKILL-001` (OVA-11)
- Historical sandbox UI: `src/components/CraftTokensDemo.tsx` (+ CSS + test)

## Required draft gates (M23)

- `.agent/evidence/ti-scorecards/craft-design-tokens/security-review.md`
- `.agent/evidence/ti-scorecards/craft-design-tokens/dependency-supply-chain.md`
- `.agent/evidence/ti-scorecards/craft-design-tokens/scorecard.json`

## Notes from discovery

Metadata-only inspiration from the starred `design-system` fixture. The M23
sandbox experiment proved an in-repo craft-tokens demo with a11y checks and
24/24 tests. That historical success is evidence for reconciliation (OVA-12),
**not** Captain approval to install this draft as a live Skill.

## Procedure (in-repo craft tokens)

1. Confirm starred provenance and scorecard evidence paths exist (fail closed if missing).
2. Prefer **in-repo CSS custom properties** (e.g. `--craft-ink`, `--craft-paper`,
   `--craft-sea`, `--craft-sand`, `--craft-signal`) over vendor packages.
3. Keep the demo accessible: named landmark/region, heading association,
   `aria-pressed` token controls, focus-visible styles, `prefers-reduced-motion`.
4. Add/extend vitest + Testing Library coverage for roles, labels, and pressed state.
5. Record evidence under `.agent/evidence/`; do not mutate lockfiles for Stars.
6. Stop for **human Captain approval** before any copy into `.cursor/skills/` or
   promotion via `promote-candidate.sh --captain-approved`.

## Prohibited actions

- Do **not** auto-install this draft into `.cursor/skills/`
- Do **not** auto-merge this draft into live Skills
- Do **not** set `approved_for_execution: true`
- Do **not** clone or execute `example-org/craft-design-tokens` (or any Star) from this draft
- Do **not** treat Linear status or historical sandbox green tests as Captain Skill approval
- Do **not** advance OVA-13+ from this draft alone
