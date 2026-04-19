< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Skill Grid Showcase</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "on-error": "#690005",
            "on-surface-variant": "#cfc2d6",
            "surface-tint": "#ddb7ff",
            "secondary-fixed-dim": "#dfb7ff",
            "on-secondary": "#4a007f",
            "tertiary-fixed-dim": "#ddb8ff",
            "surface-container-lowest": "#0e0e0e",
            "on-tertiary-fixed": "#2c0051",
            "on-secondary-container": "#d5a4ff",
            "on-error-container": "#ffdad6",
            "surface-dim": "#131313",
            "secondary": "#dfb7ff",
            "on-tertiary": "#490081",
            "on-surface": "#e5e2e1",
            "inverse-surface": "#e5e2e1",
            "error-container": "#93000a",
            "outline": "#988d9f",
            "secondary-container": "#691ea6",
            "primary": "#ddb7ff",
            "on-primary-fixed-variant": "#6900b3",
            "surface-variant": "#353534",
            "error": "#ffb4ab",
            "surface-container-highest": "#353534",
            "surface-bright": "#3a3939",
            "on-primary-container": "#400071",
            "on-primary": "#490080",
            "secondary-fixed": "#f1dbff",
            "background": "#131313",
            "surface-container-low": "#1c1b1b",
            "on-tertiary-container": "#400071",
            "tertiary-container": "#b175ec",
            "primary-fixed-dim": "#ddb7ff",
            "inverse-on-surface": "#313030",
            "surface-container-high": "#2a2a2a",
            "primary-fixed": "#f0dbff",
            "on-secondary-fixed-variant": "#661aa3",
            "on-primary-fixed": "#2c0051",
            "tertiary": "#ddb8ff",
            "surface-container": "#201f1f",
            "outline-variant": "#4d4354",
            "inverse-primary": "#842bd2",
            "surface": "#131313",
            "primary-container": "#b76dff",
            "tertiary-fixed": "#f0dbff",
            "on-tertiary-fixed-variant": "#62259b",
            "on-secondary-fixed": "#2d0050",
            "on-background": "#e5e2e1"
                    },
            "borderRadius": {
                "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
                    },
            "fontFamily": {
                "headline": ["Space Grotesk"],
            "body": ["Manrope"],
            "label": ["Space Grotesk"]
                    }
                }
            }
        }
        </script>
        <style>
            body {font - family: 'Manrope', sans-serif; background-color: #0e0e0e; color: #e5e2e1; }
            h1, h2, h3, h4, h5, h6, .font-headline {font - family: 'Space Grotesk', sans-serif; }
        </style>
    </head>
        <body class="min-h-screen bg-surface-container-lowest text-on-surface py-20 px-6 font-body">
            <div class="max-w-7xl mx-auto space-y-16">
                <!-- Web Theme Section -->
                <section class="space-y-12">
                    <div class="border-b border-surface-container pb-4">
                        <h2 class="font-headline text-2xl font-semibold tracking-tight flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">terminal</span>
                            THEME: WEB ENGINEERING
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Category Block: Frontend -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">desktop_windows</span>
                                Frontend
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    React
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Next.js
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Tailwind CSS
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    TypeScript
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Framer Motion
                                </div>
                            </div>
                        </div>
                        <!-- Category Block: Backend -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">database</span>
                                Backend
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Node.js
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    PostgreSQL
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Redis
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    GraphQL
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Docker
                                </div>
                            </div>
                        </div>
                        <!-- Category Block: Tools -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">build</span>
                                Tools &amp; Workflow
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Git
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Figma
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Jest
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Vercel
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(221,183,255,0.2)] hover:scale-105 transition-all cursor-default">
                                    Webpack
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Game Theme Section -->
                <section class="space-y-12">
                    <div class="border-b border-surface-container pb-4">
                        <h2 class="font-headline text-2xl font-semibold tracking-tight flex items-center gap-2">
                            <span class="material-symbols-outlined text-yellow-500">sports_esports</span>
                            THEME: GAME DEVELOPMENT
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Category Block: Engines -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-yellow-500/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">memory</span>
                                Engines
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Unreal Engine 5
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Unity 3D
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Godot
                                </div>
                            </div>
                        </div>
                        <!-- Category Block: Languages -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-yellow-500/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">code</span>
                                Languages
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    C++
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    C#
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Blueprints (UE)
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    HLSL / GLSL
                                </div>
                            </div>
                        </div>
                        <!-- Category Block: Art & Audio -->
                        <div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 hover:border-yellow-500/30 transition-colors">
                            <h3 class="font-headline text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">palette</span>
                                Pipeline Tools
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Blender
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Maya
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    Substance Painter
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    FMOD
                                </div>
                                <div class="px-4 py-2 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface border border-outline-variant/30 hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:scale-105 transition-all cursor-default">
                                    ZBrush
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </body></html>