import { describe, it, expect } from 'vitest'
import { validateLoginForm } from './loginValidation'

describe('login validation', () => {
  it('returns errors for empty fields', () => {
    const errors = validateLoginForm({ emailOrUsername: '', password: '' })

    expect(errors.emailOrUsername).toBe('Email or username is required')
    expect(errors.password).toBe('Password is required')
  })

  it('accepts a valid login form', () => {
    const errors = validateLoginForm({ emailOrUsername: 'student@college.edu', password: 'SecurePass1!' })

    expect(errors).toEqual({})
  })
})
