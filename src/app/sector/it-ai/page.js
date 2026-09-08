"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Brain,
  Cpu,
  Database,
  Users,
  Cloud,
  Shield,
  BarChart2,
  Network,
  Zap,
  Globe,
  Smartphone,
  Settings,
  BotMessageSquare,
  Eye,
  LineChart,
  ScanSearch,
  Layers,
  ChevronRight,
  HeartPulse,
  Landmark,
  GraduationCap,
  Factory,
  Truck,
  Sprout,
  ShoppingCart,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

const HERO_SLIDES = [
  {
    src: "/sector/it-ai-1.jpg",
    alt: "AI & Neural Processing Data Center",
    tag: "AI & Deep Learning",
    title: "Autonomous Decision Support & Enterprise Machine Intelligence",
  },
  {
    src: "/sector/it-ai-2.jpg",
    alt: "Cybersecurity & Cloud Operations Center",
    tag: "Cloud & Cybersecurity",
    title: "Mission-Critical SOC Operations & Hybrid Cloud Architecture",
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
  { icon: Code2,         title: "Enterprise Software Development", description: "Custom-built enterprise platforms, SaaS products, microservices architectures, and API-first systems." },
  { icon: Brain,         title: "AI Solutions",                    description: "Applied artificial intelligence solutions integrating NLP, computer vision, and generative AI into business workflows." },
  { icon: Cpu,           title: "Machine Learning",                description: "Supervised, unsupervised, and reinforcement learning models for predictive analytics and intelligent automation." },
  { icon: Layers,        title: "ERP & Business Systems",          description: "ERP implementation, configuration, and customization for finance, inventory, HR, procurement, and supply chain." },
  { icon: Users,         title: "CRM Solutions",                   description: "Customer relationship management platforms with sales automation, lead nurturing, and omni-channel support." },
  { icon: Cloud,         title: "Cloud Computing",                 description: "Cloud migration, hybrid cloud architecture, DevOps pipelines, and managed cloud infrastructure on AWS, Azure, and GCP." },
  { icon: Shield,        title: "Cybersecurity",                   description: "Security assessments, penetration testing, SOC services, endpoint protection, and compliance frameworks." },
  { icon: BarChart2,     title: "Data Analytics",                  description: "Business intelligence dashboards, data warehousing, ETL pipelines, and advanced analytics platforms." },
  { icon: Network,       title: "Network Infrastructure",          description: "Enterprise networking, SD-WAN, structured cabling, firewall configuration, and NOC/helpdesk services." },
  { icon: Zap,           title: "Digital Transformation",          description: "Strategy-led digital transformation roadmaps, change management, and legacy system modernization." },
  { icon: Settings,      title: "Automation",                      description: "Robotic Process Automation (RPA), intelligent document processing, and workflow automation solutions." },
  { icon: Smartphone,    title: "Web & Mobile Applications",       description: "Responsive web apps, iOS & Android native and cross-platform mobile applications with robust APIs." },
  { icon: Globe,         title: "IT Consultancy",                  description: "Technology assessments, IT strategy roadmaps, architecture reviews, and CTO-as-a-service advisory." },
];

const AI_SOLUTIONS = [
  { icon: BotMessageSquare, title: "Intelligent Automation",    description: "AI-driven bots and agents that automate complex business workflows, reducing manual effort and operational costs." },
  { icon: LineChart,         title: "Predictive Analytics",     description: "Forecast outcomes, identify trends, and support data-driven decision-making using machine learning models." },
  { icon: Brain,             title: "AI Assistants",            description: "Conversational AI chatbots and virtual assistants trained on organizational knowledge for customer and employee support." },
  { icon: Eye,               title: "Computer Vision",          description: "Image and video analysis for quality control, surveillance, document digitization, and medical imaging support." },
  { icon: Database,          title: "Business Intelligence",    description: "Unified BI platforms connecting real-time data sources with interactive dashboards and automated reporting." },
  { icon: ScanSearch,        title: "Smart Decision Support",   description: "AI recommendation engines and decision-support tools providing actionable insights across departments." },
];

const INDUSTRIES = [
  { icon: HeartPulse,   label: "Healthcare" },
  { icon: Landmark,     label: "Government" },
  { icon: GraduationCap, label: "Education" },
  { icon: Factory,      label: "Manufacturing" },
  { icon: BarChart2,    label: "Finance" },
  { icon: Truck,        label: "Logistics" },
  { icon: Sprout,       label: "Agriculture" },
  { icon: ShoppingCart, label: "Retail" },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function ITAIServicePage() {
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
              <li className="text-neutral-950 font-bold">Information Technology &amp; AI</li>
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
                <Cpu size={15} className="text-cyan-400" />
                <span>Sector 05 • Technology &amp; AI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-sm">
                Information Technology &amp; Artificial Intelligence
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Transforming Businesses Through Digital Innovation
              </p>

              <div className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-6" />

              <p className="text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed font-normal max-w-2xl">
                ROYSONS provides enterprise technology and artificial intelligence solutions that help organizations modernize operations, automate processes, improve decision-making, and build scalable digital infrastructure.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ServiceHeroSlider slides={HERO_SLIDES} defaultTag="TECHNOLOGY & AI" />
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
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Years in Technology</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="300+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Digital Projects Delivered</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="8" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">Industries Served</p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="24/7" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">IT Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              FULL-SPECTRUM IT EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              From enterprise software and AI to cloud, cybersecurity, and data analytics — end-to-end technology solutions for modern organizations.
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

      {/* AI Solutions */}
      <section 
        id="ai-solutions" 
        className="py-14 sm:py-18 bg-white border-b border-neutral-200"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              ARTIFICIAL INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              AI Solutions
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Purpose-built AI solutions that convert raw data into actionable intelligence, automating decisions and accelerating growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_SOLUTIONS.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 p-5 sm:p-6 rounded-[2px] group hover:border-[#009688] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                      <Icon size={30} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-neutral-950 mb-2 group-hover:text-[#009688] transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {sol.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              CROSS-INDUSTRY REACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Industries We Serve
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-4 sm:p-5 bg-white border border-neutral-200 rounded-[2px] group hover:border-[#009688] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                    <Icon size={34} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 text-center group-hover:text-[#009688] transition-colors">
                    {ind.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="INFORMATION TECHNOLOGY & AI"
        title="Transform Your Business With Intelligent Technology"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
