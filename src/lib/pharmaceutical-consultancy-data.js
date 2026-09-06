/**
 * ROYSONS Pharmaceutical Consultancy Data Architecture
 * Strategic, Regulatory & Quality Solutions for Pharmaceutical Excellence
 */

import {
  Building2,
  Globe,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Settings,
  TrendingUp,
  BookOpen,
  Wind,
  Layers,
  BarChart2,
  Lightbulb,
  FlaskConical,
  Microscope,
  Stethoscope,
  Users,
  Award,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Factory,
  Shield,
  Clock,
  Compass,
} from "lucide-react";

export const METRICS = [
  { value: "15+", label: "Years of Advisory Expertise" },
  { value: "200+", label: "Regulated Projects Supported" },
  { value: "50+", label: "Regulatory Submissions & Approvals" },
  { value: "100%", label: "GMP & Compliance Orientation" },
];

export const SECONDARY_METRICS = [
  { value: "12", label: "Core Technical Capabilities" },
  { value: "8+", label: "International Standards Covered" },
  { value: "22+", label: "Specialized Facility Zones" },
  { value: "100%", label: "Audit Defense Track Record" },
];

export const HERO_SLIDES = [
  {
    image: "/images/pharma/cleanroom-facility.jpg",
    tag: "GMP & Facility Compliance",
    title: "End-to-End Architectural Planning & ISO Clean Room Engineering",
  },
  {
    image: "/images/pharma/qc-laboratory.jpg",
    tag: "Analytical & Quality Systems",
    title: "High-Performance Testing Laboratories, STPs & Method Validation",
  },
  {
    image: "/images/pharma/hvac-mechanical.jpg",
    tag: "Environmental HVAC Control",
    title: "Differential Pressure Cascades, HEPA Filtration & Air Handling Units",
  },
  {
    image: "/pakmedical-card1.png",
    tag: "Regulatory Advisory",
    title: "WHO-GMP, DRAP, FDA, EMA & ICH Market Authorization Roadmaps",
  },
];

export const REGULATORY_FRAMEWORKS = [
  {
    code: "WHO-GMP",
    name: "World Health Organization GMP",
    category: "Global Manufacturing Standards",
    scope: "Good Manufacturing Practices for biological and pharmaceutical medicinal products.",
    application: "Facility design, cross-contamination control, sanitation, and validation systems.",
  },
  {
    code: "cGMP",
    name: "Current Good Manufacturing Practice",
    category: "Operational & Quality Standards",
    scope: "21 CFR Parts 210 & 211 dynamic quality standards for pharmaceutical operations.",
    application: "Batch control, testing records, stability protocols, and equipment qualification.",
  },
  {
    code: "DRAP",
    name: "Drug Regulatory Authority of Pakistan",
    category: "National Regulatory Licensing",
    scope: "National statutory regulations under the Drug Act 1976 and DRAP Act 2012.",
    application: "Manufacturing site licensing, product registration dossiers, and inspection readiness.",
  },
  {
    code: "FDA",
    name: "US Food & Drug Administration",
    category: "International Market Authorization",
    scope: "Stringent regulatory framework for pharmaceutical facilities entering US markets.",
    application: "Data integrity, computerized system validation (21 CFR Part 11), and cGMP audits.",
  },
  {
    code: "EMA",
    name: "European Medicines Agency",
    category: "EU Annex 1 & GMP EudraLex",
    scope: "European regulatory standards with emphasis on sterile manufacturing and Annex 1 compliance.",
    application: "Contamination Control Strategy (CCS), aseptic processing, and EU Qualified Person audits.",
  },
  {
    code: "ICH",
    name: "International Council for Harmonisation",
    category: "Global Regulatory Convergence",
    scope: "Harmonized technical guidelines covering Quality (Q), Safety (S), Efficacy (E), and Multidisciplinary (M).",
    application: "Standardized technical specifications, stability testing (Q1), and analytical validation (Q2).",
  },
  {
    code: "ICH Q10",
    name: "Pharmaceutical Quality System",
    category: "Modern Lifecycle Quality Model",
    scope: "Comprehensive model for an effective pharmaceutical quality management system.",
    application: "Management commitment, process performance monitoring, CAPA, and change management.",
  },
  {
    code: "ISO 14644",
    name: "Cleanrooms & Controlled Environments",
    category: "Air Cleanliness & Environmental Control",
    scope: "International standards for airborne particulate cleanliness classes ISO 1 to ISO 9.",
    application: "Clean room classification, particle count verification, airflow modeling, and filter integrity.",
  },
];

export const STRATEGIC_OBJECTIVES = [
  {
    title: "Technically Appropriate",
    desc: "Engineered specifically to match exact product formulation attributes, cleanroom classes, and operational realities.",
    icon: Settings,
  },
  {
    title: "Operationally Efficient",
    desc: "Streamlined material and personnel corridors that eliminate waste, bottlenecks, and redundant process steps.",
    icon: TrendingUp,
  },
  {
    title: "Quality Focused",
    desc: "Deeply entrenched culture of pharmaceutical quality where testing, integrity, and safety govern every routine.",
    icon: ShieldCheck,
  },
  {
    title: "Inspection Ready",
    desc: "Institutional preparedness for unannounced audits, regulator visits, and rigorous international scrutiny.",
    icon: ClipboardCheck,
  },
  {
    title: "Documentation Driven",
    desc: "Verifiable, traceable, and controlled document hierarchies that provide undisputed proof of compliance.",
    icon: FileText,
  },
  {
    title: "Risk Based",
    desc: "ICH Q9 risk management embedded into facility design, deviation assessments, and critical control points.",
    icon: Shield,
  },
  {
    title: "Scalable for Future Growth",
    desc: "Modular master plans structured to accommodate future cleanroom expansion, new product lines, and utility upgrades.",
    icon: Building2,
  },
  {
    title: "Regulatory Aligned",
    desc: "Designed and organized in direct compliance with DRAP, WHO-GMP, FDA, EMA, and ICH directives from day one.",
    icon: Award,
  },
];

export const CAPABILITIES = [
  {
    id: "facility-planning",
    number: "01",
    title: "Pharmaceutical Facility Planning",
    tagline: "Designing Pharmaceutical Facilities Around Process, Compliance & Growth",
    icon: Building2,
    image: "/images/pharma/cleanroom-facility.jpg",
    lead: "ROYSONS supports pharmaceutical organizations during the planning and development of new facilities as well as expansion, modernization, and reconfiguration of existing operations.",
    details:
      "The objective is to develop a facility in which people, materials, products, equipment, and utilities move through controlled workflows while minimizing contamination and operational risks. Layouts, zone classifications, GMP-oriented architectural planning, and utility integration are engineered in unison.",
    items: [
      "Pharmaceutical facility concept development",
      "Site and facility requirement assessment",
      "Production-area planning & footprint optimization",
      "GMP-compliant architectural planning",
      "Manufacturing-area zoning & pressure boundaries",
      "Personnel-flow planning & change room sequences",
      "Material-flow & raw-material receiving routes",
      "Waste-flow & biohazard segregation planning",
      "Clean and dirty-area barrier segregation",
      "Controlled-area classification (Grades A-D, ISO 5-8)",
      "Warehouse & high-density staging planning",
      "Quality-control laboratory spatial planning",
      "Utility-area & mechanical room planning",
      "Equipment-placement planning & maintenance corridors",
      "Production workflow optimization & lean layout",
      "Modular expansion planning for future capacity",
      "Engineering coordination (Civil, MEP, Clean Room)",
      "Utility-system integration & clean piping raceways",
    ],
  },
  {
    id: "regulatory-consultancy",
    number: "02",
    title: "Regulatory Consultancy",
    tagline: "Navigating Complex Pharmaceutical Regulatory Requirements",
    icon: Globe,
    image: "/pakmedical-card2.png",
    lead: "ROYSONS provides regulatory advisory services to help organizations understand, prepare for, and maintain compliance with applicable pharmaceutical and healthcare regulatory mandates.",
    details:
      "Covering WHO-GMP, DRAP, FDA, EMA, and ICH frameworks, our role is to help clients organize the technical, quality, and documentary architectures required to support their strategic regulatory and market authorization objectives.",
    items: [
      "Regulatory strategy development for new entities",
      "Manufacturing-facility compliance planning",
      "Product-registration strategy & market pathways",
      "Market-authorization support across jurisdictions",
      "Regulatory-document review & technical gap auditing",
      "Dossier preparation support (CTD / eCTD format)",
      "Regulatory-gap identification & risk remediation",
      "Inspection preparation & pre-audit readiness",
      "Regulatory correspondence support with statutory bodies",
      "Licensing-document preparation & submission guidance",
      "Compliance roadmap development & milestone tracking",
      "Change-management regulatory impact assessment",
    ],
  },
  {
    id: "gmp-consultancy",
    number: "03",
    title: "GMP Consultancy",
    tagline: "Building Manufacturing Systems Around Good Manufacturing Practice",
    icon: ShieldCheck,
    image: "/pakmedical-card1.png",
    lead: "Good Manufacturing Practice is fundamental to pharmaceutical integrity. ROYSONS provides consultancy for organizations establishing, upgrading, or auditing GMP-oriented manufacturing operations.",
    details:
      "We identify compliance blind spots, execute targeted mock inspections, formulate corrective action plans (CAPA), and guide engineering and quality teams to achieve sustainable, cGMP-grade manufacturing standards.",
    items: [
      "GMP comprehensive gap analysis & site benchmarks",
      "Existing-facility technical compliance assessment",
      "cGMP implementation planning & project scheduling",
      "Departmental compliance review (Production, QA, QC, Eng)",
      "Production-process review & contamination hazards",
      "Quality-system assessment against global cGMP",
      "Facility layout & workflow contamination assessment",
      "Documentation system audit & lifecycle assessment",
      "Corrective-action planning (CAPA development)",
      "Remediation programs for regulatory observations",
      "Mock regulatory inspections simulating official audits",
      "Inspection-readiness assessments & stress tests",
      "GMP workforce training support & qualification",
      "Continuous compliance improvement plans",
    ],
  },
  {
    id: "quality-management-systems",
    number: "04",
    title: "Quality Management Systems",
    tagline: "Building a Strong Pharmaceutical Quality Culture",
    icon: ClipboardCheck,
    image: "/biomax_quality_lab.jpg",
    lead: "A pharmaceutical Quality Management System (QMS) provides the framework through which organizations control processes, investigate deviations, manage changes, and continuously ensure product safety.",
    details:
      "ROYSONS structures robust QMS architectures based on ICH Q10 principles, integrating data integrity, risk assessment, automated workflows, and continuous improvement into standard operational routines.",
    items: [
      "Quality-policy framework & executive commitment",
      "Site Quality Manuals & departmental charters",
      "CAPA (Corrective and Preventive Action) systems",
      "Change-control systems & regulatory review pathways",
      "Deviation management & root cause analysis (RCA)",
      "Quality risk management (ICH Q9 methodology)",
      "Customer complaint-management procedures",
      "Annual Product Quality Reviews (APQR / PQR)",
      "Internal-audit systems & self-inspection schedules",
      "Supplier-quality qualification & audit protocols",
      "Training-management systems & personnel competency",
      "Document control & data integrity governance",
      "Executive management review protocols",
      "Quality metrics & operational KPIs",
      "Continual process improvement programs",
    ],
  },
  {
    id: "documentation-sop",
    number: "05",
    title: "Documentation & SOP Development",
    tagline: "Documentation That Supports Consistency, Compliance & Traceability",
    icon: FileText,
    image: "/pakmedical-about.png",
    lead: "Pharmaceutical operations require highly controlled documentation covering manufacturing, QA, QC laboratories, engineering, warehouses, and maintenance.",
    details:
      "ROYSONS develops comprehensive, audit-tested documentation systems that meet WHO, DRAP, and cGMP standards, ensuring every procedure is unambiguous, repeatable, and completely traceable.",
    items: [
      "Standard Operating Procedures (SOPs) across departments",
      "Batch Manufacturing Records (BMR) formulation",
      "Batch Packaging Records (BPR) development",
      "Master Formula Records (MFR) structuring",
      "Finished product & raw material specifications",
      "Validation protocols & execution reports",
      "Qualification protocols (DQ, IQ, OQ, PQ)",
      "Step-by-step equipment work instructions",
      "Equipment-operation standard procedures",
      "Validated cleaning procedures & sanitation logs",
      "Preventive maintenance procedures & schedules",
      "Instrument calibration procedures & tolerance logs",
      "Environmental-monitoring procedures & alert limits",
      "Deviation report forms & investigation logs",
      "CAPA tracking documentation & closeout files",
      "Change-control documentation & impact templates",
      "Training records, competency logs & assessments",
      "Area, equipment & cleanroom logbooks",
      "Quality Manuals & Site Master Files (SMF)",
      "Documentation lifecycle management & archiving",
    ],
  },
  {
    id: "validation-qualification",
    number: "06",
    title: "Validation & Qualification",
    tagline: "Demonstrating That Systems Perform Consistently as Intended",
    icon: Settings,
    image: "/images/pharma/qc-laboratory.jpg",
    lead: "ROYSONS delivers complete validation and qualification consultancy for pharmaceutical equipment, utilities, processes, clean rooms, and computerized systems.",
    details:
      "We orchestrate qualification across all standard stages—Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ)—aligned with international standards.",
    stages: [
      {
        short: "DQ",
        name: "Design Qualification",
        desc: "Documented verification that the proposed design of facilities, systems, and equipment is suitable for the intended purpose and meets defined user requirement specifications (URS).",
      },
      {
        short: "IQ",
        name: "Installation Qualification",
        desc: "Documented verification that premises, utilities, and equipment have been built, installed, and connected in accordance with design specifications and manufacturer recommendations.",
      },
      {
        short: "OQ",
        name: "Operational Qualification",
        desc: "Documented verification that systems and equipment operate correctly throughout all specified operating ranges, challenge conditions, and safety interlocks.",
      },
      {
        short: "PQ",
        name: "Performance Qualification",
        desc: "Documented verification that systems and equipment consistently perform effectively and reproducibly under actual production conditions with representative process materials.",
      },
    ],
    items: [
      "Manufacturing process equipment qualification",
      "HVAC system airflow & HEPA filter qualification",
      "Purified water (PW) & Water-for-Injection (WFI) systems",
      "Clean utilities (Clean Steam, Compressed Air, Nitrogen)",
      "Clean rooms & controlled environment validation",
      "Commercial production process validation (PPQ)",
      "Cleaning validation & cross-contamination residues",
      "Analytical & quality-control laboratory equipment",
      "Computerized systems (CSV / GAMP 5 / 21 CFR Part 11)",
      "Environmental-control & facility monitoring systems",
    ],
  },
  {
    id: "process-improvement",
    number: "07",
    title: "Process Improvement",
    tagline: "Improving Efficiency Without Compromising Quality",
    icon: TrendingUp,
    image: "/pakmedical-card4.png",
    lead: "ROYSONS supports pharmaceutical manufacturers seeking to improve productivity, reduce cycle times, and maximize yield while safeguarding rigorous compliance.",
    details:
      "Applying Lean Manufacturing, Six Sigma, and Continuous Improvement principles specifically calibrated for regulated pharmaceutical environments, we eliminate operational waste without altering validated boundaries.",
    items: [
      "Manufacturing workflow analysis & value stream mapping",
      "Process bottleneck identification & capacity balancing",
      "Batch cycle-time improvement & changeover reduction",
      "Yield optimization & raw material waste reduction",
      "Production-efficiency benchmarking & overall equipment effectiveness (OEE)",
      "Root-cause analysis (RCA) for recurrent variances",
      "Quality-process optimization & deviation cycle time",
      "Resource-utilization improvement across shifts",
      "Standard work instructions & procedural standardization",
      "Continuous-improvement programs (Kaizen / Gemba)",
      "Operational KPI dashboards & telemetry metrics",
    ],
  },
  {
    id: "regulatory-licensing",
    number: "08",
    title: "Regulatory Licensing Support",
    tagline: "Supporting Regulatory Submissions & Inspection Readiness",
    icon: BookOpen,
    image: "/pakmedical-card5.png",
    lead: "ROYSONS provides specialized consultancy for organizations compiling statutory regulatory submissions, facility dossiers, and pre-inspection audit packages.",
    details:
      "We prepare comprehensive licensing documentation, assemble Site Master Files, and formulate post-audit regulatory responses to facilitate licensing and official manufacturing authorizations.",
    items: [
      "Regulatory dossier compilation (CTD / eCTD modules)",
      "Pre-submission dossier technical review & audit",
      "Site Master File (SMF) drafting & compliant structuring",
      "Manufacturing-site statutory documentation packages",
      "Licensing-document compilation for DRAP & ministries",
      "Regulatory submission coordination & liaison support",
      "Inspection-document preparation & war-room setups",
      "Pre-inspection facility assessments & mock drills",
      "Statutory audit preparation & staff coaching",
      "Regulatory observation response planning (CAPA submission)",
      "Document-gap analysis against statutory checklists",
    ],
  },
  {
    id: "hvac-consultancy",
    number: "09",
    title: "Pharmaceutical HVAC Consultancy",
    tagline: "Environmental Control for Pharmaceutical Manufacturing",
    icon: Wind,
    image: "/images/pharma/hvac-mechanical.jpg",
    lead: "HVAC systems are the engineering backbone of pharmaceutical manufacturing, directly controlling temperature, humidity, pressure relationships, and air cleanliness.",
    details:
      "ROYSONS delivers comprehensive HVAC consultancy covering technical design review, air handling strategy, air change calculations, differential pressure cascades, and full environmental qualification.",
    criticalParameters: [
      "Temperature Control",
      "Relative Humidity (RH)",
      "Air Cleanliness & Filtration",
      "Pressure Relationships (Cascades)",
      "Airflow Velocities & Patterns",
      "Particulate Containment",
      "Cross-Contamination Barrier",
    ],
    items: [
      "HVAC mechanical design review & load calculations",
      "Air-handling unit (AHU) strategy & zoning concepts",
      "Air-change rate calculations (ACH) per room volume",
      "Differential-pressure mapping & cascade diagrams",
      "Clean-room airflow velocity review & smoke pattern studies",
      "Temperature requirement zoning & tolerance control",
      "Relative-humidity (RH) psychrometric calculations",
      "Air-distribution & diffusers/return-grille engineering",
      "Multi-stage filtration strategy (Pre, Medium, HEPA H14)",
      "Positive & negative pressure bubble/sink airlocks",
      "HVAC qualification support (DQ, IQ, OQ testing protocols)",
      "Environmental-control & building management system (BMS) review",
    ],
  },
  {
    id: "clean-room-consultancy",
    number: "10",
    title: "Clean Room Consultancy",
    tagline: "Controlled Environments for Pharmaceutical & Biotechnology Operations",
    icon: Layers,
    image: "/roys_operation_theatre.png",
    lead: "ROYSONS provides advisory services for pharmaceutical clean rooms, controlled production environments, and high-containment bioclean zones.",
    details:
      "From ISO 14644 classification strategy to Contamination Control Strategy (CCS) in compliance with EU GMP Annex 1, we ensure cleanroom envelopes operate with uncompromised integrity.",
    items: [
      "Clean-room classification strategy (ISO Classes 5 to 8 / Grades A-D)",
      "Clean-room spatial zoning & segregation boundaries",
      "ISO 14644 standards advisory & compliance audits",
      "Contamination Control Strategy (CCS) formulation",
      "Personnel-flow planning & interlocked airlock sequences",
      "Material-flow planning & pass-box containment design",
      "Airlock strategy (Cascading, Bubble, Sink regimes)",
      "Pressure-cascade planning & room-differential mapping",
      "Environmental-monitoring (EM) program structuring",
      "Viable & non-viable particle-control protocols",
      "Cleaning, sanitization & disinfectant rotation strategies",
      "Clean-room qualification & validation protocols",
      "Operational clean-room gowning & conduct procedures",
    ],
  },
  {
    id: "feasibility-studies",
    number: "11",
    title: "Project Feasibility Studies",
    tagline: "Making Informed Investment Decisions Before Project Execution",
    icon: BarChart2,
    image: "/roys_hospital_interior.png",
    lead: "Before committing capital to pharmaceutical manufacturing or expansion, investors and organizations must evaluate technical, operational, and commercial viability.",
    details:
      "ROYSONS conducts rigorous feasibility studies for both Greenfield (new site development) and Brownfield (expansion or modernization) initiatives, ensuring informed, risk-mitigated investment decisions.",
    projectTypes: [
      {
        type: "Greenfield Projects",
        desc: "Development of entirely new pharmaceutical production facilities, site selection, master planning, and full infrastructure build-outs from the ground up.",
      },
      {
        type: "Brownfield Projects",
        desc: "Expansion, reconfiguration, modernization, or compliance upgrading of existing operating manufacturing facilities and cleanroom envelopes.",
      },
    ],
    items: [
      "Project concept validation & market demand alignment",
      "Proposed product portfolio review (OSD, Liquids, Injectables)",
      "Production capacity modeling & batch sizing calculations",
      "Site selection criteria & environmental impact factors",
      "Facility footprint & spatial area requirements",
      "Process equipment selection & capacity matching",
      "Clean utility sizing (PW, WFI, Steam, Power, Water)",
      "Clean-room envelope requirements & classification costs",
      "Technology evaluation & automated line feasibility",
      "Regulatory licensing pathways & compliance considerations",
      "Capital expenditure (CapEx) estimation & budget phasing",
      "Operating expenditure (OpEx) forecasting & utility loads",
      "Technical risk assessment & mitigation matrix",
      "Modular expansion potential for Phase II/III growth",
      "Commercial viability & financial return projections",
    ],
  },
  {
    id: "technical-advisory",
    number: "12",
    title: "Technical Advisory",
    tagline: "From Technology Selection to Commercial Manufacturing",
    icon: Lightbulb,
    image: "/biomax_biotech_solutions_ai.jpg",
    lead: "ROYSONS provides specialized technical advisory to organizations introducing new molecules, scaling up production, or integrating advanced manufacturing technologies.",
    details:
      "Covering technology transfer, formulation development coordination, and pilot-to-commercial scale-up, our senior technical advisors ensure smooth transitions into commercial manufacturing.",
    items: [
      "Advanced manufacturing technology evaluation",
      "Manufacturing-process review & critical parameters (CPPs)",
      "Equipment-selection strategy & supplier technical auditing",
      "Production-process development & formulation harmonization",
      "Technology transfer planning (lab to pilot, pilot to commercial)",
      "Formulation-development coordination & stability trials",
      "Pilot-to-commercial manufacturing scale-up protocols",
      "Process optimization & critical quality attributes (CQAs)",
      "Technical troubleshooting of manufacturing deviations",
      "Manufacturing-readiness audit before commercial launch",
      "Documentation transfer (BMRs, specifications, analytical methods)",
      "Long-term production-capacity & line utilization planning",
    ],
  },
];

export const QUALITY_COMPLIANCE_PILLARS = [
  {
    title: "WHO-GMP & cGMP Implementation",
    desc: "Comprehensive support for establishing manufacturing, quality, documentation, and operational systems aligned with applicable Good Manufacturing Practice requirements.",
    badge: "Core Framework",
  },
  {
    title: "DRAP Regulatory Support",
    desc: "Specialized consultancy related to Pakistan's pharmaceutical regulatory environment, licensing processes, site inspections, and registration dossiers.",
    badge: "National Authority",
  },
  {
    title: "FDA & EMA Regulatory Support",
    desc: "Advisory support for organizations designing facilities, validating systems, and organizing documentation relevant to regulated international export markets.",
    badge: "Global Markets",
  },
  {
    title: "ICH Q10 Pharmaceutical Quality Systems",
    desc: "Structured quality system development centered on lifecycle management, executive management responsibility, process performance, and continual improvement.",
    badge: "Quality Model",
  },
  {
    title: "Risk-Based Quality Management",
    desc: "Systematic identification, assessment, control, communication, and review of quality and contamination risks in accordance with ICH Q9 guidelines.",
    badge: "ICH Q9 Standard",
  },
  {
    title: "Contamination Control Strategy (CCS)",
    desc: "A coordinated, site-wide strategy designed to identify, assess, and manage microbial, particulate, and cross-contamination risks across all clean environments.",
    badge: "EU Annex 1 Focus",
  },
  {
    title: "Audit Readiness & Inspection Preparation",
    desc: "Comprehensive preparation of personnel, systems, facility conditions, and documentation for unannounced statutory audits and regulatory inspections.",
    badge: "War-Room Drills",
  },
];

export const DOCUMENTATION_PORTFOLIO = [
  {
    title: "Facility & Regulatory Documentation",
    desc: "Foundational institutional documentation required by statutory authorities and licensing boards.",
    deliverables: [
      "Site Master Files (SMF)",
      "Regulatory dossiers (CTD / eCTD)",
      "Facility descriptions & equipment registers",
      "Organizational charts & key personnel profiles",
      "Licensing-support documentation packages",
      "Site environmental assessments",
    ],
  },
  {
    title: "Quality Documentation",
    desc: "Procedural systems and governance frameworks that define the pharmaceutical quality culture.",
    deliverables: [
      "Site Quality Manuals & corporate policies",
      "Standard Operating Procedures (SOPs)",
      "CAPA management procedures & tracking forms",
      "Deviation & out-of-specification (OOS) procedures",
      "Change-control systems & risk assessments",
      "Product Quality Reviews (PQR / APQR)",
    ],
  },
  {
    title: "Manufacturing Documentation",
    desc: "Controlled batch directives and formulas governing shop-floor production routines.",
    deliverables: [
      "Master Formula Records (MFR)",
      "Batch Manufacturing Records (BMR)",
      "Batch Packaging Records (BPR)",
      "Standard production work instructions",
      "Material dispensing records",
      "In-process control (IPC) protocols",
    ],
  },
  {
    title: "Validation Documentation",
    desc: "Formal protocols, test reports, and master plans demonstrating consistent operational performance.",
    deliverables: [
      "Validation Master Plans (VMP)",
      "Design Qualification (DQ) protocols & reports",
      "Installation Qualification (IQ) protocols & reports",
      "Operational Qualification (OQ) protocols & reports",
      "Performance Qualification (PQ) protocols & reports",
      "Cleaning validation & process validation reports",
    ],
  },
  {
    title: "Engineering Documentation",
    desc: "Detailed technical specifications, utility load calculations, and MEP maintenance directives.",
    deliverables: [
      "User Requirement Specifications (URS)",
      "Equipment functional design specifications",
      "HVAC differential pressure diagrams & load sheets",
      "Clean piping & utility P&IDs",
      "Preventive maintenance procedures & logs",
      "Equipment calibration schedules & records",
    ],
  },
  {
    title: "Laboratory Documentation",
    desc: "Analytical methodologies, sampling protocols, and specifications governing QC release.",
    deliverables: [
      "Raw material, excipient & API specifications",
      "Finished product release specifications",
      "Standard testing procedures (STPs)",
      "Analytical method validation protocols",
      "Laboratory equipment qualification records",
      "Stability testing protocols & summary reports",
    ],
  },
];

export const FACILITY_AREAS = [
  {
    category: "Warehousing & Material Staging",
    zones: [
      "Raw-material warehouses (temperature-controlled)",
      "Packaging-material warehouses",
      "Finished-goods warehouses (air-conditioned / ambient)",
      "Dispensing areas with laminar downflow booths",
      "Controlled storage areas (cold rooms 2–8°C / -20°C)",
      "Sampling booths with HEPA filtration",
    ],
  },
  {
    category: "Production & Formulation Suites",
    zones: [
      "Oral Solid Dosage (OSD) facilities (Granulation, Compression, Coating)",
      "Liquid manufacturing departments (Syrups, Suspensions, Solutions)",
      "Semi-solid manufacturing (Creams, Ointments, Gels)",
      "Packaging departments (Blister packing, Strip, Bottling, Cartoning)",
    ],
  },
  {
    category: "Sterile & High-Containment Areas",
    zones: [
      "Sterile manufacturing suites (Grade A / B bioclean zones)",
      "Aseptic processing & formulation rooms",
      "Injectable manufacturing (Ampoules, Vials, LVP, SVP)",
      "Personnel airlocks (PAL) with step-over benches & interlocking",
      "Material airlocks (MAL) with dynamic HEPA purging",
    ],
  },
  {
    category: "Laboratories & Quality Infrastructure",
    zones: [
      "Quality Control (QC) analytical laboratories (HPLC, GC, Spectro)",
      "Microbiology laboratories with sterility testing isolators",
      "Quality Assurance (QA) administrative departments",
      "Research & Development (R&D) formulation laboratories",
      "Accelerated & real-time stability testing chambers",
    ],
  },
  {
    category: "Utilities & Engineering Plants",
    zones: [
      "Dedicated pharmaceutical HVAC plant rooms & AHU mezzanines",
      "Purified Water (PW) & Water-for-Injection (WFI) generation loops",
      "Clean Steam generation & compressed air distribution stations",
      "General utility areas (Boilers, Chillers, Gensets, Waste Treatment)",
    ],
  },
];

export const PROJECT_LIFECYCLE = [
  {
    step: "01",
    phase: "Initial Assessment",
    focus: "Understanding the Project Baseline",
    details:
      "Deep dive into the client's business objectives, target product portfolio, intended regulatory markets (domestic vs export), production capacity expectations, existing infrastructure, and project constraints.",
  },
  {
    step: "02",
    phase: "Feasibility & Regulatory Strategy",
    focus: "Technical & Commercial Viability",
    details:
      "Evaluating technical feasibility, site selection criteria, capital expenditure requirements, applicable statutory regulations, licensing pathways, facility footprint, and cleanroom technology choices.",
  },
  {
    step: "03",
    phase: "Facility & Process Planning",
    focus: "GMP Architectural & MEP Engineering",
    details:
      "Development of compliant facility layouts, room zoning, personnel and material flow segregation, cleanroom envelopes, HVAC pressure cascades, and process equipment layouts.",
  },
  {
    step: "04",
    phase: "Quality-System Development",
    focus: "Documentation & Quality Architecture",
    details:
      "Authoring the Site Quality Manual, creating standard operating procedures (SOPs), batch records (BMR/BPR), CAPA frameworks, change-control protocols, and comprehensive risk management plans.",
  },
  {
    step: "05",
    phase: "Installation & Qualification Support",
    focus: "Commissioning & Verification",
    details:
      "Coordinating equipment installation, cleanroom envelope integrity testing, HVAC balancing, and execution of Design (DQ), Installation (IQ), Operational (OQ), and Performance (PQ) Qualification protocols.",
  },
  {
    step: "06",
    phase: "Regulatory & Inspection Readiness",
    focus: "Audits & Official Licensing",
    details:
      "Assembling the Site Master File, preparing regulatory dossiers, conducting rigorous mock inspections, coaching key personnel, and organizing inspection war-rooms for statutory audit success.",
  },
  {
    step: "07",
    phase: "Operational Improvement",
    focus: "Commercial Manufacturing & Optimization",
    details:
      "Post-startup technical support, technology transfer, process optimization, manufacturing scale-up, Lean waste elimination, and ongoing strengthening of the quality management system.",
  },
];

export const WHO_WE_SERVE = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Manufacturers",
    image: "/images/pharma/cleanroom-facility.jpg",
    description:
      "Companies establishing, expanding, modernizing, or improving pharmaceutical production facilities, sterile suites, and quality compliance systems.",
  },
  {
    icon: Microscope,
    title: "Medical Device Companies",
    image: "/pakmedical-card3.png",
    description:
      "Manufacturers requiring controlled cleanroom environments, ISO 13485 quality systems, technical documentation, and statutory licensing advisory.",
  },
  {
    icon: ShieldCheck,
    title: "Biotechnology Organizations",
    image: "/biomax_biotech_solutions_ai.jpg",
    description:
      "Enterprises operating in biological production, bioprocessing, fermentation, recombinant proteins, and advanced sterile biological applications.",
  },
  {
    icon: ClipboardCheck,
    title: "Laboratories",
    image: "/images/pharma/qc-laboratory.jpg",
    description:
      "Quality control, analytical chemistry, microbiology testing, stability chambers, and specialized R&D pharmaceutical laboratory facilities.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Institutions",
    image: "/roys_hospital_interior.png",
    description:
      "Hospitals and clinical groups developing centralized compounding pharmacies, sterile injectable prep suites, or regulated radiopharmacy capabilities.",
  },
  {
    icon: Users,
    title: "Healthcare Investors & PE Groups",
    image: "/pakmedical-card5.png",
    description:
      "Investors and financial institutions evaluating technical feasibility, CapEx/OpEx, and regulatory risks for Greenfield and Brownfield pharmaceutical projects.",
  },
];

export const ADDITIONAL_ORGANIZATIONS = [
  "Pharmaceutical Startups & Spin-offs",
  "Contract Manufacturing Organizations (CMOs)",
  "Contract Research Organizations (CROs)",
  "Vaccine Manufacturers & Fill-Finish Facilities",
  "Nutraceutical Manufacturers Seeking GMP Upgrades",
  "Healthcare Investment Funds & Venture Capital",
  "Government Health Departments & Regulators",
  "Public-Sector Pharmaceutical Initiatives",
  "International Pharmaceutical Partner Consortia",
  "Pharmaceutical Equipment & Technology Providers",
];

export const PRODUCT_CATEGORIES = [
  {
    title: "Pharmaceuticals (Oral Solids & Liquids)",
    scope: "Tablets, capsules, syrups, suspensions, creams, and semi-solids.",
    details: "High-yield formulation lines, contamination-controlled granulating, compression, coating, and automated blister packaging.",
    icon: Factory,
    image: "/images/pharma/cleanroom-facility.jpg",
  },
  {
    title: "Sterile Manufacturing & Injectables",
    scope: "Ampoules, vials, lyophilized powders, eye drops, and infusions.",
    details: "Strict Grade A/B aseptic filling zones, isolator technology, terminal sterilization, and EU Annex 1 CCS compliance.",
    icon: ShieldCheck,
    image: "/roys_operation_theatre.png",
  },
  {
    title: "Biotechnology & Bioprocess",
    scope: "Biosimilars, recombinant proteins, monoclonal antibodies, and cell therapies.",
    details: "Bioreactor containment, downstream purification suites, ultrafiltration, and biosafety level (BSL-2/3) segregation.",
    icon: FlaskConical,
    image: "/biomax_biotech_solutions_ai.jpg",
  },
  {
    title: "Vaccines & Biologicals",
    scope: "Human & veterinary vaccines, live attenuated & inactivated formulations.",
    details: "Controlled viral/bacterial containment, cold chain storage (-80°C/LN2), formulation validation, and lot release advisory.",
    icon: Shield,
    image: "/vetvac_vaccines_ai.jpg",
  },
  {
    title: "Medical Devices & Diagnostics",
    scope: "Catheters, orthopedic implants, diagnostic test kits, and drug-device combos.",
    details: "Cleanroom packaging, bioburden testing protocols, cleanroom assembly suites, and ISO 13485 QMS frameworks.",
    icon: Microscope,
    image: "/pakmedical-card3.png",
  },
  {
    title: "Testing & Analytical Laboratories",
    scope: "Quality control, microbiology, analytical testing, and stability testing.",
    details: "Instrument qualification (IQ/OQ/PQ), chemical storage segregation, sterility test isolators, and GLP compliance.",
    icon: FileCheck,
    image: "/images/pharma/qc-laboratory.jpg",
  },
];

export const WHY_CHOOSE_ROYSONS = [
  {
    title: "Integrated Consultancy",
    desc: "Facility planning, cleanroom engineering, HVAC design, quality systems, documentation, and regulatory strategy coordinated seamlessly under a unified institutional platform.",
  },
  {
    title: "End-to-End Lifecycle Approach",
    desc: "We support clients from early-stage conceptual feasibility through construction, commissioning, qualification, licensing, inspection readiness, and commercial scale-up.",
  },
  {
    title: "Quality-Focused Delivery",
    desc: "Quality systems and compliance requirements are built into facility blueprints and process flows from day one, rather than retrofitted as an afterthought.",
  },
  {
    title: "Deep Regulatory Awareness",
    desc: "Structured around DRAP, WHO-GMP, FDA, EMA, and ICH requirements, translating complex statutory guidelines into clear, actionable engineering and operational steps.",
  },
  {
    title: "Multidisciplinary Engineering Expertise",
    desc: "Direct synergy with ROYSONS' institutional strengths in hospital engineering, clean rooms, specialized HVAC, civil infrastructure, and advanced healthcare technologies.",
  },
  {
    title: "Practical, Implementation-Driven Advice",
    desc: "We deliver real-world, actionable documentation, executable architectural layouts, and on-site engineering oversight that can be reliably constructed and licensed.",
  },
];

export const DELIVERABLES_CATALOG = [
  { category: "Feasibility & Strategy", item: "Comprehensive Greenfield & Brownfield Feasibility Reports" },
  { category: "Feasibility & Strategy", item: "Regulatory Compliance Roadmaps & Licensing Milestones" },
  { category: "Facility & Engineering", item: "GMP Facility Concept Designs & Spatial Layouts" },
  { category: "Facility & Engineering", item: "Cleanroom Zoning & Differential Pressure Cascade Schematics" },
  { category: "Facility & Engineering", item: "Personnel, Material & Waste Flow Optimization Drawings" },
  { category: "Facility & Engineering", item: "HVAC Engineering Design Reviews & Air Change Calculations" },
  { category: "Facility & Engineering", item: "Clean Utility (PW, WFI, Clean Steam) Requirement Specs" },
  { category: "GMP & Quality Systems", item: "Comprehensive GMP Gap-Analysis & Audit Reports" },
  { category: "GMP & Quality Systems", item: "ICH Q10 Pharmaceutical Quality Management System Frameworks" },
  { category: "GMP & Quality Systems", item: "Standard Operating Procedure (SOP) Libraries (Full Site)" },
  { category: "GMP & Quality Systems", item: "Site Quality Manuals & Institutional Policies" },
  { category: "GMP & Quality Systems", item: "Contamination Control Strategy (CCS) Master Documents" },
  { category: "Manufacturing & Lab", item: "Master Formula Records (MFR) & Batch Manufacturing Records (BMR)" },
  { category: "Manufacturing & Lab", item: "Batch Packaging Records (BPR) & Step-by-Step Instructions" },
  { category: "Manufacturing & Lab", item: "Analytical Raw Material & Finished Product Specifications" },
  { category: "Validation & Submissions", item: "Site Master Files (SMF) Structured for Statutory Authorities" },
  { category: "Validation & Submissions", item: "Validation Master Plans (VMP) & Scheduling Matrices" },
  { category: "Validation & Submissions", item: "Complete DQ, IQ, OQ, PQ Protocols and Summary Reports" },
  { category: "Validation & Submissions", item: "Mock Inspection Reports, CAPA Plans & Observation Responses" },
  { category: "Validation & Submissions", item: "Common Technical Document (CTD / eCTD) Dossier Packages" },
];
