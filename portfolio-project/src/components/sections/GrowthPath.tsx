import React from 'react';

export default function GrowthPath() {
    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* WEB THEME TIMELINE */}
            <section className="flex flex-col relative group/section">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight uppercase flex items-center gap-3">
                        <span className="material-symbols-outlined text-theme-primary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                        WEB_OPS
                    </h2>
                    <span className="font-label text-[10px] tracking-[0.1em] uppercase text-theme-primary border border-theme-primary/20 bg-theme-primary/5 px-3 py-1 rounded-DEFAULT">Stable_Branch</span>
                </div>
                <div className="relative pl-6 sm:pl-8">
                    {/* Track Line (Gradient bottom) */}
                    <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-theme-primary/50 via-theme-primary/20 to-transparent"></div>
                    {/* Event 1 */}
                    <div className="group relative pb-16 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-theme-primary shadow-[0_0_15px_var(--theme-glow)] transition-all duration-300 group-hover:scale-125 border-2 border-surface-container-lowest"></div>
                        <div className="bg-surface p-6 sm:p-8 rounded-xl border border-outline-variant/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-theme-primary/30 hover:shadow-[0_0_20px_var(--theme-glow)] relative overflow-hidden group/card">
                            {/* Subtle primary glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">KINETIC_TERMINAL V4</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2024</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary">SENIOR ARCHITECT</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                Lead the architectural redesign of the core terminal interface. Implemented robust state management and a highly performant rendering engine utilizing WebGL components for data visualization.
                            </p>
                        </div>
                    </div>
                    {/* Event 2 */}
                    <div className="group relative pb-16 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-theme-primary transition-all duration-300 group-hover:scale-125 group-hover:bg-theme-primary group-hover:shadow-[0_0_15px_var(--theme-glow)]"></div>
                        <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/10 transition-all duration-300 hover:border-outline-variant/30 relative">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">DATA_STREAM UI</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2022</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary">FRONTEND LEAD</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                Developed high-frequency trading dashboard interfaces. Focused on micro-second latency updates and complex data grid rendering performance.
                            </p>
                        </div>
                    </div>
                    {/* Event 3 */}
                    <div className="group relative pb-8 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-theme-primary/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-theme-primary group-hover:shadow-[0_0_15px_var(--theme-glow)] group-hover:border-theme-primary"></div>
                        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-transparent transition-all duration-300 hover:border-outline-variant/20 hover:bg-surface-container-low">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight opacity-70">CORE_SYSTEMS INIT</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2020</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary opacity-70">UI DEVELOPER</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed opacity-70">
                                Initial deployment of component libraries and foundational design systems for enterprise internal tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* GAME THEME TIMELINE */}
            <section className="theme-game flex flex-col relative group/section">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight uppercase flex items-center gap-3">
                        <span className="material-symbols-outlined text-theme-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
                        ENGINE_DEV
                    </h2>
                    <span className="font-label text-[10px] tracking-[0.1em] uppercase text-theme-primary border border-theme-primary/20 bg-theme-primary/5 px-3 py-1 rounded-DEFAULT">Exp_Branch</span>
                </div>
                <div className="relative pl-6 sm:pl-8">
                    {/* Track Line (Gradient bottom) */}
                    <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-theme-primary/50 via-theme-primary/20 to-transparent"></div>
                    {/* Event 1 */}
                    <div className="group relative pb-16 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-theme-primary shadow-[0_0_15px_var(--theme-glow)] transition-all duration-300 group-hover:scale-125 border-2 border-surface-container-lowest"></div>
                        <div className="bg-surface p-6 sm:p-8 rounded-xl border border-outline-variant/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-theme-primary/30 hover:shadow-[0_0_20px_var(--theme-glow)] relative overflow-hidden group/card">
                            {/* Subtle yellow glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">VOID_RUNNER PROTOCOL</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2023</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary">GAMEPLAY ENGINEER</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                Designed and implemented core movement mechanics and physics interactions using custom C++ engine modules. Optimized collision detection for high-speed traversal segments.
                            </p>
                        </div>
                    </div>
                    {/* Event 2 */}
                    <div className="group relative pb-16 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-theme-primary transition-all duration-300 group-hover:scale-125 group-hover:bg-theme-primary group-hover:shadow-[0_0_15px_var(--theme-glow)]"></div>
                        <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/10 transition-all duration-300 hover:border-outline-variant/30 relative">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">SHADER_FX PIPELINE</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2021</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary">TECHNICAL ARTIST</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                                Authored custom HLSL shaders for environmental effects. Bridged the gap between the art team and engineering to establish a performant rendering pipeline for next-gen assets.
                            </p>
                        </div>
                    </div>
                    {/* Event 3 */}
                    <div className="group relative pb-8 pl-6 sm:pl-10">
                        {/* Node */}
                        <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-theme-primary/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-theme-primary group-hover:shadow-[0_0_15px_var(--theme-glow)] group-hover:border-theme-primary"></div>
                        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-transparent transition-all duration-300 hover:border-outline-variant/20 hover:bg-surface-container-low">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight opacity-70">INDIE_JAM BUILD</h3>
                                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2019</span>
                            </div>
                            <h4 className="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-theme-primary opacity-70">PROTOTYPE DEV</h4>
                            <p className="font-body text-on-surface-variant text-sm leading-relaxed opacity-70">
                                Rapid prototyping of mechanics for 48-hour game jams. Focused on quick iteration and functional design over polished assets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}