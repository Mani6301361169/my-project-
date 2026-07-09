import styles from './StatusBadge.module.css'

function StatusBadge({ label, tone = 'paid' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{label}</span>
}

export default StatusBadge
