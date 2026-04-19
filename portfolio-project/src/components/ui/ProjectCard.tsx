import React from 'react';

export default function ProjectCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
            {/* Web Theme Card */}
            <a className="group relative block w-full h-full rounded-xl bg-surface-container-low transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_15px_var(--theme-glow)] outline outline-1 outline-outline-variant/20 hover:outline-theme-primary/50 overflow-hidden flex flex-col" href="#">
                {/* Visual Top Area */}
                <div className="h-48 w-full bg-gradient-to-br from-surface-container-lowest to-surface relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/20 to-transparent opacity-50 mix-blend-overlay"></div>
                    <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20">
                        <span className="material-symbols-outlined text-theme-primary text-2xl" data-icon="language">language</span>
                    </div>
                </div>
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface uppercase">Neural Nexus Interface</h3>
                        <span className="text-xs font-label uppercase tracking-[0.1em] text-theme-primary bg-theme-primary/10 px-2 py-1 rounded">Web</span>
                    </div>
                    <p className="font-body text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                        A high-performance dashboard for managing distributed neural networks with real-time data visualization.
                    </p>
                    {/* Tech Stack Bottom */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-outline-variant/10">
                        <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Next.js</span>
                        <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Tailwind</span>
                        <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Three.js</span>
                        <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">WebSockets</span>
                    </div>
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-theme-primary/0 group-hover:ring-theme-primary/20 transition-all duration-300 pointer-events-none"></div>
            </a>
            
            {/* Game Theme Card */}
            <div className="theme-game">
                <a className="group relative block w-full h-full rounded-xl bg-surface-container-low transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_15px_var(--theme-glow)] outline outline-1 outline-outline-variant/20 hover:outline-theme-primary/50 overflow-hidden flex flex-col" href="#">
                    {/* Visual Top Area */}
                    <div className="h-48 w-full bg-gradient-to-br from-surface-container-lowest to-surface relative overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/20 to-transparent opacity-50 mix-blend-overlay"></div>
                        <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20">
                            <span className="material-symbols-outlined text-theme-primary text-2xl" data-icon="sports_esports">sports_esports</span>
                        </div>
                    </div>
                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-headline font-bold tracking-tight text-on-surface uppercase">Void Walker Engine</h3>
                            <span className="text-xs font-label uppercase tracking-[0.1em] text-theme-primary bg-theme-primary/10 px-2 py-1 rounded">Game</span>
                        </div>
                        <p className="font-body text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                            A specialized 2D physics engine optimized for fast-paced industrial platformers and collision detection.
                        </p>
                        {/* Tech Stack Bottom */}
                        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-outline-variant/10">
                            <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">TypeScript</span>
                            <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Canvas API</span>
                            <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Rust</span>
                            <span className="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Wasm</span>
                        </div>
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-theme-primary/0 group-hover:ring-theme-primary/20 transition-all duration-300 pointer-events-none"></div>
                </a>
            </div>
        </div>
    );
}