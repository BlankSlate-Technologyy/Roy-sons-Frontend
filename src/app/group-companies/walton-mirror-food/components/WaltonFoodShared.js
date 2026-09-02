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
  Factory,
  Snowflake,
  Package,
  Boxes,
  FlaskConical,
  Milk,
  Wheat,
  Croissant,
  GlassWater,
  Beaker,
  Sparkles,
} from "lucide-react";

export const theme = {
  green: "#1E6B43", // Official Forest Green (Wheat & "W" emblem)
  greenDark: "#134A2D",
  ochre: "#D89C46", // Official Golden Harvest Ochre
  ochreHover: "#BC8330",
  navy: "#0B1B36", // Official Deep Navy
  navyDark: "#061022",
  white: "#FFFFFF",
  bgLight: "#F4F8F5",
  border: "#D3E4DB",
  textMuted: "#3D4E44",
  textLight: "#6B7D72",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/walton-mirror-food" },
  { label: "About Us", href: "/group-companies/walton-mirror-food/about" },
  { label: "Services", href: "/group-companies/walton-mirror-food/services" },
  { label: "Products & Brands", href: "/group-companies/walton-mirror-food/solutions" },
  { label: "Projects", href: "/group-companies/walton-mirror-food/projects" },
  { label: "Sustainability", href: "/group-companies/walton-mirror-food/sustainability" },
  { label: "Contact", href: "/group-companies/walton-mirror-food/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Automated Food Processing & Canning", href: "/group-companies/walton-mirror-food/services#modern-processing" },
  { label: "IQF Cryogenic Flash Freezing (Vegetables & Meat)", href: "/group-companies/walton-mirror-food/services#frozen-production" },
  { label: "Packaged Consumer Goods (FMCG Manufacturing)", href: "/group-companies/walton-mirror-food/services#packaged-goods" },
  { label: "Turnkey Private Label & OEM Contract Packing", href: "/group-companies/walton-mirror-food/services#private-label" },
  { label: "Culinary R&D & Recipe Formulation Lab", href: "/group-companies/walton-mirror-food/services#food-rd" },
  { label: "HACCP & ISO 22000 Quality Assurance", href: "/group-companies/walton-mirror-food/services#quality-assurance" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-emerald-50/60 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.green }}
    >
      <Factory size={14} style={{ color: theme.ochre }} />
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
      style={{ color: theme.greenDark }}
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
export function WaltonFoodNavbar() {
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
    if (href === "/group-companies/walton-mirror-food") {
      return pathname === "/group-companies/walton-mirror-food" || pathname === "/group-companies/walton-mirror-food/";
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
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
        {/* Brand Logo */}
        <Link href="/group-companies/walton-mirror-food" className="flex items-center gap-2.5 sm:gap-3 select-none group shrink-0 mr-1 lg:mr-2">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/25.png"
              alt="Walton &amp; Morris / Mirror Foods Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-sm lg:text-[13.5px] xl:text-[15px] font-black tracking-tight leading-tight uppercase whitespace-nowrap" style={{ color: theme.greenDark }}>
              Walton Foods
            </span>
            <span className="text-[8px] sm:text-[8.5px] lg:text-[9px] xl:text-[9.5px] font-bold tracking-widest uppercase mt-0.5 whitespace-nowrap" style={{ color: theme.ochre }}>
              Food Processing &amp; Production
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] xl:text-[11px] 2xl:text-[11.5px] font-extrabold tracking-wider uppercase transition-all duration-200 relative py-1 px-1.5 xl:px-2 hover:text-[#1E6B43] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.green : theme.textMuted,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/group-companies/walton-mirror-food/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg text-[10px] xl:text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap shrink-0"
            style={{ backgroundColor: theme.green }}
          >
            <span>OEM / B2B Quote</span>
            <ArrowRight size={13} className="shrink-0" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.greenDark }}
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
                  backgroundColor: active ? `${theme.green}12` : "transparent",
                  color: active ? theme.green : theme.greenDark,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/walton-mirror-food/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.green }}
            >
              <span>Request OEM / B2B Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function WaltonFoodFooter() {
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
            <Link href="/group-companies/walton-mirror-food" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/25.png"
                  alt="Walton & Morris Foods Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.greenDark }}>
                  Walton &amp; Morris Foods
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.ochre }}>
                  Walton &amp; Morris Foods (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Producing quality food, nourishing every generation. Specializing in high-volume food processing, flash-frozen IQF foods, packaged consumer goods, dairy bottling, and private label manufacturing for domestic and export markets.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/50" style={{ borderColor: theme.border, color: theme.greenDark }}>
                <ShieldCheck size={14} style={{ color: theme.green }} />
                <span>ISO 22000 &amp; HACCP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/50" style={{ borderColor: theme.border, color: theme.greenDark }}>
                <Factory size={14} style={{ color: theme.green }} />
                <span>120,000 Tons/Yr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#1E6B43] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.ochre }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Manufacturing Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Manufacturing Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#1E6B43] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.ochre }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Commercial &amp; Export Desk
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.green }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.green }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.greenDark }}>
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.green }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-emerald-50/50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.green }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.greenDark }}>B2B &amp; Export Inquiries</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct food technologist consultation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Walton &amp; Morris Foods (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/walton-mirror-food/contact" className="hover:underline hover:text-[#1E6B43]">
              HACCP &amp; ISO 22000 Protocols
            </Link>
            <span>•</span>
            <Link href="/group-companies/walton-mirror-food/contact" className="hover:underline hover:text-[#1E6B43]">
              Halal Food Certification &amp; Export Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
