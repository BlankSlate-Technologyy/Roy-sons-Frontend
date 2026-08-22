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
  Brain,
  Code2,
  Layers,
  Cloud,
  Smartphone,
  BarChart3,
  Users2,
  Lock,
  Cpu,
  Sparkles,
} from "lucide-react";

export const theme = {
  navy: "#0A3A6B", // Deep Tech Navy Blue
  navyDark: "#062242",
  navySoft: "#0E4B8B",
  cyan: "#00A8E8", // Vibrant Cyan / Electric Blue
  cyanHover: "#0086BA",
  slate: "#3E4F61", // Slate Charcoal Text
  white: "#FFFFFF",
  bgLight: "#F4F8FC",
  border: "#D2E3F3",
  textMuted: "#3E4F61",
  textLight: "#6B7C90",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/digitalzone" },
  { label: "About Us", href: "/group-companies/digitalzone/about" },
  { label: "Services", href: "/group-companies/digitalzone/services" },
  { label: "Platforms & Solutions", href: "/group-companies/digitalzone/solutions" },
  { label: "Projects", href: "/group-companies/digitalzone/projects" },
  { label: "Sustainability", href: "/group-companies/digitalzone/sustainability" },
  { label: "Contact", href: "/group-companies/digitalzone/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Artificial Intelligence & Predictive Machine Learning", href: "/group-companies/digitalzone/services#artificial-intelligence" },
  { label: "Custom Enterprise Software & Scalable SaaS Platforms", href: "/group-companies/digitalzone/services#custom-software" },
  { label: "Integrated Enterprise Resource Planning (ERP) Systems", href: "/group-companies/digitalzone/services#erp-solutions" },
  { label: "Cloud Migration, DevOps & Multi-Cloud Infrastructure", href: "/group-companies/digitalzone/services#cloud-computing" },
  { label: "Zero-Trust Cybersecurity & Threat Defense Operations", href: "/group-companies/digitalzone/services#cybersecurity" },
  { label: "Native iOS, Android & Cross-Platform Mobile Apps", href: "/group-companies/digitalzone/services#mobile-apps" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <Brain size={14} style={{ color: theme.cyan }} />
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
export function DigitalZoneNavbar() {
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
    if (href === "/group-companies/digitalzone") {
      return pathname === "/group-companies/digitalzone" || pathname === "/group-companies/digitalzone/";
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
        <Link href="/group-companies/digitalzone" className="flex items-center gap-3 select-none group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border p-1 bg-white shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
            <Image
              src="/logos/17.png"
              alt="Digital Zoning Corporation Logo"
              width={56}
              height={56}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wide leading-tight uppercase" style={{ color: theme.navyDark }}>
              Digital Zoning
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.cyan }}>
              AI &amp; Enterprise Software
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
                className="text-[13px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1 hover:text-[#0A3A6B] cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.slate,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.cyan }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/group-companies/digitalzone/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Consult AI Architect</span>
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
                  color: active ? theme.navy : theme.slate,
                  borderColor: "rgba(210, 227, 243, 0.7)",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={15} style={{ color: theme.textLight }} />
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/digitalzone/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-md cursor-pointer"
              style={{ backgroundColor: theme.navy }}
            >
              <span>Request Software Proposal</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function DigitalZoneFooter() {
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
            <Link href="/group-companies/digitalzone" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/17.png"
                  alt="Digital Zoning Corporation Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Digital Zoning
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.cyan }}>
                  Digital Zoning Corporation (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Transforming enterprise operations through artificial intelligence, custom software engineering, ERP solutions, multi-cloud infrastructure, and zero-trust cybersecurity ecosystems.
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.cyan }} />
                <span>ISO 27001 &amp; SOC-2 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Brain size={14} style={{ color: theme.cyan }} />
                <span>500+ Delivered AI Solutions</span>
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
                    className="hover:underline transition-colors hover:text-[#0A3A6B] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.cyan }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Engineering Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Enterprise Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#0A3A6B] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.cyan }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              AI &amp; Enterprise Software Desk
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
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>24/7 Enterprise Tech Support</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct software architect desk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Digital Zoning Corporation (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/digitalzone/contact" className="hover:underline hover:text-[#0A3A6B]">
              ISO 27001 Data Privacy Standard
            </Link>
            <span>•</span>
            <Link href="/group-companies/digitalzone/contact" className="hover:underline hover:text-[#0A3A6B]">
              Zero-Trust Architecture Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
