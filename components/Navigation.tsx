'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-[0_14px_40px_-24px_rgba(34,197,255,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <button
          onClick={() => handleNavClick('home')}
          className="rounded-md overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Go to Home section"
        >
          <Image
            src="/samer-logo.png"
            alt="Samer Yousry logo"
            width={280}
            height={158}
            className="h-10 sm:h-11 w-auto origin-left scale-[2.2] sm:scale-[2.5] drop-shadow-[0_14px_36px_rgba(34,211,238,0.55)]"
            priority
          />
        </button>

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                    transition={{ type: 'spring', stiffness: 420, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/samer12332"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/samer-yousry-88921a228/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"
          >
            <Linkedin size={18} />
          </a>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-full border border-white/10 text-slate-200 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-cyan-400/15 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="https://github.com/samer12332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/samer-yousry-88921a228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
