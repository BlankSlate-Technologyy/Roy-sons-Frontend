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
  Sparkles,
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
  { label: "Iron Ore (Fe)", href: "/group-companies/national-mines/minerals/iron-ore-fe" },
  { label: "Coal", href: "/group-companies/national-mines/minerals/coal-anthracite-bituminous" },
  { label: "Limestone", href: "/group-companies/national-mines/minerals/limestone-caco3" },
  { label: "Gypsum", href: "/group-companies/national-mines/minerals/gypsum-caso4" },
];

export const MINERALS_LIST = [
  { slug: "gold-au", name: "Gold (Au)", desc: "High-purity raw ore & refined doré bullion", grade: "99.4% Purity", img: "/mine gold.png", tag: "Precious Metals" },
  { slug: "copper-cu", name: "Copper (Cu)", desc: "High-grade copper concentrate & cathode sheets", grade: "28–32% Concentrate", img: "/mine copper.png", tag: "Industrial Base Metals" },
  { slug: "iron-ore-fe", name: "Iron Ore (Fe)", desc: "Magnetite & hematite lumps for steel plants", grade: "62–65% Fe Content", img: "/mine gold.png", tag: "Ferrous Minerals" },
  { slug: "coal-anthracite-bituminous", name: "Coal", desc: "Anthracite & bituminous for power & cement", grade: "6,200+ kcal/kg", img: "/mine copper.png", tag: "Energy Resources" },
  { slug: "limestone-caco3", name: "Limestone", desc: "High-calcium limestone for cement & flux", grade: "94%+ CaCO3", img: "/mine gold.png", tag: "Construction Materials" },
  { slug: "gypsum-caso4", name: "Gypsum", desc: "Natural raw gypsum for plaster & wallboard", grade: "92%+ Purity", img: "/mine copper.png", tag: "Industrial Minerals" },
  { slug: "chromite-cr2o3", name: "Chromite", desc: "Metallurgical grade for refractory & alloys", grade: "46–48% Cr2O3", img: "/mine gold.png", tag: "Strategic Minerals" },
  { slug: "marble-and-onyx", name: "Marble & Onyx", desc: "Premium architectural slabs & blocks", grade: "Grade-A Dimension Stone", img: "/mine copper.png", tag: "Architectural Stones" },
  { slug: "granite-dimensional-stone", name: "Granite", desc: "Heavy-duty commercial & decorative granite", grade: "Export Quality", img: "/mine gold.png", tag: "Architectural Stones" },
  { slug: "silica-sand-sio2", name: "Silica Sand", desc: "High-purity washed sand for glass & foundry", grade: "99.2% SiO2", img: "/mine copper.png", tag: "Industrial Minerals" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-wider uppercase mb-3.5 bg-slate-50/80 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.forestGreen }}
    >
      <Mountain size={13} style={{ color: theme.gold }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
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
    <span ref={elementRef} className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Reusable Navbar ────────────────────────────────────────────────
// Rules:
// - Reduced navbar font size (13px - 14px)
// - Clean professional typography
// - Navigation: Home | About Us | Services | Minerals | Industries | Sustainability | Contact
// - REMOVE ALL unnecessary navbar buttons (Zero buttons)
// - Keep existing logo clean and properly proportioned (/cropedlogo.png)
// - Sticky with smooth background transition on scroll
// - Clean mobile hamburger menu with no buttons
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
              className="text-base sm:text-lg font-black tracking-tight leading-none"
              style={{ color: theme.navy }}
            >
              National Mines
            </span>
            <span
              className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase mt-1"
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
                className="text-[15px] xl:text-[16px] font-bold tracking-wide transition-colors relative py-1.5 px-0.5 cursor-pointer hover:opacity-85 whitespace-nowrap"
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
            className="p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navy }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer — NO BUTTONS */}
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
                className="block text-[15px] font-bold py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
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
      className="border-t bg-white pt-14 pb-8"
      style={{
        borderColor: theme.border,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/national-mines" className="flex items-center gap-3 mb-4 select-none cursor-pointer">
              <div className="w-11 h-11 rounded-lg bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/cropedlogo.png"
                  alt="National Mines Corporation"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm sm:text-[15px] font-bold leading-tight" style={{ color: theme.navy }}>
                  National Mines
                </p>
                <p className="text-[10px] font-medium tracking-[0.16em] uppercase" style={{ color: theme.gold }}>
                  Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] font-normal leading-relaxed mb-5" style={{ color: theme.textMuted }}>
              A leading exploration, heavy mineral extraction, and metallurgical processing enterprise. Fueling domestic infrastructure, heavy manufacturing, and global commodity export supply chains.
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium bg-slate-50" style={{ borderColor: theme.border, color: theme.forestGreen }}>
                <ShieldCheck size={13} style={{ color: theme.gold }} />
                <span>Certified Mineral Assays</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium bg-slate-50" style={{ borderColor: theme.border, color: theme.forestGreen }}>
                <HardHat size={13} style={{ color: theme.forestGreen }} />
                <span>Zero-Harm Safety Mandate</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Navigation
            </h4>
            <ul className="space-y-2 text-[13px]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors flex items-center gap-1.5 cursor-pointer"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.gold }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Core Operations
            </h4>
            <ul className="space-y-2 text-[13px]">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors flex items-center gap-1.5 cursor-pointer"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.gold }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3.5" style={{ color: theme.navy }}>
              Headquarters Desk
            </h4>
            <div className="space-y-2.5 text-[13px]" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                <span>Executive Mineral Complex, Service Lane Ring Road, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="flex-shrink-0" style={{ color: theme.forestGreen }} />
                <a href="tel:+923218431665" className="hover:underline font-medium" style={{ color: theme.navy }}>
                  +92 321 8431665 / +92 42 38924737
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="flex-shrink-0" style={{ color: theme.forestGreen }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl border bg-slate-50/60 flex items-center gap-2.5" style={{ borderColor: theme.border }}>
              <Headphones size={20} style={{ color: theme.gold }} />
              <div>
                <p className="text-[11px] font-semibold uppercase" style={{ color: theme.navy }}>Mineral Trading Desk</p>
                <p className="text-[11px] font-normal" style={{ color: theme.textMuted }}>Bulk allocation &amp; FOB export contracts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: theme.textLight }}>
          <p>&copy; {new Date().getFullYear()} National Mines Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
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
