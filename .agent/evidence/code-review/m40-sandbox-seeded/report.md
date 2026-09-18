# Code review report — `m40-sandbox-seeded`

- Repository: `/agent/repos/captain-compass-sandbox`
- Status: **completed**
- Created: 2026-09-18T21:56:58Z
- Domains: react, typescript
- Findings: 3 (verified=3, unverified=0, discarded=0)
- GitHub review posted: `False`

## Findings

### boundary-unknown-symbol-src/components/FormIssuesSummary.tsx-purgeFormIssues: Cross-boundary import of unknown symbol `purgeFormIssues`

- Severity: `high`
- Confidence: `0.9`
- Status: **verified**
- Skill: `code-reviewer`
- Evidence: `src/components/FormIssuesSummary.tsx`, `src/lib/formAnalytics.ts`

`src/components/FormIssuesSummary.tsx` imports `purgeFormIssues` from `src/lib/formAnalytics.ts`, but the callee exports only ['FormIssue', 'countFormIssues', 'summarizeFormIssues']. Interface drift across the `src/components` → `src/lib` boundary.

**Suggested fix:** Import an exported symbol from `src/lib/formAnalytics.ts` or add `purgeFormIssues` to its exports.

### boundary-arity-src/components/FormIssuesSummary.tsx-summarizeFormIssues: Cross-boundary call arity mismatch: `summarizeFormIssues`

- Severity: `medium`
- Confidence: `0.85`
- Status: **verified**
- Skill: `code-reviewer`
- Evidence: `src/components/FormIssuesSummary.tsx`, `src/lib/formAnalytics.ts`

Added call `const empty = summarizeFormIssues()` passes 0 argument(s); `src/lib/formAnalytics.ts` declares `summarizeFormIssues(errors: ContactFormErrors): FormIssue[]` (1 required / 1 total).

**Suggested fix:** Align the call with the declared signature in `src/lib/formAnalytics.ts`.

### boundary-complexity-src/components/FormIssuesSummary.tsx-summarizeFormIssues: Complexity amplification across boundary: `summarizeFormIssues` declared O(N)

- Severity: `medium`
- Confidence: `0.8`
- Status: **verified**
- Skill: `code-reviewer`
- Evidence: `src/components/FormIssuesSummary.tsx`, `src/lib/formAnalytics.ts`

Added call `const recheck = summarizeFormIssues(errors)` invokes `summarizeFormIssues` (declared O(N) in `src/lib/formAnalytics.ts`) inside a loop, giving effective O(N×N) — e.g. O(N) callee ⇒ O(N^2) total.

**Suggested fix:** Hoist the call out of the loop, batch the input, or renegotiate the callee's declared complexity.

## Provenance

```json
{
  "boundary": {
    "candidates": 3,
    "enabled": true,
    "notes": [
      "boundary check: 2 file(s) checked against inode store"
    ]
  },
  "candidates_source": "fixtures+boundary",
  "github_review_posted": false,
  "hermetic": true,
  "invoke_model": false,
  "pipeline": "northstar.review.v1"
}
```
