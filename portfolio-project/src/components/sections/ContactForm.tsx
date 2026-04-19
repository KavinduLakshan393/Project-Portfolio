< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Contact Form Component</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&amp;family=Manrope:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "surface-container": "#201f1f",
            "on-secondary": "#4a007f",
            "surface-variant": "#353534",
            "outline": "#988d9f",
            "background": "#131313",
            "on-secondary-fixed": "#2d0050",
            "on-surface": "#e5e2e1",
            "on-secondary-container": "#d5a4ff",
            "on-tertiary-container": "#400071",
            "secondary": "#dfb7ff",
            "on-primary-fixed-variant": "#6900b3",
            "on-tertiary": "#490081",
            "tertiary-fixed-dim": "#ddb8ff",
            "on-primary": "#490080",
            "error": "#ffb4ab",
            "tertiary": "#ddb8ff",
            "inverse-primary": "#842bd2",
            "surface-container-high": "#2a2a2a",
            "inverse-on-surface": "#313030",
            "on-error": "#690005",
            "surface-container-low": "#1c1b1b",
            "on-primary-container": "#400071",
            "primary-fixed-dim": "#ddb7ff",
            "primary-fixed": "#f0dbff",
            "on-tertiary-fixed-variant": "#62259b",
            "secondary-fixed-dim": "#dfb7ff",
            "secondary-container": "#691ea6",
            "on-primary-fixed": "#2c0051",
            "surface-tint": "#ddb7ff",
            "primary-container": "#b76dff",
            "outline-variant": "#4d4354",
            "surface-container-highest": "#353534",
            "error-container": "#93000a",
            "on-secondary-fixed-variant": "#661aa3",
            "inverse-surface": "#e5e2e1",
            "on-surface-variant": "#cfc2d6",
            "on-error-container": "#ffdad6",
            "surface": "#131313",
            "primary": "#ddb7ff",
            "tertiary-fixed": "#f0dbff",
            "surface-container-lowest": "#0e0e0e",
            "tertiary-container": "#b175ec",
            "on-tertiary-fixed": "#2c0051",
            "surface-dim": "#131313",
            "surface-bright": "#3a3939",
            "secondary-fixed": "#f1dbff",
            "on-background": "#e5e2e1"
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
            .material-symbols-outlined {
                font - family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        </style>
    </head>
        <body class="bg-background text-on-surface font-body min-h-screen flex items-center justify-center p-8">
            <main class="w-full max-w-[1400px] flex flex-col xl:flex-row gap-12 justify-center items-start">
                <!-- Web Theme Contact Form -->
                <section class="w-full max-w-2xl bg-surface-container-low rounded-xl border border-outline-variant/20 p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
                    <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                        <h2 class="font-headline text-3xl font-bold tracking-tight text-on-surface">Web Identity</h2>
                        <span class="material-symbols-outlined text-primary text-3xl">public</span>
                    </div>
                    <form class="flex flex-col gap-6 relative z-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-2">
                                <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Name</label>
                                <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(221,183,255,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="Enter your designation" type="text" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Comm Link</label>
                                <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(221,183,255,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="email@address.com" type="email" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Objective</label>
                            <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(221,183,255,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="Subject of transmission" type="text" />
                        </div>
                        <div class="flex flex-col gap-2 relative">
                            <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Payload</label>
                            <textarea class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(221,183,255,0.2)] transition-all duration-300 px-4 py-3 font-body resize-none rounded-t-sm" placeholder="Enter secure message..." rows="5"></textarea>
                            <button class="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-label uppercase tracking-widest bg-surface-container text-on-surface-variant px-3 py-1.5 rounded border border-outline-variant/30 hover:bg-surface-container-high hover:text-primary transition-colors" type="button">
                                <span class="material-symbols-outlined text-[16px]">auto_awesome</span>
                                Polish with AI
                            </button>
                        </div>
                        <button class="mt-4 font-headline font-bold text-on-primary-fixed bg-gradient-to-br from-primary to-primary-container px-8 py-4 rounded-lg shadow-[0_0_15px_rgba(221,183,255,0.1)] hover:shadow-[0_0_25px_rgba(221,183,255,0.3)] transition-all border border-primary/10 flex justify-center items-center gap-3" type="submit">
                            <span>Initiate Contact</span>
                            <span class="material-symbols-outlined">send</span>
                        </button>
                    </form>
                    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
                </section>
                <!-- Game Theme Contact Form -->
                <section class="w-full max-w-2xl bg-surface-container-low rounded-xl border border-outline-variant/20 p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
                    <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                        <h2 class="font-headline text-3xl font-bold tracking-tight text-on-surface">Game Identity</h2>
                        <span class="material-symbols-outlined text-yellow-400 text-3xl">sports_esports</span>
                    </div>
                    <form class="flex flex-col gap-6 relative z-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-2">
                                <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Name</label>
                                <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-yellow-400 focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(250,204,21,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="Enter your designation" type="text" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Comm Link</label>
                                <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-yellow-400 focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(250,204,21,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="email@address.com" type="email" />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Objective</label>
                            <input class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-yellow-400 focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(250,204,21,0.2)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" placeholder="Subject of transmission" type="text" />
                        </div>
                        <div class="flex flex-col gap-2 relative">
                            <label class="font-label text-sm uppercase tracking-widest text-on-surface-variant">Payload</label>
                            <textarea class="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-yellow-400 focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_rgba(250,204,21,0.2)] transition-all duration-300 px-4 py-3 font-body resize-none rounded-t-sm" placeholder="Enter secure message..." rows="5"></textarea>
                            <button class="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-label uppercase tracking-widest bg-surface-container text-on-surface-variant px-3 py-1.5 rounded border border-outline-variant/30 hover:bg-surface-container-high hover:text-yellow-400 transition-colors" type="button">
                                <span class="material-symbols-outlined text-[16px]">auto_awesome</span>
                                Polish with AI
                            </button>
                        </div>
                        <button class="mt-4 font-headline font-bold text-zinc-950 bg-gradient-to-br from-yellow-400 to-yellow-500 px-8 py-4 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-all border border-yellow-400/10 flex justify-center items-center gap-3" type="submit">
                            <span>Initiate Contact</span>
                            <span class="material-symbols-outlined">send</span>
                        </button>
                    </form>
                    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-yellow-400/10 transition-colors duration-700"></div>
                </section>
            </main>
        </body></html>