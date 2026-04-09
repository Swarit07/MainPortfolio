import { Trophy, Award as AwardIcon } from "lucide-react";
import type { Award } from "@/lib/types";

interface AwardsSectionProps {
  awards: Award[];
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  if (awards.length === 0) return null;

  const awardItems = awards.filter((a) => a.type === "award");
  const certItems = awards.filter((a) => a.type === "certification");

  return (
    <div className="space-y-8">
      {awardItems.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Trophy
              size={16}
              className="text-accent"
              aria-hidden="true"
            />
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              Awards
            </h3>
          </div>
          <ul className="space-y-4">
            {awardItems.map((award) => (
              <AwardItem key={award.id} award={award} />
            ))}
          </ul>
        </div>
      )}

      {certItems.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <AwardIcon
              size={16}
              className="text-accent"
              aria-hidden="true"
            />
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              Certifications
            </h3>
          </div>
          <ul className="space-y-4">
            {certItems.map((cert) => (
              <AwardItem key={cert.id} award={cert} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AwardItem({ award }: { award: Award }) {
  return (
    <li className="group rounded-sm border border-border bg-bg-secondary p-4 transition-colors duration-150 hover:border-border-hover">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="font-display text-sm font-bold text-text-primary transition-colors duration-150 group-hover:text-accent">
          {award.title}
        </h4>
        <span className="shrink-0 font-mono text-xs text-text-secondary">
          {award.date}
        </span>
      </div>
      <p className="mt-1 text-xs text-text-secondary">{award.issuer}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {award.description}
      </p>
    </li>
  );
}
