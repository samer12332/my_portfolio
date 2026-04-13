'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/section-reveal';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'PHP'],
  },
  {
    title: 'Frontend & UI',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Django', 'Laravel', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Data & Infrastructure',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Prisma'],
  },
  {
    title: 'Engineering Practices',
    skills: ['System Design', 'Clean Architecture', 'Authentication', 'RBAC', 'Testing', 'Git/GitHub'],
  },
  {
    title: 'Collaboration',
    skills: ['Agile Workflow', 'Problem Solving', 'Technical Mentoring', 'Documentation'],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">Core Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-slate-300 max-w-3xl">
            A practical toolkit across product engineering, backend architecture, and frontend implementation.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-slate-900/65 p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-200 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
