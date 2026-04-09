"use client";

import { useEffect, useState, type SVGProps } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { socials } from "@/data/socials";
import type { SocialLink } from "@/lib/types";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["platform"], React.ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: (props) => <Mail {...props} />,
};

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Prefix tag */}
        <p
          className={`font-mono text-sm text-accent transition-all duration-300 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          &gt; hello, world
        </p>

        {/* Name */}
        <h1
          className={`mt-4 font-display text-5xl font-extrabold lowercase tracking-tight text-text-primary transition-all delay-75 duration-300 sm:text-7xl lg:text-8xl ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Swarit Sheel
        </h1>

        {/* Title */}
        <p
          className={`mt-4 font-mono text-lg text-text-secondary transition-all delay-150 duration-300 sm:text-xl ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Computer Engineering{" "}
          <span className="text-accent">@</span> UIUC
        </p>

        {/* Tagline */}
        <p
          className={`mt-6 max-w-lg text-base leading-relaxed text-text-secondary transition-all delay-200 duration-300 sm:text-lg ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Building at the intersection of hardware and software.
          Embedded systems, AI tooling, and whatever side project I can&apos;t stop thinking about.
        </p>

        {/* Social links */}
        <div
          className={`mt-8 flex items-center gap-1 transition-all delay-[250ms] duration-300 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {socials.map((social) => {
            const Icon = iconMap[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform === "email" ? undefined : "_blank"}
                rel={
                  social.platform === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded text-text-tertiary transition-colors duration-150 hover:text-accent"
              >
                <Icon width={20} height={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-300 duration-300 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 px-4 py-2 text-text-tertiary transition-colors duration-150 hover:text-accent"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={16} className="motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  );
}
