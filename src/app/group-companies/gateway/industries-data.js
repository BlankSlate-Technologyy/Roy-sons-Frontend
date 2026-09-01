// Comprehensive Industries We Serve Dataset for Gateway Pharmaceuticals Consultants
import {
  FlaskConical,
  Microscope,
  Activity,
  Leaf,
  Globe,
  BookOpen,
  Building2,
  ShieldCheck,
  Award,
  Package,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  Scale,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export const GATEWAY_INDUSTRIES = [
  {
    id: "pharma-mfg",
    slug: "pharmaceutical-manufacturers",
    title: "Pharmaceutical Manufacturers",
    eyebrow: "Oral Solid, Liquid & Sterile Injectables",
    tag: "Commercial Pharma",
    icon: FlaskConical,
    heroImage: "/gatway about.png",
    overview:
      "Gateway provides strategic regulatory support for pharmaceutical formulation and active pharmaceutical ingredient (API) manufacturers. From initial Drug Manufacturing Licensing (DML) and cleanroom facility design vetting to commercial product registration (Form 7) and WHO-cGMP compliance audits, we ensure seamless operational readiness.",
    metrics: [
      { label: "Manufacturing Plants Advised", value: "85+" },
      { label: "Compliance Benchmark", value: "WHO / PIC-S" },
      { label: "Product Approvals", value: "500+" },
      { label: "Dossier Acceptance", value: "98.8%" },
    ],
    applications: [
      "Drug Manufacturing License (Form 1 & Form 2) application, site plan layout review, and CLB approval",
      "Finished generic product marketing authorization (Solid oral tablets, capsules, sterile vials, ampoules)",
      "WHO-cGMP, PIC/S, and DRAP statutory pre-inspection gap audits and mock regulatory inspections",
      "Site Master File (SMF), Validation Master Plan (VMP), and HVAC qualification compliance packages",
      "Process validation, cleaning validation, and analytical method transfer advisory",
      "Post-approval variations, manufacturing site transfers, and API source additions",
    ],
    technologies: [
      { key: "Dosage Forms Supported", value: "Tablets, Hard/Soft Gelatin Capsules, Dry Syrups, Liquid Injectables, Ophthalmic, Aerosols" },
      { key: "Sterile Engineering Standards", value: "ISO 14644-1 Cleanroom Grades A to D, Differential Pressure Cascades, Isolator Systems" },
      { key: "Validation Frameworks", value: "IQ/OQ/PQ protocols, Media Fills, Endotoxin limits (LAL), Sterility Testing (USP/BP)" },
      { key: "Quality Systems", value: "21 CFR Part 11, Data Integrity ALCOA+, QMS Deviation Management, OOS/OOT investigation" },
      { key: "Statutory Approvals", value: "Central Licensing Board (CLB), Registration Board (RB), Pricing Committee (DPC)" },
    ],
    pillars: [
      {
        title: "Cleanroom & Facility Layout Compliance",
        desc: "Reviewing architectural blueprints and HVAC schematics to ensure strict unidirectional flow of personnel and materials before construction.",
        icon: Building2,
      },
      {
        title: "ICH CTD Dossier Compilation",
        desc: "Turnkey authoring of Modules 1 through 5, including Quality Overall Summary (QOS) and multi-media dissolution profiles.",
        icon: FileCheck,
      },
      {
        title: "Regulatory Pre-Audit Drills",
        desc: "Simulating official cGMP inspections to identify and close documentation and physical plant vulnerabilities.",
        icon: ShieldCheck,
      },
      {
        title: "API Quota & Import Licensing",
        desc: "Securing annual manufacturing raw material quotas and statutory import NOCs without supply chain delays.",
        icon: Package,
      },
    ],
    faqs: [
      {
        q: "What regulatory requirements apply when setting up a new pharmaceutical manufacturing plant?",
        a: "A new plant requires site layout approval, environmental clearance, Drug Manufacturing License (Form 1/2) from the Central Licensing Board, cleanroom qualification, and subsequent product registration for each formulation.",
      },
      {
        q: "How does Gateway assist with manufacturing site transfers?",
        a: "We manage the complete variation package including comparative dissolution data, 3-batch process validation, stability testing commitments, and statutory board filing.",
      },
      {
        q: "Do you provide on-site cGMP audit readiness training?",
        a: "Yes. Our former regulatory auditors train production, QA, and QC personnel on official audit etiquette, logbook maintenance, and deviation investigations.",
      },
    ],
  },
  {
    id: "biotech",
    slug: "biotechnology-companies",
    title: "Biotechnology & Biosimilars",
    eyebrow: "Biologics, Vaccines & Recombinant DNA",
    tag: "Biotechnology",
    icon: Microscope,
    heroImage: "/gatway commited.png",
    overview:
      "Gateway provides high-level regulatory guidance for biotechnology enterprises developing vaccines, recombinant therapeutic proteins, monoclonal antibodies, and biosimilars. We navigate complex biological registration frameworks, clinical comparability protocols, cold-chain validation, and specialized biosafety mandates.",
    metrics: [
      { label: "Biological Submissions", value: "60+" },
      { label: "Cold-Chain Integrity", value: "100% GDP" },
      { label: "Biosafety Level", value: "BSL-1 to 3" },
      { label: "Approval Success", value: "96.5%" },
    ],
    applications: [
      "Biosimilar product marketing authorization and clinical comparability trial evaluation",
      "Vaccine licensing, cold-chain distribution validation, and national lot release protocols",
      "Biological Drug Manufacturing License (Biological Section) establishment and validation",
      "National Biosafety Committee (NBC) clearance for genetically modified organisms (GMOs)",
      "Cell line characterization, viral clearance studies, and purity profile regulatory vetting",
      "Specialized import permits for cell banks, recombinant enzymes, and reference standards",
    ],
    technologies: [
      { key: "Product Classes", value: "Monoclonal Antibodies (mAbs), Recombinant Insulins, EPO, Interferons, Vaccines, Blood Products" },
      { key: "Biosafety Standards", value: "BSL-2 / BSL-3 Cleanroom Containment, HEPA filtration, Autoclave Effluent Decontamination" },
      { key: "Comparability Studies", value: "Physicochemical (HPLC, Mass Spec, CD), In-Vitro Bioassays, Clinical Pharmacokinetics (PK/PD)" },
      { key: "Cold Chain Framework", value: "2°C to 8°C / -20°C / -80°C Continuous Datalogger Validation (WHO GDP TRS 961)" },
      { key: "Regulatory Pathway", value: "Biological Registration Board & National Lot Release Laboratory (Federal Lab)" },
    ],
    pillars: [
      {
        title: "Biosimilar Comparability Protocols",
        desc: "Drafting rigorous analytical and clinical comparability packages benchmarked against international innovator reference products.",
        icon: Microscope,
      },
      {
        title: "Biological Cleanroom Qualification",
        desc: "Advising on Grade A biosafety containment cabinets, isolators, and continuous particulate monitoring for cell culture suites.",
        icon: ShieldCheck,
      },
      {
        title: "Lot Release & Batch Clearance",
        desc: "Coordinating statutory testing at National Control Laboratories for protocol approval and batch commercial distribution.",
        icon: Award,
      },
      {
        title: "Cold-Chain GDP Compliance",
        desc: "Validation of thermal packaging, temperature-mapped cold rooms, and refrigerated transit dataloggers.",
        icon: Package,
      },
    ],
    faqs: [
      {
        q: "What is the regulatory pathway for biosimilar approval?",
        a: "Biosimilar registration requires proving biosimilarity through extensive analytical, non-clinical, and comparative clinical pharmacokinetic (PK/PD) studies against an approved reference biologic.",
      },
      {
        q: "How are biological manufacturing cleanrooms different from standard pharma?",
        a: "Biological suites require enhanced biosafety containment (BSL-2/3), dedicated air handling units with zero recirculation, viral filtration validation, and strict bioburden controls.",
      },
      {
        q: "What is statutory Lot Release for vaccines and biologicals?",
        a: "Every commercial batch of vaccines or plasma products must undergo independent testing and document review by the National Control Laboratory before market release.",
      },
    ],
  },
  {
    id: "meddevice",
    slug: "medical-device-companies",
    title: "Medical Device Companies",
    eyebrow: "Class A, B, C, D Devices & IVD Kits",
    tag: "Medical Devices",
    icon: Activity,
    heroImage: "/gatwayareaofexperince.png",
    overview:
      "Gateway delivers end-to-end regulatory advisory under the Medical Devices Rules for manufacturers, importers, and distributors of medical devices and In-Vitro Diagnostic (IVD) reagents. We handle Device Master Records (DMR), Medical Device Establishment Licenses (MDEL), conformity assessments, and product registrations across Class A through Class D.",
    metrics: [
      { label: "Devices Registered", value: "300+" },
      { label: "Classification Scope", value: "Class A to D" },
      { label: "MDEL Licenses", value: "120+" },
      { label: "Standards Compliance", value: "ISO 13485" },
    ],
    applications: [
      "Medical Device Establishment License (MDEL) for Importers, Wholesalers, and Manufacturers",
      "Medical Device & IVD product registration dossiers (Class A Non-invasive to Class D High-risk implants)",
      "Technical Documentation preparation: Device Master File (DMF), Essential Principles Checklist, Risk Analysis",
      "ISO 13485 Medical Device Quality Management System (QMS) implementation and pre-audit readiness",
      "Post-market surveillance, vigilance reporting, and field safety corrective action (FSCA) management",
      "Customs import NOCs and sample testing clearance for specialized surgical equipment",
    ],
    technologies: [
      { key: "Risk Classifications", value: "Class A (Low Risk), Class B (Low-Moderate), Class C (Moderate-High), Class D (High Risk / Implants)" },
      { key: "IVD Categorization", value: "Class A (General Lab IVD), Class B (Clinical Chemistry), Class C (Blood Glucose/HIV), Class D (Blood Screening)" },
      { key: "Quality Framework", value: "ISO 13485:2016, ISO 14971 (Risk Management), IEC 60601 (Electrical Safety)" },
      { key: "Technical Dossier", value: "Essential Principles Conformity, Clinical Evaluation Report (CER), Biocompatibility (ISO 10993)" },
      { key: "Regulatory Secretariat", value: "Medical Device Registration Board (MDRB)" },
    ],
    pillars: [
      {
        title: "Device Classification & Gap Assessment",
        desc: "Categorizing instruments, consumables, and software under statutory risk rules to determine the exact registration pathway.",
        icon: Activity,
      },
      {
        title: "Technical File & ISO 13485 Alignment",
        desc: "Authoring Device Master Files, risk management matrices (ISO 14971), and biocompatibility assessments.",
        icon: FileCheck,
      },
      {
        title: "Establishment Licensing (MDEL)",
        desc: "Securing warehouse storage approvals, temperature-controlled device licenses, and authorized representative agreements.",
        icon: Building2,
      },
      {
        title: "Post-Market Vigilance & Recalls",
        desc: "Establishing mandatory incident reporting procedures, customer complaint registries, and advisory notices.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "How are medical devices classified under the Medical Device Rules?",
        a: "Devices are classified into Class A (low risk, e.g., gauze, simple instruments), Class B (moderate risk, e.g., catheters), Class C (high risk, e.g., ventilators, dialysis systems), and Class D (highest risk, e.g., coronary stents, cardiac pacemakers).",
      },
      {
        q: "Is ISO 13485 certification mandatory for medical device registration?",
        a: "Yes. Both local manufacturers and foreign producers must demonstrate compliance with ISO 13485:2016 Quality Management Systems.",
      },
      {
        q: "What is an MDEL (Medical Device Establishment License)?",
        a: "An MDEL is a mandatory statutory license that permits a company to manufacture, import, store, or distribute medical devices in the country.",
      },
    ],
  },
  {
    id: "nutra-herbal",
    slug: "nutraceutical-herbal-products",
    title: "Nutraceutical & Herbal Products",
    eyebrow: "Health Supplements & Alternative Medicine",
    tag: "Nutraceuticals",
    icon: Leaf,
    heroImage: "/gatwaychosse us.png",
    overview:
      "Gateway assists nutraceutical, dietary supplement, herbal, and traditional alternative medicine manufacturers in securing Health & OTC Product Enlistment (Form 6 & 7). We review formulations against positive nutrient lists, verify botanical standardization, author product dossiers, and ensure label compliance.",
    metrics: [
      { label: "Enlistments Granted", value: "350+" },
      { label: "Product Types", value: "Herbal, Dietary, OTC" },
      { label: "Labeling Clearance", value: "100%" },
      { label: "Regulatory Body", value: "Health & OTC Board" },
    ],
    applications: [
      "Nutraceutical & Alternative Medicine Establishment Enlistment (Form 6) for manufacturing and import",
      "Product Enlistment (Form 7) dossiers for vitamins, minerals, botanical extracts, and dietary supplements",
      "Formulation vetting against DRAP Health & OTC positive lists and maximum permitted daily dose limits",
      "Finished product testing specifications (Heavy metals, microbial bioburden, pesticide residues, aflatoxins)",
      "Label claim verification, nutritional fact panels, and bilingual consumer artwork clearance",
      "Good Manufacturing Practice (GMP) for Health & OTC manufacturing facility design and licensing",
    ],
    technologies: [
      { key: "Statutory Rules", value: "Health & OTC (Enlistment) Rules and Guidelines for Alternative Medicines" },
      { key: "Product Domains", value: "Vitamins, Minerals, Botanical Extracts, Amino Acids, Probiotics, Unani/Tibb, Homeopathy" },
      { key: "Safety Testing Protocols", value: "ICP-MS for Heavy Metals (Lead, Cadmium, Mercury, Arsenic), TLC/HPLC for active markers" },
      { key: "Labeling Rules", value: "Mandatory statutory health statements, non-medicinal claim disclaimers, allergen warnings" },
      { key: "Board Jurisdiction", value: "Health and Over-the-Counter Division (Health & OTC Board)" },
    ],
    pillars: [
      {
        title: "Positive List & Dosage Verification",
        desc: "Ensuring all active ingredients and concentrations fall within statutory Recommended Daily Allowance (RDA) thresholds.",
        icon: Leaf,
      },
      {
        title: "Standardized Botanical Characterization",
        desc: "Documenting botanical Latin binomial names, plant parts used, extraction ratios, and chromatographic marker assays.",
        icon: Microscope,
      },
      {
        title: "Form 6 Establishment Siting",
        desc: "Assisting dietary supplement manufacturing facilities in setting up compliant HVAC, granulation, and packaging lines.",
        icon: Building2,
      },
      {
        title: "Labeling & Claim Defense",
        desc: "Drafting substantiated structure-function claims that satisfy regulatory advertising and packaging scrutinies.",
        icon: Award,
      },
    ],
    faqs: [
      {
        q: "What is the difference between Drug Registration and Nutraceutical Enlistment?",
        a: "Pharmaceutical drugs require formal drug registration (Form 5/7) through the Registration Board, whereas dietary supplements and herbal products are enlisted under the Health & OTC Rules through Form 6/7.",
      },
      {
        q: "What safety testing is mandatory for herbal formulations?",
        a: "Herbal products must undergo rigorous testing for heavy metals (Lead, Mercury, Arsenic, Cadmium), microbial limits (Total plate count, E. coli, Salmonella), aflatoxins, and pesticide residues.",
      },
      {
        q: "Can health claims be printed on nutraceutical packaging?",
        a: "Only approved structure-function claims substantiated by clinical literature may be used, accompanied by the mandatory statutory disclaimer.",
      },
    ],
  },
  {
    id: "trade",
    slug: "import-export-pharma-businesses",
    title: "Import / Export Pharma Businesses",
    eyebrow: "Cross-Border Quota & Commercial Indenting",
    tag: "Trade & Logistics",
    icon: Globe,
    heroImage: "/gatway header.png",
    overview:
      "Gateway empowers pharmaceutical commercial indenters, international traders, raw material importers, and export houses to navigate cross-border trade regulations seamlessly. We handle commercial import permits, raw material quotas, WHO CoPPs, and port customs clearance authorizations.",
    metrics: [
      { label: "Shipments Cleared", value: "1,200+" },
      { label: "Quota Approvals", value: "99.2%" },
      { label: "Export Destinations", value: "30+ Countries" },
      { label: "Customs Speed", value: "Express" },
    ],
    applications: [
      "Commercial Indenting and Import Agency registration with health authorities",
      "Active Pharmaceutical Ingredient (API), excipient, and packaging material statutory import NOCs",
      "Controlled raw material quota allocations (Narcotics, Psychotropics, Precursor Chemicals)",
      "Certificate of Pharmaceutical Product (CoPP) and Free Sale Certificates for export markets",
      "Port customs clearance support, sample drawing coordination, and release orders (RO)",
      "Bonded warehouse licensing, temperature-mapped storage compliance, and GDP audits",
    ],
    technologies: [
      { key: "Statutory Certifications", value: "WHO Certification Scheme on Quality of Pharmaceutical Products, Free Sale Certificates (FSC)" },
      { key: "Trade Systems", value: "Pakistan Single Window (PSW), Electronic Form E/I integration, Customs WeBOC portal" },
      { key: "Temperature Control", value: "Cold Chain Air/Sea Freight GDP Verification (2°C-8°C, -20°C Datalogger Validation)" },
      { key: "Controlled Substance Quotas", value: "Annual manufacturing requirement modeling under UN Single Convention frameworks" },
      { key: "Port Regulatory Authorities", value: "Port Health Officers (PHO), Federal Drug Inspectors (FDI), Customs Valuation" },
    ],
    pillars: [
      {
        title: "WHO CoPP & FSC Issuance",
        desc: "Expediting official WHO-format Certificates of Pharmaceutical Product to register domestic medicines in overseas markets.",
        icon: Award,
      },
      {
        title: "Raw Material Quota Justifications",
        desc: "Compiling verified production capacity and consumption logs to secure statutory API quotas from the Quota Committee.",
        icon: Package,
      },
      {
        title: "Customs Clearance & Testing",
        desc: "Coordinating with Port Drug Inspectors for immediate sample drawing, laboratory testing, and formal release notes.",
        icon: ShieldCheck,
      },
      {
        title: "Cold-Chain GDP Logistics",
        desc: "Auditing cold storage warehouses and reefer transport containers against international Good Distribution Practices.",
        icon: TrendingUp,
      },
    ],
    faqs: [
      {
        q: "What documents are required to export finished pharmaceuticals abroad?",
        a: "Exporters require a valid Drug Manufacturing License, product registration, Certificate of Pharmaceutical Product (CoPP) in WHO format, Free Sale Certificate, and commercial export NOCs.",
      },
      {
        q: "How do you manage port detentions of pharmaceutical shipments?",
        a: "Our liaison officers immediately present validated import permits, certificates of analysis, and registration proofs to Port Health Inspectors to secure immediate clearance.",
      },
      {
        q: "What is required to import controlled precursor chemicals for pharmaceutical synthesis?",
        a: "Precursor chemicals require statutory quota allocation from the Narcotics Control Division and formal import authorization from the regulatory authority.",
      },
    ],
  },
  {
    id: "diag-labs",
    slug: "diagnostic-laboratory-companies",
    title: "Diagnostic & Laboratory Companies",
    eyebrow: "IVD Reagents, Analyzers & Quality Protocols",
    tag: "Diagnostics & Labs",
    icon: BookOpen,
    heroImage: "/gatway about.png",
    overview:
      "Gateway provides specialized regulatory solutions for commercial clinical diagnostic laboratories, reference pathology centers, and IVD kit importers. We handle diagnostic analyzer registrations, test kit validation dossiers, biosafety licensing, and ISO 15189 laboratory accreditation compliance.",
    metrics: [
      { label: "Lab Kits Registered", value: "250+" },
      { label: "Accreditation Support", value: "ISO 15189" },
      { label: "Biosafety Clearances", value: "100%" },
      { label: "IVD Categories", value: "Clinical, Molecular" },
    ],
    applications: [
      "In-Vitro Diagnostic (IVD) reagent kit registration and medical laboratory analyzer approvals",
      "Clinical reference laboratory biosafety licensing, hazardous waste management, and zoning compliance",
      "ISO 15189 Medical Laboratories Quality Management System drafting and audit readiness",
      "Molecular diagnostics (Real-Time PCR, NGS sequencing kits) validation and statutory import NOCs",
      "Blood bank establishment licensing, transfusion safety protocols, and testing compliance",
      "Proficiency testing (PT) and External Quality Assessment Scheme (EQAS) alignment",
    ],
    technologies: [
      { key: "IVD Testing Modalities", value: "Clinical Chemistry, Hematology, Immunoassays (ELISA/CLIA), Molecular PCR, Histopathology" },
      { key: "Quality Standards", value: "ISO 15189:2022 (Medical Laboratories), ISO 17025 (Calibration), CLSI Guidelines" },
      { key: "Biosafety Guidelines", value: "WHO Laboratory Biosafety Manual, CDC Biosafety in Microbiological and Biomedical Laboratories" },
      { key: "Validation Parameters", value: "Analytical Sensitivity (LoD/LoQ), Specificity, Precision (Repeatability), Clinical Accuracy" },
      { key: "Statutory Authority", value: "Medical Device & IVD Registration Board and Healthcare Commissions" },
    ],
    pillars: [
      {
        title: "IVD Reagent Dossier Authoring",
        desc: "Compiling analytical performance data, clinical sensitivity studies, stability protocols, and batch release criteria.",
        icon: Microscope,
      },
      {
        title: "ISO 15189 Laboratory QMS",
        desc: "Structuring comprehensive laboratory quality manuals, standard operating procedures, and calibration schedules.",
        icon: FileCheck,
      },
      {
        title: "Clinical Analyzer Establishment",
        desc: "Securing statutory import authorizations, electrical safety certifications, and software validation protocols.",
        icon: Activity,
      },
      {
        title: "Biosafety & Infection Control",
        desc: "Advising on autoclaving, biohazardous waste incineration, and HEPA air balance for molecular testing suites.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What regulatory approval is needed to import diagnostic test kits?",
        a: "Diagnostic test kits (IVDs) require registration under the Medical Device Rules with the Medical Device Registration Board along with an Establishment License.",
      },
      {
        q: "How does Gateway assist laboratories in achieving ISO 15189 accreditation?",
        a: "We develop the complete laboratory quality manual, validate analytical testing methods, calibrate equipment, and conduct pre-accreditation mock audits.",
      },
      {
        q: "What are the requirements for molecular PCR testing laboratories?",
        a: "Molecular labs require a strict 3-room layout (Reagent prep, Sample extraction, Amplification) with negative air pressure gradients to prevent cross-contamination.",
      },
    ],
  },
  {
    id: "distributors",
    slug: "healthcare-distributors",
    title: "Healthcare Distributors",
    eyebrow: "Wholesale Licensing, Warehousing & GDP",
    tag: "Distribution & GDP",
    icon: Building2,
    heroImage: "/gatway commited.png",
    overview:
      "Gateway guides pharmaceutical wholesalers, nationwide medical distributors, and third-party logistics (3PL) providers through statutory wholesale licensing (Form 9), cold-chain storage validation, temperature mapping, and Good Distribution Practices (GDP) compliance.",
    metrics: [
      { label: "Warehouses Licensed", value: "150+" },
      { label: "GDP Compliance", value: "100%" },
      { label: "Cold-Chain Validation", value: "Continuous" },
      { label: "Network Covered", value: "Nationwide" },
    ],
    applications: [
      "Wholesale Drug License (Form 9) application, pharmacist vetting, and warehouse inspection clearance",
      "Pharmaceutical warehouse temperature mapping (summer/winter seasonal mapping) and sensor validation",
      "Good Distribution Practices (WHO GDP TRS 957) quality manual creation and staff training",
      "Cold-chain storage facility qualification (2°C-8°C walk-in chillers, backup generators, automated alerts)",
      "Recalled and expired medicines quarantine and statutory destruction protocols",
      "Electronic inventory management system (ERP) validation with batch tracking and serialization",
    ],
    technologies: [
      { key: "Licensing Statutes", value: "Provincial Drug Rules (Form 9 Wholesale/Distribution Licenses), Central Cold Storage Rules" },
      { key: "GDP Guidelines", value: "WHO Good Distribution Practices for Pharmaceutical Products (TRS 957), USP <1079>" },
      { key: "Temperature Mapping", value: "Multi-point wireless datalogger thermal profiling under full load and empty conditions" },
      { key: "Cold Chain Infrastructure", value: "Dual redundant refrigeration units, automatic phase-transfer switches, SMS alert systems" },
      { key: "Security & Traceability", value: "GS1 Barcode 2D DataMatrix scanning, access control, pest management protocols" },
    ],
    pillars: [
      {
        title: "Wholesale License (Form 9) Processing",
        desc: "Preparing pharmacist registrations, premise lease verifications, and representing the distributor before provincial quality boards.",
        icon: Building2,
      },
      {
        title: "Warehouse Temperature Mapping",
        desc: "Executing 7-day continuous multi-sensor temperature and humidity mapping to establish hot and cold spots.",
        icon: Activity,
      },
      {
        title: "Turnkey Cold-Chain Chillers",
        desc: "Designing and validating walk-in cold rooms with dual refrigeration compressors and automated monitoring.",
        icon: Package,
      },
      {
        title: "GDP SOPs & Traceability",
        desc: "Implementing procedures for picking, packaging, dispatch, delivery vehicle monitoring, and batch recall mock drills.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What is required to obtain a Wholesale Drug License (Form 9)?",
        a: "Requirements include a suitable commercial premise, a full-time registered Category-A Pharmacist, pest control, air-conditioned storage, and formal inspection clearance.",
      },
      {
        q: "Why is warehouse temperature mapping mandatory?",
        a: "Temperature mapping proves that all areas inside the warehouse remain consistently within the required storage temperature range (e.g., 15°C–25°C or 2°C–8°C) even during extreme seasonal weather.",
      },
      {
        q: "What are the rules for storing biologicals and vaccines in distribution centers?",
        a: "Biologicals must be stored in validated 2°C–8°C cold rooms with continuous dataloggers, backup generator power, and audible temperature breach alarms.",
      },
    ],
  },
];

export function getGatewayIndustryBySlug(slug) {
  if (!slug) return null;
  return GATEWAY_INDUSTRIES.find((ind) => ind.slug === slug || ind.id === slug);
}
