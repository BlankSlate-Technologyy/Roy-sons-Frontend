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
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/services/electrical-1.jpg",
    alt: "High-Voltage Power Transmission Substation",
    tag: "Grid & Transmission",
    title: "High-Voltage Substations & Smart Grid Distribution Engineering",
  },
  {
    src: "/services/electrical-2.jpg",
    alt: "Industrial SCADA & Power Control Facility",
    tag: "SCADA & Industrial Power",
    title: "Real-Time Switchgear Monitoring, Automation & Protection Systems",
  },
];

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    let frameId;
    let observer;

    const animate = () => {
      const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) {
        setDisplayValue(value);
        return;
      }

      const target = parseFloat(match[1]);
      const suffix = match[2] || "";
      const isDecimal = match[1].includes(".");
      const duration = 1500;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = target * easeOut;

        if (isDecimal) {
          setDisplayValue(`${current.toFixed(1)}${suffix}`);
        } else {
          setDisplayValue(`${Math.floor(current)}${suffix}`);
        }

        if (progress < 1) {
          frameId = window.requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(value);
        }
      };

      frameId = window.requestAnimationFrame(updateCounter);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return (
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
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
    <main className="min-h-screen bg-white font-['Times_New_Roman',_Times,_serif] selection:bg-[#0a7a8c] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="flex items-center gap-1 text-neutral-300"><ChevronRight size={14} /></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li className="flex items-center gap-1 text-neutral-300"><ChevronRight size={14} /></li>
              <li className="text-neutral-950 font-bold">Electrical &amp; Power Systems</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section 
        data-dark-section="true"
        className="roysons-preserve-dark relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a7a8c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/80 text-cyan-300 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 self-start shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                <Zap size={15} className="text-cyan-400" />
                <span>Sector 06 • Electrical &amp; Power Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Electrical &amp; Power Systems
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Powering Critical Infrastructure With Reliable Engineering
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed font-normal max-w-2xl">
                ROYSONS provides electrical engineering and power infrastructure solutions for industrial, commercial, institutional, and public sector projects. Our engineering teams support projects from feasibility and design through procurement, installation, testing, and commissioning.
              </p>
            </div>

            {/* Right Image Card */}
            <div className="lg:col-span-5">
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="ELECTRICAL & POWER" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="15+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years of Expertise</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="250+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Power Projects</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="6" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Sectors Served</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Safety Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              FULL-SPECTRUM ELECTRICAL ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              From transmission and substations to industrial automation and maintenance — comprehensive electrical solutions across every voltage level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#009688] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                      <Icon size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#009688] transition-colors duration-300">
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
      <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Project Solutions */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
                Project Solutions
              </h2>
              <div className="h-[3px] w-14 bg-neutral-950 mb-4" />
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
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
                    <span className="w-2 h-2 rounded-full bg-[#0a7a8c] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                SECTORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
                Who We Serve
              </h2>
              <div className="h-[3px] w-14 bg-neutral-950 mb-4" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {SECTORS.map((sector, i) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2.5 p-3.5 sm:p-4 bg-white border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                        <Icon size={34} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 text-center group-hover:text-[#009688] transition-colors">
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
