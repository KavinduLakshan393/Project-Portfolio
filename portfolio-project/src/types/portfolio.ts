export type PortfolioTrack = "web" | "game";

export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export type ExternalLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  icon: string;
  track: PortfolioTrack | "shared";
  skills: string[];
};

export type Project = {
  slug: string;
  title: string;
  track: PortfolioTrack;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  status: ProjectStatus;
  year: string;
  techStack: string[];
  features: string[];
  outcomes: string[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
};
