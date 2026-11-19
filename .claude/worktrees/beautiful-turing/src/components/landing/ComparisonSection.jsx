import React from 'react';
import { X, Check, FileSpreadsheet, StickyNote, CreditCard, LayoutDashboard, Wrench, Sparkles } from 'lucide-react';

const ComparisonItem = ({ icon: Icon, text, isGood }) => (
    <div className="flex items-start gap-4 py-4 border-b border-[#1a1a1a]/10 last:border-b-0">
        <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${isGood ? 'bg-[#E8F5E9] text-green-700' : 'bg-[#FFEBEE] text-red-700'} border ${isGood ? 'border-green-300' : 'border-red-300'}`}>
            {isGood ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </div>
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-[#1a1a1a]/40" strokeWidth={1.5} />
            <span className={`font-mono text-sm ${isGood ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/60 line-through decoration-[#1a1a1a]/30'}`}>
                {text}
            </span>
        </div>
    </div>
);

export default function ComparisonSection() {
    return (
        <section id="process" className="bg-[#F9F9F7] py-28 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                        The Difference
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                        No-nonsense approach
                    </h2>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* The Old Way */}
                    <div className="relative">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#1a1a1a]/10 border border-[#1a1a1a]/20">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1a1a]/60">The Old Way</span>
                        </div>
                        <div className="bg-white border border-[#1a1a1a]/20 p-8 pt-10">
                            <ComparisonItem 
                                icon={FileSpreadsheet} 
                                text="Messy Excel sheets everywhere" 
                                isGood={false} 
                            />
                            <ComparisonItem 
                                icon={StickyNote} 
                                text="Lost sticky notes and scribbles" 
                                isGood={false} 
                            />
                            <ComparisonItem 
                                icon={CreditCard} 
                                text="Expensive monthly subscriptions" 
                                isGood={false} 
                            />
                            
                            <div className="mt-6 p-4 bg-[#1a1a1a]/5 border border-dashed border-[#1a1a1a]/20">
                                <p className="font-mono text-xs text-[#1a1a1a]/50 text-center">
                                    Wasted hours. Missed orders. Frustrated customers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Kelios Way */}
                    <div className="relative">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#FF6B35] border border-[#1a1a1a]">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white">The Craftsman Way</span>
                        </div>
                        <div className="bg-white border-2 border-[#1a1a1a] p-8 pt-10 shadow-[6px_6px_0px_0px_#1a1a1a]">
                            <ComparisonItem 
                                icon={LayoutDashboard} 
                                text="Software designed around your workflow" 
                                isGood={true} 
                            />
                            <ComparisonItem 
                                icon={Wrench} 
                                text="Custom built for your exact needs" 
                                isGood={true} 
                            />
                            <ComparisonItem 
                                icon={Sparkles} 
                                text="One-time setup, yours forever" 
                                isGood={true} 
                            />
                            
                            <div className="mt-6 p-4 bg-[#FFF8E7] border border-[#FF6B35]/30">
                                <p className="font-mono text-xs text-[#1a1a1a] text-center font-medium">
                                    Less stress. More time. Happy customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-2">How it works</p>
                        <h3 className="font-serif text-2xl text-[#1a1a1a]">Three simple steps</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: 'We Listen', desc: 'Tell us about your daily headaches. We take notes.' },
                            { num: '02', title: 'We Build', desc: 'We craft a tool that fits like a glove. No bloat.' },
                            { num: '03', title: 'You Work', desc: 'Start using it. We stick around to help.' }
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -top-4 -left-2 font-mono text-6xl font-bold text-[#1a1a1a]/5">
                                    {step.num}
                                </div>
                                <div className="relative pt-8">
                                    <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">{step.title}</h4>
                                    <p className="font-mono text-sm text-[#1a1a1a]/60">{step.desc}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-[#1a1a1a]/30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}