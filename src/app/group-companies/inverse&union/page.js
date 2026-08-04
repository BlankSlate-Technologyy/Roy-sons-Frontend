"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Settings, Package, ClipboardList, Wrench, Truck,
  Headset, HardHat, Building2, Factory, Zap, Landmark, Bolt, Ship,
  Sprout, Pipette, ShieldCheck, HeartHandshake, Cpu, Star, Quote,
  HelpCircle, Eye, Compass, Leaf, TrendingUp, Layers, Cog,
  Globe, BarChart2, FileText, Search, PackageCheck, ClipboardCheck,
  Menu, X, ChevronDown, Upload, ImageIcon, Trash2, ChevronLeft, ChevronRight,
} from "lucide-react";

// ── Color System matching Inverse & Union Trading Logo ──
const C = {
  navy:       "#0B2545", // Deep Navy — headers, text
  navyDark:   "#071a33",
  blue:       "#0080FF", // Electric Blue — CTA buttons, accents
  blueHover:  "#0066CC",
  cyan:       "#00D2C8", // Cyan Teal — highlights, sub-accents
  white:      "#FFFFFF",
  offWhite:   "#F8FAFC",
  border:     "#E2E8F0",
  textMuted:  "#4A5568",
  textLight:  "#718096",
};

// ── Data ──
const HERO = {
  badge: "Premier Global Sourcing & International Trade Company",
  h1: "Connecting Global Markets.",
  h2: "Facilitating International Trade.",
  sub: "Inverse & Union Trading is a premier global sourcing, procurement, and international trade management company. We connect suppliers, manufacturers, and buyers across international markets with reliable, compliant, and cost-efficient supply chain solutions across multiple sectors.",
  cta1: "Explore Our Services",
  cta2: "Get a Trade Quote",
};

const ABOUT = {
  eyebrow: "About Us",
  title: "Bridging Borders Through Reliable Trade",
  paragraphs: [
    "Inverse & Union Trading specializes in international procurement, commodity sourcing, import/export management, and supply chain facilitation. Our network spans global markets connecting verified manufacturers, suppliers, and buyers to ensure seamless cross-border transactions.",
    "With deep expertise in trade compliance, freight logistics, and customs clearance, we provide end-to-end trade support that helps businesses expand globally with confidence, speed, and precision.",
  ],
};

const STATS = [
  { icon: Globe,         value: 40,    suffix: "+", label: "Countries Served" },
  { icon: PackageCheck,  value: 5000,  suffix: "+", label: "Successful Trade Deals" },
  { icon: ClipboardList, value: 800,   suffix: "+", label: "Corporate Partners" },
  { icon: Building2,     value: 15,    suffix: "+", label: "Years of Trade Experience" },
  { icon: ShieldCheck,   value: 99,    suffix: "%", label: "Trade Compliance Rate" },
];

const SERVICES = [
  { icon: Globe,        title: "Global Sourcing & Procurement",    desc: "Identifying and engaging verified international suppliers and manufacturers to source quality goods at competitive prices." },
  { icon: Ship,         title: "Import & Export Management",       desc: "Comprehensive import and export facilitation covering documentation, duty optimization, and customs compliance." },
  { icon: Truck,        title: "Freight & Logistics Facilitation", desc: "Coordinating sea, air, and land freight, tracking shipments, and ensuring on-time delivery from origin to destination." },
  { icon: FileText,     title: "Trade Compliance & Customs",       desc: "Managing customs clearance, trade regulations, tariff classification, and compliance with international trade laws." },
  { icon: Search,       title: "Commodity Sourcing",               desc: "Sourcing bulk commodities including raw materials, industrial goods, agri-products, and consumer goods globally." },
  { icon: ShieldCheck,  title: "Supply Chain Risk Management",     desc: "Identifying, assessing, and mitigating supply chain risks to protect business continuity and trade performance." },
];

const SECTORS = [
  { icon: HardHat,     title: "Construction & Infrastructure" },
  { icon: Factory,     title: "Manufacturing & Industry" },
  { icon: Pipette,     title: "Oil, Gas & Petrochemicals" },
  { icon: Sprout,      title: "Agriculture & Commodities" },
  { icon: Cog,         title: "Engineering & Machinery" },
  { icon: Zap,         title: "Energy & Power Sector" },
  { icon: Truck,       title: "Logistics & Transportation" },
  { icon: Landmark,    title: "Government & Public Sector" },
  { icon: Cpu,         title: "Technology & Electronics" },
  { icon: Ship,        title: "Marine & Ports" },
  { icon: Building2,   title: "Real Estate Development" },
  { icon: HeartHandshake, title: "Consumer Goods & FMCG" },
];

const WHY_CHOOSE = [
  { title: "Global Supplier Network",   desc: "Access to a vast network of verified and certified international manufacturers and suppliers across multiple industries." },
  { title: "Regulatory Expertise",      desc: "Deep knowledge of international trade laws, customs procedures, and compliance standards in multiple jurisdictions." },
  { title: "End-to-End Trade Support",  desc: "From sourcing and negotiation to shipping and customs clearance — we manage the entire trade lifecycle." },
  { title: "Competitive Pricing",       desc: "Strategic supplier relationships and bulk sourcing capabilities enabling cost-effective procurement solutions." },
  { title: "Risk Mitigation",           desc: "Proactive identification and management of supply chain, financial, and geopolitical trade risks." },
  { title: "Dedicated Trade Advisors",  desc: "Experienced international trade professionals providing tailored advice and strategic support to clients." },
];

const PROCESS = [
  { step: "01", title: "Requirement Analysis",    desc: "We understand your product requirements, specifications, budget, and timelines in detail." },
  { step: "02", title: "Supplier Identification", desc: "Our global sourcing team identifies and shortlists qualified, certified suppliers matching your needs." },
  { step: "03", title: "Negotiation & Contracting", desc: "We negotiate pricing, terms, quality standards, and payment conditions on your behalf." },
  { step: "04", title: "Quality Inspection",       desc: "Pre-shipment quality inspection and certification to ensure products meet agreed specifications." },
  { step: "05", title: "Freight & Logistics",      desc: "Coordinating shipping, freight forwarding, insurance, and tracking from origin to destination." },
  { step: "06", title: "Customs Clearance",        desc: "Managing all documentation, duties, and customs clearance for smooth import/export operations." },
];

const TESTIMONIALS = [
  { name: "Project Director", role: "Infrastructure Contractor", quote: "Inverse & Union Trading helped us source critical materials quickly and with full compliance. Their support was seamless from supplier identification to shipment." },
  { name: "Operations Manager", role: "Manufacturing Group", quote: "We trusted them with our import chain and they delivered on time, every time. Their logistics coordination saved us valuable time and cost." },
  { name: "Procurement Head", role: "Energy Sector", quote: "Their global network and attention to regulatory detail made complex sourcing feel effortless. A dependable trade partner." },
];

const FAQS = [
  { q: "What industries does Inverse & Union Trading serve?", a: "We serve construction, manufacturing, oil & gas, agriculture, engineering, energy, logistics, government, technology, marine, real estate, and consumer goods sectors." },
  { q: "Can you source products from any country?", a: "Yes. Our global supplier network covers suppliers and manufacturers across Asia, Europe, the Middle East, Africa, and the Americas." },
  { q: "Do you handle customs and import documentation?", a: "Absolutely. We provide complete customs clearance, import/export documentation, tariff classification, and trade compliance support." },
  { q: "How do you ensure product quality?", a: "We conduct pre-shipment quality inspections, require supplier certifications, and engage third-party inspection agencies when needed." },
  { q: "Do you offer freight and logistics services?", a: "Yes. We coordinate sea freight, air freight, and land transportation with tracking and insurance for all shipments." },
];

const CONTACT = {
  company: "Inverse & Union Trading",
  address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp1: "0092-304-7527498",
  whatsapp2: "0092-321-8431665",
  email1: "info@roysons.org",
  email2: "support@roysons.org",
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Hero Background Uploader ──
function HeroBgUploader({ heroBg, setHeroBg }) {
  const fileRef = useRef(null);
  return (
    <div style={{ position: "absolute", bottom: 24, right: 24, zIndex: 20, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
      {!heroBg ? (
        <button
          onClick={() => fileRef.current?.click()}
          style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
            background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 10,
            color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          <ImageIcon size={16} /> Set Hero Background Image
        </button>
      ) : (
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => fileRef.current?.click()}
            style={{
              display: "flex", alignItems: "center", gap: 6, padding: "9px 16px",
              background: C.blue, border: "none", borderRadius: 8,
              color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer",
            }}
          >
            <Upload size={14} /> Change Image
          </button>
          <button
            onClick={() => setHeroBg(null)}
            style={{
              display: "flex", alignItems: "center", gap: 6, padding: "9px 14px",
              background: "rgba(255,80,80,0.85)", border: "none", borderRadius: 8,
              color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer",
            }}
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      )}
      <input
        ref={fileRef} type="file" accept="image/*" style={{ display: "none" }}
        onChange={e => {
          const f = e.target.files?.[0];
          if (f) setHeroBg(URL.createObjectURL(f));
          e.target.value = "";
        }}
      />
    </div>
  );
}

// ── Navbar ──
function InverseUnionNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Home", "About Us", "Services", "Trade Sectors", "Our Process", "Contact"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, fontFamily: "'Inter', sans-serif" }}>
      {/* Top info bar */}
      <div style={{ background: C.navy, color: "#fff", fontSize: 12, padding: "7px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.85 }}>
          <MapPin size={13} /> 1st Floor, Rehman Centre-2, Near Zakir Tikka, Ring Road, Lahore.
        </span>
        <div style={{ display: "flex", gap: 24, opacity: 0.85 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Phone size={12} /> 0092-42-38924737</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Mail size={12} /> info@roysons.org</span>
        </div>
      </div>
      {/* Main navbar */}
      <nav style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : C.white,
        borderBottom: `2px solid ${C.border}`,
        boxShadow: scrolled ? "0 4px 20px rgba(11,37,69,0.10)" : "none",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72, transition: "all 0.3s",
      }}>
        {/* Logo */}
        <Link href="/group-companies/inverse&union" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="/group-8.png" alt="Inverse & Union Trading" style={{ height: 48, objectFit: "contain" }} onError={e => { e.target.style.display = "none"; }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: C.navy, lineHeight: 1.1, letterSpacing: "-0.3px" }}>INVERSE & UNION</div>
            <div style={{ fontSize: 11, color: C.blue, fontWeight: 500, letterSpacing: "0.5px" }}>TRADING</div>
          </div>
        </Link>
        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{
              color: C.navy, textDecoration: "none", fontWeight: 500, fontSize: 14,
              padding: "8px 14px", borderRadius: 6, transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.color = C.blue; e.target.style.background = "#EFF6FF"; }}
              onMouseLeave={e => { e.target.style.color = C.navy; e.target.style.background = "transparent"; }}
            >{l}</a>
          ))}
          <a href="#contact" style={{
            marginLeft: 12, padding: "10px 22px", background: C.blue, color: "#fff",
            borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none",
            boxShadow: `0 4px 14px ${C.blue}40`, transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = C.blueHover; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = C.blue; e.target.style.transform = "translateY(0)"; }}
          >Request Trade Quote</a>
        </div>
        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: C.navy, cursor: "pointer" }} className="hamburger">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div style={{ background: C.white, borderTop: `2px solid ${C.border}`, padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setOpen(false)}
              style={{ color: C.navy, textDecoration: "none", fontWeight: 500, padding: "10px 0", borderBottom: `1px solid ${C.border}`, fontSize: 15 }}
            >{l}</a>
          ))}
          <a href="#contact" style={{ marginTop: 12, padding: "12px 0", background: C.blue, color: "#fff", borderRadius: 8, fontWeight: 700, textAlign: "center", textDecoration: "none" }}>Request Trade Quote</a>
        </div>
      )}
    </header>
  );
}

// ── Footer ──
function InverseUnionFooter() {
  const services = ["Global Sourcing & Procurement", "Import & Export Management", "Freight & Logistics", "Trade Compliance", "Commodity Sourcing", "Supply Chain Risk Management"];
  const quickLinks = ["Home", "About Us", "Services", "Trade Sectors", "Our Process", "Contact Us"];
  return (
    <footer style={{ background: C.navy, color: "#fff", fontFamily: "'Inter', sans-serif", paddingTop: 60 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "2fr 1.4fr 1.2fr 1.5fr", gap: 40 }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <img src="/group-8.png" alt="Inverse & Union Trading" style={{ height: 52, objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={e => { e.target.style.display = "none"; }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.1 }}>INVERSE & UNION</div>
              <div style={{ fontSize: 12, color: C.cyan, fontWeight: 500 }}>TRADING</div>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
            A premier global sourcing, procurement, and international trade management company connecting markets worldwide.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["LinkedIn", "Twitter", "Facebook"].map(s => (
              <div key={s} style={{ width: 36, height: 36, background: "rgba(255,255,255,0.10)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Globe size={16} />
              </div>
            ))}
          </div>
        </div>
        {/* Services */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20, color: C.cyan }}>Our Services</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {services.map(s => (
              <li key={s} style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <ArrowRight size={13} style={{ color: C.blue, marginTop: 3, flexShrink: 0 }} /> {s}
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20, color: C.cyan }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {quickLinks.map(l => (
              <li key={l} style={{ marginBottom: 10 }}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => { e.target.style.color = C.cyan; }}
                  onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.65)"; }}
                >{l}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20, color: C.cyan }}>Contact Us</h4>
          {[
            { icon: MapPin, text: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore." },
            { icon: Phone, text: "0092-42-38924737" },
            { icon: MessageCircle, text: "0092-304-7527498" },
            { icon: MessageCircle, text: "0092-321-8431665" },
            { icon: Mail, text: "info@roysons.org" },
            { icon: Mail, text: "support@roysons.org" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
              <Icon size={16} style={{ color: C.blue, flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.6 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 48, padding: "20px 40px", textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
        © 2025 Inverse & Union Trading — All Rights Reserved. | A Roy Sons Group Company
      </div>
    </footer>
  );
}

// ── Stat Counter ──
function StatCard({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(value / 60);
        const t = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(t); }
          else setCount(start);
        }, 25);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} style={{
      background: C.white, border: `1px solid ${C.border}`, borderRadius: 16,
      padding: "28px 24px", textAlign: "center", transition: "all 0.3s",
      boxShadow: "0 2px 12px rgba(11,37,69,0.06)",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,128,255,0.14)`; e.currentTarget.style.borderColor = C.blue; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(11,37,69,0.06)"; e.currentTarget.style.borderColor = C.border; }}
    >
      <div style={{ width: 52, height: 52, background: `${C.blue}15`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
        <Icon size={24} style={{ color: C.blue }} />
      </div>
      <div style={{ fontSize: 32, fontWeight: 800, color: C.navy, lineHeight: 1 }}>{count.toLocaleString()}{suffix}</div>
      <div style={{ fontSize: 13, color: C.textMuted, marginTop: 8, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc, i }) {
  return (
    <div style={{
      background: C.white, border: `1px solid ${C.border}`, borderRadius: 16,
      padding: "28px 24px", transition: "all 0.3s", position: "relative", overflow: "hidden",
      boxShadow: "0 2px 12px rgba(11,37,69,0.05)",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,128,255,0.12)`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 12px rgba(11,37,69,0.05)"; }}
    >
      <div style={{ width: 52, height: 52, background: `${C.blue}15`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        <Icon size={24} style={{ color: C.blue }} />
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 17, color: C.navy, marginBottom: 10 }}>{title}</h3>
      <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

// ── Testimonial Slider ──
function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % items.length);

  return (
    <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32, boxShadow: "0 2px 10px rgba(11,37,69,0.05)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", color: C.blue, marginBottom: 6 }}>Testimonials</div>
          <h3 style={{ fontWeight: 700, fontSize: 20, color: C.navy }}>What Our Clients Say</h3>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={goPrev} aria-label="Previous testimonial" style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${C.border}`, background: C.white, color: C.navy, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial" style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${C.border}`, background: C.white, color: C.navy, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div style={{ background: `${C.blue}10`, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
        <p style={{ color: C.textMuted, fontSize: 15, lineHeight: 1.8, fontStyle: "italic" }}>“{activeItem.quote}”</p>
        <div style={{ marginTop: 18 }}>
          <div style={{ fontWeight: 700, color: C.navy }}>{activeItem.name}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.blue, textTransform: "uppercase", letterSpacing: "0.6px", marginTop: 4 }}>{activeItem.role}</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
        {items.map((_, index) => (
          <button key={index} type="button" onClick={() => setActiveIndex(index)} aria-label={`Go to testimonial ${index + 1}`} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: index === activeIndex ? C.blue : C.border, cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

// ── FAQ Accordion ──
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${open ? C.blue : C.border}`, borderRadius: 12,
      overflow: "hidden", transition: "border-color 0.3s", marginBottom: 12,
      boxShadow: open ? `0 4px 20px rgba(0,128,255,0.10)` : "none",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 24px", background: open ? "#EFF6FF" : C.white, border: "none",
        cursor: "pointer", fontWeight: 600, fontSize: 15, color: C.navy, textAlign: "left",
        transition: "background 0.2s",
      }}>
        {q}
        {open ? <Minus size={18} style={{ color: C.blue, flexShrink: 0 }} /> : <Plus size={18} style={{ color: C.blue, flexShrink: 0 }} />}
      </button>
      {open && (
        <div style={{ padding: "0 24px 18px", color: C.textMuted, fontSize: 14, lineHeight: 1.7, background: "#EFF6FF" }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ── Contact Form ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };
  const inp = (name, label, type = "text", span = 1) => (
    <div style={{ gridColumn: `span ${span}` }}>
      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.navy, marginBottom: 6 }}>{label}</label>
      <input name={name} type={type} value={form[name]} onChange={handle} required
        style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.navy, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
        onFocus={e => { e.target.style.borderColor = C.blue; }}
        onBlur={e => { e.target.style.borderColor = C.border; }}
      />
    </div>
  );
  return (
    <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {inp("name", "Full Name *")}
      {inp("email", "Email Address *", "email")}
      {inp("phone", "Phone Number")}
      {inp("company", "Company Name")}
      <div style={{ gridColumn: "span 2" }}>
        <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.navy, marginBottom: 6 }}>Service Interested In</label>
        <select name="service" value={form.service} onChange={handle}
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.navy, outline: "none", background: C.white, boxSizing: "border-box" }}>
          <option value="">Select a Service…</option>
          {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
        </select>
      </div>
      <div style={{ gridColumn: "span 2" }}>
        <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.navy, marginBottom: 6 }}>Message *</label>
        <textarea name="message" value={form.message} onChange={handle} required rows={4}
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.navy, outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.blue; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>
      <div style={{ gridColumn: "span 2" }}>
        {sent ? (
          <div style={{ padding: "14px 24px", background: "#DCFCE7", border: "1px solid #16A34A", borderRadius: 8, color: "#16A34A", fontWeight: 600, textAlign: "center" }}>
            ✅ Message sent! We'll get back to you shortly.
          </div>
        ) : (
          <button type="submit" style={{
            width: "100%", padding: "14px 0", background: C.blue, color: "#fff",
            border: "none", borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: `0 6px 20px ${C.blue}40`, transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.blueHover; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = "translateY(0)"; }}
          ><Send size={17} /> Send Message</button>
        )}
      </div>
    </form>
  );
}

// ── Section Header ──
function SectionHeader({ eyebrow, title, sub, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <span style={{ display: "inline-block", padding: "6px 18px", background: light ? "rgba(0,210,200,0.12)" : `${C.blue}15`, borderRadius: 30, fontSize: 12, fontWeight: 700, color: light ? C.cyan : C.blue, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 14 }}>
        {eyebrow}
      </span>
      <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: light ? "#fff" : C.navy, marginBottom: 14, lineHeight: 1.25 }}>{title}</h2>
      {sub && <p style={{ color: light ? "rgba(255,255,255,0.70)" : C.textMuted, maxWidth: 620, margin: "0 auto", lineHeight: 1.8, fontSize: 15 }}>{sub}</p>}
    </div>
  );
}

// ── Main Page ──
export default function InverseUnionPage() {
  const heroBg = "/inverse.jpeg";

  useEffect(() => {
    document.body.classList.add("inverse-union-theme");
    return () => document.body.classList.remove("inverse-union-theme");
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.white, color: C.navy, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <InverseUnionNavbar />

      {/* ── HERO ── */}
      <section id="home" style={{
        position: "relative", minHeight: "540px", display: "flex", alignItems: "center",
        backgroundImage: `linear-gradient(135deg, rgba(11,37,69,0.88) 0%, rgba(11,37,69,0.80) 50%, rgba(0,128,255,0.70) 100%), url("${encodeURI(heroBg)}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px", position: "relative", zIndex: 10, width: "100%" }}>
          <div style={{ maxWidth: 750 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", background: "rgba(0,210,200,0.18)", border: `1px solid ${C.cyan}50`, borderRadius: 30, fontSize: 12, fontWeight: 700, color: C.cyan, letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 28 }}>
              <Globe size={14} /> {HERO.badge}
            </span>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", lineHeight: 1.1, marginBottom: 8 }}>
              {HERO.h1}
            </h1>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1, marginBottom: 28, background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {HERO.h2}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 640 }}>{HERO.sub}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#services" style={{
                display: "flex", alignItems: "center", gap: 8, padding: "14px 28px",
                background: C.blue, color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 15,
                textDecoration: "none", boxShadow: `0 8px 24px ${C.blue}50`, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.blueHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = "translateY(0)"; }}
              >{HERO.cta1} <ArrowRight size={17} /></a>
              <a href="#contact" style={{
                display: "flex", alignItems: "center", gap: 8, padding: "14px 28px",
                background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 15,
                textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.30)", backdropFilter: "blur(8px)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              >{HERO.cta2} <ArrowRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: C.offWhite, padding: "60px 40px", borderTop: `3px solid ${C.blue}20`, borderBottom: `3px solid ${C.blue}20` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {STATS.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about-us" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", padding: "6px 18px", background: `${C.blue}15`, borderRadius: 30, fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 18 }}>{ABOUT.eyebrow}</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: C.navy, marginBottom: 20, lineHeight: 1.25 }}>{ABOUT.title}</h2>
            {ABOUT.paragraphs.map((p, i) => <p key={i} style={{ color: C.textMuted, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{p}</p>)}
            <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
              {[
                { label: "Global Network", icon: Globe },
                { label: "100% Compliant", icon: ShieldCheck },
                { label: "24/7 Logistics", icon: Ship },
              ].map(({ label, icon: Icon }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, background: C.offWhite, border: `1px solid ${C.border}`, padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: C.navy }}>
                  <Icon size={16} style={{ color: C.blue }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: `linear-gradient(135deg, ${C.navy}, #0B3B7A)`, padding: 40, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 360, boxShadow: "0 16px 40px rgba(11,37,69,0.12)" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, background: `${C.blue}30`, borderRadius: "50%", filter: "blur(40px)" }} />
            <Globe size={64} style={{ color: C.cyan, marginBottom: 24 }} />
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 12 }}>International Sourcing & Supply Management</h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>Connecting buyers and suppliers across international borders with complete transparency, quality assurance, and legal compliance.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.1)", padding: "12px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)" }}>
              <Award size={20} style={{ color: C.cyan }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Certified Trade & Procurement Specialists</span>
            </div>
          </div>
        </div>
      </section>
      <section id="services" style={{ padding: "90px 40px", background: C.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Our Services" title="Complete International Trade Solutions" sub="From sourcing to shipment delivery, we manage the full trade lifecycle with expertise, reliability, and compliance." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map((s, i) => <ServiceCard key={i} {...s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── TRADE SECTORS ── */}
      <section id="trade-sectors" style={{ padding: "90px 40px", background: C.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Trade Sectors" title="Industries We Serve" sub="We facilitate international trade across a wide range of sectors, connecting buyers and suppliers worldwide." light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {SECTORS.map(({ icon: Icon, title }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14, padding: "22px 18px", textAlign: "center", transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `${C.blue}30`; e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Icon size={30} style={{ color: C.cyan, marginBottom: 12 }} />
                <div style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-choose-us" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Why Choose Us" title="Why Inverse & Union Trading?" sub="Our expertise, global network, and commitment to excellence make us the preferred international trade partner." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {WHY_CHOOSE.map(({ title, desc }, i) => (
              <div key={i} style={{
                padding: "28px 24px", borderRadius: 16, border: `1px solid ${C.border}`,
                background: C.white, transition: "all 0.3s", boxShadow: "0 2px 10px rgba(11,37,69,0.05)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,128,255,0.11)`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 10px rgba(11,37,69,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <CheckCircle2 size={22} style={{ color: C.blue, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 8 }}>{title}</h3>
                    <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="our-process" style={{ padding: "90px 40px", background: C.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Our Process" title="How We Manage Your Trade" sub="A transparent and efficient 6-step process ensuring seamless sourcing, compliance, and delivery." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} style={{
                background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: "28px 24px",
                transition: "all 0.3s", boxShadow: "0 2px 10px rgba(11,37,69,0.05)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,128,255,0.11)`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 10px rgba(11,37,69,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 44, height: 44, background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: "#fff", marginBottom: 18 }}>{step}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials + FAQ ── */}
      <section style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28, alignItems: "start" }}>
          <div>
            <TestimonialSlider items={TESTIMONIALS} />
          </div>
          <div>
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" sub="Answers to the most common questions about our international trade services." />
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "80px 40px", background: `linear-gradient(135deg, ${C.navy} 0%, #0B3B7A 50%, ${C.blue} 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "#fff", marginBottom: 16 }}>Delivering Industrial Excellence Through Quality & Reliability</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
            Partner with Inverse & Union Trading for trusted global sourcing, seamless logistics, and end-to-end international trade management.
          </p>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 34px",
            background: "#fff", color: C.navy, borderRadius: 10, fontWeight: 700, fontSize: 16,
            textDecoration: "none", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.22)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)"; }}
          >Request a Trade Quote <ArrowRight size={18} /></a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "90px 40px", background: C.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Contact Us" title={`Contact ${CONTACT.company}`} sub="Get in touch with our team for a customized trade solution tailored to your business needs." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40, alignItems: "start" }}>
            {/* Info */}
            <div style={{ background: `linear-gradient(135deg, ${C.navy}, #0B3B7A)`, borderRadius: 20, padding: 36, color: "#fff" }}>
              <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 28 }}>Get In Touch</h3>
              {[
                { icon: Phone, label: "Phone", val: CONTACT.phone },
                { icon: MessageCircle, label: "WhatsApp", val: CONTACT.whatsapp1 },
                { icon: MessageCircle, label: "WhatsApp", val: CONTACT.whatsapp2 },
                { icon: Mail, label: "Email", val: CONTACT.email1 },
                { icon: Mail, label: "Support Email", val: CONTACT.email2 },
              ].map(({ icon: Icon, label, val }) => (
                <div key={`${label}-${val}`} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
                  <div style={{ width: 44, height: 44, background: `${C.blue}40`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} style={{ color: C.cyan }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600, marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Form */}
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 20, padding: 40 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section style={{ padding: "90px 40px", background: C.white, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 28, alignItems: "center" }}>
          <div style={{ background: `linear-gradient(135deg, ${C.navy}, #0B3B7A)`, borderRadius: 20, padding: 36, color: "#fff" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", color: C.cyan, marginBottom: 10 }}>Our Location</div>
            <h3 style={{ fontWeight: 800, fontSize: 24, marginBottom: 16 }}>Visit Our Office</h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              We welcome project consultations, sourcing discussions, and trade planning meetings at our Lahore office.
            </p>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 14, padding: 18 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <MapPin size={18} style={{ color: C.cyan, flexShrink: 0, marginTop: 2 }} />
                <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.7 }}>{CONTACT.address}</div>
              </div>
              <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.cyan, fontWeight: 700, textDecoration: "none" }}>
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div style={{ overflow: "hidden", borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(11,37,69,0.08)" }}>
            <iframe
              title="Inverse & Union Trading Office Location"
              src={MAP_SRC}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </div>
  );
}