# Accessibility review — contact message character counter

**Plan ID:** sandbox-behavioral-plan-feature-2026-08-20  
**Date:** 2026-08-20  
**Change:** Message field character counter + max length (500)

## Checks

| Check | Result | Notes |
|---|---|---|
| Labels | Pass | Message still labeled via `<label htmlFor>` |
| Error association | Pass | Errors use `role="alert"` + `aria-invalid` + `aria-describedby` |
| Help association | Pass | Static “Maximum 500 characters.” in `aria-describedby` (not live-spam) |
| Live region | Pass | Limit announcement only when count ≥ max; `aria-live="polite"` + visually hidden |
| Visual counter | Pass | `aria-hidden` decorative counter; SR uses help + limit announce |
| Keyboard | Pass | Tab order unchanged; focus still moves to first error on invalid submit |
| Color alone | Pass | Limit state uses weight + text, not color alone |
| Contrast | Pass (manual) | Counter uses `--text`; limit state `#b42318` / dark `#f97066` on page background |

## Findings

None blocking.

## Evidence

- Screenshot: `contact-message-counter.png`
- Automated: `npm test` (21/21), `npm run lint`, `npm run build`
