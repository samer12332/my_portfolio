export default function Experience() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-accent pl-6 py-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Part-Time Programming Instructor
            </h3>
            <p className="text-accent font-semibold mb-3">Present</p>
            <div className="space-y-2 text-foreground/70">
              <p>
                • Teaching programming fundamentals to students aged 8–18
              </p>
              <p>
                • Helping students build real projects using multiple technologies
              </p>
              <p>
                • Fostering problem-solving skills and coding best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
