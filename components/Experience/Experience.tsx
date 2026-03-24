import styles from "./Experience.module.css"

interface ExperienceItem {
  title: string
  company: string
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
      title: "ASP.Net Full-Stack Web Developer",
      company: "TechNova Solutions",
      period: "Nov 2024 – Feb 2025",
      description: [
        "Built modern, scalable, Azure-integrated SaaS applications using .NET Core, Blazor, Angular.js, and Python AI models.",
        "Integrated Azure cloud services to enhance scalability and reliability of deployed applications."
      ],
    },
    {
      title: "Full Stack Web Developer",
      company: "KyivSoft Labs",
      period: "Nov 2022 – May 2024",
      description: [
        "Developed and maintained .NET Core, Next.js, and Azure applications for healthcare and enterprise clients.",
        "Optimized backend performance and frontend responsiveness, ensuring fast and scalable user experiences.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "CreativeByte Agency",
      period: "Sep 2021 – May 2022",
      description: [
        "Designed and developed modern, responsive interfaces using React, Next.js, and TailwindCSS.",
        "Collaborated closely with designers and backend developers to ensure smooth integration and pixel-perfect implementations.",
      ],
    }
  ]

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Computer Science",
      Education: "National technical University of Ukraine (NTUU)",
      period: "Sep 2020 - Jun 2024",
      description:
        "Studied modern web technologies and ASP.NET development, gaining experience in building web applications, SaaS platforms, and database systems.",
    },
    {
      degree: "",
      Education: "Novopecherska",
      period: "Sep 2017 - May 2020",
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
