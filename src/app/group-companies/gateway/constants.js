// Design Tokens & Configuration for Gateway Pharmaceuticals Page
export const COLORS = {
  primary: "#173F8A",     // Primary Blue
  secondary: "#2E8B57",   // Secondary Green
  background: "#F8FAFC",  // Soft Slate Background
  border: "#E5E7EB",      // Light Gray Border
  textDark: "#0F172A",    // Dark Slate Text
  textGray: "#64748B",    // Muted Gray Text
  white: "#FFFFFF",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Expertise", href: "#expertise" },
];

export const HERO_IMAGES = [
  "/gatway header.png",
  "/gatway about.png",
  "/gatway commited.png",
];

export const TRUSTED_CLIENTS = [
  { title: "Pharmaceutical Manufacturers", abbr: "Pharma", iconName: "FlaskConical" },
  { title: "Biotechnology Companies", abbr: "Biotech", iconName: "Microscope" },
  { title: "Medical Device Companies", abbr: "MedDev", iconName: "Activity" },
  { title: "Import & Export Pharma Firms", abbr: "Trade", iconName: "Globe" },
  { title: "Regulatory Authorities", abbr: "Regul", iconName: "Shield" },
  { title: "Healthcare Organizations", abbr: "Health", iconName: "Building2" },
];

export const STATS_ITEMS = [
  { value: "200+", label: "Successful Registrations" },
  { value: "15+", label: "Regulatory Experts" },
  { value: "150+", label: "Client Partnerships" },
  { value: "500+", label: "Licenses Processed" },
  { value: "10+", label: "Years Combined Experience" },
  { value: "98%", label: "Approval Success Rate" }
];

export const SERVICES = [
  {
    iconName: "FileCheck",
    title: "Drug Licensing & Registration",
    description: "Full-band support for new product licensing and registration processes."
  },
  {
    iconName: "ClipboardList",
    title: "Regulatory Affairs Management",
    description: "Comprehensive handling of regulatory submissions and documentation."
  },
  {
    iconName: "Shield",
    title: "Compliance Consultancy",
    description: "Ensuring your operations meet all national and international regulations."
  },
  {
    iconName: "Award",
    title: "GMP & Quality Compliance Support",
    description: "Advisory on Good Manufacturing Practice audits and quality systems."
  },
  {
    iconName: "Globe",
    title: "Import & Export Licensing",
    description: "Assistance with cross-border mandates to facilitate trade approvals."
  },
  {
    iconName: "Package",
    title: "Dossier Preparation & Submission",
    description: "Professional preparation of technical and regulatory dossiers."
  },
  {
    iconName: "TrendingUp",
    title: "Pharmacovigilance Support",
    description: "Advisory services on drug safety monitoring and reporting."
  },
  {
    iconName: "RefreshCw",
    title: "Renewal & Amendment Services",
    description: "Timely handling of license renewals and regulatory updates."
  }
];

export const WHY_CHOOSE = [
  { title: "In-Depth Regulatory Expertise", desc: "Deep knowledge of local and international pharmaceutical regulations." },
  { title: "Experienced Consultants", desc: "Team of regulatory officers, specialists, pharmacists, and legal advisers." },
  { title: "Timely & Accurate Filings", desc: "Streamlined processes that minimize delays and avoid rejections." },
  { title: "Confidential & Ethical Practices", desc: "Your business information is handled with complete discretion." },
  { title: "End-to-End Support", desc: "From documentation to final approval, we manage the entire process." },
  { title: "Proven Track Record", desc: "A history of successful licensing and compliance outcomes." }
];

export const INDUSTRIES = [
  { iconName: "FlaskConical", label: "Pharmaceutical Manufacturers" },
  { iconName: "Microscope", label: "Biotechnology Companies" },
  { iconName: "Activity", label: "Medical Device Companies" },
  { iconName: "Leaf", label: "Nutraceutical & Herbal Products" },
  { iconName: "Globe", label: "Import/Export Pharma Businesses" },
  { iconName: "BookOpen", label: "Diagnostic & Laboratory Companies" },
  { iconName: "Building2", label: "Healthcare Distributors" }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Initial Consultation", desc: "Understanding your regulatory needs and objectives." },
  { step: "02", title: "Documentation Review", desc: "Assessing and preparing required documents." },
  { step: "03", title: "Regulatory Strategy", desc: "Developing a tailored compliance roadmap." },
  { step: "04", title: "Submission & Filing", desc: "Preparing and submitting applications to authorities." },
  { step: "05", title: "Follow-Up & Coordination", desc: "Liaising with regulatory bodies until approval." },
  { step: "06", title: "Ongoing Compliance Support", desc: "Continuous guidance for renewals and updates." }
];

export const FAQ_ITEMS = [
  { q: "What services do you offer?", a: "We offer drug licensing, regulatory affairs, compliance advisory, dossier preparation, GMP support, pharmacovigilance, import/export licensing, and renewal services." },
  { q: "Which industries do you serve?", a: "We serve pharmaceutical manufacturers, importers, exporters, biotech companies, medical device companies, nutraceutical firms, and diagnostic labs." },
  { q: "Do you assist with international registrations?", a: "Yes — we assist with international pharmaceutical registrations including DRAP, WHO, and country-specific requirements for multiple markets." },
  { q: "How long does the licensing process take?", a: "Timelines vary by product type and regulatory authority, but we ensure the fastest possible turnaround with proper documentation and follow-up." },
  { q: "Do you offer ongoing compliance support?", a: "Yes — we provide continuous post-registration support, license renewals, variation management, and regulatory intelligence updates." }
];

export const TESTIMONIALS = [
  {
    quote: "GATEWAY PHARMACEUTICALS CONSULTANTS streamlined our licensing process at a fraction of time and cost.",
    author: "Regulatory Head",
    company: "International Pharma Manufacturer",
    stars: 5,
    initial: "R"
  },
  {
    quote: "Their regulatory expertise and attention to detail gave us complete confidence in the approval process.",
    author: "Compliance Manager",
    company: "Biotech Corporation",
    stars: 5,
    initial: "C"
  },
  {
    quote: "Professional, knowledgeable, and results-driven. The team made our international registration seamless.",
    author: "Managing Director",
    company: "Import/Export Company",
    stars: 5,
    initial: "M"
  }
];

export const QUALITY_PILLARS = [
  { iconName: "BadgeCheck", label: "Accuracy" },
  { iconName: "Scale", label: "Confidentiality" },
  { iconName: "Shield", label: "Regulatory Compliance" },
  { iconName: "Clock", label: "Timeliness" },
  { iconName: "Star", label: "Professional Integrity" }
];
