"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoysonsPortalButton from "@/components/ui/RoysonsPortalButton";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Mountain,
  Headphones,
  HardHat,
  Users,
  Compass,
  FlaskConical,
  Leaf,
  Award,
} from "lucide-react";

export const theme = {
  navy: "#0B1B2B",          // NMC Dark Navy
  navyDark: "#07111C",      // Deepest Midnight Navy
  forestGreen: "#0F3826",   // Deep Forest Green from logo
  forestGreenMid: "#155238",// Medium Forest Green
  gold: "#C59B27",          // Warm Mineral Gold / Copper
  goldHover: "#A8821D",
  goldLight: "#DDB338",
  goldPale: "#FDF9EE",      // Subtle gold tint
  black: "#0A1118",         // Pure Industrial Black
  white: "#FFFFFF",         // Pure White
  offWhite: "#F8FAFC",      // Crisp background
  border: "#E2E8F0",        // Crisp subtle border
  borderLight: "#EEF2F6",
  borderDark: "#1E293B",
  textDark: "#0B1B2B",
  textMuted: "#475569",     // Refined slate
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/national-mines" },
  { label: "About Us", href: "/group-companies/national-mines/about" },
  { label: "Services", href: "/group-companies/national-mines/services" },
  { label: "Minerals", href: "/group-companies/national-mines/minerals" },
  { label: "Industries", href: "/group-companies/national-mines/industries" },
  { label: "Sustainability", href: "/group-companies/national-mines/sustainability" },
  { label: "Contact", href: "/group-companies/national-mines/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Mining Operations", href: "/group-companies/national-mines/services#operations" },
  { label: "Mineral Exploration", href: "/group-companies/national-mines/services#exploration" },
  { label: "Mine Development", href: "/group-companies/national-mines/services#development" },
  { label: "Resource Management", href: "/group-companies/national-mines/services#resource-mgmt" },
  { label: "Geological Services", href: "/group-companies/national-mines/services#geological" },
  { label: "Mineral Processing", href: "/group-companies/national-mines/services#processing" },
];

export const FOOTER_MINERALS = [
  { label: "Copper (Cu)", href: "/group-companies/national-mines/minerals/copper-cu" },
  { label: "Gold (Au)", href: "/group-companies/national-mines/minerals/gold-au" },
  { label: "Himalayan Pink Salt", href: "/group-companies/national-mines/minerals/himalayan-pink-salt-nacl" },
  { label: "Iron Ore (Fe)", href: "/group-companies/national-mines/minerals/iron-ore-fe" },
  { label: "Coal", href: "/group-companies/national-mines/minerals/coal-anthracite-bituminous" },
  { label: "Chromite (Cr2O3)", href: "/group-companies/national-mines/minerals/chromite-cr2o3" },
];

export const MINERALS_LIST = [
  { slug: "copper-cu", name: "Copper (Cu)", desc: "Porphyry copper concentrate & cathode sheets from the Chagai belt", grade: "28–32% Concentrate", img: "/mine copper.png", tag: "Industrial Base Metals" },
  { slug: "gold-au", name: "Gold (Au)", desc: "High-purity raw ore & certified doré bullion from Tethyan veins", grade: "99.4% Purity", img: "/mine gold.png", tag: "Precious Metals" },
  { slug: "himalayan-pink-salt-nacl", name: "Himalayan Pink Salt", desc: "World-renowned Khewra & Salt Range crystalline rock salt", grade: "98%+ NaCl Purity", img: "/national-mines/mineral-pink-salt.png", tag: "Evaporite Minerals" },
  { slug: "iron-ore-fe", name: "Iron Ore (Fe)", desc: "Magnetite & hematite lumps from Chiniot & Kalabagh reserves", grade: "62–65% Fe Content", img: "/national-mines/mineral-iron-ore.png", tag: "Ferrous Minerals" },
  { slug: "coal-anthracite-bituminous", name: "Coal", desc: "Thar lignite, Salt Range bituminous & thermal steam coal", grade: "6,200+ kcal/kg", img: "/national-mines/mineral-coal.png", tag: "Energy Resources" },
  { slug: "chromite-cr2o3", name: "Chromite (Cr2O3)", desc: "High Cr:Fe metallurgical ore from Muslim Bagh ophiolites", grade: "46–48% Cr2O3", img: "/national-mines/mineral-chromite.png", tag: "Strategic Minerals" },
  { slug: "limestone-caco3", name: "Limestone (CaCO3)", desc: "High-calcium Margalla & Salt Range limestone for cement & flux", grade: "94%+ CaCO3", img: "/national-mines/mineral-limestone.png", tag: "Construction Materials" },
  { slug: "gypsum-caso4", name: "Gypsum (CaSO4)", desc: "Natural crystalline Daudkhel & Kohat gypsum for plaster & cement", grade: "92%+ Purity", img: "/national-mines/mineral-gypsum.png", tag: "Industrial Minerals" },
  { slug: "marble-and-onyx", name: "Marble & Green Onyx", desc: "Translucent Chagai jade green onyx & Ziarat architectural stone", grade: "Grade-A Export", img: "/national-mines/mineral-marble-onyx.png", tag: "Architectural Stones" },
  { slug: "granite-dimensional-stone", name: "Granite", desc: "Heavy-duty Nagar Parkar & Mansehra igneous granite blocks", grade: "Export Quality", img: "/national-mines/mineral-granite.png", tag: "Architectural Stones" },
  { slug: "silica-sand-sio2", name: "Silica Sand (SiO2)", desc: "Low-iron double-washed Mianwali sand for solar glass & foundry", grade: "99.2% SiO2", img: "/national-mines/mineral-silica-sand.png", tag: "Industrial Minerals" },
];

export const MINING_LEADERSHIP_TEAM = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    badge: "Executive Governance",
    credentials: "Founder, Roy & Sons Group",
    image: "/logos/chairman.jpeg",
    bio: "Steering sovereign mineral concessions, international joint ventures, and SIFC-aligned mining investments across Balochistan, Punjab, and Sindh with over 25 years of industrial leadership.",
    tags: ["Sovereign Concessions", "SIFC Alliances", "Corporate Vision"],
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director, Concessions & Global Trade",
    badge: "Commercial & Export",
    credentials: "Global Off-Take & Port Logistics",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    bio: "Directing commercial mineral off-take agreements, Gwadar and Karachi port export operations, institutional financing, and strategic partnerships with global metallurgical smelters.",
    tags: ["FOB/CIF Off-Take", "Port Logistics", "Joint Ventures"],
  },
  {
    name: "Dr. Ahsan Sardar",
    role: "Group Director, Strategy & Institutional Affairs",
    badge: "Board of Directors",
    credentials: "LCCI Executive · Strategic Alliances",
    image: "/logos/ashan sardar.jpeg",
    bio: "Leading federal and provincial regulatory alignment, institutional chambers liaison, ESG governance compliance, and industrial supply-chain integration across Pakistan's mineral belts.",
    tags: ["Regulatory Affairs", "ESG Governance", "Industrial Growth"],
  },
  {
    name: "Engr. Salman Qureshi",
    role: "Director, Mining Engineering & Field Operations",
    badge: "Chief Operations Lead",
    credentials: "PE Mining · ISO 45001 Lead",
    image: "/team/project_engineer.jpg",
    bio: "Overseeing open-pit blast engineering, JORC-aligned geological core exploration, froth flotation metallurgy, dry-stack tailings, and 92% closed-loop process water conservation.",
    tags: ["Open-Pit Engineering", "Beneficiation", "Zero-Harm Safety"],
  },
];

const TECHNICAL_DISCIPLINES = [
  { icon: Compass, count: "45+", label: "Exploration Geologists & GIS Mappers" },
  { icon: HardHat, count: "180+", label: "Certified Mining & Blast Engineers" },
  { icon: FlaskConical, count: "60+", label: "Metallurgists & XRF Assay Chemists" },
  { icon: Leaf, count: "35+", label: "HSE, ESG & Land Reclamation Officers" },
];

export function NationalMinesTeamSection({
  title = "Executive Leadership & Mining Council",
  subtitle = "Guided by visionary corporate leadership, veteran mining engineers, and geological specialists advancing Pakistan's mineral wealth under global JORC, GSP, and ISO safety standards.",
  bgClass = "bg-[#F8FAFC]",
  showDisciplines = false,
}) {
  return (
    <section
      id="leadership-team"
      className={`py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b ${bgClass}`}
      style={{ borderColor: theme.border }}
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-9 sm:mb-10">
          <div className="max-w-3xl">
            <SectionLabel>Leadership &amp; Technical Governance</SectionLabel>
            <SectionHeading className="mb-3">{title}</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              {subtitle}
            </p>
          </div>
          <Link
            href="/group-companies/national-mines/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 shrink-0 w-fit cursor-pointer"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Connect With Our Leadership</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 4-Card Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINING_LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.name}
              className="mine-card group rounded-2xl overflow-hidden bg-white flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="mine-img-wrapper relative h-72 sm:h-[300px] w-full bg-slate-900">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/90 via-[#07111C]/20 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 border shadow-xs"
                      style={{ color: theme.navy, borderColor: theme.border }}
                    >
                      {member.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 tracking-wide">
                      <Award size={13} />
                      <span>{member.credentials}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3
                    className="text-xl font-bold tracking-tight leading-snug mb-1 group-hover:text-[#C59B27] transition-colors"
                    style={{ color: theme.navy }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-semibold leading-snug mb-3"
                    style={{ color: theme.forestGreenMid }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="px-5 pb-5 pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: theme.borderLight }}>
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-50 border text-slate-700"
                    style={{ borderColor: theme.border }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Expanded Technical Workforce Strip (shown on About page) */}
        {showDisciplines && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNICAL_DISCIPLINES.map((disc) => {
              const Icon = disc.icon;
              return (
                <div
                  key={disc.label}
                  className="rounded-xl p-4 border bg-white flex items-center gap-3.5 shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme.gold}18` }}
                  >
                    <Icon size={20} style={{ color: theme.gold }} />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold leading-none" style={{ color: theme.navy }}>
                      {disc.count}
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium mt-1 leading-snug" style={{ color: theme.textMuted }}>
                      {disc.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionLabel({ children, center, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-3 ${
        center ? "mx-auto" : ""
      } ${dark ? "bg-white/10 border-white/20 text-amber-300" : "bg-slate-50/90"}`}
      style={dark ? undefined : { borderColor: theme.border, color: theme.forestGreen }}
    >
      <Mountain size={14} style={{ color: theme.gold }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center, dark = false }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.18] ${
        center ? "text-center" : ""
      } ${className}`}
      style={{ color: dark ? "#FFFFFF" : theme.navy }}
    >
      {children}
    </h2>
  );
}

export function AnimatedCounter({ targetValue, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const numericTarget = parseInt(String(targetValue).replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = String(targetValue).replace(/[0-9]/g, "");

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeProgress * numericTarget));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-extrabold text-3xl sm:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Reusable Navbar ────────────────────────────────────────────────
export function NationalMinesNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/national-mines") {
      return pathname === "/group-companies/national-mines" || pathname === "/group-companies/national-mines/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-2"
          : "bg-white py-2.5 sm:py-3"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/group-companies/national-mines"
          className="flex items-center gap-3 select-none group cursor-pointer shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
            <Image
              src="/cropedlogo.png"
              alt="National Mines Corporation Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-black tracking-tight leading-none"
              style={{ color: theme.navy }}
            >
              National Mines
            </span>
            <span
              className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase mt-1"
              style={{ color: theme.gold }}
            >
              Corporation (Pvt) Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — NO BUTTONS */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] xl:text-[16px] font-bold tracking-wide transition-colors relative py-1.5 px-0.5 cursor-pointer hover:text-[#C59B27] whitespace-nowrap"
                style={{
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2.5px] rounded-full"
                    style={{ backgroundColor: theme.gold }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <RoysonsPortalButton />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navy }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-5 py-3 space-y-1 bg-white shadow-lg"
          style={{ borderColor: theme.border }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-bold py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
                style={{
                  backgroundColor: active ? `${theme.gold}12` : "transparent",
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function NationalMinesFooter() {
  return (
    <footer
      className="border-t bg-white pt-12 pb-7"
      style={{
        borderColor: theme.border,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/national-mines" className="flex items-center gap-3 mb-4 select-none cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/cropedlogo.png"
                  alt="National Mines Corporation"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-extrabold leading-tight" style={{ color: theme.navy }}>
                  National Mines
                </p>
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: theme.gold }}>
                  Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
              A leading Pakistani natural resource exploration, heavy mineral extraction, and metallurgical processing enterprise operating across Chagai, Salt Range, Thar, and Muslim Bagh mineral belts.
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold bg-slate-50" style={{ borderColor: theme.border, color: theme.forestGreen }}>
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>Certified Mineral Assays</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold bg-slate-50" style={{ borderColor: theme.border, color: theme.forestGreen }}>
                <HardHat size={14} style={{ color: theme.forestGreen }} />
                <span>ISO 45001 Zero-Harm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C59B27] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={14} style={{ color: theme.gold }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Core Operations
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:text-[#C59B27] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={14} style={{ color: theme.gold }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Headquarters Desk
            </h4>
            <div className="space-y-2.5 text-sm" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                <span>Executive Mineral Complex, Service Lane Ring Road, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.forestGreen }} />
                <a href="tel:+923218431665" className="hover:underline font-semibold" style={{ color: theme.navy }}>
                  +92 321 8431665 / +92 42 38924737
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.forestGreen }} />
                <a href="mailto:info@roysons.org" className="hover:underline font-medium">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl border bg-slate-50/80 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={22} style={{ color: theme.gold }} className="shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase" style={{ color: theme.navy }}>Mineral Trading Desk</p>
                <p className="text-xs font-normal" style={{ color: theme.textMuted }}>Bulk allocation &amp; FOB Gwadar/Karachi export</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: theme.textLight }}>
          <p>&copy; {new Date().getFullYear()} National Mines Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/group-companies/national-mines/contact" className="hover:underline hover:text-[#0B1B2B]">
              Mineral Concession Terms
            </Link>
            <span>•</span>
            <Link href="/group-companies/national-mines/contact" className="hover:underline hover:text-[#0B1B2B]">
              Responsible Sourcing Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
