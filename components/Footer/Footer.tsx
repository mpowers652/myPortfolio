import Link from "next/link"
import styles from "./Footer.module.css"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <span>Stephen</span>Cacouris
            </Link>
            <p>
              Senior Software Engineer · Back End Developer · Software Engineer · Distributed Control System Engineer · Platform Engineer
            </p>
            <div className={styles.social}>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/senior-stephen-cacouris/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link href="sr.stephencacouris@gmail.com" aria-label="Email">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="#services">Full-Stack Development</Link>
              </li>

              <li>
                <Link href="#services">CI/CD deployment</Link>
              </li>
              
              <li>
                <Link href="#services">API management</Link>
              </li>

              <li>
                <Link href="#services">Frontend Development</Link>
              </li>

              <li>
                <Link href="#services">Backend Development</Link>
              </li>

              <li>
                <Link href="#services">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>New York, NY</p>
            <p>sr.stephencacouris@gmail.com</p>
            <p>+1 (650) 307-5838</p>
            <Link href="#contact" className={styles.contactBtn}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Stephen Cacouris. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
