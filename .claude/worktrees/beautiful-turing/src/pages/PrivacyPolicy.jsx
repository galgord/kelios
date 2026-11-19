import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </p>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                        Your privacy matters.
                    </h1>
                    <p className="font-mono text-sm text-[#1a1a1a]/60 mb-10">
                        Last updated: {lastUpdated}
                    </p>

                    <div className="space-y-10 text-[#1a1a1a]">
                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Overview</h2>
                            <p className="text-lg text-[#1a1a1a]/70 leading-relaxed">
                                This Privacy Policy explains how Kelios (“we”, “us”) collects, uses, and shares information when
                                you visit this website or contact us.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Information we collect</h2>
                            <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]/70">
                                <li>
                                    <span className="font-mono text-sm">Contact information</span>: such as your email address
                                    when you submit a form or email us.
                                </li>
                                <li>
                                    <span className="font-mono text-sm">Message content</span>: anything you choose to include
                                    in your message.
                                </li>
                                <li>
                                    <span className="font-mono text-sm">Basic usage data</span>: standard logs such as pages
                                    visited, approximate device/browser info, and timestamps (collected by typical hosting and
                                    analytics tooling, if enabled).
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">How we use information</h2>
                            <ul className="list-disc pl-6 space-y-2 text-[#1a1a1a]/70">
                                <li>To respond to your inquiry and follow up about your project.</li>
                                <li>To operate, maintain, and improve this website.</li>
                                <li>To prevent abuse, spam, and security issues.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">How we share information</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                We do not sell your personal information. We may share information with service providers who help
                                us run the website and handle contact requests (for example, a form submission provider or email
                                service), and only as needed to provide the service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Data retention</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                We keep contact submissions as long as needed to communicate with you and for reasonable
                                recordkeeping, unless a longer retention period is required by law.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Security</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                We use reasonable safeguards to protect your information, but no method of transmission or storage
                                is 100% secure.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Your choices</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                You can contact us to request access, correction, or deletion of your information (subject to
                                legal requirements and legitimate business needs).
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl">Contact</h2>
                            <p className="text-[#1a1a1a]/70 leading-relaxed">
                                Questions about this policy? Email us at{' '}
                                <a
                                    href="mailto:info@kelios.io?subject=Privacy%20policy%20question"
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

