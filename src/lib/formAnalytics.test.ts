import { describe, expect, it } from 'vitest'
import { countFormIssues, summarizeFormIssues } from './formAnalytics'

describe('formAnalytics', () => {
  it('summarizes issues in field order', () => {
    const issues = summarizeFormIssues({
      message: 'Message is required.',
      name: 'Name is required.',
    })
    expect(issues).toEqual([
      { field: 'name', message: 'Name is required.' },
      { field: 'message', message: 'Message is required.' },
    ])
  })

  it('returns an empty list when there are no errors', () => {
    expect(summarizeFormIssues({})).toEqual([])
  })

  it('counts issues', () => {
    expect(countFormIssues({ email: 'Enter a valid email address.' })).toBe(1)
    expect(countFormIssues({})).toBe(0)
  })
})
