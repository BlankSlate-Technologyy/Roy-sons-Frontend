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
  ArrowRight,
  Building2,
  GraduationCap,
  Factory,
  Landmark,
  Truck,
  Sprout,
  ShoppingCart,
  HeartPulse,
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
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6A15A] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={12} /></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={12} /></li>
              <li className="text-neutral-950 font-black">Information Technology &amp; AI</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-[10.5px] font-black uppercase tracking-[0.22em] mb-5 self-start">
                <Cpu size={14} className="text-[#C6A15A]" />
                <span>Sector 05 • Technology &amp; AI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-4">
                Information Technology &amp; Artificial Intelligence
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[#C6A15A] uppercase tracking-wide mb-6">
                Transforming Businesses Through Digital Innovation
              </p>

              <div className="h-[3px] w-16 bg-[#C6A15A] mb-6" />

              <p className="text-[14px] sm:text-[15px] text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS provides enterprise technology and artificial intelligence solutions that help organizations modernize operations, automate processes, improve decision-making, and build scalable digital infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-3 bg-[#C6A15A] hover:bg-white font-black px-6 py-3 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">
                    Start Your Digital Journey
                  </span>
                  <ArrowRight size={13} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#C6A15A] text-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-all rounded-[2px]"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1.5 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-2xl">
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card2.png"
                    alt="Information Technology & AI Solutions by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-neutral-950/80 backdrop-blur-md border border-[#C6A15A]/40 rounded-[2px]">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C6A15A] mb-1">
                      AI · Cloud · Cybersecurity · Data
                    </p>
                    <p className="text-[13px] font-bold text-white leading-snug">
                      Enterprise-Grade Digital Transformation Solutions
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
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="10+" />
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-500 mt-1">Years in Technology</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="300+" />
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-500 mt-1">Digital Projects Delivered</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="8" />
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-500 mt-1">Industries Served</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="24/7" />
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-500 mt-1">IT Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              FULL-SPECTRUM IT EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-5" />
            <p className="text-[13.5px] text-neutral-600 leading-relaxed font-normal">
              From enterprise software and AI to cloud, cybersecurity, and data analytics — end-to-end technology solutions for modern organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 rounded-[2px] flex flex-col justify-between group hover:border-[#C6A15A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#C6A15A]/60 transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} className="text-[#C6A15A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-[14.5px] font-black uppercase tracking-[0.06em] text-neutral-950 mb-2.5 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-[12.5px] text-neutral-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                      Capability {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#C6A15A] transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="ai-solutions" className="py-20 bg-[#101518] text-white border-b border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              ARTIFICIAL INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.14em] text-white mb-4">
              AI Solutions
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-[#C6A15A] mb-5" />
            <p className="text-[13.5px] text-neutral-400 leading-relaxed font-normal">
              Purpose-built AI solutions that convert raw data into actionable intelligence, automating decisions and accelerating growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SOLUTIONS.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <div
                  key={index}
                  className="bg-[#161c20] border border-neutral-800 p-7 rounded-[2px] group hover:border-[#C6A15A] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-[2px] bg-white/5 border border-[#C6A15A]/30 flex items-center justify-center mb-5">
                    <Icon size={20} strokeWidth={1.5} className="text-[#C6A15A]" />
                  </div>
                  <h3 className="text-[15px] font-black uppercase tracking-[0.08em] text-white mb-2.5 group-hover:text-[#C6A15A] transition-colors duration-300">
                    {sol.title}
                  </h3>
                  <p className="text-[12.5px] text-neutral-400 leading-relaxed font-normal">
                    {sol.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10.5px] font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              CROSS-INDUSTRY REACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
              Industries We Serve
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-5" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-5 bg-white border border-neutral-200 rounded-[2px] group hover:border-[#C6A15A] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-[2px] bg-neutral-950 flex items-center justify-center group-hover:bg-[#101518] group-hover:border group-hover:border-[#C6A15A]/60 transition-all">
                    <Icon size={20} strokeWidth={1.5} className="text-[#C6A15A]" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-neutral-700 text-center group-hover:text-neutral-950 transition-colors">
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
