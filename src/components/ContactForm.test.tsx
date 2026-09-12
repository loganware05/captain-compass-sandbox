import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { MESSAGE_MAX_LENGTH } from '../lib/contactValidation'
import ContactForm from './ContactForm'

afterEach(() => {
  cleanup()
})

function fieldAlert(text: string): HTMLElement {
  const matches = screen.getAllByText(text)
  const alert = matches.find((el) => el.getAttribute('role') === 'alert')
  if (!alert) {
    throw new Error(`No role=alert element found for text: ${text}`)
  }
  return alert
}

describe('ContactForm', () => {
  it('shows accessible inline errors when submitted empty', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    const nameError = fieldAlert('Name is required.')
    const emailError = fieldAlert('Email is required.')
    const messageError = fieldAlert('Message is required.')

    expect(nameError).toBeTruthy()
    expect(emailError).toBeTruthy()
    expect(messageError).toBeTruthy()

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

    // NS-SKILL-002: assertive form-level summary + fieldset grouping
    const summary = screen.getByRole('alert', {
      name: 'There are 3 problems with this form',
    })
    expect(summary).toHaveAttribute('aria-live', 'assertive')
    expect(
      within(summary).getByRole('link', { name: 'Name is required.' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('group', { name: 'Contact details' }),
    ).toBeTruthy()
  })

  it('focuses the first invalid field after a failed submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByLabelText('Name')).toHaveFocus()
  })

  it('shows an email format error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(fieldAlert('Enter a valid email address.')).toBeTruthy()
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
    expect(fieldAlert('Name is required.')).toBeTruthy()

    await user.type(screen.getByLabelText('Name'), 'Ada')
    expect(
      screen.queryAllByText('Name is required.').length,
    ).toBe(0)
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

  it('shows a character counter associated with the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const message = screen.getByLabelText('Message')
    const help = screen.getByText(`Maximum ${MESSAGE_MAX_LENGTH} characters.`)
    expect(message).toHaveAttribute('maxLength', String(MESSAGE_MAX_LENGTH))
    expect(message.getAttribute('aria-describedby') ?? '').toContain(help.id)
    expect(screen.getByText(`0 / ${MESSAGE_MAX_LENGTH}`)).toBeTruthy()

    await user.type(message, 'Hello')
    expect(screen.getByText(`5 / ${MESSAGE_MAX_LENGTH}`)).toBeTruthy()
  })

  it('announces the character limit only when reached', async () => {
    render(<ContactForm />)

    const message = screen.getByLabelText('Message')
    fireEvent.change(message, {
      target: { value: 'a'.repeat(MESSAGE_MAX_LENGTH) },
    })

    expect(
      screen.getByText(
        `Message character limit reached (${MESSAGE_MAX_LENGTH}).`,
      ),
    ).toHaveAttribute('role', 'status')
  })

  it('shows a max-length error when a too-long message is submitted', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')

    const message = screen.getByLabelText('Message')
    // Bypass HTML maxLength so validation path can be exercised.
    fireEvent.change(message, {
      target: { value: 'a'.repeat(MESSAGE_MAX_LENGTH + 1) },
    })
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    const messageError = fieldAlert(
      `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`,
    )
    expect(message).toHaveAttribute('aria-invalid', 'true')
    expect(message.getAttribute('aria-describedby') ?? '').toContain(
      messageError.id,
    )
  })
})
