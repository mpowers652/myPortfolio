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
              <span>Mykhail</span>Okhrimenko
            </Link>
            <p>
              ASP.NET Full-Stack Developer | Blazor, Next.js, Azure-Integrated SaaS Platform
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
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link href="mishakarnic@gmail.com" aria-label="Email">
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
                <Link href="#services">Full-Stack .NET Development</Link>
              </li>
              <li>
                <Link href="#services">Azure-Integrated SaaS</Link>
              </li>
              
              <li>
                <Link href="#services">AI-Powered Applications</Link>
              </li>

              <li>
                <Link href="#services">Frontend Development</Link>
              </li>

                            <li>
                <Link href="#services">Backend Development</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>Kyiv, Ukranie</p>
            <p>mishakarnic@gmail.com</p>
            <p>+380 99 621 93 99</p>
            <Link href="#contact" className={styles.contactBtn}>
              Get In Touch
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Mykhail. O. All rights reserved.</p>
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
