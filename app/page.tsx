'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 220) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.08),transparent_40%)]" />

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
