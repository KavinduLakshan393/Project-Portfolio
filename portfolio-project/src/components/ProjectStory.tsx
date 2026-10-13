import Link from "next/link";
import type { Project } from "@/types/portfolio";

export function ProjectStory({project}: {project: Project}) {
  return <main className="studio studio-story" id="top">
    <div className="studio-container">
      <div className="studio-story-top"><Link href={project.track === "game" ? "/game" : "/web"}>← ALL {project.track === "game" ? "GAME" : "WEB"} PROJECTS</Link><span>CASE STUDY / {project.year}</span></div>
      <p className="studio-kicker"><span className="studio-kicker-line"/> {project.track === "game" ? "INTERACTIVE SYSTEMS" : "SOFTWARE DEVELOPMENT"} · {project.status}</p>
      <h1>{project.title}<span aria-hidden="true">✳</span></h1>
      <p className="studio-story-lede">{project.summary}</p>
      <div className="studio-story-actions">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">VIEW SOURCE ON GITHUB ↗</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">OPEN LIVE PROJECT ↗</a>}
        {project.additionalLinks?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label.toUpperCase()} ↗</a>)}
      </div>
      <div className="studio-story-ribbon"><div><span>YEAR</span><b>{project.year}</b></div><div><span>MY ROLE</span><b>{project.role}</b></div><div><span>STATUS</span><b>{project.status}</b></div><div><span>REPOSITORY</span><b>{project.repositoryName || "GitHub"}</b></div></div>
      <div className="studio-story-body">
        <div className="studio-story-label">01 / THE CHALLENGE</div><section><h2>THE<br/><em>PROBLEM.</em></h2><p>{project.problem}</p></section>
        <div className="studio-story-label">02 / THE APPROACH</div><section><h2>THE<br/><em>SOLUTION.</em></h2><p>{project.solution}</p></section>
        <div className="studio-story-label">03 / HOW IT WORKS</div><section><h2>THE<br/><em>DETAILS.</em></h2><h3>Key features</h3><ul>{project.features.map((x)=><li key={x}>{x}</li>)}</ul></section>
        <div className="studio-story-label">04 / WHAT I TOOK AWAY</div><section><h2>THE<br/><em>LEARNING.</em></h2><h3>Outcomes</h3><ul>{project.outcomes.map(x)=><li key={x}>{x}</li>)}</ul><h3>Learnings</h3><ul>{project.learnings.map(x)=><li key={x}>{x}</li>)}</ul></section>
      </div>
      <div className="studio-story-stack"><span>TECHNOLOGIES USED</span><div>{project.techStack.map(x=><span key={x}>{x}</span>)}</div></div>
      <div className="studio-story-next"><p>KEEP EXPLORING</p><Link href={project.track === "game" ? "/game" : "/web"}>BACK TO THE WORK <span>↗</span></Link></div>
    </div>
  </main>;
}
