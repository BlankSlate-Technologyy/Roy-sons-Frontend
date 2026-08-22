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
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
} from "../components/SwissHutsShared";

const CATEGORIES = [
  "All",
  "Alpine Mountain Chalets",
  "Boutique City Hotels",
  "Lakefront Resorts",
  "Heritage Mountain Lodges",
  "Executive Suites",
];

const SIGNATURE_DESTINATIONS = [
  {
    name: "Swiss Alpine Chalets & Spa",
    category: "Alpine Mountain Chalets",
    location: "Kaghan / Naran Valley Foothills, KPK",
    status: "Open 7 Days – Year-Round Luxury",
    desc: "Luxury A-frame timber chalets nestled among pine forests, featuring private outdoor thermal jacuzzis, roaring stone fireplaces, and gourmet trout dining with views of snow-capped peaks.",
    specs: ["Units: 24 Private Mountain Chalets", "Features: Thermal Jacuzzi & Fireplace", "Dining: Fresh River Trout & Alpine BBQ"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Mountain Luxury Retreat",
  },
  {
    name: "Swiss Crest Boutique Hotel",
    category: "Boutique City Hotels",
    location: "Blue Area / Diplomatic Enclave, Islamabad",
    status: "5-Star Executive Business Hotel",
    desc: "A contemporary boutique hotel offering luxury executive suites, high-speed fiber connectivity, meeting boardrooms, and a rooftop sky-lounge overlooking the Margalla Hills.",
    specs: ["Rooms: 80 Deluxe & Executive Suites", "MICE: 2 Boardrooms & Banquet Hall", "Amenities: Sky Lounge & Spa"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Capital City Elegance",
  },
  {
    name: "Lakeview Eco-Resort & Marina",
    category: "Lakefront Resorts",
    location: "Scenic Waterfront Hills, Khanpur Dam",
    status: "Waterfront Vacation & Water Sports",
    desc: "Pristine waterfront villas with private lake docks, infinity plunge pools, jet-ski rentals, sunset cruise dining, and cliffside bonfire lounges.",
    specs: ["Suites: 30 Waterfront Luxury Villas", "Sports: Jet Ski, Boating & Parasailing", "Events: Open-Air Amphitheater Lawn"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Lakeside Getaway",
  },
  {
    name: "Swiss Executive Grand Suites",
    category: "Executive Suites",
    location: "Gulberg-III Commercial Boulevard, Lahore",
    status: "Luxury Serviced Apartments",
    desc: "High-end residential serviced apartments offering fully fitted designer kitchenettes, temperature-controlled indoor swimming pool, gym, and 24/7 personalized concierge.",
    specs: ["Apartments: 1, 2 & 3 Bedroom Serviced Suites", "Wellness: Heated Indoor Pool & Sauna", "Security: Biometric Smart Keycards"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Urban Serviced Living",
  },
  {
    name: "Serene Valleys Mountain Lodge",
    category: "Heritage Mountain Lodges",
    location: "Kalam Valley / Ushu Pine Forest, Swat",
    status: "Ecological Mountain Sanctuary",
    desc: "Surrounded by ancient cedar forests and glacial rivers, offering handcrafted wooden suites, organic orchard dining, guided alpine trekking trails, and stargazing telescope decks.",
    specs: ["Lodges: 20 Handcrafted Timber Suites", "Eco: 100% Solar & Micro-Hydro Powered", "Activities: Guided Glacier & Forest Treks"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Eco-Mountain Lodge",
  },
  {
    name: "Hunza Heights Heritage Resort",
    category: "Heritage Mountain Lodges",
    location: "Karimabad / Baltit Foothills, Hunza",
    status: "Panoramic Himalayan Grandeur",
    desc: "Spectacular resort situated facing the majestic peaks of Rakaposhi and Ultar Sar, combining traditional Hunzakut stone-and-timber architecture with five-star modern comforts.",
    specs: ["Suites: 35 Deluxe Panoramic Suites", "Views: 360-Degree Mountain Panorama", "Culture: Traditional Hunza Music & Cuisine"],
    image: "/swiss_huts_hero_resort.svg",
    tag: "Himalayan Landmark",
  },
];

export default function SwissHutsDestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_DESTINATIONS.filter((d) => {
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#2A323D] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Resort &amp; Hotel Portfolio</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
              Signature Resorts &amp; <span style={{ color: theme.accentGold }}>Iconic Destinations</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our hand-picked collection of luxury alpine mountain chalets, boutique city hotels, serene lakefront resorts, and heritage lodges engineered for supreme comfort and relaxation.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search destinations (e.g. Naran, Islamabad, Hunza, Suites)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/70" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#2A323D] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#C5A059]"
                  }`}
                  style={{ borderColor: active ? theme.slate : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.name}
                className="swiss-huts-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#2A323D]" style={{ borderColor: theme.border }}>
                        {dest.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.slate }}>
                      {dest.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                      <span>{dest.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059]/10 text-[#C5A059]">
                        {dest.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {dest.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(203, 213, 224, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.slate }}>
                        Resort Highlights:
                      </p>
                      {dest.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#C5A059]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/swiss-huts/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.slate }}
                  >
                    <span>Check Availability &amp; Rates</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                GROUP BOOKINGS &amp; CORPORATE RETREATS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slate }}>
                Need Customized Holiday Or Corporate Packages?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Our group concierge team arranges full resort buyouts, executive transportation, custom catering, and guided excursions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-huts/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Inquire For Groups</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.slate, color: theme.slate }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHutsFooter />
    </main>
  );
}
