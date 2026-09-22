"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp,
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Copy,
  Building2, 
  ChevronRight,
  ChevronDown,
  BookOpen, 
  Sparkles, 
  Award,
  List,
  Tag,
  ShieldCheck,
  Layers,
  Send,
  Mail,
  CheckCircle2,
  FileText,
  UserCheck,
  Compass
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPostPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  const allPosts = Object.values(BLOG_POSTS);
  const post = BLOG_POSTS[slug] || allPosts.find((p) => p.slug === slug);

  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  // Reading progress and active scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setShowScrollTop(window.scrollY > 450);

      if (post?.tableOfContents) {
        const headings = post.tableOfContents
          .map((item) => document.getElementById(item.id))
          .filter(Boolean);
        const scrollPos = window.scrollY + 140;

        for (let i = headings.length - 1; i >= 0; i--) {
          const heading = headings[i];
          if (heading.offsetTop <= scrollPos) {
            setActiveSection(heading.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 95;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
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

  // Related articles (exclude current post)
  const relatedArticles = allPosts.filter((p) => p.slug !== post.slug);

  // Previous & Next navigation
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // SEO JSON-LD Structured Data
  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://roy-sons-frontend.vercel.app/news/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": post.image ? `https://roy-sons-frontend.vercel.app${post.image}` : undefined,
    "datePublished": "2026-08-18T00:00:00+05:00",
    "dateModified": "2026-09-22T00:00:00+05:00",
    "author": {
      "@type": "Organization",
      "name": post.author?.name || "ROYSONS Strategic Intelligence Desk",
      "url": "https://roy-sons-frontend.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ROYSONS Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://roy-sons-frontend.vercel.app/logos/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "keywords": (post.tags || []).join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://roy-sons-frontend.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News & Perspectives",
        "item": "https://roy-sons-frontend.vercel.app/news"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": currentUrl
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#fafbfc] font-sans selection:bg-[#0a7a8c]/25 selection:text-[#042E3A] relative">
      {/* ─── SEO Structured Data (JSON-LD) ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── Reading Scroll Progress Bar ───────────────────────────────────── */}
      <div 
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150 ease-out shadow-xs pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #dfb753 0%, #009e75 50%, #088192 100%)",
        }}
        aria-hidden="true"
      />

      <HeaderNavbar activeRoute="/news" />
      
      {/* ─── Hero Header & Breadcrumbs Section ─────────────────────────────── */}
      <header 
        data-dark-section="true"
        className="roysons-preserve-dark relative pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 overflow-hidden text-white border-b border-[#0a7a8c]/30 shadow-md"
        style={{
          background: "linear-gradient(135deg, #02161f 0%, #042E3A 45%, #075d6d 80%, #004d40 100%)",
          backgroundColor: "#042E3A",
        }}
      >
        {/* Ambient Decorative Accents */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#0a7a8c]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/75 mb-5 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/50 shrink-0" />
            <Link href="/news" className="hover:text-white transition-colors">News &amp; Perspectives</Link>
            <ChevronRight size={12} className="text-white/50 shrink-0" />
            <span className="text-[#dfb753] font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">{post.category}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/15 border border-white/25 backdrop-blur-md rounded-full mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#dfb753] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white">
                {post.category}
              </span>
            </div>

            {/* H1 Article Title */}
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.18] mb-5 drop-shadow-sm"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            >
              {post.title}
            </h1>

            {/* Sub-headline / Executive Hook */}
            {post.excerpt && (
              <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-6 max-w-3xl">
                {post.excerpt}
              </p>
            )}

            {/* Author & Publication Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/15 text-xs sm:text-[13px] text-white/90">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 overflow-hidden shadow-xs">
                    {post.author?.avatar ? (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="object-contain p-1"
                      />
                    ) : (
                      <Building2 size={18} />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-white leading-tight flex items-center gap-1.5">
                      <span>{post.author?.name || "ROYSONS Strategic Desk"}</span>
                      <CheckCircle2 size={13} className="text-[#dfb753]" />
                    </p>
                    <p className="text-[11px] text-white/75 font-medium">
                      {post.author?.team || "Corporate Research Unit"}
                    </p>
                  </div>
                </div>

                <div className="h-5 w-px bg-white/25 hidden md:block" />

                {/* Date */}
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar size={14} className="text-[#dfb753]" />
                  <time dateTime="2026-08-18">{post.date}</time>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-1.5 text-white/90">
                  <Clock size={14} className="text-[#dfb753]" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Button Group */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  title="Share / Copy Link"
                >
                  {copied ? <Check size={14} className="text-emerald-300" /> : <Share2 size={14} className="text-white" />}
                  <span>{copied ? "Link Copied!" : "Share Article"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Featured Hero Image Showcase ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 mb-10 relative z-20">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 ring-1 ring-black/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-[#042E3A]/90 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/20 text-white shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dfb753]" />
            <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider">
              {post.category} • ROYSONS Corporate Intelligence
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Two-Column Content & Interactive Sticky Sidebar ──────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* ═════════ LEFT / MAIN ARTICLE COLUMN (8 cols) ═════════ */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1. Executive Brief / Key Takeaways Card */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <section 
                aria-label="Key Takeaways"
                className="p-6 sm:p-7 rounded-2xl border border-[#0a7a8c]/25 bg-gradient-to-br from-[#f0fdfa] via-[#f8fafc] to-white shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0a7a8c] mb-3.5">
                  <Sparkles size={16} className="text-[#0a7a8c]" />
                  <span>Executive Brief • Key Takeaways</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#042E3A] tracking-tight mb-4">
                  Essential Strategic Highlights at a Glance
                </h3>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-800 text-[15px] sm:text-[16px] leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#0a7a8c]/15 text-[#0a7a8c] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="font-medium text-neutral-800">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 2. Mobile Table of Contents Accordion (< 1024px) */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="block lg:hidden bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#042E3A] bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <List size={16} className="text-[#0a7a8c]" />
                    <span>Table of Contents (Jump to Section)</span>
                  </span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${mobileTocOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileTocOpen && (
                  <div className="p-4 space-y-1.5 border-t border-neutral-200 bg-white">
                    {post.tableOfContents.map((item) => {
                      const isCur = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
                            isCur 
                              ? "bg-[#0a7a8c]/10 text-[#0a7a8c] font-black" 
                              : "text-neutral-700 hover:bg-neutral-50 hover:text-[#0a7a8c]"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isCur ? "bg-[#0a7a8c]" : "bg-neutral-300"}`} />
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* 3. Main Article Body */}
            <article className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200/80 shadow-xs text-neutral-800 text-[17px] sm:text-[18px] leading-[1.8] font-normal">
              {post.content}

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-neutral-200">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-500 mb-3">
                    <Tag size={13} className="text-[#0a7a8c]" />
                    <span>Tagged Topics &amp; Sector Keywords</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-lg bg-[#f0fdfa] border border-[#0a7a8c]/20 text-[#042E3A] font-bold text-xs hover:border-[#0a7a8c] transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Share Bar Inside Article */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f8fafc] p-4.5 rounded-xl">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-wider">
                  <Share2 size={16} className="text-[#0a7a8c]" />
                  <span>Share This Perspective</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-md bg-[#25D366] text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>WhatsApp</span>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-md bg-[#0077B5] text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>LinkedIn</span>
                  </a>
                  {/* X / Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-md bg-[#000000] text-white text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>X</span>
                  </a>
                  {/* Copy Link */}
                  <button
                    onClick={handleShare}
                    className="px-3.5 py-1.5 rounded-md bg-white border border-neutral-300 text-neutral-800 text-xs font-bold hover:bg-neutral-100 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Bottom Executive CTA Box */}
              <div 
                data-dark-section="true"
                className="roysons-preserve-dark mt-10 p-7 sm:p-9 rounded-2xl text-white relative overflow-hidden shadow-xl border border-[#0a7a8c]/35"
                style={{
                  background: "linear-gradient(135deg, #02161f 0%, #042E3A 40%, #075d6d 80%, #0a7a8c 100%)",
                  backgroundColor: "#042E3A",
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#dfb753] text-xs font-black uppercase tracking-[0.2em] mb-3">
                    <Sparkles size={15} />
                    <span>INTEGRATED STRATEGIC EXECUTION</span>
                  </div>
                  <h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white mb-3 leading-snug"
                    style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
                  >
                    Partner with ROYSONS for Next-Generation Execution
                  </h3>
                  <p 
                    className="text-sm sm:text-base text-white/90 leading-relaxed mb-7 max-w-2xl"
                    style={{ color: "rgba(255, 255, 255, 0.9)", WebkitTextFillColor: "rgba(255, 255, 255, 0.9)" }}
                  >
                    Connect with our sector specialists to discover how our integrated procurement, engineering, and infrastructure solutions can drive sustainable growth for your enterprise.
                  </p>

                  <div className="flex flex-wrap items-center gap-3.5">
                    <Link
                      href={post.ctaLink || "/contact"}
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs sm:text-[13px] font-black tracking-[0.14em] uppercase text-[#042E3A] bg-[#dfb753] hover:bg-[#edd07a] transition-all duration-300 rounded-lg shadow-md hover:scale-[1.02]"
                      style={{ backgroundColor: "#dfb753", color: "#042E3A" }}
                    >
                      <span>{post.ctaText || "Connect With Us"}</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-white hover:text-white border border-white/35 hover:bg-white/10 transition-all duration-300 rounded-lg"
                    >
                      <span>Contact Advisory Desk</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. Previous & Next Article Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/news/${prevPost.slug}`}
                  className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-[#0a7a8c] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0a7a8c] uppercase tracking-wider mb-2">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Insight</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#0a7a8c] transition-colors line-clamp-2 leading-snug">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : <div />}

              {nextPost && (
                <Link
                  href={`/news/${nextPost.slug}`}
                  className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-[#0a7a8c] hover:shadow-md transition-all group flex flex-col justify-between text-right sm:text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-xs font-bold text-[#0a7a8c] uppercase tracking-wider mb-2">
                    <span>Next Insight</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#0a7a8c] transition-colors line-clamp-2 leading-snug">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>

          {/* ═════════ RIGHT / STICKY INTERACTIVE SIDEBAR (4 cols) ═════════ */}
          <aside className="lg:col-span-4 space-y-7 sticky top-24">
            
            {/* 1. Interactive Table of Contents (Desktop) */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-2 pb-3.5 mb-3.5 border-b border-neutral-200 text-xs font-black uppercase tracking-[0.16em] text-[#042E3A]">
                  <List size={16} className="text-[#0a7a8c]" />
                  <span>In This Article</span>
                </div>
                <nav className="space-y-1">
                  {post.tableOfContents.map((item, i) => {
                    const isCur = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left py-2 px-3 rounded-lg text-xs sm:text-[13px] transition-all flex items-start gap-2.5 cursor-pointer ${
                          isCur
                            ? "bg-[#f0fdfa] text-[#0a7a8c] font-black border-l-2 border-[#0a7a8c]"
                            : "text-neutral-600 hover:text-[#042E3A] hover:bg-neutral-50 font-medium"
                        }`}
                      >
                        <span className={`text-[10px] font-mono mt-0.5 ${isCur ? "text-[#0a7a8c] font-bold" : "text-neutral-400"}`}>
                          0{i + 1}
                        </span>
                        <span className="leading-snug line-clamp-2">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* 2. Article Specifications Card (Matching Reference Design) */}
            {post.sidebarSpecs && (
              <div className="bg-[#042E3A] text-white rounded-2xl p-6 shadow-md border border-[#0a7a8c]/30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#dfb753] uppercase tracking-[0.2em] mb-4">
                  <FileText size={14} />
                  <span>Strategic Specification</span>
                </div>
                <div className="space-y-3 text-xs divide-y divide-white/10">
                  {post.sidebarSpecs.map((spec, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-2.5 flex flex-col" : "flex flex-col"}>
                      <span className="text-[10.5px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">
                        {spec.label}
                      </span>
                      <span className="text-white font-bold text-[13px]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Author / Research Desk Profile Card */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider text-[#0a7a8c]">
                <UserCheck size={15} />
                <span>Editorial Credibility</span>
              </div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#042E3A] flex items-center justify-center text-white shrink-0 overflow-hidden shadow-xs">
                  {post.author?.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="object-contain p-1"
                    />
                  ) : (
                    <Building2 size={22} className="text-[#dfb753]" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#042E3A] leading-snug">
                    {post.author?.name || "ROYSONS Strategic Intelligence Desk"}
                  </h4>
                  <p className="text-xs text-[#0a7a8c] font-semibold mt-0.5">
                    {post.author?.role || "Corporate Strategy Unit"}
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Articles authored by ROYSONS Strategic Intelligence combine field engineering data, public contracting compliance, and global trade research.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-lg bg-[#f0fdfa] border border-[#0a7a8c]/25 hover:bg-[#0a7a8c] hover:text-white text-[#0a7a8c] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult With Author / Desk</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* 4. Strategic Advisory & Consultation CTA Card (Matching Turquoise/Green Card) */}
            <div 
              data-dark-section="true"
              className="roysons-preserve-dark bg-gradient-to-br from-[#042E3A] via-[#075d6d] to-[#0a7a8c] rounded-2xl p-7 text-white shadow-xl border border-white/20 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-4 shadow-sm">
                <Compass size={24} className="text-[#dfb753]" />
              </div>

              <h4 
                className="text-lg sm:text-xl font-black text-white tracking-tight mb-2 leading-snug"
                style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              >
                Sector Inquiries &amp; Advisory
              </h4>
              <p 
                className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6"
                style={{ color: "rgba(255, 255, 255, 0.9)", WebkitTextFillColor: "rgba(255, 255, 255, 0.9)" }}
              >
                Looking to deploy solutions in this sector? Connect directly with our industry directors and engineering advisory desk.
              </p>

              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-lg bg-white hover:bg-neutral-100 text-[#042E3A] font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
                style={{ backgroundColor: "#ffffff", color: "#042E3A" }}
              >
                <span>Request Strategic Consultation</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ─── Stay Informed Newsletter Section (Matching Reference Image) ──── */}
      <section 
        data-dark-section="true"
        className="roysons-preserve-dark py-12 px-4 sm:px-6 bg-[#031c24] text-white border-t border-b border-[#0a7a8c]/30"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#dfb753] block mb-1">
              STAY INFORMED
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Subscribe to ROYSONS Corporate Insights &amp; Market Reports
            </h3>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your corporate email..."
              required
              className="w-full sm:w-80 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-hidden focus:border-[#dfb753] transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#009e75] hover:bg-[#008764] text-white font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check size={15} />
                  <span>SUBSCRIBED!</span>
                </>
              ) : (
                <>
                  <span>SUBSCRIBE</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ─── Related Perspectives & Insights Grid ──────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-neutral-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {relatedArticles.map((item, idx) => (
                <article 
                  key={idx}
                  className="group bg-white border border-neutral-200 hover:border-[#0a7a8c] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 bg-white/95 border border-[#0a7a8c]/30 backdrop-blur-md px-3.5 py-1 rounded-full text-[10.5px] font-black text-[#0a7a8c] uppercase tracking-wider shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-[#0a7a8c]" />
                          <time>{item.date}</time>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} className="text-[#0a7a8c]" />
                          <span>{item.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-neutral-950 group-hover:text-[#0a7a8c] transition-colors line-clamp-2 leading-snug mb-3">
                        {item.title}
                      </h3>

                      {item.excerpt && (
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                          {item.excerpt}
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-black tracking-[0.16em] uppercase text-[#0a7a8c] group-hover:text-[#042E3A] transition-colors pt-4 border-t border-neutral-100"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Floating Back-to-Top Button ───────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#042E3A] text-white hover:bg-[#0a7a8c] shadow-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <CorporateFooter />
    </main>
  );
}
