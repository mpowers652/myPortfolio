"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import styles from "./Services.module.css"
import { Code2, Layers, Globe, Cloud, Server, Brain } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const Services = () => {
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

  const services: Service[] = [
    {
      icon: <Code2 size={40} />,
      title: "Full-Stack Development",
      description: "Building modern, scalable, and high-performance web and SaaS applications using ASP.NET Core, Next.js, and Python",
      features: [
        "End-to-end architecture, development, and deployment",
        "ASP.NET Core, Next.js, and Python expertise",
        "Clean code and scalable system design",
        "Integration with SQL Server and PostgreSQL",
        "Microservices and RESTful API development",
      ],
    },
    {
      icon: <Layers size={40} />,
      title: "Azure-Integrated SaaS Platforms",
      description: "Developing secure, multi-tenant SaaS platforms powered by Microsoft Azure.",
      features: [
        "Azure App Services and Functions",
        "Cloud-based data storage and scaling",
        "Authentication and role-based access",
        "Multi-tenant architecture design",
        "Continuous deployment with Azure DevOps",
      ],
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps Engineering",
      description: "Optimizing deployment, scalability, and system reliability using modern DevOps practices.",
      features: [
        "Containerization with Docker and Kubernetes",
        "CI/CD pipelines for automated deployment",
        "Cloud infrastructure monitoring and optimization",
        "Secure configuration and version control",
        "Cloud cost management and performance tuning",
      ],
    },
    {
      icon: <Globe size={40} />,
      title: "Frontend Development",
      description: "Delivering responsive, modern, and user-friendly interfaces across devices.",
      features: [
        "Node.js and Next.js frontends",
        "TailwindCSS for responsive UI design",
        "Component-based architecture",
        "Performance and accessibility optimization",
        "Seamless API integration and state management",
      ],
    },
    {
      icon: <Server size={40} />,
      title: "Backend & Database Systems",
      description: "Designing efficient and secure backend systems with clean architecture and strong data integrity.",
      features: [
        "C#, Python, Java, and .NET Core backend development",
        "Entity Framework and Prisma ORM",
        "Database design with SQL Server and PostgreSQL",
        "Microservices and modular APIs",
        "Secure authentication and data protection",
      ],
    },
  ]

  return (
    <section id="services" className={`section ${styles.services}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          I offer a wide range of services to help businesses and individuals bring their ideas to life. Here's what I
          can do for you.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ""}`}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
