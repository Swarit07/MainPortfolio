import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/hero/AboutSection";

export const metadata: Metadata = {
  openGraph: {
    title: "Swarit Sheel | Computer Engineering @ UIUC",
    description:
      "Portfolio of Swarit Sheel — computer engineering student at UIUC. Projects in embedded systems, software, and entrepreneurship.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
