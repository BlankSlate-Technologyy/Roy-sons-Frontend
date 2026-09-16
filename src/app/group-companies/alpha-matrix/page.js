"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity, BarChart3, Building, Building2, Camera, CheckCircle2,
  ChevronDown, ClipboardList, Cloud, Cpu,
  Eye, FileSearch, Flame, Fingerprint, Globe2, Handshake, Landmark,
  Layers, Lock, Mail, MapPin, Network, Phone, Plane,
  Radar, Radio, Satellite, ScanFace, Server, Shield, ShieldCheck, Ship,
  Star, UserCog, Wifi, Wrench, Zap, ArrowRight, ChevronRight,
} from "lucide-react";
import {
  theme,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  ContactForm,
  SectionLabel,
  SectionHeading,
} from "./components/AlphaMatrixShared";

const HERO_SLIDES = [
  {
    category: "Sovereign Defense Systems",
    title: "Advanced Defence Technology",
    subtitle:
      "Engineering next-generation multi-spectral sensor fusion, tactical radar tracking, and intelligent electronic countermeasures for national defense.",
    image: "/services/defense-2.jpg",
    linkText: "Explore Defense Solutions",
    href: "/group-companies/alpha-matrix/solutions",
  },
  {
    category: "C4ISR Operations & Intelligence",
    title: "Integrated Security Systems",
    subtitle:
      "Real-time unified situational awareness, edge computer vision, and automated tactical command coordination for mission-critical installations.",
    image: "/services/it-ai-2.jpg",
    linkText: "View Command Architecture",
    href: "/group-companies/alpha-matrix/solutions#command-control",
  },
  {
    category: "Strategic Facility Defense",
    title: "Critical Infrastructure Protection",
    subtitle:
      "Multi-layered perimeter shields, anti-drone electromagnetic mitigation, and cyber-physical resilience for refineries, airbases, and transit hubs.",
    image: "/national-guard-cta-bg.png",
    linkText: "Review Infrastructure Protocols",
    href: "/group-companies/alpha-matrix/industries",
  },
];

const stats = [
  { value: "15+",   label: "Years Defense\nEngineering" },
  { value: "250+",  label: "Strategic Sites\nProtected" },
  { value: "50+",   label: "Global OEM\nTechnology Partners" },
  { value: "99.99%",label: "Mission-Critical\nSystem Availability" },
  { value: "24/7",  label: "Active Tactical\nCommand Support" },
];

const solutions = [
  {
    title: "Surveillance Systems",
    category: "Electro-Optics & AI",
    desc: "Multi-spectral optical and cooled thermal imaging networks with real-time edge neural video analytics.",
    image: "/services/defense-2.jpg",
    href: "/group-companies/alpha-matrix/solutions/surveillance-systems",
  },
  {
    title: "Border Security",
    category: "Frontier Defense",
    desc: "Long-range ground radar grids, seismic geophones, fiber-optic fence sensors, and persistent monitoring.",
    image: "/services/it-ai-1.jpg",
    href: "/group-companies/alpha-matrix/solutions/border-security",
  },
  {
    title: "Command & Control Centers",
    category: "C4ISR Platforms",
    desc: "Centralized geospatial operational theaters with video wall visualization, GIS tracking, and tactical dispatch.",
    image: "/services/it-ai-2.jpg",
    href: "/group-companies/alpha-matrix/solutions/command-and-control-centers",
  },
  {
    title: "Access Control & Biometrics",
    category: "Identity & Physical Security",
    desc: "High-security biometric mantraps, vehicle undercarriage scanning, and zero-trust identity authentication.",
    image: "/national-guard-about.png",
    href: "/group-companies/alpha-matrix/solutions/access-control",
  },
  {
    title: "Perimeter Protection",
    category: "Physical Intrusion Shield",
    desc: "Microwave barriers, taut-wire detection lines, ATEX crash-rated bollards, and rapid-response alarms.",
    image: "/national-guard-mobile-patrol.png",
    href: "/group-companies/alpha-matrix/solutions/perimeter-protection",
  },
  {
    title: "Cyber Defense & Resilience",
    category: "Zero-Trust Infrastructure",
    desc: "Air-gapped defense networks, AES-256 tactical encryption, hardware security modules, and SOC telemetry.",
    image: "/services/it-ai-2.jpg",
    href: "/group-companies/alpha-matrix/solutions/cyber-defense",
  },
];

const industries = [
  { icon: ShieldCheck, label: "Military & Armed Forces", href: "/group-companies/alpha-matrix/industries/military-and-armed-forces" },
  { icon: Landmark,    label: "Government Organizations", href: "/group-companies/alpha-matrix/industries/government-organizations" },
  { icon: MapPin,      label: "Border Security Sectors",  href: "/group-companies/alpha-matrix/industries/border-security-sector" },
  { icon: Plane,       label: "Airports & Aviation",      href: "/group-companies/alpha-matrix/industries/airports-and-aviation" },
  { icon: Ship,        label: "Seaports & Maritime",      href: "/group-companies/alpha-matrix/industries/seaports-and-maritime" },
  { icon: Flame,       label: "Oil & Gas Refineries",     href: "/group-companies/alpha-matrix/industries/oil-and-gas-refineries" },
  { icon: Zap,         label: "Power Plants & Utilities", href: "/group-companies/alpha-matrix/industries/power-plants-and-utilities" },
  { icon: Building2,   label: "Smart Cities & Urban",     href: "/group-companies/alpha-matrix/industries/smart-cities" },
  { icon: Server,      label: "Data Centers & Telecom",   href: "/group-companies/alpha-matrix/industries/data-centers-and-telecom" },
  { icon: Network,     label: "Critical Infrastructure",  href: "/group-companies/alpha-matrix/industries/critical-infrastructure" },
  { icon: Building,    label: "Transportation & Rail",    href: "/group-companies/alpha-matrix/industries/transportation-and-rail" },
  { icon: Wrench,      label: "Defense Manufacturing",    href: "/group-companies/alpha-matrix/industries/defense-manufacturing" },
];

const techCapabilities = [
  { icon: Cpu,       title: "Neural Vision Processing", desc: "Convolutional neural networks executing at edge sensor nodes with under 25ms threat classification latency." },
  { icon: Radar,     title: "Radar & Slew-to-Cue",       desc: "Automated slaved electro-optical tracking locking onto radar targets across terrestrial and low-altitude airspace." },
  { icon: Satellite, title: "Multi-Spectral Optics",     desc: "Cooled thermal MWIR paired with ultra-low-light optical sensors for continuous detection in zero-visibility conditions." },
  { icon: Lock,      title: "Zero-Trust Encryption",    desc: "End-to-end hardware-accelerated cryptographic protocols safeguarding tactical telemetry from interception." },
];

const featuredProjects = [
  {
    title: "National Frontier Radar Grid",
    category: "Border Security",
    desc: "380 km multi-radar border monitoring grid integrating ground radar nodes, buried acoustic fiber sensors, and automated drone response stations.",
    image: "/services/it-ai-1.jpg",
    stats: "380 km Coverage • 18 Radar Nodes • Sub-Second Alerting",
  },
  {
    title: "Strategic C4ISR Operations Theater",
    category: "Command & Control",
    desc: "Tier-IV tactical command complex featuring 24-panel ultra-HD visualization, multi-agency encrypted radio bridges, and EMP physical shielding.",
    image: "/services/defense-2.jpg",
    stats: "24 Ultra-HD Displays • Geospatial GIS • 99.999% SLA",
  },
  {
    title: "International Airport Perimeter Matrix",
    category: "Aviation Defense",
    desc: "Comprehensive perimeter protection with foreign object debris radar, counter-UAS directional jamming, and thermal runway intrusion detection.",
    image: "/project-infrastructure.png",
    stats: "28 km Perimeter • RF Jamming Grid • Zero False-Alarm Logic",
  },
  {
    title: "Petrochemical Complex Security Shield",
    category: "Critical Infrastructure",
    desc: "ATEX explosion-proof thermal surveillance, automated vehicle undercarriage scanning, and PAS 68 crash-rated hydraulic bollard barriers.",
    image: "/services/electrical-1.jpg",
    stats: "1,200 Hectares • 450 ATEX Cameras • Automated Mantrap Entry",
  },
];

const defenseLifecycle = [
  { step: "01", icon: FileSearch,    title: "Threat & Risk Survey",   desc: "Topographical terrain analysis, vulnerability modeling, and threat radius mapping." },
  { step: "02", icon: ClipboardList, title: "Tactical Architecture", desc: "Custom defense-grade schematic engineering compliant with Mil-STD specifications." },
  { step: "03", icon: Cpu,           title: "Sensor System Fusion",   desc: "Hardware integration across radar, electro-optics, acoustic mesh, and cyber layers." },
  { step: "04", icon: Server,        title: "Field Commissioning",    desc: "On-site installation, end-to-end telemetry testing, and operator certification." },
  { step: "05", icon: UserCog,       title: "24/7 Active Command",    desc: "Round-the-clock remote system diagnostics, maintenance dispatch, and firmware hardening." },
];

function AnimatedCounter({ value, duration = 1600 }) {
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
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

export default function AlphaMatrixPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#050E1A] text-slate-100 font-sans antialiased overflow-x-hidden">
      <AlphaMatrixNavbar />

      {/* 01 — CINEMATIC HERO SLIDER */}
      <section className="relative h-[82vh] min-h-[580px] max-h-[820px] w-full overflow-hidden bg-[#050E1A]">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="absolute inset-0 bg-[#050E1A]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-10000 ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                {/* Cinematic Navy Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050E1A]/95 via-[#08182B]/80 to-[#050E1A]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-[#050E1A]/50" />
              </div>

              <div className="relative z-20 h-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#0284C7]/30 bg-[#08182B]/80 backdrop-blur-md mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#38BDF8]">
                    <ShieldCheck size={13} className="text-[#0284C7]" />
                    <span>{slide.category}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase leading-[1.12] text-white mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-xs sm:text-sm md:text-[15px] font-normal text-slate-300 leading-relaxed mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white px-5 py-2.5 rounded-lg border border-[#0284C7]/40 bg-[#005691] hover:bg-[#0284C7] transition-all"
                    >
                      <span>{slide.linkText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Minimal Slider Navigation Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === currentSlide
                  ? "w-6 h-1.5 bg-[#0284C7]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 02 — ABOUT ALPHA MATRIX (Clean White Section) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#08182B]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <Image
                src="/national-guard-about.png"
                alt="Alpha Matrix Defense Facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#38BDF8] block mb-1">
                    Defense Engineering Authority
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Integrated Surveillance &amp; Physical Infrastructure Protection
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <SectionLabel>About Alpha Matrix</SectionLabel>
                <SectionHeading className="mb-3">
                  Sovereign Protection Through Advanced Technology
                </SectionHeading>
                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  Alpha Matrix Defence Systems, a distinguished subsidiary of Roy &amp; Sons Holdings, delivers comprehensive defense and security technology architectures engineered for high-consequence environments.
                </p>
              </div>

              <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                From long-range radar networks and multi-spectral surveillance turrets to unified C4ISR operations centers and air-gapped cyber protection, our sovereign systems empower armed forces, government ministries, international ports, and critical infrastructure operators.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#005691]/10 flex items-center justify-center text-[#005691] shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="font-semibold text-slate-800">Military &amp; ISO Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#005691]/10 flex items-center justify-center text-[#005691] shrink-0">
                    <Cpu size={16} />
                  </div>
                  <span className="font-semibold text-slate-800">Edge AI Sensor Fusion</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/group-companies/alpha-matrix/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#005691] hover:text-[#0284C7] transition-colors"
                >
                  <span>Read Corporate Profile</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 — DEFENCE & SECURITY SOLUTIONS (Dark Tactical Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08182B] text-white border-t border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-2xl mb-12">
            <SectionLabel dark>Core Capabilities</SectionLabel>
            <SectionHeading dark className="mb-2">
              Defense &amp; Security Solutions
            </SectionHeading>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Engineered for zero-failure performance across military bases, international borders, maritime facilities, and energy complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group p-5 rounded-xl border border-white/10 bg-[#0E243D]/60 backdrop-blur-sm hover:border-[#0284C7]/50 hover:bg-[#0E243D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden mb-4 border border-white/10">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-[#38BDF8]">
                      {sol.category}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-[#0284C7] group-hover:text-[#38BDF8] pt-3 border-t border-white/10 transition-colors">
                  <span>Explore specifications</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — TECHNOLOGY CAPABILITIES (Subtle Light Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-[#08182B] border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Engineering Matrix</SectionLabel>
            <SectionHeading center className="mb-2">
              Technology Capabilities
            </SectionHeading>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Our hardware and software integration stack combines cognitive edge computing, multi-sensor intelligence, and hardened encryption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techCapabilities.map((tech) => {
              const TIcon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#005691] transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#005691]/10 flex items-center justify-center text-[#005691]">
                    <TIcon size={18} />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">{tech.title}</h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — INDUSTRIES WE SERVE (Clean White Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#08182B] border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-2xl mb-12">
            <SectionLabel>Deployment Sectors</SectionLabel>
            <SectionHeading className="mb-2">
              Industries We Protect
            </SectionHeading>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Providing customized defense specifications for national defense, civic safety, energy transit, and high-security infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const IIcon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#005691] hover:bg-slate-50 transition-all flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#005691] group-hover:text-white transition-colors shrink-0">
                    <IIcon size={18} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-[#005691] transition-colors leading-tight">
                    {ind.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — FEATURED DEFENSE PROJECTS (Dark Tactical Showcase) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050E1A] text-white border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel dark>Proven Deployments</SectionLabel>
              <SectionHeading dark>Featured Projects</SectionHeading>
            </div>
            <Link
              href="/group-companies/alpha-matrix/projects"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38BDF8] hover:underline"
            >
              <span>View All Projects</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj) => (
              <div
                key={proj.title}
                className="group rounded-xl border border-white/10 bg-[#08182B]/60 overflow-hidden hover:border-[#0284C7]/50 transition-all"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-[#38BDF8]">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-semibold text-white">{proj.title}</h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">{proj.desc}</p>
                  <p className="text-[11px] font-medium text-[#38BDF8] pt-2 border-t border-white/10">{proj.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 & 08 — DEFENSE LIFECYCLE & INTEGRATED SECURITY (Clean Light Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#08182B] border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel center>Lifecycle Architecture</SectionLabel>
            <SectionHeading center className="mb-2">
              Tactical Engineering Methodology
            </SectionHeading>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Every defense deployment adheres to rigorous international standards from baseline site assessment to 24/7 command center support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {defenseLifecycle.map((stage) => {
              const SIcon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50 relative space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#005691] text-white flex items-center justify-center">
                      <SIcon size={16} />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{stage.step}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-900">{stage.title}</h4>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{stage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — PERFORMANCE METRICS (Dark Tactical Counters) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#08182B] text-white border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-white/5 bg-white/5 space-y-1">
                <p className="text-2xl sm:text-3xl font-semibold text-[#38BDF8]">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="text-[11px] text-slate-400 font-medium whitespace-pre-line leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CONTACT SECTION (Dark Command Center) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050E1A] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel dark>Defense Directives</SectionLabel>
                <SectionHeading dark className="mb-3">
                  Tactical Consultation &amp; System Procurement
                </SectionHeading>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  Engage our certified defense engineers for classified site risk evaluations, C4ISR infrastructure blueprints, or tender specifications.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/5 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-[#0284C7] shrink-0" />
                  <span className="text-white font-medium">0092-42-38924737</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-[#0284C7] shrink-0" />
                  <span>info@roysons.org</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}