"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  PlugZap,
  BatteryCharging,
  Zap,
  Network,
  BarChart2,
  Lightbulb,
  Bus,
  MapPin,
  Building2,
  ChevronRight,
  ArrowRight,
  Settings,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/services/ev-1.jpg",
    alt: "Commercial EV Charging Hub and Fleet Systems",
    tag: "EV Charging Infrastructure",
    title: "High-Power DC Charging Hubs, Fleet Electrification & Microgrid Integration",
  },
  {
    src: "/services/ev-2.jpg",
    alt: "Electric Vehicle Battery Production & Assembly Line",
    tag: "Battery Technology & Assembly",
    title: "Advanced Battery Pack Engineering, Testing & Clean Mobility Solutions",
  },
];

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
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
        const elapsed = Math.max(0, currentTime - startTime);
        const progress = Math.min(Math.max(elapsed / duration, 0), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.max(0, target * easeOut);

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
    <span
      ref={elementRef}
      dir="ltr"
      suppressHydrationWarning
      className="block text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight tabular-nums"
    >
      {String(displayValue).replace(/^-/, "")}
    </span>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */
const CAPABILITIES = [
  { icon: BatteryCharging, title: "EV Charging Stations",       description: "End-to-end design and deployment of robust EV charging hubs." },
  { icon: Zap,             title: "AC & DC Charging",           description: "Fast and ultra-fast DC chargers alongside reliable AC destination charging." },
  { icon: Building2,       title: "Commercial EV Infrastructure",description: "Charging solutions for office buildings, retail centers, and public parking." },
  { icon: Bus,             title: "Fleet Electrification",      description: "Comprehensive transition strategies and depot charging for corporate fleets." },
  { icon: Car,             title: "Electric Transportation",    description: "Support for multi-modal electric transit and urban mobility networks." },
  { icon: Network,         title: "Charging Network Solutions", description: "Scalable backend management and payment gateway integration for chargers." },
  { icon: BarChart2,       title: "Energy Management",          description: "Smart load balancing and grid-friendly charging to optimize power usage." },
  { icon: Lightbulb,       title: "EV Consultancy",             description: "Site feasibility, technology selection, and EV strategy advisory." },
  { icon: Settings,        title: "Smart Mobility Systems",     description: "IoT integration, real-time monitoring, and connected vehicle solutions." },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ElectricMobilityPage() {
  return (
    <main className="min-h-screen bg-white font-['Times_New_Roman',_Times,_serif] selection:bg-[#0a7a8c] selection:text-white">
      <HeaderNavbar activeRoute="/sector" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="flex items-center gap-1 text-neutral-300"><ChevronRight size={14} /></li>
              <li><Link href="/sector" className="hover:text-black transition-colors">Services</Link></li>
              <li className="flex items-center gap-1 text-neutral-300"><ChevronRight size={14} /></li>
              <li className="text-neutral-950 font-bold">Electric Mobility</li>
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
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/80 text-cyan-300 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 self-start shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                <PlugZap size={15} className="text-cyan-400" />
                <span>Sector 08 • Electric Mobility</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Electric Mobility &amp; EV Solutions
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Driving the Transition Toward Smarter, Cleaner Transportation
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS supports the development of electric mobility infrastructure and transportation solutions designed for a more sustainable future.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="ELECTRIC MOBILITY" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="5+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years EV Experience</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="200+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Charging Stations</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="20+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Fleet Electrifications</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Scalable Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                CORE FOCUS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 mb-3">
                Strategic Solutions
              </h2>
              <div className="h-[3px] w-16 bg-[#0a7a8c] mb-5" />

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                ROYSONS delivers comprehensive electric mobility ecosystems tailored for enterprise, municipal, and commercial scale. By combining high-power charging corridors, turnkey civil engineering, and intelligent energy management, we enable a seamless and cost-effective transition towards sustainable transit.
              </p>

              {/* Strategic Pillars List */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0a7a8c]/10 flex items-center justify-center text-[#0a7a8c] mt-0.5 flex-shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
                    <strong className="text-neutral-950 font-bold">Turnkey Hub Deployment:</strong> Site feasibility, civil engineering, high-voltage interconnects, and commissioning.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0a7a8c]/10 flex items-center justify-center text-[#0a7a8c] mt-0.5 flex-shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
                    <strong className="text-neutral-950 font-bold">Fleet Transition Advisory:</strong> Duty-cycle telemetry modeling, total cost of ownership (TCO), and depot setups.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0a7a8c]/10 flex items-center justify-center text-[#0a7a8c] mt-0.5 flex-shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
                    <strong className="text-neutral-950 font-bold">BESS &amp; Renewable Pairing:</strong> Solar PV and battery storage integration to eliminate peak-tariff demand charges.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] bg-[#0a7a8c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#075e6c] transition-all duration-300 shadow-sm"
                >
                  <span>Consult EV Specialists</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[2px] border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 hover:border-neutral-400 transition-all duration-300"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            {/* Right Column Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                  <PlugZap size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2 group-hover:text-[#009688] transition-colors duration-300">EV Infrastructure</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Planning, engineering, and turnkey installation of AC destination and ultra-fast DC charging networks for commercial hubs, highway corridors, and residential districts.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                  <Bus size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2 group-hover:text-[#009688] transition-colors duration-300">Fleet Electrification</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Structured conversion roadmaps, route telemetry analysis, and dedicated depot charging solutions for logistics, corporate, and municipal transit fleets.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                  <BatteryCharging size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2 group-hover:text-[#009688] transition-colors duration-300">Smart Grid &amp; Storage</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Integration of Battery Energy Storage Systems (BESS) and on-site solar to shave peak electrical loads, optimize utility tariffs, and ensure uninterrupted charging.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                  <Network size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2 group-hover:text-[#009688] transition-colors duration-300">Charging Networks</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  OCPP 2.0.1 compliant cloud management platforms featuring automated billing, real-time charger diagnostics, mobile apps, and dynamic load balancing.
                </p>
              </div>
            </div>
          </div>

          {/* Key Value Indicators Strip */}
          <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[3px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} className="text-[#0a7a8c]" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-neutral-950">Turnkey Execution</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">End-to-end engineering from site feasibility and civil works to high-voltage commissioning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[3px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center flex-shrink-0">
                <Zap size={20} className="text-[#0a7a8c]" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-neutral-950">High-Power Charging</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">Scalable DC fast-charging up to 360kW with smart dynamic power sharing across dispensers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[3px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} className="text-[#0a7a8c]" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-neutral-950">Compliance &amp; Safety</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">Built to international IEC, SAE, and ISO safety standards ensuring high reliability and uptime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">COMPREHENSIVE SUPPORT</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Capabilities</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#009688] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                      <Icon size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#009688] transition-colors duration-300">{cap.title}</h3>
                    <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="ELECTRIC MOBILITY"
        title="Accelerate the Future of Mobility"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
