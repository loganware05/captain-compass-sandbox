# NS-SKILL-002 / OVA-31 validation — M26 live wakeability routing

| Field | Value |
|---|---|
| Scored at | 2026-09-12T18:22:22Z |
| Router | northstar.agent_router.v1 |
| Live probe | prefer_probe=true |
| Selected | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` wakeable/live_probe score=0.955 |
| Historical pin | `bc-05d4594d-fac7-4378-b595-c20e3c006044` expired/live_probe filtered |
| dispatch_ready | true |
| dispatch_authorized | false |

## Command

```bash
CONTROL=../captains-compass-cursor
SANDBOX=.
$CONTROL/scripts/score-agent-routing.sh \
  --registry $SANDBOX/.agent/agents/registry.json \
  --objective $SANDBOX/.agent/evidence/ns-skill-002-ova-31-routing/objective.json \
  --out $SANDBOX/.agent/evidence/ns-skill-002-ova-31-routing/routing-decision.json \
  --cloud-agents-json $SANDBOX/.agent/evidence/ns-skill-002-ova-31-routing/cloud-agents-live.json
```
