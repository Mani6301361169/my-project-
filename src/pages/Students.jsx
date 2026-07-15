import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Students.module.css'
import { readStoredStudents, writeStoredStudents, normalizeStudentRecord, STUDENT_STORAGE_KEY } from '../utils/studentData'

function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchStudents = async () => {
    setLoading(true)
    setError('')

    try {
      const cachedStudents = readStoredStudents()
      if (cachedStudents && cachedStudents.length > 0) {
        setStudents(cachedStudents)
        setLoading(false)
        return
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Unable to load student records right now.')
      }

      const data = await response.json()
      const normalized = data.slice(0, 6).map(normalizeStudentRecord)
      setStudents(normalized)
      writeStoredStudents(normalized)
    } catch (err) {
      setError(err.message || 'Something went wrong while loading student records.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Student Records</h1>
          <p className={styles.subtitle}>Browse live student records with dynamic routing and persistent data.</p>
        </div>
        <button className={styles.refreshButton} onClick={fetchStudents} type="button">
          Refresh data
        </button>
      </div>

      {loading && <div className={styles.statusBox}>Loading student records...</div>}
      {error && <div className={`${styles.statusBox} ${styles.errorBox}`}>{error}</div>}
      {!loading && !error && (
        <div className={styles.statusBox}>
          Stored locally in {STUDENT_STORAGE_KEY} for quick access after refresh.
        </div>
      )}

      <div className={styles.grid}>
        {students.map((student) => (
          <article key={student.id} className={styles.card}>
            <span className={styles.badge}>Fee: {student.feeStatus}</span>
            <h3>{student.name}</h3>
            <p className={styles.meta}>{student.branch}</p>
            <p className={styles.meta}>{student.email}</p>
            <Link className={styles.viewLink} to={`/students/${student.id}`}>
              View details
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Students
