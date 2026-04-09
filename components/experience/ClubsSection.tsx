import { Users } from "lucide-react";
import type { ClubLeadership } from "@/lib/types";
import { ClubCard } from "./ClubCard";

interface ClubsSectionProps {
  clubs: ClubLeadership[];
}

export function ClubsSection({ clubs }: ClubsSectionProps) {
  if (clubs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Users
          size={32}
          className="mb-4 text-text-tertiary"
          aria-hidden="true"
        />
        <p className="font-mono text-sm text-text-secondary">
          No leadership entries yet.
        </p>
      </div>
    );
  }

  return (
    <ol className="flex flex-col">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </ol>
  );
}
