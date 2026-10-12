# Wave 1 Skills — sandbox carry-over

- **Issue:** local/wave1-skills-sandbox-carryover
- **Branch:** `feature/local-wave1-skills-sandbox-carryover`
- **Base:** `origin/main` @ `4cf3ca1` (Compass `1.40.1`)
- **Captain request:** carry over the three new Wave 1 AVAILABLE Skills into the sandbox
- **Control provenance:** captains-compass-cursor OVA-71 (`eab14d4`)

## Skills installed

| Slug | Source candidate | Install path |
|---|---|---|
| `agent-skills-packaging` | `github-stars-anthropics-skills` | `.cursor/skills/agent-skills-packaging/` |
| `goose-agent-orchestration` | `github-stars-aaif-goose-goose` | `.cursor/skills/goose-agent-orchestration/` |
| `security-audit-procedures` | `github-stars-cloudflare-security-audit-skill` | `.cursor/skills/security-audit-procedures/` |

Copied from control-repo sidecars (`SKILL.md` + `capability.yaml`). Metadata/procedure only; `approved_for_execution` remains false on TI candidates.

## Validation

```bash
test -f .cursor/skills/agent-skills-packaging/SKILL.md
test -f .cursor/skills/goose-agent-orchestration/SKILL.md
test -f .cursor/skills/security-audit-procedures/SKILL.md
test -f .cursor/skills/agent-skills-packaging/capability.yaml
test -f .cursor/skills/goose-agent-orchestration/capability.yaml
test -f .cursor/skills/security-audit-procedures/capability.yaml
```

All six files present after install.
