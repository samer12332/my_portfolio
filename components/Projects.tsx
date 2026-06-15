"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionReveal from "@/components/ui/section-reveal";
import { AutoCarousel } from "@/components/ui/auto-carousel";
import SectionPagination from "@/components/ui/section-pagination";
import { portfolio } from "@/data/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";
import type { ProjectItem } from "@/types/portfolio";

const PROJECTS_PER_PAGE = 6;

function ProjectCard({
  project,
  expanded,
  onToggleExpanded,
}: {
  project: ProjectItem;
  expanded: boolean;
  onToggleExpanded: () => void;
}) {
  return (
    <motion.article
      layout
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
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-slate-300/90 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {(expanded ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
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
              onClick={onToggleExpanded}
              aria-expanded={expanded}
              aria-label={expanded ? `Show fewer technologies for ${project.title}` : `Show more technologies for ${project.title}`}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-300/40 hover:text-cyan-200 transition-colors"
            >
              {expanded ? "Show less" : `+${project.technologies.length - 4} more`}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
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
              aria-label={`Open live demo for ${project.title}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 font-semibold hover:brightness-105 transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();
  const { projects } = portfolio;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const filters = useMemo(
    () => ["All", ...new Set(projects.items.map((project) => project.category))],
    [projects.items],
  );

  const filteredProjects = useMemo(
    () =>
      projects.items.filter(
        (project) => filter === "All" || project.category === filter,
      ),
    [filter, projects.items],
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const toggleExpandedSkills = (projectId: string) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.16em] text-xs mb-3">
            {projects.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {projects.heading}
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl">{projects.description}</p>
        </SectionReveal>

        <SectionReveal
          className="flex gap-3 mb-12 flex-wrap"
          delay={0.1}
        >
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              aria-label={`Filter projects by ${category}`}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950 border-transparent shadow-[0_10px_26px_-16px_rgba(34,197,255,0.9)]"
                  : "bg-white/[0.02] border-white/15 text-slate-300 hover:border-cyan-300/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </SectionReveal>

        {isMobile ? (
          <AutoCarousel
            items={filteredProjects}
            ariaLabel="Projects carousel"
            getItemKey={(project) => project.id}
            itemClassName="basis-[92%]"
            renderItem={(project) => (
              <ProjectCard
                project={project}
                expanded={!!expandedSkills[project.id]}
                onToggleExpanded={() => toggleExpandedSkills(project.id)}
              />
            )}
          />
        ) : (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-7"
            >
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <ProjectCard
                    project={project}
                    expanded={!!expandedSkills[project.id]}
                    onToggleExpanded={() => toggleExpandedSkills(project.id)}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-400" aria-live="polite">
                Page {currentPage} of {totalPages}
              </p>
              <SectionPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                sectionLabel="projects"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
