# OVA-42 — Human Captain decision (PENDING)

| Field | Value |
|---|---|
| Run | `NS-SKILL-003` |
| Linear issue | OVA-42 (record only; not origin of approval) |
| Decision | **PENDING** — awaiting Captain |
| Captain | Logan Ware |
| Channel | Cursor Cloud Agent chat |
| Scope | Choose promote path for secrets-hygiene lessons (sandbox-first) |
| Not in scope | Control-repo upstream Skill install; `approved_for_execution=true`; cloning/executing Stars; bitcoin-data-collector product code changes |

## Authority

When the Captain decides, this file becomes the **canonical repository evidence** of approval for NS-SKILL-003 Skill promote/install in `captain-compass-sandbox`.

Linear may link this path and mark OVA-42 Done after the decision is written here. Linear must not be treated as the approval authority.

## Preconditions reviewed (ready for Captain)

- OVA-35..OVA-41 artifacts under `.agent/learning-runs/NS-SKILL-003/`
- Security + dependency/supply-chain scorecards **pass** for primary candidate `python-settings-secrets-hygiene`
- Sandbox harness **passed** (`SANDBOX_TESTED`, fixture-file-checks)
- Loop mode: **improve-existing** → target Skill `python-ml` (similarity 0.37)
- Draft also produced at `.agent/capabilities/candidates/skill-drafts/from-stars-example-org-python-settings-secrets-hygiene/`
- Secondary candidate `httpx-resilient-clients` also SANDBOX_TESTED (same improve → `python-ml` path)
- Product context: bitcoin-data-collector M27 review themes (env-only creds, key-path guards, fail-closed auth)
- Heuristic categorizer labeled fixtures `ml-data` (not `backend-library`); usefulness still gated by scorecards

## Decision options (Captain chooses one)

1. **Improve `python-ml`** — fold secrets-hygiene (+ optional HTTPX resilience) lessons into existing Skill via reviewed sandbox PR (matches loop mode).
2. **Promote new Skill** — e.g. `python-settings-secrets-hygiene` (or similar slug) as a dedicated Skill; keep `python-ml` unchanged.
3. **Defer / reject** — retain evidence only; no promote/install.

## Explicit approval phrase (when ready)

Reply with one of:

- `I approve OVA-42: improve python-ml`
- `I approve OVA-42: new skill <slug>`
- `I reject OVA-42`

## Safety remains in force until approval

- `approved_for_execution` stays `false` (no Star clone/exec)
- No live `.cursor/skills/` install without `--captain-approved` + this file updated
- No auto-merge; install lands through GitHub PR review
- bitcoin-data-collector remains product context only (no Star clone into that repo for this run)
