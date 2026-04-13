'use client';

import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:sameryousry99@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-foreground/60 text-sm">Email</p>
                    <p className="text-foreground font-semibold hover:text-accent transition-colors">
                      sameryousry99@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+201017306593"
                  className="flex items-start gap-4 group"
                >
                  <Phone className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-foreground/60 text-sm">Phone</p>
                    <p className="text-foreground font-semibold hover:text-accent transition-colors">
                      +20 101 730 6593
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/samer12332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <Github className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-foreground/60 text-sm">GitHub</p>
                    <p className="text-foreground font-semibold hover:text-accent transition-colors">
                      github.com/samer12332
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/samer-yousry-88921a228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <Linkedin className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="text-foreground/60 text-sm">LinkedIn</p>
                    <p className="text-foreground font-semibold hover:text-accent transition-colors">
                      linkedin.com/in/samer-yousry-88921a228
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
