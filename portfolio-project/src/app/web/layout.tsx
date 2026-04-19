import React from 'react';
import Link from 'next/link';

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-body antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-900/40 backdrop-blur-xl border-b border-theme-primary/10 shadow-[0_0_15px_var(--theme-glow)] hidden md:block">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-theme-primary rounded-sm shadow-[0_0_10px_var(--theme-glow)]"></div>
            <Link className="text-xl font-bold text-white tracking-tighter flex items-center gap-1 font-headline" href="/">
              Lakshan<span className="text-theme-primary">.dev</span>
            </Link>
          </div>
          {/* Center Links */}
          <div className="flex items-center gap-8 font-label tracking-tight text-sm uppercase font-semibold">
            <Link className="text-theme-primary border-b-2 border-theme-primary pb-1 relative group transition-colors" href="#projects">
              Projects
            </Link>
            <Link className="text-zinc-400 hover:text-white transition-colors relative group" href="#skills">
              Skills
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-theme-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_var(--theme-glow)]"></span>
            </Link>
            <Link className="text-zinc-400 hover:text-white transition-colors relative group" href="#experience">
              Experience
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-theme-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_var(--theme-glow)]"></span>
            </Link>
            <Link className="text-zinc-400 hover:text-white transition-colors relative group" href="#about">
              About Me
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-theme-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_var(--theme-glow)]"></span>
            </Link>
          </div>
          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <Link className="px-5 py-2 font-label text-sm uppercase tracking-wider border border-outline-variant/20 text-theme-primary rounded hover:bg-theme-primary/5 hover:text-white transition-colors active:scale-95 duration-200 shadow-[0_0_15px_rgba(221,183,255,0.05)] hover:shadow-[0_0_20px_var(--theme-glow)] flex items-center gap-2" href="#contact">
              Initiate Contact
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>
    </div>
  );
}