'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/section-reveal';
import { AutoCarousel } from '@/components/ui/auto-carousel';
import { portfolio } from '@/data/portfolio';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Skills() {
  const isMobile = useIsMobile();
  const { skills } = portfolio;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">{skills.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{skills.heading}</h2>
          <p className="text-slate-300 max-w-3xl">
            {skills.description}
          </p>
        </SectionReveal>

        {isMobile ? (
          <div className="mt-10">
            <AutoCarousel
              items={skills.categories}
              ariaLabel="Skills categories"
              getItemKey={(category) => category.title}
              itemClassName="basis-[90%]"
              renderItem={(category) => (
                <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-6 min-h-full">
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
                </div>
              )}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {skills.categories.map((category, index) => (
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
        )}
      </div>
    </section>
  );
}
