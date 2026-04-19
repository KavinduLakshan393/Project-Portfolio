< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Kinetic Terminal - Portfolio</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&amp;family=Manrope:wght@400;500;600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "error": "#ffb4ab",
            "secondary-container": "#691ea6",
            "outline": "#988d9f",
            "on-tertiary-fixed-variant": "#62259b",
            "on-tertiary": "#490081",
            "surface-tint": "#ddb7ff",
            "on-primary": "#490080",
            "on-primary-fixed-variant": "#6900b3",
            "on-primary-fixed": "#2c0051",
            "inverse-on-surface": "#313030",
            "tertiary-container": "#b175ec",
            "outline-variant": "#4d4354",
            "primary": "#ddb7ff",
            "surface-container-lowest": "#0e0e0e",
            "on-secondary": "#4a007f",
            "tertiary-fixed-dim": "#ddb8ff",
            "surface": "#131313",
            "on-tertiary-fixed": "#2c0051",
            "tertiary": "#ddb8ff",
            "on-tertiary-container": "#400071",
            "on-secondary-fixed-variant": "#661aa3",
            "on-primary-container": "#400071",
            "on-secondary-fixed": "#2d0050",
            "surface-container-high": "#2a2a2a",
            "primary-fixed": "#f0dbff",
            "primary-fixed-dim": "#ddb7ff",
            "tertiary-fixed": "#f0dbff",
            "surface-container-highest": "#353534",
            "primary-container": "#b76dff",
            "on-secondary-container": "#d5a4ff",
            "surface-container": "#201f1f",
            "inverse-primary": "#842bd2",
            "background": "#131313",
            "on-background": "#e5e2e1",
            "secondary-fixed": "#f1dbff",
            "surface-container-low": "#1c1b1b",
            "error-container": "#93000a",
            "surface-variant": "#353534",
            "secondary-fixed-dim": "#dfb7ff",
            "on-surface": "#e5e2e1",
            "inverse-surface": "#e5e2e1",
            "surface-bright": "#3a3939",
            "on-error-container": "#ffdad6",
            "on-error": "#690005",
            "secondary": "#dfb7ff",
            "on-surface-variant": "#cfc2d6",
            "surface-dim": "#131313"
              },
            "borderRadius": {
                "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
              },
            "spacing": { },
            "fontFamily": {
                "headline": [
            "Space Grotesk"
            ],
            "body": [
            "Manrope"
            ],
            "label": [
            "Space Grotesk"
            ]
              }
      },
          },
        }
        </script>
        <style>
            body {
                background - color: theme('colors.surface-container-lowest');
            color: theme('colors.on-surface');
        }
            .kinetic-gradient {
                background: linear-gradient(135deg, theme('colors.primary'), theme('colors.primary-container'));
        }
            .ghost-border {
                border: 1px solid rgba(77, 67, 84, 0.2);
        }
            .ghost-glow {
                border: 1px solid rgba(221, 183, 255, 0.1);
            box-shadow: 0 0 15px rgba(221, 183, 255, 0.1);
        }
        </style>
    </head>
        <body class="min-h-screen flex flex-col font-body bg-surface-container-lowest antialiased">
            <!-- Main Content Canvas -->
            <main class="flex-grow flex flex-col p-8 md:p-16 gap-16 relative z-10 justify-center">
                <div class="w-full max-w-6xl mx-auto space-y-12">
                    <!-- Web Theme Footer Preview -->
                    <div class="p-8 surface-container-low ghost-border rounded-xl">
                        <!-- Web Footer Implementation -->
                        <footer class="bg-[#050505] text-zinc-500 border-t border-primary/20 shadow-[0_-5px_15px_rgba(221,183,255,0.05)] relative w-full font-body overflow-hidden">
                            <!-- Top Bar / Status -->
                            <div class="border-b border-white/5 py-2 px-6 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                    <span class="font-label text-xs tracking-[0.1em] text-primary/80 uppercase">SYSTEM_ONLINE // WAITING_FOR_COMMAND</span>
                                </div>
                            </div>
                            <!-- Main Footer Content -->
                            <div class="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-8">
                                <!-- Left: Identity -->
                                <div class="flex flex-col items-center md:items-start gap-1">
                                    <span class="font-label text-sm tracking-wider text-on-surface">© 2026 Kavindu Lakshan</span>
                                    <span class="font-label text-xs tracking-widest text-zinc-600 uppercase">University of Ruhuna // SC12865</span>
                                </div>
                                <!-- Center: Action -->
                                <div class="flex-shrink-0">
                                    <button class="font-label text-sm tracking-widest text-zinc-500 hover:text-primary transition-colors duration-300 group flex items-center gap-2">
                                        <span class="text-primary/50 group-hover:text-primary transition-colors">&gt;</span> return_to_top()
                                    </button>
                                </div>
                                <!-- Right: Links -->
                                <div class="flex gap-6 items-center">
                                    <a class="text-zinc-500 hover:text-primary transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">code</span>
                                    </a>
                                    <a class="text-zinc-500 hover:text-primary transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">work</span>
                                    </a>
                                    <a class="text-zinc-500 hover:text-primary transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">sports_esports</span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </div>
                    <!-- Game Theme Footer Preview -->
                    <div class="p-8 surface-container-low ghost-border rounded-xl">
                        <!-- Game Footer Implementation (Simulating alternate color injection) -->
                        <footer class="bg-[#050505] text-zinc-500 border-t border-amber-500/30 shadow-[0_-5px_15px_rgba(245,158,11,0.05)] relative w-full font-body overflow-hidden">
                            <!-- Top Bar / Status -->
                            <div class="border-b border-white/5 py-2 px-6 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                                    <span class="font-label text-xs tracking-[0.1em] text-amber-500/80 uppercase">ENGINE_ACTIVE // RENDER_PIPELINE_READY</span>
                                </div>
                            </div>
                            <!-- Main Footer Content -->
                            <div class="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-8">
                                <!-- Left: Identity -->
                                <div class="flex flex-col items-center md:items-start gap-1">
                                    <span class="font-label text-sm tracking-wider text-on-surface">© 2026 Kavindu Lakshan</span>
                                    <span class="font-label text-xs tracking-widest text-zinc-600 uppercase">University of Ruhuna // SC12865</span>
                                </div>
                                <!-- Center: Action -->
                                <div class="flex-shrink-0">
                                    <button class="font-label text-sm tracking-widest text-zinc-500 hover:text-amber-500 transition-colors duration-300 group flex items-center gap-2">
                                        <span class="text-amber-500/50 group-hover:text-amber-500 transition-colors">&gt;</span> jump_to_start()
                                    </button>
                                </div>
                                <!-- Right: Links -->
                                <div class="flex gap-6 items-center">
                                    <a class="text-zinc-500 hover:text-amber-500 transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">code</span>
                                    </a>
                                    <a class="text-zinc-500 hover:text-amber-500 transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">work</span>
                                    </a>
                                    <a class="text-zinc-500 hover:text-amber-500 transition-colors duration-300" href="#">
                                        <span class="material-symbols-outlined text-xl">sports_esports</span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
        </body></html>