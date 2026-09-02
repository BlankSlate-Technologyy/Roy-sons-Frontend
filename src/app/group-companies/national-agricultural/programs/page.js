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
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sprout,
  Sun,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
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
    <main className="min-h-screen bg-white text-[#1A5C2A] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Impact &amp; Development Initiatives</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
              Farmer Empowerment &amp; <span style={{ color: theme.accent }}>Agritech Programs</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Our nationwide agricultural development initiatives connect farmers with mechanized equipment, high-efficiency solar irrigation, dairy genetics, and mobile soil testing to build sustainable rural prosperity.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search programs (e.g. Mechanization, Dairy, Soil)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact Metrics */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROGRAM_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nac-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.primary }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Cards Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="space-y-8 max-w-5xl mx-auto">
            {filtered.map((prog, idx) => (
              <div
                key={prog.slug}
                id={prog.id}
                className="nac-card-hover rounded-3xl border p-8 md:p-10 bg-white shadow-xs flex flex-col lg:flex-row gap-8 items-center justify-between"
                style={{ borderColor: theme.border }}
              >
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border text-[#E8A800]" style={{ borderColor: theme.border }}>
                      {prog.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Initiative 0{idx + 1}</span>
                  </div>

                  <Link href={`/group-companies/national-agricultural/programs/${prog.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-black hover:text-[#E8A800] transition-colors cursor-pointer" style={{ color: theme.primary }}>
                      {prog.title}
                    </h3>
                  </Link>

                  <p className="text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {prog.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t" style={{ borderColor: "rgba(212, 232, 208, 0.7)" }}>
                    {prog.benefits.slice(0, 4).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#E8A800]" />
                        <span className="text-xs font-medium text-slate-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                    className="w-full lg:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 hover:bg-slate-50 transition-all cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.primary }}
                  >
                    <span>View Initiative</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/group-companies/national-agricultural/contact"
                    className="w-full lg:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <span>Enroll Now</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#E8A800]">
                RURAL DEVELOPMENT &amp; NGO PARTNERSHIPS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Interested In Partnering With Our Agricultural Programs?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We collaborate with government development agencies, microfinance institutions, and agricultural cooperatives to expand program outreach.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Inquire About Partnerships</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
