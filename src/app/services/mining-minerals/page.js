"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gem,
  Map,
  Search,
  Hammer,
  Truck,
  Building2,
  Factory,
  ClipboardCheck,
  Activity,
  Leaf,
  Layers,
  Compass,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/services/mining-1.jpg",
    alt: "Modern Mineral Extraction and Heavy Haul Fleet",
    tag: "Extraction & Quarrying",
    title: "Terraced Open-Pit Mining, Heavy Earthmoving & Resource Extraction",
  },
  {
    src: "/services/mining-2.jpg",
    alt: "Automated Flotation & Mineral Refining Facility",
    tag: "Mineral Processing & Metallurgy",
    title: "High-Tech Flotation Cells, Beneficiation & Metallurgical Quality Testing",
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
  { icon: Search,      title: "Mineral Exploration",         description: "Target generation, drilling programs, and preliminary resource identification." },
  { icon: Map,         title: "Geological Surveys",          description: "Geophysical mapping, sampling, and advanced remote sensing technologies." },
  { icon: ClipboardCheck,title: "Resource Assessment",       description: "Feasibility studies, reserve estimation, and economic modeling." },
  { icon: Compass,     title: "Mining Planning",             description: "Mine design, optimization scheduling, and operational planning." },
  { icon: Hammer,      title: "Extraction Operations",       description: "Surface and underground mining methodologies and execution support." },
  { icon: Factory,     title: "Mineral Processing",          description: "Crushing, grinding, beneficiation, and metallurgical plant design." },
  { icon: Truck,       title: "Mining Equipment",            description: "Procurement, deployment, and maintenance of heavy mining machinery." },
  { icon: Building2,   title: "Infrastructure Development",  description: "Access roads, power supply, water management, and camp facilities." },
  { icon: Layers,      title: "Project Consultancy",         description: "Regulatory compliance, risk management, and strategic advisory." },
  { icon: Activity,    title: "Resource Management",         description: "Sustainable extraction practices and long-term asset optimization." },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function MiningMineralsPage() {
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
              <li className="text-neutral-950 font-bold">Mining &amp; Minerals</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section 
        data-dark-section="true"
        className="roysons-preserve-dark relative py-16 sm:py-20 lg:py-24 text-white border-b border-[#0a7a8c]/25 overflow-hidden shadow-sm"
        style={{
          background: "linear-gradient(90deg, #005f77 0%, #088192 50%, #009e75 100%)",
          backgroundColor: "#088192",
        }}
      >
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 self-start shadow-xs backdrop-blur-xs">
                <Gem size={15} className="text-teal-200" />
                <span>Sector 11 • Mining &amp; Minerals</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Mining &amp; Mineral Exploration
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-black text-teal-100 uppercase tracking-wide mb-4 drop-shadow-sm">
                Unlocking Natural Resources Through Responsible Development
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-teal-200 to-white mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-white/95 leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-xs">
                ROYSONS supports mineral exploration, resource development, extraction, processing, and related infrastructure through technical expertise and strategic partnerships.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0a7a8c] via-[#0d9488] to-[#10b981] hover:from-[#042E3A] hover:via-[#075d6d] hover:to-[#0a7a8c] border border-white/40 text-white font-bold px-7 py-3.5 text-xs sm:text-[13.5px] uppercase tracking-[0.16em] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[0_8px_25px_rgba(4,46,58,0.45)] hover:scale-105"
                >
                  <span className="text-white">Discover Opportunities</span>
                  <ArrowRight size={15} strokeWidth={2.5} className="text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white px-6 py-3.5 text-xs sm:text-[13.5px] font-bold uppercase tracking-[0.16em] transition-all rounded-lg backdrop-blur-xs hover:scale-105"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="MINING & MINERALS" />
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
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="50+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Mining Projects</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="10+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Active Sites</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10 rounded-[2px]">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-[2px] bg-neutral-950 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={28} className="text-[#0a7a8c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">RESPONSIBLE DEVELOPMENT</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Approach</h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-3xl">
                We promote responsible resource development while focusing on operational efficiency, environmental responsibility, safety, and long-term economic value. From exploration to reclamation, we ensure sustainable operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">MINING EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Capabilities</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col group hover:border-[#0a7a8c] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border group-hover:border-[#0a7a8c]/60 transition-all duration-300">
                    <Icon size={22} strokeWidth={1.5} className="text-[#0a7a8c]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">{cap.title}</h3>
                  <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal flex-grow">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="MINING & MINERALS"
        title="Transforming Natural Resources Into Sustainable Value"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
