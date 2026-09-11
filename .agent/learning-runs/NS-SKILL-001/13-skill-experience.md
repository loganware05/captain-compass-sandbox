# NS-SKILL-001 — Skill Experience (OVA-17)

| Field | Value |
|---|---|
| Run id | `NS-SKILL-001` |
| Linear | [OVA-17](https://linear.app/ovaltechnologysolutions/issue/OVA-17) |
| Parent | [OVA-5](https://linear.app/ovaltechnologysolutions/issue/OVA-5) |
| Skill | `craft-tokens-design-system` |
| Recorded at (UTC) | `2026-09-11T06:10:00Z` |
| Selected agent (router) | `bc-05d4594d-fac7-4378-b595-c20e3c006044` (score 0.9325) |
| Executing agent | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` |
| Execution mode | First Mate proxy — selected agent not wakeable via MCP |
| Branch | `cursor/ova-ns-skill-001-exec-craft-tokens-05fd` |
| Dispatch auth | `.agent/learning-runs/NS-SKILL-001/12-dispatch-authorization.md` |

## Outcome

**Success** for the bounded objective. Installed Skill procedure was followed:
in-repo CSS tokens only, accessibility preserved, no Star clone/exec, no new
dependencies, `approved_for_execution` remains **false**.

### What changed

- Added a live **Token usage** figure to `CraftTokensDemo` showing CSS snippet +
  preview surface driven by the active `--craft-*` token.
- Updated Skill-oriented documentation comment on the component.
- Extended vitest coverage for usage caption, snippet, and preview updates.

### Verification

- `npm test -- src/components/CraftTokensDemo.test.tsx` → **4 passed**
- Constraints honored: no lockfile / dependency changes; no Star clone

## Selection correctness

| Question | Result |
|---|---|
| Did hard filters reject ineligible stubs? | Yes |
| Was selection score-based (not hardcoded)? | Yes (0.9325 sole eligible) |
| Could selected agent be woken via MCP? | **No** (expired / unavailable) |
| Did proxy execution preserve attribution? | Yes — selected vs executing IDs both recorded |

**Learning:** Router availability scoring treated the historical pin as available
at score time; live dispatch revealed it could not be woken. Future router
passes should discount or re-check live agent wakeability before marking
`availability=1.0` for expired cloud-agent pins.

## Skill material value

| Dimension | Assessment |
|---|---|
| Procedure clarity | High — steps mapped 1:1 to demo work |
| Guardrails | Effective — prohibited Star clone/exec stayed closed |
| Missing context | Live agent wakeability not encoded in Skill |
| Human corrections | Captain dispatch approval required (correct) |
| Reusable improvement | Add wakeability check to Agent Routing Contract / registry |

## Failed assumptions

1. Selected agent `bc-05d4594d-…` would be dispatchable after Captain approval.
2. OVA-16 “route + dispatch” could complete without a First Mate proxy path.

## Evidence links (repo)

- Auth: `.agent/learning-runs/NS-SKILL-001/12-dispatch-authorization.md`
- Routing: `.agent/learning-runs/NS-SKILL-001/11-agent-routing.json`
- Packet: `.agent/learning-runs/NS-SKILL-001/11-dispatch-packet.json`
- Code: `src/components/CraftTokensDemo.{tsx,css,test.tsx}`
- Skill: `.cursor/skills/craft-tokens-design-system/SKILL.md`

## Recommendation for OVA-18 (awaiting Captain)

Default lean: **Retain** Skill in sandbox AVAILABLE_SKILL; optionally **Improve**
router availability checks. Do **not** retire. Do **not** promote to control
repo without a separate Captain-reviewed upstream PR.
