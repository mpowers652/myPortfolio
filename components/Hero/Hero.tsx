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
              Mykhail Okhrimenko
            </h1>
            <h2 className={styles.subtitle}>
              <span className={styles.typingText}>
                .Net Full Stack Developer <span className={styles.separator}>|</span> Blazor Next.js  {" "}
                <span className={styles.separator}> / </span> AI-Powered SaaS 
              </span>
            </h2>
            <p className={styles.description}>
             I create dynamic, Azure-powered SaaS platforms that merge elegant front-end design with robust ASP.NET back-end logic.
             Focused on Blazor and Angular.js to craft seamless, intelligent user experiences.
            </p>

            <div className={styles.buttons}>
              <Link href="#projects" className={styles.primaryBtn}>
                View Projects
              </Link>
              <Link href="/Resume.pdf" className={styles.secondaryBtn} download>
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
                alt="Misha"
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
