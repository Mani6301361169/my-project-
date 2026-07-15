import { Link } from 'react-router-dom'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import StatRow from '../components/StatRow'
import styles from './Home.module.css'

function Home() {
  const stats = [
    { title: 'Collected', value: '₹6.8L', accent: 'linear-gradient(135deg, #4f46e5, #818cf8)' },
    { title: 'Pending', value: '₹1.4L', accent: 'linear-gradient(135deg, #f97316, #fb923c)' },
    { title: 'Students', value: '248', accent: 'linear-gradient(135deg, #0f766e, #2dd4bf)' },
  ]

  const payments = [
    { label: 'B.Sc Computer Science', amount: '₹42,000', status: 'paid' },
    { label: 'BBA Semester 4', amount: '₹28,500', status: 'pending' },
    { label: 'MBA Admission', amount: '₹75,000', status: 'paid' },
  ]

  const users = [
    {
      title: 'Students',
      points: ['Secure login', 'View fee structure', 'Pay online and download receipts'],
    },
    {
      title: 'Parents',
      points: ['Track dues', 'Receive payment confirmations', 'Get reminders before deadlines'],
    },
    {
      title: 'Admins',
      points: ['Manage student records', 'Verify payments', 'Generate reports and notifications'],
    },
  ]

  const features = [
    'Online fee payment gateway with instant verification',
    'Digital receipts and payment history for every student',
    'Automated reminders for pending dues',
    'Scholarship and concession tracking',
    'Analytics dashboard for fee collection trends',
  ]

  const workflow = [
    { title: 'Student logs in', description: 'A student opens the portal and checks the current fee summary.' },
    { title: 'Payment is made', description: 'Fees are paid securely through the built-in payment flow.' },
    { title: 'Receipt is shared', description: 'The system confirms payment and sends a digital receipt instantly.' },
  ]

  const benefits = ['Saves time for students, parents, and staff', 'Reduces paperwork and manual errors', 'Improves transparency and trust']
  const future = ['Mobile app for Android and iOS', 'UPI and wallet support', 'AI chatbot for fee-related questions']

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <main className={styles.main}>
          <section className={styles.hero} id="overview">
            <div>
              <p className={styles.eyebrow}>Smart college finance platform</p>
              <h1>College Fees Management System</h1>
              <p className={styles.heroText}>
                A secure web platform for students, parents, and administrators to track fee dues, pay online, download receipts, and stay informed in real time.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryLink} href="#features">Explore features</a>
                <Link className={styles.secondaryLink} to="/dashboard">Open admin view</Link>
              </div>
            </div>
            <div className={styles.heroCard}>
              <h3>Today&apos;s snapshot</h3>
              <p>₹6.8L collected this week</p>
              <span>42 payments verified • 8 reminders sent</span>
            </div>
          </section>

          <SectionHeader title="Live overview" subtitle="A complete snapshot of fees collected and dues pending" align="left" />
          <section className={styles.grid}>
            {stats.map((stat) => (
              <Card key={stat.title} title={stat.title} value={stat.value} accent={stat.accent} />
            ))}
          </section>

          <section className={styles.section}>
            <SectionHeader title="Why this system matters" subtitle="Built to solve queues, manual errors, and delayed confirmations" />
            <div className={styles.problemGrid}>
              <article className={styles.problemCard}>
                <h3>Problem</h3>
                <p>Many colleges still depend on manual fee collection, which creates long queues, misplaced receipts, and unclear payment status.</p>
              </article>
              <article className={styles.problemCard}>
                <h3>Solution</h3>
                <p>This platform centralizes fee records, offers online payments, and provides instant digital receipts for students and parents.</p>
              </article>
            </div>
          </section>

          <section className={styles.section} id="features">
            <SectionHeader title="Built for every user" subtitle="Separate experiences for students, parents, and administrators" />
            <div className={styles.userGrid}>
              {users.map((user) => (
                <article key={user.title} className={styles.userCard}>
                  <h3>{user.title}</h3>
                  <ul>
                    {user.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.bottomGrid} id="students">
            <div className={styles.panel}>
              <SectionHeader title="Recent payments" subtitle="Fee status for active students" />
              {payments.map((payment) => (
                <StatRow key={payment.label} label={payment.label} amount={payment.amount} status={payment.status} />
              ))}
            </div>

            <div className={styles.panel} id="payments">
              <SectionHeader title="Core features" subtitle="Everything needed for a modern fee process" />
              <ul className={styles.list}>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader title="How the workflow works" subtitle="From login to receipt in a few simple steps" />
            <div className={styles.workflowGrid}>
              {workflow.map((step, index) => (
                <article key={step.title} className={styles.workflowCard}>
                  <span>{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader title="Benefits and future enhancements" subtitle="Designed to grow from a college project into a scalable product" />
            <div className={styles.benefitGrid}>
              <article className={styles.benefitCard}>
                <h3>Benefits</h3>
                <ul className={styles.benefitList}>
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
              <article className={styles.benefitCard}>
                <h3>Future roadmap</h3>
                <ul className={styles.benefitList}>
                  {future.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
