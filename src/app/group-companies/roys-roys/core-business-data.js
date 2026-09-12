import {
  Building2,
  Stethoscope,
  Building,
  Layers,
  Lightbulb,
  Activity,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  HeartPulse,
  Microscope,
  Wrench,
  Zap,
  Globe,
  Users,
  FileCheck,
  Cpu,
  Sparkles,
  Package,
  Flame,
  Target,
  BriefcaseMedical,
  FlaskConical,
  Hammer,
  Truck,
  GraduationCap,
  Scale,
  FileText,
  BadgeCheck,
} from "lucide-react";

export const CORE_BUSINESS_AREAS = [
  {
    id: "hospital-infrastructure",
    slug: "hospital-infrastructure",
    number: "01",
    title: "Hospital Infrastructure",
    shortTitle: "Hospital Infrastructure",
    navLabel: "Hospital\nInfrastructure",
    icon: Building2,
    badge: "Healthcare Architecture & Civil Execution",
    eyebrow: "WORLD-CLASS HEALTHCARE ARCHITECTURE & CIVIL ENGINEERING",
    tagline:
      "Master-planned healthcare architecture, structural resilience, infection-controlled clinical zoning, and turn-key hospital civil construction.",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Roys & Roys International designs and constructs advanced healthcare facilities engineered around clinical precision, human dignity, and lifelong infection control. We transform architectural visions into high-performance healthcare environments ranging from multi-specialty tertiary teaching hospitals to specialized cardiology, oncology, and surgical centers.",
      "Modern healthcare infrastructure demands rigorous compliance with international building and health codes. Our dedicated team of healthcare architects, structural engineers, and MEP specialists ensure optimized patient flows, distinct clean-dirty separation, robust seismic resistance, and modular adaptability for future technological expansions.",
      "By integrating evidence-based design (EBD) and sustainable engineering, our facilities minimize hospital-acquired infections (HAIs), lower lifetime energy expenditures, and provide healing environments that accelerate patient recovery."
    ],
    stats: [
      { value: "45+", label: "Hospitals & Facilities Built", icon: Building2 },
      { value: "10,000+", label: "Bed Capacities Delivered", icon: HeartPulse },
      { value: "100%", label: "HTM / AIA Code Compliance", icon: ShieldCheck },
      { value: "15+", label: "Countries Served Globally", icon: Globe },
    ],
    keyPillars: [
      {
        title: "Master Site Planning & Clinical Zoning",
        desc: "Holistic site layout optimizing emergency triage, outpatient departments, inpatient wards, surgical blocks, and sterile supply corridors.",
        icon: Building2,
      },
      {
        title: "Infection-Controlled Environmental Flow",
        desc: "Airflow isolation zoning, positive/negative pressure air handling, touchless doors, and non-porous antimicrobial surfaces.",
        icon: ShieldCheck,
      },
      {
        title: "Specialized Healthcare Structural Engineering",
        desc: "Vibration-damped structural floor slabs for MRI/CT suites, high-density radiation shielding bunkers, and seismic-rated foundations.",
        icon: Hammer,
      },
      {
        title: "Integrated MEP & Life Safety Infrastructure",
        desc: "Redundant emergency power distribution, uninterrupted water filtration, NFPA life-safety sprinklers, and hospital-grade acoustics.",
        icon: Wrench,
      },
      {
        title: "Smart Building Management Systems (BMS)",
        desc: "Centralized SCADA control monitoring cleanroom differential pressures, temperature, humidity, energy consumption, and fire security.",
        icon: Cpu,
      },
      {
        title: "International Accreditation Readiness",
        desc: "Architectural layouts configured to immediately pass Joint Commission International (JCI), WHO, and local ministry licensing audits.",
        icon: Award,
      },
    ],
    technicalHighlights: [
      { label: "Design Standards", value: "AIA Guidelines, HTM 02-01, NFPA 101, FGI 2022" },
      { label: "Cleanroom Classification", value: "ISO Class 5 to 8 for OT, ICU, & Sterile Core" },
      { label: "Structural Rating", value: "Seismic Zone 4 Resistance & Low-Vibration Slabs" },
      { label: "HVAC Integration", value: "100% Fresh Air HEPA Filtration with 25+ ACH" },
      { label: "Safety Redundancy", value: "N+1 Power Generators & Dual Fire Water Reservoirs" },
      { label: "BIM Compliance", value: "LOD 400 3D Revit Modeling & Clash Detection" },
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Programming & Feasibility",
        desc: "Assessment of regional demographics, bed-to-population ratios, departmental capacities, and site feasibility.",
      },
      {
        step: "02",
        title: "Architectural & MEP Detailed Design",
        desc: "LOD 400 BIM modeling, sterile corridor zoning, structural calculations, and regulatory submissions.",
      },
      {
        step: "03",
        title: "Fast-Track Civil & MEP Construction",
        desc: "Precision civil engineering, lead radiation containment, medical utility conduit routing, and clean finishes.",
      },
      {
        step: "04",
        title: "Testing, Commissioning & Handover",
        desc: "Differential pressure smoke testing, MEP load bank testing, air quality validation, and operational handover.",
      },
    ],
    caseStudy: {
      title: "500-Bed Tertiary Teaching Hospital Complex",
      client: "Federal Healthcare Ministry & Institutional Consortium",
      location: "South Asia / MENA Region",
      scope: "Full turnkey architectural design, civil contracting, 16 modular OTs, 60-bed ICU, and central utility plant.",
      outcome: "Delivered 3 months ahead of schedule with zero safety incidents; successfully achieved JCI accreditation on first audit.",
      image: "/roys_hospital_interior.png",
    },
    faqs: [
      {
        q: "What standards do you follow for hospital architecture and zoning?",
        a: "We strictly implement AIA (American Institute of Architects) Healthcare Design Guidelines, UK Health Technical Memoranda (HTM), FGI Guidelines, NFPA 99/101, and JCI International Hospital Accreditation standards.",
      },
      {
        q: "Can you retrofit and modernize functioning hospitals without disrupting patient care?",
        a: "Yes. We specialize in phased hospital retrofits utilizing sealed dust-containment barriers, negative-pressure construction zones, and off-hours utility cutovers to maintain uninterrupted clinical operations.",
      },
      {
        q: "How do you handle heavy diagnostic imaging suites like MRI and Linear Accelerators?",
        a: "We engineer customized RF-shielded copper enclosures for MRI suites and high-density barite concrete bunkers for Linear Accelerators with full vendor-certified site preparation.",
      },
      {
        q: "Do you offer full BIM (Building Information Modeling) services?",
        a: "Yes. All hospital infrastructure projects are designed in LOD 400 BIM, eliminating inter-service clashes between medical gas, HVAC ducts, electrical cables, and structural framing before construction begins.",
      },
    ],
  },
  {
    id: "medical-engineering",
    slug: "medical-engineering",
    number: "02",
    title: "Medical Engineering",
    shortTitle: "Medical Engineering",
    navLabel: "Medical\nEngineering",
    icon: Stethoscope,
    badge: "Biomedical Systems & Specialized Clinical Utilities",
    eyebrow: "ADVANCED BIOMEDICAL PRECISION & CLINICAL SYSTEMS INTEGRATION",
    tagline:
      "Specialized biomedical engineering, modular surgical operating theatres, medical gas pipeline networks, and diagnostic imaging installation.",
    heroImage: "/roys_operation_theatre.png",
    overview: [
      "Medical Engineering represents the vital bridge between complex clinical care and sophisticated engineering technology. Roys & Roys International designs, installs, and validates critical life-support networks and clinical machinery that define modern surgical and diagnostic efficacy.",
      "Our engineering scope encompasses HTM 02-01 certified central medical gas pipeline systems (MGPS), prefabricated modular operating theatres with laminar airflow ceilings, surgical pendant booms, and comprehensive radiation-shielded diagnostic radiology suites.",
      "With a multidisciplinary team of certified biomedical engineers and clinical technicians, we ensure every medical device and critical gas line is calibrated to zero-tolerance safety specifications before patient touch."
    ],
    stats: [
      { value: "180+", label: "Modular OTs Installed", icon: BriefcaseMedical },
      { value: "500,000m", label: "Medical Gas Piping Deployed", icon: Activity },
      { value: "99.99%", label: "Gas Purity & Pipeline Uptime", icon: CheckCircle2 },
      { value: "24/7", label: "Biomedical Rapid Response", icon: Clock },
    ],
    keyPillars: [
      {
        title: "Central Medical Gas Pipeline Systems (MGPS)",
        desc: "Design and installation of oxygen, nitrous oxide, medical air (4 bar/7 bar), vacuum, and AGSS networks compliant with HTM 02-01 & NFPA 99.",
        icon: Activity,
      },
      {
        title: "Modular Operating Theatres & Hybrid Suites",
        desc: "Antimicrobial stainless steel or glass wall panels, laminar air flow ceilings (LAF), motorized anesthesia pendants, and surgeon control panels.",
        icon: BriefcaseMedical,
      },
      {
        title: "Diagnostic Imaging Suite Engineering",
        desc: "Site preparation, RF cages, and precision chiller links for 1.5T/3.0T MRI, multi-slice CT, ceiling fluoroscopy, and Cath Labs.",
        icon: Zap,
      },
      {
        title: "Radiation Protection & Shielding Bunkers",
        desc: "Lead-lined drywall, lead glass observation windows, automated lead sliding doors, and calibrated dosimetric radiation safety certification.",
        icon: ShieldCheck,
      },
      {
        title: "Critical Care ICU Life-Support Integration",
        desc: "Bedhead units (BHU), medical equipment rails, isolated power supply (IPS) systems, and uninterruptible clinical power (UPS).",
        icon: HeartPulse,
      },
      {
        title: "Biomedical Equipment Calibration & SAT",
        desc: "Site Acceptance Testing (SAT), electrical safety inspections (IEC 60601-1), gas flow calibration, and pre-clinical verification.",
        icon: Wrench,
      },
    ],
    technicalHighlights: [
      { label: "Gas Pipeline Standard", value: "HTM 02-01, HTM 2022, ISO 7396-1, NFPA 99" },
      { label: "OT Laminar Cleanliness", value: "ISO Class 5 (Class 100) Particle Count" },
      { label: "Surgical Air Distribution", value: "2.8m x 2.8m Laminar Flow Ceiling Array" },
      { label: "Electrical Safety", value: "Isolated Power Systems (IPS) with EDS Monitoring" },
      { label: "Piping Material", value: "Degreased Medical Grade Phosphorus Deoxidized Copper" },
      { label: "Alarm Telemetry", value: "Master & Area Digital Alarms with BMS Interfacing" },
    ],
    workflow: [
      {
        step: "01",
        title: "Engineering Schematics & Sizing",
        desc: "Diversity calculation for oxygen consumption, vacuum pump sizing, electrical load schedules, and spatial layout.",
      },
      {
        step: "02",
        title: "Prefabrication & Precision Installation",
        desc: "Cleanroom prefabrication of modular wall cassettes, degreased copper brazing under nitrogen purge, and ceiling grid placement.",
      },
      {
        step: "03",
        title: "Rigorous Multi-Stage Pressure Testing",
        desc: "24-hour pneumatic pressure holding tests, cross-connection checks, particulate counts, and gas purity gas chromatography.",
      },
      {
        step: "04",
        title: "Clinical Certification & Commissioning",
        desc: "Final pharmacist gas sampling, laminar velocity smoke testing, electrical safety certification, and clinical handover.",
      },
    ],
    caseStudy: {
      title: "State-of-the-Art 12 Modular OT & Cath Lab Complex",
      client: "Specialized Heart & Vascular Institute",
      location: "Lahore / Regional Healthcare Hub",
      scope: "Turnkey delivery of 12 modular operating rooms, 2 hybrid Cath Labs, 400-bed medical gas plant, and isolated power systems.",
      outcome: "Zero contamination record across 15,000+ cardiac surgeries; seamless integration with Siemens & Philips imaging suites.",
      image: "/roys_operation_theatre.png",
    },
    faqs: [
      {
        q: "What makes modular operating theatres superior to conventional brick-and-mortar OTs?",
        a: "Modular OTs offer seamless antimicrobial surfaces with no bacteria-harboring joints, pre-integrated utility channels for rapid equipment upgrades, airtight seals for laminar pressure maintenance, and faster installation times.",
      },
      {
        q: "How is purity and safety guaranteed in medical gas piping?",
        a: "We use exclusively degreased medical copper pipes joined with silver-copper brazing alloy under a continuous inert nitrogen purge to prevent internal oxidation, followed by full gas identification, particulate, and dew point testing.",
      },
      {
        q: "What is an Isolated Power System (IPS) and why is it needed in OTs and ICUs?",
        a: "IPS provides ungrounded electrical power in Group 2 medical locations to prevent sudden power trips during critical surgery and protect patients against electrical micro-shocks.",
      },
      {
        q: "Can Roys & Roys integrate equipment from multiple global OEMs?",
        a: "Yes, our medical engineering solutions are vendor-agnostic and designed to seamlessly interface with Siemens, GE, Philips, Mindray, Karl Storz, and other leading manufacturers.",
      },
    ],
  },
  {
    id: "facility-management",
    slug: "facility-management",
    number: "03",
    title: "Facility Management",
    shortTitle: "Facility Management",
    navLabel: "Facility\nManagement",
    icon: Building,
    badge: "Healthcare Engineering Operations & Biomedical Maintenance",
    eyebrow: "TOTAL HEALTHCARE FACILITY MANAGEMENT & 24/7 ENGINEERING RESILIENCE",
    tagline:
      "Comprehensive operation & maintenance, biomedical lifecycle management, cleanroom validation, and 24/7 preventive SLA maintenance.",
    heroImage: "/cleanroom-facility.jpg",
    overview: [
      "A hospital is an intricate ecosystem where power fluctuations, gas pressure drops, or climate control failures directly impact human lives. Roys & Roys International delivers specialized healthcare facility management (HFM) that guarantees 99.9% clinical utility uptime 24 hours a day, 365 days a year.",
      "Unlike generic commercial building management, our healthcare facility teams are trained in infection control, medical electrical standards, biomedical calibration, and statutory health authority compliance. We manage central chiller plants, medical air compressors, backup diesel generators, water treatment systems, and hazardous medical waste operations.",
      "Through our Computerized Maintenance Management Systems (CMMS), every asset is tracked from procurement to decommissioning, maximizing device lifespan while minimizing unexpected clinical downtime."
    ],
    stats: [
      { value: "35+", label: "Hospitals Under Active FM", icon: Building },
      { value: "99.9%", label: "Clinical Utility Uptime Rate", icon: CheckCircle2 },
      { value: "< 15 min", label: "Critical Incident Response", icon: Clock },
      { value: "25,000+", label: "Biomedical Assets Maintained", icon: Wrench },
    ],
    keyPillars: [
      {
        title: "24/7 Central Utility Plant Operations",
        desc: "Round-the-clock management of central chillers, cooling towers, steam boilers, medical compressors, and vacuum pump stations.",
        icon: Wrench,
      },
      {
        title: "Biomedical Asset Lifecycle Management",
        desc: "Comprehensive AMC/CMC contracts, scheduled preventive maintenance, calibration certification, and rapid emergency spare replacement.",
        icon: Stethoscope,
      },
      {
        title: "Cleanroom & HVAC Continuous Validation",
        desc: "Periodic DOP/PAO HEPA filter testing, airborne particle counting, air change rate verifications, and humidity monitoring.",
        icon: Layers,
      },
      {
        title: "Emergency Power & Electrical Resilience",
        desc: "Routine load-bank testing of synchronizing diesel generators, UPS battery bank inspections, and thermal imaging of main switchboards.",
        icon: Zap,
      },
      {
        title: "Hospital Water Purity & RO Dialysis Plants",
        desc: "Maintenance of medical reverse osmosis (RO) plants for hemodialysis, potable water ultraviolet sterilizers, and legionella testing.",
        icon: Sparkles,
      },
      {
        title: "Statutory Compliance & Audit Support",
        desc: "Management of all documentation required for JCI, ISO 14001, civil defense fire inspections, and environmental agency clearances.",
        icon: ShieldCheck,
      },
    ],
    technicalHighlights: [
      { label: "Maintenance Protocol", value: "RCM (Reliability-Centered Maintenance) & CMMS Driven" },
      { label: "Emergency Response SLA", value: "Under 15 minutes on-site response for Code Red/Amber" },
      { label: "Cleanroom Validation", value: "ISO 14644-1 particle counts every 6 months" },
      { label: "Calibration Tracing", value: "NIST / UKAS traceable test instrumentation" },
      { label: "Energy Optimization", value: "Predictive VFD chiller modulation saving 18-24% kWh" },
      { label: "Water Quality Standard", value: "AAMI / ISO 23500 dialysate water compliance" },
    ],
    workflow: [
      {
        step: "01",
        title: "Asset Audit & CMMS Onboarding",
        desc: "Barcode tagging of all electro-mechanical and biomedical assets with baseline condition and warranty profiling.",
      },
      {
        step: "02",
        title: "Tailored SLA & Preventive Calendars",
        desc: "Customizing service level agreements (SLAs), maintenance schedules, and critical spare parts inventory stocking.",
      },
      {
        step: "03",
        title: "Daily Operations & 24/7 Monitoring",
        desc: "Stationing certified shift engineers, real-time BMS parameter logging, and continuous preventive servicing.",
      },
      {
        step: "04",
        title: "Continuous Quality & Cost Audits",
        desc: "Monthly uptime reports, energy audits, MTBF/MTTR analytics, and accreditation documentation reviews.",
      },
    ],
    caseStudy: {
      title: "Comprehensive Facility Management of 750-Bed Medical City",
      client: "Provincial Health Department & Armed Forces Hospital",
      location: "Federal Capital Region",
      scope: "Complete operations and maintenance covering central energy plant, 22 OTs, 80 ICU beds, 4,200 biomedical devices, and BMS.",
      outcome: "Achieved 99.98% power and medical gas uptime across 4 consecutive years; reduced annual hospital energy costs by 21%.",
      image: "/cleanroom-facility.jpg",
    },
    faqs: [
      {
        q: "How does healthcare facility management differ from regular commercial facility management?",
        a: "Healthcare FM deals directly with life-critical environments. A power outage or HVAC failure can jeopardize surgeries, sterile compounding, or organ storage. Our technicians undergo clinical safety training and understand hospital infection control.",
      },
      {
        q: "What is your emergency response time for critical failures like medical gas or ICU power?",
        a: "We maintain dedicated 24/7 on-site resident engineering teams with guaranteed immediate response (< 5 minutes) for life-support systems and an off-site rapid mobile backup squad.",
      },
      {
        q: "Do you supply spare parts directly under maintenance contracts?",
        a: "Yes. Under our Comprehensive Maintenance Contracts (CMC), we manage genuine OEM spare parts inventories to replace faulty components immediately without procurement delays.",
      },
      {
        q: "Can you assist our hospital in achieving JCI accreditation for facility safety?",
        a: "Absolutely. Our facility management contracts include full compliance documentation aligned with JCI Facility Management & Safety (FMS) standards, including fire drills, hazardous material logs, and utility failure contingency protocols.",
      },
    ],
  },
  {
    id: "turnkey-projects",
    slug: "turnkey-projects",
    number: "04",
    title: "Turnkey Projects",
    shortTitle: "Turnkey Projects",
    navLabel: "Turnkey\nProjects",
    icon: Layers,
    badge: "EPC Execution from Concept to Clinical Handover",
    eyebrow: "END-TO-END HEALTHCARE DELIVERY FROM CONCEPT TO PATIENT CARE",
    tagline:
      "Single-source accountability delivering design, civil construction, medical equipment fit-out, commissioning, and clinical readiness.",
    heroImage: "/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg",
    overview: [
      "Developing a new hospital or healthcare facility involves hundreds of specialized contractors, OEMs, and regulatory bodies. A failure in coordination leads to costly delays, incompatible equipment conduits, and budget overruns. Roys & Roys International acts as your single-point turnkey EPC (Engineering, Procurement, and Construction) partner.",
      "From greenfield site evaluation and architectural design to civil construction, MEP installations, medical device procurement, clinical IT networking, and healthcare worker training — we handle every aspect under one unified project umbrella.",
      "Our turnkey approach ensures seamless alignment between architectural structures and medical equipment specifications, delivering turnkey hospitals on time, within budget, and completely ready to admit patients from day one."
    ],
    stats: [
      { value: "30+", label: "Turnkey Hospitals Delivered", icon: Layers },
      { value: "$250M+", label: "Project Value Executed", icon: Award },
      { value: "100%", label: "On-Time Project Handover", icon: Clock },
      { value: "1-Stop", label: "Complete Single-Source Partner", icon: ShieldCheck },
    ],
    keyPillars: [
      {
        title: "Feasibility, Financing & Master Planning",
        desc: "Comprehensive feasibility studies, epidemiological demand forecasting, financial modeling, and architectural master planning.",
        icon: Lightbulb,
      },
      {
        title: "Fast-Track Civil & Specialized Construction",
        desc: "Integrated civil execution utilizing modular construction methods, prefabricated pods, and seismic-rated structural engineering.",
        icon: Building2,
      },
      {
        title: "Complete MEP & Medical Gas Integration",
        desc: "Single-source coordination between civil builders and medical gas, cleanroom HVAC, electrical substations, and plumbing networks.",
        icon: Wrench,
      },
      {
        title: "Medical Equipment Sourcing & Installation",
        desc: "Direct-from-OEM procurement of high-tech radiology, operating room hardware, ICU life support, and hospital furniture.",
        icon: Stethoscope,
      },
      {
        title: "Clinical IT & Smart Hospital Systems",
        desc: "Deployment of Hospital Information Systems (HIS), PACS radiology servers, telemetry nurse call networks, and digital queues.",
        icon: Cpu,
      },
      {
        title: "Staff Training, Licensing & Commissioning",
        desc: "Doctor, nurse, and biomedical technician hands-on training, regulatory licensing clearances, and formal patient-ready commissioning.",
        icon: GraduationCap,
      },
    ],
    technicalHighlights: [
      { label: "Contract Model", value: "Turnkey EPC / Design-Build / LSTK (Lump-Sum Turnkey)" },
      { label: "Project Management", value: "PMI / Prince2 certified managers with Primavera P6" },
      { label: "Procurement Reach", value: "Direct agreements with 50+ global medical OEMs" },
      { label: "Quality Assurance", value: "ISO 9001:2015 & ISO 13485 certified processes" },
      { label: "Warranty Coverage", value: "Comprehensive 24 to 36 month turnkey system defect liability" },
      { label: "Time-to-Market", value: "30-40% faster deployment compared to multi-vendor model" },
    ],
    workflow: [
      {
        step: "01",
        title: "Conceptualization & Programming",
        desc: "Defining clinical service profile, department capacities, budget envelope, and site zoning roadmap.",
      },
      {
        step: "02",
        title: "Engineering & Procurement Packages",
        desc: "LOD 400 BIM design, long-lead equipment procurement from global OEMs, and local authority approvals.",
      },
      {
        step: "03",
        title: "Integrated Construction & Fit-Out",
        desc: "Simultaneous civil construction, cleanroom wall installation, MEP ducting, and medical equipment pre-wiring.",
      },
      {
        step: "04",
        title: "Commissioning & First Patient Day",
        desc: "Integrated systems commissioning, biomedical calibration, clinical simulated dry-runs, and full facility handover.",
      },
    ],
    caseStudy: {
      title: "Turnkey 200-Bed Women & Children Hospital",
      client: "International Philanthropic Trust & Regional Government",
      location: "Khyber Pakhtunkhwa / Regional Healthcare District",
      scope: "Full greenfield turnkey delivery: architectural design, civil contracting, 6 OTs, 30-bed NICU/PICU, CT & X-Ray, and 12-month O&M.",
      outcome: "Delivered within 18 months; hospital now serves over 300,000 mothers and children annually.",
      image: "/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg",
    },
    faqs: [
      {
        q: "Why choose a turnkey EPC model over hiring separate architects, civil contractors, and equipment vendors?",
        a: "The turnkey model eliminates blame-shifting between civil builders and medical equipment suppliers, drastically reduces project management overhead, prevents conduit mismatches, and locks in total cost and completion dates upfront.",
      },
      {
        q: "How do you manage budget risk and cost escalations during long project timelines?",
        a: "We work on transparent Lump-Sum Turnkey (LSTK) and Guaranteed Maximum Price (GMP) structures with early procurement hedging on long-lead overseas medical machinery.",
      },
      {
        q: "Do you stay involved after the hospital is completed?",
        a: "Yes. Our turnkey packages include post-handover warranty support, defect liability period (DLP) coverage, and optional 1-to-5 year operational facility management contracts.",
      },
      {
        q: "Can you deliver turnkey modular or prefabricated hospitals for rapid emergency response?",
        a: "Yes. We offer rapid-deployment modular hospital solutions that can be fabricated and operational within 60 to 90 days for pandemic or disaster-relief scenarios.",
      },
    ],
  },
  {
    id: "consultancy-advisory",
    slug: "consultancy-advisory",
    number: "05",
    title: "Consultancy & Advisory",
    shortTitle: "Consultancy & Advisory",
    navLabel: "Consultancy &\nAdvisory",
    icon: Lightbulb,
    badge: "Healthcare Strategy, Technical Feasibility & Accreditation",
    eyebrow: "STRATEGIC HEALTHCARE CONSULTING, FEASIBILITY & ACCREDITATION",
    tagline:
      "Evidence-based hospital advisory, clinical equipment planning, financial feasibility modeling, and international accreditation support.",
    heroImage: "/ROYSONS PVT. LTD. OFFICE IMAGE.jpeg",
    overview: [
      "In an era of rising healthcare capital expenditure and rapid medical innovation, informed strategic decisions at the project's inception determine long-term operational profitability and clinical success. Roys & Roys International provides elite healthcare consulting services to investors, health ministries, hospital boards, and international development agencies.",
      "Our advisory practice brings together seasoned healthcare executives, senior biomedical planners, clinical architects, and financial analysts. We evaluate epidemiological demographics, conduct bed-capacity simulations, prepare detailed clinical equipment schedules (BOQs), and model 10-year cash flow projections.",
      "We also guide existing institutions through complex international accreditation transformations, upgrading clinical protocols and facility documentation to achieve Joint Commission International (JCI), ISO 15189, and ISO 9001 certifications."
    ],
    stats: [
      { value: "70+", label: "Strategic Projects Advised", icon: Lightbulb },
      { value: "100%", label: "First-Time JCI Audit Success", icon: Award },
      { value: "40+", label: "Feasibility Studies Delivered", icon: FileText },
      { value: "$500M+", label: "Health Capex Optimized", icon: Scale },
    ],
    keyPillars: [
      {
        title: "Feasibility Studies & Market Demand Modeling",
        desc: "Regional disease burden analysis, catchment population demographics, competitive benchmarking, and financial viability forecasting.",
        icon: FileText,
      },
      {
        title: "Clinical Service Planning & Medical Briefs",
        desc: "Translating community healthcare needs into detailed departmental room data sheets (RDS), clinical workflows, and staffing models.",
        icon: Stethoscope,
      },
      {
        title: "Medical Equipment Planning & BOQ Structuring",
        desc: "Room-by-room medical equipment scheduling, technical specification drafting, budget optimization, and vendor-neutral tender documents.",
        icon: Package,
      },
      {
        title: "International Accreditation (JCI & ISO)",
        desc: "Gap analysis audits, clinical policy re-engineering, infection control protocols, and staff mock-audit preparations for JCI / ISO recognition.",
        icon: Award,
      },
      {
        title: "Public-Private Partnership (PPP) Advisory",
        desc: "Transaction advisory, concession agreement structuring, risk allocation matrices, and bankable project documentation for government partnerships.",
        icon: Scale,
      },
      {
        title: "Hospital Operational Turnaround & Auditing",
        desc: "Clinical workflow re-engineering, OT utilization optimization, supply chain lean management, and revenue leakage plugging.",
        icon: Target,
      },
    ],
    technicalHighlights: [
      { label: "Consulting Framework", value: "Evidence-Based Design (EBD) & Lean Healthcare 6 Sigma" },
      { label: "Accreditation Benchmarks", value: "JCI 7th Edition, CAP, ISO 15189, ISO 9001:2015" },
      { label: "Equipment Scheduling", value: "Automated Room Data Sheets (RDS) linked to Revit BIM" },
      { label: "Financial Modeling", value: "DCF, IRR, NPV, Payback Period & Sensitivity Scenarios" },
      { label: "Advisory Team", value: "Senior MDs, Clinical Engineers, Health Economists, & PMPs" },
      { label: "Deliverable Format", value: "Bankable Detailed Project Reports (DPR) for Global Lenders" },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery & Market Research",
        desc: "Deep-dive stakeholder interviews, local epidemiological data gathering, and site zoning evaluation.",
      },
      {
        step: "02",
        title: "Clinical Brief & Financial Model",
        desc: "Developing specialty service matrix, bed count distribution, CAPEX/OPEX forecasts, and investment returns.",
      },
      {
        step: "03",
        title: "Technical Specifications & Procurement Strategy",
        desc: "Authoring comprehensive equipment schedules, pre-qualification criteria, and vendor evaluation scorecards.",
      },
      {
        step: "04",
        title: "Implementation Oversight & Quality Gateways",
        desc: "Monitoring construction alignment against clinical brief, factory witness testing, and accreditation audit sign-off.",
      },
    ],
    caseStudy: {
      title: "Bankable Feasibility & Equipment Planning for 350-Bed Specialty Hospital",
      client: "Private Equity Healthcare Fund & Regional Hospital Group",
      location: "Gulf / South Asia Corridor",
      scope: "Full market feasibility study, room-by-room medical equipment scheduling (1,800 items), financial modeling, and PPP contract drafting.",
      outcome: "Successfully secured $85M project financing from international development banks; project finished within 3% of original budget.",
      image: "/ROYSONS PVT. LTD. OFFICE IMAGE.jpeg",
    },
    faqs: [
      {
        q: "What is the difference between an architectural plan and a clinical equipment plan?",
        a: "An architectural plan lays out walls and rooms, whereas a clinical equipment plan details every specific medical device, utility requirement (power load, gases, cooling, floor loading), and conduit connection needed in each room so that the building perfectly accommodates the technology.",
      },
      {
        q: "Are your feasibility studies accepted by international lenders like IFC, ADB, or commercial banks?",
        a: "Yes. Our feasibility studies and Detailed Project Reports (DPR) follow strict international banking guidelines, including sensitivity analysis, debt service coverage ratio (DSCR) calculations, and environmental impact assessments.",
      },
      {
        q: "How long does a JCI accreditation consulting engagement take?",
        a: "Typically 9 to 18 months depending on the hospital's baseline readiness, encompassing policy authoring, mock surveys, clinical indicator tracking, and physical facility adjustments.",
      },
      {
        q: "Can you assist governments in structuring healthcare public-private partnerships (PPP)?",
        a: "Yes. We have advised government health departments on structuring Build-Operate-Transfer (BOT) and equipment concession contracts with transparent KPI frameworks.",
      },
    ],
  },
  {
    id: "equipment-solutions",
    slug: "equipment-solutions",
    number: "06",
    title: "Equipment Solutions",
    shortTitle: "Equipment Solutions",
    navLabel: "Equipment\nSolutions",
    icon: Activity,
    badge: "Direct OEM Sourcing, Diagnostic Systems & Life Support",
    eyebrow: "GLOBAL PROCUREMENT & INTEGRATION OF CUTTING-EDGE MEDICAL DEVICES",
    tagline:
      "Authorized direct OEM supply of diagnostic imaging, surgical instruments, patient monitoring, ICU life-support hardware, and clinical lab automation.",
    heroImage: "/roys_ct_scan.png",
    overview: [
      "Medical equipment represents the clinical frontline of any healthcare institution. The precision of a diagnosis and the efficacy of a surgical intervention depend directly on the caliber and calibration of the instruments in the clinician's hands. Roys & Roys International serves as a trusted global procurement and integration partner for world-class medical equipment.",
      "We maintain direct relationships with premier original equipment manufacturers (OEMs) across Europe, the USA, and Asia, bypassing unnecessary intermediary markups. Our portfolio spans high-field MRI scanners, multi-slice CT, digital X-rays, ultrasound, intelligent ventilators, electro-hydraulic surgical tables, endoscopy towers, and automated clinical chemistry analyzers.",
      "Beyond procurement, we manage end-to-end cold-chain logistics, on-site rigging, precision installation, biomedical electrical safety certification (IEC 60601), and certified clinical application training for medical staff."
    ],
    stats: [
      { value: "1,500+", label: "Advanced Systems Deployed", icon: Activity },
      { value: "50+", label: "Global OEM Partnerships", icon: Globe },
      { value: "100%", label: "FDA / CE Cleared Equipment", icon: ShieldCheck },
      { value: "5-Year", label: "Extended Warranty Support", icon: Award },
    ],
    keyPillars: [
      {
        title: "Diagnostic Radiology & Imaging Systems",
        desc: "1.5T / 3.0T MRI, 64/128-slice CT scanners, digital radiography (DR) suites, mobile C-arms, and 3D/4D color Doppler ultrasound.",
        icon: Zap,
      },
      {
        title: "Surgical Suites & Operating Room Tech",
        desc: "Electro-hydraulic multi-position surgical tables, shadowless LED surgical lights, 4K endoscopy towers, and electrosurgical diathermy units.",
        icon: BriefcaseMedical,
      },
      {
        title: "ICU & Critical Care Life-Support Devices",
        desc: "Invasive/non-invasive ICU ventilators, multi-parameter bedside monitors, central telemetry stations, syringe pumps, and defibrillators.",
        icon: HeartPulse,
      },
      {
        title: "Clinical Laboratory & Diagnostic Automation",
        desc: "Fully automated clinical chemistry analyzers, 5-part hematology counters, blood gas analyzers, centrifuges, and PCR workstations.",
        icon: FlaskConical,
      },
      {
        title: "Hospital Medical Furniture & Patient Logistics",
        desc: "5-function motorized electric ICU beds, hydraulic emergency stretchers, stainless crash carts, and ergonomic ward furniture.",
        icon: Building,
      },
      {
        title: "Comprehensive Application Training & Warranty",
        desc: "OEM-certified application specialist training for doctors and radiographers, backed by multi-year warranty and preventive service.",
        icon: Award,
      },
    ],
    technicalHighlights: [
      { label: "Regulatory Clearance", value: "US FDA 510(k), CE Medical Device Regulation (MDR), ISO 13485" },
      { label: "Imaging Modalities", value: "MRI, CT, Fixed/Mobile DR, Fluoroscopy, Mammography, Echo" },
      { label: "Electrical Compliance", value: "IEC 60601-1 (Medical Electrical Safety & EMC)" },
      { label: "Software Compatibility", value: "DICOM 3.0, HL7, PACS/RIS, and EMR bi-directional links" },
      { label: "Logistics Capability", value: "Air-freight shock-monitored crating and calibrated rigging" },
      { label: "Warranty Coverage", value: "Comprehensive parts & labor warranty with local engineer standby" },
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Specification Matching",
        desc: "Consulting with clinical department heads to align equipment features precisely with diagnostic caseloads.",
      },
      {
        step: "02",
        title: "Direct OEM Sourcing & Logistics",
        desc: "Direct factory orders, pre-shipment inspections, air/sea freight logistics, and expedited customs clearance.",
      },
      {
        step: "03",
        title: "Precision Rigging & Installation",
        desc: "Heavy machinery rigging, vibration-damping installation, electrical and medical gas coupling.",
      },
      {
        step: "04",
        title: "Calibration, Application Training & Handover",
        desc: "Electrical safety tests, phantom calibration scans, clinical staff application certification, and warranty activation.",
      },
    ],
    caseStudy: {
      title: "Complete Medical Equipment Fit-Out for 180-Bed Cardiac & Surgical Hospital",
      client: "Federal Healthcare Directorate",
      location: "Islamabad / Regional Medical Center",
      scope: "Turnkey supply of 1.5T MRI, 128-slice CT, 8 Modular OT suites, 32-bed ICU monitor stack, and 180 motorized hospital beds.",
      outcome: "Executed within 4 months; achieved 100% equipment availability and zero patient downtime since launch.",
      image: "/roys_ct_scan.png",
    },
    faqs: [
      {
        q: "Do you supply brand-new, factory-sealed equipment or refurbished systems?",
        a: "We supply 100% brand-new, factory-sealed equipment sourced directly from certified global manufacturers with original manufacturer warranty certificates. On client request, we can also supply certified OEM-refurbished imaging systems.",
      },
      {
        q: "Who handles clinical staff training after equipment installation?",
        a: "Our certified clinical application specialists provide thorough on-site hands-on training for radiographers, physicians, nurses, and biomedical engineers, complete with competency certificates.",
      },
      {
        q: "How do you guarantee spare parts availability in future years?",
        a: "We guarantee a minimum of 10 years of spare parts availability through contractual commitments backed directly by our OEM manufacturing partners.",
      },
      {
        q: "Can you connect new diagnostic equipment to our existing hospital PACS / HIS network?",
        a: "Yes. All our diagnostic imaging and laboratory equipment supports universal DICOM 3.0 and HL7 protocols for seamless integration with existing hospital software.",
      },
    ],
  },
  {
    id: "institutional-support",
    slug: "institutional-support",
    number: "07",
    title: "Institutional Support",
    shortTitle: "Institutional Support",
    navLabel: "Institutional\nSupport",
    icon: ShieldCheck,
    badge: "Government Tenders, Multilateral Programs & Sovereign Procurement",
    eyebrow: "GOVERNMENT, MILITARY & MULTILATERAL HEALTHCARE CONTRACTING",
    tagline:
      "High-volume procurement, public-sector healthcare tenders, military healthcare logistics, and emergency humanitarian relief supply.",
    heroImage: "/pakmedical-card1.png",
    overview: [
      "Large-scale public health ministries, military medical corps, and multilateral donor organizations (such as WHO, UNICEF, and the World Bank) face unique procurement and logistical hurdles. Delivering thousands of medical kits, setting up emergency field hospitals, or outfitting district healthcare networks requires sovereign-scale contracting capability.",
      "Roys & Roys International possesses the financial bonding capacity, regulatory licensing, and global freight network required to execute multi-million-dollar institutional healthcare tenders smoothly and transparently.",
      "Whether delivering high-volume medical consumables, specialized field hospitals for disaster zones, or long-term strategic supply frameworks for national defense medical services, we ensure compliance, accountability, and on-time distribution across challenging operational terrains."
    ],
    stats: [
      { value: "50+", label: "Institutional Tenders Executed", icon: ShieldCheck },
      { value: "10M+", label: "Medical Consumables Distributed", icon: Package },
      { value: "100%", label: "Public Procurement Transparency", icon: Award },
      { value: "24-48h", label: "Emergency Relief Response", icon: Clock },
    ],
    keyPillars: [
      {
        title: "Public Health Ministry Framework Contracts",
        desc: "Multi-year framework supply agreements for district headquarter hospitals, primary healthcare clinics, and rural maternal units.",
        icon: Building2,
      },
      {
        title: "Military & Defense Healthcare Contracting",
        desc: "Heavy-duty medical infrastructure, mobile surgical units, field triage equipment, and specialized trauma care kits for armed forces.",
        icon: ShieldCheck,
      },
      {
        title: "Multilateral & UN Donor Funded Programs",
        desc: "Execution of healthcare procurement funded by WHO, UNICEF, USAID, Global Fund, and regional development banks with strict compliance.",
        icon: Globe,
      },
      {
        title: "High-Volume Medical Consumables & PPE",
        desc: "Sovereign-scale supply of sterile surgical gloves, disposable syringes, infusion sets, cannulas, surgical drapes, and PPE.",
        icon: Package,
      },
      {
        title: "Disaster Relief & Mobile Field Hospitals",
        desc: "Rapid-deployment containerized or tent-based mobile surgical clinics equipped with autonomous generators and water purification.",
        icon: Truck,
      },
      {
        title: "Customs, Cold-Chain Logistics & Warehousing",
        desc: "Integrated customs clearance, GDP-compliant temperature-controlled warehousing, and last-mile logistics to remote regional clinics.",
        icon: Wrench,
      },
    ],
    technicalHighlights: [
      { label: "Procurement Rules", value: "Compliant with PPRA, World Bank, & UN Procurement Guidelines" },
      { label: "Cold-Chain Integrity", value: "2°C to 8°C continuous data-logged thermal transit" },
      { label: "Financial Bonding", value: "Multi-million dollar bid bonds, performance guarantees, & LCs" },
      { label: "Quality Certifications", value: "ISO 9001, ISO 13485, WHO-PQS prequalified products" },
      { label: "Warehousing Capacity", value: "Over 50,000 sq ft GDP-certified central medical storage" },
      { label: "Tracking System", value: "Real-time GPS fleet tracking and lot/batch digital traceability" },
    ],
    workflow: [
      {
        step: "01",
        title: "Tender Analysis & Compliance Structuring",
        desc: "Evaluating technical bid specifications, bonding criteria, and delivery schedules to author compliant proposals.",
      },
      {
        step: "02",
        title: "Global Supply Chain Consolidation",
        desc: "Aggregating shipments from international manufacturers into centralized export hubs with batch quality testing.",
      },
      {
        step: "03",
        title: "Expedited Customs & Temperature Control",
        desc: "Clearance through sovereign trade corridors under diplomatic and emergency health exemptions.",
      },
      {
        step: "04",
        title: "Last-Mile Distribution & Site Handover",
        desc: "Decentralized delivery to district hospitals, on-site physical verification with government inspectors, and receipt certification.",
      },
    ],
    caseStudy: {
      title: "National Emergency Healthcare Supply & Mobile Triage Deployment",
      client: "Federal Disaster Management Authority & Armed Forces Medical Corps",
      location: "Nationwide Multi-Province Deployment",
      scope: "Emergency supply of 200 ICU ventilators, 500 patient monitors, 5 mobile surgical units, and 2 million sterile disposable items.",
      outcome: "Mobilized and distributed across 42 district sites within 14 days of tender award; zero cold-chain breaches.",
      image: "/pakmedical-card1.png",
    },
    faqs: [
      {
        q: "What types of government and institutional clients does Roys & Roys serve?",
        a: "We actively contract with federal and provincial health ministries, military and paramilitary healthcare corps, social security healthcare institutions, and international humanitarian organizations like WHO, UNICEF, and Red Cross/Crescent.",
      },
      {
        q: "How do you ensure transparency and compliance with public procurement regulations (e.g. PPRA)?",
        a: "All our institutional tender bids are structured strictly in accordance with PPRA and international funding agency procurement guidelines, supported by certified origin documentation and manufacturer authorization letters.",
      },
      {
        q: "Can Roys & Roys provide performance bank guarantees and bid bonds for mega-tenders?",
        a: "Yes. Backed by the financial strength of the Roy Sons Conglomerate, we maintain extensive credit facilities with premier commercial and state banks to issue requisite bid bonds and performance guarantees.",
      },
      {
        q: "How fast can you deploy emergency medical supplies or field clinics during a crisis?",
        a: "We maintain ready contingency stock reserves of critical life support and disposable medical items, enabling deployment within 24 to 48 hours for national emergencies.",
      },
    ],
  },
];

export function getCoreBusinessBySlug(slug) {
  return CORE_BUSINESS_AREAS.find((area) => area.slug === slug) || null;
}

export function getAllCoreBusinessSlugs() {
  return CORE_BUSINESS_AREAS.map((area) => area.slug);
}
