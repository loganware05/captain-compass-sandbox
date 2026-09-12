# OVA-31 — Agent router scoring (M26 live wakeability probe)

**Router:** `northstar.agent_router.v1`  
**Scored at:** `2026-09-12T18:22:22Z`  
**Scored by:** NorthStar First Mate (`bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd`)  
**Live probe:** enabled (`prefer_probe=true`) via MCP `list-cloud-agents` snapshot  
**Dispatch authorized:** `false` (awaiting Captain: `I approve the dispatch`)

## Objective

Using installed Skill `react-engineering` (NS-SKILL-002 accessible-forms lessons), propose a bounded accessibility improvement to a sandbox React form surface without adding dependencies, without cloning Stars, and with tests still green.

- Category: `frontend-ui`
- Required Skill: `react-engineering` (sandbox; improved under PR #51)
- Target repo: `loganware05/captain-compass-sandbox`
- Captain Skill approval: `.agent/learning-runs/NS-SKILL-002/08-captain-decision.md`

## Hard filters + M26 wakeability

| Agent | Eligible | Wakeability | Source | Failures |
|---|---|---|---|---|
| `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` | True | wakeable | live_probe | — |
| `bc-05d4594d-fac7-4378-b595-c20e3c006044` | False | expired | live_probe | effective_availability<=0 |
| `bc-registry-stub-control-only-0001` | False | unknown | live_probe | repository_not_allowlisted, category_unsupported, skill_scope_mismatch |
| `bc-registry-stub-inactive-0002` | False | unknown | live_probe | status!=active, effective_availability<=0 |

## Scores (eligible only)

Weights: `{"skill_match": 0.3, "category_match": 0.2, "repository_familiarity": 0.15, "historical_success": 0.15, "context_continuity": 0.1, "availability": 0.1}`

| Agent | Score | Components |
|---|---:|---|
| `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` | 0.955 | `{"skill_match": 1.0, "category_match": 1.0, "repository_familiarity": 0.9, "historical_success": 0.8, "context_continuity": 1.0, "availability": 1.0}` |

## Selection

- **Selected agent (router):** `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd`
- **Rationale:** Highest AgentScore=0.955 for bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd (wakeability=wakeable/live_probe, effective_availability=1.0).
- **dispatch_ready:** `True` (wakeability gate passed)
- **M26 learning:** historical pin `bc-05d4594d-fac7-4378-b595-c20e3c006044` declared availability=1.0 but live probe → expired → filtered (OVA-17 / M25 / M26)

## Dispatch

Packet at `.agent/learning-runs/NS-SKILL-002/11-dispatch-packet.json` with
`dispatch_authorized: false`. Stop for Captain authorization before execution.

Evidence pack: `.agent/evidence/ns-skill-002-ova-31-routing/`
