import styles from './Sidebar.module.css'

function Sidebar({ isDark }) {
  const menuItems = ['Dashboard', 'Students', 'Fee Records', 'Reports', 'Settings']

  return (
    <aside className={`${styles.sidebar} ${isDark ? styles.dark : ''}`}>
      <p className={styles.label}>Quick access</p>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
