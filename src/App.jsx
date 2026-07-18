import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DashboardOverview from './pages/DashboardOverview'
import DashboardProfile from './pages/DashboardProfile'
import DashboardSettings from './pages/DashboardSettings'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import StudentDetails from './pages/StudentDetails'
import Students from './pages/Students'
import { isAuthenticated } from './utils/auth'

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login/student" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/:role" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login/student" replace />} />
        <Route path="about" element={<About />} />
        <Route path="registration" element={<Registration />} />
        <Route path="students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
        <Route path="students/:id" element={<ProtectedRoute><StudentDetails /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
