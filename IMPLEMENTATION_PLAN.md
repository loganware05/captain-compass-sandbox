# Implementation Plan

## Metadata

- Status: APPROVED
- Plan ID: wave1-skills-sandbox-carryover-2026-10-11
- Issue: local/wave1-skills-sandbox-carryover
- Branch: feature/local-wave1-skills-sandbox-carryover
- Created: 2026-10-11
- Last updated: 2026-10-11
- Approved by: Captain
- Approval date: 2026-10-11
- Approved revision: wave1-skills-sandbox-carryover-2026-10-11
- Rollback checkpoint: origin/main @ 4cf3ca1 (Compass 1.40.1)

## Request

Update the sandbox to carry over the three Wave 1 Stars Skills already promoted
in the NorthStar control library (OVA-71):

- `agent-skills-packaging`
- `goose-agent-orchestration`
- `security-audit-procedures`

## Problem Statement

AVAILABLE_SKILL proposals and Learning Loop evidence exist under
`.agent/capabilities/candidates/`, but the sandbox `.cursor/skills/` tree does
not yet include the three Captain-promoted Wave 1 sidecars present in the
control repo.

## Desired Outcome

Sandbox agents can load the three Skills from `.cursor/skills/<slug>/` with the
same metadata/procedure content as the control library, plus install evidence.

## Acceptance Criteria

- [x] Three Skill directories installed under `.cursor/skills/`
- [x] Each has `SKILL.md` + `capability.yaml` (`lifecycle_stage: AVAILABLE_SKILL`)
- [x] Install evidence under `.agent/evidence/wave1-skills-sandbox-carryover/`
- [x] PROGRESS / CHANGELOG updated
- [x] No TI candidate sets `approved_for_execution: true`
- [x] No product `src/` behavior changes

## Non-Goals

- Control-repo `SKILL_SLUGS` / registry compiler changes (already done in OVA-71)
- Promoting drawio / taste / other Learning Loop drafts
- Cloning or executing starred repositories
- Product UI or contact-form changes

## Approval Record

- Approved by Captain on 2026-10-11 (chat: "update the sandbox to carry over the three new skills")
- Plan revision: wave1-skills-sandbox-carryover-2026-10-11

## Definition of Done

Skills present on branch; docs + evidence updated; ready for Captain-reviewed commit/PR.
