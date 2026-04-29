import type { Project } from "@/types/portfolio";

export const webProjects: Project[] = [
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    track: "web",
    tagline: "A structured personal portfolio built with Next.js and TypeScript.",
    summary:
      "A modern portfolio website designed to present web development and game development work through clear sections, project case studies, and reusable content data.",
    problem:
      "The portfolio had a strong visual direction, but the content was hardcoded and project details were not connected to a proper data structure.",
    solution:
      "Created a typed content layer for projects, skills, and profile data, then connected the web and game pages to reusable data files.",
    role: "Frontend Developer",
    status: "In Progress",
    year: "2026",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Separate web and game portfolio sections",
      "Reusable project data structure",
      "Dynamic project detail pages",
      "Responsive layout using Tailwind CSS",
    ],
    outcomes: [
      "Cleaner project structure",
      "Easier project updates",
      "More professional portfolio presentation",
    ],
    learnings: [
      "How to separate content from UI",
      "How to use dynamic routes for project pages",
      "How to improve portfolio credibility through case studies",
    ],
    githubUrl: "https://github.com/KavinduLakshan393/Project-Portfolio",
  },
  {
    slug: "business-landing-page",
    title: "Business Landing Page",
    track: "web",
    tagline: "A responsive landing page concept for a service-based business.",
    summary:
      "A clean business website concept focused on service explanation, call-to-action sections, and mobile-first layout.",
    problem:
      "Small businesses often need a simple, trustworthy page that explains what they offer and helps users contact them quickly.",
    solution:
      "Designed a structured landing page with hero content, service cards, trust points, and a contact section.",
    role: "Frontend Developer",
    status: "Prototype",
    year: "2026",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Hero section with clear call to action",
      "Service highlights",
      "Mobile responsive layout",
      "Contact-focused design",
    ],
    outcomes: [
      "Improved service clarity",
      "Better visual structure",
      "Reusable layout pattern for future client websites",
    ],
    learnings: [
      "How to organize business content",
      "How to guide users toward action",
      "How to build reusable UI sections",
    ],
  },
];

export const gameProjects: Project[] = [
  {
    slug: "unity-game-prototype",
    title: "Unity Game Prototype",
    track: "game",
    tagline: "A small Unity prototype focused on movement, collision, and gameplay logic.",
    summary:
      "A game development prototype created to practice player movement, object interaction, basic level design, and real-time game logic.",
    problem:
      "Game systems need clear logic, smooth control, and predictable collision behavior to feel responsive.",
    solution:
      "Built a prototype structure using Unity and C# with separate logic for player movement, interaction, and scene flow.",
    role: "Game Developer",
    status: "Prototype",
    year: "2026",
    techStack: ["Unity", "C#", "Game Physics", "Game UI"],
    features: [
      "Player movement system",
      "Basic collision detection",
      "Scene structure",
      "Interactive game objects",
    ],
    outcomes: [
      "Improved understanding of Unity workflow",
      "Reusable gameplay logic foundation",
      "Better awareness of real-time system constraints",
    ],
    learnings: [
      "How to structure game scripts",
      "How to control player input",
      "How to test interaction logic",
    ],
  },
];
