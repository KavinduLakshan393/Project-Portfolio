< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Screenshot Slider</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "surface": "#131313",
            "on-surface": "#e5e2e1",
            "on-primary-fixed-variant": "#6900b3",
            "tertiary-fixed-dim": "#ddb8ff",
            "on-primary-container": "#400071",
            "inverse-surface": "#e5e2e1",
            "on-background": "#e5e2e1",
            "on-secondary-fixed-variant": "#661aa3",
            "tertiary": "#ddb8ff",
            "inverse-on-surface": "#313030",
            "tertiary-container": "#b175ec",
            "secondary-fixed": "#f1dbff",
            "on-tertiary-fixed-variant": "#62259b",
            "background": "#131313",
            "surface-container-high": "#2a2a2a",
            "surface-container": "#201f1f",
            "surface-bright": "#3a3939",
            "primary-container": "#b76dff",
            "inverse-primary": "#842bd2",
            "secondary-fixed-dim": "#dfb7ff",
            "on-secondary-container": "#d5a4ff",
            "surface-tint": "#ddb7ff",
            "surface-container-highest": "#353534",
            "on-tertiary": "#490081",
            "on-primary-fixed": "#2c0051",
            "tertiary-fixed": "#f0dbff",
            "secondary": "#dfb7ff",
            "surface-dim": "#131313",
            "on-primary": "#490080",
            "outline-variant": "#4d4354",
            "on-tertiary-fixed": "#2c0051",
            "surface-container-low": "#1c1b1b",
            "on-tertiary-container": "#400071",
            "outline": "#988d9f",
            "surface-container-lowest": "#0e0e0e",
            "secondary-container": "#691ea6",
            "on-secondary-fixed": "#2d0050",
            "on-error-container": "#ffdad6",
            "on-error": "#690005",
            "on-surface-variant": "#cfc2d6",
            "primary-fixed-dim": "#ddb7ff",
            "primary": "#ddb7ff",
            "error": "#ffb4ab",
            "error-container": "#93000a",
            "surface-variant": "#353534",
            "primary-fixed": "#f0dbff",
            "on-secondary": "#4a007f"
                    },
            borderRadius: {
                "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
                    },
            fontFamily: {
                "headline": ["Space Grotesk", "sans-serif"],
            "body": ["Manrope", "sans-serif"],
            "label": ["Space Grotesk", "sans-serif"]
                    }
                }
            }
        }
        </script>
        <style>
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
        }
            .scrollbar-hide {
                -ms - overflow - style: none;
            scrollbar-width: none;
        }
        </style>
    </head>
        <body class="bg-surface-container-lowest text-on-surface font-body min-h-screen p-8 md:p-16 antialiased">
            <main class="max-w-7xl mx-auto space-y-24">
                <!-- Component Wrapper: Web Theme -->
                <div class="relative w-full group">
                    <!-- Scroll Track -->
                    <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 -mx-4 pb-8">
                        <!-- Image Card 1 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-primary/30 transition-colors duration-500">
                            <img alt="Software Interface Screen 1" class="w-full h-full object-cover opacity-80" data-alt="High contrast code editor interface with neon syntax highlighting on a dark background, showcasing clean code structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_lMSlRuGwpKBN9J7IG9pkt1ypRbcgfbn2Nao-UJ7jX6FmWQwvXbKSPiCYAtXjY-4d1llQb8sbN3VwywJhAvqqXuxohp0753Wr-IIeRRpuhsh53JelRpk2JkuPDxfTWJi8XOTTHC0PsEGLK9RAAMKI_gDoyoekEumKOTS0FFJ4wKtGewMCfga5iG3EEtfzkj3u2sY7zg21jtN1-noH4BuztmlVqv7n150FmbO5PThmbUk55_RQ4WhOO0gp-4AfrDh1nQc5tnDt_I" />
                            <!-- Theme Overlay Web -->
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(221,183,255,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-primary">SYS.MAIN_DASHBOARD</span>
                                </div>
                            </div>
                        </div>
                        <!-- Image Card 2 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                            <img alt="Software Interface Screen 2" class="w-full h-full object-cover opacity-80" data-alt="Dark mode data analytics dashboard with complex glowing purple charts and graphs on a high tech interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwkowYpcjFvHWown6EMVEeYUTYsBPF7wnVH77XQHZHumzNL3i8fxm4z1hKYeHo99jXUe-hZRjbca110TasJZ4L9yJHtwJfhET6FkUpQzRQfac4Kq4439O2CvhqFZF3K1sBcM8LOPE0om0AvyF0NqZn-aqiB_Bveo4AVKe41CL77D_fMnSMSpzeREWvStsysA_cp3BKypt5-A0Z4UkXpPdkI5jnBcuGjOfdMCyi1oDFafgNZWpTXZ-XkLmX5_u9HFKs4QPJyp2zxYU" />
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(221,183,255,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-primary">SYS.DATA_VIZ_MODULE</span>
                                </div>
                            </div>
                        </div>
                        <!-- Image Card 3 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                            <img alt="Software Interface Screen 3" class="w-full h-full object-cover opacity-80" data-alt="Green matrix style cascading code on a black terminal screen, representing backend server operations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7XdmGa4Dj6cFxslImQ-fdBCppAbb0LXPjGhH_5wzvWf20xhwxkufUPPTZCdmo0yV75FNL9SVucHefn8blxV0ynsma4uuQ3lfRKaWUg8JUPWWYZB6PRVghdHcz1UvwnMnUp9HfxZVALwT-ssPItSNw3TG7HE_sxsGKRIr0plzxO_BgxJ1kTy2f4RsV6IXA1ApTooHMngJVdr9L6qtooCVqTg2pD58MHyxtbLhL9Hg2AYPTK1EwXlfU97i4l7j9Y459RvfXA0dw4Y" />
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(221,183,255,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-primary">SYS.BACKEND_LOGS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Component Wrapper: Game Theme -->
                <div class="relative w-full group">
                    <!-- Scroll Track -->
                    <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 -mx-4 pb-8">
                        <!-- Image Card 1 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-yellow-500/30 transition-colors duration-500">
                            <img alt="Game Environment 1" class="w-full h-full object-cover opacity-80" data-alt="High fidelity e-sports gaming setup with dramatic yellow and orange LED lighting in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrNdA5iG66bClDU4DE9bYeGPm3_4X2qZ3bxwsFTlniHB7ZDFoIGcrHVQAK7NwXelEoUmoNjycF0kpcqM1cx-8jWLyF1cuKVuZpRmbESl7JoZqMIYn-NwKwozSvURUkj8lq5FA9GyWaaiwgXz40xboXdJY3vU99UzKRZuescjo00ICYPKSFs6Ysx72AWW3dV3oiPYA-w1viXd6m8xzBLaKD35lZpCX-ETwBZwrTGoWTHLbZFR0W2J5Juh7ei5aLqNddHaCdyMFP5I" />
                            <!-- Theme Overlay Game -->
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-sm bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-yellow-500 font-bold">ENV_SECTOR_7G</span>
                                </div>
                            </div>
                        </div>
                        <!-- Image Card 2 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                            <img alt="Game Environment 2" class="w-full h-full object-cover opacity-80" data-alt="Abstract futuristic digital landscape with glowing yellow geometric structures and deep space background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqrQMDmt_iI7JUfLnWZfXmk-uJd_xUGNw2J1YXAcGKubzukd7Mfk2qEAy9VmMoq-tdmabcGq0e2WTegkJ8OqvBL7Vg4N8Iz21SHmX3gtfJkAPf1j8jQwl9_ZuN1L9xva9mNnMNvhXyAMbowNMqXnEC01hI6DbShr2pi6QsetMjvqJgTDIkdgt92gdmA2BjDNYwO8Lj6JWUxZz0XQ2ArTsuv-QLhiwkwv_8nIropMjLF3JtUAsPLDhLnSC9ANNwzPxO3pSuB16lnys" />
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-sm bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-yellow-500 font-bold">ENV_NEO_TOKYO_NIGHT</span>
                                </div>
                            </div>
                        </div>
                        <!-- Image Card 3 -->
                        <div class="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                            <img alt="Game Environment 3" class="w-full h-full object-cover opacity-80" data-alt="Gritty industrial cyberpunk alleyway concept art with volumetric fog and harsh yellow neon signs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp3v-okzl79xfmLnFFlGMitDNhCw3B0NvIhTmW6_qyZSeF2_Delga_XhCxf7b5XfppG8XR_J_eUsbXhFJOgApxwmy80YxGSxW3e9LndH_Gg-hWRS0UTJhD6LvRJlnx5GmeV029_HHXEqPcSqha9eQsYQRIazNoJiQonMI0ClihCFuvAIUzR1UJMPXPRV32xz0L9vYz6PKv5vpuKMHOysGrqOrdjCyNietyfUGs_kMXAqReuqcnGCrLLgarjCy8pyl63U_S5ynio0o" />
                            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-sm bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.8)]"></div>
                                    <span class="font-label text-xs uppercase tracking-widest text-yellow-500 font-bold">ENV_LOWER_LEVEL_ACCESS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body></html>