"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../biomax.css";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const COLORS = {
  primary:    "#165B7E",      // Primary Teal-Blue from logo "BIO MAX" & cross
  primaryDk:  "#0D3A52",      // Dark Navy Teal
  ink:        "#165B7E",      // Headings & titles
  green:      "#1D906C",      // DNA Emerald Green
  accent:     "#1D906C",      // DNA Emerald Green
  accentRed:  "#7B1C2A",      // Crimson Red from "CORPORATION"
  white:      "#FFFFFF",      // Pure White Background
  lightBg:    "#FFFFFF",      // White
  lightGreen: "#FFFFFF",      // White
  muted:      "#1F4E68",      // Medium Slate Teal-Blue Body Text
  border:     "#D0E2EE",      // Clean Soft Border
  borderGreen: "#CBE8D9",
  footerBg:   "#0D2B3D",      // Deep Brand Navy Teal Footer
};

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/biomax" },
  { label: "About Us", href: "/group-companies/biomax/about" },
  { label: "Products & Solutions", href: "/group-companies/biomax/solutions" },
  { label: "Research & Development", href: "/group-companies/biomax/rnd" },
  { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
  { label: "Industries", href: "/group-companies/biomax/industries" },
  { label: "Contact Us", href: "/group-companies/biomax/contact" },
];

export const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "/group-companies/biomax" },
    { label: "About Us", href: "/group-companies/biomax/about" },
    { label: "Products & Solutions", href: "/group-companies/biomax/solutions" },
    { label: "Research & Development", href: "/group-companies/biomax/rnd" },
    { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
    { label: "Industries", href: "/group-companies/biomax/industries" },
    { label: "Contact Us", href: "/group-companies/biomax/contact" },
  ],
  "Product Portfolios": [
    { label: "Laboratory Equipment", href: "/group-companies/biomax/solutions#lab-equipment" },
    { label: "Diagnostic Equipment", href: "/group-companies/biomax/solutions#diagnostic-equipment" },
    { label: "Biotechnology Solutions", href: "/group-companies/biomax/solutions#biotech-solutions" },
    { label: "Laboratory Consumables", href: "/group-companies/biomax/solutions#consumables" },
    { label: "Scientific Instruments", href: "/group-companies/biomax/solutions#scientific-instruments" },
  ],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Hero Primary Button (Teal-Blue bg → Green on hover, white text) ───────────
export function HeroPrimaryButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-lg text-[13.5px] font-bold flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer text-white hover:text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? COLORS.accent : COLORS.primary,
        color: "#FFFFFF",
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 8px 20px rgba(22,91,126,0.35)" : "0 3px 10px rgba(22,91,126,0.2)",
      }}
    >
      <span className="text-white flex items-center gap-2" style={{ color: "#FFFFFF" }}>{children}</span>
    </Link>
  );
}

// ─── Hero Outline Button (Green text + border → Teal-Blue bg + white text on hover) ─
export function HeroOutlineButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-lg text-[13.5px] font-bold border-2 bg-white flex items-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? COLORS.primary : COLORS.accent,
        backgroundColor: isHovered ? COLORS.primary : "#FFFFFF",
        color: isHovered ? "#FFFFFF" : COLORS.accent,
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 8px 20px rgba(22,91,126,0.2)" : "none",
      }}
    >
      <span className="flex items-center gap-2" style={{ color: isHovered ? "#FFFFFF" : COLORS.accent }}>{children}</span>
    </Link>
  );
}

// ─── Reusable Navbar Component ────────────────────────────────────────────────
export function BiomaxNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/biomax") {
      return pathname === "/group-companies/biomax";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all"
      style={{ borderColor: COLORS.border }}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/biomax" className="flex items-center">
          <div className="relative flex items-center py-1">
            <Image
              src="/logo.png"
              alt="BIO MAX CORPORATION Logo"
              width={260}
              height={85}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14.5px] font-bold py-1 transition-colors hover:text-[#1D906C]"
                style={{
                  color: active ? COLORS.accent : COLORS.primary,
                  borderBottom: active ? `2px solid ${COLORS.accent}` : "2px solid transparent",
                  paddingBottom: "4px",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/group-companies/biomax/contact"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            className="hidden md:flex px-5 py-2.5 rounded-md text-[13px] font-bold text-white items-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: btnHover ? COLORS.accent : COLORS.primary,
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Get in Touch</span>
            <ArrowRight size={14} style={{ color: "#FFFFFF" }} />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: COLORS.primary }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-4 space-y-3 bg-white"
          style={{ borderColor: COLORS.border }}
        >
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[14px] font-bold py-2 transition-colors"
                style={{ color: active ? COLORS.accent : COLORS.primary }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/biomax/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-md text-[13px] font-bold text-white flex items-center justify-center gap-2"
              style={{ backgroundColor: COLORS.primary, color: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF" }}>Get in Touch</span>
              <ArrowRight size={14} style={{ color: "#FFFFFF" }} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Reusable Footer Component ────────────────────────────────────────────────
export function BiomaxFooter() {
  return (
    <footer className="py-14 px-6 mt-6" style={{ backgroundColor: COLORS.footerBg }}>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 text-white">
        {/* Brand Description Column */}
        <div className="lg:col-span-3 max-w-xs">
          <div className="bg-white px-4 py-2 rounded-xl inline-flex items-center justify-center mb-4 shadow-sm">
            <Image
              src="/logo.png"
              alt="BIO MAX CORPORATION Logo"
              width={240}
              height={75}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="text-[12px] leading-relaxed mb-5" style={{ color: "#FFFFFF" }}>
            Delivering trusted laboratory equipment, diagnostic systems, biotechnology workflows, and precision scientific instruments worldwide.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-[#1D906C] hover:border-[#1D906C] transition-all cursor-pointer text-white"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
              >
                <Icon size={13} style={{ color: "#FFFFFF" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links & Product Portfolios */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4 text-white" style={{ color: "#FFFFFF" }}>
              {heading}
            </h5>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] hover:text-[#1D906C] transition-colors text-white cursor-pointer"
                    style={{ color: "rgba(255,255,255,0.95)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Information */}
        <div className="lg:col-span-5">
          <h5 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4 text-white" style={{ color: "#FFFFFF" }}>
            Contact Information
          </h5>
          <div className="space-y-3">
            <p className="text-[12px] flex items-start gap-2.5 text-white" style={{ color: "#FFFFFF" }}>
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
            </p>
            <p className="text-[12px] flex items-start gap-2.5 text-white" style={{ color: "#FFFFFF" }}>
              <Phone size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              0092-42-38924737
            </p>
            <p className="text-[12px] flex items-start gap-2.5 text-white" style={{ color: "#FFFFFF" }}>
              <Phone size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              WhatsApp: 0092-304-7527498 | 0092-321-8431665
            </p>
            <p className="text-[12px] flex items-start gap-2.5 text-white" style={{ color: "#FFFFFF" }}>
              <Mail size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              info@roysons.org | support@roysons.org
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="mx-auto max-w-screen-xl mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        <p className="text-[11.5px] text-white" style={{ color: "rgba(255,255,255,0.85)" }}>
          &copy; 2026 BIO MAX CORPORATION. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/group-companies/biomax" className="text-[11.5px] text-white/80 hover:text-white transition-colors">
            Return to BioMax Overview
          </Link>
        </div>
      </div>
    </footer>
  );
}
