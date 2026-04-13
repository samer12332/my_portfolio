"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/section-reveal";

interface Project {
    id: string;
    title: string;
    description: string;
    category: "Full-Stack" | "Backend" | "Frontend";
    technologies: string[];
    image: string;
    github?: string;
    liveDemo?: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "Hotel System Laravel",
        description:
            "Hotel operations system for bookings, customer records, and administration.",
        category: "Full-Stack",
        image: "/covers/hotel_system.png",
        technologies: [
            "System Design",
            "CRUD Operations",
            "Role-Based Systems",
            "Business Logic Implementation",
            "Database Design",
            "Authentication Systems",
            "Workflow Automation",
            "Backend Development",
        ],
        github: "https://github.com/samer12332/hotel-system-laravel",
    },
    {
        id: "2",
        title: "Affiliate Family Store",
        description:
            "Family-focused e-commerce platform with affiliate capabilities and admin management.",
        category: "Full-Stack",
        image: "/covers/affiliate_familystore.png",
        technologies: [
            "Full-Stack Development",
            "E-commerce Systems",
            "Affiliate Marketing Systems",
            "REST API Design",
            "JWT Authentication",
            "Database Design (MongoDB)",
            "System Architecture",
            "Data Relationships & Modeling",
        ],
        liveDemo: "https://affiliate-family-store.vercel.app/admin/login",
        github: "https://github.com/samer12332/Affiliate-Family-Store",
    },
    {
        id: "3",
        title: "Cafeteria PHP",
        description:
            "Cafeteria management system for orders, products, and daily operations.",
        category: "Full-Stack",
        image: "/covers/cafeteria.png",
        technologies: [
            "Backend Development",
            "Order Management Systems",
            "Workflow Automation",
            "Data Modeling",
            "System Logic Design",
            "CRUD Operations",
            "Database Design",
        ],
        github: "https://github.com/samer12332/cafeteria-php",
    },
    {
        id: "4",
        title: "Watchlist",
        description:
            "Watchlist app for tracking content with a clean UI and user-centric experience.",
        category: "Full-Stack",
        image: "/covers/watchlist.png",
        technologies: [
            "Full-Stack Web Development",
            "CRUD Operations",
            "API Integration",
            "State Management",
            "Data Modeling",
            "Filtering & Categorization",
            "UI/UX Optimization",
        ],
        liveDemo: "https://watchlist-eight-gray.vercel.app/",
        github: "https://github.com/samer12332/Watchlist",
    },
    {
        id: "5",
        title: "Quizverse",
        description:
            "Interactive quiz project with dynamic question handling and results experience.",
        category: "Frontend",
        image: "/covers/quizverse.png",
        technologies: [
            "Application Logic Design",
            "Data Validation",
            "Scoring Systems",
            "Problem Solving",
            "Team Collaboration",
            "UI/UX Optimization",
        ],
        github: "https://github.com/samer12332/ITI-JS-Project",
        liveDemo: "https://effulgent-tulumba-57a4fe.netlify.app/",
    },
    {
        id: "6",
        title: "Bookstore Django",
        description:
            "Bookstore backend and web system built with Django for managing products and store flows.",
        category: "Full-Stack",
        image: "/covers/bookstore.png",
        technologies: [
            "Django Development",
            "CRUD Operations",
            "Authentication Systems",
            "Relational Data Modeling",
            "Business Logic Implementation",
            "System Design",
            "Admin Workflow Management",
        ],
        github: "https://github.com/samer12332/bookstore-django",
    },
    {
        id: "7",
        title: "Task Grading Hub",
        description:
            "Task and grading workflow platform for managing submissions and performance tracking.",
        category: "Backend",
        image: "/covers/task_grading_hub.png",
        technologies: [
            "REST API Development",
            "Role-Based Systems",
            "Authentication Systems",
            "Business Logic Implementation",
            "Workflow Automation",
            "Data Validation",
            "Relational Data Modeling",
            "Query Optimization",
        ],
        github: "https://github.com/samer12332/Task-grading-hub",
    },
    {
        id: "8",
        title: "Blog Prisma API",
        description:
            "RESTful blog backend API with authentication, role-based access, posts, comments, tags, and analytics using Prisma.",
        category: "Backend",
        image: "/covers/blog.png",
        technologies: [
            "REST API Development",
            "Prisma ORM",
            "PostgreSQL",
            "Pagination & Query Optimization",
            "Authentication Systems",
            "Relational Data Modeling",
            "Input Validation",
        ],
        github: "https://github.com/samer12332/Blog_prisma",
    },
    {
        id: "9",
        title: "Egyptian League API",
        description:
            "A REST API for managing Egyptian league teams and players with JWT-based authentication and Prisma/PostgreSQL persistence.",
        category: "Backend",
        image: "/covers/egyptian_league.png",
        technologies: [
            "REST API Development",
            "Prisma ORM",
            "PostgreSQL",
            "JWT Authentication",
            "Relational Data Modeling",
            "Input Validation",
            "CRUD Operations",
            "Query Optimization",
        ],
        github: "https://github.com/samer12332/Egyptian-league",
    },
];

const filters = ["All", "Full-Stack", "Backend", "Frontend"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All");
    const [expandedSkills, setExpandedSkills] = useState<
        Record<string, boolean>
    >({});

    const filteredProjects = useMemo(
        () =>
            projects.filter(
                (project) => filter === "All" || project.category === filter,
            ),
        [filter],
    );

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionReveal className="mb-10">
                    <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">
                        Portfolio Highlights
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Featured Projects
                    </h2>
                    <p className="text-slate-300 mt-4 max-w-2xl">
                        Real projects across full-stack apps, backend APIs, and
                        frontend experiences. Each card includes live visuals
                        from your project covers.
                    </p>
                </SectionReveal>

                <SectionReveal
                    className="flex gap-3 mb-12 flex-wrap"
                    delay={0.1}
                >
                    {filters.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                                filter === cat
                                    ? "bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 border-transparent shadow-[0_10px_26px_-16px_rgba(34,197,255,0.9)]"
                                    : "bg-white/[0.02] border-white/15 text-slate-300 hover:border-cyan-300/50 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </SectionReveal>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-7"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.04 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group rounded-2xl border border-white/10 bg-slate-900/70 overflow-hidden shadow-[0_24px_50px_-30px_rgba(34,197,255,0.65)]"
                        >
                            <div className="relative overflow-hidden bg-slate-950/80 border-b border-white/10">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} cover`}
                                    width={1200}
                                    height={750}
                                    className="w-full h-72 object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent" />
                                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/70 text-cyan-300 text-xs border border-cyan-300/30">
                                    {project.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300/90 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {(expandedSkills[project.id]
                                        ? project.technologies
                                        : project.technologies.slice(0, 4)
                                    ).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-300/10 text-cyan-200 border border-cyan-300/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setExpandedSkills((prev) => ({
                                                    ...prev,
                                                    [project.id]:
                                                        !prev[project.id],
                                                }))
                                            }
                                            className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-300/40 hover:text-cyan-200 transition-colors"
                                        >
                                            {expandedSkills[project.id]
                                                ? "Show less"
                                                : `+${project.technologies.length - 4} more`}
                                        </button>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 hover:text-cyan-200 hover:border-cyan-300/50 transition-all"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 font-semibold hover:brightness-105 transition-all"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
