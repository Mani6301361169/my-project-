import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const roles = [
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' },
  { value: 'admin', label: 'Admin' },
]

function Register() {
  const navigate = useNavigate()
  const { register, user } = useAuth()
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) {
    navigate('/student-dashboard')
    return null
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await register(formData)
      const roleRoutes = {
        student: '/student-dashboard',
        parent: '/parent-dashboard',
        admin: '/admin-dashboard',
      }
      navigate(roleRoutes[formData.role] || '/student-dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '460px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '1.4rem', padding: '2rem', boxShadow: '0 20px 45px rgba(0,0,0,0.35)' }}>
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Create an account</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>Start managing college fees with a modern, secure portal.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} />
          <select name="role" value={formData.role} onChange={handleChange} style={inputStyle}>
            {roles.map((role) => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </select>

          {error ? <div style={{ color: '#fda4af' }}>{error}</div> : null}

          <button type="submit" disabled={loading} style={{ padding: '0.8rem 1rem', borderRadius: '999px', background: 'linear-gradient(135deg, #2563eb, #38bdf8)', color: 'white', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>
          Already have an account? <Link to="/login" style={{ color: '#38bdf8' }}>Login</Link>
        </p>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: '0.9rem',
  border: '1px solid rgba(255,255,255,0.16)',
  background: 'rgba(255,255,255,0.06)',
  color: 'white',
}

export default Register
