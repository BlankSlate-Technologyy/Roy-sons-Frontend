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
  Clock,
  Headphones,
  Award,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

export const theme = {
  navy: "#1B365D", // Shield Navy Blue from National Guard logo
  navyDark: "#0F2540", // Deep Command Navy
  navyCard: "#163052", // Elevated Navy Surface for Dark Sections
  gold: "#B38A3F", // High-contrast Gold for light backgrounds
  goldBright: "#DFB868", // Luminous Gold for dark navy backgrounds
  goldHover: "#9B742E",
  white: "#ffffff",
  bgLight: "#F4F6F9",
  border: "#DCE3EC",
  textMuted: "#3F526B",
  textLight: "#5C6F87",
};

export function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/national-guard" },
  { label: "About Us", href: "/group-companies/national-guard/about" },
  { label: "Services", href: "/group-companies/national-guard/services" },
  { label: "Industries", href: "/group-companies/national-guard/industries" },
  { label: "Careers", href: "/group-companies/national-guard/careers" },
  { label: "Contact", href: "/group-companies/national-guard/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Manned Guarding", href: "/group-companies/national-guard/services/manned-guarding" },
  { label: "Mobile Patrol Services", href: "/group-companies/national-guard/services/mobile-patrol" },
  { label: "CCTV & Central Monitoring", href: "/group-companies/national-guard/services/cctv-monitoring" },
  { label: "Risk Assessment & Audits", href: "/group-companies/national-guard/services/risk-assessment" },
  { label: "Event & VIP Protection", href: "/group-companies/national-guard/services/event-security" },
  { label: "Facility & Corporate Security", href: "/group-companies/national-guard/services/facility-protection" },
];

export const LEADERSHIP_TEAM = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    badge: "Executive Command",
    credentials: "25+ Years Group Leadership",
    bio: "Directing strategic governance, national security licensing compliance, and enterprise client partnerships across all National Guard regional commands.",
    image: "/logos/chairman.jpeg",
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director",
    badge: "Strategic Operations",
    credentials: "Corporate Expansion & Modernization",
    bio: "Spearheading fleet modernization, digital CCTV command center expansion, and turnkey protection programs for banking, industrial, and diplomatic clients.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
  },
  {
    name: "Capt. (R) Kamran Rashid",
    role: "Director of Field Operations & QRT",
    badge: "Tactical Supervision",
    credentials: "Ex-Military Operations Specialist",
    bio: "Overseeing 500+ deployed armed and unarmed guards, 24/7 Quick Response Teams, surprise field audits, and rapid emergency deployment protocols.",
    image: "/team/client_services.jpg",
  },
  {
    name: "Ms. Sarah Khan",
    role: "Head of Risk Audits & Compliance",
    badge: "Vetting & Standards",
    credentials: "ISO 31000 & NADRA Compliance",
    bio: "Leading comprehensive site vulnerability audits, SOP formulation, NADRA biometric verification pipelines, and Ministry of Interior regulatory governance.",
    image: "/team/procurement_specialist.jpg",
  },
];

export function SectionLabel({ children, center, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] mb-3.5 ${
        center ? "mx-auto" : ""
      }`}
      style={{
        backgroundColor: dark ? "rgba(223, 184, 104, 0.14)" : "#F8FAFC",
        borderColor: dark ? "rgba(223, 184, 104, 0.35)" : theme.border,
        color: dark ? theme.goldBright : theme.gold,
      }}
    >
      <ShieldCheck size={15} style={{ color: dark ? theme.goldBright : theme.gold }} />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ children, className = "", center, dark = false }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-[1.15] ${
        center ? "text-center" : ""
      } ${className}`}
      style={{ color: dark ? "#FFFFFF" : theme.navy }}
    >
      {children}
    </h2>
  );
}

// ─── Smooth Animated Counter Component ──────────────────────────────
export function AnimatedCounter({ targetValue, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const numericTarget = parseInt(String(targetValue).replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = String(targetValue).replace(/[0-9]/g, "");

  useEffect(() => {
    const node = elementRef.current;
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

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-black text-3xl sm:text-4xl tracking-tight leading-none">
      {count}
      {suffix}
    </span>
  );
}

// ─── Shared Executive Leadership & Command Team Section (Home & About) ──
export function NationalGuardLeadershipSection({
  eyebrow = "Command & Governance",
  title = "Security Leadership & Executive Council",
  subtitle = "Led by veteran executives, former armed forces officers, and certified risk specialists upholding Pakistan's highest private security standards.",
}) {
  return (
    <section
      className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b relative overflow-hidden"
      style={{
        backgroundColor: theme.navyDark,
        borderColor: "rgba(255,255,255,0.1)",
        color: "#FFFFFF",
      }}
    >
      {/* Subtle Tactical Gold Accent Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#DFB868 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionLabel center dark>
            {eyebrow}
          </SectionLabel>
          <SectionHeading center dark className="mb-3">
            {title}
          </SectionHeading>
          <p
            className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed"
            style={{ color: "#E2E8F0" }}
          >
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                backgroundColor: theme.navyCard,
                borderColor: "rgba(223, 184, 104, 0.25)",
              }}
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A192C]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540] via-[#0F2540]/20 to-transparent" />
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-extrabold uppercase tracking-wider shadow-md"
                      style={{
                        backgroundColor: "rgba(15, 37, 64, 0.9)",
                        color: theme.goldBright,
                        border: "1px solid rgba(223, 184, 104, 0.4)",
                      }}
                    >
                      <Award size={12} style={{ color: theme.goldBright }} />
                      {member.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-[19px] sm:text-[20px] font-black text-white leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="text-[13px] font-extrabold uppercase tracking-wider mb-3"
                    style={{ color: theme.goldBright }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed"
                    style={{ color: "#D6E0EC" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>

              <div
                className="px-5 sm:px-6 py-3.5 border-t flex items-center gap-2 text-[12.5px] font-bold"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(10, 25, 44, 0.45)",
                  color: "#F1F5F9",
                }}
              >
                <BadgeCheck size={15} style={{ color: theme.goldBright }} className="shrink-0" />
                <span className="truncate">{member.credentials}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reusable National Guard Navbar ──────────────────────────────────
export function NationalGuardNavbar() {
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
    if (href === "/group-companies/national-guard") {
      return (
        pathname === "/group-companies/national-guard" ||
        pathname === "/group-companies/national-guard/"
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        scrolled ? "shadow-md py-2" : "py-2.5"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
        backgroundColor: theme.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/group-companies/national-guard"
          className="flex items-center gap-3 select-none group shrink-0"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/10.png"
              alt="National Guard Security Services Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[18px] sm:text-[20px] font-black tracking-tight leading-none uppercase"
              style={{ color: theme.navy }}
            >
              National Guard
            </span>
            <span
              className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.14em] uppercase mt-1"
              style={{ color: theme.gold }}
            >
              Security Services (Pvt) Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] xl:text-[15px] font-extrabold tracking-wide uppercase transition-all duration-200 relative py-1.5 hover:text-[#B38A3F] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: theme.gold }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button, Portal & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <RoysonsPortalButton />
          <Link
            href="/group-companies/national-guard/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap"
            style={{ backgroundColor: theme.navy }}
          >
            <span>Security Quote</span>
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navy }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
                className="block text-[15px] font-extrabold tracking-wider uppercase py-2.5 px-3.5 rounded-xl transition-colors"
                style={{
                  backgroundColor: active ? `${theme.gold}18` : "transparent",
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/national-guard/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-xl text-[14px] font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-sm"
              style={{ backgroundColor: theme.navy }}
            >
              <span>Request Security Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable National Guard Footer ──────────────────────────────────
export function NationalGuardFooter() {
  return (
    <footer
      className="border-t pt-12 pb-8"
      style={{
        borderColor: "rgba(223, 184, 104, 0.25)",
        backgroundColor: theme.navyDark,
        color: "#FFFFFF",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/group-companies/national-guard"
              className="inline-flex items-center gap-3.5 mb-4 select-none px-4 py-2.5 rounded-2xl bg-white shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/10.png"
                  alt="National Guard Security Services"
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p
                  className="text-[17px] font-black uppercase tracking-wide leading-tight"
                  style={{ color: theme.navy }}
                >
                  National Guard
                </p>
                <p
                  className="text-[11px] font-extrabold tracking-[0.15em] uppercase"
                  style={{ color: theme.gold }}
                >
                  Security Services (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p
              className="text-[14.5px] font-medium leading-relaxed mb-5"
              style={{ color: "#CBD5E1" }}
            >
              A licensed, premier security solutions provider delivering armed &amp; unarmed manned
              guarding, 24/7 mobile patrols, central CCTV surveillance, and risk management across
              Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[12.5px] font-bold"
                style={{
                  borderColor: "rgba(223, 184, 104, 0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "#FFFFFF",
                }}
              >
                <ShieldCheck size={14} style={{ color: theme.goldBright }} />
                <span>Govt Licensed &amp; Verified</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[12.5px] font-bold"
                style={{
                  borderColor: "rgba(223, 184, 104, 0.35)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "#FFFFFF",
                }}
              >
                <Clock size={14} style={{ color: theme.goldBright }} />
                <span>24/7 Control Room</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-[14px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14.5px] font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#DFB868] transition-colors flex items-center gap-1.5"
                    style={{ color: "#E2E8F0" }}
                  >
                    <ChevronRight size={14} style={{ color: theme.goldBright }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Services */}
          <div className="lg:col-span-3">
            <h4
              className="text-[14px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              Security Services
            </h4>
            <ul className="space-y-2.5 text-[14.5px] font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:text-[#DFB868] transition-colors flex items-center gap-1.5"
                    style={{ color: "#E2E8F0" }}
                  >
                    <ChevronRight size={14} style={{ color: theme.goldBright }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hotline */}
          <div className="lg:col-span-3">
            <h4
              className="text-[14px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              24/7 Control Room
            </h4>
            <div className="space-y-3 text-[14px] font-medium" style={{ color: "#E2E8F0" }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="flex-shrink-0 mt-0.5" style={{ color: theme.goldBright }} />
                <span>Head Office: 23-C, Commercial Zone, Phase 1, DHA, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={17} className="flex-shrink-0" style={{ color: theme.goldBright }} />
                <a
                  href="tel:+923218431665"
                  className="hover:underline font-extrabold text-white"
                >
                  +92 321 8431665 (24/7)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={17} className="flex-shrink-0" style={{ color: theme.goldBright }} />
                <a
                  href="mailto:info@nationalguard.com.pk"
                  className="hover:underline text-slate-200"
                >
                  info@nationalguard.com.pk
                </a>
              </div>
            </div>

            <div
              className="mt-4 p-3.5 rounded-xl border flex items-center gap-3"
              style={{
                borderColor: "rgba(223, 184, 104, 0.3)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <Headphones size={24} style={{ color: theme.goldBright }} className="shrink-0" />
              <div>
                <p className="text-[13px] font-extrabold uppercase text-white">
                  Need Guard Deployment?
                </p>
                <p className="text-[12.5px] font-medium text-slate-300">
                  Rapid 2-hour mobilization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] font-medium"
          style={{ color: "#CBD5E1" }}
        >
          <p>&copy; 2026 National Guard Security Services (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/group-companies/national-guard/contact"
              className="hover:underline hover:text-white"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/group-companies/national-guard/contact"
              className="hover:underline hover:text-white"
            >
              Terms of Security Deployment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
