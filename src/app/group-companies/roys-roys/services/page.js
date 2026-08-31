"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe,
  Award,
  ShieldCheck,
} from "lucide-react";
import { RoysNavbar, RoysFooter, SectionHeading } from "../_shared";
import { SERVICES_LIST } from "../services-data";

export default function ServicesHubPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      <RoysNavbar active="Solutions" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#64748b]">
          <Link href="/group-companies/roys-roys" className="hover:text-[#113658] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#113658]">Core Business Areas &amp; Services</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2138] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071728] via-[#0b2138] to-[#113658] opacity-95" />
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>ROYS &amp; ROYS INTERNATIONAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Core Business Areas &amp; Specialized Services
          </h1>

          <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Explore our end-to-end healthcare technologies, hospital engineering, sterile cleanroom systems, laboratory diagnostics, pharmaceutical consultancy, global procurement, and biomedical maintenance solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-7 py-3.5 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7 Services Grid ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="PORTFOLIO OF EXCELLENCE"
            title="Our 7 Core Business Divisions"
            subtitle="Click on any division to explore in-depth technical specifications, equipment catalogs, and turnkey delivery capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#113658]/10 text-[#113658] flex items-center justify-center group-hover:bg-[#113658] group-hover:text-white transition-all duration-300 shadow-xs">
                        <ServiceIcon size={28} />
                      </div>
                      <span className="text-xs font-mono font-black text-[#64748b]/40 text-lg">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[11px] font-extrabold text-[#B49438] uppercase tracking-wider block mb-1">
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-black text-[#113658] group-hover:text-[#009088] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-6">
                      {service.tagline}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#f1f5f9]">
                      {service.keyPillars.slice(0, 3).map((pillar, i) => (
                        <div key={i} className="flex items-center gap-2 text-[13.5px] font-semibold text-[#334155]">
                          <CheckCircle2 size={15} className="text-[#009088] shrink-0" />
                          <span className="truncate">{pillar.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[#f8fafc] border-t border-[#e2e8f0]">
                    <Link
                      href={`/group-companies/roys-roys/services/${service.slug}`}
                      className="w-full py-3 px-4 rounded-lg bg-[#113658] group-hover:bg-[#B49438] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Explore Detail Page</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Global Trust Section ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#020f1f] text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#B49438] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            GLOBAL ACCREDITATION &amp; STANDARDS
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Trusted by Health Ministries, Military, &amp; Global Healthcare Leaders
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            All our services and installations comply with international quality benchmarks including WHO-GMP, ISO 13485, CE, FDA, and HTM 02-01 standards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["WHO-GMP Compliant", "ISO 13485 & 9001", "CE & FDA Certified Systems", "HTM 02-01 & NFPA 99", "24/7 SLA Technical Support"].map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#B49438]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
