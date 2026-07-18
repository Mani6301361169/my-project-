import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'

const roleDetails = {
  student: {
    label: 'Student',
    description: 'Access your fee dues, payment history, and receipts from one secure portal.',
  },
  parent: {
    label: 'Parent',
    description: 'Monitor your child’s fee status and receive payment confirmations instantly.',
  },
  admin: {
    label: 'Admin',
    description: 'Approve payments, manage admissions, and monitor fee collection across the college.',
  },
}

function Login() {
  const { role } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const { login, user, logout } = useAuth()

  const activeRole = role && roleDetails[role] ? role : 'student'

  useEffect(() => {
    if (!role || !roleDetails[role]) {
      navigate('/login/student', { replace: true })
    }

    if (user) {
      setIsLoggedIn(true)
      navigate(`/${user.role}-dashboard`, { replace: true })
    }
  }, [role, navigate, user])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const loginUser = async () => {
    try {
      await login(formData.email, formData.password)
      setIsLoggedIn(true)
      setMessage(`Welcome to the ${roleDetails[activeRole].label} portal. Your secure login is ready.`)
      navigate(`/${activeRole}-dashboard`, { replace: true })
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser()
  }

  const handleLogout = async () => {
    await logout()
    setIsLoggedIn(false)
    setFormData({ email: '', password: '' })
    setMessage('')
    navigate('/login/student')
  }

  const handleLampPointerDown = (event) => {
    dragStartX.current = event.clientX
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleLampPointerMove = (event) => {
    if (!isDragging) {
      return
    }

    const nextOffset = event.clientX - dragStartX.current
    setDragOffset(Math.max(-120, Math.min(120, nextOffset)))
  }

  const handleLampPointerUp = (event) => {
    if (!isDragging) {
      return
    }

    const delta = event.clientX - dragStartX.current

    if (Math.abs(delta) > 80) {
      if (isLoggedIn) {
        handleLogout()
      } else {
        loginUser()
      }
    }

    setDragOffset(0)
    setIsDragging(false)
  }

  return (
    <section className={styles.page}>
      <div
        className={`${styles.lamp} ${isDragging ? styles.lampDragging : ''}`}
        onPointerDown={handleLampPointerDown}
        onPointerMove={handleLampPointerMove}
        onPointerUp={handleLampPointerUp}
        onPointerCancel={handleLampPointerUp}
        style={{
          transform: `translateX(calc(-50% + ${dragOffset}px))`,
          transition: isDragging ? 'none' : 'transform 0.25s ease',
        }}
      >
        <div className={styles.wire} />
        <div className={styles.shade} />
        <div className={styles.bulb} />
      </div>

      <div className={styles.container}>
        <div className={styles.loginBox}>
          <p className={styles.eyebrow}>{activeRole ? `${roleDetails[activeRole].label} access` : 'Student access'}</p>
          <h2>LOGIN</h2>

          <div className={styles.roleSwitcher}>
            {Object.entries(roleDetails).map(([key, value]) => (
              <button
                key={key}
                type="button"
                className={key === activeRole ? styles.roleButtonActive : styles.roleButton}
                onClick={() => navigate(`/login/${key}`)}
              >
                {value.label}
              </button>
            ))}
          </div>

          {isLoggedIn ? (
            <div className={styles.welcomeCard}>
              <h3>Welcome back</h3>
              <p>{message || `You are signed in as ${roleDetails[activeRole].label}.`}</p>
              <button type="button" className={styles.submitButton} onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.inputBox}>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Email address</span>
              </label>

              <label className={styles.inputBox}>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span>Password</span>
              </label>

              <button type="submit" className={styles.submitButton}>
                LOGIN
              </button>
            </form>
          )}

          {message && !isLoggedIn && <div className={styles.message}>{message}</div>}

          <div className={styles.footerLinks}>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login