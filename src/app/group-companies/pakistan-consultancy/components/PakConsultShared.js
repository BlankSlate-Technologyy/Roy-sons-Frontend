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
  Briefcase,
  FileSearch,
  TrendingUp,
  Handshake,
  PiggyBank,
  Target,
  Settings,
  Scale,
  Sparkles,
  Building2,
  Globe2,
} from "lucide-react";

export const theme = {
  navy: "#0A2540",
  navyDark: "#0C1E2E",
  navyLight: "#16385C",
  teal: "#0D7C85",
  tealDark: "#08545A",
  tealLight: "#E6F4F5",
  gold: "#C5A059",
  goldDark: "#9E7B36",
  goldLight: "#FBF7ED",
  slate: "#1E293B",
  slateDark: "#0F172A",
  steel: "#475569",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  border: "#E2E8F0",
  borderDark: "#CBD5E1",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/pakistan-consultancy" },
  { label: "About Us", href: "/group-companies/pakistan-consultancy/about" },
  { label: "Services", href: "/group-companies/pakistan-consultancy/services" },
  { label: "Sectors & Solutions", href: "/group-companies/pakistan-consultancy/solutions" },
  { label: "Projects", href: "/group-companies/pakistan-consultancy/projects" },
  { label: "Sustainability", href: "/group-companies/pakistan-consultancy/sustainability" },
  { label: "Contact", href: "/group-companies/pakistan-consultancy/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Strategic Advisory & Policy Development", href: "/group-companies/pakistan-consultancy/services#strategy" },
  { label: "Techno-Economic Feasibility Studies", href: "/group-companies/pakistan-consultancy/services#feasibility" },
  { label: "PMO & Program Governance", href: "/group-companies/pakistan-consultancy/services#pmo" },
  { label: "Investment & PPP Transaction Advisory", href: "/group-companies/pakistan-consultancy/services#investment" },
  { label: "Infrastructure & Engineering Advisory", href: "/group-companies/pakistan-consultancy/services#infrastructure" },
  { label: "ESG, Environmental & Climate Resilience", href: "/group-companies/pakistan-consultancy/services#sustainability" },
  { label: "Water Resources & Hydrological Planning", href: "/group-companies/pakistan-consultancy/services#water" },
  { label: "Industrial & Economic Zones Advisory", href: "/group-companies/pakistan-consultancy/services#industrial" },
];

export function SectionLabel({ children, center, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-4 transition-colors ${
        center ? "mx-auto" : ""
      } ${
        light
          ? "bg-white/10 text-teal-200 border border-white/20"
          : "bg-teal-50 text-[#0D7C85] border border-teal-200/80"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center, light = false }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
        center ? "text-center" : ""
      } ${light ? "text-white" : "text-[#0A2540]"} ${className}`}
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
    <span ref={elementRef} className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Compact, Minimal & Professional Navbar ──────────────────────────────────
export function PakConsultNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/pakistan-consultancy") {
      return pathname === "/group-companies/pakistan-consultancy" || pathname === "/group-companies/pakistan-consultancy/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "h-16 shadow-xs border-b border-slate-200/90"
          : "h-16 lg:h-[68px] border-b border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Clean, properly proportioned */}
        <Link
          href="/group-companies/pakistan-consultancy"
          className="flex items-center gap-2.5 sm:gap-3 group select-none flex-shrink-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/16.png"
              alt="Pakistan Consultancy Services"
              width={44}
              height={44}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold tracking-tight text-[#0A2540] leading-none group-hover:text-[#0D7C85] transition-colors">
              Pakistan Consultancy Services
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-[#C5A059] uppercase mt-1">
              Strategic Advisory &amp; Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Compact 13px–14px, minimal, elegant */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] xl:text-[13.5px] font-semibold tracking-normal transition-colors relative py-1.5 cursor-pointer ${
                  active
                    ? "text-[#0D7C85]"
                    : "text-[#334155] hover:text-[#0D7C85]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D7C85] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Button (No unnecessary CTA button) */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg border border-slate-200 text-[#0A2540] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-5 py-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[13.5px] font-medium py-2.5 px-3 rounded-md transition-colors ${
                  active
                    ? "bg-[#0D7C85]/10 text-[#0D7C85] font-bold"
                    : "text-[#1E293B] hover:bg-slate-50 hover:text-[#0D7C85]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-3">
            <span>Lahore • Islamabad • Karachi</span>
            <span className="text-[#0D7C85] font-semibold">0092-42-38924737</span>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Modern Corporate Footer ────────────────────────────────────────────────
export function PakConsultFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/group-companies/pakistan-consultancy"
              className="flex items-center gap-3 select-none"
            >
              <div className="w-11 h-11 rounded-lg bg-slate-50 p-1.5 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/16.png"
                  alt="Pakistan Consultancy Services"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-extrabold text-[#0A2540] leading-tight">
                  Pakistan Consultancy Services
                </p>
                <p className="text-[11px] font-semibold tracking-wider text-[#C5A059] uppercase">
                  Strategic Advisory &amp; Engineering
                </p>
              </div>
            </Link>

            <p className="text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Pakistan Consultancy Services delivers institutional advisory,
              techno-economic feasibility, PPP transaction structuring, engineering governance,
              and sustainability consulting for landmark public and private sector programs across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 bg-slate-50 text-[11.5px] font-semibold text-[#0A2540]">
                <ShieldCheck size={14} className="text-[#0D7C85]" />
                <span>FIDIC &amp; PPRA Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 bg-slate-50 text-[11.5px] font-semibold text-[#0A2540]">
                <Award size={14} className="text-[#C5A059]" />
                <span>PEC Registered Body</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0A2540] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#0D7C85] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight size={13} className="text-slate-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0A2540] mb-4">
              Core Practice Areas
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-slate-600 hover:text-[#0D7C85] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight size={13} className="text-slate-400 flex-shrink-0" />
                    <span className="line-clamp-1">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0A2540]">
              Regional Presence
            </h4>
            <div className="space-y-3 text-[13px] text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block text-[12.5px]">Head Office (Lahore):</strong>
                  <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 size={16} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block text-[12.5px]">Liaison Offices:</strong>
                  <span>Blue Area, Islamabad &amp; Clifton, Karachi</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone size={15} className="text-[#0D7C85] flex-shrink-0" />
                <a href="tel:00924238924737" className="hover:text-[#0D7C85] font-medium">
                  0092-42-38924737 / 0321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#0D7C85] flex-shrink-0" />
                <a href="mailto:info@roysons.org" className="hover:text-[#0D7C85]">
                  info@roysons.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pakistan Consultancy Services (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/group-companies/pakistan-consultancy/about" className="hover:text-[#0D7C85] transition-colors">
              Corporate Governance
            </Link>
            <span>•</span>
            <Link href="/group-companies/pakistan-consultancy/sustainability" className="hover:text-[#0D7C85] transition-colors">
              ESG Standards
            </Link>
            <span>•</span>
            <Link href="/group-companies/pakistan-consultancy/contact" className="hover:text-[#0D7C85] transition-colors">
              Client Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
