import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const BlogCard = ({ post }) => {
    const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <Link 
            to={`/blog/${post.slug}`}
            className="group block relative bg-white border border-[#1a1a1a] p-6 transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[6px_6px_0px_0px_#FF6B35] flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[340px] md:w-[360px]"
        >
            {/* Corner fold effect */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-[#EEECE8] transition-all group-hover:border-t-[#FF6B35]/20"></div>
            
            {/* Category tag */}
            <div className="mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20">
                    {post.category}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="font-mono text-sm text-[#1a1a1a]/60 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#1a1a1a]/20">
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#1a1a1a]/50">{formattedDate}</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-[#1a1a1a]/50">
                        <Clock className="w-3 h-3" />
                        {post.read_time}
                    </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#1a1a1a]/30 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all" />
            </div>
        </Link>
    );
};

export default function BlogSection() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const scrollContainerRef = useRef(null);
    
    const postsPerPage = 3;

    useEffect(() => {
        async function fetchPosts() {
            if (!supabase) {
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('blog_posts')
                .select('slug, title, excerpt, category, published_at, read_time')
                .eq('published', true)
                .order('published_at', { ascending: false });

            if (error) {
                console.error('Error fetching posts:', error);
            } else {
                setPosts(data || []);
            }
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    
    const scrollToPage = (page) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 360;
            const gap = 24; // gap-6 = 24px
            const scrollPosition = page * (cardWidth + gap) * postsPerPage;
            container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            setCurrentPage(page);
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 360;
            const gap = 24;
            const scrollPosition = container.scrollLeft;
            const newPage = Math.round(scrollPosition / ((cardWidth + gap) * postsPerPage));
            if (newPage !== currentPage && newPage >= 0 && newPage < totalPages) {
                setCurrentPage(newPage);
            }
        }
    };

    const goToPrevious = () => {
        if (currentPage > 0) {
            scrollToPage(currentPage - 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages - 1) {
            scrollToPage(currentPage + 1);
        }
    };

    // Don't render section if no posts
    if (!loading && posts.length === 0) {
        return null;
    }

    return (
        <section id="blog" className="bg-[#EEECE8] py-28 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] mb-4">
                            From the Workshop
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-4">
                            Insights & Ideas
                        </h2>
                        <p className="text-lg text-[#1a1a1a]/60">
                            Practical advice on building better business operations.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    {!loading && posts.length > postsPerPage && (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={goToPrevious}
                                disabled={currentPage === 0}
                                className={`w-12 h-12 border border-[#1a1a1a] flex items-center justify-center transition-all ${
                                    currentPage === 0 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'hover:bg-[#1a1a1a] hover:text-white shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-[4px_4px_0px_0px_#1a1a1a] hover:-translate-x-[2px] hover:-translate-y-[2px]'
                                }`}
                                aria-label="Previous posts"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={goToNext}
                                disabled={currentPage >= totalPages - 1}
                                className={`w-12 h-12 border border-[#1a1a1a] flex items-center justify-center transition-all ${
                                    currentPage >= totalPages - 1 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'hover:bg-[#1a1a1a] hover:text-white shadow-[2px_2px_0px_0px_#1a1a1a] hover:shadow-[4px_4px_0px_0px_#1a1a1a] hover:-translate-x-[2px] hover:-translate-y-[2px]'
                                }`}
                                aria-label="Next posts"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Scrollable Blog Cards */}
            {loading ? (
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white border border-[#1a1a1a]/20 p-6 h-64 w-[360px] flex-shrink-0 animate-pulse">
                                <div className="h-4 w-20 bg-[#1a1a1a]/10 mb-4"></div>
                                <div className="h-6 w-full bg-[#1a1a1a]/10 mb-2"></div>
                                <div className="h-6 w-3/4 bg-[#1a1a1a]/10 mb-4"></div>
                                <div className="h-4 w-full bg-[#1a1a1a]/10 mb-2"></div>
                                <div className="h-4 w-2/3 bg-[#1a1a1a]/10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-72rem)/2+1.5rem)] snap-x snap-mandatory"
                    style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {posts.map((post) => (
                        <div key={post.slug} className="snap-start">
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            )}

            {/* Page Indicators */}
            {!loading && totalPages > 1 && (
                <div className="max-w-6xl mx-auto px-6 mt-8">
                    <div className="flex items-center justify-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToPage(index)}
                                className={`h-2 transition-all duration-300 ${
                                    index === currentPage 
                                        ? 'w-8 bg-[#FF6B35]' 
                                        : 'w-2 bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
