"use client";

import React from "react";
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
  Sparkles,
  Zap,
  Building2,
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

const ABOUT_STATS = [
  { value: "30+", label: "Years of Dairy\nFarming Experience", icon: Award },
  { value: "25K+", label: "Healthy Pedigree\nLivestock Herd", icon: Users },
  { value: "120M+", label: "Liters Annual Milk\nProduction", icon: Truck },
  { value: "600+", label: "Veterinarians &\nDairy Specialists", icon: HeartPulse },
  { value: "100%", label: "Animal Welfare &\nHygiene Standards", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Purity & Hygiene First",
    desc: "Maintaining automated, untouched-by-hand milking systems and instant 4°C rapid chilling tanks to ensure zero bacterial contamination.",
  },
  {
    icon: HeartPulse,
    title: "Strict Animal Welfare",
    desc: "Providing temperature-controlled sand-bedded loafing sheds, precision computerized nutritional rations, and 24/7 veterinary supervision.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farm Ecology",
    desc: "Converting bovine manure into renewable biogas and high-potency organic compost while utilizing closed-loop wash water treatment systems.",
  },
  {
    icon: Award,
    title: "Superior Dairy Genetics",
    desc: "Continual genetic enhancement through imported pedigree Holstein-Friesian semen, delivering high-butterfat, nutrient-rich milk yields.",
  },
];

export default function SwissFarmAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Swiss Farms</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Pioneering Commercial Dairy &amp; <span style={{ color: theme.accentGold }}>Livestock Excellence</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Farms is a premier commercial dairy enterprise and livestock breeding corporation. Operating modern automated milking parlors, scientifically formulated animal nutrition programs, and certified cold-chain networks, we supply over 120 million liters of pure, unadulterated milk annually to leading national food processors and institutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-farm/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Dairy Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>Contact Commercial Desk</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-hero.png"
                  alt="Swiss Farms Automated Milking & Pastures"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.accentGold }}>
                      Certified Dairy Complex
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      120M+ Liters Pure Milk · 25,000+ Pedigree Herd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/swiss-farm-about.png"
                alt="Swiss Farms Heritage & Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#C5A059] block mb-1">
                    Dairy Infrastructure
                  </span>
                  <h4 className="text-base font-bold">State-Of-The-Art Automated Rotary Milking Parlors</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To produce wholesome, unadulterated dairy products and cultivate superior livestock genetics through innovative farm technology, scientific feeding, and compassionate animal care that nourishes families and fuels agribusiness development.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s gold-standard dairy and livestock conglomerate, recognized internationally for genetic excellence, strict food safety governance, and sustainable agricultural stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The foundational commitments driving our veterinary doctors, dairy specialists, and operations teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="swiss-farm-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.primary }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.accentGold }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.accentGold }}>
                      Enforced Protocol
                    </span>
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
                LOOKING FOR BULK DAIRY PROCUREMENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Partner With Swiss Farms Today
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Contact our commercial sales desk to discuss daily or contract bulk milk deliveries, fat percentage testing, and refrigerated tanker logistics.
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
