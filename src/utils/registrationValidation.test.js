import { describe, it, expect } from 'vitest'
import { validateRegistrationForm } from './registrationValidation'

describe('registration validation', () => {
  it('returns errors for missing required fields', () => {
    const errors = validateRegistrationForm({
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    })

    expect(errors.fullName).toBe('Full name is required')
    expect(errors.email).toBe('Email is required')
    expect(errors.mobile).toBe('Mobile number is required')
    expect(errors.password).toBe('Password is required')
    expect(errors.confirmPassword).toBe('Please confirm your password')
    expect(errors.termsAccepted).toBe('You must accept the terms and conditions')
  })

  it('validates email, password strength and matching passwords', () => {
    const errors = validateRegistrationForm({
      fullName: 'Asha Kumar',
      email: 'invalid-email',
      mobile: '123',
      password: 'abc123',
      confirmPassword: 'abc124',
      termsAccepted: true,
    })

    expect(errors.email).toBe('Please enter a valid email address')
    expect(errors.mobile).toBe('Mobile number must be exactly 10 digits')
    expect(errors.password).toBe('Password must be at least 8 characters and include uppercase, lowercase, number, and special character')
    expect(errors.confirmPassword).toBe('Passwords do not match')
  })

  it('accepts a valid form', () => {
    const errors = validateRegistrationForm({
      fullName: 'Asha Kumar',
      email: 'asha@example.com',
      mobile: '9876543210',
      password: 'SecurePass1!',
      confirmPassword: 'SecurePass1!',
      termsAccepted: true,
    })

    expect(errors).toEqual({})
  })
})
