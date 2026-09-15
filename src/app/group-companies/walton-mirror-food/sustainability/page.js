"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Leaf,
  Recycle,
  Droplet,
  Package,
  Sparkles,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonFoodShared";

const SUSTAINABILITY_STATS = [
  { value: "120000", label: "Tons Sustainable Food\nManufactured Annually", icon: Factory },
  { value: "100%", label: "Factory Effluent Treated &\nRecycled for Irrigation", icon: Droplet },
  { value: "45%", label: "Thermal & Electric Energy\nFrom Clean Solar / Heat Recovery", icon: Leaf },
  { value: "25+", label: "Years of Responsible\nManufacturing Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Leaf,
    title: "Regenerative Contract Farming Partnerships",
    desc: "We partner with over 800 local agricultural growers, providing training in precision irrigation, non-chemical pest management, and post-harvest handling.",
    features: [
      "Guaranteed farm-gate buyback agreements uplifting rural agrarian livelihoods",
      "Promotion of organic composting and minimal synthetic fertilizer usage",
      "Rigorous pre-harvest multi-residue pesticide testing protecting consumers",
    ],
  },
  {
    icon: Factory,
    title: "Clean Energy & Waste Heat Recovery",
    desc: "Our processing plants harness rooftop solar PV generation and industrial economizers capturing waste steam from retort autoclaves to pre-heat boiler feedwater.",
    features: [
      "2.5 MW rooftop industrial solar installations powering cold storage facilities",
      "Closed-loop steam condensate recovery cutting boiler fuel consumption by 30%",
      "Transitioning plant forklifts and intra-facility transport to electric battery power",
    ],
  },
  {
    icon: Package,
    title: "100% Recyclable Barrier Packaging",
    desc: "We pioneer eco-conscious retail packaging by engineering mono-material polyethylene recyclable pouches and reducing plastic film gauges by up to 25%.",
    features: [
      "Mono-material recyclable barrier films replacing non-recyclable multi-foil laminates",
      "FSC-certified unbleached corrugated export cartons manufactured from recycled pulp",
      "Lightweighting PET and glass jars to minimize freight transportation carbon emissions",
    ],
  },
  {
    icon: Droplet,
    title: "Zero Liquid Discharge & Effluent Treatment (ETP)",
    desc: "Operating full biological and membrane Effluent Treatment Plants (ETP) that purify 100% of vegetable washing and facility cleaning wastewater to EPA standards.",
    features: [
      "Advanced multi-stage aerobic biological wastewater treatment facilities",
      "Reclaimed water utilized for on-site green belt landscaping and local farming",
      "Zero hazardous industrial discharge into local waterways or aquifers",
    ],
  },
];

export default function WaltonFoodSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Agro-Processing &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Sustainable Food Processing For A <span style={{ color: theme.green }}>Greener Tomorrow</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Walton &amp; Mirror Food, environmental stewardship is integral to industrial efficiency. Through regenerative farm partnerships, clean solar energy, 100% wastewater recycling, and recyclable barrier packaging, we manufacture nourishing food with a responsible planetary footprint.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-mirror-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.green }}
                >
                  <span>Request Green Manufacturing Review</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/walton-mirror-food/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.greenDark }}
                >
                  <span>Explore Processing Plants</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-xl group bg-slate-900" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood/hero_grain_agriculture.jpg"
                  alt="Sustainable Grain Agriculture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#1E6B43] text-white inline-block mb-2">
                      Zero Waste To Landfill
                    </span>
                    <h4 className="text-base font-bold">100% Organic Processing Byproducts Repurposed as Animal Feed</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs hover:border-[#1E6B43] transition-colors"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}12` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.greenDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 150} />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAF8]" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Our Four Environmental Pillars</SectionLabel>
            <SectionHeading center className="mb-4">Responsible Manufacturing Ecosystem</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From regenerative contract farming to zero-effluent water purification, our manufacturing processes prioritize circular sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border p-8 bg-white shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.green}12` }}>
                      <Icon size={24} style={{ color: theme.green }} />
                    </div>
                    <h3 className="text-lg font-black mb-3" style={{ color: theme.greenDark }}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                      {pillar.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={14} className="text-[#1E6B43] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
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

      <WaltonFoodFooter />
    </main>
  );
}
