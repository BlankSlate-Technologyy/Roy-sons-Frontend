"use client";

import React, { useState } from "react";
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
  Compass,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  PartyPopper,
  Phone,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Users,
  Users2,
  Waves,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/SwissHutsShared";

const STATS = [
  { icon: CalendarCheck, value: "20+", label: "Years of Hospitality\nExcellence" },
  { icon: Hotel, value: "50+", label: "Hotels & Resorts\nManaged" },
  { icon: Users2, value: "500K+", label: "Happy Guests\nServed Annually" },
  { icon: User, value: "800+", label: "Hospitality &\nCulinary Professionals" },
  { icon: Award, value: "98%", label: "Guest Satisfaction\nRating" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Hotel Management",
    desc: "Professional hotel operations, guest services, revenue management, and hospitality consulting.",
    href: "/group-companies/swiss-huts/services#hotel-management",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    icon: Waves,
    title: "Resort Development",
    desc: "Designing and managing luxury resorts and alpine wooden chalets that deliver unforgettable experiences.",
    href: "/group-companies/swiss-huts/services#resort-development",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    icon: BedDouble,
    title: "Accommodation Services",
    desc: "Premium rooms, executive suites, serviced apartments, and vacation chalets for leisure and business travelers.",
    href: "/group-companies/swiss-huts/services#accommodation",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    icon: Compass,
    title: "Tourism Development",
    desc: "Developing tourism destinations, mountain trekking experiences, and sustainable tourism initiatives.",
    href: "/group-companies/swiss-huts/services#tourism",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    icon: PartyPopper,
    title: "Event & Conference Management",
    desc: "Hosting corporate retreats, conferences, weddings, exhibitions, and private banquets.",
    href: "/group-companies/swiss-huts/services#events",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    icon: Sparkles,
    title: "Hospitality Consultancy",
    desc: "Strategic consulting for hotels, resorts, feasibility studies, and operational staff training.",
    href: "/group-companies/swiss-huts/services#consultancy",
    img: "/swiss_huts_hero_resort.svg",
  },
];

const DESTINATIONS_PREVIEW = [
  {
    name: "Swiss Alpine Chalets & Spa",
    location: "Naran Valley, KPK",
    tag: "Mountain Retreat",
    desc: "Luxury timber chalets featuring private thermal jacuzzis, roaring stone fireplaces, and fresh mountain trout dining.",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    name: "Swiss Crest Boutique Hotel",
    location: "Blue Area, Islamabad",
    tag: "Capital Luxury",
    desc: "5-star executive hotel offering deluxe business suites, boardrooms, and a rooftop sky lounge overlooking Margalla Hills.",
    img: "/swiss_huts_hero_resort.svg",
  },
  {
    name: "Lakeview Eco-Resort & Marina",
    location: "Khanpur Waterfront",
    tag: "Lakeside Getaway",
    desc: "Waterfront luxury villas with private docks, infinity plunge pools, jet-ski rentals, and open-air cliffside dining.",
    img: "/swiss_huts_hero_resort.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Destination Selection & Feasibility", desc: "Identifying breathtaking natural and urban locations with superior accessibility and scenic beauty." },
  { num: "02", title: "Swiss Alpine Architecture", desc: "Designing timber-and-stone chalets and boutique hotel suites with thermal insulation and panoramic vistas." },
  { num: "03", title: "Luxury Fit-Out & Amenities", desc: "Equipping rooms with high-thread-count Egyptian linens, heated infinity spas, and smart entertainment systems." },
  { num: "04", title: "Five-Star Staff Training", desc: "Rigorous hospitality academy training in Swiss service etiquette, culinary excellence, and safety." },
  { num: "05", title: "Seamless Guest Concierge", desc: "Providing 24/7 personalized room service, guided excursion itineraries, and airport VIP transfers." },
  { num: "06", title: "Sustainable Tourism Care", desc: "Implementing zero single-use plastics, solar water heating, and supporting local mountain communities." },
];

const FAQS = [
  {
    q: "What types of accommodations does Swiss Hut provide?",
    a: "Swiss Hut manages a diverse hospitality portfolio including luxury alpine mountain chalets, boutique business hotels, lakeside eco-resorts, serviced apartments, and presidential suites across Pakistan.",
  },
  {
    q: "How can I book a room or private chalet with Swiss Hut?",
    a: "You can book directly through our online reservation desk, or call our 24/7 Guest Concierge at 0092-42-38924737 / WhatsApp at 0092-304-7527498.",
  },
  {
    q: "Does Swiss Hut host corporate events and destination weddings?",
    a: "Yes. Our venues offer pillarless banquet ballrooms, outdoor scenic lawns, and conference halls equipped with high-definition audio-visual systems and custom executive catering.",
  },
  {
    q: "Can Swiss Hut manage existing hotels or resorts?",
    a: "Yes. We offer turnkey hotel operations management, revenue optimization, luxury staff training, and brand licensing for independent property owners.",
  },
];

export default function SwissHutsHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#2A323D] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar />

      {/* Hero Section with Luxury Alpine Resort Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Hospitality &amp; Tourism Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
                Creating Memorable Stays. <span style={{ color: theme.accentGold }}>Inspiring Hospitality.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Hut is a premier hospitality and tourism company specializing in hotel management, resort development, accommodation services, and guest experience solutions across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-huts/destinations"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Explore Signature Resorts</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-huts/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.slateBorder, color: theme.slate }}
                >
                  <span>Book Your Stay</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_huts_hero_resort.svg"
                  alt="Swiss Hut Luxury Resort & Chalets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#C5A059]">
                        50+ Managed Resorts
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.slate }}>
                      Mountain Chalets · Boutique Hotels · Eco-Lodges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.slate }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_huts_hero_resort.svg"
                  alt="Swiss Hut Hospitality Experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-1">
                      Five-Star Standards
                    </p>
                    <h4 className="text-base font-bold">Personalized Guest Concierge &amp; Gourmet Dining</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Redefining Hospitality With Comfort &amp; Excellence</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Swiss Hut delivers premium hospitality services through luxury accommodations, modern resorts, boutique hotels, and tourism management solutions. From guest services and hotel operations to destination development and event management, we exceed expectations at every touchpoint.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">5-Star International Hospitality Standard</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Zero Single-Use Plastics Eco-Policy</span>
                </div>
              </div>

              <Link
                href="/group-companies/swiss-huts/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#C5A059]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-huts/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.slate }}
            >
              <span>View All 6 Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="swiss-huts-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.slate}10` }}>
                        <Icon size={20} style={{ color: theme.slate }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.slate }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.slate }}
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Signature Resorts</SectionLabel>
              <SectionHeading>Featured Destinations</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-huts/destinations"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.accentGold }}
            >
              <span>View All Destinations</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS_PREVIEW.map((d) => (
              <div
                key={d.name}
                className="swiss-huts-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059]/10 text-[#C5A059] inline-block mb-3">
                      {d.tag}
                    </span>
                    <h3 className="text-xl font-black mb-1" style={{ color: theme.slate }}>
                      {d.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{d.location}</p>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {d.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/swiss-huts/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.slate }}
                  >
                    <span>Check Rates</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Hospitality Excellence Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial site architectural planning to five-star guest concierge and eco-tourism stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.slate }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.slate }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.slate }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C5A059]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                READY FOR AN UNFORGETTABLE ESCAPE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slate }}>
                Book Your Dream Vacation Or Corporate Event
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our concierge managers to reserve luxury chalets, customize event banquets, and arrange seamless transfers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-huts/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Book Reservation</span>
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