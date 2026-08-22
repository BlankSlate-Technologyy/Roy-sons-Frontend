"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  HardHat,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  Tractor,
  Users,
  Wheat,
  Zap,
  ArrowRight,
  Sprout,
  Sun,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NationalAgriculturalShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Agricultural\nExperience" },
  { icon: Tractor, value: "500+", label: "Agricultural & Dairy\nProjects" },
  { icon: Wheat, value: "1M+", label: "Acres Supported &\nCultivated" },
  { icon: Users, value: "10K+", label: "Farmers Empowered\nNationwide" },
  { icon: ShieldCheck, value: "99%", label: "Quality & Safety\nStandards" },
];

const SERVICES = [
  {
    icon: Wheat,
    title: "Agricultural Development",
    desc: "Precision mechanized farming, GPS laser land leveling, high-capacity tractors, and combine harvesting fleets.",
    href: "/group-companies/national-agricultural/services#agri-development",
    img: "/agri_hero_farm.svg",
  },
  {
    icon: Building2,
    title: "Dairy Development",
    desc: "Automated milking parlors, rapid bulk milk chillers, silage packing, and village collection networks.",
    href: "/group-companies/national-agricultural/services#dairy-development",
    img: "/agri_dairy_livestock.svg",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation Systems",
    desc: "Solar center-pivot sprinklers and precision drip irrigation reducing water consumption by 50%.",
    href: "/group-companies/national-agricultural/services#irrigation",
    img: "/agri_hero_farm.svg",
  },
  {
    icon: Leaf,
    title: "Livestock Management",
    desc: "Elite pedigree Holstein-Friesian & Sahiwal genetics, artificial insemination, and herd veterinary healthcare.",
    href: "/group-companies/national-agricultural/services#livestock",
    img: "/agri_dairy_livestock.svg",
  },
  {
    icon: FlaskConical,
    title: "Seed Tech & Crop Nutrition",
    desc: "Certified high-germination hybrid seeds, organic liquid bio-fertilizers, and custom N-P-K nutrient blends.",
    href: "/group-companies/national-agricultural/services#seed-tech",
    img: "/agri_hero_farm.svg",
  },
  {
    icon: Tractor,
    title: "Agribusiness Advisory",
    desc: "Corporate farm planning, financial modeling, climate-smart greenhouses, and food supply chain logistics.",
    href: "/group-companies/national-agricultural/services#consultancy",
    img: "/agri_dairy_livestock.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Soil & Water Assessment", desc: "Comprehensive on-site soil chemistry assays, water salinity testing, and satellite topographical mapping." },
  { num: "02", title: "Precision Engineering", desc: "Computerized irrigation layout design, laser land grading, and automated drainage system modeling." },
  { num: "03", title: "Mechanized Implementation", desc: "Deploying high-efficiency solar tube-wells, drip networks, and modern planting machinery." },
  { num: "04", title: "Crop & Herd Management", desc: "Certified hybrid seed planting, integrated pest control, and pedigree dairy herd nutrition." },
  { num: "05", title: "Quality Harvesting & Cold Chain", desc: "Automated combine grain harvesting and rapid bulk milk cooling at 4°C." },
  { num: "06", title: "Market Linkages & Growth", desc: "Connecting producers directly to national food processors, commodity buyers, and export channels." },
];

const FAQS = [
  {
    q: "What services does National Agricultural Corporation offer?",
    a: "We provide end-to-end agribusiness solutions including mechanized farm development, solar drip and pivot irrigation, commercial dairy farm setup, pedigree livestock breeding, and certified hybrid seed supply.",
  },
  {
    q: "How much water can your solar drip irrigation systems save?",
    a: "Our pressurized drip and micro-sprinkler irrigation systems deliver water directly to crop root zones, reducing water consumption and evaporation by up to 50% compared to traditional flood irrigation.",
  },
  {
    q: "Do you provide turn-key commercial dairy farm setups?",
    a: "Yes. We design and construct complete dairy facilities including automated electronic milking parlors, rapid milk chillers, silage packing systems, and veterinary herd management.",
  },
  {
    q: "How can farmers and corporate landholders partner with NAC?",
    a: "You can submit an inquiry through our Commercial Desk or contact our Lahore headquarters to request on-site soil assays, irrigation proposals, and customized farm business plans.",
  },
];

export default function NationalAgriculturalHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1A5C2A] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section with Panoramic Farm Illustration */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Agritech &amp; Food Security</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Empowering Pakistan&apos;s <span style={{ color: theme.accent }}>Agricultural Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd is a leader in modern agribusiness, smart irrigation, high-yield dairy genetics, and mechanized farm development. Transforming rural livelihoods and ensuring national food security.
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
                  <span>Request Farm Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/agri_hero_farm.svg"
                  alt="Modern Agricultural Fields and Pivot Irrigation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#E8A800]">
                        1 Million+ Acres Supported
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      Mechanized Farming · Smart Irrigation · Dairy Hubs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.primary }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/agri_dairy_livestock.svg"
                  alt="Modern Dairy and Livestock Facilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#E8A800] mb-1">
                      Advanced Dairy Technology
                    </p>
                    <h4 className="text-base font-bold">Automated Milking &amp; Rapid Cold Chain Logistics</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Modern Agritech Engineered For High Productivity</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                National Agricultural Corporation (Pvt) Ltd brings together certified agronomists, veterinary specialists, and irrigation engineers. We deliver mechanized agricultural infrastructure, climate-resilient farming, and dairy breeding programs that elevate national production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#E8A800] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">50% Water Savings with Drip Irrigation</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#E8A800] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Certified Disease-Free Livestock Genetics</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-agricultural/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#E8A800]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agribusiness Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-agricultural/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All 6 Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="nac-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primary}10` }}>
                        <Icon size={20} style={{ color: theme.primary }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.primary }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Agribusiness Development Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial soil chemistry tests to precision harvesting and direct market connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.primary }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.primary }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.primary }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#E8A800]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#E8A800]">
                READY TO MODERNIZE YOUR FARM OR DAIRY ESTATE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Request A Confidential Farm Feasibility Study
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our agronomy and dairy specialists to receive equipment quotes, water designs, and yield forecasts.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Farm Quotation</span>
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
