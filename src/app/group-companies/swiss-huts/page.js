"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Building2, Users2, User, ClipboardList, Star,
  BedDouble, Hotel, Compass, CalendarCheck, PartyPopper, Headphones,
  Plane, Landmark, Briefcase, GraduationCap, HeartPulse, Globe2,
  Warehouse, Network, Search, DoorOpen, Utensils, Waves, PhoneCall,
  ThumbsUp, ShieldCheck, Sparkles, Cpu, Leaf, Eye, Target, Quote,
  HelpCircle, Upload, X, Menu, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";

// ── Color System matching Swiss Hut / Swiss Farms Logo (Dark Slate Charcoal + White) ──
const C = {
  slate:      "#2A323D",   // Dark Charcoal Slate from Logo
  slateHover: "#1E252D",   // Deep Dark Slate for hover
  slateLight: "#EDF2F7",   // Light slate tint for icon backgrounds
  slateBorder:"#CBD5E0",   // Soft slate border
  charcoal:   "#1A202C",   // Typography charcoal text
  darkBg:     "#171923",   // Footer dark background
  white:      "#FFFFFF",   // Pure white page bg
  offWhite:   "#F7FAFC",   // Alternating section bg
  border:     "#E2E8F0",
  textMuted:  "#4A5568",
  textLight:  "#718096",
};

const HERO = {
  badge: "Trusted Hospitality & Tourism Solutions Provider",
  headlineLine1: "Creating Memorable Stays.",
  headlineLine2: "Inspiring Exceptional Hospitality.",
  subline:
    "Swiss Hut is a premier hospitality and tourism company specializing in hotel management, resort development, accommodation services, and guest experience solutions. We combine world-class hospitality, personalized service, and sustainable tourism practices to create unforgettable travel experiences while supporting the growth of the tourism industry.",
  ctaPrimary: "Explore Our Destinations",
  ctaSecondary: "Book Your Stay",
};

const ABOUT = {
  eyebrow: "About Us",
  title: "Redefining Hospitality with Comfort & Excellence",
  paragraphs: [
    "Swiss Hut delivers premium hospitality services through luxury accommodations, modern resorts, boutique hotels, and tourism management solutions. From guest services and hotel operations to destination development and event management, we are committed to exceeding expectations at every touchpoint.",
    "Our team of hospitality professionals, tourism experts, and service specialists ensures every guest enjoys comfort, convenience, and exceptional care.",
  ],
};

const STATS = [
  { icon: CalendarCheck, value: 20,     suffix: "+", label: "Years of Hospitality Excellence" },
  { icon: Hotel,         value: 50,     suffix: "+", label: "Hotels & Resorts Managed" },
  { icon: Users2,        value: 500000, suffix: "+", label: "Happy Guests Served" },
  { icon: User,          value: 800,    suffix: "+", label: "Hospitality Professionals" },
  { icon: Award,         value: 98,     suffix: "%", label: "Guest Satisfaction Rate" },
];

const SERVICES = [
  { icon: Building2,     title: "Hotel Management",          desc: "Professional hotel operations, guest services, revenue management, and hospitality consulting." },
  { icon: Waves,         title: "Resort Development",        desc: "Designing and managing luxury resorts that deliver unforgettable guest experiences." },
  { icon: BedDouble,     title: "Accommodation Services",    desc: "Premium rooms, suites, serviced apartments, and vacation accommodations for leisure and business travelers." },
  { icon: Compass,       title: "Tourism Development",       desc: "Developing tourism destinations, travel experiences, and sustainable tourism initiatives." },
  { icon: PartyPopper,   title: "Event & Conference Management", desc: "Hosting corporate events, conferences, weddings, exhibitions, and private celebrations." },
  { icon: ClipboardList, title: "Hospitality Consultancy",  desc: "Strategic consulting for hotels, resorts, tourism projects, and operational improvements." },
];

const SOLUTIONS_LIST_LEFT = [
  "Luxury Hotels",
  "Boutique Hotels",
  "Beach Resorts",
  "Mountain Retreats",
  "Business Hotels",
  "Family Resorts",
];
const SOLUTIONS_LIST_RIGHT = [
  "Conference Centers",
  "Wedding Venues",
  "Fine Dining Restaurants",
  "Wellness & Spa Centers",
  "Eco Tourism Destinations",
  "Vacation Packages",
];

const INDUSTRY_ICON_GRID = [
  { icon: Compass,       title: "Tourism" },
  { icon: Hotel,         title: "Hospitality" },
  { icon: Plane,         title: "Travel Agencies" },
  { icon: Briefcase,     title: "Corporate Businesses" },
  { icon: PartyPopper,   title: "Event Management" },
  { icon: Landmark,      title: "Government Tourism Boards" },
  { icon: Plane,         title: "Airlines" },
  { icon: GraduationCap, title: "Educational Institutions" },
  { icon: HeartPulse,    title: "Healthcare Tourism" },
  { icon: Sparkles,      title: "Luxury Lifestyle Brands" },
  { icon: Warehouse,     title: "Property Developers" },
  { icon: Network,       title: "International Tour Operators" },
];

const WHY_CHOOSE = [
  { title: "Exceptional Guest Experience",  desc: "Delivering personalized hospitality with attention to every detail." },
  { title: "World-Class Amenities",         desc: "Providing modern facilities, fine dining, wellness centers, and entertainment options." },
  { title: "Prime Travel Locations",        desc: "Selecting strategic destinations that offer natural beauty, convenience, and cultural richness." },
  { title: "Professional Management",      desc: "Experienced hospitality leaders managing operations to ensure flawless service." },
  { title: "Sustainable Tourism",           desc: "Integrating eco-friendly practices that protect local environments and support communities." },
  { title: "24/7 Guest Support",            desc: "Offering round-the-clock concierge and guest assistance for peace of mind." },
];

const PROCESS = [
  { step: "01", icon: Search,        title: "Destination Planning", desc: "Identifying unique travel locations and hospitality opportunities." },
  { step: "02", icon: Utensils,      title: "Facility Design",      desc: "Creating guest-focused architecture, interiors, and amenities." },
  { step: "03", icon: DoorOpen,      title: "Operations Setup",     desc: "Implementing world-class hospitality standards and training teams." },
  { step: "04", icon: Star,          title: "Guest Experience",     desc: "Delivering seamless check-in, dining, and luxury stay services." },
  { step: "05", icon: ThumbsUp,      title: "Quality Assurance",    desc: "Maintaining strict standards through feedback and continuous improvement." },
  { step: "06", icon: PhoneCall,     title: "Ongoing Guest Support",desc: "Providing 24/7 assistance and loyalty support for returning guests." },
];

const TECH_CHECKLIST = [
  "Smart Room Automation",
  "Contactless Check-In & Check-Out",
  "Digital Concierge Systems",
  "Property Management Systems (PMS)",
  "Energy-Efficient Resort Designs",
  "Guest Mobile Applications",
  "AI Customer Service Assistants",
  "Sustainable Waste Management",
  "Smart Security & Access Control",
  "Online Booking & Reservation Platforms",
];

const FEATURED_PROJECTS = [
  { title: "Luxury Mountain Resort",      desc: "A high-end mountain retreat offering panoramic views, spa amenities, and fine dining.", icon: Hotel },
  { title: "Boutique Beachfront Hotel",   desc: "Modern coastal accommodation designed for relaxation, leisure, and water activities.", icon: Waves },
  { title: "Executive Business Hotel",    desc: "Contemporary city hotel tailored for business travelers and corporate events.", icon: Briefcase },
  { title: "Eco-Friendly Safari Lodge",  desc: "Sustainable resort nestled in nature, providing eco-tourism and adventure experiences.", icon: Compass },
];

const TESTIMONIALS = [
  { name: "Leisure Traveler",    role: "Hotel Guest",      quote: "Swiss Hut created a truly memorable vacation for my family. The service, staff, and resort facilities exceeded every expectation." },
  { name: "Corporate Client",    role: "Event Organizer", quote: "Our annual business conference was hosted flawlessly by Swiss Hut. Professional management and outstanding hospitality throughout." },
];

const FAQS = [
  { q: "What hospitality services does Swiss Hut offer?", a: "We provide hotel management, resort development, accommodation services, tourism destination planning, event management, and hospitality consultancy." },
  { q: "Can Swiss Hut manage existing hotels or resorts?", a: "Yes. We offer complete property management services, revenue optimization, staff training, and operational upgrades for existing hospitality businesses." },
  { q: "Does Swiss Hut host corporate events and weddings?", a: "Yes. Our team specializes in planning and executing corporate conferences, weddings, exhibitions, and private celebrations across our venues." },
  { q: "How do you integrate sustainability into your resorts?", a: "We implement energy-efficient building designs, water conservation, eco-friendly waste management, and support local community tourism initiatives." },
];

const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Dedicated Swiss Hut Header / Navbar ──
function SwissHutNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E2E8F0]">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#2A323D] text-white py-2 px-6 border-b border-[#3E4856]">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: C.slateLight }} />
              Lahore, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} style={{ color: C.slateLight }} />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} style={{ color: C.slateLight }} />
              {CONTACT_INFO.emails[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 text-xs text-white font-bold">
              <ShieldCheck size={13} style={{ color: C.slateBorder }} />
              Swiss Hut Hospitality &amp; Tourism
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/swiss-huts" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#EDF2F7] p-1 flex items-center justify-center border border-[#CBD5E0] group-hover:scale-105 transition-transform">
            <img src="/grou.png" alt="Swiss Hut Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none text-[#2A323D] group-hover:text-[#1E252D] transition-colors">
              SWISS HUT
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#4A5568] mt-0.5">
              Hospitality &amp; Tourism
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#2A323D]">
          {[
            { label: "Home", href: "/group-companies/swiss-huts" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Destinations", href: "#destinations" },
            { label: "Why Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#1E252D] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2A323D] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#2A323D] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1E252D] hover:scale-105 active:scale-95"
          >
            <MessageCircle size={15} />
            Book Your Stay
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2A323D] hover:bg-[#EDF2F7] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#2A323D]">
            <Link href="/group-companies/swiss-huts" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              Home
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              About Us
            </Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              Services
            </Link>
            <Link href="#destinations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              Destinations
            </Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              Why Us
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#1E252D]">
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-[#E2E8F0]">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#2A323D] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
            >
              <MessageCircle size={15} /> Book Your Stay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Dedicated Swiss Hut Footer ──
function SwissHutFooter() {
  return (
    <footer className="bg-[#171923] text-white pt-16 pb-8 border-t-4 border-[#2A323D]">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src="/grou.png" alt="Swiss Hut" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">SWISS HUT</h3>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#A0AEC0] mt-1">
                  Hospitality &amp; Tourism
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70 mb-6">
              Swiss Hut is a premier hospitality and tourism company specializing in hotel management, resort development, luxury accommodations, and guest experience solutions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A323D] text-white flex items-center justify-center hover:bg-[#1E252D] hover:scale-110 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.emails[0]}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2A323D] hover:scale-110 transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2A323D] hover:scale-110 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CBD5E0]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                "Hotel Management Operations",
                "Luxury Resort Development",
                "Accommodation & Serviced Suites",
                "Destination Tourism Development",
                "Event & Conference Management",
                "Hospitality Consultancy",
              ].map((s, i) => (
                <li key={i}>
                  <Link href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#CBD5E0]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CBD5E0]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                { label: "About Us", href: "#about" },
                { label: "Destinations", href: "#destinations" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Workflow Process", href: "#process" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#CBD5E0]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CBD5E0]" />
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#CBD5E0] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.office}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#CBD5E0] flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-[#CBD5E0] flex-shrink-0" />
                <span>{CONTACT_INFO.whatsapp.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#CBD5E0] flex-shrink-0" />
                <span>{CONTACT_INFO.emails.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {new Date().getFullYear()} Swiss Hut Hospitality &amp; Tourism. All rights reserved.</p>
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
      className="group rounded-[20px] border border-[#E2E8F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A323D]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#2A323D] text-[#2A323D] mb-4 transition-all duration-300 group-hover:bg-[#2A323D] group-hover:text-white group-hover:scale-110">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#2A323D] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#4A5568]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#2A323D] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#2A323D]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#2A323D] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#4A5568]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A323D] hover:bg-[#F7FAFC]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EDF2F7] text-[#2A323D] mb-6 transition-all duration-300 group-hover:bg-[#2A323D] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#2A323D] mb-3 transition-colors duration-300 group-hover:text-[#1E252D]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#4A5568]">{desc}</p>
    </div>
  );
}

// ── Small Icon Grid Card ──
function IndustryIconCard({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#2A323D] hover:bg-[#2A323D]">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EDF2F7] text-[#2A323D] transition-all duration-300 group-hover:bg-[#1E252D] group-hover:text-white">
        <Icon size={20} />
      </div>
      <p className="text-xs font-bold text-[#2A323D] leading-snug transition-colors duration-300 group-hover:text-white">{title}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A323D]">
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#EDF2F7] text-[#2A323D] mb-4 transition-all duration-300 group-hover:bg-[#2A323D] group-hover:text-white group-hover:scale-110">
        <CheckCircle2 size={20} />
      </div>
      <h3 className="text-lg font-black text-[#2A323D] mb-3 transition-colors duration-300 group-hover:text-[#1E252D]">{title}</h3>
      <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A323D]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2A323D] text-white font-black text-sm group-hover:bg-[#1E252D] transition-all">
          {step}
        </div>
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#EDF2F7] text-[#2A323D] transition-all group-hover:bg-[#2A323D] group-hover:text-white">
          <Icon size={17} />
        </div>
        <h4 className="text-base font-bold text-[#2A323D]">{title}</h4>
      </div>
      <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>
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
    <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F7FAFC] p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2A323D]">Testimonials</p>
          <h3 className="mt-2 text-lg font-black text-[#2A323D]">What Guests Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={goPrev} aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#2A323D] transition-all hover:bg-[#2A323D] hover:text-white">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#2A323D] transition-all hover:bg-[#2A323D] hover:text-white">
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <p className="text-sm italic leading-relaxed text-[#4A5568]">“{activeItem.quote}”</p>
        <div className="mt-5">
          <p className="text-sm font-black text-[#2A323D]">{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mt-1 text-[#2A323D]">{activeItem.role}</p>
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
            style={{ backgroundColor: index === activeIndex ? C.slate : C.border }}
          />
        ))}
      </div>
    </div>
  );
}

// ── FAQ Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#2A323D] transition-colors group-hover:text-[#1E252D]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#EDF2F7] flex items-center justify-center text-[#2A323D] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#2A323D] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#EDF2F7]">
          <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/group-companies/swiss-huts/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Error sending message. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#EDF2F7] text-[#2A323D] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#2A323D] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#4A5568] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our hospitality team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#2A323D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#1E252D]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#2A323D] mb-6">Plan Your Experience</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#2A323D] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#2A323D] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#2A323D] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">Service Required</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#2A323D] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Hotel Management">Hotel Management</option>
            <option value="Resort Development">Resort Development</option>
            <option value="Accommodation Services">Accommodation Services</option>
            <option value="Tourism Development">Tourism Development</option>
            <option value="Event Management">Event Management</option>
            <option value="Hospitality Consultancy">Hospitality Consultancy</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your stay or event requirements..."
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F7FAFC] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all resize-none focus:border-[#2A323D] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#2A323D] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#1E252D] hover:scale-[1.02] hover:shadow-lg active:scale-95"
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
          style={{ backgroundColor: "rgba(42,50,61,0.9)" }}>
          <X size={13} /> Remove
        </button>
      )}
      <button
        onClick={() => fileRef.current?.click()}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: "rgba(42,50,61,0.9)" }}
      >
        <ImageIcon size={13} /> {bgImage ? "Change" : "Set BG"}
      </button>
    </div>
  );
}

// ── Main Page Component ──
export default function SwissHutPage() {
  const heroBg = "/swiss.jpeg";

  useEffect(() => {
    document.body.classList.add("swiss-huts-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = C.charcoal;
    return () => {
      document.body.classList.remove("swiss-huts-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="swiss-huts-theme font-sans bg-white" style={{ color: C.charcoal, backgroundColor: "#FFFFFF" }}>
      <style>{`
        body.swiss-huts-theme,
        body.swiss-huts-theme html,
        body.swiss-huts-theme main {
          background-color: #FFFFFF !important;
          color: #1A202C !important;
        }

        body.swiss-huts-theme section {
          background-color: transparent;
        }

        body.swiss-huts-theme section.bg-white {
          background-color: #FFFFFF !important;
        }

        body.swiss-huts-theme h1,
        body.swiss-huts-theme h2,
        body.swiss-huts-theme h3,
        body.swiss-huts-theme h4,
        body.swiss-huts-theme h5,
        body.swiss-huts-theme h6,
        body.swiss-huts-theme p,
        body.swiss-huts-theme span,
        body.swiss-huts-theme li,
        body.swiss-huts-theme a,
        body.swiss-huts-theme label,
        body.swiss-huts-theme button,
        body.swiss-huts-theme input,
        body.swiss-huts-theme textarea {
          background-image: none !important;
          background-clip: border-box !important;
          -webkit-background-clip: border-box !important;
          -webkit-text-fill-color: currentcolor !important;
        }

        body.swiss-huts-theme h1.text-white,
        body.swiss-huts-theme h2.text-white,
        body.swiss-huts-theme h3.text-white,
        body.swiss-huts-theme h4.text-white,
        body.swiss-huts-theme p.text-white,
        body.swiss-huts-theme span.text-white,
        body.swiss-huts-theme a.text-white {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        input:focus, textarea:focus { border-color: ${C.slate} !important; background: #fff !important; }
        ::selection { background: ${C.slate}; color: white; }
      `}</style>

      {/* Custom Swiss Hut Navbar */}
      <SwissHutNavbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b border-[#E2E8F0]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,32,44,0.88) 0%, rgba(42,50,61,0.82) 50%, rgba(26,32,44,0.90) 100%), url("${encodeURI(heroBg)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl w-full px-6 py-16 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm mb-6 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-white" />
              {HERO.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span className="text-white/80">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#2A323D] shadow-lg transition-all duration-300 hover:bg-[#EDF2F7] hover:scale-[1.03] active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#2A323D] hover:scale-[1.03] active:scale-95"
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
            <Image src="/swiss.jpeg" alt="Swiss Hut hospitality and resort experience" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Premium Hospitality
            </div>
          </div>
          <div>
            <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <div className="mt-6 space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed text-[#4A5568]">{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-[#2A323D]" />
              <p className="text-xs font-black uppercase tracking-widest text-[#2A323D]">Unmatched Hospitality Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F7FAFC] px-6 py-14 lg:py-20 border-b border-[#E2E8F0]">
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
            title="Complete Hospitality & Tourism Solutions"
            description="From luxury hotel management and resort development to personalized guest experience solutions."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Sectors We Serve Section */}
      <section className="bg-[#F7FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Sectors We Support" title="Supporting Diverse Travel & Stay Experiences" center />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-[24px] border border-[#E2E8F0] bg-white p-8">
              {[...SOLUTIONS_LIST_LEFT, ...SOLUTIONS_LIST_RIGHT].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#2A323D] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#2A323D]">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {INDUSTRY_ICON_GRID.map((item, index) => (
                <IndustryIconCard key={index} icon={item.icon} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Swiss Hut Section */}
      <section id="why-us" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Swiss Hut"
            description="Combining guest satisfaction, world-class amenities, and sustainable tourism practices."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="bg-[#F7FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Guest Journey"
            title="A Guest-Centric, Disciplined End-to-End Workflow"
            description="From initial destination planning to ongoing guest support — every stage is expertly managed."
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
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#2A323D] to-[#1E252D] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Sparkles size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Premium Guest Experience</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-3">Memorable Stays Designed Around You</p>
            <p className="text-sm leading-relaxed text-white/80">
              Swiss Hut combines luxury accommodations, fine dining, spa wellness, and personalized guest assistance to create unforgettable travel memories.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 bg-[#171923] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Cpu size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Smart Hospitality Tech</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-4">Elevating Travel with Modern Innovation</p>
            <ul className="space-y-2">
              {TECH_CHECKLIST.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-white/75">
                  <CheckCircle2 size={14} className="text-white flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#1F5C3F] to-[#12402B] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Leaf size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Sustainable Tourism</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-green-200 mb-3">Protecting Environments &amp; Local Communities</p>
            <p className="text-sm leading-relaxed text-green-100">
              Swiss Hut is committed to eco-friendly resort operations, energy-efficient facilities, zero single-use plastics, and supporting local tourism economies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="bg-[#F7FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Featured Destinations" title="Stays Shaping Unforgettable Avenues" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2A323D]">
                <div className="relative h-40 w-full bg-gradient-to-br from-[#2A323D] to-[#1A202C] flex items-center justify-center overflow-hidden">
                  <project.icon size={44} className="text-white/60 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#2A323D] group-hover:text-[#1E252D] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{project.desc}</p>
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
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#2A323D] to-[#1A202C] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Eye size={26} className="absolute top-6 right-6 text-white/40" />
              <h3 className="text-lg font-black text-white mb-2">Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/75">
                To become a globally preferred hospitality brand creating extraordinary stays, sustainable resorts, and inspiring guest experiences across premier international travel destinations.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#1E252D] to-[#2A323D] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Target size={26} className="absolute top-6 right-6 text-white/40" />
              <h3 className="text-lg font-black text-white mb-2">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/75">
                To deliver exceptional hospitality through personalized service, modern accommodations, sustainable operations, and world-class management while generating lasting value for partners and guests.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F7FAFC] p-8">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle size={22} className="text-[#2A323D]" />
                <h3 className="text-lg font-black text-[#2A323D]">Frequently Asked Questions</h3>
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
      <section className="relative overflow-hidden bg-[#2A323D] px-6 py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Creating Stays. <span className="text-white/80">Inspiring Journeys.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
              Swiss Hut continues to set new benchmarks in hospitality through dedicated guest care, sustainable destination growth, and high-performance resort operations. Discover the difference of true comfort and excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="#destinations"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#2A323D] shadow-md transition-all duration-300 hover:bg-[#EDF2F7] hover:scale-[1.02] active:scale-95"
            >
              Explore Our Destinations <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#2A323D] active:scale-95"
            >
              Contact Hospitality Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#F7FAFC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Swiss Hut"
            description="Speak with our hospitality and tourism team for bookings, resort management, or event inquiries."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#2A323D] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-white/80">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-white/75 mb-8">
                  Our hospitality team is available to assist you with room reservations, venue bookings, and management inquiries.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/75 mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/75 mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/75 mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
                &copy; {new Date().getFullYear()} Swiss Hut Hospitality &amp; Tourism. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Location Section */}
      <section className="bg-[#F7FAFC] px-6 py-16 lg:py-24 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2A323D]">Our Location</p>
              <h3 className="mt-3 text-2xl font-black text-[#2A323D]">Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4A5568]">
                We welcome hospitality consultations, booking discussions, and event planning meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border border-[#E2E8F0] bg-[#F7FAFC] p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#2A323D]">{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#2A323D] transition-colors hover:text-[#1E252D]">
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-sm">
              <iframe
                title="Swiss Hut Office Location"
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

      {/* Dedicated Swiss Hut Footer */}
      <SwissHutFooter />
    </main>
  );
}