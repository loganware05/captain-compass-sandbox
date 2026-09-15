---
name: python-ml
description: Implements Python services, data processing, model training/eval, and reproducible ML experiment workflows
---

# Python and Machine Learning

## Use this Skill when

Working on Python services, data pipelines, model training/evaluation, inference, experiment logging, dataset contracts, or ML reproducibility requirements.

## Inputs

- Approved IMPLEMENTATION_PLAN.md
- Existing Python package layout, dependency manager (pip/poetry/uv), and test runner
- Dataset and experiment constraints from PROJECT_CONTEXT.md

## Procedure

1. Match existing project packaging and lint/test tooling.
2. Keep training, evaluation, and inference entrypoints explicit and documented.
3. Pin or lock dependencies according to project convention; record versions in evidence when relevant.
4. Separate raw data, processed data, and model artifacts; do not commit large datasets or weights by default.
5. Define dataset contracts (schema, split, labels) before changing training code.
6. Log experiment configuration (seed, hyperparams, data revision) for reproducibility.
7. Add unit tests for transforms/metrics and smoke tests for training/inference when feasible.
8. Record commands, metrics, and artifact locations under `.agent/evidence/`.

## Prohibited actions

- Do not commit secrets, raw PII datasets, or production model credentials
- Do not silently change evaluation metrics or baselines to force a “win”
- Do not run expensive cloud training without Captain approval and a budget

<!-- compass-learned-from-stars:begin -->
## Learned from categorized Stars (Captain-applied)

- Target Skill: `python-ml`
- Candidate: `github-stars-example-org-python-settings-secrets-hygiene`
- Similarity: `0.37`
- Category: `ml-data`
- Applied at: `2026-09-13T03:12:55Z`

Python settings/secrets hygiene for live API clients (NS-SKILL-003):
9. Load credentials only from environment or an approved secrets manager — never hardcode API keys, tokens, or private-key material in source, fixtures committed to git, or default config files.
10. Keep private-key and credential file paths outside the worktree; refuse paths that resolve under the repo root, and fail closed when a required key path is missing or unreadable.
11. Treat auth/config failures as fatal for live clients: raise or exit with a clear error — do not catch broad `Exception` and continue collecting/trading with a degraded client.
12. Prefer typed settings objects (e.g. pydantic-settings / env-bound config) with explicit required fields; validate at startup before opening network sessions.
13. Record which env var *names* (not values) a service expects under `.agent/evidence/` when changing live client auth; never log secret values.

Do not clone or execute the starred repository. Review this lesson before treating it as procedure.
<!-- compass-learned-from-stars:end -->
