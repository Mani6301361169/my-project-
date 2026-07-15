import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import DashboardOverview from './pages/DashboardOverview'
import DashboardProfile from './pages/DashboardProfile'
import DashboardSettings from './pages/DashboardSettings'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import StudentDetails from './pages/StudentDetails'
import Students from './pages/Students'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="registration" element={<Registration />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentDetails />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
