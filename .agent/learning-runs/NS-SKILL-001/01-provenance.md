# 01 — Reconstruct control + sandbox provenance (OVA-6)

**Run:** NS-SKILL-001  
**Mode:** retrospective-validation  
**Linear:** [OVA-6](https://linear.app/ovaltechnologysolutions/issue/OVA-6/01-reconstruct-control-sandbox-provenance)  
**Parent:** [OVA-5](https://linear.app/ovaltechnologysolutions/issue/OVA-5/ns-skill-001-design-system-craft-tokens)  
**Authority:** Repository / GitHub truth wins over the Linear ledger.

## Revisions (authoritative)

| Role | Repository | Revision |
|---|---|---|
| Control (M23 merge to cite) | `loganware05/captains-compass-cursor` | `7ecd84a8a51323e715b29e71f608e0fdab6780d5` |
| Execution / product (sandbox HEAD / PR #44 merge) | `loganware05/captain-compass-sandbox` | `adff1e457402f787126fe17a75d44b02d8d51bcb` |

## NorthStar version

- **At this reconstruction run:** `1.28.0` (sandbox `.agent/COMPASS_VERSION`)
- **Note:** Control may move to `1.29.0` separately (M24 ledger work). This run cites **1.28.0** for artifact reconstruction.

## Topology

| Concern | Location |
|---|---|
| Control / Skills source of truth | `loganware05/captains-compass-cursor` |
| Disposable execution sandbox | `loganware05/captain-compass-sandbox` |
| Promotion policy | **sandbox-first** |
| Captain gate | **human-only** |
| External Star fixture (metadata only) | `example-org/craft-design-tokens` (design-system) — **never cloned** |

## Historical links

- Sandbox PR: https://github.com/loganware05/captain-compass-sandbox/pull/44
- M23 sandbox evidence: `.agent/evidence/m23-craft-tokens/VALIDATION.md`
- Craft tokens UI (historical product work, not modified by this reconstruction):
  - `src/components/CraftTokensDemo.tsx`
  - `src/components/CraftTokensDemo.css`
  - `src/components/CraftTokensDemo.test.tsx`

## Cursor agent (candidate only — not dispatched)

- `bc-05d4594d-fac7-4378-b595-c20e3c006044`
- Status for this reconstruction: **known candidate only**; not dispatched; not an approval.

## Gates recorded

- `approved_for_execution`: **false**
- Captain Skill install approval: **not claimed / not granted** by this reconstruction
- Scope stop: reconstruct **OVA-6..OVA-12** only; do **not** advance OVA-13+
