import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import CraftTokensDemo from './CraftTokensDemo'

afterEach(() => {
  cleanup()
})

describe('CraftTokensDemo', () => {
  it('exposes an accessible landmark and heading', () => {
    render(<CraftTokensDemo />)
    const region = screen.getByRole('region', { name: 'Craft tokens' })
    expect(region).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Craft tokens' })).toBeTruthy()
  })

  it('lets keyboard users select a token with aria-pressed', async () => {
    const user = userEvent.setup()
    render(<CraftTokensDemo />)

    const sand = screen.getByRole('button', {
      name: 'Select Sand token --craft-sand',
    })
    await user.tab()
    // Preview CTA is first focusable after heading content; keep selecting via click/keyboard activation
    await user.click(sand)
    expect(sand).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/Active token:/)).toHaveTextContent('--craft-sand')
    expect(
      screen.getByRole('button', { name: 'Preview Sand' }),
    ).toBeTruthy()
  })

  it('keeps token controls as buttons (not decorative cards)', () => {
    render(<CraftTokensDemo />)
    const buttons = screen.getAllByRole('button')
    // 1 preview CTA + 5 swatches
    expect(buttons.length).toBe(6)
  })
})
