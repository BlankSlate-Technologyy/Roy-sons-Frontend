import {
  Landmark,
  Globe,
  TrendingUp,
  Cpu,
  Target,
  HeartPulse,
  BriefcaseMedical,
  Sparkles,
  Scissors,
  Package,
  Layers,
  Microscope,
  Pill,
  Wrench,
  Award,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Activity,
  Zap,
  Clock,
  Building2,
  FlaskConical,
} from "lucide-react";

export const OFFERINGS_LIST = [
  {
    slug: "government-contracting-procurement",
    number: "01",
    title: "Government Contracting & Procurement",
    eyebrow: "INSTITUTIONAL TENDERING & PUBLIC SECTOR SUPPLY",
    tagline: "Trusted turnkey government contractor supplying healthcare systems, defense medical units, and national infrastructure projects.",
    badge: "Public Sector & Defense",
    icon: Landmark,
    image: "/offerings/roys_gov_contracting.jpg",
    overview: [
      "ROYS & ROYS International possesses extensive institutional expertise in executing large-scale government procurement contracts, public health tenders, and defense healthcare supplies across national and international jurisdictions.",
      "We strictly adhere to Public Procurement Regulatory Authority (PPRA) guidelines, multilateral donor frameworks (WHO, UNICEF, World Bank), and state-level compliance mandates, guaranteeing total transparency, audited pricing, and punctual delivery.",
      "From equipping national medical emergency reserves to establishing specialized military diagnostic centers, our end-to-end tender lifecycle support spans pre-qualification, bid engineering, bond underwriting, supply chain clearance, and post-delivery verification."
    ],
    stats: [
      { value: "150+", label: "Government Tenders Awarded" },
      { value: "100%", label: "PPRA / Audit Compliance" },
      { value: "$50M+", label: "Procurement Volume Handled" },
      { value: "30+", label: "Institutional Partners" },
    ],
    keyPillars: [
      {
        title: "Tender Engineering & Bid Preparation",
        desc: "Precision technical bid compilation, bill of quantities (BOQ) validation, and compliance documentation for domestic and international public tenders.",
        icon: FileCheck,
      },
      {
        title: "National Healthcare Supply Frameworks",
        desc: "Multi-year bulk procurement and phased distribution of critical medical equipment, hospital beds, and pharmaceutical stocks across provincial hospital networks.",
        icon: Landmark,
      },
      {
        title: "Defense & Military Medical Support",
        desc: "Specialized medical procurement for military base hospitals, field trauma units, mobile medical shelters, and emergency tactical medical supplies.",
        icon: ShieldCheck,
      },
      {
        title: "Trade Finance & Performance Guarantees",
        desc: "Comprehensive financial structuring including Bid Bonds, Performance Bonds, and Letters of Credit (LC) tailored for government buyers.",
        icon: Award,
      },
      {
        title: "Pre-Shipment Inspections (PSI)",
        desc: "Independent quality control inspections and third-party laboratory verification before delivery to satisfy stringent ministerial inspection protocols.",
        icon: CheckCircle2,
      },
      {
        title: "Post-Award Installation & Training",
        desc: "Certified biomedical engineers deploy across regional facilities to install equipment, calibrate instruments, and train public healthcare personnel.",
        icon: Wrench,
      },
    ],
    scopeOfServices: [
      "Government Ministry of Health Tender Participation",
      "Public Procurement Regulatory Authority (PPRA) Compliance",
      "Military Healthcare & Defense Medical Supplies",
      "Emergency Disaster Relief Medical Consignments",
      "Multi-Year Framework Supply Agreements",
      "Third-Party Quality Inspection & Product Clearance",
      "Customs Duty & Tariff Optimization for Public Goods",
      "On-Site Training for Government Medical Staff",
    ],
    workflow: [
      { step: "01", title: "Tender Analysis", desc: "Detailed review of tender specifications, eligibility criteria, and regulatory mandates." },
      { step: "02", title: "Bid Engineering", desc: "Sourcing pre-vetted OEM equipment with competitive pricing and complete compliance dossiers." },
      { step: "03", title: "Supply & Logistics", desc: "Managed shipping, customs clearance, and secure transit to designated government depots." },
      { step: "04", title: "Handover & Warranty", desc: "Installation verification, joint inspection sign-off, and initiation of warranty SLA." },
    ],
    benefits: [
      "Proven track record with national health ministries and defense establishments",
      "Zero-defect compliance with international and local procurement regulations",
      "Transparent financial modeling and established banking credit lines",
      "Nationwide logistics and regional engineering deployment teams",
      "Full post-handover warranty and spare parts availability guarantees",
    ],
    industries: [
      "Ministries of Health & Public Health Authorities",
      "Military Medical Directorates & Armed Forces",
      "Provincial & Municipal Health Departments",
      "Public Sector Medical Universities & Teaching Hospitals",
      "Multilateral Development Banks & Donor Organizations",
    ],
    faqs: [
      {
        q: "What types of government entities do you work with?",
        a: "We actively collaborate with federal health ministries, provincial health directorates, military medical services, public teaching hospitals, and international development agencies."
      },
      {
        q: "How do you ensure compliance with PPRA and international procurement rules?",
        a: "Our specialized legal and procurement team audits every tender submission against relevant guidelines, maintaining full documentation, verified OEM authorizations, and transparent bid securities."
      },
      {
        q: "Do you handle logistics to remote or restricted government installations?",
        a: "Yes, our certified logistics network operates secure, insured transport to all metropolitan, provincial, and remote defense/public facilities."
      }
    ]
  },
  {
    slug: "international-import-export",
    number: "02",
    title: "International Import & Export",
    eyebrow: "GLOBAL TRADE, CUSTOMS CLEARANCE & FREIGHT FORWARDING",
    tagline: "Connecting global manufacturers with regional markets through compliant import-export operations, cross-border logistics, and tariff optimization.",
    badge: "Cross-Border Trade",
    icon: Globe,
    image: "/offerings/roys_import_export.jpg",
    overview: [
      "Cross-border healthcare and industrial commerce demands flawless coordination across international trade laws, customs tariffs, drug regulatory authorizations, and multimodal freight networks. ROYS & ROYS International operates as a premier global trading house.",
      "We manage the export and import of high-value diagnostic machinery, pharmaceutical raw materials, veterinary supplies, and industrial equipment across Europe, the Middle East, North America, and Asia-Pacific.",
      "Our trade specialists handle every detail: export documentation, consular legalizations, Free Sale Certificates (FSC), Certificate of Origin (COO), bonded warehousing, and rapid customs clearance."
    ],
    stats: [
      { value: "30+", label: "Active Trade Destinations" },
      { value: "10,000+", label: "Containers & Shipments Moved" },
      { value: "99.4%", label: "On-Time Customs Clearance" },
      { value: "100%", label: "Regulatory Trade Compliance" },
    ],
    keyPillars: [
      {
        title: "Multimodal Freight Logistics",
        desc: "Optimized sea freight (FCL/LCL), air cargo charters, and overland logistics with live satellite tracking and climate-controlled containers.",
        icon: Globe,
      },
      {
        title: "Customs Clearance & Brokerage",
        desc: "Licensed in-house customs clearance managing tariff classification, duty exemptions for medical devices, and expedited port clearance.",
        icon: FileCheck,
      },
      {
        title: "Trade Regulatory Documentation",
        desc: "Acquisition and legalization of Free Sale Certificates, Certificates of Analysis (COA), Fumigation Certificates, and consular endorsements.",
        icon: CheckCircle2,
      },
      {
        title: "Cold Chain Cargo Management",
        desc: "IATA and GDP-compliant temperature monitoring for temperature-sensitive biologics, vaccines, reagents, and pharmaceuticals.",
        icon: TrendingUp,
      },
      {
        title: "Warehousing & Bonded Storage",
        desc: "Climate-monitored bonded warehouse facilities providing safe intermediate storage, repackaging, and localized distribution.",
        icon: Layers,
      },
      {
        title: "Trade Risk Mitigation",
        desc: "Marine cargo insurance, multi-currency hedging, and Incoterms advisory (FOB, CIF, DDP) to protect client capital.",
        icon: ShieldCheck,
      },
    ],
    scopeOfServices: [
      "Global Air Freight & Ocean Container Shipping (FCL/LCL)",
      "Specialized Medical & Pharmaceutical Customs Clearance",
      "Dangerous Goods (DG) Certified Cargo Handling",
      "Consular Legalization & Certificate of Origin Issuance",
      "GDP-Compliant Temperature-Controlled Cold Chain Shipping",
      "Bonded Warehousing & Inventory Storage",
      "Incoterms 2020 Compliance & Commercial Advisory",
      "Tariff Classification & Regulatory Duty Optimization",
    ],
    workflow: [
      { step: "01", title: "Trade Feasibility", desc: "Evaluating trade routes, tariffs, import permits, and customs clearance requirements." },
      { step: "02", title: "Consolidation & Cargo Booking", desc: "Coordinating factory pickup, palletization, and securing air/sea container space." },
      { step: "03", title: "Transit & Tracking", desc: "Real-time vessel/flight tracking with continuous temperature logging for cold-chain goods." },
      { step: "04", title: "Customs & Last-Mile", desc: "Executing immediate port customs clearance and insured direct delivery to client warehouse." },
    ],
    benefits: [
      "Direct relationships with major shipping lines and air freight carriers",
      "Deep expertise in medical device and pharmaceutical import regulations",
      "Guaranteed temperature monitoring with verifiable digital logs",
      "Comprehensive end-to-end door-to-door delivery with single-point accountability",
      "Competitive freight rates through consolidated container volume",
    ],
    industries: [
      "Medical Device Importers & Distributors",
      "Pharmaceutical Manufacturers & Exporters",
      "Commercial Wholesale Trading Firms",
      "Government Procurement Agencies",
      "International NGO Relief Organizations",
    ],
    faqs: [
      {
        q: "What Incoterms do you support for international shipments?",
        a: "We support all standard ICC Incoterms including EXW, FOB, CFR, CIF, CPT, CIP, and DDP depending on client requirements."
      },
      {
        q: "How do you handle cold-chain pharmaceutical imports?",
        a: "We utilize active and passive thermal air cargo containers, validated phase-change materials, and continuous digital temperature dataloggers."
      },
      {
        q: "Can you assist with health authority import permits and device registration?",
        a: "Yes, our dedicated regulatory compliance division manages complete registration dossiers and import clearance licenses with destination health ministries."
      }
    ]
  },
  {
    slug: "global-trading-supply-chain",
    number: "03",
    title: "Global Trading & Supply Chain Management",
    eyebrow: "INTEGRATED SOURCING, INVENTORY & DISTRIBUTION EXCELLENCE",
    tagline: "End-to-end supply chain orchestration delivering high-resilience inventory management, strategic vendor sourcing, and automated fulfillment.",
    badge: "Supply Chain & Logistics",
    icon: TrendingUp,
    image: "/offerings/roys_supply_chain.jpg",
    overview: [
      "In modern commerce, a resilient supply chain is a strategic differentiator. ROYS & ROYS International orchestrates integrated supply chain ecosystems that bridge global raw material producers, precision equipment manufacturers, and commercial consumers.",
      "Our supply chain services encompass strategic vendor selection, demand forecasting, just-in-time (JIT) replenishment, multi-echelon warehousing, and automated digital tracking systems.",
      "By eliminating intermediaries and optimizing container load efficiency, we dramatically lower procurement costs while elevating supply chain dependability for hospitals, distributors, and industrial plants."
    ],
    stats: [
      { value: "50,000+", label: "SKUs Managed Across Hubs" },
      { value: "99.6%", label: "Order Fulfillment Accuracy" },
      { value: "15+", label: "Global Warehousing Centers" },
      { value: "24/7", label: "Real-Time Supply Visibility" },
    ],
    keyPillars: [
      {
        title: "Strategic Sourcing & Vendor Vetting",
        desc: "Multi-parameter audit of international manufacturers to secure guaranteed production capacity, price stability, and verified quality standards.",
        icon: Globe,
      },
      {
        title: "Intelligent Demand Forecasting",
        desc: "Predictive inventory analytics to prevent stockouts of critical clinical consumables and medical supplies during surge periods.",
        icon: TrendingUp,
      },
      {
        title: "Multi-Echelon Warehouse Storage",
        desc: "Strategically positioned regional warehousing hubs featuring climate control, automated racking, and barcode asset management.",
        icon: Layers,
      },
      {
        title: "Reverse Logistics & Return Management",
        desc: "Structured systems for defective unit recalls, warranty return handling, and environmentally safe medical waste management.",
        icon: Wrench,
      },
      {
        title: "Cold Chain Supply Optimization",
        desc: "Unbroken temperature-controlled distribution pipelines for biologics, diagnostic test kits, and vaccines from factory floor to end-user.",
        icon: ShieldCheck,
      },
      {
        title: "Digital Supply Visibility & API Integration",
        desc: "Live inventory tracking portals and EDI/API integrations with institutional client ERPs for automated purchase requisitioning.",
        icon: Cpu,
      },
    ],
    scopeOfServices: [
      "End-to-End International Supply Chain Architecture",
      "Automated Warehouse Management Systems (WMS)",
      "Strategic Supplier Sourcing & Long-Term Price Locking",
      "Just-in-Time (JIT) Hospital Consumable Replenishment",
      "Multi-Currency Trade Finance & Inventory Holding",
      "Batch Tracking, Serial Number Verification & FEFO Rotation",
      "Third-Party Logistics (3PL) & Dedicated Distribution",
      "Risk Mitigation & Contingency Supply Chain Planning",
    ],
    workflow: [
      { step: "01", title: "Supply Chain Mapping", desc: "Analyzing current lead times, inventory bottlenecks, and procurement cost structures." },
      { step: "02", title: "Vendor Network Design", desc: "Contracting primary and secondary tier-1 OEM manufacturers with SLA guarantees." },
      { step: "03", title: "Hub Storage & Buffering", desc: "Positioning strategic buffer inventory in regional climate-controlled warehouses." },
      { step: "04", title: "Automated Replenishment", desc: "Triggering scheduled dispatches based on automated minimum reorder thresholds." },
    ],
    benefits: [
      "Significant reduction in total cost of ownership (TCO) and procurement overhead",
      "Guaranteed inventory continuity during global supply disruptions",
      "First-Expiry-First-Out (FEFO) automated management for perishable medical stock",
      "Transparent digital dashboards with real-time shipment milestones",
      "Strict compliance with Good Distribution Practice (GDP) standards",
    ],
    industries: [
      "Hospital Networks & Large Medical Clinics",
      "Wholesale Pharmaceutical & Device Distributors",
      "Industrial & Chemical Manufacturing Units",
      "Government Healthcare Warehousing Authorities",
      "Emergency Disaster Management Organizations",
    ],
    faqs: [
      {
        q: "What is your typical lead time for international supply fulfillment?",
        a: "For stock items held in our regional buffer warehouses, dispatch is within 24–48 hours. For custom factory production orders, lead times range between 3 to 6 weeks depending on volume."
      },
      {
        q: "How do you prevent stock expiry on pharmaceuticals and consumables?",
        a: "Our automated WMS strictly implements FEFO (First-Expiry-First-Out) batch rotation, with automated alerts for any batches approaching 12 months remaining shelf life."
      },
      {
        q: "Do you offer vendor-managed inventory (VMI) for hospitals?",
        a: "Yes, we provide turnkey VMI programs where our on-site team monitors and replenishes clinical consumables directly within the hospital's central storage."
      }
    ]
  },
  {
    slug: "manufacturing-solutions",
    number: "04",
    title: "Manufacturing Solutions",
    eyebrow: "PRECISION ENGINEERING, CONTRACT MANUFACTURING & OEM ASSEMBLY",
    tagline: "Empowering healthcare and industrial sectors with high-precision contract manufacturing, cleanroom production lines, and custom fabrication.",
    badge: "Industrial & Medical Manufacturing",
    icon: Cpu,
    image: "/project-industrial-plant.jpg",
    overview: [
      "ROYS & ROYS International delivers advanced contract manufacturing and precision engineering solutions designed to meet the rigorous demands of healthcare device fabrication, sterile medical packaging, and industrial assembly.",
      "We partner with cutting-edge ISO 9001 and ISO 13485 certified manufacturing facilities equipped with automated CNC machining, plastic injection molding in Class 100,000 cleanrooms, and robotic ultrasonic welding lines.",
      "From prototyping custom surgical instruments to mass-producing hospital furniture components and modular cleanroom panels, our manufacturing engineering division translates client blueprints into market-ready, certified physical products."
    ],
    stats: [
      { value: "20+", label: "Manufacturing Partnerships" },
      { value: "ISO 13485", label: "Medical Device Certification" },
      { value: "500K+", label: "Units Fabricated Annually" },
      { value: "<0.01%", label: "Defect Tolerance Rate" },
    ],
    keyPillars: [
      {
        title: "Medical Cleanroom Injection Molding",
        desc: "High-precision plastic injection molding for syringes, IV connectors, pipette tips, and disposable cassettes in ISO Class 7/8 cleanrooms.",
        icon: Sparkles,
      },
      {
        title: "Surgical Grade CNC Machining",
        desc: "Multi-axis Swiss CNC milling and turning of titanium, 316L stainless steel, and medical polymers for orthopedic and surgical instruments.",
        icon: Wrench,
      },
      {
        title: "Hospital Furniture Fabrication",
        desc: "Heavy-duty automated tube bending, robotic laser cutting, and antimicrobial electrostatic powder coating for hospital beds and trolleys.",
        icon: Layers,
      },
      {
        title: "Modular Cleanroom Panel Production",
        desc: "Continuous sandwich panel manufacturing with rockwool, PIR, and aluminum honeycomb cores for sterile operating theater walls.",
        icon: Building2,
      },
      {
        title: "Automated Blister & Pouch Packaging",
        desc: "Class 10,000 cleanroom packaging lines utilizing medical Tyvek and thermoform blister sealing with ethylene oxide (EtO) sterilization.",
        icon: Package,
      },
      {
        title: "Quality Assurance & CMM Metrology",
        desc: "Coordinate Measuring Machines (CMM), optical comparators, and tensile strength testing ensuring zero-tolerance precision.",
        icon: CheckCircle2,
      },
    ],
    scopeOfServices: [
      "OEM & ODM Contract Medical Device Manufacturing",
      "Precision CNC Machining of Surgical Metals & Titanium",
      "Medical Grade Plastic Injection Molding in Cleanrooms",
      "Hospital Bed & Metal Furniture Automated Fabrication",
      "Modular Cleanroom Sandwich Wall & Ceiling Panels",
      "Sterile Tyvek Medical Blister Packaging & EtO Sterilization",
      "Rapid Prototyping & 3D Additive Manufacturing",
      "ISO 13485 Quality Management System Compliance",
    ],
    workflow: [
      { step: "01", title: "CAD / CAM Engineering", desc: "Reviewing client 3D models, material specifications, and tolerance definitions." },
      { step: "02", title: "Tooling & Prototyping", desc: "Fabricating precision molds and machining initial pilot prototypes for mechanical testing." },
      { step: "03", title: "Mass Production", desc: "Automated cleanroom manufacturing with continuous automated SPC quality control." },
      { step: "04", title: "Packaging & Sterilization", desc: "Sterile packaging, EtO/gamma sterilization, and release testing documentation." },
    ],
    benefits: [
      "Access to state-of-the-art cleanroom manufacturing and automated robotics",
      "Significant production cost savings without compromising international quality",
      "Complete design-to-production IP protection and non-disclosure agreements",
      "Rigorous quality verification with full material traceability certificates",
      "Scalable production capacity from small pilot runs to high-volume commercial scale",
    ],
    industries: [
      "Medical Device Innovators & Brands",
      "Hospital Infrastructure Developers",
      "Surgical Instrument Exporters",
      "Diagnostic Consumable Companies",
      "Industrial & Electronics Manufacturers",
    ],
    faqs: [
      {
        q: "What cleanroom standards do your manufacturing facilities operate under?",
        a: "Our plastic injection molding, assembly, and packaging facilities operate under ISO Class 7 (Class 10,000) and ISO Class 8 (Class 100,000) cleanroom environments."
      },
      {
        q: "Do you support private-label (OEM) branding and packaging?",
        a: "Yes, we offer full OEM/ODM branding, customized multi-color packaging, barcode/UDI serialization, and client-specific instruction manuals."
      },
      {
        q: "What certifications are provided with manufactured medical components?",
        a: "Each batch is accompanied by Certificate of Conformity (CoC), material mill test certificates (MTC), dimensional CMM reports, and sterilization validation certificates."
      }
    ]
  },
  {
    slug: "strategic-consultancy-services",
    number: "05",
    title: "Strategic Consultancy Services",
    eyebrow: "REGULATORY COMPLIANCE, HOSPITAL PLANNING & COMMERCIAL STRATEGY",
    tagline: "High-impact advisory for healthcare authorities, hospital boards, pharmaceutical plants, and international investors.",
    badge: "Advisory & Compliance",
    icon: Target,
    image: "/About-us-hero.jpeg",
    overview: [
      "Navigating complex healthcare regulations, multi-million dollar hospital capital investments, and international market entry requires seasoned strategic guidance. ROYS & ROYS International delivers elite management and technical consultancy.",
      "Our multidisciplinary advisory team consists of former hospital directors, senior biomedical engineers, regulatory compliance attorneys, and pharmaceutical GMP auditors.",
      "We provide actionable feasibility studies, hospital master planning, WHO-GMP regulatory GAP analysis, health economics modeling, and technology roadmapping that de-risk investments and ensure rapid regulatory clearance."
    ],
    stats: [
      { value: "100+", label: "Consulting Projects Delivered" },
      { value: "98%", label: "First-Pass Regulatory Clearance" },
      { value: "25+", label: "Senior Industry Consultants" },
      { value: "$200M+", label: "Capital Projects Advised" },
    ],
    keyPillars: [
      {
        title: "Hospital Master Planning & Feasibility",
        desc: "Demographic healthcare need assessments, bed-capacity modeling, clinical departmental zoning, and 10-year financial ROI projections.",
        icon: Building2,
      },
      {
        title: "WHO-GMP & Regulatory Audit Defense",
        desc: "Comprehensive gap audits, pre-inspection mock audits, CAPA execution, and documentation review for health ministry inspections.",
        icon: FileCheck,
      },
      {
        title: "Medical Technology Procurement Strategy",
        desc: "Unbiased vendor-neutral evaluation of MRI, CT, and robotic surgery bids to ensure optimal clinical efficacy and lifecycle value.",
        icon: Cpu,
      },
      {
        title: "Health Economics & Market Entry",
        desc: "Commercial strategy, pricing models, distribution partner evaluation, and reimbursement pathway analysis for new market entrants.",
        icon: TrendingUp,
      },
      {
        title: "Clinical Workflow & Accreditation (JCI / ISO)",
        desc: "Standard Operating Procedure (SOP) design and clinical workflow re-engineering to achieve Joint Commission International (JCI) accreditation.",
        icon: Award,
      },
      {
        title: "Public-Private Partnership (PPP) Structuring",
        desc: "Legal, technical, and financial structuring of healthcare PPP concessions between government health authorities and private operators.",
        icon: Landmark,
      },
    ],
    scopeOfServices: [
      "Comprehensive Hospital Feasibility Studies & Master Layouts",
      "WHO-GMP, EU GMP, and cGMP Facility Pre-Audits & GAP Analysis",
      "Medical Device Registration Dossier Preparation (CE / FDA / DRAP)",
      "Clinical Departmental Workflow Optimization & Staff Sizing",
      "Healthcare Public-Private Partnership (PPP) Transaction Advisory",
      "Equipment Tendering & Technical Bid Specification Drafting",
      "Joint Commission International (JCI) Accreditation Support",
      "Healthcare Supply Chain Risk Assessment & Redesign",
    ],
    workflow: [
      { step: "01", title: "Diagnostic Discovery", desc: "In-depth review of existing operational data, regulatory standing, and organizational objectives." },
      { step: "02", title: "GAP Analysis & Modeling", desc: "Quantifying operational deficiencies, regulatory non-conformances, and financial projections." },
      { step: "03", title: "Strategic Roadmap", desc: "Delivering detailed master blueprints, architectural schematics, and milestone action plans." },
      { step: "04", title: "Execution & Audit Support", desc: "On-site implementation oversight, staff training, and defense during official regulatory audits." },
    ],
    benefits: [
      "Access to veteran consultants with decades of international leadership experience",
      "Objective, vendor-agnostic technology recommendations that optimize client capex",
      "Proven track record in securing first-pass regulatory and accreditation clearances",
      "Comprehensive risk mitigation strategies for large-scale healthcare capital projects",
      "Actionable, data-driven insights tailored to regional market nuances",
    ],
    industries: [
      "Hospital Boards & Healthcare Investor Groups",
      "Pharmaceutical & Biopharmaceutical Manufacturers",
      "Government Ministries of Health & Planning Commissions",
      "Medical Device Innovators & Exporters",
      "Private Equity & Sovereign Wealth Healthcare Funds",
    ],
    faqs: [
      {
        q: "What regulatory standards does your consultancy cover?",
        a: "We specialize in WHO-GMP, EU GMP, US FDA 21 CFR Part 820/211, ISO 13485, ISO 14644 cleanroom standards, and JCI hospital accreditation."
      },
      {
        q: "Can you assist in designing a hospital from greenfield concept to commissioning?",
        a: "Yes, we handle complete greenfield hospital planning including clinical need analysis, space planning, MEP engineering schematics, equipment budgeting, and staffing."
      },
      {
        q: "How do you assist with regulatory dossier preparations?",
        a: "Our team writes, reviews, and compiles full eCTD pharmaceutical dossiers (Modules 1–5) and Medical Device technical files (STED format) for national and global submissions."
      }
    ]
  },
  {
    slug: "medical-devices-healthcare-equipment",
    number: "06",
    title: "Medical Devices & Healthcare Equipment",
    eyebrow: "ADVANCED DIAGNOSTICS, CRITICAL CARE & SURGICAL SYSTEMS",
    tagline: "Supplying world-class diagnostic imaging, surgical operating tables, anesthesia delivery, and ICU life support instrumentation.",
    badge: "Medical Technology",
    icon: HeartPulse,
    image: "/roys_hospital_interior.png",
    overview: [
      "Accurate diagnostics and dependable surgical instrumentation are the foundations of superior patient outcomes. ROYS & ROYS International delivers state-of-the-art medical devices and capital equipment sourced from world-leading OEM manufacturers.",
      "Our portfolio spans high-field Magnetic Resonance Imaging (MRI), multi-slice Computed Tomography (CT), digital X-ray rooms, color Doppler ultrasound, ICU ventilators, anesthesia workstations, and surgical electrosurgical units.",
      "Every piece of equipment is backed by comprehensive site planning, factory-trained installation engineers, certified calibration, and continuous post-warranty service agreements."
    ],
    stats: [
      { value: "300+", label: "Medical Centers Equipped" },
      { value: "99.8%", label: "System Reliability Rate" },
      { value: "30+", label: "Global OEM Partnerships" },
      { value: "24/7", label: "Emergency Biomedical Support" },
    ],
    keyPillars: [
      {
        title: "Diagnostic Imaging Suites",
        desc: "1.5T/3.0T MRI, 32-128 slice CT scanners, digital mammography, C-arms, and fixed/mobile digital radiography (DR) systems.",
        icon: Activity,
      },
      {
        title: "Critical Care & ICU Life Support",
        desc: "Advanced mechanical ventilators, multi-parameter telemetry patient monitors, volumetric infusion pumps, and defibrillators.",
        icon: HeartPulse,
      },
      {
        title: "Surgical Operating Room Technology",
        desc: "Electro-hydraulic surgical tables, shadowless surgical LED lighting, electrosurgical units (ESU), and anesthesia workstations.",
        icon: BriefcaseMedical,
      },
      {
        title: "Ultrasound & Cardiology Diagnostics",
        desc: "High-resolution 3D/4D color Doppler ultrasound scanners, 12-lead digital ECGs, Holter systems, and stress test treadmills.",
        icon: Zap,
      },
      {
        title: "Maternal & Neonatal Intensive Care",
        desc: "Microprocessor-controlled infant incubators, radiant warmers, phototherapy lamps, and fetal Doppler monitoring units.",
        icon: Sparkles,
      },
      {
        title: "Biomedical Installation & Preventive Maintenance",
        desc: "Full site readiness, radiation shielding, factory-trained engineer installation, NIST calibration, and 24/7 breakdown support.",
        icon: Wrench,
      },
    ],
    scopeOfServices: [
      "High-Field MRI (1.5T / 3.0T) and Multi-Slice CT Scanner Systems",
      "Digital Radiography (Fixed X-Ray, Mobile DR, C-Arm Systems)",
      "High-Performance 3D/4D Color Doppler Ultrasound Systems",
      "Intensive Care Mechanical Ventilators (Invasive & Non-Invasive)",
      "Electro-Hydraulic Surgical Operating Tables & Shadowless LED Lights",
      "Integrated Anesthesia Workstations & Patient Vaporizers",
      "Multiparameter Central ICU Patient Monitoring Stations",
      "Turnkey Biomedical Installation, Testing & Traceable Calibration",
    ],
    workflow: [
      { step: "01", title: "Clinical Need Evaluation", desc: "Assessing clinical specialty, patient throughput, and department requirements." },
      { step: "02", title: "Site Readiness & Shielding", desc: "Architectural, electrical, HVAC, and radiation lead shielding preparation." },
      { step: "03", title: "Installation & Calibration", desc: "Certified engineer deployment for physical assembly, software tuning, and QA testing." },
      { step: "04", title: "Clinical Staff Training", desc: "Hands-on operational training for doctors and technicians with 24/7 technical hotline." },
    ],
    benefits: [
      "Direct authorized partnerships with leading global medical technology OEMs",
      "Compliance with CE (MDR), US FDA, and ISO 13485 quality and safety standards",
      "Turnkey installation from site architectural prep to clinical commissioning",
      "Locally stocked genuine spare parts reducing potential system downtime",
      "Customized Annual Maintenance Contracts (AMC/CMC) with uptime guarantees",
    ],
    industries: [
      "Tertiary & Teaching Hospitals",
      "Military & Armed Forces Medical Facilities",
      "Private Diagnostic & Radiology Centers",
      "Specialized Surgical Clinics & Day Care Centers",
      "Government Healthcare Ministries & Tenders",
    ],
    faqs: [
      {
        q: "What global brands do you distribute and support?",
        a: "We collaborate with tier-1 international brands including Siemens Healthineers, Philips, GE Healthcare, Mindray, BD, and other certified manufacturers."
      },
      {
        q: "Do you handle radiation shielding and room construction for CT/X-Ray?",
        a: "Yes, our biomedical engineering division manages complete room preparation including lead lining, lead glass windows, RF cage installation, and heavy electrical connections."
      },
      {
        q: "What after-sales warranty is provided on heavy diagnostic systems?",
        a: "All equipment comes with comprehensive manufacturer warranty, backed by our locally based certified engineers and guaranteed response SLAs."
      }
    ]
  },
  {
    slug: "veterinary-healthcare-solutions",
    number: "07",
    title: "Veterinary Healthcare Solutions",
    eyebrow: "LIVESTOCK MEDICINES, ANIMAL DIAGNOSTICS & FARM BIOSECURITY",
    tagline: "Comprehensive veterinary pharmaceuticals, herd health diagnostics, dairy farm technology, and livestock productivity solutions.",
    badge: "Animal Health & Agriculture",
    icon: ShieldCheck,
    image: "/vetvac_dairy_vet_ai.jpg",
    overview: [
      "Livestock health is critical to agricultural prosperity and food security. ROYS & ROYS International delivers comprehensive veterinary healthcare solutions supporting commercial dairy farms, poultry producers, feedlots, and veterinary clinical practices.",
      "Our portfolio includes broad-spectrum veterinary pharmaceuticals, antiparasitics, nutritional feed additives, automated farm diagnostic instruments, and biosecurity sanitation protocols.",
      "We work closely with veterinary surgeons and commercial livestock managers to elevate herd immunity, prevent transboundary animal diseases, and maximize milk and meat yield through modern veterinary science."
    ],
    stats: [
      { value: "500+", label: "Livestock Farms Supported" },
      { value: "100+", label: "Veterinary Medicine Formulations" },
      { value: "95%", label: "Herd Health Improvement Rate" },
      { value: "100%", label: "Quality & Regulatory Compliance" },
    ],
    keyPillars: [
      {
        title: "Veterinary Therapeutics & Antibiotics",
        desc: "Broad-spectrum injectable antibiotics, anti-inflammatory drugs, intramammary infusions for mastitis, and oral suspensions.",
        icon: Pill,
      },
      {
        title: "Livestock Nutritional Supplements",
        desc: "Chelated mineral mixtures, bypass fats, rumen-protected amino acids, calcium tonics, and direct-fed microbials for enhanced productivity.",
        icon: Sparkles,
      },
      {
        title: "Point-of-Care Animal Diagnostics",
        desc: "Field-ready diagnostic test kits for Brucellosis, FMD, Mastitis, and portable veterinary ultrasound scanners for bovine pregnancy detection.",
        icon: Activity,
      },
      {
        title: "Modern Dairy Farm Equipment",
        desc: "Automated milking parlors, bulk milk cooling tanks, electronic cow activity collars, and automated calf feeding systems.",
        icon: Layers,
      },
      {
        title: "Farm Biosecurity & Disinfection",
        desc: "High-level quaternary ammonium and glutaraldehyde farm disinfectants, vehicle disinfection arches, and rodent control programs.",
        icon: ShieldCheck,
      },
      {
        title: "Breeding & Reproductive Technology",
        desc: "Artificial insemination (AI) guns, cryo liquid nitrogen semen containers, hormone protocols, and estrus synchronization kits.",
        icon: Wrench,
      },
    ],
    scopeOfServices: [
      "Commercial Dairy & Beef Cattle Pharmaceutical Formulations",
      "Poultry Health Antibiotics, Anticoccidials & Water Solubles",
      "Veterinary Portable Ultrasound Scanners for Pregnancy & Organs",
      "Field Rapid Test Kits for Infectious Livestock Diseases",
      "Bovine Mastitis Control, Teat Dips & Intramammary Injectors",
      "Artificial Insemination Equipment & Liquid Nitrogen Cryo Tanks",
      "Commercial Farm Biosecurity Planning & Disinfectant Systems",
      "Livestock Feed Additives, Minerals & Pre-Mix Formulations",
    ],
    workflow: [
      { step: "01", title: "Herd Health Audit", desc: "Evaluating herd health records, common disease vectors, and farm nutritional regimens." },
      { step: "02", title: "Custom Treatment Protocol", desc: "Prescribing targeted veterinary medicines, vaccination schedules, and feed supplements." },
      { step: "03", title: "Product Supply & Cold Chain", desc: "Delivering certified veterinary pharmaceuticals under temperature-monitored conditions." },
      { step: "04", title: "Outcome Monitoring", desc: "Regular veterinary follow-ups, diagnostic testing, and milk/meat yield benchmarking." },
    ],
    benefits: [
      "GMP-certified veterinary pharmaceutical formulations with proven bio-efficacy",
      "Significant reduction in herd mortality and clinical mastitis incidence",
      "Portable diagnostic tools enabling rapid on-farm clinical decisions",
      "End-to-end support for commercial dairy farm modernization and expansion",
      "Expert veterinary advisory on disease prevention and biosecurity protocols",
    ],
    industries: [
      "Commercial Dairy & Cattle Farming Enterprises",
      "Poultry Breeding & Broiler Production Units",
      "Veterinary Clinics & Rural Animal Hospitals",
      "Government Livestock & Dairy Development Boards",
      "Animal Feed & Mineral Premix Manufacturers",
    ],
    faqs: [
      {
        q: "What types of veterinary pharmaceuticals do you supply?",
        a: "We supply broad-spectrum antibiotics, antiparasitics, anti-inflammatory agents, intramammary infusions, metabolic solutions, and nutritional tonics."
      },
      {
        q: "Are your veterinary diagnostic kits suitable for field use?",
        a: "Yes, our rapid test kits and portable ultrasound scanners are ruggedized and specifically designed for on-farm field diagnostics without requiring laboratory infrastructure."
      },
      {
        q: "Do you supply cold-chain storage equipment for artificial insemination semen?",
        a: "Yes, we supply validated liquid nitrogen cryo-containers, AI straws, thawing units, and protective storage accessories."
      }
    ]
  },
  {
    slug: "human-veterinary-vaccines",
    number: "08",
    title: "Human & Veterinary Vaccines",
    eyebrow: "IMMUNOLOGY, BIOLOGICALS & STRICT COLD-CHAIN INTEGRITY",
    tagline: "Distributing life-saving human immunization vaccines and livestock biologicals with certified cold-chain monitoring from factory to injection.",
    badge: "Vaccines & Biologicals",
    icon: Sparkles,
    image: "/vetvac_vaccines_ai.jpg",
    overview: [
      "Vaccines are the cornerstone of disease eradication and pandemic prevention across human and animal populations. ROYS & ROYS International operates an accredited specialized biologicals distribution division.",
      "We supply WHO-prequalified human vaccines (EPI programs, Hepatitis, Rabies, Typhoid, Influenza) and vital veterinary biologicals (Foot and Mouth Disease, Newcastle Disease, Hemorrhagic Septicemia, Anthrax, Brucellosis).",
      "Our infrastructure guarantees unbroken +2°C to +8°C and -20°C cold chain logistics, utilizing GDP-certified refrigerated transport, solar direct-drive vaccine refrigerators, and continuous digital dataloggers."
    ],
    stats: [
      { value: "5M+", label: "Doses Distributed Annually" },
      { value: "100%", label: "Cold Chain Integrity Record" },
      { value: "WHO-PQ", label: "Prequalified Vaccine Sourcing" },
      { value: "Zero", label: "Temperature Excursion Tolerance" },
    ],
    keyPillars: [
      {
        title: "WHO-Prequalified Human Vaccines",
        desc: "Supplying routine childhood immunization vaccines, travel vaccines, and adult boosters adhering to strict WHO-Geneva prequalification.",
        icon: Sparkles,
      },
      {
        title: "Livestock & Poultry Biologicals",
        desc: "Attenuated and inactivated viral/bacterial vaccines for Foot and Mouth Disease (FMD), Newcastle (ND), Gumboro (IBD), and HS.",
        icon: ShieldCheck,
      },
      {
        title: "GDP Cold-Chain Logistics",
        desc: "Certified refrigerated transport vehicles, validated phase-change thermal shippers, and dry ice consignments with electronic GPS logging.",
        icon: TrendingUp,
      },
      {
        title: "Solar Direct-Drive (SDD) Vaccine Coolers",
        desc: "WHO-PQS approved solar-powered vaccine refrigerators and freezers operating reliably in off-grid rural health centers without batteries.",
        icon: Zap,
      },
      {
        title: "Biological Lot Release Verification",
        desc: "Every batch verified against official National Control Laboratory (NCL) lot release certificates and protocol reviews.",
        icon: FileCheck,
      },
      {
        title: "National Immunization Campaign Support",
        desc: "Turnkey supply, logistics, and field cold box deployment for nationwide public health and livestock vaccination campaigns.",
        icon: Landmark,
      },
    ],
    scopeOfServices: [
      "National EPI Human Immunization Vaccine Sourcing",
      "Specialized Travel Vaccines (Yellow Fever, Meningitis, Rabies, Cholera)",
      "Bovine & Ovine Vaccines (FMD, Anthrax, Blackleg, Brucellosis, HS)",
      "Poultry Hatchery & Farm Vaccines (Newcastle, IBD, Marek's Disease)",
      "WHO-PQS Certified Solar Direct-Drive Vaccine Refrigerators",
      "Continuous Digital Cold-Chain Temperature Data Loggers",
      "National Control Laboratory (NCL) Lot Release Compliance",
      "Emergency Pandemic Vaccine Procurement & Charter Airlifts",
    ],
    workflow: [
      { step: "01", title: "Demand & Batch Allocation", desc: "Coordinating with vaccine manufacturers for allocated fresh-production lots." },
      { step: "02", title: "Lot Release & QA Clearance", desc: "Validating manufacturer and national control laboratory release certificates." },
      { step: "03", title: "Monitored Cold Shipping", desc: "Dispatch in validated active thermal containers with real-time temperature loggers." },
      { step: "04", title: "Cold Storage Handover", desc: "Temperature verification upon delivery and transfer into monitored regional vaccine stores." },
    ],
    benefits: [
      "Direct sourcing from WHO-prequalified and GMP-certified vaccine manufacturers",
      "Total cold-chain visibility with tamper-proof electronic temperature records",
      "Extended shelf-life guaranteed on all delivered vaccine batches",
      "Extensive experience supporting UN agencies, national health ministries, and NGOs",
      "Supply of WHO-PQS certified cold chain storage hardware and solar units",
    ],
    industries: [
      "National Expanded Programmes on Immunization (EPI)",
      "Public & Private Hospital Networks",
      "Commercial Poultry & Livestock Integrators",
      "UN Agencies (UNICEF, WHO, FAO) & Relief Missions",
      "Military Healthcare Immunization Programs",
    ],
    faqs: [
      {
        q: "How do you guarantee cold chain integrity during international transit?",
        a: "We use active refrigeration air containers (Envirotainer/CSafe) or validated VIP vacuum insulated shippers with dual digital temperature loggers monitoring conditions throughout transit."
      },
      {
        q: "Are your veterinary vaccines suitable for tropical climates?",
        a: "Yes, we supply thermostable and multi-valent formulations engineered specifically for high-efficacy in tropical and sub-tropical farming environments."
      },
      {
        q: "What documentation is provided with vaccine shipments?",
        a: "Every shipment includes the Certificate of Analysis (CoA), National Control Authority (NCA) Lot Release Certificate, and continuous temperature chart log."
      }
    ]
  },
  {
    slug: "surgical-disposable-products",
    number: "09",
    title: "Surgical Disposable Products",
    eyebrow: "STERILE OR PACKS, SURGICAL GOWNS & SPECIALTY DRAPES",
    tagline: "Delivering high-barrier sterile surgical drapes, reinforced gowns, custom procedure trays, and single-use surgical consumables.",
    badge: "Surgical & Operating Room",
    icon: Scissors,
    image: "/biomax_consumables_ai.jpg",
    overview: [
      "Preventing surgical site infections (SSIs) in the operating room is vital for patient safety and clinical success. ROYS & ROYS International manufactures and distributes high-performance sterile surgical disposables conforming to EN 13795 and AAMI Level 3/4 standards.",
      "Our range includes custom surgical procedure packs, fluid-resistant surgical gowns, fenestrated patient drapes with incise films, laparoscopic accessories, and electrosurgical pencils.",
      "Manufactured in Class 100,000 cleanrooms using ultrasonic bonding and medical-grade SMS/SMMS fabrics, our surgical disposables provide optimal microbial barrier protection and high breathability for surgical teams.",
    ],
    stats: [
      { value: "1M+", label: "Sterile Surgical Packs Supplied" },
      { value: "AAMI Level 4", label: "Maximum Barrier Protection" },
      { value: "100%", label: "EtO Sterilization Validation" },
      { value: "ISO 13485", label: "Cleanroom Certified Production" },
    ],
    keyPillars: [
      {
        title: "Custom Surgical Procedure Packs (CPTs)",
        desc: "All-in-one sterile kits customized for Orthopedics, Cardiology, Cesarean, Laparoscopy, and Ophthalmology, drastically cutting OT setup time.",
        icon: Scissors,
      },
      {
        title: "AAMI Level 3 & 4 Surgical Gowns",
        desc: "Reinforced breathable SMMS and laminated surgical gowns offering total impervious barrier against blood-borne pathogens.",
        icon: ShieldCheck,
      },
      {
        title: "Specialized Surgical Drapes & Incise Films",
        desc: "Procedure-specific patient drapes featuring integrated fluid collection pouches, fenestrations, and iodine-impregnated antimicrobial incise films.",
        icon: Layers,
      },
      {
        title: "Electrosurgical Pencils & Grounding Pads",
        desc: "Monopolar electrosurgical cautery pencils with push-button controls, non-stick Teflon coated tips, and universal hydrogel patient return electrodes.",
        icon: Zap,
      },
      {
        title: "Surgical Suction Tubing & Yankauer Tips",
        desc: "Kink-resistant medical PVC suction connection tubing with sterile bulb/crown Yankauer suction handles for clear surgical fields.",
        icon: Activity,
      },
      {
        title: "EtO Sterilization & Tyvek Packaging",
        desc: "Validated ethylene oxide sterilization with chemical indicators and medical-grade Tyvek peel pouches ensuring 5-year sterile shelf life.",
        icon: CheckCircle2,
      },
    ],
    scopeOfServices: [
      "Customized Sterile Surgical Procedure Trays (CPTs)",
      "AAMI Level 3 & 4 Reinforced Sterile Surgical Gowns",
      "Universal & Specialty Patient Surgical Drapes",
      "Cesarean, Orthopedic & Cardiovascular Specialty Packs",
      "Disposable Monopolar Electrosurgical Cautery Pencils",
      "Sterile Surgical Suction Connecting Tubes & Yankauer Handles",
      "Surgical Skin Markers & Scalpel Blades with Safety Locks",
      "Class 100,000 Cleanroom Packaging & EtO Sterilization",
    ],
    workflow: [
      { step: "01", title: "OR Pack Customization", desc: "Consulting with hospital surgical teams to tailor components inside each custom procedure tray." },
      { step: "02", title: "Cleanroom Assembly", desc: "Assembling packs using lint-free SMMS fabrics inside ISO Class 8 cleanrooms." },
      { step: "03", title: "EtO Sterilization", desc: "Industrial ethylene oxide sterilization with biological indicator incubation testing." },
      { step: "04", title: "Direct OT Delivery", desc: "Supplying bulk or scheduled JIT consignments directly to hospital surgical suites." },
    ],
    benefits: [
      "Proven reduction in hospital-acquired surgical site infections (SSIs)",
      "Up to 40% reduction in operating theater preparation and turnover times",
      "High fluid absorption and total barrier resistance against viral penetration",
      "Customizable configurations tailored to specific hospital surgery workflows",
      "Strict compliance with European EN 13795 and American AAMI PB70 standards",
    ],
    industries: [
      "Public & Private Surgical Hospitals",
      "Specialized Heart, Orthopedic & Eye Institutes",
      "Day Surgery & Ambulatory Surgical Centers",
      "Military Field Hospitals & Trauma Response Units",
      "Government Healthcare Tenders",
    ],
    faqs: [
      {
        q: "Can you customize surgical packs according to our hospital's specific surgeon preferences?",
        a: "Yes, our Custom Procedure Trays (CPTs) are completely tailored with your choice of drapes, gowns, towels, suction tubing, and cautery accessories."
      },
      {
        q: "What barrier protection levels do your surgical gowns meet?",
        a: "Our gowns meet AAMI Level 3 (fluid resistant) and AAMI Level 4 (fully viral and blood impervious in critical chest and sleeve zones)."
      },
      {
        q: "What is the validated shelf life of your sterile surgical products?",
        a: "All our EtO sterilized products in Tyvek/film packaging maintain a validated 3-year to 5-year sterile barrier shelf life."
      }
    ]
  },
  {
    slug: "medical-consumables",
    number: "10",
    title: "Medical Consumables",
    eyebrow: "CLINICAL DISPOSABLES, INFUSION SETS & DIAGNOSTIC SUPPLIES",
    tagline: "Providing high-volume sterile clinical consumables, hypodermic syringes, IV cannulas, blood collection tubes, and wound care.",
    badge: "Clinical Consumables",
    icon: Package,
    image: "/biomax_products_hero_ai.jpg",
    overview: [
      "High-volume, dependable clinical consumables are the lifeblood of daily hospital and outpatient operations. ROYS & ROYS International manufactures and distributes certified medical disposables built to the highest safety and bio-compatibility standards.",
      "Our consumable range includes auto-disable (AD) and standard hypodermic syringes, sterile IV infusion sets, safety IV cannulas, vacuum blood collection tubes, sterile wound dressings, and examination gloves.",
      "Designed for maximum patient comfort and clinical safety, our consumables eliminate needle-stick injuries, prevent cross-contamination, and ensure consistent clinical reliability across all hospital departments.",
    ],
    stats: [
      { value: "50M+", label: "Units Supplied Annually" },
      { value: "ISO 7886", label: "Syringe Standard Compliance" },
      { value: "100%", label: "Non-Pyrogenic & Latex Free" },
      { value: "99.9%", label: "On-Time Bulk Delivery Rate" },
    ],
    keyPillars: [
      {
        title: "Sterile Hypodermic & Auto-Disable Syringes",
        desc: "2-part and 3-part sterile syringes (1ml to 50ml), luer lock/slip, and WHO-compliant Auto-Disable (AD) immunization syringes.",
        icon: Package,
      },
      {
        title: "Safety IV Cannulas & Infusion Lines",
        desc: "FEP/PTFE radiopaque IV catheter cannulas with injection ports, safety self-blunting needle shields, and gravity/pump infusion sets.",
        icon: Activity,
      },
      {
        title: "Vacuum Blood Collection Tubes",
        desc: "PET vacuum blood tubes (EDTA, Gel & Clot Activator, Sodium Citrate, Heparin) ensuring exact draw volumes and stable analytical samples.",
        icon: Sparkles,
      },
      {
        title: "Advanced Wound Care & Dressings",
        desc: "Hydrocolloid dressings, sterile gauze swabs, transparent IV film dressings with chlorhexidine, and hypoallergenic fixation tapes.",
        icon: Layers,
      },
      {
        title: "Medical Examination & Surgical Gloves",
        desc: "Powder-free nitrile, latex, and sterile surgical gloves with micro-textured fingertips providing superior tactile sensitivity and chemical resistance.",
        icon: ShieldCheck,
      },
      {
        title: "Catheters, Tubes & Drainage Systems",
        desc: "100% silicone Foley balloon catheters, closed urine drainage bags with anti-reflux valves, and thoracic chest drainage bottles.",
        icon: CheckCircle2,
      },
    ],
    scopeOfServices: [
      "Standard & Auto-Disable (AD) Hypodermic Syringes",
      "Safety IV Catheter Cannulas (14G to 26G)",
      "Sterile IV Infusion Sets & Blood Transfusion Giving Sets",
      "Vacuum Blood Collection Tubes & Multi-Sample Needles",
      "Powder-Free Nitrile & Sterile Surgical Latex Gloves",
      "Hydrocolloid, Foam & Transparent IV Site Dressings",
      "2-Way & 3-Way Silicone Foley Balloon Catheters",
      "Bulk Institutional Hospital Stock Supply Agreements",
    ],
    workflow: [
      { step: "01", title: "Institutional Volume Modeling", desc: "Analyzing monthly consumable consumption rates across hospital departments." },
      { step: "02", title: "Batch Manufacturing & QC", desc: "Cleanroom injection molding, automated assembly, and bio-compatibility batch testing." },
      { step: "03", title: "Sterilization & Certification", desc: "EtO/Gamma sterilization with pyrogen and cytotoxicity testing certificates." },
      { step: "04", title: "Scheduled Delivery", desc: "Palletized consolidated shipments delivered to regional hospital distribution centers." },
    ],
    benefits: [
      "High manufacturing volume delivering unmatched cost savings on everyday disposables",
      "Latex-free, non-toxic, and non-pyrogenic certified medical-grade materials",
      "Enhanced safety mechanisms reducing accidental needle-stick injuries for nurses",
      "Consistent product quality preventing cannula kinking and needle burrs",
      "Guaranteed multi-year supply contracts with buffer stock reservations",
    ],
    industries: [
      "Public & Private Hospital Networks",
      "Blood Transfusion Centers & Diagnostic Laboratories",
      "National Immunization Programs",
      "Retail Pharmacy & Medical Wholesalers",
      "Emergency Ambulance & Rescue Services",
    ],
    faqs: [
      {
        q: "Are your syringes compatible with automated syringe infusion pumps?",
        a: "Yes, our 20ml and 50ml luer-lock syringes are fully calibrated and compatible with all major hospital syringe pump brands (B. Braun, Terumo, Alaris, BD)."
      },
      {
        q: "What material are your IV cannulas manufactured from?",
        a: "Our IV cannulas feature medical-grade FEP (Fluorinated Ethylene Propylene) or Polyurethane (PUR) with embedded radiopaque lines for X-ray visibility."
      },
      {
        q: "Do you supply WHO-prequalified auto-disable syringes for immunization?",
        a: "Yes, we supply WHO-PQS certified auto-disable syringes specifically engineered for public health vaccination programs."
      }
    ]
  },
  {
    slug: "hospital-medical-furniture",
    number: "11",
    title: "Hospital & Medical Furniture",
    eyebrow: "ERGONOMIC PATIENT BEDS, OT TROLLEYS & CLINICAL CABINETS",
    tagline: "Manufacturing motorized ICU beds, manual ward beds, hydraulic stretchers, examination couches, and modular medical cabinetry.",
    badge: "Hospital Infrastructure",
    icon: Building2,
    image: "/roys_hospital_interior.png",
    overview: [
      "Hospital furniture plays a direct role in patient recovery, caregiver ergonomics, and hospital infection control. ROYS & ROYS International designs and manufactures durable, aesthetic, and hygienic medical furniture.",
      "Our catalog includes multi-function motorized ICU beds with integrated weighing scales, hydraulic emergency transfer stretchers, stainless steel instrument trolleys, bedside lockers, overbed tables, and modular pharmacy storage cabinets.",
      "Built with heavy-duty robotic welding, antimicrobial epoxy powder coatings, and motorized Linak/TiMotion actuator drives, our furniture withstands decades of rigorous clinical use and chemical disinfection."
    ],
    stats: [
      { value: "10,000+", label: "Hospital Beds Fabricated" },
      { value: "150+", label: "Hospitals Completely Furnished" },
      { value: "10 Years", label: "Structural Frame Warranty" },
      { value: "CE / ISO", label: "Certified Medical Furniture" },
    ],
    keyPillars: [
      {
        title: "Multi-Function Motorized ICU Beds",
        desc: "5-function electric ICU beds with Trendelenburg, cardiac chair position, one-button CPR release, nurse control panel, and central braking.",
        icon: Building2,
      },
      {
        title: "Hydraulic Emergency Patient Stretchers",
        desc: "Heavy-duty trauma transfer stretchers with hydraulic height elevation, X-ray translucent backrests, directional fifth-wheel steering, and collapsible side rails.",
        icon: Activity,
      },
      {
        title: "General Ward Beds & Bedside Lockers",
        desc: "2-crank manual ward beds with ABS head/footboards, matching ABS bedside lockers with concealed drawers, and gas-spring overbed tables.",
        icon: Layers,
      },
      {
        title: "Stainless Steel 304 OT Furniture",
        desc: "Mayo instrument stands, double-basin wash stands, kick buckets, surgical step stools, and heavy-duty 304 SS medical dressing trolleys.",
        icon: Wrench,
      },
      {
        title: "Medical Examination & Delivery Couches",
        desc: "Hydraulic and electric gynecological delivery beds, pediatric examination couches, and blood donation/chemotherapy recliner chairs.",
        icon: HeartPulse,
      },
      {
        title: "Modular Pharmacy & Storage Cabinetry",
        desc: "Stainless steel and epoxy medical cabinets with secure medicine drawers, lockable narcotics compartments, and adjustable shelves.",
        icon: Package,
      },
    ],
    scopeOfServices: [
      "5-Function Electric Motorized ICU & CCU Hospital Beds",
      "2-Crank & 3-Crank Manual Hospital Ward Beds",
      "Hydraulic Emergency Trauma & Patient Transport Stretchers",
      "Gas-Spring Adjustable Overbed Tables & ABS Bedside Lockers",
      "Grade 304 Stainless Steel Operating Room Mayo Stands & Trolleys",
      "Obstetric & Gynecological Electric Labor Delivery Beds",
      "Blood Donor & Chemotherapy Ergonomic Recliner Chairs",
      "Turnkey Complete Hospital Room Interior Furnishing",
    ],
    workflow: [
      { step: "01", title: "Hospital Spatial Layout", desc: "Analyzing floor plans, room dimensions, and bed-head unit coordination." },
      { step: "02", title: "Precision Fabrication", desc: "Robotic laser cutting, automated tube bending, and antimicrobial powder coating." },
      { step: "03", title: "Electrical & Load Testing", desc: "Rigorous 250kg+ safe working load testing and electrical actuator certification." },
      { step: "04", title: "On-Site Assembling", desc: "Room-by-room delivery, unpacking, assembly, and biomedical safety testing." },
    ],
    benefits: [
      "Heavy-duty construction with 250kg to 300kg safe working load capacities",
      "Smooth, crevice-free surfaces resistant to harsh hospital disinfectants",
      "Whisper-quiet medical electric motors with integrated emergency battery backup",
      "Ergonomic nurse controls and central braking systems for caregiver efficiency",
      "Turnkey delivery from CAD room layout planning to on-site assembly",
    ],
    industries: [
      "Public & Private Tertiary Hospitals",
      "Specialized Intensive Care & Cardiac Centers",
      "Maternity Hospitals & Women's Health Clinics",
      "Rehabilitation & Elderly Nursing Care Homes",
      "Military Field Hospitals & Emergency Clinics",
    ],
    faqs: [
      {
        q: "What motors and electrical actuators do you use in your electric ICU beds?",
        a: "We use world-leading medical actuators from Linak (Denmark) and TiMotion (Taiwan), featuring IPX4/IPX6 waterproof ratings and emergency backup batteries."
      },
      {
        q: "Are the surfaces resistant to chemical disinfectants?",
        a: "Yes, all metal frames receive electrostatic antimicrobial powder coating cured at 200°C, and all plastics are medical-grade virgin ABS resistant to bleach and alcohol disinfectants."
      },
      {
        q: "Do you supply matching mattresses with hospital beds?",
        a: "Yes, we supply high-density medical foam mattresses with waterproof, anti-fungal, fire-retardant, and vapor-permeable polyurethane (PU) zip covers."
      }
    ]
  },
  {
    slug: "laboratory-equipment-scientific-instruments",
    number: "12",
    title: "Laboratory Equipment & Scientific Instruments",
    eyebrow: "PATHOLOGY ANALYZERS, BIOSAFETY HOODS & ANALYTICAL REAGENTS",
    tagline: "Equipping clinical pathology labs, molecular biology centers, and universities with automated analyzers, PCR systems, and lab furniture.",
    badge: "Laboratory & Diagnostics",
    icon: Microscope,
    image: "/biomax_lab_equipment_ai.jpg",
    overview: [
      "Accurate laboratory diagnostics drive over 70% of all clinical medical decisions. ROYS & ROYS International delivers comprehensive laboratory instrumentation, analytical reagents, biosafety systems, and ergonomic laboratory furniture.",
      "Our offerings include fully automated clinical chemistry analyzers (up to 800 tests/hour), 5-part differential hematology analyzers, real-time quantitative PCR (qPCR) thermal cyclers, Class II Type A2 biosafety cabinets, and -86°C ultra-low freezers.",
      "Supported by dedicated application specialists and calibration engineers, we provide complete laboratory planning, cold-chain reagent supply contracts, and ISO 15189 laboratory accreditation support."
    ],
    stats: [
      { value: "300+", label: "Laboratories Commissioned" },
      { value: "1,000+", label: "Analytical Instruments & Consumables" },
      { value: "ISO 15189", label: "Accreditation Compliance" },
      { value: "100%", label: "Traceable Calibration Standards" },
    ],
    keyPillars: [
      {
        title: "Clinical Chemistry & Hematology",
        desc: "Automated chemistry analyzers, 3-part/5-part laser hematology counters, automated coagulation systems, and urine sediment analyzers.",
        icon: Activity,
      },
      {
        title: "Molecular Biology & PCR Suites",
        desc: "Real-time qPCR systems, automated magnetic bead nucleic acid extractors, UV transilluminators, and horizontal gel electrophoresis units.",
        icon: Microscope,
      },
      {
        title: "Biosafety Cabinets & Fume Extraction",
        desc: "Class II Type A2/B2 biosafety cabinets with motorized sash windows, ductless chemical fume hoods, and laminar clean benches.",
        icon: ShieldCheck,
      },
      {
        title: "Spectroscopy & Analytical Instruments",
        desc: "Double-beam UV-Vis spectrophotometers, HPLC systems, gas chromatography, and multi-mode microplate readers.",
        icon: Zap,
      },
      {
        title: "Cold Storage & Bio-Banking",
        desc: "-86°C ultra-low temperature freezers with dual compressors, blood bank refrigerators, and liquid nitrogen bio-storage dewars.",
        icon: Layers,
      },
      {
        title: "Turnkey Modular Lab Furniture",
        desc: "Chemical-resistant epoxy and ceramic workbenches, PP reagent shelving, island tables, anti-vibration balance tables, and eye-wash showers.",
        icon: Wrench,
      },
    ],
    scopeOfServices: [
      "Fully Automated Clinical Chemistry Analyzers (200 - 800 T/H)",
      "5-Part Laser Differential Hematology Analyzers & Reagents",
      "Real-Time Quantitative PCR (qPCR) Molecular Diagnostic Suites",
      "Microprocessor Class II Type A2 & B2 Biosafety Cabinets",
      "High-Speed Refrigerated Centrifuges & Microcentrifuges",
      "-86°C Ultra-Low Temperature (ULT) Laboratory Freezers",
      "Type 1 & Type 2 Ultra-Pure Water Purification Systems",
      "Turnkey Modular Laboratory Furniture & Fume Extraction",
    ],
    workflow: [
      { step: "01", title: "Throughput & BSL Assessment", desc: "Determining biosafety level (BSL-1 to BSL-3), test volume, and sample workflow zoning." },
      { step: "02", title: "Furniture & Utility Layout", desc: "CAD layout of epoxy benches, gas taps, pure water loops, and localized fume extraction." },
      { step: "03", title: "Installation & Calibration", desc: "Precision mechanical placement, electrical hookup, and multi-point NIST calibration." },
      { step: "04", title: "Reagent Logistics & Training", desc: "Application training for lab technicians and scheduled cold-chain delivery of reagents." },
    ],
    benefits: [
      "Direct relationships with leading global diagnostic instrument manufacturers",
      "Turnkey capability from architectural lab benches to automated analyzers",
      "Guaranteed temperature-controlled logistics for sensitive diagnostic kits",
      "Comprehensive calibration certificates and validation support for ISO 15189",
      "On-site application specialist training and protocol optimization",
    ],
    industries: [
      "Hospital Pathology & Clinical Laboratories",
      "Independent Diagnostic & Reference Labs",
      "University & Academic Research Institutes",
      "Pharmaceutical Quality Control (QC) Facilities",
      "Food Safety & Environmental Testing Laboratories",
    ],
    faqs: [
      {
        q: "Do you supply both open-system and closed-system chemistry analyzers?",
        a: "Yes, we supply versatile open-system analyzers that can run standard third-party reagents as well as dedicated high-throughput closed systems."
      },
      {
        q: "What certifications do your biosafety cabinets carry?",
        a: "Our Class II biosafety cabinets comply with EN 12469 and NSF/ANSI 49 standards, featuring H14 HEPA filtration with 99.999% efficiency."
      },
      {
        q: "Do you assist with laboratory accreditation preparation?",
        a: "Yes, our technical team assists in equipment qualification (IQ/OQ/PQ), calibration protocols, and Standard Operating Procedure (SOP) guidance for ISO 15189 accreditation."
      }
    ]
  },
  {
    slug: "pharmaceutical-products",
    number: "13",
    title: "Pharmaceutical Products",
    eyebrow: "FINISHED DOSAGE FORMS, ACTIVE PHARMACEUTICAL INGREDIENTS & REGULATORY DOSSIERS",
    tagline: "Manufacturing and exporting WHO-GMP certified finished formulations, essential medicines, sterile injectables, and active ingredients.",
    badge: "Pharmaceutical Manufacturing",
    icon: Pill,
    image: "/biomax_biotech_solutions_ai.jpg",
    overview: [
      "Access to safe, effective, and affordable medicines is vital to global public health. ROYS & ROYS International manufactures and distributes high-quality pharmaceutical finished formulations (FDF) and Active Pharmaceutical Ingredients (API).",
      "Operating from state-of-the-art WHO-GMP compliant facilities, our portfolio spans oral solid dosages (tablets, capsules), oral liquid syrups, sterile intravenous infusions, small-volume injectables, and topical semi-solids.",
      "All products are manufactured under strict Good Manufacturing Practices (GMP) and supported by complete Common Technical Document (CTD / eCTD) dossiers for seamless health ministry registration across global markets."
    ],
    stats: [
      { value: "200+", label: "Registered Formulations" },
      { value: "WHO-GMP", label: "Certified Manufacturing Lines" },
      { value: "30+", label: "Export Destination Countries" },
      { value: "100%", label: "Dossier Registration Approval" },
    ],
    keyPillars: [
      {
        title: "Oral Solid Dosage (Tablets & Capsules)",
        desc: "Coated, sustained-release, and effervescent tablets; hard and soft gelatin capsules produced on high-speed automated lines.",
        icon: Pill,
      },
      {
        title: "Sterile Liquid Injectables & IV Infusions",
        desc: "Aseptically filled ampoules, vials, lyophilized powders, and Large Volume Parenterals (LVP) in BFS plastic bottles.",
        icon: Sparkles,
      },
      {
        title: "Oral Liquids, Syrups & Suspensions",
        desc: "Sugar-free and pediatric syrups, dry powder suspensions, and liquid drops in automated bottle filling and cartooning lines.",
        icon: Activity,
      },
      {
        title: "Topical Creams, Ointments & Gels",
        desc: "Dermatological creams, sterile ophthalmic ointments, and transdermal gels in automated aluminum/laminate tube fillers.",
        icon: Layers,
      },
      {
        title: "Active Pharmaceutical Ingredients (APIs)",
        desc: "Sourcing and supply of high-purity chemical APIs, excipients, and botanical extracts with Drug Master Files (DMF).",
        icon: FlaskConical,
      },
      {
        title: "eCTD Regulatory Dossier Services",
        desc: "Complete Module 1 to 5 CTD/eCTD dossier compilation, stability data (Zone IVb), and bio-equivalence documentation.",
        icon: FileCheck,
      },
    ],
    scopeOfServices: [
      "WHO-GMP Certified Finished Dosage Form (FDF) Manufacturing",
      "Antibiotics, Cardiovascular, Anti-Diabetic & Oncology Formulations",
      "Aseptic Small Volume Injectables (Liquid & Lyophilized Vials)",
      "Large Volume Parenterals (IV Infusions in BFS Plastic Bottles)",
      "High-Purity Active Pharmaceutical Ingredients (APIs) & Excipients",
      "Complete CTD / eCTD Registration Dossiers (Zone IVb Stability)",
      "Contract Manufacturing (P2P / Loan Licensing / OEM Branding)",
      "Institutional Supply for National Essential Medicine Lists (EML)",
    ],
    workflow: [
      { step: "01", title: "Dossier Submission", desc: "Submitting eCTD technical files to destination health ministries for product registration." },
      { step: "02", title: "Commercial Batch Production", desc: "Manufacturing under cleanroom conditions with in-process quality control." },
      { step: "03", title: "QC Release Testing", desc: "Comprehensive HPLC, dissolution, microbial, and stability testing before batch release." },
      { step: "04", title: "GDP Export Logistics", desc: "Temperature-monitored air/sea freight dispatch with complete Certificate of Analysis (CoA)." },
    ],
    benefits: [
      "Strict compliance with WHO-GMP, PIC/S, and national drug regulatory authorities",
      "Complete CTD/eCTD documentation ready for international product registration",
      "Real-time and accelerated stability data tested for Zone IVb climatic conditions",
      "High production capacities ensuring uninterrupted institutional supplies",
      "Competitive contract manufacturing rates for global pharmaceutical brand owners",
    ],
    industries: [
      "National Ministries of Health & Essential Medicine Programs",
      "Pharmaceutical Importers & Regional Distributors",
      "Hospital Pharmacy Networks & Retail Chain Stores",
      "International Health Agencies (WHO, UNICEF, Global Fund)",
      "Private Label & Generic Brand Marketers",
    ],
    faqs: [
      {
        q: "What climatic zones do your stability studies cover?",
        a: "Our pharmaceutical formulations undergo validated stability testing under Zone IVb (30°C / 75% RH) conditions, ensuring stability across hot and humid international markets."
      },
      {
        q: "Can you provide eCTD dossiers for product registration in our country?",
        a: "Yes, we provide full CTD/eCTD format registration dossiers (Modules 1 to 5) including manufacturing process validation, analytical methods, and clinical summaries."
      },
      {
        q: "Do you offer contract manufacturing under our private brand label?",
        a: "Yes, we provide turnkey contract manufacturing (OEM) including custom packaging design, blister foil printing, and regulatory registration transfer."
      }
    ]
  },
  {
    slug: "hospital-engineering-infrastructure",
    number: "14",
    title: "Hospital Engineering & Infrastructure",
    eyebrow: "MEDICAL GAS PIPELINE, MODULAR OT & STERILE MEP INFRASTRUCTURE",
    tagline: "Engineering resilient, sterile, and technologically advanced infrastructure for modern hospitals and healthcare centers.",
    badge: "Hospital MEP Engineering",
    icon: Wrench,
    image: "/pakmed_hero_engineering.svg",
    overview: [
      "Hospital engineering requires specialized technical competence that goes far beyond general construction. ROYS & ROYS International designs, builds, and commissions critical healthcare MEP infrastructure.",
      "Our specialized engineering division executes Medical Gas Pipeline Systems (MGPS) adhering to HTM 02-01 / NFPA 99, modular operating theater cleanrooms with laminar air flow, Isolated Power Systems (IPS) for operating rooms, and radiation lead shielding.",
      "We transform raw architectural spaces into sterile, energy-efficient, and clinically resilient healthcare facilities with zero downtime tolerance."
    ],
    stats: [
      { value: "50+", label: "Hospital Projects Engineered" },
      { value: "100%", label: "HTM 02-01 / NFPA 99 Compliance" },
      { value: "120+", label: "Modular OTs Commissioned" },
      { value: "Zero", label: "Critical Downtime Record" },
    ],
    keyPillars: [
      {
        title: "Medical Gas Pipeline Systems (MGPS)",
        desc: "Turnkey vacuum plants, medical air compressor skids, oxygen manifolds, AGSS, and digital area alarm panels complying with HTM 02-01.",
        icon: Activity,
      },
      {
        title: "Modular Cleanroom Operating Theaters",
        desc: "Seamless antibacterial wall panels (HPL/Stainless Steel), hermetically sealed sliding doors, and ceiling laminar air flow plenums.",
        icon: Layers,
      },
      {
        title: "Isolated Power Systems (IPS / UPS)",
        desc: "Medical-grade Isolated Power Panels with Line Isolation Monitors (LIM) preventing micro-shocks and electrical outages during surgeries.",
        icon: Zap,
      },
      {
        title: "Hospital HVAC & Pressure Isolation",
        desc: "Hygienic Air Handling Units (AHUs) with multi-stage HEPA filtration, positive pressure operating rooms, and negative pressure isolation suites.",
        icon: Wrench,
      },
      {
        title: "Radiation & RF MRI Shielding",
        desc: "Precision lead lining (lead sheets, lead glass, lead doors) for CT/X-Ray suites and full copper Faraday cage shielding for MRI suites.",
        icon: ShieldCheck,
      },
      {
        title: "Central Sterile Services Department (CSSD)",
        desc: "Design and equipment fitting for CSSD workflows: double-door pass-through steam autoclaves, plasma sterilizers, and washer-disinfectors.",
        icon: CheckCircle2,
      },
    ],
    scopeOfServices: [
      "HTM 02-01 & NFPA 99 Medical Gas Pipeline Systems (MGPS)",
      "Modular Antibacterial Operating Theaters & Laminar Flow Plenums",
      "Hospital Cleanroom HVAC & Negative Pressure Isolation Rooms",
      "Medical Isolated Power Systems (IPS) & Uninterruptible UPS Units",
      "Lead-Lined Radiation Shielding & MRI RF Shielding Enclosures",
      "Central Sterile Services Department (CSSD) Layout & Equipment",
      "IP-Based Digital Nurse Call & Emergency Code-Blue Systems",
      "Hospital Biomedical Wastewater & Effluent Treatment Plants (ETP)",
    ],
    workflow: [
      { step: "01", title: "Architectural & MEP Survey", desc: "Detailed site survey, structural load calculations, and BIM 3D piping design." },
      { step: "02", title: "Fabrication & Procurement", desc: "Manufacturing modular panels and sourcing certified degreased medical copper pipes." },
      { step: "03", title: "On-Site Installation", desc: "Specialized engineering teams execute clean welding, pipe laying, and panel mounting." },
      { step: "04", title: "Pressure Testing & Handover", desc: "Multi-stage pressure decay tests, gas purity testing, and formal compliance certification." },
    ],
    benefits: [
      "Full compliance with British HTM 02-01 and American NFPA 99 standards",
      "Single-source turnkey accountability eliminating contractor coordination disputes",
      "Medical-grade copper piping preventing dangerous gas contamination and leaks",
      "Uninterrupted electrical safety preventing micro-shocks during critical operations",
      "Complete validation test reports and digital schematics handed over at completion",
    ],
    industries: [
      "Government Healthcare Ministries & Public Works",
      "Private Multi-Specialty Tertiary Hospitals",
      "Military Healthcare & Field Surgical Units",
      "Specialized Cardiac & Cancer Treatment Institutes",
      "Ambulatory & Day Care Surgical Centers",
    ],
    faqs: [
      {
        q: "What standards do your medical gas systems comply with?",
        a: "Our MGPS installations adhere strictly to British HTM 02-01, HTM 2022, and US NFPA 99 standards using certified medical-grade degreased copper piping."
      },
      {
        q: "Can you retrofit existing hospital buildings with new MEP systems?",
        a: "Yes, we specialize in both greenfield hospital projects and live brownfield hospital upgrades without disrupting daily clinical care."
      },
      {
        q: "Do you supply testing and validation certificates upon completion?",
        a: "Yes, complete third-party validation reports, gas purity test results, and electrical isolation certificates are handed over with full documentation."
      }
    ]
  },
  {
    slug: "turnkey-healthcare-projects",
    number: "15",
    title: "Turnkey Healthcare Projects",
    eyebrow: "END-TO-END HOSPITAL PLANNING, ENGINEERING & COMMISSIONING",
    tagline: "From concept master planning and MEP infrastructure to equipment installation and clinical commissioning — complete hospital delivery.",
    badge: "Turnkey Project Delivery",
    icon: Award,
    image: "/project-infrastructure.png",
    overview: [
      "Executing a new hospital or healthcare expansion is one of the most demanding capital endeavors. ROYS & ROYS International delivers complete turnkey healthcare project delivery from initial feasibility concept to clinical commissioning and accreditation.",
      "We act as the single-point Master Contractor, integrating architectural design, specialized MEP hospital engineering, medical equipment procurement, modular operating theaters, hospital furniture, and IT infrastructure.",
      "Our turnkey methodology eliminates vendor friction, compresses construction timelines, ensures regulatory compliance, and delivers world-class medical facilities ready for patient care from day one."
    ],
    stats: [
      { value: "25+", label: "Turnkey Hospitals Delivered" },
      { value: "30%", label: "Faster Project Delivery" },
      { value: "100%", label: "On-Budget Project Record" },
      { value: "JCI / ISO", label: "Accreditation Ready Handover" },
    ],
    keyPillars: [
      {
        title: "Feasibility & Hospital Master Planning",
        desc: "Demographic need assessments, bed-capacity modeling, clinical departmental zoning, and 3D BIM architectural layout schematics.",
        icon: Building2,
      },
      {
        title: "Specialized Hospital MEP Engineering",
        desc: "Turnkey Medical Gas Pipelines (MGPS), cleanroom HVAC, Isolated Power Systems (IPS), radiation shielding, and backup generation.",
        icon: Wrench,
      },
      {
        title: "Medical Equipment Sourcing & Installation",
        desc: "Comprehensive equipment package delivery: MRI, CT, X-Ray, ultrasound, ICU ventilators, anesthesia workstations, and surgical lights.",
        icon: HeartPulse,
      },
      {
        title: "Complete Hospital Room Furnishing",
        desc: "Furnishing all patient rooms, ICUs, emergency departments, and nurse stations with electric beds, furniture, and medical cabinetry.",
        icon: Layers,
      },
      {
        title: "Hospital IT, PACS & Nurse Call",
        desc: "Enterprise Hospital Information Systems (HIS), PACS diagnostic imaging networks, IP nurse call, and digital telemetry infrastructure.",
        icon: Cpu,
      },
      {
        title: "Clinical Staff Training & Commissioning",
        desc: "Hands-on operational training for doctors, nurses, and biomedical technicians, followed by clinical commissioning and trial runs.",
        icon: Award,
      },
    ],
    scopeOfServices: [
      "Turnkey Greenfield & Brownfield Hospital Project Execution",
      "Architectural Space Planning & 3D BIM MEP Engineering",
      "Complete Diagnostic Imaging & Critical Care Equipment Packages",
      "Medical Gas Pipeline Systems (MGPS) & Central Plants",
      "Modular Surgical Theaters & Cleanroom HVAC Suites",
      "Full Hospital Ward & ICU Furniture and Interior Furnishing",
      "Hospital Information System (HIS) & PACS Integration",
      "Clinical Handover, Staff Training & JCI Accreditation Support",
    ],
    workflow: [
      { step: "01", title: "Conceptual Master Plan", desc: "Developing clinical space layouts, equipment lists, and milestone construction schedules." },
      { step: "02", title: "Engineering & Sourcing", desc: "Executing MEP infrastructure while consolidating global medical equipment orders." },
      { step: "03", title: "Installation & Fit-Out", desc: "Deploying site engineers for equipment installation, calibration, and room furnishing." },
      { step: "04", title: "Commissioning & Handover", desc: "Conducting joint validation testing, staff training, and official operational handover." },
    ],
    benefits: [
      "Single-point accountability eliminating contractor disputes and delays",
      "Guaranteed on-time and on-budget hospital delivery with fixed-price contracts",
      "Access to extensive economies of scale across equipment and MEP procurement",
      "Full compliance with international hospital safety standards (HTM, NFPA, JCI)",
      "Ready-to-operate facility handover with trained staff and warranty support",
    ],
    industries: [
      "Government Health Authorities & Infrastructure Ministries",
      "Private Hospital Groups & Healthcare Investors",
      "Military Healthcare Commands & Field Hospitals",
      "University Medical Campuses & Teaching Hospitals",
      "Philanthropic & Trust-Funded Hospital Foundations",
    ],
    faqs: [
      {
        q: "What bed capacities can you handle for turnkey hospital projects?",
        a: "We execute turnkey projects ranging from 50-bed specialized surgical centers to 500+ bed multi-specialty tertiary teaching hospitals."
      },
      {
        q: "How does turnkey project delivery save time and money compared to multi-vendor contracting?",
        a: "By acting as the single master contractor, we eliminate coordination gaps between construction, MEP engineers, and medical equipment vendors, typically shortening project timelines by 30% and reducing procurement overhead."
      },
      {
        q: "Do you provide after-sales maintenance and biomedical support after hospital handover?",
        a: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC/CMC), on-site resident biomedical engineering teams, and 24/7 technical emergency response."
      }
    ]
  },
];

export function getOfferingBySlug(slug) {
  return OFFERINGS_LIST.find((item) => item.slug === slug);
}

export function getAllOfferingSlugs() {
  return OFFERINGS_LIST.map((item) => item.slug);
}
