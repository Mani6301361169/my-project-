const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

export function validateRegistrationForm(formData) {
  const errors = {}

  if (!formData.fullName?.trim()) {
    errors.fullName = 'Full name is required'
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!formData.mobile?.trim()) {
    errors.mobile = 'Mobile number is required'
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = 'Mobile number must be exactly 10 digits'
  }

  if (!formData.password?.trim()) {
    errors.password = 'Password is required'
  } else if (!passwordPattern.test(formData.password)) {
    errors.password = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
  }

  if (!formData.confirmPassword?.trim()) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!formData.termsAccepted) {
    errors.termsAccepted = 'You must accept the terms and conditions'
  }

  return errors
}
