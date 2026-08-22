"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  FlaskConical,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sprout,
  Sun,
  TrendingUp,
  Building2,
  Globe,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalAgriculturalShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years of Agricultural\nExcellence", icon: Award },
  { value: "500+", label: "Completed Farm\nProjects", icon: Tractor },
  { value: "1M+", label: "Acres Supported &\nIrrigated", icon: Wheat },
  { value: "10K+", label: "Farmers Trained &\nEmpowered", icon: Users },
  { value: "99%", label: "Crop Quality &\nGermination Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Sprout,
    title: "Farmer-Centric Innovation",
    desc: "Empowering agricultural producers with mechanized tools, high-yield certified seeds, and precision farming technologies to maximize yield per acre.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    desc: "Deploying high-efficiency drip and solar center-pivot irrigation networks that reduce water waste by up to 50% across drought-prone regions.",
  },
  {
    icon: Leaf,
    title: "Sustainable Soil Health",
    desc: "Balancing crop nutrition with organic compost, bio-fertilizers, and regenerative crop rotation techniques to protect soil microbiomes.",
  },
  {
    icon: Award,
    title: "Quality Assurance & Food Security",
    desc: "Delivering certified disease-free livestock genetics, hygienic milk cold-chain logistics, and farm-to-table traceability.",
  },
];

export default function NationalAgriculturalAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A5C2A] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About National Agricultural Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Transforming Agriculture &amp; <span style={{ color: theme.accent }}>Dairy Development</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd (NAC) is a premier agribusiness enterprise dedicated to modernizing Pakistan&apos;s agrarian economy. Through mechanized farming, precision irrigation, high-yield dairy breeding, and sustainable farmer empowerment programs, we lead the nation towards food sovereignty.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-agricultural/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Agribusiness Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/agri_dairy_livestock.svg"
                  alt="Modern Dairy Development and Livestock Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.accent }}>
                      Modern Dairy &amp; Livestock Hub
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      High-Yield Genetics &amp; Automated Cold Chain Logistics
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
                  className="nac-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
                src="/agri_hero_farm.svg"
                alt="Panoramic Smart Agriculture and Crop Fields"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E8A800] block mb-1">
                    Farmland Operations
                  </span>
                  <h4 className="text-base font-bold">1 Million+ Acres of Irrigated Crops</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To advance sustainable agriculture, modern dairy farming, and smart irrigation across Pakistan by integrating innovative technology, resilient crop genetics, and mechanized infrastructure that elevate farmers&apos; prosperity.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s leading agritech and dairy development corporation, recognized for modernizing agricultural value chains, ensuring water efficiency, and empowering rural farming communities.
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
              The ethical commitments that drive our agronomy teams, dairy specialists, and field engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="nac-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
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
                    <CheckCircle2 size={15} style={{ color: theme.accent }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.accent }}>
                      Standard Enforced
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.accent }}>
                READY TO DEVELOP YOUR AGRICULTURAL ESTATE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Consult Our Agronomists &amp; Dairy Engineers
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide turnkey commercial farm setup, high-efficiency pivot irrigation design, and dairy herd genetics planning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Farm Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
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
