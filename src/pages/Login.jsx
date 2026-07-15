import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import styles from './Login.module.css'

const roleDetails = {
  student: {
    label: 'Student',
    description: 'Access your fee dues, payment history, and receipts from one secure portal.',
    accent: 'linear-gradient(135deg, #2563eb, #60a5fa)',
  },
  parent: {
    label: 'Parent',
    description: 'Monitor your child’s fee status and receive payment confirmations instantly.',
    accent: 'linear-gradient(135deg, #9333ea, #c084fc)',
  },
  admin: {
    label: 'Admin',
    description: 'Approve payments, manage admissions, and monitor fee collection across the college.',
    accent: 'linear-gradient(135deg, #0f766e, #2dd4bf)',
  },
}

function Login() {
  const { role } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const activeRole = role && roleDetails[role] ? role : null

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!activeRole) {
      return
    }

    setMessage(`Welcome to the ${roleDetails[activeRole].label} portal. Your secure login is ready.`)
  }

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Secure access</p>
        <h1>Choose your college fees portal</h1>
        <p>
          Students, parents, and administrators can sign in to view dues, make payments, or manage records from a single digital experience.
        </p>
      </div>

      {!activeRole ? (
        <div className={styles.grid}>
          {Object.entries(roleDetails).map(([key, value]) => (
            <button
              key={key}
              type="button"
              className={styles.roleCard}
              onClick={() => navigate(`/login/${key}`)}
            >
              <div className={styles.icon} style={{ background: value.accent }}>
                {value.label.charAt(0)}
              </div>
              <h3>{value.label}</h3>
              <p>{value.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <p className={styles.eyebrow}>{roleDetails[activeRole].label} login</p>
            <h2>Sign in to your fees dashboard</h2>
            <p>{roleDetails[activeRole].description}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Email address</span>
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
            </label>

            <Button variant="primary" type="submit">Login</Button>
          </form>

          {message && <div className={styles.message}>{message}</div>}

          <div className={styles.footerLinks}>
            <Link to="/login">Choose another role</Link>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Login
