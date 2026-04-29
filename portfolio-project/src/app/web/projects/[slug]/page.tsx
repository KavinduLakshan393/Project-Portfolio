import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { webProjects } from "@/data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return webProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = webProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Kavindu Lakshan",
    };
  }

  return {
    title: `${project.title} | Kavindu Lakshan`,
    description: project.summary,
  };
}

export default async function WebProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = webProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0e0e0e] px-6 py-24 text-[#e5e2e1]">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/web"
          className="mb-10 inline-flex items-center gap-2 text-sm text-theme-primary hover:underline"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Web Portfolio
        </Link>

        <div className="mb-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-theme-primary/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-theme-primary">
            {project.status}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
            {project.year}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
            {project.role}
          </span>
        </div>

        <h1 className="font-headline text-4xl font-semibold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
          {project.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-theme-primary px-5 py-3 text-sm font-semibold text-black"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-theme-primary"
            >
              GitHub Repository
            </a>
          )}
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-4">
          <RepoMeta label="Source" value={project.source ?? "Manual"} />
          <RepoMeta
            label="Repository"
            value={project.repositoryName ?? "Not specified"}
          />
          <RepoMeta
            label="Language"
            value={project.primaryLanguage ?? "Not specified"}
          />
          <RepoMeta
            label="Updated"
            value={project.lastUpdated ?? "Not specified"}
          />
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-headline text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-headline text-2xl font-semibold">Solution</h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="font-headline text-2xl font-semibold">Tech Stack</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-black/30 px-3 py-1 text-xs text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <DetailList title="Key Features" items={project.features} />
          <DetailList title="Outcomes" items={project.outcomes} />
          <DetailList title="What I Learned" items={project.learnings} />
        </section>
      </article>
    </main>
  );
}

function RepoMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="font-label text-[10px] uppercase tracking-[0.25em] text-theme-primary">
        {label}
      </p>
      <p className="mt-2 break-words text-sm text-on-surface-variant">{value}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="font-headline text-xl font-semibold">{title}</h2>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-on-surface-variant">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
