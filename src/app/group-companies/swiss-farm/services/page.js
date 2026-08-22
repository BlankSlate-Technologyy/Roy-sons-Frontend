"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Users,
  Leaf,
  ShieldCheck,
  HeartPulse,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Zap,
  Package,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissFarmShared";

const DAIRY_SERVICES = [
  {
    id: "dairy-production",
    title: "High-Volume Dairy Production",
    subtitle: "Automated Rotary Milking & Instant Cold Chain Chilling",
    desc: "Utilizing modern electronic rotary milking parlors that milk thousands of cows daily with zero human contact, immediately chilling fresh milk to 4°C within seconds to preserve peak nutritional purity.",
    image: "/swiss-card1.png",
    tag: "Milk Production",
    icon: Truck,
    deliverables: [
      "Rotary milking parlors with computerized yield and conductivity sensors",
      "Direct-expansion rapid bulk milk coolers maintaining strict 4°C temperatures",
      "Automated CIP (Clean-In-Place) chemical sanitization between every batch",
      "Daily microbiological assays verifying low somatic cell and bacterial counts",
    ],
  },
  {
    id: "livestock",
    title: "Livestock Herd Management & Housing",
    subtitle: "Climate-Controlled Sheds & Comfort-First Husbandry",
    desc: "Housing over 25,000 head of healthy cattle in modern cross-ventilated sheds with fine mist cooling fans, deep sand bedding, and automated robotic alley scrapers.",
    image: "/swiss-card2.png",
    tag: "Herd Care",
    icon: Users,
    deliverables: [
      "Cross-ventilated dairy barns with high-volume low-speed (HVLS) fans",
      "Inorganic deep sand bedding providing superior joint and udder comfort",
      "Electronic RFID ear-tagging monitoring ruminating hours and step activity",
      "Separate maternity, calf nursery, and convalescent veterinary wards",
    ],
  },
  {
    id: "breeding",
    title: "Genetic Breeding & Reproduction",
    subtitle: "Elite Pedigree Artificial Insemination & Embryo Transfer",
    desc: "Accelerating genetic gain through imported pedigree sexed semen, genomic testing, and embryo transfer programs to breed high-yielding, heat-resilient dairy cows.",
    image: "/swiss-card3.png",
    tag: "Breeding Genetics",
    icon: Leaf,
    deliverables: [
      "100% sexed semen artificial insemination yielding 90%+ female calves",
      "Genomic profiling identifying high-butterfat and disease-resistant traits",
      "Sahiwal and Red Sindhi indigenous preservation cross-breeding programs",
      "Computerized estrus detection collars ensuring optimal insemination timing",
    ],
  },
  {
    id: "veterinary",
    title: "Veterinary Healthcare & Disease Prevention",
    subtitle: "On-Site Laboratory & Preventative Vaccination Protocols",
    desc: "Staffed 24/7 by licensed veterinary surgeons, our on-farm medical hospital delivers preventative vaccination protocols, routine diagnostic blood work, and hoof trimming care.",
    image: "/swiss-card1.png",
    tag: "Veterinary Care",
    icon: HeartPulse,
    deliverables: [
      "Strict biosecurity quarantine barriers and vehicle disinfection baths",
      "Automated real-time milk conductivity alerts for early mastitis detection",
      "Scheduled hoof health trimming and preventative therapeutic footbaths",
      "Zero-antibiotic residue milk testing before every dispatch tanker release",
    ],
  },
  {
    id: "nutrition",
    title: "Animal Nutrition & Silage Rations",
    subtitle: "Total Mixed Ration (TMR) Precision Formulations",
    desc: "Feeding our cattle a scientifically balanced diet formulated by international animal nutritionists, utilizing high-protein alfalfa hay, corn silage, and custom mineral premixes.",
    image: "/swiss-card2.png",
    tag: "Feed & Silage",
    icon: Sparkles,
    deliverables: [
      "Precision computerized Total Mixed Ration (TMR) feed wagon mixing",
      "High-energy whole-crop corn silage fermented in anaerobic bunker pits",
      "Custom bypass protein, rumen-protected fats, and vitamin-mineral licks",
      "Near-Infrared (NIR) feed testing ensuring consistent nutrient density",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainable Bio-Energy & Farm Infrastructure",
    subtitle: "Manure Biogas Digesters & Organic Compost Production",
    desc: "Implementing circular economy practices by transforming cattle manure into clean biogas energy to power farm operations and producing premium organic compost for green crop fertilizing.",
    image: "/swiss-card3.png",
    tag: "Circular Agritech",
    icon: Zap,
    deliverables: [
      "Anaerobic bio-digesters producing green electricity and thermal energy",
      "Mechanical solid-liquid manure separators generating organic fertilizer",
      "Solar-powered submersible tube-wells and water recycling wash pads",
      "Tree shelterbelts around farm boundaries reducing ambient summer heat",
    ],
  },
];

const SERVICE_STATS = [
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "25K+", label: "Livestock Managed", icon: Users },
  { value: "120M+", label: "Liters Annual Milk", icon: Truck },
  { value: "100%", label: "Pure & Unadulterated", icon: ShieldCheck },
];

export default function SwissFarmServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = DAIRY_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Commercial Dairy &amp; Livestock Services</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Comprehensive Solutions For <span style={{ color: theme.accentGold }}>Modern Dairy Operations</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From high-capacity automated milking parlors and genetic herd improvement to precision animal nutrition and sustainable bio-energy generation, Swiss Farms provides unmatched dairy excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore All 6 Capabilities</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>Request Supply Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-hero.png"
                  alt="Swiss Farms Automated Milking and Cold Chain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#C5A059]">
                      Certified Dairy Complex
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      Rotary Milking · 4°C Chilling · Pedigree Genetics
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
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.primary }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Dairy &amp; Livestock Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with automated rotary parlors, precision nutrition, and compassionate animal welfare.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search dairy capabilities (e.g. Milk, Breeding, Silage)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1C522A]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primary}10` }}>
                          <Icon size={20} style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.primary }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#C5A059]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(214, 229, 215, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.primary }}>
                          Key Technical Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/swiss-farm/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>Inquire About This Capability</span>
                      <ArrowRight size={14} />
                    </Link>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                COMMERCIAL DAIRY PROCUREMENT &amp; HERD CONSULTING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Require Bulk Milk Supply Or Livestock Genetics?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our Chief Dairy Technologist to review milk quality parameters, butterfat guarantees, and delivery logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Dairy Quote</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
