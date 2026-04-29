import Link from "next/link";
import { gameProjects, profile, skillCategories } from "@/data";

export default function GamePortfolio() {
  const gameSkills = skillCategories.filter(
    (category) => category.track === "game" || category.track === "shared",
  );

  return (
    <main className="theme-game min-h-screen bg-[#0e0e0e] text-[#e5e2e1]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
              Game Development
            </p>

            <h1 className="font-headline text-4xl font-semibold tracking-tight md:text-6xl">
              Crafting interactive systems with clear gameplay logic.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant">
              I explore game systems through Unity, C#, interaction logic,
              player movement, collision behavior, and real-time design
              constraints.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-theme-primary px-5 py-3 text-sm font-semibold text-black"
              >
                View Projects
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-theme-primary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-theme-primary">
              Game Systems Snapshot
            </p>

            <div className="mt-6 grid gap-4">
              {[
                "Player movement and input handling",
                "Collision and interaction logic",
                "Scene structure and gameplay flow",
                "Unity and C# prototype development",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-on-surface-variant"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
              Selected Work
            </p>
            <h2 className="font-headline text-3xl font-semibold md:text-4xl">
              Game Projects
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-on-surface-variant">
            Game projects should show systems thinking, not only screenshots.
            Explain movement, logic, constraints, testing, and what improved.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {gameProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/game/projects/${project.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-theme-primary/60 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-theme-primary/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-theme-primary">
                  {project.status}
                </span>
                <span className="text-sm text-white/40">{project.year}</span>
              </div>

              <h3 className="font-headline text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                {project.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm font-semibold text-theme-primary">
                <span>Read case study</span>
                <span className="material-symbols-outlined transition group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
          Skills
        </p>

        <h2 className="font-headline text-3xl font-semibold md:text-4xl">
          Game Development Stack
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {gameSkills.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="material-symbols-outlined text-theme-primary">
                {category.icon}
              </span>

              <h3 className="mt-4 font-headline text-xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-black/30 px-3 py-1 text-xs text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="mb-3 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
            Contact
          </p>

          <h2 className="font-headline text-3xl font-semibold">
            Interested in a game project or collaboration?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-on-surface-variant">
            Send me a message for game prototypes, interactive systems, or
            collaboration ideas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-theme-primary px-5 py-3 text-sm font-semibold text-black"
            >
              Send Email
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-theme-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}