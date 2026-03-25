import styles from "./Experience.module.css"

interface ExperienceItem {
  title: string
  company: string
  website: string
  location: string
  summary: string
  period: string
  description: string[]
}

interface EducationItem {
  degree: string
  Education: string
  period: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Software Engineer",
      company: "Bloomberg",
      website: "https://www.bloomberg.com/",
      location: "New York, NY",
      summary: "Bloomberg is a global leader in business and financial information, delivering trusted data, news, and insights that bring transparency and efficiency, and fairness to market",
      period: "Oct 2023 – Sep 2025",
      description: [
        "Designed and maintained high-throughput backend services supporting large-scale payment and financial workflows.",
        "Built and optimized REST APIs handling high transaction volumes with strict reliability and latency requirements.",
        "Improved system performance and resiliency through profiling, refactoring, and observability enhancements.",
        "Collaborated with product, security, and infrastructure teams to deliver enterprise-grade backend features.",
        "Participated in on-call rotations and led incident response for production systems."
      ],
    },
    {
      title: "Software Engineer Backend",
      company: "MongoDB",
      website: "https://www.mongodb.com/",
      location: "New York, NY",
      summary: "MongoDB's mission is to empower innovators to create, transform, and disrupt industries by unleashing the power of software and data.",
      period: "Aug 2020 – July 2023",
      description: [
        "Developed backend services for customer-facing SaaS products.",
        "Worked extensively with relational databases, schema migrations, and query optimization.",
        "Contributed to service-oriented architecture and internal APIs.",
        "Emphasized maintainable code, testing, and incremental system improvements.",
        "Collaborated with frontend, product, and data teams."
      ],
    },
    {
      title: "Backend Developer",
      company: "Flatiron Health",
      website: "https://flatiron.com/",
      location: "New York, NY",
      summary: "Flatiron Health’s mission is to improve and extend lives by learning from the experience of every person with cancer.",
      period: "Aug 2018 – July 2020",
      description: [
        "Built backend services handling millions of requests/day, reducing latency by 40%",
        "Designed event-driven pipelines processing millions of records daily, improving throughput 3×.",
        "Owned features end-to-end, ensuring reliability and high availability in production.",
        "Reduced data failures by ~40% via validation, retry logic, and monitoring."
      ],
    }
  ]

  const education: EducationItem[] = [
    {
      degree: "Master of Computer Applications",
      Education: "New York University",
      period: "2016 - 2018",
      description:
        "Studied modern web technologies and ASP.NET development, gaining experience in building web applications, SaaS platforms, and database systems.",
    },
    {
      degree: "Bachelor of Computer Science",
      Education: "New York University",
      period: "2012 - 2016",
      description:
        "Studied basic web technologies and software fundamentals, gaining theoretical and practical experience in programming, Python.",
    },
  ]

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience | Education</h2>

        <div className={styles.content}>
          <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <ul className={styles.description}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationSection}>
            <h3 className={styles.sectionTitle}>Education</h3>

            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{edu.degree}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{edu.Education}</span>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.eduDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
