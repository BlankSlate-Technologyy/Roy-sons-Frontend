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
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";

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
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6A15A] selection:text-white">
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
              <li className="text-neutral-950 font-bold">Electric Mobility</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-xs font-bold uppercase tracking-[0.2em] mb-5 self-start">
                <PlugZap size={15} className="text-[#C6A15A]" />
                <span>Sector 08 • Electric Mobility</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                Electric Mobility
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#C6A15A] uppercase tracking-wide mb-4">
                Driving the Transition Toward Smarter, Cleaner Transportation
              </p>
              <div className="h-[3px] w-16 bg-[#C6A15A] mb-5" />
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 max-w-2xl">
                ROYSONS supports the development of electric mobility infrastructure and transportation solutions designed for a more sustainable future.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-2.5 bg-[#C6A15A] hover:bg-white font-bold px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">Power Your Transition</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#solutions"
                  className="self-start inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#C6A15A] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-[2px]"
                >
                  Our Solutions
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-xl">
                <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card1.png"
                    alt="Electric Mobility Solutions by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md border border-[#C6A15A]/40 rounded-[2px]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C6A15A] mb-1">
                      EV · Chargers · Fleets · Smart Mobility
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug">
                      Next-Gen Transportation Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#C6A15A] pl-4 py-0.5">
              <AnimatedStatValue value="5+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years EV Experience</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-4 py-0.5">
              <AnimatedStatValue value="200+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Charging Stations</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-4 py-0.5">
              <AnimatedStatValue value="20+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Fleet Electrifications</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Scalable Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A15A] mb-2 block">CORE FOCUS</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Strategic Solutions</h2>
              <div className="h-[3px] w-14 bg-neutral-950 mb-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] hover:border-[#C6A15A] transition-colors">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-4">
                  <PlugZap size={20} className="text-[#C6A15A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2">EV Infrastructure</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Planning and deployment of charging networks for residential, commercial, industrial, and public environments.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 border border-neutral-200 rounded-[2px] hover:border-[#C6A15A] transition-colors">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-4">
                  <Bus size={20} className="text-[#C6A15A]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2">Fleet Electrification</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Helping organizations transition conventional vehicle fleets toward electric transportation efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A15A] mb-2 block">COMPREHENSIVE SUPPORT</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Capabilities</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#C6A15A] hover:bg-white transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border group-hover:border-[#C6A15A]/60 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} className="text-[#C6A15A]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">{cap.title}</h3>
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
