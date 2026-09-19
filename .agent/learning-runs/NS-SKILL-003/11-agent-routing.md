# OVA-45 — Agent router scoring (M26 live wakeability probe)

**Router:** `northstar.agent_router.v1`  
**Scored at:** `2026-09-15T18:20:27Z`  
**Scored by:** NorthStar First Mate (`bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd`)  
**Live probe:** enabled (`prefer_probe=true`) via MCP `list-cloud-agents` + `run-info` snapshot  
**Dispatch authorized:** `true` (awaiting Captain: `I approve the dispatch`)

## Objective

Using installed Skill `python-ml` (NS-SKILL-003 secrets/settings hygiene lessons), propose a
bounded fail-closed live API client improvement. Product context:
`loganware05/bitcoin-data-collector` (Kalshi client). Execution is **sandbox-first**
(`loganware05/captain-compass-sandbox`).

- Category: `ml-data`
- Required Skill: `python-ml` (sandbox; improved under PR #56)
- Target repo: `loganware05/captain-compass-sandbox`
- Captain Skill approval: `.agent/learning-runs/NS-SKILL-003/08-captain-decision.md`

## Hard filters + M26 wakeability

| Agent | Eligible | Wakeability | Source | Failures |
|---|---|---|---|---|
| `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` | True | wakeable | live_probe | — |
| `bc-05d4594d-fac7-4378-b595-c20e3c006044` | False | expired | live_probe | effective_availability<=0 |
| `bc-registry-stub-control-only-0001` | False | unknown | live_probe | repository_not_allowlisted, category_unsupported, skill_scope_mismatch |
| `bc-registry-stub-inactive-0002` | False | unknown | live_probe | status!=active, effective_availability<=0, category_unsupported |

## Scores (eligible only)

Weights: `{"skill_match": 0.3, "category_match": 0.2, "repository_familiarity": 0.15, "historical_success": 0.15, "context_continuity": 0.1, "availability": 0.1}`

| Agent | Score | Components |
|---|---:|---|
| `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` | 0.94 | `{"skill_match": 1.0, "category_match": 1.0, "repository_familiarity": 0.9, "historical_success": 0.7, "context_continuity": 1.0, "availability": 1.0}` |

## Selection

- **Selected agent (router):** `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd`
- **Rationale:** Highest AgentScore=0.94 for bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd (wakeability=wakeable/live_probe, effective_availability=1.0).
- **dispatch_ready:** `True` (wakeability gate passed)
- **M26 learning:** historical pin fail-closed on expired despite declared availability=1.0

## Dispatch

Captain authorized. Execution: `src/lib/liveClientSettings.ts` + Experience `13-skill-experience.md`.
