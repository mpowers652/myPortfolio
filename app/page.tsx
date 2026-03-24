import Hero from "@/components/Hero/Hero"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import About from "@/components/About/About"
import Experience from "@/components/Experience/Experience"
import Services from "@/components/Services/Services"

import Stats from "@/components/Stats/Stats"

import Contact from "@/components/Contact/Contact"
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground"
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop"

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Services />

      <Projects />

      <Contact />
      <ScrollToTop />
    </>
  )
}
