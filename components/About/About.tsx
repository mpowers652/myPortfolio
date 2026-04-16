import { Download } from "lucide-react"
import Link from "next/link"
import Experience from "../Experience/Experience"
import Skills from "../Skills/Skills"
import Stats from "../Stats/Stats"
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
                Senior Software Engineer with 7+ years building high-throughput backend systems across fintech, SaaS, and healthtech.
                Experienced in REST API design, distributed systems, and database optimization with a strong focus on reliability, performance, and scalability.
                Proven track record owning production systems end-to-end at companies like Bloomberg, MongoDB, and Flatiron Health.
              </p>
            </div>

            <Experience />
            <Stats />
            <Skills />
            <div className={styles.buttons}>
              <Link href="/StephenCacouris.pdf" className={styles.secondaryBtn} download>
                  <Download size={16} />
                  Download Resume
              </Link>
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
                    <p>Studied software fundamentals and systems programming, with hands-on experience in algorithms, data structures, and Python.</p>
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
