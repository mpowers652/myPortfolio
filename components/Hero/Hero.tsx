"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Hero.module.css"
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from "lucide-react"

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const text = title.innerText
    title.innerHTML = ""
    ;[...text].forEach((char, i) => {
      const span = document.createElement("span")
      span.innerText = char
      span.style.animationDelay = `${i * 0.05}s`
      span.className = styles.char
      title.appendChild(span)
    })

    // Set loaded state after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isLoaded ? styles.loaded : ""}`}>
          <div className={styles.textContent}>
            <p className={styles.greeting}></p>
            <h1 ref={titleRef} className={styles.title}>
              Stephen Cacouris
            </h1>
            <h2 className={styles.subtitle}>
              <span className={styles.typingText}>
                Senior Software Engineer <span className={styles.separator}>|</span> Next.js  {" "}
                <span className={styles.separator}> | </span>  <span className={styles.highlight}> Full-Stack </span> Expert
              </span>
            </h2>
            <p className={styles.description}>
             Senior Software Engineer with 10 years of experience building, scaling, and operating production backend systems in high-growth and enterprise environments.
            </p>

            <div className={styles.buttons}>
              <Link href="#projects" className={styles.primaryBtn}>
                View Projects
              </Link>
              <Link href="/StephenCacouris.pdf" className={styles.secondaryBtn} download>
                <Download size={16} />
                Download Resume
              </Link>
            </div>


          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder}></div>
              <Image
                src="/image/MyPic.png"
                alt="Stephen Cacouris"
                width={500}
                height={500}
                className={styles.image}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <Link href="#stats" className={styles.scrollDown} aria-label="Scroll down">
          <ArrowDown size={20} />
        </Link>
      </div>

      <div className={styles.heroGlow}></div>
    </section>
  )
}

export default Hero
