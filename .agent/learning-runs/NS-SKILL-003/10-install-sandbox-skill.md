# OVA-44 — Install Skill through sandbox PR

| Field | Value |
|---|---|
| Install mode | **improve-existing / apply-live** (not a new Skill slug) |
| Live Skill path | `.cursor/skills/python-ml/SKILL.md` |
| Applied lesson marker | `compass-learned-from-stars` (settings/secrets hygiene steps 9–13) |
| Draft copy | `.agent/capabilities/candidates/skill-drafts/python-ml-from-learning/SKILL.md` |
| Audit | `.agent/learning-applied/python-ml-github-stars-example-org-python-settings-secrets-hygiene.json` |
| Captain evidence | `.agent/learning-runs/NS-SKILL-003/08-captain-decision.md` |
| Rollback | revert this PR / restore prior `python-ml/SKILL.md` without the learned block |
| Not implied | Control-repo upstream install; `PROVEN_SKILL`; Star clone/exec; or agent dispatch (OVA-45+) |
| Installed at | `2026-09-13T03:12:55Z` |

## Lessons folded into `python-ml`

9. Env/secrets-manager credentials only  
10. Key paths outside worktree; fail closed if missing  
11. Auth/config failures fatal (no broad Exception swallow)  
12. Typed env-bound settings validated at startup  
13. Record env var *names* (never values) in evidence  
