"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Boxes,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  Factory,
  FlaskConical,
  Package,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Snowflake,
  Sparkles,
  TrendingUp,
  Truck,
  Users2,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/WaltonFoodShared";

const STATS = [
  { icon: Award, value: "20+", label: "Years of Manufacturing\nExcellence" },
  { icon: Package, value: "400+", label: "Food Products\nManufactured" },
  { icon: Factory, value: "120000", label: "Tons Annual\nProduction Capacity" },
  { icon: Users2, value: "300+", label: "Skilled Food\nTechnologists" },
  { icon: ShieldCheck, value: "99.8%", label: "Quality & Safety\nPass Rate" },
];

const SERVICES = [
  {
    icon: Factory,
    title: "Modern Food Processing",
    desc: "High-volume processing of agricultural produce, grains, pulses, and dairy with automated optical sorting and aseptic canning.",
    href: "/group-companies/walton-mirror-food/services#modern-processing",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    icon: Snowflake,
    title: "Frozen Food Production (IQF)",
    desc: "Flash-frozen vegetables, French fries, ready-to-cook snacks, and layered parathas using sub-zero -38°C cryogenic IQF technology.",
    href: "/group-companies/walton-mirror-food/services#frozen-production",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    icon: Package,
    title: "Packaged Consumer Goods (FMCG)",
    desc: "Retail-ready shelf-stable retort meal pouches, MAP fresh packaging, biscuits, and extruded snacks.",
    href: "/group-companies/walton-mirror-food/services#packaged-goods",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    icon: Boxes,
    title: "Private Label & OEM Manufacturing",
    desc: "Turnkey private label co-packing for national supermarkets, FMCG brand owners, and international export distributors.",
    href: "/group-companies/walton-mirror-food/services#private-label",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    icon: FlaskConical,
    title: "Food R&D & Recipe Innovation",
    desc: "Culinary science laboratory creating custom formulations, shelf-life acceleration testing, and clean-label solutions.",
    href: "/group-companies/walton-mirror-food/services#food-rd",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control & Assurance",
    desc: "HACCP and ISO 22000 certified food safety testing, in-line metal detection, and batch spectrometry tracking.",
    href: "/group-companies/walton-mirror-food/services#quality-assurance",
    img: "/waltonfood_hero_processing.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Walton Gold Frozen Foods",
    tag: "IQF Frozen Foods",
    desc: "Flash-frozen French fries, green peas, sweet corn, stuffed parathas, and samosas locked in at -38°C.",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    name: "Walton Chef Ready-to-Eat Meals",
    tag: "Retort Pouches",
    desc: "Authentic Biryani, Nihari, Chicken Karahi, and Daal in 12-month ambient storage retort pouches.",
    img: "/waltonfood_hero_processing.svg",
  },
  {
    name: "Walton Dairy UHT Line",
    tag: "UHT Milk & Butter",
    desc: "Direct steam injection pasteurized UHT full-cream milk, butter, cheese, and pure dairy ghee.",
    img: "/waltonfood_hero_processing.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Ingredient Sourcing & Grading", desc: "Selecting farm-fresh contract agricultural produce, grains, and 100% Halal meat with multi-residue pesticide screening." },
  { num: "02", title: "Microbiology & Lab Inspection", desc: "Rigorous laboratory testing for moisture, purity, microbiological safety, and biochemical grading." },
  { num: "03", title: "Automated Processing & Cooking", desc: "Optical laser sorting, continuous steam blanching, high-pressure cooking, and cryogenic flash freezing." },
  { num: "04", title: "Hygienic Cleanroom Packaging", desc: "Automated filling into food-grade barrier pouches, MAP gas flushing, or hermetically sealed retort pouches." },
  { num: "05", title: "Climate-Controlled Storage", desc: "Holding finished inventory in automated sub-zero -20°C frozen and climate-controlled dry warehouses." },
  { num: "06", title: "Export Logistics & Distribution", desc: "Refrigerated road fleet and international container shipping with full barcode batch traceability." },
];

const FAQS = [
  {
    q: "What food safety certifications do Walton & Morris Foods manufacturing facilities hold?",
    a: "Our manufacturing plants are fully certified under ISO 22000 (Food Safety Management Systems), HACCP, Halal Certification, and comply with international export standards for the UK, Europe, and Middle East.",
  },
  {
    q: "Does Walton & Morris Foods offer private label (OEM) co-packing services?",
    a: "Yes. We provide turnkey private label contract manufacturing for supermarket chains and brand owners, including recipe development, pilot batch trials, packaging design, and container export shipping.",
  },
  {
    q: "What is Individual Quick Freezing (IQF) technology?",
    a: "IQF is a specialized cryogenic freezing process at -38°C that freezes each piece of food individually in minutes. This prevents large ice crystals from damaging the cellular structure, locking in fresh garden flavor, crispness, and vitamins.",
  },
  {
    q: "What is the annual production capacity of your processing plants?",
    a: "Walton & Morris Foods operates an aggregate annual manufacturing capacity of over 120,000 metric tons across frozen foods, retort ready-to-eat meals, dairy products, bakery goods, and condiments.",
  },
];

export default function WaltonFoodHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section with Processing Plant Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Leading Food Manufacturing &amp; Processing Enterprise</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Walton &amp; Morris Foods. <span style={{ color: theme.green }}>Nourishing Generations with Quality.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Producing quality food, nourishing every generation. Walton &amp; Morris Foods specializes in modern food processing, frozen foods, packaged consumer goods, dairy, ready-to-eat meals, and private label manufacturing engineered to global quality standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-mirror-food/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.green }}
                >
                  <span>Explore Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/walton-mirror-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.greenDark }}
                >
                  <span>Talk To Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood_hero_processing.svg"
                  alt="Automated Food Processing Telemetry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BC8330]">
                        120,000 Tons Annual Capacity
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.greenDark }}>
                      IQF Freezing · Retort Meals · UHT Dairy · OEM
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
                  className="wm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}10` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.greenDark }}>
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood_hero_processing.svg"
                  alt="Industrial Food Processing Lines"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#F3C677] mb-1">
                      Premier Food Manufacturing
                    </p>
                    <h4 className="text-base font-bold">20+ Years of Manufacturing Leadership</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Walton &amp; Morris Foods</SectionLabel>
              <SectionHeading className="mb-6">Engineered To Global Food Standards</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Walton &amp; Morris Foods specializes in high-volume food processing, flash-frozen IQF foods, packaged consumer goods, dairy, ready-to-eat meals, and private label manufacturing. Powered by automated European machinery and certified under ISO 22000 and HACCP, we deliver consistency, hygiene, and authentic flavors in every batch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-emerald-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#D89C46] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 22000 &amp; HACCP Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-emerald-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#D89C46] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Exporting to 25+ Countries</span>
                </div>
              </div>

              <Link
                href="/group-companies/walton-mirror-food/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1E6B43]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Manufacture</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/walton-mirror-food/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.greenDark }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="wm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.green}10` }}>
                        <Icon size={20} style={{ color: theme.green }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.greenDark }}>
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.greenDark }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Consumer Brands</SectionLabel>
              <SectionHeading>Featured Product Lines</SectionHeading>
            </div>

            <Link
              href="/group-companies/walton-mirror-food/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.green }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="wm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#D89C46]/15 text-[#BC8330] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.greenDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/walton-mirror-food/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.greenDark }}
                  >
                    <span>Request Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Methodology</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Manufacturing Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From farm-gate sourcing and lab inspection to automated cooking, flash-freezing, MAP packaging, and cold storage distribution.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.green }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.greenDark }}>
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
                  style={{ color: theme.greenDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#D89C46]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                COMMENCE YOUR NEXT FOOD PROCESSING CONTRACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Schedule A Manufacturing Scoping Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior food technologists and OEM packaging engineers to review recipe formulation, batch sizing, and export logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-mirror-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request Production Proposal</span>
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