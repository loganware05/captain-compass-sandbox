# OVA-31 — Dispatch authorization (Captain)

| Field | Value |
|---|---|
| Run id | `NS-SKILL-002` |
| Linear parent | [OVA-20](https://linear.app/ovaltechnologysolutions/issue/OVA-20) |
| Linear step | [OVA-31](https://linear.app/ovaltechnologysolutions/issue/OVA-31) |
| Routing decision | `.agent/learning-runs/NS-SKILL-002/11-agent-routing.json` |
| Dispatch packet | `.agent/learning-runs/NS-SKILL-002/11-dispatch-packet.json` |
| Captain decision | **DISPATCH AUTHORIZED** |
| Captain utterance | `I approve the dispatch` |
| Decision timestamp (UTC) | `2026-09-12T18:28:35Z` |
| Selected agent (router + M26 live probe) | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` |
| Selected wakeability | `wakeable` (live_probe) |
| Executing agent | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` (First Mate; same as selected) |
| Execution branch | `cursor/ova-31-ns-skill-002-exec-05fd` |
| Skill | `react-engineering` (NS-SKILL-002 accessible-forms lessons) |
| Target | `src/components/ContactForm` |
| Star clone/exec | **forbidden** |
| `approved_for_execution` | remains **false** |

## Authority note

Captain authorized execution of the prepared dispatch packet after M26 live
wakeability scoring. First Mate executes the objective. Linear records this
decision; repository evidence is canonical.
