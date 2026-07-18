import { useAuth } from '../context/AuthContext'

function ParentDashboard() {
  const { user } = useAuth()

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Parent Dashboard</h2>
      <p>Welcome, {user?.name || 'Parent'}.</p>
      <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.2rem', borderRadius: '1rem', marginTop: '1rem' }}>
        <h3>Child Fee Overview</h3>
        <p>Fee status: Pending</p>
        <p>Last payment: 12 Jul 2026</p>
      </div>
    </div>
  )
}

export default ParentDashboard
