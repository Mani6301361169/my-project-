import { NavLink, Outlet } from 'react-router-dom'
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    <section className={styles.dashboardPage}>
      <div className={styles.heroCard}>
        <p className={styles.eyebrow}>Dashboard</p>
        <h1>Welcome back to FeesHub</h1>
        <p>Monitor collections, student records, and administrative updates from a centralized view.</p>
      </div>

      <div className={styles.dashboardShell}>
        <aside className={styles.sidebar}>
          <NavLink to="overview" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Overview
          </NavLink>
          <NavLink to="profile" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Profile
          </NavLink>
          <NavLink to="settings" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Settings
          </NavLink>
        </aside>

        <div className={styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
