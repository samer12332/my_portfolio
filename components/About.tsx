'use client';

import { motion } from 'framer-motion';
import { AutoCarousel } from '@/components/ui/auto-carousel';
import SectionReveal from '@/components/ui/section-reveal';
import { portfolio } from '@/data/portfolio';
import { useIsMobile } from '@/hooks/use-mobile';
import { aboutHighlightIcons } from '@/lib/portfolio-icons';

export default function About() {
  const isMobile = useIsMobile();
  const { about } = portfolio;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">{about.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{about.heading}</h2>
          <p className="text-slate-300 leading-relaxed max-w-4xl text-lg">
            {about.description}
          </p>
        </SectionReveal>

        {isMobile ? (
          <div className="mt-10">
            <AutoCarousel
              items={about.highlights}
              ariaLabel="About highlights"
              getItemKey={(item) => item.title}
              itemClassName="basis-[90%]"
              renderItem={(item) => {
                const Icon = aboutHighlightIcons[item.icon];

                return (
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-900/45 p-6 min-h-full">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-300/15 text-cyan-200 mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                );
              }}
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.highlights.map((item, index) => {
              const Icon = aboutHighlightIcons[item.icon];
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
        )}
      </div>
    </section>
  );
}
