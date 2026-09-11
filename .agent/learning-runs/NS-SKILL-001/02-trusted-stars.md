# 02 — Confirm trusted Star provenance (OVA-7)

**Run:** NS-SKILL-001  
**Linear:** [OVA-7](https://linear.app/ovaltechnologysolutions/issue/OVA-7/02-confirm-trusted-star-provenance)  
**Rule:** Non-starred inputs fail closed. External repos may enter TI only as starred discovery signals.

## Star signal used (metadata only)

| Field | Value |
|---|---|
| Full name | `example-org/craft-design-tokens` |
| Category | `design-system` |
| Role | Fixture / inspiration for craft design-token procedures |
| Provenance | Trusted Stars / TI fixture path (control M23 flywheel) |
| Cloned | **false** |
| Executed | **false** |
| Vendor package installed | **false** |

## Verification checklist

- [x] Signal is a starred / fixture Star record with `design-system` category
- [x] No non-starred third-party repo was used as an executable dependency
- [x] Sandbox M23 experiment used **in-repo CSS variables only** (see `.agent/evidence/m23-craft-tokens/VALIDATION.md`)
- [x] Reconstruction does not clone `example-org/craft-design-tokens`
- [x] `approved_for_execution` remains **false**

## Fail-closed statement

If a future intake lacks starred provenance, TI scorecard and Skill draft emission must fail closed. Historical sandbox success does not waive this gate.

## Downstream artifacts

- Categorization: `.agent/learning-runs/NS-SKILL-001/03-ti-categorization.json` (OVA-8)
- Scorecards: `.agent/evidence/ti-scorecards/craft-design-tokens/` (OVA-9, OVA-10)
