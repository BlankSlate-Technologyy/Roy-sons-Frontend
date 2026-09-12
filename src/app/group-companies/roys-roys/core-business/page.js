"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Award,
  Globe,
  Users,
  CheckCircle2,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";
import { CORE_BUSINESS_AREAS } from "../core-business-data";

export default function CoreBusinessIndexPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      {/* ─── 1. NAVBAR ──────────────────────────────────────────────────────── */}
      <RoysNavbar active="Services" />

      {/* ─── 2. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2563eb]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            ROYS &amp; ROYS INTERNATIONAL DIVISIONS
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.18] tracking-tight text-white mb-5 max-w-3xl mx-auto"
          >
            Core Business Areas &amp; Engineering Divisions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
          >
            Explore our specialized divisions delivering turnkey hospital infrastructure, biomedical precision, facility engineering, and sovereign institutional contracting.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <span>Schedule Engineering Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE BUSINESS 7 CARDS GRID ──────────────────────────────────── */}
      <section className="py-14 lg:py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-2">
              SEVEN STRATEGIC PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              Specialized Business Divisions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click on any division to explore its dedicated technical specifications, capabilities, and case studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_BUSINESS_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.slug}
                  href={`/group-companies/roys-roys/core-business/${area.slug}`}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[#2563eb] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group no-underline"
                >
                  <div>
                    {/* Card Top Image Banner */}
                    <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={area.heroImage}
                        alt={area.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#0f2b48]/90 text-[#38bdf8] border border-white/20 px-2.5 py-1 rounded-full">
                          Division #{area.number}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div className="w-10 h-10 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
                          <Icon size={20} />
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-black text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-2 leading-tight">
                        {area.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {area.tagline}
                      </p>

                      {/* Stat Preview */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                        {area.stats.slice(0, 2).map((st) => (
                          <div key={st.label}>
                            <span className="text-sm font-black text-[#0f2b48] block">
                              {st.value}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block truncate">
                              {st.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-[#2563eb] group-hover:text-[#1d4ed8]">
                    <span>Explore Full Division Profile</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. CORPORATE FOOTER ────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
