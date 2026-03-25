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
                Senior Software Engineer with 10 years of experience designing, building, and maintaining scalable backend systems in production environments.
                Strong expertise in Python, Java, Go, C#, and Node.js, with deep experience in RESTful API design, distributed systems, and database-driven applications.
                Proven track record of delivering high-availability services at scale, optimizing performance, and supporting mission-critical systems in fintech and SaaS environments. 
                Experienced with AWS cloud infrastructure, containerization, CI/CD pipelines, and modern backend frameworks. 
                Adept at collaborating across cross-functional teams, owning production systems, and driving reliable software delivery.
              </p>
            </div>



            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>My Journey</h4>

              <div className={styles.timelineItems}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Senior Software Engineer at Bloomberg</h5>
                    <p className={styles.timelinePeriod}>Oct 2023 - Sept 2025</p>
                    <p>Designed and maintained high-throughput backend services supporting large-scale payment and financial workflows.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Software Engineer Backend at MongoDB</h5>
                    <p className={styles.timelinePeriod}>Aug 2020 - July 2023</p>
                    <p>
                      Developed backend services for customer-facing SaaS products.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Backend developer at Flatiron Health </h5>
                    <p className={styles.timelinePeriod}>Aug 2018 - July 2020</p>
                    <p>Built backend services handling millions of requests/day, reducing latency by 40%</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>M.S. Computer Applications from New York University</h5>
                    <p className={styles.timelinePeriod}>2016 - 2018</p>
                    <p>Designed responsive React and Next.js interfaces with TailwindCSS, collaborating with designers and backend developers for seamless integration.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>B.S. Computer Science from New York University</h5>
                    <p className={styles.timelinePeriod}>2012 - 2016</p>
                    <p>Studied basic web technologies and software fundamentals, gaining theoretical and practical experience in programming, Python.</p>
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
