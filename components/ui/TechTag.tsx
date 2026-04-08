interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-sm border border-border bg-bg-secondary px-2 py-1 font-mono text-xs text-text-secondary">
      {label}
    </span>
  );
}
