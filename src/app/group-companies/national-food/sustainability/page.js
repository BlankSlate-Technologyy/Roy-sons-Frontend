"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Leaf,
  Recycle,
  Package,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NFSShared";

const SUSTAINABILITY_STATS = [
  { value: "1000000+", label: "Nutritious Meals\nPrepared Daily", icon: UtensilsCrossed },
  { value: "85%", label: "Reduction in Kitchen\nLandfill Food Waste", icon: Recycle },
  { value: "100%", label: "Eco-Friendly Biodegradable\nPackaging Available", icon: Package },
  { value: "25+", label: "Years of Responsible\nFood Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Recycle,
    title: "Zero Food Waste & Organic Composting",
    desc: "We deploy AI-driven kitchen portion planning and automated ingredient prep to eliminate food overproduction, converting unavoidable organic scraps into agricultural compost.",
    features: [
      "AI predictive ingredient batch sizing matching daily cafeteria footfall",
      "Organic food waste segregation and composting partnerships with organic farms",
      "Redistribution of surplus safe meals to approved community charities",
    ],
  },
  {
    icon: Leaf,
    title: "Farm-to-Fork Local Farmer Procurement",
    desc: "We partner directly with over 300 Pakistani smallholder agricultural growers to source freshly harvested vegetables, grains, and dairy, minimizing carbon-heavy transit miles.",
    features: [
      "Fair-trade farm-gate pricing supporting rural farming families",
      "Shortening cold-chain food miles from harvest field to client cafeteria",
      "Chemical pesticide screening and non-GMO grain priority procurement",
    ],
  },
  {
    icon: Package,
    title: "100% Biodegradable Packaging Solutions",
    desc: "We replace single-use plastic takeaway containers with sugarcane bagasse meal trays, unbleached kraft paper bags, and biodegradable cutlery.",
    features: [
      "100% compostable sugarcane bagasse thermal takeaway meal boxes",
      "Non-toxic water-based printing inks on all food wrappers and cartons",
      "Elimination of single-use plastic straws, cups, and styrofoam containers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Energy & Water-Efficient Commercial Kitchens",
    desc: "Our central kitchens are engineered with heat recovery ventilation, solar-assisted cold stores, and automated closed-loop dishwashing systems that cut water consumption by 50%.",
    features: [
      "High-efficiency industrial steam kettles reducing gas and energy consumption",
      "Closed-loop automated ware-washing sanitizing with 50% less fresh water",
      "Transitioning urban delivery fleet to energy-efficient electric logistics vehicles",
    ],
  },
];

export default function NFSSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Food Systems &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
                Sustainable Catering For A <span style={{ color: theme.maroon }}>Healthier Planet</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At National Food Services, sustainability is embedded across every kitchen station. From zero-waste food preparation and farm-to-table local sourcing to 100% biodegradable packaging and energy-efficient kitchens, we deliver nourishment with an eco-friendly footprint.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.maroon }}
                >
                  <span>Request Eco-Friendly Catering Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-food/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.maroonDark }}
                >
                  <span>Explore Client Deployments</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-rose-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/nfs_hero_catering.svg"
                  alt="Sustainable Catering Operations and Green Kitchens"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#DFC48B]">
                      Green Catering Excellence
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.maroonDark }}>
                      Zero Food Waste · Biodegradable Trays · Local Farms
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
                  className="nfs-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.maroon}10` }}>
                    <Icon size={22} style={{ color: theme.maroon }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.maroonDark }}>
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
            <SectionLabel center>Eco-Friendly Governance</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Food Service</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven culinary practices designed to minimize food waste, eliminate non-biodegradable plastics, and empower local farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="nfs-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.maroon}10` }}>
                      <Icon size={26} style={{ color: theme.maroon }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.maroonDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(234, 214, 219, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#8C1832]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A81E3D]">
                MAKE YOUR CAFETERIA SUSTAINABLE &amp; ECO-FRIENDLY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Switch To Green Institutional Food Services
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full biodegradable packaging solutions, zero-waste meal planning, and farm-to-table fresh ingredient sourcing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Green Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                style={{ borderColor: theme.maroon, color: theme.maroon }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}
