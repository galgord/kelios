import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const currentYear = new Date().getFullYear();

    return (
        <section className="min-h-screen bg-[#F9F9F7] pt-24 pb-16 px-6 flex items-center" aria-label="Hero section">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Copy */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight">
                                Custom internal tools without the enterprise price.
                            </h1>
                            <p className="text-lg md:text-xl text-[#1a1a1a]/70 leading-relaxed max-w-lg">
                                Stop running your business on spreadsheets. We build the specific software you need to automate workflows and scale—delivered in weeks, not months.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                <a href="https://wa.me/5511999957572?text=Hi!%20I%27m%20interested%20in%20getting%20started%20with%20a%20custom%20tool." target="_blank" rel="noopener noreferrer">
                                    Build My Tool
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-transparent border border-[#1a1a1a] text-[#1a1a1a] font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none hover:bg-[#1a1a1a] hover:text-white transition-all"
                            >
                                <a href="https://wa.me/5511999957572?text=Hi!%20I%27d%20like%20to%20see%20some%20examples%20of%20your%20work." target="_blank" rel="noopener noreferrer">
                                    See Examples
                                </a>
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-[#1a1a1a]/10">
                            <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-4">
                                Powering operations for businesses around the world
                            </p>
                            <div className="flex gap-8 items-center">
                                <span className="font-serif text-lg text-[#1a1a1a]/40">Rosa's Florals</span>
                                <span className="font-serif text-lg text-[#1a1a1a]/40">Mike's Auto</span>
                                <span className="font-serif text-lg text-[#1a1a1a]/40">Daily Bread</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Visual UI Cards */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Main Shipping Label Card */}
                        <div className="relative">
                            {/* Background card (tilted) */}
                            <div className="absolute -top-4 -left-4 w-72 h-48 bg-[#EEECE8] border border-[#1a1a1a] rounded-none rotate-[-6deg] shadow-[6px_6px_0px_0px_#1a1a1a]"></div>
                            
                            {/* Shipping Label Card */}
                            <div className="relative w-80 bg-white border-2 border-[#1a1a1a] p-6 shadow-[8px_8px_0px_0px_#1a1a1a] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4 pb-4 border-b border-dashed border-[#1a1a1a]/30">
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1a1a]/50">Ship To</p>
                                        <p className="font-serif text-lg font-bold text-[#1a1a1a]">Customer #0247</p>
                                    </div>
                                    <div className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center">
                                        <div className="w-8 h-8 bg-[#1a1a1a]"></div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="font-mono text-xs text-[#1a1a1a]/50">Item</span>
                                        <span className="font-mono text-xs text-[#1a1a1a]">Spring Bouquet</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-mono text-xs text-[#1a1a1a]/50">Qty</span>
                                        <span className="font-mono text-xs text-[#1a1a1a]">×2</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-mono text-xs text-[#1a1a1a]/50">Date</span>
                                        <span className="font-mono text-xs text-[#1a1a1a]">{currentDate}</span>
                                    </div>
                                </div>

                                {/* Barcode simulation */}
                                <div className="mt-6 pt-4 border-t border-[#1a1a1a]/20">
                                    <div className="flex gap-[2px] justify-center">
                                        {[...Array(32)].map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="bg-[#1a1a1a]" 
                                                style={{ 
                                                    width: Math.random() > 0.5 ? '2px' : '3px',
                                                    height: '24px'
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                    <p className="font-mono text-[10px] text-center mt-2 text-[#1a1a1a]/50">KLS-{currentYear}-0247</p>
                                </div>
                            </div>

                            {/* Small Inventory Card */}
                            <div className="absolute -bottom-8 -right-8 w-48 bg-[#FFF8E7] border border-[#1a1a1a] p-4 shadow-[4px_4px_0px_0px_#1a1a1a] rotate-[8deg]">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1a1a]/50 mb-2">Inventory</p>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-mono text-[#1a1a1a]/70">Roses</span>
                                        <span className="font-mono font-bold text-[#FF6B35]">47</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-mono text-[#1a1a1a]/70">Tulips</span>
                                        <span className="font-mono font-bold text-[#1a1a1a]">128</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="font-mono text-[#1a1a1a]/70">Lilies</span>
                                        <span className="font-mono font-bold text-[#1a1a1a]">85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}