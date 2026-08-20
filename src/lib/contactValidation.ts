export type ContactField = 'name' | 'email' | 'message'

export type ContactFormValues = Record<ContactField, string>

export type ContactFormErrors = Partial<Record<ContactField, string>>

/** Maximum length for the contact message field. */
export const MESSAGE_MAX_LENGTH = 500

/** Practical email check — not RFC 5322 complete. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRequired(
  value: string,
  fieldLabel: string,
): string | undefined {
  if (value.trim() === '') {
    return `${fieldLabel} is required.`
  }
  return undefined
}

export function validateEmailFormat(value: string): string | undefined {
  const trimmed = value.trim()
  if (trimmed === '') {
    return undefined
  }
  if (!EMAIL_PATTERN.test(trimmed)) {
    return 'Enter a valid email address.'
  }
  return undefined
}

export function validateMessageLength(value: string): string | undefined {
  if (value.length > MESSAGE_MAX_LENGTH) {
    return `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`
  }
  return undefined
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const nameError = validateRequired(values.name, 'Name')
  if (nameError) {
    errors.name = nameError
  }

  const emailRequired = validateRequired(values.email, 'Email')
  if (emailRequired) {
    errors.email = emailRequired
  } else {
    const emailFormat = validateEmailFormat(values.email)
    if (emailFormat) {
      errors.email = emailFormat
    }
  }

  const messageRequired = validateRequired(values.message, 'Message')
  if (messageRequired) {
    errors.message = messageRequired
  } else {
    const messageLength = validateMessageLength(values.message)
    if (messageLength) {
      errors.message = messageLength
    }
  }

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}

export function firstErrorField(
  errors: ContactFormErrors,
): ContactField | undefined {
  const order: ContactField[] = ['name', 'email', 'message']
  return order.find((field) => errors[field] !== undefined)
}
