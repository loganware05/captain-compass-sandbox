# Autonomy Budget Ledger

## Metadata

- Plan ID: sandbox-behavioral-plan-feature-2026-08-20
- Issue: local/sandbox-behavioral-plan-feature
- Branch: feature/local-contact-message-counter
- Created: 2026-08-20
- Last updated: 2026-08-20
- Status: ACTIVE

## Limits (from approved plan)

- Maximum iterations: 5
- Maximum failed validation cycles: 2
- Maximum estimated cost (USD): 15
- Maximum elapsed minutes: 90
- Stop on scope change: true
- Stop on destructive operation: true
- Stop on unresolved security high: true

## Usage

- Iterations used: 2
- Failed validation cycles: 0
- Estimated cost used (USD): 3
- Cost is estimate: true
- Elapsed minutes: 35

## Cycle log

<!-- One line per cycle: date | iteration N | result | notes -->

| 2026-08-20 | iteration 1 | pass | Implemented counter + tests; npm test/lint/build green; a11y evidence captured |
| 2026-08-20 | iteration 2 | pass | /validate-change re-run: 21/21 tests, lint, build; commit + PR prep |

## Stop condition

When any usage field meets or exceeds its limit, stop immediately and write a
Budget Stop Report under `.agent/evidence/<slug>/BUDGET_STOP_REPORT.md`.
