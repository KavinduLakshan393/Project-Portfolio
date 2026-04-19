< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Web Portfolio | The Kinetic Terminal</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&amp;family=Manrope:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "surface": "#131313",
            "on-background": "#e5e2e1",
            "surface-container-low": "#1c1b1b",
            "on-secondary-fixed-variant": "#661aa3",
            "secondary-fixed-dim": "#dfb7ff",
            "primary-fixed": "#f0dbff",
            "surface-container-highest": "#353534",
            "on-primary-container": "#400071",
            "on-surface-variant": "#cfc2d6",
            "surface-tint": "#ddb7ff",
            "on-error": "#690005",
            "primary-fixed-dim": "#ddb7ff",
            "error": "#ffb4ab",
            "on-secondary-fixed": "#2d0050",
            "surface-container": "#201f1f",
            "tertiary-container": "#b175ec",
            "secondary-fixed": "#f1dbff",
            "tertiary-fixed": "#f0dbff",
            "on-secondary": "#4a007f",
            "tertiary-fixed-dim": "#ddb8ff",
            "error-container": "#93000a",
            "secondary-container": "#691ea6",
            "on-tertiary-fixed": "#2c0051",
            "inverse-surface": "#e5e2e1",
            "on-primary": "#490080",
            "background": "#131313",
            "on-surface": "#e5e2e1",
            "tertiary": "#ddb8ff",
            "on-secondary-container": "#d5a4ff",
            "on-primary-fixed-variant": "#6900b3",
            "surface-variant": "#353534",
            "primary-container": "#b76dff",
            "surface-container-lowest": "#0e0e0e",
            "surface-container-high": "#2a2a2a",
            "on-primary-fixed": "#2c0051",
            "inverse-primary": "#842bd2",
            "on-tertiary": "#490081",
            "inverse-on-surface": "#313030",
            "secondary": "#dfb7ff",
            "on-error-container": "#ffdad6",
            "outline": "#988d9f",
            "on-tertiary-fixed-variant": "#62259b",
            "surface-bright": "#3a3939",
            "on-tertiary-container": "#400071",
            "outline-variant": "#4d4354",
            "surface-dim": "#131313",
            "primary": "#ddb7ff"
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
            .glow-primary {
                box - shadow: 0 0 15px rgba(221, 183, 255, 0.1);
        }
            .btn-gradient {
                background: linear-gradient(135deg, #ddb7ff, #b76dff);
        }
            .glass-panel {
                background - color: rgba(53, 53, 52, 0.4);
            backdrop-filter: blur(20px);
        }
        </style>
    </head>
        <body class="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen flex flex-col">
            <!-- TopAppBar from JSON -->
            <header class="fixed top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-xl shadow-2xl shadow-purple-500/5 tonal-shift-bg-zinc-900/50">
                <div class="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
                    <div class="text-xl font-bold tracking-tighter text-white font-['Space_Grotesk']">TERMINAL.EXE</div>
                    <nav class="hidden md:flex gap-8">
                        <!-- Assuming ARCHIVE is active for portfolio -->
                        <a class="text-purple-400 border-b-2 border-purple-500 pb-1 font-['Space_Grotesk'] tracking-tight scale-95 active:duration-75" href="#">ARCHIVE</a>
                        <a class="text-zinc-400 hover:text-white transition-colors hover:bg-white/5 transition-all font-['Space_Grotesk'] tracking-tight scale-95 active:duration-75" href="#projects">STACK</a>
                        <a class="text-zinc-400 hover:text-white transition-colors hover:bg-white/5 transition-all font-['Space_Grotesk'] tracking-tight scale-95 active:duration-75" href="#experience">PATH</a>
                        <a class="text-zinc-400 hover:text-white transition-colors hover:bg-white/5 transition-all font-['Space_Grotesk'] tracking-tight scale-95 active:duration-75" href="#contact">INTEL</a>
                    </nav>
                    <div class="flex items-center gap-4">
                        <button class="text-purple-400 hover:text-white transition-colors">
                            <span class="material-symbols-outlined font-variation-settings: 'FILL' 1;">terminal</span>
                        </button>
                        <button class="btn-gradient text-on-primary-fixed font-label text-sm uppercase tracking-widest px-4 py-2 rounded glow-primary hover:brightness-110 transition-all font-bold">CONNECT</button>
                    </div>
                </div>
            </header>
            <main class="flex-grow pt-24">
                <!-- Hero Section -->
                <section class="py-24 px-8 max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8">
                            <h1 class="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-on-background">
                                Building Scalable <span class="text-primary glow-primary inline-block">digital products</span> with logic
                            </h1>
                            <p class="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
                                Full-stack developer focused on engineering high-performance web applications. I architect robust systems that merge clean code with kinetic design.
                            </p>
                            <div class="flex flex-wrap gap-4 pt-4">
                                <a class="btn-gradient text-on-primary-fixed font-label font-bold tracking-widest uppercase px-8 py-4 rounded-lg glow-primary hover:brightness-110 transition-all" href="#projects">
                                    View Projects
                                </a>
                                <a class="border border-outline-variant/50 text-on-surface font-label font-bold tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-surface-variant/20 transition-all" href="#contact">
                                    Initiate Contact
                                </a>
                            </div>
                        </div>
                        <div class="relative h-[600px] rounded-xl overflow-hidden glass-panel border border-outline-variant/20 glow-primary">
                            <!-- Placeholder Image with Gradient Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 mix-blend-overlay"></div>
                            <img alt="Cyberpunk workstation setup" class="object-cover w-full h-full opacity-70" data-alt="high-end minimalist coding workstation with multiple monitors displaying terminal code, dramatic dark lighting with subtle purple neon underglow, cyberpunk aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp-VXqMD1DwiPcZeEScAFh0eOBPLhND6WabrJL1sfqltocN2KPMRXkNMZUUPKiJe7GJTCfFhN83gCAE70Bj2-qFuEFuku9kmy3OAZOPEOqfLEG0-FMqYv93ft8DA8EldDJZqreC-A0zQakbkmfAzUKmsVJ25qhrIaMB0ar8TL1oBDqEk4_FmuaRZuD84-T4_Gl_yZk4EpSdbGehbZ0mNPaLSA1tB3B5EfZCoaOn4c7GAffnhurfrWm1-6DVb4Eaa3tgM1fFM7nRG4" />
                        </div>
                    </div>
                </section>
                <!-- Technical Snapshot Section -->
                <section class="py-24 px-8 max-w-7xl mx-auto bg-surface relative" id="about">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div class="lg:col-span-5 relative h-[500px] rounded-xl overflow-hidden glass-panel border border-outline-variant/20 order-2 lg:order-1">
                            <img alt="Matrix code" class="object-cover w-full h-full opacity-50 grayscale hover:grayscale-0 transition-all duration-500" data-alt="abstract close up of computer screen showing complex green and purple code syntax, dark background, sharp focus, cinematic tech lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC898zyDojOXX_aJcaflu_bLfgTmCIIHixqCYgjGht3Q9lv_b9Yi5mu6Nx8_-jQPa1KX1_d2ITi27olqGh4e15OvlE0A_0fXfBWJ1k3qvSHZ8bm8JHghh-8woy4EdKNHJbH7vc7Yy3z_-m-_8Lk-qoa3QW6khHazmcIMKMq4ACZFYJrU9I_ysiqk1__GrR7hfwzB37yij8PJuVbGghv4QYbYv0clf_ru8782FZLAEX4NXey00Yr9xw6mF5jTcJTUN3282U4NB9ok_A" />
                        </div>
                        <div class="lg:col-span-7 space-y-8 order-1 lg:order-2">
                            <div class="space-y-2">
                                <span class="font-label text-primary text-sm uppercase tracking-[0.1em]">System Status: Online</span>
                                <h2 class="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Technical Snapshot</h2>
                            </div>
                            <p class="font-body text-on-surface-variant text-lg leading-relaxed">
                                Level 3 Computer Science student specializing in scalable web architectures. Bridging the gap between raw backend processing power and seamless frontend kinetic interactions.
                            </p>
                            <blockquote class="border-l-4 border-primary pl-6 py-2 italic font-body text-on-surface text-xl">
                                "My goal is to engineer digital environments that don't just function, but perform with intention and precision."
                            </blockquote>
                        </div>
                    </div>
                </section>
                <!-- Projects Section (Placeholder Grid) -->
                <section class="py-24 px-8 max-w-7xl mx-auto" id="projects">
                    <div class="space-y-12">
                        <div class="space-y-2">
                            <span class="font-label text-primary text-sm uppercase tracking-[0.1em]">Execution Log</span>
                            <h2 class="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Projects</h2>
                        </div>
                        <!-- Project Cards Grid Area -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Simulated ProjectCard components -->
                            <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-all group relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span class="material-symbols-outlined text-4xl text-primary">code</span>
                                </div>
                                <h3 class="font-headline text-2xl font-bold mb-4 text-on-background">Project Alpha</h3>
                                <p class="font-body text-on-surface-variant mb-6">High-frequency trading dashboard using React and WebSockets.</p>
                                <div class="flex gap-2">
                                    <span class="bg-surface-container-highest text-primary font-label text-xs uppercase px-2 py-1 rounded">React</span>
                                    <span class="bg-surface-container-highest text-primary font-label text-xs uppercase px-2 py-1 rounded">Node.js</span>
                                </div>
                            </div>
                            <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-all group relative overflow-hidden mt-0 md:mt-12">
                                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span class="material-symbols-outlined text-4xl text-primary">database</span>
                                </div>
                                <h3 class="font-headline text-2xl font-bold mb-4 text-on-background">System Beta</h3>
                                <p class="font-body text-on-surface-variant mb-6">Distributed microservices architecture for real-time data processing.</p>
                                <div class="flex gap-2">
                                    <span class="bg-surface-container-highest text-primary font-label text-xs uppercase px-2 py-1 rounded">Go</span>
                                    <span class="bg-surface-container-highest text-primary font-label text-xs uppercase px-2 py-1 rounded">Kubernetes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Engineering Stack Section -->
                <section class="py-24 px-8 bg-surface" id="skills">
                    <div class="max-w-7xl mx-auto space-y-12">
                        <div class="space-y-2 text-center md:text-left">
                            <span class="font-label text-primary text-sm uppercase tracking-[0.1em]">Core Dependencies</span>
                            <h2 class="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Engineering Stack</h2>
                        </div>
                        <!-- SkillGrid Placeholder Area -->
                        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <!-- Simulated Skill items -->
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">TypeScript</span>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">React</span>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">Next.js</span>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">Node.js</span>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">PostgreSQL</span>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-lg text-center border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                                <span class="font-label text-on-surface">Docker</span>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Growing Path Section -->
                <section class="py-24 px-8 max-w-7xl mx-auto" id="experience">
                    <div class="space-y-12">
                        <div class="space-y-2">
                            <span class="font-label text-primary text-sm uppercase tracking-[0.1em]">Career Trajectory</span>
                            <h2 class="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Growing Path</h2>
                        </div>
                        <!-- GrowthPath Placeholder Area -->
                        <div class="space-y-8 pl-4 border-l border-outline-variant/30">
                            <!-- Simulated Timeline Item -->
                            <div class="relative pl-8">
                                <div class="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary glow-primary"></div>
                                <div class="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                                    <span class="font-label text-primary text-xs uppercase tracking-widest mb-2 block">2023 - Present</span>
                                    <h3 class="font-headline text-xl font-bold text-on-background mb-1">Junior Software Engineer</h3>
                                    <p class="font-body text-sm text-on-surface-variant mb-4">Tech Corp Inc.</p>
                                    <p class="font-body text-on-surface">Developing and maintaining core features for the main product dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Contact Section -->
                <section class="py-24 px-8 max-w-7xl mx-auto bg-surface-container-low rounded-2xl border border-outline-variant/20 mb-24 relative overflow-hidden" id="contact">
                    <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div class="space-y-8">
                            <div class="space-y-2">
                                <span class="font-label text-primary text-sm uppercase tracking-[0.1em]">Commence Uplink</span>
                                <h2 class="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Ready to Collaborate?</h2>
                            </div>
                            <p class="font-body text-on-surface-variant text-lg">
                                System is currently accepting new connections. Drop a message to initialize a new process.
                            </p>
                            <div class="flex items-center gap-6 pt-4">
                                <a class="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="#">
                                    <span class="material-symbols-outlined text-3xl">code</span>
                                    <span class="font-label uppercase tracking-wider text-sm">GitHub</span>
                                </a>
                                <a class="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="#">
                                    <span class="material-symbols-outlined text-3xl">hub</span>
                                    <span class="font-label uppercase tracking-wider text-sm">LinkedIn</span>
                                </a>
                            </div>
                            <div class="pt-8 border-t border-outline-variant/20 inline-block">
                                <span class="font-label text-sm text-on-surface-variant uppercase tracking-widest block mb-2">Direct Channel</span>
                                <a class="font-headline text-2xl text-primary hover:text-primary-container transition-colors glow-primary" href="mailto:kavinduuni@gmail.com">kavinduuni@gmail.com</a>
                            </div>
                        </div>
                        <!-- ContactForm Placeholder Area -->
                        <div class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
                            <form class="space-y-6">
                                <div>
                                    <input class="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary focus:ring-0 px-4 py-3 font-body text-on-surface placeholder:text-on-surface-variant/50 transition-all rounded-t-lg" placeholder="Designation (Name)" type="text" />
                                </div>
                                <div>
                                    <input class="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary focus:ring-0 px-4 py-3 font-body text-on-surface placeholder:text-on-surface-variant/50 transition-all rounded-t-lg" placeholder="Return Address (Email)" type="email" />
                                </div>
                                <div>
                                    <textarea class="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary focus:ring-0 px-4 py-3 font-body text-on-surface placeholder:text-on-surface-variant/50 transition-all rounded-t-lg resize-none" placeholder="Payload (Message)" rows="4"></textarea>
                                </div>
                                <button class="w-full btn-gradient text-on-primary-fixed font-label font-bold tracking-widest uppercase px-8 py-4 rounded-lg glow-primary hover:brightness-110 transition-all flex justify-center items-center gap-2" type="submit">
                                    Transmit Data <span class="material-symbols-outlined text-sm">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <!-- Footer from JSON -->
            <footer class="bg-zinc-950 w-full py-12 px-8 border-t border-white/5 tonal-shift-from-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="font-['Manrope'] uppercase tracking-[0.1em] text-[10px] text-zinc-500">
                    © 2024 SYSTEM_ARCHITECT. ALL RIGHTS RESERVED.
                </div>
                <nav class="flex gap-6">
                    <a class="font-['Manrope'] uppercase tracking-[0.1em] text-[10px] text-zinc-500 hover:text-purple-300 transition-colors opacity-80 hover:opacity-100" href="#">GITHUB</a>
                    <a class="font-['Manrope'] uppercase tracking-[0.1em] text-[10px] text-zinc-500 hover:text-purple-300 transition-colors opacity-80 hover:opacity-100" href="#">LINKEDIN</a>
                    <a class="font-['Manrope'] uppercase tracking-[0.1em] text-[10px] text-zinc-500 hover:text-purple-300 transition-colors opacity-80 hover:opacity-100" href="#">DOCS</a>
                </nav>
            </footer>
        </body></html>