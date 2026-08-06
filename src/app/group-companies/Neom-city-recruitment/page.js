"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Users, Users2, User, Building2, Globe2, Target as TargetIcon,
  MessageSquare, ClipboardList, FileCheck, HardHat, HeartPulse, Monitor,
  Factory, Fuel, UtensilsCrossed, Truck, Landmark, ShoppingCart,
  GraduationCap, Plane, Building, Search, UserSearch, ScanSearch,
  CalendarCheck2, Headset, TrendingUp, Cpu, Star, Quote, HelpCircle,
  Eye, Compass, ShieldCheck, Zap, Upload, X, Menu, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";

// ── Color System matching Neom City Recruitment Consultants Logo ──
const C = {
  navy:        "#0F2B5B",   // Primary Deep Navy from Logo text & figures
  blue:        "#0072CE",   // Arrow & Vibrant Cyan Blue accent
  blueHover:   "#005BB5",   // Darker blue hover
  teal:        "#00A896",   // Teal highlight from logo silhouette
  blueLight:   "#EBF5FF",   // Light cyan blue icon background
  border:      "#E2E8F0",
  charcoal:    "#1E293B",   // Typography charcoal text
  darkBg:      "#0B192C",   // Footer dark background
  white:       "#FFFFFF",   // Pure white page bg
  offWhite:    "#F8FAFC",   // Alternating section bg
  textMuted:   "#475569",
  textLight:   "#64748B",
};

const HERO = {
  badge: "Trusted Human Resources & Recruitment Consultancy",
  headlineLine1: "Connecting Exceptional Talent",
  headlineLine2: "with Global Opportunities.",
  subline:
    "Neom City Recruitment Consultants is a leading human resources and recruitment consultancy specializing in executive search, overseas recruitment, workforce planning, talent acquisition, HR outsourcing, and staffing solutions. We help organizations build high-performing teams while connecting skilled professionals with rewarding career opportunities across local and international markets.",
  ctaPrimary: "Explore Our Services",
  ctaSecondary: "Find Talent",
};

const ABOUT = {
  eyebrow: "About Us",
  title: "Building Strong Workforces for a Competitive Future",
  paragraphs: [
    "Neom City Recruitment Consultants provides comprehensive recruitment and workforce solutions for businesses across diverse industries. From talent sourcing and executive hiring to HR consulting and workforce management, we deliver recruitment strategies that support sustainable business growth.",
    "Our experienced team of recruitment specialists, HR consultants, industry experts, and talent advisors works closely with employers and candidates to ensure the right talent reaches the right opportunity.",
  ],
};

const STATS = [
  { icon: CalendarCheck2, value: 20,    suffix: "+", label: "Years of Recruitment Excellence" },
  { icon: Users2,         value: 50000, suffix: "+", label: "Successful Placements" },
  { icon: Building2,      value: 2000,  suffix: "+", label: "Corporate Clients" },
  { icon: User,           value: 500,   suffix: "+", label: "Recruitment Specialists" },
  { icon: Award,          value: 98,    suffix: "%", label: "Client Satisfaction Rate" },
];

const SERVICES = [
  { icon: UserSearch,    title: "Executive Search",         desc: "Identifying and recruiting senior executives, directors, and C-level leadership professionals." },
  { icon: Globe2,        title: "Overseas Recruitment",     desc: "Providing international recruitment services for employers seeking skilled professionals globally." },
  { icon: Users,         title: "Talent Acquisition",       desc: "End-to-end hiring solutions including sourcing, screening, interviews, assessments, and onboarding support." },
  { icon: MessageSquare, title: "HR Consultancy",           desc: "Strategic human resource consulting covering organizational development, HR policies, and compliance." },
  { icon: ClipboardList, title: "Staffing Solutions",       desc: "Temporary, permanent, and project-based staffing solutions tailored to business needs." },
  { icon: FileCheck,     title: "Payroll & HR Outsourcing", desc: "Managing payroll, HR operations, compliance, records, and workforce support services." },
];

const INDUSTRY_ICON_GRID = [
  { icon: HardHat,          title: "Construction & Engineering" },
  { icon: HeartPulse,       title: "Healthcare" },
  { icon: Monitor,          title: "Information Technology" },
  { icon: Factory,          title: "Manufacturing" },
  { icon: Fuel,             title: "Oil & Gas" },
  { icon: UtensilsCrossed,  title: "Hospitality" },
  { icon: Truck,            title: "Logistics & Supply Chain" },
  { icon: Landmark,         title: "Banking & Finance" },
  { icon: ShoppingCart,     title: "Retail & FMCG" },
  { icon: GraduationCap,    title: "Education" },
  { icon: Plane,            title: "Aviation" },
  { icon: Building,         title: "Government Organizations" },
];

const WHY_CHOOSE = [
  { title: "Industry Expertise",            desc: "Deep knowledge of multiple industries and workforce trends." },
  { title: "Global Talent Network",         desc: "Access to qualified professionals across local and international markets." },
  { title: "Fast Recruitment Process",      desc: "Efficient hiring strategies that reduce recruitment time." },
  { title: "Quality Candidate Screening",   desc: "Comprehensive interviews, assessments, and background verification." },
  { title: "Customized Workforce Solutions",desc: "Flexible strategies tailored to unique organizational needs." },
  { title: "Long-Term Partnership",         desc: "Continuous recruitment support and HR advisory services." },
];

const PROCESS = [
  { step: "01", icon: MessageSquare, title: "Workforce Consultation", desc: "Understanding hiring goals, organizational culture, and workforce requirements." },
  { step: "02", icon: ScanSearch,    title: "Talent Sourcing",        desc: "Identifying qualified candidates through advanced sourcing platforms and global recruitment networks." },
  { step: "03", icon: FileCheck,     title: "Screening & Assessment", desc: "Evaluating technical skills, experience, qualifications, and cultural fit." },
  { step: "04", icon: Users,         title: "Interview & Selection",  desc: "Coordinating interviews, candidate evaluations, and final hiring recommendations." },
  { step: "05", icon: CheckCircle2,  title: "Placement & Onboarding", desc: "Supporting successful hiring, documentation, onboarding, and employee integration." },
  { step: "06", icon: Headset,       title: "Continuous HR Support",  desc: "Providing post-placement support, workforce planning, and long-term HR advisory services." },
];

const FEATURED_SERVICES = [
  { title: "Executive Leadership Recruitment", desc: "Identifying experienced executives and business leaders for strategic organizational growth.", icon: UserSearch },
  { title: "Global Overseas Workforce",        desc: "Connecting international employers with qualified professionals across technical, engineering, and medical fields.", icon: Globe2 },
  { title: "Bulk & Project Staffing",          desc: "Providing large-scale recruitment solutions for industrial, construction, and corporate expansion projects.", icon: Users },
  { title: "HR Advisory & Compliance",         desc: "Helping companies structure HR policies, employee contracts, and labor law compliance.", icon: MessageSquare },
];

const TESTIMONIALS = [
  { name: "HR Director",        role: "Multinational Corporation", quote: "Neom City Recruitment Consultants transformed our hiring process, delivering top-tier candidates within record timeframes." },
  { name: "Operations Manager", role: "Engineering Group",          quote: "Their overseas recruitment network provided us with highly skilled engineers and technicians for our large-scale infrastructure project." },
];

const FAQS = [
  { q: "What industries do you recruit for?", a: "We recruit across Construction, Healthcare, IT, Engineering, Oil & Gas, Hospitality, Banking, Logistics, Retail, and Government sectors." },
  { q: "Do you offer international / overseas recruitment services?", a: "Yes. We specialize in sourcing, screening, and placing qualified professionals for international employers across GCC, Europe, and Asia." },
  { q: "How do you screen candidates?", a: "We perform multi-stage technical assessments, background checks, document verification, and in-depth interviews before candidate recommendation." },
  { q: "Can you manage bulk hiring for large projects?", a: "Yes. Our team handles volume recruitment and project-based staffing with dedicated recruitment managers." },
];

const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Dedicated Neom City Recruitment Header / Navbar ──
function NeomRecruitmentNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E2E8F0]">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#0F2B5B] text-white py-2 px-6 border-b border-[#1E3A75]">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#0072CE]" />
              Lahore, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#0072CE]" />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#0072CE]" />
              {CONTACT_INFO.emails[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 text-xs text-[#0072CE] font-bold">
              <ShieldCheck size={13} />
              Neom City Recruitment Consultants
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/Neom-city-recruitment" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#EBF5FF] p-1 flex items-center justify-center border border-[#93C5FD] group-hover:scale-105 transition-transform">
            <img src="/group-22.png" alt="Neom City Recruitment Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none text-[#0F2B5B] group-hover:text-[#0072CE] transition-colors">
              NEOM CITY
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0072CE] mt-0.5">
              Recruitment Consultants
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#0F2B5B]">
          {[
            { label: "Home", href: "/group-companies/Neom-city-recruitment" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Industries", href: "#industries" },
            { label: "Why Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#0072CE] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0072CE] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0072CE] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#005BB5] hover:scale-105 active:scale-95"
          >
            <MessageCircle size={15} />
            Find Talent
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0F2B5B] hover:bg-[#EBF5FF] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#0F2B5B]">
            <Link href="/group-companies/Neom-city-recruitment" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              Home
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              About Us
            </Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              Services
            </Link>
            <Link href="#industries" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              Industries
            </Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              Why Us
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0072CE]">
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-[#E2E8F0]">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#0072CE] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
            >
              <MessageCircle size={15} /> Find Talent
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Dedicated Neom City Recruitment Footer ──
function NeomRecruitmentFooter() {
  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-8 border-t-4 border-[#0072CE]">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src="/group-22.png" alt="Neom City Recruitment" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">NEOM CITY</h3>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0072CE] mt-1">
                  Recruitment Consultants
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70 mb-6">
              Neom City Recruitment Consultants is a premier HR and executive search agency connecting global employers with top talent across multiple sectors.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0072CE] text-white flex items-center justify-center hover:bg-[#005BB5] hover:scale-110 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.emails[0]}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#0072CE] hover:scale-110 transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#0072CE] hover:scale-110 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0072CE]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                "Executive Search & Headhunting",
                "Overseas Recruitment Services",
                "Talent Sourcing & Screening",
                "Strategic HR Consultancy",
                "Temporary & Permanent Staffing",
                "Payroll & HR Outsourcing",
              ].map((s, i) => (
                <li key={i}>
                  <Link href="#services" className="hover:text-[#0072CE] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#0072CE]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0072CE]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                { label: "About Us", href: "#about" },
                { label: "Industries", href: "#industries" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Recruitment Process", href: "#process" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#0072CE] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#0072CE]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0072CE]" />
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#0072CE] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.office}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#0072CE] flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-[#0072CE] flex-shrink-0" />
                <span>{CONTACT_INFO.whatsapp.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#0072CE] flex-shrink-0" />
                <span>{CONTACT_INFO.emails.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {new Date().getFullYear()} Neom City Recruitment Consultants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Roysons Group
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Animated Counter Component ──
function StatCounterCard({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let rafId;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setCount(value);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div
      ref={cardRef}
      className="group rounded-[20px] border border-[#E2E8F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0072CE]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#0072CE] text-[#0072CE] mb-4 transition-all duration-300 group-hover:bg-[#0072CE] group-hover:text-white group-hover:scale-110">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#0F2B5B] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#475569]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#0072CE] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#0072CE]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F2B5B] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#475569]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0072CE] hover:bg-[#F8FAFC]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EBF5FF] text-[#0072CE] mb-6 transition-all duration-300 group-hover:bg-[#0F2B5B] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0F2B5B] mb-3 transition-colors duration-300 group-hover:text-[#0072CE]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
    </div>
  );
}

// ── Small Icon Grid Card ──
function IndustryIconCard({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0072CE] hover:bg-[#0F2B5B]">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EBF5FF] text-[#0072CE] transition-all duration-300 group-hover:bg-[#0072CE] group-hover:text-white">
        <Icon size={20} />
      </div>
      <p className="text-xs font-bold text-[#0F2B5B] leading-snug transition-colors duration-300 group-hover:text-white">{title}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0072CE]">
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#EBF5FF] text-[#0072CE] mb-4 transition-all duration-300 group-hover:bg-[#0072CE] group-hover:text-white group-hover:scale-110">
        <CheckCircle2 size={20} />
      </div>
      <h3 className="text-lg font-black text-[#0F2B5B] mb-3 transition-colors duration-300 group-hover:text-[#0072CE]">{title}</h3>
      <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0F2B5B]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F2B5B] text-white font-black text-sm group-hover:bg-[#0072CE] transition-all">
          {step}
        </div>
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#EBF5FF] text-[#0072CE] transition-all group-hover:bg-[#0F2B5B] group-hover:text-white">
          <Icon size={17} />
        </div>
        <h4 className="text-base font-bold text-[#0F2B5B]">{title}</h4>
      </div>
      <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Testimonial Slider ──
function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0072CE]">Testimonials</p>
          <h3 className="mt-2 text-lg font-black text-[#0F2B5B]">What Clients Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={goPrev} aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0F2B5B] transition-all hover:bg-[#0072CE] hover:text-white">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0F2B5B] transition-all hover:bg-[#0072CE] hover:text-white">
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <p className="text-sm italic leading-relaxed text-[#475569]">“{activeItem.quote}”</p>
        <div className="mt-5">
          <p className="text-sm font-black text-[#0F2B5B]">{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mt-1 text-[#0072CE]">{activeItem.role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className="h-2.5 w-2.5 rounded-full transition-all"
            style={{ backgroundColor: index === activeIndex ? C.blue : C.border }}
          />
        ))}
      </div>
    </div>
  );
}

// ── FAQ Accordion ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#0F2B5B] transition-colors group-hover:text-[#0072CE]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#0F2B5B] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0072CE] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#EBF5FF]">
          <p className="mt-3 text-sm leading-relaxed text-[#475569]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form Component ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/group-companies/Neom-city-recruitment/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#EBF5FF] text-[#0072CE] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0F2B5B] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#475569] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your message has been received. Our recruitment team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0072CE] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#005BB5]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0F2B5B] mb-6">Start Building Your Team</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F2B5B] outline-none transition-all focus:border-[#0072CE] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F2B5B] outline-none transition-all focus:border-[#0072CE] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F2B5B] outline-none transition-all focus:border-[#0072CE] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Service Required</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F2B5B] outline-none transition-all focus:border-[#0072CE] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Executive Search">Executive Search</option>
            <option value="Overseas Recruitment">Overseas Recruitment</option>
            <option value="Talent Acquisition">Talent Acquisition</option>
            <option value="HR Consultancy">HR Consultancy</option>
            <option value="Staffing Solutions">Staffing Solutions</option>
            <option value="Payroll & HR Outsourcing">Payroll & HR Outsourcing</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Hiring Requirements *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your candidate requirements..."
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F2B5B] outline-none transition-all resize-none focus:border-[#0072CE] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0072CE] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#005BB5] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Hero BG Image Uploader ──
function HeroBgUploader({ bgImage, setBgImage }) {
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBgImage(url);
  };

  return (
    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      {bgImage && (
        <button onClick={() => setBgImage(null)}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
          style={{ backgroundColor: "rgba(0,114,206,0.9)" }}>
          <X size={13} /> Remove
        </button>
      )}
      <button onClick={() => fileRef.current?.click()}
        className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: "rgba(15,43,91,0.85)", backdropFilter: "blur(8px)" }}>
        <Upload size={14} /> Change BG
      </button>
    </div>
  );
}

// ── Main Page Component ──
export default function NeomRecruitmentPage() {
  const heroBg = "/neom city.jpeg";

  useEffect(() => {
    document.body.classList.add("neom-recruitment-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = C.charcoal;
    return () => {
      document.body.classList.remove("neom-recruitment-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="neom-recruitment-theme font-sans bg-white" style={{ color: C.charcoal, backgroundColor: "#FFFFFF" }}>
      <style>{`
        body.neom-recruitment-theme,
        body.neom-recruitment-theme html,
        body.neom-recruitment-theme main {
          background-color: #FFFFFF !important;
          color: #1E293B !important;
        }

        body.neom-recruitment-theme section {
          background-color: transparent;
        }

        body.neom-recruitment-theme section.bg-white {
          background-color: #FFFFFF !important;
        }

        body.neom-recruitment-theme h1,
        body.neom-recruitment-theme h2,
        body.neom-recruitment-theme h3,
        body.neom-recruitment-theme h4,
        body.neom-recruitment-theme h5,
        body.neom-recruitment-theme h6,
        body.neom-recruitment-theme p,
        body.neom-recruitment-theme span,
        body.neom-recruitment-theme li,
        body.neom-recruitment-theme a,
        body.neom-recruitment-theme label,
        body.neom-recruitment-theme button,
        body.neom-recruitment-theme input,
        body.neom-recruitment-theme textarea {
          background-image: none !important;
          background-clip: border-box !important;
          -webkit-background-clip: border-box !important;
          -webkit-text-fill-color: currentcolor !important;
        }

        body.neom-recruitment-theme h1.text-white,
        body.neom-recruitment-theme h2.text-white,
        body.neom-recruitment-theme h3.text-white,
        body.neom-recruitment-theme h4.text-white,
        body.neom-recruitment-theme p.text-white,
        body.neom-recruitment-theme span.text-white,
        body.neom-recruitment-theme a.text-white {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        input:focus, textarea:focus { border-color: ${C.blue} !important; background: #fff !important; }
        ::selection { background: ${C.blue}; color: white; }
      `}</style>

      {/* Custom Neom Recruitment Navbar */}
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b border-[#E2E8F0]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,43,91,0.88) 0%, rgba(10,28,62,0.84) 50%, rgba(0,114,206,0.70) 100%), url("${encodeURI(heroBg)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl w-full px-6 py-16 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm mb-6 backdrop-blur-sm">
              <ShieldCheck size={14} style={{ color: C.blue }} />
              {HERO.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span style={{ color: C.blue }}>{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.blue }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.blueHover}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.blue}
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0F2B5B] hover:scale-[1.03] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative rounded-[32px] overflow-hidden shadow-lg min-h-[300px] border-2 border-[#E2E8F0]">
            <Image src="/neom city.jpeg" alt="Neom City recruitment team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Talent Matching
            </div>
          </div>
          <div>
            <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <div className="mt-6 space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed text-[#475569]">{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: C.blue }} />
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: C.blue }}>Unmatched Talent Matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F8FAFC] px-6 py-14 lg:py-20 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Complete HR & Recruitment Solutions"
            description="From executive search and overseas workforce sourcing to HR consulting and payroll outsourcing."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries We Serve" title="Powering Workforces Across Diverse Sectors" center />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRY_ICON_GRID.map((item, index) => (
              <IndustryIconCard key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Neom City Recruitment"
            description="Combining deep market expertise, candidate screening, and global talent networks."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section id="process" className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Recruitment Process"
            title="A Systematic, Quality-Driven Hiring Workflow"
            description="From initial consultation to placement and onboarding support."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Panels */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#0F2B5B] to-[#0A1C3E] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <UserSearch size={28} className="absolute top-6 right-6" style={{ color: `${C.blue}80` }} />
            <h3 className="text-xl font-black text-white mb-2">Executive Placement</h3>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.blue }}>Leadership That Drives Growth</p>
            <p className="text-sm leading-relaxed text-white/80">
              We connect organizations with seasoned C-level executives, directors, and strategic managers who drive innovation and competitive advantage.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 bg-[#0B192C] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Globe2 size={28} className="absolute top-6 right-6" style={{ color: `${C.blue}80` }} />
            <h3 className="text-xl font-black text-white mb-2">Overseas Sourcing</h3>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.blue }}>Global Talent, Local Impact</p>
            <p className="text-sm leading-relaxed text-white/80">
              Our international network enables smooth recruitment across GCC, Middle East, Europe, and Asia, covering visa processing and compliance support.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#0072CE] to-[#005BB5] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Zap size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Rapid Turnaround</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">Efficient Hiring Speed</p>
            <p className="text-sm leading-relaxed text-white/90">
              Our pre-vetted candidate databases and digital screening tools ensure quick position fulfillment without compromising candidate quality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Featured Capabilities" title="Specialized HR & Staffing Capabilities" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_SERVICES.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0072CE]">
                <div className="relative h-40 w-full bg-gradient-to-br from-[#0F2B5B] to-[#0A1C3E] flex items-center justify-center overflow-hidden">
                  <item.icon size={44} style={{ color: `${C.blue}90` }} className="transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: C.blue }} />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0F2B5B] group-hover:text-[#0072CE] transition-colors mb-2">{item.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Testimonials, FAQ */}
      <section id="faqs" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#0F2B5B] to-[#0A1C3E] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Eye size={26} className="absolute top-6 right-6 text-white/40" />
              <div className="absolute top-0 left-0 w-2 h-full rounded-l-[24px]" style={{ backgroundColor: C.blue }} />
              <h3 className="text-lg font-black text-white mb-2">Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/75">
                To be recognized globally as a trusted HR partner, creating transformative career opportunities for talent and building world-class workforces for organizations.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#0072CE] to-[#005BB5] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <TargetIcon size={26} className="absolute top-6 right-6 text-white/40" />
              <h3 className="text-lg font-black text-white mb-2">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/85">
                To empower organizations through exceptional talent sourcing, rigorous candidate evaluation, and ethical recruitment practices while fostering long-term employer partnerships.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-8">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle size={22} style={{ color: C.blue }} />
                <h3 className="text-lg font-black text-[#0F2B5B]">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {FAQS.map((item, index) => (
                  <FaqAccordionItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-[#0F2B5B] px-6 py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,114,206,0.25),_transparent_55%)]" />
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: C.blue }} />
        <div className="mx-auto max-w-screen-xl relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Building Workforces. <span style={{ color: C.blue }}>Empowering Future Growth.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
              Neom City Recruitment Consultants delivers reliable, ethical, and result-oriented talent solutions for leading organizations. Contact our recruitment specialists to fulfill your hiring needs today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: C.blue }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = C.blueHover}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = C.blue}
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0F2B5B] active:scale-95"
            >
              Contact HR Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#F8FAFC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Neom City Recruitment"
            description="Discuss your hiring requirements, overseas workforce needs, or executive search projects with our advisors."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0F2B5B] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black" style={{ color: C.blue }}>Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-white/75 mb-8">
                  Our recruitment advisors respond to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0" style={{ color: C.blue }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.blue }}>Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0" style={{ color: C.blue }}>
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.blue }}>WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0" style={{ color: C.blue }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.blue }}>Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
                &copy; {new Date().getFullYear()} Neom City Recruitment Consultants. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Location Section */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0072CE]">Our Location</p>
              <h3 className="mt-3 text-2xl font-black text-[#0F2B5B]">Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                We welcome recruitment consultations, talent planning sessions, and employer onboarding meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#0F2B5B]">{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0072CE] transition-colors hover:text-[#005BB5]">
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-sm">
              <iframe
                title="Neom City Recruitment Office Location"
                src={MAP_SRC}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Neom City Recruitment Footer */}
      <NeomRecruitmentFooter />
    </main>
  );
}