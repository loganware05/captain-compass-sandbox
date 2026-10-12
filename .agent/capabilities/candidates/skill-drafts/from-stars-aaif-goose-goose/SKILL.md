---
name: from-stars-aaif-goose-goose
description: Draft Skill from categorized Stars candidate github-stars-aaif-goose-goose
---

# from-stars-aaif-goose-goose

## Use this Skill when

Applying lessons derived from a categorized GitHub Stars discovery signal (category `devtool`).

## Origin candidate

- Candidate ID: `github-stars-aaif-goose-goose`
- Discovery signal: `github-stars:live:aaif-goose/goose|category:devtool`
- Source path: `aaif-goose/goose`
- Provenance URL: `https://github.com/aaif-goose/goose`
- Star category: `devtool`
- Starred provenance: required
- Capabilities: aaif, goose, open, source, extensible

## Required draft gates (M23)

- `/Users/loganware/Documents/Personal/Code/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-aaif-goose-goose/security-review.md`
- `/Users/loganware/Documents/Personal/Code/captain-compass-sandbox/.agent/evidence/ti-scorecards/github-stars-aaif-goose-goose/dependency-supply-chain.md`

## Notes from discovery

[devtool] Live GitHub starred repo — NOT APPROVED FOR EXECUTION

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
