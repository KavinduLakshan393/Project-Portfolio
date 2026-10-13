import Link from "next/link";
import { gameProjects, profile, webProjects } from "@/data";
import { WorkFilter } from "@/components/WorkFilter";

const allProjects = [...webProjects, ...gameProjects];
const selection = [
  "flux-pos-inventory-system-v2",
  "smart-auto-hub-android",
  "unity-game-02",
  "flux-pos-inventory-system",
  "project-portfolio",
  "unity-game-1",
];
const featured = selection
  .map((slug) => allProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof allProjects)[number] => Boolean(project));

export default function HomePage() {
  return (
    <main className="studio">
      <section className="studio-hero" aria-labelledby="hero-title">
        <div className="studio-hero-top studio-container">
          <span className="studio-micro"><span className="studio-live-dot" /> SOFTWARE DEVELOPER · SRI LANKA</span>
          <span className="studio-micro">INDEPENDENT WORK / 2026</span>
        </div>
        <div className="studio-hero-orb" aria-hidden="true"><div className="studio-orb-core" /><div className="studio-orb-orbit studio-orb-orbit-one" /><div className="studio-orb-orbit studio-orb-orbit-two" /><span>KL / 26</span></div>
        <div className="studio-container studio-hero-main">
          <p className="studio-hero-intro">KAVINDU LAKSHAN <span>— PORTFOLIO / VOL. 01</span></p>
          <h1 id="hero-title" className="studio-hero-title">
            <span>IDEAS</span><span className="studio-outline">INTO</span><span className="studio-hero-last">IMPACT<span className="studio-hero-star" aria-hidden="true">✳</span></span>
          </h1>
          <div className="studio-hero-bottom">
            <div className="studio-hero-scroll"><span className="studio-scroll-mark">↓</span> SCROLL TO EXPLORE</div>
            <p>Web applications, mobile experiences and playable worlds. Designed with intent. Built with code.</p>
            <Link href="#work" className="studio-circle-link" aria-label="Explore selected projects">↘</Link>
          </div>
        </div>
        <div className="studio-hero-index" aria-hidden="true">01 / 04</div>
      </section>

      <div className="studio-ticker" aria-label="Web development, mobile, game development">
        <div className="studio-ticker-track" aria-hidden="true">
          {Array.from({length: 4}, (_, i) => <span key={i}>DEVELOPMENT <b>✳</b> DESIGN THINKING <b>✳</b> INTERACTIVE SYSTEMS <b>✳</b> </span>)}
        </div>
      </div>

      <section className="studio-work-section" id="work" aria-labelledby="work-title">
        <div className="studio-container">
          <div className="studio-section-head">
            <div><p className="studio-kicker"><span className="studio-kicker-line" /> 01 / FEATURED WORK</p>
              <h2 id="work-title">MADE TO<br/><em>WORK.</em></h2>
            </div>
            <p>Not just concepts. A selection of projects from my actual <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repositories ↗</a> — spanning business software, mobile and games.</p>
          </div>
          <WorkFilter projects={featured} />
          <div className="studio-section-end"><span>THERE’S MORE UNDER THE HOOD.</span><Link href={profile.githubUrl} target="_blank" rel="noopener noreferrer">EXPLORE ALL REPOSITORIES <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="studio-statement" id="approach">
        <div className="studio-container">
          <div className="studio-statement-top"><span className="studio-kicker"><span className="studio-kicker-line" /> 02 / THE APPROACH</span><span>THINK / BUILD / REFINE</span></div>
          <h2>GOOD SOFTWARE<br/>IS MORE THAN<br/><em>WORKING CODE<span aria-hidden="true">.</span></em></h2>
          <div className="studio-statement-bottom">
            <span className="studio-asterisk" aria-hidden="true">✳</span>
            <p>I care about what happens between the idea and the final interaction — the logic, the details, and how people actually use what I build.</p>
            <Link href="/about" className="studio-text-link">A LITTLE ABOUT ME <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="studio-disciplines" aria-labelledby="disciplines-title">
        <div className="studio-container">
          <p className="studio-kicker"><span className="studio-kicker-line" /> 03 / WHAT I DO</p>
          <h2 id="disciplines-title" className="studio-disciplines-title">THE TOOLKIT<span className="studio-small-star" aria-hidden="true">✳</span></h2>
          <div className="studio-discipline-list">
            <Link href="/web"><span>01</span><strong>WEB & FULL STACK</strong><small>REACT / NEXT.JS / TYPESCRIPT</small><b>↗</b></Link>
            <Link href="/web"><span>02</span><strong>MOBILE EXPERIENCES</strong><small>FLUTTER / DART / ANDROID</small><b>↗</b></Link>
            <Link href="/game"><span>03</span><strong>GAME & INTERACTION</strong><small>UNITY / C# / GAME SYSTEMS</small><b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="studio-contact" id="contact">
        <div className="studio-container">
          <div className="studio-contact-top"><span>04 / SAY HELLO</span><span>OPEN TO CONVERSATIONS & COLLABORATION</span></div>
          <h2>HAVE AN<br/><em>IDEA?</em></h2>
          <a className="studio-contact-link" href={"mailto:" + profile.email}>LET’S TALK <span aria-hidden="true">↗</span></a>
          <div className="studio-contact-bottom"><span>KAVINDU LAKSHAN · SRI LANKA</span><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">FOLLOW THE BUILDS ON GITHUB ↗</a></div>
        </div>
      </section>
    </main>
  );
}
