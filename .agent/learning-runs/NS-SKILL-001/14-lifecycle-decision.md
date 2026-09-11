# NS-SKILL-001 — Lifecycle decision (OVA-18)

| Field | Value |
|---|---|
| Run id | `NS-SKILL-001` |
| Linear | [OVA-18](https://linear.app/ovaltechnologysolutions/issue/OVA-18) |
| Parent | [OVA-5](https://linear.app/ovaltechnologysolutions/issue/OVA-5) |
| Skill | `craft-tokens-design-system` |
| Captain | Logan Ware |
| Utterance | `Retain the sandbox skill and proceed` |
| Decision timestamp (UTC) | `2026-09-11T15:43:00Z` |
| Experience evidence | `.agent/learning-runs/NS-SKILL-001/13-skill-experience.md` |
| Dispatch auth | `.agent/learning-runs/NS-SKILL-001/12-dispatch-authorization.md` |
| Skill install path | `.cursor/skills/craft-tokens-design-system/` |

## Decision

**RETAIN** — keep `craft-tokens-design-system` as sandbox `AVAILABLE_SKILL`.

| Option | Chosen | Notes |
|---|---|---|
| Retain (sandbox AVAILABLE_SKILL) | **Yes** | Captain-directed |
| Improve (Skill content) | No (deferred) | Skill procedure was adequate for OVA-16/17 |
| Improve (router wakeability) | Deferred follow-up | Not blocking retain; see Experience learning |
| Prove (PROVEN_SKILL) | No | Only one successful Experience so far |
| Retire | No | — |
| Upstream to control repo | No | Requires a separate Captain-reviewed PR later |

## Invariants after decision

- `lifecycle_stage` remains `AVAILABLE_SKILL` in sandbox
- `approved_for_execution` remains **false**
- Skill stays sandbox-first; **not** copied into `loganware05/captains-compass-cursor`
- Linear records only; this repo artifact is canonical

## Proceed scope

OVA-18 closes Run 001’s M7 learn gate. No further lifecycle mutation in this run
unless Captain opens a new objective (additional Experience toward prove, Skill
content improve, router improve, or upstream PR).
