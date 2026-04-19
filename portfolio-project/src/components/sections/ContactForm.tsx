import React from 'react';

export default function ContactForm() {
    return (
        <main className="w-full max-w-[1400px] flex flex-col xl:flex-row gap-12 justify-center items-start">
            {/* Web Theme Contact Form */}
            <section className="w-full max-w-2xl bg-surface-container-low rounded-xl border border-outline-variant/20 p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Web Identity</h2>
                    <span className="material-symbols-outlined text-theme-primary text-3xl">public</span>
                </div>
                <form className="flex flex-col gap-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Name</label>
                            <input 
                                className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                                placeholder="Enter your designation" 
                                type="text" 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Comm Link</label>
                            <input 
                                className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                                placeholder="email@address.com" 
                                type="email" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Objective</label>
                        <input 
                            className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                            placeholder="Subject of transmission" 
                            type="text" 
                        />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Payload</label>
                        <textarea 
                            className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body resize-none rounded-t-sm" 
                            placeholder="Enter secure message..." 
                            rows={5}
                        ></textarea>
                        <button 
                            className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-label uppercase tracking-widest bg-surface-container text-on-surface-variant px-3 py-1.5 rounded border border-outline-variant/30 hover:bg-surface-container-high hover:text-theme-primary transition-colors" 
                            type="button"
                        >
                            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                            Polish with AI
                        </button>
                    </div>
                    <button 
                        className="mt-4 font-headline font-bold text-theme-on-primary bg-gradient-to-br from-theme-primary to-theme-container px-8 py-4 rounded-lg shadow-[0_0_15px_var(--theme-glow)] hover:shadow-[0_0_25px_var(--theme-glow)] transition-all border border-theme-primary/10 flex justify-center items-center gap-3" 
                        type="submit"
                    >
                        <span>Initiate Contact</span>
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </form>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-theme-primary/10 transition-colors duration-700"></div>
            </section>

            {/* Game Theme Contact Form - Chameleon variant */}
            <div className="theme-game w-full max-w-2xl">
                <section className="bg-surface-container-low rounded-xl border border-outline-variant/20 p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Game Identity</h2>
                        <span className="material-symbols-outlined text-theme-primary text-3xl">sports_esports</span>
                    </div>
                    <form className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Name</label>
                                <input 
                                    className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                                    placeholder="Enter your designation" 
                                    type="text" 
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Comm Link</label>
                                <input 
                                    className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                                    placeholder="email@address.com" 
                                    type="email" 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Objective</label>
                            <input 
                                className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body rounded-t-sm" 
                                placeholder="Subject of transmission" 
                                type="text" 
                            />
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant">Payload</label>
                            <textarea 
                                className="bg-surface-container-lowest text-on-surface border-b border-outline-variant/50 focus:border-theme-primary focus:ring-0 focus:outline-none focus:shadow-[0_4px_10px_-2px_var(--theme-glow)] transition-all duration-300 px-4 py-3 font-body resize-none rounded-t-sm" 
                                placeholder="Enter secure message..." 
                                rows={5}
                            ></textarea>
                            <button 
                                className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-label uppercase tracking-widest bg-surface-container text-on-surface-variant px-3 py-1.5 rounded border border-outline-variant/30 hover:bg-surface-container-high hover:text-theme-primary transition-colors" 
                                type="button"
                            >
                                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                                Polish with AI
                            </button>
                        </div>
                        <button 
                            className="mt-4 font-headline font-bold text-theme-on-primary bg-gradient-to-br from-theme-primary to-theme-container px-8 py-4 rounded-lg shadow-[0_0_15px_var(--theme-glow)] hover:shadow-[0_0_25px_var(--theme-glow)] transition-all border border-theme-primary/10 flex justify-center items-center gap-3" 
                            type="submit"
                        >
                            <span>Initiate Contact</span>
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-theme-primary/10 transition-colors duration-700"></div>
                </section>
            </div>
        </main>
    );
}