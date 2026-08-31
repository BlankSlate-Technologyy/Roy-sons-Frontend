"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Cable,
  Building2,
  Grid,
  Shield,
  Settings,
  Activity,
  Wrench,
  ClipboardCheck,
  PenTool,
  TestTube,
  LifeBuoy,
  ChevronRight,
  ArrowRight,
  Factory,
  Hospital,
  Landmark,
  GraduationCap,
  Truck,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    const rawValue = String(value);
    const match = rawValue.match(/(\d+(?:\.\d+)?)/);
    if (!match) { setDisplayValue(rawValue); return undefined; }

    const numericTarget = parseFloat(match[1].replace(/,/g, ""));
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[1].length);
    const hasDecimal = rawValue.includes(".");
    let frameId, startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericTarget * eased;
      const formatted = hasDecimal
        ? current.toFixed(1).replace(/\.0$/, "")
        : Math.round(current).toLocaleString("en-US");
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          frameId = window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => { observer.disconnect(); if (frameId) window.cancelAnimationFrame(frameId); };
  }, [value]);

  return (
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950">
      {displayValue}
    </span>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Zap,
    title: "Power Distribution",
    description: "MV/LV distribution network design, cable sizing, load flow analysis, and switchboard engineering.",
  },
  {
    icon: Cable,
    title: "Transmission Systems",
    description: "High-voltage transmission line design, corridor planning, tower engineering, and SCADA integration.",
  },
  {
    icon: Building2,
    title: "Electrical Substations",
    description: "Turnkey substation design, equipment specification, protection & control, and civil coordination.",
  },
  {
    icon: Grid,
    title: "Grid Infrastructure",
    description: "Grid interconnection studies, reliability analysis, smart grid integration, and network optimization.",
  },
  {
    icon: Settings,
    title: "Switchgear",
    description: "MV and LV switchgear selection, panel design, arc flash analysis, and type testing coordination.",
  },
  {
    icon: Activity,
    title: "Transformers",
    description: "Power transformer specification, installation supervision, testing, and condition monitoring programs.",
  },
  {
    icon: Shield,
    title: "Power Protection Systems",
    description: "Relay coordination, differential and distance protection, earth fault detection, and backup systems.",
  },
  {
    icon: Factory,
    title: "Industrial Electrical Systems",
    description: "Motor control centres, VFDs, PLC panels, hazardous area classification, and Ex-rated equipment.",
  },
  {
    icon: Settings,
    title: "Control & Automation",
    description: "SCADA/DCS design, PLC programming, HMI development, and industrial network architecture.",
  },
  {
    icon: PenTool,
    title: "Electrical Design",
    description: "Single-line diagrams, cable schedules, earthing design, lighting layouts, and as-built documentation.",
  },
  {
    icon: TestTube,
    title: "Testing & Commissioning",
    description: "FAT/SAT, pre-commissioning checks, protection relay testing, and energisation supervision.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance Services",
    description: "Planned preventive maintenance, condition-based monitoring, thermographic surveys, and emergency support.",
  },
];

const SECTORS = [
  { icon: Factory,      label: "Industrial" },
  { icon: Building2,    label: "Commercial" },
  { icon: Hospital,     label: "Healthcare" },
  { icon: Landmark,     label: "Government" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck,        label: "Logistics" },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ElectricalPowerSystemsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6A15A] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-4 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={14} /></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={14} /></li>
              <li className="text-neutral-950 font-black">Electrical &amp; Power Systems</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-24 lg:py-28 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-6 self-start">
                <Zap size={16} className="text-[#C6A15A]" />
                <span>Sector 06 • Electrical &amp; Power Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
                Electrical &amp; Power Systems
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#C6A15A] uppercase tracking-wide mb-6">
                Powering Critical Infrastructure With Reliable Engineering
              </p>

              <div className="h-[3.5px] w-20 bg-[#C6A15A] mb-6" />

              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS provides electrical engineering and power infrastructure solutions for industrial, commercial, institutional, and public sector projects. Our engineering teams support projects from feasibility and design through procurement, installation, testing, and commissioning.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-3 bg-[#C6A15A] hover:bg-white font-black px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">
                    Start Your Project
                  </span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#C6A15A] text-white px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all rounded-[2px]"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1.5 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-2xl">
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card3.png"
                    alt="Electrical & Power Systems by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-neutral-950/80 backdrop-blur-md border border-[#C6A15A]/40 rounded-[2px]">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#C6A15A] mb-1.5">
                      MV · LV · HV · SCADA · Protection
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white leading-snug">
                      End-to-End Power Infrastructure Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="15+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Years of Expertise</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="250+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Power Projects</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="6" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Sectors Served</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="100%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Safety Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 sm:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              FULL-SPECTRUM ELECTRICAL ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3.5px] w-16 bg-neutral-950 mb-5" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              From transmission and substations to industrial automation and maintenance — comprehensive electrical solutions across every voltage level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#C6A15A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#C6A15A]/60 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} className="text-[#C6A15A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Solutions + Sectors */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Project Solutions */}
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
                Project Solutions
              </h2>
              <div className="h-[3.5px] w-16 bg-neutral-950 mb-6" />
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 font-normal">
                Our engineering teams support projects from feasibility and design through procurement, installation, testing, and commissioning — delivering complete power solutions under a single point of accountability.
              </p>
              <div className="space-y-3">
                {[
                  "Feasibility Studies & Concept Design",
                  "Detailed Engineering & Documentation",
                  "Procurement & Equipment Specification",
                  "Installation Supervision & Quality Control",
                  "Testing, Commissioning & Energisation",
                  "Operations & Maintenance Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C6A15A] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
                SECTORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
                Who We Serve
              </h2>
              <div className="h-[3.5px] w-16 bg-neutral-950 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                {SECTORS.map((sector, i) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3.5 p-4 sm:p-5 bg-neutral-50 border border-neutral-200 rounded-[2px] group hover:border-[#C6A15A] hover:bg-white transition-all duration-300"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[2px] bg-neutral-950 flex items-center justify-center flex-shrink-0 group-hover:border group-hover:border-[#C6A15A]/60 transition-all">
                        <Icon size={18} strokeWidth={1.5} className="text-[#C6A15A]" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-neutral-800 uppercase tracking-wide group-hover:text-neutral-950 transition-colors">
                        {sector.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="ELECTRICAL & POWER SYSTEMS"
        title="Powering Infrastructure. Enabling Growth."
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
