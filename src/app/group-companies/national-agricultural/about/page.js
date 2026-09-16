"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sprout,
  Sun,
  Eye,
  Target,
  Compass,
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
    title: "Agronomic Integrity",
    desc: "Empowering agricultural producers with mechanized tools, high-germination certified seeds, and precision farming techniques that ensure verifiable yield increases.",
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    desc: "Deploying high-efficiency drip and solar center-pivot irrigation networks that reduce water waste by up to 50% across arid and canal-tail regions.",
  },
  {
    icon: Leaf,
    title: "Regenerative Soil Care",
    desc: "Balancing crop nutrition with organic compost, bio-fertilizers, and regenerative crop rotation protocols that restore long-term soil microbiomes.",
  },
  {
    icon: Award,
    title: "National Food Security",
    desc: "Delivering certified disease-free livestock genetics, hygienic milk cold-chain logistics, and farm-to-processor reliability across Pakistan.",
  },
];

export default function NationalAgriculturalAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Corporate Profile</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Transforming Pakistan&apos;s <span style={{ color: theme.primaryMid }}>Agrarian Economy</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd is an established agribusiness enterprise committed to modernizing commercial farming, precision irrigation, and livestock production. Guided by agronomic science and sustainable practices, we help secure the nation&apos;s food future.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/group-companies/national-agricultural/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryMid }}
                >
                  <span>Explore Agribusiness Services</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border agri-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-about.png"
                  alt="Modern Agriculture and Farm Infrastructure"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.accent }}>
                      Roy &amp; Sons Group Company
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Established 25+ Years · Lahore Headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Numbers / Statistics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ABOUT_STATS.map((stat, i) => {
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

      {/* Two-Column Corporate Layout: Company Introduction */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-sm agri-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/agriculture-2.jpg"
                  alt="Agricultural Machinery and Field Cultivation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: theme.accent }}>
                      Mechanized Operations
                    </p>
                    <p className="text-sm font-medium">GPS Laser Grading &amp; High-Yield Sowing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Built on Engineering Excellence &amp; Agronomic Science
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd operates as the core agribusiness entity under Roy &amp; Sons. With decades of field experience across Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan, we bridge the gap between traditional farming and modern corporate agribusiness.
              </p>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Our operations encompass GPS laser land leveling fleets, high-efficiency solar drip and pivot irrigation systems, elite Holstein and pure Sahiwal dairy genetics, certified hybrid seed multiplication, and mobile on-site soil testing laboratories.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.primaryMid }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">50% Water Conservation via Drip</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.primaryMid }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">Certified Disease-Free Genetics</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-agricultural/services"
                className="agri-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.primaryMid }}
              >
                <span>View our agribusiness solutions</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Strategy */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Strategic Direction</SectionLabel>
            <SectionHeading center className="mb-3">Mission &amp; Corporate Vision</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Guiding our corporate agricultural initiatives toward measurable impact and enduring national prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="agri-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                  <Target size={20} style={{ color: theme.primaryMid }} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To modernize Pakistan&apos;s agricultural and livestock sectors by deploying high-efficiency mechanization, water-saving irrigation, scientific herd genetics, and certified crop inputs that double farm profitability and safeguard natural resources.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="agri-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.accent}18` }}>
                  <Eye size={20} style={{ color: theme.accent }} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s premier benchmark in sustainable agribusiness, recognized across South Asia and the GCC for innovative agritech engineering, hygienic dairy supply chains, and transformative smallholder farmer prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Our Principles</SectionLabel>
            <SectionHeading center className="mb-3">Corporate Values</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              The foundational ethical and technical standards that steer every farm project and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="agri-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5" style={{ backgroundColor: `${theme.primaryMid}10` }}>
                      <Icon size={18} style={{ color: theme.primaryMid }} />
                    </div>
                    <h4 className="text-[15px] font-semibold mb-2" style={{ color: theme.navy }}>
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Commercial Agricultural Partnership
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Work With National Agricultural Corporation
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Whether you are an institutional landholder, corporate investor, or agricultural cooperative, connect with our leadership desk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Contact Corporate Desk</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
