'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/section-reveal';
import { certifications } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section className="py-24 px-6" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">Credentials</p>
          <h2 id="certifications-heading" className="text-4xl md:text-5xl font-bold text-white">
            Certifications
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl">
            Industry-recognized certifications that validate practical cloud and security knowledge.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group h-full rounded-2xl border border-white/10 bg-slate-900/65 p-6 shadow-[0_24px_50px_-30px_rgba(34,197,255,0.55)] transition-colors hover:border-cyan-300/40"
            >
              <div className="flex items-start gap-4">
                <div className="relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-1.5">
                  <Image
                    src={certification.badgeImage}
                    alt={`${certification.title} badge`}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {certification.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-slate-300">
                    Issued by{' '}
                    <a
                      href={certification.issuer.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-200 hover:text-cyan-100 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm"
                    >
                      {certification.issuer.name}
                    </a>
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-cyan-300">{certification.date}</p>
                </div>
              </div>

              <p className="mt-5 text-slate-300 leading-relaxed text-sm sm:text-base">{certification.description}</p>

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View credential for ${certification.title}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                View Credential
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
