"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  CalendarCheck,
  Award,
  Users2,
  ShieldCheck,
  Waves,
  Compass,
  Star,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  BookingModal,
  ListingDetailModal,
} from "../components/SwissHutsShared";
import { HOSPITALITY_LISTINGS } from "../swiss-huts-data";

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

export default function SwissHutsDestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modals
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedListingForBooking, setSelectedListingForBooking] = useState(null);
  const [activeDetailListing, setActiveDetailListing] = useState(null);

  const filtered = HOSPITALITY_LISTINGS.filter((d) => {
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.priceNum - b.priceNum;
    if (sortBy === "price-high") return b.priceNum - a.priceNum;
    if (sortBy === "rating") return b.rating - a.rating;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleOpenBooking = (listing) => {
    setSelectedListingForBooking(listing);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#1E293B] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-slate-50 to-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Resort &amp; Chalet Portfolio</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
              Signature Resorts, Chalets &amp; <span style={{ color: theme.accentGold }}>Scenic Stays</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8 text-slate-600">
              Browse our complete catalog of mountain timber chalets with heated jacuzzis, five-star boutique city suites, lakeside eco-villas, and wilderness glamping domes across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, region, or accommodation type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E293B] transition-all bg-white shadow-sm"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills & Sort Bar */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 border-b bg-white sticky top-[65px] z-30 shadow-xs" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
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

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
              {filtered.length} listings available
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl border text-xs font-bold text-slate-700 bg-white"
              style={{ borderColor: theme.border }}
            >
              <option value="featured">Featured First</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border" style={{ borderColor: theme.border }}>
              <Hotel className="mx-auto text-slate-300 mb-3" size={48} />
              <h4 className="text-lg font-bold text-slate-800 mb-2">No accommodations found</h4>
              <p className="text-sm text-slate-500 mb-6">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase bg-[#1E293B] text-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((dest) => (
                <div
                  key={dest.id}
                  className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Realistic Image */}
                    <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#1E293B] shadow-sm">
                          {dest.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#C5A059] text-white shadow-xs">
                          {dest.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs font-bold flex items-center gap-1">
                          <Star size={12} className="fill-[#C5A059] text-[#C5A059]" />
                          {dest.rating} ({dest.reviewsCount} reviews)
                        </span>
                        <span className="text-xs font-bold text-slate-200">
                          {dest.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                        <span>{dest.location}</span>
                      </div>

                      <h3 className="text-lg font-black leading-snug text-[#1E293B] mb-2 group-hover:text-[#C5A059] transition-colors">
                        {dest.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5 line-clamp-3">
                        {dest.summary}
                      </p>

                      {/* Specs List */}
                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                          Included Comforts:
                        </p>
                        {dest.amenities.slice(0, 3).map((s, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 size={13} className="text-[#C5A059] flex-shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-4 border-t mt-auto" style={{ borderColor: theme.border }}>
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(dest)}
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

      {/* Group Bookings CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-slate-50" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                GROUP BOOKINGS &amp; CORPORATE RETREATS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1E293B] mb-2">
                Planning A Corporate Offsite Or Mountain Wedding?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 max-w-2xl">
                Our bespoke event planning desk arranges private property buyouts, chartered high-altitude transport, banquet catering, and audiovisual stage setup.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#C5A059] transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <CalendarCheck size={14} />
                <span>Reserve Entire Property</span>
              </button>
              <Link
                href="/group-companies/swiss-huts/contact"
                className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#1E293B] border border-slate-300 hover:bg-white transition-colors"
              >
                Event Inquiries
              </Link>
            </div>
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
        onBookNow={(item) => {
          setSelectedListingForBooking(item);
          setIsBookingOpen(true);
        }}
      />

      <SwissHutsFooter />
    </main>
  );
}
