import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CompassStatusBadge, { COMPASS_WORKFLOW_VERSION } from './CompassStatusBadge'

describe('CompassStatusBadge', () => {
  it('exposes an accessible status with the workflow version', () => {
    render(<CompassStatusBadge />)
    const status = screen.getByRole('status', {
      name: `NorthStar workflow version ${COMPASS_WORKFLOW_VERSION}`,
    })
    expect(status).toBeInTheDocument()
    expect(status).toHaveTextContent(`v${COMPASS_WORKFLOW_VERSION}`)
  })
})
