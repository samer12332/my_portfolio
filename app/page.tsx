'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home" className="scroll-mt-24">
          <Hero onContactClick={() => scrollToSection('contact')} onProjectsClick={() => scrollToSection('projects')} />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
