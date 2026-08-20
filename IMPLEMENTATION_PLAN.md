# Implementation Plan

## Metadata

- Status: APPROVED
- Plan ID: sandbox-behavioral-plan-feature-2026-08-20
- Issue: local/sandbox-behavioral-plan-feature (placeholder — GitHub auth unavailable)
- Branch: feature/local-contact-message-counter
- Created: 2026-08-20
- Last updated: 2026-08-20
- Approved by: Captain
- Approval date: 2026-08-20
- Approved revision: sandbox-behavioral-plan-feature-2026-08-20
- Rollback checkpoint: rollback/pre-contact-message-counter (SHA 17d815109c0f61ef933af0c859725a09fe438a2c)

## Request

Add a React UI character counter to the existing contact form message textarea with max-length validation, accessible live-region feedback for screen readers, Vitest unit tests, and accessibility review evidence.

## Problem Statement

The sandbox contact form validates required name/email/message and email format, but the message field has no visible length guidance or max-length enforcement. Users and assistive technology get no live feedback as they type toward a limit.

## Desired Outcome

The message field shows a clear character counter, enforces a documented max length in validation, announces updates accessibly, and is covered by automated tests plus accessibility evidence.

## Acceptance Criteria

- [x] Message field shows a character counter (current / max) associated with the textarea
- [x] Max length is enforced in `validateContactForm` (and optionally via `maxLength` on the control)
- [x] Counter updates as the user types; screen-reader-friendly live feedback without spamming every keystroke
- [x] Existing required/email validation and success flow still pass
- [x] Unit/component tests cover counter display, max-length error, and accessible associations
- [x] Accessibility review notes + UI evidence stored under `.agent/evidence/`
- [x] `npm test`, `npm run lint`, and `npm run build` pass

## Non-Goals

- Remote persistence or email delivery
- Changing name/email field behavior beyond shared validation helpers
- Redesigning the full landing page layout
- Playwright e2e suite expansion beyond what validation evidence requires

## Assumptions

- Max length of **500** characters is acceptable for this sandbox exercise (confirm if different).
- Client-side only; no backend API changes.
- Capability planning runs from the Compass **control repo** (`./scripts/capability-plan.sh`); product install does not ship those scripts.

## Open Questions

- Preferred max length if not 500?
- Should the counter be polite (`aria-live="polite"`) with throttled announcements, or visual-only with `aria-describedby` static help text?

## Current-State Analysis

- Vite + React 19 sandbox with accessible `ContactForm` (`src/components/ContactForm.tsx`)
- Validation in `src/lib/contactValidation.ts` (required + email format only)
- Tests: Vitest + Testing Library (`ContactForm.test.tsx`, `contactValidation.test.ts`)
- Compass v1.5.0 installed (`.agent/COMPASS_VERSION`); prior contact-form plan is COMPLETE

## Proposed Architecture

1. Add `MESSAGE_MAX_LENGTH` + max-length check in `contactValidation.ts`.
2. Render counter UI next to the message field; wire `aria-describedby` to include counter/help ids.
3. Extend component and validation tests; capture a11y notes and a screenshot after approval/implementation.
4. No new dependencies.

## Required Capabilities

Inferred from the objective and repository context.

- react-component-development
- typescript-ui
- component-testing
- keyboard-navigation-review
- screen-reader-review
- color-contrast-check
- accessibility-evidence-capture
- unit-test-execution
- integration-test-execution
- definition-of-done-validation
- validation-evidence-capture

**Domains detected:** react, accessibility, test

## Reusable Capabilities Found

Approved Compass Skills ranked for this objective (deterministic matcher).

| Skill | Score | Notes |
|---|---:|---|
| `accessibility-review` | 0.4636 | capability_overlap=0.1636 |
| `testing-validation` | 0.4636 | capability_overlap=0.1636 |
| `react-engineering` | 0.4227 | lifecycle_stage=0.15 |
| `autonomy-budget` | 0.3 | lifecycle_stage=0.15 |
| `capability-planning` | 0.3 | lifecycle_stage=0.15 |
| `code-structure-cleanup` | 0.3 | lifecycle_stage=0.15 |
| `dependency-supply-chain` | 0.3 | lifecycle_stage=0.15 |
| `docker-cloud` | 0.3 | lifecycle_stage=0.15 |
| `github-integration` | 0.3 | lifecycle_stage=0.15 |
| `harness-gc` | 0.3 | lifecycle_stage=0.15 |
| `implementation-planning` | 0.3 | lifecycle_stage=0.15 |
| `ios-engineering` | 0.3 | lifecycle_stage=0.15 |
| `linear-integration` | 0.3 | lifecycle_stage=0.15 |
| `node-engineering` | 0.3 | lifecycle_stage=0.15 |
| `notion-integration` | 0.3 | lifecycle_stage=0.15 |
| `playwright-browser-validation` | 0.3 | lifecycle_stage=0.15 |
| `postgres-prisma` | 0.3 | lifecycle_stage=0.15 |
| `pull-request-preparation` | 0.3 | lifecycle_stage=0.15 |
| `python-ml` | 0.3 | lifecycle_stage=0.15 |
| `repository-discovery` | 0.3 | lifecycle_stage=0.15 |
| `review-fix-loop` | 0.3 | lifecycle_stage=0.15 |
| `security-review` | 0.3 | lifecycle_stage=0.15 |
| `source-code-context` | 0.3 | lifecycle_stage=0.15 |
| `worktree-orchestration` | 0.3 | lifecycle_stage=0.15 |

### Capability Gaps

No capability gaps detected for the inferred requirements.

## Technology Intelligence Candidates

> **NOT APPROVED FOR EXECUTION** — discovery signals only.

*No external candidates queried (Technology Intelligence provider: stub).*

## Task Graph

Execution order: task-discovery → task-architecture → task-impl-frontend → task-validation → task-documentation

| Task ID | Objective | Dependencies | Parallelizable |
|---|---|---|---|
| `task-discovery` | Discover repository structure, tooling, risks, and conventions | — | no |
| `task-architecture` | Define components, contracts, data changes, and rollback strategy | task-discovery | no |
| `task-impl-frontend` | Implement frontend/UI changes for the approved scope | task-architecture | yes |
| `task-validation` | Run applicable validation layers and capture evidence | task-impl-frontend | no |
| `task-documentation` | Update project memory docs and completion records | task-validation | no |

Machine artifact: `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/task-graph.json`

## Proposed Agent Configuration

One manifest per task. Reference profiles map to existing `.cursor/agents/` templates.

| Task | Profile | Model class | Skills | Rationale |
|---|---|---|---|---|
| `task-discovery` | `repository-scout` | reasoning-strong | `repository-discovery`, `capability-planning`, `harness-gc` | Task 'task-discovery' requires [repo-structure-mapping, tooling-identification, convention-discovery]. Reference profile 'repository-scout' with model class 'reasoning-strong'. Selected Skills: [repository-discovery, capability-planning, harness-gc]. |
| `task-architecture` | `architecture-agent` | reasoning-strong | `capability-planning`, `code-structure-cleanup`, `dependency-supply-chain` | Task 'task-architecture' requires [component-boundary-design, api-contract-definition, migration-rollback-strategy]. Reference profile 'architecture-agent' with model class 'reasoning-strong'. Selected Skills: [capability-planning, code-structure-cleanup, dependency-supply-chain]. |
| `task-impl-frontend` | `implementation-agent` | coding-strong | `react-engineering`, `accessibility-review`, `autonomy-budget` | Task 'task-impl-frontend' requires [react-component-development, typescript-ui, component-testing, keyboard-navigation-review, accessibility-evidence-capture]. Reference profile 'implementation-agent' with model class 'coding-strong'. Selected Skills: [react-engineering, accessibility-review, autonomy-budget]. |
| `task-validation` | `test-engineer` | coding-strong | `testing-validation`, `playwright-browser-validation`, `accessibility-review` | Task 'task-validation' requires [unit-test-execution, integration-test-execution, definition-of-done-validation, validation-evidence-capture, playwright-execution, e2e-testing, ui-evidence-capture]. Reference profile 'test-engineer' with model class 'coding-strong'. Selected Skills: [testing-validation, playwright-browser-validation, accessibility-review]. |
| `task-documentation` | `documentation-agent` | fast-iter | `pull-request-preparation`, `autonomy-budget`, `github-integration` | Task 'task-documentation' requires [project-memory-update, progress-tracking, completion-reporting]. Reference profile 'documentation-agent' with model class 'fast-iter'. Selected Skills: [pull-request-preparation, autonomy-budget, github-integration]. |

Machine artifact: `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/manifests.json` (5 agent manifests)

## Workstreams

1. **Validation + UI** — max length + counter in form (`task-impl-frontend`)
2. **Tests + a11y evidence** — Vitest + accessibility review notes (`task-validation`)
3. **Docs** — PROGRESS / TESTING / CHANGELOG as needed (`task-documentation`)

## Parallelization Plan

Sequential per task graph. No parallel workstreams required for this small UI change.

## Files Expected to Change

- `src/lib/contactValidation.ts`
- `src/lib/contactValidation.test.ts`
- `src/components/ContactForm.tsx`
- `src/components/ContactForm.css`
- `src/components/ContactForm.test.tsx`
- `TESTING.md` / `PROGRESS.md` (after implementation)
- `.agent/evidence/sandbox-behavioral-plan-feature-2026-08-20/` (validation artifacts)

## Testing Strategy

Classify as **UI** per `docs/EVIDENCE_MATRIX.md`:

| Required evidence | Command / artifact |
|---|---|
| Automated tests | `npm test` transcript |
| Accessibility notes | `.agent/evidence/.../accessibility.md` |
| Screenshot path(s) | `.agent/evidence/.../contact-message-counter.png` |
| Lint / build | `npm run lint`, `npm run build` |

Store under `.agent/evidence/sandbox-behavioral-plan-feature-2026-08-20/`.

## Security Review

Low risk (client-only form). Confirm no secrets and no unsafe HTML injection in counter/error text.

## Accessibility Review

- Counter associated via `aria-describedby`
- Live updates must not interrupt typing excessively
- Contrast of counter text vs background
- Focus order unchanged; errors still focus first invalid field

## Migration Plan

None (no schema or data migration).

## Deployment Plan

Local sandbox only; no production deploy in this exercise.

## Rollback Plan

Revert feature branch to rollback tag/SHA created at approval time; prior contact form behavior restored.

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Live region announces too often | Prefer `aria-describedby` + visual counter; throttle or announce on blur/limit only |
| Product `./scripts/capability-plan.sh` missing | Run from Compass control repo; copy artifacts into `.agent/plans/<plan-id>/` |
| Regress existing a11y tests | Keep existing error/success tests green |

## Evaluation Strategy

After implementation (post-approval), Captain Compass will determine success by:

- Matching task acceptance criteria from the task graph
- Applicable validation layers from `TESTING.md` / evidence matrix
- Security and accessibility reviews when manifests include those tasks
- Adversarial review before merge when scope is non-trivial
- Comparison of outcome vs inferred required capabilities

Capability planning quality for this plan is evaluated by:

- Explicit capability gaps (must not be silent)
- Deterministic Skill ranking reproducibility
- Inspectable agent manifest rationale per task

## Learning Plan

Retain under `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/`:

- `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/resolve.json`
- `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/task-graph.json`
- `.agent/plans/sandbox-behavioral-plan-feature-2026-08-20/manifests.json`
- Link to issue, branch, PR, tests, and evaluation evidence after execution

Use execution evidence in Milestone 2+ to tune Skill confidence and routing.

## Autonomy Budget

After approval, create `.agent/budgets/sandbox-behavioral-plan-feature-2026-08-20.md` from the budget ledger template and keep it updated each cycle (Skill: `autonomy-budget`).

- Maximum iterations: 5
- Maximum failed validation cycles: 2
- Maximum estimated cost: $15
- Maximum elapsed time: 90 minutes
- Budget ledger path: `.agent/budgets/sandbox-behavioral-plan-feature-2026-08-20.md`
- On limit: write `.agent/evidence/sandbox-behavioral-plan-feature-2026-08-20/BUDGET_STOP_REPORT.md` and stop

## Definition of Done

Satisfy the **UI** row of `docs/EVIDENCE_MATRIX.md` plus Acceptance Criteria. Plan status may move to COMPLETE only after merge (or explicit Captain stop) and memory updates. No product implementation before explicit approval.

## Approval Boundary

**Implementation must not begin until the Captain explicitly approves this plan.**

Machine-generated capability matches and agent manifests are **proposals** only. The Captain may approve, revise, or reject before any product implementation proceeds.

## Approval Record

- Approved by Captain on 2026-08-20 (chat approval: "I approve")
- Plan revision: sandbox-behavioral-plan-feature-2026-08-20
- Max length confirmed as plan default: 500 characters
