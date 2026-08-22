"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Building2,
  CalendarCheck,
  Award,
  Users2,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  PartyPopper,
  Waves,
  Compass,
  BedDouble,
  Leaf,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHutsShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Hospitality\nExcellence", icon: CalendarCheck },
  { value: "50+", label: "Hotels & Resorts\nSuccessfully Managed", icon: Hotel },
  { value: "500K+", label: "Delighted Guests\nServed Annually", icon: Users2 },
  { value: "800+", label: "Hospitality &\nCulinary Professionals", icon: Award },
  { value: "98%", label: "Guest Satisfaction\nRating", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Sparkles,
    title: "Unrivaled Guest Experience",
    desc: "Delivering bespoke luxury hospitality with personalized guest concierge services, refined culinary artistry, and meticulous attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "World-Class Comfort & Safety",
    desc: "Ensuring five-star room amenities, international hygiene and sanitization standards, and 24/7 guest security across all resort properties.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Tourism Practices",
    desc: "Operating energy-efficient facilities, zero-plastic waste initiatives, organic farm-to-table dining, and preserving local mountain ecologies.",
  },
  {
    icon: PartyPopper,
    title: "Memorable Celebrations",
    desc: "Flawlessly curating corporate galas, executive retreats, destination weddings, and private banquets with specialized event coordinators.",
  },
];

export default function SwissHutsAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#2A323D] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Swiss Hut</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
                Creating Memorable Stays. <span style={{ color: theme.accentGold }}>Inspiring Hospitality.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Hut is a premier hospitality management and resort development enterprise specializing in luxury chalets, boutique hotels, guest experience solutions, and destination development across Pakistan. We blend Swiss architectural elegance with heartwarming local hospitality to create unforgettable travel memories.
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
                  <span>Contact Reservations</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_huts_hero_resort.svg"
                  alt="Swiss Hut Alpine Mountain Resort & Chalets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.accentGold }}>
                      Alpine Luxury Hospitality
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.slate }}>
                      50+ Hotels &amp; Resorts · 500,000+ Happy Guests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/swiss_huts_hero_resort.svg"
                alt="Swiss Hut Mountain Hospitality Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#C5A059] block mb-1">
                    Hospitality Excellence
                  </span>
                  <h4 className="text-base font-bold">50+ Premier Properties Across Pakistan</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To deliver exceptional hospitality experiences through world-class accommodations, personalized guest care, and sustainable tourism development that enriches travelers&apos; lives and empowers local community economies.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s most admired and trusted hospitality brand, known internationally for pioneering luxury mountain resorts, cultural heritage retreats, and zero-carbon tourism destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The foundational standards that inspire our concierges, master chefs, and resort general managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="swiss-huts-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.slate}10` }}>
                      <Icon size={26} style={{ color: theme.slate }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.slate }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.accentGold }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.accentGold }}>
                      5-Star Certified
                    </span>
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
                PLANNING A VACATION OR CORPORATE RETREAT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slate }}>
                Book Your Dream Stay With Swiss Hut
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our reservation specialists to customize executive suites, family chalets, or full corporate conference packages.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-huts/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Reserve A Room</span>
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
