import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.info}>

            
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
                I am a ASP.NET Full-Stack Developer with 5+ years of experience building .NET Core, Blazor, Angular.js, Next.js, and Azure-integrated SaaS applications. 
                I deliver end-to-end solutions, from architecture and backend APIs to responsive frontends, focusing on clean, maintainable, and scalable code.
              </p>
              <p className={styles.bio}>
                My expertise includes C#, SQL Server, PostgreSQL, microservices, cloud (Azure, Docker, Kubernetes), and AI-powered SaaS applications. 
                I combine the reliability of .NET with modern web innovation to create fast, secure, and high-performance applications that drive results.
              </p>
            </div>



            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>My Journey</h4>

              <div className={styles.timelineItems}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Senior Full Stack Developer at Softevate</h5>
                    <p className={styles.timelinePeriod}>June 2022 - Present</p>
                    <p>Built scalable Azure-integrated SaaS applications using .NET Core, Blazor, Angular.js, and Python AI models, ensuring high performance and reliability.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Freelance Developer</h5>
                    <p className={styles.timelinePeriod}>October 2023 - Present</p>
                    <p>
                      Developed and maintained .NET Core, Next.js, and Azure applications for healthcare and enterprise clients, optimizing backend and frontend performance.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>B.S. Computer Science</h5>
                    <p className={styles.timelinePeriod}>September 2021 - May 2025</p>
                    <p>Designed responsive React and Next.js interfaces with TailwindCSS, collaborating with designers and backend developers for seamless integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
