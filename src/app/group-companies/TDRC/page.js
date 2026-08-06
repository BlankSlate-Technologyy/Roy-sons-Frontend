"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown, Facebook, Linkedin, Mail, MapPin, Phone, Plus, Twitter,
  Youtube, Instagram, Award, Briefcase, FileSearch, TrendingUp, Handshake,
  Leaf, Target, Settings, Scale, CheckCircle2, ArrowRight, Search,
  ClipboardList, Compass, Users2, BarChart3, Landmark, Sprout, Droplets,
  Wind, TreePine, Home as HomeIcon, ShieldAlert, GraduationCap, Eye,
  Quote, Star, Globe2, BrainCircuit, Satellite, Radar, Database,
  FlaskConical, Wheat, Send, Clock, Cpu,
} from "lucide-react";

// ─── Design Tokens ─────────────────────────────────────────────────────────
const C = {
  ink:        "#0E1F17",
  inkSoft:    "#15301F",
  inkDeep:    "#081310",
  line:       "#1C3A28",
  green:      "#2E9E54",
  greenDeep:  "#1F7A3E",
  greenSoft:  "rgba(46,158,84,0.12)",
  bgWhite:    "#FFFFFF",
  bgHaze:     "#F5F9F6",
  bgPanel:    "#EBF5EE",
  border:     "#E1E9E3",
  textInk:    "#0E1F17",
  textMid:    "#3D4F44",
  textMute:   "#6B7C71",
  gold:       "#F0B429",
};

// ─── Content ───────────────────────────────────────────────────────────────
const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Research", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { icon: Award,     value: 20,  suffix: "+", label: "Years of Research\nExcellence" },
  { icon: Briefcase, value: 600, suffix: "+", label: "Completed Research\nProjects" },
  { icon: Users2,    value: 150, suffix: "+", label: "Research\nProfessionals" },
  { icon: Handshake, value: 45,  suffix: "+", label: "National & International\nPartners" },
  { icon: Target,    value: 98,  suffix: "%", label: "Project Success\nRate" },
];

const SERVICES = [
  { icon: FileSearch,   title: "Applied Research",           desc: "Conducting scientific, technical, and policy research that supports informed decision-making and sustainable development." },
  { icon: Leaf,         title: "Environmental Studies",       desc: "Environmental impact assessments (EIA), climate studies, biodiversity assessments, pollution monitoring, and ecological research." },
  { icon: Sprout,       title: "Sustainable Development",     desc: "Developing sustainable programs focused on economic growth, environmental conservation, and community resilience." },
  { icon: Scale,        title: "Policy Research",             desc: "Evidence-based policy analysis, strategic planning, governance studies, and institutional development." },
  { icon: Users2,       title: "Social Development Programs", desc: "Research and implementation of education, healthcare, livelihood, gender equality, and rural development initiatives." },
  { icon: GraduationCap,title: "Capacity Building",           desc: "Professional training, workshops, technical education, research mentoring, and organizational development programs." },
];

const RESEARCH_AREAS = [
  { icon: Leaf,        label: "Environmental Science" },
  { icon: Wind,        label: "Climate Change" },
  { icon: Droplets,    label: "Water Resource Management" },
  { icon: Wheat,       label: "Agriculture & Food Security" },
  { icon: Sprout,      label: "Renewable Energy" },
  { icon: TreePine,    label: "Biodiversity Conservation" },
  { icon: HomeIcon,    label: "Rural Development" },
  { icon: Landmark,    label: "Public Policy" },
  { icon: Users2,      label: "Community Development" },
  { icon: ShieldAlert, label: "Disaster Risk Management" },
];

const WHY_CHOOSE = [
  "Scientific Excellence — Research conducted using internationally recognized methodologies and best practices.",
  "Experienced Researchers — A multidisciplinary team of scientists, engineers, environmental experts, and development professionals.",
  "Evidence-Based Solutions — Delivering practical recommendations supported by reliable data and scientific analysis.",
  "Innovation Driven — Applying modern technologies, digital tools, GIS mapping, AI, and data analytics.",
  "Sustainable Development Focus — Creating solutions that balance environmental protection, economic growth, and social well-being.",
  "Strategic Partnerships — Collaborating with governments, universities, NGOs, international organizations, and private industries.",
];

const PROCESS = [
  { num: "01", title: "Research\nPlanning",       desc: "Identifying objectives, methodology, stakeholders, and project scope.", icon: Search },
  { num: "02", title: "Data\nCollection",         desc: "Gathering field data through surveys, monitoring systems, interviews, and scientific observations.", icon: ClipboardList },
  { num: "03", title: "Research &\nAnalysis",     desc: "Applying statistical analysis, laboratory testing, GIS mapping, and technical evaluation.", icon: Compass },
  { num: "04", title: "Solution\nDevelopment",    desc: "Developing practical recommendations, reports, policies, and implementation strategies.", icon: FlaskConical },
  { num: "05", title: "Project\nImplementation",  desc: "Supporting organizations during execution, monitoring, and technical guidance.", icon: Users2 },
  { num: "06", title: "Monitoring &\nEvaluation", desc: "Measuring project outcomes, impact assessment, and continuous improvement.", icon: BarChart3 },
];

const TECHNOLOGIES = [
  "Geographic Information Systems (GIS)", "Remote Sensing", "Environmental Monitoring Systems",
  "AI & Data Analytics", "Climate Modeling", "Drone Survey Technology",
  "Statistical Software", "Digital Data Collection", "Laboratory Testing Systems",
  "Research Information Management System",
];

const PROJECTS = [
  { title: "Environmental Impact Assessment", desc: "Supporting sustainable infrastructure through comprehensive environmental studies and regulatory compliance.", icon: Leaf },
  { title: "Climate Resilience Program",       desc: "Developing strategies that help communities adapt to changing climate conditions.", icon: Wind },
  { title: "Water Resource Management",        desc: "Researching sustainable water conservation, watershed management, and irrigation improvement.", icon: Droplets },
  { title: "Community Development Initiative", desc: "Improving education, livelihoods, healthcare, and social well-being through evidence-based development programs.", icon: Users2 },
];

const TESTIMONIALS = [
  { name: "Government Research Partner", role: "Policy Directorate", quote: "TDRC consistently delivers reliable research, technical expertise, and innovative solutions that support effective policymaking and sustainable development." },
  { name: "Environmental Specialist",    role: "Field Programs Lead", quote: "Their multidisciplinary approach and commitment to scientific excellence make TDRC a trusted partner for research and development projects." },
];

const FAQS = [
  { q: "What services does TDRC provide?", a: "We provide applied research, environmental studies, sustainable development programs, policy research, social development research, and capacity building services." },
  { q: "Which sectors do you serve?", a: "We work with governments, industries, NGOs, universities, and international organizations across environment, agriculture, energy, and community development sectors." },
  { q: "Do you conduct environmental assessments?", a: "Yes. We conduct environmental impact assessments (EIA), climate studies, biodiversity assessments, and pollution monitoring." },
  { q: "Do you offer research consultancy?", a: "Yes. From research planning and data collection through analysis, implementation support, and monitoring & evaluation, we support every stage of a research or development project." },
];

// ─── Global styles ───────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

  .tdrc-page { font-family: 'Inter', sans-serif; background: ${C.bgWhite}; color: ${C.textInk}; overflow-x: hidden; }
  .tdrc-page *, .tdrc-page *::before, .tdrc-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .tdrc-page h1, .tdrc-page h2, .tdrc-page h3, .tdrc-page h4, .tdrc-page p, .tdrc-page span, .tdrc-page a, .tdrc-page button, .tdrc-page input, .tdrc-page textarea {
    -webkit-text-fill-color: initial !important;
    background-image: none !important;
  }
  .tdrc-page h1, .tdrc-page h2, .tdrc-page h3, .tdrc-page h4 { font-family: 'Space Grotesk', 'Inter', sans-serif; }
  .tdrc-page a:focus-visible, .tdrc-page button:focus-visible, .tdrc-page input:focus-visible, .tdrc-page textarea:focus-visible {
    outline: 2px solid ${C.green}; outline-offset: 2px;
  }

  @keyframes tdrc-pulse-flow { 0% { stroke-dashoffset: 240; opacity:.25; } 50% { opacity:1; } 100% { stroke-dashoffset:0; opacity:.25; } }
  .tdrc-current { stroke: ${C.green}; stroke-width: 2; fill: none; stroke-dasharray: 8 10; stroke-linecap: round;
                 animation: tdrc-pulse-flow 3.4s linear infinite; filter: drop-shadow(0 0 4px ${C.green}); }

  @keyframes tdrc-fade-up { from { opacity:0; transform:translateY(26px);} to { opacity:1; transform:translateY(0);} }
  @keyframes tdrc-blink   { 0%,100% { opacity:1; } 50% { opacity:.25; } }
  @keyframes tdrc-float   { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes tdrc-spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .tdrc-reveal { opacity: 0; animation: tdrc-fade-up 0.7s cubic-bezier(.2,.7,.3,1) forwards; }
  .tdrc-led { animation: tdrc-blink 2.4s ease-in-out infinite; }
  .tdrc-float { animation: tdrc-float 4.5s ease-in-out infinite; }
  .tdrc-spin-slow { animation: tdrc-spin-slow 18s linear infinite; }
  @media (prefers-reduced-motion: reduce) {
    .tdrc-reveal, .tdrc-led, .tdrc-float, .tdrc-spin-slow, .tdrc-current { animation: none !important; opacity: 1 !important; }
  }

  .tdrc-nav { background: rgba(255,255,255,0.94); backdrop-filter: blur(14px); border-bottom: 1px solid ${C.border}; }
  .tdrc-nav-link { color: ${C.textMid}; font-size: 12.5px; font-weight: 600; letter-spacing: 0.01em;
                  text-decoration: none; position: relative; padding: 4px 0; transition: color .25s; }
  .tdrc-nav-link::after { content: ""; position: absolute; left: 0; bottom: -3px; width: 0; height: 2px;
                          background: ${C.green}; transition: width .3s ease; box-shadow: 0 0 6px ${C.green}55; }
  .tdrc-nav-link:hover { color: ${C.textInk}; }
  .tdrc-nav-link:hover::after { width: 100%; }
  .tdrc-nav-link.active { color: ${C.greenDeep}; }
  .tdrc-nav-link.active::after { width: 100%; }

  .tdrc-btn-ink { background: ${C.ink}; color: #fff; border: 1.5px solid ${C.ink}; font-weight: 700; font-size: 12.5px;
                  letter-spacing: 0.01em; border-radius: 7px; padding: 12px 22px; cursor: pointer;
                  display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
                  transition: transform .25s cubic-bezier(.2,.8,.3,1), box-shadow .25s, background .25s; }
  .tdrc-btn-ink:hover { background: ${C.inkSoft}; transform: translateY(-2px); box-shadow: 0 10px 26px rgba(14,31,23,0.28); }
  .tdrc-btn-green { background: ${C.green}; color: #fff; border: 1.5px solid ${C.green}; font-weight: 700; font-size: 12.5px;
                   border-radius: 7px; padding: 12px 22px; cursor: pointer; display: inline-flex; align-items: center;
                   gap: 8px; text-decoration: none; transition: all .25s; }
  .tdrc-btn-green:hover { background: ${C.greenDeep}; border-color: ${C.greenDeep}; transform: translateY(-2px); box-shadow: 0 10px 26px ${C.greenSoft}; }
  .tdrc-btn-outline { background: transparent; color: ${C.ink}; border: 1.5px solid ${C.ink};
                            font-weight: 700; font-size: 12.5px; border-radius: 7px; padding: 12px 22px; cursor: pointer;
                            display: inline-flex; align-items: center; gap: 8px; text-decoration: none; transition: all .25s; }
  .tdrc-btn-outline:hover { background: ${C.ink}; color: #fff; box-shadow: 0 10px 26px rgba(14,31,23,0.2); }
  .tdrc-btn-ghost-white { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4);
                          font-weight: 700; font-size: 12.5px; border-radius: 7px; padding: 12px 22px; cursor: pointer;
                          display: inline-flex; align-items: center; gap: 8px; text-decoration: none; transition: all .25s; }
  .tdrc-btn-ghost-white:hover { border-color: #fff; background: rgba(255,255,255,0.1); }

  .tdrc-eyebrow { color: ${C.greenDeep}; font-size: 11px; font-weight: 800; text-transform: uppercase;
                 letter-spacing: 0.22em; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .tdrc-eyebrow::before { content: ""; width: 18px; height: 2px; background: ${C.green}; display: inline-block; }
  .tdrc-eyebrow-dark { color: #7BE0A0; }

  .tdrc-h2 { font-size: 26px; font-weight: 700; color: ${C.textInk}; line-height: 1.2; letter-spacing: -0.01em; }

  .tdrc-card { background: ${C.bgWhite}; border: 1px solid ${C.border}; border-radius: 12px; transition: all .35s cubic-bezier(.2,.8,.3,1); position: relative; overflow: hidden; }
  .tdrc-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
                       background: ${C.green}; transform: scaleX(0); transform-origin: left; transition: transform .35s ease; }
  .tdrc-card:hover { transform: translateY(-6px); border-color: ${C.green}55; box-shadow: 0 18px 40px rgba(14,31,23,0.10); }
  .tdrc-card:hover::before { transform: scaleX(1); }
  .tdrc-card-icon { width: 46px; height: 46px; border-radius: 10px; background: ${C.greenSoft};
                   display: flex; align-items: center; justify-content: center; margin-bottom: 14px; transition: all .35s; }
  .tdrc-card:hover .tdrc-card-icon { background: ${C.green}; transform: rotate(-6deg) scale(1.05); }
  .tdrc-card:hover .tdrc-card-icon svg { color: #fff !important; }

  .tdrc-stat { background: ${C.bgWhite}; border: 1px solid ${C.border}; border-radius: 12px; padding: 20px 14px;
              display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; transition: all .3s; }
  .tdrc-stat:hover { border-color: ${C.green}; box-shadow: 0 12px 28px ${C.greenSoft}; transform: translateY(-4px); }

  .tdrc-area { background: ${C.bgWhite}; border: 1px solid ${C.border}; border-radius: 10px; padding: 16px 10px;
                  display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; transition: all .25s; }
  .tdrc-area:hover { border-color: ${C.green}; background: ${C.greenSoft}; transform: translateY(-3px); }

  .tdrc-why-row { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); transition: all .25s; }
  .tdrc-why-row:hover { padding-left: 6px; border-bottom-color: ${C.green}55; }
  .tdrc-why-row:last-child { border-bottom: none; }
  .tdrc-check { width: 26px; height: 26px; border-radius: 50%; background: rgba(46,158,84,0.2); border: 1px solid ${C.green}66;
               display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .25s; }
  .tdrc-why-row:hover .tdrc-check { background: ${C.green}; }
  .tdrc-why-row:hover .tdrc-check svg { color: #fff !important; }

  .tdrc-process-node { width: 44px; height: 44px; border-radius: 50%; background: ${C.green}; color: #fff;
                       font-weight: 800; font-size: 12.5px; display: flex; align-items: center; justify-content: center;
                       flex-shrink: 0; box-shadow: 0 0 0 4px ${C.greenSoft}; transition: all .3s; }
  .tdrc-process-card { background: ${C.bgPanel}; border: 1px solid ${C.border}; border-radius: 10px; padding: 16px 14px; transition: all .3s; text-align: center; }
  .tdrc-process-card:hover { background: ${C.bgWhite}; border-color: ${C.green}; transform: translateY(-4px);
                             box-shadow: 0 14px 30px rgba(14,31,23,0.08); }
  .tdrc-process-card:hover .tdrc-process-node { transform: scale(1.1); box-shadow: 0 0 0 6px ${C.greenSoft}; }

  .tdrc-check-item { display: flex; align-items: center; gap: 8px; padding: 6px 0; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.85); transition: all .2s; }
  .tdrc-check-item:hover { color: #7BE0A0; transform: translateX(3px); }

  .tdrc-faq-btn { width: 100%; background: none; border: none; text-align: left; cursor: pointer;
                 display: flex; justify-content: space-between; align-items: center; gap: 14px;
                 padding: 16px 4px; color: ${C.textInk}; font-size: 13.5px; font-weight: 700; }
  .tdrc-faq-btn:hover { color: ${C.greenDeep}; }
  .tdrc-faq-plus { width: 26px; height: 26px; border-radius: 50%; border: 1.5px solid ${C.border};
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .3s; }
  .tdrc-faq-plus.open { background: ${C.green}; border-color: ${C.green}; transform: rotate(135deg); }

  .tdrc-visual { position: relative; border-radius: 14px; overflow: hidden; }
  .tdrc-visual-grid { background-image: linear-gradient(rgba(46,158,84,0.10) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(46,158,84,0.10) 1px, transparent 1px); background-size: 26px 26px; }

  .tdrc-field { width: 100%; background: ${C.bgWhite}; border: 1.5px solid ${C.border}; border-radius: 8px;
                padding: 12px 14px; font-size: 13px; font-family: inherit; color: ${C.textInk}; transition: all .2s; }
  .tdrc-field:hover { border-color: ${C.green}99; }
  .tdrc-field:focus { border-color: ${C.green}; outline: none; box-shadow: 0 0 0 4px ${C.greenSoft}; }
  .tdrc-field::placeholder { color: ${C.textMute}; }
  .tdrc-label { font-size: 11px; font-weight: 700; color: ${C.textMid}; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; display: block; }

  .tdrc-social { width: 32px; height: 32px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.18);
                 display: flex; align-items: center; justify-content: center; transition: all .25s; }
  .tdrc-social:hover { background: ${C.green}; border-color: ${C.green}; transform: translateY(-3px); }

  @media (max-width: 900px) {
    .tdrc-hide-mobile { display: none !important; }
    .tdrc-grid-2 { grid-template-columns: 1fr !important; }
    .tdrc-grid-3 { grid-template-columns: 1fr !important; }
    .tdrc-grid-4 { grid-template-columns: 1fr 1fr !important; }
    .tdrc-grid-5 { grid-template-columns: 1fr 1fr !important; }
  }
`;

// ─── Small helpers ───────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, shown] = useInView(0.15);
  return (
    <div ref={ref} className={shown ? "tdrc-reveal" : ""} style={{ opacity: shown ? undefined : 0, animationDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

function CountUp({ value, suffix = "", duration = 1400 }) {
  const [ref, shown] = useInView(0.4);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!shown) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value, duration]);
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

function VisualPanel({ height = 320, dark = false, icon: Icon = Leaf, dense = false, spin = false }) {
  return (
    <div
      className="tdrc-visual tdrc-visual-grid"
      style={{
        height,
        background: dark
          ? `linear-gradient(155deg, ${C.ink} 0%, ${C.inkSoft} 55%, ${C.inkDeep} 100%)`
          : `linear-gradient(155deg, ${C.bgPanel} 0%, #DFF0E3 100%)`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className={spin ? "tdrc-spin-slow" : "tdrc-float"} style={{
          width: 84, height: 84, borderRadius: "50%",
          background: dark ? C.greenSoft : "rgba(255,255,255,0.7)",
          border: `1.5px solid ${C.green}`, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 40px ${dark ? "rgba(46,158,84,0.3)" : "rgba(46,158,84,0.2)"}`,
        }}>
          <Icon size={34} color={dark ? "#7BE0A0" : C.greenDeep} />
        </div>
      </div>
      {dense && (
        <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", gap: 8 }}>
          {[0, 1, 2].map(i => (
            <div key={i} className="tdrc-led" style={{
              width: 7, height: 7, borderRadius: "50%", background: C.green,
              boxShadow: `0 0 6px ${C.green}`, animationDelay: `${i * 0.3}s`,
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} color={C.gold} fill={C.gold} />
      ))}
    </div>
  );
}

// ─── Contact Form ────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/group-companies/TDRC/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message.");
      }
      setSent(true);
    } catch (err) {
      alert(err.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", background: C.greenSoft, border: `1.5px solid ${C.green}`,
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
        }}>
          <CheckCircle2 size={26} color={C.green} />
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: C.textInk, marginBottom: 6 }}>Message Sent</h3>
        <p style={{ fontSize: 12.5, color: C.textMute, marginBottom: 18 }}>Thank you for reaching out. Our team will get back to you shortly.</p>
        <button className="tdrc-btn-outline" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="tdrc-grid-2">
        <div>
          <label className="tdrc-label">Full Name</label>
          <input className="tdrc-field" placeholder="Your name" value={form.name} onChange={update("name")} required />
        </div>
        <div>
          <label className="tdrc-label">Email Address</label>
          <input className="tdrc-field" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} required />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="tdrc-grid-2">
        <div>
          <label className="tdrc-label">Phone Number</label>
          <input className="tdrc-field" placeholder="+92 XXX XXXXXXX" value={form.phone} onChange={update("phone")} />
        </div>
        <div>
          <label className="tdrc-label">Service Type</label>
          <select className="tdrc-field" value={form.subject} onChange={update("subject")}>
            <option value="">Select a service</option>
            <option value="Applied Research">Applied Research</option>
            <option value="Environmental Studies">Environmental Studies</option>
            <option value="Policy Research">Policy Research</option>
            <option value="Sustainable Development">Sustainable Development</option>
            <option value="Capacity Building">Capacity Building</option>
          </select>
        </div>
      </div>
      <div>
        <label className="tdrc-label">Message</label>
        <textarea className="tdrc-field" rows={5} placeholder="Tell us about your research or project needs..." value={form.message} onChange={update("message")} required style={{ resize: "vertical" }} />
      </div>
      <button type="submit" className="tdrc-btn-green" style={{ alignSelf: "flex-start" }}>
        Send Message <Send size={14} />
      </button>
    </form>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function TDRCPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const activeTestimonialItem = TESTIMONIALS[activeTestimonial];
  const MAP_SRC = "https://www.google.com/maps?q=31.4609249,74.4260081&hl=en&z=16&output=embed";

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "tdrc-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    return () => {
      document.body.classList.remove("roys-roys-theme", "tdrc-theme");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="tdrc-page roys-roys-theme tdrc-theme">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <header className="tdrc-nav" style={{ position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 9, background: C.green,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Leaf size={20} color="#fff" />
            </div>
            <div>
              <p style={{ color: C.textInk, fontSize: 13, fontWeight: 800, lineHeight: 1.1 }}>TDRC</p>
              <p style={{ color: C.textMute, fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.3 }}>Thal Development &amp;<br />Research Centre</p>
            </div>
          </a>

          <nav className="tdrc-hide-mobile" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {NAV.map(({ label, href }, i) => (
              <a key={label} href={href} className={`tdrc-nav-link${i === 0 ? " active" : ""}`}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="tdrc-btn-ink tdrc-hide-mobile">
            Get In Touch <Phone size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="home"
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(135deg, rgba(14,31,23,0.88) 0%, rgba(28,66,49,0.84) 50%, rgba(14,31,23,0.92) 100%), url("${encodeURI("/tdrc.jpeg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          paddingBottom: 64,
          minHeight: 520,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 5, maxWidth: 1240, margin: "0 auto", padding: "68px 24px 40px", width: "100%" }}>
          <div className="tdrc-reveal" style={{ maxWidth: 750 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)",
              border: `1px solid rgba(255,255,255,0.25)`, borderRadius: 20, padding: "6px 14px", marginBottom: 22,
              backdropFilter: "blur(4px)",
            }}>
              <Leaf size={12} color={C.green} />
              <span style={{ color: "#fff", fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Trusted Research, Innovation &amp; Sustainable Development Organization
              </span>
            </div>

            <h1 style={{ color: "#ffffff", fontSize: "clamp(30px, 4.2vw, 48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.01em" }}>
              Research That Creates Impact.<br />Innovation That Builds the <span style={{ color: C.green }}>Future.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.85, marginBottom: 32, maxWidth: 640 }}>
              TDRC — THAL Development &amp; Research Centre is a leading research and development
              organization committed to advancing scientific research, environmental sustainability,
              social development, and innovative solutions for public and private sectors. Through
              evidence-based research, strategic partnerships, and modern technologies, we transform
              ideas into sustainable solutions that drive long-term national growth and community
              development.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#services" className="tdrc-btn-green">Explore Our Research <ArrowRight size={14} /></a>
              <a href="#projects" className="tdrc-btn-outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>View Our Projects <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 6, maxWidth: 1240, margin: "0 auto", padding: "0 24px", transform: "translateY(50%)", width: "100%" }}>
          <Reveal delay={200}>
            <div style={{ background: C.bgWhite, borderRadius: 14, border: `1px solid ${C.border}`, boxShadow: "0 24px 60px rgba(14,31,23,0.14)", padding: "22px 20px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }} className="tdrc-grid-5">
              {STATS.map(({ icon: Icon, value, suffix, label }) => (
                <div key={label} className="tdrc-stat">
                  <Icon size={20} color={C.ink} />
                  <p style={{ color: C.textInk, fontSize: 22, fontWeight: 800, lineHeight: 1 }}>
                    <CountUp value={value} suffix={suffix} />
                  </p>
                  <p style={{ color: C.textMute, fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "pre-line", lineHeight: 1.4 }}>{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ height: 74 }} />

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "40px 24px 90px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="tdrc-grid-2">
          <Reveal>
            <div style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${C.border}`, background: C.bgPanel, minHeight: 320 }}>
              <img
                src="/tdrc.jpeg"
                alt="TDRC research and development team"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="tdrc-eyebrow">About Us</p>
            <h2 className="tdrc-h2" style={{ marginBottom: 18 }}>Advancing Research. Empowering Sustainable Development.</h2>
            <p style={{ color: C.textMute, fontSize: 13.5, lineHeight: 1.85, marginBottom: 14 }}>
              TDRC — THAL Development &amp; Research Centre works at the intersection of research,
              innovation, environmental sustainability, and community development. We conduct
              multidisciplinary research, technical studies, policy analysis, environmental assessments,
              and development projects that support governments, industries, NGOs, and international
              organizations.
            </p>
            <p style={{ color: C.textMute, fontSize: 13.5, lineHeight: 1.85, marginBottom: 26 }}>
              Our team of experienced researchers, environmental scientists, engineers, policy experts,
              and development specialists delivers practical solutions that create measurable social,
              environmental, and economic impact.
            </p>
            <a href="#services" className="tdrc-btn-outline">See Our Approach <ArrowRight size={14} /></a>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "0 24px 90px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p className="tdrc-eyebrow" style={{ justifyContent: "center" }}>Our Core Services</p>
              <h2 className="tdrc-h2">Comprehensive Research &amp; Development Solutions</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="tdrc-grid-3">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="tdrc-card" style={{ padding: "24px 20px", height: "100%" }}>
                  <div className="tdrc-card-icon"><Icon size={20} color={C.ink} /></div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: C.textInk }}>{title}</h3>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: C.textMute }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS + WHY CHOOSE ──────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: C.bgHaze }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <p className="tdrc-eyebrow" style={{ justifyContent: "center" }}>Research Areas</p>
              <h2 className="tdrc-h2">Where Our Expertise Creates Impact</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 60 }} className="tdrc-grid-5">
            {RESEARCH_AREAS.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 40}>
                <div className="tdrc-area">
                  <Icon size={20} color={C.green} />
                  <p style={{ fontSize: 11, fontWeight: 700, color: C.textInk, lineHeight: 1.3 }}>{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 40 }} className="tdrc-grid-2">
            <Reveal>
              <p className="tdrc-eyebrow">Why Choose TDRC</p>
              <h2 className="tdrc-h2">Trusted Expertise Behind Every Recommendation</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="tdrc-grid-2">
              {WHY_CHOOSE.map((item, i) => {
                const [t, d] = item.split(" — ");
                return (
                  <Reveal key={t} delay={i * 50}>
                    <div className="tdrc-why-row">
                      <div className="tdrc-check"><CheckCircle2 size={14} color={C.green} /></div>
                      <div>
                        <p style={{ color: C.textInk, fontSize: 12.5, fontWeight: 700, marginBottom: 2 }}>{t}</p>
                        <p style={{ color: C.textMute, fontSize: 11.5, lineHeight: 1.5 }}>{d}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p className="tdrc-eyebrow" style={{ justifyContent: "center" }}>Our Research Process</p>
              <h2 className="tdrc-h2">From Inquiry to Measurable Impact</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }} className="tdrc-grid-3">
            {PROCESS.map(({ num, title, desc, icon: Icon }, i) => (
              <Reveal key={num} delay={i * 60}>
                <div className="tdrc-process-card">
                  <div className="tdrc-process-node" style={{ margin: "0 auto 10px" }}>{num}</div>
                  <Icon size={16} color={C.greenDeep} style={{ marginBottom: 6 }} />
                  <p style={{ color: C.textInk, fontSize: 11.5, fontWeight: 800, marginBottom: 4, whiteSpace: "pre-line", lineHeight: 1.3 }}>{title}</p>
                  <p style={{ color: C.textMute, fontSize: 10, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY + SUSTAINABILITY ──────────────────────────────────── */}
      <section style={{ padding: "0 24px 90px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="tdrc-grid-2">
          <Reveal>
            <div style={{ background: `linear-gradient(155deg, ${C.ink} 0%, ${C.inkSoft} 100%)`, borderRadius: 14, padding: 28, height: "100%", position: "relative", overflow: "hidden" }}>
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.25 }} preserveAspectRatio="none">
                <path d="M0,30 Q150,80 300,30 T600,60" className="tdrc-current" />
              </svg>
              <div style={{ position: "relative" }}>
                <p className="tdrc-eyebrow tdrc-eyebrow-dark">Innovation &amp; Technology</p>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Modern Research Powered by Advanced Technologies</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  {TECHNOLOGIES.map(item => (
                    <div key={item} className="tdrc-check-item"><CheckCircle2 size={13} color={C.green} style={{ flexShrink: 0 }} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="sustainability" style={{ background: C.bgPanel, borderRadius: 14, padding: 28, height: "100%" }}>
              <p className="tdrc-eyebrow">Sustainability</p>
              <h3 style={{ color: C.textInk, fontSize: 17, fontWeight: 700, marginBottom: 12 }}>Research for a Sustainable Future</h3>
              <p style={{ color: C.textMute, fontSize: 12.5, lineHeight: 1.8, marginBottom: 18 }}>
                TDRC integrates sustainability into every research initiative by promoting environmental
                conservation, climate resilience, responsible resource management, renewable energy
                adoption, and community participation. Our research supports long-term development
                while protecting natural ecosystems for future generations.
              </p>
              <VisualPanel height={110} icon={TreePine} spin />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "0 24px 90px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p className="tdrc-eyebrow" style={{ justifyContent: "center" }}>Featured Projects</p>
              <h2 className="tdrc-h2">Research That Translates Into Action</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="tdrc-grid-4">
            {PROJECTS.map(({ title, desc, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="tdrc-card" style={{ overflow: "hidden" }}>
                  <VisualPanel height={140} icon={Icon} />
                  <div style={{ padding: 16 }}>
                    <p style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 6, color: C.textInk }}>{title}</p>
                    <p style={{ fontSize: 11, lineHeight: 1.55, color: C.textMute }}>{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION + TESTIMONIALS + FAQ ────────────────────────── */}
      <section id="publications" style={{ padding: "90px 24px", background: C.bgHaze }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 0.8fr 1fr 1.1fr", gap: 20 }} className="tdrc-grid-4">
          <Reveal>
            <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 22, height: "100%" }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Eye size={18} color="#fff" />
              </div>
              <h3 style={{ color: C.greenDeep, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 10 }}>Our Vision</h3>
              <p style={{ color: C.textMute, fontSize: 12, lineHeight: 1.7 }}>
                To become a globally recognized research and development organization delivering
                innovative, evidence-based solutions that promote sustainable development, environmental
                stewardship, and social progress.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: 22, height: "100%" }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: C.green, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Target size={18} color="#fff" />
              </div>
              <h3 style={{ color: C.greenDeep, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 10 }}>Our Mission</h3>
              <p style={{ color: C.textMute, fontSize: 12, lineHeight: 1.7 }}>
                To conduct high-quality research, foster innovation, strengthen institutional capacity,
                and develop sustainable solutions that improve communities, protect the environment, and
                support national development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <h3 style={{ color: C.textInk, fontSize: 13, fontWeight: 800, marginBottom: 16 }}>Testimonials</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="tdrc-card" style={{ padding: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 10 }}>
                    <Quote size={16} color={C.green} />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button type="button" onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${C.border}`, background: C.bgWhite, display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Previous testimonial">
                        <ArrowRight size={13} className="rotate-180" />
                      </button>
                      <button type="button" onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${C.border}`, background: C.bgWhite, display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Next testimonial">
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                  <p style={{ fontSize: 11, lineHeight: 1.65, color: C.textMid, fontStyle: "italic", marginBottom: 10 }}>&ldquo;{activeTestimonialItem.quote}&rdquo;</p>
                  <Stars />
                  <p style={{ fontSize: 10, fontWeight: 800, color: C.textInk, marginTop: 8 }}>{activeTestimonialItem.name}</p>
                  <p style={{ fontSize: 9.5, color: C.textMute }}>{activeTestimonialItem.role}</p>
                  <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                    {TESTIMONIALS.map((_, index) => (
                      <button key={index} type="button" onClick={() => setActiveTestimonial(index)} style={{ height: 6, borderRadius: 999, background: index === activeTestimonial ? C.green : C.border, width: index === activeTestimonial ? 20 : 6 }} aria-label={`Go to testimonial ${index + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <h3 style={{ color: C.textInk, fontSize: 13, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h3>
            <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: "4px 18px" }}>
              {FAQS.map(({ q, a }, i) => (
                <div key={q} style={{ borderBottom: i < FAQS.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  <button className="tdrc-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {q}
                    <span className={`tdrc-faq-plus${openFaq === i ? " open" : ""}`}>
                      <Plus size={13} color={openFaq === i ? "#fff" : C.textMute} />
                    </span>
                  </button>
                  {openFaq === i && (
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: C.textMute, padding: "0 4px 16px" }}>{a}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(120deg, ${C.inkDeep} 0%, ${C.ink} 100%)`, padding: "56px 24px", position: "relative", overflow: "hidden" }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.4 }} preserveAspectRatio="none">
          <path d="M0,40 Q300,0 600,50 T1240,20" className="tdrc-current" style={{ animationDuration: "6s" }} />
        </svg>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Driving Innovation Through Research &amp; Sustainable Development</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5, maxWidth: 560 }}>
              TDRC — THAL Development &amp; Research Centre continues to transform research into
              meaningful action through scientific excellence, environmental responsibility, and
              sustainable development. Together, we build knowledge that creates lasting impact for
              communities, industries, and future generations.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#services" className="tdrc-btn-green">Explore Our Research <ArrowRight size={14} /></a>
            <a href="#contact" className="tdrc-btn-ghost-white">Partner With Us</a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "90px 24px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p className="tdrc-eyebrow" style={{ justifyContent: "center" }}>Get In Touch</p>
              <h2 className="tdrc-h2">Let&apos;s Discuss Your Next Research Initiative</h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 30 }} className="tdrc-grid-2">
            {/* Contact details */}
            <Reveal>
              <div className="tdrc-card" style={{ padding: 22, height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div className="tdrc-card-icon" style={{ width: 36, height: 36, marginBottom: 0, flexShrink: 0 }}><Mail size={16} color={C.ink} /></div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: C.textInk }}>Email Us</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>info@roysons.org</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>support@roysons.org</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div className="tdrc-card-icon" style={{ width: 36, height: 36, marginBottom: 0, flexShrink: 0 }}><Phone size={16} color={C.ink} /></div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: C.textInk }}>Call Us</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>Phone: 0092-42-38924737</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>WhatsApp: 0092-304-7527498</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>0092-321-8431665</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div className="tdrc-card-icon" style={{ width: 36, height: 36, marginBottom: 0, flexShrink: 0 }}><MapPin size={16} color={C.ink} /></div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: C.textInk }}>Our Office</p>
                      <p style={{ fontSize: 12, color: C.textMute, lineHeight: 1.7 }}>1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <div className="tdrc-card" style={{ padding: 28, height: "100%" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: C.textInk, marginBottom: 4 }}>Send Us a Message</h3>
                <p style={{ fontSize: 12, color: C.textMute, marginBottom: 22 }}>Fill out the form below and our team will respond within one business day.</p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 90px", background: C.bgWhite }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 24, alignItems: "start" }} className="tdrc-grid-2">
            <Reveal>
              <div style={{ background: C.bgPanel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
                <p className="tdrc-eyebrow">Our Location</p>
                <h3 style={{ color: C.textInk, fontSize: 20, fontWeight: 800, marginBottom: 10 }}>Visit Our Office</h3>
                <p style={{ color: C.textMute, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>
                  We welcome project consultations, research discussions, and partnership meetings at our Lahore office.
                </p>
                <div style={{ background: C.bgWhite, border: `1px solid ${C.border}`, borderRadius: 10, padding: 14 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: C.textInk, lineHeight: 1.6 }}>1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.</p>
                  <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 10, color: C.greenDeep, fontSize: 12.5, fontWeight: 700 }}>
                    Open in Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="tdrc-card" style={{ overflow: "hidden", minHeight: 320 }}>
                <iframe
                  title="TDRC Office Location"
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: C.inkDeep, color: "#fff", padding: "60px 24px 26px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 44 }} className="tdrc-grid-4">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 9, background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Leaf size={20} color="#fff" />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.2 }}>TDRC</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Thal Development &amp; Research Centre</p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7, marginBottom: 18, maxWidth: 260 }}>
                Advancing research, innovation, and sustainability for a better future. Together for impact.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="tdrc-social">
                    <Icon size={13} color="#fff" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: "#7BE0A0", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 18 }}>Company</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {NAV.map(l => (
                  <li key={l.label}><a href={l.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, textDecoration: "none" }}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: "#7BE0A0", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 18 }}>Services</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {SERVICES.map(l => (
                  <li key={l.title}><a href="#services" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, textDecoration: "none" }}>{l.title}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: "#7BE0A0", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 18 }}>Research Areas</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {RESEARCH_AREAS.slice(0, 6).map(l => (
                  <li key={l.label}><a href="#services" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, textDecoration: "none" }}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11.5 }}>
              &copy; {new Date().getFullYear()} TDRC — THAL Development &amp; Research Centre. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}