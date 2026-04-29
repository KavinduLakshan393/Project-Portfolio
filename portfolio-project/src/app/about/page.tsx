import Link from "next/link";
import { gameProjects, profile, skillCategories, webProjects } from "@/data";

export default function AboutPage() {
  const totalProjects = webProjects.length + gameProjects.length;

  return (
    <main className="min-h-screen bg-[#0e0e0e] px-6 py-24 text-[#e5e2e1]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
          About
        </p>

        <h1 className="font-headline text-4xl font-semibold tracking-tight md:text-6xl">
          I build structured digital products with clean logic and usable
          interfaces.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-on-surface-variant">
          {profile.summary}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-3xl font-semibold">{totalProjects}</p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Portfolio projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-3xl font-semibold">{skillCategories.length}</p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Skill categories
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-3xl font-semibold">2026</p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Active portfolio year
            </p>
          </div>
        </div>

        <section className="mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-headline text-2xl font-semibold">
              Current Focus
            </h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              I am focused on improving my ability to build production-ready web
              applications, reusable frontend systems, and clear project
              documentation. I am also exploring game development concepts such
              as interaction logic, real-time systems, and Unity workflow.
            </p>
          </div>

          <div className="grid gap-3">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-on-surface-variant"
              >
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-headline text-2xl font-semibold">
            What I want this portfolio to prove
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-on-surface-variant">
            A portfolio should not only look good. It should prove that the
            developer can think clearly, structure code properly, explain
            decisions, and complete usable products. This site is being improved
            with that goal.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/web"
              className="rounded-full bg-theme-primary px-5 py-3 text-sm font-semibold text-black"
            >
              View Web Work
            </Link>
            <Link
              href="/game"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-theme-primary"
            >
              View Game Work
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
