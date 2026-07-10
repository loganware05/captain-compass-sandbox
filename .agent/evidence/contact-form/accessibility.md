# Accessibility Review — Contact Form

**Date:** 2026-07-10  
**Scope:** `ContactForm` + `#contact` section  
**Reviewer:** First Mate (accessibility-review skill)

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| Keyboard navigation / focus order | Pass | Tab order: Name → Email → Message → Send. On invalid submit, focus moves to first invalid field. On success, focus moves to “Message sent” heading (`tabIndex={-1}`). |
| Semantic markup / labels | Pass | Visible `<label htmlFor>` for each control; section uses `aria-labelledby`. |
| Form errors announced | Pass | Errors use `role="alert"`; fields use `aria-invalid` + `aria-describedby`. |
| Color contrast | Pass (with note) | Error text `#b42318` on white; dark mode `#f97066` on dark bg. Errors also conveyed via text, not color alone. Invalid borders use red in addition to message text. |
| Motion sensitivity | Pass | No motion animations on the form. |
| Touch targets | Pass | Inputs and button use comfortable padding (~40px+ height). |

## Findings

No blocking issues.

### Low / informational

1. Native `required` is present alongside custom validation with `noValidate` on the form — intentional so custom accessible errors are shown instead of browser bubbles.
2. Success region uses `role="status"` + `aria-live="polite"`; heading also receives focus for keyboard users.

## Evidence

- `.agent/evidence/contact-form/error-state.png`
- `.agent/evidence/contact-form/email-error-state.png`
- `.agent/evidence/contact-form/success-state.png`
