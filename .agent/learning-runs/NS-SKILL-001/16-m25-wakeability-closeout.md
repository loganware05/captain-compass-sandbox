# NS-SKILL-001 — M25 wakeability follow-up closeout

| Field | Value |
|---|---|
| Run id | `NS-SKILL-001` |
| Origin Experience | OVA-17 |
| Follow-up | OVA-19 / M25 |
| Control PR | https://github.com/loganware05/captains-compass-cursor/pull/134 (**MERGED**) |
| Control merge | `69e949413adb87d608dcce62beaeacc17ee63bda` |
| Sandbox registry PR | https://github.com/loganware05/captain-compass-sandbox/pull/48 (**MERGED**) |
| Sandbox merge | `7404066a7db43752c2e71a0748d568d9cdc615ca` |
| Closed at (UTC) | `2026-09-11T18:38:00Z` |

## Outcome

Deferred router wakeability improve from OVA-17 is **complete and merged**.

- Historical pin marked `wakeability_status=expired` in `.agent/agents/registry.json`
- Control router `northstar.agent_router.v1` fails closed for expired/unreachable
- Skill lifecycle unchanged: **retain** / `AVAILABLE_SKILL`
- `approved_for_execution` remains **false**

## Authority

Captain merged both PRs. Linear records only; repository evidence is canonical.
