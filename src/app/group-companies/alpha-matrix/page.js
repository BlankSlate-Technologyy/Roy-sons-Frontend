"use client";

import { useState, useEffect } from "react";
// Image handling removed — using placeholders so you can add images later
import Link from "next/link";
import {
  Activity, BarChart3, Building, Building2, Camera, CheckCircle2,
  ChevronDown, ClipboardList, Clock3, Cloud, Cpu,
  Facebook, FileSearch, Flame, Fingerprint, Globe2, Handshake, Landmark,
  Layers, Linkedin, Mail, MapPin, Network, Phone, Plane, Plus, Minus,
  Radar, Radio, Satellite, ScanFace, Server, Shield, ShieldCheck, Ship,
  Star, Twitter, UserCog, Wifi, Wrench, Youtube, Zap,
} from "lucide-react";

const theme = {
  bg:        "#070D18",
  panel:     "#0D1826",
  panelAlt:  "#111F32",
  gold:      "#C9A24B",
  goldSoft:  "#E4C583",
  white:     "#FFFFFF",
  textMuted: "#96A3B8",
  textFaint: "#6B7A8F",
  border:    "rgba(201,162,75,0.16)",
  borderSoft:"rgba(255,255,255,0.08)",
};

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Solutions",  href: "#solutions", hasDropdown: true },
  { label: "Industries", href: "#industries" },
  { label: "Projects",   href: "#projects" },
  { label: "Careers",    href: "#careers" },
  { label: "Contact",    href: "#contact" },
];

const stats = [
  { icon: Star,        value: "15+",   label: "Years\nExperience" },
  { icon: Layers,      value: "250+",  label: "Projects\nCompleted" },
  { icon: Handshake,   value: "50+",   label: "Technology\nPartners" },
  { icon: Globe2,      value: "20+",   label: "Countries\nServed" },
  { icon: ShieldCheck, value: "99.9%", label: "System\nReliability" },
];

const solutions = [
  { icon: Camera,       title: "Surveillance Systems",       desc: "AI-powered CCTV, thermal imaging, long-range cameras, and intelligent video analytics." },
  { icon: Landmark,     title: "Border Security",            desc: "Integrated border surveillance, intrusion detection, radar systems, and monitoring platforms." },
  { icon: Server,       title: "Command & Control Centers",  desc: "Real-time monitoring, data visualization, emergency response, and operational intelligence." },
  { icon: Fingerprint,  title: "Access Control",              desc: "Biometric authentication, smart identity management, vehicle access systems, and visitor management." },
  { icon: Shield,       title: "Perimeter Protection",        desc: "Fence detection, fiber optic sensors, microwave barriers, smart alarms, and intrusion prevention." },
  { icon: Network,      title: "Cyber Defense",               desc: "Network security, threat intelligence, incident response, digital infrastructure protection, and cyber resilience." },
];

const industries = [
  { icon: ShieldCheck, label: "Military &\nArmed Forces" },
  { icon: Landmark,    label: "Government\nOrganizations" },
  { icon: MapPin,      label: "Border\nSecurity" },
  { icon: Plane,       label: "Airports" },
  { icon: Ship,        label: "Seaports" },
  { icon: Flame,       label: "Oil & Gas" },
  { icon: Zap,         label: "Power\nPlants" },
  { icon: Building2,   label: "Smart\nCities" },
  { icon: Server,      label: "Data\nCenters" },
  { icon: Network,     label: "Critical\nInfrastructure" },
  { icon: Building,    label: "Transportation" },
  { icon: Wrench,      label: "Defense\nManufacturing" },
];

const whyChooseReasons = [
  "Advanced AI Security Technologies",
  "Global Technology Partners",
  "End-to-End Defense Solutions",
  "Secure System Integration",
  "Certified Engineering Team",
  "International Quality Standards",
  "24/7 Technical Support",
  "Customized Defense Solutions",
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
    desc: "Real-time AI video analytics with facial recognition, object detection, and behavioral monitoring.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Integrated Command Center",
    desc: "Centralized monitoring platform for defense operations and emergency response.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Smart Border Monitoring",
    desc: "Long-range surveillance with automated threat detection and rapid incident management.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Critical Infrastructure Protection",
    desc: "Complete security architecture for power plants, airports, ports, and government facilities.",
    img: "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?auto=format&fit=crop&w=500&q=80",
  },
];

const processSteps = [
  { step: "01", icon: FileSearch,   title: "Security\nAssessment" },
  { step: "02", icon: ClipboardList,title: "Solution\nDesign" },
  { step: "03", icon: Cpu,          title: "System\nEngineering" },
  { step: "04", icon: Server,       title: "Deployment &\nIntegration" },
  { step: "05", icon: UserCog,      title: "Training &\nMaintenance" },
];

const partners = ["HIKVISION", "AXIS", "HUAWEI", "THALES", "LOCKHEED MARTIN", "leidos", "Palantir"];

const testimonials = [
  {
    name: "Government Security Authority",
    role: "",
    quote: "Alpha Matrix Defence Systems delivered an exceptional integrated surveillance solution that significantly enhanced our operational security.",
  },
  {
    name: "Infrastructure Operations Director",
    role: "",
    quote: "Professional engineering, reliable technology, and outstanding technical support throughout the project lifecycle.",
  },
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve government, military, border security, airports, seaports, energy, smart cities, and critical infrastructure operators worldwide.",
  },
  {
    question: "Do you provide customized security solutions?",
    answer: "Yes, every deployment is engineered around your site's operational requirements, threat profile, and existing infrastructure.",
  },
  {
    question: "Do you offer installation and maintenance?",
    answer: "We provide full lifecycle support, from installation and system engineering to 24/7 monitoring and ongoing maintenance.",
  },
  {
    question: "Can your systems integrate with existing infrastructure?",
    answer: "Absolutely. Our platforms are built for interoperability with existing command, surveillance, and access control systems.",
  },
];

const footerLinks = {
  "Quick Links": ["Home", "About", "Solutions", "Industries", "Projects", "Careers", "Contact"],
  Solutions: ["Surveillance Systems", "Border Security", "Cyber Defense", "Command & Control", "Perimeter Protection", "Access Control"],
};

const socialIcons = [Linkedin, Facebook, Twitter, Youtube];

// ---------- Reusable pieces ----------

function SectionLabel({ children, center }) {
  return (
    <p
      className={`text-[11px] font-black uppercase tracking-[0.3em] mb-3 ${center ? "text-center" : ""}`}
      style={{ color: theme.gold }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children, className = "", center }) {
  return (
    <h2
      className={`text-2xl font-black uppercase tracking-tight ${center ? "text-center" : ""} ${className}`}
      style={{ color: theme.white }}
    >
      {children}
    </h2>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div
      className="flex flex-col items-center text-center gap-2 p-5 rounded-lg border transition-all duration-300 hover:border-amber-500/30"
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(201,162,75,0.1)", border: `1px solid ${theme.border}` }}
      >
        <Icon size={18} style={{ color: theme.gold }} />
      </div>
      <p className="text-lg md:text-xl font-black" style={{ color: theme.white }}>{value}</p>
      <p className="text-[9px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textFaint }}>
        {label}
      </p>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="group p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div
        className="w-11 h-11 rounded-md flex items-center justify-center mb-5 border transition-all duration-300 group-hover:bg-[#C9A24B]/10"
        style={{ borderColor: theme.border }}
      >
        <Icon size={18} style={{ color: theme.gold }} />
      </div>
      <h3 className="text-[13px] font-black uppercase tracking-wide mb-2.5" style={{ color: theme.white }}>
        {title}
      </h3>
      <p className="text-[11.5px] leading-relaxed" style={{ color: theme.textMuted }}>{desc}</p>
    </div>
  );
}

function IndustryCard({ icon: Icon, label }) {
  return (
    <div
      className="group flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:border-amber-500/40 hover:scale-105"
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-3 border transition-all duration-300 group-hover:bg-[#C9A24B]/10"
        style={{ borderColor: theme.border }}
      >
        <Icon size={17} style={{ color: theme.gold }} />
      </div>
      <p className="text-[9.5px] font-bold leading-snug uppercase tracking-wide whitespace-pre-line" style={{ color: theme.white }}>
        {label}
      </p>
    </div>
  );
}

function TechCard({ icon: Icon, label }) {
  return (
    <div
      className="group flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:border-amber-500/30"
      style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 transition-all group-hover:bg-[#C9A24B]/20"
        style={{ borderColor: theme.border, backgroundColor: theme.panel }}
      >
        <Icon size={15} style={{ color: theme.gold }} />
      </div>
      <span className="text-[9.5px] font-bold leading-tight uppercase tracking-wider whitespace-pre-line" style={{ color: theme.white }}>
        {label}
      </span>
    </div>
  );
}

function FeaturedCard({ title, desc, img }) {
  return (
    <div
      className="group rounded-lg border overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div className="relative w-full h-36 bg-slate-900 flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center text-[13px] font-black"
          style={{ background: "linear-gradient(135deg, rgba(7,13,24,0.95), rgba(17,31,50,0.6))", color: theme.textFaint }}
        >
          Image Placeholder
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,13,24,0.9), transparent 60%)" }} />
      </div>
      <div className="p-5">
        <h3 className="text-[12.5px] font-black uppercase tracking-wide mb-2" style={{ color: theme.white }}>
          {title}
        </h3>
        <p className="text-[11px] leading-relaxed" style={{ color: theme.textMuted }}>{desc}</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, icon: Icon, title, isLast }) {
  return (
    <div className="flex flex-col items-center text-center relative flex-1 min-w-[100px] group">
      {!isLast && (
        <div
          className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] border-t-2 border-dashed z-0 transition-colors group-hover:border-amber-500/50"
          style={{ borderColor: theme.border }}
        />
      )}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-amber-500 group-hover:scale-105 z-10"
        style={{ borderColor: theme.border, backgroundColor: theme.bg }}
      >
        <Icon size={18} style={{ color: theme.gold }} />
        <div
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center border shadow-sm"
          style={{ borderColor: theme.border, backgroundColor: theme.gold, color: theme.bg }}
        >
          {step}
        </div>
      </div>
      <p className="text-[10px] font-bold leading-tight uppercase tracking-wider mt-4 whitespace-pre-line" style={{ color: theme.white }}>
        {title}
      </p>
    </div>
  );
}

function TestimonialCard({ name, quote }) {
  return (
    <div className="p-5 rounded-lg border" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} fill={theme.gold} style={{ color: theme.gold }} />
        ))}
      </div>
      <p className="text-[12px] leading-relaxed italic mb-4 font-medium" style={{ color: theme.textMuted }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-[11.5px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>{name}</p>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="rounded-lg border overflow-hidden transition-all duration-300"
      style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group transition-all duration-200"
      >
        <span className="text-[12.5px] font-bold tracking-wide transition-colors group-hover:text-amber-400" style={{ color: theme.white }}>
          {question}
        </span>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center border transition-all flex-shrink-0"
          style={{ borderColor: theme.border, backgroundColor: theme.panel }}
        >
          {isOpen ? <Minus size={12} style={{ color: theme.gold }} /> : <Plus size={12} style={{ color: theme.gold }} />}
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 border-t" : "max-h-0"}`} style={{ borderColor: theme.border }}>
        <p className="p-5 text-[12px] leading-relaxed" style={{ color: theme.textMuted }}>{answer}</p>
      </div>
    </div>
  );
}

// ---------- Page ----------

export default function AlphaMatrixPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.white;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? -1 : index);

  return (
    <div className="min-h-screen font-sans selection:bg-amber-600 selection:text-white" style={{ backgroundColor: theme.bg }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ backgroundColor: "rgba(7,13,24,0.92)", borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-md flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
              style={{ borderColor: theme.gold, backgroundColor: theme.panel }}
            >
              <Shield size={20} style={{ color: theme.gold }} fill="none" strokeWidth={1.75} />
            </div>
            <div className="leading-tight">
              <p className="text-[14px] md:text-[15px] font-black tracking-wide uppercase" style={{ color: theme.white }}>
                ALPHA MATRIX
              </p>
              <p className="text-[7.5px] md:text-[8.5px] font-bold tracking-[0.28em]" style={{ color: theme.gold }}>
                DEFENCE SYSTEMS
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href, hasDropdown }) => (
              <a
                key={label}
                href={href}
                className="text-[12px] font-black uppercase tracking-wider transition-colors hover:text-amber-400"
                style={{ color: theme.textMuted }}
              >
                <span className="flex items-center gap-1">
                  {label}
                  {hasDropdown && <ChevronDown size={13} style={{ color: theme.gold }} />}
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-3 rounded-md text-[11px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] border"
            style={{ borderColor: theme.gold, color: theme.gold, backgroundColor: "transparent" }}
          >
            Request Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative py-24 lg:py-32 px-6 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ background: "linear-gradient(180deg, rgba(7,13,24,0.95), rgba(7,13,24,0.85))" }}>
            <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(to right, rgba(7,13,24,0.97) 30%, rgba(7,13,24,0.75) 100%)" }} />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,13,24,0.6), transparent 40%)" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl w-full">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: theme.gold }}>
              Defense &amp; Security Technology
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-5 uppercase tracking-tight" style={{ color: theme.white }}>
              <span className="block mb-1">Advanced Defense &amp;</span>
              <span className="block mb-1">Security Solutions For</span>
              <span className="block" style={{ color: theme.gold }}>Mission-Critical Infrastructure</span>
            </h1>
            <p className="text-[13px] md:text-[14.5px] leading-relaxed mb-9 max-w-xl" style={{ color: theme.textMuted }}>
              Delivering innovative surveillance, perimeter protection, command &amp; control, and integrated
              defense technologies that safeguard governments, military organizations, critical infrastructure,
              and commercial facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: theme.gold, color: theme.bg }}
              >
                Explore Solutions
              </a>
              <a
                href="#contact"
                className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 border"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: theme.white }}
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-auto rounded-xl overflow-hidden border" style={{ borderColor: theme.border }}>
              <div className="w-full h-full absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(7,13,24,0.95), rgba(17,31,50,0.6))", color: theme.textFaint }}>
                Company Image Placeholder
              </div>
            </div>
            <div
              className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-12 rounded-xl border"
              style={{ backgroundColor: theme.panel, borderColor: theme.border }}
            >
              <SectionLabel>About Company</SectionLabel>
              <SectionHeading className="sm:text-3xl mb-6">Engineering Security.<br />Protecting Nations.</SectionHeading>
              <p className="text-[13px] md:text-[14px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Alpha Matrix Defence Systems is a leading defense and security technology company specializing in
                advanced surveillance systems, integrated security infrastructure, border protection, command &amp;
                control platforms, cybersecurity solutions, and intelligent defense technologies.
              </p>
              <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textFaint }}>
                We work closely with government agencies, military organizations, law enforcement, airports, ports,
                energy sectors, smart cities, and critical infrastructure operators to provide secure, scalable, and
                future-ready defense solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section id="solutions" className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel center>Our Core Solutions</SectionLabel>
            <SectionHeading center>Comprehensive Defense &amp; Security Technology</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {solutions.map((s) => (
              <SolutionCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Industries We Serve</SectionLabel>
            <SectionHeading center className="tracking-wider">Trusted Across Critical Sectors</SectionHeading>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.label} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose + Technology Expertise */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-8 rounded-xl border h-full" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Why Choose Us</SectionLabel>
              <SectionHeading className="mb-6">Why Choose Alpha Matrix Defence Systems</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mt-2">
                {whyChooseReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                    <span className="text-[11.5px] font-bold leading-tight" style={{ color: theme.textMuted }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-xl border h-full" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Technology Expertise</SectionLabel>
              <SectionHeading className="mb-3">Next-Generation Security Ecosystems</SectionHeading>
              <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                We leverage next-generation technologies to build intelligent security ecosystems.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {techExpertise.map((tech) => (
                  <TechCard key={tech.label} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section id="projects" className="py-20 lg:py-24 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel center>Featured Solutions</SectionLabel>
            <SectionHeading center>Deployed Systems, Real-World Results</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredSolutions.map((f) => (
              <FeaturedCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Our Process</SectionLabel>
            <SectionHeading center>From Assessment to Long-Term Support</SectionHeading>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-6 relative z-10 w-full">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.step} {...step} isLast={index === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionLabel center>Our Partners</SectionLabel>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-6">
            {partners.map((p) => (
              <span key={p} className="text-[15px] md:text-[17px] font-black uppercase tracking-wider" style={{ color: theme.textFaint }}>
                {p}
              </span>
            ))}
          </div>
          <p className="text-[11.5px] mt-8" style={{ color: theme.textFaint }}>
            Trusted by governments, defense organizations, security agencies, infrastructure operators, and global technology partners.
          </p>
        </div>
      </section>

      {/* Testimonials + FAQ */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-8 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Reviews</SectionLabel>
              <SectionHeading className="mb-6">Client Testimonials</SectionHeading>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>FAQ</SectionLabel>
              <SectionHeading className="mb-6">Frequently Asked Questions</SectionHeading>
              <div className="space-y-3 mt-4">
                {faqs.map(({ question, answer }, index) => (
                  <FaqItem
                    key={question}
                    question={question}
                    answer={answer}
                    isOpen={openFaqIndex === index}
                    onToggle={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 lg:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full absolute inset-0" style={{ background: `linear-gradient(90deg, rgba(7,13,24,0.95), rgba(7,13,24,0.88))` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${theme.bg} 40%, rgba(7,13,24,0.85) 100%)` }} />
        </div>
        <div className="relative z-10 mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-8 items-center justify-between w-full">
          <div className="max-w-xl">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: theme.gold }}>
              Ready to Strengthen Your Security Infrastructure?
            </p>
            <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textMuted }}>
              Partner with Alpha Matrix Defence Systems for intelligent surveillance, integrated defense
              technologies, and mission-critical security solutions tailored to your operational needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider text-center flex-1 sm:flex-initial transition-all duration-300"
              style={{ backgroundColor: theme.gold, color: theme.bg }}
            >
              Contact Us
            </a>
            <a
              href="#contact"
              className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider text-center flex-1 sm:flex-initial transition-all duration-300 border"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: theme.white }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6" style={{ backgroundColor: "#050A12" }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-4 justify-self-start">
            <Link href="#home" className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center border"
                style={{ borderColor: theme.gold, backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <Shield size={20} style={{ color: theme.gold }} strokeWidth={1.75} />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-black text-white tracking-wide uppercase">ALPHA MATRIX</p>
                <p className="text-[7.5px] font-bold tracking-[0.28em]" style={{ color: theme.gold }}>
                  DEFENCE SYSTEMS
                </p>
              </div>
            </Link>
            <p className="text-[12px] leading-relaxed mb-6" style={{ color: theme.textFaint }}>
              Engineering security, protecting nations. Advanced defense and surveillance technology for
              mission-critical infrastructure worldwide.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/5 transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon size={13} style={{ color: "#ffffff" }} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme.gold }}>
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-[12px] transition-colors duration-200 hover:text-amber-400"
                      style={{ color: theme.textFaint }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme.gold }}>
              Contact
            </h4>
            <div className="space-y-4">
              <p className="text-[12px] flex items-start gap-2.5" style={{ color: theme.textFaint }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                <span>123 Defence Avenue, Secure City, Capital District, Country</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5" style={{ color: theme.textFaint }}>
                <Phone size={14} className="flex-shrink-0" style={{ color: theme.gold }} />
                <span>+1 (800) 123-4567</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5 font-medium" style={{ color: theme.textFaint }}>
                <Mail size={14} className="flex-shrink-0" style={{ color: theme.gold }} />
                <span>info@alphamatrixdefence.com</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5" style={{ color: theme.textFaint }}>
                <Clock3 size={14} className="flex-shrink-0" style={{ color: theme.gold }} />
                <span>24/7 Operations</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:justify-end items-start">
            <div
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg border w-full h-full min-h-[150px] text-center"
              style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <Globe2 size={26} style={{ color: theme.gold }} />
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: theme.textFaint }}>
                Global Coverage
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl mt-12 pt-6 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-[11px]" style={{ color: theme.textFaint }}>
            &copy; {new Date().getFullYear()} Alpha Matrix Defence Systems. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}