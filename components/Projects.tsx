'use client';

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Backend' | 'Frontend';
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Affiliate Family Store',
    description: 'Family-focused e-commerce platform with affiliate capabilities and admin management.',
    category: 'Full-Stack',
    technologies: [
      'Full-Stack Development',
      'E-commerce Systems',
      'Affiliate Marketing Systems',
      'REST API Design',
      'JWT Authentication',
      'Database Design (MongoDB)',
      'System Architecture',
      'Data Relationships & Modeling',
    ],
    liveDemo: 'https://affiliate-family-store.vercel.app/admin/login',
    github: 'https://github.com/samer12332/Affiliate-Family-Store',
  },
  {
    id: '2',
    title: 'Watchlist',
    description: 'Watchlist app for tracking content with a clean UI and user-centric experience.',
    category: 'Full-Stack',
    technologies: [
      'Full-Stack Web Development',
      'CRUD Operations',
      'API Integration',
      'State Management',
      'Data Modeling',
      'Filtering & Categorization',
      'UI/UX Optimization',
    ],
    liveDemo: 'https://watchlist-eight-gray.vercel.app/',
    github: 'https://github.com/samer12332/Watchlist',
  },
  {
    id: '3',
    title: 'Bookstore Django',
    description: 'Bookstore backend and web system built with Django for managing products and store flows.',
    category: 'Full-Stack',
    technologies: [
      'Django Development',
      'CRUD Operations',
      'Authentication Systems',
      'Relational Data Modeling',
      'Business Logic Implementation',
      'System Design',
      'Admin Workflow Management',
    ],
    github: 'https://github.com/samer12332/bookstore-django',
  },
  {
    id: '4',
    title: 'Task Grading Hub',
    description: 'Task and grading workflow platform for managing submissions and performance tracking.',
    category: 'Backend',
    technologies: [
      'REST API Development',
      'Role-Based Systems',
      'Authentication Systems',
      'Business Logic Implementation',
      'Workflow Automation',
      'Data Validation',
      'Relational Data Modeling',
      'Query Optimization',
    ],
    github: 'https://github.com/samer12332/Task-grading-hub',
  },
  {
    id: '5',
    title: 'Hotel System Laravel',
    description: 'Hotel operations system for bookings, customer records, and administration.',
    category: 'Full-Stack',
    technologies: [
      'System Design',
      'CRUD Operations',
      'Role-Based Systems',
      'Business Logic Implementation',
      'Database Design',
      'Authentication Systems',
      'Workflow Automation',
      'Backend Development',
    ],
    github: 'https://github.com/samer12332/hotel-system-laravel',
  },
  {
    id: '6',
    title: 'Quizverse',
    description: 'Interactive quiz project with dynamic question handling and results experience.',
    category: 'Frontend',
    technologies: [
      'Application Logic Design',
      'Data Validation',
      'Scoring Systems',
      'Problem Solving',
      'Team Collaboration',
      'UI/UX Optimization',
    ],
    github: 'https://github.com/samer12332/ITI-JS-Project',
    liveDemo: 'https://effulgent-tulumba-57a4fe.netlify.app/',
  },
  {
    id: '7',
    title: 'Cafeteria PHP',
    description: 'Cafeteria management system for orders, products, and daily operations.',
    category: 'Full-Stack',
    technologies: [
      'Backend Development',
      'Order Management Systems',
      'Workflow Automation',
      'Data Modeling',
      'System Logic Design',
      'CRUD Operations',
      'Database Design',
    ],
    github: 'https://github.com/samer12332/cafeteria-php',
  },
  {
    id: '8',
    title: 'Blog Prisma API',
    description:
      'RESTful blog backend API with authentication, role-based access, posts, comments, tags, and analytics using Prisma.',
    category: 'Backend',
    technologies: [
      'REST API Development',
      'Prisma ORM',
      'PostgreSQL',
      'Pagination & Query Optimization',
      'Authentication Systems',
      'Relational Data Modeling',
      'Input Validation',
    ],
    github: 'https://github.com/samer12332/Blog_prisma',
  },
  {
    id: '9',
    title: 'Online Shop v2',
    description:
      'A RESTful e-commerce backend with JWT auth, product/cart/order flows, and admin management.',
    category: 'Backend',
    technologies: [
      'Backend Development',
      'E-commerce Systems',
      'REST API Development',
      'JWT Authentication',
      'Order Management Systems',
      'Database Design (MongoDB)',
      'Input Validation',
      'System Architecture',
    ],
    github: 'https://github.com/samer12332/Online_shop_v2',
  },
  {
    id: '10',
    title: 'Egyptian League API',
    description:
      'A REST API for managing Egyptian league teams and players with JWT-based authentication and Prisma/PostgreSQL persistence.',
    category: 'Backend',
    technologies: [
      'REST API Development',
      'Prisma ORM',
      'PostgreSQL',
      'JWT Authentication',
      'Relational Data Modeling',
      'Input Validation',
      'CRUD Operations',
      'Query Optimization',
    ],
    github: 'https://github.com/samer12332/Egyptian-league',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Backend' | 'Frontend'>('All');

  const filteredProjects = projects.filter((p) => filter === 'All' || p.category === filter);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Projects</h2>

        <div className="flex gap-3 mb-12 flex-wrap">
          {(['All', 'Full-Stack', 'Backend', 'Frontend'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === cat
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-foreground/70 hover:text-foreground border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-accent font-semibold">{project.category}</p>
                </div>
              </div>

              <p className="text-foreground/60 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-background rounded-full text-accent/80 border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
