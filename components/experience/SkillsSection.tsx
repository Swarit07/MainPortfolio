import type { Skill } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryOrder: Skill["category"][] = [
  "languages",
  "frameworks",
  "tools",
  "hardware",
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  if (grouped.length === 0) return null;

  return (
    <div className="grid gap-4">
      {grouped.map(({ category, items }) => (
        <div
          key={category}
          role="group"
          aria-label={category}
          className="grid items-baseline gap-3 sm:grid-cols-[8rem_1fr]"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            {category}
          </span>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <TechTag key={skill.name} label={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
