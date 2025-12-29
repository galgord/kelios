import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function TermsAndAgreements() {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-[#F9F9F7]">
            <header className="border-b border-[#1a1a1a]/10">
                <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="Craftsman Logo" className="h-10 w-10 object-contain" />
                        <div className="font-serif text-xl font-bold text-[#1a1a1a] tracking-tight">
                            Craftsman <span className="text-sm font-normal text-[#1a1a1a]/50">by Kelios</span>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
                    >
                        Back to home
                    </Link>
                </div>
            </header>

            <main className="px-6 py-16 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                        Terms & Agreements
                    </p>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                        Clear terms. No surprises.
                    </h1>
                    <p className="font-mono text-sm text-[#1a1a1a]/60 mb-10">
                        Last updated: {lastUpdated}
                    </p>

                    <div className="space-y-10 text-[#1a1a1a]">
                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Acceptance</h2>
                            <p className="text-lg text-[#1a1a1a]/70 leading-relaxed">
                                By using this website or contacting Kelios (“we”, “us”), you agree to these Terms & Agreements.
                                If you do not agree, please do not use the website.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Services</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                We build custom internal tools and automation for businesses. Any timelines, pricing, or scope
                                described on the website are informational and may change. Final terms for client work are defined
                                in a separate written agreement.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">No legal or financial advice</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                Content on this website is provided for general information and does not constitute legal,
                                financial, or professional advice.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Intellectual property</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                The website and its content (text, design, logos, and code) are owned by Kelios or its licensors
                                and are protected by applicable intellectual property laws. You may not copy, modify, distribute,
                                or reproduce any part without permission.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">User conduct</h2>
                            <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]/70">
                                <li>Do not attempt to disrupt, exploit, or reverse engineer the website.</li>
                                <li>Do not submit unlawful, abusive, or harmful content.</li>
                                <li>Do not send spam or automated submissions.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Disclaimers</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                The website is provided “as is” and “as available” without warranties of any kind, express or
                                implied. We do not guarantee that the site will be uninterrupted or error-free.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Limitation of liability</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                To the maximum extent permitted by law, Kelios will not be liable for any indirect, incidental,
                                special, consequential, or punitive damages arising out of or related to your use of the website.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Changes</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                We may update these Terms & Agreements from time to time. Changes are effective when posted on
                                this page.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Contact</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                Questions? Email{' '}
                                <a
                                    href="mailto:info@kelios.io?subject=Terms%20question"
                                    className="text-[#FF6B35] underline underline-offset-4 hover:no-underline"
                                >
                                    info@kelios.io
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

