"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Headphones,
  Award,
  ChevronRight,
  Mountain,
  HardHat,
  Drill,
  FlaskConical,
  Leaf,
  BarChart3,
  Truck,
  Building2,
  Globe,
  Sparkles,
} from "lucide-react";

export const theme = {
  navy: "#16243E", // NMC Deep Dark Navy
  slate: "#4A607A", // Steel Slate Blue
  gold: "#C59B27", // Rich Mineral Gold
  goldHover: "#A8821D",
  goldLight: "#DDB338",
  goldPale: "#FFFDF2",
  white: "#FFFFFF", // 100% Pure White
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
  textDark: "#16243E",
  textMuted: "#334155",
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
  { label: "Mineral Exploration & Drilling", href: "/group-companies/national-mines/services#exploration" },
  { label: "Mine Planning & Development", href: "/group-companies/national-mines/services#planning" },
  { label: "Mining Extraction Operations", href: "/group-companies/national-mines/services#extraction" },
  { label: "Mineral Processing & Refining", href: "/group-companies/national-mines/services#processing" },
  { label: "Environmental Management & ESG", href: "/group-companies/national-mines/sustainability" },
  { label: "Geological Consulting & Audits", href: "/group-companies/national-mines/services#consultancy" },
];

export const MINERALS_LIST = [
  { slug: "gold-au", name: "Gold (Au)", desc: "High-purity raw ore & refined bullion nuggets", grade: "99.4% Purity", img: "/mine gold.png", tag: "Precious Metals" },
  { slug: "copper-cu", name: "Copper (Cu)", desc: "High-grade copper concentrate & cathode sheets", grade: "28–32% Concentrate", img: "/mine copper.png", tag: "Industrial Base Metals" },
  { slug: "iron-ore-fe", name: "Iron Ore (Fe)", desc: "Magnetite & hematite lumps for steel plants", grade: "62–65% Fe Content", img: "/mine gold.png", tag: "Ferrous Minerals" },
  { slug: "coal-anthracite-bituminous", name: "Coal", desc: "Anthracite & bituminous for power & cement", grade: "6,200+ kcal/kg", img: "/mine copper.png", tag: "Energy Resources" },
  { slug: "limestone-caco3", name: "Limestone", desc: "High calcium limestone for cement & flux", grade: "94%+ CaCO3", img: "/mine gold.png", tag: "Construction Materials" },
  { slug: "gypsum-caso4", name: "Gypsum", desc: "Natural raw gypsum for plaster & wallboard", grade: "92%+ Purity", img: "/mine copper.png", tag: "Industrial Minerals" },
  { slug: "chromite-cr2o3", name: "Chromite", desc: "Metallurgical grade for refractory & alloys", grade: "46–48% Cr2O3", img: "/mine gold.png", tag: "Strategic Minerals" },
  { slug: "marble-and-onyx", name: "Marble & Onyx", desc: "Premium architectural slabs & blocks", grade: "Grade-A Dimension Stone", img: "/mine copper.png", tag: "Architectural Stones" },
  { slug: "granite-dimensional-stone", name: "Granite", desc: "Heavy-duty commercial & decorative granite", grade: "Export Quality", img: "/mine gold.png", tag: "Architectural Stones" },
  { slug: "silica-sand-sio2", name: "Silica Sand", desc: "High-purity washed sand for glass & foundry", grade: "99.2% SiO2", img: "/mine copper.png", tag: "Industrial Minerals" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.gold }}
    >
      <Mountain size={14} style={{ color: theme.gold }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase ${
        center ? "text-center" : ""
      } ${className}`}
      style={{ color: theme.navy }}
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight">
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
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        scrolled ? "shadow-md py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
        backgroundColor: theme.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/national-mines" className="flex items-center gap-3 select-none group">
          <div className="relative w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
            <Image
              src="/cropedlogo.png"
              alt="National Mines Corporation Logo"
              width={80}
              height={80}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base lg:text-lg font-black tracking-tight leading-none uppercase" style={{ color: theme.navy }}>
              National Mines
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase mt-1" style={{ color: theme.gold }}>
              Corporation (Pvt) Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11.5px] xl:text-xs font-bold tracking-wide uppercase transition-all duration-200 relative py-1 px-1 hover:text-[#C59B27] cursor-pointer"
                style={{
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.gold }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/national-mines/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Procurement Quote</span>
            <ArrowRight size={13} />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navy }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-5 py-4 space-y-2 bg-white shadow-xl"
          style={{ borderColor: theme.border }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-bold tracking-wider uppercase py-2 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: active ? `${theme.gold}15` : "transparent",
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/national-mines/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.navy }}
            >
              <span>Submit Mineral Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function NationalMinesFooter() {
  return (
    <footer
      className="border-t bg-white pt-16 pb-10"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/national-mines" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/cropedlogo.png"
                  alt="National Mines Corporation"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navy }}>
                  National Mines
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.gold }}>
                  Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              A premier mining, mineral exploration, and resource development corporation in Pakistan, extracting, processing, and supplying high-purity Gold, Copper, Iron Ore, Coal, and industrial minerals with sustainable practices.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navy }}>
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>ISO &amp; Govt Certified Mining</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navy }}>
                <Leaf size={14} style={{ color: theme.gold }} />
                <span>Zero-Harm ESG Policy</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#C59B27] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.gold }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mining Capabilities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Mining Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#C59B27] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.gold }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Desk */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Corporate Operations
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.gold }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.navy }}>
                  0092-42-38924737
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.gold }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-slate-50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.gold }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navy }}>Mineral Sourcing Desk</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct mine-to-port supply chains</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 National Mines Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/national-mines/contact" className="hover:underline hover:text-[#16243E]">
              Mining Compliance Policy
            </Link>
            <span>•</span>
            <Link href="/group-companies/national-mines/contact" className="hover:underline hover:text-[#16243E]">
              Mineral Export Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
