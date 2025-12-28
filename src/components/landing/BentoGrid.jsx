import React from 'react';
import { Box, Tag, Users, Calendar, ClipboardList, Truck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, size = 'normal', accent = false }) => {
    const baseClasses = "relative bg-white border border-[#1a1a1a] p-6 transition-all duration-300 hover:-translate-y-1";
    const shadowClasses = accent 
        ? "shadow-[6px_6px_0px_0px_#FF6B35] hover:shadow-[8px_8px_0px_0px_#FF6B35]" 
        : "shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[6px_6px_0px_0px_#1a1a1a]";
    
    return (
        <div className={`${baseClasses} ${shadowClasses} ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}>
            {/* Pin simulation */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF6B35] border border-[#1a1a1a] shadow-sm"></div>
            
            {/* Corner tape effect */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-2 right-[-20px] w-16 h-4 bg-[#EEECE8] rotate-45 border-y border-[#1a1a1a]/20"></div>
            </div>

            <div className="space-y-4">
                <div className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center bg-[#F9F9F7]">
                    <Icon className="w-6 h-6 text-[#1a1a1a]" strokeWidth={1.5} />
                </div>
                
                <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-2">{title}</h3>
                    <p className="font-mono text-sm text-[#1a1a1a]/60 leading-relaxed">{description}</p>
                </div>

                {size === 'large' && (
                    <div className="pt-4 mt-4 border-t border-dashed border-[#1a1a1a]/20">
                        <div className="flex gap-2 flex-wrap">
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#EEECE8] text-[#1a1a1a]/70">Real-time</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#EEECE8] text-[#1a1a1a]/70">Mobile Ready</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#EEECE8] text-[#1a1a1a]/70">Easy Setup</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function BentoGrid() {
    return (
        <section id="services" className="bg-[#EEECE8] py-28 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                        What We Build
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-4">
                        Simple tools for real work
                    </h2>
                    <p className="text-lg text-[#1a1a1a]/60">
                        No bloated features. No confusing menus. Just the tools you actually need.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Large Card - Inventory */}
                    <ServiceCard 
                        icon={Box}
                        title="Inventory Tracking"
                        description="Know exactly what's on the shelf. Get alerts when stock runs low. No more guessing, no more overordering."
                        size="large"
                        accent={true}
                    />

                    {/* Label Printing */}
                    <ServiceCard 
                        icon={Tag}
                        title="Label Printing"
                        description="Click, print, stick. Done. Works with any thermal printer."
                    />

                    {/* Client Portals */}
                    <ServiceCard 
                        icon={Users}
                        title="Client Portals"
                        description="Let your customers book themselves. No more phone tag."
                    />

                    {/* Scheduling */}
                    <ServiceCard 
                        icon={Calendar}
                        title="Shift Management"
                        description="Plan your team's week in minutes. Everyone knows where to be."
                    />

                    {/* Order Tracking */}
                    <ServiceCard 
                        icon={ClipboardList}
                        title="Order Tracking"
                        description="From order to delivery, never lose track of a job again."
                    />

                    {/* Delivery */}
                    <ServiceCard 
                        icon={Truck}
                        title="Delivery Routes"
                        description="Optimize your runs. Save time and fuel."
                    />
                </div>

                {/* Bottom Note */}
                <div className="mt-12 text-center">
                    <p className="font-mono text-sm text-[#1a1a1a]/50">
                        Don't see what you need?{" "}
                        <a
                            href="mailto:hello@craftsman.kelios.io?subject=Custom%20internal%20tool%20project"
                            className="text-[#FF6B35] underline underline-offset-4 hover:no-underline"
                        >
                            Email us your wishlist.
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}