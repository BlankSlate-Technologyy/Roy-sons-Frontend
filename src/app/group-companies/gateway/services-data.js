// Comprehensive Services Dataset for Gateway Pharmaceuticals Consultants
import {
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Award,
  Globe2,
  Package,
  TrendingUp,
  RefreshCw,
  Building2,
  FileText,
  Clock,
  Sparkles,
  Layers,
  Scale,
  Microscope,
  Activity,
  HeartPulse,
} from "lucide-react";

export const GATEWAY_SERVICES = [
  {
    id: "licensing",
    slug: "pharmaceutical-licensing",
    title: "Pharmaceutical Licensing",
    eyebrow: "Statutory Approvals & Siting",
    tag: "Licensing & Mandates",
    icon: FileCheck,
    heroImage: "/gatway about.png",
    overview:
      "Gateway Pharmaceuticals provides comprehensive end-to-end guidance for pharmaceutical licensing requirements, applications, statutory documentation, site selection, and official authority liaison. We ensure seamless approvals for manufacturing, compounding, wholesale distribution, and specialized storage facilities under DRAP, WHO-GMP, and international health authority frameworks.",
    metrics: [
      { label: "Approval Rate", value: "99.4%" },
      { label: "Licenses Granted", value: "500+" },
      { label: "Turnaround Time", value: "Fast Track" },
      { label: "Compliance Scope", value: "DRAP / WHO" },
    ],
    deliverables: [
      "Drug Manufacturing License (Form 1 & Form 2) application and approval management",
      "Wholesale, Distribution, and Cold-Chain Storage facility licensing mandates",
      "Pharmaceutical Import / Export quotas, NOCs, and cross-border statutory permissions",
      "Site Master File (SMF) compilation, facility layout vetting, and cleanroom classification",
      "Statutory license renewals, name amendments, and site modification filings",
      "Official inspection readiness audit and pre-licensing gap closure",
    ],
    technicalSpecs: [
      { key: "Regulatory Body Coverage", value: "DRAP (Drug Regulatory Authority of Pakistan), WHO, Regional MoH" },
      { key: "License Classifications", value: "Formulation, Basic Synthesis, Biologicals, Sterile Liquids, Solid Oral" },
      { key: "Facility Standards", value: "cGMP, ISO 14644 Cleanrooms (Grade A-D), US-FDA/PIC-S Guidance" },
      { key: "Documentation Package", value: "Layout Drawings, Site Master File, Validation Master Plan, Validation Dossiers" },
      { key: "Liaison Mechanism", value: "Direct representation before Central Licensing Board (CLB)" },
      { key: "Renewal Cycles", value: "Standard 3 to 5-year proactive compliance and variation filing" },
    ],
    pillars: [
      {
        title: "Facility Layout & HVAC Vetting",
        desc: "Reviewing architectural drawings, personnel/material flow, pressure differentials, and HVAC zoning to ensure zero-contamination compliance before inspection.",
        icon: Building2,
      },
      {
        title: "Statutory Submission Precision",
        desc: "Rigorous verification of legal ownership documents, technical staff qualifications, machinery lists, and QC calibration certificates.",
        icon: FileText,
      },
      {
        title: "Pre-Audit Simulation",
        desc: "Conducting mock regulatory audits mimicking official CLB inspections to identify and resolve gaps in documentation and engineering.",
        icon: ShieldCheck,
      },
      {
        title: "Fast-Track Authority Liaison",
        desc: "Continuous desk follow-up with regulatory secretariats to clear queries promptly and expedite issuance of formal licenses.",
        icon: Clock,
      },
    ],
    workflow: [
      { step: "01", title: "Feasibility & Site Audit", desc: "Assessing proposed facility blueprints, zoning permissions, and regulatory requirements." },
      { step: "02", title: "Dossier & Layout Submission", desc: "Compiling legal dossiers, machinery catalogs, Site Master Files, and submitting official Form applications." },
      { step: "03", title: "Inspection Readiness & Mock Audit", desc: "Preparing facility staff, calibration logs, SOPs, and conducting pre-inspection dry runs." },
      { step: "04", title: "Grant & Compliance Handover", desc: "Accompanying official inspectors, closing observations, and securing the final statutory license." },
    ],
    faqs: [
      {
        q: "What types of pharmaceutical licenses does Gateway handle?",
        a: "We manage Drug Manufacturing Licenses (Formulation, Synthesis, Repacking), Biologicals & Vaccines Licenses, Medical Device Establishment Licenses, and Wholesale/Distribution Licenses.",
      },
      {
        q: "How does Gateway assist with manufacturing facility design?",
        a: "Our senior pharmaceutical engineers review cleanroom zoning, HVAC differential pressures, cross-contamination barriers, and equipment placement to ensure compliance with cGMP standards before building or filing.",
      },
      {
        q: "What is the typical timeframe for acquiring a new manufacturing license?",
        a: "While statutory board meeting schedules vary, our thorough pre-submission vetting eliminates deficiency letters, reducing the typical timeline from 12+ months down to the fastest possible board approval window.",
      },
    ],
  },
  {
    id: "registration",
    slug: "product-registration",
    title: "Product Registration",
    eyebrow: "Marketing Authorization & CTD",
    tag: "Product Submissions",
    icon: Package,
    heroImage: "/gatway commited.png",
    overview:
      "Gateway Pharmaceuticals steers pharmaceutical formulations, biologicals, medical devices, and nutraceutical products through the complete marketing authorization lifecycle. We prepare and submit robust Common Technical Documents (CTD/eCTD) ensuring rapid registration with zero non-compliance bottlenecks.",
    metrics: [
      { label: "Products Registered", value: "200+" },
      { label: "Dossier Format", value: "CTD / eCTD" },
      { label: "First-Cycle Approval", value: "96%" },
      { label: "Product Categories", value: "Rx, OTC, Biologics" },
    ],
    deliverables: [
      "Finished generic pharmaceutical formulation registrations (Solid dosage, Parenterals, Topicals)",
      "New Chemical Entity (NCE) and New Biological Entity (NBE) regulatory submission pathways",
      "Common Technical Document (CTD) Modules 1 through 5 preparation and technical authoring",
      "Medical devices & In-Vitro Diagnostic (IVD) reagents classification, safety testing, and registration",
      "Nutraceutical, dietary supplement, and herbal/homeopathic registration dossiers",
      "Post-approval variation submissions, label updates, and pack size extensions",
    ],
    technicalSpecs: [
      { key: "Dossier Structure", value: "ICH CTD Format (Modules 1 - 5: Regional, QOS, Quality, Nonclinical, Clinical)" },
      { key: "Target Markets", value: "Pakistan (DRAP Registration Board), Middle East, Central Asia, ASEAN, Africa" },
      { key: "Formulation Coverage", value: "Tablets, Capsules, Lyophilized Vials, IV Infusions, Ophthalmic, Inhalers" },
      { key: "Stability Standards", value: "Zone IVa & Zone IVb Accelerated and Long-Term Stability Protocols (ICH Q1A)" },
      { key: "Bioequivalence Vetting", value: "BE Study protocols, dissolution profiling (f1/f2 metrics), and CRO audit reports" },
      { key: "Labeling Guidelines", value: "SmPC, Patient Information Leaflets (PIL), primary/secondary packaging artwork" },
    ],
    pillars: [
      {
        title: "Module 3 Quality Authoring",
        desc: "Deep technical synthesis of API characterization, formulation development, batch manufacturing records, analytical method validation, and stability profiles.",
        icon: Microscope,
      },
      {
        title: "Bioequivalence & Dissolution Profiling",
        desc: "Comparative multi-media dissolution profiles and bioequivalence trial documentation to satisfy stringent generic registration boards.",
        icon: Activity,
      },
      {
        title: "Clinical / Non-Clinical Overviews",
        desc: "Evidence-based Module 2/4/5 summaries authored by certified pharmacologists to justify clinical efficacy and safety.",
        icon: HeartPulse,
      },
      {
        title: "Fast Board Query Resolution",
        desc: "Specialized technical query response team resolving expert committee comments within statutory deadlines.",
        icon: Sparkles,
      },
    ],
    workflow: [
      { step: "01", title: "Product Classification & Strategy", desc: "Determining regulatory pathway, formula eligibility, and registration board prerequisites." },
      { step: "02", title: "CTD Dossier Compilation", desc: "Assembling analytical validation, stability reports, manufacturing records, and administrative documents into 5 CTD modules." },
      { step: "03", title: "Board Submission & Tracking", desc: "Filing application with statutory board, tracking agenda listings, and handling expert queries." },
      { step: "04", title: "Registration Grant & Commercialization", desc: "Receiving official Registration Letter, validating packaging artwork, and transitioning to market release." },
    ],
    faqs: [
      {
        q: "What dossier format is mandatory for product registration?",
        a: "DRAP and international authorities require the ICH CTD (Common Technical Document) format encompassing Modules 1 to 5. We provide full turnkey CTD authoring.",
      },
      {
        q: "Do you handle medical devices and diagnostic kit registrations?",
        a: "Yes, we handle Class A, B, C, and D medical devices as well as In-Vitro Diagnostic (IVD) reagents under the Medical Device Rules with full technical dossier preparation.",
      },
      {
        q: "How does Gateway manage stability testing data requirements?",
        a: "We review and align your stability data under Climatic Zone IVb conditions (30°C / 75% RH) to comply with regional and international climatic testing guidelines.",
      },
    ],
  },
  {
    id: "affairs",
    slug: "regulatory-affairs-management",
    title: "Regulatory Affairs Management",
    eyebrow: "Strategic Liaison & Intelligence",
    tag: "Affairs Management",
    icon: ClipboardList,
    heroImage: "/gatwayareaofexperince.png",
    overview:
      "Gateway acts as an outsourced strategic regulatory affairs department for pharmaceutical enterprises. We maintain proactive, transparent liaison with health ministries, handle complex regulatory variations, manage pricing reviews, and deliver statutory intelligence that protects product lifecycles.",
    metrics: [
      { label: "Variations Processed", value: "350+" },
      { label: "Authority Network", value: "DRAP, MOH, WHO" },
      { label: "Client Retention", value: "98%" },
      { label: "Response Speed", value: "< 24 Hours" },
    ],
    deliverables: [
      "Dedicated representation and technical liaison with national and provincial regulatory boards",
      "Major & Minor Post-Marketing Variation filings (site changes, shelf-life extensions, pack variations)",
      "Maximum Retail Price (MRP) fixation, hardship case reviews, and pricing deregulation advisory",
      "Statutory labeling and packaging text harmonization with official pharmacopoeias",
      "Pharmaceutical patent and data exclusivity regulatory landscape analysis",
      "Proactive regulatory intelligence monitoring and regulatory change alerts",
    ],
    technicalSpecs: [
      { key: "Service Scope", value: "Full-Time Outsourced Regulatory Affairs / Project-Based Representation" },
      { key: "Variation Management", value: "Type IA, Type IB, and Type II Variations (Site transfer, API source, Formulation change)" },
      { key: "Pricing Submissions", value: "Drug Pricing Committee (DPC) filings under National Drug Pricing Policy" },
      { key: "Regulatory Intelligence", value: "Real-time updates on SROs, statutory notifications, and policy directives" },
      { key: "Artwork Review", value: "Barcoding, 2D DataMatrix compliance, bilingual labeling, cautionary statements" },
      { key: "Audit Representation", value: "Accompanying statutory inspectors during routine and for-cause audits" },
    ],
    pillars: [
      {
        title: "Active Board Representation",
        desc: "Direct advocacy before statutory committees ensuring your applications and appeals receive thorough technical consideration.",
        icon: Building2,
      },
      {
        title: "Lifecycle Variation Handling",
        desc: "Seamless filing of manufacturing site transfers, API source changes, and packaging upgrades without product supply disruption.",
        icon: RefreshCw,
      },
      {
        title: "Pricing Strategy & DPC Filings",
        desc: "Financial and regulatory modeling to prepare persuasive pricing dossiers for new molecules and inflationary hardship cases.",
        icon: Scale,
      },
      {
        title: "2D DataMatrix & Artwork Compliance",
        desc: "Ensuring secondary packaging and serial numbers strictly adhere to anti-counterfeit serialization mandates.",
        icon: Award,
      },
    ],
    workflow: [
      { step: "01", title: "Regulatory Needs Audit", desc: "Reviewing existing product portfolio, pending variations, and upcoming compliance milestones." },
      { step: "02", title: "Strategy & Pipeline Mapping", desc: "Establishing an annualized regulatory calendar for renewals, variations, and new submissions." },
      { step: "03", title: "Documentation & Filing", desc: "Drafting technical justifications, preparing dossiers, and submitting applications to regulatory bodies." },
      { step: "04", title: "Continuous Monitoring & Approval", desc: "Tracking review stages, providing expert representation in committee sessions, and securing approvals." },
    ],
    faqs: [
      {
        q: "Can Gateway serve as our company's full regulatory affairs department?",
        a: "Yes. Many multinational and national companies rely on Gateway as their end-to-end outsourced regulatory division, reducing overhead while gaining decades of senior expertise.",
      },
      {
        q: "How do you handle post-approval manufacturing site transfers?",
        a: "We compile the complete site transfer variation dossier including comparative batch analysis, process validation, and stability commitment for rapid board approval.",
      },
      {
        q: "What support do you provide for drug pricing matters?",
        a: "We assist with initial pricing applications for new drugs, price increases under statutory hardship clauses, and international reference pricing comparisons.",
      },
    ],
  },
  {
    id: "compliance",
    slug: "compliance-consultancy",
    title: "cGMP & Compliance Consultancy",
    eyebrow: "Quality Systems & Inspection Audit",
    tag: "cGMP & Standards",
    icon: ShieldCheck,
    heroImage: "/gatwaychosse us.png",
    overview:
      "We deliver high-level consultancy to help pharmaceutical manufacturing units achieve and maintain compliance with WHO-cGMP, PIC/S, US-FDA, and national statutory standards. Our former senior regulatory auditors perform comprehensive gap analysis, quality system upgrades, and pre-inspection readiness drills.",
    metrics: [
      { label: "Audits Conducted", value: "180+" },
      { label: "Standards", value: "WHO, PIC/S, cGMP" },
      { label: "Zero-Observation Rate", value: "94%" },
      { label: "Facility Types", value: "Oral, Sterile, Biotech" },
    ],
    deliverables: [
      "WHO-cGMP, PIC/S, and DRAP statutory gap analysis audits with structured risk scoring",
      "Comprehensive Quality Management Systems (QMS) drafting, alignment, and implementation",
      "Sterile injectable facility qualification (Cleanrooms, isolators, autoclaves, media fills)",
      "Data Integrity (DI) assessments, ALCOA+ compliance audits, and audit trail verification",
      "Equipment Qualification (DQ/IQ/OQ/PQ), HVAC validation, and Water for Injection (WFI) systems",
      "CAPA (Corrective and Preventive Action) formulation, monitoring, and regulatory submission",
    ],
    technicalSpecs: [
      { key: "Audit Methodologies", value: "ISO 19011 compliant auditing, risk-based quality scoring, mock inspection" },
      { key: "Cleanroom Classification", value: "ISO 14644-1 Classes 5 through 8 (EU GMP Grades A, B, C, D)" },
      { key: "Sterilization Validation", value: "Moist heat, dry heat, ethylene oxide, gamma radiation, aseptic processing" },
      { key: "Data Integrity Framework", value: "21 CFR Part 11, GAMP 5, PIC/S Guidance on Data Integrity in GMP/GDP" },
      { key: "Utilities Validation", value: "HVAC Differential Pressures, Purified Water (PW), WFI, Pure Steam, Compressed Air" },
      { key: "Remediation Plans", value: "Root Cause Analysis (Fishbone/5-Whys), CAPA tracking, effectiveness verification" },
    ],
    pillars: [
      {
        title: "Mock Inspection Dry-Runs",
        desc: "Simulating unannounced regulatory audits to stress-test your personnel, logbooks, QA records, and warehouse procedures.",
        icon: ShieldCheck,
      },
      {
        title: "Sterile Engineering & HVAC",
        desc: "Specialized review of Grade A/B laminar flow hoods, differential pressure cascades, HEPA integrity (DOP/PAO), and particle counts.",
        icon: Building2,
      },
      {
        title: "Data Integrity & ALCOA+",
        desc: "Ensuring all QC computerized instruments (HPLC, GC, Spectrophotometers) have audit trails enabled and backup protocols in place.",
        icon: FileText,
      },
      {
        title: "CAPA Remediation & Closure",
        desc: "Drafting scientific, bulletproof CAPA responses to official audit observations ensuring zero escalation and license preservation.",
        icon: Award,
      },
    ],
    workflow: [
      { step: "01", title: "Diagnostic Gap Assessment", desc: "On-site comprehensive inspection of production, warehouse, HVAC, QC laboratories, and documentation." },
      { step: "02", title: "Risk Prioritization & Remediation Roadmap", desc: "Issuing detailed gap report categorizing critical, major, and minor observations with corrective milestones." },
      { step: "03", title: "System Implementation & Training", desc: "Overhauling SOPs, training facility personnel, and executing validation protocols." },
      { step: "04", title: "Final Readiness Verification", desc: "Conducting post-remediation audit to certify complete regulatory inspection readiness." },
    ],
    faqs: [
      {
        q: "How does Gateway prepare our factory for official cGMP inspections?",
        a: "We conduct an intensive 360-degree mock audit covering production lines, HVAC differential pressures, water systems, QC testing records, and warehouse storage to fix all vulnerabilities before statutory inspectors arrive.",
      },
      {
        q: "What is your approach to Data Integrity compliance?",
        a: "We assess both paper records and computerized systems against ALCOA+ principles, ensuring access controls, immutable audit trails, and validated backup procedures are fully functioning.",
      },
      {
        q: "Can you help resolve warning letters or official compliance observations?",
        a: "Yes. We specialize in root-cause investigation, robust CAPA design, and direct response authoring to satisfy regulatory boards and restore compliant status.",
      },
    ],
  },
  {
    id: "dossier",
    slug: "dossier-preparation-submission",
    title: "Dossier Preparation & Submission",
    eyebrow: "CTD / eCTD & Technical Writing",
    tag: "CTD & Dossiers",
    icon: FileText,
    heroImage: "/gatway header.png",
    overview:
      "Gateway delivers expert pharmaceutical technical writing and dossier compilation services in CTD, eCTD, and ACTD formats. Our regulatory scientists transform raw analytical data, batch records, and clinical literature into structured, error-free dossiers that meet the highest international submission standards.",
    metrics: [
      { label: "Dossiers Compiled", value: "400+" },
      { label: "eCTD Validation", value: "100% Pass" },
      { label: "Technical Writers", value: "15+ PhDs/PharmDs" },
      { label: "Turnaround Time", value: "Accelerated" },
    ],
    deliverables: [
      "Turnkey CTD / eCTD Dossier compilation across all 5 Modules for global submissions",
      "Quality Overall Summary (QOS) and Expert Reports authoring by certified specialists",
      "Site Master File (SMF) and Validation Master Plan (VMP) creation and harmonization",
      "Analytical Method Validation (AMV) and Process Validation protocol & report compilation",
      "Certificate of Pharmaceutical Product (CoPP) and Free Sale Certificate (FSC) dossier packs",
      "Electronic submission publishing, XML hyperlinking, and lifecycle dossier maintenance",
    ],
    technicalSpecs: [
      { key: "Supported Formats", value: "ICH eCTD v3.2.2 / v4.0, ASEAN ACTD, National Paper CTD" },
      { key: "Module 1", value: "Administrative Information, Regional Forms, SmPC, PIL, Packaging Artworks" },
      { key: "Module 2", value: "CTD Summaries: QOS (Module 2.3), Nonclinical Overview (2.4), Clinical Overview (2.5)" },
      { key: "Module 3", value: "Quality Dossier: Drug Substance (3.2.S) and Finished Drug Product (3.2.P)" },
      { key: "Module 4 & 5", value: "Nonclinical Study Reports & Clinical Study Reports / Bioequivalence Data" },
      { key: "Validation Tools", value: "Lorenz docuBridge, Extedo eCTDmanager, Lorenz PDF Validator" },
    ],
    pillars: [
      {
        title: "Module 3 Drug Substance & Product Writing",
        desc: "Converting development reports, impurity profiling, and stability matrices into standardized 3.2.S and 3.2.P sections.",
        icon: Microscope,
      },
      {
        title: "QOS (Module 2.3) Synthesis",
        desc: "Authoring executive Quality Overall Summaries highlighting critical quality attributes (CQAs) and control strategies.",
        icon: FileCheck,
      },
      {
        title: "SMF & Validation Master Plans",
        desc: "Creating compliant Site Master Files that accurately portray plant layout, engineering utilities, and quality policies.",
        icon: Building2,
      },
      {
        title: "eCTD Technical Publishing",
        desc: "Generating PDF bookmarks, hyperlinked tables of contents, XML backbones, and md5 checksum verification.",
        icon: Layers,
      },
    ],
    workflow: [
      { step: "01", title: "Source Document Ingestion", desc: "Collecting batch records, analytical validation reports, stability data, and raw material COAs." },
      { step: "02", title: "Gap Review & Technical Writing", desc: "Drafting Module 2 and Module 3 sections, creating summaries, and formatting tables to ICH standards." },
      { step: "03", title: "eCTD Publishing & Hyperlinking", desc: "Executing electronic pagination, hyperlinking references, generating XML backbone, and running validation tools." },
      { step: "04", title: "Final Dispatch & Archival", desc: "Delivering submission-ready eCTD package and maintaining version control for future lifecycle updates." },
    ],
    faqs: [
      {
        q: "What is the difference between CTD and eCTD?",
        a: "CTD is the standardized Common Technical Document structure, while eCTD is its electronic XML-based publishing format with strict hyperlinking and lifecycle metadata. We provide both.",
      },
      {
        q: "Can you compile dossiers from raw manufacturing and QC data?",
        a: "Yes. Our team of pharmaceutical scientists can ingest raw formulation logs, HPLC chromatograms, and stability data sheets to author complete Module 3 dossiers from scratch.",
      },
      {
        q: "Do you support dossier conversions (e.g., ACTD to ICH CTD)?",
        a: "Yes. We frequently reformat dossiers between national formats, ASEAN ACTD, and ICH CTD for international market expansion.",
      },
    ],
  },
  {
    id: "consultancy",
    slug: "strategic-regulatory-consultancy",
    title: "Strategic Regulatory Consultancy",
    eyebrow: "Risk Advisory & Complex Filings",
    tag: "Strategic Advisory",
    icon: Award,
    heroImage: "/gatway about.png",
    overview:
      "When pharmaceutical organizations encounter complex statutory challenges, novel product classifications, Drug Master File (DMF) rectifications, or formal board appeals, Gateway provides premier strategic counsel. We evaluate regulatory risks and engineer customized pathways to achieve commercialization.",
    metrics: [
      { label: "Appeals Resolved", value: "95%+" },
      { label: "Strategic Projects", value: "250+" },
      { label: "Advisory Team", value: "Former Regulators" },
      { label: "Market Reach", value: "Global" },
    ],
    deliverables: [
      "High-level regulatory risk assessments for mergers, acquisitions, and plant expansions",
      "Appellate advocacy and formal dispute resolution before statutory appellate tribunals",
      "Novel Drug Delivery System (NDDS) and modified-release registration pathways",
      "Drug Master File (DMF) technical queries, closed-part evaluation, and deficiency rectification",
      "Contract manufacturing (Toll manufacturing) statutory authorization and oversight",
      "Cross-border regulatory alignment for export-oriented manufacturing plants",
    ],
    technicalSpecs: [
      { key: "Advisory Domain", value: "Commercial Pharma, Biosimilars, Vaccine Facilities, Specialty Injectables" },
      { key: "Statutory Tribunals", value: "Appellate Board representation under Drug Act & DRAP Act provisions" },
      { key: "Due Diligence", value: "Regulatory compliance vetting for M&A transactions and licensing acquisitions" },
      { key: "Contract Manufacturing", value: "Form 2A permissions, technical agreements, quality oversight mandates" },
      { key: "DMF Management", value: "Type II (Drug Substance), Type III (Packaging), Type IV (Excipients)" },
      { key: "Confidentiality", value: "Strict non-disclosure agreements (NDA) and secure data handling" },
    ],
    pillars: [
      {
        title: "Appellate Board Advocacy",
        desc: "Drafting rigorous legal-scientific appeals against board rejections or conditional deferrals to achieve successful overturning.",
        icon: Scale,
      },
      {
        title: "M&A Regulatory Due Diligence",
        desc: "Auditing target facility license validity, product registration integrity, and pending litigation for prospective buyers.",
        icon: ShieldCheck,
      },
      {
        title: "Toll Manufacturing Approvals",
        desc: "Structuring compliant contract manufacturing agreements and securing formal board approvals without delays.",
        icon: Building2,
      },
      {
        title: "DMF Query Rectification",
        desc: "Resolving technical inquiries on active substance synthesis routes, residual solvents, and polymorphic forms.",
        icon: Microscope,
      },
    ],
    workflow: [
      { step: "01", title: "Challenge Diagnostic", desc: "Analyzing regulatory dispute, board minutes, deficiency letter, or commercial objective." },
      { step: "02", title: "Strategic Roadmap Formulation", desc: "Crafting multi-tier technical, scientific, and statutory arguments supported by precedent and guidelines." },
      { step: "03", title: "Execution & Board Representation", desc: "Filing formal petitions, attending personal hearings, and presenting evidence before the tribunal." },
      { step: "04", title: "Favorable Ruling & Integration", desc: "Securing formal clearance and integrating regulatory permissions into standard operational workflows." },
    ],
    faqs: [
      {
        q: "How does Gateway assist when an application is rejected by the registration board?",
        a: "We conduct an in-depth scientific and legal review of the rejection grounds, gather supplemental comparative evidence, and file a formal Appeal before the Appellate Board.",
      },
      {
        q: "What is involved in toll/contract manufacturing regulatory approval?",
        a: "We assist both the brand owner and contract manufacturer in formulating compliant technical agreements, capacity verifications, and statutory Form 2A authorization filings.",
      },
      {
        q: "Can Gateway assist foreign pharmaceutical companies entering the local market?",
        a: "Yes. We act as local regulatory advisors, guiding foreign firms through importer licensing, product registration, pricing, and distributor appointment.",
      },
    ],
  },
  {
    id: "pharmacovigilance",
    slug: "pharmacovigilance-support",
    title: "Pharmacovigilance & Safety Surveillance",
    eyebrow: "Drug Safety & Post-Market Surveillance",
    tag: "Safety & Vigilance",
    icon: TrendingUp,
    heroImage: "/gatway commited.png",
    overview:
      "Gateway establishes and manages compliant Pharmacovigilance (PV) systems for pharmaceutical manufacturers and marketing authorization holders. We deliver full-spectrum drug safety monitoring, Adverse Event (AE) reporting, Periodic Safety Update Reports (PSUR/PBRER), and risk management plans.",
    metrics: [
      { label: "PSURs Submitted", value: "200+" },
      { label: "QPPV Network", value: "Certified" },
      { label: "GVP Compliance", value: "100%" },
      { label: "Safety Audits", value: "Zero Findings" },
    ],
    deliverables: [
      "Qualified Person for Pharmacovigilance (QPPV) appointment and infrastructure establishment",
      "Pharmacovigilance System Master File (PSMF) drafting, maintenance, and audit readiness",
      "Individual Case Safety Report (ICSR) collection, triage, medical evaluation, and statutory reporting",
      "Periodic Safety Update Report (PSUR / PBRER) authoring and submission scheduling",
      "Risk Management Plans (RMP) formulation and risk minimization measure implementation",
      "Literature screening, safety signal detection, and post-market safety advisory",
    ],
    technicalSpecs: [
      { key: "PV Guidelines", value: "Good Pharmacovigilance Practices (GVP), DRAP PV Guidelines, CIOMS, ICH E2A-E2F" },
      { key: "Safety Databases", value: "Validated safety database solutions, MedDRA coding, WHO-Drug dictionaries" },
      { key: "Reporting Timelines", value: "Expedited 15-day reporting for serious adverse events (SAEs) and periodic reporting" },
      { key: "Literature Screening", value: "Weekly screening of national and international medical journals and databases" },
      { key: "Safety Communication", value: "Dear Healthcare Professional Letters (DHPC), safety label updates" },
      { key: "PV Inspections", value: "Audit readiness, CAPA management, and internal PV quality audits" },
    ],
    pillars: [
      {
        title: "Turnkey QPPV & PSMF Setup",
        desc: "Establishing the complete legal pharmacovigilance framework, SOPs, and designated safety officers required by law.",
        icon: ShieldCheck,
      },
      {
        title: "Expedited ICSR & Adverse Event Triage",
        desc: "24/7 adverse reaction intake, medical assessment by registered physicians, and automated electronic statutory filing.",
        icon: Activity,
      },
      {
        title: "PSUR / PBRER Authoring",
        desc: "Comprehensive benefit-risk evaluation reports synthesized from global clinical literature and local sales exposure.",
        icon: FileText,
      },
      {
        title: "Risk Management Plans (RMP)",
        desc: "Identifying potential and identified safety risks and creating targeted educational materials for healthcare professionals.",
        icon: Award,
      },
    ],
    workflow: [
      { step: "01", title: "PV System Gap Audit", desc: "Reviewing existing safety monitoring mechanisms, adverse event intake channels, and SOPs." },
      { step: "02", title: "PSMF & SOP Deployment", desc: "Drafting the Pharmacovigilance System Master File and establishing standard operating procedures." },
      { step: "03", title: "Active Surveillance & Reporting", desc: "Conducting continuous adverse reaction intake, MedDRA coding, signal detection, and PSUR authoring." },
      { step: "04", title: "Audit Verification & Renewal", desc: "Executing annual PV quality audits, training corporate staff, and maintaining ongoing compliance." },
    ],
    faqs: [
      {
        q: "Is Pharmacovigilance mandatory for all pharmaceutical companies?",
        a: "Yes. Drug regulatory authorities mandate that every marketing authorization holder maintain an active PV system with a designated QPPV and PSMF.",
      },
      {
        q: "Can Gateway manage our company's adverse event hotline and reporting?",
        a: "Yes. We operate fully outsourced pharmacovigilance desks that handle public and physician AE reports, literature searches, and statutory filings.",
      },
      {
        q: "What is a Periodic Safety Update Report (PSUR)?",
        a: "A PSUR is a formal pharmacovigilance document evaluating the ongoing benefit-risk balance of a registered drug over defined post-authorization intervals.",
      },
    ],
  },
  {
    id: "importexport",
    slug: "import-export-licensing",
    title: "Import & Export Licensing",
    eyebrow: "Cross-Border Trade & Quotas",
    tag: "Trade & Quotas",
    icon: Globe2,
    heroImage: "/gatwayareaofexperince.png",
    overview:
      "We facilitate international pharmaceutical trade by securing statutory import permits, export permissions, raw material quotas, and Certificate of Pharmaceutical Product (CoPP) documentation. We ensure your cross-border shipments clear customs and health inspection gates smoothly.",
    metrics: [
      { label: "Customs Clearances", value: "1,000+" },
      { label: "Quota Approvals", value: "99%" },
      { label: "Markets Connected", value: "25+ Countries" },
      { label: "Documentation Time", value: "Express" },
    ],
    deliverables: [
      "Finished pharmaceutical formulation commercial import permissions and indenter registrations",
      "Active Pharmaceutical Ingredient (API) and precursor chemical import quota approvals",
      "Certificate of Pharmaceutical Product (CoPP) according to WHO Certification Scheme",
      "Free Sale Certificates (FSC) and Good Manufacturing Practice (GMP) certificates for export markets",
      "Special import permits for life-saving drugs, clinical trial batches, and reference standards",
      "Customs port clearance liaison, sample release certificates, and bonded warehouse compliance",
    ],
    technicalSpecs: [
      { key: "Statutory Scheme", value: "WHO Certification Scheme on the Quality of Pharmaceutical Products Moving in International Commerce" },
      { key: "Permit Categories", value: "Commercial Import, Clinical Trial Material (CTM), Named-Patient Emergency Import, Commercial Export" },
      { key: "Controlled Substances", value: "Narcotic, psychotropic, and dual-use precursor chemical quota allocations" },
      { key: "Port Operations", value: "Airports, seaports, dry ports with cold-chain temperature verification (GDP)" },
      { key: "Documentation", value: "Form 4 permissions, Form 7 registration certificates, legalized CoPPs, Analysis Certificates" },
      { key: "Customs Integration", value: "Single Window (PSW) filings, customs tariff classification, valuation advisory" },
    ],
    pillars: [
      {
        title: "WHO-Format CoPP Issuance",
        desc: "Rapid processing of official Certificates of Pharmaceutical Product to satisfy regulatory registration in export destinations.",
        icon: Award,
      },
      {
        title: "API & Precursor Quota Allocations",
        desc: "Preparing annual manufacturing requirement justifications to secure statutory raw material quota approvals.",
        icon: Package,
      },
      {
        title: "Emergency & Named-Patient Permits",
        desc: "Expediting fast-track import authorizations for unapproved life-saving oncology and orphan drugs for hospital use.",
        icon: HeartPulse,
      },
      {
        title: "Customs & Port Drug Inspector Liaison",
        desc: "Resolving port detention issues, sample testing protocols, and securing immediate clearance release notes.",
        icon: Clock,
      },
    ],
    workflow: [
      { step: "01", title: "Trade Classification & Quota Audit", desc: "Verifying tariff codes, product registration status, and annual manufacturing requirement calculations." },
      { step: "02", title: "Statutory Application Filing", desc: "Submitting import/export applications, invoices, stability certificates, and manufacturing authorizations." },
      { step: "03", title: "Quota & Permit Issuance", desc: "Liaising with the statutory committee to obtain official NOCs and import/export licenses." },
      { step: "04", title: "Port Clearance & Post-Import Filings", desc: "Coordinating port testing, clearing customs gates, and filing statutory utilization reports." },
    ],
    faqs: [
      {
        q: "What is a Certificate of Pharmaceutical Product (CoPP)?",
        a: "A CoPP is an official certificate issued under the WHO scheme confirming a product is authorized for sale in the exporting country and manufactured under cGMP.",
      },
      {
        q: "How do you assist with controlled raw material import quotas?",
        a: "We calculate past consumption, batch capacities, and market projections to present verified justification dossiers to the statutory Quota Committee.",
      },
      {
        q: "Can you assist with importing unregistered medicines for hospital patients?",
        a: "Yes. We handle Named-Patient Emergency Import permits for life-saving medications requiring urgent hospital administration.",
      },
    ],
  },
];

export function getGatewayServiceBySlug(slug) {
  if (!slug) return null;
  return GATEWAY_SERVICES.find((s) => s.slug === slug || s.id === slug);
}
