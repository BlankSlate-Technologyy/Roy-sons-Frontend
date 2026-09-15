"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Brain,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  Search,
  Send,
  Sparkles,
  Users2,
  ArrowRight,
  Server,
  Lock,
  Cpu,
  BarChart3,
  Globe2,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/DigitalZoneShared";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/digitalzone/hero_ai_tech.jpg",
    tag: "AI & Enterprise Technology",
    title: "BUILDING THE INTELLIGENT ENTERPRISE",
    desc: "AI, enterprise software, cloud infrastructure and cybersecurity engineered to transform complex business operations into intelligent digital ecosystems.",
    href: "/group-companies/digitalzone/solutions",
    cta: "Explore Solutions",
  },
  {
    id: 2,
    image: "/images/digitalzone/hero_enterprise_software.jpg",
    tag: "Custom Enterprise Software",
    title: "Engineered For Uncompromising Scale & Performance",
    desc: "Architecting high-concurrency microservices, distributed cloud backends, and multi-tenant SaaS platforms that accelerate corporate velocity.",
    href: "/group-companies/digitalzone/services#custom-software",
    cta: "View Software Engineering",
  },
  {
    id: 3,
    image: "/images/digitalzone/hero_cloud_infra.jpg",
    tag: "Cloud & High-Availability Infrastructure",
    title: "Mission-Critical Multi-Cloud & DevOps Architecture",
    desc: "Deploying resilient Kubernetes clusters, automated CI/CD pipelines, and hybrid cloud infrastructure engineered for 99.99% uptime and zero-downtime releases.",
    href: "/group-companies/digitalzone/services#cloud-computing",
    cta: "Explore Cloud DevOps",
  },
  {
    id: 4,
    image: "/images/digitalzone/hero_ai_transformation.jpg",
    tag: "AI Strategy & Business Transformation",
    title: "Translating Advanced AI Into Measurable Enterprise ROI",
    desc: "Partnering with executive boards and technology leaders to integrate intelligent document workflows, autonomous AI agents, and real-time operational telemetry.",
    href: "/group-companies/digitalzone/contact",
    cta: "Talk to an Architect",
  },
];

const STATS = [
  { icon: Award, value: "15+", label: "Years of Enterprise\nSoftware Excellence" },
  { icon: Code2, value: "500+", label: "Delivered Software &\nAI Deployments" },
  { icon: Users2, value: "200+", label: "Corporate & Sovereign\nClients" },
  { icon: Brain, value: "150+", label: "Senior Software &\nAI Engineers" },
  { icon: ShieldCheck, value: "99%", label: "Uptime SLA &\nSOC-2 Compliance" },
];

const SERVICES = [
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    tag: "Machine Learning",
    desc: "Custom LLMs, RAG semantic search, computer vision models, and predictive analytics that automate complex operational workflows.",
    href: "/group-companies/digitalzone/services#artificial-intelligence",
    img: "/images/digitalzone/service_ai_ml.jpg",
  },
  {
    icon: Code2,
    title: "Custom Enterprise Software",
    tag: "Software Engineering",
    desc: "Scalable microservices, distributed SaaS platforms, high-concurrency database backends, and responsive Next.js enterprise web applications.",
    href: "/group-companies/digitalzone/services#custom-software",
    img: "/images/digitalzone/service_custom_software.jpg",
  },
  {
    icon: Layers,
    title: "Enterprise ERP Systems",
    tag: "ERP Solutions",
    desc: "Unified ERP platforms covering financial general ledgers, multi-warehouse inventory, automated procurement, HRMS, and manufacturing BOM.",
    href: "/group-companies/digitalzone/services#erp-solutions",
    img: "/images/digitalzone/service_erp.jpg",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps",
    tag: "Cloud & DevOps",
    desc: "Auto-scaling Kubernetes infrastructure across AWS, Azure, and GCP with automated CI/CD pipelines, GitOps, and 24/7 telemetry monitoring.",
    href: "/group-companies/digitalzone/services#cloud-computing",
    img: "/images/digitalzone/service_cloud_devops.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Cybersecurity",
    tag: "Cyber Defense",
    desc: "SOC-2 Type II and ISO 27001 certified security architecture, penetration testing (VAPT), 24/7 SIEM monitoring, and mutual TLS API security.",
    href: "/group-companies/digitalzone/services#cybersecurity",
    img: "/images/digitalzone/service_cybersecurity.jpg",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    tag: "Mobile Apps",
    desc: "Native iOS Swift, Android Kotlin, and high-performance React Native / Flutter apps with offline-first synchronization and enterprise security.",
    href: "/group-companies/digitalzone/services#mobile-apps",
    img: "/images/digitalzone/service_mobile_apps.jpg",
  },
];

const PLATFORMS_PREVIEW = [
  {
    name: "DigitalZone CoreERP Platform",
    tag: "Enterprise ERP Suite",
    desc: "Centralized general ledger, automated multi-warehouse barcoded inventory, HRMS payroll, procurement workflows, and manufacturing BOM.",
    img: "/images/digitalzone/solution_core_erp.jpg",
    specs: ["General Ledger & Accounting", "Inventory & Warehouse Telemetry", "Supply Chain & Manufacturing BOM"],
  },
  {
    name: "DigitalZone CortexAI Engine",
    tag: "Enterprise AI Engine",
    desc: "Fine-tuned LLM document extraction, automated customer support agents, predictive telemetry, and private on-premises inference pipelines.",
    img: "/images/digitalzone/solution_cortex_ai.jpg",
    specs: ["Private On-Premises LLM Inference", "RAG Document Knowledge Graph", "Automated Cognitive Agent Workflows"],
  },
  {
    name: "DigitalZone ZeroTrust CyberShield",
    tag: "Zero-Trust Cyber Defense",
    desc: "Real-time SIEM event correlation, mutual TLS API security gateway, biometric IAM authorization, and automated incident containment.",
    img: "/images/digitalzone/solution_zero_trust.jpg",
    specs: ["24/7 Real-Time SIEM Correlation", "Mutual TLS & Micro-Segmentation", "SOC-2 Type II & ISO 27001 Alignment"],
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Technical Discovery & Scope", desc: "Analyzing user workflows, business objectives, existing database schemas, and architectural scale mandates." },
  { num: "02", title: "Cloud Architecture & UI/UX", desc: "Designing microservices diagrams, database schemas, interactive high-fidelity prototypes, and API contracts." },
  { num: "03", title: "Agile Sprint Development", desc: "Executing 2-week agile sprint iterations with peer code reviews, continuous automated unit testing, and Git branching." },
  { num: "04", title: "Security & Performance QA", desc: "Conducting automated load testing, vulnerability scans (VAPT), SOC-2 compliance checks, and end-to-end regression tests." },
  { num: "05", title: "Zero-Downtime Deployment", desc: "Provisioning auto-scaling Kubernetes clusters, blue-green deployments, automated database migrations, and CI/CD pipelines." },
  { num: "06", title: "24/7 SRE & Continuous Scaling", desc: "Providing 24/7 Site Reliability Engineering (SRE) monitoring, performance telemetry logging, and dedicated SLA support." },
];

const FAQS = [
  {
    q: "What tech stacks does Digital Zoning Corporation specialize in?",
    a: "We specialize in modern enterprise technology stacks including Next.js, React, Node.js, Python, Go, PostgreSQL, Redis, Apache Kafka, Kubernetes, Docker, AWS, Microsoft Azure, Google Cloud, and PyTorch / HuggingFace for AI and machine learning engineering.",
  },
  {
    q: "Can Digital Zoning develop custom ERP platforms tailored to complex workflows?",
    a: "Yes. We engineer customized ERP systems with tailored general ledger accounting, multi-warehouse barcoded inventory, HRMS payroll, procurement approval workflows, and manufacturing bills of materials (BOM) designed for your specific business logic.",
  },
  {
    q: "How does Digital Zoning ensure data security, privacy and compliance?",
    a: "We enforce zero-trust security architectures, end-to-end AES-256 and mutual TLS encryption, automated vulnerability penetration testing (VAPT), role-based access control (RBAC), and full compliance readiness for ISO 27001, SOC-2 Type II, and GDPR.",
  },
  {
    q: "Does Digital Zoning offer on-premises air-gapped AI deployment?",
    a: "Yes. We deploy custom large language models (LLMs) and computer vision inference pipelines on private on-premises GPU clusters or dedicated virtual private clouds (VPC) with zero external data leakage or public cloud dependency.",
  },
];

export default function DigitalZoneHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const timerRef = useRef(null);

  // 5.5s autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const goToSlide = (idx) => setCurrentSlide(idx);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── FULL-WIDTH HERO IMAGE SLIDER ──────────────────────────────────── */}
      <section
        className="relative w-full min-h-[580px] lg:h-[660px] xl:h-[700px] flex items-center overflow-hidden bg-slate-950"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images with Crossfade */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transform transition-transform duration-[6000ms]`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Deep Tech Blue / Teal Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061A30]/30 to-[#030D19]/70 z-10 pointer-events-none" />

        {/* Slide Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A8E8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] animate-pulse" />
              <span>{activeSlide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              {activeSlide.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              {activeSlide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/group-companies/digitalzone/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/group-companies/digitalzone/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                <span>Talk to an Architect</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls: Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slider Bottom Bar: Dot Indicators & Counter */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-[#00A8E8]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 bg-black/30 px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm">
            <span className="text-white font-bold">0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{HERO_SLIDES.length}</span>
          </div>
        </div>
      </section>

      {/* ─── STATS COUNTER STRIP ───────────────────────────────────────────── */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs hover:border-[#00A8E8]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-cyan-50 text-[#00A8E8]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#061A30] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PRACTICE SUMMARY ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual with Realistic Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/digitalzone/about_team.jpg"
                  alt="Digital Zoning Senior Software Architects and AI Engineers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A30]/90 via-[#061A30]/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A8E8] block mb-1">
                      Engineering Leadership
                    </span>
                    <h3 className="text-lg font-bold">15+ Years of Scalable Enterprise Software Architecture</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Scalable Digital Ecosystem</SectionLabel>
              <SectionHeading className="mb-5">
                Intelligent Digital Systems Engineered For Real-World Scale
              </SectionHeading>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Digital Zoning Corporation operates as a premier software engineering, AI model engineering, cloud modernization, and zero-trust cybersecurity institution. We build robust digital ecosystems that empower large corporations, government departments, and high-growth enterprises to automate workflows and accelerate decisions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">ISO 27001 &amp; SOC-2 Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">500+ Delivered Systems</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Private On-Premises AI LLMs</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">99.99% Cloud SRE Telemetry</span>
                </div>
              </div>

              <Link
                href="/group-companies/digitalzone/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8E8] hover:text-[#0086BA] transition-colors"
              >
                <span>Read Full Engineering Profile &amp; Governance</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6 IMAGE-LED PRACTICE AREAS (SERVICES SECTION) ─────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Technology Practice Areas</SectionLabel>
              <SectionHeading>Technology That Moves Business Forward</SectionHeading>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                From intelligent AI systems to enterprise ERP, cloud infrastructure and zero-trust security, we engineer digital solutions designed for performance, scale and long-term growth.
              </p>
            </div>

            <Link
              href="/group-companies/digitalzone/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8E8] hover:text-[#0086BA] transition-colors flex-shrink-0"
            >
              <span>View All 6 Practices</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#061A30]/85 text-white backdrop-blur-xs">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="w-9 h-9 rounded-lg bg-cyan-50 text-[#00A8E8] flex items-center justify-center mb-3">
                        <Icon size={19} />
                      </div>

                      <h3 className="text-[16px] font-bold text-[#061A30] mb-2 leading-snug">
                        {svc.title}
                      </h3>

                      <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-2.5 rounded-lg border border-slate-200 hover:border-[#00A8E8] hover:bg-cyan-50/40 text-[12px] font-bold text-[#061A30] hover:text-[#00A8E8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PLATFORMS ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Enterprise Product Suites</SectionLabel>
              <SectionHeading>Our Technology. Your Competitive Advantage.</SectionHeading>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Purpose-built enterprise platforms designed to automate operations, accelerate decisions and protect critical digital infrastructure.
              </p>
            </div>

            <Link
              href="/group-companies/digitalzone/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8E8] hover:text-[#0086BA] transition-colors flex-shrink-0"
            >
              <span>Explore All Platforms</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLATFORMS_PREVIEW.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#00A8E8] text-white">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#061A30] mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {item.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={13} className="text-[#00A8E8] flex-shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/group-companies/digitalzone/contact"
                    className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-[#00A8E8] text-xs font-bold text-[#061A30] hover:text-[#00A8E8] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Platform Demo</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6-STAGE AGILE METHODOLOGY LIFECYCLE ───────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Engineering Discipline</SectionLabel>
            <SectionHeading center className="mb-3">
              The 6-Stage Engineering Lifecycle
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              A structured, rigorous software delivery framework ensuring every platform and AI model operates with zero defects and maximum resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#00A8E8]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#061A30] text-[#00A8E8] font-black text-sm flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-[#061A30] mb-2">
                  {step.title}
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQS ACCORDION ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-3">
              Architecture, Security &amp; Deployment
            </SectionHeading>
            <p className="text-sm text-slate-600">
              Clear answers regarding our tech stacks, ERP customizations, security standards, and SLA commitments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[14px] sm:text-base text-[#061A30] cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 flex-shrink-0 text-slate-400 ${
                      openFaq === idx ? "rotate-180 text-[#00A8E8]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[13px] sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CALL TO ACTION (USER'S CATCHY HEADLINE) ─────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#061A30] to-[#0A2540] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A8E8] block mb-2">
                Commence Your Engineering Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Ready To Build Your Next Digital System?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our technology architects to explore your requirements, architecture and implementation roadmap.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Start A Conversation
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>042-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}