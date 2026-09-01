"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Wheat,
  Bird,
  Sprout,
  Stethoscope,
  Factory,
  Globe,
  CheckCircle2,
  Check,
  Sparkles,
  Phone,
} from "lucide-react";
import { VetvacNavbar, VetvacFooter } from "../components/VetvacShared";
import { VETVAC_SERVICES } from "../services-data";

const COLORS = {
  primary: "#094C80",
  primaryDk: "#0B2745",
  green: "#1E855C",
  white: "#FFFFFF",
  lightBg: "#F4F8FB",
  lightGreen: "#EAF6F0",
  muted: "#4B6178",
  border: "#D0E2EE",
  borderGreen: "#CBE8D9",
};

export default function VetvacServicesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2745] overflow-hidden selection:bg-[#1E855C]/20 selection:text-[#094C80]">
      <VetvacNavbar active="Services" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#EAF3F8]/70 border-b border-[#D0E2EE] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#4B6178]">
          <Link href="/group-companies/Vetvacpharma" className="hover:text-[#094C80] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-[#094C80]/50" />
          <span className="font-semibold text-[#094C80]">Veterinary Services & Core Sectors</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#071B30] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E855C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#094C80]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-screen-xl">
          <div className="max-w-3xl space-y-4">
            <span
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#6EE7B7] text-xs font-bold uppercase tracking-wider"
            >
              <Globe size={14} className="text-[#6EE7B7]" />
              <span>Veterinary Care Spectrum</span>
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            >
              Veterinary Healthcare & Sector Solutions
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl"
            >
              Delivering pharmaceutical-grade biologics, targeted vaccines, and advanced disease management architectures across commercial poultry, livestock, dairy, clinical veterinary practice, and industrial farming.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5 Detailed Sector Cards Grid ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F8FB]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3 py-1 rounded-full border border-[#CBE8D9]">
              COMPREHENSIVE SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight">
              Explore Our Core Service Divisions
            </h2>
            <p className="text-xs sm:text-sm text-[#4B6178]">
              Select a sector to view detailed clinical protocols, formulation portfolios, workflows, and technical specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VETVAC_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="rounded-2xl border border-[#D0E2EE] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E855C] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Image Banner */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#071B30]">
                      <Image
                        src={srv.heroImage}
                        alt={srv.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#094C80]/90 backdrop-blur-xs text-white text-[10.5px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                        <Icon size={13} className="text-[#6EE7B7]" />
                        <span>{srv.badge}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3.5">
                      <h3 className="text-xl font-black text-[#0B2745] group-hover:text-[#094C80] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-bold text-[#1E855C]">
                        {srv.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4B6178] leading-relaxed line-clamp-3">
                        {srv.desc}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="pt-2 space-y-1.5">
                        {srv.pillars.slice(0, 2).map((p, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs text-[#0B2745] font-medium">
                            <Check size={13} className="text-[#1E855C] shrink-0" />
                            <span className="line-clamp-1">{p.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/group-companies/Vetvacpharma/services/${srv.slug}`}
                      className="w-full py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#094C80] hover:bg-[#1E855C] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>View {srv.shortTitle} Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Global Contact Banner ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#071B30] text-white">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6EE7B7]">
              CUSTOM HEALTHCARE FORMULATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Looking for Specialized Veterinary Biologics?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Speak with our research pharmacologists for bulk supply, private labeling, or disease outbreak assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="vetvac-primary-btn px-7 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Contact Veterinary Desk</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </div>
  );
}
