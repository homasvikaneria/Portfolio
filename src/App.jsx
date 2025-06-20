// Homasvi_Portfolio/src/App.jsx
// src/App.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';  // Add this for your stylable cursor

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;  // guard against null refs
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            delay: index * 0.3,
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0517] text-white relative">
      <CustomCursor />
      <Navbar />
      <main className="relative pt-16">
        <section ref={el => (sectionsRef.current[0] = el)} id="hero">
          <Hero />
        </section>
        <section ref={el => (sectionsRef.current[1] = el)} id="about">
          <About />
        </section>
        <section ref={el => (sectionsRef.current[2] = el)} id="education">
          <Education />
        </section>
        <section ref={el => (sectionsRef.current[3] = el)} id="skills">
          <Skills />
        </section>
        <section ref={el => (sectionsRef.current[4] = el)} id="certifications">
          <Certifications />
        </section>
        <section ref={el => (sectionsRef.current[5] = el)} id="projects">
          <Projects />
        </section>
        <section ref={el => (sectionsRef.current[6] = el)} id="contact">
          <Contact />
        </section>

        {/* Optional Links section */}
        {/* <section ref={el => (sectionsRef.current[7] = el)} id="links">
          <Links />
        </section> */}
      </main>
    </div>
  );
};

export default App;
