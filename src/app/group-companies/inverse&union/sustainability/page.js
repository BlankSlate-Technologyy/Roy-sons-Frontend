"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  TreePine,
  Recycle,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/InverseUnionShared";

const SUSTAINABILITY_STATS = [
  { value: "40+", label: "Countries Sourced\nWith Green Compliance", icon: Globe },
  { value: "100%", label: "Ethical Supplier Audit\n& Anti-Forced Labor Verified", icon: ShieldCheck },
  { value: "100%", label: "Paperless Electronic\nPSW Customs Filing", icon: FileText },
  { value: "15+", label: "Years of Responsible\nGlobal Supply Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Ship,
    title: "Carbon-Optimized Ocean & Intermodal Freight",
    desc: "We partner exclusively with leading global shipping lines utilizing modern LNG-powered eco-vessels, slow-steaming routes, and optimized container packing factors.",
    features: [
      "Prioritizing fuel-efficient ocean carrier alliances reducing maritime emissions by up to 22%",
      "Maximizing Container Utilization Rate (CUR) to prevent redundant container shipping trips",
      "Intermodal rail freight integration reducing long-haul heavy highway diesel consumption",
    ],
  },
  {
    icon: ShieldCheck,
    title: "100% Ethical Supplier Audits & Fair Trade",
    desc: "Every international manufacturing partner undergoes rigorous pre-contract ESG audits ensuring safe working conditions, fair wages, and strict environmental compliance.",
    features: [
      "Zero tolerance for child labor, forced labor, or unsafe industrial working environments",
      "Verification of ISO 14001 environmental management and effluent treatment systems",
      "Continuous monitoring and transparent traceability across tier-1 and tier-2 suppliers",
    ],
  },
  {
    icon: FileText,
    title: "100% Paperless Digital Trade & Customs Filing",
    desc: "Pioneering paperless trade administration by adopting electronic Bills of Lading (e-BL), digital Letters of Credit, and automated Pakistan Single Window (PSW) customs filing.",
    features: [
      "Complete elimination of physical paper documentation across global trade transactions",
      "Real-time digital cloud repository for bills of lading, certificates, and invoices",
      "Instant customs clearance filing via electronic WebOC reducing port gate delays",
    ],
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging & Recyclable Materials",
    desc: "Guiding clients and manufacturers toward biodegradable dunnage, reusable steel strapping, and heat-treated recyclable wooden pallets compliant with ISPM-15.",
    features: [
      "ISPM-15 certified eco-friendly heat-treated timber pallets avoiding chemical fumigants",
      "Transitioning to 100% recyclable stretch film and biodegradable carton cushioning",
      "Zero-waste container loading guidelines minimizing packaging discarded at destination",
    ],
  },
];

export default function InverseUnionSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Trade &amp; Green Logistics</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Green Global Logistics For A <span style={{ color: theme.blue }}>Sustainable Trade Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Inverse &amp; Union Trading, responsible commerce is at the center of international trade. Through carbon-optimized maritime routes, 100% ethical supplier auditing, paperless electronic customs filing, and eco-friendly packaging, we deliver cross-border trade that protects our planet.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/inverse&union/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Request Green Trade Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/inverse&union/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Trade Deployments</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/inverseunion_hero_trade.svg"
                  alt="Green Global Supply Chain and Maritime Logistics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#00D2C8]">
                      Eco-Maritime Logistics
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Paperless Trade · Ethical Sourcing · LNG Carrier Routes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="iu-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Green Logistics Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable International Trade</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Eco-maritime routing, 100% ethical supplier accountability, paperless customs clearance, and sustainable cargo packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="iu-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.blue}10` }}>
                      <Icon size={26} style={{ color: theme.blue }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.navyDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#00D2C8]" />
                          <span className="text-xs font-medium text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                TRANSITION TO LOW-CARBON GLOBAL SUPPLY CHAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Switch To Ethical &amp; Green Global Procurement
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive comprehensive ESG supplier audit reports, carbon emission estimates, and digital paperless trade documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Green Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
