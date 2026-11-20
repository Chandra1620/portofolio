import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github, BookOpen } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/[0.08] bg-[#16202e]/80 transition-all duration-300 flex flex-col justify-between ${
        featuredLayout ? "lg:grid lg:grid-cols-12 gap-8 items-center p-6 md:p-8" : "p-6"
      }`}
    >
      {/* Thumbnail Container */}
      <div
        className={`relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d1520] aspect-[16/10] ${
          featuredLayout ? "lg:col-span-7" : "w-full mb-6"
        }`}
      >
        <img
          src={project.thumbnail}
          alt={`Pratinjau antarmuka ${project.title}`}
          loading="lazy"
          className="size-full object-cover"
        />

        {/* Category & Year Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0d1520]/90 text-ember font-medium border border-white/10">
            {project.category}
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0d1520]/90 text-paper/70 border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Highlight Metric */}
        {project.metrics[0] && (
          <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded bg-[#0d1520]/95 text-paper border border-white/10">
              <span className="size-1.5 rounded-full bg-turf" />
              <span>{project.metrics[0]}</span>
            </span>
          </div>
        )}
      </div>

      {/* Info & Content */}
      <div className={`flex flex-col justify-between ${featuredLayout ? "lg:col-span-5" : "flex-1"}`}>
        <div>
          <div className="text-xs text-muted-ink mb-1">
            {project.client}
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl text-paper">
            <Link to="/projects/$slug" params={{ slug: project.slug }} className="hover:text-ember transition-colors">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-ember font-medium mt-1">
            {project.tagline}
          </p>

          <p className="text-sm text-muted-ink leading-relaxed mt-3">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1f2c3f] text-paper/80 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="text-xs font-semibold text-paper hover:text-ember transition-colors"
          >
            Pelajari Studi Kasus
          </Link>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-ink hover:text-paper transition-colors"
              >
                Source Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-ember hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

