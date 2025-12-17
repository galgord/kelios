import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react';

export default function FooterSection() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Open WhatsApp with the email in the message
            const message = `Hi! I'm interested in building a custom tool. You can reach me at: ${email}`;
            window.open(`https://wa.me/5511999957572?text=${encodeURIComponent(message)}`, '_blank');
            setSubmitted(true);
        }
    };

    return (
        <footer className="bg-[#F9F9F7] border-t border-[#1a1a1a]">
            {/* CTA Section */}
            <div className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                        Ready to tidy up<br />your workflow?
                    </h2>
                    <p className="font-mono text-sm text-[#1a1a1a]/60 mb-10 max-w-md mx-auto">
                        Drop your email. We'll reach out within 24 hours to chat about what you need.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" />
                                    <Input
                                        type="email"
                                        placeholder="you@yourbusiness.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-11 py-6 rounded-none border-[#1a1a1a] bg-white font-mono text-sm focus-visible:ring-[#FF6B35] focus-visible:ring-offset-0"
                                        required
                                    />
                                </div>
                                <Button 
                                    type="submit"
                                    className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                >
                                    Let's Talk
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="bg-[#E8F5E9] border border-green-300 p-6 max-w-md mx-auto">
                            <p className="font-mono text-sm text-green-800">
                                ✓ Got it! We'll be in touch soon.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#1a1a1a]/10 py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-serif text-xl font-bold text-[#1a1a1a]">
                        Craftsman <span className="text-sm font-normal text-[#1a1a1a]/50">by Kelios</span>
                    </div>
                    
                    <div className="flex gap-8">
                        <a href="#" className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
                            Terms
                        </a>
                    </div>
                    
                    <p className="font-mono text-xs text-[#1a1a1a]/40">
                        © 2024 Craftsman by Kelios. Built with care.
                    </p>
                </div>
            </div>
        </footer>
    );
}