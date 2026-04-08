interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h1
        id={id}
        className="font-display text-4xl font-bold lowercase tracking-tight text-text-primary sm:text-5xl"
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-lg text-base text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
