"use client"

import type React from "react"
import { JSX } from "react"

import { useState, useEffect, useRef } from "react"
import styles from "./Skills.module.css"

type SkillCategory = "frontend" | "backend" | "database" | "ai" | "cloud"

interface Skill {
  name: string

  level: number
}

// Interface using JSX.IntrinsicElements for a polymorphic div component
interface PolymorphicProps extends React.PropsWithChildren {
  as?: keyof JSX.IntrinsicElements
  className?: string
}

// Example: Interface extending specific HTML element props
type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const skills: Record<SkillCategory, Skill[]> = {
    frontend: [
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],

    backend: [
      { name: "Node.js", level: 95 },
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },      
      { name: "Express", level: 85 },
      { name: "Python", level: 90 },
      { name: "Django", level: 90 },
      { name: "Flask", level: 85 },
      { name: ".NET Core", level: 75 },
      { name: "ASP.NET", level: 85 },
      { name: "C#", level: 90 },
      { name: "Microservices", level: 75 },
    ],

    database: [
      { name: "MongoDB",  level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
    
    cloud: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 85 },
      { name: "Docker", level: 70 },
      { name: "CI/CD Pipeline", level: 80 },
    ],
  }  
  
  return (
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Over my journey as a developer, I’ve built a broad set of skills. Here’s an overview of what I can do technically.
        </p>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "frontend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "backend" ? styles.active : ""}`}
            onClick={() => setActiveCategory("backend")}
          >
            Backend
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "database" ? styles.active : ""}`}
            onClick={() => setActiveCategory("database")}
          >
            Database
          </button>

          <button
            className={`${styles.categoryBtn} ${activeCategory === "cloud" ? styles.active : ""}`}
            onClick={() => setActiveCategory("cloud")}
          >
            Cloud
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >

              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillBarWrapper}>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
