# OVA-28 — Human Captain decision (canonical)

| Field | Value |
|---|---|
| Run | `NS-SKILL-002` |
| Linear issue | OVA-28 (record only; not origin of approval) |
| Decision | **APPROVED** for sandbox Skill promote / improve-install |
| Captain | Logan Ware |
| Decided at | 2026-09-12T17:41:00Z |
| Channel | Cursor Cloud Agent chat (explicit: “I approve OVA-28”) |
| Scope | Promote Stars candidate `github-stars-example-org-accessible-react-forms` to sandbox-available and apply improve-existing lessons into live Skill `react-engineering` via reviewed sandbox PR (OVA-29 / OVA-30) |
| Not in scope | Control-repo upstream install; `approved_for_execution=true`; cloning/executing Stars; OVA-31+ dispatch without router scoring + wakeability probe |

## Authority

This file is the **canonical repository evidence** of Captain approval for NS-SKILL-002 Skill promote/install in `captain-compass-sandbox`.

Linear may link this path and mark OVA-28 Done. Linear must not be treated as the approval authority.

## Preconditions reviewed

- OVA-21..OVA-27 artifacts under `.agent/learning-runs/NS-SKILL-002/` and TI scorecards
- Security + dependency/supply-chain scorecards present for `accessible-react-forms`
- Sandbox harness passed (`SANDBOX_TESTED`)
- Mode: **improve-existing** → target Skill `react-engineering`
- Merged bootstrap PR #50; control M25/M26 PRs #136/#137 merged

## Decision text

Captain Logan Ware explicitly approved OVA-28 on 2026-09-12, authorizing sandbox-first promotion and live Skill improvement for accessible React forms lessons into `react-engineering`.

## Safety remains in force

- `approved_for_execution` stays `false` (no Star clone/exec)
- No auto-merge; install lands through GitHub PR review
- Agent routing (OVA-31) still requires eligibility scoring + wakeability before dispatch
