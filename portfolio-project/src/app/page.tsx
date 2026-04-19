// src/app/page.tsx for landing page

< !DOCTYPE html >

  <html class="dark" lang="en"><head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>K. LAKSHAN // SC12865</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
      theme: {
        extend: {
        "colors": {
        "secondary": "#dfb7ff",
      "error-container": "#93000a",
      "on-primary-container": "#400071",
      "primary-fixed-dim": "#ddb7ff",
      "on-surface": "#e5e2e1",
      "inverse-surface": "#e5e2e1",
      "surface-bright": "#3a3939",
      "surface-tint": "#ddb7ff",
      "on-secondary-fixed-variant": "#661aa3",
      "tertiary-container": "#b175ec",
      "on-primary-fixed": "#2c0051",
      "surface": "#131313",
      "outline": "#988d9f",
      "outline-variant": "#4d4354",
      "surface-container-highest": "#353534",
      "secondary-container": "#691ea6",
      "on-background": "#e5e2e1",
      "error": "#ffb4ab",
      "on-secondary-container": "#d5a4ff",
      "on-secondary-fixed": "#2d0050",
      "secondary-fixed": "#f1dbff",
      "surface-container-lowest": "#0e0e0e",
      "secondary-fixed-dim": "#dfb7ff",
      "tertiary-fixed": "#f0dbff",
      "on-error": "#690005",
      "on-tertiary-container": "#400071",
      "on-primary": "#490080",
      "tertiary-fixed-dim": "#ddb8ff",
      "primary-container": "#b76dff",
      "background": "#131313",
      "tertiary": "#ddb8ff",
      "surface-container": "#201f1f",
      "on-tertiary-fixed-variant": "#62259b",
      "inverse-primary": "#842bd2",
      "on-surface-variant": "#cfc2d6",
      "inverse-on-surface": "#313030",
      "on-secondary": "#4a007f",
      "primary-fixed": "#f0dbff",
      "on-primary-fixed-variant": "#6900b3",
      "surface-dim": "#131313",
      "on-error-container": "#ffdad6",
      "on-tertiary-fixed": "#2c0051",
      "surface-container-low": "#1c1b1b",
      "surface-variant": "#353534",
      "surface-container-high": "#2a2a2a",
      "on-tertiary": "#490081",
      "primary": "#ddb7ff"
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
      .split-panel {
        transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

      .web-panel:hover {
        width: 60%;
        }

      .game-panel:hover {
        width: 60%;
        }

      .group:hover .web-panel:not(:hover) {
        width: 40%;
        }

      .group:hover .game-panel:not(:hover) {
        width: 40%;
        }

      .cta-button {
        opacity: 0;
      transform: translateY(20px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

      .split-panel:hover .cta-button {
        opacity: 1;
      transform: translateY(0);
        }

      .kinetic-bg {
        background - image: radial-gradient(circle at 50% 50%, rgba(221, 183, 255, 0.03) 0%, transparent 70%);
        }
    </style>
  </head>
    <body class="bg-surface-container-lowest text-on-surface font-body overflow-hidden h-screen w-full m-0 p-0 selection:bg-primary-container selection:text-on-primary-container">
      <!-- Top Navigation (JSON) -->
      <!-- Main Content Container -->
      <main class="h-full w-full flex flex-col md:flex-row group relative z-10">
        <!-- Center Fixed Brand Mark -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center gap-2 mix-blend-difference">
          <div class="h-24 w-px bg-on-surface opacity-30"></div>
          <div class="font-label text-xs tracking-[0.2em] uppercase bg-surface-container-lowest px-4 py-2 border border-outline-variant/20 shadow-[0_0_15px_rgba(221,183,255,0.05)] rounded DEFAULT" style="">
            SYSTEM: STANDBY
          </div>
          <div class="h-24 w-px bg-on-surface opacity-30"></div>
        </div>
        <!-- Left Panel: Web Engineering -->
        <a class="split-panel web-panel w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-outline-variant/10 bg-surface-container-lowest group/web cursor-pointer text-decoration-none" href="/web" style="">
          <!-- Abstract background texture -->
          <div class="absolute inset-0 kinetic-bg opacity-50 transition-opacity duration-500 group-hover/web:opacity-100"></div>
          <div class="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-lg">
            <div class="font-label text-[10px] tracking-[0.1em] text-primary/60 mb-4 uppercase" style="">
              DOMAIN 01
            </div>
            <h1 class="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface uppercase leading-none mb-6" style="">
              <span class="text-primary block mb-2 transition-all duration-500 group-hover/web:tracking-wider" style="">WEB</span>
              ENGINEERING
            </h1>
            <p class="font-body text-sm text-on-surface-variant max-w-sm mb-8 opacity-80 group-hover/web:opacity-100 transition-opacity duration-300" style="">
              High-performance interfaces, kinetic typographies, and editorial grid structures designed for modern browser environments.
            </p>
            <!-- Enter Portfolio CTA -->
            <div class="cta-button flex items-center gap-2 text-sm font-label uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all" style="">
              Enter Portfolio <span class="material-symbols-outlined text-base" style="">arrow_forward</span>
            </div>
          </div>
          <!-- Technical Grid Overlay -->
          <div class="absolute bottom-4 left-4 font-label text-[9px] tracking-widest text-outline-variant uppercase" style="">
            REACT // NEXT.JS // TAILWIND // WEBGL
          </div>
        </a>
        <!-- Right Panel: Game Architecture -->
        <a class="split-panel game-panel w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center bg-[#050a15] group/game cursor-pointer text-decoration-none" href="/game" style="">
          <!-- Abstract background texture -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)] opacity-50 transition-opacity duration-500 group-hover/game:opacity-100"></div>
          <div class="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-lg">
            <div class="font-label text-[10px] tracking-[0.1em] text-[#eab308]/60 mb-4 uppercase" style="">
              DOMAIN 02
            </div>
            <h1 class="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface uppercase leading-none mb-6" style="">
              <span class="text-[#eab308] block mb-2 transition-all duration-500 group-hover/game:tracking-wider" style="">GAME</span>
              ARCHITECTURE
            </h1>
            <p class="font-body text-sm text-on-surface-variant max-w-sm mb-8 opacity-80 group-hover/game:opacity-100 transition-opacity duration-300" style="">
              Deep tech systems, optimized render pipelines, and interactive logic structures built for real-time engine constraints.
            </p>
            <!-- Enter Portfolio CTA -->
            <div class="cta-button flex items-center gap-2 text-sm font-label uppercase tracking-widest text-[#eab308] border-b border-[#eab308]/30 pb-1 hover:border-[#eab308] transition-all" style="">
              Enter Protocol <span class="material-symbols-outlined text-base" style="">terminal</span>
            </div>
          </div>
          <!-- Technical Grid Overlay -->
          <div class="absolute bottom-4 right-4 font-label text-[9px] tracking-widest text-outline-variant uppercase text-right" style="">
            C# // UNITY // C++ // SHADERS
          </div>
        </a>
      </main>
      <!-- Footer (JSON) -->
    </body></html>