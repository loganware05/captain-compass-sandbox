import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormIssuesSummary } from './FormIssuesSummary'

describe('FormIssuesSummary', () => {
  it('renders issues with an accessible section label', () => {
    render(
      <FormIssuesSummary
        errors={{ name: 'Name is required.', email: 'Enter a valid email address.' }}
      />,
    )
    expect(screen.getByRole('region', { name: 'Form issues' })).toBeInTheDocument()
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
  })

  it('renders nothing when there are no issues', () => {
    const { container } = render(<FormIssuesSummary errors={{}} />)
    expect(container).toBeEmptyDOMElement()
  })
})
