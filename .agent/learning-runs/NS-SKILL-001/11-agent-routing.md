# OVA-16 — Agent router scoring (no dispatch yet)

**Router:** `northstar.agent_router.v1`  
**Scored at:** 2026-09-11T05:51:32Z  
**Selected by:** NorthStar First Mate  
**Dispatch authorized:** `false` (awaiting Captain)

## Objective

Using installed Skill craft-tokens-design-system, propose a bounded improvement to src/components/CraftTokensDemo (documentation comment or token usage example) without adding dependencies, without cloning Stars, and with tests still green.

- Category: `design-system`
- Required Skill: `craft-tokens-design-system` (installed at `.cursor/skills/craft-tokens-design-system/`)
- Target repo: `loganware05/captain-compass-sandbox`
- Proposed branch: `cursor/ova-ns-skill-001-exec-craft-tokens-05fd`
- Captain approval verified: `.agent/learning-runs/NS-SKILL-001/08-captain-decision.md`

## Hard filters

| Agent | Eligible | Failures |
|---|---|---|
| `bc-05d4594d-fac7-4378-b595-c20e3c006044` | True | — |
| `bc-registry-stub-control-only-0001` | False | repository_not_allowlisted, category_unsupported, skill_scope_not_sandbox |
| `bc-registry-stub-inactive-0002` | False | status!=active, availability<=0 |

## Scores (eligible only)

Weights: `{"skill_match": 0.3, "category_match": 0.2, "repository_familiarity": 0.15, "historical_success": 0.15, "context_continuity": 0.1, "availability": 0.1}`

| Agent | Score | Components |
|---|---:|---|
| `bc-05d4594d-fac7-4378-b595-c20e3c006044` | 0.9325 | `{"skill_match": 1.0, "category_match": 1.0, "repository_familiarity": 0.85, "historical_success": 0.7, "context_continuity": 1.0, "availability": 1.0}` |


## Selection

- **Selected agent:** `bc-05d4594d-fac7-4378-b595-c20e3c006044`
- **Rationale:** Only eligible agent after hard filters; highest AgentScore=0.9325 (skill_match=1.0, category_match=1.0, repo_familiarity=0.85, historical_success=0.7, context_continuity=1.0, availability=1.0). Not hardcoded: stubs failed repo allowlist / inactive filters.

## Dispatch

Packet prepared at `.agent/learning-runs/NS-SKILL-001/11-dispatch-packet.json` with
`dispatch_authorized: false`.

**Not done:** launching the Cursor Cloud Agent. Awaiting Captain authorization to dispatch.
