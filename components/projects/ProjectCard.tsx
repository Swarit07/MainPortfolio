import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.demoUrl;
  const titleId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group flex flex-col rounded-sm border border-border bg-bg-secondary p-5 transition-colors duration-150 hover:border-border-hover sm:p-6"
    >
      {/* Title */}
      <h2
        id={titleId}
        className="font-display text-lg font-bold text-text-primary transition-colors duration-150 group-hover:text-accent"
      >
        {project.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.techStack.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {/* Links — pinned to bottom, 44px touch targets via transparent padding */}
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
