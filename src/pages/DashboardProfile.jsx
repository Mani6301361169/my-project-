import styles from './Dashboard.module.css'

function DashboardProfile() {
  return (
    <div className={styles.overviewContent}>
      <div className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h3>Finance admin profile</h3>
          <p>Name: Asha Menon</p>
          <p>Role: Accounts Head</p>
          <p>Department: Student Finance</p>
        </article>
        <article className={styles.infoCard}>
          <h3>Today&apos;s alerts</h3>
          <p>3 fee receipts are pending verification.</p>
          <p>5 parents requested payment confirmation copies.</p>
        </article>
      </div>
    </div>
  )
}

export default DashboardProfile
