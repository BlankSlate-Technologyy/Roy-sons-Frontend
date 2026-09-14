"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
  Ruler,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  FileCheck,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxWoodShared";
import { SERVICES_LIST, PROCESS_STEPS, TIMBER_SPECIES } from "../max-wood-data";

export default function MaxWoodServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden selection:bg-[#BA7A3E] selection:text-white">
      <MaxWoodNavbar />

      {/* ─── BREADCRUMB ─── */}
      <div className="bg-[#FDFBF7] border-b py-3 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/group-companies/max-wood" className="hover:text-[#5C3A21] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#5C3A21]">Services &amp; Capabilities</span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section
        className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl text-center max-w-3xl">
          <SectionLabel center>Our Manufacturing &amp; Interior Disciplines</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase mb-4"
            style={{ color: theme.darkWood }}
          >
            Specialized Woodcraft &amp; Interior Architecture
          </h1>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 mb-8">
            MAX Wood Corporation delivers end-to-end bespoke furniture manufacturing, customized luxury residential interiors, high-traffic corporate fitouts, and precision architectural millwork.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              100% In-House Factory Fabrication
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              5-Axis German CNC Routing
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              Turnkey White-Glove Installation
            </span>
          </div>
        </div>
      </section>

      {/* ─── DETAILED SERVICE VERTICALS ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-20">
          {SERVICES_LIST.map((srv, idx) => {
            const Icon = srv.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-24 p-8 sm:p-10 rounded-3xl border bg-[#FDFBF7] shadow-xs`}
                style={{ borderColor: theme.border }}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div
                    className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border group bg-slate-900"
                    style={{ borderColor: theme.border }}
                  >
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border text-[#5C3A21] shadow-md flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#BA7A3E] block">
                          Manufacturing Vertical #{idx + 1}
                        </span>
                        <strong className="text-sm font-black uppercase text-[#3A2312]">
                          {srv.tag}
                        </strong>
                      </div>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: theme.primary }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-black uppercase tracking-wider text-[#5C3A21]">
                    {srv.subtitle}
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tight"
                    style={{ color: theme.darkWood }}
                  >
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
                    {srv.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-white border text-xs font-bold text-slate-700" style={{ borderColor: theme.border }}>
                    <strong className="text-[#5C3A21] block mb-1">Standard Technical Specifications:</strong>
                    {srv.specs}
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <strong className="text-xs font-black uppercase tracking-wider text-[#5C3A21] block">
                      Scope of Deliverables:
                    </strong>
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                        <CheckCircle2 size={16} className="text-[#BA7A3E] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/group-companies/max-wood/contact"
                      className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xs transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <span>Request Quote for This Service</span>
                    </Link>
                    <Link
                      href="/group-companies/max-wood/solutions"
                      className="px-5 py-3 rounded-xl text-xs font-bold border hover:bg-white text-slate-800 transition-colors"
                      style={{ borderColor: theme.border }}
                    >
                      <span>Browse Related Listings</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PROCESS SUMMARY ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t bg-[#FDFBF7]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Our Rigorous Quality Framework</SectionLabel>
            <SectionHeading center>6-Stage Joinery &amp; Engineering Pipeline</SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((st) => (
              <div
                key={st.num}
                className="p-5 rounded-2xl border bg-white text-center flex flex-col justify-between shadow-2xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <span className="text-xl font-black font-mono text-[#D4A373] block mb-2">
                    {st.num}
                  </span>
                  <h4 className="text-xs font-black uppercase text-slate-800 leading-snug mb-1">
                    {st.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <MaxWoodFooter />
    </main>
  );
}
