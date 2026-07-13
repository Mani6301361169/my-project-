import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`${styles.layout} ${isDark ? styles.dark : ''}`}>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default Layout
