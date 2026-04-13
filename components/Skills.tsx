export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'PHP'],
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Next.js'],
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Laravel', 'Vue.js', 'Django', 'Tailwind CSS'],
    },
    {
      title: 'Backend & APIs',
      skills: ['REST APIs', 'GraphQL', 'Authentication', 'RBAC', 'Microservices'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    },
    {
      title: 'Tools & Libraries',
      skills: ['Git', 'GitHub', 'Postman', 'Swagger', 'Prisma', 'Docker'],
    },
    {
      title: 'Concepts',
      skills: ['Scalable Systems', 'Clean Architecture', 'Problem Solving', 'System Design'],
    },
  ];

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-bold text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background rounded-lg text-foreground/80 text-sm border border-border hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
