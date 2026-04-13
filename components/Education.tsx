export default function Education() {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Education</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-accent pl-6 py-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              B.Sc. in Computers and Control Systems Engineering
            </h3>
            <p className="text-accent font-semibold mb-3">Mansoura University | 2020 – 2025</p>
            <div className="space-y-2 text-foreground/70">
              <p>
                • <span className="text-foreground font-semibold">Grade:</span> Excellent (93.42%)
              </p>
              <p>
                • <span className="text-foreground font-semibold">Ranking:</span> 9th in class
              </p>
              <p>
                Strong foundation in software engineering, systems design, and computer science fundamentals
              </p>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-6 py-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              ITI Open Source Development Diploma
            </h3>
            <p className="text-accent font-semibold mb-3">Started October 2025 (9 Months)</p>
            <div className="space-y-2 text-foreground/70">
              <p>
                • Intensive hands-on training in full-stack and open-source technologies
              </p>
              <p>
                • Focus on real-world projects and collaborative development
              </p>
              <p>
                • Advanced training in modern web development practices
              </p>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-6 py-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Additional Training
            </h3>
            <p className="text-accent font-semibold mb-3">Various Programs</p>
            <div className="space-y-2 text-foreground/70">
              <p>
                • <span className="text-foreground font-semibold">Frontend Development</span> - ITI
              </p>
              <p>
                • <span className="text-foreground font-semibold">Machine Learning Training</span> - NTI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
