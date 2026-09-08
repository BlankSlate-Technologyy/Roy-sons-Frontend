"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Droplets,
  Settings,
  Warehouse,
  ClipboardCheck,
  Activity,
  Lightbulb,
  Leaf,
  Sun,
  Truck,
  ChevronRight,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/sector/agriculture-1.jpg",
    alt: "Commercial Automated Dairy Facility",
    tag: "Dairy & Livestock Infrastructure",
    title: "Automated Milking Systems, Climate-Controlled Sheds & Herd Management",
  },
  {
    src: "/sector/agriculture-2.jpg",
    alt: "Modern Precision Agriculture & Crop Harvesting",
    tag: "Precision Agriculture",
    title: "GPS-Guided Precision Harvesting, Pivot Irrigation & Crop Science",
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
  { icon: Leaf,        title: "Modern Farming Solutions",      description: "Advanced techniques for high-yield, sustainable crop production." },
  { icon: Warehouse,   title: "Dairy Farm Development",        description: "Turnkey infrastructure for commercial dairy operations and processing." },
  { icon: Activity,    title: "Livestock Management",          description: "Comprehensive health, housing, and breeding management systems." },
  { icon: Droplets,    title: "Irrigation Systems",            description: "Drip, sprinkler, and smart irrigation networks for optimized water use." },
  { icon: Truck,       title: "Agricultural Machinery",        description: "Procurement and implementation of modern mechanized farming equipment." },
  { icon: Warehouse,   title: "Farm Infrastructure",           description: "Greenhouses, silos, cold storage, and processing facilities." },
  { icon: Sun,         title: "Crop Management",               description: "Soil analysis, pest control, and seasonal crop rotation strategies." },
  { icon: Leaf,        title: "Animal Nutrition",              description: "Formulation and supply of balanced, high-quality livestock feed." },
  { icon: Lightbulb,   title: "Agricultural Consultancy",      description: "Expert advisory for farm economics, feasibility, and modernization." },
  { icon: MonitorSmartphone, title: "Smart Agriculture",       description: "IoT sensors and data-driven insights for precision farming." },
  { icon: Settings,    title: "Farm Automation",               description: "Automated feeding, milking, and environmental control systems." },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function AgricultureDairyPage() {
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
              <li className="text-neutral-950 font-bold">Agriculture &amp; Dairy Development</li>
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
                <Sprout size={15} className="text-cyan-400" />
                <span>Sector 10 • Agriculture &amp; Dairy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Agriculture &amp; Dairy Development
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Modernizing Agriculture Through Technology &amp; Sustainable Practices
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS supports agricultural development through modern farming technologies, livestock solutions, dairy infrastructure, irrigation, and agricultural consultancy.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="AGRICULTURE & DAIRY" />
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
              <AnimatedStatValue value="500+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Acres Developed</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="50+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Agri Projects</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Sustainable Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Agriculture Highlight */}
      <section className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10 rounded-[2px] group hover:border-[#009688] transition-all duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300">
              <MonitorSmartphone size={32} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">FUTURE OF FARMING</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3 group-hover:text-[#009688] transition-colors">Smart Agriculture</h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-2xl">
                Technology-enabled agriculture can help farmers improve productivity, resource utilization, monitoring, and operational efficiency. We integrate IoT, sensors, and data analytics to optimize yields and minimize waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">AGRI &amp; DAIRY SERVICES</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">Our Capabilities</h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#009688] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
        subtitle="AGRICULTURE & DAIRY"
        title="Growing a Smarter Agricultural Future"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
