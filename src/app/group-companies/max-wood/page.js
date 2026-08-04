"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Building2, Users2, User, ClipboardList, Star,
  ShieldCheck, Sparkles, Cpu, Leaf, Eye, Target, Quote,
  HelpCircle, Menu, X, ChevronLeft, ChevronRight, ExternalLink,
  Sofa, Home, Briefcase, Utensils, Compass, Hammer, Layers, Shield,
  Palette, Ruler, Truck, Wrench
} from "lucide-react";

// ── Color System matching Max Wood Corporation Branding ──
const COLORS = {
  primary:     "#5C3A21", // Warm Rich Wood Brown
  darkWood:    "#3A2312",
  darkerWood:  "#21140A",
  goldAccent:  "#D4A373", // Warm Wood Gold / Amber Accent
  amber:       "#E6A15C",
  cream:       "#FDFBF7", // Soft warm background
  white:       "#FFFFFF",
  border:      "#E8DFD5",
  textMuted:   "#5C5248",
  textLight:   "#7A6F64",
};

const HERO = {
  badge: "Premium Furniture Manufacturing & Interior Solutions Company",
  headlineLine1: "Max Wood Corporation",
  headlineLine2: "Crafting Premium Furniture. Transforming Modern Spaces.",
  subline:
    "Max Wood Corporation is a leading furniture manufacturing and interior solutions company specializing in premium residential furniture, commercial interiors, office furniture, hospitality projects, custom woodwork, modular solutions, and architectural wood products. We combine expert craftsmanship, innovative design, and sustainable materials to create timeless interiors that blend beauty, functionality, and durability.",
  ctaPrimary: "Explore Collections",
  ctaSecondary: "Request a Consultation",
};

const ABOUT = {
  eyebrow: "ABOUT US",
  title: "Excellence in Furniture & Interior Design",
  paragraphs: [
    "Max Wood Corporation is committed to delivering world-class furniture and interior solutions for homes, offices, hotels, retail spaces, and commercial developments. Our experienced designers, architects, engineers, and craftsmen work together to create customized environments that reflect quality, innovation, and elegance.",
    "From concept development to manufacturing and installation, we provide complete turnkey interior solutions tailored to every client's vision.",
  ],
  badges: [
    { title: "Timeless Design", desc: "Aesthetic & Functional Innovation", icon: Palette },
    { title: "Quality Craftsmanship", desc: "Precision Wood Engineering", icon: Hammer },
    { title: "Sustainable Materials", desc: "Eco-Friendly Certified Timber", icon: Leaf },
    { title: "Customer Focused", desc: "Tailored Turnkey Solutions", icon: User },
  ],
};

const STATS = [
  { icon: Award,       value: 25,    suffix: "+", label: "Years of Manufacturing Experience" },
  { icon: Home,        value: 1500,  suffix: "+", label: "Interior Projects Completed" },
  { icon: Sofa,        value: 500,   suffix: "+", label: "Premium Furniture Designs" },
  { icon: Users2,      value: 250,   suffix: "+", label: "Skilled Craftsmen & Designers" },
  { icon: ShieldCheck, value: 99,    suffix: "%", label: "Customer Satisfaction" },
  { icon: Compass,     value: 30,    suffix: "+", label: "Cities Served" },
];

const SERVICES = [
  { icon: Sofa,       title: "Custom Furniture Manufacturing", desc: "Premium residential and commercial furniture designed to meet unique customer requirements." },
  { icon: Palette,    title: "Interior Design",               desc: "Creative interior concepts for homes, offices, hospitality, and commercial spaces." },
  { icon: Briefcase,  title: "Office Furniture",              desc: "Modern workstations, executive offices, conference rooms, and collaborative workspaces." },
  { icon: Home,       title: "Residential Interiors",         desc: "Luxury interior solutions for villas, apartments, and modern homes." },
  { icon: Building2,  title: "Hospitality Furniture",         desc: "Custom furniture and interior solutions for hotels, restaurants, cafes, and resorts." },
  { icon: Utensils,   title: "Modular Kitchens & Wardrobes",  desc: "Smart storage solutions with premium finishes and functional layouts." },
  { icon: Hammer,     title: "Architectural Woodwork",        desc: "High-quality wood paneling, ceilings, partitions, doors, and decorative features." },
  { icon: Wrench,     title: "Turnkey Interior Projects",     desc: "Complex planning, manufacturing, installation, and project management." },
];

const WHY_CHOOSE = [
  { title: "Superior Craftsmanship",   desc: "Unmatched attention to detail and joinery excellence." },
  { title: "Premium Materials",        desc: "Highest grade solid woods, veneers, and hardware." },
  { title: "Customized Designs",       desc: "Tailored to your specific architectural layout." },
  { title: "Modern Manufacturing",     desc: "CNC precision cutting and automated finishing." },
  { title: "Experienced Professionals",desc: "Talented interior architects and master carpenters." },
  { title: "Complete Project Delivery",desc: "Seamless end-to-end design, build, and installation." },
];

const INDUSTRIES_SERVED = [
  { icon: Home,      title: "Residential Homes" },
  { icon: Briefcase, title: "Corporate Offices" },
  { icon: Building2, title: "Hotels & Resorts" },
  { icon: Utensils,  title: "Restaurants & Cafes" },
  { icon: Sofa,      title: "Retail Stores" },
  { icon: Building2, title: "Shopping Malls" },
  { icon: Award,     title: "Educational Institutions" },
  { icon: Shield,    title: "Healthcare Facilities" },
  { icon: Compass,   title: "Government Projects" },
  { icon: Sparkles,  title: "Luxury Developments" },
];

const PROCESS = [
  { step: "01", icon: User,     title: "Consultation",      desc: "Understanding your vision, space, and functional requirements." },
  { step: "02", icon: Palette,  title: "Design & Planning", desc: "Creating layouts, 3D visualizations, and material selections." },
  { step: "03", icon: Hammer,   title: "Manufacturing",    desc: "Precision furniture production using advanced machinery." },
  { step: "04", icon: Shield,   title: "Quality Inspection",desc: "Comprehensive quality checks before delivery." },
  { step: "05", icon: Truck,    title: "Installation",      desc: "Professional installation by experienced technicians." },
  { step: "06", icon: Wrench,   title: "After-Sales Support",desc: "Maintenance, warranty services, and customer support." },
];

const PRODUCTS = [
  { icon: Sofa,      title: "Living Room Furniture", desc: "Luxury sofas, coffee tables, entertainment units, and accent chairs." },
  { icon: Home,      title: "Bedroom Furniture",     desc: "Custom beds, nightstands, dressers, and fitted wardrobe systems." },
  { icon: Utensils,  title: "Dining Furniture",      desc: "Elegant dining tables, handcrafted chairs, and sideboards." },
  { icon: Briefcase, title: "Office Furniture",      desc: "Executive desks, ergonomic seating, and storage cabinets." },
  { icon: Utensils,  title: "Kitchen Solutions",     desc: "Modern modular kitchens with durable wood & acrylic finishes." },
  { icon: Hammer,    title: "Custom Woodwork",       desc: "Wall paneling, decorative ceiling beams, and bespoke joinery." },
];

const TECH_ITEMS = [
  "CNC Wood Processing",
  "3D Interior Visualization",
  "Smart Furniture Design",
  "Precision Wood Engineering",
  "Eco-Friendly Manufacturing",
  "Digital Production Planning",
  "Automated Finishing Systems",
  "Sustainable Material Selection",
  "Quality Control Technology",
  "Smart Project Management",
];

const FEATURED_PROJECTS = [
  { title: "Luxury Residential Villa",    desc: "Complete custom furniture and premium interior design for a modern luxury residence.", image: "/ROYSONS Slider Image 3.jpeg", fallbackBg: "from-[#3A2312] to-[#5C3A21]" },
  { title: "Corporate Headquarters",      desc: "Contemporary office interior featuring executive workspaces and collaborative environments.", image: "/ROYSONS Slider Image 4.jpeg", fallbackBg: "from-[#5C3A21] to-[#D4A373]" },
  { title: "Five-Star Hotel",             desc: "Turnkey hospitality furniture and interior solutions for guest rooms and public spaces.", image: "/ROYSONS Slider Image 5.jpeg", fallbackBg: "from-[#D4A373] to-[#3A2312]" },
  { title: "Retail Flagship Store",       desc: "Custom retail fixtures, display systems, and architectural woodwork.", image: "/ROYSONS Slider Image 6.jpeg", fallbackBg: "from-[#3A2312] to-[#D4A373]" },
];

const TESTIMONIALS = [
  {
    name: "Homeowner",
    role: "Residential Client",
    quote: "Max Wood Corporation transformed our home with beautifully crafted furniture and intelligent interior design beyond our expectations.",
    rating: 5,
  },
  {
    name: "Corporate Client",
    role: "Managing Director",
    quote: "Outstanding office furniture, professional project management, and exceptional installation quality.",
    rating: 5,
  },
  {
    name: "Hotel Developer",
    role: "General Manager",
    quote: "Their hospitality furniture combined luxury, durability, and outstanding craftsmanship.",
    rating: 5,
  },
  {
    name: "Architectural Firm",
    role: "Lead Architect",
    quote: "Precision woodwork and bespoke furniture execution that brought our architectural layout to life perfectly.",
    rating: 5,
  },
];

const FAQS = [
  { q: "What furniture do you manufacture?", a: "We manufacture custom residential furniture, office workstations, hospitality furniture, modular kitchens, wardrobes, dining sets, and architectural woodwork." },
  { q: "Do you provide complete interior solutions?", a: "Yes, we provide end-to-end turnkey interior design, manufacturing, space planning, and site installation." },
  { q: "Can you customize furniture designs?", a: "Absolutly! Every piece of furniture can be tailored in dimensions, wood species, finish, fabric, and color to fit your exact specifications." },
  { q: "What materials do you use?", a: "We use premium solid hardwoods, natural wood veneers, high-grade MDF, eco-friendly finishes, and top-tier German/Italian hardware." },
  { q: "Do you handle commercial projects?", a: "Yes, we handle corporate offices, hotels, restaurants, retail flagship stores, educational hubs, and large-scale residential developments." },
];

// Updated Contact Information requested by user
const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
  googleMapsUrl: "https://maps.app.goo.gl/iDreS8eCT1teZeRV7",
};

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
      className="group rounded-[20px] border border-[#E8DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#D4A373]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#D4A373]/40 text-[#5C3A21] mb-4 transition-all duration-300 group-hover:bg-[#5C3A21] group-hover:text-[#D4A373] group-hover:scale-110 shadow-sm">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#3A2312] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-bold leading-relaxed text-[#5C5248]">{label}</p>
    </div>
  );
}

// ── Section Title Component ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#D4A373]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3A2312] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#5C5248]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card Component with Hover Animations ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E8DFD5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#D4A373] hover:bg-[#FDFBF7]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FAF6F0] text-[#5C3A21] mb-6 transition-all duration-300 group-hover:bg-[#3A2312] group-hover:text-[#D4A373] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#3A2312] mb-3 transition-colors duration-300 group-hover:text-[#5C3A21]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#5C5248]">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#E8DFD5] bg-white transition-all duration-300 overflow-hidden shadow-sm hover:border-[#D4A373]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
      >
        <h4 className="text-sm md:text-base font-bold text-[#3A2312] transition-colors group-hover:text-[#5C3A21]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#3A2312] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#3A2312] group-hover:text-[#D4A373]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 border-t border-[#FAF6F0]">
          <p className="mt-3 text-sm leading-relaxed text-[#5C5248]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Testimonials Slider Component ──
function TestimonialsSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <div className="relative rounded-[24px] border border-[#E8DFD5] bg-white p-8 shadow-sm flex flex-col justify-between min-h-[340px] transition-all hover:border-[#D4A373]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote size={28} className="text-[#5C3A21]" />
            <span className="text-xs uppercase tracking-widest font-black text-[#5C3A21]">Client Review</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={15} className="fill-[#D4A373] text-[#D4A373]" />
            ))}
          </div>
        </div>

        <p className="text-base md:text-lg italic leading-relaxed text-[#3A2312] mb-8 min-h-[90px]">
          &ldquo;{current.quote}&rdquo;
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-[#FAF6F0] pt-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#3A2312] text-[#D4A373] flex items-center justify-center font-black text-lg shadow-inner">
              {current.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-[#3A2312]">{current.name}</p>
              <p className="text-xs text-[#5C3A21] font-semibold">{current.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-[#E8DFD5] bg-[#FDFBF7] text-[#3A2312] flex items-center justify-center transition-all hover:bg-[#5C3A21] hover:text-white hover:border-[#5C3A21]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-[#E8DFD5] bg-[#FDFBF7] text-[#3A2312] flex items-center justify-center transition-all hover:bg-[#5C3A21] hover:text-white hover:border-[#5C3A21]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#5C3A21]" : "w-2 bg-[#E8DFD5]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Contact Form Component with Service Dropdown ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const servicesOptions = [
    "Custom Furniture Manufacturing",
    "Interior Design & Planning",
    "Office Furniture Solutions",
    "Residential Interior Projects",
    "Hospitality Furniture & Design",
    "Modular Kitchens & Wardrobes",
    "Architectural Woodwork",
    "Turnkey Interior Projects",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#E8DFD5] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#FAF6F0] text-[#5C3A21] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#3A2312] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#5C5248] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry regarding &ldquo;{form.service || "our solutions"}&rdquo; has been received. Our furniture &amp; interior specialists will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#3A2312] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#D4A373] transition-all hover:bg-[#5C3A21] hover:text-white"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E8DFD5] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#3A2312] mb-6">Request a Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5248] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#E8DFD5] bg-[#FDFBF7] px-4 py-3.5 text-sm text-[#3A2312] outline-none transition-all focus:border-[#5C3A21] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5248] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#E8DFD5] bg-[#FDFBF7] px-4 py-3.5 text-sm text-[#3A2312] outline-none transition-all focus:border-[#5C3A21] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5248] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#E8DFD5] bg-[#FDFBF7] px-4 py-3.5 text-sm text-[#3A2312] outline-none transition-all focus:border-[#5C3A21] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5248] mb-2">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E8DFD5] bg-[#FDFBF7] px-4 py-3.5 text-sm text-[#3A2312] outline-none transition-all focus:border-[#5C3A21] focus:bg-white"
          >
            <option value="">Select a Service</option>
            {servicesOptions.map((srv) => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5248] mb-2">Your Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your furniture design or interior requirements..."
          className="w-full rounded-xl border border-[#E8DFD5] bg-[#FDFBF7] px-4 py-3.5 text-sm text-[#3A2312] outline-none transition-all resize-none focus:border-[#5C3A21] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#5C3A21] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#3A2312] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Max Wood Navbar Component ──
function MaxWoodNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Projects", href: "#projects" },
    { label: "Industries", href: "#industries" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E8DFD5]">
      <div className="hidden md:block bg-[#21140A] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#D4A373]" /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-[#D4A373]" /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-[#D4A373]" /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#D4A373]">Max Wood Corporation — Furniture Manufacturing &amp; Interior Solutions</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#3A2312] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
            <img src="/group-23.png" alt="Max Wood Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
            <Sofa size={24} color="#D4A373" style={{ display: 'none' }} />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#3A2312] leading-none">MAX WOOD</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5C3A21]">Corporation</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#3A2312]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#5C3A21] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#5C3A21] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#5C3A21] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#3A2312] hover:scale-105 transition-all shadow-sm">
            Request a Consultation <ArrowRight size={14} />
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#FDFBF7] text-[#3A2312]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DFD5] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#3A2312] hover:text-[#5C3A21] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#5C3A21] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            Request a Consultation <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}

// ── About Section Component (with Image Support Option) ──
function AboutSection({ imageSrc = "/max wood.jpeg" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
      <div className="mx-auto max-w-screen-xl grid gap-12 lg:grid-cols-2 items-center">
        {/* About Section Image Container */}
        <div className="relative group">
          <div className="relative rounded-[32px] overflow-hidden border-2 border-[#E8DFD5] shadow-xl bg-gradient-to-br from-[#3A2312] to-[#5C3A21] min-h-[380px] flex items-center justify-center">
            {!imgError && imageSrc ? (
              <img
                src={imageSrc}
                alt="Excellence in Furniture & Interior Design - Max Wood Corporation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[380px]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <Sofa size={64} className="text-[#D4A373] mb-4 animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-2">MAX WOOD CORPORATION</h3>
                <p className="text-xs uppercase tracking-widest text-[#D4A373]">Furniture &amp; Interior Solutions</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-[#D4A373]">Max Wood Corporation</p>
              <p className="text-sm font-bold mt-1">Crafting Premium Furniture. Transforming Modern Spaces.</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl bg-[#5C3A21] p-4 text-white shadow-lg hidden sm:flex items-center gap-3">
            <Award size={24} className="text-[#D4A373]" />
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#D4A373]">25+ Years</p>
              <p className="text-[10px] text-white/90">Furniture Craftsmanship</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
          <div className="mt-6 space-y-4">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-[#5C5248]">{p}</p>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ABOUT.badges.map((bdg, idx) => (
              <div key={idx} className="flex items-center gap-3.5 rounded-2xl border border-[#E8DFD5] bg-[#FDFBF7] p-4 transition-all duration-300 hover:border-[#D4A373] hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#5C3A21] flex items-center justify-center flex-shrink-0">
                  <bdg.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3A2312]">{bdg.title}</h4>
                  <p className="text-[11px] text-[#5C5248]">{bdg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Location Section Component (Standalone Section directly below Contact Us) ──
function LocationSection() {
  return (
    <section id="location" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow="OUR LOCATION"
          title="Visit Our Showroom & Head Office"
          description="We are conveniently located in Lahore. Drop by our office or open our location on Google Maps."
          center
        />

        <div className="mt-10 rounded-[28px] border border-[#E8DFD5] bg-[#FDFBF7] p-6 lg:p-8 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 border border-[#E8DFD5] shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5C3A21] mb-2">
                <MapPin size={16} /> Office Address
              </span>
              <p className="text-base font-bold text-[#3A2312] leading-relaxed">
                {CONTACT_INFO.office}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-[#E8DFD5]">
                <p className="text-xs font-black uppercase tracking-wider text-[#5C3A21] mb-1">Phone</p>
                <p className="text-sm font-bold text-[#3A2312]">{CONTACT_INFO.phone}</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-[#E8DFD5]">
                <p className="text-xs font-black uppercase tracking-wider text-[#5C3A21] mb-1">Email</p>
                <p className="text-sm font-bold text-[#3A2312]">{CONTACT_INFO.emails[0]}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#5C3A21] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#3A2312] hover:scale-[1.02] active:scale-95"
              >
                <MapPin size={16} /> Open Location in Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[360px] lg:h-[420px] rounded-[24px] overflow-hidden border-2 border-[#E8DFD5] shadow-md relative bg-stone-200">
            <iframe
              title="Max Wood Corporation Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.486221086278!2d74.375!3d31.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI3JzE4LjAiTiA3NMKwMjInMzAwIkU!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8DFD5] shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-[#3A2312]">Max Wood Corporation Head Office</p>
                <p className="text-[11px] text-[#5C5248] leading-tight">Rehman Centre-2, Ring Road, Lahore</p>
              </div>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#5C3A21] hover:underline"
              >
                Directions <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Max Wood Footer Component ──
function MaxWoodFooter() {
  return (
    <footer style={{ background: "#21140A" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5">
              <img src="/group-23.png" alt="Max Wood Corporation" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
              <Sofa size={20} color="#D4A373" style={{ display: 'none' }} />
            </div>
            <div>
              <p className="font-black text-lg leading-none">MAX WOOD CORPORATION</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#D4A373]">Furniture &amp; Interior Solutions</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Crafting premium furniture and transforming modern spaces with expert craftsmanship, innovative design, and sustainable materials.
          </p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D4A373]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#D4A373]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#D4A373]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#D4A373]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["Home", "About Us", "Services", "Products", "Projects", "Location", "Careers", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-[#D4A373] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#D4A373]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#D4A373]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#D4A373]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#D4A373]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-5">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-[#5C3A21] transition-colors"
            >
              <MapPin size={14} className="text-[#D4A373]" /> View Location Map <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Max Wood Corporation. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function MaxWoodPage() {
  useEffect(() => {
    document.body.classList.add("max-wood-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.primary;
    return () => {
      document.body.classList.remove("max-wood-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="max-wood-theme font-sans bg-white text-[#3A2312] selection:bg-[#3A2312] selection:text-[#D4A373]">
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #3A2312 !important;
          color-scheme: light !important;
        }
        .max-wood-theme h1, .max-wood-theme h2, .max-wood-theme h3,
        .max-wood-theme h4, .max-wood-theme h5, .max-wood-theme h6,
        .max-wood-theme p, .max-wood-theme span, .max-wood-theme li,
        .max-wood-theme a, .max-wood-theme label, .max-wood-theme button,
        .max-wood-theme input, .max-wood-theme textarea, .max-wood-theme select {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <MaxWoodNavbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#21140A] border-b border-[#21140A] py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/max wood.jpeg"
            alt="Max Wood Corporation Background"
            className="w-full h-full object-cover opacity-25"
            onError={(e) => { e.currentTarget.src = '/ROYSONS Slider Image 3.jpeg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#21140A] via-[#21140A]/90 to-[#21140A]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,163,115,0.2),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-screen-xl px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
              <ShieldCheck size={14} className="text-[#D4A373]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span className="text-[#D4A373]">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E8DFD5]">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-[#5C3A21] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#D4A373] shadow-md transition-all duration-300 hover:bg-[#3A2312] hover:text-white hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#3A2312] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#FDFBF7] px-6 py-14 lg:py-20 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section (with Image Option) */}
      <AboutSection imageSrc="/max wood.jpeg" />

      {/* Core Services Section */}
      <section id="services" className="bg-[#FDFBF7] px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Complete Furniture & Interior Solutions"
            description="From custom furniture manufacturing and space planning to turnkey interior execution and architectural woodwork."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Industries We Serve & Process */}
      <section id="industries" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Why Choose Us */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#E8DFD5] bg-[#FDFBF7] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21]">WHY CHOOSE MAX WOOD CORPORATION</span>
                <h3 className="mt-2 text-2xl font-black text-[#3A2312] mb-6">Your Trusted Interior &amp; Furniture Partner</h3>
                <div className="space-y-4">
                  {WHY_CHOOSE.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#D4A373] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-[#3A2312]">{item.title}</p>
                        <p className="text-xs text-[#5C5248]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21] mb-2 block">INDUSTRIES WE SERVE</span>
              <h3 className="text-2xl font-black text-[#3A2312] mb-6">Tailored for Every Space</h3>
              <div className="grid grid-cols-2 gap-3">
                {INDUSTRIES_SERVED.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-[#E8DFD5] bg-white p-3.5 shadow-sm hover:border-[#D4A373] transition-colors">
                    <item.icon size={18} className="text-[#5C3A21] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#3A2312]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#E8DFD5] bg-[#21140A] p-8 text-white shadow-xl">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#D4A373]">OUR PROCESS</span>
              <h3 className="mt-2 text-2xl font-black text-white mb-6">From Design to Installation</h3>
              <div className="space-y-4">
                {PROCESS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#5C3A21] text-[#D4A373] flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-[#E8DFD5] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Technology */}
      <section id="products" className="bg-[#FDFBF7] px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          {/* Products */}
          <div className="rounded-[28px] border border-[#E8DFD5] bg-white p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21]">OUR PRODUCTS</span>
            <h3 className="mt-2 text-2xl font-black text-[#3A2312] mb-6">Premium Furniture Collection</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {PRODUCTS.map((prod, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-[#E8DFD5] bg-[#FDFBF7] hover:border-[#D4A373] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5 text-[#5C3A21]">
                    <prod.icon size={18} />
                    <h4 className="text-sm font-bold text-[#3A2312]">{prod.title}</h4>
                  </div>
                  <p className="text-xs text-[#5C5248] leading-relaxed">{prod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Innovation */}
          <div className="rounded-[28px] border border-[#E8DFD5] bg-[#3A2312] p-8 text-white shadow-xl">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#D4A373]">TECHNOLOGY &amp; INNOVATION</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-6">Modern Manufacturing Excellence</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TECH_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#D4A373] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Quality Standards */}
      <section id="sustainability" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] bg-gradient-to-br from-[#5C3A21] to-[#21140A] p-8 text-white shadow-lg">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#D4A373]">SUSTAINABILITY</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-4">Responsible Manufacturing for a Better Future</h3>
            <p className="text-sm leading-relaxed text-white/90">
              We use sustainable timber, recyclable materials, energy-efficient production, waste reduction, and eco-friendly finishes to protect natural resources while delivering premium products.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#E8DFD5] bg-[#FDFBF7] p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21]">QUALITY ASSURANCE</span>
            <h3 className="mt-2 text-2xl font-black text-[#3A2312] mb-4">Built to Last</h3>
            <p className="text-sm leading-relaxed text-[#5C5248] mb-6">
              Every product undergoes strict quality inspections for durability, finish, structural integrity, precision, and craftsmanship to ensure exceptional long-lasting performance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {["Durability Tested", "Precision Engineered", "Quality Checked", "Long-Lasting Performance"].map((std, i) => (
                <div key={i} className="p-3 rounded-xl bg-white border border-[#E8DFD5]">
                  <ShieldCheck size={20} className="mx-auto text-[#5C3A21] mb-1" />
                  <p className="text-[10px] font-bold text-[#3A2312]">{std}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-[#FDFBF7] px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="FEATURED PROJECTS" title="Transformative Interior Spaces" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((proj, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#E8DFD5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#D4A373]">
                <div className={`relative h-44 w-full bg-gradient-to-br ${proj.fallbackBg} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <Sofa size={40} className="absolute text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#3A2312] group-hover:text-[#5C3A21] transition-colors mb-2">{proj.title}</h3>
                  <p className="text-xs text-[#5C5248] leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#3A2312] to-[#5C3A21] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Target size={28} className="absolute top-6 right-6 text-[#D4A373]" />
            <h3 className="text-xl font-black text-white mb-2">OUR MISSION</h3>
            <p className="text-sm leading-relaxed text-[#E8DFD5]">
              To deliver premium furniture and innovative interior solutions through exceptional craftsmanship, modern manufacturing, sustainable practices, and customer-focused design experience.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#5C3A21] to-[#3A2312] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Eye size={28} className="absolute top-6 right-6 text-[#D4A373]" />
            <h3 className="text-xl font-black text-white mb-2">OUR VISION</h3>
            <p className="text-sm leading-relaxed text-[#E8DFD5]">
              To become a globally recognized furniture and interior solutions company known for quality, innovation, craftsmanship, and sustainable manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* COMBINED SECTION: Testimonials & FAQs (Left & Right Side-by-Side) */}
      <section id="testimonials-faq" className="bg-[#FDFBF7] px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Client Testimonials with Slider */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#D4A373]" />
                  CLIENT TESTIMONIALS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#3A2312]">What Our Clients Say</h3>
              </div>
              <TestimonialsSlider testimonials={TESTIMONIALS} />
            </div>

            {/* Right Side: Frequently Asked Questions */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#5C3A21] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#D4A373]" />
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#3A2312]">Got Questions? We Have Answers</h3>
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

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#FDFBF7] px-6 py-16 lg:py-24 border-b border-[#E8DFD5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Contact Max Wood Corporation"
            description="Discuss your custom furniture design, interior project, or commercial requirements with our team."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#3A2312] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full min-h-[460px]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#D4A373]">CONTACT DETAILS</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#E8DFD5] mb-8">
                  Our furniture and interior design experts respond to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4A373]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D4A373] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4A373]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D4A373] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4A373]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D4A373] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4A373]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D4A373] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-xs text-[#E8DFD5]">
                &copy; {new Date().getFullYear()} Max Wood Corporation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Location Section directly below Contact Us */}
      <LocationSection />

      <MaxWoodFooter />
    </main>
  );
}
