import Link from "next/link";
import { gameProjects, profile, skillCategories, webProjects } from "@/data";

export default function AboutPage() {
  const count = gameProjects.length + webProjects.length;
  return <main className="studio studio-about" id="top">
    <section className="studio-archive-hero studio-about-hero">
      <div className="studio-container"><div className="studio-archive-meta"><span>ABOUT / THE PERSON</span><span>BASED IN SRI LANKA</span></div>
        <h1>CURIOUS BY<br/><em>DESIGN.</em></h1>
        <div className="studio-archive-bottom"><p>{profile.summary}</p><span>WEB / MOBILE / GAME</span></div>
      </div>
    </section>
    <section className="studio-about-body">
      <div className="studio-container">
        <div className="studio-about-intro"><p className="studio-kicker"><span className="studio-kicker-line"/> THE SHORT VERSION</p><h2>HI, I&apos;M<br/><em>KAVINDU.</em></h2><div><p>I&apos;m a developer who enjoys turning complex ideas into something people can actually use. I work across web, mobile and game development — with a focus on useful functionality and thoughtful details.</p><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="studio-text-link">SEE WHAT I&apos;M BUILDING ↗</a></div></div>
        <div className="studio-about-numbers"><div><strong>{String(count).padStart(2, "0")}</strong><span>CURATED PROJECTS</span></div><div><strong>{String(skillCategories.length).padStart(2, "0")}</strong><span>SKILL AREAS</span></div><div><strong>03</strong><span>FIELDS: WEB, MOBILE, GAME</span></div></div>
        <div className="studio-about-skill"><p className="studio-kicker"><span className="studio-kicker-line"/> TOOLS & CAPABILITIES</p><h2>WHAT&apos;S<br/><em>IN MY STACK?</em></h2><div>{skillCategories.map(group=><section key={group.title}><h3>{group.title}</h3><div>{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></section>)}</div></div>
      </div>
    </section>
    <section className="studio-about-cta"><div className="studio-container"><p>EVERY GOOD PROJECT STARTS SOMEWHERE.</p><h2>LET&apos;S MAKE<br/>SOMETHING <em>REAL.</em></h2><div><a href={"mailto:"+profile.email} className="studio-text-link">START A CONVERSATION ↗</a><Link href="/#work">VIEW SELECTED WORK ↗</Link></div></div></section>
  </main>;
}
