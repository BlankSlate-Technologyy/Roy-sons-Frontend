"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/VetvacShared";
import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Wheat,
  Bird,
  Sprout,
  Stethoscope,
  Factory,
  Globe,
  Handshake,
  CheckCircle2,
  Check,
  Sparkles,
  Users,
  Building2,
  Phone,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
const COLORS = {
  primary: "#094C80",       // Primary Blue: Shield, headings, buttons
  primaryDk: "#0B2745",     // Dark Navy: Logo text, main text
  ink: "#0B2745",           // Dark Navy: Logo text, main text
  green: "#1E855C",         // Green: Paw/health accent
  white: "#FFFFFF",         // White: Background, text on blue
  lightBg: "#EAF3F8",       // Light Blue: Section backgrounds
  lightGreen: "#EAF6F0",    // Light Green: Health/feature backgrounds
  muted: "#4B6178",         // Muted secondary text
  border: "#D0E2EE",        // Soft border matching palette
  borderGreen: "#CBE8D9",   // Soft border for green cards
  footerBg: "#071B30",      // Deep rich navy for footer
};

const INDUSTRIES_LIST = [
  {
    id: "poultry",
    title: "Poultry",
    tagline: "Healthier Flocks. Stronger Production.",
    desc: "We support commercial poultry operations with veterinary healthcare solutions focused on disease prevention, flock health, and productive farming.",
    items: [
      "Poultry vaccines (live & inactivated)",
      "Preventive healthcare programs",
      "Disease-management & outbreak support",
      "Farm health & biosecurity programs",
    ],
    img: "/vetvac_poultry_ai.jpg",
    icon: Bird,
  },
  {
    id: "livestock",
    title: "Livestock",
    tagline: "Supporting Healthy & Productive Livestock",
    desc: "Our livestock-focused solutions are designed to support cattle, dairy, and other commercial livestock operations. We focus on helping producers maintain animal health while supporting efficient and sustainable production.",
    items: [
      "Cattle health management",
      "Preventive immunization schedules",
      "Sustainable production practices",
      "Comprehensive herd wellbeing",
    ],
    img: "/vetvac_about_ai.jpg",
    icon: Wheat,
  },
  {
    id: "dairy",
    title: "Dairy Farming",
    tagline: "Protecting Animal Health Across Dairy Operations",
    desc: "Healthy dairy animals are essential for sustainable farm performance. Our veterinary healthcare approach supports disease prevention and overall animal wellbeing within dairy operations.",
    items: [
      "Mastitis prevention & udder health",
      "Lactation & nutrition support",
      "Reproductive wellness programs",
      "Calf rearing immunization",
    ],
    img: "/vetvac_dairy_vet_ai.jpg",
    icon: Sprout,
  },
  {
    id: "vets",
    title: "Veterinary Professionals",
    tagline: "Supporting Veterinary Expertise",
    desc: "We work to provide veterinarians and animal-health professionals with reliable products and technical information that can support informed healthcare decisions.",
    items: [
      "Diagnostic support & clinical data",
      "Targeted pharmaceuticals & vaccines",
      "Continuing education materials",
      "Dedicated specialist helpline",
    ],
    img: "/vetvac_rd_lab_ai.jpg",
    icon: Stethoscope,
  },
  {
    id: "commercial",
    title: "Commercial Farming",
    tagline: "Solutions for Modern Animal Production",
    desc: "As farming systems become more intensive and technologically advanced, effective preventive healthcare becomes increasingly important. Our solutions are designed with the practical requirements of modern commercial farms in mind.",
    items: [
      "High-density biosecurity protocols",
      "Automated administration compatibility",
      "Epidemiological outbreak barriers",
      "Farm performance optimization",
    ],
    img: "/vetvac_vaccines_ai.jpg",
    icon: Factory,
  },
];

const PARTNERS = [
  "Veterinary professionals",
  "Poultry farmers",
  "Livestock producers",
  "Dairy farms",
  "Distributors",
  "Animal-health organizations",
  "Agricultural businesses",
];

const STATS = [
  { icon: Bird, value: "50M+", label: "Poultry Birds Protected" },
  { icon: Wheat, value: "500,000+", label: "Cattle & Herd Animals" },
  { icon: Building2, value: "650+", label: "Commercial Farms" },
  { icon: ShieldCheck, value: "99.8%", label: "Vaccine Efficacy Rate" },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES_LIST[activeTab];
  const CurrentIcon = current.icon;

  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.green }}>
      <ScrollProgress color={COLORS.primary} />

      <VetvacNavbar />

      {/* Hero Banner */}
      <section
        className="py-20 px-6 border-b"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white shadow-sm"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Globe size={13} />
              <span>05 — Industries We Serve</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.green }}>
              Supporting Every Stage of Animal Health
            </h1>
            <p className="text-[16px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
              VET VAC PHARMA develops its focus around the diverse requirements of the animal-health industry, helping healthcare professionals and producers manage animal health through preventive and supportive solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="/group-companies/Vetvacpharma/contact">
                <span>Become a Partner</span>
                <Handshake size={16} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/Vetvacpharma">
                <span>Explore VET VAC PHARMA</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Stats */}
      <section className="py-10 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-center"
              style={{
                backgroundColor: idx % 2 === 0 ? COLORS.lightBg : COLORS.lightGreen,
                borderColor: idx % 2 === 0 ? COLORS.border : COLORS.borderGreen,
              }}
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }} />
              <div className="text-2xl font-black mb-1" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Industry Interactive Tabs & Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {INDUSTRIES_LIST.map((ind, idx) => {
                const isActive = activeTab === idx;
                const Icon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                      isActive ? "shadow-md -translate-y-0.5" : "hover:bg-white/80"
                    }`}
                    style={{
                      backgroundColor: isActive ? COLORS.white : COLORS.lightBg,
                      borderColor: isActive ? COLORS.primary : COLORS.border,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: isActive ? COLORS.primary : COLORS.lightGreen,
                          color: isActive ? COLORS.white : COLORS.green,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-[14.5px] font-black" style={{ color: COLORS.green }}>
                          {ind.title}
                        </p>
                        <p className="text-[11.5px] line-clamp-1" style={{ color: COLORS.green }}>
                          {ind.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isActive ? "-rotate-90 text-[#094C80]" : "rotate-0 text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Tab Showcase */}
            <div className="lg:col-span-8">
              <div
                className="rounded-2xl border p-8 lg:p-10 bg-white shadow-sm flex flex-col justify-between"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: COLORS.white }}
                      >
                        <CurrentIcon size={26} style={{ color: COLORS.green }} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black" style={{ color: COLORS.green }}>
                          {current.title}
                        </h2>
                        <p className="text-[13.5px] font-bold" style={{ color: COLORS.green }}>
                          {current.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase"
                      style={{ backgroundColor: COLORS.white, color: COLORS.green }}
                    >
                      Field Verified
                    </span>
                  </div>

                  <p className="text-[14.5px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
                    {current.desc}
                  </p>

                  <div
                    className="relative w-full h-64 rounded-xl overflow-hidden border mb-6 shadow-sm"
                    style={{ borderColor: COLORS.border }}
                  >
                    <Image
                      src={current.img}
                      alt={current.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <p className="text-[13px] font-black uppercase tracking-wider mb-3" style={{ color: COLORS.green }}>
                    Solutions Include:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {current.items.map((item) => (
                      <div
                        key={item}
                        className="p-3.5 rounded-xl border flex items-center gap-2.5"
                        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
                      >
                        <CheckCircle2 size={16} style={{ color: COLORS.green }} className="flex-shrink-0" />
                        <span className="text-[13px] font-bold" style={{ color: COLORS.green }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: COLORS.border }}>
                  <span className="text-[13px] font-medium" style={{ color: COLORS.green }}>
                    Customized disease prevention programs for your farm
                  </span>
                  <Link
                    href="/group-companies/Vetvacpharma/contact"
                    className="px-6 py-2.5 rounded-lg text-[13px] font-bold text-white flex items-center gap-2 shadow-sm hover:bg-[#1E855C] transition-all duration-300"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    <span>Inquire for {current.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Animal Health Partners Ecosystem */}
          <div
            className="rounded-2xl border p-8 lg:p-10 bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div className="max-w-2xl mb-6">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider block mb-1"
                style={{ color: COLORS.green }}
              >
                LONG-TERM RELATIONSHIPS
              </span>
              <h3 className="text-2xl font-black mb-2" style={{ color: COLORS.green }}>
                Animal Health Partners
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: COLORS.green }}>
                We aim to build long-term relationships across the entire veterinary and agricultural value chain:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {PARTNERS.map((partner) => (
                <div
                  key={partner}
                  className="p-3.5 rounded-xl border flex items-center gap-2.5"
                  style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                  >
                    <Check size={11} />
                  </div>
                  <span className="text-[13px] font-bold" style={{ color: COLORS.green }}>
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
              style={{ backgroundColor: COLORS.primary }}
            >
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EAF3F8] block mb-1">
                  COLLABORATE WITH VET VAC PHARMA
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Partner With VET VAC PHARMA
                </h3>
                <p className="text-[13.5px] text-white/90 max-w-xl">
                  Together, we can contribute to healthier animals, stronger farming operations, and a more sustainable future for the animal-health industry.
                </p>
              </div>
              <Link
                href="/group-companies/Vetvacpharma/contact"
                className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 shadow-sm"
              >
                <span>Become a Partner</span>
                <Handshake size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </main>
  );
}
