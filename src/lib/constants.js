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
    id: "slide-one",
    type: "image",
    src: "/slide-1.jpeg",
    subtitle: "ROYSONS Pvt.Ltd.",
    title: "Building Industries.",
    highlight: "Empowering Nations.",
    subheading: "A Diversified Global Conglomerate",
    description:
      "ROYSONS Pvt.Ltd. is a diversified business conglomerate operating across healthcare, technology, defense, agriculture, infrastructure, energy, and international trade.",
    supportingText:
      "With over two decades of excellence, we deliver innovative solutions, strategic investments, and sustainable growth through a portfolio of specialized companies serving public and private sectors worldwide.",
    cta1: { label: "Explore Our Companies", href: "/group-companies" },
    cta2: { label: "View Our Solutions", href: "/services" },
  },
  {
    id: "slide-two",
    type: "image",
    src: "/ROYSONS Slider image 2.jpeg",
    subtitle: "HEALTHCARE DIVISION",
    title: "Advancing Healthcare",
    highlight: "Through Innovation.",
    subheading: "World-Class Medical & Healthcare Solutions",
    description:
      "Delivering world-class medical technologies, pharmaceuticals, biotechnology, laboratory solutions, hospital engineering, and healthcare infrastructure.",
    supportingText:
      "Through our healthcare-focused companies, we support hospitals, laboratories, pharmaceutical manufacturers, research institutions, and public health initiatives with cutting-edge solutions and expertise.",
    cta1: { label: "Healthcare Solutions", href: "/services/healthcare-medical" },
    cta2: { label: "Learn More", href: "/about" },
  },
  {
    id: "slide-three",
    type: "image",
    src: "/ROYSONS Slider Image 3.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
    {
    id: "slide-four",
    type: "image",
    src: "/ROYSONS Slider Image 4.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
    {
    id: "slide-five",
    type: "image",
    src: "/ROYSONS Slider Image 5.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
    {
    id: "slide-six",
    type: "image",
    src: "/ROYSONS Slider Image 6.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
    {
    id: "slide-seven",
    type: "image",
    src: "/ROYSONS Slider image 7.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
    {
    id: "slide-eight",
    type: "image",
    src: "/ROYSONS Slider Image 8.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
     {
    id: "slide-nine",
    type: "image",
    src: "/ROYSONS Slider Image 9.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
  },
     {
    id: "slide-ten",
    type: "image",
    src: "/ROYSONS Slide Image 10.jpeg",
    subtitle: "TECHNOLOGY & INNOVATION",
    title: "Engineering the Future",
    highlight: "of Smart Industries.",
    subheading: "AI · Defense · Renewable Energy · Smart Cities",
    description:
      "Driving transformation through artificial intelligence, defense technologies, renewable energy, smart cities, infrastructure, and digital innovation.",
    supportingText:
      "ROYSONS Pvt.Ltd. invests in next-generation technologies that enhance security, sustainability, urban development, and industrial progress for a rapidly evolving world.",
    cta1: { label: "Discover Innovation", href: "/services" },
    cta2: { label: "Explore Future Projects", href: "/projects" },
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
