import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/landing/Navbar';
import FooterSection from '@/components/landing/FooterSection';

function parseMarkdown(content) {
    if (!content) return '';
    
    return content
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/^---$/gm, '<hr />')
        .replace(/^(?!<[hupla]|<li|<hr)(.+)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p>\s*<\/p>/g, '');
}

// SEO Helper: Update meta tags dynamically
function updateMetaTags(post, slug) {
    const baseUrl = 'https://craftsman.kelios.io';
    const postUrl = `${baseUrl}/blog/${slug}`;
    
    // Update title
    document.title = `${post.title} | Craftsman by Kelios`;
    
    // Helper to set meta tag
    const setMeta = (property, content, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let meta = document.querySelector(`meta[${attr}="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attr, property);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    };
    
    // Update meta description
    setMeta('description', post.excerpt);
    setMeta('title', post.title);
    
    // Update Open Graph
    setMeta('og:title', post.title, true);
    setMeta('og:description', post.excerpt, true);
    setMeta('og:url', postUrl, true);
    setMeta('og:type', 'article', true);
    setMeta('og:site_name', 'Craftsman by Kelios', true);
    
    // Update Twitter
    setMeta('twitter:title', post.title, true);
    setMeta('twitter:description', post.excerpt, true);
    setMeta('twitter:url', postUrl, true);
    
    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', postUrl);
    
    // Add JSON-LD structured data
    let jsonLd = document.querySelector('script[data-blog-post-ld]');
    if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.setAttribute('type', 'application/ld+json');
        jsonLd.setAttribute('data-blog-post-ld', 'true');
        document.head.appendChild(jsonLd);
    }
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Organization",
            "name": post.author || "Kelios Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Craftsman by Kelios",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "datePublished": post.published_at,
        "dateModified": post.published_at,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "url": postUrl,
        "articleSection": post.category,
        "wordCount": post.content ? post.content.split(/\s+/).length : 0
    };
    
    jsonLd.textContent = JSON.stringify(structuredData);
}

// Cleanup meta tags when leaving
function resetMetaTags() {
    document.title = 'Craftsman by Kelios - Custom Business Tools';
    
    const setMeta = (property, content, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        const meta = document.querySelector(`meta[${attr}="${property}"]`);
        if (meta) meta.setAttribute('content', content);
    };
    
    const defaultDesc = 'We build the software your business actually needs. Custom internal tools that solve your specific problems delivered in weeks, not months.';
    setMeta('description', defaultDesc);
    setMeta('og:description', defaultDesc, true);
    setMeta('og:title', 'Craftsman by Kelios - Custom Business Tools', true);
    setMeta('og:url', 'https://craftsman.kelios.io/', true);
    setMeta('og:type', 'website', true);
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://craftsman.kelios.io/');
    
    const jsonLd = document.querySelector('script[data-blog-post-ld]');
    if (jsonLd) jsonLd.remove();
}

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            if (!supabase) {
                setNotFound(true);
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('slug', slug)
                .eq('published', true)
                .single();

            if (error || !data) {
                setNotFound(true);
            } else {
                setPost(data);
            }
            setLoading(false);
        }

        fetchPost();
        
        // Cleanup on unmount
        return () => resetMetaTags();
    }, [slug]);

    // Update SEO when post loads
    useEffect(() => {
        if (post) {
            updateMetaTags(post, slug);
        }
    }, [post, slug]);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[#F9F9F7] pt-28 pb-20 px-6">
                    <div className="max-w-3xl mx-auto animate-pulse">
                        <div className="h-4 w-32 bg-[#1a1a1a]/10 mb-8"></div>
                        <div className="h-6 w-24 bg-[#1a1a1a]/10 mb-4"></div>
                        <div className="h-12 w-full bg-[#1a1a1a]/10 mb-4"></div>
                        <div className="h-12 w-3/4 bg-[#1a1a1a]/10 mb-8"></div>
                        <div className="h-4 w-48 bg-[#1a1a1a]/10 mb-12"></div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-[#1a1a1a]/10"></div>
                            <div className="h-4 w-full bg-[#1a1a1a]/10"></div>
                            <div className="h-4 w-2/3 bg-[#1a1a1a]/10"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (notFound) {
        return <Navigate to="/" replace />;
    }

    const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <>
            <Navbar />
            <article className="min-h-screen bg-[#F9F9F7] pt-28 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Back link */}
                    <Link 
                        to="/#blog" 
                        className="inline-flex items-center gap-2 font-mono text-sm text-[#1a1a1a]/60 hover:text-[#FF6B35] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to articles
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        {/* Category */}
                        <div className="mb-4">
                            <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20">
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-[#1a1a1a]/50 font-mono text-sm">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.read_time}
                            </span>
                            {post.author && <span>By {post.author}</span>}
                        </div>
                    </header>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="flex-1 h-px bg-[#1a1a1a]/10"></div>
                        <div className="w-2 h-2 bg-[#FF6B35] rotate-45"></div>
                        <div className="flex-1 h-px bg-[#1a1a1a]/10"></div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div 
                            className="
                                [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:text-[#1a1a1a] [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-tight
                                [&>h3]:font-serif [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:text-[#1a1a1a] [&>h3]:mt-8 [&>h3]:mb-4
                                [&>p]:font-mono [&>p]:text-base [&>p]:text-[#1a1a1a]/70 [&>p]:leading-relaxed [&>p]:mb-6
                                [&>ul]:font-mono [&>ul]:text-base [&>ul]:text-[#1a1a1a]/70 [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:list-disc
                                [&>ul>li]:mb-2
                                [&>hr]:my-12 [&>hr]:border-[#1a1a1a]/10
                                [&_strong]:text-[#1a1a1a] [&_strong]:font-semibold
                                [&_a]:text-[#FF6B35] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:no-underline
                                [&_em]:italic
                            "
                            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
                        />
                    </div>

                    {/* CTA Box */}
                    <div className="mt-16 p-8 bg-white border border-[#1a1a1a] shadow-[6px_6px_0px_0px_#FF6B35]">
                        <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">
                            Have a problem that needs solving?
                        </h3>
                        <p className="font-mono text-sm text-[#1a1a1a]/60 mb-6">
                            Tell us what's not working. We'll figure out if we can help.
                        </p>
                        <a 
                            href="mailto:info@kelios.io?subject=Custom%20internal%20tool%20project"
                            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#FF6B35] hover:underline underline-offset-4"
                        >
                            Get in touch
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </a>
                    </div>
                </div>
            </article>
            <FooterSection />
        </>
    );
}
