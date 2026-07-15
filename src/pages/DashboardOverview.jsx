import styles from './Dashboard.module.css'

function DashboardOverview() {
  const summary = [
    { title: 'Payments verified', value: '42' },
    { title: 'Pending dues', value: '18' },
    { title: 'Reminders sent', value: '8' },
  ]

  return (
    <div className={styles.overviewContent}>
      <div className={styles.overviewGrid}>
        {summary.map((item) => (
          <article key={item.title} className={styles.infoCard}>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </article>
        ))}
      </div>

      <div className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h3>Current focus</h3>
          <p>Scholarship approvals and hostel dues need attention before the next billing cycle.</p>
        </article>
        <article className={styles.infoCard}>
          <h3>Upcoming actions</h3>
          <p>Send payment reminders to semester 5 students and verify the latest online transfers.</p>
        </article>
      </div>
    </div>
  )
}

export default DashboardOverview
