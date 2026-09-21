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
  Factory,
  Snowflake,
  Package,
  Boxes,
  FlaskConical,
  Milk,
  Wheat,
  Sparkles,
  Check,
  HelpCircle,
  FileText,
  CalendarCheck,
  SlidersHorizontal,
  Info,
  Loader2,
} from "lucide-react";
import { FOOD_LISTINGS } from "../walton-food-data";

export const theme = {
  green: "#1E6B43", // Official Forest Green
  greenDark: "#134A2D",
  ochre: "#D89C46", // Official Golden Harvest Ochre
  ochreHover: "#BC8330",
  navy: "#0B1B36", // Official Deep Navy
  navyDark: "#061022",
  white: "#FFFFFF",
  bgLight: "#F8FAF8",
  border: "#DCE7DF",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/walton-mirror-food" },
  { label: "About Us", href: "/group-companies/walton-mirror-food/about" },
  { label: "Services", href: "/group-companies/walton-mirror-food/services" },
  {
    label: "Products & Listings",
    shortLabel: "Products",
    href: "/group-companies/walton-mirror-food/solutions",
  },
  {
    label: "Projects & Facilities",
    shortLabel: "Facilities",
    href: "/group-companies/walton-mirror-food/projects",
  },
  { label: "Sustainability", href: "/group-companies/walton-mirror-food/sustainability" },
  { label: "Contact", href: "/group-companies/walton-mirror-food/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Automated Food Processing & Canning", href: "/group-companies/walton-mirror-food/services#modern-processing" },
  { label: "Cryogenic IQF Flash Freezing (-38°C)", href: "/group-companies/walton-mirror-food/services#frozen-production" },
  { label: "Packaged Consumer Goods (FMCG Manufacturing)", href: "/group-companies/walton-mirror-food/services#packaged-goods" },
  { label: "Turnkey Private Label & OEM Co-Packing", href: "/group-companies/walton-mirror-food/services#private-label" },
  { label: "Culinary R&D & Recipe Formulation Lab", href: "/group-companies/walton-mirror-food/services#food-rd" },
  { label: "HACCP & ISO 22000 Quality Assurance", href: "/group-companies/walton-mirror-food/services#quality-assurance" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.18em] mb-4 bg-emerald-50/70 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.green }}
    >
      <Factory size={14} style={{ color: theme.ochre }} />
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
      style={{ color: theme.greenDark }}
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

// ─── Reusable Navbar (Constrained to max-w-7xl, Eliminates 100% zoom stretching) ───
export function WaltonFoodNavbar({ onOpenWholesaleModal }) {
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
    if (href === "/group-companies/walton-mirror-food") {
      return pathname === "/group-companies/walton-mirror-food" || pathname === "/group-companies/walton-mirror-food/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        scrolled ? "shadow-md py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
        backgroundColor: theme.white,
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4">
        {/* Brand Logo */}
        <Link href="/group-companies/walton-mirror-food" className="flex items-center gap-2.5 sm:gap-3 select-none group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-xl overflow-hidden border p-0.5 bg-white shadow-xs flex items-center justify-center shrink-0" style={{ borderColor: theme.border }}>
            <Image
              src="/walton&mirrorfood.jpeg"
              alt="Walton &amp; Mirror Food Logo"
              width={56}
              height={56}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-[15px] sm:text-base lg:text-[17px] xl:text-[17.5px] font-black tracking-tight leading-tight uppercase whitespace-nowrap" style={{ color: theme.greenDark }}>
              Walton &amp; Mirror Food
            </span>
            <span className="text-[9.5px] sm:text-[10px] xl:text-[10.5px] font-bold tracking-wider uppercase mt-0.5 whitespace-nowrap" style={{ color: theme.ochre }}>
              Food Processing &amp; Production
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Bold & highly legible font */}
        <nav className="hidden lg:flex items-center justify-end gap-3.5 xl:gap-5.5 2xl:gap-7 shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14.5px] xl:text-[16px] font-bold tracking-normal uppercase transition-all duration-200 relative py-1.5 px-0.5 hover:text-[#1E6B43] cursor-pointer whitespace-nowrap"
                style={{
                  color: active ? theme.green : theme.greenDark,
                }}
              >
                <span>{link.label}</span>
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full"
                    style={{ backgroundColor: theme.green }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <RoysonsPortalButton />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.greenDark }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 sm:px-6 py-4 space-y-2 bg-white shadow-xl max-w-7xl mx-auto"
          style={{ borderColor: theme.border }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[15px] sm:text-[16px] font-bold tracking-wide uppercase py-2.5 px-3.5 rounded-xl transition-colors"
                style={{
                  backgroundColor: active ? `${theme.green}14` : "transparent",
                  color: active ? theme.green : theme.greenDark,
                }}
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

// ─── Reusable Footer ────────────────────────────────────────────────
export function WaltonFoodFooter() {
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
            <Link href="/group-companies/walton-mirror-food" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/walton&mirrorfood.jpeg"
                  alt="Walton &amp; Mirror Food Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.greenDark }}>
                  Walton &amp; Mirror Food
                </p>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase mt-0.5" style={{ color: theme.ochre }}>
                  Food Processing &amp; Production (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Producing pure quality food, nourishing every generation. Walton &amp; Mirror Food specializes in industrial food processing, cryogenic IQF flash-freezing, shelf-stable retort gourmet meals, dairy UHT bottling, and private label co-packing for global supermarket chains.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/60" style={{ borderColor: theme.border, color: theme.greenDark }}>
                <ShieldCheck size={14} style={{ color: theme.green }} />
                <span>ISO 22000 &amp; HACCP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/60" style={{ borderColor: theme.border, color: theme.greenDark }}>
                <Award size={14} style={{ color: theme.ochre }} />
                <span>100% Halal Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-emerald-50/60" style={{ borderColor: theme.border, color: theme.greenDark }}>
                <Factory size={14} style={{ color: theme.green }} />
                <span>120,000 MT / Year</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#1E6B43] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.ochre }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Manufacturing Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Processing Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#1E6B43] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.ochre }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.greenDark }}>
              Commercial &amp; Export Desk
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.green }} />
                <span>Roysons Industrial Complex, Raiwind Road Industrial Area, Lahore, Pakistan.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.green }} />
                <a href="tel:00924235401280" className="hover:underline font-bold" style={{ color: theme.greenDark }}>
                  0092-42-35401280 / 0092-304-7527498
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.green }} />
                <a href="mailto:info@waltonmirrorfood.roysons.org" className="hover:underline">
                  info@waltonmirrorfood.roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-emerald-50/50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={22} style={{ color: theme.green }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.greenDark }}>B2B &amp; Export Inquiries</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct Food Technologist Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Walton &amp; Mirror Food (Pvt) Ltd. A Flagship Company of ROYSONS Group.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/walton-mirror-food/contact" className="hover:underline hover:text-[#1E6B43]">
              HACCP &amp; ISO 22000 Standards
            </Link>
            <span>•</span>
            <Link href="/group-companies/walton-mirror-food/contact" className="hover:underline hover:text-[#1E6B43]">
              Halal Food Certification &amp; Exports
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Modal 1: Product Specifications Modal ─────────────────────────
export function ProductDetailModal({ product, isOpen, onClose, onInquire }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border overflow-hidden my-8"
        style={{ borderColor: theme.border }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative w-full h-56 sm:h-64 bg-slate-900 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061022] via-[#061022]/40 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#1E6B43] text-white">
                {product.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D89C46] text-white">
                {product.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#1E6B43] mb-2">
              Product Overview &amp; Profile
            </h4>
            <p className="text-sm font-medium leading-relaxed text-slate-700">
              {product.summary}
            </p>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Packaging Format</span>
              <p className="text-xs font-extrabold text-slate-800 mt-0.5">{product.packaging}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Shelf Life</span>
              <p className="text-xs font-extrabold text-[#1E6B43] mt-0.5">{product.shelfLife}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Minimum Order (MOQ)</span>
              <p className="text-xs font-extrabold text-[#D89C46] mt-0.5">{product.moq}</p>
            </div>
          </div>

          {/* Technical Specs Table */}
          {product.specs && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-3">
                Technical Specifications
              </h4>
              <div className="border rounded-xl divide-y text-xs overflow-hidden" style={{ borderColor: theme.border }}>
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-3 p-2.5">
                    <span className="font-bold text-slate-500">{key}</span>
                    <span className="col-span-2 font-medium text-slate-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Quality Features */}
          {product.features && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-3">
                Manufacturing &amp; Quality Highlights
              </h4>
              <div className="space-y-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={14} className="text-[#1E6B43] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Allergen Statement */}
          {product.allergens && (
            <div className="p-3.5 rounded-xl border bg-amber-50/60 flex items-start gap-2.5" style={{ borderColor: "#F3D299" }}>
              <Info size={16} className="text-[#BC8330] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-black uppercase text-[#BC8330]">Allergen Statement</p>
                <p className="text-xs font-medium text-slate-700">{product.allergens}</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t bg-slate-50 flex items-center justify-between gap-3" style={{ borderColor: theme.border }}>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-white transition-colors cursor-pointer"
            style={{ borderColor: theme.border }}
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onInquire) onInquire(product);
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Send size={13} className="text-[#F3C677]" />
            <span>Inquire Wholesale / Supply</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal 2: Wholesale / Private Label Inquiry Modal ──────────────
export function WholesaleInquiryModal({ product, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    volume: "1 x 20ft FCL Container",
    destinationCountry: "",
    notes: "",
  });
  const [productTitle, setProductTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [refCode, setRefCode] = useState("WMF-RFQ-748291");

  const effectiveProductTitle = productTitle || product?.name || "";

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const generatedRef = `WMF-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "walton-mirror-food",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: effectiveProductTitle || "Food Processing Supplies",
          subject: `Wholesale Inquiry: ${effectiveProductTitle || "General"} (${formData.company})`,
          message: `Company: ${formData.company}\nVolume / MOQ: ${formData.volume}\nDestination: ${formData.destinationCountry || "N/A"}\nNotes: ${formData.notes || "N/A"}`,
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
    setProductTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border overflow-hidden my-8"
        style={{ borderColor: theme.border }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b bg-emerald-50/50 flex items-center justify-between" style={{ borderColor: theme.border }}>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#D89C46]">
              Commercial Procurement Desk
            </span>
            <h3 className="text-xl font-black text-[#134A2D] mt-0.5">
              Wholesale &amp; Private Label Inquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border flex items-center justify-center text-slate-500 hover:text-slate-800 bg-white cursor-pointer"
            style={{ borderColor: theme.border }}
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#1E6B43] flex items-center justify-center mx-auto">
              <Check size={28} />
            </div>
            <h4 className="text-xl font-black text-[#134A2D]">Inquiry Received Successfully!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for connecting with Walton &amp; Mirror Food. Our export &amp; commercial team has logged your request for <strong>{effectiveProductTitle || "Food Processing Supplies"}</strong>. A commercial quote and technical dossier will be transmitted to <strong>{formData.email}</strong> within 24 hours.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl text-xs font-mono font-bold text-slate-700">
              Ref: {refCode}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-black uppercase text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {error && (
              <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-medium">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                  style={{ borderColor: theme.border }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Enterprise Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Al-Madina Supermarkets LLC"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="procurement@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                  style={{ borderColor: theme.border }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Selected Product / Line</label>
                <select
                  value={effectiveProductTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                  style={{ borderColor: theme.border }}
                >
                  <option value="">-- Select Product Category --</option>
                  {FOOD_LISTINGS.map((item) => (
                    <option key={item.id} value={item.name}>
                      [{item.category}] {item.name}
                    </option>
                  ))}
                  <option value="Custom Private Label Formulation">Custom Private Label OEM Program</option>
                  <option value="General Container Export Inquiries">General Container Export Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Volume / MOQ</label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                  style={{ borderColor: theme.border }}
                >
                  <option value="Sample Pack / Trial Batch">Trial Batch / Evaluation Samples</option>
                  <option value="500 - 1,000 Master Cartons">500 - 1,000 Master Cartons</option>
                  <option value="1 x 20ft FCL Container">1 x 20ft FCL Container (~14 MT)</option>
                  <option value="1 x 40ft High Cube Reefer (~25 MT)">1 x 40ft High Cube Reefer (~25 MT)</option>
                  <option value="Recurring Monthly Supply Contract">Recurring Monthly Supply Contract</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Destination Country / Port</label>
              <input
                type="text"
                value={formData.destinationCountry}
                onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                placeholder="e.g. Jebel Ali Port (Dubai) / Felixstowe (UK) / Jeddah (KSA)"
                className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                style={{ borderColor: theme.border }}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Specifications &amp; Packaging Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Detail any custom recipe parameters, barcode requirements, language label translations, or private brand specifications..."
                className="w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E6B43]"
                style={{ borderColor: theme.border }}
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
                style={{ borderColor: theme.border }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-7 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>Submitting RFQ...</span>
                  </>
                ) : (
                  <>
                    <Send size={13} className="text-[#F3C677]" />
                    <span>Submit Wholesale RFQ</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
