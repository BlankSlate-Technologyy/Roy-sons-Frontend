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
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            END-TO-END HEALTHCARE ENGINEERING
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            Our Specialized Service Offerings &amp; Engineering Solutions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal"
          >
            From complete hospital infrastructure and MEP utility networks to cleanroom HVAC, radiation shielding, and biomedical facility management.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-5 py-2.5 rounded bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow flex items-center gap-1.5"
            >
              <span>Request Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Delivering turnkey engineering precision from project inception to lifetime operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((srv, idx) => (
              <div
                key={srv.slug}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100 + Math.floor(idx / 3) * 60}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg hover:border-[#2563eb] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded">
                      {srv.tag || "Engineering"}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">{srv.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {srv.subServices && srv.subServices.slice(0, 3).map((sub) => (
                      <div key={sub} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check size={11} className="text-[#2563eb] shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={"/group-companies/roys-roys/services/" + srv.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#0f2b48] transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
