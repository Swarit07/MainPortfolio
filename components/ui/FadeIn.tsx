"use client";

import { useEffect, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const delayClass =
    delay === 0
      ? ""
      : delay <= 75
        ? "delay-75"
        : delay <= 100
          ? "delay-100"
          : delay <= 150
            ? "delay-150"
            : "delay-200";

  return (
    <div
      className={`transition-all duration-300 ${delayClass} ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
