export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techUsed?: string[];
  logoUrl?: string;
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "hardware";
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
  icon: string;
}
