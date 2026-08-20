import {
  useId,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from 'react'
import {
  MESSAGE_MAX_LENGTH,
  firstErrorField,
  hasContactFormErrors,
  validateContactForm,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
} from '../lib/contactValidation'
import './ContactForm.css'

const EMPTY_VALUES: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

function describedByIds(...ids: Array<string | undefined>): string | undefined {
  const joined = ids.filter(Boolean).join(' ')
  return joined.length > 0 ? joined : undefined
}

function ContactForm() {
  const formId = useId()
  const nameId = `${formId}-name`
  const emailId = `${formId}-email`
  const messageId = `${formId}-message`
  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const messageErrorId = `${formId}-message-error`
  const messageHelpId = `${formId}-message-help`
  const messageCounterId = `${formId}-message-counter`
  const messageLimitAnnounceId = `${formId}-message-limit-announce`
  const successHeadingId = `${formId}-success`

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const successHeadingRef = useRef<HTMLHeadingElement>(null)

  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const messageLength = values.message.length
  const atMessageLimit = messageLength >= MESSAGE_MAX_LENGTH

  const fieldRefs: Record<
    ContactField,
    RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  > = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
  }

  const errorIds: Record<ContactField, string> = {
    name: nameErrorId,
    email: emailErrorId,
    message: messageErrorId,
  }

  function updateField(field: ContactField, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(values)

    if (hasContactFormErrors(nextErrors)) {
      setErrors(nextErrors)
      const first = firstErrorField(nextErrors)
      if (first) {
        fieldRefs[first].current?.focus()
      }
      return
    }

    setErrors({})
    setSubmitted(true)
    queueMicrotask(() => {
      successHeadingRef.current?.focus()
    })
  }

  function handleSendAnother() {
    setValues(EMPTY_VALUES)
    setErrors({})
    setSubmitted(false)
    queueMicrotask(() => {
      nameRef.current?.focus()
    })
  }

  if (submitted) {
    return (
      <div className="contact-form-success" role="status" aria-live="polite">
        <h3
          id={successHeadingId}
          ref={successHeadingRef}
          tabIndex={-1}
          className="contact-form-success__title"
        >
          Message sent
        </h3>
        <p className="contact-form-success__body">
          Thanks for reaching out. We received your message and will get back to
          you soon.
        </p>
        <button
          type="button"
          className="contact-form__button contact-form__button--secondary"
          onClick={handleSendAnother}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor={nameId}>Name</label>
        <input
          ref={nameRef}
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField('name', event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? errorIds.name : undefined}
          required
        />
        {errors.name ? (
          <p id={errorIds.name} className="contact-form__error" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor={emailId}>Email</label>
        <input
          ref={emailRef}
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? errorIds.email : undefined}
          required
        />
        {errors.email ? (
          <p id={errorIds.email} className="contact-form__error" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <div className="contact-form__label-row">
          <label htmlFor={messageId}>Message</label>
          <p
            id={messageCounterId}
            className={
              atMessageLimit
                ? 'contact-form__counter contact-form__counter--limit'
                : 'contact-form__counter'
            }
            aria-hidden="true"
          >
            {messageLength} / {MESSAGE_MAX_LENGTH}
          </p>
        </div>
        <p id={messageHelpId} className="contact-form__help">
          Maximum {MESSAGE_MAX_LENGTH} characters.
        </p>
        <textarea
          ref={messageRef}
          id={messageId}
          name="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedByIds(
            messageHelpId,
            errors.message ? errorIds.message : undefined,
          )}
          required
        />
        {/* Announce only at the limit — avoids live-region spam on every keystroke. */}
        <p
          id={messageLimitAnnounceId}
          className="contact-form__sr-only"
          role="status"
          aria-live="polite"
        >
          {atMessageLimit
            ? `Message character limit reached (${MESSAGE_MAX_LENGTH}).`
            : ''}
        </p>
        {errors.message ? (
          <p
            id={errorIds.message}
            className="contact-form__error"
            role="alert"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="contact-form__button">
        Send message
      </button>
    </form>
  )
}

export default ContactForm
