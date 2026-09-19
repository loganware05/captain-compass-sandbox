import type { ContactFormErrors } from '../lib/contactValidation'
import { summarizeFormIssues } from '../lib/formAnalytics'

export interface FormIssuesSummaryProps {
  errors: ContactFormErrors
  heading?: string
}

export function FormIssuesSummary({ errors, heading }: FormIssuesSummaryProps) {
  const issues = summarizeFormIssues(errors)
  if (issues.length === 0) {
    return null
  }
  return (
    <section aria-label={heading ?? 'Form issues'}>
      <h3>{heading ?? 'Form issues'}</h3>
      <ul>
        {issues.map((issue) => (
          <li key={issue.field}>
            <strong>{issue.field}:</strong> {issue.message}
          </li>
        ))}
      </ul>
    </section>
  )
}
