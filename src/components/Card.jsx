import styles from './Card.module.css'

function Card({ title, value, accent, children }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} style={{ background: accent }}>
        {title.charAt(0)}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{value}</p>
        {children}
      </div>
    </article>
  )
}

export default Card
