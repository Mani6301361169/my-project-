import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or may have been moved.</p>
      <Link to="/">Return to Home</Link>
    </section>
  )
}

export default NotFound
