import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built — hardware, software, and everything between.",
  openGraph: {
    title: "Projects | Swarit Sheel",
    description:
      "Things I've built — hardware, software, and everything between.",
  },
};

export default function ProjectsPage() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <SectionHeading
        id="projects-heading"
        title="projects"
        subtitle="Built things that worked, broke, and taught me something."
      />
      <ProjectGrid projects={projects} />
    </section>
  );
}
