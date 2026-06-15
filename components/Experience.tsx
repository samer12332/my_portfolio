'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/section-reveal';
import { portfolio } from '@/data/portfolio';
import { experienceIcons } from '@/lib/portfolio-icons';

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">{experience.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">{experience.heading}</h2>
        </SectionReveal>

        <div className="space-y-6">
          {experience.items.map((item, index) => {
            const Icon = experienceIcons[item.icon];

            return (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-300/15 text-cyan-200 flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="text-cyan-200 font-medium mt-1">{item.period}</p>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="leading-relaxed">- {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
