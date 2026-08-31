"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

// ─── Shared Design Tokens ─────────────────────────────────────────────────────
export const C = {
  primary:     "#113658",
  primaryDark: "#0a2238",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  footerBg:    "#020f1f",
  border:      "#e2e8f0",
  light:       "#f8fafc",
  teal:        "#009088",
  muted:       "#4a5568",
};

export const NAV_LINKS = [
  { label: "Home",        href: "/group-companies/roys-roys" },
  { label: "About Us",   href: "/group-companies/roys-roys/about" },
  { label: "Solutions",  href: "/group-companies/roys-roys/solutions" },
  { label: "Products",   href: "/group-companies/roys-roys/products" },
  { label: "Industries", href: "/group-companies/roys-roys/industries" },
  { label: "What We Do", href: "/group-companies/roys-roys/what-we-do" },
  { label: "Contact",    href: "/group-companies/roys-roys/contact" },
];

// ─── Shared Navbar ────────────────────────────────────────────────────────────
export function RoysNavbar({ active = "" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.classList.remove("roys-roys-theme");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        scrolled ? "shadow-md py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      }`}
      style={{
        borderBottom: `1px solid ${C.border}`,
        backgroundColor: C.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/group-companies/roys-roys" className="flex items-center gap-2.5 select-none group">
          <div className="relative flex items-center">
            <Image
              src="/logos/r&r.png"
              alt="ROYS & ROYS INTERNATIONAL"
              width={260}
              height={80}
              className="h-14 sm:h-16 lg:h-[68px] w-auto object-contain group-hover:opacity-95 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((item) => {
            const isActive = item.label.toLowerCase() === active.toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11.5px] xl:text-xs font-bold tracking-wide uppercase transition-colors relative py-1 px-1 hover:text-[#009088]"
                style={{
                  color: isActive ? C.teal : C.primary,
                }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: C.teal }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/roys-roys/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: C.primary }}
          >
            <span>Inquire Now</span>
            <ArrowRight size={13} />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: C.border, color: C.primary }}
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
          style={{ borderColor: C.border }}
        >
          {NAV_LINKS.map((item) => {
            const isActive = item.label.toLowerCase() === active.toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-bold tracking-wider uppercase py-2 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive ? `${C.teal}15` : "transparent",
                  color: isActive ? C.teal : C.primary,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/roys-roys/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: C.primary }}
            >
              <span>Submit Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Shared Footer ────────────────────────────────────────────────────────────
export function RoysFooter() {
  const [hovered, setHovered] = useState(null);

  const footerSections = [
    {
      heading: "Core Services",
      links: [
        { label: "Healthcare Technologies",    href: "/group-companies/roys-roys/services/healthcare-technologies" },
        { label: "Hospital Engineering",        href: "/group-companies/roys-roys/services/hospital-engineering" },
        { label: "Clean Room & HVAC",            href: "/group-companies/roys-roys/services/clean-room-hvac" },
        { label: "Laboratory Solutions",        href: "/group-companies/roys-roys/services/laboratory-solutions" },
        { label: "Pharmaceutical Consultancy",  href: "/group-companies/roys-roys/services/pharmaceutical-consultancy" },
        { label: "International Procurement",   href: "/group-companies/roys-roys/services/international-procurement" },
        { label: "Biomedical Services",         href: "/group-companies/roys-roys/services/biomedical-services" },
      ],
    },
    {
      heading: "Products",
      links: [
        { label: "Medical Equipment",      href: "/group-companies/roys-roys/products#medical" },
        { label: "Laboratory Equipment",   href: "/group-companies/roys-roys/products#laboratory" },
        { label: "Surgical Instruments",   href: "/group-companies/roys-roys/products#surgical" },
        { label: "Hospital Equipment",     href: "/group-companies/roys-roys/products#hospital" },
        { label: "Medical Supplies",       href: "/group-companies/roys-roys/products#supplies" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us",   href: "/group-companies/roys-roys/about" },
        { label: "Solutions",  href: "/group-companies/roys-roys/solutions" },
        { label: "Industries", href: "/group-companies/roys-roys/industries" },
        { label: "What We Do", href: "/group-companies/roys-roys/what-we-do" },
        { label: "Contact",    href: "/group-companies/roys-roys/contact" },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: C.footerBg }}>
      {/* Upper Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 44px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Brand Column */}
        <div style={{ maxWidth: "340px" }}>
          <Image
            src="/logos/r&r.png"
            alt="ROYS & ROYS INTERNATIONAL"
            width={200}
            height={60}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: "20px" }}
          />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px" }}>
            A healthcare solutions and international trading company providing medical, laboratory, surgical, and hospital engineering solutions to healthcare institutions worldwide.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>info@roysroysinternational.com</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Lahore, Pakistan</p>
          </div>
        </div>

        {/* Link Columns */}
        {footerSections.map((section) => (
          <div key={section.heading}>
            <h4
              style={{
                color: C.gold,
                fontSize: "12px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "20px",
              }}
            >
              {section.heading}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: hovered === link.label ? C.white : "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Copyright bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "22px 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
          © {new Date().getFullYear()} ROYS & ROYS International — A Member of the ROYSONS Pvt. Ltd. Group. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms & Conditions"].map((t) => (
            <Link
              key={t}
              href="/privacy-policy"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "12px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.white)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Shared Button Component ──────────────────────────────────────────────────
// Requirement: on hover => text: white, background: blue (C.primary or C.primaryDark)
export function RoysButton({ href, onClick, children, variant = "primary", style: extraStyle = {} }) {
  const [hov, setHov] = useState(false);

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "800",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.25s ease-out",
    boxShadow: hov ? "0 4px 14px rgba(17, 54, 88, 0.3)" : "none",
    ...extraStyle,
  };

  const variants = {
    // Normal primary: blue background, white text. Hover: darker blue / teal background, white text
    primary: {
      backgroundColor: hov ? C.teal : C.primary,
      color: C.white,
      border: `1.5px solid ${hov ? C.teal : C.primary}`,
    },
    // Outline button: blue border & blue text. On HOVER => blue background & white text
    outline: {
      backgroundColor: hov ? C.primary : "transparent",
      color: hov ? C.white : C.primary,
      border: `1.5px solid ${C.primary}`,
    },
    // Gold button: gold bg, white text. On HOVER => blue background & white text
    gold: {
      backgroundColor: hov ? C.primary : C.gold,
      color: C.white,
      border: `1.5px solid ${hov ? C.primary : C.gold}`,
    },
    // Outline white (for dark backgrounds): white border & white text. On HOVER => blue background & white text
    "outline-white": {
      backgroundColor: hov ? C.primary : "transparent",
      color: C.white,
      border: `1.5px solid ${hov ? C.primary : "rgba(255,255,255,0.6)"}`,
    },
  };

  const combinedStyle = { ...base, ...(variants[variant] || variants.primary) };

  if (href) {
    return (
      <Link
        href={href}
        style={combinedStyle}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
}

// ─── Section Heading helper ───────────────────────────────────────────────────
export function SectionHeading({ eyebrow, title, light = false, centered = true, subtitle }) {
  return (
    <div style={{ marginBottom: "52px", textAlign: centered ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            color: light ? C.gold : C.primary,
            fontSize: "12px",
            fontWeight: "800",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          color: light ? C.white : C.primary,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          fontWeight: "900",
          lineHeight: "1.2",
          letterSpacing: "-0.01em",
          marginBottom: subtitle ? "14px" : "0",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: light ? "rgba(255,255,255,0.75)" : C.muted, fontSize: "16px", lineHeight: "1.75", maxWidth: "600px", margin: centered ? "0 auto" : "0" }}>
          {subtitle}
        </p>
      )}
      <div
        style={{
          width: "48px",
          height: "4px",
          backgroundColor: light ? C.gold : C.primary,
          borderRadius: "2px",
          margin: centered ? "18px auto 0" : "18px 0 0",
        }}
      />
    </div>
  );
}
