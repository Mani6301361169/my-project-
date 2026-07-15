import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './StudentDetails.module.css'
import { readStoredStudents, normalizeStudentRecord } from '../utils/studentData'

function StudentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStudent = () => {
      setLoading(true)
      const cachedStudents = readStoredStudents()

      if (cachedStudents && cachedStudents.length > 0) {
        const found = cachedStudents.find((item) => item.id === id)
        setStudent(found || null)
        setLoading(false)
        return
      }

      const fallbackStudent = normalizeStudentRecord({
        id,
        name: 'Sample Student',
        branch: 'Computer Science',
        feeStatus: 'Pending',
        email: 'student@example.com',
        phone: '9876543210',
        address: { street: 'College Road', city: 'Bengaluru' },
        website: 'college.example',
        company: { name: 'College Hub' },
      })
      setStudent(fallbackStudent)
      setLoading(false)
    }

    loadStudent()
  }, [id])

  if (loading) {
    return (
      <section className={styles.page}>
        <div className={styles.card}>
          <h2 className={styles.title}>Loading student details...</h2>
        </div>
      </section>
    )
  }

  if (!student) {
    return (
      <section className={styles.page}>
        <div className={styles.card}>
          <h2 className={styles.title}>Student not found</h2>
          <p className={styles.subtitle}>The requested student record could not be located.</p>
          <div className={styles.actions}>
            <button className={styles.button} type="button" onClick={() => navigate('/students')}>
              Back to students
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{student.name}</h2>
            <p className={styles.subtitle}>{student.description}</p>
          </div>
          <span className={styles.badge}>Fee: {student.feeStatus}</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.item}><strong>ID</strong>{student.id}</div>
          <div className={styles.item}><strong>Branch</strong>{student.branch}</div>
          <div className={styles.item}><strong>Email</strong>{student.email}</div>
          <div className={styles.item}><strong>Phone</strong>{student.phone}</div>
          <div className={styles.item}><strong>Address</strong>{student.address}</div>
          <div className={styles.item}><strong>Company</strong>{student.company}</div>
          <div className={styles.item}><strong>Website</strong>{student.website}</div>
        </div>

        <div className={styles.actions}>
          <button className={styles.button} type="button" onClick={() => navigate('/students')}>
            Back to students
          </button>
          <button className={`${styles.button} ${styles.secondary}`} type="button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default StudentDetails
