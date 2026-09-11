# OVA-13 — Human Captain decision (canonical)

| Field | Value |
|---|---|
| Run | `NS-SKILL-001` |
| Linear issue | OVA-13 (record only; not origin of approval) |
| Decision | **APPROVED** for sandbox Skill install / promotion |
| Captain | Logan Ware |
| Decided at | 2026-09-11T05:37:00Z |
| Channel | Cursor Cloud Agent chat (explicit: “I approve OVA-13”) |
| Scope | Promote `craft-tokens-design-system` to sandbox-available and install via reviewed sandbox PR (OVA-14 / OVA-15) |
| Not in scope | Control-repo upstream install; `approved_for_execution=true`; cloning/executing Stars; OVA-16+ dispatch without router scoring |

## Authority

This file is the **canonical repository evidence** of Captain approval for NS-SKILL-001 Skill install in `captain-compass-sandbox`.

Linear may link this path and mark OVA-13 Done. Linear must not be treated as the approval authority.

## Preconditions reviewed

- OVA-6..OVA-12 artifacts reconstructed under `.agent/learning-runs/NS-SKILL-001/` and TI scorecards
- Security + dependency/supply-chain scorecards present for `craft-design-tokens`
- Sandbox reconciliation links M23 craft-tokens evidence and historical PR #44
- Skill draft exists at `.agent/capabilities/candidates/skill-drafts/craft-tokens-design-system/`

## Decision text

Captain Logan Ware explicitly approved OVA-13 on 2026-09-11, authorizing sandbox-first promotion and Skill installation for `craft-tokens-design-system`.

## Safety remains in force

- `approved_for_execution` stays `false` (no Star clone/exec)
- No auto-merge; install lands through GitHub PR review
- Agent routing (OVA-16) still requires eligibility scoring before dispatch
