"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Users,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissFarmShared";
import { SWISS_FARM_SERVICES } from "../services-data";

const SERVICE_STATS = [
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "25K+", label: "Livestock Managed", icon: Users },
  { value: "120M+", label: "Liters Annual Milk", icon: Truck },
  { value: "100%", label: "Pure & Unadulterated", icon: ShieldCheck },
];

export default function SwissFarmServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const q = searchQuery.trim().toLowerCase();
  const filtered = SWISS_FARM_SERVICES.filter(
    (s) =>
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.overview.toLowerCase().includes(q) ||
      s.tag.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q)
  );

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Commercial Dairy &amp; Livestock Services</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                Comprehensive Solutions For{" "}
                <span style={{ color: theme.accentGold }}>Modern Dairy Operations</span>
              </h1>

              <p
                className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                From high-capacity automated milking parlors and genetic herd improvement to precision animal nutrition and sustainable bio-energy generation, Swiss Farms provides unmatched dairy excellence.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore All 6 Capabilities</span>
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 bg-white transition-all duration-300 hover:bg-[#F4F8F4] cursor-pointer"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <span>Request Supply Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border group bg-white"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-agricultural/home-spotlight-dairy.jpg"
                  alt="Swiss Farms Automated Robotic Milking Facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[13px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.accentGold }}
                    >
                      Certified Dairy Complex
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.primary }}>
                      Rotary Milking · 4°C Chilling · Pedigree Genetics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Forest Green Metrics Strip */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: theme.primaryDark,
          borderColor: "rgba(255,255,255,0.1)",
          color: "#FFFFFF",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: theme.primaryCard,
                    borderColor: "rgba(224, 188, 111, 0.28)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(224, 188, 111, 0.16)" }}
                  >
                    <Icon size={22} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[13.5px] font-bold uppercase tracking-wide text-[#DFECE2]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        id="services-catalog"
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-3">
              Specialized Dairy &amp; Livestock Offerings
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              Engineered with automated rotary parlors, precision nutrition, and compassionate animal welfare.
            </p>

            {/* Live Search */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search dairy capabilities (e.g. Milk, Breeding, Silage)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] transition-all bg-white shadow-xs text-[#1C522A]"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filtered.length === 0 ? (
            <div
              className="max-w-lg mx-auto text-center p-8 rounded-3xl border bg-[#F4F8F4]"
              style={{ borderColor: theme.border }}
            >
              <p className="text-[17px] font-extrabold mb-2" style={{ color: theme.primary }}>
                No matching dairy capabilities found
              </p>
              <p className="text-[15px] mb-4" style={{ color: theme.textMuted }}>
                Try another keyword or clear your search filter.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-5 py-2.5 rounded-xl text-[14px] font-extrabold text-white cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                Show All 6 Capabilities
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.slug}
                    id={svc.id}
                    className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                    style={{ borderColor: theme.border }}
                  >
                    <div>
                      {/* Card Image */}
                      <Link
                        href={`/group-companies/swiss-farm/services/${svc.slug}`}
                        className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={svc.heroImage}
                          alt={svc.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-3.5 left-3.5">
                          <span
                            className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                            style={{ borderColor: theme.border, color: theme.primary }}
                          >
                            {svc.tag}
                          </span>
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${theme.primary}12` }}
                          >
                            <Icon size={22} style={{ color: theme.primary }} />
                          </div>
                          <div>
                            <Link href={`/group-companies/swiss-farm/services/${svc.slug}`}>
                              <h3
                                className="text-[19px] font-black leading-snug hover:text-[#A88134] transition-colors cursor-pointer"
                                style={{ color: theme.primary }}
                              >
                                {svc.title}
                              </h3>
                            </Link>
                          </div>
                        </div>

                        <p
                          className="text-[13px] font-extrabold uppercase tracking-wider mb-3"
                          style={{ color: theme.accentGold }}
                        >
                          {svc.subtitle}
                        </p>

                        <p
                          className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed mb-5"
                          style={{ color: theme.textMuted }}
                        >
                          {svc.overview}
                        </p>

                        {/* Deliverables */}
                        <div
                          className="space-y-2.5 pt-4 border-t"
                          style={{ borderColor: theme.border }}
                        >
                          <p
                            className="text-[13px] font-extrabold uppercase tracking-wider"
                            style={{ color: theme.primary }}
                          >
                            Key Technical Standards:
                          </p>
                          {svc.deliverables.slice(0, 3).map((d, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2
                                size={16}
                                className="flex-shrink-0 mt-0.5"
                                style={{ color: theme.accentGold }}
                              />
                              <span className="text-[14px] font-medium text-slate-700 leading-snug">
                                {d}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 flex gap-2.5">
                      <Link
                        href={`/group-companies/swiss-farm/services/${svc.slug}`}
                        className="flex-1 py-3 rounded-xl border text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F4F8F4] transition-colors cursor-pointer"
                        style={{ borderColor: theme.border, color: theme.primary }}
                      >
                        <span>Explore Details</span>
                        <ArrowRight size={15} />
                      </Link>
                      <Link
                        href="/group-companies/swiss-farm/contact"
                        className="px-4 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                        style={{ backgroundColor: theme.primary }}
                        title="Request Proposal"
                      >
                        <span>Quote</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Executive CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F8F4]">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-7 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                COMMERCIAL DAIRY PROCUREMENT &amp; HERD CONSULTING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Require Bulk Milk Supply Or Livestock Genetics?
              </h2>
              <p className="text-[15.5px] font-medium max-w-xl text-[#D8E8DC]">
                Speak directly with our Chief Dairy Technologist to review milk quality parameters, butterfat guarantees, and delivery logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                <span>Request Dairy Quote</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 border-white/80 text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <Phone size={16} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
