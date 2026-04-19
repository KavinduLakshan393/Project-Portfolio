import React from 'react';
import SkillGrid from '@/components/sections/SkillGrid';
import ContactForm from '@/components/sections/ContactForm';

export default function GamePortfolio() {
    return (
        <div className="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen">
            <main className="flex-grow pt-8">
                {/* Hero Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-white uppercase">
                                Crafting <span className="text-theme-primary transition-all duration-300 shadow-[0_0_15px_var(--theme-glow)] inline-block">Immersive Worlds</span> with Precision
                            </h1>
                            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
                                Game architect specializing in deep-tech systems, real-time optimization, and high-fidelity render pipelines.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a className="bg-gradient-to-br from-theme-primary to-theme-container text-theme-on-primary font-label font-bold tracking-widest uppercase px-8 py-4 rounded-none shadow-[0_0_15px_var(--theme-glow)] hover:brightness-110 transition-all" href="#projects">
                                    Load Projects
                                </a>
                                <a className="border border-theme-primary/30 text-theme-primary font-label font-bold tracking-widest uppercase px-8 py-4 rounded-none hover:bg-theme-primary/5 transition-all" href="#contact">
                                    Initiate Comm
                                </a>
                            </div>
                        </div>
                        <div className="relative h-[600px] border border-theme-primary/20 shadow-[0_0_20px_var(--theme-glow)] bg-slate-900 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--theme-glow)_0%,transparent_70%)] z-10"></div>
                            <img alt="Game engine development view" className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC898zyDojOXX_aJcaflu_bLfgTmCIIHixqCYgjGht3Q9lv_b9Yi5mu6Nx8_-jQPa1KX1_d2ITi27olqGh4e15OvlE0A_0fXfBWJ1k3qvSHZ8bm8JHghh-8woy4EdKNHJbH7vc7Yy3z_-m-_8Lk-qoa3QW6khHazmcIMKMq4ACZFYJrU9I_ysiqk1__GrR7hfwzB37yij8PJuVbGghv4QYbYv0clf_ru8782FZLAEX4NXey00Yr9xw6mF5jTcJTUN3282U4NB9ok_A" />
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-24 px-6 bg-surface-container-low/30" id="skills">
                    <SkillGrid />
                </section>

                {/* Contact Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
                    <ContactForm />
                </section>
            </main>
        </div>
    );
}