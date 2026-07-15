import { describe, expect, it } from 'vitest'
import { normalizeStudentRecord } from './studentData'

describe('normalizeStudentRecord', () => {
  it('maps API data into a display-friendly student record', () => {
    const record = normalizeStudentRecord({
      id: 1,
      name: 'Aarav Mehta',
      email: 'aarav@example.com',
      phone: '9876543210',
      address: { street: 'Main Road', city: 'Delhi' },
      website: 'aarav.dev',
      company: { name: 'College Hub' },
    })

    expect(record).toMatchObject({
      id: '1',
      name: 'Aarav Mehta',
      email: 'aarav@example.com',
      phone: '9876543210',
      address: 'Main Road, Delhi',
      website: 'aarav.dev',
      company: 'College Hub',
    })
  })

  it('falls back to defaults when required values are missing', () => {
    const record = normalizeStudentRecord({ id: 2 })

    expect(record.name).toBe('Unknown Student')
    expect(record.branch).toBe('General Studies')
    expect(record.feeStatus).toBe('Pending')
    expect(record.email).toBe('Not provided')
  })
})
