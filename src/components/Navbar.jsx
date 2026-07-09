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
        <a href="#overview">Overview</a>
        <a href="#students">Students</a>
        <a href="#payments">Payments</a>
      </nav>

      <Button variant="primary" onClick={onToggleTheme}>
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </Button>
    </header>
  )
}

export default Navbar
