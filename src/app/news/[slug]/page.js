"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Building2, 
  ChevronRight,
  BookOpen,
  Sparkles,
  Award
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPostPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  const post = BLOG_POSTS[slug];
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-white font-sans">
        <HeaderNavbar activeRoute="/news" />
        <div className="pt-36 pb-20 max-w-screen-md mx-auto px-6 text-center min-h-[60vh] flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-400">
            <BookOpen size={28} />
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#dfb753] mb-2">ROYSONS INSIGHTS</p>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-950 uppercase tracking-tight mb-4">
            Article Not Found
          </h1>
          <p className="text-neutral-500 text-sm max-w-md mb-8">
            The article you are looking for may have been moved, updated, or is currently under editorial review.
          </p>
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-black tracking-[0.18em] uppercase text-black bg-[#dfb753] hover:bg-black hover:text-[#dfb753] transition-all duration-300 rounded-[2px]"
          >
            <ArrowLeft size={14} />
            BACK TO ALL INSIGHTS
          </Link>
        </div>
        <CorporateFooter />
      </main>
    );
  }

  // Get related articles (excluding the current one)
  const relatedArticles = Object.values(BLOG_POSTS).filter(p => p.slug !== slug);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#dfb753]/30 selection:text-neutral-900">
      <HeaderNavbar activeRoute="/news" />
      
      {/* Top Header & Breadcrumbs Bar */}
      <section className="pt-28 pb-8 bg-[#0e1215] text-white border-b border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-neutral-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#dfb753] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <Link href="/news" className="hover:text-[#dfb753] transition-colors">News & Insights</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-[#dfb753] truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2127] border border-[#dfb753]/40 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfb753] animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#dfb753]">
                {post.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800/80 text-[12px] text-neutral-300">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#dfb753]/20 border border-[#dfb753]/40 flex items-center justify-center text-[#dfb753]">
                  <Building2 size={14} />
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">ROYSONS Strategic Desk</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Corporate Research</p>
                </div>
              </div>

              <div className="h-4 w-px bg-neutral-800 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-neutral-400">
                <Calendar size={13} className="text-[#dfb753]" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-1.5 text-neutral-400">
                <Clock size={13} className="text-[#dfb753]" />
                <span>{post.readTime}</span>
              </div>

              <button
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#161c20] hover:bg-[#20282e] border border-neutral-700 hover:border-[#dfb753]/50 text-neutral-200 text-[11px] font-semibold rounded transition-all duration-200"
                title="Copy link to clipboard"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} className="text-[#dfb753]" />}
                <span>{copied ? "Link Copied!" : "Share Article"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="bg-neutral-50/50 py-8 sm:py-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl border border-neutral-200/80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Article Column */}
          <article className="w-full text-neutral-700 text-[16.5px] leading-[1.8] font-normal">
            {post.content}

            {/* Bottom Executive CTA Box */}
            <div className="mt-14 p-8 bg-gradient-to-br from-[#101518] to-[#1a2127] rounded-sm border border-neutral-800 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                  <Sparkles size={14} />
                  <span>Integrated Solutions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-3">
                  Partner with ROYSONS for Next-Generation Execution
                </h3>
                <p className="text-[14px] text-neutral-300 leading-relaxed mb-6 max-w-xl">
                  Connect with our sector specialists to discover how our integrated procurement, engineering, and infrastructure solutions can drive sustainable growth for your enterprise.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={post.ctaLink || "/contact"}
                    className="rs-cta-btn inline-flex items-center gap-2.5 px-6 py-3.5 text-[11.5px] font-black tracking-[0.16em] uppercase text-black border-2 border-[#dfb753] bg-[#dfb753] hover:bg-black hover:text-[#dfb753] hover:border-black transition-all duration-300 rounded-[2px]"
                  >
                    <span>{post.ctaText || "Connect With Us"}</span>
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-[11.5px] font-bold tracking-[0.14em] uppercase text-white hover:text-[#dfb753] border border-neutral-700 hover:border-[#dfb753] transition-all duration-300 rounded-[2px]"
                  >
                    <span>Contact Advisory Desk</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related Insights Carousel/Grid */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#0e1215] border-t border-neutral-800 font-sans text-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-800">
              <div>
                <p className="text-[10.5px] font-extrabold uppercase tracking-[0.25em] text-[#dfb753] mb-1.5">
                  KEEP EXPLORING
                </p>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  Related Perspectives & Insights
                </h2>
              </div>
              <Link 
                href="/news" 
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dfb753] hover:text-white transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-[#161c20] border border-neutral-800 hover:border-[#dfb753]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#0e1215]/90 border border-[#dfb753]/40 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#dfb753] uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-[#dfb753]" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-[#dfb753]" />
                          {item.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-white group-hover:text-[#dfb753] transition-colors line-clamp-2 leading-snug mb-4">
                        {item.title}
                      </h3>
                    </div>

                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#dfb753] group-hover:text-white transition-colors pt-4 border-t border-neutral-800/80"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CorporateFooter />
    </main>
  );
}
