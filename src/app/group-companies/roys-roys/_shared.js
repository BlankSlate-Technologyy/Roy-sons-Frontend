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
  { label: "Services",   href: "/group-companies/roys-roys/services" },
  { label: "Industries", href: "/group-companies/roys-roys/industries" },
  { label: "Solutions",  href: "/group-companies/roys-roys/solutions" },
  { label: "Resources",  href: "/group-companies/roys-roys/what-we-do" },
  { label: "Contact",    href: "/group-companies/roys-roys/contact" },
];

// ─── Shared Navbar ────────────────────────────────────────────────────────────
export function RoysNavbar({ active = "Home" }) {
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
        scrolled ? "shadow-md py-2 sm:py-2.5" : "py-3 sm:py-3.5"
      }`}
      style={{
        borderBottom: `1px solid ${C.border}`,
        backgroundColor: C.white,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/group-companies/roys-roys" className="flex items-center gap-2.5 select-none group">
          <Image
            src="/roys logo.png"
            alt="ROYS & ROYS INTERNATIONAL"
            width={170}
            height={55}
            className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = item.label.toLowerCase() === active.toLowerCase();
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-bold tracking-tight transition-colors relative py-1 px-1"
                style={{
                  color: isActive ? "#2563eb" : "#0f2b48",
                }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-full bg-[#2563eb]" : "w-0 hover:w-full bg-[#2563eb]"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/roys-roys/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-[12.5px] font-bold tracking-tight text-white shadow-sm transition-all duration-300 hover:bg-[#091b2c] cursor-pointer"
            style={{ backgroundColor: "#0f2b48" }}
          >
            <span>Request a Quote</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors bg-white cursor-pointer"
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
                className="block text-sm font-bold tracking-tight py-2 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive ? "#eff6ff" : "transparent",
                  color: isActive ? "#2563eb" : "#0f2b48",
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
              className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-sm"
              style={{ backgroundColor: "#0f2b48" }}
            >
              <span>Request a Quote</span>
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

  const footerNav = [
    {
      heading: "Company",
      links: [
        { label: "About Us",       href: "/group-companies/roys-roys/about" },
        { label: "Our Leadership", href: "/group-companies/roys-roys/about" },
        { label: "Careers",        href: "/group-companies/roys-roys/about" },
        { label: "News & Media",   href: "/group-companies/roys-roys/about" },
        { label: "CSR",            href: "/group-companies/roys-roys/about" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Our Services",        href: "/group-companies/roys-roys/services" },
        { label: "Turnkey Solutions",   href: "/group-companies/roys-roys/solutions" },
        { label: "Equipment Supply",    href: "/group-companies/roys-roys/products" },
        { label: "Facility Management", href: "/group-companies/roys-roys/services" },
        { label: "Consultancy",         href: "/group-companies/roys-roys/what-we-do" },
      ],
    },
    {
      heading: "Industries",
      links: [
        { label: "Healthcare",          href: "/group-companies/roys-roys/industries/hospitals" },
        { label: "Government",          href: "/group-companies/roys-roys/industries/government" },
        { label: "Military & Defence",   href: "/group-companies/roys-roys/industries/military-healthcare" },
        { label: "Education",           href: "/group-companies/roys-roys/industries/universities" },
        { label: "Corporate",           href: "/group-companies/roys-roys/industries/pharmaceutical-industry" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Case Studies",  href: "/group-companies/roys-roys/what-we-do" },
        { label: "Brochures",     href: "/group-companies/roys-roys/what-we-do" },
        { label: "Whitepapers",   href: "/group-companies/roys-roys/what-we-do" },
        { label: "Blog",          href: "/group-companies/roys-roys/what-we-do" },
        { label: "FAQ",           href: "/group-companies/roys-roys/about" },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: "#061527" }} className="text-white">
      {/* Upper Footer (6 Columns Grid) */}
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Column 1: Brand */}
        <div className="lg:col-span-1">
          <Image
            src="/roysandroys white log.png"
            alt="ROYS & ROYS"
            width={140}
            height={45}
            className="object-contain mb-4"
          />
          <p className="text-xs leading-relaxed text-slate-300 mb-4">
            Roys &amp; Roys™ International is a global leader in healthcare infrastructure and institutional solutions.
          </p>
          <div className="flex gap-2.5 text-slate-400">
            {["in", "x", "f", "yt"].map((soc) => (
              <span
                key={soc}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                {soc}
              </span>
            ))}
          </div>
        </div>

        {/* Columns 2-5: Nav Columns */}
        {footerNav.map((sec) => (
          <div key={sec.heading}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {sec.heading}
            </h4>
            <ul className="space-y-2">
              {sec.links.map((lnk) => (
                <li key={lnk.label}>
                  <Link
                    href={lnk.href}
                    className="text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    {lnk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 6: Contact Us */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
            Contact Us
          </h4>
          <div className="space-y-2 text-xs text-slate-300 mb-4">
            <p className="flex items-center gap-1.5">
              <span>📞</span>
              <span>+92 42 111 786 786</span>
            </p>
            <p className="flex items-center gap-1.5">
              <span>✉</span>
              <span>info@roysroys.com</span>
            </p>
            <p className="flex items-center gap-1.5">
              <span>📍</span>
              <span>Lahore, Pakistan</span>
            </p>
          </div>
          <Link
            href="/group-companies/roys-roys/contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold tracking-wide text-[#B49438] border border-[#B49438] hover:bg-[#B49438] hover:text-[#061527] transition-colors"
          >
            <span>Request a Quote</span>
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-6">
        <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Roys &amp; Roys™ International. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/group-companies/roys-roys/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/group-companies/roys-roys/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/group-companies/roys-roys" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>
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
