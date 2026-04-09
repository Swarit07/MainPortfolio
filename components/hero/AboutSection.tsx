const interests = [
  "Robotics",
  "Embedded Systems",
  "Digital Logic",
  "Computer Vision",
  "AI & LLMs",
  "Startups",
  "Low-Level Programming",
  "Circuit Design",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-accent" aria-hidden="true">
            01
          </span>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold lowercase tracking-tight text-text-primary sm:text-4xl"
          >
            about
          </h2>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
            <p>
              I&apos;m studying Computer Engineering at UIUC. Most of my
              time goes into figuring out how hardware and software talk to
              each other &mdash; whether that&apos;s wiring up circuits on a
              breadboard or writing C that runs close to the metal.
            </p>
            <p>
              Lately I&apos;ve been getting into AI tooling and learning how
              to build faster with tools like Claude Code and Cursor. I like
              the idea of using AI as a multiplier, not a replacement &mdash;
              still writing the code, just moving quicker.
            </p>
            <p>
              Outside of coursework I&apos;m usually working on some side
              project or trying to turn an idea into something real. Ran a
              hackathon, pitched a startup at DECA, and I&apos;m always
              looking for the next thing to build.
            </p>
          </div>

          {/* Interest chips */}
          <div className="flex flex-wrap gap-2 lg:w-56 lg:flex-col lg:gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-sm border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-secondary"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
