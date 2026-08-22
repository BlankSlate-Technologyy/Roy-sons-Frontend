"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Compass,
  Hammer,
  ClipboardList,
  Leaf,
  Layers,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHomesShared";

const ABOUT_STATS = [
  { value: "30+", label: "Years of Real Estate\nExcellence", icon: Building2 },
  { value: "200+", label: "Successfully Completed\nDevelopments", icon: ClipboardList },
  { value: "25K+", label: "Residential & Commercial\nUnits Delivered", icon: Users },
  { value: "100+", label: "Architects &\nEngineers", icon: Award },
  { value: "98%", label: "Customer Satisfaction\nRating", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Sparkles,
    title: "Architectural Precision",
    desc: "Swiss-inspired minimalism combined with contemporary structural engineering, delivering aesthetic elegance and functional luxury in every living space.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    desc: "Utilizing European-grade building materials, earthquake-resistant reinforced foundations, and strict quality control inspections at every construction milestone.",
  },
  {
    icon: Leaf,
    title: "Sustainable Urban Living",
    desc: "Integrating renewable solar energy, central green parklands, energy-efficient insulation, and advanced rainwater recycling in all master-planned communities.",
  },
  {
    icon: TrendingUp,
    title: "High Investment Appreciation",
    desc: "Strategic land acquisition in prime urban growth corridors ensuring superior capital appreciation and stable rental yields for investors.",
  },
];

export default function SwissHomesAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Swiss Homes</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Building Modern Communities. <span style={{ color: theme.red }}>Creating Better Living.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Homes is a premier real estate development enterprise specializing in master-planned smart housing schemes, luxury villas, commercial towers, and high-return property investments across Pakistan. We fuse world-class architectural design with sustainable infrastructure to create vibrant living environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-homes/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.red }}
                >
                  <span>Explore Signature Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-homes/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_hero_architecture.svg"
                  alt="Swiss Homes Modern Villa Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.red }}>
                      Architectural Excellence
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      Modern Luxury Smart Communities &amp; Villas
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
                  className="swiss-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.red}10` }}>
                    <Icon size={22} style={{ color: theme.red }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.charcoal }}>
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
                src="/swiss_master_planning.svg"
                alt="Swiss Homes Smart Master Planning and Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#B01B2E] block mb-1">
                    Master Planning
                  </span>
                  <h4 className="text-base font-bold">25,000+ Units Delivered Across Pakistan</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To design and construct sustainable residential, commercial, and mixed-use communities that blend architectural elegance, smart technology, and superior engineering, elevating the standard of living while securing long-term wealth for property owners.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s most reputable real estate developer, recognized for pioneering smart community master planning, timely project delivery, and customer-first property management.
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
              The foundational pillars that guide our architects, construction managers, and development executives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="swiss-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.red}10` }}>
                      <Icon size={26} style={{ color: theme.red }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.charcoal }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.red }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.red }}>
                      Verified Standard
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.red }}>
                LOOKING TO PURCHASE OR INVEST IN REAL ESTATE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Schedule A Personalized Property Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Contact our commercial property advisors to explore available residential plots, commercial units, and flexible installment plans.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-homes/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.red }}
              >
                <span>Book Site Visit</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.charcoal, color: theme.charcoal }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHomesFooter />
    </main>
  );
}
