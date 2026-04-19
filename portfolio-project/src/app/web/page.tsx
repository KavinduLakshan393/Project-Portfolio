import React from 'react';
import SkillGrid from '@/components/sections/SkillGrid';
import ContactForm from '@/components/sections/ContactForm';

export default function WebPortfolio() {
    return (
        <div className="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen">
            <main className="flex-grow pt-8">
                {/* Hero Section */}
                <section className="py-24 px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-on-background">
                                Building Scalable <span className="text-theme-primary transition-all duration-300 shadow-[0_0_15px_var(--theme-glow)] inline-block">digital products</span> with logic
                            </h1>
                            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
                                Full-stack developer focused on engineering high-performance web applications. I architect robust systems that merge clean code with kinetic design.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a className="bg-gradient-to-br from-theme-primary to-theme-container text-theme-on-primary font-label font-bold tracking-widest uppercase px-8 py-4 rounded-lg shadow-[0_0_15px_var(--theme-glow)] hover:brightness-110 transition-all font-bold" href="#projects">
                                    View Projects
                                </a>
                                <a className="border border-outline-variant/50 text-on-surface font-label font-bold tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-surface-variant/20 transition-all" href="#contact">
                                    Initiate Contact
                                </a>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 shadow-[0_0_15px_var(--theme-glow)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/10 to-transparent z-10 mix-blend-overlay"></div>
                            <img alt="Cyberpunk workstation setup" className="object-cover w-full h-full opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp-VXqMD1DwiPcZeEScAFh0eOBPLhND6WabrJL1sfqltocN2KPMRXkNMZUUPKiJe7GJTCfFhN83gCAE70Bj2-qFuEFuku9kmy3OAZOPEOqfLEG0-FMqYv93ft8DA8EldDJZqreC-A0zQakbkmfAzUKmsVJ25qhrIaMB0ar8TL1oBDqEk4_FmuaRZuD84-T4_Gl_yZk4EpSdbGehbZ0mNPaLSA1tB3B5EfZCoaOn4c7GAffnhurfrWm1-6DVb4Eaa3tgM1fFM7nRG4" />
                        </div>
                    </div>
                </section>

                {/* Technical Snapshot Section */}
                <section className="py-24 px-8 max-w-7xl mx-auto bg-surface relative" id="about">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative h-[500px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 order-2 lg:order-1">
                            <img alt="Matrix code" className="object-cover w-full h-full opacity-50 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC898zyDojOXX_aJcaflu_bLfgTmCIIHixqCYgjGht3Q9lv_b9Yi5mu6Nx8_-jQPa1KX1_d2ITi27olqGh4e15OvlE0A_0fXfBWJ1k3qvSHZ8bm8JHghh-8woy4EdKNHJbH7vc7Yy3z_-m-_8Lk-qoa3QW6khHazmcIMKMq4ACZFYJrU9I_ysiqk1__GrR7hfwzB37yij8PJuVbGghv4QYbYv0clf_ru8782FZLAEX4NXey00Yr9xw6mF5jTcJTUN3282U4NB9ok_A" />
                        </div>
                        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                            <div className="space-y-2">
                                <span className="font-label text-theme-primary text-sm uppercase tracking-[0.1em]">System Status: Online</span>
                                <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-background">Technical Snapshot</h2>
                            </div>
                            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                                Level 3 Computer Science student specializing in scalable web architectures. Bridging the gap between raw backend processing power and seamless frontend kinetic interactions.
                            </p>
                            <blockquote className="border-l-4 border-theme-primary pl-6 py-2 italic font-body text-on-surface text-xl">
                                "My goal is to engineer digital environments that don't just function, but perform with intention and precision."
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Engineering Stack Section */}
                <section className="py-24 px-8 bg-surface" id="skills">
                    <SkillGrid />
                </section>

                {/* Contact Section */}
                <section className="py-24 px-8 max-w-7xl mx-auto" id="contact">
                    <ContactForm />
                </section>
            </main>
        </div>
    );
}