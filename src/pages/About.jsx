import styles from './About.module.css'

function About() {
  const pillars = [
    {
      title: 'Problem',
      text: 'Many colleges still rely on manual fee collection, causing long queues, delay in confirmations, and confusion around dues.',
    },
    {
      title: 'Solution',
      text: 'This platform offers a digital fee experience with online payments, live tracking, and instant receipts for all stakeholders.',
    },
    {
      title: 'Impact',
      text: 'Students save time, parents gain transparency, and administrators can manage records and reports from one dashboard.',
    },
  ]

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>About the system</p>
        <h1>From manual collections to a modern college fee ecosystem</h1>
        <p>
          The College Fees Management System is designed to replace paper-based fee handling with a secure, transparent, and user-friendly digital workflow.
        </p>
      </div>

      <div className={styles.grid}>
        {pillars.map((pillar) => (
          <article key={pillar.title} className={styles.card}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.pitchBox}>
        <h2>One-minute pitch</h2>
        <p>
          Our College Fees Management System is a secure web application where students can view fee details, pay online, and instantly download receipts. Parents can monitor payment status, and administrators can manage records, generate reports, and send reminders from a single dashboard.
        </p>
      </div>
    </section>
  )
}

export default About
