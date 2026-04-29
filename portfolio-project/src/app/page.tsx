import Link from "next/link";

const domains = [
  {
    label: "Domain 01",
    title: "Web Engineering",
    description:
      "Modern web applications, responsive interfaces, scalable frontend architecture, and practical digital products.",
    href: "/web",
    icon: "language",
    tech: "React // Next.js // TypeScript // Tailwind",
  },
  {
    label: "Domain 02",
    title: "Game Development",
    description:
      "Interactive systems, gameplay logic, real-time constraints, Unity prototypes, and game experience design.",
    href: "/game",
    icon: "sports_esports",
    tech: "Unity // C# // Game Logic // Interaction",
  },
];

export default function PortfolioGateway() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-10">
        <div className="mb-12 text-center">
          <p className="mb-3 font-label text-xs uppercase tracking-[0.4em] text-theme-primary">
            System: Portfolio Online
          </p>
          <h1 className="font-headline text-4xl font-semibold tracking-tight md:text-6xl">
            Kavindu Lakshan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-base">
            Web developer and game developer focused on building clean,
            structured, and practical digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {domains.map((domain) => (
            <Link
              key={domain.href}
              href={domain.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-theme-primary/60 hover:bg-white/[0.06]"
            >
              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/30 p-3 text-theme-primary">
                <span className="material-symbols-outlined">{domain.icon}</span>
              </div>

              <p className="mb-6 font-label text-xs uppercase tracking-[0.35em] text-theme-primary">
                {domain.label}
              </p>

              <h2 className="font-headline text-3xl font-semibold uppercase md:text-4xl">
                {domain.title}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant">
                {domain.description}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                  {domain.tech}
                </span>
                <span className="material-symbols-outlined transition group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}