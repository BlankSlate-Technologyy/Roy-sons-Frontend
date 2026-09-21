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
  UtensilsCrossed,
  Hotel,
  Building2,
  Truck,
  Package,
  Carrot,
  Factory,
  Sparkles,
} from "lucide-react";

export const theme = {
  navy: "#0A192F", // Deep Navy typography & headings
  navyDark: "#050C16",
  teal: "#0A4D4C", // Dark Teal Primary
  tealDark: "#063332",
  forestGreen: "#1B7A5A", // Forest Green Accent
  forestGreenDark: "#135740",
  gold: "#C5A059", // Warm Gold/Beige Accent
  goldHover: "#A6823B",
  white: "#FFFFFF",
  bgLight: "#F8FAF9",
  border: "#E2E8F0",
  borderLight: "#EDF2F7",
  textMuted: "#4A5568",
  textLight: "#718096",
  // Backward compatibility aliases for sub-pages:
  maroon: "#0A4D4C", // Dark Teal
  maroonDark: "#0A192F", // Deep Navy
  crimson: "#1B7A5A", // Forest Green
  crimsonHover: "#135740",
};

export const NAV_LINKS = [
  { label: "Home", shortLabel: "Home", href: "/group-companies/national-food" },
  { label: "About Us", shortLabel: "About", href: "/group-companies/national-food/about" },
  { label: "Services", shortLabel: "Services", href: "/group-companies/national-food/services" },
  { label: "Catering & Menus", shortLabel: "Catering", href: "/group-companies/national-food/solutions" },
  { label: "Projects", shortLabel: "Projects", href: "/group-companies/national-food/projects" },
  { label: "Sustainability", shortLabel: "Sustainability", href: "/group-companies/national-food/sustainability" },
  { label: "Contact", shortLabel: "Contact", href: "/group-companies/national-food/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Food Trading & Agricultural Commodities", href: "/group-companies/national-food/services#food-trading" },
  { label: "Institutional & Corporate Catering", href: "/group-companies/national-food/services#corporate-catering" },
  { label: "Hospital Patient Clinical Nutrition", href: "/group-companies/national-food/services#healthcare-nutrition" },
  { label: "University & Campus Dining Operations", href: "/group-companies/national-food/services#educational-dining" },
  { label: "Refrigerated Cold Chain & Distribution", href: "/group-companies/national-food/services#cold-chain-logistics" },
  { label: "Bulk Institutional Commodity Sourcing", href: "/group-companies/national-food/services#bulk-sourcing" },
  { label: "HACCP & ISO 22000 Food Safety Audits", href: "/group-companies/national-food/services#quality-audits" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.18em] mb-4 bg-[#F8FAF9] shadow-2xs ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.teal }}
    >
      <UtensilsCrossed size={13} style={{ color: theme.forestGreen }} />
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
export function NFSNavbar() {
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
    if (href === "/group-companies/national-food") {
      return pathname === "/group-companies/national-food" || pathname === "/group-companies/national-food/";
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
        <Link href="/group-companies/national-food" className="flex items-center gap-2.5 select-none group py-0.5 shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
            <Image
              src="/logos/21.png"
              alt="National Food Services (NFS) Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] lg:text-[17.5px] font-black tracking-tight leading-none uppercase whitespace-nowrap" style={{ color: theme.navy }}>
              National Food Services
            </span>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase mt-1 whitespace-nowrap" style={{ color: theme.forestGreen }}>
              Institutional Catering &amp; Food Supply
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Bold & highly legible font */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5.5 2xl:gap-7 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14.5px] xl:text-[16px] font-bold tracking-normal uppercase transition-all duration-200 relative py-1.5 px-0.5 cursor-pointer whitespace-nowrap"
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
export function NFSFooter() {
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
            <Link href="/group-companies/national-food" className="flex items-center gap-3 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border shadow-2xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/21.png"
                  alt="National Food Services Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navy }}>
                  National Food Services
                </p>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: theme.forestGreen }}>
                  Institutional Food Services &amp; Commodities
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Delivering nutritious, hygienic, and scalable institutional catering, hospital clinical nutrition, university dining, agricultural commodities, and temperature-controlled food distribution across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-[#F8FAF9]" style={{ borderColor: theme.border, color: theme.navy }}>
                <ShieldCheck size={14} style={{ color: theme.forestGreen }} />
                <span>HACCP &amp; ISO 22000</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-[#F8FAF9]" style={{ borderColor: theme.border, color: theme.navy }}>
                <UtensilsCrossed size={14} style={{ color: theme.teal }} />
                <span>1M+ Meals Daily</span>
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

          {/* Core Food Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navy }}>
              Institutional Divisions
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
              Operations Desk
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

            <div className="mt-5 p-3.5 rounded-xl border bg-[#F8FAF9] flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.teal }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navy }}>Institutional Operations Desk</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>24/7 catering management &amp; dispatch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 National Food Services (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/national-food/contact" className="hover:underline" style={{ color: theme.teal }}>
              HACCP Food Safety Protocol
            </Link>
            <span>•</span>
            <Link href="/group-companies/national-food/contact" className="hover:underline" style={{ color: theme.teal }}>
              Halal Certification &amp; Traceability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
