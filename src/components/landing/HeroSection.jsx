import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquareText } from 'lucide-react';

export default function HeroSection() {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const currentYear = new Date().getFullYear();
    const barcodeWidths = React.useMemo(
        () => Array.from({ length: 32 }, (_, i) => (((i * 7) % 11) > 5 ? '3px' : '2px')),
        []
    );

    return (
        <section className="min-h-screen bg-[#F9F9F7] pt-28 pb-20 px-6 flex items-center" aria-label="Hero section">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Copy */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight">
                                We build the software your business actually needs.
                            </h1>
                            <p className="text-lg md:text-xl text-[#1a1a1a]/70 leading-relaxed max-w-lg">
                                Tell us what's slowing you down. We'll build a custom tool that solves your specific problem delivered in weeks, not months.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                <a href="mailto:info@kelios.io?subject=Custom%20internal%20tool%20project" className="flex items-center justify-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Us
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-transparent border border-[#1a1a1a] text-[#1a1a1a] font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none hover:bg-[#1a1a1a] hover:text-white transition-all"
                            >
                                <a href="sms:+5511999957572" className="flex items-center justify-center">
                                    <MessageSquareText className="mr-2 h-4 w-4" />
                                    Text Us
                                </a>
                            </Button>
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
                                        {barcodeWidths.map((width, i) => (
                                            <div 
                                                key={i} 
                                                className="bg-[#1a1a1a]" 
                                                style={{ 
                                                    width,
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