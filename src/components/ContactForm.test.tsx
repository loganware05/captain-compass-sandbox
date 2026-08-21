import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import ContactForm from './ContactForm'

afterEach(() => {
  cleanup()
})

describe('ContactForm', () => {
  it('shows accessible inline errors when submitted empty', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    const nameError = screen.getByText('Name is required.')
    const emailError = screen.getByText('Email is required.')
    const messageError = screen.getByText('Message is required.')

    expect(nameError).toHaveAttribute('role', 'alert')
    expect(emailError).toHaveAttribute('role', 'alert')
    expect(messageError).toHaveAttribute('role', 'alert')

    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Name')).toHaveAttribute(
      'aria-describedby',
      nameError.id,
    )
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.getByLabelText('Message')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('shows an email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    const emailError = screen.getByText('Enter a valid email address.')
    expect(emailError).toHaveAttribute('role', 'alert')
    expect(screen.queryByText('Message sent')).toBeNull()
  })

  it('shows a success state after a valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(
      screen.getByLabelText('Message'),
      'Hello from the Analytical Engine.',
    )
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getByRole('status')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Message sent' })).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'Send another message' }),
    ).toBeTruthy()
  })

  it('clears a field error when the user edits that field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Name is required.')).toHaveAttribute(
      'role',
      'alert',
    )

    await user.type(screen.getByLabelText('Name'), 'Ada')
    expect(screen.queryByText('Name is required.')).toBeNull()
  })

  it('restores the form when Send another message is clicked', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await user.click(
      screen.getByRole('button', { name: 'Send another message' }),
    )

    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByRole('button', { name: 'Send message' })).toBeTruthy()
  })
})
