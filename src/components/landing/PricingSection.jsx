import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, X } from 'lucide-react';

export default function WhyUsSection() {
    const features = [
        "Custom-built for your business",
        "Works on any device",
        "Training included",
        "30 days of free support",
        "No monthly fees",
        "You own the code"
    ];

    const others = [
        { label: "Agencies", pain: "$20k+ budgets, months of waiting" },
        { label: "SaaS tools", pain: "$300/mo forever, doesn't quite fit" },
        { label: "No-code", pain: "Gets you 90% there, can't finish the job" },
    ];

    return (
        <section id="why-us" className="bg-[#1a1a1a] py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                        Why Craftsman
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                        Built for you.<br />Owned by you.
                    </h2>
                    <p className="font-mono text-sm text-white/50 max-w-md mx-auto">
                        One-time project. No subscriptions. No bloat. Just software that fits your business like a glove.
                    </p>
                </div>

                {/* Card */}
                <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-[#FF6B35] translate-x-3 translate-y-3"></div>

                    <div className="relative bg-[#F9F9F7] border-2 border-[#1a1a1a] p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left - The alternatives */}
                            <div>
                                <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-6">
                                    The alternatives
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {others.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#FFEBEE] border border-red-300 mt-0.5">
                                                <X className="w-3 h-3 text-red-700" />
                                            </div>
                                            <div>
                                                <span className="font-mono text-sm font-medium text-[#1a1a1a]">{item.label}</span>
                                                <p className="font-mono text-xs text-[#1a1a1a]/50 mt-0.5">{item.pain}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-4 bg-[#EEECE8] border border-[#1a1a1a]/10 mb-8">
                                    <p className="font-mono text-xs text-[#1a1a1a]/70">
                                        Every project is different, so every quote is custom. Tell us your problem and we'll give you an honest estimate.
                                    </p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                >
                                    <a href="mailto:info@kelios.io?subject=Custom%20internal%20tool%20project" className="flex items-center justify-center">
                                        Get a Custom Quote
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>

                            {/* Right - What you get */}
                            <div className="border-t md:border-t-0 md:border-l border-[#1a1a1a]/10 pt-8 md:pt-0 md:pl-12">
                                <p className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 mb-6">
                                    What you get with Craftsman
                                </p>
                                <ul className="space-y-4">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 flex items-center justify-center bg-[#E8F5E9] border border-green-300">
                                                <Check className="w-3 h-3 text-green-700" />
                                            </div>
                                            <span className="font-mono text-sm text-[#1a1a1a]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}