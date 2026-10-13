"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

type Filter = "all" | "web" | "mobile" | "game";

function category(project: Project): Exclude<Filter,"all"> {
  if (project.track === "game") return "game";
  if (project.slug.includes("android") || project.slug.includes("reminder")) return "mobile";
  return "web";
}
function artwork(project: Project): "flux" | "mobile" | "game" | "code" {
  if (project.slug.includes("flux")) return "flux";
  if (category(project) === "mobile") return "mobile";
  if (project.track === "game") return "game";
  return "code";
}

function ArtDirection({project}: {project: Project}) {
  const kind = artwork(project);
  return (
    <div className={"studio-art studio-art-" + kind} aria-label={"Stylized illustrative artwork for " + project.title}>
      <div className="studio-art-caption"><span>KL / SELECTED PROJECT</span><span>ART DIRECTION · 2026</span></div>
      {kind === "flux" ? (
        <div className="studio-demo-window" aria-hidden="true">
          <div className="studio-demo-bar"><span className="studio-demo-mark">f.</span><span>flux / overview</span><span>● ● ●</span></div>
          <div className="studio-demo-body"><div className="studio-demo-aside"><b>F</b><i/><i/><i/></div><div className="studio-demo-main"><small>STORE OVERVIEW / TODAY</small><strong>Simple. Fast. In control.</strong><div className="studio-demo-stats"><span>SALES TODAY <b>LKR —</b></span><span>INVENTORY <b>LIVE</b></span></div><div className="studio-demo-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div>
        </div>
      ) : kind === "mobile" ? (
        <div className="studio-mobile-scene" aria-hidden="true"><span className="studio-mobile-orbit"/><div className="studio-phone"><div className="studio-phone-notch"/><small>{project.slug === "medi-reminder" ? "MEDI REMINDER" : "MOBILE EXPERIENCE"}</small><b>{project.slug === "medi-reminder" ? <>Your day,<br/>on schedule.</> : <>Built for<br/>your pocket.</>}</b><div className="studio-phone-graphic">↗</div><div className="studio-phone-lines"><span/><span/><span/></div><div className="studio-phone-bottom">HOME　 EXPLORE　 PROFILE</div></div></div>
      ) : kind === "game" ? (
        <div className="studio-game-scene" aria-hidden="true"><div className="studio-game-sphere"/><span className="studio-game-dash">{project.slug === "my-first-game" ? <>DELIVERY<br/>DASH</> : <>PLAY<br/>MODE</>}</span><span className="studio-game-coords">X 034 / Y 026<br/>UNITY ENGINE</span></div>
      ) : (
        <div className="studio-code-scene" aria-hidden="true"><span className="studio-code-glyph">&lt;/&gt;</span><span>DESIGNED TO BE BUILT.</span></div>
      )}
      <div className="studio-art-footer" aria-hidden="true"><span>{project.repositoryName || project.title}</span><span>↗</span></div>
    </div>
  );
}

export function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("all");
  const shown = projects.filter((project) => active === "all" || category(project) === active);
  const tabs: {key: Filter; label: string}[] = [
    {key:"all",label:"ALL WORK"}, {key:"web",label:"WEB / SYSTEMS"},
    {key:"mobile",label:"MOBILE"}, {key:"game",label:"GAMES"},
  ];
  return (
    <div>
      <div className="studio-filters" role="group" aria-label="Filter portfolio projects">
        {tabs.map((tab) => <button type="button" className={active === tab.key ? "studio-filter is-active" : "studio-filter"} onClick={() => setActive(tab.key)} aria-pressed={active===tab.key} key={tab.key}>{tab.label} <span aria-hidden="true">↗</span></button>)}
      </div>
      <div className="studio-project-list" aria-live="polite">
        {shown.map((project, index) => (
          <article className="studio-project" key={project.slug}>
            <div className="studio-project-image"><ArtDirection project={project}/></div>
            <div className="studio-project-info">
              <div className="studio-project-overline"><span>{"0" + (index + 1)} / {project.year}</span><span>{category(project).toUpperCase()}</span></div>
              <h3>{project.title}</h3>
              <p>{project.tagline}</p>
              <div className="studio-project-tags">{project.techStack.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div>
              <div className="studio-project-actions"><Link href={"/" + project.track + "/projects/" + project.slug}>VIEW CASE STUDY <span aria-hidden="true">↗</span></Link>{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={"GitHub repository for " + project.title}>GITHUB ↗</a>}</div>
            </div>
          </article>
        ))}
      </div>
      {shown.length === 0 && <p className="studio-no-results">No projects in this category yet.</p>}
    </div>
  );
}
