import type { ContactField, ContactFormErrors } from './contactValidation'

export interface FormIssue {
  field: ContactField
  message: string
}

/**
 * Flatten a ContactFormErrors map into ordered issue rows.
 * @complexity O(N)
 */
export function summarizeFormIssues(errors: ContactFormErrors): FormIssue[] {
  const issues: FormIssue[] = []
  const order: ContactField[] = ['name', 'email', 'message']
  for (const field of order) {
    const message = errors[field]
    if (message) {
      issues.push({ field, message })
    }
  }
  return issues
}

/**
 * Count outstanding issues.
 * @complexity O(1)
 */
export function countFormIssues(errors: ContactFormErrors): number {
  let count = 0
  const order: ContactField[] = ['name', 'email', 'message']
  for (const field of order) {
    if (errors[field]) {
      count += 1
    }
  }
  return count
}
