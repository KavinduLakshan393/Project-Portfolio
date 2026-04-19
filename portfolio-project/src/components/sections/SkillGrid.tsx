import React from 'react';

export default function SkillGrid() {
    return (
        <div className="max-w-7xl mx-auto space-y-16">
            {/* Web Theme Section */}
            <section className="space-y-12">
                <div className="border-b border-surface-container pb-4">
                    <h2 className="font-headline text-2xl font-semibold tracking-tight flex items-center gap-2">
                        <span className="material-symbols-outlined text-theme-primary">terminal</span>
                        THEME: WEB ENGINEERING
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Category Block: Frontend */}
                    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                        <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">desktop_windows</span>
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((skill) => (
                                <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Category Block: Backend */}
                    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                        <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">database</span>
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'].map((skill) => (
                                <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Category Block: Tools */}
                    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                        <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">build</span>
                            Tools & Workflow
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Git', 'Figma', 'Jest', 'Vercel', 'Webpack'].map((skill) => (
                                <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Theme Section */}
            <div className="theme-game">
                <section className="space-y-12">
                    <div className="border-b border-surface-container pb-4">
                        <h2 className="font-headline text-2xl font-semibold tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-theme-primary">sports_esports</span>
                            THEME: GAME DEVELOPMENT
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Category Block: Engines */}
                        <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                            <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">memory</span>
                                Engines
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['Unreal Engine 5', 'Unity 3D', 'Godot'].map((skill) => (
                                    <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Category Block: Languages */}
                        <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                            <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">code</span>
                                Languages
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['C++', 'C#', 'Blueprints (UE)', 'HLSL / GLSL'].map((skill) => (
                                    <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Category Block: Art & Audio */}
                        <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-theme-primary/30 transition-colors">
                            <h3 className="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">palette</span>
                                Pipeline Tools
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['Blender', 'Maya', 'Substance Painter', 'FMOD', 'ZBrush'].map((skill) => (
                                    <div key={skill} className="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-theme-primary/50 hover:text-theme-primary hover:shadow-[0_0_15px_var(--theme-glow)] hover:scale-105 transition-all cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}