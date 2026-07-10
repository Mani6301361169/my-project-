const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateLoginForm(values) {
  const errors = {}

  if (!values.emailOrUsername?.trim()) {
    errors.emailOrUsername = 'Email or username is required'
  } else if (!emailPattern.test(values.emailOrUsername) && values.emailOrUsername.length < 4) {
    errors.emailOrUsername = 'Enter a valid email or username'
  }

  if (!values.password?.trim()) {
    errors.password = 'Password is required'
  }

  return errors
}
