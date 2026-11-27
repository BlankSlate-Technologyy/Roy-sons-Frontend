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
  Headphones,
  Award,
  ChevronRight,
  Leaf,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

export const theme = {
  primary: "#1C522A",      // Deep Forest Green
  primaryDark: "#123B1D",  // Executive Dark Forest Green
  primaryCard: "#1A4A27",  // Elevated Card Surface for Dark Sections
  primaryLight: "#2A6B3D",
  accentGold: "#A88134",   // High-Contrast Warm Gold for Light Backgrounds
  goldBright: "#E0BC6F",   // Luminous Gold for Dark Forest Green Backgrounds
  charcoal: "#223027",
  white: "#FFFFFF",
  bgLight: "#F4F8F4",      // Soft Pasture Sage
  border: "#D2E3D4",
  textMuted: "#3A5041",
  textLight: "#526B59",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/swiss-farm" },
  { label: "About Us", href: "/group-companies/swiss-farm/about" },
  { label: "Services", href: "/group-companies/swiss-farm/services" },
  { label: "Products", href: "/group-companies/swiss-farm/products" },
  { label: "Sustainability", href: "/group-companies/swiss-farm/sustainability" },
  { label: "Contact", href: "/group-companies/swiss-farm/contact" },
];

export const FOOTER_SERVICES = [
  { label: "High-Volume Dairy Production", href: "/group-companies/swiss-farm/services/high-volume-dairy-production" },
  { label: "Livestock Management & Housing", href: "/group-companies/swiss-farm/services/livestock-management-housing" },
  { label: "Genetic Breeding & Reproduction", href: "/group-companies/swiss-farm/services/genetic-breeding-reproduction" },
  { label: "Veterinary Healthcare & Vaccines", href: "/group-companies/swiss-farm/services/veterinary-healthcare-disease-prevention" },
  { label: "Animal Nutrition & Silage Rations", href: "/group-companies/swiss-farm/services/animal-nutrition-silage-rations" },
  { label: "Sustainable Farm Infrastructure", href: "/group-companies/swiss-farm/services/sustainable-bio-energy-farm-infrastructure" },
];

export const SWISS_FARM_LEADERSHIP = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    badge: "Founder · ROYSONS Group",
    credentials: "30+ Years Agribusiness & Dairy Vision",
    bio: "Founder of ROYSONS Pvt. Ltd., steering commercial dairy modernization, large-scale herd genetics expansion, and institutional milk supply partnerships nationwide.",
    image: "/national-agricultural/team-ijaz-naseer.jpg",
    specialties: ["Dairy Strategy", "Food Security", "Corporate Governance"],
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director, Operations & Growth",
    badge: "Board of Directors",
    credentials: "Cold-Chain & Parlor Modernization",
    bio: "Leading rotary parlor automation, refrigerated milk tanker logistics, anaerobic biogas energy deployment, and strategic B2B supply contracts across Pakistan.",
    image: "/national-agricultural/team-hesham-sultan.jpg",
    specialties: ["Cold-Chain Fleet", "Bio-Energy", "B2B Supply"],
  },
  {
    name: "Dr. Ahsan Sardar",
    role: "Executive Director, Partnerships & Compliance",
    badge: "Board Director · LCCI Member",
    credentials: "ISO 22000 & Dairy Quality Governance",
    bio: "Overseeing institutional buyer relations, zero-antibiotic milk verification standards, genomic breeding alliances, and regulatory compliance across dairy hubs.",
    image: "/national-agricultural/team-ahsan-sardar.jpg",
    specialties: ["ISO 22000 QA", "Dairy Trade", "Genomic Alliances"],
  },
  {
    name: "Zeba Ijaz",
    role: "Chairperson, Sustainability & Rural Outreach",
    badge: "ESG & Community Patron",
    credentials: "Animal Welfare & Circular Ecology",
    bio: "Championing Five Freedoms livestock welfare standards, circular organic bio-compost farming, and rural dairy farmer training initiatives across Punjab.",
    image: "/national-agricultural/team-zeba-ijaz.jpg",
    specialties: ["Animal Welfare", "Circular Farming", "Rural Uplift"],
  },
];

export function SectionLabel({ children, center, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-[0.16em] mb-3.5 ${
        center ? "mx-auto" : ""
      }`}
      style={{
        backgroundColor: dark ? "rgba(224, 188, 111, 0.14)" : "#F4F8F4",
        borderColor: dark ? "rgba(224, 188, 111, 0.35)" : theme.border,
        color: dark ? theme.goldBright : theme.primary,
      }}
    >
      <Leaf size={15} style={{ color: dark ? theme.goldBright : theme.accentGold }} />
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
      style={{ color: dark ? "#FFFFFF" : theme.primary }}
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

// ─── Reusable Executive Leadership & Team Section (Home & About) ────
export function SwissFarmLeadershipSection({
  eyebrow = "Leadership & Farm Governance",
  title = "Meet Our Dairy Leadership Team",
  subtitle = "Guided by ROYSONS Group executives, dairy technologists, and sustainability leaders driving Pakistan's benchmark commercial dairy enterprise.",
  showProfileLink = false,
}) {
  return (
    <section
      id="leadership-team"
      className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b relative overflow-hidden"
      style={{
        backgroundColor: theme.primaryDark,
        borderColor: "rgba(255,255,255,0.1)",
        color: "#FFFFFF",
      }}
    >
      <div className="mx-auto max-w-screen-xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-9">
          <div className="max-w-2xl">
            <SectionLabel dark>{eyebrow}</SectionLabel>
            <SectionHeading dark className="mb-3">
              {title}
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium leading-relaxed text-[#D8E8DC]">
              {subtitle}
            </p>
          </div>

          {showProfileLink && (
            <Link
              href="/group-companies/swiss-farm/about#leadership-team"
              className="inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wider shrink-0 transition-all hover:gap-3 cursor-pointer"
              style={{ color: theme.goldBright }}
            >
              <span>Full Corporate Profile</span>
              <ArrowRight size={17} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SWISS_FARM_LEADERSHIP.map((member) => (
            <div
              key={member.name}
              className="swiss-farm-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border shadow-lg group"
              style={{
                backgroundColor: theme.primaryCard,
                borderColor: "rgba(224, 188, 111, 0.25)",
              }}
            >
              <div>
                {/* Portrait */}
                <div className="relative w-full h-72 bg-[#0F2F17] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D] via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm"
                      style={{
                        backgroundColor: "rgba(18, 59, 29, 0.9)",
                        color: theme.goldBright,
                        border: "1px solid rgba(224, 188, 111, 0.45)",
                      }}
                    >
                      <Award size={13} />
                      <span>{member.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Member Bio */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-[20px] font-black text-white leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="text-[14px] font-bold uppercase tracking-wide mb-3"
                    style={{ color: theme.goldBright }}
                  >
                    {member.role}
                  </p>
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-[#DFECE2]">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Credentials Footer */}
              <div
                className="px-5 sm:px-6 py-4 border-t flex items-center gap-2 text-[13px] font-bold"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#F3E5C2",
                }}
              >
                <BadgeCheck size={16} style={{ color: theme.goldBright }} className="shrink-0" />
                <span>{member.credentials}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reusable Navbar ────────────────────────────────────────────────
export function SwissFarmNavbar() {
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
    if (href === "/group-companies/swiss-farm") {
      return pathname === "/group-companies/swiss-farm" || pathname === "/group-companies/swiss-farm/";
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
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
        {/* Brand Logo */}
        <Link href="/group-companies/swiss-farm" className="flex items-center gap-2.5 sm:gap-3 select-none group shrink-0 mr-1 lg:mr-2">
          <div
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl border bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs"
            style={{ borderColor: theme.border }}
          >
            <Image
              src="/logos/6.png"
              alt="Swiss Farms Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-[18px] sm:text-[20px] font-black tracking-tight leading-none uppercase whitespace-nowrap" style={{ color: theme.primary }}>
              Swiss Farms
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.15em] uppercase mt-1 whitespace-nowrap" style={{ color: theme.accentGold }}>
              Dairy &amp; Livestock
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14.5px] xl:text-[15.5px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1.5 px-1 hover:text-[#A88134] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.accentGold : theme.primary,
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2.5px] rounded-full"
                    style={{ backgroundColor: theme.accentGold }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button, Portal & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <RoysonsPortalButton />
          <Link
            href="/group-companies/swiss-farm/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 xl:px-5 xl:py-2.5 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap shrink-0"
            style={{ backgroundColor: theme.primary }}
          >
            <span>Dairy Sourcing</span>
            <ArrowRight size={15} className="shrink-0" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.primary }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
                className="block text-[16px] font-bold tracking-wide uppercase py-2.5 px-3.5 rounded-lg transition-colors"
                style={{
                  backgroundColor: active ? "#F4F8F4" : "transparent",
                  color: active ? theme.accentGold : theme.primary,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/swiss-farm/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-xl text-[14.5px] font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.primary }}
            >
              <span>Bulk Dairy Sourcing</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Executive Forest Green Footer ─────────────────────────
export function SwissFarmFooter() {
  return (
    <footer
      className="border-t pt-12 pb-8"
      style={{
        borderColor: "rgba(224, 188, 111, 0.25)",
        backgroundColor: theme.primaryDark,
        color: "#FFFFFF",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.14)" }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/swiss-farm" className="inline-flex items-center gap-3.5 mb-5 select-none">
              <div className="w-14 h-14 rounded-2xl bg-white p-2 border-2 border-white/40 shadow-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/6.png"
                  alt="Swiss Farms Logo"
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="text-[19px] font-black uppercase tracking-wider leading-tight text-white">
                  Swiss Farms
                </p>
                <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase mt-0.5" style={{ color: theme.goldBright }}>
                  Dairy &amp; Livestock (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed mb-5 text-[#D8E8DC]">
              A pioneer in commercial dairy production, elite livestock genetics, computerized herd management, and cold-chain distribution producing over 120 Million liters of pure milk annually in Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[12.5px] font-bold"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(224, 188, 111, 0.35)",
                  color: "#FFFFFF",
                }}
              >
                <ShieldCheck size={15} style={{ color: theme.goldBright }} />
                <span>ISO 22000 Certified</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[12.5px] font-bold"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(224, 188, 111, 0.35)",
                  color: "#FFFFFF",
                }}
              >
                <HeartPulse size={15} style={{ color: theme.goldBright }} />
                <span>100% Animal Welfare</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-[13.5px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14.5px] font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#E3EFE6] hover:text-[#E0BC6F] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight size={14} style={{ color: theme.goldBright }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Dairy Capabilities */}
          <div className="lg:col-span-3">
            <h4
              className="text-[13.5px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              Dairy Capabilities
            </h4>
            <ul className="space-y-2.5 text-[14.5px] font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[#E3EFE6] hover:text-[#E0BC6F] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight size={14} style={{ color: theme.goldBright }} className="shrink-0" />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4
              className="text-[13.5px] font-black uppercase tracking-widest mb-4"
              style={{ color: theme.goldBright }}
            >
              Commercial Dairy Desk
            </h4>
            <div className="space-y-3 text-[14.5px] font-medium text-[#E3EFE6]">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: theme.goldBright }} />
                <span>First Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="flex-shrink-0" style={{ color: theme.goldBright }} />
                <a href="tel:00924238924737" className="hover:underline font-bold text-white">
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={18} className="flex-shrink-0" style={{ color: theme.goldBright }} />
                <a href="mailto:info@roysons.org" className="hover:underline text-white">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div
              className="mt-5 p-4 rounded-2xl border flex items-center gap-3"
              style={{
                backgroundColor: theme.primaryCard,
                borderColor: "rgba(224, 188, 111, 0.3)",
              }}
            >
              <Headphones size={24} style={{ color: theme.goldBright }} className="shrink-0" />
              <div>
                <p className="text-[13.5px] font-extrabold uppercase text-white">B2B Milk Procurement</p>
                <p className="text-[13px] font-medium text-[#D8E8DC]">Direct bulk cold-chain supplies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] font-medium text-[#C9DFCE]">
          <p>&copy; 2026 Swiss Farms Dairy &amp; Livestock (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/swiss-farm/contact" className="hover:underline text-[#E3EFE6] hover:text-[#E0BC6F]">
              Dairy Quality Standards
            </Link>
            <span>•</span>
            <Link href="/group-companies/swiss-farm/contact" className="hover:underline text-[#E3EFE6] hover:text-[#E0BC6F]">
              Livestock Supply Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
