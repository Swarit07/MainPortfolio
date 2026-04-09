import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubsectionHeading } from "@/components/ui/SubsectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Timeline } from "@/components/experience/Timeline";
import { ClubsSection } from "@/components/experience/ClubsSection";
import { SkillsSection } from "@/components/experience/SkillsSection";
import { AwardsSection } from "@/components/experience/AwardsSection";
import { ResumeButton } from "@/components/experience/ResumeButton";
import { experiences } from "@/data/experience";
import { clubs } from "@/data/clubs";
import { skills } from "@/data/skills";
import { awards } from "@/data/awards";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, leadership, technical skills, and awards.",
  openGraph: {
    title: "Experience | Swarit Sheel",
    description:
      "Work experience, leadership, technical skills, and awards.",
  },
};

export default function ExperiencePage() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <FadeIn>
        <SectionHeading
          id="experience-heading"
          title="experience"
          subtitle="Where I've worked, what I've led, and what I know."
        />
      </FadeIn>

      <FadeIn delay={75}>
        <section aria-labelledby="work-heading">
          <SubsectionHeading id="work-heading" title="work" />
          <Timeline experiences={experiences} />
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section aria-labelledby="leadership-heading" className="mt-16">
          <SubsectionHeading id="leadership-heading" title="leadership" />
          <ClubsSection clubs={clubs} />
        </section>
      </FadeIn>

      <FadeIn delay={150}>
        <section aria-labelledby="skills-heading" className="mt-16">
          <SubsectionHeading id="skills-heading" title="skills" />
          <SkillsSection skills={skills} />
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section aria-labelledby="awards-heading" className="mt-16">
          <SubsectionHeading id="awards-heading" title="awards & certifications" />
          <AwardsSection awards={awards} />
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mt-16">
          <ResumeButton />
        </div>
      </FadeIn>
    </section>
  );
}
