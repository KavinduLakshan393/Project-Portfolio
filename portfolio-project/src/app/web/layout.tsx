< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Lakshan.dev - Developer Portfolio</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "on-tertiary": "#490081",
            "on-secondary": "#4a007f",
            "on-error-container": "#ffdad6",
            "surface-container": "#201f1f",
            "primary": "#ddb7ff",
            "primary-fixed-dim": "#ddb7ff",
            "inverse-on-surface": "#313030",
            "secondary": "#dfb7ff",
            "tertiary-fixed-dim": "#ddb8ff",
            "primary-fixed": "#f0dbff",
            "on-secondary-fixed": "#2d0050",
            "primary-container": "#b76dff",
            "on-secondary-fixed-variant": "#661aa3",
            "secondary-container": "#691ea6",
            "on-tertiary-fixed-variant": "#62259b",
            "on-tertiary-fixed": "#2c0051",
            "tertiary-container": "#b175ec",
            "tertiary-fixed": "#f0dbff",
            "surface": "#131313",
            "on-primary": "#490080",
            "on-background": "#e5e2e1",
            "on-primary-fixed": "#2c0051",
            "secondary-fixed": "#f1dbff",
            "surface-tint": "#ddb7ff",
            "on-surface": "#e5e2e1",
            "error-container": "#93000a",
            "on-error": "#690005",
            "surface-container-highest": "#353534",
            "surface-variant": "#353534",
            "outline-variant": "#4d4354",
            "inverse-surface": "#e5e2e1",
            "on-surface-variant": "#cfc2d6",
            "surface-container-low": "#1c1b1b",
            "secondary-fixed-dim": "#dfb7ff",
            "inverse-primary": "#842bd2",
            "on-primary-container": "#400071",
            "tertiary": "#ddb8ff",
            "outline": "#988d9f",
            "on-secondary-container": "#d5a4ff",
            "on-tertiary-container": "#400071",
            "on-primary-fixed-variant": "#6900b3",
            "error": "#ffb4ab",
            "surface-bright": "#3a3939",
            "background": "#131313",
            "surface-container-lowest": "#0e0e0e",
            "surface-container-high": "#2a2a2a",
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
                background - color: #0e0e0e; /* surface-container-lowest */
            color: #e5e2e1; /* on-background */
        }
        </style>
    </head>
        <body class="font-body antialiased min-h-screen">
            <!-- TopNavBar -->
            <nav class="fixed top-0 w-full z-50 bg-zinc-900/40 backdrop-blur-xl border-b border-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)] hidden md:block">
                <div class="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
                    <!-- Brand -->
                    <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_rgba(221,183,255,0.5)]"></div>
                        <a class="text-xl font-bold text-white tracking-tighter flex items-center gap-1 font-headline" href="#">
                            Lakshan<span class="text-primary">.dev</span>
                        </a>
                    </div>
                    <!-- Center Links -->
                    <div class="flex items-center gap-8 font-['Space_Grotesk'] tracking-tight text-sm uppercase font-semibold">
                        <!-- Assuming "Projects" is the active page for this example to show the active state -->
                        <a class="text-purple-400 border-b-2 border-purple-500 pb-1 relative group transition-colors" href="#projects">
                            Projects
                        </a>
                        <a class="text-zinc-400 hover:text-white transition-colors relative group" href="#skills">
                            Skills
                            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_rgba(221,183,255,0.8)]"></span>
                        </a>
                        <a class="text-zinc-400 hover:text-white transition-colors relative group" href="#experience">
                            Experience
                            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_rgba(221,183,255,0.8)]"></span>
                        </a>
                        <a class="text-zinc-400 hover:text-white transition-colors relative group" href="#about">
                            About Me
                            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_rgba(221,183,255,0.8)]"></span>
                        </a>
                    </div>
                    <!-- Right CTA -->
                    <div class="flex items-center gap-4">
                        <a class="px-5 py-2 font-label text-sm uppercase tracking-wider border border-outline-variant/20 text-primary rounded hover:bg-primary/5 hover:text-primary-fixed transition-colors active:scale-95 duration-200 shadow-[0_0_15px_rgba(221,183,255,0.05)] hover:shadow-[0_0_20px_rgba(221,183,255,0.15)] flex items-center gap-2" href="#contact">
                            Initiate Contact
                        </a>
                    </div>
                </div>
            </nav>
            <!-- Mobile TopNavBar (Simplified) -->
            <nav class="fixed top-0 w-full z-50 bg-zinc-900/40 backdrop-blur-xl border-b border-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)] md:hidden">
                <div class="flex justify-between items-center w-full px-4 py-4">
                    <!-- Brand -->
                    <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_rgba(221,183,255,0.5)]"></div>
                        <a class="text-lg font-bold text-white tracking-tighter flex items-center gap-1 font-headline" href="#">
                            Lakshan<span class="text-primary">.dev</span>
                        </a>
                    </div>
                    <div class="flex items-center gap-3">
                        <a class="px-3 py-1.5 font-label text-xs uppercase tracking-wider border border-outline-variant/20 text-primary rounded hover:bg-primary/5 hover:text-primary-fixed transition-colors active:scale-95 duration-200" href="#contact">
                            Contact
                        </a>
                        <button aria-label="Menu" class="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 flex items-center justify-center p-1">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">menu</span>
                        </button>
                    </div>
                </div>
            </nav>
            <!-- Content padding to offset fixed nav -->
        </body></html>