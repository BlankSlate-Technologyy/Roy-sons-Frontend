"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Droplets,
  Users,
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
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

  const q = searchQuery.trim().toLowerCase();
  const filtered = NATIONAL_AGRICULTURAL_PROGRAMS.filter(
    (p) =>
      !q ||
      (p.title || "").toLowerCase().includes(q) ||
      (p.overview || "").toLowerCase().includes(q) ||
      (p.category || "").toLowerCase().includes(q) ||
      (p.tag || "").toLowerCase().includes(q)
  );

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>Impact &amp; Development Initiatives</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight mb-4" style={{ color: theme.navy }}>
              Farmer Empowerment &amp; <span style={{ color: theme.primaryMid }}>Agricultural Programs</span>
            </h1>

            <p className="text-[15px] sm:text-lg font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Our nationwide rural initiatives connect growers with mechanized equipment, high-efficiency solar drip irrigation, dairy genetics, and mobile soil testing to build sustainable farming prosperity.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search programs (e.g. Sustainable, Dairy, Farmer, Soil)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#236B38]/30 focus:border-[#236B38] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact Metrics */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {PROGRAM_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="agri-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                    <Icon size={21} style={{ color: theme.primaryMid }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs sm:text-sm font-bold tracking-wide uppercase whitespace-pre-line leading-snug" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionLabel center>Active Initiatives</SectionLabel>
            <SectionHeading center className="mb-2.5">Our 5 Core Development Programs</SectionHeading>
            <p className="text-[15px] sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Targeted development programs engineered to upgrade productivity, improve soil health, and empower rural farming communities.
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border max-w-lg mx-auto" style={{ borderColor: theme.border }}>
              <p className="text-base font-semibold mb-2" style={{ color: theme.navy }}>
                No matching programs found for &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-sm font-bold underline cursor-pointer"
                style={{ color: theme.primaryMid }}
              >
                Reset search filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filtered.map((prog) => {
                const Icon = prog.icon;
                return (
                  <div
                    key={prog.slug}
                    id={prog.id}
                    className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                  >
                    <div>
                      <Link
                        href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                        className="agri-img-wrapper block w-full h-48 bg-slate-100 relative cursor-pointer"
                      >
                        <Image
                          src={prog.heroImage}
                          alt={prog.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                            {prog.tag}
                          </span>
                        </div>
                      </Link>

                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                            <Icon size={19} style={{ color: theme.primaryMid }} />
                          </div>
                          <h3 className="text-lg sm:text-[19px] font-bold tracking-tight leading-snug" style={{ color: theme.navy }}>
                            <Link href={`/group-companies/national-agricultural/programs/${prog.slug}`} className="hover:text-[#236B38] transition-colors">
                              {prog.title}
                            </Link>
                          </h3>
                        </div>

                        <p className="text-sm font-semibold tracking-wide mb-2.5" style={{ color: theme.accent }}>
                          {prog.subtitle}
                        </p>

                        <p className="text-[15px] font-normal leading-relaxed mb-4 line-clamp-3 text-slate-600">
                          {prog.overview}
                        </p>

                        <div className="space-y-2 pt-3.5 border-t" style={{ borderColor: theme.borderLight }}>
                          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: theme.navy }}>
                            Program Highlights:
                          </p>
                          {prog.benefits.slice(0, 2).map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                              <span className="text-sm font-medium text-slate-700 leading-snug">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                      <Link
                        href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                        className="agri-link-arrow text-[15px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        style={{ color: theme.primaryMid }}
                      >
                        <span>Explore program details</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Community &amp; Cooperative Partnerships
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.navy }}>
                Partner With Our Agricultural Programs
              </h2>
              <p className="text-[15px] sm:text-base font-normal max-w-xl text-slate-600 leading-relaxed">
                We collaborate with provincial agriculture departments, rural cooperatives, and institutional landowners to deploy machinery, drip systems, and veterinary hubs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-6 py-3 rounded-xl text-sm sm:text-[15px] font-bold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Program Inquiry</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
