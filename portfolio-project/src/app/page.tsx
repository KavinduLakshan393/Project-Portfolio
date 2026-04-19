import Link from 'next/link';

export default function PortfolioGateway() {
  return (
    <main className="h-screen w-full flex flex-col md:flex-row group relative z-10 overflow-hidden">
      {/* Center Fixed Brand Mark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center gap-2 mix-blend-difference">
        <div className="h-24 w-px bg-on-surface opacity-30"></div>
        <div className="font-label text-xs tracking-[0.2em] uppercase bg-surface-container-lowest px-4 py-2 border border-outline-variant/20 shadow-[0_0_15px_rgba(221,183,255,0.05)] rounded DEFAULT">
          SYSTEM: STANDBY
        </div>
        <div className="h-24 w-px bg-on-surface opacity-30"></div>
      </div>

      {/* Left Panel: Web Engineering */}
      <Link 
        href="/web" 
        className="split-panel web-panel w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-outline-variant/10 bg-surface-container-lowest group/web cursor-pointer text-decoration-none"
      >
        {/* Abstract background texture */}
        <div className="absolute inset-0 kinetic-bg opacity-50 transition-opacity duration-500 group-hover/web:opacity-100"></div>
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-lg">
          <div className="font-label text-[10px] tracking-[0.1em] text-theme-primary/60 mb-4 uppercase">
            DOMAIN 01
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface uppercase leading-none mb-6">
            <span className="text-theme-primary block mb-2 transition-all duration-500 group-hover/web:tracking-wider">WEB</span>
            ENGINEERING
          </h1>
          <p className="font-body text-sm text-on-surface-variant max-w-sm mb-8 opacity-80 group-hover/web:opacity-100 transition-opacity duration-300">
            High-performance interfaces, kinetic typographies, and editorial grid structures designed for modern browser environments.
          </p>
          {/* Enter Portfolio CTA */}
          <div className="cta-button flex items-center gap-2 text-sm font-label uppercase tracking-widest text-theme-primary border-b border-theme-primary/30 pb-1 hover:border-theme-primary transition-all">
            Enter Portfolio <span className="material-symbols-outlined text-base">arrow_forward</span>
          </div>
        </div>
        {/* Technical Grid Overlay */}
        <div className="absolute bottom-4 left-4 font-label text-[9px] tracking-widest text-outline-variant uppercase">
          REACT // NEXT.JS // TAILWIND // WEBGL
        </div>
      </Link>

      {/* Right Panel: Game Architecture */}
      <div className="theme-game w-full md:w-1/2 h-1/2 md:h-full">
        <Link 
          href="/game" 
          className="split-panel game-panel w-full h-full relative overflow-hidden flex items-center justify-center bg-[#050a15] group/game cursor-pointer text-decoration-none"
        >
          {/* Abstract background texture */}
          <div className="absolute inset-0 kinetic-bg opacity-50 transition-opacity duration-500 group-hover/game:opacity-100"></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-lg">
            <div className="font-label text-[10px] tracking-[0.1em] text-theme-primary/60 mb-4 uppercase">
              DOMAIN 02
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface uppercase leading-none mb-6">
              <span className="text-theme-primary block mb-2 transition-all duration-500 group-hover/game:tracking-wider">GAME</span>
              ARCHITECTURE
            </h1>
            <p className="font-body text-sm text-on-surface-variant max-w-sm mb-8 opacity-80 group-hover/game:opacity-100 transition-opacity duration-300">
              Deep tech systems, optimized render pipelines, and interactive logic structures built for real-time engine constraints.
            </p>
            {/* Enter Portfolio CTA */}
            <div className="cta-button flex items-center gap-2 text-sm font-label uppercase tracking-widest text-theme-primary border-b border-theme-primary/30 pb-1 hover:border-theme-primary transition-all">
              Enter Protocol <span className="material-symbols-outlined text-base">terminal</span>
            </div>
          </div>
          {/* Technical Grid Overlay */}
          <div className="absolute bottom-4 right-4 font-label text-[9px] tracking-widest text-outline-variant uppercase text-right">
            C# // UNITY // C++ // SHADERS
          </div>
        </Link>
      </div>
    </main>
  );
}