import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from './Button'
import styles from './Navbar.module.css'

function Navbar({ isDark, onToggleTheme }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <header className={`${styles.navbar} ${isDark ? styles.dark : ''}`}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>₹</div>
        <div>
          <h2>FeesHub</h2>
          <p>College fees dashboard</p>
        </div>
      </div>

      <nav className={styles.links} aria-label="Primary navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Contact
        </NavLink>
        {user ? (
          <NavLink to={`/${user.role}-dashboard`} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Dashboard
          </NavLink>
        ) : null}
      </nav>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {user ? (
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <NavLink to="/login" className={styles.link}>Login</NavLink>
            <NavLink to="/register" className={styles.link}>Register</NavLink>
          </>
        )}
        <Button variant="primary" onClick={onToggleTheme}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </div>
    </header>
  )
}

export default Navbar
