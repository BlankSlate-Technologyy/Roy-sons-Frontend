"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BedDouble,
  Building,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  Globe,
  Headphones,
  HeartPulse,
  Hotel,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  PartyPopper,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Users2,
  Waves,
  Zap,
  ArrowRight,
  Flame,
  Coffee,
  Check,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  BookingModal,
  ListingDetailModal,
} from "./components/SwissHutsShared";
import {
  HERO_SLIDES,
  HOSPITALITY_LISTINGS,
  HOSPITALITY_SERVICES,
  GUEST_EXPERIENCES,
} from "./swiss-huts-data";

const STATS = [
  { icon: CalendarCheck, value: "20+", label: "Years of Hospitality\nExcellence" },
  { icon: Hotel, value: "50+", label: "Hotels & Resorts\nManaged" },
  { icon: Users2, value: "500K+", label: "Happy Guests\nServed Annually" },
  { icon: Users, value: "800+", label: "Hospitality &\nCulinary Staff" },
  { icon: Award, value: "98%", label: "Guest Satisfaction\nRating" },
];

const CATEGORIES = [
  "All",
  "Alpine Chalets",
  "Mountain Resorts",
  "Boutique Hotels",
  "Eco-Lodges",
  "Tourism Expeditions",
  "Culinary & Dining",
  "Corporate Retreats",
  "Wellness Spas",
  "Serviced Apartments",
];

const FAQS = [
  {
    q: "What types of accommodations does Swiss Hut provide?",
    a: "Swiss Hut manages a comprehensive hospitality portfolio including private timber alpine chalets with heated jacuzzis, high-altitude mountain resorts, 5-star boutique city hotels, wilderness eco-lodges, and luxury glamping domes across Pakistan's most scenic valleys and metropolitan centers.",
  },
  {
    q: "How can I book a chalet or tour package with Swiss Hut?",
    a: "You can book directly using the 'Book Stay' button on our website, select your dates and room preference, or reach our 24/7 Guest Concierge at 0092-42-38924737 / WhatsApp at 0092-304-7527498. No prepayment is required today for initial reservation requests.",
  },
  {
    q: "Does Swiss Hut provide guided mountain tourism expeditions?",
    a: "Yes. We operate fully serviced adventure tourism packages including K2 Basecamp luxury treks, Swat & Hunza cultural safaris, and private 4x4 road tours accompanied by certified high-altitude mountain guides, chef-cooked meals, and private camp support.",
  },
  {
    q: "Can Swiss Hut host corporate executive retreats and destination weddings?",
    a: "Absolutely. Our mountain properties feature pillarless banquet ballrooms, state-of-the-art audiovisual setups, breakout pine lawns, and custom multi-course dining for up to 200 guests.",
  },
  {
    q: "Does Swiss Hut partner with third-party hotel and resort owners?",
    a: "Yes. We provide turnkey hospitality management contracts, revenue optimization, luxury housekeeping training, and Swiss architectural consulting for hotel owners seeking 5-star operational standards.",
  },
];

export default function SwissHutsHomePage() {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedListingForBooking, setSelectedListingForBooking] = useState(null);
  const [activeDetailListing, setActiveDetailListing] = useState(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Auto-advance Slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Filtering and Sorting
  const filteredListings = HOSPITALITY_LISTINGS.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.priceNum - b.priceNum;
    if (sortBy === "price-high") return b.priceNum - a.priceNum;
    if (sortBy === "rating") return b.rating - a.rating;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleOpenBookingFor = (listing) => {
    setSelectedListingForBooking(listing);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#1E293B] font-sans antialiased overflow-x-hidden">
      {/* Reusable Navbar constrained to max-w-7xl mx-auto */}
      <SwissHutsNavbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* ─── Hero Header Slider Section ─── */}
      <section
        className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] bg-slate-900 overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Realistic Photo */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className={`object-cover transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />

              {/* Gradient Scrims for Perfect Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-black/30" />

              {/* Slide Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-2xl text-white">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#C5A059]">
                    <Sparkles size={14} className="text-[#C5A059]" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed mb-8 drop-shadow-xs">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl hover:opacity-95 hover:scale-102 transition-all duration-300 cursor-pointer flex items-center gap-2"
                      style={{ backgroundColor: theme.accentGold }}
                    >
                      <CalendarCheck size={16} />
                      <span>Reserve Your Stay</span>
                    </button>

                    <a
                      href="#listings"
                      className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-xs flex items-center gap-2"
                    >
                      <span>Explore All Listings</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Controls: Prev / Next */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide
                  ? "w-8 bg-[#C5A059]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Fast Booking Quick Bar ─── */}
      <section className="bg-slate-50 border-b py-4 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border p-4 sm:p-5 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4" style={{ borderColor: theme.border }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <Hotel size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Direct Reservation Desk
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Alpine Chalets · Mountain Resorts · Luxury Tours · Guaranteed Best Rates
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#C5A059] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck size={14} className="text-[#C5A059]" />
                <span>Check Availability &amp; Book</span>
              </button>
              <a
                href="tel:00924238924737"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: theme.border }}
              >
                <Phone size={14} className="text-[#C5A059]" />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers / Stats Counter Section ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs hover:shadow-md transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#1E293B]/5 group-hover:bg-[#C5A059]/15 transition-colors">
                    <Icon size={22} style={{ color: theme.accentGold }} />
                  </div>
                  <div className="mb-1 text-slate-900">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Comprehensive Listings Section ("Listings of each and every type") ─── */}
      <section id="listings" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Our Complete Hospitality Portfolio</SectionLabel>
            <SectionHeading className="mb-4">
              Explore Stays, Resorts &amp; <span style={{ color: theme.accentGold }}>Mountain Experiences</span>
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
              From handcrafted timber chalets with roaring fireplaces to five-star mountain resorts, capital boutique suites, off-grid eco-pods, guided Karakoram treks, and fine dining hearths.
            </p>
          </div>

          {/* Search & Filters Toolbar */}
          <div className="bg-white rounded-3xl border p-4 sm:p-6 mb-10 shadow-sm" style={{ borderColor: theme.border }}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 pb-6 border-b" style={{ borderColor: theme.border }}>
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by chalet name, destination, valley..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E293B] bg-slate-50/60"
                  style={{ borderColor: theme.border }}
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
                <SlidersHorizontal size={16} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-500 uppercase">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                  style={{ borderColor: theme.border }}
                >
                  <option value="featured">Featured Stays</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-[#1E293B] text-white shadow-md"
                        : "bg-slate-50 border text-slate-700 hover:border-[#1E293B] hover:bg-white"
                    }`}
                    style={{ borderColor: active ? theme.slate : theme.border }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listings Cards Grid */}
          {filteredListings.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border" style={{ borderColor: theme.border }}>
              <Hotel className="mx-auto text-slate-300 mb-3" size={48} />
              <h4 className="text-lg font-bold text-slate-800 mb-2">No accommodations found</h4>
              <p className="text-sm text-slate-500 mb-6">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase bg-[#1E293B] text-white"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-white/95 text-[#1E293B] shadow-sm">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C5A059] text-white shadow-xs">
                          {item.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs font-bold flex items-center gap-1">
                          <Star size={12} className="fill-[#C5A059] text-[#C5A059]" />
                          {item.rating} ({item.reviewsCount})
                        </span>
                        <span className="text-xs font-bold text-slate-200">
                          {item.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                        <span>{item.location}</span>
                      </div>

                      <h3 className="text-lg font-black leading-snug text-[#1E293B] mb-2 group-hover:text-[#C5A059] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5 line-clamp-3">
                        {item.summary}
                      </p>

                      {/* Amenities Preview */}
                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                          Key Amenities:
                        </p>
                        {item.amenities.slice(0, 3).map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 size={13} className="text-[#C5A059] flex-shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-4 border-t mt-auto" style={{ borderColor: theme.border }}>
                    <button
                      type="button"
                      onClick={() => handleOpenBookingFor(item)}
                      className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#C5A059] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CalendarCheck size={14} className="text-[#C5A059]" />
                      <span>Book Stay</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Core Hospitality & Tourism Services ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Full-Spectrum Solutions</SectionLabel>
            <SectionHeading className="mb-4">
              Turnkey Hospitality &amp; <span style={{ color: theme.accentGold }}>Tourism Operations</span>
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
              We engineer, develop, and operate high-performing hospitality properties with Swiss precision, unmatched guest retention, and exceptional culinary quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOSPITALITY_SERVICES.map((s) => (
              <div
                key={s.id}
                className="rounded-3xl border p-8 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Hotel size={26} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] block mb-1">
                    {s.metrics}
                  </span>
                  <h3 className="text-lg font-black text-[#1E293B] mb-3 group-hover:text-[#C5A059] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-6">
                    {s.desc}
                  </p>
                </div>

                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1E293B] hover:text-[#C5A059] transition-colors pt-4 border-t"
                  style={{ borderColor: theme.border }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Signature Guest Experiences Highlight ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#1E293B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-[#C5A059] mb-4">
                <Sparkles size={14} />
                <span>The Swiss Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
                Alpine Comfort Engineered For Unforgettable Memories
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-8">
                Every Swiss Hut destination represents a harmonious blend of authentic regional warmth, Swiss alpine thermal craftsmanship, and five-star guest etiquette.
              </p>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xl hover:opacity-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
                style={{ backgroundColor: theme.accentGold }}
              >
                <CalendarCheck size={16} />
                <span>Reserve Your Experience</span>
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GUEST_EXPERIENCES.map((exp) => (
                <div
                  key={exp.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                    <Flame size={20} />
                  </div>
                  <h4 className="text-base font-black mb-2 text-white">{exp.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel center>Guest Information</SectionLabel>
            <SectionHeading className="mb-4">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-sm text-slate-600">
              Clear answers regarding reservations, check-in policies, tour itineraries, and event booking.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="border rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-200"
                  style={{ borderColor: theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#C5A059] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 border-t pt-3 bg-white" style={{ borderColor: theme.border }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-[#C5A059] mb-4">
            <Headphones size={14} />
            <span>24/7 Guest Concierge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Plan Your Scenic Alpine Getaway Today
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you desire a private mountain chalet with a heated outdoor jacuzzi or a corporate retreat offsite in the pine ridges, our team is ready to curate your stay.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#b08e4d] transition-all shadow-lg cursor-pointer flex items-center gap-2"
            >
              <CalendarCheck size={16} />
              <span>Book Your Stay Now</span>
            </button>
            <Link
              href="/group-companies/swiss-huts/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              Contact Guest Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedListingForBooking(null);
        }}
        preselectedStay={selectedListingForBooking}
      />

      <ListingDetailModal
        listing={activeDetailListing}
        onClose={() => setActiveDetailListing(null)}
        onBookNow={(listing) => {
          setSelectedListingForBooking(listing);
          setIsBookingOpen(true);
        }}
      />

      {/* Footer */}
      <SwissHutsFooter />
    </main>
  );
}