"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  FlaskConical,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Sun,
  Shield,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NationalAgriculturalShared";
import { NATIONAL_AGRICULTURAL_SERVICES } from "./services-data";
import { NATIONAL_AGRICULTURAL_PROGRAMS } from "./programs-data";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Agricultural\nExcellence" },
  { icon: Tractor, value: "500+", label: "Commercial Farm\nProjects" },
  { icon: Wheat, value: "1M+", label: "Acres Supported &\nCultivated" },
  { icon: Users, value: "10K+", label: "Farmers Empowered\nNationwide" },
  { icon: ShieldCheck, value: "99%", label: "Quality & Safety\nStandards" },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    desc: "Precision agronomy, balanced crop rotations, and biological pest controls.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    desc: "Solar drip irrigation & laser land grading saving up to 50% groundwater.",
  },
  {
    icon: Leaf,
    title: "Soil Health",
    desc: "Regenerative organic compost, bio-nutrition, and subsoil decompaction.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Zero-emission solar hybrid tube-wells and cattle dairy biogas digesters.",
  },
  {
    icon: Shield,
    title: "Environmental Protection",
    desc: "Agroforestry tree belts, biodiversity zones, and zero chemical runoff.",
  },
];

function Sprout(props) {
  return <Leaf {...props} />;
}

const FAQS = [
  {
    q: "What services does National Agricultural Corporation deliver?",
    a: "We provide complete agribusiness engineering including mechanized farm development, solar drip and pivot irrigation, commercial dairy farm construction, pedigree livestock breeding, and certified hybrid seed supplies.",
  },
  {
    q: "How much water can solar drip irrigation systems conserve?",
    a: "Our pressurized drip networks deliver water directly to crop root zones, reducing evaporation and water consumption by up to 50% compared to traditional furrow or flood irrigation.",
  },
  {
    q: "Do you engineer turnkey commercial dairy facilities?",
    a: "Yes. We design and build complete dairy operations including automated electronic milking parlors, rapid bulk milk chillers (<4°C), silage packing machinery, and herd veterinary management.",
  },
  {
    q: "How can corporate landholders and farmers partner with NAC?",
    a: "You can submit an inquiry through our Commercial Desk or contact our Lahore headquarters to request on-site soil assays, customized farm layouts, and machinery deployments.",
  },
];

export default function NationalAgriculturalHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* ─── 1. HIGH-IMPACT AGRICULTURAL HERO SECTION ─────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center border-b overflow-hidden" style={{ borderColor: theme.border }}>
        {/* Background Image with Dark Teal/Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/national agricature-header.png"
            alt="National Agricultural Corporation High-Tech Farmlands"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B27]/92 via-[#0B2535]/85 to-[#071B27]/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] font-medium uppercase tracking-wider text-[#C59B27] mb-5">
              <Sprout size={13} style={{ color: theme.accent }} />
              <span className="text-white/90">Pioneering Sustainable Agribusiness &amp; Food Security</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 text-white">
              Empowering Pakistan&apos;s <span style={{ color: theme.accent }}>Agricultural &amp; Dairy</span> Future
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-200 mb-8 max-w-2xl">
              National Agricultural Corporation (Pvt) Ltd is an established enterprise modernizing commercial crop cultivation, precision irrigation, high-yield dairy genetics, and rural livelihoods across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/group-companies/national-agricultural/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Explore Agribusiness Solutions</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/group-companies/national-agricultural/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border border-white/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <span>Request Farm Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. IMPACT / STATISTICS SECTION ──────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="agri-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.primaryMid}10` }}>
                    <Icon size={20} style={{ color: theme.primaryMid }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT NATIONAL AGRICULTURAL CORPORATION ───────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-sm agri-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-about.png"
                  alt="Established Commercial Farm Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.accent }}>
                      Roy &amp; Sons Group Company
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Commercial Agribusiness · Modern Infrastructure · Dairy Hubs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Pioneering Modern Agribusiness Across Pakistan
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd brings together certified agronomists, veterinary specialists, and irrigation engineers. With over 25 years of operational heritage, we design and manage commercial agribusiness projects that maximize yield per acre and conserve natural water tables.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.primaryMid }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">50% Water Savings via Drip Tech</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.primaryMid }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">Certified Dairy Semen &amp; Genetics</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-agricultural/about"
                className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.primaryMid }}
              >
                <span>Read complete corporate overview</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. AGRICULTURE DEVELOPMENT SPOTLIGHT ─────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <SectionLabel>Crop Cultivation &amp; Mechanization</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Agriculture Development &amp; Precision Machinery
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                Modern crop yields depend on precision field preparation. Our fleets of GPS-guided laser land levelers, pneumatic seed drills, high-horsepower 4WD tractors, and automated combine harvesters accelerate turnaround times and cut per-acre field costs by up to 35%.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "GPS satellite-guided laser land leveling eliminating irrigation pooling",
                  "Pneumatic precision seed drills ensuring uniform germination depth",
                  "High-capacity grain combine harvesters preventing post-monsoon crop losses",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                    <span className="text-xs font-normal text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/group-companies/national-agricultural/services/agricultural-development-mechanization"
                className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.primaryMid }}
              >
                <span>Explore agriculture development specifications</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border shadow-sm agri-card bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/agriculture-1.jpg"
                  alt="Mechanized Agriculture and Combine Harvesting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. DAIRY DEVELOPMENT SPOTLIGHT ───────────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border shadow-sm agri-card bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/vetvac_dairy_service.jpg"
                  alt="Modern Dairy Farm and Milking Facilities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Commercial Dairy Infrastructure</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Dairy Development &amp; Cold Chain Networks
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                We engineer turnkey commercial dairy farms ranging from 50-cow family herds up to 5,000-cow corporate estates. Incorporating automated electronic milking parlors, rapid bulk milk chillers (below 4°C), and village collection centers, we guarantee export-quality milk hygiene.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Electronic herringbone & rotary milking parlors with yield meters",
                  "Direct-expansion SS304 bulk milk chillers arresting bacterial growth",
                  "TMR feed wagon mixers and high-density corn silage baling systems",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                    <span className="text-xs font-normal text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/group-companies/national-agricultural/services/dairy-development-cold-chain"
                className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.primaryMid }}
              >
                <span>Explore dairy development capabilities</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. OUR SERVICES PREVIEW (6 CARDS, NO BIG BUTTONS) ───────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Commercial Capabilities</SectionLabel>
              <SectionHeading>Our 6 Core Agribusiness Services</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-agricultural/services"
              className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              style={{ color: theme.primaryMid }}
            >
              <span>View all 6 services</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATIONAL_AGRICULTURAL_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    {/* Visual */}
                    <Link
                      href={`/group-companies/national-agricultural/services/${svc.slug}`}
                      className="agri-img-wrapper block w-full h-44 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={svc.heroImage}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                          <Icon size={16} style={{ color: theme.primaryMid }} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: theme.navy }}>
                          <Link href={`/group-companies/national-agricultural/services/${svc.slug}`} className="hover:text-[#236B38] transition-colors">
                            {svc.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs font-normal leading-relaxed line-clamp-3 mb-3" style={{ color: theme.textMuted }}>
                        {svc.overview}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Link */}
                  <div className="px-5 pb-4 pt-1 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-agricultural/services/${svc.slug}`}
                      className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.primaryMid }}
                    >
                      <span>Explore specifications</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. PROGRAMS & INITIATIVES PREVIEW (5 CARDS) ──────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Impact &amp; Outreach</SectionLabel>
              <SectionHeading>Our 5 Core Development Programs</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-agricultural/programs"
              className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              style={{ color: theme.primaryMid }}
            >
              <span>View all programs</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATIONAL_AGRICULTURAL_PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.slug}
                  className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    <Link
                      href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                      className="agri-img-wrapper block w-full h-44 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={prog.heroImage}
                        alt={prog.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {prog.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                          <Icon size={16} style={{ color: theme.primaryMid }} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: theme.navy }}>
                          <Link href={`/group-companies/national-agricultural/programs/${prog.slug}`} className="hover:text-[#236B38] transition-colors">
                            {prog.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs font-normal leading-relaxed line-clamp-3 mb-3" style={{ color: theme.textMuted }}>
                        {prog.overview}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-1 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-agricultural/programs/${prog.slug}`}
                      className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.primaryMid }}
                    >
                      <span>Explore initiative</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. SUSTAINABILITY PREVIEW (5 PILLARS) ─────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Environmental Focus</SectionLabel>
            <SectionHeading center className="mb-3">5 Pillars of Sustainability</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Restoring nature&apos;s balance across farmlands through regenerative agronomic engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUSTAINABILITY_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="agri-card rounded-2xl p-5 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primaryMid}10` }}>
                      <Icon size={16} style={{ color: theme.primaryMid }} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider block mb-1" style={{ color: theme.accent }}>
                      Pillar 0{idx + 1}
                    </span>
                    <h4 className="text-[15px] font-semibold mb-1.5" style={{ color: theme.navy }}>
                      {p.title}
                    </h4>
                    <p className="text-xs font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/group-companies/national-agricultural/sustainability"
              className="agri-link-arrow text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
              style={{ color: theme.primaryMid }}
            >
              <span>Read complete sustainability framework</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQS SECTION ──────────────────────────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Common Questions</SectionLabel>
            <SectionHeading center className="mb-3">Agribusiness FAQs</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="agri-card rounded-xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm cursor-pointer"
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-4 text-xs font-normal leading-relaxed border-t pt-3 text-slate-600" style={{ borderColor: theme.borderLight }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CLEAN CONTACT / PROPOSAL INQUIRY SECTION ──────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Agribusiness Feasibility &amp; Project Planning
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Request A Confidential Farm Consultation
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our agronomy and dairy specialists to discuss equipment schedules, irrigation designs, and yield forecasts.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={13} />
              </Link>
              <a
                href="tel:+923218431665"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all hover:bg-white cursor-pointer"
                style={{ borderColor: theme.border, color: theme.navy }}
              >
                <Phone size={13} style={{ color: theme.primaryMid }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
