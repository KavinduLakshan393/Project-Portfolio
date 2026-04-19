import React from 'react';

export default function Footer() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-12">
            {/* Web Theme Footer Preview */}
            <div className="p-8 bg-surface-container-low border border-outline-variant/20 rounded-xl">
                {/* Web Footer Implementation */}
                <footer className="bg-[#050505] text-zinc-500 border-t border-theme-primary/20 shadow-[0_-5px_15px_var(--theme-glow)] relative w-full font-body overflow-hidden">
                    {/* Top Bar / Status */}
                    <div className="border-b border-white/5 py-2 px-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse"></div>
                            <span className="font-label text-xs tracking-[0.1em] text-theme-primary/80 uppercase">SYSTEM_ONLINE // WAITING_FOR_COMMAND</span>
                        </div>
                    </div>
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-8">
                        {/* Left: Identity */}
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <span className="font-label text-sm tracking-wider text-on-surface">© 2026 Kavindu Lakshan</span>
                            <span className="font-label text-xs tracking-widest text-zinc-600 uppercase">University of Ruhuna // SC12865</span>
                        </div>
                        {/* Center: Action */}
                        <div className="flex-shrink-0">
                            <button className="font-label text-sm tracking-widest text-zinc-500 hover:text-theme-primary transition-colors duration-300 group flex items-center gap-2">
                                <span className="text-theme-primary/50 group-hover:text-theme-primary transition-colors">{'>'}</span> return_to_top()
                            </button>
                        </div>
                        {/* Right: Links */}
                        <div className="flex gap-6 items-center">
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">code</span>
                            </a>
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">work</span>
                            </a>
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">sports_esports</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
            
            {/* Game Theme Footer Preview */}
            <div className="theme-game p-8 bg-surface-container-low border border-outline-variant/20 rounded-xl">
                {/* Game Footer Implementation */}
                <footer className="bg-[#050505] text-zinc-500 border-t border-theme-primary/30 shadow-[0_-5px_15px_var(--theme-glow)] relative w-full font-body overflow-hidden">
                    {/* Top Bar / Status */}
                    <div className="border-b border-white/5 py-2 px-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse"></div>
                            <span className="font-label text-xs tracking-[0.1em] text-theme-primary/80 uppercase">ENGINE_ACTIVE // RENDER_PIPELINE_READY</span>
                        </div>
                    </div>
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-8">
                        {/* Left: Identity */}
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <span className="font-label text-sm tracking-wider text-on-surface">© 2026 Kavindu Lakshan</span>
                            <span className="font-label text-xs tracking-widest text-zinc-600 uppercase">University of Ruhuna // SC12865</span>
                        </div>
                        {/* Center: Action */}
                        <div className="flex-shrink-0">
                            <button className="font-label text-sm tracking-widest text-zinc-500 hover:text-theme-primary transition-colors duration-300 group flex items-center gap-2">
                                <span className="text-theme-primary/50 group-hover:text-theme-primary transition-colors">{'>'}</span> jump_to_start()
                            </button>
                        </div>
                        {/* Right: Links */}
                        <div className="flex gap-6 items-center">
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">code</span>
                            </a>
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">work</span>
                            </a>
                            <a className="text-zinc-500 hover:text-theme-primary transition-colors duration-300" href="#">
                                <span className="material-symbols-outlined text-xl">sports_esports</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}