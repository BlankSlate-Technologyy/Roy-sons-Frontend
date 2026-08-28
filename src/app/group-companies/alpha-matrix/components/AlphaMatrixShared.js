"use client";

import { useState } from "react";
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
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

export const theme = {
  bg:           "#FFFFFF",
  panel:        "#FFFFFF",
  panelAlt:     "#F8FAFC",
  navyDark:     "#08182B",
  navy:         "#0B1B36",       // Logo "ALPHA MATRIX" dark navy
  navySoft:     "#162B4D",
  gold:         "#005691",       // Logo Shield Blue
  goldSoft:     "#0E6BA8",
  shieldBlue:   "#005691",
  white:        "#FFFFFF",
  textMuted:    "#3E5063",       // Slate text
  textFaint:    "#5A6E7F",       // Logo "DEFENCE SYSTEM" slate grey
  border:       "rgba(0, 86, 145, 0.16)",
  borderSoft:   "rgba(0, 86, 145, 0.08)",
  borderStrong: "rgba(0, 86, 145, 0.28)",
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
  "Quick Links": [
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

export function SectionLabel({ children, center }) {
  return (
    <p className={`text-[11px] font-black uppercase tracking-[0.3em] mb-3 ${center ? "text-center" : ""}`} style={{ color: theme.gold }}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className = "", center }) {
  return (
    <h2 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${center ? "text-center" : ""} ${className}`} style={{ color: theme.navy }}>
      {children}
    </h2>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────
export function AlphaMatrixNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/alpha-matrix") {
      return pathname === "/group-companies/alpha-matrix";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md shadow-xs bg-white/95" style={{ borderColor: theme.border }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
        <Link href="/group-companies/alpha-matrix" className="flex items-center gap-3 group">
          <div className="relative w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
            <Image
              src="/alpha matrix.jpeg"
              alt="Alpha Matrix Defence Systems Logo"
              width={80}
              height={80}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="leading-none">
            <p className="text-sm sm:text-base lg:text-lg font-black tracking-tight uppercase" style={{ color: theme.navy }}>ALPHA MATRIX</p>
            <p className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase mt-1" style={{ color: theme.textFaint }}>DEFENCE SYSTEM</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11.5px] xl:text-xs font-bold uppercase tracking-wide transition-colors py-1 px-1 hover:text-[#005691]"
                style={{
                  color: active ? theme.gold : theme.navy,
                  borderBottom: active ? `2px solid ${theme.gold}` : "2px solid transparent",
                  paddingBottom: "3px",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/alpha-matrix/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:shadow-md active:scale-[0.98] border shadow-xs"
            style={{ borderColor: theme.gold, color: theme.white, backgroundColor: theme.gold }}
          >
            <span>Consultation</span>
            <ArrowRight size={13} />
          </Link>

          <button
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: theme.border, color: theme.navy }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-5 py-4 space-y-2 bg-white shadow-xl" style={{ borderColor: theme.border }}>
          {NAV_LINKS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xs font-bold tracking-wider uppercase py-2 px-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: active ? `${theme.gold}15` : "transparent",
                  color: active ? theme.gold : theme.navy,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/group-companies/alpha-matrix/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: theme.gold, color: theme.white }}
            >
              <span>Request Defense Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Footer (Clean White Theme) ───────────────────────────────────────
export function AlphaMatrixFooter() {
  return (
    <footer className="border-t bg-white mt-12" style={{ borderColor: theme.border, backgroundColor: theme.white }}>
      <div className="mx-auto max-w-screen-xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Summary */}
        <div className="lg:col-span-4 max-w-sm">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-12 h-12 rounded-lg bg-white p-0.5 border shadow-xs flex items-center justify-center" style={{ borderColor: theme.border }}>
              <Image
                src="/alpha matrix.jpeg"
                alt="Alpha Matrix Defence Systems"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[16px] font-black uppercase tracking-wider" style={{ color: theme.navy }}>ALPHA MATRIX</p>
              <p className="text-[9px] font-bold tracking-[0.26em]" style={{ color: theme.textFaint }}>DEFENCE SYSTEM</p>
            </div>
          </div>
          <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
            A leading defense and security technology company specializing in integrated surveillance, border protection, command &amp; control centers, cybersecurity, and mission-critical protection.
          </p>
          <div className="flex gap-2.5">
            {SOCIAL_ICONS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all hover:scale-110 hover:bg-[#005691]/10"
                style={{ borderColor: theme.border, color: theme.gold }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links & Core Solutions */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[12px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: theme.navy }}>
              {heading}
            </h5>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] font-medium transition-colors hover:text-[#005691]"
                    style={{ color: theme.textMuted }}
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
          <h5 className="text-[12px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: theme.navy }}>
            Operational Headquarters
          </h5>
          <div className="space-y-3.5 text-[12.5px]" style={{ color: theme.textMuted }}>
            <p className="flex items-start gap-2.5">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
              <span>1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={16} className="flex-shrink-0" style={{ color: theme.gold }} />
              <span>0092-42-38924737</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={16} className="flex-shrink-0" style={{ color: theme.gold }} />
              <span>WhatsApp: 0092-304-7527498 | 0092-321-8431665</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={16} className="flex-shrink-0" style={{ color: theme.gold }} />
              <span>info@roysons.org | support@roysons.org</span>
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t py-6 px-6" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px]" style={{ color: theme.textFaint }}>
          <p>&copy; 2026 Alpha Matrix Defence Systems. All Rights Reserved. A Roy &amp; Sons Group Company.</p>
          <Link href="/group-companies/alpha-matrix" className="hover:text-[#005691] transition-colors">
            Return to Alpha Matrix Defense Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Contact Form ───────────────────────────────────────────────────
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const availableServices = [
    "Surveillance Systems",
    "Border Security",
    "Command & Control Centers",
    "Access Control & Biometrics",
    "Perimeter Protection",
    "Cyber Defense & Zero-Trust",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (title) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and project details.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/group-companies/alpha-matrix/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, selectedServices }),
      });
      const data = await res.json();
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

  const inputStyle = {
    backgroundColor: theme.white,
    borderColor: theme.border,
    color: theme.navy,
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-10 rounded-2xl border flex flex-col items-center text-center gap-4 shadow-sm bg-white" style={{ borderColor: theme.border }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: hexToRgba(theme.gold, 0.12) }}>
          <CheckCircle2 size={32} style={{ color: theme.gold }} />
        </div>
        <h3 className="text-xl font-black uppercase tracking-wide" style={{ color: theme.navy }}>Inquiry Submitted Successfully</h3>
        <p className="text-[13px] leading-relaxed max-w-md" style={{ color: theme.textMuted }}>
          Thank you, {form.name}. Our defense engineering and security solutions team will review your operational requirements and contact you promptly.
        </p>
        <button onClick={resetForm} className="mt-3 px-6 py-3 rounded-md text-[11.5px] font-black uppercase tracking-wider border transition-all" style={{ borderColor: theme.gold, color: theme.gold }}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl border shadow-sm bg-white" style={{ borderColor: theme.border }}>
      <SectionLabel>Defense Procurement &amp; Integration</SectionLabel>
      <SectionHeading className="mb-6">Request A Security Consultation</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Lt. Col. John Smith / Director"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-[#005691]"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Official Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="official@agency.gov / company.com"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-[#005691]"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Phone / Secure Line</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-[#005691]"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Organization / Agency</label>
          <input
            type="text" name="company" value={form.company} onChange={handleChange}
            placeholder="Ministry / Defense Agency / Enterprise"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-[#005691]"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="text-[10.5px] font-black uppercase tracking-wider mb-2.5 block" style={{ color: theme.textFaint }}>
          Defense Solutions Required
        </label>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {availableServices.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-md border text-left transition-all duration-200"
                style={{
                  borderColor: active ? theme.gold : theme.border,
                  backgroundColor: active ? hexToRgba(theme.gold, 0.08) : theme.white,
                }}
              >
                <div
                  className="w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: active ? theme.gold : theme.border, backgroundColor: active ? theme.gold : "transparent" }}
                >
                  {active && <CheckCircle2 size={12} style={{ color: theme.white }} />}
                </div>
                <span className="text-[11.5px] font-bold leading-tight" style={{ color: theme.navy }}>{s}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5">
        <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Operational Requirements &amp; Scope *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Describe your site parameters, threat profile, desired systems, and deployment timelines..."
          className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all resize-none focus:border-[#005691]"
          style={inputStyle}
        />
      </div>

      {error && <p className="text-[12px] font-bold mb-4" style={{ color: "#B3261E" }}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] disabled:opacity-50 shadow-sm"
        style={{ backgroundColor: theme.gold, color: theme.white }}
      >
        {loading ? "Transmitting..." : "Submit Consultation Request"} <Send size={14} />
      </button>
    </form>
  );
}
