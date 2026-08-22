import { describe, expect, it } from 'vitest'
import {
  MESSAGE_MAX_LENGTH,
  firstErrorField,
  hasContactFormErrors,
  validateContactForm,
  validateEmailFormat,
  validateMessageLength,
  validateRequired,
} from './contactValidation'

describe('validateRequired', () => {
  it('returns an error for empty and whitespace-only values', () => {
    expect(validateRequired('', 'Name')).toBe('Name is required.')
    expect(validateRequired('   ', 'Name')).toBe('Name is required.')
  })

  it('returns undefined for non-empty values', () => {
    expect(validateRequired('Ada', 'Name')).toBeUndefined()
  })
})

describe('validateEmailFormat', () => {
  it('returns undefined for empty values (required handled separately)', () => {
    expect(validateEmailFormat('')).toBeUndefined()
    expect(validateEmailFormat('  ')).toBeUndefined()
  })

  it('accepts practical email addresses', () => {
    expect(validateEmailFormat('ada@example.com')).toBeUndefined()
    expect(validateEmailFormat('  ada.lovelace@example.co.uk  ')).toBeUndefined()
  })

  it('rejects invalid email formats', () => {
    expect(validateEmailFormat('not-an-email')).toBe(
      'Enter a valid email address.',
    )
    expect(validateEmailFormat('missing@domain')).toBe(
      'Enter a valid email address.',
    )
    expect(validateEmailFormat('@example.com')).toBe(
      'Enter a valid email address.',
    )
  })
})

describe('validateMessageLength', () => {
  it('returns undefined within the limit', () => {
    expect(validateMessageLength('')).toBeUndefined()
    expect(validateMessageLength('a'.repeat(MESSAGE_MAX_LENGTH))).toBeUndefined()
  })

  it('returns an error when over the limit', () => {
    expect(validateMessageLength('a'.repeat(MESSAGE_MAX_LENGTH + 1))).toBe(
      `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`,
    )
  })
})

describe('validateContactForm', () => {
  it('returns errors for all empty fields', () => {
    expect(
      validateContactForm({ name: '', email: '', message: '' }),
    ).toEqual({
      name: 'Name is required.',
      email: 'Email is required.',
      message: 'Message is required.',
    })
  })

  it('returns an email format error when email is present but invalid', () => {
    expect(
      validateContactForm({
        name: 'Ada',
        email: 'bad',
        message: 'Hello',
      }),
    ).toEqual({
      email: 'Enter a valid email address.',
    })
  })

  it('returns a message length error when over the max', () => {
    expect(
      validateContactForm({
        name: 'Ada',
        email: 'ada@example.com',
        message: 'a'.repeat(MESSAGE_MAX_LENGTH + 1),
      }),
    ).toEqual({
      message: `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`,
    })
  })

  it('returns no errors for a valid form', () => {
    expect(
      validateContactForm({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        message: 'Hello from the Analytical Engine.',
      }),
    ).toEqual({})
  })
})

describe('error helpers', () => {
  it('detects whether errors exist', () => {
    expect(hasContactFormErrors({})).toBe(false)
    expect(hasContactFormErrors({ name: 'Name is required.' })).toBe(true)
  })

  it('returns the first field with an error in visual order', () => {
    expect(
      firstErrorField({
        message: 'Message is required.',
        email: 'Email is required.',
      }),
    ).toBe('email')
  })
})
