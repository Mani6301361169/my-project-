import { Link } from 'react-router-dom'
import { FaGraduationCap, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const stats = [
  { label: 'Students', value: '10K+' },
  { label: 'Collected', value: '₹24Cr' },
  { label: 'Efficiency', value: '98%' },
]

function Landing() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
        <div>
          <p style={{ color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 700 }}>College Fees Management System</p>
          <h1 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Modern, secure, and intelligent fee operations for institutions.</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem' }}>Manage student records, fee collection, payment history, and scholarship data from a premium dashboard built for modern colleges.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <Link to="/register" style={{ padding: '0.8rem 1.2rem', borderRadius: '999px', background: '#2563eb', color: 'white' }}>Get Started</Link>
            <Link to="/login" style={{ padding: '0.8rem 1.2rem', borderRadius: '999px', border: '1px solid #60a5fa', color: 'white' }}>Login</Link>
          </div>
        </div>
        <div style={{ padding: '1.5rem', borderRadius: '1.5rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
          <h3>Why institutions prefer us</h3>
          <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
            <li>Role-based dashboards for students, parents, and admins</li>
            <li>Smart reminders and payment tracking</li>
            <li>Secure JWT authentication and encrypted passwords</li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
        {stats.map((item) => (
          <div key={item.label} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.2rem' }}>
            <h3 style={{ margin: 0 }}>{item.value}</h3>
            <p style={{ margin: '0.2rem 0 0', color: '#cbd5e1' }}>{item.label}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
        {[
          { icon: <FaGraduationCap />, title: 'Student Friendly', text: 'Track fees, receipts, and due dates in one place.' },
          { icon: <FaShieldAlt />, title: 'Secure', text: 'JWT-based access control with protected routes.' },
          { icon: <FaChartLine />, title: 'Insightful', text: 'View collection trends and department-wise reports.' },
        ].map((item) => (
          <div key={item.title} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '1.2rem' }}>
            <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p style={{ color: '#cbd5e1' }}>{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Landing
