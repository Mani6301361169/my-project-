import { useAuth } from '../context/AuthContext'

function StudentDashboard() {
  const { user } = useAuth()

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Student Dashboard</h2>
      <p>Welcome, {user?.name || 'Student'}.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        {[
          { title: 'Pending Amount', value: '₹18,500' },
          { title: 'Total Paid', value: '₹92,000' },
          { title: 'Scholarship', value: '₹10,000' },
        ].map((item) => (
          <div key={item.title} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.2rem' }}>
            <h3>{item.title}</h3>
            <p style={{ fontSize: '1.4rem', margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentDashboard
