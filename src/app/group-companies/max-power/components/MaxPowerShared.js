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
  navy: "#0E4B7E", // Deep Electric Navy
  navyDark: "#0A3860",
  amber: "#F5A623", // Electric Amber / Gold
  amberDark: "#D88E12",
  charcoal: "#2D3748", // Slate Charcoal
  charcoalDark: "#1A202C",
  white: "#FFFFFF",
  bgLight: "#F4F7FA",
  border: "#D2E0EC",
  textMuted: "#3E4C5E",
  textLight: "#6B7A8E",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/max-power" },
  { label: "About Us", href: "/group-companies/max-power/about" },
  { label: "Services", href: "/group-companies/max-power/services" },
  { label: "Solutions & Products", href: "/group-companies/max-power/solutions" },
  { label: "Projects", href: "/group-companies/max-power/projects" },
  { label: "Sustainability", href: "/group-companies/max-power/sustainability" },
  { label: "Contact", href: "/group-companies/max-power/contact" },
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
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <Zap size={14} style={{ color: theme.amber }} />
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
        scrolled ? "shadow-md py-2" : "py-3"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
        backgroundColor: theme.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/max-power" className="flex items-center gap-3 select-none group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border p-1 bg-white shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
            <Image
              src="/max power.jpeg"
              alt="Max Power Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wide leading-tight uppercase" style={{ color: theme.navyDark }}>
              Max Power
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.amberDark }}>
              Energy &amp; Power Corporation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1 hover:text-[#0E4B7E] cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.charcoal,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.amber }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/group-companies/max-power/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Consult Power Engineer</span>
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navyDark }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-5 space-y-3 bg-white shadow-xl"
          style={{ borderColor: theme.border }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wide border-b last:border-0 cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.charcoal,
                  borderColor: "rgba(210, 224, 236, 0.7)",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={15} style={{ color: theme.textLight }} />
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/max-power/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-md cursor-pointer"
              style={{ backgroundColor: theme.navy }}
            >
              <span>Request Energy Proposal</span>
              <ArrowRight size={14} />
            </Link>
          </div>
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
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/max-power" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/max power.jpeg"
                  alt="Max Power Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Max Power
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.amberDark }}>
                  Max Power Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Delivering turnkey renewable energy generation, high-voltage transmission substation EPC (132kV–500kV), industrial Battery Energy Storage Systems (BESS), and power engineering solutions across Pakistan.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.amber }} />
                <span>PEC C-A No Limit EPC</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Zap size={14} style={{ color: theme.amber }} />
                <span>2,000+ MW Capacity</span>
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
                    className="hover:underline transition-colors hover:text-[#0E4B7E] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.amber }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Power Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Energy Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#0E4B7E] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.amber }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Power Engineering Desk
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
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>24/7 Grid Control Support</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Emergency substation &amp; plant dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Max Power Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/max-power/contact" className="hover:underline hover:text-[#0E4B7E]">
              Grid Interconnection Code
            </Link>
            <span>•</span>
            <Link href="/group-companies/max-power/contact" className="hover:underline hover:text-[#0E4B7E]">
              High-Voltage Safety Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
