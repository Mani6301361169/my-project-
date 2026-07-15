import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center', maxWidth: '36rem', margin: '2rem auto' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or may have been moved.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1rem', background: '#0f172a', color: '#fff', textDecoration: 'none', borderRadius: '0.8rem' }}>
        Return to Home
      </Link>
    </section>
  )
}

export default NotFound
