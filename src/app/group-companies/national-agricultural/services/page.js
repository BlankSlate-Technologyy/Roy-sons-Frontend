"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  FlaskConical,
  Building2,
  CheckCircle2,
  ArrowRight,
  Search,
  Users,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalAgriculturalShared";
import { NATIONAL_AGRICULTURAL_SERVICES } from "../services-data";

const SERVICE_STATS = [
  { value: "1M+", label: "Acres Supported", icon: Wheat },
  { value: "500+", label: "Farm Projects", icon: Tractor },
  { value: "50%", label: "Water Savings", icon: Droplets },
  { value: "10K+", label: "Active Farmers", icon: Users },
];

export default function NationalAgriculturalServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_AGRICULTURAL_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Agribusiness &amp; Farm Capabilities</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Specialized Services for <span style={{ color: theme.primaryMid }}>Modern Agriculture</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                From precision farm mechanization and solar drip irrigation to high-yield dairy genetics, crop biotechnology, and corporate farm feasibility, National Agricultural Corporation provides end-to-end expertise across the value chain.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryMid }}
                >
                  <span>Explore All 6 Services</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Farm Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border agri-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/agriculture-1.jpg"
                  alt="Precision Smart Agriculture"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.accent }}>
                      Turnkey Agribusiness Solutions
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Mechanized Farming · Smart Irrigation · Dairy Hubs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="agri-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.primaryMid}10` }}>
                    <Icon size={20} style={{ color: theme.primaryMid }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Comprehensive Portfolio</SectionLabel>
            <SectionHeading center className="mb-3">Our 6 Core Agribusiness Services</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              High-performance farm technologies, crop genetics, smart irrigation, and livestock infrastructure engineered for commercial yields.
            </p>

            {/* Live Search */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Irrigation, Dairy, Mechanization)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  id={svc.id}
                  className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    {/* Card Image with subtle zoom */}
                    <Link
                      href={`/group-companies/national-agricultural/services/${svc.slug}`}
                      className="agri-img-wrapper block w-full h-48 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={svc.heroImage}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                          <Icon size={17} style={{ color: theme.primaryMid }} />
                        </div>
                        <h3 className="text-[17px] font-semibold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          <Link href={`/group-companies/national-agricultural/services/${svc.slug}`} className="hover:text-[#236B38] transition-colors">
                            {svc.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-[11px] font-medium tracking-wide mb-2.5" style={{ color: theme.accent }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-[13px] font-normal leading-relaxed mb-4 line-clamp-3" style={{ color: theme.textMuted }}>
                        {svc.overview}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {svc.deliverables.slice(0, 3).map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                            <span className="text-xs font-normal text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Arrow Link — NO BIG BUTTONS */}
                  <div className="px-6 pb-5 pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-agricultural/services/${svc.slug}`}
                      className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.primaryMid }}
                    >
                      <span>Explore service specifications</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Specialized Technical Consultation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Require a Tailored Agricultural Solution?
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Our team of agronomists, irrigation engineers, and livestock specialists prepares custom engineering assessments and feasibility studies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Contact Corporate Desk</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
