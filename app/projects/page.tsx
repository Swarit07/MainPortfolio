import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubsectionHeading } from "@/components/ui/SubsectionHeading";
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
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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

      {featured.length > 0 && (
        <section aria-labelledby="featured-heading">
          <SubsectionHeading id="featured-heading" title="featured" />
          <ProjectGrid projects={featured} />
        </section>
      )}

      {rest.length > 0 && (
        <section aria-labelledby="more-heading" className="mt-12">
          <SubsectionHeading id="more-heading" title="more projects" />
          <ProjectGrid projects={rest} />
        </section>
      )}
    </section>
  );
}
