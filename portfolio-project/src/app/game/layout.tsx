import React from 'react';
import Link from 'next/link';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-game font-body antialiased min-h-screen selection:bg-theme-primary/30 selection:text-theme-primary flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-theme-primary/20 shadow-[0_0_20px_var(--theme-glow)] transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 shrink-0">
            <span className="material-symbols-outlined text-theme-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
            <span className="text-xl font-bold tracking-tighter text-white font-headline">
              Lakshan<span className="text-theme-primary">.Studio</span>
            </span>
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link className="font-label uppercase tracking-[0.15em] font-bold text-xs text-theme-primary border-b-2 border-theme-primary pb-1 transition-all duration-100" href="#projects">PROJECTS</Link>
            </li>
            <li>
              <Link className="font-label uppercase tracking-[0.15em] font-bold text-xs text-slate-400 hover:text-theme-primary transition-all duration-100" href="#skills">SKILLS</Link>
            </li>
            <li>
              <Link className="font-label uppercase tracking-[0.15em] font-bold text-xs text-slate-400 hover:text-theme-primary transition-all duration-100" href="#experience">EXPERIENCE</Link>
            </li>
            <li>
              <Link className="font-label uppercase tracking-[0.15em] font-bold text-xs text-slate-400 hover:text-theme-primary transition-all duration-100" href="#about">ABOUT ME</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4 shrink-0">
            <Link 
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-br from-theme-primary to-theme-container text-theme-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-none shadow-[0_0_15px_var(--theme-glow)] hover:shadow-[0_0_25px_var(--theme-glow)] transition-all duration-200 active:scale-95"
            >
              Collaborate
            </Link>
            <button aria-label="Menu" className="md:hidden text-theme-primary hover:text-white transition-colors p-2">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
    </div>
  );
}