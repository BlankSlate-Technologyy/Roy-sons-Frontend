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
  Compass,
  HardHat,
  Building2,
  Factory,
  Trees,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  Search,
  Check,
  DollarSign,
  Maximize2,
  Users2,
  FileText,
} from "lucide-react";

export const theme = {
  navy: "#0A2540",        // Deep Smart Navy
  navyDark: "#05172A",
  teal: "#008080",        // Modern Teal / Cyan
  tealHover: "#006666",
  emerald: "#10B981",     // Emerald Green Accent
  blueLight: "#E6F4F1",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/neom-city" },
  { label: "About Us", href: "/group-companies/neom-city/about" },
  { label: "Services", href: "/group-companies/neom-city/services" },
  { label: "Sectors", href: "/group-companies/neom-city/solutions" },
  { label: "Developments", href: "/group-companies/neom-city/projects" },
  { label: "Sustainability", href: "/group-companies/neom-city/sustainability" },
  { label: "Contact", href: "/group-companies/neom-city/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Smart City Master Planning & GIS Spatial Zoning", href: "/group-companies/neom-city/services#smart-city-planning" },
  { label: "Subterranean Common Utility Corridors & Civil EPC", href: "/group-companies/neom-city/services#urban-infrastructure" },
  { label: "Commercial Financial Districts & Mixed-Use Towers", href: "/group-companies/neom-city/services#commercial-development" },
  { label: "Special Economic Zones (SEZ) & Logistics Dry Ports", href: "/group-companies/neom-city/services#industrial-zones" },
  { label: "Smart Mobility & Autonomous Transit Corridors", href: "/group-companies/neom-city/services#smart-transportation" },
  { label: "Digital Twin Municipal Analytics & AI Microgrids", href: "/group-companies/neom-city/services#digital-city-solutions" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-teal-50/70 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <Compass size={14} style={{ color: theme.teal }} />
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

// ─── Reusable Fixed Navbar ──────────────────────────────────────────
export function NeomCityNavbar({ onOpenInquiryModal }) {
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
    if (href === "/group-companies/neom-city") {
      return pathname === "/group-companies/neom-city" || pathname === "/group-companies/neom-city/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-md py-2 sm:py-2.5" : "py-2.5 sm:py-3"
      }`}
      style={{
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <Link
          href="/group-companies/neom-city"
          className="flex items-center gap-2.5 sm:gap-3 select-none group flex-shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1 border shadow-2xs" style={{ borderColor: theme.border }}>
            <Image
              src="/logos/8.png"
              alt="Neom City Corporation Logo"
              width={65}
              height={65}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[14px] sm:text-base lg:text-[17px] font-black tracking-tight leading-none uppercase"
              style={{ color: theme.navyDark }}
            >
              Neom City
            </span>
            <span
              className="text-[9px] sm:text-[9.5px] font-bold tracking-widest uppercase mt-1 text-[#008080]"
            >
              Smart Cities &amp; Urban Development
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4.5 2xl:gap-6 flex-shrink">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11.5px] xl:text-[12.5px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1 px-1 whitespace-nowrap hover:text-[#008080] cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.textMuted,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.teal }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/group-companies/neom-city/projects"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors hover:bg-teal-50"
            style={{ borderColor: theme.border, color: theme.navyDark }}
          >
            <Building2 size={13} style={{ color: theme.teal }} />
            <span>Masterplans</span>
          </Link>

          {onOpenInquiryModal ? (
            <button
              type="button"
              onClick={onOpenInquiryModal}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap bg-[#008080] hover:bg-[#006666]"
            >
              <span>Masterplan RFP</span>
              <ArrowRight size={13} className="hidden sm:inline-block" />
            </button>
          ) : (
            <Link
              href="/group-companies/neom-city/contact"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap bg-[#008080] hover:bg-[#006666]"
            >
              <span>Masterplan RFP</span>
              <ArrowRight size={13} className="hidden sm:inline-block" />
            </Link>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navyDark }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-5 py-4 space-y-2 bg-white shadow-xl max-h-[85vh] overflow-y-auto"
          style={{ borderColor: theme.border }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-bold tracking-wider uppercase py-2.5 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: active ? `${theme.teal}12` : "transparent",
                  color: active ? theme.teal : theme.navyDark,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col gap-2 border-t" style={{ borderColor: theme.border }}>
            <Link
              href="/group-companies/neom-city/projects"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider border flex items-center justify-center gap-2"
              style={{ borderColor: theme.border, color: theme.navyDark }}
            >
              <Building2 size={14} style={{ color: theme.teal }} />
              <span>Explore Master Developments</span>
            </Link>
            <Link
              href="/group-companies/neom-city/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs bg-[#008080]"
            >
              <span>Submit Masterplan RFP / Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Master Development Detail & Investor Inquiry Modal ─────────────
export function DevelopmentDetailModal({ development, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'inquire'
  const [submitted, setSubmitted] = useState(false);
  const [investorData, setInvestorData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "Commercial Land Parcel Concession",
    estimatedInvestment: "$10M - $50M USD",
    notes: "",
  });

  if (!isOpen || !development) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setActiveTab("overview");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border overflow-hidden my-auto max-h-[90vh] flex flex-col"
        style={{ borderColor: theme.border }}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b bg-slate-50 flex items-start justify-between gap-4" style={{ borderColor: theme.border }}>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-100 text-[#008080]">
                {development.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-200 text-slate-800">
                {development.totalArea}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                {development.investmentValue}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight" style={{ color: theme.navyDark }}>
              {development.name}
            </h3>
            <p className="text-xs font-semibold mt-1 text-[#008080] flex items-center gap-1">
              <MapPin size={12} />
              <span>{development.location}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg border bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            style={{ borderColor: theme.border }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b bg-white text-xs font-bold uppercase tracking-wider" style={{ borderColor: theme.border }}>
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === "overview" ? "border-[#008080] text-[#008080]" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Masterplan Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inquire")}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === "inquire" ? "border-[#008080] text-[#008080]" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Investor &amp; Concession Inquiry
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-black uppercase text-[#05172A]">
                Concession Inquiry Registered
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{investorData.name}</strong> from <strong>{investorData.organization || "your enterprise"}</strong>. Our Senior Urban Development Concession Team will review your inquiry and provide detailed spatial zoning datasets within 24 hours.
              </p>
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 inline-block text-left text-xs space-y-1">
                <p><strong>Tracking Reference:</strong> NC-DEV-2026-{Math.floor(10000 + Math.random() * 90000)}</p>
                <p><strong>Masterplan Sector:</strong> {development.name}</p>
                <p><strong>Zoning Type:</strong> {investorData.inquiryType}</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#008080] hover:bg-[#006666]"
                >
                  Close &amp; Explore Other Developments
                </button>
              </div>
            </div>
          ) : activeTab === "overview" ? (
            <>
              {/* Key Urban Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Master Area</span>
                  <span className="text-xs font-extrabold text-[#05172A]">{development.totalArea}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Investment</span>
                  <span className="text-xs font-extrabold text-[#008080]">{development.investmentValue}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Current Status</span>
                  <span className="text-xs font-extrabold text-emerald-800">{development.status}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Target Capacity</span>
                  <span className="text-xs font-extrabold text-[#05172A]">{development.capacity}</span>
                </div>
              </div>

              {/* Zoning Details */}
              <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100">
                <span className="text-[10.5px] uppercase font-black tracking-wider text-[#008080] block mb-1">
                  Master Urban Zoning &amp; Density Guidelines
                </span>
                <p className="text-xs font-medium text-slate-800">
                  {development.zoning}
                </p>
              </div>

              {/* Infrastructure Features */}
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-[#0A2540] mb-2.5 flex items-center gap-1.5">
                  <Layers size={14} style={{ color: theme.teal }} />
                  <span>Smart City Infrastructure Features</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {development.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border" style={{ borderColor: theme.border }}>
                      <CheckCircle2 size={13} className="text-[#008080] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              {development.specs && (
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-[#0A2540] mb-2 flex items-center gap-1.5">
                    <Zap size={14} style={{ color: theme.teal }} />
                    <span>Technical &amp; Utility Engineering Specifications</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {Object.entries(development.specs).map(([key, value], i) => (
                      <div key={i} className="p-2 rounded-lg border bg-slate-50" style={{ borderColor: theme.border }}>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">{key}</span>
                        <span className="font-semibold text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sustainability Certifications */}
              {development.certifications && (
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-emerald-900">
                    Sustainability Standards:
                  </span>
                  <span className="text-xs font-extrabold text-emerald-800">
                    {development.certifications}
                  </span>
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Representative Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={investorData.name}
                    onChange={(e) => setInvestorData({ ...investorData, name: e.target.value })}
                    placeholder="e.g. Dr. Salman Qureshi"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Enterprise / Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={investorData.organization}
                    onChange={(e) => setInvestorData({ ...investorData, organization: e.target.value })}
                    placeholder="e.g. Apex Real Estate Holdings"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Official Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={investorData.email}
                    onChange={(e) => setInvestorData({ ...investorData, email: e.target.value })}
                    placeholder="salman@apexholdings.com"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={investorData.phone}
                    onChange={(e) => setInvestorData({ ...investorData, phone: e.target.value })}
                    placeholder="+92 300 8765432"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Concession / Inquiry Classification
                  </label>
                  <select
                    value={investorData.inquiryType}
                    onChange={(e) => setInvestorData({ ...investorData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="Commercial Land Parcel Concession">Commercial Land Parcel Concession</option>
                    <option value="Residential Plot / Cluster Acquisition">Residential Plot / Cluster Acquisition</option>
                    <option value="Industrial SEZ Manufacturing Plot">Industrial SEZ Manufacturing Plot</option>
                    <option value="Public-Private Partnership (PPP) JV">Public-Private Partnership (PPP) JV</option>
                    <option value="Subterranean Utility Tunnel Hookup">Subterranean Utility Tunnel Hookup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                    Target Investment Scale
                  </label>
                  <select
                    value={investorData.estimatedInvestment}
                    onChange={(e) => setInvestorData({ ...investorData, estimatedInvestment: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="$5M - $10M USD">$5M - $10M USD</option>
                    <option value="$10M - $50M USD">$10M - $50M USD</option>
                    <option value="$50M - $200M USD">$50M - $200M USD</option>
                    <option value="$200M+ Sovereign / Institutional">$200M+ Sovereign / Institutional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                  Project Notes &amp; Technical Requirements
                </label>
                <textarea
                  rows={3}
                  value={investorData.notes}
                  onChange={(e) => setInvestorData({ ...investorData, notes: e.target.value })}
                  placeholder="Detail your desired plot dimensions, floor area ratio (FAR) requirements, targeted utility loads..."
                  className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-md transition-all bg-[#008080] hover:bg-[#006666] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Concession Request for {development.name}</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        {!submitted && activeTab === "overview" && (
          <div className="p-4 border-t bg-slate-50 flex items-center justify-between gap-3" style={{ borderColor: theme.border }}>
            <span className="text-xs text-slate-500">
              Neom City Master Planning &amp; Concessions Authority
            </span>
            <button
              type="button"
              onClick={() => setActiveTab("inquire")}
              className="px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-white bg-[#008080] hover:bg-[#006666] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Inquire for Concession</span>
              <ArrowRight size={13} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Masterplan RFP / Urban Planning Inquiry Modal ───────────────────
export function MasterplanInquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [rfpData, setRfpData] = useState({
    name: "",
    authority: "",
    email: "",
    phone: "",
    scope: "Smart City Master Planning",
    areaHectares: "1,000 - 5,000 Hectares",
    description: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border overflow-hidden my-auto" style={{ borderColor: theme.border }}>
        <div className="p-5 sm:p-6 border-b bg-[#0A2540] text-white flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981]">
              Municipal &amp; Government Liaison Desk
            </span>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mt-1">
              Commission Master Planning or Smart Infrastructure
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              GIS spatial zoning, subterranean utility tunnels, district cooling, and digital twin deployment.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg font-black uppercase text-[#05172A]">
                RFP Consultation Received
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you. Our Chief Urban Planner will contact <strong>{rfpData.name}</strong> from <strong>{rfpData.authority}</strong> within 12 business hours.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border text-xs text-slate-700 inline-block text-left">
                <p><strong>Inquiry ID:</strong> NC-RFP-{Math.floor(1000 + Math.random() * 9000)}</p>
                <p><strong>Planning Scope:</strong> {rfpData.scope}</p>
                <p><strong>Target Area:</strong> {rfpData.areaHectares}</p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase text-white bg-[#008080]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Official Full Name *</label>
                  <input
                    type="text"
                    required
                    value={rfpData.name}
                    onChange={(e) => setRfpData({ ...rfpData, name: e.target.value })}
                    placeholder="e.g. Eng. Tariq Masood"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Authority / Ministry / Firm *</label>
                  <input
                    type="text"
                    required
                    value={rfpData.authority}
                    onChange={(e) => setRfpData({ ...rfpData, authority: e.target.value })}
                    placeholder="e.g. Capital Development Authority"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={rfpData.email}
                    onChange={(e) => setRfpData({ ...rfpData, email: e.target.value })}
                    placeholder="planning@authority.gov"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={rfpData.phone}
                    onChange={(e) => setRfpData({ ...rfpData, phone: e.target.value })}
                    placeholder="+92 51 920 1234"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Consultancy Scope</label>
                  <select
                    value={rfpData.scope}
                    onChange={(e) => setRfpData({ ...rfpData, scope: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="Smart City Master Planning">Smart City Master Planning</option>
                    <option value="Subterranean Utility Tunnel EPC">Subterranean Utility Tunnel EPC</option>
                    <option value="District Cooling Feasibility & Build">District Cooling Feasibility &amp; Build</option>
                    <option value="Digital Twin Municipal Command Center">Digital Twin Municipal Command Center</option>
                    <option value="Special Economic Zone (SEZ) Feasibility">Special Economic Zone (SEZ) Feasibility</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Target Land Area</label>
                  <select
                    value={rfpData.areaHectares}
                    onChange={(e) => setRfpData({ ...rfpData, areaHectares: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#008080]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="Under 500 Hectares">Under 500 Hectares</option>
                    <option value="500 - 2,000 Hectares">500 - 2,000 Hectares</option>
                    <option value="2,000 - 10,000 Hectares">2,000 - 10,000 Hectares</option>
                    <option value="10,000+ Hectares Megacity">10,000+ Hectares Megacity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">RFP Overview &amp; Key Objectives</label>
                <textarea
                  rows={3}
                  value={rfpData.description}
                  onChange={(e) => setRfpData({ ...rfpData, description: e.target.value })}
                  placeholder="Outline your municipal project timeline, financing structure, and specific urban challenges..."
                  className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#008080]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-md transition-all bg-[#008080] hover:bg-[#006666] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Masterplan RFP</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function NeomCityFooter() {
  return (
    <footer
      className="border-t bg-white pt-16 pb-10"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.white,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: theme.border }}>
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/group-companies/neom-city" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-2xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/8.png"
                  alt="Neom City Corporation Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Neom City Corporation
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#008080]">
                  Smart Cities &amp; Urban Development
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Pioneering sustainable metropolises, high-density financial centers, zero-carbon eco-communities, and smart multi-modal transit networks. Developing 35,000+ hectares of urban master concessions under LEED for Cities Platinum standards.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-teal-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.teal }} />
                <span>LEED Platinum Standard</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-teal-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Award size={14} style={{ color: theme.teal }} />
                <span>Envision Gold Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-teal-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Building2 size={14} style={{ color: theme.teal }} />
                <span>150+ Projects</span>
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
                    className="hover:underline transition-colors hover:text-[#008080] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.teal }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Urban Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Urban Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#008080] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.teal }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Master Development Bureau
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.navy }} />
                <span>Roysons Corporate Complex, Sector G-5, Islamabad, Pakistan.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="tel:+92518443150" className="hover:underline font-bold" style={{ color: theme.navyDark }}>
                  +92 (51) 844-3150 / +92 321 8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="mailto:info@neomcity.roysons.org" className="hover:underline">
                  info@neomcity.roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-teal-50/60 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.navy }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>Concession &amp; Land Desk</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct institutional investor liaison</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Neom City Corporation. A Roy &amp; Sons Group Flagship Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/neom-city/sustainability" className="hover:underline hover:text-[#0A2540]">
              LEED for Cities Platinum Standards
            </Link>
            <span>•</span>
            <Link href="/group-companies/neom-city/contact" className="hover:underline hover:text-[#0A2540]">
              Global Concession Partnership Registry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
