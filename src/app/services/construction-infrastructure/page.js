"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  Building2,
  Factory,
  Map,
  Droplets,
  Building,
  RefreshCcw,
  FileText,
  Layers,
  Settings,
  ClipboardList,
  Wrench,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
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
  { icon: Wrench,       title: "Civil Engineering",            description: "Structural engineering, earthworks, foundations, and site preparation." },
  { icon: Building2,    title: "Commercial Construction",      description: "High-rises, office complexes, retail centers, and hospitality venues." },
  { icon: Factory,      title: "Industrial Buildings",         description: "Warehouses, manufacturing plants, logistics hubs, and processing facilities." },
  { icon: Map,          title: "Roads & Highways",             description: "Road networks, bridges, interchanges, and transportation infrastructure." },
  { icon: Droplets,     title: "Water Infrastructure",         description: "Dams, canals, water treatment plants, and distribution networks." },
  { icon: Building,     title: "Urban Development",            description: "Master-planned communities, residential estates, and municipal works." },
  { icon: RefreshCcw,   title: "Infrastructure Rehabilitation",description: "Upgrades, restoration, and structural retrofitting of existing assets." },
  { icon: ClipboardList,title: "Project Management",           description: "End-to-end planning, scheduling, budgeting, and resource coordination." },
  { icon: Layers,       title: "EPC Projects",                 description: "Turnkey Engineering, Procurement, and Construction delivery methods." },
  { icon: FileText,     title: "Engineering Consultancy",      description: "Feasibility studies, technical design, and architectural advisory." },
  { icon: Settings,     title: "Construction Management",      description: "On-site supervision, quality control, HSE compliance, and execution." },
];

const LIFECYCLE_STEPS = [
  "Planning",
  "Design",
  "Procurement",
  "Construction",
  "Testing",
  "Commissioning",
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ConstructionInfrastructurePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0a7a8c] selection:text-white">
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
              <li className="text-neutral-950 font-bold">Construction &amp; Infrastructure</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a7a8c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/50 text-cyan-300 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 self-start shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <HardHat size={15} className="text-cyan-400" />
                <span>Sector 12 • Construction &amp; Infra</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                Construction &amp; Infrastructure
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Building Infrastructure That Supports Progress
              </p>
              <div className="h-[3px] w-16 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-5" />
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 max-w-2xl">
                ROYSONS delivers construction, engineering, infrastructure, and project management solutions for public and private sector developments. Our integrated approach allows clients to manage complex infrastructure projects through a single strategic partner.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-2.5 bg-[#0a7a8c] hover:bg-white font-bold px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#0a7a8c]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">Start Your Project</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#0a7a8c] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-[2px]"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1 bg-gradient-to-b from-[#0a7a8c]/40 via-neutral-800 to-[#0a7a8c]/20 shadow-xl">
                <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card1.png"
                    alt="Construction & Infrastructure by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md border border-[#0a7a8c]/40 rounded-[2px]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0a7a8c] mb-1">
                      Civil · Commercial · Industrial · EPC
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug">
                      End-to-End Project Delivery
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
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="20+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="500+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Projects Delivered</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Global Clients</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">On-Time Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">END-TO-END EXECUTION</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Project Lifecycle</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          
          <div className="relative mt-8 mb-2">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-200 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6 relative z-10">
              {LIFECYCLE_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center text-neutral-400 group-hover:border-[#0a7a8c] group-hover:text-[#0a7a8c] group-hover:shadow-md transition-all duration-300 mb-3">
                    <CheckCircle2 size={24} strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950 text-center">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">OUR EXPERTISE</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Capabilities</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#0a7a8c] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#0a7a8c]/60 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} className="text-[#0a7a8c] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">{cap.title}</h3>
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
        subtitle="CONSTRUCTION & INFRASTRUCTURE"
        title="Building the Infrastructure of Tomorrow"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
