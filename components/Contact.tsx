'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import SectionReveal from '@/components/ui/section-reveal';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sameryousry99@gmail.com', href: 'mailto:sameryousry99@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+20 101 730 6593', href: 'https://wa.me/201017306593' },
  { icon: Github, label: 'GitHub', value: 'github.com/samer12332', href: 'https://github.com/samer12332' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/samer-yousry-88921a228',
    href: 'https://www.linkedin.com/in/samer-yousry-88921a228/',
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center">
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s Build Something Great</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Open to full-time opportunities, freelance projects, and technical collaborations.
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
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
            <div className="space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
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
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="text" placeholder="Your name" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="email" placeholder="Your email" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50" type="text" placeholder="Subject" />
              <textarea className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300/50 resize-none" rows={5} placeholder="Message" />
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 font-semibold hover:brightness-105 transition-all" type="submit">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
