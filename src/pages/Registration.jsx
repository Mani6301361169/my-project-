import { useMemo, useState } from 'react'
import Button from '../components/Button'
import styles from './Registration.module.css'
import { validateRegistrationForm } from '../utils/registrationValidation'

const initialForm = {
  fullName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
  gender: 'Prefer not to say',
  dob: '',
  collegeName: '',
  branch: '',
  graduationYear: '',
  skills: '',
  resume: '',
  termsAccepted: false,
}

function Registration() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submittedDetails, setSubmittedDetails] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const passwordStrength = useMemo(() => {
    const value = formData.password
    if (!value) return { label: 'Enter a password', color: '#64748b' }
    if (value.length < 8) return { label: 'Weak', color: '#dc2626' }
    if (!/(?=.*[a-z])/.test(value) || !/(?=.*[A-Z])/.test(value) || !/(?=.*\d)/.test(value) || !/(?=.*[^A-Za-z0-9])/.test(value)) {
      return { label: 'Medium', color: '#f59e0b' }
    }
    return { label: 'Strong', color: '#16a34a' }
  }, [formData.password])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }))
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    setFormData((previous) => ({
      ...previous,
      resume: selectedFile ? selectedFile.name : '',
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateRegistrationForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedDetails(null)
      return
    }

    setSubmittedDetails({ ...formData, password: '••••••••' })
    setFormData(initialForm)
    setErrors({})
  }

  const handleReset = () => {
    setFormData(initialForm)
    setErrors({})
    setSubmittedDetails(null)
  }

  return (
    <section className={styles.page}>
      <div className={styles.heroCard}>
        <p className={styles.eyebrow}>Student Registration</p>
        <h1>Join the FeesHub student community</h1>
        <p>
          Build a profile for new students with complete academic and contact details.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Full Name</span>
            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" />
            {errors.fullName && <small>{errors.fullName}</small>}
          </label>

          <label className={styles.field}>
            <span>Email Address</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="student@example.com" />
            {errors.email && <small>{errors.email}</small>}
          </label>

          <label className={styles.field}>
            <span>Mobile Number</span>
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="9876543210" />
            {errors.mobile && <small>{errors.mobile}</small>}
          </label>

          <label className={styles.field}>
            <span>Gender</span>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Date of Birth</span>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </label>

          <label className={styles.field}>
            <span>College Name</span>
            <input name="collegeName" value={formData.collegeName} onChange={handleChange} placeholder="College name" />
          </label>

          <label className={styles.field}>
            <span>Branch</span>
            <input name="branch" value={formData.branch} onChange={handleChange} placeholder="Computer Science" />
          </label>

          <label className={styles.field}>
            <span>Graduation Year</span>
            <input name="graduationYear" value={formData.graduationYear} onChange={handleChange} placeholder="2028" />
          </label>

          <label className={styles.field}>
            <span>Skills</span>
            <input name="skills" value={formData.skills} onChange={handleChange} placeholder="React, JavaScript" />
          </label>

          <label className={styles.field}>
            <span>Resume Upload</span>
            <input type="file" name="resume" onChange={handleFileChange} />
          </label>

          <label className={styles.field}>
            <span>Password</span>
            <div className={styles.passwordField}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
              <button type="button" className={styles.toggleBtn} onClick={() => setShowPassword((value) => !value)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <small>{errors.password}</small>}
            <small className={styles.strength} style={{ color: passwordStrength.color }}>
              Strength: {passwordStrength.label}
            </small>
          </label>

          <label className={styles.field}>
            <span>Confirm Password</span>
            <div className={styles.passwordField}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
              />
              <button type="button" className={styles.toggleBtn} onClick={() => setShowConfirmPassword((value) => !value)}>
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
          </label>
        </div>

        <label className={styles.checkboxField}>
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <span>I accept the terms and conditions</span>
        </label>
        {errors.termsAccepted && <small className={styles.errorText}>{errors.termsAccepted}</small>}

        <div className={styles.actions}>
          <Button variant="primary" type="submit">Register</Button>
          <Button variant="secondary" type="button" onClick={handleReset}>Reset</Button>
        </div>
      </form>

      {submittedDetails && (
        <div className={styles.successCard}>
          <h2>Registration successful</h2>
          <p>Welcome, {submittedDetails.fullName}!</p>
          <ul>
            <li>Email: {submittedDetails.email}</li>
            <li>Mobile: {submittedDetails.mobile}</li>
            <li>College: {submittedDetails.collegeName || 'Not provided'}</li>
          </ul>
        </div>
      )}
    </section>
  )
}

export default Registration
