import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function FooterSection() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const currentYear = new Date().getFullYear();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        try {
            // Submit to Formspree
            const response = await fetch('https://formspree.io/f/xpwvvvle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    message: 'Lead from Craftsman landing page',
                }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('There was an issue submitting your email. Please try again, or contact us directly via email or text.');
            }
        } catch (error) {
            alert('There was an issue submitting your email. Please try again, or contact us directly via email or text.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-[#F9F9F7] border-t border-[#1a1a1a]" role="contentinfo">
            {/* CTA Section */}
            <div className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                        Let's solve your problem.
                    </h2>
                    <p className="font-mono text-sm text-[#1a1a1a]/60 mb-10 max-w-md mx-auto">
                        Drop your email and tell us what's not working. We'll reach out within 24 hours.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto" aria-label="Contact form">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/30" aria-hidden="true" />
                                    <Input
                                        type="email"
                                        placeholder="you@yourbusiness.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-11 py-6 rounded-none border-[#1a1a1a] bg-white font-mono text-sm focus-visible:ring-[#FF6B35] focus-visible:ring-offset-0"
                                        required
                                        aria-label="Email address"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-6 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Connecting...' : "Let's Talk"}
                                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                                </Button>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a
                                    href="mailto:hello@craftsman.kelios.io?subject=Custom%20internal%20tool%20project"
                                    className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
                                >
                                    Prefer email? Email us
                                </a>
                                <span className="hidden sm:inline text-[#1a1a1a]/20">•</span>
                                <a
                                    href="sms:+5511999957572"
                                    className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
                                >
                                    Prefer text? Text us
                                </a>
                            </div>
                        </form>
                    ) : (
                        <div className="bg-[#E8F5E9] border border-green-300 p-6 max-w-md mx-auto">
                            <p className="font-mono text-sm text-green-800 font-medium">
                                ✓ Got it! We'll reach out within 24 hours.
                            </p>
                            <p className="font-mono text-xs text-green-700 mt-2">
                                Check your inbox for a confirmation.
                            </p>
                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a
                                    href="mailto:hello@craftsman.kelios.io?subject=Custom%20internal%20tool%20project"
                                    className="font-mono text-xs uppercase tracking-widest text-green-800/70 hover:text-green-900 transition-colors"
                                >
                                    Email us
                                </a>
                                <span className="hidden sm:inline text-green-800/20">•</span>
                                <a
                                    href="sms:+5511999957572"
                                    className="font-mono text-xs uppercase tracking-widest text-green-800/70 hover:text-green-900 transition-colors"
                                >
                                    Text us
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#1a1a1a]/10 py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Craftsman Logo" className="h-10 w-10 object-contain" />
                        <div className="font-serif text-xl font-bold text-[#1a1a1a]">
                            Craftsman <span className="text-sm font-normal text-[#1a1a1a]/50">by Kelios</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-8">
                        <Link to="/about" className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
                            About
                        </Link>
                        <Link to="/privacy" className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
                            Privacy
                        </Link>
                        <Link to="/terms" className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors">
                            Terms
                        </Link>
                    </div>
                    
                    <p className="font-mono text-xs text-[#1a1a1a]/40">
                        © {currentYear} Craftsman by Kelios. Built with care.
                    </p>
                </div>
            </div>
        </footer>
    );
}