# OVA-42 — Human Captain decision (canonical)

| Field | Value |
|---|---|
| Run | `NS-SKILL-003` |
| Linear issue | OVA-42 (record only; not origin of approval) |
| Decision | **APPROVED** — improve existing Skill `python-ml` |
| Captain | Logan Ware |
| Decided at | 2026-09-13T03:10:00Z |
| Channel | Cursor Cloud Agent chat (explicit: “I approve OVA-42: improve python-ml”) |
| Scope | Promote Stars candidate `github-stars-example-org-python-settings-secrets-hygiene` to sandbox-available and apply improve-existing lessons into live Skill `python-ml` via reviewed sandbox PR (OVA-43 / OVA-44) |
| Not in scope | Control-repo upstream install; `approved_for_execution=true`; cloning/executing Stars; bitcoin-data-collector product code changes; new Skill slug |

## Authority

This file is the **canonical repository evidence** of Captain approval for NS-SKILL-003 Skill promote/install in `captain-compass-sandbox`.

Linear may link this path and mark OVA-42 Done. Linear must not be treated as the approval authority.

## Preconditions reviewed

- OVA-35..OVA-41 artifacts under `.agent/learning-runs/NS-SKILL-003/`
- Security + dependency/supply-chain scorecards **pass** for primary candidate
- Sandbox harness **passed** (`SANDBOX_TESTED`)
- Mode: **improve-existing** → target Skill `python-ml`
- Product context: bitcoin-data-collector M27 themes (env-only creds, key-path guards, fail-closed auth)

## Decision text

Captain Logan Ware explicitly approved OVA-42 on 2026-09-13 with: `I approve OVA-42: improve python-ml`, authorizing sandbox-first promotion and live Skill improvement for settings/secrets hygiene lessons into `python-ml`.

## Safety remains in force

- `approved_for_execution` stays `false` (no Star clone/exec)
- No auto-merge; install lands through GitHub PR review
- No control-repo `.cursor/skills/` mutation in this step
- Agent routing (OVA-45+) still requires eligibility scoring before dispatch
