"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const COLORS = {
  primary: "#094C80",
  primaryDk: "#0B2745",
  ink: "#0B2745",
  green: "#1E855C",
  white: "#FFFFFF",
  lightBg: "#EAF3F8",
  lightGreen: "#EAF6F0",
  muted: "#4B6178",
  border: "#D0E2EE",
  borderGreen: "#CBE8D9",
  footerBg: "#071B30",
};

const NAV_LINKS = [
  { label: "Home", href: "/group-companies/Vetvacpharma" },
  { label: "About Us", href: "/group-companies/Vetvacpharma/about" },
  { label: "Products & Solutions", href: "/group-companies/Vetvacpharma/solutions" },
  { label: "R&D & Quality", href: "/group-companies/Vetvacpharma/rnd" },
  { label: "Industries", href: "/group-companies/Vetvacpharma/industries" },
  { label: "Contact Us", href: "/group-companies/Vetvacpharma/contact" },
];

const FOOTER_LINKS = {
  Company: ["About Us", "Our Mission", "Our Team", "Careers", "News & Updates"],
  Products: ["Vaccines", "Biologicals", "Medicines", "Supplements", "Biosecurity"],
  Solutions: ["Livestock Healthcare", "Poultry Healthcare", "Pet Healthcare", "Aquaculture Solutions", "Custom Solutions"],
  Resources: ["Product Catalog", "Technical Library", "FAQs", "Downloads", "Blog"],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Primary Button ────────────────────────────────────────────────────────────
function PrimaryButton({ href, children, className = "", onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={`vetvac-primary-btn px-6 py-3 rounded-md text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-white hover:text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? COLORS.green : COLORS.primary,
        color: "#FFFFFF",
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 6px 18px rgba(9, 76, 128, 0.3)" : "0 2px 6px rgba(9, 76, 128, 0.15)",
      }}
    >
      <span className="text-white" style={{ color: "#FFFFFF" }}>{children}</span>
    </a>
  );
}

// ─── Hero Primary Button (Blue bg → Green on hover, white text) ───────────────
export function HeroPrimaryButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className={`vetvac-primary-btn px-6 py-3 rounded-lg text-[13.5px] font-bold flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer text-white hover:text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? COLORS.green : COLORS.primary,
        color: "#FFFFFF",
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 8px 20px rgba(9,76,128,0.35)" : "0 3px 10px rgba(9,76,128,0.2)",
      }}
    >
      <span className="text-white flex items-center gap-2" style={{ color: "#FFFFFF" }}>{children}</span>
    </a>
  );
}

// ─── Hero Outline Button (Green text + border → Blue bg + white text on hover) ─
export function HeroOutlineButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-lg text-[13.5px] font-bold border-2 flex items-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? COLORS.primary : COLORS.border,
        backgroundColor: isHovered ? COLORS.primary : COLORS.white,
        color: isHovered ? "#FFFFFF" : COLORS.green,
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 6px 16px rgba(9,76,128,0.2)" : "none",
      }}
    >
      <span style={{ color: isHovered ? "#FFFFFF" : COLORS.green }} className="flex items-center gap-2">{children}</span>
    </a>
  );
}

// ─── Shared Navbar ─────────────────────────────────────────────────────────────
export function VetvacNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all"
      style={{ borderColor: COLORS.border }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/group-companies/Vetvacpharma" className="flex items-center">
          <div className="relative flex items-center">
            <Image
              src="/logo (1).png"
              alt="VET VAC PHARMA Logo"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[11.5px] xl:text-xs font-bold uppercase tracking-wider py-1 px-1 transition-colors hover:text-[#1E855C]"
                style={{
                  color: isActive ? COLORS.primary : COLORS.green,
                }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: COLORS.primary }}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/Vetvacpharma/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Inquire Now</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: COLORS.border, color: COLORS.green }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-5 py-4 space-y-2 bg-white shadow-xl"
          style={{ borderColor: COLORS.border }}
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-bold tracking-wider uppercase py-2 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: isActive ? `${COLORS.primary}12` : "transparent",
                  color: isActive ? COLORS.primary : COLORS.green,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/Vetvacpharma/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span>Submit Pharma Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Shared Footer ─────────────────────────────────────────────────────────────
export function VetvacFooter() {
  return (
    <footer
      className="py-14 px-6 mt-4"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 max-w-xs">
          <div className="flex items-center mb-4">
            <div className="bg-white px-4 py-2 rounded-xl flex items-center justify-center shadow-sm">
              <Image
                src="/logo (1).png"
                alt="VET VAC PHARMA Logo"
                width={240}
                height={75}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
          </div>
          <p
            className="text-[12px] leading-relaxed mb-5"
            style={{ color: "#FFFFFF" }}
          >
            Delivering trusted veterinary healthcare solutions to improve animal
            health, productivity, and quality of life.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}
              >
                <Icon size={13} style={{ color: "#FFFFFF" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4 text-white" style={{ color: "#FFFFFF" }}>
              {heading}
            </h5>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[12px] hover:text-white transition-colors text-white"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="lg:col-span-2">
          <h5 className="text-[12px] font-black uppercase tracking-[0.14em] mb-4 text-white" style={{ color: "#FFFFFF" }}>
            Contact Us
          </h5>
          <div className="space-y-3">
            <p
              className="text-[12px] flex items-start gap-2.5 text-white"
              style={{ color: "#FFFFFF" }}
            >
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
            </p>
            <p
              className="text-[12px] flex items-start gap-2.5 text-white"
              style={{ color: "#FFFFFF" }}
            >
              <Phone size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              0092-42-38924737
            </p>
            <p
              className="text-[12px] flex items-start gap-2.5 text-white"
              style={{ color: "#FFFFFF" }}
            >
              <Phone size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              WhatsApp: 0092-304-7527498 | 0092-321-8431665
            </p>
            <p
              className="text-[12px] flex items-start gap-2.5 text-white"
              style={{ color: "#FFFFFF" }}
            >
              <Mail size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              info@roysons.org
            </p>
            <p
              className="text-[12px] flex items-start gap-2.5 text-white"
              style={{ color: "#FFFFFF" }}
            >
              <Mail size={15} className="flex-shrink-0 mt-0.5 text-white" style={{ color: "#FFFFFF" }} />
              support@roysons.org
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="mx-auto max-w-screen-xl mt-10 pt-6 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        <p
          className="text-[11.5px] text-white"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          &copy; 2025 VET VAC PHARMA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
