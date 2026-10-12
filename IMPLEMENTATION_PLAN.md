# Implementation Plan

## Metadata

- Status: APPROVED
- Plan ID: chore-refresh-compass-1.59.0-2026-10-12
- Issue: local/refresh-compass-1.59.0
- Branch: chore/update-captains-compass-v1.59.0
- Created: 2026-10-12
- Last updated: 2026-10-12
- Approved by: Captain
- Approval date: 2026-10-12
- Approved revision: chore-refresh-compass-1.59.0-2026-10-12
- Rollback checkpoint: `f452e17` (origin/main pre-refresh, Compass 1.40.1)
- Control source: captains-compass-cursor `VERSION=1.59.0` @ HEAD (no `v1.59.0` git tag yet; use `update.sh` / `install.sh --force` equivalent)

## Request

Refresh the sandbox NorthStar / Captain's Compass install from **1.40.1** to
control **1.59.0** via forward `update.sh` (control checkout already at intended version).

## Problem Statement

Sandbox `.agent/COMPASS_VERSION` is `1.40.1` while control `VERSION` is
`1.59.0`, so workflow files (rules, Skills, agents, hooks, commands) are stale
relative to the control library. GitHub release tags currently stop earlier than
`1.59.0`; refresh from control main where `VERSION` matches.

## Desired Outcome

- `.agent/COMPASS_VERSION` reads `1.59.0`
- `.cursor/` refreshed from control HEAD at VERSION 1.59.0
- Product memory docs preserved
- Doctor passes
- Sandbox-only Skill `craft-tokens-design-system` retained (not in control library)

## Acceptance Criteria

- [x] `update.sh` run from control checkout with `VERSION=1.59.0`
- [x] `.agent/COMPASS_VERSION` == `1.59.0`
- [x] `doctor.sh` passes against the sandbox
- [x] `craft-tokens-design-system` still present after refresh
- [x] No product `src/` behavior changes
- [x] PROGRESS / CHANGELOG / refresh evidence updated
- [x] Dedicated chore branch + PR-ready diff

## Non-Goals

- Creating the missing `v1.59.0` control tag (Captain/control follow-up)
- Downgrade support
- Merging unrelated Learning Loop untracked drafts
- Product feature work

## Approval Record

- Approved by Captain on 2026-10-12 (chat: "The sandbox reads 1.40.1 while control VERSION is 1.59.0, update that")

## Definition of Done

Version file matches control VERSION; doctor green; docs/evidence updated; ready for commit/PR.
