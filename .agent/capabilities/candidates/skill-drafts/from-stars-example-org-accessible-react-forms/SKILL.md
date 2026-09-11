---
name: from-stars-example-org-accessible-react-forms
description: Draft Skill from categorized Stars candidate github-stars-example-org-accessible-react-forms
---

# from-stars-example-org-accessible-react-forms

## Use this Skill when

Applying lessons derived from a categorized GitHub Stars discovery signal (category `frontend-ui`).

## Origin candidate

- Candidate ID: `github-stars-example-org-accessible-react-forms`
- Discovery signal: `github-stars:live:example-org/accessible-react-forms|category:frontend-ui`
- Source path: `example-org/accessible-react-forms`
- Provenance URL: `https://github.com/example-org/accessible-react-forms`
- Star category: `frontend-ui`
- Starred provenance: required
- Capabilities: example, org, accessible, react, forms

## Required draft gates (M23)

- `/agent/repos/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-example-org-accessible-react-forms/security-review.md`
- `/agent/repos/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-example-org-accessible-react-forms/dependency-supply-chain.md`

## Notes from discovery

[frontend-ui] Live GitHub starred repo — NOT APPROVED FOR EXECUTION

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
