import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F7] border-b border-[#1a1a1a]/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Craftsman Logo" className="h-12 w-12 object-contain" />
                    <div className="font-serif text-2xl font-bold text-[#1a1a1a] tracking-tight">
                        Craftsman <span className="text-base font-normal text-[#1a1a1a]/50">by Kelios</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <button 
                        onClick={() => scrollTo('services')}
                        className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
                    >
                        Services
                    </button>
                    <button 
                        onClick={() => scrollTo('process')}
                        className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
                    >
                        Process
                    </button>
                    <button 
                        onClick={() => scrollTo('pricing')}
                        className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
                    >
                        Pricing
                    </button>
                </div>

                {/* CTA Button */}
                <Button
                    asChild
                    className="hidden md:flex bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                    <a href="https://wa.me/5511999957572?text=Hi!%20I%27d%20like%20to%20talk%20about%20building%20a%20custom%20tool%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                        Talk to a Human
                    </a>
                </Button>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#F9F9F7] border-t border-[#1a1a1a]/10 px-6 py-6 space-y-4">
                    <button 
                        onClick={() => scrollTo('services')}
                        className="block font-mono text-sm uppercase tracking-widest text-[#1a1a1a]/70"
                    >
                        Services
                    </button>
                    <button 
                        onClick={() => scrollTo('process')}
                        className="block font-mono text-sm uppercase tracking-widest text-[#1a1a1a]/70"
                    >
                        Process
                    </button>
                    <button 
                        onClick={() => scrollTo('pricing')}
                        className="block font-mono text-sm uppercase tracking-widest text-[#1a1a1a]/70"
                    >
                        Pricing
                    </button>
                    <Button
                        asChild
                        className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a]"
                    >
                        <a href="https://wa.me/5511999957572?text=Hi!%20I%27d%20like%20to%20talk%20about%20building%20a%20custom%20tool%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                            Talk to a Human
                        </a>
                    </Button>
                </div>
            )}
        </nav>
    );
}