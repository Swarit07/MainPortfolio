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
  type?: "personal" | "course" | "lab";
  date?: string;
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

export interface ClubLeadership {
  id: string;
  organization: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags?: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: "award" | "certification";
}

export interface Skill {
  name: string;
  category: "languages" | "hardware" | "tools" | "concepts";
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
  icon: string;
}
