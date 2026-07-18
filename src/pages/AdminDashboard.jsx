import { useAuth } from '../context/AuthContext'

function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user?.name || 'Admin'}.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        {[
          { title: 'Total Students', value: '325' },
          { title: 'Fee Collected', value: '₹24.6L' },
          { title: 'Pending Fees', value: '₹6.2L' },
          { title: 'Today Collection', value: '₹58K' },
        ].map((item) => (
          <div key={item.title} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.2rem' }}>
            <h3>{item.title}</h3>
            <p style={{ fontSize: '1.2rem', margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard
