import { FolderOpen } from "lucide-react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <FolderOpen
          size={32}
          className="mb-4 text-text-tertiary"
          aria-hidden="true"
        />
        <p className="font-mono text-sm text-text-secondary">
          No projects yet.
        </p>
        <p className="mt-1 font-mono text-sm text-text-tertiary">
          Check back soon — something&apos;s always in progress.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
