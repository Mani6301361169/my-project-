import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import styles from './Navbar.module.css'

function Navbar({ isDark, onToggleTheme }) {
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
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Dashboard
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Students
        </NavLink>
        <NavLink to="/registration" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Registration
        </NavLink>
      </nav>

      <Button variant="primary" onClick={onToggleTheme}>
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </Button>
    </header>
  )
}

export default Navbar
