---
name: from-stars-example-org-python-settings-secrets-hygiene
description: Draft Skill from categorized Stars candidate github-stars-example-org-python-settings-secrets-hygiene
---

# from-stars-example-org-python-settings-secrets-hygiene

## Use this Skill when

Applying lessons derived from a categorized GitHub Stars discovery signal (category `ml-data`).

## Origin candidate

- Candidate ID: `github-stars-example-org-python-settings-secrets-hygiene`
- Discovery signal: `github-stars:live:example-org/python-settings-secrets-hygiene|category:ml-data`
- Source path: `example-org/python-settings-secrets-hygiene`
- Provenance URL: `https://github.com/example-org/python-settings-secrets-hygiene`
- Star category: `ml-data`
- Starred provenance: required
- Capabilities: example, org, python, settings, secrets

## Required draft gates (M23)

- `/agent/repos/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-example-org-python-settings-secrets-hygiene/security-review.md`
- `/agent/repos/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-example-org-python-settings-secrets-hygiene/dependency-supply-chain.md`

## Notes from discovery

[ml-data] Live GitHub starred repo — NOT APPROVED FOR EXECUTION

## Procedure

1. Review provenance, category, security-review, and supply-chain evidence with the Captain.
2. Adapt steps to the current repository context — do not clone or execute the starred repository.
3. Run control-repo `./scripts/doctor.sh` and tests before proposing promotion.
4. Stop for Captain approval before copying into `.cursor/skills/`.

## Prohibited actions

- Do not auto-merge this draft into live Skills
- Do not set `approved_for_execution: true`
- Do not clone or execute external starred repositories from this draft
- Do not draft without security-review + dependency-supply-chain evidence
