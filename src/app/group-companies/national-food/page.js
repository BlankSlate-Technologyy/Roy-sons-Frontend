"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Hotel,
  Package,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users2,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NFSShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Culinary &\nCatering Excellence" },
  { icon: Building2, value: "500+", label: "Institutional &\nCorporate Contracts" },
  { icon: UtensilsCrossed, value: "1000000+", label: "Nutritious Meals\nPrepared Daily" },
  { icon: Users2, value: "350+", label: "Hospitals, Colleges &\nCorporate Clients" },
  { icon: ShieldCheck, value: "99.9%", label: "HACCP Food Safety &\nHygiene Compliance" },
];

const SERVICES = [
  {
    icon: UtensilsCrossed,
    title: "Institutional & Corporate Catering",
    desc: "Customized daily meal programs, cafeteria management, and executive boardroom dining for corporate campuses.",
    href: "/group-companies/national-food/services#corporate-catering",
    img: "/nfs_hero_catering.svg",
  },
  {
    icon: Hotel,
    title: "Hospital & Healthcare Nutrition",
    desc: "Specialized, dietitian-approved therapeutic meal preparation for hospital in-patients, ICU wards, and medical staff.",
    href: "/group-companies/national-food/services#healthcare-nutrition",
    img: "/nfs_hero_catering.svg",
  },
  {
    icon: Building2,
    title: "Educational Food Services",
    desc: "Hygienic, balanced, and nutritious dining services for schools, colleges, and university campus food courts.",
    href: "/group-companies/national-food/services#educational-dining",
    img: "/nfs_hero_catering.svg",
  },
  {
    icon: Truck,
    title: "Refrigerated Cold Chain & Distribution",
    desc: "Reliable logistics with 48+ multi-temperature refrigerated trucks (+2°C to +4°C) ensuring farm-to-table freshness.",
    href: "/group-companies/national-food/services#cold-chain-logistics",
    img: "/nfs_hero_catering.svg",
  },
  {
    icon: Package,
    title: "Bulk Commodity & Raw Sourcing",
    desc: "Direct farm procurement and wholesale distribution of export-grade basmati rice, wheat, pulses, and 100% Halal meat.",
    href: "/group-companies/national-food/services#bulk-sourcing",
    img: "/nfs_hero_catering.svg",
  },
  {
    icon: ShieldCheck,
    title: "HACCP & ISO 22000 Food Safety Audits",
    desc: "Certified food laboratory testing, routine ATP hygiene swabs, chef medical screenings, and PFA regulatory compliance.",
    href: "/group-companies/national-food/services#quality-audits",
    img: "/nfs_hero_catering.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "NFS Corporate Dining Suite",
    tag: "Corporate Cafeteria",
    desc: "Rotating gourmet hot lunch buffets, live cooking stations, and smart mobile cashless cafeteria ordering.",
    img: "/nfs_hero_catering.svg",
  },
  {
    name: "NFS Clinical Nutrition Suite",
    tag: "Healthcare Diets",
    desc: "Specialized diabetic, renal, cardiac, and soft diets delivered in sterile thermal trays to patient bedsides.",
    img: "/nfs_hero_catering.svg",
  },
  {
    name: "NFS Campus Dining Plan",
    tag: "University Food Courts",
    desc: "Nutrient-dense, high-energy meal passes for up to 25,000 students daily across multiple campus dining halls.",
    img: "/nfs_hero_catering.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Dietary Scoping & Audit", desc: "Understanding client headcount, shift timings, dietitian guidelines, and on-site cafeteria infrastructure." },
  { num: "02", title: "Menu Engineering & Tasting", desc: "Formulating balanced multi-week rotating menus and hosting live tasting sessions with client committees." },
  { num: "03", title: "Direct Farm Procurement", desc: "Sourcing premium Halal meat, fresh produce, and export-grade grains through unbroken cold chain transport." },
  { num: "04", title: "Central Sterile Prep & Cooking", desc: "Preparing fresh meals in stainless steel commercial kitchens under continuous HACCP temperature logging." },
  { num: "05", title: "Thermal Dispatch & On-Site Serving", desc: "Delivering via insulated carriers and serving hot meals with courteous, uniform-clad culinary staff." },
  { num: "06", title: "Daily Sanitization & Quality Audits", desc: "Conducting ATP surface swab testing, waste segregation, and client satisfaction score reviews." },
];

const FAQS = [
  {
    q: "What food safety certifications does National Food Services (NFS) operate under?",
    a: "Our central kitchens and institutional dining operations are certified under HACCP, ISO 22000 (Food Safety Management Systems), Halal Certification, and strictly comply with Punjab Food Authority (PFA) and federal standards.",
  },
  {
    q: "Can NFS accommodate specialized clinical diets for hospital patients?",
    a: "Yes. We have dedicated clinical dietitians on staff who design individualized meal plans for diabetic, renal, cardiac, post-operative, and pediatric patients with sterile isolation kitchen preparation.",
  },
  {
    q: "How does NFS handle temperature control during food transportation?",
    a: "We operate a dedicated fleet of 48+ refrigerated trucks equipped with continuous GPS thermal sensors maintaining optimal chilling (+2°C to +4°C), and food-grade insulated cambro hot-carriers maintaining serving temperatures above 65°C.",
  },
  {
    q: "What is the daily meal capacity of National Food Services?",
    a: "NFS currently prepares and distributes over 1,000,000 meals daily across Pakistan, ranging from corporate headquarters with 200 staff to mega-university campuses and industrial textile plants with over 25,000 workers.",
  },
];

export default function NFSHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section with Institutional Culinary Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Premier Institutional Catering &amp; Food Supply Services</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
                National Food Services. <span style={{ color: theme.maroon }}>Culinary Mastery. Uncompromised Hygiene.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Delivering nutritious, high-quality, and hygienic food solutions for corporate, industrial, healthcare, educational, and government institutions. NFS combines culinary excellence, strict HACCP food safety standards, and efficient cold-chain supply chain management.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-food/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.maroon }}
                >
                  <span>Explore Catering Menus</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.maroonDark }}
                >
                  <span>Request Catering Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-rose-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/nfs_hero_catering.svg"
                  alt="National Food Services Institutional Culinary Kitchen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#8C1832]">
                        1,000,000+ Meals Daily
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.maroonDark }}>
                      HACCP · Corporate · Hospital · University Dining
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
                  className="nfs-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.maroon}10` }}>
                    <Icon size={22} style={{ color: theme.maroon }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.maroonDark }}>
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
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-rose-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/nfs_hero_catering.svg"
                  alt="Institutional Kitchen Operations and Nutrition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#DFC48B] mb-1">
                      Premier Institutional Food Network
                    </p>
                    <h4 className="text-base font-bold">25+ Years of Nourishing Leading Organizations</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About National Food Services</SectionLabel>
              <SectionHeading className="mb-6">Nourishing Pakistan&apos;s Workforce &amp; Students</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                National Food Services delivers nourishing, hygienic, and efficiently managed food programs for corporate campuses, hospitals, schools, and industrial sites. Our robust central kitchen operations, certified dietitians, and refrigerated cold-chain logistics ensure delicious and dependable meals 365 days a year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-rose-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#8C1832] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">HACCP &amp; ISO 22000 Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-rose-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#8C1832] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">1,000,000+ Daily Meals Served</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-food/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#6B0F24]"
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
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-food/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.maroonDark }}
            >
              <span>View All 6 Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="nfs-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.maroon}10` }}>
                        <Icon size={20} style={{ color: theme.maroon }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.maroonDark }}>
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-rose-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.maroonDark }}
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

      {/* Featured Catering Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Menus</SectionLabel>
              <SectionHeading>Featured Catering Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-food/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.maroon }}
            >
              <span>View All Menus</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="nfs-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#8C1832]/10 text-[#8C1832] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.maroonDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/national-food/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-rose-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.maroonDark }}
                  >
                    <span>Request Menu Details</span>
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
            <SectionHeading center className="mb-4">6-Stage Culinary &amp; Hygiene Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial nutritional audit and tasting sessions to cold-chain logistics, thermal bedside delivery, and daily ATP swab testing.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.maroon }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.maroonDark }}>
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
                  style={{ color: theme.maroonDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#8C1832]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A81E3D]">
                COMMENCE YOUR INSTITUTIONAL CATERING PROGRAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Schedule A Culinary Consultation &amp; Kitchen Audit
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified executive chefs and food safety directors to customize daily meal plans for your facility.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Catering Proposal</span>
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