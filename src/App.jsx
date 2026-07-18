import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { useAuth } from './context/AuthContext'
import About from './pages/About'
import AdminDashboard from './pages/AdminDashboard'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ParentDashboard from './pages/ParentDashboard'
import Register from './pages/Register'
import StudentDashboard from './pages/StudentDashboard'

function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading your dashboard...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (role && user.role !== role) {
    return <Navigate to={`/${user.role}-dashboard`} replace />
  }

  return children
}

function DashboardRedirect() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={`/${user.role}-dashboard`} replace />
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="login/:role" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="student-dashboard" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
        <Route path="parent-dashboard" element={<ProtectedRoute role="parent"><ParentDashboard /></ProtectedRoute>} />
        <Route path="admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="dashboard" element={<DashboardRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
