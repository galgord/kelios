import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import BentoGrid from '@/components/landing/BentoGrid';
import ComparisonSection from '@/components/landing/ComparisonSection';
import PricingSection from '@/components/landing/PricingSection';
import FooterSection from '@/components/landing/FooterSection';

export default function App() {
    return (
        <div className="min-h-screen bg-[#F9F9F7]">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');

                    .font-serif {
                        font-family: 'Libre Baskerville', Georgia, serif;
                    }

                    .font-mono {
                        font-family: 'JetBrains Mono', 'Courier New', monospace;
                    }

                    html {
                        scroll-behavior: smooth;
                    }

                    ::selection {
                        background-color: #FF6B35;
                        color: white;
                    }
                `}
            </style>

            <Navbar />
            <HeroSection />
            <BentoGrid />
            <ComparisonSection />
            <PricingSection />
            <FooterSection />
        </div>
    );
}
