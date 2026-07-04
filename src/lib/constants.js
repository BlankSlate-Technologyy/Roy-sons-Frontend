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
} from "lucide-react";

export const HEADER_ROUTES = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Us" },
  { path: "/services", title: "Services" },
  { path: "/projects", title: "Projects" },
  { path: "/group-companies", title: "Group Companies" },
  { path: "/careers", title: "Careers" },
  { path: "/news", title: "News & Updates" },
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
  { name: "Roy Construction", href: "/company-construction" },
  { name: "Roy Engineering", href: "/company-engineering" },
  { name: "Roy Real Estate", href: "/company-realestate" },
  { name: "Roy Manufacturing", href: "/company-manufacturing" },
  { name: "Roy Trading", href: "/company-trading" },
  { name: "Roy Logistics", href: "/company-logistics" },
  { name: "Roy Technology", href: "/company-technology" },
  { name: "Roy Ventures", href: "/company-ventures" },
];

export const CORPORATE_SERVICES = [
  {
    icon: HardHat,
    title: "Construction",
    description: "Modern construction solutions with innovation and quality & safety.",
    href: "/services/construction",
  },
  {
    icon: Settings,
    title: "Engineering",
    description: "Engineering excellence with innovation and precision.",
    href: "/services/engineering",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Developing spaces that inspire and create value.",
    href: "/services/real-estate",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Advanced manufacturing with high quality standards.",
    href: "/services/manufacturing",
  },
  {
    icon: Globe,
    title: "Trading",
    description: "Global trading solutions with trust and transparency.",
    href: "/services/trading",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Efficient logistics network across the globe.",
    href: "/services/logistics",
  },
  {
    icon: Monitor,
    title: "Technology",
    description: "Technology-driven solutions for a better tomorrow.",
    href: "/services/technology",
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
