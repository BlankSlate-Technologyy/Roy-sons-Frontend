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
        <div className="pt-32 pb-20 max-w-screen-md mx-auto px-6 text-center min-h-[60vh] flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/20 flex items-center justify-center mb-5 text-[#0a7a8c]">
            <BookOpen size={28} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0a7a8c] mb-2">ROYSONS INSIGHTS</p>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight mb-3">
            Article Not Found
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
            The article you are looking for may have been moved, updated, or is currently under editorial review.
          </p>
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2.5 px-7 py-3 text-xs font-black tracking-[0.16em] uppercase text-white bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] transition-all duration-300 rounded-full shadow-md"
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
    <main className="min-h-screen bg-white font-sans selection:bg-[#0a7a8c]/20 selection:text-[#042E3A]">
      <HeaderNavbar activeRoute="/news" />
      
      {/* Top Header & Breadcrumbs Bar - Gradient Header for high visibility */}
      <section 
        data-dark-section="true"
        className="roysons-preserve-dark relative pt-24 sm:pt-28 pb-8 sm:pb-10 px-4 sm:px-6 overflow-hidden text-white border-b border-[#0a7a8c]/25 shadow-sm"
        style={{
          background: "linear-gradient(90deg, #005f77 0%, #088192 50%, #009e75 100%)",
          backgroundColor: "#088192",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/80 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/60" />
            <Link href="/news" className="hover:text-white transition-colors">News &amp; Insights</Link>
            <ChevronRight size={12} className="text-white/60" />
            <span className="text-white font-bold truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
          </div>

          <div>
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white">
                {post.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-5 drop-shadow-sm"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            >
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/20 text-xs sm:text-[13px] text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <Building2 size={15} />
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">ROYSONS Strategic Desk</p>
                  <p className="text-[10.5px] text-white/75 uppercase tracking-wider">Corporate Research</p>
                </div>
              </div>

              <div className="h-4 w-px bg-white/30 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-white/90">
                <Calendar size={14} className="text-white" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-1.5 text-white/90">
                <Clock size={14} className="text-white" />
                <span>{post.readTime}</span>
              </div>

              <button
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/20 hover:bg-white/30 border border-white/35 text-white text-xs font-bold rounded-full transition-all duration-200 cursor-pointer shadow-2xs"
                title="Copy link to clipboard"
              >
                {copied ? <Check size={13} className="text-emerald-300" /> : <Share2 size={13} className="text-white" />}
                <span>{copied ? "Link Copied!" : "Share Article"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Layout - Zero Excess Space */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pb-16">
        {/* Main Featured Image directly integrated */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-[#0a7a8c]/20 mb-8 sm:mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Main Article Text */}
        <article className="w-full text-neutral-800 text-[17px] sm:text-[18px] leading-[1.8] font-normal">
          {post.content}

          {/* Bottom Executive CTA Box */}
          <div 
            data-dark-section="true"
            className="roysons-preserve-dark mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl text-white relative overflow-hidden shadow-xl border border-[#0a7a8c]/30"
            style={{
              background: "linear-gradient(135deg, #042E3A 0%, #075d6d 50%, #0a7a8c 100%)",
              backgroundColor: "#042E3A",
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#2dd4bf] text-xs font-black uppercase tracking-[0.2em] mb-2.5">
                <Sparkles size={14} />
                <span>Integrated Solutions</span>
              </div>
              <h3 
                className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-white mb-2.5 leading-snug"
                style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              >
                Partner with ROYSONS for Next-Generation Execution
              </h3>
              <p 
                className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 max-w-xl"
                style={{ color: "rgba(255, 255, 255, 0.9)", WebkitTextFillColor: "rgba(255, 255, 255, 0.9)" }}
              >
                Connect with our sector specialists to discover how our integrated procurement, engineering, and infrastructure solutions can drive sustainable growth for your enterprise.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={post.ctaLink || "/contact"}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#042E3A] bg-white hover:bg-neutral-100 transition-all duration-300 rounded-full shadow-md hover:scale-105"
                  style={{ backgroundColor: "#ffffff", color: "#042E3A" }}
                >
                  <span className="font-black">{post.ctaText || "Connect With Us"}</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-white hover:text-white border border-white/40 hover:bg-white/10 transition-all duration-300 rounded-full"
                >
                  <span>Contact Advisory Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Related Insights Grid - Clean and Visible */}
      {relatedArticles.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#f8fafc] border-t border-neutral-200 font-sans">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3.5 border-b border-neutral-200">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0a7a8c] mb-1.5">
                  KEEP EXPLORING
                </p>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#042E3A]">
                  Related Perspectives &amp; Insights
                </h2>
              </div>
              <Link 
                href="/news" 
                className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#0a7a8c] hover:text-[#042E3A] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedArticles.map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-white border border-neutral-200 hover:border-[#0a7a8c] rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 border border-[#0a7a8c]/30 backdrop-blur-sm px-3 py-1 rounded-full text-[10.5px] font-black text-[#0a7a8c] uppercase tracking-wider shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-[#0a7a8c]" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} className="text-[#0a7a8c]" />
                          {item.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-[#0a7a8c] transition-colors line-clamp-2 leading-snug mb-4">
                        {item.title}
                      </h3>
                    </div>

                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-black tracking-[0.16em] uppercase text-[#0a7a8c] group-hover:text-[#042E3A] transition-colors pt-4 border-t border-neutral-100"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
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
