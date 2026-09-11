# NS-SKILL-001 — Dispatch authorization (Captain)

| Field | Value |
|---|---|
| Run id | `NS-SKILL-001` |
| Linear parent | [OVA-5](https://linear.app/ovaltechnologysolutions/issue/OVA-5) |
| Linear step | [OVA-16](https://linear.app/ovaltechnologysolutions/issue/OVA-16) |
| Decision artifact | `.agent/learning-runs/NS-SKILL-001/11-agent-routing.json` |
| Dispatch packet | `.agent/learning-runs/NS-SKILL-001/11-dispatch-packet.json` |
| Captain decision | **DISPATCH AUTHORIZED** |
| Captain utterance | `I approve the dispatch` |
| Decision timestamp (UTC) | `2026-03-27T19:10:00Z` |
| Selected agent (router) | `bc-05d4594d-fac7-4378-b595-c20e3c006044` |
| Selected agent status | `EXPIRED` / not wakeable via MCP |
| Executing agent (First Mate) | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` |
| Execution branch | `cursor/ova-ns-skill-001-exec-craft-tokens-05fd` |
| Skill | `craft-tokens-design-system` |
| Target | `src/components/CraftTokensDemo` |
| Star clone/exec | **forbidden** |
| `approved_for_execution` | remains **false** |

## Authority note

Captain authorized execution of the prepared dispatch packet.
MCP cannot wake the selected historical agent `bc-05d4594d-…`.
First Mate run `bc-0b8ec108-…` executes the objective with full attribution:
router selection remains recorded; execution agent is separately recorded.
