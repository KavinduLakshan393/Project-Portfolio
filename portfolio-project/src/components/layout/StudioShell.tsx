import Link from "next/link";
import { profile } from "@/data";

export function StudioHeader() {
  return (
    <header className="studio-site-header">
      <div className="studio-container studio-header-inner">
        <Link href="/" className="studio-logo" aria-label="Kavindu Lakshan homepage">K<span>✳</span>L<span className="studio-logo-period">.</span><small>©26</small></Link>
        <nav className="studio-desktop-nav" aria-label="Main navigation">
          <Link href="/#work">WORK <sup>01</sup></Link><Link href="/#approach">APPROACH <sup>02</sup></Link><Link href="/about">ABOUT <sup>03</sup></Link><Link href="/#contact">CONTACT <sup>04</sup></Link>
        </nav>
        <a href={profile.githubUrl} className="studio-header-github" target="_blank" rel="noopener noreferrer">GITHUB <span aria-hidden="true">↗</span></a>
        <details className="studio-mobile-menu">
          <summary aria-label="Toggle navigation">MENU <span>☰</span></summary>
          <nav aria-label="Mobile navigation"><Link href="/">HOME ↗</Link><Link href="/#work">WORK ↗</Link><Link href="/web">WEB ↗</Link><Link href="/game">GAME ↗</Link><Link href="/about">ABOUT ↗</Link><Link href="/#contact">CONTACT ↗</Link><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GITHUB ↗</a></nav>
        </details>
      </div>
    </header>
  );
}

export function StudioFooter() {
  return (
    <footer className="studio-site-footer">
      <div className="studio-container studio-footer-inner"><Link href="/" className="studio-footer-brand">KL<span>✳</span></Link><span>© {new Date().getFullYear()} KAVINDU LAKSHAN</span><div><Link href="/web">WEB WORK</Link><Link href="/game">GAMES</Link><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div><a className="studio-back-top" href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
