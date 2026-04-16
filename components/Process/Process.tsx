"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { SearchCheck, ListTodo, Rocket, MessageSquareMore } from "lucide-react"
import styles from "./Process.module.css"

interface Step {
  icon: React.ReactNode
  number: string
  title: string
  description: string
  points: string[]
}

const steps: Step[] = [
  {
    icon: <SearchCheck size={36} />,
    number: "01",
    title: "Understanding & Clarification",
    description: "Before writing a single line of code, I make sure I fully understand the problem and the expected outcome.",
    points: [
      "Ask targeted questions to surface ambiguities early",
      "Align on scope, constraints, and success criteria",
      "Review existing systems or documentation for context",
      "Confirm assumptions with stakeholders before proceeding",
    ],
  },
  {
    icon: <ListTodo size={36} />,
    number: "02",
    title: "Breaking Down the Problem",
    description: "Complex problems become manageable when decomposed into clear, ordered, actionable steps.",
    points: [
      "Identify independent sub-tasks and dependencies",
      "Prioritize by impact and risk",
      "Estimate effort and flag blockers upfront",
      "Document the plan so the team stays aligned",
    ],
  },
  {
    icon: <Rocket size={36} />,
    number: "03",
    title: "Execution",
    description: "I work through each step methodically, keeping quality and delivery speed in balance.",
    points: [
      "Write clean, testable, and well-structured code",
      "Validate each step before moving to the next",
      "Adapt quickly when requirements shift mid-delivery",
      "Keep commits small and progress visible",
    ],
  },
  {
    icon: <MessageSquareMore size={36} />,
    number: "04",
    title: "Follow-Up & Communication",
    description: "Delivery doesn't end at merge. I close the loop with clients and management to ensure lasting success.",
    points: [
      "Share clear summaries of what was built and why",
      "Gather feedback and iterate where needed",
      "Monitor production behaviour post-deployment",
      "Maintain open lines for questions and future work",
    ],
  },
]

const Process = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className={`section ${styles.process}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Process</h2>
        <p className="section-subtitle">
          A consistent, repeatable approach that turns ambiguous requirements into reliable, production-ready software.
        </p>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.stepCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.stepHeader}>
                <div className={styles.iconWrapper}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <ul className={styles.pointList}>
                {step.points.map((point) => (
                  <li key={point} className={styles.pointItem}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
