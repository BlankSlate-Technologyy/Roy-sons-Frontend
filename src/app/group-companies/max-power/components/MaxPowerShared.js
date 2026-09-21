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
  CheckCircle2,
  Clock,
  Send,
  Headphones,
  Award,
  ChevronRight,
  Zap,
  Sun,
  Cpu,
  Battery,
  Radio,
  Wrench,
  Layers,
  Sparkles,
  Factory,
  Building2,
  Plug,
} from "lucide-react";

export const theme = {
  navy: "#0B2545", // Deep Navy typography & primary headings
  navyDark: "#061527",
  teal: "#0D7A82", // Modern Energy Teal
  tealDark: "#095358",
  green: "#059669", // Energy Green
  greenDark: "#047857",
  blue: "#0284C7", // High-Voltage Electric Blue
  gold: "#D97706", // Subtle warm gold accent
  goldLight: "#F59E0B",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  border: "#E2E8F0",
  borderLight: "#EDF2F7",
  textMuted: "#475569",
  textLight: "#64748B",
  // Backward compatibility aliases:
  amber: "#D97706",
  amberDark: "#B45309",
  charcoal: "#334155",
  charcoalDark: "#0F172A",
};

export const NAV_LINKS = [
  { label: "Home", shortLabel: "Home", href: "/group-companies/max-power" },
  { label: "About Us", shortLabel: "About", href: "/group-companies/max-power/about" },
  { label: "Services", shortLabel: "Services", href: "/group-companies/max-power/services" },
  { label: "Solutions & Products", shortLabel: "Solutions", href: "/group-companies/max-power/solutions" },
  { label: "Projects", shortLabel: "Projects", href: "/group-companies/max-power/projects" },
  { label: "Sustainability", shortLabel: "Sustainability", href: "/group-companies/max-power/sustainability" },
  { label: "Contact", shortLabel: "Contact", href: "/group-companies/max-power/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Utility-Scale Solar & Wind Power Generation", href: "/group-companies/max-power/services#renewable-energy" },
  { label: "Thermal, Gas & Hybrid Power Plants", href: "/group-companies/max-power/services#power-generation" },
  { label: "High-Voltage Substations & Transmission (132kV–500kV)", href: "/group-companies/max-power/services#transmission-distribution" },
  { label: "Industrial Battery Energy Storage Systems (BESS)", href: "/group-companies/max-power/services#energy-storage" },
  { label: "Electrical Switchgear & SCADA Automation", href: "/group-companies/max-power/services#electrical-engineering" },
  { label: "Plant Operations & Maintenance (O&M) Contracts", href: "/group-companies/max-power/services#operations-maintenance" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.18em] mb-4 bg-[#F8FAFC] shadow-2xs ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.teal }}
    >
      <Zap size={13} style={{ color: theme.green }} />
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
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight" style={{ color: theme.navy }}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Reusable Navbar ────────────────────────────────────────────────
export function MaxPowerNavbar() {
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
    if (href === "/group-companies/max-power") {
      return pathname === "/group-companies/max-power" || pathname === "/group-companies/max-power/";
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
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/max-power" className="flex items-center gap-2.5 select-none group py-0.5 shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
            <Image
              src="/logos/12.png"
              alt="Max Power Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] lg:text-[17.5px] font-black tracking-tight leading-none uppercase whitespace-nowrap" style={{ color: theme.navy }}>
              Max Power
            </span>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase mt-1 whitespace-nowrap" style={{ color: theme.teal }}>
              Energy &amp; Power Infrastructure
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Bold & highly legible font */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] xl:text-[16px] font-bold tracking-normal uppercase transition-all duration-200 relative py-1.5 px-0.5 cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.teal : theme.navy,
                }}
              >
                <span>{link.label}</span>
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full"
                    style={{ backgroundColor: theme.teal }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <RoysonsPortalButton />
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
          className="lg:hidden border-t px-5 py-4 space-y-1.5 bg-white shadow-xl"
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
                  backgroundColor: active ? `${theme.teal}14` : "transparent",
                  color: active ? theme.teal : theme.navy,
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
export function MaxPowerFooter() {
  return (
    <footer
      className="border-t bg-white pt-16 pb-10"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.white,
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/max-power" className="flex items-center gap-3 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border shadow-2xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/12.png"
                  alt="Max Power Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navy }}>
                  Max Power
                </p>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: theme.teal }}>
                  Max Power Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Delivering turnkey utility-scale renewable energy generation, high-voltage transmission substation EPC (132kV–500kV), industrial Battery Energy Storage Systems (BESS), and power engineering solutions across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-[#F8FAFC]" style={{ borderColor: theme.border, color: theme.navy }}>
                <ShieldCheck size={14} style={{ color: theme.green }} />
                <span>PEC C-A No Limit EPC</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-[#F8FAFC]" style={{ borderColor: theme.border, color: theme.navy }}>
                <Zap size={14} style={{ color: theme.teal }} />
                <span>2,000+ MW Capacity</span>
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
                    className="hover:underline transition-colors flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.teal }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Power Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Energy Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.teal }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Engineering Desk
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.teal }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.teal }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.navy }}>
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.teal }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-[#F8FAFC] flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.teal }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navy }}>24/7 Grid Control Support</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Emergency substation &amp; plant dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Max Power Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/max-power/contact" className="hover:underline" style={{ color: theme.teal }}>
              Grid Interconnection Code
            </Link>
            <span>•</span>
            <Link href="/group-companies/max-power/contact" className="hover:underline" style={{ color: theme.teal }}>
              High-Voltage Safety Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
