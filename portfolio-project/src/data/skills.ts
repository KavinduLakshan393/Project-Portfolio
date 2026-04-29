import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "desktop_windows",
    track: "web",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    icon: "database",
    track: "web",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Authentication", "API Design"],
  },
  {
    title: "Tools & Workflow",
    icon: "build",
    track: "shared",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Debugging"],
  },
  {
    title: "Game Development",
    icon: "sports_esports",
    track: "game",
    skills: ["Unity", "C#", "Game Logic", "Level Design", "Physics Systems"],
  },
  {
    title: "Interactive Systems",
    icon: "memory",
    track: "game",
    skills: ["Collision Systems", "Input Handling", "Game UI", "Optimization"],
  },
];
