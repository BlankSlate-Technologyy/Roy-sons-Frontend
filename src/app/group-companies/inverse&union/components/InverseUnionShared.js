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
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
  Sparkles,
} from "lucide-react";

export const theme = {
  navy: "#0B2545", // Deep Smart Navy
  navyDark: "#071A33",
  blue: "#0080FF", // Electric Blue
  blueHover: "#0066CC",
  cyan: "#00D2C8", // Cyan Teal Highlight
  white: "#FFFFFF",
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#4A5568",
  textLight: "#718096",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/inverse&union" },
  { label: "About Us", href: "/group-companies/inverse&union/about" },
  { label: "Services", href: "/group-companies/inverse&union/services" },
  { label: "Sectors & Solutions", href: "/group-companies/inverse&union/solutions" },
  { label: "Projects", href: "/group-companies/inverse&union/projects" },
  { label: "Sustainability", href: "/group-companies/inverse&union/sustainability" },
  { label: "Contact", href: "/group-companies/inverse&union/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Global Sourcing & Direct OEM Procurement", href: "/group-companies/inverse&union/services#global-sourcing" },
  { label: "Import & Export Trade Management", href: "/group-companies/inverse&union/services#import-export" },
  { label: "Multi-Modal Freight Logistics (Sea, Air & Land)", href: "/group-companies/inverse&union/services#freight-logistics" },
  { label: "Trade Compliance, HS Codes & Customs Clearance", href: "/group-companies/inverse&union/services#trade-compliance" },
  { label: "Bulk Industrial & Agricultural Commodity Sourcing", href: "/group-companies/inverse&union/services#commodity-sourcing" },
  { label: "Supply Chain Risk Management & Trade Finance", href: "/group-companies/inverse&union/services#risk-management" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-sky-50/60 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <Globe size={14} style={{ color: theme.blue }} />
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
export function InverseUnionNavbar() {
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
    if (href === "/group-companies/inverse&union") {
      return pathname === "/group-companies/inverse&union" || pathname === "/group-companies/inverse&union/";
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
        <Link href="/group-companies/inverse&union" className="flex items-center gap-3 select-none group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border p-1 bg-white shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
            <Image
              src="/logos/11.png"
              alt="Inverse & Union Trading Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wide leading-tight uppercase" style={{ color: theme.navyDark }}>
              Inverse &amp; Union Trading
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.blue }}>
              International Procurement &amp; Trade
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
                className="text-[13px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1 hover:text-[#0B2545] cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.textMuted,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.blue }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/group-companies/inverse&union/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: theme.blue }}
          >
            <span>Request Global Trade Quote</span>
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
                  color: active ? theme.navy : theme.textMuted,
                  borderColor: "rgba(226, 232, 240, 0.7)",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={15} style={{ color: theme.textLight }} />
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/inverse&union/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-md cursor-pointer"
              style={{ backgroundColor: theme.blue }}
            >
              <span>Request Global Trade Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function InverseUnionFooter() {
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
            <Link href="/group-companies/inverse&union" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/11.png"
                  alt="Inverse & Union Trading Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Inverse &amp; Union Trading
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.blue }}>
                  International Procurement &amp; Trade
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Connecting global markets and facilitating international trade. Specializing in international procurement, multi-modal freight logistics, customs clearance, commodity sourcing, and supply chain risk mitigation across 40+ countries.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-sky-50/50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.blue }} />
                <span>Incoterms 2020 Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-sky-50/50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Globe size={14} style={{ color: theme.blue }} />
                <span>40+ Countries Sourced</span>
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
                    className="hover:underline transition-colors hover:text-[#0B2545] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.blue }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Trade Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Trade Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#0B2545] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.blue }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Global Trade Desk
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

            <div className="mt-5 p-3.5 rounded-xl border bg-sky-50/50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.navy }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>International Trade Advisory</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct global procurement consultation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Inverse &amp; Union Trading. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/inverse&union/contact" className="hover:underline hover:text-[#0B2545]">
              International Trade Compliance
            </Link>
            <span>•</span>
            <Link href="/group-companies/inverse&union/contact" className="hover:underline hover:text-[#0B2545]">
              Incoterms 2020 Customs Protocols
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
