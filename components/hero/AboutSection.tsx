const interests = [
  "Robotics",
  "Embedded Systems",
  "Digital Logic",
  "Computer Vision",
  "Astrophysics",
  "Entrepreneurship",
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
              I&apos;m a Computer Engineering student at the University of
              Illinois Urbana-Champaign, drawn to the space where
              circuits meet code. I like building things that move, think,
              and solve real problems.
            </p>
            <p>
              My work spans embedded systems and microcontroller projects
              to full-stack software. When I&apos;m not debugging register
              maps or writing firmware, I&apos;m probably reading about
              astrophysics or chasing the next startup idea.
            </p>
            <p>
              I believe the best engineers are equal parts curious and
              stubborn. I try to be both.
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
