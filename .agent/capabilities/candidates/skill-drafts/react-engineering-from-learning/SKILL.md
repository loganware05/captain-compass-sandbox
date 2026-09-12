---
name: react-engineering
description: Implements React and TypeScript UI changes with accessible components, state, and client tests
---

# React Engineering

## Use this Skill when

Working on React components, hooks, client routing, forms, browser behavior, responsive layout, or UI tests in a React/Vite/Next-style repository.

## Inputs

- Approved IMPLEMENTATION_PLAN.md
- Existing component and styling conventions
- Accessibility expectations from PROJECT_CONTEXT.md

## Procedure

1. Match existing project patterns (file layout, styling, state library).
2. Prefer small, focused components with clear props.
3. Label form controls; associate errors with fields (`aria-invalid`, `aria-describedby`).
4. Keep client state minimal; avoid unrelated refactors.
5. Add or update unit/component tests for behavior changes.
6. For user-visible UI, capture screenshot evidence under `.agent/evidence/`.
7. Run the project's lint and unit test commands before handoff.

## Output

Changed React/TS files, tests, and evidence paths reported to the First Mate.

## Prohibited actions

- Do not introduce a new UI framework without plan approval.
- Do not disable accessibility attributes to silence warnings.
- Do not expand into backend/auth refactors unless the approved plan includes them.

<!-- compass-learned-from-stars:begin -->
## Learned from categorized Stars (Captain-applied)

- Target Skill: `react-engineering`
- Candidate: `github-stars-example-org-accessible-react-forms`
- Similarity: `1.0`
- Category: `frontend-ui`
- Applied at: `2026-09-12T17:43:35Z`

Accessible React forms (NS-SKILL-002):
8. Prefer native labels/`htmlFor` over placeholder-only labeling; announce errors with `aria-live="polite"` (or assertive for blocking submit failures).
9. Preserve focus on the first invalid field after submit; never remove focus outlines to “clean up” visuals.
10. Group related controls with `fieldset`/`legend`; expose progress for multi-step forms via `aria-current`.
11. Verify keyboard-only completion and screen-reader labels before marking UI work done; attach a11y notes under `.agent/evidence/` when forms change.

Do not clone or execute the starred repository. Review this lesson before treating it as procedure.
<!-- compass-learned-from-stars:end -->
