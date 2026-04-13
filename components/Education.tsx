'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionReveal from '@/components/ui/section-reveal';

const education = [
  {
    title: 'B.Sc. in Computers and Control Systems Engineering',
    period: 'Mansoura University | 2020 - 2025',
    points: [
      'Grade: Excellent (93.42%).',
      'Class ranking: 9th.',
      'Strong foundation in software engineering, systems design, and computer science fundamentals.',
    ],
    icon: GraduationCap,
  },
  {
    title: 'ITI Open Source Development Diploma',
    period: 'Started October 2025 (9 Months)',
    points: [
      'Intensive practical training in full-stack and open-source technologies.',
      'Project-driven collaborative development with modern engineering practices.',
      'Deep focus on scalable architectures and software quality.',
    ],
    icon: Award,
  },
];

export default function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Academic Background</h2>
        </SectionReveal>

        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
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
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
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
