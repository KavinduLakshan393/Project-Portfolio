< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Growth Path // Kinetic Terminal</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&amp;family=Manrope:wght@400;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "tertiary-fixed": "#f0dbff",
            "on-tertiary-fixed-variant": "#62259b",
            "primary-container": "#b76dff",
            "on-secondary-fixed": "#2d0050",
            "on-background": "#e5e2e1",
            "inverse-primary": "#842bd2",
            "surface": "#131313",
            "surface-container-high": "#2a2a2a",
            "primary-fixed": "#f0dbff",
            "on-secondary-fixed-variant": "#661aa3",
            "on-primary-fixed": "#2c0051",
            "tertiary": "#ddb8ff",
            "surface-container": "#201f1f",
            "outline-variant": "#4d4354",
            "inverse-on-surface": "#313030",
            "on-tertiary-container": "#400071",
            "tertiary-container": "#b175ec",
            "primary-fixed-dim": "#ddb7ff",
            "secondary-fixed": "#f1dbff",
            "background": "#131313",
            "surface-container-low": "#1c1b1b",
            "surface-container-highest": "#353534",
            "surface-bright": "#3a3939",
            "on-primary": "#490080",
            "on-primary-container": "#400071",
            "surface-variant": "#353534",
            "error": "#ffb4ab",
            "secondary-container": "#691ea6",
            "primary": "#ddb7ff",
            "outline": "#988d9f",
            "on-primary-fixed-variant": "#6900b3",
            "inverse-surface": "#e5e2e1",
            "on-surface": "#e5e2e1",
            "error-container": "#93000a",
            "on-tertiary": "#490081",
            "surface-dim": "#131313",
            "secondary": "#dfb7ff",
            "on-error-container": "#ffdad6",
            "on-tertiary-fixed": "#2c0051",
            "on-secondary-container": "#d5a4ff",
            "tertiary-fixed-dim": "#ddb8ff",
            "surface-container-lowest": "#0e0e0e",
            "surface-tint": "#ddb7ff",
            "secondary-fixed-dim": "#dfb7ff",
            "on-secondary": "#4a007f",
            "on-surface-variant": "#cfc2d6",
            "on-error": "#690005"
                    },
            "borderRadius": {
                "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
                    },
            "fontFamily": {
                "headline": ["Space Grotesk", "sans-serif"],
            "body": ["Manrope", "sans-serif"],
            "label": ["Space Grotesk", "sans-serif"]
                    }
                }
            }
        }
        </script>
        <style>
            .material-symbols-outlined {
                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        </style>
    </head>
        <body class="bg-surface-container-lowest text-on-background font-body min-h-screen flex items-center justify-center p-8 antialiased selection:bg-primary-container selection:text-on-primary-container">
            <!-- Content Canvas -->
            <div class="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                <!-- WEB THEME TIMELINE -->
                <section class="flex flex-col relative group/section">
                    <div class="mb-12 flex items-center justify-between">
                        <h2 class="font-headline text-3xl font-bold text-on-surface tracking-tight uppercase flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">public</span>
                            WEB_OPS
                        </h2>
                        <span class="font-label text-[10px] tracking-[0.1em] uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-DEFAULT">Stable_Branch</span>
                    </div>
                    <div class="relative pl-6 sm:pl-8">
                        <!-- Track Line (Gradient bottom) -->
                        <div class="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent"></div>
                        <!-- Event 1 -->
                        <div class="group relative pb-16 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-125 border-2 border-surface-container-lowest"></div>
                            <div class="bg-surface p-6 sm:p-8 rounded-xl border border-outline-variant/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(221,183,255,0.05)] relative overflow-hidden group/card">
                                <!-- Subtle primary glow on hover -->
                                <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight">KINETIC_TERMINAL V4</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2024</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-purple-400">SENIOR ARCHITECT</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed">
                                    Lead the architectural redesign of the core terminal interface. Implemented robust state management and a highly performant rendering engine utilizing WebGL components for data visualization.
                                </p>
                            </div>
                        </div>
                        <!-- Event 2 -->
                        <div class="group relative pb-16 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-purple-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                            <div class="bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/10 transition-all duration-300 hover:border-outline-variant/30 relative">
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight">DATA_STREAM UI</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2022</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-purple-400">FRONTEND LEAD</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed">
                                    Developed high-frequency trading dashboard interfaces. Focused on micro-second latency updates and complex data grid rendering performance.
                                </p>
                            </div>
                        </div>
                        <!-- Event 3 -->
                        <div class="group relative pb-8 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-purple-500/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:border-purple-500"></div>
                            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-transparent transition-all duration-300 hover:border-outline-variant/20 hover:bg-surface-container-low">
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight opacity-70">CORE_SYSTEMS INIT</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2020</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-purple-400 opacity-70">UI DEVELOPER</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed opacity-70">
                                    Initial deployment of component libraries and foundational design systems for enterprise internal tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- GAME THEME TIMELINE -->
                <section class="flex flex-col relative group/section">
                    <div class="mb-12 flex items-center justify-between">
                        <h2 class="font-headline text-3xl font-bold text-on-surface tracking-tight uppercase flex items-center gap-3">
                            <span class="material-symbols-outlined text-[#eab308]" style="font-variation-settings: 'FILL' 1;">sports_esports</span>
                            ENGINE_DEV
                        </h2>
                        <span class="font-label text-[10px] tracking-[0.1em] uppercase text-[#eab308] border border-[#eab308]/20 bg-[#eab308]/5 px-3 py-1 rounded-DEFAULT">Exp_Branch</span>
                    </div>
                    <div class="relative pl-6 sm:pl-8">
                        <!-- Track Line (Gradient bottom) -->
                        <div class="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-[#eab308]/50 via-[#eab308]/20 to-transparent"></div>
                        <!-- Event 1 -->
                        <div class="group relative pb-16 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300 group-hover:scale-125 border-2 border-surface-container-lowest"></div>
                            <div class="bg-surface p-6 sm:p-8 rounded-xl border border-outline-variant/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#eab308]/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.05)] relative overflow-hidden">
                                <!-- Subtle yellow glow on hover -->
                                <div class="absolute inset-0 bg-gradient-to-br from-[#eab308]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight">VOID_RUNNER PROTOCOL</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2023</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#eab308]">GAMEPLAY ENGINEER</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed">
                                    Designed and implemented core movement mechanics and physics interactions using custom C++ engine modules. Optimized collision detection for high-speed traversal segments.
                                </p>
                            </div>
                        </div>
                        <!-- Event 2 -->
                        <div class="group relative pb-16 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-[#eab308] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#eab308] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                            <div class="bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/10 transition-all duration-300 hover:border-outline-variant/30 relative">
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight">SHADER_FX PIPELINE</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2021</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#eab308]">TECHNICAL ARTIST</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed">
                                    Authored custom HLSL shaders for environmental effects. Bridged the gap between the art team and engineering to establish a performant rendering pipeline for next-gen assets.
                                </p>
                            </div>
                        </div>
                        <!-- Event 3 -->
                        <div class="group relative pb-8 pl-6 sm:pl-10">
                            <!-- Node -->
                            <div class="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-surface-container-high border-2 border-[#eab308]/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#eab308] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] group-hover:border-[#eab308]"></div>
                            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-transparent transition-all duration-300 hover:border-outline-variant/20 hover:bg-surface-container-low">
                                <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                                    <h3 class="font-headline text-xl font-bold text-on-surface tracking-tight opacity-70">INDIE_JAM BUILD</h3>
                                    <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest sm:ml-auto bg-surface-container-highest px-2 py-0.5 rounded-sm">2019</span>
                                </div>
                                <h4 class="font-label text-sm text-on-background uppercase tracking-wider mb-4 transition-colors duration-300 group-hover:text-[#eab308] opacity-70">PROTOTYPE DEV</h4>
                                <p class="font-body text-on-surface-variant text-sm leading-relaxed opacity-70">
                                    Rapid prototyping of mechanics for 48-hour game jams. Focused on quick iteration and functional design over polished assets.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </body></html>