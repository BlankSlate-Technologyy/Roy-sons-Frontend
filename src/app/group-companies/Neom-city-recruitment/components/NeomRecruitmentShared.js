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
  Users,
  Users2,
  User,
  Building2,
  Globe2,
  UserSearch,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  Sparkles,
  Search,
  Briefcase,
  DollarSign,
  Calendar,
  Check,
  Upload,
  FileText,
  Loader2,
} from "lucide-react";

export const theme = {
  navy: "#0F2B5B",        // Primary Corporate Deep Navy
  navyDark: "#07152B",
  blue: "#0072CE",        // Vibrant Cyan Blue
  blueHover: "#005BB5",
  teal: "#00A896",        // Teal highlight
  blueLight: "#EBF5FF",
  white: "#FFFFFF",
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/Neom-city-recruitment" },
  { label: "About Us", href: "/group-companies/Neom-city-recruitment/about" },
  { label: "Services", href: "/group-companies/Neom-city-recruitment/services" },
  { label: "Sectors", href: "/group-companies/Neom-city-recruitment/solutions" },
  { label: "Job Openings", href: "/group-companies/Neom-city-recruitment/projects" },
  { label: "Ethical Standards", href: "/group-companies/Neom-city-recruitment/sustainability" },
  { label: "Contact", href: "/group-companies/Neom-city-recruitment/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Executive Search & C-Suite Headhunting", href: "/group-companies/Neom-city-recruitment/services#executive-search" },
  { label: "Overseas Workforce Deployment (KSA & GCC)", href: "/group-companies/Neom-city-recruitment/services#overseas-recruitment" },
  { label: "Tertiary Healthcare & Clinical Staffing", href: "/group-companies/Neom-city-recruitment/services#healthcare-staffing" },
  { label: "Technical Trade Testing & Verification", href: "/group-companies/Neom-city-recruitment/services#trade-testing" },
  { label: "Petrochemical & Energy Sector Staffing", href: "/group-companies/Neom-city-recruitment/services#energy-staffing" },
  { label: "Turnkey Visa, GAMCA & Emigration Processing", href: "/group-companies/Neom-city-recruitment/services#visa-mobilization" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.2em] mb-4 bg-sky-50/70 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.border, color: theme.navy }}
    >
      <Users2 size={14} style={{ color: theme.blue }} />
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
export function NeomRecruitmentNavbar({ onOpenEmployerModal }) {
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
    if (href === "/group-companies/Neom-city-recruitment") {
      return pathname === "/group-companies/Neom-city-recruitment" || pathname === "/group-companies/Neom-city-recruitment/";
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
          href="/group-companies/Neom-city-recruitment"
          className="flex items-center gap-2.5 sm:gap-3 select-none group flex-shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1 border shadow-2xs" style={{ borderColor: theme.border }}>
            <Image
              src="/logos/24.png"
              alt="Neom City Recruitment Consultants Logo"
              width={65}
              height={65}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[13px] sm:text-base lg:text-[17px] font-black tracking-tight leading-none uppercase"
              style={{ color: theme.navyDark }}
            >
              Neom City Recruitment
            </span>
            <span
              className="text-[9px] sm:text-[9.5px] font-bold tracking-widest uppercase mt-1"
              style={{ color: theme.blue }}
            >
              Human Resources &amp; Global Talent
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
                className="text-[11.5px] xl:text-[12.5px] font-bold tracking-wide uppercase transition-all duration-200 relative py-1 px-1 whitespace-nowrap hover:text-[#0072CE] cursor-pointer"
                style={{
                  color: active ? theme.navy : theme.textMuted,
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: theme.blue }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/group-companies/Neom-city-recruitment/projects"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors hover:bg-sky-50"
            style={{ borderColor: theme.border, color: theme.navyDark }}
          >
            <Briefcase size={13} style={{ color: theme.blue }} />
            <span>Jobs Portal</span>
          </Link>

          {onOpenEmployerModal ? (
            <button
              type="button"
              onClick={onOpenEmployerModal}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: theme.blue }}
            >
              <span>Hire Talent</span>
              <ArrowRight size={13} className="hidden sm:inline-block" />
            </button>
          ) : (
            <Link
              href="/group-companies/Neom-city-recruitment/contact"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: theme.blue }}
            >
              <span>Hire Talent</span>
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
                  backgroundColor: active ? `${theme.blue}12` : "transparent",
                  color: active ? theme.blue : theme.navyDark,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col gap-2 border-t" style={{ borderColor: theme.border }}>
            <Link
              href="/group-companies/Neom-city-recruitment/projects"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider border flex items-center justify-center gap-2"
              style={{ borderColor: theme.border, color: theme.navyDark }}
            >
              <Briefcase size={14} style={{ color: theme.blue }} />
              <span>Browse Job Vacancies</span>
            </Link>
            <Link
              href="/group-companies/Neom-city-recruitment/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.blue }}
            >
              <span>Hire Workforce / Talent Inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Job Detail & Application Modal ─────────────────────────────────
export function JobDetailAndApplyModal({ job, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("details"); // 'details' or 'apply'
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCity: "",
    experienceYears: "",
    coverNote: "",
  });

  if (!isOpen || !job) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "neom-city-recruitment",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: `Job Application: ${job.title}`,
          subject: `Job Application: ${job.title} (${job.country})`,
          message: `Position: ${job.title}\nLocation: ${formData.currentCity}\nExperience: ${formData.experienceYears} Years\nCover Note: ${formData.coverNote || "N/A"}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit job application");
      setAppliedSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetModal = () => {
    setAppliedSuccess(false);
    setError("");
    setActiveTab("details");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border overflow-hidden my-auto max-h-[90vh] flex flex-col"
        style={{ borderColor: theme.border }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b bg-slate-50 flex items-start justify-between gap-4" style={{ borderColor: theme.border }}>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-sky-100 text-[#0F2B5B]">
                {job.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                {job.country} ({job.city})
              </span>
              {job.urgentBadge && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-700 animate-pulse">
                  Urgent Vacancy
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight" style={{ color: theme.navyDark }}>
              {job.title}
            </h3>
            <p className="text-xs font-semibold mt-1" style={{ color: theme.blue }}>
              Salary: {job.salary} · {job.vacancies} Positions Available
            </p>
          </div>
          <button
            type="button"
            onClick={resetModal}
            className="p-1.5 rounded-lg border bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            style={{ borderColor: theme.border }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b bg-white text-xs font-bold uppercase tracking-wider" style={{ borderColor: theme.border }}>
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === "details" ? "border-[#0072CE] text-[#0072CE]" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Position Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("apply")}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === "apply" ? "border-[#0072CE] text-[#0072CE]" : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Submit Job Application
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {appliedSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-black uppercase text-[#07152B]">
                Application Successfully Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName || "Candidate"}</strong>. Your application for <strong>{job.title}</strong> has been registered with Neom City Recruitment Consultants.
              </p>
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 inline-block text-left text-xs space-y-1">
                <p><strong>Application Tracking Reference:</strong> NCR-2026-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong>Deployment Destination:</strong> {job.country} ({job.city})</p>
                <p><strong>Status:</strong> Under Technical Review by Recruitment Panel</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#0072CE] hover:bg-[#005BB5]"
                >
                  Close &amp; Browse Other Vacancies
                </button>
              </div>
            </div>
          ) : activeTab === "details" ? (
            <>
              {/* Key Specs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Experience</span>
                  <span className="text-xs font-extrabold text-[#07152B]">{job.experience}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Contract</span>
                  <span className="text-xs font-extrabold text-[#07152B]">{job.contractDuration}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Positions Open</span>
                  <span className="text-xs font-extrabold text-[#0072CE]">{job.vacancies} Vacancies</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: theme.border }}>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Apply By</span>
                  <span className="text-xs font-extrabold text-red-600">{job.deadline}</span>
                </div>
              </div>

              {/* Package & Benefits */}
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-[#0F2B5B] mb-2.5 flex items-center gap-1.5">
                  <DollarSign size={14} style={{ color: theme.blue }} />
                  <span>Salary Package &amp; Provided Benefits</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {job.benefits?.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                      <Check size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-[#0F2B5B] mb-2 flex items-center gap-1.5">
                  <ClipboardList size={14} style={{ color: theme.blue }} />
                  <span>Key Job Responsibilities</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-5">
                  {job.responsibilities?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Qualifications */}
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-[#0F2B5B] mb-2 flex items-center gap-1.5">
                  <Award size={14} style={{ color: theme.blue }} />
                  <span>Qualifications &amp; Trade Criteria</span>
                </h5>
                <p className="text-xs font-bold text-slate-800 mb-2">
                  Qualification: <span className="font-normal text-slate-600">{job.qualifications}</span>
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-5">
                  {job.requirements?.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-medium">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Muhammad Tariq"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="candidate@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Current City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentCity}
                    onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                    placeholder="e.g. Lahore, Rawalpindi, Karachi"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Years of Relevant Experience *
                </label>
                <select
                  required
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE] bg-white"
                  style={{ borderColor: theme.border }}
                >
                  <option value="">Select your experience level</option>
                  <option value="1-3">1 to 3 Years</option>
                  <option value="4-7">4 to 7 Years (Mid-Level)</option>
                  <option value="8-12">8 to 12 Years (Senior / Specialist)</option>
                  <option value="13+">13+ Years (Lead / Manager / Consultant)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Upload Curriculum Vitae / Resume (PDF or DOC)
                </label>
                <div className="border-2 border-dashed rounded-xl p-4 text-center bg-slate-50 cursor-pointer hover:bg-sky-50 transition-colors" style={{ borderColor: theme.border }}>
                  <Upload size={24} className="mx-auto text-[#0072CE] mb-1.5" />
                  <p className="text-xs font-semibold text-slate-700">Click or Drag your resume here</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Maximum file size: 10MB (PDF, DOCX)</p>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Brief Summary / Technical Certifications
                </label>
                <textarea
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Mention your key licenses, trade testing scores, or previous overseas experience in Saudi Arabia/GCC..."
                  className="w-full px-3.5 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-md transition-all bg-[#0072CE] hover:bg-[#005BB5] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application for {job.title}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Zero Recruitment Fees Guaranteed under ILO Fair Recruitment Initiative.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        {!appliedSuccess && activeTab === "details" && (
          <div className="p-4 border-t bg-slate-50 flex items-center justify-between gap-3" style={{ borderColor: theme.border }}>
            <span className="text-xs text-slate-500">
              OEP License # 4120/ISB · Bureau of Emigration Certified
            </span>
            <button
              type="button"
              onClick={() => setActiveTab("apply")}
              className="px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-xs bg-[#0072CE] hover:bg-[#005BB5] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Online Now</span>
              <ArrowRight size={13} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Corporate Employer Workforce Requisition Modal ─────────────────
export function EmployerInquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [employerData, setEmployerData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    headcount: "50-100",
    sector: "Construction & Smart Cities",
    countryOfDeployment: "Saudi Arabia (KSA)",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "neom-city-recruitment",
          name: employerData.contactPerson,
          email: employerData.email,
          phone: employerData.phone,
          service: `Manpower Requisition: ${employerData.sector}`,
          subject: `Employer Inquiry: ${employerData.companyName} (${employerData.headcount} Workers)`,
          message: `Company: ${employerData.companyName}\nSector: ${employerData.sector}\nHeadcount: ${employerData.headcount}\nDeployment Country: ${employerData.countryOfDeployment}\nMessage: ${employerData.message || "N/A"}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit employer inquiry");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border overflow-hidden my-auto" style={{ borderColor: theme.border }}>
        {/* Header */}
        <div className="p-5 sm:p-6 border-b bg-[#0F2B5B] text-white flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896]">
              Corporate Client Services
            </span>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mt-1">
              Request International Manpower Supply
            </h3>
            <p className="text-xs text-sky-100 mt-1">
              End-to-end recruitment, trade testing, visa clearance, and flight mobilization.
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

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-lg font-black uppercase text-[#07152B]">
                Manpower Requisition Received
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you. Our Senior Client Talent Director will contact <strong>{employerData.contactPerson}</strong> at <strong>{employerData.companyName}</strong> within 4 business hours.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border text-xs text-slate-700 inline-block text-left">
                <p><strong>Inquiry ID:</strong> NCR-CORP-{Math.floor(1000 + Math.random() * 9000)}</p>
                <p><strong>Sector:</strong> {employerData.sector}</p>
                <p><strong>Estimated Quota:</strong> {employerData.headcount} Workers</p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase text-white bg-[#0072CE]"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Company / Enterprise *</label>
                  <input
                    type="text"
                    required
                    value={employerData.companyName}
                    onChange={(e) => setEmployerData({ ...employerData, companyName: e.target.value })}
                    placeholder="e.g. Al-Bawani Contracting"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={employerData.contactPerson}
                    onChange={(e) => setEmployerData({ ...employerData, contactPerson: e.target.value })}
                    placeholder="e.g. Eng. Khalid Al-Mansoor"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Official Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={employerData.email}
                    onChange={(e) => setEmployerData({ ...employerData, email: e.target.value })}
                    placeholder="khalid@albawani.com"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={employerData.phone}
                    onChange={(e) => setEmployerData({ ...employerData, phone: e.target.value })}
                    placeholder="+966 50 123 4567"
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Industry Sector</label>
                  <select
                    value={employerData.sector}
                    onChange={(e) => setEmployerData({ ...employerData, sector: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="Construction & Smart Cities">Construction &amp; Smart Cities</option>
                    <option value="Healthcare & Medical">Healthcare &amp; Medical</option>
                    <option value="Oil, Gas & Petrochemical">Oil, Gas &amp; Petrochemical</option>
                    <option value="Skilled Trades & Manufacturing">Skilled Trades &amp; Manufacturing</option>
                    <option value="IT, Cloud & Telecom">IT, Cloud &amp; Telecom</option>
                    <option value="Hospitality & Facility Management">Hospitality &amp; Facility Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Estimated Manpower Headcount</label>
                  <select
                    value={employerData.headcount}
                    onChange={(e) => setEmployerData({ ...employerData, headcount: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 bg-white focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="1-20">1 - 20 (Executive / Specialists)</option>
                    <option value="21-50">21 - 50 Personnel</option>
                    <option value="51-150">51 - 150 Personnel</option>
                    <option value="150-500">150 - 500 Personnel</option>
                    <option value="500+">500+ Mass Mobilization</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">Required Trades &amp; Project Description</label>
                <textarea
                  rows={3}
                  value={employerData.message}
                  onChange={(e) => setEmployerData({ ...employerData, message: e.target.value })}
                  placeholder="Specify required job titles, visa category availability, preferred delegation interview dates..."
                  className="w-full px-3 py-2 rounded-lg border text-xs text-slate-900 focus:outline-none focus:border-[#0072CE]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-md transition-all bg-[#0072CE] hover:bg-[#005BB5] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Submitting Manpower Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Manpower Request</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function NeomRecruitmentFooter() {
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
            <Link href="/group-companies/Neom-city-recruitment" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-13 h-13 rounded-xl bg-white p-1 border shadow-2xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/24.png"
                  alt="Neom City Recruitment Consultants Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.navyDark }}>
                  Neom City Recruitment
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.blue }}>
                  Human Resources &amp; Global Talent
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Connecting exceptional human capital with premier international opportunities. Officially licensed Overseas Employment Promoter (OEP License # 4120/ISB) specializing in executive search, mega-infrastructure engineering mobilization, tertiary clinical healthcare staffing, and certified technical trade testing across 12+ industry sectors.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-sky-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <ShieldCheck size={14} style={{ color: theme.blue }} />
                <span>OEP Lic # 4120/ISB</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-sky-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Award size={14} style={{ color: theme.blue }} />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-sky-50/60" style={{ borderColor: theme.border, color: theme.navyDark }}>
                <Users size={14} style={{ color: theme.blue }} />
                <span>55,000+ Placements</span>
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
                    className="hover:underline transition-colors hover:text-[#0072CE] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.blue }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core HR Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Recruitment Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#0072CE] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.blue }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.navyDark }}>
              Global Talent Bureau
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.navy }} />
                <span>Roysons Corporate Complex, Blue Area, Islamabad, Pakistan.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="tel:+92518443100" className="hover:underline font-bold" style={{ color: theme.navyDark }}>
                  +92 (51) 844-3100 / +92 321 8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.navy }} />
                <a href="mailto:info@neomrecruitment.roysons.org" className="hover:underline">
                  info@neomrecruitment.roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-sky-50/60 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.navy }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.navyDark }}>Saudi &amp; GCC Employer Desk</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Fast-track overseas manpower inquiries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Neom City Recruitment Consultants. A Roy &amp; Sons Group Flagship Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/Neom-city-recruitment/sustainability" className="hover:underline hover:text-[#0F2B5B]">
              ILO Ethical Recruitment Charter
            </Link>
            <span>•</span>
            <Link href="/group-companies/Neom-city-recruitment/contact" className="hover:underline hover:text-[#0F2B5B]">
              Bureau of Emigration Licensed (OEP # 4120/ISB)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
