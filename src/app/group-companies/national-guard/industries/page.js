"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Building,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Search,
  Users,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalGuardShared";
import { NATIONAL_GUARD_INDUSTRIES } from "../industries-data";

const INDUSTRY_STATS = [
  { value: "1000+", label: "Total Sites Protected", icon: Building },
  { value: "12+", label: "Key Sectors Served", icon: Landmark },
  { value: "500+", label: "Trained Guard Force", icon: Users },
  { value: "99.8%", label: "Zero-Breach Record", icon: ShieldCheck },
];

export default function NationalGuardIndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_GUARD_INDUSTRIES.filter(
    (ind) =>
      ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* 01 — Hero Section */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sector Expertise</SectionLabel>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-4"
              style={{ color: theme.navy }}
            >
              Industries We <span style={{ color: theme.gold }}>Protect Across Pakistan</span>
            </h1>

            <p
              className="text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
              style={{ color: theme.textMuted }}
            >
              From corporate headquarters and residential communities to factories and critical
              infrastructure, our security protocols are custom-configured for each industry&apos;s
              exact operational risks.
            </p>

            {/* Live Search Input */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Banks, Factories, Hospitals)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — High-Contrast Navy Statistics Banner */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.navyDark, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {INDUSTRY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="ng-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: theme.navyCard,
                    borderColor: "rgba(223, 184, 104, 0.25)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5"
                    style={{ backgroundColor: "rgba(223, 184, 104, 0.16)" }}
                  >
                    <Icon size={21} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p
                    className="text-[13px] font-bold uppercase tracking-wider leading-snug"
                    style={{ color: "#E2E8F0" }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Industries Grid */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="ng-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <Link
                      href={`/group-companies/national-guard/industries/${ind.slug}`}
                      className="relative block w-full h-48 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={ind.heroImage}
                        alt={ind.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <div
                          className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border shadow-sm flex items-center justify-center"
                          style={{ borderColor: theme.border }}
                        >
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                      </div>
                      <div className="absolute top-3.5 right-3.5">
                        <span
                          className="text-[12px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                          style={{ color: theme.navy, borderColor: theme.border }}
                        >
                          {ind.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      <Link href={`/group-companies/national-guard/industries/${ind.slug}`}>
                        <h3
                          className="text-[18.5px] sm:text-[19.5px] font-black leading-snug mb-2.5 hover:text-[#B38A3F] transition-colors cursor-pointer uppercase"
                          style={{ color: theme.navy }}
                        >
                          {ind.title}
                        </h3>
                      </Link>

                      <p
                        className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed mb-5"
                        style={{ color: theme.textMuted }}
                      >
                        {ind.overview}
                      </p>

                      <div
                        className="space-y-2 pt-4 border-t"
                        style={{ borderColor: "rgba(220, 227, 236, 0.85)" }}
                      >
                        <p
                          className="text-[13px] font-black uppercase tracking-wider"
                          style={{ color: theme.navy }}
                        >
                          Key Protection Protocols:
                        </p>
                        {ind.applications.slice(0, 3).map((app, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: theme.gold }}
                            />
                            <span className="text-[14px] font-medium text-slate-700 leading-snug">
                              {app}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex gap-2.5">
                    <Link
                      href={`/group-companies/national-guard/industries/${ind.slug}`}
                      className="flex-1 py-3 rounded-xl border-2 text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Sector</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/group-companies/national-guard/contact"
                      className="px-5 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
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

      {/* 04 — Command Navy CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.navyDark,
              borderColor: "rgba(223, 184, 104, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                HAVE A SPECIFIC FACILITY TYPE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Get An Industry-Tailored Security Plan
              </h2>
              <p className="text-[15px] sm:text-[16px] font-medium max-w-xl text-slate-200 leading-relaxed">
                We conduct on-site vulnerability analysis customized specifically for your facility
                type and provide exact guard deployment recommendations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-black uppercase tracking-wide flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.navyDark }}
              >
                <span>Consult Our Officers</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-extrabold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer text-white"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                <Phone size={16} style={{ color: theme.goldBright }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
