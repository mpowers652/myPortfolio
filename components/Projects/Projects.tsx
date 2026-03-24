"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Projects.module.css"
import { ExternalLink, Github } from "lucide-react"

type ProjectCategory = "all" | "fullstack" | "ai" | "devops" | "mobile" | "cloud" | "frontend" | "backend"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Azure SaaS Management Platform",
      description:
        "A multi-tenant SaaS platform built with ASP.NET Core, Blazor, and Azure services, enabling businesses to manage clients, billing, and analytics in real-time.",
      image: "/project/project1.png",
      category: ["fullstack", "cloud"],
      technologies: [
        "ASP.NET Core",
        "Blazor",
        "Azure App Service",
        "SQL Server",
        "Docker",
      ],
      liveUrl: "https://configurator.com.ua",
    },
    {
      id: 2,
      title: "AI Customer Support Bot",
      description:
        "AI-driven chatbot integrated with Azure Cognitive Services for automated support, ticket creation, and sentiment analysis.",
      image: "/project/project2.png",
      category: ["ai", "fullstack"],
      technologies: [
        "C#",
        "ASP.NET Core",
        "OpenAI API",
        "Azure Cognitive Services",
        "SignalR",
      ],
      liveUrl: "http://septanazal.ua",
    },
    {
      id: 3,
      title: "Smart Maintenance Predictor ",
      description:
        "AI-powered predictive maintenance system for industrial IoT devices using .NET Core backend and ML.NET models.",
      image: "/project/project3.png",
      category: ["frontend", "fullstack"],
      technologies: [
        "Blazor",
        "ASP.NET Core API",
        "Entity Framework",
        "TailwindCSS",
        "Azure SQL",
      ],
      liveUrl: "https://kahl.com.ua/kievhockey/HomePage/",
    },
    {
      id: 4,
      title: "Blazor E-Commerce Dashboard",
      description:
        "A responsive e-commerce analytics dashboard built with Blazor and integrated with Azure SQL and microservices.",
      image: "/project/project4.png",
      category: ["ai", "backend"],
      technologies: [
        "ML.NET",
        "ASP.NET Core",
        "Azure Functions",
        "PostgreSQL",
        "Docker",
      ],
      liveUrl: "https://www.infodent.shop/",
    },
    {
      id: 5,
      title: "Next.js & .NET Analytics Portal",
      description:
        "A full-stack business intelligence web app combining Next.js frontend with .NET API backend and Azure-hosted microservices.",
      image: "/project/project5.png",
      category: ["fullstack", "cloud"],
      technologies: [
        "Next.js",
        "ASP.NET Core",
        "GraphQL",
        "Azure App Insights",
        "Prisma ORM",
      ],
      liveUrl: "https://ferm.in.ua/",
    },
    {
      id: 6,
      title: "AI Document Classifier",
      description:
        "Document classification web tool using Python AI microservices connected to a .NET Core web API for enterprise automation.",
      image: "/project/project6.png",
      category: ["ai", "fullstack"],
      technologies: [
        "Python",
        "FastAPI",
        "ASP.NET Core",
        "Azure Blob Storage",
        "OpenAI API",
      ],
      liveUrl: "https://1tm.com.ua/",
    },
    {
      id: 7,
      title: "Secure Identity Management System",
      description:
        "Enterprise-grade authentication and user management platform integrating Azure AD, role-based access, and multi-factor security.",
      image: "/project/project7.png",
      category: ["frontend", "fullstack"],
      technologies: [
        "ASP.NET Core",
        "Azure AD",
        "JWT Authentication",
        "SQL Server",
        "Blazor",
      ],
    },
    {
      id: 8,
      title: "Blazor Chat SaaS",
      description:
        "Real-time chat SaaS platform built with Blazor and SignalR, featuring authentication, multi-tenancy, and message analytics.",
      image: "/project/project8.png",
      category: ["fullstack"],
      technologies: [
        "Blazor",
        "SignalR",
        "ASP.NET Core",
        "SQL Server",
        "Azure AD",
      ],
      liveUrl: "http://www.sencor.info/",
    },

    {
      id: 9,
      title: "AI-Powered Resume Analyzer",
      description:
        "Web app that analyzes resumes using OpenAI and ranks candidates based on job fit — fully built with .NET Core and Next.js.",
      image: "/project/project10.png",
      category: ["ai", "fullstack"],
      technologies: [
        "ASP.NET Core",
        "Next.js",
        "OpenAI API",
        "Azure Cognitive Services",
        "PostgreSQL",
      ],
      liveUrl: "https://velocv.com/",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>



        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
