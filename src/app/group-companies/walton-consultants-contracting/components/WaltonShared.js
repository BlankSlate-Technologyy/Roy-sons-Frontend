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
  HardHat,
  ChevronLeft,
  ChevronRight,
  Building2,
  Layers,
  Award,
} from "lucide-react";

export const theme = {
  navy: "#0E2A47",
  navyDark: "#0A1E34",
  navyDeep: "#061423",
  teal: "#0D485E",
  gold: "#C5A059",
  goldMuted: "#B89346",
  goldHover: "#A6823B",
  charcoal: "#2C3E50",
  textMuted: "#4A5D70",
  textLight: "#6E8294",
  bgLight: "#F4F7FA",
  border: "#DDE5ED",
  white: "#FFFFFF",
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
  { label: "Engineering Consultancy", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Project Management", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Construction Management", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Infrastructure Development", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Architecture & Planning", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Feasibility & Technical Studies", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Quantity Surveying", href: "/group-companies/walton-consultants-contracting/services" },
  { label: "Procurement & Contract Management", href: "/group-companies/walton-consultants-contracting/services" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-[0.18em] mb-3.5 bg-[#F4F7FA] ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.gold }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2] uppercase ${
        center ? "text-center" : ""
      } ${className}`}
      style={{ color: theme.navyDark }}
    >
      {children}
    </h2>
  );
}

export function AnimatedCounter({ targetValue, duration = 1500 }) {
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
            const easeProgress = 1 - Math.pow(1 - progress, 3);
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

// ─── Compact, Premium Navbar (No Buttons, 13–14px typography, Sticky) ───
export function WaltonNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/walton-consultants-contracting") {
      return (
        pathname === "/group-companies/walton-consultants-contracting" ||
        pathname === "/group-companies/walton-consultants-contracting/"
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(10,30,52,0.06)] py-2"
          : "bg-white border-b border-slate-200/60 py-2.5 sm:py-3"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Clean, properly proportioned Logo */}
        <Link
          href="/group-companies/walton-consultants-contracting"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 flex items-center justify-center shrink-0">
            <Image
              src="/logos/5.png"
              alt="Walton Consultants & Contracting"
              width={48}
              height={48}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[13px] sm:text-[14px] lg:text-[14.5px] font-black tracking-tight leading-none uppercase"
              style={{ color: theme.navyDark }}
            >
              Walton Consultants
            </span>
            <span
              className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.16em] uppercase mt-0.5"
              style={{ color: theme.goldMuted }}
            >
              Engineering &amp; Infrastructure
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links: 13px–14px font, reduced spacing, clean hover */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-5">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1.5 px-2 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-semibold tracking-[0.03em] uppercase transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  active ? "text-[#0E2A47]" : "text-[#4A5D70] hover:text-[#0E2A47]"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 ${
                    active ? "bg-[#C5A059] opacity-100 scale-x-100" : "bg-[#C5A059] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Clean Mobile Hamburger Menu Button (No other buttons on navbar) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1.5 sm:p-2 rounded-lg border border-slate-200 text-[#0A1E34] hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Clean Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation Drawer"
          className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-5 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-3 rounded-lg text-[13.5px] font-bold uppercase tracking-wider transition-colors ${
                  active
                    ? "bg-[#0E2A47]/8 text-[#0E2A47] border-l-3 border-[#C5A059]"
                    : "text-[#4A5D70] hover:bg-slate-50 hover:text-[#0E2A47]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

// ─── Card Image Slider (for Featured Cards with 2–3 images, auto-rotation & dots) ───
export function CardImageSlider({ images = [], alt = "Project visual", className = "h-52 sm:h-56" }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images, isHovered]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-t-2xl bg-slate-100 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((imgSrc, i) => (
        <div
          key={imgSrc + i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={imgSrc}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover walton-img-zoom transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      ))}

      {/* Dark gradient base overlay for text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/30 via-transparent to-transparent pointer-events-none z-15" />

      {/* Dots indicator if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIdx(dotIdx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIdx ? "w-5 bg-white shadow-xs" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Optional subtle arrows on hover */}
      {images.length > 1 && isHovered && (
        <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between z-20 pointer-events-none">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 pointer-events-auto transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIdx((prev) => (prev + 1) % images.length);
            }}
            className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 pointer-events-auto transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Corporate Footer ───
export function WaltonFooter() {
  return (
    <footer className="bg-[#0A1E34] text-white border-t border-slate-800 antialiased">
      {/* Top Credentials Bar */}
      <div className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-wider">
            <Award size={16} />
            <span>Pakistan Engineering Council (PEC) Category C-A (No Limit) Constructor</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#C5A059]" /> ISO 9001:2015 Quality
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#C5A059]" /> ISO 45001:2018 Safety
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#C5A059]" /> LEED Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto max-w-screen-xl py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Summary */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-9 h-9">
              <Image
                src="/logos/5.png"
                alt="Walton Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight uppercase text-white">
                Walton Consultants
              </h3>
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#C5A059]">
                Engineering &amp; Infrastructure
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            A premier international engineering consultancy and general contracting firm delivering landmark civil infrastructure, highway corridors, commercial superstructures, and industrial EPC facilities.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational across major provincial infrastructure corridors</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[#C5A059] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Services */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[#C5A059] mb-4">
            Core Divisions
          </h4>
          <ul className="space-y-2.5 text-sm">
            {FOOTER_SERVICES.map((svc) => (
              <li key={svc.label}>
                <Link
                  href={svc.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 inline-block"
                >
                  {svc.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Helpline */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[#C5A059] mb-4">
            Engineering Desk
          </h4>
          <div className="space-y-3.5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
              <span>Walton Corporate Complex, DHA Phase 5, Ring Road Corridor, Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#C5A059] shrink-0" />
              <a href="tel:00924238924737" className="hover:text-white transition-colors">
                +92 (42) 3892-4737
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#C5A059] shrink-0" />
              <a href="mailto:info@waltonconsultants.com" className="hover:text-white transition-colors">
                info@waltonconsultants.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Walton Consultants &amp; Contracting (Pvt) Ltd. All rights reserved. Engineering Excellence &middot; Infrastructure Development.
        </p>
      </div>
    </footer>
  );
}
