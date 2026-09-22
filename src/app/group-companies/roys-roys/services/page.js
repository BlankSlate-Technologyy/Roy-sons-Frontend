"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Wrench,
  BriefcaseMedical,
  Activity,
  Stethoscope,
  Hammer,
  Building,
  Microscope,
  Layers,
  ShieldCheck,
  Flame,
  FlaskConical,
  Check,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";
import { SERVICES_LIST } from "../services-data";

export default function ServicesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="Services" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#051324] via-[#0b2138] to-[#071728] text-white pt-14 pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        {/* Ambient Glows and Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B49438]/12 blur-[120px]" />
          <div className="absolute top-1/2 -right-32 w-[480px] h-[480px] rounded-full bg-[#009088]/15 blur-[140px]" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B49438]/40 bg-[#0d223c]/90 text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span>END-TO-END HEALTHCARE ENGINEERING</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.15] tracking-tight text-white mb-5 max-w-3xl mx-auto"
          >
            Our Specialized Service Offerings &amp; Engineering Solutions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
          >
            From complete hospital infrastructure and MEP utility networks to cleanroom HVAC, radiation shielding, and biomedical facility management.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/contact"
              className="roys-quote-btn px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#b49438] via-[#a8832a] to-[#8c6b1f] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/30 hover:scale-[1.02] cursor-pointer"
              style={{ color: "#ffffff" }}
            >
              <span className="text-white font-black" style={{ color: "#ffffff" }}>Request Consultation</span>
              <ArrowRight size={15} className="text-white" style={{ color: "#ffffff" }} />
            </Link>
            <a
              href="#services-list"
              className="roys-quote-btn px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              style={{ color: "#ffffff" }}
            >
              <span className="text-white font-bold" style={{ color: "#ffffff" }}>Explore All 7 Services</span>
              <ChevronRight size={14} className="text-white" style={{ color: "#ffffff" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─────────────────────────────────────────────────── */}
      <section id="services-list" className="py-16 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-[0.2em] mb-2">
              <span>SPECIALIZED DIVISIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#113658] tracking-tight mb-3">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Delivering turnkey engineering precision from project inception to lifetime operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv, idx) => {
              const SrvIcon = srv.icon || BriefcaseMedical;
              return (
                <div
                  key={srv.slug}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100 + Math.floor(idx / 3) * 60}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#b49438]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Image Header */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#0c1f36]">
                      <Image
                        src={srv.heroImage || "/images/roys/services/healthcare-technologies.jpg"}
                        alt={srv.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f36]/85 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#0c1f36]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                          {srv.badge || "Core Service"}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#b49438] text-white flex items-center justify-center shrink-0 shadow-md">
                          <SrvIcon size={16} />
                        </div>
                        <span className="text-xs font-mono text-white/90 font-bold">0{idx + 1} / 07</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-black text-[#113658] group-hover:text-[#b49438] transition-colors mb-2 leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {srv.tagline || srv.desc}
                      </p>

                      <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                        {(srv.technologies || srv.subServices || []).slice(0, 3).map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check size={13} className="text-[#009088] shrink-0 mt-0.5" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={"/group-companies/roys-roys/services/" + srv.slug}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-[#113658] text-[#113658] hover:text-white text-xs font-black uppercase tracking-wider transition-all duration-200 group-hover:bg-[#113658] group-hover:text-white"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
