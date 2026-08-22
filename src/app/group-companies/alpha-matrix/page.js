"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity, BarChart3, Building, Building2, Camera, CheckCircle2,
  ChevronDown, ClipboardList, Cloud, Cpu,
  Facebook, FileSearch, Flame, Fingerprint, Globe2, Handshake, Landmark,
  Layers, Linkedin, Mail, MapPin, MessageCircle, Network, Phone, Plane, Plus, Minus,
  Radar, Radio, Satellite, ScanFace, Send, Server, Shield, ShieldCheck, Ship,
  Star, Twitter, UserCog, Wifi, Wrench, Youtube, Zap, ArrowRight,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  ContactForm,
  SectionLabel,
  SectionHeading,
} from "./components/AlphaMatrixShared";

const stats = [
  { icon: Star,        value: "15+",   label: "Years\nExperience" },
  { icon: Layers,      value: "250+",  label: "Defense & Security\nDeployments" },
  { icon: Handshake,   value: "50+",   label: "Global Technology\nPartners" },
  { icon: Globe2,      value: "20+",   label: "Countries\nProtected" },
  { icon: ShieldCheck, value: "99.9%", label: "Mission-Critical\nSystem Uptime" },
];

const solutions = [
  { icon: Camera,       title: "Surveillance Systems",       desc: "AI-powered CCTV, thermal imaging, long-range cameras, and intelligent video analytics.", href: "/group-companies/alpha-matrix/solutions#surveillance" },
  { icon: Landmark,     title: "Border Security",            desc: "Integrated border surveillance, intrusion detection, radar systems, and monitoring platforms.", href: "/group-companies/alpha-matrix/solutions#border-security" },
  { icon: Server,       title: "Command & Control Centers",  desc: "Real-time monitoring, C4ISR data visualization, emergency response, and operational intelligence.", href: "/group-companies/alpha-matrix/solutions#command-control" },
  { icon: Fingerprint,  title: "Access Control",              desc: "Biometric authentication, smart identity management, vehicle access systems, and visitor management.", href: "/group-companies/alpha-matrix/solutions#access-control" },
  { icon: Shield,       title: "Perimeter Protection",        desc: "Fence detection, fiber optic sensors, microwave barriers, smart alarms, and intrusion prevention.", href: "/group-companies/alpha-matrix/solutions#perimeter-protection" },
  { icon: Network,      title: "Cyber Defense",               desc: "Network security, threat intelligence, incident response, digital infrastructure protection, and cyber resilience.", href: "/group-companies/alpha-matrix/solutions#cyber-defense" },
];

const industries = [
  { icon: ShieldCheck, label: "Military &\nArmed Forces", href: "/group-companies/alpha-matrix/industries#military" },
  { icon: Landmark,    label: "Government\nOrganizations", href: "/group-companies/alpha-matrix/industries#government" },
  { icon: MapPin,      label: "Border\nSecurity",         href: "/group-companies/alpha-matrix/industries#border" },
  { icon: Plane,       label: "Airports &\nAviation",     href: "/group-companies/alpha-matrix/industries#airports" },
  { icon: Ship,        label: "Seaports &\nMaritime",     href: "/group-companies/alpha-matrix/industries#seaports" },
  { icon: Flame,       label: "Oil & Gas\nRefineries",    href: "/group-companies/alpha-matrix/industries#oil-gas" },
  { icon: Zap,         label: "Power Plants\n& Utilities", href: "/group-companies/alpha-matrix/industries#power-plants" },
  { icon: Building2,   label: "Smart\nCities",            href: "/group-companies/alpha-matrix/industries#smart-cities" },
  { icon: Server,      label: "Data Centers\n& Telecom",  href: "/group-companies/alpha-matrix/industries#data-centers" },
  { icon: Network,     label: "Critical\nInfrastructure", href: "/group-companies/alpha-matrix/industries#critical-infra" },
  { icon: Building,    label: "Transportation\n& Rail",   href: "/group-companies/alpha-matrix/industries#transportation" },
  { icon: Wrench,      label: "Defense\nManufacturing",   href: "/group-companies/alpha-matrix/industries#manufacturing" },
];

const whyChooseReasons = [
  "Advanced AI Surveillance & Vision Technologies",
  "Global Defense & Security Technology Partners",
  "End-to-End Mission-Critical Integration",
  "Zero-Trust Encrypted Cyber Integration",
  "Certified Defense System Engineers",
  "Compliant with International Defense Standards",
  "24/7 Rapid Response & Technical Support",
  "Custom Tactical Solutions for High-Threat Environments",
];

const techExpertise = [
  { icon: Cpu,        label: "Artificial\nIntelligence" },
  { icon: ScanFace,   label: "Computer\nVision" },
  { icon: Satellite,  label: "Thermal\nImaging" },
  { icon: Radar,      label: "Radar\nIntegration" },
  { icon: Radio,      label: "Drone\nSurveillance" },
  { icon: Wifi,       label: "IoT\nSecurity" },
  { icon: Cloud,      label: "Edge\nComputing" },
  { icon: Activity,   label: "Cloud\nMonitoring" },
  { icon: MapPin,     label: "GIS\nMapping" },
  { icon: BarChart3,  label: "Data\nAnalytics" },
];

const featuredSolutions = [
  {
    title: "Intelligent Surveillance Platform",
    desc: "Real-time AI video analytics with facial recognition, object detection, and behavioral monitoring for rapid threat detection.",
    image: "/alpha_surveillance.svg",
    href: "/group-companies/alpha-matrix/solutions#surveillance",
  },
  {
    title: "Integrated Command Center",
    desc: "Centralized C4ISR monitoring platform for unified situational awareness, tactical coordination, and emergency response.",
    image: "/alpha_command_center.svg",
    href: "/group-companies/alpha-matrix/solutions#command-control",
  },
  {
    title: "Smart Border Monitoring",
    desc: "Long-range multi-sensor surveillance with automated radar tracking, fiber-optic fence sensors, and rapid incident dispatch.",
    image: "/alpha_border_security.svg",
    href: "/group-companies/alpha-matrix/solutions#border-security",
  },
  {
    title: "Critical Infrastructure Protection",
    desc: "Comprehensive perimeter protection and cyber-physical security architecture for power stations, airports, and refineries.",
    image: "/alpha_critical_infrastructure.svg",
    href: "/group-companies/alpha-matrix/solutions#perimeter-protection",
  },
];

const processSteps = [
  { step: "01", icon: FileSearch,    title: "Threat & Site\nAssessment" },
  { step: "02", icon: ClipboardList, title: "Tactical\nArchitecture" },
  { step: "03", icon: Cpu,           title: "System\nEngineering" },
  { step: "04", icon: Server,        title: "Deployment &\nIntegration" },
  { step: "05", icon: UserCog,       title: "24/7 Operations\n& Support" },
];

const partners = ["HIKVISION", "AXIS COMMUNICATIONS", "HUAWEI", "THALES", "LOCKHEED MARTIN", "LEIDOS", "PALANTIR"];

const testimonials = [
  {
    name: "Government Defense & Security Authority",
    quote: "Alpha Matrix Defence Systems delivered an exceptional integrated surveillance and command platform that significantly fortified our national perimeter security.",
  },
  {
    name: "Critical Infrastructure Operations Director",
    quote: "Professional engineering, robust system uptime, and unmatched 24/7 tactical support across our high-security facilities.",
  },
];

const faqs = [
  { question: "What sectors does Alpha Matrix Defence Systems support?", answer: "We provide comprehensive defense, surveillance, and cyber security solutions for military organizations, government agencies, international airports, seaports, oil & gas complexes, power plants, smart cities, and critical national infrastructure." },
  { question: "Can your defense systems integrate with legacy security infrastructure?", answer: "Yes. Our platforms are built on open C4ISR standards, allowing seamless integration with existing radar networks, optical surveillance cameras, access control systems, and command databases." },
  { question: "Do you offer turnkey deployment and maintenance services?", answer: "We deliver complete lifecycle solutions: initial site risk assessment, custom defense architecture design, hardware procurement, on-site commissioning, operator training, and 24/7 technical maintenance." },
  { question: "What cybersecurity safeguards are built into your command systems?", answer: "All our platforms adhere to zero-trust architecture, multi-factor biometric authentication, end-to-end AES-256 encryption, and isolated defense network topologies to prevent unauthorized access and cyber threats." },
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function AnimatedCounter({ value, duration = 1800 }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const match = value.match(/^([\d]+(?:\.[\d]+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const prefix = match ? value.slice(0, value.indexOf(match[1])) : "";
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((target * eased).toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, duration, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ icon: Icon, value, label }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col items-center text-center gap-2 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1.5 hover:border-[#005691]/60 hover:shadow-md bg-white`}
      style={{ borderColor: theme.border }}
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: hexToRgba(theme.gold, 0.1), border: `1px solid ${theme.border}` }}>
        <Icon size={18} style={{ color: theme.gold }} />
      </div>
      <p className="text-xl md:text-2xl font-black tabular-nums" style={{ color: theme.navy }}>
        <AnimatedCounter value={value} />
      </p>
      <p className="text-[10.5px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textFaint }}>{label}</p>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc, href }) {
  const [ref, visible] = useReveal();
  return (
    <Link
      href={href}
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#005691]/60 bg-white`}
      style={{ borderColor: theme.border }}
    >
      <div>
        <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 border transition-all duration-300 group-hover:bg-[#005691]/15 group-hover:scale-110 group-hover:border-[#005691]/50" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.06) }}>
          <Icon size={18} style={{ color: theme.gold }} />
        </div>
        <h3 className="text-[13px] font-black uppercase tracking-wide mb-2.5 transition-colors duration-300 group-hover:text-[#005691]" style={{ color: theme.navy }}>{title}</h3>
        <p className="text-[11.5px] leading-relaxed mb-4" style={{ color: theme.textMuted }}>{desc}</p>
      </div>
      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider mt-2 group-hover:translate-x-1 transition-transform" style={{ color: theme.gold }}>
        <span>Explore Solution</span>
        <ArrowRight size={12} />
      </div>
    </Link>
  );
}

function IndustryCard({ icon: Icon, label, href }) {
  const [ref, visible] = useReveal();
  return (
    <Link
      href={href}
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 hover:border-[#005691]/60 hover:-translate-y-1 hover:scale-105 hover:shadow-md bg-white`}
      style={{ borderColor: theme.border }}
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3 border transition-all duration-300 group-hover:bg-[#005691]/15 group-hover:scale-110" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.06) }}>
        <Icon size={17} style={{ color: theme.gold }} />
      </div>
      <p className="text-[10.5px] font-bold leading-snug uppercase tracking-wide whitespace-pre-line" style={{ color: theme.navy }}>{label}</p>
    </Link>
  );
}

function FeaturedCard({ title, desc, image, href }) {
  const [ref, visible] = useReveal();
  return (
    <Link
      href={href}
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#005691]/50 flex flex-col justify-between bg-white`}
      style={{ borderColor: theme.border }}
    >
      <div>
        <div className="relative w-full h-44 overflow-hidden bg-slate-50 border-b" style={{ borderColor: theme.border }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-[13px] font-black uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-[#005691]" style={{ color: theme.navy }}>{title}</h3>
          <p className="text-[11.5px] leading-relaxed" style={{ color: theme.textMuted }}>{desc}</p>
        </div>
      </div>
      <div className="px-5 pb-5 pt-1 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform" style={{ color: theme.gold }}>
        <span>View Deployment Specs</span>
        <ArrowRight size={12} />
      </div>
    </Link>
  );
}

function ProcessStep({ step, icon: Icon, title, isLast }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} flex flex-col items-center text-center relative flex-1 min-w-[100px] group`}>
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] border-t-2 border-dashed z-0 transition-colors group-hover:border-[#005691]/60" style={{ borderColor: theme.border }} />
      )}
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-[#005691] group-hover:scale-110 group-hover:shadow-md z-10 bg-white" style={{ borderColor: theme.border }}>
        <Icon size={18} style={{ color: theme.gold }} />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center border shadow-xs" style={{ borderColor: theme.border, backgroundColor: theme.gold, color: theme.white }}>
          {step}
        </div>
      </div>
      <p className="text-[10.5px] font-bold leading-tight uppercase tracking-wider mt-4 whitespace-pre-line" style={{ color: theme.navy }}>{title}</p>
    </div>
  );
}

export default function AlphaMatrixPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("alpha-matrix-theme");
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.navy;
    return () => {
      document.body.classList.remove("alpha-matrix-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? -1 : index);

  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Section (Clean White Background) */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden flex items-center min-h-[85vh] border-b bg-white" style={{ borderColor: theme.border }}>
        {/* Background Visual Graphic */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Alpha Matrix Defense Command Center Visual"
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-5 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
              <ShieldCheck size={14} style={{ color: theme.gold }} />
              <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>Mission-Critical Defense Technology</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-5 uppercase tracking-tight" style={{ color: theme.navy }}>
              <span className="block mb-1">Advanced Defense &amp;</span>
              <span className="block mb-1">Security Systems For</span>
              <span className="block" style={{ color: theme.gold }}>Critical Infrastructure</span>
            </h1>

            <p className="text-[13.5px] md:text-[15px] leading-relaxed mb-9 max-w-xl" style={{ color: theme.textMuted }}>
              Delivering integrated AI surveillance, border radar monitoring, tactical command &amp; control centers, and military-grade perimeter protection systems that safeguard sovereign interests and critical facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/group-companies/alpha-matrix/solutions"
                className="px-7 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:shadow-lg hover:scale-105 text-white"
                style={{ backgroundColor: theme.gold, color: theme.white }}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/group-companies/alpha-matrix/about"
                className="px-7 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 border bg-white shadow-xs hover:bg-[#F8FAFC]"
                style={{ borderColor: theme.borderStrong, color: theme.navy }}
              >
                About Alpha Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      {/* About Company Showcase */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative min-h-[380px] rounded-2xl overflow-hidden border shadow-sm group bg-white" style={{ borderColor: theme.border }}>
              <Image
                src="/alpha_about_facility.svg"
                alt="Alpha Matrix Defense Facility and Engineering Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: theme.gold }}>Engineering Operations Center</p>
                  <p className="text-[14px] font-black uppercase" style={{ color: theme.navy }}>Defense Technology &amp; Systems Integration Lab</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center p-8 lg:p-10 rounded-2xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
              <SectionLabel>About Company</SectionLabel>
              <SectionHeading className="mb-5">Engineering Security.<br />Protecting Nations.</SectionHeading>
              <p className="text-[13px] md:text-[14px] leading-relaxed mb-5" style={{ color: theme.textMuted }}>
                Alpha Matrix Defence Systems is a premier defense and high-tier security technology provider specializing in AI surveillance systems, border radar networks, C4ISR tactical command platforms, and cybersecurity architectures.
              </p>
              <p className="text-[13px] md:text-[14px] leading-relaxed mb-7" style={{ color: theme.textFaint }}>
                We partner with national ministries, armed forces, law enforcement, international airports, ports, energy complexes, and critical infrastructure operators worldwide to deliver battle-tested, high-reliability protection.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: theme.border }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} style={{ color: theme.gold }} />
                  <span className="text-[12px] font-bold" style={{ color: theme.navy }}>ISO &amp; Military Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={18} style={{ color: theme.gold }} />
                  <span className="text-[12px] font-bold" style={{ color: theme.navy }}>AI &amp; Sensor Fusion</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/group-companies/alpha-matrix/about"
                  className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider transition-all"
                  style={{ color: theme.gold }}
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel center>Our Core Defense Solutions</SectionLabel>
            <SectionHeading center>Comprehensive Defense &amp; Security Technologies</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {solutions.map((s) => <SolutionCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Featured Solutions Visual Cards */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel center>Featured Deployments</SectionLabel>
            <SectionHeading center>Deployed Systems &amp; Tactical Capabilities</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSolutions.map((f) => <FeaturedCard key={f.title} {...f} />)}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/group-companies/alpha-matrix/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg text-white"
              style={{ backgroundColor: theme.gold, color: theme.white }}
            >
              <span>Explore All Capabilities &amp; Specs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Industries We Serve</SectionLabel>
            <SectionHeading center className="tracking-wider">Trusted Across Critical Sectors</SectionHeading>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((industry) => <IndustryCard key={industry.label} {...industry} />)}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/group-companies/alpha-matrix/industries"
              className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider transition-all"
              style={{ color: theme.gold }}
            >
              <span>View Industry-Specific Defense Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose + Technology Expertise */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-8 md:p-10 rounded-2xl border h-full shadow-xs bg-white" style={{ borderColor: theme.border }}>
              <SectionLabel>Why Choose Us</SectionLabel>
              <SectionHeading className="mb-6">Why Alpha Matrix Defence Systems</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mt-2">
                {whyChooseReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                    <span className="text-[12px] font-bold leading-snug" style={{ color: theme.textMuted }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 md:p-10 rounded-2xl border h-full shadow-xs bg-white" style={{ borderColor: theme.border }}>
              <SectionLabel>Technology Ecosystem</SectionLabel>
              <SectionHeading className="mb-3">Next-Generation Security Tech</SectionHeading>
              <p className="text-[13px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                We harness advanced sensor integration, neural vision networks, and resilient data architectures.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {techExpertise.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all duration-300 hover:border-[#005691]/50 hover:-translate-y-1 hover:shadow-md bg-white"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center border mb-2" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                      <Icon size={16} style={{ color: theme.gold }} />
                    </div>
                    <span className="text-[9.5px] font-bold leading-tight uppercase tracking-wider whitespace-pre-line" style={{ color: theme.navy }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Lifecycle */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Our Process Lifecycle</SectionLabel>
            <SectionHeading center>From Threat Assessment to 24/7 Mission Support</SectionHeading>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-6 relative z-10 w-full">
            {processSteps.map((step, index) => <ProcessStep key={step.step} {...step} isLast={index === processSteps.length - 1} />)}
          </div>
        </div>
      </section>

      {/* Global Technology Partners */}
      <section className="py-14 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionLabel center>Global Technology Partners</SectionLabel>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-6">
            {partners.map((p) => (
              <span key={p} className="text-[15px] md:text-[18px] font-black uppercase tracking-wider" style={{ color: theme.textFaint }}>{p}</span>
            ))}
          </div>
          <p className="text-[12px] mt-8" style={{ color: theme.textFaint }}>
            Trusted by governments, defense organizations, security agencies, and mission-critical infrastructure operators.
          </p>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Testimonials */}
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel>Client Trust</SectionLabel>
              <SectionHeading className="mb-6">Proven Defense Capabilities</SectionHeading>
              
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-6 rounded-xl border shadow-xs bg-white" style={{ borderColor: theme.border }}>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill={theme.gold} style={{ color: theme.gold }} />)}
                  </div>
                  <p className="text-[13px] leading-relaxed italic mb-4 font-medium" style={{ color: theme.textMuted }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-[12px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="lg:col-span-7 space-y-4">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <SectionHeading className="mb-6">Operational Clarity</SectionHeading>
              
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="rounded-xl border overflow-hidden transition-all duration-300 bg-white" style={{ borderColor: theme.border }}>
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group transition-all"
                    >
                      <span className="text-[13px] font-bold tracking-wide transition-colors group-hover:text-[#005691]" style={{ color: theme.navy }}>
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border transition-all flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                        {isOpen ? <Minus size={12} style={{ color: theme.gold }} /> : <Plus size={12} style={{ color: theme.gold }} />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-[12.5px] leading-relaxed border-t" style={{ borderColor: theme.border, color: theme.textMuted }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Consultation & Inquiry Section */}
      <section id="contact" className="py-20 lg:py-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-lg">
          <ContactForm />
        </div>
      </section>

      <AlphaMatrixFooter />
    </div>
  );
}