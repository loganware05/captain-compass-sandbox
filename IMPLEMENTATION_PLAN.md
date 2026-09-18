# Implementation Plan

## Metadata

- Status: APPROVED
- Plan ID: m40-filesystem-gated-context-sandbox-validation
- Issue: local/m40-sandbox-validation (placeholder — control PR #177)
- Branch: cursor/m40-filesystem-gated-context-ea39
- Created: 2026-09-18
- Last updated: 2026-09-18
- Approved by: Captain (Logan Ware)
- Approval date: 2026-09-18

## Request

Validation proving ground for control-repo milestone M40 (Filesystem-Gated
Context & Dependency Architecture, control plan `m40-filesystem-gated-context`,
approved 2026-09-18). This sandbox change exists to exercise the M40 inode
store, context walker, and `northstar review` boundary gate against a real
React/TS codebase.

## Scope

1. Workflow refresh to the M40 control state (`update.sh` from control repo).
2. Inode store + context tree built over `src/` (`.agent/inodes/`,
   `.agent/context/` — local, gitignored runtime artifacts).
3. A clean cross-boundary feature: `src/lib/formAnalytics.ts` (declared
   `@complexity` contracts) consumed by `src/components/FormIssuesSummary.tsx`,
   with unit tests.
4. Validation: `npm run lint`, `npm run test`, `npm run build`.
5. `northstar review` boundary gate evidence: clean change (expect zero
   boundary findings) + seeded-violation diff (expect detection), logged under
   `.agent/evidence/m40-filesystem-gated-context/`.

## Non-Goals

- No visual/App layout changes (no browser evidence required).
- No production deploy.

## Rollback

- `git checkout main` — branch is disposable; `main` untouched until evidence
  is green.

## Approval Record

Approved by the Captain as part of control plan `m40-filesystem-gated-context`
(2026-09-18, "I approve the M40 Implementation plan").
