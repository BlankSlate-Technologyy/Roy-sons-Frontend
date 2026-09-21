"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoysonsPortalButton from "@/components/ui/RoysonsPortalButton";
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
  ShieldCheck,
  CheckCircle2,
  Send,
  Lock,
  Radar,
  Radio,
} from "lucide-react";

export const theme = {
  navyDark: "#050E1A",       // Deepest Midnight Command Navy
  navy: "#08182B",           // Sovereign Alpha Matrix Navy
  navySoft: "#0E243D",       // Tactical Navy Panel
  navySurface: "#132D4C",    // Elevated Surface
  shieldBlue: "#005691",     // Logo Shield Accent
  cyanAccent: "#0284C7",     // Telemetry Highlight
  cyanLight: "#38BDF8",
  steel: "#3E5063",          // Metallic Steel
  steelLight: "#64748B",     // Faint Steel Slate
  textMuted: "#475569",      // Body Text Muted Slate
  white: "#FFFFFF",
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
  borderDark: "rgba(255, 255, 255, 0.08)",
  borderSoft: "rgba(0, 86, 145, 0.16)",
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
  { label: "Home",       href: "/group-companies/alpha-matrix" },
  { label: "About",      href: "/group-companies/alpha-matrix/about" },
  { label: "Solutions",  href: "/group-companies/alpha-matrix/solutions" },
  { label: "Industries", href: "/group-companies/alpha-matrix/industries" },
  { label: "Projects",   href: "/group-companies/alpha-matrix/projects" },
  { label: "Contact",    href: "/group-companies/alpha-matrix/contact" },
];

export const FOOTER_LINKS = {
  "Navigation": [
    { label: "Home",       href: "/group-companies/alpha-matrix" },
    { label: "About Us",   href: "/group-companies/alpha-matrix/about" },
    { label: "Solutions",  href: "/group-companies/alpha-matrix/solutions" },
    { label: "Industries", href: "/group-companies/alpha-matrix/industries" },
    { label: "Projects",   href: "/group-companies/alpha-matrix/projects" },
    { label: "Contact Us", href: "/group-companies/alpha-matrix/contact" },
  ],
  "Core Solutions": [
    { label: "Surveillance Systems",      href: "/group-companies/alpha-matrix/solutions#surveillance" },
    { label: "Border Security",           href: "/group-companies/alpha-matrix/solutions#border-security" },
    { label: "Command & Control",         href: "/group-companies/alpha-matrix/solutions#command-control" },
    { label: "Biometric Access Control",  href: "/group-companies/alpha-matrix/solutions#access-control" },
    { label: "Perimeter Protection",      href: "/group-companies/alpha-matrix/solutions#perimeter-protection" },
    { label: "Cyber Defense",             href: "/group-companies/alpha-matrix/solutions#cyber-defense" },
  ],
};

const SOCIAL_ICONS = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter,  href: "#", label: "Twitter" },
  { Icon: Youtube,  href: "#", label: "YouTube" },
];

export function SectionLabel({ children, center, dark }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.25em] mb-2.5 ${center ? "text-center" : ""}`}
      style={{ color: dark ? theme.cyanLight : theme.shieldBlue }}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ children, className = "", center, dark }) {
  return (
    <h2
      className={`text-2xl sm:text-3xl font-semibold uppercase tracking-tight ${center ? "text-center" : ""} ${className}`}
      style={{ color: dark ? theme.white : theme.navy }}
    >
      {children}
    </h2>
  );
}

// ─── Refined Button-Free Compact Navbar ─────────────────────────────
export function AlphaMatrixNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/alpha-matrix") {
      return pathname === "/group-companies/alpha-matrix" || pathname === "/group-companies/alpha-matrix/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        scrolled
          ? "shadow-md py-2 border-b border-slate-200"
          : "py-2.5 sm:py-3.5 border-b border-slate-200/90"
      }`}
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <Link href="/group-companies/alpha-matrix" className="flex items-center gap-3 select-none group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logos/4.png"
              alt="Alpha Matrix Defence Systems"
              width={52}
              height={52}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="leading-tight flex flex-col">
            <span
              className="text-base sm:text-lg lg:text-[19px] font-black tracking-wider uppercase block leading-none"
              style={{ color: "#08182B" }}
            >
              ALPHA MATRIX
            </span>
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase block mt-1 leading-none"
              style={{ color: "#005691" }}
            >
              DEFENCE SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links ONLY — Clean, Highly Visible & Increased Font Size */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-[15px] sm:text-[16px] font-bold tracking-wide transition-colors py-2 px-1 cursor-pointer hover:text-[#005691]`}
                style={{
                  color: active ? "#005691" : "#08182B",
                }}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                    style={{ backgroundColor: "#005691" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Portal & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <RoysonsPortalButton />
          <button
            className="lg:hidden p-2 rounded-lg border border-slate-200 transition-colors hover:bg-slate-100 cursor-pointer"
            style={{ color: "#08182B", borderColor: "#E2E8F0" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} className="text-[#08182B]" /> : <Menu size={20} className="text-[#08182B]" />}
          </button>
        </div>
      </div>

      {/* Clean Compact Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-slate-200 px-5 py-4 space-y-1.5 bg-white shadow-2xl"
          style={{ backgroundColor: "#ffffff" }}
        >
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[15px] font-bold tracking-wide uppercase py-2.5 px-3.5 rounded-lg transition-colors ${
                  active
                    ? "bg-[#005691]/10 font-extrabold"
                    : "hover:bg-slate-100"
                }`}
                style={{
                  color: active ? "#005691" : "#08182B",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 px-3">
            <span>Secure Defense Comms</span>
            <span className="font-bold text-[#08182B]">0092-42-38924737</span>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── High-End Sovereign Defense Corporate Footer ─────────────────────
export function AlphaMatrixFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050E1A] text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Summary */}
        <div className="lg:col-span-4 max-w-sm">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
              <Image
                src="/logos/4.png"
                alt="Alpha Matrix Defence Systems"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold uppercase tracking-wider text-white">ALPHA MATRIX</p>
              <p className="text-[9px] font-medium tracking-[0.22em] text-slate-400">DEFENCE SYSTEMS</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
            A sovereign defense and security technology integrator engineering mission-critical surveillance grids, radar systems, automated command and control platforms, and critical infrastructure shields.
          </p>
          <div className="flex gap-2.5">
            {SOCIAL_ICONS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 transition-all hover:text-white hover:border-[#0284C7] hover:bg-white/5"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links & Core Solutions */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-300">
              {heading}
            </h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 font-normal transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="lg:col-span-4">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-300">
            Operational Command Center
          </h5>
          <div className="space-y-3 text-xs text-slate-400 font-normal">
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#0284C7]" />
              <span className="leading-relaxed">1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={15} className="flex-shrink-0 text-[#0284C7]" />
              <span className="text-slate-300">0092-42-38924737</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Radio size={15} className="flex-shrink-0 text-[#0284C7]" />
              <span className="text-slate-300">Tactical Comms: 0092-304-7527498</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={15} className="flex-shrink-0 text-[#0284C7]" />
              <span className="text-slate-300">info@roysons.org</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Alpha Matrix Defence Systems • Division of Roy &amp; Sons Holdings • All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// ─── Compact Defense Consultation Form ──────────────────────────────
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const availableServices = [
    "Integrated Surveillance Systems",
    "Border Security & Radar",
    "C4ISR Command & Control",
    "Biometric Access Control",
    "Perimeter Intrusion Shield",
    "Cyber Defense & Zero-Trust",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (s) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "alpha-matrix",
          companyName: "Alpha Matrix",
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.company ? `Defense Inquiry from ${form.company}` : "Alpha Matrix Tactical Inquiry",
          message: form.message,
          additionalFields: {
            company: form.company,
            selectedServices,
          },
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit defense inquiry.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to submit message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setSelectedServices([]);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-lg font-semibold uppercase text-white">Inquiry Transmitted</h3>
        <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
          Thank you, {form.name}. Your operational requirements have been registered with our defense engineering desk.
        </p>
        <button
          onClick={resetForm}
          className="mt-2 px-5 py-2 rounded-lg text-xs font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] block mb-1">
          Tactical Consultation
        </span>
        <h3 className="text-xl font-semibold uppercase text-white">
          Defense Procurement &amp; Systems Inquiry
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label className="text-[11px] font-medium text-slate-300 mb-1 block">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Official / Representative Name"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-black/20 text-xs text-white placeholder-slate-500 outline-none focus:border-[#0284C7] transition-colors"
          />
        </div>
        <div>
          <label className="text-[11px] font-medium text-slate-300 mb-1 block">Official Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="procurement@agency.gov / corp.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-black/20 text-xs text-white placeholder-slate-500 outline-none focus:border-[#0284C7] transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label className="text-[11px] font-medium text-slate-300 mb-1 block">Phone / Line</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-black/20 text-xs text-white placeholder-slate-500 outline-none focus:border-[#0284C7] transition-colors"
          />
        </div>
        <div>
          <label className="text-[11px] font-medium text-slate-300 mb-1 block">Agency / Enterprise</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Defense Entity / Authority"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-black/20 text-xs text-white placeholder-slate-500 outline-none focus:border-[#0284C7] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-medium text-slate-300 mb-2 block">
          Defense Domains Required
        </label>
        <div className="grid sm:grid-cols-2 gap-2">
          {availableServices.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-left transition-all text-xs ${
                  active
                    ? "border-[#0284C7] bg-[#0284C7]/20 text-white font-medium"
                    : "border-white/10 bg-black/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center shrink-0 ${
                    active ? "border-[#0284C7] bg-[#0284C7]" : "border-white/20 bg-transparent"
                  }`}
                >
                  {active && <CheckCircle2 size={10} className="text-white" />}
                </div>
                <span className="leading-tight truncate">{s}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="text-[11px] font-medium text-slate-300 mb-1 block">Operational Scope &amp; Parameters *</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Describe threat requirements, installation terrain, and targeted timelines..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-black/20 text-xs text-white placeholder-slate-500 outline-none resize-none focus:border-[#0284C7] transition-colors"
        />
      </div>

      {error && <p className="text-xs text-rose-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg text-xs font-medium text-white flex items-center justify-center gap-2 bg-[#005691] hover:bg-[#0284C7] transition-all cursor-pointer disabled:opacity-50"
      >
        <span>{loading ? "Transmitting..." : "Submit Tactical Consultation"}</span>
        <Send size={13} />
      </button>
    </form>
  );
}
