import type { Project } from "@/types/portfolio";
import { webProjects as sourceWebProjects, gameProjects as sourceGameProjects } from "./projects";

/**
 * Curated from the linked public GitHub source repositories (October 2026).
 * Group project credits are intentionally collaborative, not individual claims.
 */
const additionalWebProjects: Project[] = [
  {
    "slug": "villa-cinnamoon-castle",
    "title": "Villa Cinnamoon Castle",
    "track": "web",
    "tagline": "A cinematic hospitality site with an animated guest journey and stay enquiries.",
    "summary": "A React/Vite website for a private villa near Hikkaduwa, with GSAP-powered page transitions, stay packages, curated gallery and a guided inquiry experience.",
    "problem": "A private villa needs a persuasive website and a clear path for guests to enquire, without suggesting unverified booking availability.",
    "solution": "Built a responsive guest-facing website with motion and a structured enquiry flow. The repository also includes backend and admin work for packages and enquiries.",
    "role": "Web Development",
    "status": "In Progress",
    "year": "2026",
    "techStack": [
      "React",
      "JavaScript",
      "Vite",
      "GSAP",
      "Node.js",
      "PostgreSQL"
    ],
    "features": [
      "Animated navigation and page transitions",
      "Gallery and stay options",
      "Guided three-step inquiry",
      "Package and enquiry management modules"
    ],
    "outcomes": [
      "Created a connected hospitality experience",
      "Separated enquiry UX from live-booking claims"
    ],
    "learnings": [
      "Motion and accessibility",
      "Inquiry flow architecture",
      "Frontend/backend composition"
    ],
    "githubUrl": "https://github.com/KavinduLakshan393/villa-cinnamoon-castle",
    "repositoryName": "villa-cinnamoon-castle",
    "repositoryUrl": "https://github.com/KavinduLakshan393/villa-cinnamoon-castle",
    "primaryLanguage": "JavaScript",
    "source": "GitHub",
    "featured": true
  },
  {
    "slug": "react-cosmatic-shop",
    "title": "React Cosmetic Shop",
    "track": "web",
    "tagline": "A beauty storefront featuring products, cart, checkout and administration screens.",
    "summary": "A React/Vite online cosmetics store with product pages, category browsing, cart/checkout, login and admin product/order management interfaces.",
    "problem": "An online beauty storefront needs intuitive shopping paths and organized product management.",
    "solution": "Used React Router, reusable product components and API-driven screens to connect product discovery, checkout interfaces and administration.",
    "role": "Frontend Development",
    "status": "Prototype",
    "year": "2025",
    "techStack": [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "React Router"
    ],
    "features": [
      "Products and category browsing",
      "Cart and checkout UI",
      "Authentication pages",
      "Admin product and order views"
    ],
    "outcomes": [
      "Created multiple connected storefront flows",
      "Practiced building reusable product and cart components"
    ],
    "learnings": [
      "Route-based interface architecture",
      "Product API integration",
      "E-commerce UI patterns"
    ],
    "githubUrl": "https://github.com/KavinduLakshan393/react-cosmatic-shop",
    "repositoryName": "react-cosmatic-shop",
    "repositoryUrl": "https://github.com/KavinduLakshan393/react-cosmatic-shop",
    "primaryLanguage": "JavaScript",
    "source": "GitHub",
    "featured": true
  },
  {
    "slug": "uor-internship-management-system",
    "title": "UOR Internship Management System",
    "track": "web",
    "tagline": "A University of Ruhuna group platform for CVs, internship requests and candidate filtering.",
    "summary": "A collaborative university project with React/TypeScript frontend and Spring Boot/Java backend repositories for student CVs, academic records and internship management.",
    "problem": "University internship workflows need validated academic information and transparent candidate selection.",
    "solution": "The group system combines student/admin portals, PostgreSQL data services and deterministic candidate filtering with manual shortlist decisions.",
    "role": "Collaborative university project",
    "status": "In Progress",
    "year": "2026",
    "techStack": [
      "React",
      "TypeScript",
      "Vite",
      "Java",
      "Spring Boot",
      "PostgreSQL"
    ],
    "features": [
      "Student CV and profile management",
      "Academic records and GPA",
      "Internship requests",
      "Explainable candidate filtering",
      "Shortlist and export workflows"
    ],
    "outcomes": [
      "Connected frontend/backend workflows",
      "Avoided AI scoring or automated candidate ranking claims"
    ],
    "learnings": [
      "Role-based applications",
      "API contracts",
      "Team-based software systems"
    ],
    "githubUrl": "https://github.com/UOR-Internship-Management-System",
    "repositoryName": "UOR-Internship-Management-System",
    "repositoryUrl": "https://github.com/UOR-Internship-Management-System",
    "primaryLanguage": "TypeScript / Java",
    "source": "GitHub",
    "featured": true,
    "additionalLinks": [
      {
        "label": "Frontend source",
        "href": "https://github.com/UOR-Internship-Management-System/frontend"
      },
      {
        "label": "Backend source",
        "href": "https://github.com/UOR-Internship-Management-System/backend"
      }
    ]
  }
];

const webCorrections: Record<string, Partial<Project>> = {
  "medi-reminder": {
    "title": "Medi Reminder",
    "tagline": "A Flutter pharmacy utility for medication records and daily reminders.",
    "summary": "A Flutter mobile application containing medicine/customer records, reminder lists, settings, local notifications and background-task services.",
    "problem": "Medicine and customer records need organized reminders for everyday pharmacy use.",
    "solution": "Built Flutter record-management screens and reminder services, using local notifications, background work and Supabase dependencies.",
    "role": "Mobile App Development",
    "status": "Prototype",
    "year": "2025",
    "techStack": [
      "Flutter",
      "Dart",
      "Supabase",
      "Local Notifications",
      "Workmanager"
    ],
    "features": [
      "Medication and customer record views",
      "Reminder list and notifications",
      "Background-task services",
      "Appearance and settings controls"
    ],
    "outcomes": [
      "Built record and reminder workflows",
      "Explored notifications and background execution"
    ],
    "learnings": [
      "Flutter UI/service separation",
      "Notifications and permissions",
      "Mobile utility design"
    ]
  }
};
const gameCorrections: Record<string, Partial<Project>> = {
  "my-first-game": {
    "title": "Delivery Dash — My First Game",
    "tagline": "A Unity 2D delivery-driving prototype with pickups, drop-offs and speed boosts.",
    "summary": "A Unity/C# game with driving and steering controls, package pickup/customer delivery triggers, collision behavior and speed-boost feedback.",
    "problem": "An early game prototype needs a cohesive player movement and delivery loop.",
    "solution": "Implemented input-driven steering, trigger-based package delivery, speed boosts and visual feedback.",
    "features": [
      "2D driving controls",
      "Package pickup and customer delivery triggers",
      "Speed boost pickups",
      "Collision reactions and particle effects"
    ],
    "outcomes": [
      "Made a connected interactive delivery loop",
      "Practiced 2D physics interactions"
    ],
    "learnings": [
      "Unity triggers and player input",
      "Pickup/drop-off state",
      "Gameplay feedback"
    ]
  },
  "unity-game-02": {
    "tagline": "A Unity 2D game with player movement, scoring and reusable power-up systems.",
    "summary": "A follow-up Unity/C# game with player control, scoring, finish-line logic, collision handling and ScriptableObject-based power-ups.",
    "problem": "A second game needs reusable gameplay systems rather than isolated controls.",
    "solution": "Structured C# components for player movement, score management, finish line and timed power-up behavior.",
    "techStack": [
      "Unity",
      "C#",
      "2D Physics",
      "ScriptableObjects"
    ],
    "features": [
      "2D player controller",
      "Score and finish-line logic",
      "ScriptableObject power-ups",
      "Character selection and crash detection"
    ],
    "outcomes": [
      "Extended reusable gameplay systems",
      "Practiced game state and timed effects"
    ],
    "learnings": [
      "Unity component organization",
      "Power-up state management",
      "Game physics and interaction"
    ]
  }
};

const featuredWeb = new Set(["villa-cinnamoon-castle", "medi-reminder", "react-cosmatic-shop", "uor-internship-management-system"]);
const featuredGames = new Set(["my-first-game", "unity-game-02"]);

export const webProjects: Project[] = [
  ...additionalWebProjects,
  ...sourceWebProjects.map((project) => ({
    ...project,
    ...(webCorrections[project.slug] ?? {}),
    featured: featuredWeb.has(project.slug),
  })),
];

export const gameProjects: Project[] = sourceGameProjects.map((project) => ({
  ...project,
  ...(gameCorrections[project.slug] ?? {}),
  featured: featuredGames.has(project.slug),
}));
