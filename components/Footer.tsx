import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">Samer Yousry</h4>
            <p className="text-foreground/60 text-sm">
              Software Engineer building scalable web applications and reliable systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/60 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/60 hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/samer12332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/samer-yousry-88921a228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sameryousry99@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/50">
            Copyright 2026 Samer Yousry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
