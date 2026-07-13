import { Link } from 'react-router-dom'

const students = [
  { id: '1', name: 'Aarav Mehta', branch: 'Computer Science' },
  { id: '2', name: 'Sneha Rao', branch: 'Business Administration' },
  { id: '3', name: 'Karan Verma', branch: 'MBA' },
]

function Students() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Student Records</h1>
      <p>Select a student to view detailed information.</p>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link> - {student.branch}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Students
