"use client"

import { useState } from "react"
import styles from "./Skills.module.css"

type SkillCategory = "frontend" | "backend" | "database" | "ai" | "cloud"

const skills: Record<SkillCategory, string[]> = {
  frontend: ["TypeScript", "Next.js", "FastAPI", "Tailwind CSS"],
  backend: ["Node.js", "Java", "Spring Boot", "Python", "Django", "Flask", ".NET Core", "C#", "Microservices"],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  ai: ["OpenAI API", "LangChain", "Prompt Engineering", "Vector Databases"],
  cloud: ["AWS", "Azure", "Docker", "CI/CD Pipeline"],
}

const categories: { key: SkillCategory; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "ai", label: "AI" },
  { key: "cloud", label: "Cloud" },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend")

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h3 className="section-title">My Skills</h3>
        <p className="section-subtitle">
          Over my journey as a developer, I've built a broad set of skills. Here's an overview of what I can do technically.
        </p>

        <div className={styles.categories}>
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.categoryBtn} ${activeCategory === key ? styles.active : ""}`}
              onClick={() => setActiveCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.skillLine}>
          {skills[activeCategory].map((skill, i) => (
            <span key={skill}>
              <span className={styles.skillPill}>{skill}</span>
              {i < skills[activeCategory].length - 1 && <span className={styles.divider}>|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
