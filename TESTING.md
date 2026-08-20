# Testing

## Test commands

```bash
npm test
npm run lint
npm run build
npm run dev
```

## Unit tests

Vitest + Testing Library covering `contactValidation` and `ContactForm`
(required fields, email format, message max length, character counter,
accessible errors, success flow).

## Integration tests

Component tests exercise form submit/validation as an integration of UI +
validation helpers.

## End-to-end tests

Not required for this sandbox change. Optional Playwright screenshot evidence
may be captured under `.agent/evidence/`.

## Manual checks

- Contact form: empty submit shows inline errors with focus on first invalid field
- Message counter updates while typing; announces only at the 500-character limit
- Valid submit shows success state; “Send another message” resets the form

## Evidence location

Store evidence under `.agent/evidence/` (screenshots, test-results, security, accessibility).

Latest feature evidence:
`.agent/evidence/sandbox-behavioral-plan-feature-2026-08-20/`
