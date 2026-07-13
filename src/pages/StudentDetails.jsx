import { useParams, useNavigate } from 'react-router-dom'

const students = [
  { id: '1', name: 'Aarav Mehta', branch: 'Computer Science', feeStatus: 'Paid' },
  { id: '2', name: 'Sneha Rao', branch: 'Business Administration', feeStatus: 'Pending' },
  { id: '3', name: 'Karan Verma', branch: 'MBA', feeStatus: 'Paid' },
]

function StudentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const student = students.find((item) => item.id === id)

  if (!student) {
    return (
      <section style={{ padding: '2rem' }}>
        <h2>Student not found</h2>
        <p>The requested student record could not be located.</p>
        <button type="button" onClick={() => navigate('/students')}>
          Back to students
        </button>
      </section>
    )
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Branch:</strong> {student.branch}</p>
      <p><strong>Fee Status:</strong> {student.feeStatus}</p>
      <button type="button" onClick={() => navigate('/students')}>
        Back to students
      </button>
    </section>
  )
}

export default StudentDetails
