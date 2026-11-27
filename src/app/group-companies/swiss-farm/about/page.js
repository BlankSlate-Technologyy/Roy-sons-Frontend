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
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SwissFarmLeadershipSection,
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
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Swiss Farms</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                Pioneering Commercial Dairy &amp;{" "}
                <span style={{ color: theme.accentGold }}>Livestock Excellence</span>
              </h1>

              <p
                className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Swiss Farms is a premier commercial dairy enterprise and livestock breeding corporation. Operating modern automated milking parlors, scientifically formulated animal nutrition programs, and certified cold-chain networks, we supply over 120 million liters of pure, unadulterated milk annually to leading national food processors and institutions.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/group-companies/swiss-farm/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Dairy Products</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 bg-white transition-all duration-300 hover:bg-[#F4F8F4] cursor-pointer"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <span>Contact Commercial Desk</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border group bg-white"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/vetvac_about_ai.jpg"
                  alt="Swiss Farms On-Site Dairy Quality Laboratory and Herd Monitoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[13px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.accentGold }}
                    >
                      Certified Dairy Complex &amp; QA Lab
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.primary }}>
                      120M+ Liters Pure Milk · 25,000+ Pedigree Herd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Forest Green Animated Number Counters */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: theme.primaryDark,
          borderColor: "rgba(255,255,255,0.1)",
          color: "#FFFFFF",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: theme.primaryCard,
                    borderColor: "rgba(224, 188, 111, 0.28)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(224, 188, 111, 0.16)" }}
                  >
                    <Icon size={22} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[13.5px] font-bold uppercase tracking-wide whitespace-pre-line text-[#DFECE2] leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Graphic */}
            <div
              className="relative w-full h-[340px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50"
              style={{ borderColor: theme.border }}
            >
              <Image
                src="/vetvac_livestock_slide_3.jpg"
                alt="Swiss Farms Expansive Green Pastures and Livestock Estates"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span
                    className="text-[13px] font-black uppercase tracking-widest block mb-1"
                    style={{ color: theme.goldBright }}
                  >
                    Dairy Infrastructure
                  </span>
                  <h4 className="text-[17px] font-extrabold text-white">
                    State-Of-The-Art Automated Rotary Milking &amp; Pasture Estates
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-7">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-3">Mission Statement</SectionHeading>
                <p
                  className="text-[15.5px] sm:text-[16.5px] font-medium leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  To produce wholesome, unadulterated dairy products and cultivate superior livestock genetics through innovative farm technology, scientific feeding, and compassionate animal care that nourishes families and fuels agribusiness development.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-3">Our Vision</SectionHeading>
                <p
                  className="text-[15.5px] sm:text-[16.5px] font-medium leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  To be Pakistan&apos;s gold-standard dairy and livestock conglomerate, recognized internationally for genetic excellence, strict food safety governance, and sustainable agricultural stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-3">
              Our Core Values
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              The foundational commitments driving our veterinary doctors, dairy specialists, and operations teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="swiss-farm-card-hover p-6 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${theme.primary}12` }}
                    >
                      <Icon size={24} style={{ color: theme.primary }} />
                    </div>
                    <h3 className="text-[19px] font-black mb-2.5" style={{ color: theme.primary }}>
                      {val.title}
                    </h3>
                    <p
                      className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {val.desc}
                    </p>
                  </div>

                  <div
                    className="mt-5 pt-4 border-t flex items-center gap-2"
                    style={{ borderColor: theme.border }}
                  >
                    <CheckCircle2 size={16} style={{ color: theme.accentGold }} />
                    <span
                      className="text-[13px] font-extrabold uppercase tracking-wider"
                      style={{ color: theme.accentGold }}
                    >
                      Enforced Protocol
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership & Team Section */}
      <SwissFarmLeadershipSection
        eyebrow="Executive Leadership"
        title="Swiss Farms Leadership & Governance Council"
        subtitle="Meet the ROYSONS Group directors and dairy operations leaders steering commercial herd excellence, food safety compliance, and sustainable livestock stewardship."
      />

      {/* Executive CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-7 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                LOOKING FOR BULK DAIRY PROCUREMENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Partner With Swiss Farms Today
              </h2>
              <p className="text-[15.5px] font-medium max-w-xl text-[#D8E8DC]">
                Contact our commercial sales desk to discuss daily or contract bulk milk deliveries, fat percentage testing, and refrigerated tanker logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                <span>Request Dairy Quote</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 border-white/80 text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <Phone size={16} />
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
