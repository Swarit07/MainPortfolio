import type { Skill } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryOrder: Skill["category"][] = [
  "languages",
  "hardware",
  "tools",
  "concepts",
];

const categoryLabels: Record<Skill["category"], string> = {
  languages: "languages",
  hardware: "hardware & electronics",
  tools: "tools & platforms",
  concepts: "concepts",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  if (grouped.length === 0) return null;

  return (
    <div className="grid gap-6">
      {grouped.map(({ category, label, items }) => (
        <div
          key={category}
          role="group"
          aria-label={label}
          className="grid items-baseline gap-3 sm:grid-cols-[10rem_1fr]"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            {label}
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
