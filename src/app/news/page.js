"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Search, 
  Sparkles, 
  Building2, 
  ChevronRight,
  TrendingUp,
  Tag
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function NewsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = Object.values(BLOG_POSTS);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allPosts.map(post => post.category)))];

  // Filter posts based on category and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts[0];
  const gridPosts = filteredPosts;

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#dfb753]/30 selection:text-neutral-900">
      <HeaderNavbar activeRoute="/news" />

      {/* Hero Header Section */}
      <section className="pt-32 pb-16 bg-[#0e1215] text-white border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-neutral-400 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#dfb753] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-[#dfb753]">News & Perspectives</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#dfb753] mb-3">
              THOUGHT LEADERSHIP & CORPORATE PERSPECTIVES
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
              Insights & Strategic Intelligence
            </h1>
            <p className="text-[14.5px] sm:text-[15.5px] text-neutral-400 leading-relaxed max-w-2xl font-normal">
              Explore in-depth analyses, industry trends, and strategic perspectives across healthcare, infrastructure, international trade, and diversified global business models.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#dfb753] text-black shadow-md"
                      : "bg-[#161c20] text-neutral-400 hover:text-white hover:bg-[#20282e] border border-neutral-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search perspectives..."
                className="w-full bg-[#161c20] border border-neutral-800 text-white placeholder-neutral-500 text-[12.5px] px-3.5 py-2.5 pl-9 rounded-sm focus:outline-none focus:border-[#dfb753] transition-colors"
              />
              <Search size={14} className="absolute left-3 top-3.5 text-neutral-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section (shown when no search active and 'All' category selected) */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <section className="py-12 bg-neutral-50/60 border-b border-neutral-200/70">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#dfb753] mb-4">
              <TrendingUp size={14} />
              <span>Featured Perspective</span>
            </div>

            <div className="bg-white rounded-sm border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-neutral-900">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#dfb753]/40 px-3 py-1.5 rounded-sm text-[10.5px] font-black text-[#dfb753] uppercase tracking-wider">
                  {featuredPost.category}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11.5px] text-neutral-500 font-semibold mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#dfb753]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#dfb753]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight leading-snug mb-4 hover:text-[#dfb753] transition-colors">
                    <Link href={`/news/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-[14px] text-neutral-600 leading-relaxed font-normal mb-6 line-clamp-3">
                    Modern healthcare demands more than individual equipment. Discover how integrated infrastructure, clean room systems, and advanced technology engineering drive the next generation of patient outcomes.
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={`/news/${featuredPost.slug}`}
                    className="rs-cta-btn inline-flex items-center gap-2 px-5 py-3 text-[11px] font-black tracking-[0.16em] uppercase text-black border-2 border-[#dfb753] bg-[#dfb753] hover:bg-black hover:text-[#dfb753] hover:border-black transition-all duration-300 rounded-[2px]"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </Link>

                  <span className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider">
                    ROYSONS Desk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 pb-4 border-b border-neutral-200">
            <div>
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.25em] text-[#dfb753] mb-1.5">
                ALL PERSPECTIVES
              </p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950">
                Latest Publications ({filteredPosts.length})
              </h2>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center bg-neutral-50 rounded-sm border border-neutral-100">
              <p className="text-neutral-500 text-sm font-medium">
                No articles found matching "{searchQuery}" in category "{selectedCategory}".
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#dfb753] hover:text-black underline transition-colors"
              >
                Clear Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col bg-white border border-neutral-200/80 rounded-sm overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-neutral-300 flex-1"
                >
                  <div className="relative w-full h-56 bg-neutral-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-[#dfb753]/40 px-2.5 py-1 rounded text-[9.5px] font-black text-[#dfb753] uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 text-[11px] text-neutral-400 font-bold uppercase tracking-wider mb-3">
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

                      <h3 className="text-[17px] font-black text-neutral-950 group-hover:text-[#dfb753] transition-colors leading-snug mb-4 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center gap-2 text-[10.5px] font-black tracking-[0.16em] uppercase text-black group-hover:text-[#dfb753] transition-colors"
                      >
                        <span>READ ARTICLE</span>
                        <ArrowRight size={11} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                        ROYSONS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Corporate Call To Action Banner */}
      <section className="py-16 bg-[#101518] text-white border-t border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#dfb753] mb-3">
              JOIN THE CONVERSATION
            </p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
              Building Strategic Solutions Across Industries
            </h2>
            <p className="text-[14px] text-neutral-400 leading-relaxed mb-8">
              Whether you require healthcare engineering, government contracting, IT infrastructure, or global trade solutions, ROYSONS brings together the capabilities to deliver excellence.
            </p>
            <Link
              href="/contact"
              className="rs-cta-btn inline-flex items-center gap-2.5 px-8 py-4 text-[11.5px] font-black tracking-[0.16em] uppercase text-black border-2 border-[#dfb753] bg-[#dfb753] hover:bg-black hover:text-[#dfb753] hover:border-black transition-all duration-300 rounded-[2px]"
            >
              <span>Connect with Our Executive Team</span>
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
