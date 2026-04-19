import React from 'react';

export default function ScreenshotSlider() {
    return (
        <div className="max-w-7xl mx-auto space-y-24">
            {/* Component Wrapper: Web Theme */}
            <div className="relative w-full group">
                {/* Scroll Track */}
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 -mx-4 pb-8">
                    {/* Image Card 1 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-theme-primary/30 transition-colors duration-500">
                        <img alt="Software Interface Screen 1" className="w-full h-full object-cover opacity-80" data-alt="High contrast code editor interface with neon syntax highlighting on a dark background, showcasing clean code structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_lMSlRuGwpKBN9J7IG9pkt1ypRbcgfbn2Nao-UJ7jX6FmWQwvXbKSPiCYAtXjY-4d1llQb8sbN3VwywJhAvqqXuxohp0753Wr-IIeRRpuhsh53JelRpk2JkuPDxfTWJi8XOTTHC0PsEGLK9RAAMKI_gDoyoekEumKOTS0FFJ4wKtGewMCfga5iG3EEtfzkj3u2sY7zg21jtN1-noH4BuztmlVqv7n150FmbO5PThmbUk55_RQ4WhOO0gp-4AfrDh1nQc5tnDt_I" />
                        {/* Theme Overlay Web */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-theme-primary shadow-[0_0_8px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary">SYS.MAIN_DASHBOARD</span>
                            </div>
                        </div>
                    </div>
                    {/* Image Card 2 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <img alt="Software Interface Screen 2" className="w-full h-full object-cover opacity-80" data-alt="Dark mode data analytics dashboard with complex glowing purple charts and graphs on a high tech interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwkowYpcjFvHWown6EMVEeYUTYsBPF7wnVH77XQHZHumzNL3i8fxm4z1hKYeHo99jXUe-hZRjbca110TasJZ4L9yJHtwJfhET6FkUpQzRQfac4Kq4439O2CvhqFZF3K1sBcM8LOPE0om0AvyF0NqZn-aqiB_Bveo4AVKe41CL77D_fMnSMSpzeREWvStsysA_cp3BKypt5-A0Z4UkXpPdkI5jnBcuGjOfdMCyi1oDFafgNZWpTXZ-XkLmX5_u9HFKs4QPJyp2zxYU" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-theme-primary shadow-[0_0_8px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary">SYS.DATA_VIZ_MODULE</span>
                            </div>
                        </div>
                    </div>
                    {/* Image Card 3 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <img alt="Software Interface Screen 3" className="w-full h-full object-cover opacity-80" data-alt="Green matrix style cascading code on a black terminal screen, representing backend server operations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7XdmGa4Dj6cFxslImQ-fdBCppAbb0LXPjGhH_5wzvWf20xhwxkufUPPTZCdmo0yV75FNL9SVucHefn8blxV0ynsma4uuQ3lfRKaWUg8JUPWWYZB6PRVghdHcz1UvwnMnUp9HfxZVALwT-ssPItSNw3TG7HE_sxsGKRIr0plzxO_BgxJ1kTy2f4RsV6IXA1ApTooHMngJVdr9L6qtooCVqTg2pD58MHyxtbLhL9Hg2AYPTK1EwXlfU97i4l7j9Y459RvfXA0dw4Y" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-theme-primary shadow-[0_0_8px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary">SYS.BACKEND_LOGS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Component Wrapper: Game Theme */}
            <div className="theme-game relative w-full group">
                {/* Scroll Track */}
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 -mx-4 pb-8">
                    {/* Image Card 1 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-theme-primary/30 transition-colors duration-500">
                        <img alt="Game Environment 1" className="w-full h-full object-cover opacity-80" data-alt="High fidelity e-sports gaming setup with dramatic yellow and orange LED lighting in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrNdA5iG66bClDU4DE9bYeGPm3_4X2qZ3bxwsFTlniHB7ZDFoIGcrHVQAK7NwXelEoUmoNjycF0kpcqM1cx-8jWLyF1cuKVuZpRmbESl7JoZqMIYn-NwKwozSvURUkj8lq5FA9GyWaaiwgXz40xboXdJY3vU99UzKRZuescjo00ICYPKSFs6Ysx72AWW3dV3oiPYA-w1viXd6m8xzBLaKD35lZpCX-ETwBZwrTGoWTHLbZFR0W2J5Juh7ei5aLqNddHaCdyMFP5I" />
                        {/* Theme Overlay Game */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-sm bg-theme-primary shadow-[0_0_12px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary font-bold">ENV_SECTOR_7G</span>
                            </div>
                        </div>
                    </div>
                    {/* Image Card 2 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <img alt="Game Environment 2" className="w-full h-full object-cover opacity-80" data-alt="Abstract futuristic digital landscape with glowing yellow geometric structures and deep space background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqrQMDmt_iI7JUfLnWZfXmk-uJd_xUGNw2J1YXAcGKubzukd7Mfk2qEAy9VmMoq-tdmabcGq0e2WTegkJ8OqvBL7Vg4N8Iz21SHmX3gtfJkAPf1j8jQwl9_ZuN1L9xva9mNnMNvhXyAMbowNMqXnEC01hI6DbShr2pi6QsetMjvqJgTDIkdgt92gdmA2BjDNYwO8Lj6JWUxZz0XQ2ArTsuv-QLhiwkwv_8nIropMjLF3JtUAsPLDhLnSC9ANNwzPxO3pSuB16lnys" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-sm bg-theme-primary shadow-[0_0_12px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary font-bold">ENV_NEO_TOKYO_NIGHT</span>
                            </div>
                        </div>
                    </div>
                    {/* Image Card 3 */}
                    <div className="snap-center shrink-0 w-[85%] md:w-[60%] aspect-video bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <img alt="Game Environment 3" className="w-full h-full object-cover opacity-80" data-alt="Gritty industrial cyberpunk alleyway concept art with volumetric fog and harsh yellow neon signs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp3v-okzl79xfmLnFFlGMitDNhCw3B0NvIhTmW6_qyZSeF2_Delga_XhCxf7b5XfppG8XR_J_eUsbXhFJOgApxwmy80YxGSxW3e9LndH_Gg-hWRS0UTJhD6LvRJlnx5GmeV029_HHXEqPcSqha9eQsYQRIazNoJiQonMI0ClihCFuvAIUzR1UJMPXPRV32xz0L9vYz6PKv5vpuKMHOysGrqOrdjCyNietyfUGs_kMXAqReuqcnGCrLLgarjCy8pyl63U_S5ynio0o" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-sm bg-theme-primary shadow-[0_0_12px_var(--theme-glow)]"></div>
                                <span className="font-label text-xs uppercase tracking-widest text-theme-primary font-bold">ENV_LOWER_LEVEL_ACCESS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}