import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import TechMarquee from "../components/TechMarquee";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import useMousePosition from "../hooks/useMousePosition";
import useScrollSpy from "../hooks/useScrollSpy";

const Portfolio = () => {
  const mouse = useMousePosition();
  const active = useScrollSpy(); 
  // expected values: hero | about | skills | projects | contact

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative bg-black text-white">
      <Background mouse={mouse} />

      {/* Navbar */}
      <Navbar active={active} scrollTo={scrollToSection} />

      {/* Hero */}
      <section id="hero">
        <Hero scrollToSection={scrollToSection} />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Tech Stack Marquee (no scroll spy needed) */}
      <section aria-hidden="true">
        <TechMarquee />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;
