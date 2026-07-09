import styles from './SectionHeader.module.css'

function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <div className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default SectionHeader
