import {
  HeartPulse,
  BriefcaseMedical,
  FlaskConical,
  Microscope,
  Pill,
  Globe,
  ShieldCheck,
  Stethoscope,
  Activity,
  Cpu,
  Wrench,
  Layers,
  Sparkles,
  Zap,
  Clock,
  Award,
  CheckCircle2,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export const SERVICES_LIST = [
  {
    slug: "healthcare-technologies",
    label: "Healthcare\nTechnologies",
    title: "Healthcare Technologies",
    eyebrow: "ADVANCED MEDICAL SYSTEMS & DIAGNOSTIC INNOVATIONS",
    tagline: "Empowering modern medical institutions with state-of-the-art diagnostic imaging, critical care instrumentation, and digital health technologies.",
    icon: HeartPulse,
    badge: "Diagnostic & Critical Care",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Roys & Roys International delivers cutting-edge medical technologies and diagnostic systems designed to elevate clinical outcomes and hospital productivity. We partner with world-renowned healthcare manufacturers including Siemens Healthineers, Philips Healthcare, GE Healthcare, and Becton Dickinson to equip tertiary care facilities, military hospitals, and private clinical networks.",
      "From high-field MRI scanners and multi-slice CT systems to intensive care ventilators and telemetry patient monitors, our turnkey medical technology solutions include rigorous site planning, precision installation, clinical staff training, and long-term maintenance support.",
      "Our solutions are engineered to meet stringent international standards (CE, FDA, ISO 13485), ensuring unwavering diagnostic precision, patient safety, and operational reliability for healthcare professionals worldwide."
    ],
    stats: [
      { value: "250+", label: "Medical Suites Installed" },
      { value: "99.8%", label: "System Reliability Rate" },
      { value: "30+", label: "Global OEM Partners" },
      { value: "24/7", label: "Technical Support Coverage" }
    ],
    keyPillars: [
      {
        title: "Diagnostic Imaging Suites",
        desc: "High-resolution 1.5T & 3.0T MRI systems, multi-slice CT scanners, digital radiography (DR) rooms, C-arms, and digital mammography units for early and precise diagnostic detection.",
        icon: Activity
      },
      {
        title: "Critical Care & ICU Systems",
        desc: "Advanced mechanical ventilators, multi-parameter patient monitors, automated syringe & volumetric infusion pumps, and central monitoring stations for intensive care environments.",
        icon: HeartPulse
      },
      {
        title: "Surgical & Operating Room Tech",
        desc: "Electro-hydraulic surgical tables, shadowless surgical LED lighting, electrosurgical units (ESU), anesthesia workstations, and integrated endoscopic video towers.",
        icon: BriefcaseMedical
      },
      {
        title: "Cardiology & Vascular Diagnostics",
        desc: "12-lead digital ECG machines, treadmill stress test systems, Holter monitoring, echocardiography scanners, and digital catheterization laboratory equipment.",
        icon: Zap
      },
      {
        title: "Maternal & Neonatal Care",
        desc: "Advanced neonatal intensive care incubators, radiant infant warmers, phototherapy units, and fetal Doppler monitoring systems to ensure newborn safety.",
        icon: Sparkles
      },
      {
        title: "Medical IT & PACS / RIS",
        desc: "Hospital-wide PACS (Picture Archiving and Communication System), cloud-based diagnostic archiving, telemedicine consultation carts, and AI diagnostic software integrations.",
        icon: Cpu
      }
    ],
    technologies: [
      "Digital Radiography (Fixed & Mobile X-Ray)",
      "High-Field Magnetic Resonance Imaging (MRI)",
      "Multi-Slice Computed Tomography (CT)",
      "Color Doppler 3D/4D Ultrasound Systems",
      "Critical Care Invasive & Non-Invasive Ventilators",
      "Integrated Anesthesia Delivery Workstations",
      "Central Telemetry & Patient Monitoring Hubs",
      "Defibrillators & Automated External Defibrillators (AEDs)",
      "Surgical Diathermy & Cautery Systems",
      "Endoscopic & Laparoscopic Tower Systems"
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Needs Assessment",
        desc: "Comprehensive evaluation of hospital caseload, specialty requirements, and departmental workflows to recommend optimal equipment configurations."
      },
      {
        step: "02",
        title: "Site Readiness & Engineering Planning",
        desc: "Architectural, electrical, and structural site preparation including radiation shielding and HVAC planning for heavy diagnostic systems."
      },
      {
        step: "03",
        title: "OEM Installation & Calibration",
        desc: "Factory-trained biomedical engineers execute precision installation, software integration, and certified quality assurance calibration."
      },
      {
        step: "04",
        title: "Staff Training & Lifecycle Support",
        desc: "Comprehensive clinical training for doctors and technicians followed by scheduled preventive maintenance and 24/7 on-call technical response."
      }
    ],
    benefits: [
      "Direct partnerships with tier-1 global healthcare technology manufacturers",
      "Compliance with FDA, CE, and ISO 13485 quality and safety standards",
      "Turnkey project delivery from site architectural prep to clinical commissioning",
      "Fast response times with locally stocked OEM spare parts and certified engineers",
      "Enhanced diagnostic speed and accuracy for superior patient outcomes"
    ],
    industries: [
      "Tertiary & Teaching Hospitals",
      "Armed Forces & Military Healthcare Services",
      "Private Diagnostic & Imaging Centers",
      "Specialized Surgical Clinics & Ambulatory Centers",
      "Government Healthcare Ministries & Public Health Departments"
    ],
    faqs: [
      {
        q: "What brands and manufacturers do you supply?",
        a: "We partner with global healthcare leaders including Siemens Healthineers, Philips Healthcare, GE Healthcare, BD, Mindray, and other CE/FDA approved manufacturers."
      },
      {
        q: "Do you offer full installation and hospital room preparation?",
        a: "Yes. Our engineering division manages turnkey room preparation including lead shielding for X-ray/CT rooms, RF cages for MRI suites, clean electrical supply, and HVAC balancing."
      },
      {
        q: "What warranty and after-sales support is provided?",
        a: "All systems come with comprehensive manufacturer warranties, and we offer customized Annual Maintenance Contracts (AMC/CMC) backed by 24/7 emergency repair support."
      }
    ]
  },
  {
    slug: "hospital-engineering",
    label: "Hospital\nEngineering",
    title: "Hospital Engineering",
    eyebrow: "FACILITY INFRASTRUCTURE, MEP & BIOMEDICAL ARCHITECTURE",
    tagline: "Engineering resilient, safe, and technologically advanced infrastructure for modern hospitals and specialized healthcare facilities.",
    icon: BriefcaseMedical,
    badge: "Infrastructure & MEP",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Modern healthcare infrastructure demands specialized engineering that goes far beyond conventional construction. Roys & Roys International designs, builds, and maintains critical hospital systems including Medical Gas Pipeline Systems (MGPS), Central Sterile Services Departments (CSSD), Isolated Power Supplies (IPS), and acoustic/radiation shielding.",
      "Our team of healthcare architects and MEP engineers ensures that every facility complies with international benchmarks such as HTM 02-01, NFPA 99, and ASHRAE 170. We transform empty spaces into sterile, energy-efficient, and patient-centered clinical facilities.",
      "Whether constructing a greenfield 500-bed tertiary hospital or upgrading intensive care units and operating theaters, we provide end-to-end turnkey project execution with guaranteed uptime and safety."
    ],
    stats: [
      { value: "50+", label: "Hospitals Modernized" },
      { value: "100%", label: "HTM / NFPA Compliance" },
      { value: "15+", label: "Years Engineering Experience" },
      { value: "Zero", label: "Critical Downtime Record" }
    ],
    keyPillars: [
      {
        title: "Medical Gas Pipeline Systems (MGPS)",
        desc: "Turnkey design and installation of oxygen plants, vacuum stations, medical air compressors, AGSS (Anesthetic Gas Scavenging Systems), and modular bedhead units complying with HTM 02-01.",
        icon: Activity
      },
      {
        title: "Central Sterile Services (CSSD)",
        desc: "Design and equipment fitting for complete CSSD workflows: pass-through steam autoclaves, low-temp hydrogen peroxide plasma sterilizers, and automated washer-disinfectors.",
        icon: Layers
      },
      {
        title: "Isolated Power Systems (IPS / UPS)",
        desc: "Medical-grade Isolated Power Panels with line isolation monitors, uninterruptible power supplies (UPS), and emergency backup systems ensuring continuous life support in OTs and ICUs.",
        icon: Zap
      },
      {
        title: "Radiation & RF Shielding",
        desc: "Precision lead lining (lead sheets, lead glass, lead-lined doors) for CT/X-Ray/Cath labs and complete copper Faraday cage shielding for MRI suites.",
        icon: ShieldCheck
      },
      {
        title: "Nurse Call & Smart Hospital Intercom",
        desc: "IP-based digital nurse call systems, patient bedhead communication consoles, emergency code-blue alerts, and integration with hospital information systems.",
        icon: Cpu
      },
      {
        title: "Hospital Waste & Effluent Treatment (ETP)",
        desc: "Biomedical solid waste management systems, medical autoclaves for infectious waste, and chemical neutralization Effluent Treatment Plants.",
        icon: Wrench
      }
    ],
    technologies: [
      "HTM 02-01 / NFPA 99 Medical Gas Manifolds & Alarms",
      "Medical Air & Vacuum Plant Skid Assemblies",
      "Modular Bedhead Units & Ceiling Pendant Systems",
      "Pass-Through Double Door Steam Sterilizers",
      "Plasma & Ethylene Oxide (ETO) Low-Temp Sterilizers",
      "Medical Grade Isolated Power Supply (IPS) Units",
      "Lead-Lined Radiation Doors & 2.0mm+ Lead Glass Viewing Windows",
      "Radiofrequency (RF) MRI Shielding Enclosures",
      "IP Nurse Call Systems with Code-Blue Integration",
      "Hospital Wastewater Disinfection & Neutralization Units"
    ],
    workflow: [
      {
        step: "01",
        title: "Architectural & MEP Feasibility",
        desc: "Detailed site survey, structural load calculations, piping routing, and departmental workflow mapping in compliance with hospital standards."
      },
      {
        step: "02",
        title: "CAD / BIM Engineering Design",
        desc: "3D BIM modeling and coordinated mechanical, electrical, and plumbing engineering schematics for approval by hospital management."
      },
      {
        step: "03",
        title: "Procurement & Turnkey Execution",
        desc: "Sourcing certified engineering materials, degreased medical-grade copper piping, and certified electrical equipment with on-site supervisor oversight."
      },
      {
        step: "04",
        title: "Pressure Testing & Certification",
        desc: "Comprehensive pressure decay testing, gas purity verification, insulation resistance testing, and handover documentation with full compliance certificates."
      }
    ],
    benefits: [
      "Full compliance with British HTM 02-01 and American NFPA 99 standards",
      "Turnkey execution reducing friction between multiple contractors",
      "Medical-grade copper and components preventing gas contamination and leakage",
      "Continuous power safety preventing micro-shocks and power interruptions during surgeries",
      "Comprehensive warranty and scheduled maintenance service"
    ],
    industries: [
      "Government Healthcare Authorities",
      "Private Tertiary Care Hospitals",
      "Military Healthcare & Emergency Field Hospitals",
      "Specialized Heart & Cancer Treatment Centers",
      "Modular Surgical Clinics"
    ],
    faqs: [
      {
        q: "What standards do your medical gas systems comply with?",
        a: "Our MGPS installations adhere strictly to HTM 02-01, HTM 2022, and NFPA 99 standards using medical-grade certified copper piping."
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
    slug: "clean-room-hvac",
    label: "Clean Room\n& HVAC",
    title: "Clean Room & HVAC",
    eyebrow: "CONTAMINATION CONTROL, MODULAR OT & SPECIALIZED AIR ENGINEERING",
    tagline: "Designing, manufacturing, and validating sterile environments, modular operating rooms, and precision HVAC systems for hospitals and pharma plants.",
    icon: FlaskConical,
    badge: "Sterile Air Engineering",
    heroImage: "/roys_mri_scanner.png",
    overview: [
      "Contamination control is paramount in surgical operating rooms, pharmaceutical manufacturing, and biotechnology laboratories. Roys & Roys International designs and builds ISO Class 5 to Class 8 cleanrooms, laminar airflow systems, and specialized hospital HVAC solutions.",
      "Our modular operating theater panels are manufactured from antibacterial, non-porous materials that withstand rigorous chemical sanitation. Combined with precision Air Handling Units (AHUs), variable humidity control, and HEPA/ULPA terminal filtration, we guarantee sterile air free from airborne microbes and particulate contaminants.",
      "We provide complete cleanroom validation in accordance with ISO 14644 and EU GMP guidelines, ensuring uninterrupted regulatory approval and maximum patient safety."
    ],
    stats: [
      { value: "120+", label: "Sterile Rooms Built" },
      { value: "ISO 5-8", label: "Cleanroom Classes Certified" },
      { value: "99.999%", label: "HEPA / ULPA Filtration" },
      { value: "100%", label: "Particle Testing Pass Rate" }
    ],
    keyPillars: [
      {
        title: "Modular Operating Theaters",
        desc: "Seamless antibacterial wall panels (HPL, stainless steel, or powder-coated GI), hermetically sealing sliding doors, and ceiling laminar air flow distribution plenums.",
        icon: Layers
      },
      {
        title: "Hospital HVAC & Pressure Isolation",
        desc: "Specialized Air Handling Units (AHUs) with multi-stage filtration, negative-pressure airborne infection isolation rooms (AIIR), and positive-pressure protective rooms.",
        icon: Activity
      },
      {
        title: "Pharma Cleanroom Systems (EU GMP)",
        desc: "Cleanroom construction for sterile pharmaceutical manufacturing, Class A laminar flow hoods, Class B clean corridors, and Class C/D processing suites.",
        icon: FlaskConical
      },
      {
        title: "Laminar Flow Plenums & Air Showers",
        desc: "Unidirectional airflow ceilings for operating tables, personnel air showers, dynamic pass boxes, and mist showers for contamination-free material transfer.",
        icon: Zap
      },
      {
        title: "Precision Climate & Humidity Control",
        desc: "Dehumidification systems, digital building management system (BMS) integration, and variable refrigerant flow (VRF) units maintaining strict 20°C–24°C and 45%–55% RH.",
        icon: Wrench
      },
      {
        title: "Cleanroom Validation & Particle Testing",
        desc: "Comprehensive particle count testing, filter integrity (DOP/PAO) testing, air velocity measurements, recovery time validation, and ISO 14644 certification.",
        icon: FileCheck
      }
    ],
    technologies: [
      "H14 / U15 Grade HEPA & ULPA Air Filtration Modules",
      "Laminar Airflow (LAF) Ceiling Plenums (2.4m x 2.4m / 3.0m x 3.0m)",
      "Dynamic & Static Pass Boxes with UV Sterilization",
      "Hermetically Sealed Automatic Sliding & Swing Doors",
      "Modular Anti-Microbial Wall & Ceiling Cladding Panels",
      "Digital Cleanroom Differential Pressure Indicators & Alarms",
      "Hygienic Air Handling Units (AHUs) with Variable Speed Drives",
      "Desiccant Dehumidifiers for Strict Moisture-Sensitive Cleanrooms",
      "Cleanroom Particle Counters & Anemometer Validation Systems",
      "Touchless Surgical Scrub Sinks with Thermostatic Mixing Valves"
    ],
    workflow: [
      {
        step: "01",
        title: "Airflow Simulation & Cleanroom Classification",
        desc: "Determining cleanroom ISO classification, air changes per hour (ACPH), and CFD airflow modeling to prevent turbulent air zones."
      },
      {
        step: "02",
        title: "Precision Modular Fabrication",
        desc: "Fabrication of prefabricated modular wall panels, walk-on ceilings, and custom ductwork in controlled manufacturing environments."
      },
      {
        step: "03",
        title: "On-Site Installation & Sealing",
        desc: "Clean build protocols, seamless silicone joint sealing, flush-mount lighting, and automated hermetic door installation."
      },
      {
        step: "04",
        title: "DOP Testing & ISO 14644 Validation",
        desc: "Rigorous filter leak testing, particle count verification, differential pressure balancing, and formal ISO validation reports."
      }
    ],
    benefits: [
      "Zero airborne infection risk in surgical suites and intensive care areas",
      "Compliance with ISO 14644, EU GMP, WHO, and ASHRAE 170 standards",
      "Energy-efficient hygienic AHUs reducing hospital operational electricity costs",
      "Durable, flush, antibacterial paneling resistant to chemical disinfectants",
      "Complete certification and documentation ready for health authority audits"
    ],
    industries: [
      "Surgical Hospitals & Cardiac Institutes",
      "Pharmaceutical Manufacturing Plants",
      "Biotechnology & Vaccine Research Labs",
      "Semiconductor & High-Precision Electronics",
      "Cosmeceutical & Food Processing Facilities"
    ],
    faqs: [
      {
        q: "What is the difference between positive and negative pressure rooms?",
        a: "Positive pressure keeps outside contaminants out (ideal for OTs and immunocompromised patients), while negative pressure prevents airborne pathogens inside from escaping (ideal for infectious disease isolation)."
      },
      {
        q: "How often do cleanroom HEPA filters need replacement and testing?",
        a: "Filters are typically integrity tested (DOP test) every 6 to 12 months, and replaced based on differential pressure load or test results."
      },
      {
        q: "Can your modular OT panels be integrated with surgical equipment pendants?",
        a: "Yes, our modular walls and ceilings are structurally reinforced to support surgical pendants, ceiling lights, and integrated medical monitors."
      }
    ]
  },
  {
    slug: "laboratory-solutions",
    label: "Laboratory\nSolutions",
    title: "Laboratory Solutions",
    eyebrow: "ANALYTICAL INSTRUMENTS, PATHOLOGY SYSTEMS & RESEARCH INFRASTRUCTURE",
    tagline: "Empowering diagnostic accuracy and scientific discovery with world-class laboratory equipment, biosafety containment, and clinical reagents.",
    icon: Microscope,
    badge: "Clinical & Analytical Lab",
    heroImage: "/roys_ct_scan.png",
    overview: [
      "Accurate laboratory diagnostics form the backbone of clinical decision-making and scientific breakthroughs. Roys & Roys International supplies comprehensive laboratory instrumentation, furniture, biosafety systems, and analytical consumables to clinical pathology labs, university research centers, and industrial testing facilities.",
      "We provide automated clinical chemistry analyzers, 5-part hematology counters, real-time PCR systems, chromatography instruments, and certified Class II biosafety cabinets. Our turnkey laboratory setups include ergonomic anti-chemical lab furniture, fume extraction, and pure water purification plants.",
      "Backed by dedicated application specialists and service engineers, we ensure dependable reagent supply chains, precise calibration, and compliance with ISO 15189 laboratory accreditation standards."
    ],
    stats: [
      { value: "300+", label: "Laboratories Equipped" },
      { value: "1,000+", label: "Analytical Products" },
      { value: "ISO 15189", label: "Accreditation Support" },
      { value: "100%", label: "Cold Chain Reagent Integrity" }
    ],
    keyPillars: [
      {
        title: "Clinical Chemistry & Hematology",
        desc: "Fully automated clinical chemistry analyzers, 3-part and 5-part differential hematology analyzers, automated coagulation systems, and urinalysis workstations.",
        icon: FlaskConical
      },
      {
        title: "Molecular Biology & PCR Suites",
        desc: "Real-time quantitative PCR (qPCR) thermal cyclers, automated nucleic acid extraction systems, UV transilluminators, and gel electrophoresis units.",
        icon: Microscope
      },
      {
        title: "Biosafety Cabinets & Containment",
        desc: "Class II Type A2 & B2 biosafety cabinets, ducted and ductless chemical fume hoods, laminar flow clean benches, and PCR workstations.",
        icon: ShieldCheck
      },
      {
        title: "Analytical Spectroscopy & Chromatography",
        desc: "UV-Vis spectrophotometers, HPLC systems, gas chromatography, atomic absorption spectrometers, and microplate readers for high-throughput screening.",
        icon: Activity
      },
      {
        title: "Cold Chain & Bio-banking Storage",
        desc: "-86°C ultra-low temperature freezers, blood bank refrigerators with temperature charting, liquid nitrogen cryo-containers, and cooled incubators.",
        icon: Layers
      },
      {
        title: "Ergonomic Modular Lab Furniture",
        desc: "Chemical-resistant epoxy and ceramic lab workbenches, reagent shelving, island tables, anti-vibration balance tables, and eye-wash emergency stations.",
        icon: Wrench
      }
    ],
    technologies: [
      "Automated High-Throughput Clinical Chemistry Analyzers (800+ tests/hour)",
      "Laser-Based 5-Part Differential Hematology Systems",
      "Real-Time Thermal Cyclers (qPCR) for Molecular Diagnostics",
      "Microprocessor-Controlled Class II Type A2 Biosafety Cabinets",
      "High-Speed Refrigerated Micro-Centrifuges (21,000+ RPM)",
      "Double-Beam UV-Vis Scanning Spectrophotometers",
      "Ultra-Pure Type 1 & Type 2 Water Purification Systems (18.2 MΩ·cm)",
      "-86°C Ultra-Low Freezers with Dual Independent Compressors",
      "Digital Inverted & Binocular Fluorescent Research Microscopes",
      "Certified Diagnostic Reagents, Controls, and Calibrators"
    ],
    workflow: [
      {
        step: "01",
        title: "Workflow & Biosafety Level Assessment",
        desc: "Determining BSL-1 to BSL-3 requirements, sample throughput volume, and spatial workflow separation to prevent cross-contamination."
      },
      {
        step: "02",
        title: "Turnkey Lab Furniture & Utility Layout",
        desc: "Layout design with epoxy countertops, gas lines, pure water piping, localized fume extraction, and dedicated clean electrical outlets."
      },
      {
        step: "03",
        title: "Instrument Installation & Calibration",
        desc: "Delivery, uncrating, physical installation, multi-point calibration, and baseline control verification by application engineers."
      },
      {
        step: "04",
        title: "Reagent Supply & Maintenance Agreement",
        desc: "Continuous scheduled delivery of fresh reagents under strict cold-chain logistics alongside periodic preventive maintenance."
      }
    ],
    benefits: [
      "Access to tier-1 global laboratory instrument and reagent manufacturers",
      "Turnkey solutions from lab furniture and biosafety to automated analyzers",
      "Guaranteed temperature-controlled cold chain logistics for sensitive reagents",
      "On-site application training and protocol assistance for lab technicians",
      "Comprehensive ISO 15189 compliance documentation and validation protocols"
    ],
    industries: [
      "Hospital Pathology Departments",
      "Independent Diagnostic & Clinical Reference Labs",
      "University & Academic Research Centers",
      "Pharmaceutical Quality Control (QC) Labs",
      "Food Safety & Environmental Testing Laboratories"
    ],
    faqs: [
      {
        q: "Do you supply both open-system and closed-system chemistry analyzers?",
        a: "Yes, we provide versatile open-system analyzers that can use standard third-party reagents as well as dedicated high-throughput closed systems."
      },
      {
        q: "How do you ensure cold-chain integrity during reagent delivery?",
        a: "We utilize validated temperature-monitored refrigerated transport and insulated dry-ice / phase-change packaging with real-time temperature loggers."
      },
      {
        q: "Do you assist with ISO 15189 laboratory accreditation?",
        a: "Yes, our team assists in equipment qualification (IQ/OQ/PQ), calibration certification, and Standard Operating Procedure (SOP) guidance for ISO 15189."
      }
    ]
  },
  {
    slug: "pharmaceutical-consultancy",
    label: "Pharmaceutical\nConsultancy",
    title: "Pharmaceutical Consultancy",
    eyebrow: "REGULATORY COMPLIANCE, WHO-GMP ADVISORY & FORMULATION ENGINEERING",
    tagline: "Strategic advisory, regulatory engineering, and technical consultancy for pharmaceutical manufacturing plants, biotech ventures, and global exporters.",
    icon: Pill,
    badge: "GMP & Regulatory Advisory",
    heroImage: "/roys_ultrasound.png",
    overview: [
      "The pharmaceutical and biotechnology sector operates in an intensively regulated global landscape. Roys & Roys International offers end-to-end pharmaceutical engineering and regulatory consultancy, guiding clients from initial facility concept design to international market approvals.",
      "Our team of senior pharmaceutical consultants, process engineers, and regulatory specialists provides comprehensive advisory in WHO-GMP, cGMP, and PIC/S compliance, facility layout engineering, process validation, and Common Technical Document (CTD / eCTD) dossier preparation.",
      "Whether setting up a new solid dosage formulation plant, sterile injectables line, or upgrading an existing facility for export accreditation, we deliver actionable technical strategies that mitigate risk and accelerate regulatory clearance."
    ],
    stats: [
      { value: "40+", label: "GMP Facilities Audited" },
      { value: "100+", label: "Regulatory Dossiers Approved" },
      { value: "99%", label: "First-Pass Inspection Rate" },
      { value: "30+", label: "Countries Regulatory Reach" }
    ],
    keyPillars: [
      {
        title: "WHO-GMP & cGMP Compliance Auditing",
        desc: "Comprehensive GAP analysis, pre-audit mock inspections, audit readiness programs, and Corrective and Preventive Action (CAPA) implementations for WHO/PIC-S standards.",
        icon: FileCheck
      },
      {
        title: "Facility Design & Process Flow Engineering",
        desc: "Conceptual and detailed plant layout engineering ensuring unidirectional material and personnel flows, airlock cascades, and cross-contamination elimination.",
        icon: Layers
      },
      {
        title: "Equipment Qualification (DQ / IQ / OQ / PQ)",
        desc: "Preparation and execution of Design, Installation, Operational, and Performance Qualification protocols for production machinery, HVAC, and clean utilities.",
        icon: Wrench
      },
      {
        title: "Technology Transfer & Formulation R&D",
        desc: "Technical guidance for scale-up, pilot batches, formulation optimization, and manufacturing process validation for tablets, capsules, liquids, and sterile injectables.",
        icon: FlaskConical
      },
      {
        title: "Regulatory Dossiers & eCTD Submissions",
        desc: "Preparation, compilation, and review of Drug Master Files (DMF) and CTD / eCTD dossiers (Modules 1 to 5) for national health authorities and export registrations.",
        icon: CheckCircle2
      },
      {
        title: "Quality Management Systems (QMS)",
        desc: "Establishment of robust quality management frameworks, Standard Operating Procedures (SOPs), change control, deviation workflows, and data integrity systems.",
        icon: ShieldCheck
      }
    ],
    technologies: [
      "Clean Utility Engineering (Purified Water, WFI, Pure Steam generation)",
      "Sterile Injectables & Aseptic Processing Line Engineering",
      "Solid Oral Dosage (Granulation, Compression, Coating, Blistering)",
      "Topical, Semisolid & Liquid Syrup Formulation Lines",
      "Automated Clean-in-Place (CIP) and Sterilize-in-Place (SIP) Systems",
      "eCTD Dossier Publishing & Validation Software Workflows",
      "Computerized System Validation (CSV) adhering to 21 CFR Part 11",
      "Environmental Monitoring & Microbiological Control Frameworks",
      "HVAC Containment for Highly Potent Active Pharmaceutical Ingredients (HPAPI)",
      "Stability Testing Chamber Protocol & Real-Time / Accelerated Studies"
    ],
    workflow: [
      {
        step: "01",
        title: "GAP Analysis & Feasibility Study",
        desc: "Thorough audit of existing facility or greenfield project scope against targeted regulatory benchmarks (WHO-GMP, US FDA, EU GMP)."
      },
      {
        step: "02",
        title: "Engineering Schematics & Master Plan",
        desc: "Development of the Site Master Plan (SMP), classified room layouts, clean utility flow diagrams, and HVAC pressure zoning."
      },
      {
        step: "03",
        title: "Qualification & QMS Rollout",
        desc: "Execution of IQ/OQ/PQ protocols, calibration certifications, SOP drafting, and hands-on staff GMP training."
      },
      {
        step: "04",
        title: "Audit Defense & Dossier Clearance",
        desc: "On-site support during regulatory inspections, submission of dossier packages, and closure of authority observations."
      }
    ],
    benefits: [
      "Accelerated path to international regulatory approval and export licensing",
      "Optimization of manufacturing efficiency and reduction of batch rejections",
      "Elimination of cross-contamination risks through precision facility zoning",
      "Robust data integrity and computerized system compliance (21 CFR Part 11)",
      "Experienced consultants with decades of international pharmaceutical experience"
    ],
    industries: [
      "Finished Dosage Formulation (FDF) Manufacturers",
      "Active Pharmaceutical Ingredient (API) Synthesis Plants",
      "Biotechnology & Biosimilar Manufacturers",
      "Nutraceutical & Dietary Supplement Producers",
      "Medical Device & Sterile Disposable Manufacturers"
    ],
    faqs: [
      {
        q: "What regulatory bodies do your consultancy services target?",
        a: "We prepare facilities and dossiers for national health authorities (DRAP, EDA, etc.), WHO-Geneva Prequalification, PIC/S member states, and EU GMP authorities."
      },
      {
        q: "Can you assist with eCTD dossier formatting for export markets?",
        a: "Yes, we handle complete Module 1–5 compilation, technical writing, stability protocol verification, and electronic publishing in eCTD format."
      },
      {
        q: "Do you design clean utilities such as Water for Injection (WFI) and Pure Steam?",
        a: "Yes, we provide complete engineering design, piping isometric review, and qualification protocols for RO/EDI, WFI distillation, and pure steam loops."
      }
    ]
  },
  {
    slug: "international-procurement",
    label: "International\nProcurement",
    title: "International Procurement",
    eyebrow: "GLOBAL SUPPLY CHAIN, STRATEGIC SOURCING & INSTITUTIONAL TENDERING",
    tagline: "Connecting international healthcare manufacturers with governments, institutional buyers, and humanitarian organizations across 30+ nations.",
    icon: Globe,
    badge: "Global Sourcing & Trade",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "In an increasingly interconnected yet volatile global supply environment, reliable procurement is critical to healthcare security. Roys & Roys International acts as an accredited global procurement partner, sourcing medical devices, pharmaceuticals, hospital furniture, and specialized equipment from tier-1 manufacturers worldwide.",
      "We operate a sophisticated international sourcing network with direct manufacturer connections across Europe, North America, Japan, and Asia. Our procurement specialists manage every link in the value chain: vendor pre-qualification, competitive tendering, contract negotiation, customs compliance, and temperature-controlled international logistics.",
      "We are a trusted supplier to institutional buyers including the World Health Organization (WHO), UNICEF, national Ministries of Health, Armed Forces medical corps, and multilateral development banks."
    ],
    stats: [
      { value: "$50M+", label: "Procurement Managed" },
      { value: "30+", label: "Sourcing Countries" },
      { value: "100%", label: "Tender Compliance Record" },
      { value: "250+", label: "Global Projects Delivered" }
    ],
    keyPillars: [
      {
        title: "Institutional Sourcing & Tendering",
        desc: "End-to-end management of national and international healthcare tenders, government contract bidding, and multilateral agency procurement portfolios.",
        icon: CheckCircle2
      },
      {
        title: "Global Supplier Network & Vetting",
        desc: "Rigorous pre-qualification, factory audits, quality verification, and volume price negotiations with certified OEM manufacturers across 30+ nations.",
        icon: Globe
      },
      {
        title: "Cold Chain & Multimodal Freight",
        desc: "International air, ocean, and overland freight logistics with GDP-compliant temperature monitoring for temperature-sensitive biologics, vaccines, and diagnostic reagents.",
        icon: TrendingUp
      },
      {
        title: "Customs Clearance & Import Regulation",
        desc: "Complete customs brokerage, tariff optimization, Free Sale Certificate (FSC) verification, Certificate of Analysis (CoA) review, and ministry import permits.",
        icon: FileCheck
      },
      {
        title: "Financial Engineering & Trade Finance",
        desc: "Structured Letters of Credit (LC), deferred payment facilities, performance guarantee bonds, and multi-currency international transaction management.",
        icon: ShieldCheck
      },
      {
        title: "Emergency Relief & Humanitarian Logistics",
        desc: "Rapid-response procurement and emergency charter shipments of essential medical kits, field hospitals, and trauma supplies during humanitarian crises.",
        icon: HeartPulse
      }
    ],
    technologies: [
      "Enterprise Supply Chain Tracking & Cargo Visibility Portals",
      "IATA & GDP-Compliant Temperature-Controlled Air Cargo Containers",
      "Pre-Shipment Inspection (PSI) & Quality Verification Protocols",
      "Automated Purchase Order & Tender Documentation Systems",
      "Multi-Currency Trade Finance & Irrevocable Letter of Credit Management",
      "Consolidated Containerized Shipping (FCL & LCL Logistics)",
      "Standardized Product Cataloging (UNSPSC & GMDN Medical Nomenclature)",
      "Dangerous Goods (DG) Handling & Aviation Safety Compliance",
      "Warehouse Inventory Optimization & Just-In-Time (JIT) Delivery",
      "Digital Bill of Lading & Electronic Certificate of Origin Systems"
    ],
    workflow: [
      {
        step: "01",
        title: "Specification Matching & Sourcing",
        desc: "Mapping client technical specifications to pre-qualified global OEM products with competitive price benchmarking."
      },
      {
        step: "02",
        title: "Pre-Shipment Inspection & QA",
        desc: "Third-party quality inspection, serial number verification, batch documentation review, and export packing inspection."
      },
      {
        step: "03",
        title: "Multimodal Logistics & Cold Chain",
        desc: "Direct charter or scheduled air/sea shipping with end-to-end GPS and temperature datalogger monitoring."
      },
      {
        step: "04",
        title: "Customs Clearance & Destination Handover",
        desc: "Expedited regulatory import clearance, door-to-hospital delivery, uncrating, and signed institutional handover."
      }
    ],
    benefits: [
      "Access to extensive economies of scale and direct factory pricing",
      "Pre-vetted international manufacturers with CE, FDA, and ISO certifications",
      "Guaranteed cold-chain temperature control with electronic logs",
      "Full transparency with real-time shipment milestone tracking",
      "Extensive experience working with UN agencies, WHO, and national ministries"
    ],
    industries: [
      "Ministries of Health & Public Health Agencies",
      "United Nations Agencies (WHO, UNICEF, UNFPA)",
      "Military Healthcare & Defense Procurement",
      "Large Private Hospital Networks & Consortia",
      "Non-Governmental Organizations (NGOs) & Relief Missions"
    ],
    faqs: [
      {
        q: "What countries do you source medical equipment and supplies from?",
        a: "We source directly from manufacturers across Germany, USA, Japan, UK, South Korea, China, Italy, and other international manufacturing centers."
      },
      {
        q: "How do you handle import permits and regulatory compliance for medical devices?",
        a: "Our local regulatory teams handle complete import permits, device registrations, and customs clearances in compliance with destination health authorities."
      },
      {
        q: "Can you manage turnkey tender bids for government healthcare projects?",
        a: "Yes, we provide end-to-end tender preparation, technical bid drafting, bid security bonds, and turnkey supply delivery upon award."
      }
    ]
  },
  {
    slug: "biomedical-services",
    label: "Biomedical\nServices",
    title: "Biomedical Services",
    eyebrow: "CLINICAL ASSET MANAGEMENT, CALIBRATION & PREVENTIVE MAINTENANCE",
    tagline: "Maximizing healthcare equipment uptime, precision, and patient safety through certified biomedical engineering and round-the-clock technical support.",
    icon: ShieldCheck,
    badge: "Calibration & 24/7 Support",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Healthcare equipment failure directly compromises clinical outcomes and patient lives. Roys & Roys International offers dedicated Biomedical Engineering Services, ensuring that every piece of medical equipment in your facility operates with peak accuracy, electrical safety, and clinical reliability.",
      "Our team of certified biomedical engineers and technicians provides comprehensive lifecycle asset management, certified calibration, planned preventive maintenance (PPM), electrical safety testing (IEC 62353), and rapid 24/7 breakdown response.",
      "We manage hospital biomedical departments under customized Annual Maintenance Contracts (AMC / Comprehensive CMC), utilizing Fluke Biomedical calibration analyzers and Computerized Maintenance Management Systems (CMMS) to keep equipment uptime above 99%."
    ],
    stats: [
      { value: "5,000+", label: "Medical Assets Maintained" },
      { value: "<2 Hours", label: "Emergency On-Site Response" },
      { value: "99.5%", label: "Uptime Maintenance Rate" },
      { value: "100%", label: "Fluke Calibrated Tools" }
    ],
    keyPillars: [
      {
        title: "Comprehensive Maintenance Contracts (CMC / AMC)",
        desc: "Tailored service agreements covering all spare parts, scheduled preventive visits, priority emergency repairs, and loaner equipment during major overhauls.",
        icon: ShieldCheck
      },
      {
        title: "Biomedical Equipment Calibration",
        desc: "Certified multi-parameter calibration of defibrillators, electrosurgical units, ventilators, infusion pumps, and patient monitors using NIST-traceable test equipment.",
        icon: Activity
      },
      {
        title: "Electrical Safety Testing (IEC 62353 / NFPA 99)",
        desc: "Rigorous testing of chassis leakage current, earth resistance, patient lead leakage, and mains isolation to eliminate electrical shock hazards.",
        icon: Zap
      },
      {
        title: "24/7 Rapid Emergency Breakdown Support",
        desc: "Dedicated 24/7 emergency hotline and rapid-deployment field engineers equipped with diagnostic tools to resolve critical ICU and OT equipment failures.",
        icon: Clock
      },
      {
        title: "OEM Spare Parts & Component Repair",
        desc: "Access to genuine OEM replacement boards, transducers, X-ray tubes, sensors, batteries, and component-level electronics repair capabilities.",
        icon: Wrench
      },
      {
        title: "Hospital Asset Management (CMMS)",
        desc: "Digital tagging, QR-code asset tracking, maintenance history logging, and life-cycle replacement planning through our enterprise CMMS software.",
        icon: Layers
      }
    ],
    technologies: [
      "Fluke Biomedical Electrical Safety Analyzers (ESA 615 / 620)",
      "Gas Flow & Ventilator Precision Analyzers (VT900A)",
      "Electrosurgical Unit (ESU) QA-ES Series Analyzers",
      "Defibrillator / Transcutaneous Pacemaker Analyzers (Impulse 7000DP)",
      "Infusion Device & Syringe Pump Multi-Channel Analyzers",
      "NIBP & Patient Simulator Multiparameter Testers (ProSim 8)",
      "Radiation Survey Meters & Dosimetry Equipment",
      "Computerized Maintenance Management System (CMMS) Software",
      "Oscilloscopes & Precision PCB Soldering / Rework Stations",
      "Automated Calibration Certificate Generation Software"
    ],
    workflow: [
      {
        step: "01",
        title: "Hospital Asset Audit & Tagging",
        desc: "Comprehensive inventory mapping of all medical devices, assigning unique barcode/QR tags and logging baseline performance."
      },
      {
        step: "02",
        title: "Preventive Maintenance Scheduling",
        desc: "Establishing computerized PPM schedules (monthly, quarterly, semi-annual) aligned with manufacturer recommendations."
      },
      {
        step: "03",
        title: "Calibration & Safety Verification",
        desc: "Executing electrical safety testing, physical cleaning, sensor calibration, and issuing traceable calibration certificates."
      },
      {
        step: "04",
        title: "24/7 Monitoring & Corrective Action",
        desc: "Immediate on-call response for unforeseen faults with root-cause analysis and digital repair documentation in CMMS."
      }
    ],
    benefits: [
      "Guaranteed medical equipment uptime above 99%, preventing surgical cancellations",
      "NIST-traceable calibration ensuring diagnostic accuracy and patient safety",
      "Compliance with hospital accreditation standards (JCIA, ISO 9001, local health boards)",
      "Prolonged equipment lifespan through regular preventive maintenance",
      "Significant cost savings compared to ad-hoc emergency repairs"
    ],
    industries: [
      "Public & Private Tertiary Hospitals",
      "Diagnostic Imaging & Radiology Centers",
      "Specialized Surgical Centers & Day Care Clinics",
      "Ambulance Services & Emergency Medical Teams",
      "Medical Equipment Distributors & Rental Providers"
    ],
    faqs: [
      {
        q: "What is the difference between AMC and Comprehensive CMC?",
        a: "AMC (Annual Maintenance Contract) covers scheduled preventive service visits and labor, while CMC (Comprehensive Maintenance Contract) covers labor, scheduled visits, and all replacement spare parts."
      },
      {
        q: "Are your calibration instruments certified and traceable?",
        a: "Yes, all our calibration equipment (Fluke Biomedical, Rigel, etc.) is calibrated annually against NIST-traceable standards."
      },
      {
        q: "What is your emergency response time for critical ICU equipment?",
        a: "We provide guaranteed on-site response times of under 2 hours for critical life support and surgical equipment in covered metropolitan areas."
      }
    ]
  }
];

export function getServiceBySlug(slug) {
  return SERVICES_LIST.find((s) => s.slug === slug);
}
