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
  ChevronLeft,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  BriefcaseMedical,
} from "lucide-react";

export const theme = {
  navy: "#0A2540",
  royalBlue: "#1A4FA0",
  royalBlueDark: "#0E3570",
  teal: "#0D7C85",
  skyBlue: "#2B8DD6",
  cyan: "#0EA5E9",
  charcoal: "#1E2A3A",
  charcoalDark: "#0F172A",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  bgOffWhite: "#F4F8FD",
  border: "#D2E4F5",
  borderLight: "#E2E8F0",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/pak-janitorial" },
  { label: "About Us", href: "/group-companies/pak-janitorial/about" },
  { label: "Services", href: "/group-companies/pak-janitorial/services" },
  { label: "Solutions & Products", href: "/group-companies/pak-janitorial/solutions" },
  { label: "Projects", href: "/group-companies/pak-janitorial/projects" },
  { label: "Sustainability", href: "/group-companies/pak-janitorial/sustainability" },
  { label: "Contact", href: "/group-companies/pak-janitorial/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Modular Operation Theatres & Hospital Engineering", href: "/group-companies/pak-janitorial/services#hospital-engineering" },
  { label: "ISO 14644 & GMP Pharmaceutical Clean Rooms", href: "/group-companies/pak-janitorial/services#clean-room-systems" },
  { label: "Hospital HVAC, Laminar Flow & HEPA Filtration", href: "/group-companies/pak-janitorial/services#hvac-engineering" },
  { label: "Medical Gas Pipeline Systems (MGPS) HTM 02-01", href: "/group-companies/pak-janitorial/services#medical-gas-pipeline" },
  { label: "Biotechnology & Research Laboratory Fit-Out", href: "/group-companies/pak-janitorial/services#laboratory-engineering" },
  { label: "Preventive Hospital Facility Maintenance & Validation", href: "/group-companies/pak-janitorial/services#maintenance-support" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.18em] mb-4 bg-[#F4F8FD] ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.royalBlue }}
    >
      <HeartPulse size={14} style={{ color: theme.skyBlue }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase ${
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
    <span ref={elementRef} className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Compact & Minimal Navbar ───────────────────────────────────────
export function PakMedicalNavbar() {
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
    if (href === "/group-companies/pak-janitorial") {
      return pathname === "/group-companies/pak-janitorial" || pathname === "/group-companies/pak-janitorial/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full h-16 lg:h-[68px] flex items-center ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white border-b border-slate-200/80"
      }`}
    >
      <div className="mx-auto max-w-screen-xl w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/group-companies/pak-janitorial" className="flex items-center gap-3 select-none group flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/logos/20.png"
              alt="Pakistan Medical Supplies Logo"
              width={44}
              height={44}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-tight leading-tight uppercase text-[#0A2540]">
              Pak Medical Supplies
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#0D7C85]">
              Hospital Engineering &amp; Clean Rooms
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Compact 13-14px, No CTA Button) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] xl:text-[13.5px] font-semibold tracking-normal transition-all duration-200 relative py-1 hover:text-[#1A4FA0] cursor-pointer ${
                  active ? "text-[#1A4FA0] font-bold" : "text-slate-700"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1A4FA0] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <RoysonsPortalButton />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-[#1A4FA0] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-xl px-6 py-5 space-y-2.5 z-50">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-semibold tracking-wide py-2.5 px-3 rounded-lg transition-colors ${
                  active
                    ? "bg-[#1A4FA0]/10 text-[#1A4FA0] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#1A4FA0]"
                }`}
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

// ─── Card Image Slider / Mini Carousel Component ────────────────────
export function CardImageSlider({ images = [], alt = "Card Image", height = "h-48", className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [images, isHovered]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative w-full ${height} overflow-hidden rounded-t-2xl group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, idx) => (
        <div
          key={src + idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} - view ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent z-20 pointer-events-none" />

      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Reusable Corporate Healthcare Footer ───────────────────────────
export function PakMedicalFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/pak-janitorial" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 border border-slate-200 shadow-xs flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/20.png"
                  alt="Pakistan Medical Supplies Logo"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight text-[#0A2540]">
                  Pakistan Medical Supplies
                </p>
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#0D7C85]">
                  Hospital Engineering &amp; Clean Rooms
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 text-slate-600">
              Pioneering turnkey hospital infrastructure, modular operation theatres (MOT), ISO Class 5–8 clean rooms, medical gas pipeline systems (MGPS), and pharmaceutical GMP facilities across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-[11px] font-bold bg-slate-50 text-[#0A2540]">
                <ShieldCheck size={14} className="text-[#0D7C85]" />
                <span>ISO 14644 &amp; HTM 02-01</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-[11px] font-bold bg-slate-50 text-[#0A2540]">
                <BriefcaseMedical size={14} className="text-[#0D7C85]" />
                <span>150+ Hospital Facilities</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-[#0A2540]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#1A4FA0] flex items-center gap-1.5 text-slate-600"
                  >
                    <ChevronRight size={12} className="text-[#0D7C85]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Engineering Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-[#0A2540]">
              Medical Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#1A4FA0] flex items-center gap-1.5 text-slate-600"
                  >
                    <ChevronRight size={12} className="text-[#0D7C85]" />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-[#0A2540]">
              Hospital Engineering Desk
            </h4>
            <div className="space-y-3 text-xs font-medium text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#1A4FA0]" />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0 text-[#1A4FA0]" />
                <a href="tel:00924238924737" className="hover:underline font-bold text-[#0A2540]">
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0 text-[#1A4FA0]" />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
              <Headphones size={24} className="text-[#1A4FA0]" />
              <div>
                <p className="text-[11px] font-bold uppercase text-[#0A2540]">24/7 Medical Gas &amp; HVAC Support</p>
                <p className="text-[10.5px] font-medium text-slate-500">Critical care facility emergency response</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>&copy; 2026 Pakistan Medical Supplies (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/pak-janitorial/contact" className="hover:underline hover:text-[#1A4FA0]">
              HTM 02-01 MGPS Compliance
            </Link>
            <span>•</span>
            <Link href="/group-companies/pak-janitorial/contact" className="hover:underline hover:text-[#1A4FA0]">
              ISO 14644 Cleanroom Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
