import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/Registration'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="app-shell">
      <nav className="page-switcher" aria-label="Page navigation">
        <button type="button" className={activePage === 'dashboard' ? 'active' : ''} onClick={() => setActivePage('dashboard')}>
          Dashboard
        </button>
        <button type="button" className={activePage === 'registration' ? 'active' : ''} onClick={() => setActivePage('registration')}>
          Registration
        </button>
      </nav>
      {activePage === 'dashboard' ? <Home /> : <Registration />}
    </div>
  )
}

export default App
