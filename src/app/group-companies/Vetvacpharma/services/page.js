"use client";

import { useEffect } from "react";
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
  ThermometerSnowflake,
  Microscope,
  Clock,
  FlaskConical,
  Award,
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
  darkHero: "#071B30",
};

const SERVICE_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "cGMP Certified Standards",
    desc: "Every vaccine batch and therapeutic formulation undergoes strict sterile testing in ISO-certified laboratories.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Unbroken 2°C–8°C Cold Chain",
    desc: "Continuous temperature-controlled distribution networks guaranteeing peak potency from lab to farm gate.",
  },
  {
    icon: Microscope,
    title: "Serological Titer Validation",
    desc: "Rigorous ELISA and PCR validation ensuring high antibody titers and rapid immune protection.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Outbreak Response",
    desc: "Dedicated veterinary specialists mobilized for epidemiological auditing, autogenous vaccines, and field support.",
  },
];

export default function VetvacServicesOverviewPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FB] text-[#0B2745] selection:bg-[#1E855C]/20 selection:text-[#094C80]">
      <VetvacNavbar active="Services" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#EAF3F8]/80 border-b border-[#D0E2EE] py-3 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#4B6178]">
          <Link href="/group-companies/Vetvacpharma" className="hover:text-[#094C80] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight size={13} className="text-[#094C80]/50" />
          <span className="font-bold text-[#094C80]">Veterinary Services &amp; Core Sectors</span>
        </div>
      </div>

      {/* ─── Hero Section (Balanced 2-Column with Visual Showcase) ───────────────── */}
      <section className="relative bg-[#071B30] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E855C]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#094C80]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#6EE7B7] text-xs font-bold uppercase tracking-wider">
              <Globe size={14} className="text-[#6EE7B7]" />
              <span>Veterinary Care Spectrum</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Veterinary Healthcare &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6EE7B7]">
                Sector Solutions
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Delivering pharmaceutical-grade biologics, targeted vaccines, and advanced disease management architectures across commercial poultry, livestock herds, dairy operations, veterinary clinical practices, and industrial animal farming.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/group-companies/Vetvacpharma/solutions"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg font-black text-white uppercase tracking-[0.14em] text-xs sm:text-sm bg-gradient-to-r from-[#0077b6] via-[#009688] to-[#00ab66] hover:from-[#0088cc] hover:via-[#00a896] hover:to-[#02c074] shadow-[0_4px_20px_rgba(0,150,136,0.35)] hover:shadow-[0_6px_28px_rgba(0,150,136,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              >
                <span className="tracking-widest">EXPLORE PRODUCTS</span>
                <ArrowRight
                  size={17}
                  strokeWidth={2.6}
                  className="text-white group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Link>
              <Link
                href="/group-companies/Vetvacpharma/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white hover:text-[#0B2745] border border-white/25 transition-all duration-300 shadow-sm"
              >
                <span>Request Clinical Consultation</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">100+</p>
                <p className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">Vaccines &amp; Biologics</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#6EE7B7]">99.4%</p>
                <p className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">Protection Efficacy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">cGMP</p>
                <p className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">Sterile Certified</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Showcase Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm group">
              <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-[#0B2745]">
                <Image
                  src="/vetvacphrama-header.png"
                  alt="VET VAC PHARMA Veterinary Healthcare Banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B30] via-transparent to-transparent" />
              </div>

              <div className="p-5 bg-[#0B2745]/95 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#6EE7B7] flex items-center gap-1.5">
                    <ShieldCheck size={16} />
                    Biological Integrity
                  </span>
                  <span className="text-[10.5px] font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                    Active Cold Chain
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Providing full-spectrum veterinary therapeutics, live attenuated antigens, and biosecurity grids engineered for zero outbreak tolerances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Service Divisions Grid (Balanced 6 Cards Layout) ───────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3.5 py-1.5 rounded-full border border-[#CBE8D9]">
              COMPREHENSIVE SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2745] tracking-tight">
              Explore Our Core Service Divisions
            </h2>
            <p className="text-xs sm:text-sm text-[#4B6178] leading-relaxed">
              Select any core division to review specialized immunization schedules, clinical biosecurity protocols, product formulations, and technical specifications.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VETVAC_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/85 via-[#071B30]/20 to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#094C80]/90 backdrop-blur-xs text-white text-[10.5px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <Icon size={13} className="text-[#6EE7B7]" />
                        <span>{srv.badge}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-black text-[#0B2745] group-hover:text-[#094C80] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-bold text-[#1E855C]">
                        {srv.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4B6178] leading-relaxed line-clamp-3">
                        {srv.desc}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="pt-2 space-y-2 border-t border-slate-100">
                        {srv.pillars.slice(0, 2).map((p, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs text-[#0B2745] font-medium">
                            <Check size={14} className="text-[#1E855C] shrink-0" />
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
                      className="w-full py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#094C80] hover:bg-[#1E855C] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>View {srv.shortTitle} Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Symmetrical 6th Card: Custom Solutions & Emergency Outbreak Support */}
            <div className="rounded-2xl border border-[#094C80]/30 bg-gradient-to-br from-[#0B2745] via-[#071B30] to-[#041220] text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1E855C]/30 border border-[#1E855C]/50 text-[#6EE7B7] text-[10.5px] font-extrabold uppercase tracking-wider">
                  <Sparkles size={13} className="text-[#6EE7B7]" />
                  <span>Custom Formulation &amp; Emergency</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#6EE7B7] transition-colors leading-snug">
                  Custom Veterinary Solutions &amp; Outbreak Support
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Tailored herd-specific autogenous vaccines, customized pharmacological premixes, and rapid epidemiological investigation for veterinary hospitals, mega-farms, and state agriculture departments.
                </p>

                <div className="pt-2 space-y-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check size={14} className="text-[#6EE7B7] shrink-0" />
                    <span>Autogenous Herd-Specific Vaccines</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check size={14} className="text-[#6EE7B7] shrink-0" />
                    <span>Institutional &amp; Tender Contract Supply</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check size={14} className="text-[#6EE7B7] shrink-0" />
                    <span>Emergency Outbreak Diagnostic Response</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/group-companies/Vetvacpharma/contact"
                  className="w-full py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Consult Technical Desk</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Clinical Excellence & Quality Assurance Grid ──────────────────────── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#094C80] bg-[#EAF3F8] px-3.5 py-1.5 rounded-full border border-[#D0E2EE]">
              ASSURED PHARMACEUTICAL STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight">
              Why Veterinary Leaders Choose Vet Vac Pharma
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-[#D0E2EE] bg-[#F4F8FB] hover:bg-white hover:border-[#1E855C] hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#094C80]/10 flex items-center justify-center text-[#094C80]">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-base font-black text-[#0B2745]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#4B6178] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── High-Contrast Global Contact Banner ───────────────────────────────── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#071B30] via-[#0B2745] to-[#071B30] text-white">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6EE7B7]">
              CUSTOM HEALTHCARE FORMULATIONS &amp; PROCUREMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Looking for Specialized Veterinary Biologics?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Speak with our research pharmacologists for bulk supplies, farm vaccination audits, private labeling, or disease outbreak response protocols.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-[#6EE7B7]" />
                Direct Desk: 0092-42-38924737
              </span>
              <span>&bull;</span>
              <span>WhatsApp: 0092-304-7527498</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <Link
              href="/group-companies/Vetvacpharma"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg font-black text-white uppercase tracking-[0.14em] text-xs sm:text-sm bg-gradient-to-r from-[#0077b6] via-[#009688] to-[#00ab66] hover:from-[#0088cc] hover:via-[#00a896] hover:to-[#02c074] shadow-[0_4px_20px_rgba(0,150,136,0.35)] hover:shadow-[0_6px_28px_rgba(0,150,136,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
            >
              <span className="tracking-widest">EXPLORE WEBSITE</span>
              <ArrowRight
                size={17}
                strokeWidth={2.6}
                className="text-white group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="px-7 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
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
