"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  Briefcase,
  Key,
  Map,
  Hammer,
  PiggyBank,
  Users,
  FileText,
  ClipboardList,
  ChevronRight,
  ArrowRight,
  HeartHandshake,
  Laptop,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/services/realestate-1.jpg",
    alt: "Corporate Commercial Skyscrapers and Architectural Landmarks",
    tag: "Commercial & Corporate Real Estate",
    title: "Class-A Corporate Towers, Commercial Centers & Master-Planned Developments",
  },
  {
    src: "/services/realestate-2.jpg",
    alt: "Luxury Residential Towers and Mixed-Use Complexes",
    tag: "Residential & Mixed-Use Projects",
    title: "Sustainable Residential Communities, Urban Mixed-Use Developments & Asset Management",
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
  { icon: Home,          title: "Residential Development",     description: "Modern apartments, villas, and planned housing communities." },
  { icon: Briefcase,     title: "Commercial Development",      description: "State-of-the-art office spaces, retail hubs, and mixed-use complexes." },
  { icon: Laptop,        title: "Smart Housing",               description: "Tech-enabled, energy-efficient homes with integrated automation." },
  { icon: Key,           title: "Property Development",        description: "End-to-end development from land acquisition to final handover." },
  { icon: Map,           title: "Master Planning",             description: "Comprehensive urban design, zoning, and aesthetic integration." },
  { icon: Hammer,        title: "Infrastructure Development",  description: "Roads, utilities, and civic amenities to support new communities." },
  { icon: PiggyBank,     title: "Investment Opportunities",    description: "High-yield real estate portfolios and strategic joint ventures." },
  { icon: Users,         title: "Community Development",       description: "Creating vibrant neighborhoods with parks, schools, and healthcare." },
  { icon: FileText,      title: "Real Estate Consultancy",     description: "Market analysis, feasibility studies, and regulatory advisory." },
  { icon: ClipboardList, title: "Project Management",          description: "Strict quality control, timeline management, and budget tracking." },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function RealEstateDevelopmentPage() {
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
              <li className="text-neutral-950 font-bold">Real Estate &amp; Development</li>
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
                <Building2 size={15} className="text-teal-200" />
                <span>Sector 15 • Real Estate</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Real Estate &amp; Development
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-black text-teal-100 uppercase tracking-wide mb-4 drop-shadow-sm">
                Creating Modern Spaces for Living, Business &amp; Investment
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-teal-200 to-white mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-white/95 leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-xs">
                ROYSONS develops real estate opportunities focused on modern residential communities, commercial developments, smart housing, and sustainable urban environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0a7a8c] via-[#0d9488] to-[#10b981] hover:from-[#042E3A] hover:via-[#075d6d] hover:to-[#0a7a8c] border border-white/40 text-white font-bold px-7 py-3.5 text-xs sm:text-[13.5px] uppercase tracking-[0.16em] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[0_8px_25px_rgba(4,46,58,0.45)] hover:scale-105"
                >
                  <span className="text-white">Explore Properties</span>
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
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="REAL ESTATE & DEVELOPMENT" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="10+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="50+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Projects Completed</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="10,000+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Homes Delivered</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Philosophy Highlight */}
      <section className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10 rounded-[2px]">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-[2px] bg-neutral-950 flex items-center justify-center flex-shrink-0">
              <HeartHandshake size={28} className="text-[#0a7a8c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">OUR VISION</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Development Philosophy</h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-3xl">
                Our real estate approach combines thoughtful planning, modern infrastructure, sustainable development, and long-term investment value to create communities designed for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">REAL ESTATE EXPERTISE</span>
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
        subtitle="REAL ESTATE & DEVELOPMENT"
        title="Building Places. Creating Possibilities."
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
