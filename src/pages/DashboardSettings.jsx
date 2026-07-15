import styles from './Dashboard.module.css'

function DashboardSettings() {
  return (
    <div className={styles.overviewContent}>
      <div className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h3>Notification settings</h3>
          <p>Enable reminder emails for pending dues.</p>
          <p>Auto-send receipt confirmations after successful payments.</p>
        </article>
        <article className={styles.infoCard}>
          <h3>Export preferences</h3>
          <p>Generate fee reports as PDF or Excel after each billing cycle.</p>
          <p>Keep audit logs enabled for all payment changes.</p>
        </article>
      </div>
    </div>
  )
}

export default DashboardSettings
