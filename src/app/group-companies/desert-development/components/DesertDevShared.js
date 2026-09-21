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
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Headphones,
  Award,
  ChevronRight,
  Trees,
  Globe,
  Droplets,
  Sun,
  Wind,
  Layers,
  Compass,
  HardHat,
  Sprout,
  BarChart3,
  Building2,
  Leaf,
  Sparkles,
} from "lucide-react";

export const theme = {
  primary: "#1B4D3E", // Forest / Desert Green
  darkGreen: "#0D3025",
  darkerGreen: "#071C15",
  emerald: "#2D7D62", // Vibrant Emerald Accent
  emeraldHover: "#22634D",
  sand: "#E2B774", // Warm Sand Accent
  white: "#FFFFFF",
  cream: "#F7FBF9",
  border: "#D4E5DD",
  textMuted: "#425C52",
  textLight: "#5E7D72",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/desert-development" },
  { label: "About Us", href: "/group-companies/desert-development/about" },
  { label: "Services", href: "/group-companies/desert-development/services" },
  { label: "Sectors & Solutions", shortLabel: "Solutions", href: "/group-companies/desert-development/solutions" },
  { label: "Projects", href: "/group-companies/desert-development/projects" },
  { label: "Sustainability", href: "/group-companies/desert-development/sustainability" },
  { label: "Contact", href: "/group-companies/desert-development/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Scientific Desert Rehabilitation & Land Reclamation", href: "/group-companies/desert-development/services#desert-rehabilitation" },
  { label: "Arid Zone Sustainable Infrastructure & Earthworks", href: "/group-companies/desert-development/services#sustainable-infrastructure" },
  { label: "Deep Aquifer & Solar Drip Water Management", href: "/group-companies/desert-development/services#water-management" },
  { label: "Large-Scale Afforestation & Shelterbelt Green Belts", href: "/group-companies/desert-development/services#afforestation" },
  { label: "Desert Renewable Solar & Wind Energy Development", href: "/group-companies/desert-development/services#renewable-energy" },
  { label: "Environmental Impact Assessments & GIS Topography", href: "/group-companies/desert-development/services#environmental-consultancy" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-emerald-50/60 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.primary }}
    >
      <Sprout size={14} style={{ color: theme.emerald }} />
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
      style={{ color: theme.darkGreen }}
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

    const node = elementRef.current;
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
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Reusable Navbar ────────────────────────────────────────────────
export function DesertDevNavbar() {
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
    if (href === "/group-companies/desert-development") {
      return pathname === "/group-companies/desert-development" || pathname === "/group-companies/desert-development/";
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/group-companies/desert-development" className="flex items-center gap-2.5 sm:gap-3 select-none group flex-shrink-0 mr-4">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/14.png"
              alt="Desert Development Corporation Logo"
              width={70}
              height={70}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-base lg:text-[17px] xl:text-[18px] font-black tracking-tight leading-none uppercase" style={{ color: theme.darkGreen }}>
              Desert Development
            </span>
            <span className="text-[9px] sm:text-[9.5px] lg:text-[10px] font-bold tracking-widest uppercase mt-1" style={{ color: theme.emerald }}>
              Corporation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 2xl:gap-4 flex-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="desertdev-nav-link text-[14px] xl:text-[15.5px] 2xl:text-[16px] font-bold tracking-normal uppercase transition-all duration-200 relative py-1.5 px-1.5 xl:px-2.5 hover:text-[#1B4D3E] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.primary : theme.darkGreen,
                }}
              >
                {link.shortLabel ? (
                  <>
                    <span className="inline xl:hidden">{link.shortLabel}</span>
                    <span className="hidden xl:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.emerald }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <RoysonsPortalButton />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer flex-shrink-0"
            style={{ borderColor: theme.border, color: theme.darkGreen }}
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
                className="block text-[15px] sm:text-[16px] font-bold tracking-wide uppercase py-2.5 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: active ? `${theme.primary}12` : "transparent",
                  color: active ? theme.primary : theme.darkGreen,
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
export function DesertDevFooter() {
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
            <Link href="/group-companies/desert-development" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/14.png"
                  alt="Desert Development & Rehabilitation Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.darkGreen }}>
                  Desert Development
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.emerald }}>
                  Corporation
                </p>
                <p className="text-[9px] font-medium tracking-wider uppercase mt-0.5 text-emerald-800">
                  Land Development &amp; Environmental Solutions
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Transforming arid landscapes into sustainable opportunities. Specializing in scientific desert rehabilitation, land reclamation, sustainable water management, afforestation green belts, and renewable solar energy integration across 30+ arid regions.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/50" style={{ borderColor: theme.border, color: theme.darkGreen }}>
                <ShieldCheck size={14} style={{ color: theme.emerald }} />
                <span>UNEP &amp; ISO 14001 Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/50" style={{ borderColor: theme.border, color: theme.darkGreen }}>
                <Trees size={14} style={{ color: theme.emerald }} />
                <span>5M+ Trees Planted</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.darkGreen }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#1B4D3E] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.emerald }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Rehabilitation Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.darkGreen }}>
              Engineering Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#1B4D3E] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.emerald }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.darkGreen }}>
              Environmental Operations Desk
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.primary }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.darkGreen }}>
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.primary }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-emerald-50/50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.primary }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.darkGreen }}>Environmental Advisory</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct arid land engineering consultation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Desert Development &amp; Rehabilitation. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/desert-development/contact" className="hover:underline hover:text-[#1B4D3E]">
              UN Convention to Combat Desertification (UNCCD)
            </Link>
            <span>•</span>
            <Link href="/group-companies/desert-development/contact" className="hover:underline hover:text-[#1B4D3E]">
              ISO 14001 Environmental Stewardship
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
