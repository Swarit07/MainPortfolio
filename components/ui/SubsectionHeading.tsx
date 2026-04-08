interface SubsectionHeadingProps {
  id?: string;
  title: string;
}

export function SubsectionHeading({ id, title }: SubsectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-6 font-display text-2xl font-bold lowercase tracking-tight text-text-primary"
    >
      {title}
    </h2>
  );
}
