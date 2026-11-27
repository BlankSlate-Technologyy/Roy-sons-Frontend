"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building, Building2,
  Cpu, FileSearch, Flame, Landmark,
  Lock, Mail, MapPin, Network, Phone, Plane,
  Radar, Satellite, Server, ShieldCheck, Ship,
  UserCog, Wrench, Zap, ArrowRight, ChevronRight,
  ClipboardList,
} from "lucide-react";
import {
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
    image: "/armed_forces_hero.jpg",
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
    image: "/logos/Defense & Security.jpg.jpeg",
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
    image: "/project-infrastructure.png",
    href: "/group-companies/alpha-matrix/solutions/command-and-control-centers",
  },
  {
    title: "Access Control & Biometrics",
    category: "Identity & Physical Security",
    desc: "High-security biometric mantraps, vehicle undercarriage scanning, and zero-trust identity authentication.",
    image: "/logos/alpha.png",
    href: "/group-companies/alpha-matrix/solutions/access-control",
  },
  {
    title: "Perimeter Protection",
    category: "Physical Intrusion Shield",
    desc: "Microwave barriers, taut-wire detection lines, ATEX crash-rated bollards, and rapid-response alarms.",
    image: "/services/defense-1.jpg",
    href: "/group-companies/alpha-matrix/solutions/perimeter-protection",
  },
  {
    title: "Cyber Defense & Resilience",
    category: "Zero-Trust Infrastructure",
    desc: "Air-gapped defense networks, AES-256 tactical encryption, hardware security modules, and SOC telemetry.",
    image: "/images/digitalzone/project_cybersecurity.jpg",
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

const defenseLeadership = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    badge: "SOVEREIGN DEFENSE COMMAND",
    desc: "Overseeing sovereign defense advisory, international defense procurement, and multi-domain strategic partnerships across 25+ years of defense industry leadership.",
    image: "/logos/chairman.jpeg",
    tags: ["Strategic Procurement", "National Security Advisory", "Executive Command"],
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director & Strategic Programs",
    badge: "DEFENSE STRATEGY & ACQUISITIONS",
    desc: "Directing next-generation C4ISR programs, international OEM defense partnerships, and turnkey high-consequence defense modernization initiatives.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    tags: ["C4ISR Modernization", "Global Defense Alliances", "Turnkey Deployment"],
  },
  {
    name: "Engr. Farhan Siddiqui",
    role: "Head of Defense Systems & Radar Engineering",
    badge: "RADAR & SENSOR ENGINEERING",
    desc: "Chief architect for long-range ground surveillance radar arrays, multi-spectral electro-optics, and automated slew-to-cue sensor integration protocols.",
    image: "/team/project_engineer.jpg",
    tags: ["Mil-STD-810G", "Radar Array Synthesis", "Sensor Fusion Architecture"],
  },
  {
    name: "Brig. (Retd.) Tariq Mahmood",
    role: "Senior Director, C4ISR & Tactical Operations",
    badge: "TACTICAL OPERATIONS THEATERS",
    desc: "Leading operational theater integrations, multi-agency encrypted data bridges, and critical infrastructure hardening across high-security sovereign installations.",
    image: "/team/technical_support.jpg",
    tags: ["Joint Command Protocols", "Operational Resiliency", "EMP Hardening"],
  },
];

const featuredProjects = [
  {
    title: "National Frontier Radar Grid",
    category: "Border Security",
    desc: "380 km multi-radar border monitoring grid integrating ground radar nodes, buried acoustic fiber sensors, and automated drone response stations.",
    image: "/highway.png",
    stats: "380 km Coverage • 18 Radar Nodes • Sub-Second Alerting",
  },
  {
    title: "Strategic C4ISR Operations Theater",
    category: "Command & Control",
    desc: "Tier-IV tactical command complex featuring 24-panel ultra-HD visualization, multi-agency encrypted radio bridges, and EMP physical shielding.",
    image: "/project-roysons-infrastructure.jpg",
    stats: "24 Ultra-HD Displays • Geospatial GIS • 99.999% SLA",
  },
  {
    title: "International Airport Perimeter Matrix",
    category: "Aviation Defense",
    desc: "Comprehensive perimeter protection with foreign object debris radar, counter-UAS directional jamming, and thermal runway intrusion detection.",
    image: "/neomcity/hero_transit_infrastructure.jpg",
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
    <main
      className="min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#0284C7] selection:text-white"
      style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
    >
      <AlphaMatrixNavbar />

      {/* 01 — CINEMATIC HERO SLIDER */}
      <section
        className="relative h-[86vh] min-h-[620px] max-h-[880px] w-full overflow-hidden"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#050E1A]/95 via-[#08182B]/85 to-[#050E1A]/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-transparent to-[#050E1A]/60" />
              </div>

              <div className="relative z-20 h-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg border border-[#0284C7]/50 bg-[#08182B]/90 backdrop-blur-md mb-5 text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#38BDF8] shadow-lg shadow-sky-950/50">
                    <ShieldCheck size={16} className="text-[#38BDF8]" />
                    <span>{slide.category}</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] text-white mb-5 drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg md:text-[19px] font-medium text-slate-100 leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-3 text-sm sm:text-base font-bold text-white px-7 py-3.5 rounded-xl border border-sky-400/40 bg-[#005691] hover:bg-[#0284C7] shadow-xl hover:shadow-sky-500/30 transition-all cursor-pointer"
                    >
                      <span>{slide.linkText}</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Minimal Slider Navigation Indicators */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-xl">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === currentSlide
                  ? "w-8 h-2 bg-[#38BDF8]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 02 — ABOUT ALPHA MATRIX (Clean High-Contrast White Section) */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: "#FFFFFF", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/logos/Construction & Infrastructure.jpg.jpeg"
                alt="Alpha Matrix Sovereign Defense Manufacturing & Integration Facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] block mb-1.5">
                    Defense Engineering Authority
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    Sovereign Manufacturing, Radar Integration &amp; Tactical Testing Base
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <SectionLabel>About Alpha Matrix</SectionLabel>
                <SectionHeading className="mb-4">
                  Sovereign Protection Through Advanced Technology
                </SectionHeading>
                <p className="text-base sm:text-[17px] font-medium text-slate-800 leading-relaxed mb-4">
                  Alpha Matrix Defence Systems, a distinguished subsidiary of Roy &amp; Sons Holdings, delivers comprehensive defense and security technology architectures engineered for high-consequence environments.
                </p>
                <p className="text-base sm:text-[17px] font-medium text-slate-700 leading-relaxed">
                  From long-range radar networks and multi-spectral surveillance turrets to unified C4ISR operations theaters and air-gapped cyber protection, our sovereign systems empower armed forces, government ministries, international ports, and critical infrastructure operators.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#005691] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Military &amp; ISO Standards</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#005691] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Cpu size={20} />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Edge AI Sensor Fusion</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/group-companies/alpha-matrix/about"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#005691] hover:text-[#0284C7] transition-colors"
                >
                  <span>Read Corporate Profile &amp; Mission</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 — DEFENCE & SECURITY SOLUTIONS (Dark Tactical Section) */}
      <section
        className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl mb-14">
            <SectionLabel dark>Core Capabilities</SectionLabel>
            <SectionHeading dark className="mb-3">
              Defense &amp; Security Solutions
            </SectionHeading>
            <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "#E2E8F0" }}>
              Engineered for zero-failure performance across military bases, international borders, maritime facilities, and strategic energy complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {solutions.map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group p-6 rounded-2xl border border-sky-500/20 hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl"
                style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}
              >
                <div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-5 border border-white/15">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#38BDF8] border border-sky-500/40">
                      {sol.category}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2.5 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed mb-5" style={{ color: "#CBD5E1" }}>
                    {sol.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#38BDF8] group-hover:text-white pt-4 border-t border-white/15 transition-colors">
                  <span>Explore technical specifications</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — TECHNOLOGY CAPABILITIES (Subtle Light Section) */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: "#F8FAFC", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Engineering Matrix</SectionLabel>
            <SectionHeading center className="mb-3">
              Technology Capabilities
            </SectionHeading>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Our hardware and software integration stack combines cognitive edge computing, multi-sensor intelligence, and hardened defense encryption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCapabilities.map((tech) => {
              const TIcon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#005691] hover:shadow-md transition-all space-y-3.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#005691]/10 flex items-center justify-center text-[#005691] shadow-xs">
                    <TIcon size={22} />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">{tech.title}</h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — INDUSTRIES WE SERVE (Clean White Section) */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: "#FFFFFF", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Deployment Sectors</SectionLabel>
            <SectionHeading className="mb-3">
              Industries We Protect
            </SectionHeading>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Providing customized defense architectures for national defense forces, civic security, energy transit, and critical national infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {industries.map((ind) => {
              const IIcon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-[#005691] hover:bg-slate-50 transition-all flex items-center gap-3.5 group shadow-xs hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#005691] group-hover:text-white transition-colors shrink-0 shadow-xs">
                    <IIcon size={20} />
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#005691] transition-colors leading-tight">
                    {ind.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — NEW: DEFENSE LEADERSHIP & SYSTEMS COUNCIL (Team Section) */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
        {/* Subtle Radar Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="max-w-3xl mb-16">
            <SectionLabel dark>Tactical Command &amp; Governance</SectionLabel>
            <SectionHeading dark className="mb-3">
              Defense Leadership &amp; Systems Council
            </SectionHeading>
            <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "#E2E8F0" }}>
              Helmed by seasoned defense leaders, veteran tactical advisors, and senior aerospace engineers directing sovereign technology, national defense contracts, and mission resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {defenseLeadership.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-sky-500/20 overflow-hidden hover:border-[#38BDF8]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between"
                style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08182B] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] border border-sky-500/40">
                      {member.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-bold text-[#38BDF8] uppercase tracking-wide mt-1 leading-snug">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm sm:text-[15px] font-medium leading-relaxed" style={{ color: "#CBD5E1" }}>
                      {member.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {member.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — FEATURED DEFENSE PROJECTS (Dark Tactical Showcase) */}
      <section
        className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <SectionLabel dark>Proven Deployments</SectionLabel>
              <SectionHeading dark>Featured Projects</SectionHeading>
            </div>
            <Link
              href="/group-companies/alpha-matrix/projects"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#38BDF8] hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {featuredProjects.map((proj) => (
              <div
                key={proj.title}
                className="group rounded-2xl border border-sky-500/20 overflow-hidden hover:border-[#38BDF8]/60 transition-all shadow-2xl"
                style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#38BDF8] border border-sky-500/40">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white">{proj.title}</h3>
                  <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: "#CBD5E1" }}>{proj.desc}</p>
                  <p className="text-xs sm:text-sm font-bold text-[#38BDF8] pt-3.5 border-t border-white/15 uppercase tracking-wide">
                    {proj.stats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — DEFENSE LIFECYCLE & INTEGRATED SECURITY (Clean Light Section) */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        style={{ backgroundColor: "#FFFFFF", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Lifecycle Architecture</SectionLabel>
            <SectionHeading center className="mb-3">
              Tactical Engineering Methodology
            </SectionHeading>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Every defense deployment adheres to rigorous international military standards from baseline site assessment to 24/7 command center support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {defenseLifecycle.map((stage) => {
              const SIcon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50 relative space-y-3 shadow-xs hover:border-[#005691] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#005691] text-white flex items-center justify-center shadow-sm">
                      <SIcon size={18} />
                    </div>
                    <span className="text-sm font-black text-[#005691]">{stage.step}</span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 leading-snug">{stage.title}</h4>
                  <p className="text-[13px] text-slate-700 font-medium leading-relaxed">{stage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — PERFORMANCE METRICS (Dark Tactical Counters) */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl border border-sky-500/25 space-y-2 shadow-xl"
                style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#38BDF8]">
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="text-xs sm:text-sm text-white font-black whitespace-pre-line uppercase tracking-wider leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CONTACT SECTION (Dark Command Center) */}
      <section
        className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel dark>Defense Directives</SectionLabel>
                <SectionHeading dark className="mb-4">
                  Tactical Consultation &amp; System Procurement
                </SectionHeading>
                <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "#E2E8F0" }}>
                  Engage our certified defense engineers for classified site risk evaluations, C4ISR infrastructure blueprints, or tender specifications.
                </p>
              </div>

              <div
                className="p-7 rounded-3xl border border-sky-500/20 space-y-5 text-sm sm:text-base shadow-2xl"
                style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
              >
                <div className="flex items-start gap-3.5">
                  <MapPin size={20} className="text-[#38BDF8] shrink-0 mt-1" />
                  <span className="font-medium leading-relaxed text-slate-100">
                    First Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.
                  </span>
                </div>
                <div className="flex items-center gap-3.5 pt-3 border-t border-white/10">
                  <Phone size={20} className="text-[#38BDF8] shrink-0" />
                  <span className="text-white font-bold tracking-wide">0092-42-38924737</span>
                </div>
                <div className="flex items-center gap-3.5 pt-3 border-t border-white/10">
                  <Mail size={20} className="text-[#38BDF8] shrink-0" />
                  <span className="font-medium text-slate-100">info@roysons.org</span>
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
