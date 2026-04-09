import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface ProjectCardProps {
  project: Project;
}

const typeLabels: Record<string, string> = {
  personal: "personal",
  course: "coursework",
  lab: "lab project",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.demoUrl;
  const titleId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-bg-secondary p-5 transition-colors duration-200 hover:border-border-hover sm:p-6"
    >
      {/* Left accent bar on hover */}
      <span
        className="absolute inset-y-0 left-0 w-0.5 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Meta row */}
      {(project.type || project.date) && (
        <div className="mb-3 flex items-center gap-3">
          {project.type && (
            <span className="rounded-sm border border-accent/25 bg-accent/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              {typeLabels[project.type] ?? project.type}
            </span>
          )}
          {project.date && (
            <span className="font-mono text-xs text-text-tertiary">
              {project.date}
            </span>
          )}
        </div>
      )}

      <h3
        id={titleId}
        className="font-display text-lg font-bold text-text-primary transition-colors duration-150 group-hover:text-accent"
      >
        {project.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.techStack.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {hasLinks && (
        <div className="-mb-1 mt-auto flex gap-4 pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-3 inline-flex items-center gap-1 py-3 font-mono text-sm text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-3 inline-flex items-center gap-1 py-3 font-mono text-sm text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              Demo
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
