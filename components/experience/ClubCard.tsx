import type { ClubLeadership } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface ClubCardProps {
  club: ClubLeadership;
}

export function ClubCard({ club }: ClubCardProps) {
  const titleId = `club-${club.id}`;
  const hasTags = club.tags && club.tags.length > 0;

  return (
    <li
      aria-labelledby={titleId}
      className="group border-l-2 border-border py-6 pl-6 transition-colors duration-150 first:pt-0 last:pb-0 hover:border-accent"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3
          id={titleId}
          className="font-display text-base font-bold text-text-primary transition-colors duration-150 group-hover:text-accent"
        >
          {club.role}
        </h3>
        <span className="shrink-0 font-mono text-xs text-text-secondary">
          {club.startDate} &ndash; {club.endDate}
        </span>
      </div>

      <p className="mt-1 text-sm text-text-secondary">
        {club.organization}
        {club.location && <> &middot; {club.location}</>}
      </p>

      <ul className="mt-3 space-y-1.5">
        {club.description.map((bullet, i) => (
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

      {hasTags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {club.tags!.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      )}
    </li>
  );
}
