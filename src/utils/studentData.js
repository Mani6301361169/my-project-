export const STUDENT_STORAGE_KEY = 'college-fees-students'

export function normalizeStudentRecord(student) {
  const id = String(student.id ?? student?.userId ?? '')
  const name = student.name || student.username || 'Unknown Student'
  const branch = student.branch || student.company?.name || 'General Studies'
  const feeStatus = student.feeStatus || (Number(student.id) % 2 === 0 ? 'Pending' : 'Paid')
  const email = student.email || 'Not provided'
  const phone = student.phone || 'Not provided'
  const address = student.address?.city
    ? `${student.address.street || 'Unknown street'}, ${student.address.city}`
    : 'Not provided'
  const website = student.website || 'Not provided'
  const company = student.company?.name || 'College Hub'
  const description = `${name} is enrolled in ${branch} and currently has ${feeStatus.toLowerCase()} fee status.`

  return {
    id,
    name,
    branch,
    feeStatus,
    email,
    phone,
    address,
    website,
    company,
    description,
  }
}

export function readStoredStudents() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const cached = window.localStorage.getItem(STUDENT_STORAGE_KEY)
    if (!cached) {
      return null
    }

    const parsed = JSON.parse(cached)
    if (!Array.isArray(parsed)) {
      return null
    }

    return parsed.map(normalizeStudentRecord)
  } catch {
    return null
  }
}

export function writeStoredStudents(students) {
  if (typeof window === 'undefined') {
    return
  }

  const normalized = students.map(normalizeStudentRecord)
  window.localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(normalized))
}
