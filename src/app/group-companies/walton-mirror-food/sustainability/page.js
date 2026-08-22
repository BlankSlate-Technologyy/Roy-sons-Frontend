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
  { value: "20+", label: "Years of Responsible\nManufacturing Stewardship", icon: Award },
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
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Agro-Processing &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Sustainable Food Processing For A <span style={{ color: theme.green }}>Greener Tomorrow</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Walton &amp; Morris Foods, environmental stewardship is integral to industrial efficiency. Through regenerative farm partnerships, clean solar energy, 100% wastewater recycling, and recyclable barrier packaging, we manufacture nourishing food with a responsible planetary footprint.
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
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood_hero_processing.svg"
                  alt="Sustainable Food Processing and Clean Manufacturing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#F3C677]">
                      Eco-Friendly Manufacturing
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.greenDark }}>
                      Solar Powered · Zero Water Discharge · Recyclable Films
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
                  className="wm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}10` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.greenDark }}>
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
            <SectionLabel center>Sustainable Manufacturing Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Food Production</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven agro-industrial practices designed to minimize carbon emissions, eliminate water contamination, and empower local farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="wm-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.green}10` }}>
                      <Icon size={26} style={{ color: theme.green }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.greenDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(211, 228, 219, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#D89C46]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                ELEVATE YOUR FOOD BRAND WITH SUSTAINABLE MANUFACTURING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Switch To Certified Green Food Processing
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full recyclable packaging solutions, zero-pesticide raw ingredient sourcing, and clean solar-powered processing options.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-mirror-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request Green Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
