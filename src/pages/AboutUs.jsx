import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Heart, Lightbulb } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import FooterSection from '@/components/landing/FooterSection';

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#F9F9F7] pt-28 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back link */}
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 font-mono text-sm text-[#1a1a1a]/60 hover:text-[#FF6B35] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </Link>

                    {/* Header */}
                    <header className="mb-16">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                            About Us
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-6">
                            Two engineers who believe tech should make life easier.
                        </h1>
                        <p className="text-lg md:text-xl text-[#1a1a1a]/70 leading-relaxed max-w-2xl">
                            We're Gal and Roger problem solvers with 25 years of combined experience building software that actually works.
                        </p>
                    </header>

                    {/* Founders Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* Gal */}
                        <div className="bg-white border border-[#1a1a1a] p-8 shadow-[6px_6px_0px_0px_#1a1a1a]">
                            <div className="w-20 h-20 bg-[#FF6B35] border border-[#1a1a1a] flex items-center justify-center mb-6">
                                <span className="font-serif text-3xl text-white font-bold">G</span>
                            </div>
                            <h2 className="font-serif text-2xl text-[#1a1a1a] mb-2">Gal Gordon</h2>
                            <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-4">Co-Founder & Engineer</p>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                Mobile engineer with deep roots in web and native development. Relocated to Brazil with his wife and kids, bringing global perspective to local problems.
                            </p>
                        </div>

                        {/* Roger */}
                        <div className="bg-white border border-[#1a1a1a] p-8 shadow-[6px_6px_0px_0px_#1a1a1a]">
                            <div className="w-20 h-20 bg-[#1a1a1a] border border-[#1a1a1a] flex items-center justify-center mb-6">
                                <span className="font-serif text-3xl text-white font-bold">R</span>
                            </div>
                            <h2 className="font-serif text-2xl text-[#1a1a1a] mb-2">Roger Fuentes</h2>
                            <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-4">Co-Founder & Engineer</p>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                Born and raised in Latin America, Roger brings local expertise and a passion for building software that solves real problems for real businesses.
                            </p>
                        </div>
                    </div>

                    {/* Our Story */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-1 h-px bg-[#1a1a1a]/10"></div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">Our Story</span>
                            <div className="flex-1 h-px bg-[#1a1a1a]/10"></div>
                        </div>
                        
                        <div className="bg-[#EEECE8] border border-[#1a1a1a]/20 p-8 md:p-12">
                            <p className="font-mono text-base text-[#1a1a1a]/80 leading-relaxed mb-6">
                                We met at a previous job two mobile engineers who kept noticing the same thing: businesses were using AI and no-code tools to get 90% of the way there, but couldn't cross the finish line.
                            </p>
                            <p className="font-mono text-base text-[#1a1a1a]/80 leading-relaxed mb-6">
                                That last 10%? It was killing them. Workarounds on top of workarounds. Manual processes that ate hours every week. Software that almost worked but not quite.
                            </p>
                            <p className="font-mono text-base text-[#1a1a1a]/80 leading-relaxed">
                                So we started Craftsman. Our mission is simple: help businesses get to 100%. Whether that's finishing what AI started or building something from scratch that actually fits how you work.
                            </p>
                        </div>
                    </section>

                    {/* Info Cards */}
                    <section className="grid md:grid-cols-2 gap-6 mb-20">
                        {/* Experience */}
                        <div className="border border-[#1a1a1a]/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="w-5 h-5 text-[#FF6B35]" />
                                <span className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">Background</span>
                            </div>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                We've built software for <strong className="text-[#1a1a1a]">everyone</strong>. From native mobile apps to full-stack web platforms, we've seen what works and what doesn't.
                            </p>
                        </div>

                        {/* Location */}
                        <div className="border border-[#1a1a1a]/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-[#FF6B35]" />
                                <span className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">Location</span>
                            </div>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                Based in <strong className="text-[#1a1a1a]">Latin America</strong>. We work with businesses across the Americas and beyond. Same timezone advantages, global standards.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="border border-[#1a1a1a]/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="w-5 h-5 text-[#FF6B35]" />
                                <span className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">What We Care About</span>
                            </div>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                Customer needs come first. We obsess over <strong className="text-[#1a1a1a]">end-user experience</strong> because software that people hate using doesn't solve anything. It just creates new problems.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div className="border border-[#1a1a1a]/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="w-5 h-5 text-[#FF6B35]" />
                                <span className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">What We Believe</span>
                            </div>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                Too many people stick to what they know because they're scared to let technology make their lives easier. <strong className="text-[#1a1a1a]">We're here to change that.</strong>
                            </p>
                        </div>
                    </section>

                    {/* Personal Touch */}
                    <section className="mb-20">
                        <div className="bg-[#FFF8E7] border border-[#FF6B35]/30 p-8">
                            <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">When We're Not Coding</p>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 leading-relaxed">
                                You'll find us playing Nintendo Switch or spending time with our families. We believe in working hard and then actually logging off something we try to build into the tools we create for you, too.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center">
                        <div className="bg-white border border-[#1a1a1a] p-8 md:p-12 shadow-[6px_6px_0px_0px_#FF6B35]">
                            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                                Want to work with us?
                            </h2>
                            <p className="font-mono text-sm text-[#1a1a1a]/60 mb-8 max-w-md mx-auto">
                                Tell us what's not working. We'll have a real conversation no sales pitch, just problem-solving.
                            </p>
                            <a 
                                href="mailto:info@kelios.io?subject=Let's%20work%20together"
                                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-4 shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                Say Hello
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <FooterSection />
        </>
    );
}

