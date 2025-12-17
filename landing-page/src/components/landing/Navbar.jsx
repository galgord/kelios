import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

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
                <div className="font-serif text-2xl font-bold text-[#1a1a1a] tracking-tight">
                    Kelios
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
                    className="hidden md:flex bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                    Talk to a Human
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
                        className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a]"
                    >
                        Talk to a Human
                    </Button>
                </div>
            )}
        </nav>
    );
}