import { Briefcase } from "lucide-react";
import type { Experience } from "@/lib/types";
import { TimelineCard } from "./TimelineCard";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Briefcase
          size={32}
          className="mb-4 text-text-tertiary"
          aria-hidden="true"
        />
        <p className="font-mono text-sm text-text-secondary">
          No experience entries yet.
        </p>
      </div>
    );
  }

  return (
    <ol className="flex flex-col">
      {experiences.map((exp) => (
        <TimelineCard key={exp.id} experience={exp} />
      ))}
    </ol>
  );
}
