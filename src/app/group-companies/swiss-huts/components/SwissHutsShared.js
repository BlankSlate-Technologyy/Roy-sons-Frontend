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
  Building2,
  BedDouble,
  Hotel,
  Compass,
  CalendarCheck,
  PartyPopper,
  Waves,
  Sparkles,
  Leaf,
  Users2,
  Star,
  User,
  Calendar,
  Coffee,
  Wifi,
  Flame,
  Check,
  Loader2,
} from "lucide-react";
import { HOSPITALITY_LISTINGS } from "../swiss-huts-data";

export const theme = {
  slate: "#1E293B", // Dark Charcoal Slate
  slateHover: "#0F172A",
  slateLight: "#F1F5F9",
  slateBorder: "#CBD5E1",
  charcoal: "#0F172A",
  accentGold: "#C5A059", // Warm Alpine Gold
  wood: "#8B5A2B",
  pine: "#1B4D3E", // Alpine Pine Green
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#475569",
  textLight: "#64748B",
};

export const NAV_LINKS = [
  { label: "Home", href: "/group-companies/swiss-huts" },
  { label: "About Us", href: "/group-companies/swiss-huts/about" },
  { label: "Services", href: "/group-companies/swiss-huts/services" },
  {
    label: "Destinations & Stays",
    shortLabel: "Destinations",
    href: "/group-companies/swiss-huts/destinations",
  },
  { label: "Sustainability", href: "/group-companies/swiss-huts/sustainability" },
  { label: "Contact", href: "/group-companies/swiss-huts/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Alpine Chalet Rentals", href: "/group-companies/swiss-huts/destinations#alpine-chalets" },
  { label: "Luxury Mountain & Lake Resorts", href: "/group-companies/swiss-huts/destinations#mountain-resorts" },
  { label: "Boutique Executive Hotels", href: "/group-companies/swiss-huts/destinations#boutique-hotels" },
  { label: "Eco-Lodges & Nature Glamping", href: "/group-companies/swiss-huts/destinations#eco-lodges" },
  { label: "Guided Mountain Expeditions", href: "/group-companies/swiss-huts/services#tourism" },
  { label: "Executive Offsites & Banquets", href: "/group-companies/swiss-huts/services#events" },
];

export function SectionLabel({ children, center }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-[0.2em] mb-4 bg-slate-50 ${
        center ? "mx-auto" : ""
      }`}
      style={{ borderColor: theme.slateBorder, color: theme.slate }}
    >
      <Hotel size={13} style={{ color: theme.accentGold }} />
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
      style={{ color: theme.slate }}
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

// ─── Reusable Navbar (Strict max-w-7xl mx-auto to fix 100% zoom stretch) ────
export function SwissHutsNavbar({ onOpenBooking }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [internalBookingOpen, setInternalBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/group-companies/swiss-huts") {
      return pathname === "/group-companies/swiss-huts" || pathname === "/group-companies/swiss-huts/";
    }
    return pathname.startsWith(href);
  };

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setInternalBookingOpen(true);
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
          <Link href="/group-companies/swiss-huts" className="flex items-center gap-2.5 sm:gap-3 select-none group shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 flex items-center justify-center flex-shrink-0">
              <Image
                src="/logos/13.png"
                alt="Swiss Hut Logo"
                width={70}
                height={70}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] font-black tracking-tight leading-none uppercase" style={{ color: theme.slate }}>
                Swiss Hut
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-widest uppercase mt-1" style={{ color: theme.accentGold }}>
                Hospitality &amp; Tourism
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
                  className="text-[11.5px] xl:text-[12px] 2xl:text-xs font-bold tracking-wide uppercase transition-all duration-200 relative py-1.5 px-2 xl:px-2.5 whitespace-nowrap hover:text-[#C5A059] cursor-pointer"
                  style={{
                    color: active ? theme.accentGold : theme.slate,
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
                      style={{ backgroundColor: theme.accentGold }}
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
              style={{ borderColor: theme.border, color: theme.slate }}
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
                    backgroundColor: active ? `${theme.accentGold}15` : "transparent",
                    color: active ? theme.accentGold : theme.slate,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Internal Booking Modal for Navbar usage if not handled externally */}
      {internalBookingOpen && (
        <BookingModal
          isOpen={internalBookingOpen}
          onClose={() => setInternalBookingOpen(false)}
        />
      )}
    </>
  );
}

// ─── Reusable Footer ────────────────────────────────────────────────
export function SwissHutsFooter() {
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
            <Link href="/group-companies/swiss-huts" className="flex items-center gap-3.5 mb-5 select-none">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border shadow-xs flex items-center justify-center flex-shrink-0" style={{ borderColor: theme.slateBorder }}>
                <Image
                  src="/logos/13.png"
                  alt="Swiss Hut Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black uppercase tracking-wider leading-tight" style={{ color: theme.slate }}>
                  Swiss Hut
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: theme.accentGold }}>
                  Hospitality &amp; Tourism (Pvt) Ltd
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              A premier hospitality management enterprise and resort developer operating luxury mountain chalets, boutique hotels, eco-lodges, conference retreats, and tourism expeditions across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.slate }}>
                <ShieldCheck size={14} style={{ color: theme.accentGold }} />
                <span>5-Star Hospitality Standard</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold bg-slate-50" style={{ borderColor: theme.border, color: theme.slate }}>
                <Sparkles size={14} style={{ color: theme.accentGold }} />
                <span>500K+ Happy Guests</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.slate }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors hover:text-[#C5A059] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.accentGold }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality Capabilities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.slate }}>
              Hospitality Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:underline transition-colors hover:text-[#C5A059] flex items-center gap-1.5"
                    style={{ color: theme.textMuted }}
                  >
                    <ChevronRight size={12} style={{ color: theme.accentGold }} />
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme.slate }}>
              Reservations &amp; Concierge
            </h4>
            <div className="space-y-3 text-xs font-medium" style={{ color: theme.textMuted }}>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: theme.accentGold }} />
                <span>1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0" style={{ color: theme.accentGold }} />
                <a href="tel:00924238924737" className="hover:underline font-bold" style={{ color: theme.slate }}>
                  0092-42-38924737 / 0092-321-8431665
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0" style={{ color: theme.accentGold }} />
                <a href="mailto:info@roysons.org" className="hover:underline">
                  info@roysons.org
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border bg-slate-50 flex items-center gap-3" style={{ borderColor: theme.border }}>
              <Headphones size={24} style={{ color: theme.accentGold }} />
              <div>
                <p className="text-[11px] font-bold uppercase" style={{ color: theme.slate }}>24/7 Guest Concierge</p>
                <p className="text-[10.5px] font-medium" style={{ color: theme.textMuted }}>Direct booking &amp; chalet concierge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: theme.textLight }}>
          <p>&copy; 2026 Swiss Hut Hospitality &amp; Tourism (Pvt) Ltd. A Roy &amp; Sons Group Company.</p>
          <div className="flex items-center gap-4">
            <Link href="/group-companies/swiss-huts/contact" className="hover:underline hover:text-[#1E293B]">
              Guest Booking Policy
            </Link>
            <span>•</span>
            <Link href="/group-companies/swiss-huts/contact" className="hover:underline hover:text-[#1E293B]">
              Event Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Booking / Reservation Modal ────────────────────────────────────
export function BookingModal({ isOpen, onClose, preselectedStay = null }) {
  const [formData, setFormData] = useState({
    stayId: preselectedStay?.id || "chalet-matterhorn-naran",
    stayName: preselectedStay?.title || "Matterhorn Grand Alpine Chalet",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    roomType: "Luxury Suite",
    guestName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (preselectedStay) {
      setFormData((prev) => ({
        ...prev,
        stayId: preselectedStay.id,
        stayName: preselectedStay.title,
      }));
    }
  }, [preselectedStay]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const randomRef = `SH-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(randomRef);
    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "swiss-huts",
          name: formData.guestName,
          email: formData.email,
          phone: formData.phone,
          service: formData.stayName || "Swiss Huts Reservation",
          subject: `Reservation: ${formData.stayName} (${formData.checkIn} - ${formData.checkOut})`,
          message: `Chalet/Resort: ${formData.stayName}\nDates: ${formData.checkIn} to ${formData.checkOut}\nGuests: ${formData.guests}\nRef: ${randomRef}\nSpecial Requests: ${formData.specialRequests || "None"}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit booking reservation");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to submit booking. Please try again.");
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
        <div className="bg-[#1E293B] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
              <CalendarCheck size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                {submitted ? "Reservation Confirmed" : "Book Your Swiss Stay"}
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                {submitted ? "We look forward to welcoming you" : "Guaranteed best rates & personalized guest concierge"}
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
              <span className="text-xs font-black uppercase tracking-widest text-[#C5A059] block mb-1">
                Booking Reference: {bookingRef}
              </span>
              <h4 className="text-2xl font-black text-[#1E293B] mb-2">Thank You, {formData.guestName}!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your reservation request for <strong className="text-slate-800">{formData.stayName}</strong> has been received. Our Guest Concierge will contact you within 30 minutes with your reservation voucher and arrival briefing.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border max-w-md mx-auto text-left text-xs space-y-2 mb-6" style={{ borderColor: theme.border }}>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-bold text-slate-800">{formData.stayName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Check-In / Out:</span>
                  <span className="font-bold text-slate-800">{formData.checkIn || "Flexible"} to {formData.checkOut || "Flexible"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Party Size:</span>
                  <span className="font-bold text-slate-800">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone / WhatsApp:</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923047527498?text=Hello%20Swiss%20Hut,%20I%20have%20submitted%20booking%20reference%20${bookingRef}%20for%20${encodeURIComponent(formData.stayName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
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
              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#1E293B] mb-1.5">
                  Select Chalet, Resort or Experience
                </label>
                <select
                  value={formData.stayName}
                  onChange={(e) => setFormData({ ...formData, stayName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-semibold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
                  style={{ borderColor: theme.border }}
                  required
                >
                  {HOSPITALITY_LISTINGS.map((item) => (
                    <option key={item.id} value={item.title}>
                      [{item.category}] {item.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Check-out Date</label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests (Family)</option>
                    <option value="5+ Guests">5+ Guests (Group)</option>
                    <option value="Executive Delegation">Executive Delegation (10+)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Mehmood"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                    style={{ borderColor: theme.border }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. guest@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                  style={{ borderColor: theme.border }}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Special Preferences / Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Airport VIP transfer, floral welcome, private jacuzzi setup, dietary requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border text-xs font-medium focus:ring-1 focus:ring-[#1E293B]"
                  style={{ borderColor: theme.border }}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <span>No prepayment required today</span>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#C5A059] transition-colors shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Booking Request</span>
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

// ─── Listing Detail Modal ───────────────────────────────────────────
export function ListingDetailModal({ listing, onClose, onBookNow }) {
  if (!listing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border overflow-hidden my-8" style={{ borderColor: theme.border }}>
        {/* Header Visual */}
        <div className="relative w-full h-64 sm:h-72 bg-slate-900">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-white/95 text-[#1E293B] shadow-sm">
              {listing.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
              {listing.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black leading-tight mb-1">{listing.title}</h3>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#C5A059]" />
                {listing.location}
              </span>
              <span className="flex items-center gap-1">
                <Star size={13} className="fill-[#C5A059] text-[#C5A059]" />
                {listing.rating} ({listing.reviewsCount} verified reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
            <p className="text-sm font-medium leading-relaxed text-slate-700">{listing.summary}</p>
          </div>

          {/* Specs Grid */}
          {listing.roomSpecs && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border" style={{ borderColor: theme.border }}>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Accommodations</p>
                <p className="text-xs font-black text-slate-800">{listing.roomSpecs.bedrooms}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Baths</p>
                <p className="text-xs font-black text-slate-800">{listing.roomSpecs.bathrooms}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Living Area</p>
                <p className="text-xs font-black text-slate-800">{listing.roomSpecs.area}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Capacity</p>
                <p className="text-xs font-black text-[#C5A059]">{listing.capacity}</p>
              </div>
            </div>
          )}

          {/* Amenities */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              Included Luxury Amenities &amp; Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {listing.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-semibold text-slate-500">Curated by Swiss Hut Hospitality</span>
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
                  if (onBookNow) onBookNow(listing);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#C5A059] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <CalendarCheck size={14} />
                <span>Reserve This Stay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
