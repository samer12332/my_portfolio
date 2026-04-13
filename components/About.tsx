'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Layers3, Rocket } from 'lucide-react';
import SectionReveal from '@/components/ui/section-reveal';

const highlights = [
  { icon: Code2, title: 'Engineering Depth', text: 'Full-stack and backend expertise with practical production-focused delivery.' },
  { icon: Layers3, title: 'System Thinking', text: 'Clean architecture, scalable design, and maintainable codebases.' },
  { icon: BriefcaseBusiness, title: 'Real Projects', text: 'Hands-on work across e-commerce, dashboards, and API-driven systems.' },
  { icon: Rocket, title: 'Continuous Growth', text: 'Advanced upskilling through ITI Open Source Development Diploma.' },
];

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering with Product Mindset</h2>
          <p className="text-slate-300 leading-relaxed max-w-4xl text-lg">
            I&apos;m a Software Engineer focused on building robust, user-centered products. I enjoy crafting reliable backend systems and polished frontends that work together seamlessly. My goal is always to deliver software that is scalable, maintainable, and genuinely useful.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-900/45 p-6"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-300/15 text-cyan-200 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
