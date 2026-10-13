import { gameProjects, profile, webProjects } from "@/data";
import type { PortfolioTrack } from "@/types/portfolio";
import { WorkFilter } from "@/components/WorkFilter";

export function PortfolioArchive({track}: {track: PortfolioTrack}) {
  const isGame = track === "game";
  const projects = isGame ? gameProjects : webProjects;
  return <main className="studio studio-archive" id="top">
    <section className="studio-archive-hero">
      <div className="studio-container">
        <div className="studio-archive-meta"><span>INDEX / {isGame ? "02" : "01"}</span><span>KAVINDU LAKSHAN / REPOSITORY WORK</span></div>
        <h1>{isGame ? <>PLAYABLE<br/><em>WORLDS.</em></> : <>THINGS<br/><em>I&apos;VE BUILT.</em></>}</h1>
        <div className="studio-archive-bottom"><p>{isGame ? "Interactive worlds, mechanics and systems built in Unity. A space to experiment, learn, and play." : "Useful products shaped by engineering. From offline-first retail systems to mobile apps and everything in between."}</p><span>{String(projects.length).padStart(2,"0")} CURATED PROJECTS</span></div>
      </div>
    </section>
    <section className="studio-work-section studio-archive-work" id="projects">
      <div className="studio-container"><p className="studio-kicker"><span className="studio-kicker-line"/> BROWSE THE PROJECTS</p><WorkFilter projects={projects}/><div className="studio-section-end"><span>REAL CODE. REAL REPOSITORIES.</span><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GITHUB ACCOUNT ↗</a></div></div>
    </section>
  </main>;
}
