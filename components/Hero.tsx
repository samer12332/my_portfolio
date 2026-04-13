'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ x: [0, 22, -18, 0], y: [0, -28, 18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-16 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, -35, 14, 0], y: [0, 22, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl"
          animate={{ x: [0, 12, -12, 0], y: [0, 14, -14, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300/40 text-cyan-200 bg-cyan-400/10 text-sm mb-6"
          >
            <Sparkles size={14} />
            Building Modern Digital Products
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white"
          >
            Samer Yousry
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
          >
            I design and build full-stack applications, scalable backend APIs, and polished user experiences with a focus on reliability, performance, and product impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <button
              onClick={onProjectsClick}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 font-semibold shadow-[0_10px_30px_-12px_rgba(34,197,255,0.9)] hover:scale-[1.02] transition-transform"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="px-8 py-3 rounded-xl border border-cyan-300/40 text-cyan-100 font-semibold bg-white/5 hover:bg-cyan-300/10 transition-colors"
            >
              Let&apos;s Connect
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-sky-300/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-cyan-300/35 bg-slate-900/60 p-3 backdrop-blur-sm shadow-[0_25px_70px_-35px_rgba(34,197,255,0.9)]">
            <Image
              src="/samer-profile.jpeg"
              alt="Samer Yousry"
              width={520}
              height={520}
              className="rounded-[1.5rem] object-cover w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
