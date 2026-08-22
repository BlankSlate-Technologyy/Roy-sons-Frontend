"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Building2,
  Waves,
  BedDouble,
  Compass,
  PartyPopper,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  CalendarCheck,
  Award,
  Users2,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHutsShared";

const HOSPITALITY_SERVICES = [
  {
    id: "hotel-management",
    title: "Hotel & Resort Operations Management",
    subtitle: "Complete Property Management & Revenue Optimization",
    desc: "Delivering end-to-end hotel operations, guest concierge services, AI-driven dynamic revenue management, and certified five-star housekeeping protocols for independent and branded hospitality properties.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "Operations & Management",
    icon: Building2,
    deliverables: [
      "24/7 front desk guest check-in, multilingual concierge, and valet parking",
      "Dynamic revenue optimization algorithms maximizing RevPAR and occupancy",
      "Rigorous five-star housekeeping, laundry, and daily room sanitization",
      "Comprehensive food & beverage fine dining and room service management",
    ],
  },
  {
    id: "resort-development",
    title: "Luxury Resort & Chalet Development",
    subtitle: "Turnkey Alpine Architecture & Leisure Facilities",
    desc: "Developing iconic alpine mountain chalets, lakeside boutique resorts, and eco-lodges designed with sustainable timber construction, infinity thermal jacuzzis, and panoramic mountain vistas.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "Resort Development",
    icon: Waves,
    deliverables: [
      "Custom Swiss-inspired A-frame wooden chalet and eco-lodge architecture",
      "Heated indoor/outdoor infinity plunge pools, hydrotherapy spas, and saunas",
      "Off-grid renewable solar energy, geothermal heating, and eco-insulation",
      "Landscaped alpine gardens, outdoor fire-pits, and private viewing decks",
    ],
  },
  {
    id: "accommodation",
    title: "Premium Accommodation Suites",
    subtitle: "Executive Serviced Apartments & Family Chalets",
    desc: "Offering travelers a refined blend of home comfort and luxury hotel amenities with bespoke presidential suites, executive studio apartments, and private family chalets.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "Luxury Stays",
    icon: BedDouble,
    deliverables: [
      "Custom king-size orthopedic bedding, high-thread-count Egyptian linens",
      "Fully equipped designer kitchenettes and executive work desks with fiber Wi-Fi",
      "Floor-to-ceiling panoramic soundproof double-glazed mountain windows",
      "Private stone-hearth fireplaces, rainfall showers, and organic bath amenities",
    ],
  },
  {
    id: "tourism",
    title: "Tourism Destination & Eco-Planning",
    subtitle: "Ecotourism Trails & Foreign Tourist Assistance",
    desc: "Crafting sustainable travel experiences, guided mountain expeditions, cultural heritage trails, and seamless VIP logistics for domestic and international travelers.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "Tourism Solutions",
    icon: Compass,
    deliverables: [
      "Curated mountain trekking, trout fishing, and scenic jeep safari itineraries",
      "Official visa documentation assistance and airport VIP transfer fleets",
      "Licensed multi-lingual cultural guides and mountain safety rescue teams",
      "Zero-carbon footprint community ecotourism initiatives",
    ],
  },
  {
    id: "events",
    title: "Event & Conference Management",
    subtitle: "Corporate Galas, Board Retreats & Destination Weddings",
    desc: "Planning and hosting corporate conferences, executive board retreats, luxury destination weddings, and private banquets in pillarless ballrooms and scenic outdoor lawns.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "MICE & Weddings",
    icon: PartyPopper,
    deliverables: [
      "Pillarless convention halls equipped with ultra-HD LED video walls and audio",
      "Scenic outdoor amphitheaters and marquee setups for wedding ceremonies",
      "Customized multi-course banquet menus designed by master executive chefs",
      "Dedicated corporate event planners coordinating lodging, AV, and team building",
    ],
  },
  {
    id: "consultancy",
    title: "Hospitality Consultancy & Brand Advisory",
    subtitle: "Feasibility Studies & Luxury Staff Training Academies",
    desc: "Advising property developers and hotel owners on project feasibility, architectural zoning, brand positioning, and conducting world-class hospitality staff training.",
    image: "/swiss_huts_hero_resort.svg",
    tag: "Advisory & Training",
    icon: ClipboardList,
    deliverables: [
      "Hospitality market feasibility studies and financial return projections",
      "Interior design conceptualization and FF&E procurement advisory",
      "Rigorous staff training academies focusing on Swiss service etiquette",
      "Mystery guest service quality audits and standard operating procedure (SOP) design",
    ],
  },
];

const SERVICE_STATS = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Resorts Managed", icon: Hotel },
  { value: "500K+", label: "Guests Served", icon: Users2 },
  { value: "98%", label: "Satisfaction Rate", icon: ShieldCheck },
];

export default function SwissHutsServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = HOSPITALITY_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#2A323D] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Hospitality &amp; Tourism Services</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
                World-Class Solutions For <span style={{ color: theme.accentGold }}>Hospitality &amp; Travel</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From luxury mountain chalet operations and turnkey resort development to corporate conference hosting and destination tourism management, Swiss Hut delivers five-star hospitality excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Explore All 6 Capabilities</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/swiss-huts/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.slateBorder, color: theme.slate }}
                >
                  <span>Request Hospitality Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_huts_hero_resort.svg"
                  alt="Swiss Hut Luxury Resort Experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#C5A059]">
                      Five-Star Management
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.slate }}>
                      Chalets · Boutique Hotels · Conference Venues
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-huts-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.slate}10` }}>
                    <Icon size={22} style={{ color: theme.slate }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.slate }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Hospitality Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with Swiss precision, five-star guest services, and sustainable destination development.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search hospitality capabilities (e.g. Resort, Chalet, Events, Hotels)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="swiss-huts-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#2A323D]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.slate}10` }}>
                          <Icon size={20} style={{ color: theme.slate }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.slate }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#C5A059]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(203, 213, 224, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.slate }}>
                          Key Service Highlights:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
                      <span>Inquire About This Service</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                HOTEL MANAGEMENT &amp; FRANCHISE LICENSING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slate }}>
                Looking To Partner With Swiss Hut?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We partner with hotel owners and property developers to transform resorts with our five-star management brand and global booking engines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-huts/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Partnership Deck</span>
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
