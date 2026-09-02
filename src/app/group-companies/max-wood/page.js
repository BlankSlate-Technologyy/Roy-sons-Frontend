"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Hammer,
  Home,
  Layers,
  MapPin,
  Palette,
  Phone,
  Ruler,
  Search,
  Send,
  ShieldCheck,
  Sofa,
  Sparkles,
  Users2,
  Utensils,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxWoodShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Woodcraft\nExcellence" },
  { icon: Home, value: "1500+", label: "Interior Projects\nCompleted" },
  { icon: Sofa, value: "500+", label: "Signature Furniture\nDesigns" },
  { icon: Users2, value: "250+", label: "Master Craftsmen &\nDesigners" },
  { icon: Compass, value: "30+", label: "Cities Served\nNationwide" },
];

const SERVICES = [
  {
    icon: Sofa,
    title: "Custom Luxury Residential Furniture",
    desc: "Premium residential and commercial furniture handcrafted from kiln-dried solid American walnut, Burma teak, and indigenous Sheesham.",
    href: "/group-companies/max-wood/services#custom-furniture",
    img: "/maxwood_hero_craft.svg",
  },
  {
    icon: Briefcase,
    title: "Corporate Executive Office Fitouts",
    desc: "Commanding boardroom tables, ergonomic agile workstations, acoustic fabric panels, and CEO executive directorial suites.",
    href: "/group-companies/max-wood/services#office-furniture",
    img: "/maxwood_hero_craft.svg",
  },
  {
    icon: Palette,
    title: "Turnkey Interior Architecture",
    desc: "Photorealistic 3D spatial space planning, mood board curation, civil MEP coordination, and white-glove site delivery.",
    href: "/group-companies/max-wood/services#interior-design",
    img: "/maxwood_hero_craft.svg",
  },
  {
    icon: Home,
    title: "Hospitality & 5-Star Hotel Furniture",
    desc: "Complete guestroom packages, commercial restaurant dining booths, vanity millwork, and feature sculptural lobby installations.",
    href: "/group-companies/max-wood/services#hospitality-furniture",
    img: "/maxwood_hero_craft.svg",
  },
  {
    icon: Hammer,
    title: "Architectural Wood Paneling & Ceilings",
    desc: "Precision 5-axis CNC fluted acoustic wall cladding, floor-to-ceiling concealed pivot doors, and coffered wood ceiling designs.",
    href: "/group-companies/max-wood/services#architectural-woodwork",
    img: "/maxwood_hero_craft.svg",
  },
  {
    icon: Utensils,
    title: "Modular Kitchens & Smart Wardrobes",
    desc: "Modern modular kitchen cabinetry with German Blum motorized fittings, quartz breakfast islands, and smoked-glass walk-in closets.",
    href: "/group-companies/max-wood/services#modular-kitchens",
    img: "/maxwood_hero_craft.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "The Royal Heritage Dining Suite",
    tag: "Dining Suite",
    desc: "12-Seater solid American walnut master dining table with bookmatched grain and sculpted armchairs.",
    img: "/maxwood_hero_craft.svg",
  },
  {
    name: "The Executive Sovereign CEO Suite",
    tag: "Executive Office",
    desc: "24-Seater fluted boardroom table with wireless charging pads, CEO desk, and library credenza.",
    img: "/maxwood_hero_craft.svg",
  },
  {
    name: "AcoustiFlute Architectural Paneling",
    tag: "Acoustic Millwork",
    desc: "Precision CNC fluted acoustic wall paneling with sound-dampening felt backing and concealed doors.",
    img: "/maxwood_hero_craft.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Design Consultation & Spatial Survey", desc: "Understanding spatial layout, interior lifestyle, architectural drawings, and timber aesthetic preferences." },
  { num: "02", title: "3D Rendering & Shop Drawings", desc: "Developing photorealistic 3D visual concepts, joinery sectional details, and finish sample boards." },
  { num: "03", title: "Timber Kiln Drying & Seasoning", desc: "Computerized dehumidification kilns ensuring optimal 8% moisture content to prevent warping or cracking." },
  { num: "04", title: "5-Axis CNC Precision Fabrication", desc: "Algorithmic cutting, computerized joinery milling, and artisanal hand-carved detailing by master carpenters." },
  { num: "05", title: "Multi-Coat Italian Finishing", desc: "Applying multi-layer polyurethane (PU) lacquers, hand-rubbed organic oils, and scratch-resistant topcoats." },
  { num: "06", title: "White-Glove Delivery & Installation", desc: "Careful blanket-wrapped transport and precision on-site assembly with zero punch-list handover." },
];

const FAQS = [
  {
    q: "What types of wood does Max Wood Corporation specialize in?",
    a: "We specialize in premium kiln-dried solid hardwoods including American Black Walnut, Burma Teak, European White Oak, and seasoned indigenous Rosewood (Sheesham), along with natural architectural veneers and marine-grade plywood.",
  },
  {
    q: "Does Max Wood Corporation handle complete turnkey interior fitouts?",
    a: "Yes. We offer complete turnkey interior architecture from concept design and 3D photorealistic visualization to in-house factory furniture fabrication, civil MEP coordination, and final white-glove site installation.",
  },
  {
    q: "How does Max Wood Corporation ensure furniture durability and longevity?",
    a: "Every timber piece undergoes computerized kiln drying down to an optimal 8% moisture content to eliminate swelling or warping. We combine traditional mortise joinery with multi-coat Italian polyurethane finishes engineered for generations of use.",
  },
  {
    q: "Are Max Wood Corporation timber materials sustainably sourced?",
    a: "Yes. We adhere strictly to FSC (Forest Stewardship Council) chain-of-custody protocols and utilize low-VOC, zero-formaldehyde (E0) adhesives and water-borne non-toxic finishes.",
  },
];

export default function MaxWoodHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section with Master Woodcraft Studio Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Premium Furniture Manufacturing &amp; Interior Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
                Max Wood Corporation. <span style={{ color: theme.primary }}>Crafting Spaces of Distinction.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Crafting premium furniture and transforming modern spaces. Max Wood Corporation specializes in luxury residential furniture, commercial executive interiors, hospitality resort fitouts, custom woodwork, modular solutions, and architectural millwork engineered to perfection.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-wood/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Collections</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-wood/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkWood }}
                >
                  <span>Request a Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-amber-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxwood_hero_craft.svg"
                  alt="Max Wood 5-Axis CNC Precision Woodcraft Studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BA7A3E]">
                        1,500+ Projects Completed
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.darkWood }}>
                      Bespoke Hardwoods · CNC Joinery · Turnkey Fitouts
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
                  className="mw-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.darkWood }}>
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
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-amber-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxwood_hero_craft.svg"
                  alt="Architectural Woodworking Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#F4C28D] mb-1">
                      Master Woodcraft Atelier
                    </p>
                    <h4 className="text-base font-bold">25+ Years of Bespoke Joinery Excellence</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Max Wood Corporation</SectionLabel>
              <SectionHeading className="mb-6">Excellence in Furniture &amp; Interior Design</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Max Wood Corporation is committed to delivering world-class furniture and interior solutions for homes, offices, hotels, and commercial developments. Our experienced designers, architects, engineers, and craftsmen work together to create customized environments that reflect quality, innovation, and elegance across 30+ cities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-amber-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#D4A373] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">FSC Certified Legal Timber</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-amber-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#D4A373] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">1,500+ Completed Fitouts</span>
                </div>
              </div>

              <Link
                href="/group-companies/max-wood/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#5C3A21]"
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
              <SectionLabel>What We Craft</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-wood/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.darkWood }}
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
                  className="mw-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.darkWood }}>
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.darkWood }}
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

      {/* Featured Collections Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Signature Suites</SectionLabel>
              <SectionHeading>Featured Furniture Collections</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-wood/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((s) => (
              <div
                key={s.name}
                className="mw-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#D4A373]/15 text-[#BA7A3E] inline-block mb-3">
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.darkWood }}>
                      {s.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-wood/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-amber-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.darkWood }}
                  >
                    <span>Request Dimensions</span>
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
            <SectionHeading center className="mb-4">6-Stage Woodcrafting Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From spatial design consultation and kiln seasoning to 5-axis CNC machining, Italian polyurethane finishing, and white-glove installation.
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
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.darkWood }}>
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
                  style={{ color: theme.darkWood }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#D4A373]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                COMMENCE YOUR BESPOKE FURNITURE OR FITOUT PROJECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Schedule An Interior Woodcraft Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal interior architects and master wood joinery engineers to review veneer finishes, 3D floor plans, and custom furniture fabrication.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
