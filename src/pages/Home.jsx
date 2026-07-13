import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import StatRow from '../components/StatRow'
import styles from './Home.module.css'

function Home() {

  const stats = [
    { title: 'Collected', value: '₹4.8L', accent: 'linear-gradient(135deg, #4f46e5, #818cf8)' },
    { title: 'Pending', value: '₹1.2L', accent: 'linear-gradient(135deg, #f97316, #fb923c)' },
    { title: 'Students', value: '248', accent: 'linear-gradient(135deg, #0f766e, #2dd4bf)' },
  ]

  const payments = [
    { label: 'B.Sc Computer Science', amount: '₹42,000', status: 'paid' },
    { label: 'BBA Semester 4', amount: '₹28,500', status: 'pending' },
    { label: 'MBA Admission', amount: '₹75,000', status: 'paid' },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <section className={styles.hero} id="overview">
            <div>
              <p className={styles.eyebrow}>React + Vite Project</p>
              <h1>College Fees Management System</h1>
              <p className={styles.heroText}>
                Monitor fee collection, student dues, and payment progress through a clean and reusable React interface.
              </p>
            </div>
            <div className={styles.heroCard}>
              <h3>Today&apos;s snapshot</h3>
              <p>12 new payments received</p>
              <span>Last updated 5 mins ago</span>
            </div>
          </section>

          <SectionHeader title="Overview Cards" subtitle="Reusable cards built with props" align="left" />
          <section className={styles.grid}>
            {stats.map((stat) => (
              <Card key={stat.title} title={stat.title} value={stat.value} accent={stat.accent} />
            ))}
          </section>

          <section className={styles.bottomGrid} id="students">
            <div className={styles.panel}>
              <SectionHeader title="Recent Payments" subtitle="Fee status for active students" />
              {payments.map((payment) => (
                <StatRow key={payment.label} label={payment.label} amount={payment.amount} status={payment.status} />
              ))}
            </div>

            <div className={styles.panel} id="payments">
              <SectionHeader title="Admin Notes" subtitle="Important reminders" />
              <ul className={styles.list}>
                <li>Hostel dues for 14 students need attention.</li>
                <li>Exam fee reminders will be sent tomorrow.</li>
                <li>Scholarship approvals are pending review.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
