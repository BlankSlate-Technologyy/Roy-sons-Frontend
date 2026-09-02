"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
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
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  HardHat,
  Sparkles,
} from "lucide-react";

export const theme = {
  navy: "#0E2A47", // Official Walton Dark Navy Blue
  navyDark: "#081B30",
  navySoft: "#1A3C60",
  gold: "#C5A059", // Official Walton Warm Gold
  goldHover: "#A6823B",
  charcoal: "#3A4E63", // Slate Text
  charcoalDark: "#1E2A3A",
  white: "#FFFFFF",
  bgLight: "#F4F7FA",
  border: "#D8E2EC",
  textMuted: "#3A4E63",
  textLight: "#657B94",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/walton-consultants-contracting" },
  { label: "About", href: "/group-companies/walton-consultants-contracting/about" },
  { label: "Services", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Solutions", href: "/group-companies/walton-consultants-contracting/solutions" },
  { label: "Projects", href: "/group-companies/walton-consultants-contracting/projects" },
  { label: "Sustainability", href: "/group-companies/walton-consultants-contracting/sustainability" },
  { label: "Contact", href: "/group-companies/walton-consultants-contracting/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Civil Engineering & Structural Superstructures", href: "/group-companies/walton-consultants-contracting/services/civil-engineering-structural-superstructures" },
  { label: "Turnkey EPC Heavy Industrial Construction", href: "/group-companies/walton-consultants-contracting/services/turnkey-epc-heavy-industrial-projects" },
  { label: "Highways, Bridges & Transportation Corridors", href: "/group-companies/walton-consultants-contracting/services/highways-bridges-transportation-corridors" },
  { label: "Industrial Warehouses & Steel Fabrication", href: "/group-companies/walton-consultants-contracting/services/pre-engineered-buildings-peb-warehouses" },
  { label: "Project Management & BIM Quality Assurance", href: "/group-companies/walton-consultants-contracting/services/project-management-bim-qa-qc-supervision" },
  { label: "Engineering Consultancy & Feasibility Studies", href: "/group-companies/walton-consultants-contracting/services/engineering-consultancy-feasibility-studies" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <HardHat size={14} style={{ color: theme.gold }} />
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
      style={{ color: theme.navyDark }}
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
export function WaltonNavbar() {
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
    if (href === "/group-companies/walton-consultants-contracting") {
      return pathname === "/group-companies/walton-consultants-contracting" || pathname === "/group-companies/walton-consultants-contracting/";
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
      <div className="mx-auto max-w-full px-2 sm:px-4 lg:px-4 xl:px-6 2xl:max-w-screen-2xl 2xl:px-8 flex items-center justify-between gap-1.5 lg:gap-2 xl:gap-4">
        {/* Brand Logo */}
        <Link href="/group-companies/walton-consultants-contracting" className="flex items-center gap-2 sm:gap-2.5 select-none group shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 xl:w-11 xl:h-11 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/5.png"
              alt="Walton Consultants &amp; Contracting Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-[13px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] font-black tracking-tight leading-tight uppercase whitespace-nowrap" style={{ color: theme.navyDark }}>
              Walton Consultants
            </span>
            <span className="text-[7.5px] sm:text-[8px] lg:text-[8px] xl:text-[9px] 2xl:text-[9.5px] font-bold tracking-widest uppercase mt-0.5 whitespace-nowrap" style={{ color: theme.gold }}>
              Engineering &amp; Contracting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] font-extrabold tracking-wide uppercase transition-all duration-200 relative py-1 px-1 xl:px-1.5 2xl:px-2 hover:text-[#0E2A47] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.navy : theme.charcoal,
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
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/group-companies/walton-consultants-contracting/contact"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-lg text-[9.5px] xl:text-[10.5px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap shrink-0"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Engineering Desk</span>
            <ArrowRight size={12} className="shrink-0" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navyDark }}
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
                  backgroundColor: active ? `${theme.navy}12` : "transparent",
                  color: active ? theme.navy : theme.navyDark,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/walton-consultants-contracting/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.navy }}
            >
              <span>Consult Chief Engineer</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function WaltonFooter() {
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
            <Link href="/group-companies/walton-consultants-contracting" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/walton.jpeg"
                  alt="Walton Consultants Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Walton Consultants
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.gold }}>
                  Walton Consultants &amp; Contracting (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Delivering turnkey civil engineering, mega infrastructure construction, high-rise commercial superstructures, industrial factories, and EPC project management across Pakistan.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>PEC C-A (No Limit) Constructor</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Building2 size={14} style={{ color: theme.gold }} />
                <span>350+ Completed Projects</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#0E2A47] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.gold }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Engineering Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Engineering Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#0E2A47] flex items-center gap-1.5"
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
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Construction &amp; EPC Desk
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.navy }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.navyDark }}>
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-slate-50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.navy }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>Civil Site Supervision Desk</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct project manager coordination</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Walton Consultants &amp; Contracting (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/walton-consultants-contracting/contact" className="hover:underline hover:text-[#0E2A47]">
              PEC Code of Ethics &amp; Standards
            </Link>
            <span>•</span>
            <Link href="/group-companies/walton-consultants-contracting/contact" className="hover:underline hover:text-[#0E2A47]">
              BIM Structural Safety Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
