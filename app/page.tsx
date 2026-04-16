import Hero from "@/components/Hero/Hero"
import Projects from "@/components/Projects/Projects"
import About from "@/components/About/About"
import Services from "@/components/Services/Services"
import Contact from "@/components/Contact/Contact"
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground"
import Process from "@/components/Process/Process"
import Reviews from "@/components/Reviews/Reviews"
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop"

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Reviews />
      <Contact />
      <ScrollToTop />
    </>
  )
}
