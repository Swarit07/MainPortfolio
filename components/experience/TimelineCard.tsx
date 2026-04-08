import type { Experience } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface TimelineCardProps {
  experience: Experience;
}

export function TimelineCard({ experience }: TimelineCardProps) {
  const titleId = `exp-${experience.id}`;
  const hasTech = experience.techUsed && experience.techUsed.length > 0;

  return (
    <li
      aria-labelledby={titleId}
      className="group border-l-2 border-border py-6 pl-6 transition-colors duration-150 first:pt-0 last:pb-0 hover:border-accent"
    >
      {/* Header row: company + dates */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3
          id={titleId}
          className="font-display text-base font-bold text-text-primary transition-colors duration-150 group-hover:text-accent"
        >
          {experience.company}
        </h3>
        <span className="shrink-0 font-mono text-xs text-text-secondary">
          {experience.startDate} &ndash; {experience.endDate}
        </span>
      </div>

      {/* Role + location */}
      <p className="mt-1 text-sm text-text-secondary">
        {experience.role} &middot; {experience.location}
      </p>

      {/* Description bullets */}
      <ul className="mt-3 space-y-1.5">
        {experience.description.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-text-secondary"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-secondary"
              aria-hidden="true"
            />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      {hasTech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.techUsed!.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      )}
    </li>
  );
}
