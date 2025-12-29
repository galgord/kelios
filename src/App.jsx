import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import BentoGrid from '@/components/landing/BentoGrid';
import ComparisonSection from '@/components/landing/ComparisonSection';
import BlogSection from '@/components/landing/BlogSection';
import FooterSection from '@/components/landing/FooterSection';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndAgreements from '@/pages/TermsAndAgreements';
import BlogPost from '@/pages/BlogPost';
import AboutUs from '@/pages/AboutUs';

function LandingPage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <BentoGrid />
            <ComparisonSection />
            <BlogSection />
            <FooterSection />
        </>
    );
}

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
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndAgreements />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}
