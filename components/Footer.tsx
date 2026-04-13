import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Samer Yousry</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Software Engineer focused on building scalable products, clean systems, and meaningful user experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/samer12332" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/samer-yousry-88921a228/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"><Linkedin size={18} /></a>
              <a href="mailto:sameryousry99@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-400">Copyright 2026 Samer Yousry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
