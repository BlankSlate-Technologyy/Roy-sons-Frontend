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
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Compass,
  Hammer,
  ClipboardCheck,
  Sparkles,
  Leaf,
  Layers,
  Calendar,
  DollarSign,
  Check,
  Eye,
  Zap,
  Loader2,
} from "lucide-react";
import { PROPERTY_LISTINGS } from "../swiss-homes-data";

export const theme = {
  red: "#B01B2E", // Deep Swiss Red (logo primary)
  redHover: "#8E1524",
  redLight: "#FDF2F3",
  redBorder: "#E8B0B7",
  charcoal: "#1F2937", // Modern Deep Slate Charcoal
  charcoalDark: "#111827",
  white: "#FFFFFF",
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#4B5563",
  textLight: "#6B7280",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/swiss-homes" },
  { label: "About Us", href: "/group-companies/swiss-homes/about" },
  { label: "Services", href: "/group-companies/swiss-homes/services" },
  {
    label: "Projects & Properties",
    shortLabel: "Properties",
    href: "/group-companies/swiss-homes/projects",
  },
  { label: "Sustainability", href: "/group-companies/swiss-homes/sustainability" },
  { label: "Contact", href: "/group-companies/swiss-homes/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Residential Communities & Villas", href: "/group-companies/swiss-homes/projects#residential" },
  { label: "High-Rise Luxury Apartments", href: "/group-companies/swiss-homes/projects#apartments" },
  { label: "Commercial Towers & Business Arcades", href: "/group-companies/swiss-homes/projects#commercial" },
  { label: "Master Planning & Civil Works", href: "/group-companies/swiss-homes/services#master-planning" },
  { label: "Property Investment & ROI Advisory", href: "/group-companies/swiss-homes/services#investment" },
  { label: "Turnkey Architecture & Construction", href: "/group-companies/swiss-homes/services#construction" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.red }}
    >
      <HomeIcon size={14} style={{ color: theme.red }} />
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
      style={{ color: theme.charcoal }}
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

// ─── Reusable Navbar (Strict max-w-7xl mx-auto to eliminate 100% zoom stretch) ────
export function SwissHomesNavbar({ onOpenInquiry }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [internalInquiryOpen, setInternalInquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/swiss-homes") {
      return pathname === "/group-companies/swiss-homes" || pathname === "/group-companies/swiss-homes/";
    }
    return pathname.startsWith(href);
  };

  const handleInquiryClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      setInternalInquiryOpen(true);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
          scrolled ? "shadow-md py-2 sm:py-2.5" : "py-2.5 sm:py-3"
        }`}
        style={{
          borderBottom: `1px solid ${theme.border}`,
          backgroundColor: theme.white,
        }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-3 lg:gap-4">
          {/* Brand Logo */}
          <Link href="/group-companies/swiss-homes" className="flex items-center gap-2.5 sm:gap-3 select-none group shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 flex items-center justify-center flex-shrink-0">
              <Image
                src="/logos/15.png"
                alt="Swiss Homes Logo"
                width={72}
                height={72}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] font-black tracking-tight leading-none uppercase" style={{ color: theme.charcoal }}>
                Swiss Homes
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-widest uppercase mt-1" style={{ color: theme.red }}>
                Real Estate &amp; Housing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 2xl:gap-4 shrink-0">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11.5px] xl:text-[12px] 2xl:text-xs font-bold tracking-wide uppercase transition-all duration-200 relative py-1.5 px-2 xl:px-2.5 whitespace-nowrap hover:text-[#B01B2E] cursor-pointer"
                  style={{
                    color: active ? theme.red : theme.charcoal,
                  }}
                >
                  {link.shortLabel ? (
                    <>
                      <span className="inline xl:hidden">{link.shortLabel}</span>
                      <span className="hidden xl:inline">{link.label}</span>
                    </>
                  ) : (
                    link.label
                  )}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: theme.red }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl border transition-colors bg-white cursor-pointer"
              style={{ borderColor: theme.border, color: theme.charcoal }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
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
                  className="block text-xs font-bold tracking-wider uppercase py-2.5 px-3 rounded-xl transition-colors"
                  style={{
                    backgroundColor: active ? `${theme.red}12` : "transparent",
                    color: active ? theme.red : theme.charcoal,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Internal Modal if not provided externally */}
      {internalInquiryOpen && (
        <PropertyInquiryModal
          isOpen={internalInquiryOpen}
          onClose={() => setInternalInquiryOpen(false)}
        />
      )}
    </>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function SwissHomesFooter() {
  return (
    <footer
      className="border-t bg-white pt-16 pb-10"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.white,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/swiss-homes" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/15.png"
                  alt="Swiss Homes Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.charcoal }}>
                  Swiss Homes
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.red }}>
                  Real Estate &amp; Housing Development
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 text-slate-600">
              A premier real estate developer and master community builder creating luxury residential villas, high-rise luxury apartment towers, commercial business arcades, and sustainable gated communities across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50 text-slate-800" style={{ borderColor: theme.border }}>
                <ShieldCheck size={14} style={{ color: theme.red }} />
                <span>100% Legal &amp; LDA/CDA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50 text-slate-800" style={{ borderColor: theme.border }}>
                <Sparkles size={14} style={{ color: theme.red }} />
                <span>25,000+ Units Delivered</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.charcoal }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#B01B2E] flex items-center gap-1.5 text-slate-600"
                  >
                    <ChevronRight size={12} style={{ color: theme.red }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Estate Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.charcoal }}>
              Property Sectors
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#B01B2E] flex items-center gap-1.5 text-slate-600"
                  >
                    <ChevronRight size={12} style={{ color: theme.red }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.charcoal }}>
              Real Estate Sales Desk
            </h4>
            <div className="space-y-3 text-xs font-medium text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.red }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.red }} />
                <a href="tel:00924238924737" className="hover:underline font-bold text-slate-800">
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.red }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-slate-50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.red }} />
              <div>
                <p className="text-[11px] font-bold uppercase text-slate-800">Direct Property Advisory</p>
                <p className="text-[10.5px] font-medium text-slate-500">Site tours, installments &amp; transfers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>&copy; 2026 Swiss Homes Real Estate &amp; Housing (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/swiss-homes/contact" className="hover:underline hover:text-[#B01B2E]">
              Investor Protection Policy
            </Link>
            <span>•</span>
            <Link href="/group-companies/swiss-homes/contact" className="hover:underline hover:text-[#B01B2E]">
              Allotment Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Property Inquiry / Tour Modal ──────────────────────────────────
export function PropertyInquiryModal({ isOpen, onClose, preselectedProperty = null }) {
  const [formData, setFormData] = useState({
    propertyId: preselectedProperty?.id || "villa-swiss-enclave-1kanal",
    propertyTitle: preselectedProperty?.title || "Swiss Enclave 1 Kanal Executive Smart Villa",
    inquiryType: "Schedule Site Visit",
    buyerType: "End-User Family Residence",
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [refId, setRefId] = useState("");

  useEffect(() => {
    if (preselectedProperty) {
      setFormData((prev) => ({
        ...prev,
        propertyId: preselectedProperty.id,
        propertyTitle: preselectedProperty.title,
      }));
    }
  }, [preselectedProperty]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const randomRef = `SH-RE-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(randomRef);
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "swiss-homes",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.propertyTitle || "Swiss Homes Property Booking",
          subject: `Property Inquiry: ${formData.propertyTitle} (${formData.inquiryType})`,
          message: `Property: ${formData.propertyTitle}\nInquiry Type: ${formData.inquiryType}\nBuyer Profile: ${formData.buyerType}\nPreferred Visit Date: ${formData.preferredDate || "N/A"}\nRef: ${randomRef}\nRequirements: ${formData.message || "N/A"}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit inquiry");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border overflow-hidden my-8" style={{ borderColor: theme.border }}>
        {/* Modal Header */}
        <div className="bg-[#1F2937] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B01B2E]/20 flex items-center justify-center text-[#B01B2E]">
              <HomeIcon size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                {submitted ? "Inquiry Registered" : "Inquire & Schedule Property Tour"}
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                {submitted ? "Our senior property consultant will connect shortly" : "Direct developer pricing & priority site visits"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#B01B2E] block mb-1">
                Reference ID: {refId}
              </span>
              <h4 className="text-2xl font-black text-[#1F2937] mb-2">Thank You, {formData.fullName}!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your inquiry for <strong className="text-slate-800">{formData.propertyTitle}</strong> has been logged. Our Senior Relationship Officer will share complete brochures, payment schedules, and schedule your private site walkthrough.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border max-w-md mx-auto text-left text-xs space-y-2 mb-6" style={{ borderColor: theme.border }}>
                <div className="flex justify-between">
                  <span className="text-slate-500">Property:</span>
                  <span className="font-bold text-slate-800">{formData.propertyTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Required:</span>
                  <span className="font-bold text-slate-800">{formData.inquiryType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Buyer Profile:</span>
                  <span className="font-bold text-slate-800">{formData.buyerType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">WhatsApp / Phone:</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923047527498?text=Hello%20Swiss%20Homes,%20I%20have%20submitted%20property%20inquiry%20${refId}%20for%20${encodeURIComponent(formData.propertyTitle)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  <span>Connect on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-medium">
                  {error}
                </div>
              )}
              {/* Property Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#1F2937] mb-1.5">
                  Select Property or Project
                </label>
                <select
                  value={formData.propertyTitle}
                  onChange={(e) => setFormData({ ...formData, propertyTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-semibold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B01B2E]"
                  style={{ borderColor: theme.border }}
                  required
                >
                  {PROPERTY_LISTINGS.map((p) => (
                    <option key={p.id} value={p.title}>
                      [{p.category}] {p.title} — {p.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Type & Buyer Profile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="Schedule Site Visit">Schedule Site Visit &amp; Tour</option>
                    <option value="Request Payment Plan">Request Payment Plan / Installments</option>
                    <option value="Direct Purchase / Booking">Direct Purchase / Booking</option>
                    <option value="Investor Bulk Portfolio">Investor Bulk Portfolio Advisory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Buyer Category</label>
                  <select
                    value={formData.buyerType}
                    onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="End-User Family Residence">End-User Family Residence</option>
                    <option value="Overseas Pakistani Investor">Overseas Pakistani Investor</option>
                    <option value="Commercial Business Owner">Commercial Business Owner</option>
                    <option value="Corporate Enterprise">Corporate Enterprise Buyer</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Asad Ullah Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 321 8431665"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. buyer@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Visit Date (Optional)</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Questions / Custom Requirements (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in 1 Kanal corner villa, installment schedule, possession date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#B01B2E]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-[#B01B2E]" />
                  <span>No commission · Direct developer desk</span>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Property Inquiry</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Property Detail Modal ──────────────────────────────────────────
export function PropertyDetailModal({ property, onClose, onInquireNow }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border overflow-hidden my-8" style={{ borderColor: theme.border }}>
        {/* Header Visual */}
        <div className="relative w-full h-64 sm:h-72 bg-slate-900">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-white/95 text-[#1F2937] shadow-sm">
              {property.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B01B2E] bg-white/95 px-2.5 py-0.5 rounded-sm inline-block mb-2">
              {property.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black leading-tight mb-1">{property.title}</h3>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#B01B2E]" />
                {property.location}
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {property.status}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
            <p className="text-sm font-medium leading-relaxed text-slate-700">{property.summary}</p>
          </div>

          {/* Technical Specs Grid */}
          {property.specs && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Key Specifications</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                {Object.entries(property.specs).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[10px] uppercase font-bold text-slate-400">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-xs font-black text-slate-800">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Features */}
          {property.features && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                Architectural &amp; Community Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-[#B01B2E] flex items-center justify-center flex-shrink-0">
                      <Check size={12} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Plan */}
          {property.installmentPlan && (
            <div className="p-4 rounded-2xl bg-red-50/60 border border-[#B01B2E]/20">
              <p className="text-[10.5px] font-black uppercase text-[#B01B2E] tracking-wider mb-1">
                Payment &amp; Installment Terms:
              </p>
              <p className="text-xs font-bold text-slate-800">{property.installmentPlan}</p>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: theme.border }}>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Pricing / Quotation</p>
              <p className="text-xl font-black text-[#B01B2E]">{property.price}</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
                style={{ borderColor: theme.border }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onInquireNow) onInquireNow(property);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <HomeIcon size={14} />
                <span>Inquire / Schedule Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
