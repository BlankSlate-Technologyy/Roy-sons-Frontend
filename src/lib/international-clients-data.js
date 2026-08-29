import {
  Globe,
  Users,
  Star,
  Lightbulb,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
  Layers,
  Wrench,
  FileCheck,
  Activity,
  Briefcase,
  Compass,
  Plane,
  Truck,
} from "lucide-react";

export const INTERNATIONAL_CLIENTS_LIST = [
  {
    slug: "importers",
    label: "Importers",
    title: "International Importers & Wholesale Distributors",
    eyebrow: "GLOBAL SOURCING, VOLUME IMPORTATION & VALUE-ADDED SUPPLY",
    tagline: "Connecting international importers and regional distributors with certified Pakistani manufacturing, agro-commodities, and industrial supplies.",
    icon: Globe,
    badge: "Import & Global Sourcing",
    heroImage: "/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg",
    overview: [
      "International importers, regional distributors, and wholesale trading houses require reliable product quality, stringent international compliance certifications, and transparent cold-chain/containerized logistics. ROYSONS Group serves global buyers across North America, Europe, the Middle East, Central Asia, and Africa.",
      "We supply high-grade agricultural commodities, pharmaceutical formulations, veterinary healthcare products, surgical instruments, industrial corrugated packaging, and specialized building materials.",
      "Our dedicated international trade division manages end-to-end export documentation, Pre-Shipment Inspection (PSI), international Letters of Credit (LC), and multimodal shipping to major global sea and air ports."
    ],
    stats: [
      { value: "30+", label: "Export Destination Nations" },
      { value: "$50M+", label: "Trade Volume Managed" },
      { value: "100%", label: "Export Quality Compliance" },
      { value: "250+", label: "International Shipments/Yr" },
    ],
    keyPillars: [
      {
        title: "Agricultural Commodity Export",
        desc: "Exporting premium Pakistani basmati rice, processed grains, seasonal fruits, animal feed, and value-added agro-products adhering to international SPS standards.",
        icon: Compass,
      },
      {
        title: "Pharmaceuticals & Healthcare Supplies",
        desc: "Supplying finished dosage formulations, surgical instruments, medical consumables, and veterinary vaccines with CE and WHO-GMP certifications.",
        icon: ShieldCheck,
      },
      {
        title: "Industrial Corrugated Packaging",
        desc: "Export-grade multi-wall heavy corrugated cartons, die-cut packaging, and master shippers manufactured to international ASTM and FEFCO standards.",
        icon: Layers,
      },
      {
        title: "Specialized Construction & Mineral Goods",
        desc: "Exporting processed minerals, dimension stone, specialized construction timber, and architectural prefabricated components.",
        icon: Building2,
      },
      {
        title: "Customized OEM Product Manufacturing",
        desc: "Private label manufacturing and contract packaging tailored to international importers' brand specifications and packaging languages.",
        icon: Wrench,
      },
      {
        title: "International Freight & Cold Chain",
        desc: "Temperature-controlled reefer containers, GDP-compliant pharma shipping, and FCL/LCL ocean freight with real-time GPS tracking.",
        icon: Truck,
      },
    ],
    technologies: [
      "IATA & GDP-Compliant Temperature-Controlled Export Packaging",
      "Automated High-Speed Carton Quality Testing (ECT / Bursting Strength)",
      "Digital Bill of Lading (e-B/L) & Electronic Certificate of Origin Systems",
      "Consolidated Containerized Ocean Shipping (FCL / LCL via Karachi Port)",
      "Standardized Product Cataloging (UNSPSC & HS Code Classification)",
      "Pre-Shipment Third-Party Inspection Protocols (SGS / BV / Intertek)",
      "Multi-Currency International Trade Finance & Irrevocable LC Management",
      "Sanitary & Phytosanitary (SPS) Electronic Certification Verification",
      "Air Cargo Charters for Time-Critical Medical & Perishable Shipments",
      "Enterprise Export Logistics Portals with Real-Time Vessel Tracking",
    ],
    workflow: [
      {
        step: "01",
        title: "Inquiry & Specification Review",
        desc: "Evaluating buyer product specifications, target port of destination, volume requirements, and regulatory import criteria.",
      },
      {
        step: "02",
        title: "Sampling & Quality Verification",
        desc: "Dispatching certified laboratory samples, third-party Certificate of Analysis (CoA), and competitive FOB/CIF quotation.",
      },
      {
        step: "03",
        title: "Production & Pre-Shipment Inspection",
        desc: "High-volume manufacturing followed by pre-shipment quality inspection and container stuffing under supervisor oversight.",
      },
      {
        step: "04",
        title: "Export Clearance & Destination Port Handover",
        desc: "Expedited Pakistan customs export clearance, shipping line dispatch, and release of original negotiable shipping documents.",
      },
    ],
    benefits: [
      "Direct manufacturer access eliminating intermediary trading markups",
      "Strict compliance with destination country health and safety standards (FDA, CE, ISO)",
      "Flexible international payment terms (Irrevocable LC at sight, CAD, T/T)",
      "Established shipping contracts securing competitive ocean and air freight rates",
      "Dedicated multilingual international account managers for seamless communication",
    ],
    targetClients: [
      "Wholesale Food & Agricultural Importers",
      "Medical Device & Hospital Equipment Distributors",
      "Pharmaceutical Import & Marketing Companies",
      "Industrial Raw Material & Packaging Distributors",
      "Retail Chain Consortia & Supermarket Networks",
      "Commodity Trading Houses in GCC, Europe & Central Asia",
    ],
    faqs: [
      {
        q: "What Incoterms do you support for international export shipments?",
        a: "We support standard ICC Incoterms 2020 including FOB (Karachi Port / Port Qasim), CFR, CIF (Destination Port), and DDP depending on client requirements.",
      },
      {
        q: "Are your exported pharmaceutical and medical products certified?",
        a: "Yes, our exported pharmaceuticals, surgical instruments, and medical products carry WHO-GMP, CE, ISO 13485, and Free Sale Certificates (FSC).",
      },
      {
        q: "Can you provide customized private labeling and branded packaging?",
        a: "Yes, our industrial packaging and formulation divisions handle full private labeling, customized multilingual printing, and customized pack sizes.",
      },
    ],
  },
  {
    slug: "exporters",
    label: "Exporters",
    title: "Global Exporters & International Trading Houses",
    eyebrow: "CROSS-BORDER TRADING, SUPPLY CHAIN RESILIENCE & MARKET ACCESS",
    tagline: "Partnering with global trading houses and international exporters to facilitate cross-border supply chains, trade finance, and local market distribution.",
    icon: Users,
    badge: "Cross-Border Trade",
    heroImage: "/About-us-hero.jpeg",
    overview: [
      "International exporters seeking market entry into Pakistan, Central Asia, and the broader regional corridor require dependable local partners with strong regulatory standing, established nationwide distribution networks, and robust trade finance capabilities. ROYSONS Group is a premier partner for foreign export enterprises.",
      "We act as an authorized commercial importer, exclusive country distributor, and logistics clearinghouse for international manufacturers of medical devices, industrial machinery, power generation systems, and specialized chemical raw materials.",
      "Our established relationships with customs authorities, health regulatory bodies (DRAP), and commercial banking syndicates ensure frictionless market access and rapid commercial scale."
    ],
    stats: [
      { value: "30+", label: "Global OEM Brands Represented" },
      { value: "100%", label: "Import Regulatory Clearance" },
      { value: "4", label: "Regional Warehouses in Pakistan" },
      { value: "$100M+", label: "Total Import-Export Turnover" },
    ],
    keyPillars: [
      {
        title: "Exclusive Country Representation & Distribution",
        desc: "Serving as authorized master distributor for international medical technology, industrial machinery, and consumer brands.",
        icon: Globe,
      },
      {
        title: "Regulatory Licensing & Product Registration",
        desc: "Managing product registration with the Drug Regulatory Authority of Pakistan (DRAP), PSQCA, and Ministry of Commerce.",
        icon: FileCheck,
      },
      {
        title: "Customs Brokerage & Port Clearance",
        desc: "Expedited port clearance, tariff optimization, bonded warehousing, and inland transport to national destination hubs.",
        icon: Truck,
      },
      {
        title: "Trade Finance & LC Structuring",
        desc: "Providing secure trade finance, confirmed Letters of Credit (LC), deferred payment structures, and multi-currency foreign exchange management.",
        icon: TrendingUp,
      },
      {
        title: "Nationwide Warehousing & Cold Chain",
        desc: "Temperature-monitored GDP warehousing in Karachi, Lahore, and Islamabad with computerized inventory management.",
        icon: Layers,
      },
      {
        title: "Sales, Technical Marketing & After-Sales",
        desc: "Dedicated field sales teams, clinical application specialists, and warranty technical service centers for foreign brands.",
        icon: Wrench,
      },
    ],
    technologies: [
      "Customs Web-Based One Customs (WeBOC) Automated Clearance",
      "GDP-Compliant Temperature-Controlled Regional Warehousing",
      "Enterprise Inventory Tracking & Barcode Scanned Logistics",
      "Online Trade Finance & Letter of Credit Banking Portals",
      "Medical Device Regulatory Dossier Management Systems",
      "24/7 Cold-Chain Refrigerated Inland Trucking Fleet",
      "Computerized Warranty Logging & Spare Parts Sourcing Portals",
      "Multi-Currency Forward Exchange & Risk Hedging Frameworks",
      "Integrated ERP Linking Port Clearance, Warehousing, and Delivery",
      "Technical Service Diagnostic Testing Analyzers for Foreign Equipment",
    ],
    workflow: [
      {
        step: "01",
        title: "Market Feasibility & Agreement",
        desc: "Analyzing market demand, competitive pricing, regulatory requirements, and signing bilateral agency agreements.",
      },
      {
        step: "02",
        title: "Regulatory Dossier & Registration",
        desc: "Preparing technical dossiers, Free Sale Certificates, and securing official marketing authorizations from local regulators.",
      },
      {
        step: "03",
        title: "Importation, Clearance & Staging",
        desc: "Issuing bank Letters of Credit, executing port customs clearance, and staging inventory in central distribution warehouses.",
      },
      {
        step: "04",
        title: "National Distribution & Post-Sale Service",
        desc: "Distributing to hospitals, industries, and government clients backed by our warranty service centers and marketing teams.",
      },
    ],
    benefits: [
      "Immediate market access to Pakistan's 240M+ population and regional trade hubs",
      "Proven regulatory expertise eliminating costly import registration delays",
      "Strong banking relationships ensuring timely foreign exchange repatriation",
      "Extensive distribution footprint reaching tier-1 and tier-2 cities nationwide",
      "Dedicated after-sales biomedical and mechanical engineering support teams",
    ],
    targetClients: [
      "European & American Medical Device Exporters",
      "Asian Industrial Machinery & Power Equipment Exporters",
      "Global Pharmaceutical & Active Ingredient (API) Exporters",
      "International Agricultural Technology & Seed Exporters",
      "Specialized Chemical & Industrial Raw Material Traders",
      "Multinational Consumer Goods & Electronics Exporters",
    ],
    faqs: [
      {
        q: "Can ROYSONS act as an exclusive marketing and distribution partner in Pakistan?",
        a: "Yes, we represent premier global manufacturers on an exclusive distributor basis, managing marketing, regulatory compliance, sales, and warranty service.",
      },
      {
        q: "How long does product registration with DRAP typically take?",
        a: "Depending on device classification (Class A to D), regulatory registration takes between 3 and 9 months, expedited by our dedicated regulatory affairs division.",
      },
      {
        q: "Do you maintain bonded and temperature-controlled warehousing?",
        a: "Yes, we operate temperature-monitored facilities in Karachi, Lahore, and Islamabad complying with Good Distribution Practices (GDP).",
      },
    ],
  },
  {
    slug: "manufacturers",
    label: "Manufacturers",
    title: "International OEM & Industrial Manufacturers",
    eyebrow: "GLOBAL OEM COLLABORATION, JOINT VENTURES & LOCALIZED ASSEMBLY",
    tagline: "Partnering with global equipment manufacturers on turnkey distribution, technology transfer, localized assembly, and OEM warranty support.",
    icon: Star,
    badge: "OEM & Industrial Partnerships",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "World-leading Original Equipment Manufacturers (OEMs) require sophisticated local technical partners capable of executing precision turnkey installations, managing clinical training, providing local warranty support, and representing their brand prestige with integrity. ROYSONS Group is a trusted partner to global manufacturing titans.",
      "We partner with tier-1 manufacturers in diagnostic healthcare (Siemens Healthineers, Philips, GE, BD), industrial power generation (Cummins, Perkins engines), cleanroom engineering, and heavy agro-machinery.",
      "Our factory-trained engineers, certified calibration toolkits, and comprehensive inventory of genuine OEM spare parts ensure that foreign manufacturers' systems perform with maximum reliability throughout their lifecycle."
    ],
    stats: [
      { value: "30+", label: "Global OEM Partnerships" },
      { value: "100%", label: "Factory-Trained Engineers" },
      { value: "ISO 9001", label: "Quality System Certified" },
      { value: "99.8%", label: "Warranty Satisfaction Rate" },
    ],
    keyPillars: [
      {
        title: "Turnkey OEM Equipment Installation",
        desc: "Executing architectural site readiness, mechanical rigging, clean power cabling, and OEM-certified commissioning.",
        icon: Wrench,
      },
      {
        title: "Authorized Warranty Service & AMC",
        desc: "Acting as official warranty service provider, conducting planned preventative maintenance (PPM), and issuing certified calibration reports.",
        icon: ShieldCheck,
      },
      {
        title: "Genuine OEM Spare Parts Depot",
        desc: "Maintaining regional buffer inventories of genuine replacement boards, X-ray tubes, sensors, filters, and mechanical consumables.",
        icon: Layers,
      },
      {
        title: "Clinical & Operator Training Masterclasses",
        desc: "Conducting structured application workshops for hospital physicians, radiologists, laboratory technicians, and plant operators.",
        icon: Award,
      },
      {
        title: "Public & Institutional Tender Representation",
        desc: "Positioning OEM product lines in major national, provincial, and military healthcare and infrastructure procurement tenders.",
        icon: FileCheck,
      },
      {
        title: "Technology Transfer & Localized Assembly",
        desc: "Establishing joint-venture localized assembly lines, semi-knocked-down (SKD) manufacturing, and value-added packaging.",
        icon: Building2,
      },
    ],
    technologies: [
      "Fluke Biomedical Certified NIST-Traceable Calibration Analyzers",
      "High-Precision Electrical Safety Analyzers (IEC 62353 Standards)",
      "Computerized Maintenance Management Systems (CMMS Telemetry)",
      "Heavy Rigging & Precision Laser Alignment Machinery",
      "Cleanroom Particle Counters & Airborne HEPA Leak Detectors",
      "Dedicated OEM Software Diagnostic & Remote Service Links",
      "Temperature-Monitored Genuine Spare Parts Storage Facilities",
      "High-Density Electrostatic Discharge (ESD) Safe PCB Repair Stations",
      "Automated Skidded Assembly & Semi-Knocked-Down (SKD) Lines",
      "Digital Service Ticket Logging & Customer Satisfaction Portals",
    ],
    workflow: [
      {
        step: "01",
        title: "OEM Partnership & Technical Training",
        desc: "Signing bilateral distribution agreements and sending engineers to OEM headquarters for factory certification training.",
      },
      {
        step: "02",
        title: "Market Strategy & Tender Integration",
        desc: "Integrating OEM specifications into national health, energy, and industrial infrastructure procurement tenders.",
      },
      {
        step: "03",
        title: "Precision Installation & Handover",
        desc: "Executing site readiness, uncrating, physical installation, software setup, and multi-point calibration.",
      },
      {
        step: "04",
        title: "Lifecycle Support & Spare Parts Management",
        desc: "Maintaining continuous warranty support, 24/7 breakdown response, and stocking genuine replacement parts.",
      },
    ],
    benefits: [
      "Factory-certified engineers ensuring installation adhering to OEM blueprints",
      "Enhanced OEM brand reputation through proactive customer satisfaction and high uptime",
      "Direct participation in high-value public, defense, and private healthcare tenders",
      "Elimination of gray-market imports and unauthorized service tampering",
      "Comprehensive warranty claim management with transparent reporting to OEM headquarters",
    ],
    targetClients: [
      "Diagnostic Medical Imaging & Oncology Equipment Manufacturers",
      "Critical Care Life Support & Anesthesia Machine Manufacturers",
      "Clinical Chemistry, Hematology & Molecular Diagnostic Manufacturers",
      "Industrial Power Generation & Heavy Engine Manufacturers",
      "Cleanroom HVAC & Sterile Engineering System Manufacturers",
      "Agricultural Machinery & Center-Pivot Irrigation Manufacturers",
    ],
    faqs: [
      {
        q: "Are your engineers factory-certified by global medical equipment OEMs?",
        a: "Yes, our biomedical and mechanical engineering teams undergo regular factory certification at OEM training centers in Germany, USA, Japan, and China.",
      },
      {
        q: "How do you manage warranty claims and defective part returns to OEMs?",
        a: "We operate a computerized RMA (Return Merchandise Authorization) process, logging defective components and shipping them back to OEM factories under strict traceability.",
      },
      {
        q: "Can ROYSONS establish localized assembly or semi-knocked-down (SKD) manufacturing?",
        a: "Yes, our industrial facilities provide infrastructure for SKD assembly, localized packaging, and value-added manufacturing under OEM licensing.",
      },
    ],
  },
  {
    slug: "development-agencies",
    label: "Development Agencies",
    title: "International Development Agencies & Multilateral Organizations",
    eyebrow: "GLOBAL HUMANITARIAN RELIEF, SUSTAINABLE DEVELOPMENT & UN PARTNERSHIPS",
    tagline: "Partnering with UN bodies, international development banks, and humanitarian agencies on large-scale health, disaster relief, and infrastructure projects.",
    icon: Lightbulb,
    badge: "Humanitarian & UN Agencies",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Multilateral development agencies, United Nations bodies (WHO, UNICEF, UNHCR, UNFPA), multilateral banks (World Bank, Asian Development Bank), and bilateral development missions require transparent, audit-ready, and socially impactful execution partners. ROYSONS Group is an accredited partner in sustainable development and emergency relief.",
      "We execute multilateral-funded health infrastructure programs, supply standardized Interagency Emergency Health Kits (IEHK), install Solar Direct Drive (SDD) vaccine cold-chains, and build modular disaster relief medical pods.",
      "Our team operates under strict zero-tolerance anti-corruption policies, international environmental and social safeguards (ESAF), and transparent digital auditing frameworks meeting international donor criteria."
    ],
    stats: [
      { value: "100+", label: "Development Projects Completed" },
      { value: "30+", label: "Crisis & Remote Regions Served" },
      { value: "100%", label: "Multilateral Donor Audit Pass" },
      { value: "72 Hr", label: "Emergency Relief Dispatch SLA" },
    ],
    keyPillars: [
      {
        title: "Interagency Emergency Health Kits (IEHK)",
        desc: "Supplying standardized, pre-kitted emergency pharmaceuticals, surgical supplies, and trauma care sets for humanitarian relief operations.",
        icon: ShieldCheck,
      },
      {
        title: "Solar Direct Drive (SDD) Vaccine Cold-Chain",
        desc: "Delivering battery-free WHO PQS certified solar vaccine refrigerators for off-grid national immunization programs (EPI).",
        icon: Zap,
      },
      {
        title: "Modular & Tent-Based Emergency Field Clinics",
        desc: "Rapid-deployment expandable containerized clinics, inflatable medical tents, and triage stations with off-grid water and power.",
        icon: Building2,
      },
      {
        title: "Maternal, Newborn & Child Health (MNCH)",
        desc: "Equipping rural health facilities with solar infant warmers, clean delivery kits, resuscitation tools, and malnutrition diagnostic supplies.",
        icon: Activity,
      },
      {
        title: "Water, Sanitation & Hygiene (WASH) Programs",
        desc: "Community solar water filtration plants, mobile chlorination skids, and emergency field hygiene kits for disaster zones.",
        icon: Layers,
      },
      {
        title: "Social Development Policy & Research Advisory",
        desc: "Conducting socio-economic baseline surveys, public health impact evaluations, and environmental sustainability assessments.",
        icon: Lightbulb,
      },
    ],
    technologies: [
      "WHO PQS Solar Direct Drive (SDD) Medical & Vaccine Refrigerators",
      "Standardized Interagency Emergency Health Kits (IEHK 2017 Format)",
      "Solar-Powered Ultra-Pure Drinking Water Filtration Skids (WASH)",
      "Inflatable Rapid-Deployment Medical Emergency Tents",
      "Manual & Solar-Powered Portable Surgical Suction Devices",
      "Rapid Diagnostic Test (RDT) Kits for Malaria, HIV, Cholera & Dengue",
      "Portable Battery-Operated Multi-Parameter Vital Signs Monitors",
      "Foldable Disaster Patient Stretchers & Mass Casualty Transport Sets",
      "Pre-Packaged Sterile Clean Delivery Kits in Waterproof Packaging",
      "Solar LED Examination Lamps & Surgical Task Headlamps",
    ],
    workflow: [
      {
        step: "01",
        title: "Project Alignment & UN Compliance",
        desc: "Coordinating with agency procurement teams to verify technical specifications against UN/WHO PQS standards and donor guidelines.",
      },
      {
        step: "02",
        title: "Fast-Track Kitting & Consolidation",
        desc: "Emergency warehouse consolidation, batch verification, and export packaging conforming to international humanitarian relief standards.",
      },
      {
        step: "03",
        title: "Expedited Freight & Diplomatic Clearance",
        desc: "Charter flight deployment or convoy transport with diplomatic customs clearance waivers and real-time shipment GPS tracking.",
      },
      {
        step: "04",
        title: "Field Handover & Multilateral Audit Log",
        desc: "Direct handover to field officers, joint third-party verification, and issuing comprehensive donor audit compliance reports.",
      },
    ],
    benefits: [
      "Adherence to WHO, UNICEF, Sphere Project, and World Bank procurement guidelines",
      "72-hour emergency dispatch capability for rapid crisis response",
      "Full transparency, anti-corruption compliance, and comprehensive audit trails",
      "Extensive experience working in challenging geographical and disaster areas",
      "Established relationships with national disaster management authorities (NDMA/PDMA)",
    ],
    targetClients: [
      "United Nations Agencies (WHO, UNICEF, UNHCR, UNFPA, UNDP)",
      "Multilateral Development Banks (World Bank, Asian Development Bank, IDB)",
      "Bilateral Cooperation Missions (USAID, FCDO, JICA, GIZ)",
      "International Non-Governmental Organizations (INGOs)",
      "National Red Cross & Red Crescent Societies",
      "Global Health Funds & Philanthropic Foundations",
    ],
    faqs: [
      {
        q: "Are your emergency health kits compliant with WHO and UN standard specifications?",
        a: "Yes, our Interagency Emergency Health Kits (IEHK) and trauma modules are assembled strictly in accordance with WHO 2017 guidelines.",
      },
      {
        q: "How do your Solar Direct Drive (SDD) vaccine refrigerators operate without batteries?",
        a: "Our SDD refrigerators utilize patented ice-lined thermal energy storage technology, eliminating batteries while maintaining strict +2°C to +8°C temperatures even through cloudy days.",
      },
      {
        q: "What audit and compliance documentation is provided for international donors?",
        a: "We provide complete shipment manifests, third-party inspection certificates, Certificates of Conformity (CoC), and GPS-verified proof of delivery for donor audits.",
      },
    ],
  },
];

export function getInternationalClientBySlug(slug) {
  return INTERNATIONAL_CLIENTS_LIST.find((c) => c.slug === slug);
}
