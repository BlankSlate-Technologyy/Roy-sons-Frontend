import {
  HardHat,
  Settings,
  Building,
  Factory,
  Globe,
  Truck,
  Monitor,
  Users,
  Building2,
  Briefcase,
  UserCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  HeartPulse,
  BriefcaseMedical,
  Pill,
  PawPrint,
  BrainCircuit,
  Zap,
  Sun,
  PlugZap,
  Shield,
  Sprout,
  Gem,
  Utensils,
} from "lucide-react";

export const HEADER_ROUTES = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Us" },
  { path: "/services", title: "Services" },
  { path: "/projects", title: "Projects" },
  { path: "/group-companies", title: "Group Companies" },
  { path: "/contact", title: "Contact Us" },
];

export const FOOTER_QUICK_LINKS = [
  { text: "Home", destination: "/" },
  { text: "About Us", destination: "/about" },
  { text: "Services", destination: "/services" },
  { text: "Projects", destination: "/projects" },
  { text: "Group Companies", destination: "/group-companies" },
  { text: "Careers", destination: "/careers" },
  { text: "Contact Us", destination: "/contact" },
];

export const FOOTER_SERVICES_LINKS = [
  { text: "Construction", destination: "/services/construction" },
  { text: "Architecture", destination: "/services/architecture" },
  { text: "Renewable Energy", destination: "/services/renewable-energy" },
  { text: "Infrastructure", destination: "/services/infrastructure" },
  { text: "IT & Technology", destination: "/services/it-technology" },
  { text: "Project Management", destination: "/services/project-management" },
  { text: "And More", destination: "/services" },
];

export const DEFAULT_BILLBOARD_SLIDES = [
  {
    id: "first-slide",
    type: "image",
    src: "/hero-building.png",
    subtitle: "WELCOME TO ROY SONS",
    title: "BUILDING",
    highlight: "A BETTER TOMORROW",
    description:
      "Roy Sons is a diversified conglomerate delivering excellence in construction, engineering, real estate, and multiple industries.",
    cta: { label: "EXPLORE MORE", href: "/about" },
  },
  {
    id: "second-slide",
    type: "image",
    src: "/project-commercial.png",
    subtitle: "OUR PROJECTS",
    title: "COMMERCIAL",
    highlight: "EXCELLENCE",
    description:
      "State-of-the-art commercial complexes that redefine modern business environments across Pakistan.",
    cta: { label: "VIEW PROJECTS", href: "/projects" },
  },
  {
    id: "third-slide",
    type: "image",
    src: "/project-residential.png",
    subtitle: "REAL ESTATE",
    title: "LUXURY",
    highlight: "LIVING SPACES",
    description:
      "Premium residential developments that combine comfort, elegance, and modern living standards.",
    cta: { label: "LEARN MORE", href: "/services" },
  },
];

export const CORPORATE_STATS = [
  { id: "excellence-metric", icon: Users, value: "25+", label: "Years of\nExcellence" },
  { id: "subsidiary-metric", icon: Building2, value: "26+", label: "Group\nCompanies" },
  { id: "attained-metric", icon: Briefcase, value: "500+", label: "Completed\nProjects" },
  { id: "staff-metric", icon: UserCheck, value: "1000+", label: "Dedicated\nProfessionals" },
];

export const CORPORATE_HOLDINGS = [
  { name: "Alpha Matrix", href: "/group-companies/alpha-matrix", image: "/alpha matrix.jpeg" },
  { name: "Gateway", href: "/group-companies/gateway", image: "/gateway.jpeg" },
  { name: "Max Pak", href: "/group-companies/max-pak", image: "/max pak.jpeg" },
  { name: "National Guard", href: "/group-companies/national-guard", image: "/nation guard.jpeg" },
  { name: "Neom", href: "/group-companies/neom", image: "/neom.jpeg" },
  { name: "Swiss Farm", href: "/group-companies/swiss-farm", image: "/swiss fram.jpeg" },
  { name: "Swiss", href: "/group-companies/swiss", image: "/swiss.jpeg" },
  { name: "Vet Vec Pharma", href: "/group-companies/vet-vec-pharma", image: "/vet vec pharma.jpeg" },
  { name: "Walton & Mirror Food", href: "/group-companies/walton-mirror-food", image: "/walton&mirrorfood.jpeg" },
  { name: "Walton", href: "/group-companies/walton", image: "/walton.jpeg" },
];

export const CORPORATE_SERVICES = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Technologies",
    description: "Innovative medical systems and healthcare technology solutions.",
    href: "/services/healthcare-medical",
  },
  {
    icon: BriefcaseMedical,
    title: "Hospital Engineering & Clean Rooms",
    description: "Advanced engineering design and planning for healthcare clean rooms.",
    href: "/services/hospital-engineering",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Consultancy",
    description: "Professional consulting and quality systems for pharmaceuticals.",
    href: "/services/pharmaceutical-consultancy",
  },
  {
    icon: PawPrint,
    title: "Veterinary & Livestock Solutions",
    description: "Comprehensive animal healthcare and livestock management solutions.",
    href: "/services/veterinary-livestock",
  },
  {
    icon: Monitor,
    title: "Information Technology & AI",
    description: "Enterprise software, cloud networks, and smart AI solutions.",
    href: "/services/information-technology-ai",
  },
  {
    icon: Zap,
    title: "Electrical & Power Systems",
    description: "Transmission infrastructure, power distribution, and grid systems.",
    href: "/services/electrical-power-systems",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Sustainable solar, wind, and green energy infrastructure.",
    href: "/services/renewable-energy",
  },
  {
    icon: PlugZap,
    title: "Electric Mobility",
    description: "EV charging stations and electric vehicle transportation networks.",
    href: "/services/electric-mobility",
  },
  {
    icon: Shield,
    title: "Defense & Security",
    description: "Advanced safety, defense systems, and security solutions.",
    href: "/services/defense-security",
  },
  {
    icon: Sprout,
    title: "Agriculture & Dairy Development",
    description: "Modern agritech, crop management, and dairy development solutions.",
    href: "/services/agriculture-dairy",
  },
  {
    icon: Gem,
    title: "Mining & Minerals",
    description: "Resource exploration, extraction, and mineral processing.",
    href: "/services/mining-minerals",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description: "Civil engineering, roadworks, and modern infrastructure systems.",
    href: "/services/construction-infrastructure",
  },
  {
    icon: Utensils,
    title: "Food Processing",
    description: "State-of-the-art agricultural food safety, packaging, and processing.",
    href: "/services/food-processing",
  },
  {
    icon: Globe,
    title: "International Trade & Exports",
    description: "Global import-export trade processes and supply chain logistics.",
    href: "/services/international-trade-exports",
  },
];

export const FEATURED_STRUCTURAL_WORKS = [
  {
    image: "/project-commercial.png",
    title: "Commercial Complex",
    location: "Lahore, Pakistan",
    href: "/projects/commercial-complex",
  },
  {
    image: "/project-residential.png",
    title: "Residential Towers",
    location: "Karachi, Pakistan",
    href: "/projects/residential-towers",
  },
  {
    image: "/project-industrial.png",
    title: "Industrial Plant",
    location: "Islamabad, Pakistan",
    href: "/projects/industrial-plant",
  },
  {
    image: "/project-infrastructure.png",
    title: "Infrastructure Project",
    location: "Peshawar, Pakistan",
    href: "/projects/infrastructure",
  },
];

export const CORPORATE_BROADCAST_NEWS = [
  {
    image: "/project-commercial.png",
    date: "May 10, 2024",
    title: "Roy Sons Announces New Expansion Plan",
    href: "/news/expansion-plan",
  },
  {
    image: "/project-industrial.png",
    date: "April 28, 2024",
    title: "Completion of New Commercial Project",
    href: "/news/commercial-project",
  },
  {
    image: "/project-infrastructure.png",
    date: "April 15, 2024",
    title: "Roy Sons Wins Excellence Award 2024",
    href: "/news/excellence-award",
  },
];

export const SOCIAL_MEDIA_HANDLES = [
  { icon: Facebook, href: "#", label: "Facebook profile link" },
  { icon: Twitter, href: "#", label: "Twitter profile link" },
  { icon: Instagram, href: "#", label: "Instagram profile link" },
  { icon: Linkedin, href: "#", label: "LinkedIn profile link" },
  { icon: Youtube, href: "#", label: "YouTube channel link" },
];

export const CORPORATE_HELPLINE_DETAILS = [
  { icon: MapPin, value: "123 Business Avenue,\nLahore, Pakistan" },
  { icon: Phone, value: "+92 300 1234567" },
  { icon: Mail, value: "info@roysons.org" },
  { icon: Globe, value: "www.roysons.org" },
];
