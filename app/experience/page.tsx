import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubsectionHeading } from "@/components/ui/SubsectionHeading";
import { Timeline } from "@/components/experience/Timeline";
import { SkillsSection } from "@/components/experience/SkillsSection";
import { ResumeButton } from "@/components/experience/ResumeButton";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, extracurriculars, and technical skills.",
  openGraph: {
    title: "Experience | Swarit Sheel",
    description: "Work experience, extracurriculars, and technical skills.",
  },
};

export default function ExperiencePage() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <SectionHeading
        id="experience-heading"
        title="experience"
        subtitle="Where I've worked, what I've built, and what I know."
      />

      {/* Timeline */}
      <section aria-labelledby="timeline-heading">
        <SubsectionHeading id="timeline-heading" title="timeline" />
        <Timeline experiences={experiences} />
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mt-16">
        <SubsectionHeading id="skills-heading" title="skills" />
        <SkillsSection skills={skills} />
      </section>

      {/* Resume */}
      <div className="mt-16">
        <ResumeButton />
      </div>
    </section>
  );
}
