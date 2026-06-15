'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionReveal from '@/components/ui/section-reveal';
import { portfolio } from '@/data/portfolio';
import { contactIcons } from '@/lib/portfolio-icons';

export default function Contact() {
  const { contact } = portfolio;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center">
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">{contact.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{contact.heading}</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{contact.detailsHeading}</h3>
            <div className="space-y-4">
              {contact.links.map((item) => {
                const Icon = contactIcons[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-300/45 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-lg bg-cyan-300/15 text-cyan-200 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">{item.label}</span>
                      <span className="block text-slate-100 font-medium">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{contact.formHeading}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="text" placeholder={contact.formPlaceholders.name} aria-label={contact.formPlaceholders.name} />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="email" placeholder={contact.formPlaceholders.email} aria-label={contact.formPlaceholders.email} />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="text" placeholder={contact.formPlaceholders.subject} aria-label={contact.formPlaceholders.subject} />
              <textarea className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50 resize-none" rows={5} placeholder={contact.formPlaceholders.message} aria-label={contact.formPlaceholders.message} />
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 font-semibold hover:brightness-105 transition-all" type="submit" aria-label={contact.formButtonLabel}>
                <Send size={16} />
                {contact.formButtonLabel}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
