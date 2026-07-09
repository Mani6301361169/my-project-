import styles from './StatRow.module.css'

function StatRow({ label, amount, status }) {
  return (
    <div className={styles.row}>
      <span>{label}</span>
      <div className={styles.meta}>
        <strong>{amount}</strong>
        <span className={styles[status]}>{status}</span>
      </div>
    </div>
  )
}

export default StatRow
