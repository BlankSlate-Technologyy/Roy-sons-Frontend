"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Landmark,
  Factory,
  Building2,
  Zap,
  Layers,
  Globe,
  HardHat,
  TrendingUp,
  Mountain,
  FlaskConical,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";
import { NATIONAL_MINES_INDUSTRIES } from "../industries-data";

const INDUSTRY_STATS = [
  { value: "50+", label: "Active Concessions", icon: Mountain },
  { value: "10+", label: "Key Sectors Served", icon: Landmark },
  { value: "5M+", label: "Tons Supplied", icon: Truck },
  { value: "99.8%", label: "Contract Fulfillment", icon: ShieldCheck },
];

export default function NationalMinesIndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_MINES_INDUSTRIES.filter(
    (ind) =>
      ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sector Coverage</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
              Industries We <span style={{ color: theme.gold }}>Power Across Pakistan &amp; Globally</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              From heavy infrastructure, construction, and steelmaking to high-tech glass, chemical synthesis, and international commodity export markets, our mineral supplies drive key industrial economies.
            </p>

            {/* Live Search Input */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Steel, Cement, Glass, Energy)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nmc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navy }}>
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

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="nmc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Sector Image */}
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="relative block w-full h-48 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={ind.heroImage}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border shadow-sm flex items-center justify-center" style={{ borderColor: theme.border }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.navy, borderColor: theme.border }}>
                          {ind.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-7">
                      <Link href={`/group-companies/national-mines/industries/${ind.slug}`}>
                        <h3 className="text-lg font-black leading-snug mb-3 hover:text-[#C59B27] transition-colors cursor-pointer uppercase" style={{ color: theme.navy }}>
                          {ind.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {ind.overview}
                      </p>

                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                          Key Supply Applications:
                        </p>
                        {ind.applications.slice(0, 3).map((app, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0 flex gap-2">
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Sector</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/group-companies/national-mines/contact"
                      className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.navy }}
                      title="Request Sector Proposal"
                    >
                      <span>Quote</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                HAVE A SPECIFIC FACILITY TYPE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Get An Industry-Tailored Mineral Supply Plan
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide custom crushing, chemical assays, and volume logistics agreements engineered specifically for your manufacturing lines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-mines/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Consult Our Metallurgists</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
