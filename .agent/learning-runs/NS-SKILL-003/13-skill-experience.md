# OVA-46 — Skill Experience (NS-SKILL-003)

| Field | Value |
|---|---|
| Run | `NS-SKILL-003` |
| Skill | `python-ml` (secrets/settings hygiene lessons) |
| Dispatch | Captain-authorized `2026-09-15T18:46:52Z` |
| Executing agent | `bc-0b8ec108-10ec-4204-a4e4-8bedbf0405fd` |
| Outcome | **success** |
| Tests | 5 passed (`liveClientSettings`) |

## What worked

- M26 routing selected a wakeable First Mate; historical pin fail-closed
- Lessons 9–13 transferred into a sandbox-native TS live-client settings helper
  (env-only credentials, outside-worktree key paths, fail-closed config errors)
- Evidence records env var **names** only via `expectedCredentialEnvNames`

## Corrections / gaps

- Sandbox is React/TS; applied Skill practices in TypeScript rather than Python
- bitcoin-data-collector product code not mutated (sandbox-first constraint)

## Reuse

Keep fail-closed startup + outside-worktree key path checks as default for any
sandbox live-client demo.
