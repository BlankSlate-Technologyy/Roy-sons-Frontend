"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
  FlaskConical,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalAgriculturalShared";
import { NATIONAL_AGRICULTURAL_PROGRAMS } from "../programs-data";

const PROGRAM_STATS = [
  { value: "10K+", label: "Farmers Enrolled\nin Programs", icon: Users },
  { value: "500+", label: "Villages &\nCommunities Covered", icon: Wheat },
  { value: "40%", label: "Average Increase\nin Crop Yield", icon: TrendingUp },
  { value: "50%", label: "Irrigation Water\nConserved", icon: Droplets },
];

export default function NationalAgriculturalProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_AGRICULTURAL_PROGRAMS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>Impact &amp; Development Initiatives</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-4" style={{ color: theme.navy }}>
              Farmer Empowerment &amp; <span style={{ color: theme.primaryMid }}>Agricultural Programs</span>
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Our nationwide rural initiatives connect growers with mechanized equipment, high-efficiency solar drip irrigation, dairy genetics, and mobile soil testing to build sustainable farming prosperity.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search programs (e.g. Sustainable, Dairy, Farmer, Innovation)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PROGRAM_STATS.map((stat, i) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Active Initiatives</SectionLabel>
            <SectionHeading center className="mb-3">Our 5 Core Development Programs</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Targeted development programs engineered to upgrade productivity, improve soil health, and empower rural farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.slug}
                  id={prog.id}
                  className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    {/* Visual with subtle zoom */}
                    <Link
                      href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                      className="agri-img-wrapper block w-full h-48 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={prog.heroImage}
                        alt={prog.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {prog.tag}
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
                          <Link href={`/group-companies/national-agricultural/programs/${prog.slug}`} className="hover:text-[#236B38] transition-colors">
                            {prog.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-[11px] font-medium tracking-wide mb-2.5" style={{ color: theme.accent }}>
                        {prog.subtitle}
                      </p>

                      <p className="text-xs sm:text-[13px] font-normal leading-relaxed mb-4 line-clamp-3" style={{ color: theme.textMuted }}>
                        {prog.overview}
                      </p>

                      {/* Benefits preview */}
                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: theme.navy }}>
                          Program Highlights:
                        </p>
                        {prog.benefits.slice(0, 2).map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                            <span className="text-xs font-normal text-slate-700 leading-snug">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Arrow Link — NO BIG BUTTONS */}
                  <div className="px-6 pb-5 pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                      className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.primaryMid }}
                    >
                      <span>Explore program details</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Community &amp; Cooperative Partnerships
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Partner With Our Agricultural Programs
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                We collaborate with provincial agriculture departments, rural cooperatives, and institutional landowners to deploy machinery, drip systems, and veterinary hubs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Program Inquiry</span>
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
