'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 animate-fade-in">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
                Samer Yousry
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-semibold mb-4">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I build modern software solutions, scalable web applications, and reliable systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
              <button
                onClick={onProjectsClick}
                className="group px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onContactClick}
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative rounded-2xl border-2 border-accent/40 p-2 bg-card shadow-xl shadow-accent/20">
              <Image
                src="/samer-profile.jpg"
                alt="Samer Yousry"
                width={420}
                height={340}
                className="rounded-xl object-cover w-[320px] h-[260px] md:w-[420px] md:h-[340px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
