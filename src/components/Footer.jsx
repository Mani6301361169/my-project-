import styles from './Footer.module.css'

function Footer({ isDark = false }) {
  return (
    <footer className={`${styles.footer} ${isDark ? styles.dark : ''}`}>
      <p>© 2026 FeesHub. Built with React and Vite for the college fees management project.</p>
    </footer>
  )
}

export default Footer
