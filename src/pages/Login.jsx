import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { clearAuth, isAuthenticated, setAuth } from '../utils/auth'
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
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())

  const activeRole = role && roleDetails[role] ? role : null

  useEffect(() => {
    if (!role || !roleDetails[role]) {
      navigate('/login/student', { replace: true })
    }

    if (isAuthenticated()) {
      setIsLoggedIn(true)
    }
  }, [role, navigate])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!activeRole) {
      return
    }

    setAuth(activeRole)

    setIsLoggedIn(true)
    setMessage(`Welcome to the ${roleDetails[activeRole].label} portal. Your secure login is ready.`)
  }

  const handleLogout = () => {
    clearAuth()
    setIsLoggedIn(false)
    setFormData({ email: '', password: '' })
    setMessage('')
    navigate('/login/student')
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

      {isLoggedIn ? (
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <p className={styles.eyebrow}>Features unlocked</p>
            <h2>You are signed in</h2>
            <p>Only after login can you view the next pages and the fee portal features.</p>
          </div>

          <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ border: '1px solid #dbeafe', borderRadius: '0.75rem', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Fee Dues</h3>
              <p style={{ margin: 0 }}>View pending fees and due dates after signing in.</p>
            </div>

            <div style={{ border: '1px solid #dbeafe', borderRadius: '0.75rem', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Payment History</h3>
              <p style={{ margin: 0 }}>Check completed payments once you are logged in.</p>
            </div>

            <div style={{ border: '1px solid #dbeafe', borderRadius: '0.75rem', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>Resources</h3>
              <p style={{ margin: 0 }}>Access admin, student, and parent tools after login.</p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={handleLogout}
              style={{
                border: 'none',
                borderRadius: '999px',
                padding: '0.8rem 1.2rem',
                background: '#1d4ed8',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <p className={styles.eyebrow}>{activeRole ? `${roleDetails[activeRole].label} login` : 'Student login'}</p>
            <h2>Sign in to your fees dashboard</h2>
            <p>{activeRole ? roleDetails[activeRole].description : roleDetails.student.description}</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {Object.entries(roleDetails).map(([key, value]) => (
              <button
                key={key}
                type="button"
                onClick={() => navigate(`/login/${key}`)}
                style={{
                  border: key === activeRole ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  borderRadius: '999px',
                  padding: '0.5rem 0.85rem',
                  background: key === activeRole ? '#eff6ff' : '#fff',
                  cursor: 'pointer',
                }}
              >
                {value.label}
              </button>
            ))}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Email address</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </label>

            <Button variant="primary" type="submit">Login</Button>
          </form>

          {message && <div className={styles.message}>{message}</div>}

          <div className={styles.footerLinks}>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Login