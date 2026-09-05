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
  { path: "/roysons-trust", title: "Roysons Trust" },
  { path: "/contact", title: "Contact Us" },
];

export const FOOTER_QUICK_LINKS = [
  { text: "Home", destination: "/" },
  { text: "About Us", destination: "/about" },
  { text: "Services", destination: "/services" },
  { text: "Projects", destination: "/projects" },
  { text: "Group Companies", destination: "/group-companies" },
  { text: "Roysons Trust", destination: "/roysons-trust" },
  { text: "News & Insights", destination: "/news" },
  { text: "Careers", destination: "/careers" },
  { text: "Contact Us", destination: "/contact" },
];

export const FOOTER_SERVICES_LINKS = [
  { text: "Healthcare & Medical", destination: "/services/healthcare-medical" },
  { text: "Hospital Engineering", destination: "/services/hospital-engineering" },
  { text: "Pharmaceutical Consultancy", destination: "/services/pharmaceutical-consultancy" },
  { text: "IT & Artificial Intelligence", destination: "/services/it-ai" },
  { text: "Electrical & Power Systems", destination: "/services/electrical-power-systems" },
  { text: "Construction & Infrastructure", destination: "/services/construction-infrastructure" },
  { text: "Architecture", destination: "/services/architecture" },

];

export const DEFAULT_BILLBOARD_SLIDES = [
  {
    id: "slide-construction",
    type: "image",
    src: "/logos/Construction & Infrastructure.jpg.jpeg",
    subtitle: "ROYSONS INFRASTRUCTURE & EPC",
    title: "Building Nations.",
    highlight: "Engineering Mega Structures.",
    subheading: "Civil Engineering · Expressway Networks · Bridges & Heavy Infrastructure",
    description:
      "Delivering state-of-the-art civil infrastructure, high-capacity expressway networks, complex bridge engineering, and pre-engineered industrial facilities across public and private sectors.",
    supportingText:
      "Backed by decades of multidisciplinary engineering excellence, ROYSONS builds enduring national foundations through precision construction management and sustainable EPC contracting.",
    cta1: { label: "Explore Projects", href: "/projects" },
    cta2: { label: "Infrastructure Services", href: "/services/construction-infrastructure" },
  },
  {
    id: "slide-it-ai",
    type: "image",
    src: "/logos/Information Technology & AI.jpg.jpeg",
    subtitle: "DIGITAL INTELLIGENCE & ENTERPRISE AI",
    title: "Architecting the Future",
    highlight: "Through Smart Innovation.",
    subheading: "Artificial Intelligence · Intelligent Command Centers · Enterprise Cloud",
    description:
      "Pioneering enterprise artificial intelligence, intelligent mission-control operations, automated predictive analytics, and next-generation sovereign cyber defense systems.",
    supportingText:
      "Through our advanced technology holdings, ROYSONS empowers government ministries and global enterprises with secure digital transformations, neural computing, and smart city architecture.",
    cta1: { label: "Discover AI & Tech", href: "/services/it-ai" },
    cta2: { label: "Our Tech Holdings", href: "/group-companies" },
  },
  {
    id: "slide-renewable-energy",
    type: "image",
    src: "/logos/Renewable Energy.jpg.jpeg",
    subtitle: "SUSTAINABLE ENERGY & GREEN GRIDS",
    title: "Powering Progress.",
    highlight: "Sustaining Tomorrow.",
    subheading: "Solar Mega-Utilities · Wind Power Generation · Intelligent Energy Grids",
    description:
      "Accelerating the global transition toward clean energy independence through utility-scale photovoltaic solar parks, advanced wind turbine arrays, and smart power distribution networks.",
    supportingText:
      "ROYSONS is committed to global decarbonization and reliable clean power, deploying resilient renewable energy infrastructure that powers industries while preserving our planet.",
    cta1: { label: "Renewable Energy", href: "/services/renewable-energy" },
    cta2: { label: "All Corporate Services", href: "/services" },
  },
  {
    id: "slide-defense-security",
    type: "image",
    src: "/logos/Defense & Security.jpg.jpeg",
    subtitle: "STRATEGIC DEFENSE & CRITICAL SECURITY",
    title: "Safeguarding Sovereignty.",
    highlight: "Securing Critical Assets.",
    subheading: "Integrated Surveillance · Facility Protection · Mission-Critical Defense Systems",
    description:
      "Providing advanced electronic surveillance, perimeter security systems, border monitoring solutions, and strategic defense technologies for critical national infrastructure.",
    supportingText:
      "ROYSONS defense division combines state-of-the-art sensory technology, professional protection expertise, and command centers to safeguard critical infrastructure and national assets.",
    cta1: { label: "Defense Solutions", href: "/services/defense-security" },
    cta2: { label: "Security Holdings", href: "/group-companies/alpha-matrix" },
  },
  {
    id: "slide-electric-mobility",
    type: "image",
    src: "/logos/Electric Mobility.jpg.jpeg",
    subtitle: "NEXT-GEN ELECTRIC MOBILITY",
    title: "Electrifying Transport.",
    highlight: "Transforming Urban Transit.",
    subheading: "Electric Transit Fleets · EV Solar Superchargers · Connected Green Mobility",
    description:
      "Developing commercial electric transit vehicles, advanced EV battery systems, solar-powered ultra-fast charging corridors, and connected zero-emission public transportation.",
    supportingText:
      "German Technology Xperts (GTX), a ROYSONS company, leads the decarbonization of transit networks with high-efficiency commercial EVs, charging networks, and smart fleet management.",
    cta1: { label: "Explore EV Mobility", href: "/services/electric-mobility" },
    cta2: { label: "GTX Holdings", href: "/group-companies/GTX" },
  },
  {
    id: "slide-agriculture-dairy",
    type: "image",
    src: "/logos/Agriculture & Dairy Development.jpg.jpeg",
    subtitle: "PRECISION AGRICULTURE & DAIRY SYSTEMS",
    title: "Nourishing Nations.",
    highlight: "Revolutionizing Agribusiness.",
    subheading: "Smart Agro-Tech · Modern Dairy Infrastructure · Silo Storage & Irrigation",
    description:
      "Empowering agricultural sustainability through IoT crop monitoring, automated center-pivot irrigation, high-yield dairy production systems, and modern grain storage silos.",
    supportingText:
      "Through National Agricultural Corporation and Swiss Farms, ROYSONS strengthens food security with advanced agro-technology, livestock genetics, and modernized dairy management.",
    cta1: { label: "Agri & Dairy Services", href: "/services/agriculture-dairy-development" },
    cta2: { label: "Agricultural Holdings", href: "/group-companies/national-agricultural" },
  },
  {
    id: "slide-food-processing",
    type: "image",
    src: "/logos/Food Processing.jpg.jpeg",
    subtitle: "INDUSTRIAL FOOD PROCESSING & PACKAGING",
    title: "Industrial Food Purity.",
    highlight: "From Harvest to Table.",
    subheading: "Automated Processing Lines · Global Food Safety · Hygienic Packaging Solutions",
    description:
      "Operating high-capacity industrial food processing, automated packaging facilities, international food safety protocols, and temperature-controlled supply chains.",
    supportingText:
      "Delivering premium quality nutrition and packaged foods through certified international standards, advanced food technology, and automated hygienic production lines.",
    cta1: { label: "Food Processing", href: "/services/food-processing" },
    cta2: { label: "Our Food Companies", href: "/group-companies/walton-mirror-food" },
  },
  {
    id: "slide-power-systems",
    type: "image",
    src: "/logos/Electrical & Power Systems.jpg.jpeg",
    subtitle: "HIGH VOLTAGE POWER & ELECTRICAL ENGINEERING",
    title: "Energizing Industry.",
    highlight: "Stabilizing National Grids.",
    subheading: "Substation Engineering · Grid Modernization · Industrial Power Distribution",
    description:
      "Engineering high-voltage transmission lines, automated electrical substations, industrial power distribution switchgear, and smart grid synchronization systems.",
    supportingText:
      "ROYSONS delivers turnkey electrical contracting, heavy power infrastructure, and grid reliability solutions that keep mission-critical industries operating without interruption.",
    cta1: { label: "Power Systems", href: "/services/electrical-power-systems" },
    cta2: { label: "Explore Services", href: "/services" },
  },
  {
    id: "slide-mining-minerals",
    type: "image",
    src: "/logos/mining and mineral.jpg.jpeg",
    subtitle: "SUSTAINABLE MINING & MINERAL EXTRACTION",
    title: "Unlocking Natural Wealth.",
    highlight: "Ethical Resource Extraction.",
    subheading: "Geological Exploration · Copper & Gold Extraction · Sustainable Mineral Processing",
    description:
      "Pioneering responsible mineral extraction, comprehensive geological surveying, modern mineral processing plants, and strategic national resource development.",
    supportingText:
      "Through National Mines Corporation, ROYSONS applies cutting-edge excavation technology and rigorous environmental standards to extract vital minerals powering global industry.",
    cta1: { label: "Mining & Minerals", href: "/services/mining-minerals" },
    cta2: { label: "National Mines Holding", href: "/group-companies/national-mines" },
  },
  {
    id: "slide-real-estate",
    type: "image",
    src: "/logos/Real Estate & Development.jpg.jpeg",
    subtitle: "MASTER-PLANNED COMMUNITIES & LUXURY LIVING",
    title: "Shaping Skylines.",
    highlight: "Building Modern Communities.",
    subheading: "High-Rise Towers · Luxury Residential Enclaves · Sustainable Urban Living",
    description:
      "Designing and developing iconic commercial skyscrapers, master-planned residential communities, luxury gated villas, and integrated mixed-use urban developments.",
    supportingText:
      "ROYSONS real estate division blends contemporary architecture, smart city amenities, and sustainable green construction to create premier living and business addresses.",
    cta1: { label: "Real Estate Solutions", href: "/services/real-estate-development" },
    cta2: { label: "View Projects", href: "/projects" },
  },
  {
    id: "slide-international-trade",
    type: "image",
    src: "/logos/International Trade & Exports.jpg.jpeg",
    subtitle: "GLOBAL COMMERCE & SUPPLY CHAIN EXCELLENCE",
    title: "Connecting Continents.",
    highlight: "Empowering Global Trade.",
    subheading: "Cross-Border Logistics · Maritime Shipping · Strategic Import & Export Networks",
    description:
      "Facilitating cross-border commodity trade, intermodal freight logistics, maritime shipping solutions, and international customs clearance across major global ports.",
    supportingText:
      "With an established worldwide network and robust logistics infrastructure, ROYSONS connects domestic producers to high-growth international export markets.",
    cta1: { label: "Trade & Exports", href: "/services/international-trade-exports" },
    cta2: { label: "Global Presence", href: "/international-clients" },
  },
  {
    id: "slide-veterinary",
    type: "image",
    src: "/logos/Veterinary.jpg.jpeg",
    subtitle: "ADVANCED VETERINARY & ANIMAL BIOLOGICS",
    title: "Protecting Animal Health.",
    highlight: "Securing Livestock Vitality.",
    subheading: "Veterinary Vaccines · Biosecurity Solutions · Livestock Healthcare Systems",
    description:
      "Producing research-grade veterinary pharmaceuticals, specialized poultry vaccines, cattle biologics, and modern animal diagnostics to safeguard livestock.",
    supportingText:
      "Vet Vac Pharma, a proud subsidiary of ROYSONS, develops GMP-certified animal vaccines and therapeutic solutions supporting commercial farmers and animal welfare nationwide.",
    cta1: { label: "Veterinary Healthcare", href: "/services/veterinary-livestock" },
    cta2: { label: "Vet Vac Pharma", href: "/group-companies/Vetvacpharma" },
  },
];

export const CORPORATE_STATS = [
  { id: "excellence-metric", icon: Users, value: "25+", label: "Years of\nExcellence" },
  { id: "subsidiary-metric", icon: Building2, value: "26+", label: "Group\nCompanies" },
  { id: "attained-metric", icon: Briefcase, value: "500+", label: "Completed\nProjects" },
  { id: "staff-metric", icon: UserCheck, value: "1000+", label: "Dedicated\nProfessionals" },
];

export const CORPORATE_HOLDINGS = [
  { name: "Roys & Roys International", subtitle: "Healthcare Solutions & International Trade", tagline: "Providing advanced medical, laboratory, surgical, and hospital engineering solutions for healthcare institutions and government organizations.", href: "/group-companies/roys-roys", image: "/logos/r&r.png" },
  { name: "Vet Vac Pharma", subtitle: "Veterinary Vaccines & Animal Healthcare", tagline: "Delivering innovative veterinary vaccines, biological products, and livestock healthcare solutions for modern farming and animal health.", href: "/group-companies/Vetvacpharma", image: "/logos/3.png" },
  { name: "Bio Max Corporation", subtitle: "Biotechnology & Laboratory Solutions", tagline: "Supplying scientific equipment, laboratory systems, and biotechnology solutions for research and diagnostic institutions.", href: "/group-companies/biomax", image: "/logos/22.png" },
  { name: "Gateway Pharmaceuticals Consultants", subtitle: "Pharmaceutical Regulatory Consultancy", tagline: "Offering licensing, compliance, regulatory affairs, and consultancy services for pharmaceutical organizations.", href: "/group-companies/gateway", image: "/logos/9.png" },
  { name: "Alpha Matrix Defence Systems", subtitle: "Defense & Security Technologies", tagline: "Providing advanced surveillance, security systems, and defense technologies for critical infrastructure protection.", href: "/group-companies/alpha-matrix", image: "/logos/4.png" },
  { name: "National Guard", subtitle: "Professional Security Services", tagline: "Delivering security management, surveillance, risk assessment, and facility protection services.", href: "/group-companies/national-guard", image: "/logos/10.png" },
  { name: "National Mines Corporation", subtitle: "Mining & Mineral Development", tagline: "Specializing in mineral exploration, mining operations, and sustainable resource development.", href: "/group-companies/national-mines", image: "/cropedlogo.png" },
  { name: "National Agricultural Corporation", subtitle: "Agriculture & Dairy Development", tagline: "Providing agricultural infrastructure, dairy development, irrigation, and livestock solutions.", href: "/group-companies/national-agricultural", image: "/logos/2.png" },
  { name: "Swiss Farms", subtitle: "Dairy Production & Livestock Management", tagline: "Focused on dairy farming, breeding programs, and advanced livestock management systems.", href: "/group-companies/swiss-farm", image: "/logos/6.png" },
  { name: "Walton Consultants & Contracting", subtitle: "Engineering & Infrastructure Development", tagline: "Offering civil engineering, EPC projects, industrial construction, and infrastructure development.", href: "/group-companies/walton-consultants-contracting", image: "/logos/5.png" },
  { name: "Pakistan Medical Supplies", subtitle: "Hospital Engineering & Clean Rooms", tagline: "Delivering turnkey healthcare infrastructure, clean room systems, HVAC, and GMP facilities.", href: "/group-companies/pak-janitorial", image: "/logos/20.png" },
  { name: "German Technology Xperts (GTX)", subtitle: "Electric Mobility & Smart Transportation", tagline: "Developing electric vehicles, EV charging infrastructure, and future mobility solutions.", href: "/group-companies/GTX", image: "/logos/18.png" },
  { name: "Digital Zoning Corporation", subtitle: "Information Technology & Artificial Intelligence", tagline: "Providing software development, AI systems, cloud solutions, ERP platforms, and cybersecurity services.", href: "/group-companies/digitalzone", image: "/logos/17.png" },
  { name: "Pakistan Consultancy Services", subtitle: "Project Consultancy & Strategic Advisory", tagline: "Offering feasibility studies, business consulting, procurement support, and investment advisory.", href: "/group-companies/pakistan-consultancy", image: "/logos/16.png" },
  { name: "TDRC – Thal Development & Research Centre", subtitle: "Research & Development Solutions", tagline: "Conducting applied research, environmental studies, and sustainable development initiatives.", href: "/group-companies/TDRC", image: "/logos/23.png" },
  { name: "Max Power Corporation", subtitle: "Energy & Power Solutions", tagline: "Providing renewable energy, power generation, electrical engineering, and energy storage systems.", href: "/group-companies/max-power", image: "/logos/12.png" },
  { name: "National Food Services", subtitle: "Food Trading & Agricultural Commodities", tagline: "Specializing in commodity sourcing, food trading, exports, and supply chain management.", href: "/group-companies/national-food", image: "/logos/21.png" },
  { name: "Walton & Morris Foods", subtitle: "Food Processing & Manufacturing", tagline: "Producing processed food products, frozen foods, and packaged consumer goods.", href: "/group-companies/walton-mirror-food", image: "/logos/25.png" },
  { name: "Swiss Homes", subtitle: "Real Estate & Housing Development", tagline: "Developing smart housing projects, residential communities, and property investment opportunities.", href: "/group-companies/swiss-homes", image: "/logos/15.png" },
  { name: "Swiss Hut", subtitle: "Hospitality & Tourism Solutions", tagline: "Providing hospitality management, tourism development, and accommodation services.", href: "/group-companies/swiss-huts", image: "/logos/13.png" },
  { name: "Neom City Corporation", subtitle: "Smart Cities & Urban Development", tagline: "Developing smart cities, commercial districts, industrial zones, and sustainable urban infrastructure.", href: "/group-companies/neom-city", image: "/logos/8.png" },
  { name: "Neom City Recruitment Consultants", subtitle: "Human Resources & Recruitment Services", tagline: "Providing executive search, overseas recruitment, workforce planning, and talent acquisition services.", href: "/group-companies/Neom-city-recruitment", image: "/logos/24.png" },
  { name: "Max Pak Corporation", subtitle: "Industrial Trading & Commercial Supplies", tagline: "Supplying industrial equipment, machinery, construction materials, and commercial products.", href: "/group-companies/max-pak-corrpration", image: "/logos/7.png" },
  { name: "Inverse & Union Trading", subtitle: "International Procurement & Supply Chain", tagline: "Providing global sourcing, procurement management, and international trade solutions.", href: "/group-companies/inverse&union", image: "/logos/11.png" },
  { name: "Max Wood Corporation", subtitle: "Furniture Manufacturing & Interior Solutions", tagline: "Designing premium furniture, customized interiors, and wood-based architectural solutions.", href: "/group-companies/max-wood", image: "/logos/00.png" },
  { name: "Desert Development & Rehabilitation", subtitle: "Land Development & Environmental Solutions", tagline: "Rehabilitating desert environments and developing sustainable infrastructure for arid regions.", href: "/group-companies/desert-development", image: "/logos/14.png" },
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
    icon: PawPrint,
    title: "Veterinary & Livestock Solutions",
    description: "Comprehensive animal healthcare and livestock management solutions.",
    href: "/services/veterinary-livestock",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Consultancy",
    description: "Professional consulting and quality systems for pharmaceuticals.",
    href: "/services/pharmaceutical-consultancy",
  },
  {
    icon: Monitor,
    title: "Information Technology & AI",
    description: "Enterprise software, cloud networks, and smart AI solutions.",
    href: "/services/it-ai",
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
    href: "/services/agriculture-dairy-development",
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
  {
    icon: Building2,
    title: "Real Estate & Development",
    description: "Smart housing, residential communities, and property development.",
    href: "/services/real-estate-development",
  },
];

export const FEATURED_STRUCTURAL_WORKS = [
  {
    image: "/project-commercial-complex.jpg",
    title: "Commercial Complex",
    client: "BANU MUKHAR",
    category: "Commercial Development",
    href: "/projects/commercial-complex",
  },
  {
    image: "/project-residential-towers.jpg",
    title: "Residential Towers",
    client: "FANGROW",
    category: "Residential Architecture",
    href: "/projects/residential-towers",
  },
  {
    image: "/project-industrial.png",
    title: "Pre-Engineered Industrial Plant",
    client: "GO",
    category: "Industrial Infrastructure",
    href: "/projects/industrial-plant",
  },
  {
    image: "/project-gourmet-foods.jpg",
    title: "Gourmet Foods Infrastructure",
    client: "GOURMET FOODS",
    category: "Food Processing Infrastructure",
    href: "/projects/gourmet-foods",
  },
  {
    image: "/project-roysons-infrastructure.jpg",
    title: "Roysons Corporate Infrastructure",
    client: "ROYSONS PVT. LTD.",
    category: "Logistics & Facilities",
    href: "/projects/roysons-infrastructure",
  },
  {
    image: "/healthcare_infrastructure.jpg",
    title: "Specialized Healthcare Facility",
    client: "ROYS HEALTHCARE",
    category: "Medical & Cleanrooms",
    href: "/projects/commercial-complex",
  },
];

export const CORPORATE_BROADCAST_NEWS = [
  {
    image: "/healthcare_infrastructure.jpg",
    date: "August 18, 2026",
    title: "The Future of Healthcare: How Technology Is Transforming Medical Infrastructure",
    href: "/news/future-of-healthcare",
  },
  {
    image: "/global_trade_supply_chain.jpg",
    date: "August 18, 2026",
    title: "Global Trade & Government Contracting: Building Reliable Supply Chains",
    href: "/news/global-trade-supply-chains",
  },
  {
    image: "/diversified_future_growth.jpg",
    date: "August 18, 2026",
    title: "Building a Diversified Future: Why Multi-Sector Businesses Drive Sustainable Growth",
    href: "/news/building-diversified-future",
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
  { icon: MapPin, value: "Rehman Centre 2, DHA Phase 5, Ring Road Service Lane, Natha Singh Wala, Lahore" },
  { icon: Phone, value: "+92 300 1234567" },
  { icon: Mail, value: "info@roysons.org" },
  { icon: Globe, value: "www.roysons.org" },
];
