< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Universal Project Card Showcase</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&amp;family=Space+Grotesk:wght@400;500;700;900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "primary-fixed": "#f0dbff",
            "on-tertiary-container": "#400071",
            "error": "#ffb4ab",
            "on-surface-variant": "#cfc2d6",
            "on-tertiary": "#490081",
            "on-error": "#690005",
            "background": "#131313",
            "secondary-container": "#691ea6",
            "secondary": "#dfb7ff",
            "surface-container-lowest": "#0e0e0e",
            "outline-variant": "#4d4354",
            "surface": "#131313",
            "surface-container-low": "#1c1b1b",
            "on-secondary": "#4a007f",
            "tertiary-fixed-dim": "#ddb8ff",
            "surface-container-high": "#2a2a2a",
            "secondary-fixed": "#f1dbff",
            "primary": "#ddb7ff",
            "on-error-container": "#ffdad6",
            "on-secondary-container": "#d5a4ff",
            "surface-tint": "#ddb7ff",
            "on-primary-fixed": "#2c0051",
            "outline": "#988d9f",
            "on-secondary-fixed": "#2d0050",
            "on-secondary-fixed-variant": "#661aa3",
            "inverse-surface": "#e5e2e1",
            "on-primary-fixed-variant": "#6900b3",
            "tertiary-container": "#b175ec",
            "secondary-fixed-dim": "#dfb7ff",
            "primary-fixed-dim": "#ddb7ff",
            "on-primary-container": "#400071",
            "on-primary": "#490080",
            "on-tertiary-fixed": "#2c0051",
            "on-tertiary-fixed-variant": "#62259b",
            "tertiary-fixed": "#f0dbff",
            "primary-container": "#b76dff",
            "error-container": "#93000a",
            "inverse-on-surface": "#313030",
            "surface-dim": "#131313",
            "surface-container": "#201f1f",
            "surface-variant": "#353534",
            "surface-bright": "#3a3939",
            "surface-container-highest": "#353534",
            "on-surface": "#e5e2e1",
            "on-background": "#e5e2e1",
            "tertiary": "#ddb8ff",
            "inverse-primary": "#842bd2"
                    },
            "borderRadius": {
                "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
                    },
            "spacing": { },
            "fontFamily": {
                "headline": ["Space Grotesk"],
            "body": ["Manrope"],
            "label": ["Space Grotesk"]
                    }
                },
            },
        }
        </script>
        <style>
            .material-symbols-outlined {
                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        </style>
    </head>
        <body class="bg-surface-container-lowest text-on-background font-body min-h-screen flex items-center justify-center p-8 md:p-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
                <!-- Web Theme Card -->
                <a class="group relative block w-full h-full rounded-xl bg-surface-container-low transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(221,183,255,0.1)] outline outline-1 outline-outline-variant/20 hover:outline-primary/50 overflow-hidden flex flex-col" href="#">
                    <!-- Visual Top Area -->
                    <div class="h-48 w-full bg-gradient-to-br from-surface-container-lowest to-surface relative overflow-hidden flex-shrink-0">
                        <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 mix-blend-overlay"></div>
                        <div class="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20">
                            <span class="material-symbols-outlined text-primary text-2xl" data-icon="language">language</span>
                        </div>
                    </div>
                    <!-- Content Area -->
                    <div class="p-8 flex flex-col flex-grow">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-2xl font-headline font-bold tracking-tight text-on-surface uppercase">Neural Nexus Interface</h3>
                            <span class="text-xs font-label uppercase tracking-[0.1em] text-primary bg-primary/10 px-2 py-1 rounded">Web</span>
                        </div>
                        <p class="font-body text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                            A high-performance dashboard for managing distributed neural networks with real-time data visualization.
                        </p>
                        <!-- Tech Stack Bottom -->
                        <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-outline-variant/10">
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Next.js</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Tailwind</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Three.js</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">WebSockets</span>
                        </div>
                    </div>
                    <!-- Hover Glow Effect -->
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-300 pointer-events-none"></div>
                </a>
                <!-- Game Theme Card -->
                <a class="group relative block w-full h-full rounded-xl bg-surface-container-low transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] outline outline-1 outline-outline-variant/20 hover:outline-yellow-500/50 overflow-hidden flex flex-col" href="#">
                    <!-- Visual Top Area -->
                    <div class="h-48 w-full bg-gradient-to-br from-surface-container-lowest to-surface relative overflow-hidden flex-shrink-0">
                        <!-- Note: Using yellow-500 as specified in prompt, deviating slightly from strictly purple palette for the specific 'game' theme requirement -->
                        <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-50 mix-blend-overlay"></div>
                        <div class="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20">
                            <span class="material-symbols-outlined text-yellow-500 text-2xl" data-icon="sports_esports">sports_esports</span>
                        </div>
                    </div>
                    <!-- Content Area -->
                    <div class="p-8 flex flex-col flex-grow">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-2xl font-headline font-bold tracking-tight text-on-surface uppercase">Void Walker Engine</h3>
                            <span class="text-xs font-label uppercase tracking-[0.1em] text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Game</span>
                        </div>
                        <p class="font-body text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                            A specialized 2D physics engine optimized for fast-paced industrial platformers and collision detection.
                        </p>
                        <!-- Tech Stack Bottom -->
                        <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-outline-variant/10">
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">TypeScript</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Canvas API</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Rust</span>
                            <span class="text-[10px] font-label uppercase tracking-[0.1em] text-on-surface-variant bg-surface-container-highest px-3 py-1.5 rounded-sm">Wasm</span>
                        </div>
                    </div>
                    <!-- Hover Glow Effect -->
                    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-yellow-500/0 group-hover:ring-yellow-500/20 transition-all duration-300 pointer-events-none"></div>
                </a>
            </div>
        </body></html>