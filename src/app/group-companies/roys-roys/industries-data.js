import {
  Building2,
  ShieldCheck,
  Star,
  Award,
  Microscope,
  Users,
  HeartPulse,
  FlaskConical,
  Pill,
  Activity,
  CheckCircle2,
  Globe,
  Stethoscope,
  BriefcaseMedical,
  Landmark,
  Zap,
  Layers,
  Sparkles,
  FileCheck,
  TrendingUp,
  GraduationCap,
  Building,
  Factory,
  Check,
} from "lucide-react";

export const INDUSTRIES_LIST = [
  // ─── 1. HOSPITALS ──────────────────────────────────────────────────────────
  {
    slug: "hospitals",
    label: "Hospitals",
    title: "Hospitals",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Advanced solutions supporting modern healthcare environments, patient care, medical infrastructure, and operational excellence.",
    icon: Building2,
    badge: "Healthcare & Tertiary Centers",
    heroImage: "/images/roys/hospital_tertiary_hero.jpg",
    aboutImage: "/images/roys/hospital_diagnostic_suite.jpg",
    overview: [
      "Hospitals represent the most complex operational environments in healthcare, requiring flawless integration between medical technology, sterile architecture, and continuous MEP engineering. Roys & Roys International is a trusted partner for 50-bed community hospitals to 1,000+ bed tertiary multi-specialty medical centers.",
      "We deliver turnkey solutions covering Diagnostic Radiology (MRI, CT, DR, Ultrasound), Critical Care & ICUs, Modular Operating Theaters, Medical Gas Pipeline Systems (MGPS), Central Sterile Services (CSSD), and hospital furniture.",
      "Our hospital solutions adhere strictly to HTM 02-01, NFPA 99, and ISO 13485 standards, ensuring clinical safety, maximum equipment uptime, and seamless workflow efficiency for healthcare professionals."
    ],
    stats: [
      { value: "250+", label: "Hospitals Supported" },
      { value: "5,000+", label: "Hospital Beds Equipped" },
      { value: "120+", label: "Modular OTs Delivered" },
      { value: "99.8%", label: "System Uptime Rate" },
    ],
    keyPillars: [
      {
        title: "Modular Surgical Theatres & ICUs",
        desc: "Turnkey modular operating rooms with antibacterial wall cladding, laminar airflow ceilings, surgical lighting, electro-hydraulic tables, and anesthesia delivery stations.",
        icon: BriefcaseMedical,
      },
      {
        title: "Advanced Diagnostic Radiology",
        desc: "Complete imaging suites including 1.5T/3T MRI scanners, 64/128-slice CT machines, digital radiography X-ray rooms, and Doppler ultrasound systems.",
        icon: Activity,
      },
      {
        title: "Medical Gas Pipeline Systems (MGPS)",
        desc: "Centralized medical oxygen, vacuum, medical air, and nitrous oxide pipeline networks with HTM 02-01 compliant plant skids and bedhead consoles.",
        icon: Zap,
      },
      {
        title: "Central Sterile Services (CSSD)",
        desc: "Comprehensive sterilization suites with double-door pass-through steam autoclaves, low-temperature plasma sterilizers, and automated washer-disinfectors.",
        icon: Layers,
      },
      {
        title: "Inpatient & Critical Ward Furniture",
        desc: "Multi-function electric ICU beds, hydraulic ward beds, pediatric cots, overbed tables, bedside lockers, and ergonomic patient transfer stretchers.",
        icon: Stethoscope,
      },
      {
        title: "Hospital Waste & Effluent Treatment",
        desc: "Biomedical infectious waste shredder-autoclaves and wastewater chemical neutralization effluent treatment plants (ETP).",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "Digital Radiography (DR) & Fluoroscopy Systems",
      "Multi-Slice Computed Tomography (CT) & 1.5T/3T MRI",
      "ICU Invasive & Non-Invasive Mechanical Ventilators",
      "Multi-Parameter Patient Monitors & Central Telemetry Stations",
      "HTM 02-01 Medical Gas Plants & Bedhead Units",
      "Modular Anti-Microbial Operating Theatres",
      "Double-Door Pass-Through Steam & Plasma Sterilizers",
      "Electric 5-Function ICU Beds with CPR Release",
      "IP-Based Nurse Call & Emergency Intercom Networks",
      "Isolated Power Supply (IPS) Panels with Insulation Monitors",
    ],
    workflow: [
      {
        step: "01",
        title: "Hospital Departmental Planning",
        desc: "Analyzing bed capacity, clinical specialties, patient flow, and equipment load to create comprehensive departmental schedules.",
      },
      {
        step: "02",
        title: "MEP & Structural Engineering",
        desc: "Architectural layouts, radiation shielding calculations, clean air zoning, and medical gas pipeline routing.",
      },
      {
        step: "03",
        title: "Procurement & Turnkey Installation",
        desc: "Global sourcing of tier-1 medical machinery, certified logistics, and factory-trained biomedical installation.",
      },
      {
        step: "04",
        title: "Commissioning & AMC Lifecycle Support",
        desc: "Full clinical calibration, operator training, and 24/7 round-the-clock maintenance agreements.",
      },
    ],
    benefits: [
      "Single-source turnkey partner eliminating multi-contractor conflicts",
      "Strict compliance with HTM, NFPA, CE, and FDA healthcare guidelines",
      "Guaranteed fast spare parts availability and 24/7 biomedical technical support",
      "Customizable financing, phased deliveries, and institutional payment terms",
      "Over 15 years of proven excellence across public and private hospitals",
    ],
    targetDepts: [
      "Intensive Care Units (ICU, CCU, NICU, PICU)",
      "Operation Theater Suites (General, Neuro, Cardiac, Ortho)",
      "Radiology & Diagnostic Imaging Departments",
      "Emergency, Trauma & Resuscitation Rooms",
      "Central Sterile Services Department (CSSD)",
      "Inpatient Wards & Outpatient Consultation Clinics",
    ],
    faqs: [
      {
        q: "Can you supply complete turnkey equipment for a new 100-500 bed hospital?",
        a: "Yes, we handle complete turnkey hospital projects from architectural MEP planning and medical gas lines to heavy diagnostic imaging and ICU furniture.",
      },
      {
        q: "Do you provide training for hospital doctors and biomedical engineers?",
        a: "Yes, comprehensive on-site clinical application and technical maintenance training is provided for all installed equipment.",
      },
      {
        q: "How do you manage ongoing maintenance for active hospitals?",
        a: "We offer comprehensive Annual Maintenance Contracts (AMC/CMC) with guaranteed uptime SLAs and dedicated 24/7 on-call engineering teams.",
      },
    ],
  },

  // ─── 2. GOVERNMENT ─────────────────────────────────────────────────────────
  {
    slug: "government",
    label: "Government",
    title: "Government",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Reliable solutions supporting public institutions, government operations, infrastructure, and essential services.",
    icon: Building,
    badge: "Public Sector & Ministries",
    heroImage: "/federal_ministries_hero.jpg",
    aboutImage: "/provincial_gov_hero.jpg",
    overview: [
      "Government public institutions and ministries demand institutional accountability, rigorous regulatory compliance, transparent public procurement, and large-scale delivery capabilities. Roys & Roys International is an accredited partner for federal and provincial healthcare ministries and municipal health authorities.",
      "We specialize in managing large-scale national tenders, equipping District Headquarter (DHQ) and Tehsil Headquarter (THQ) hospitals, rural health centers (RHC), and regional medical emergency fleets.",
      "Our team provides comprehensive documentation, regulatory import compliance, performance security guarantees, and multi-year lifecycle maintenance agreements tailored to public sector frameworks."
    ],
    stats: [
      { value: "$50M+", label: "Public Procurement Delivered" },
      { value: "100%", label: "Tender Compliance Rate" },
      { value: "50+", label: "District Hospitals Upgraded" },
      { value: "15+", label: "Years Public Sector Partner" },
    ],
    keyPillars: [
      {
        title: "National & Provincial Healthcare Tenders",
        desc: "Full management of multi-million dollar government tenders with transparent technical documentation, bid bonds, and regulatory clearance.",
        icon: FileCheck,
      },
      {
        title: "DHQ & THQ Hospital Modernization",
        desc: "Turnkey equipment supply for district and sub-district public hospital upgrades including emergency wards, OTs, and diagnostic labs.",
        icon: Building2,
      },
      {
        title: "Public Health Disease Control Programs",
        desc: "Procurement of diagnostic kits, vaccine cold-chain equipment, viral testing analyzers, and mobile health screening units.",
        icon: HeartPulse,
      },
      {
        title: "Primary Healthcare & Rural Health Centers",
        desc: "Cost-effective, robust medical devices, maternal-child health equipment, and solar-compatible clinic solutions for remote rural centers.",
        icon: Users,
      },
      {
        title: "National Medical Gas & Oxygen Upgrades",
        desc: "Establishing PSA oxygen generation plants, bulk liquid oxygen tanks, and manifold pipelines for public healthcare networks.",
        icon: Zap,
      },
      {
        title: "Public Biomedical Maintenance Frameworks",
        desc: "Centralized biomedical asset tagging, state-wide calibration programs, and preventive maintenance for public sector hospital assets.",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "PSA Medical Oxygen Generation Skid Systems (50–500 Nm³/h)",
      "High-Volume Digital Radiography Systems for Public Hospitals",
      "District Hospital Surgical Suites & Anesthesia Units",
      "Solar-Powered Blood Bank & Vaccine Refrigerators (WHO PQS)",
      "Trauma Center Critical Care Ventilators & Monitors",
      "Point-of-Care Diagnostic Analyzers for Rural Clinics",
      "Mobile Medical Screening & X-Ray Vans",
      "Cold-Chain Logistics Vehicles with GPS Temperature Loggers",
      "Modular Emergency Treatment Units for Disaster Preparedness",
      "Computerized Health Inventory & Asset Management Software",
    ],
    workflow: [
      {
        step: "01",
        title: "Tender Review & Compliance Mapping",
        desc: "Thorough analysis of public tender specifications, financial terms, and regulatory criteria to ensure 100% responsive bidding.",
      },
      {
        step: "02",
        title: "OEM Sourcing & Price Optimization",
        desc: "Leveraging direct tier-1 manufacturer agreements to offer the most competitive pricing for public taxpayers.",
      },
      {
        step: "03",
        title: "Supply Chain & Multi-District Logistics",
        desc: "Consolidated international import, customs clearance, and coordinated nationwide distribution to district hospital sites.",
      },
      {
        step: "04",
        title: "Inspection, Acceptance & Handover",
        desc: "Joint inspection with government technical committees, third-party verification, and signed institutional handover.",
      },
    ],
    benefits: [
      "Extensive experience with PPRA and international public procurement rules",
      "Strong financial capacity to support performance bonds and Letter of Credit terms",
      "Direct OEM warranties backed by local service centers across major cities",
      "Proven track record of on-time delivery across large geographic areas",
      "Dedicated government relations and regulatory compliance specialists",
    ],
    targetDepts: [
      "Federal & Provincial Health Ministries",
      "District & Tehsil Headquarter Hospitals (DHQ / THQ)",
      "Rural Health Centers (RHC) & Basic Health Units (BHU)",
      "Public Sector Medical Colleges & University Hospitals",
      "National Disaster Management Authorities (NDMA)",
      "Public Health Testing Laboratories",
    ],
    faqs: [
      {
        q: "Are your supplies compliant with Public Procurement Regulatory Authority (PPRA) rules?",
        a: "Yes, our bidding, technical compliance, warranties, and delivery documentation adhere strictly to PPRA regulations and international tendering guidelines.",
      },
      {
        q: "Can you supply large quantities of medical equipment distributed across multiple districts?",
        a: "Yes, our national logistics and biomedical engineering network enables simultaneous delivery, installation, and commissioning across dozens of district hospitals.",
      },
      {
        q: "Do you supply WHO-prequalified equipment for public health immunization and maternal health?",
        a: "Yes, all our cold-chain, vaccine storage, and diagnostic equipment options meet WHO PQS standards.",
      },
    ],
  },

  // ─── 3. MILITARY & DEFENCE ────────────────────────────────────────────────
  {
    slug: "military-defence",
    label: "Military & Defence",
    title: "Military & Defence",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Trusted solutions designed to support defence healthcare, critical infrastructure, operational readiness, and institutional requirements.",
    icon: ShieldCheck,
    badge: "Defense & Critical Infrastructure",
    heroImage: "/armed_forces_hero.jpg",
    aboutImage: "/services/defense-2.jpg",
    overview: [
      "Military healthcare operations and defense installations demand rugged durability, extreme reliability, rapid deployability, and highest security standards. Roys & Roys International has a long-standing history of equipping military hospitals, garrison medical centers, and rapid-deployment field trauma units.",
      "We deliver heavy medical systems for Combined Military Hospitals (CMH), tactical transportable medical containers, ruggedized patient monitors, battlefield resuscitation kits, and high-field diagnostic imaging suites.",
      "Our defense solutions are engineered to withstand demanding environments, power fluctuations, and tactical relocations while ensuring uncompromised clinical excellence for armed forces personnel and their families."
    ],
    stats: [
      { value: "40+", label: "Military Hospitals Equipped" },
      { value: "100%", label: "Defense Security Compliance" },
      { value: "24/7", label: "Priority Military Support" },
      { value: "<2 Hr", label: "Emergency Defense SLA" },
    ],
    keyPillars: [
      {
        title: "Combined Military Hospital (CMH) Systems",
        desc: "Turnkey diagnostic and surgical equipment for major military hospital complexes including MRI, CT, OTs, and automated pathology labs.",
        icon: Building2,
      },
      {
        title: "Tactical & Rapid-Deployment Field Hospitals",
        desc: "Containerized and tent-based mobile operating rooms, intensive care units, and triage stations with onboard power generation and water purification.",
        icon: ShieldCheck,
      },
      {
        title: "Trauma, Emergency & Combat Casualty Care",
        desc: "Ruggedized portable defibrillators, ultrasound scanners, tactical suction units, and life-support ventilators for aeromedical and field evacuation.",
        icon: HeartPulse,
      },
      {
        title: "Rehabilitation & Orthopedic Surgery",
        desc: "Specialized arthroscopic surgical systems, motorized fracture tables, modern prosthetics, and physical therapy rehabilitation suites.",
        icon: Activity,
      },
      {
        title: "Rugged Medical Power & Gas Generators",
        desc: "Containerized PSA oxygen generators and heavy-duty UPS power filtration units built for extreme climates and military base environments.",
        icon: Zap,
      },
      {
        title: "Classified & High-Security Medical Tech",
        desc: "Encrypted telemedicine links, secure health records systems, and RF-shielded medical diagnostic rooms conforming to defense standards.",
        icon: Layers,
      },
    ],
    technologies: [
      "Ruggedized Portable Point-of-Care Ultrasound Scanners",
      "Military-Grade Emergency Transport Ventilators (MIL-STD-810G)",
      "Containerized Mobile Surgical & Triage Pods",
      "Advanced Multi-Slice CT & MRI Suites for CMHs",
      "High-Energy Surgical Cautery & Electrosurgical Workstations",
      "Heavy-Duty Hydraulic Combat Fracture Operating Tables",
      "Tactical Multi-Parameter Vital Signs Monitors",
      "Containerized High-Output Medical Oxygen Generation Plants",
      "Emergency Blood Bank & Plasma Storage Cryo-Units",
      "Aeromedical Evacuation Intensive Care Transport Modules",
    ],
    workflow: [
      {
        step: "01",
        title: "Defense Requirement & Clearance",
        desc: "Coordinating with military healthcare leadership under strict confidentiality and security protocol clearance.",
      },
      {
        step: "02",
        title: "Ruggedized Product Specification",
        desc: "Selecting equipment certified for environmental durability, vibration resistance, and wide operating temperature ranges.",
      },
      {
        step: "03",
        title: "Secure Delivery & Base Installation",
        desc: "Delivery to military installations with security-vetted engineers and precision site commissioning.",
      },
      {
        step: "04",
        title: "Armed Forces Technical Training",
        desc: "Rigorous operational training for military doctors, nursing officers, and army biomedical technicians.",
      },
    ],
    benefits: [
      "Long-term registered vendor with military and defense procurement directorates",
      "Ruggedized, military-spec equipment built for harsh operational conditions",
      "Dedicated priority biomedical response team for armed forces hospitals",
      "Absolute confidentiality and adherence to defense procurement protocols",
      "Complete inventory of defense-certified spare parts and replacement units",
    ],
    targetDepts: [
      "Combined Military Hospitals (CMH) & Armed Forces Medical Colleges",
      "Field Hospitals & Rapid Deployment Medical Battalions",
      "Garrison & Naval Base Medical Clinics",
      "Air Force Aeromedical Evacuation Units",
      "Military Rehabilitation & Orthopedic Centers",
      "Combat Trauma & Burn Treatment Centers",
    ],
    faqs: [
      {
        q: "Do you supply containerized mobile field hospitals for emergency deployment?",
        a: "Yes, we design and equip 20ft and 40ft expandable containerized surgical suites, ICU units, and triage stations with integrated generators and air conditioning.",
      },
      {
        q: "Is your equipment certified for extreme environmental conditions?",
        a: "Our tactical and transport units comply with military vibration, drop, and temperature standards (MIL-STD compliant options available).",
      },
      {
        q: "What priority service level do you provide for military hospitals?",
        a: "We maintain 24/7 dedicated military priority lines with rapid on-site replacement modules and certified biomedical engineering support.",
      },
    ],
  },

  // ─── 4. RESEARCH INSTITUTIONS ──────────────────────────────────────────────
  {
    slug: "research-institutions",
    label: "Research Institutions",
    title: "Research Institutions",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Enabling research organizations with advanced technology, specialized equipment, and solutions built for innovation.",
    icon: Microscope,
    badge: "Genomics & Scientific R&D",
    heroImage: "/biomax_research_lab.jpg",
    aboutImage: "/biomax_scientific_instruments_ai.jpg",
    overview: [
      "Scientific research and molecular discovery require extraordinary analytical sensitivity, repeatable precision, and strict contamination containment. Roys & Roys International partners with leading national research institutes, biotechnology centers, and clinical trial organizations.",
      "We supply advanced research instrumentation including Real-Time PCR thermal cyclers, High-Performance Liquid Chromatography (HPLC), mass spectrometers, high-speed refrigerated centrifuges, -86°C ultra-low freezers, and Class II/III biosafety containment hoods.",
      "Our team provides end-to-end scientific laboratory design, clean utility integration (18.2 MΩ·cm pure water, gas generators), IQ/OQ validation protocols, and specialized application training for principal scientists and researchers."
    ],
    stats: [
      { value: "60+", label: "Research Labs Built" },
      { value: "1,500+", label: "Instruments Deployed" },
      { value: "BSL-2/3", label: "Biosafety Facilities" },
      { value: "100%", label: "Traceable Calibration" },
    ],
    keyPillars: [
      {
        title: "Molecular Biology & Genomics",
        desc: "Automated nucleic acid extraction systems, real-time quantitative PCR (qPCR), capillary sequencers, and UV transilluminators.",
        icon: FlaskConical,
      },
      {
        title: "Analytical Chromatography & Mass Spectrometry",
        desc: "HPLC systems, Gas Chromatography (GC), double-beam UV-Vis spectrophotometers, and atomic absorption spectrometers.",
        icon: Activity,
      },
      {
        title: "BSL-2 & BSL-3 Biosafety Facilities",
        desc: "Class II Type A2/B2 biosafety cabinets, Class III isolators, negative pressure airlocks, and certified exhaust filtration systems.",
        icon: ShieldCheck,
      },
      {
        title: "Biobanking & Cryogenic Preservation",
        desc: "-86°C ultra-low temperature freezers, liquid nitrogen cryo-storage tanks, and automated temperature monitoring telemetry.",
        icon: Layers,
      },
      {
        title: "Cell Culture & Incubator Suites",
        desc: "CO2 incubators with high-temp decontamination, inverted fluorescent microscopes, and sterile laminar flow hoods.",
        icon: Sparkles,
      },
      {
        title: "Pure Water & Clean Utility Systems",
        desc: "Type 1 Ultra-Pure water systems (18.2 MΩ·cm), laboratory gas generators (N2, H2, Zero Air), and chemical fume hoods.",
        icon: Zap,
      },
    ],
    technologies: [
      "Real-Time qPCR Thermal Cyclers (96 & 384 Well Formats)",
      "High-Performance Liquid Chromatography (HPLC) Systems",
      "Class II Type A2 & B2 Biosafety Containment Cabinets",
      "High-Speed Refrigerated Centrifuges (Up to 30,000 x g)",
      "Double-Beam UV-Vis Scanning Spectrophotometers",
      "-86°C Ultra-Low Freezers with Dual Compressors",
      "CO2 Incubators with Infrared Sensors & 180°C Sterilization",
      "Type 1 Ultrapure Water Systems with UV & Ultrafiltration",
      "Digital Inverted Research Epifluorescence Microscopes",
      "Automated Sample Fraction Collectors & Rotary Evaporators",
    ],
    workflow: [
      {
        step: "01",
        title: "Research Scope & Protocol Analysis",
        desc: "Reviewing scientific objectives, chemical compatibility, throughput volume, and biosafety containment level (BSL-1 to BSL-3).",
      },
      {
        step: "02",
        title: "Laboratory Spatial & MEP Planning",
        desc: "Designing anti-vibration benching, dedicated pure water loops, exhaust ducting, and localized HEPA filtration.",
      },
      {
        step: "03",
        title: "Instrument Installation & IQ/OQ",
        desc: "Uncrating, setup, baseline validation, multi-point calibration, and comprehensive Installation & Operational Qualification.",
      },
      {
        step: "04",
        title: "Application Support & Reagent Supply",
        desc: "Protocol optimization support from PhD application specialists and reliable cold-chain reagent supply contracts.",
      },
    ],
    benefits: [
      "Partnership with world-leading scientific instrumentation manufacturers",
      "NIST-traceable calibration ensuring maximum experimental reproducibility",
      "Turnkey BSL-2 and BSL-3 cleanroom and containment engineering",
      "Specialist application scientists assisting in protocol setup",
      "Continuous consumable and high-purity chemical reagent availability",
    ],
    targetDepts: [
      "National Biotechnology & Genetic Engineering Institutes",
      "Pharmaceutical Drug Discovery & Formulation Labs",
      "Agricultural & Plant Genomics Research Centers",
      "Virology, Immunology & Infectious Disease Laboratories",
      "Clinical Research & Contract Research Organizations (CRO)",
      "Environmental, Water & Materials Testing Centers",
    ],
    faqs: [
      {
        q: "Do you design and construct BSL-3 biosafety containment laboratories?",
        a: "Yes, we provide full turnkey design, construction, negative pressure HVAC balancing, and validation for BSL-2 and BSL-3 facilities.",
      },
      {
        q: "Can you provide IQ/OQ/PQ validation documentation for research instruments?",
        a: "Yes, all our analytical instruments come with certified manufacturer qualification documentation conforming to GLP/GMP standards.",
      },
      {
        q: "Do you support ongoing cold-chain delivery of specialized research reagents?",
        a: "Yes, we maintain temperature-monitored cold-chain shipping for enzymes, antibodies, primers, and molecular biology master mixes.",
      },
    ],
  },

  // ─── 5. EDUCATIONAL INSTITUTIONS ───────────────────────────────────────────
  {
    slug: "educational-institutions",
    label: "Educational Institutions",
    title: "Educational Institutions",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Supporting universities and educational institutions with modern technology, infrastructure, and solutions for future-ready learning.",
    icon: GraduationCap,
    badge: "Medical Colleges & Academia",
    heroImage: "/trust/trust_education.jpg",
    aboutImage: "/images/tdrc/service_applied_research.jpg",
    overview: [
      "Educating the next generation of physicians, surgeons, engineers, and healthcare scientists requires advanced educational infrastructure, clinical simulation centers, and multi-user diagnostic equipment. Roys & Roys International works closely with universities, teaching institutes, and nursing colleges.",
      "We design and equip advanced high-fidelity clinical skills simulation labs, anatomy dissecting suites, digital pathology teaching stations, and full-scale teaching hospital wards.",
      "Our solutions bridge the gap between academic theory and practical clinical reality, giving students hands-on experience with modern medical systems used in world-class institutions."
    ],
    stats: [
      { value: "35+", label: "Medical Colleges Equipped" },
      { value: "50,000+", label: "Students Trained" },
      { value: "100+", label: "Simulation Labs Built" },
      { value: "100%", label: "Accreditation Compliance" },
    ],
    keyPillars: [
      {
        title: "Clinical Simulation & Skills Labs",
        desc: "High-fidelity patient simulators, virtual reality (VR) surgical trainers, CPR mannequins, and automated feedback clinical skill stations.",
        icon: Stethoscope,
      },
      {
        title: "Digital Pathology & Multi-Head Microscopy",
        desc: "Multi-head teaching microscopes with 4K camera projection, virtual slide scanners, and digital histology classroom software.",
        icon: Microscope,
      },
      {
        title: "Teaching Hospital Ward Equipment",
        desc: "Hospital-grade teaching beds, ICU demonstration stations, anesthesia simulator workstations, and multi-parameter monitors.",
        icon: Building2,
      },
      {
        title: "Biochemistry & Physiology Student Labs",
        desc: "Benchtop spectrophotometers, student centrifuges, digital physiology data acquisition systems, and electrophoretic systems.",
        icon: FlaskConical,
      },
      {
        title: "Anatomy & Mortuary Equipment",
        desc: "Stainless steel cadaver dissection tables, mortuary refrigeration units, embalming stations, and 3D interactive virtual anatomy tables.",
        icon: Layers,
      },
      {
        title: "Medical IT & Audio-Visual Classrooms",
        desc: "Live OT video streaming systems for lecture halls, PACS educational archiving, and integrated medical e-learning auditoriums.",
        icon: Zap,
      },
    ],
    technologies: [
      "High-Fidelity Adult, Pediatric & Obstetric Mannequin Simulators",
      "Virtual Reality Laparoscopic & Endoscopic Surgical Trainers",
      "Multi-Head 5/10-User Optical & Digital Teaching Microscopes",
      "3D Interactive Virtual Dissection Anatomy Display Tables",
      "Live 4K OT-to-Auditorium Surgical Broadcasting Systems",
      "Multi-Channel Human Physiology Student Data Recorders",
      "Anatomy Cadaver Dissection & Preservation Stations",
      "Benchtop Automated Clinical Chemistry Training Analyzers",
      "Simulated ICU Bedhead Consoles with Medical Gas Simulators",
      "Digital OSCE (Objective Structured Clinical Exam) Recording Systems",
    ],
    workflow: [
      {
        step: "01",
        title: "Curriculum & Accreditation Review",
        desc: "Aligning equipment lists with university curricula and regulatory accreditation standards.",
      },
      {
        step: "02",
        title: "Simulation Lab Architectural Design",
        desc: "Designing multi-station skills labs with one-way observation glass, control rooms, and debriefing audio-visual systems.",
      },
      {
        step: "03",
        title: "Instrument Installation & Network Setup",
        desc: "Uncrating, assembly, network integration, and calibration of all analytical and simulation instruments.",
      },
      {
        step: "04",
        title: "Faculty Training & Workshop Delivery",
        desc: "Hands-on training for professors and lab instructors to maximize simulation teaching impact.",
      },
    ],
    benefits: [
      "Compliant with international WFME, PMDC, and Higher Education guidelines",
      "State-of-the-art simulation preparing students for real-world clinical practice",
      "Modular classroom designs adaptable to expanding class sizes",
      "Long-term warranty and curriculum-aligned equipment replacement plans",
      "Direct technical support for university examination cycles (OSCE/OSPE)",
    ],
    targetDepts: [
      "Undergraduate & Postgraduate Medical Colleges",
      "Nursing & Allied Health Sciences Institutes",
      "Dental Colleges & Oral Surgery Simulation Centers",
      "Pharmacy & Pharmaceutical Sciences Faculties",
      "University Teaching Hospitals & Clinical Centers",
      "Anatomy, Histology & Pathology Academic Departments",
    ],
    faqs: [
      {
        q: "Do your simulation products meet medical council accreditation criteria?",
        a: "Yes, our clinical skills labs and simulation equipment meet all PMDC, HEC, and international WFME standards for medical education.",
      },
      {
        q: "Can live surgeries from the teaching hospital OT be streamed to lecture halls?",
        a: "Yes, we install integrated 4K surgical camera systems with two-way audio streaming to university lecture auditoriums for student learning.",
      },
      {
        q: "Do you supply maintenance packages for student laboratories?",
        a: "Yes, we offer annual preventative maintenance programs tailored around university academic semesters and exam periods.",
      },
    ],
  },

  // ─── 6. PHARMA COMPANIES ───────────────────────────────────────────────────
  {
    slug: "pharma-companies",
    label: "Pharma Companies",
    title: "Pharma Companies",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Supporting pharmaceutical organizations with reliable solutions for research, production, quality, and healthcare innovation.",
    icon: Pill,
    badge: "Pharma Manufacturing & QC",
    heroImage: "/images/pharma/cleanroom-facility.jpg",
    aboutImage: "/images/pharma/qc-laboratory.jpg",
    overview: [
      "Pharmaceutical manufacturing facilities demand absolute sterility, zero cross-contamination, precise HVAC air balancing, and continuous compliance with WHO-GMP and PIC/S standards. Roys & Roys International is an engineering partner for finished dosage formulation (FDF), active pharmaceutical ingredient (API), and biotechnology plants.",
      "We design, fabricate, and validate EU GMP Class A, B, C, and D cleanroom environments, modular sandwich panels, purified water and Water-for-Injection (WFI) generation loops, pure steam generators, and automated packaging lines.",
      "Our pharma engineering specialists guide clients through every phase: Site Master Plan (SMP), Design Qualification (DQ), Installation & Operational Qualification (IQ/OQ), Performance Qualification (PQ), and regulatory audit defense."
    ],
    stats: [
      { value: "40+", label: "Pharma Facilities Built" },
      { value: "100%", label: "WHO-GMP Audit Pass Rate" },
      { value: "ISO 14644", label: "Cleanroom Validation" },
      { value: "Zero", label: "Cross-Contamination Record" },
    ],
    keyPillars: [
      {
        title: "Cleanroom Construction (EU GMP Class A-D)",
        desc: "Modular partition panels, flush walk-on ceilings, epoxy flooring, hermetic doors, dynamic pass boxes, and personnel air showers.",
        icon: Layers,
      },
      {
        title: "HVAC & Differential Air Pressure Control",
        desc: "Hygienic AHUs, terminal HEPA H14 filters, desiccant dehumidifiers, and BMS differential pressure cascades preventing cross-contamination.",
        icon: Zap,
      },
      {
        title: "Purified Water & WFI Generation Systems",
        desc: "RO + EDI Purified Water plants, Multiple Effect WFI Distillation Stills, Pure Steam Generators, and orbital-welded SS316L distribution loops.",
        icon: FlaskConical,
      },
      {
        title: "Solid Oral Dosage & Liquid Formulation Lines",
        desc: "Granulation suites, tablet compression, film coating, automated liquid syrup filling lines, and blister packaging machinery.",
        icon: Pill,
      },
      {
        title: "Aseptic Sterile Injectable Processing",
        desc: "Class A Laminar Air Flow (LAF) filling stations, depyrogenation tunnels, vial washing, and pass-through terminal sterilizers.",
        icon: ShieldCheck,
      },
      {
        title: "Quality Control (QC) Laboratory Setup",
        desc: "Complete QC analytical lab setup including HPLC, GC, UV-Vis, stability chambers, dissolution testers, and microbiological testing suites.",
        icon: Microscope,
      },
    ],
    technologies: [
      "Modular Anti-Microbial Cleanroom Wall & Ceiling Sandwich Panels",
      "H14 HEPA Terminal Filtration Units with Gel Seal Frames",
      "RO + EDI Purified Water Generation Systems (500L – 5,000L/hr)",
      "Multi-Effect Water-for-Injection (WFI) Distillation Units",
      "Pure Steam Generators with Pyrogen-Free Steam Output",
      "Orbital-Welded SS316L Sanitary Piping Loops with Zero Dead Legs",
      "Dynamic Pass Boxes & Mist Decontamination Showers",
      "Automated High-Speed Rotary Tablet Press & Blister Packaging Lines",
      "Walk-In Stability Chambers adhering to ICH Q1A Guidelines",
      "Class A Laminar Air Flow (LAF) Sterile Filling Booths",
    ],
    workflow: [
      {
        step: "01",
        title: "Concept Design & Site Master Plan (SMP)",
        desc: "Developing process flow diagrams, material and personnel airlock cascades, and architectural layouts compliant with WHO-GMP.",
      },
      {
        step: "02",
        title: "Clean Utility & Cleanroom Engineering",
        desc: "Detailed engineering of cleanrooms, AHU ducting, WFI generation, sanitary piping isometrics, and electrical schematics.",
      },
      {
        step: "03",
        title: "Fabrication, Installation & Orbital Welding",
        desc: "On-site construction by certified cleanroom technicians with boroscopic inspection of SS316L orbital welds.",
      },
      {
        step: "04",
        title: "Validation & Regulatory Audit Clearance",
        desc: "Executing DQ/IQ/OQ/PQ protocols, cleanroom particle testing, DOP filter testing, and regulatory audit representation.",
      },
    ],
    benefits: [
      "End-to-end turnkey capability from greenfield design to regulatory GMP certification",
      "Expertise in sanitary SS316L piping and validated clean utilities (PW, WFI, PS)",
      "Guaranteed particle count and microbiological cleanroom validation (ISO 14644)",
      "Energy-efficient HVAC design reducing plant operating expenses by up to 30%",
      "Complete validation dossier ready for national and international health audits",
    ],
    targetDepts: [
      "Solid Oral Dosage Formulation Plants (Tablets, Capsules, Dry Powders)",
      "Sterile Injectable & Ophthalmic Manufacturing Facilities",
      "Liquid Syrup, Suspension & Topical Semisolid Plants",
      "Active Pharmaceutical Ingredient (API) Synthesis Units",
      "Biotechnology, Vaccine & Biosimilar Production Plants",
      "Pharmaceutical Quality Control & Analytical R&D Laboratories",
    ],
    faqs: [
      {
        q: "Do you provide orbital welding and boroscopic inspection for WFI loops?",
        a: "Yes, our certified piping teams use automated orbital welding machines and provide complete video boroscope inspection logs for every weld seam.",
      },
      {
        q: "What cleanroom validation tests are included upon completion?",
        a: "We conduct airborne particle counts, HEPA filter integrity (DOP/PAO), air velocity, differential pressure balancing, recovery time, and smoke pattern studies.",
      },
      {
        q: "Can you assist in upgrading an older manufacturing plant to WHO-GMP standards?",
        a: "Yes, we perform complete GAP audits and brownfield renovations to bring existing plants into compliance with WHO-GMP and PIC/S standards.",
      },
    ],
  },

  // ─── 7. DIAGNOSTIC LABS ───────────────────────────────────────────────────
  {
    slug: "diagnostic-labs",
    label: "Diagnostic Labs",
    title: "Diagnostic Labs",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Delivering solutions that support accurate diagnostics, advanced laboratory environments, and efficient healthcare operations.",
    icon: FlaskConical,
    badge: "Clinical Pathology & Diagnostics",
    heroImage: "/roys_ct_scan.png",
    aboutImage: "/team/laboratory_professional.jpg",
    overview: [
      "Clinical diagnostic laboratories are under constant pressure to deliver faster turnaround times, flawless analytical accuracy, and high-throughput sample processing while reducing operating cost per test. Roys & Roys International equips standalone pathology labs, hospital diagnostic hubs, and multi-branch laboratory chains.",
      "We provide automated clinical chemistry analyzers (up to 1,200 tests/hour), 5-part differential hematology systems, real-time PCR molecular platforms, automated ELISA processors, and biosafety cleanrooms.",
      "Beyond instrumentation, we ensure dependable cold-chain reagent replenishment contracts, NIST-traceable calibration, Laboratory Information Management System (LIMS) connectivity, and compliance with ISO 15189 accreditation standards."
    ],
    stats: [
      { value: "300+", label: "Diagnostic Labs Equipped" },
      { value: "10M+", label: "Patient Tests Processed/Yr" },
      { value: "ISO 15189", label: "Accreditation Support" },
      { value: "99.9%", label: "Analytical Reliability" },
    ],
    keyPillars: [
      {
        title: "Automated Clinical Chemistry",
        desc: "High-throughput open and closed clinical chemistry analyzers, electrolyte modules, and automated sample loading carousels.",
        icon: FlaskConical,
      },
      {
        title: "Hematology & Coagulation Systems",
        desc: "Laser flow cytometry 5-part differential hematology analyzers, automated reticulocyte counting, and optical/mechanical coagulometers.",
        icon: Activity,
      },
      {
        title: "Molecular Biology & PCR Workstations",
        desc: "Real-time qPCR systems, automated magnetic bead nucleic acid extractors, PCR clean hoods, and UV crosslinkers.",
        icon: Microscope,
      },
      {
        title: "Immunology & Chemiluminescence (CLIA)",
        desc: "Automated Chemiluminescence Immunoassay (CLIA) and ELISA microplate readers for hormones, tumor markers, and viral serology.",
        icon: Sparkles,
      },
      {
        title: "Microbiology & Antibiotic Sensitivity",
        desc: "Automated blood culture monitoring systems, microbial identification and antibiotic susceptibility testing (AST) analyzers.",
        icon: ShieldCheck,
      },
      {
        title: "Cold Chain & Reagent Supply Network",
        desc: "Temperature-monitored blood bank refrigerators, -20°C/-86°C freezers, and scheduled cold-chain delivery of validated diagnostic reagents.",
        icon: Layers,
      },
    ],
    technologies: [
      "Automated Clinical Chemistry Analyzers (400 – 1,200 tests/hour)",
      "5-Part Differential Laser Hematology Analyzers with Autoloader",
      "Automated Magnetic-Bead Viral RNA/DNA Extraction Systems",
      "Real-Time Quantitative PCR (qPCR) Diagnostics Platforms",
      "Chemiluminescence Immunoassay (CLIA) Multi-Channel Systems",
      "Automated Microbial Blood Culture Incubation Systems",
      "Microprocessor-Controlled Class II Type A2 Biosafety Hoods",
      "High-Speed Refrigerated Laboratory Centrifuges",
      "Digital Pathology Slide Scanners with Cloud Remote Viewing",
      "Laboratory Information Management System (LIMS) Barcode Scanners",
    ],
    workflow: [
      {
        step: "01",
        title: "Sample Throughput & Test Menu Audit",
        desc: "Evaluating daily specimen volume, test menu diversity, and turnaround time (TAT) targets to recommend the right analyzer capacity.",
      },
      {
        step: "02",
        title: "Laboratory Spatial & Water Purification Setup",
        desc: "Installing chemical-resistant modular benches, pure Type 1 water systems, UPS power, and localized biosafety exhaust.",
      },
      {
        step: "03",
        title: "Analyzer Commissioning & Calibration",
        desc: "Precision installation, multi-level control calibration, precision verification, and LIMS bidirectional software interfacing.",
      },
      {
        step: "04",
        title: "Reagent Agreement & Quality Assurance",
        desc: "Locking in guaranteed cost-per-test pricing, scheduled reagent deliveries, and external quality assessment (EQAS) support.",
      },
    ],
    benefits: [
      "Lower cost-per-test through direct OEM reagent and analyzer contracts",
      "Bidirectional LIMS interfacing eliminating manual data entry errors",
      "Full ISO 15189 compliance documentation and calibration certification",
      "Uninterrupted cold-chain reagent logistics preventing stockouts",
      "Certified biomedical application engineers providing on-site support",
    ],
    targetDepts: [
      "Clinical Pathology & Diagnostic Laboratory Chains",
      "Hospital Central Pathology Laboratories",
      "Molecular Diagnostics & Genetic Testing Centers",
      "Blood Transfusion Centers & Blood Banks",
      "Toxicology, Forensic & Occupational Health Labs",
      "Veterinary Diagnostic Laboratories",
    ],
    faqs: [
      {
        q: "Do your analyzers integrate with our existing LIMS software?",
        a: "Yes, our chemistry, hematology, and PCR analyzers support bidirectional ASTM and HL7 protocols for seamless integration with your LIMS.",
      },
      {
        q: "What is your turnaround time for reagent restocking?",
        a: "We maintain regional warehouse stock and provide guaranteed 24 to 48-hour cold-chain reagent delivery to contracted laboratories.",
      },
      {
        q: "Do you offer equipment placement agreements based on reagent consumption?",
        a: "Yes, we provide flexible reagent-rental and outright purchase models based on your projected test volume.",
      },
    ],
  },

  // ─── 8. INDUSTRIAL & CORPORATE ─────────────────────────────────────────────
  {
    slug: "industrial-corporate",
    label: "Industrial & Corporate",
    title: "Industrial & Corporate",
    eyebrow: "INDUSTRIES WE SERVE",
    tagline: "Providing dependable solutions for industrial organizations and corporate environments focused on efficiency, growth, and operational excellence.",
    icon: Factory,
    badge: "Industrial & Corporate Solutions",
    heroImage: "/project-industrial-plant.jpg",
    aboutImage: "/neomrecruitment/hero_executive_boardroom.jpg",
    overview: [
      "Modern industrial manufacturing facilities and corporate headquarters require sophisticated infrastructure, reliable MEP utilities, high-efficiency power networks, and occupational health systems. Roys & Roys International delivers robust turnkey engineering, facility systems, and institutional supply frameworks tailored for enterprise scale.",
      "From heavy industrial plants, clean fabrication hubs, and warehouse complexes to prestigious corporate headquarters, we design and execute integrated solutions that optimize operational uptime, worker safety, energy consumption, and corporate wellness.",
      "Our corporate and industrial solutions comply with international OSHA, ISO 9001, ISO 14001, and LEED green building standards, empowering leading enterprises to achieve maximum productivity and long-term sustainable growth."
    ],
    stats: [
      { value: "180+", label: "Corporate & Plants Served" },
      { value: "99.9%", label: "Facility Reliability" },
      { value: "35%", label: "Avg Energy Efficiency Gain" },
      { value: "100%", label: "Compliance & Safety Rate" },
    ],
    keyPillars: [
      {
        title: "Industrial Plant Engineering & MEP",
        desc: "Heavy-duty electrical switchgear, industrial HVAC ventilation, compressed air piping, and process utility integration for manufacturing hubs.",
        icon: Factory,
      },
      {
        title: "Corporate Smart Infrastructure & BMS",
        desc: "Intelligent Building Management Systems (BMS), IoT energy monitoring, acoustic conference automation, and smart access control.",
        icon: Building,
      },
      {
        title: "Occupational Health & On-Site Medical Units",
        desc: "Equipping workplace first-aid stations, industrial emergency trauma clinics, employee health screening suites, and medical kits.",
        icon: HeartPulse,
      },
      {
        title: "Clean Industrial & Controlled Facilities",
        desc: "Specialized precision engineering, dust-free assembly spaces, anti-static ESD flooring, and high-efficiency particulate containment.",
        icon: Layers,
      },
      {
        title: "Power Continuity & Energy Efficiency",
        desc: "Heavy commercial UPS backups, diesel generator synchronization, solar PV plant installations, and power factor correction.",
        icon: Zap,
      },
      {
        title: "Facility Safety, Fire Protection & EHS",
        desc: "Automated NFPA-standard fire suppression skids, hazardous gas detection, smoke evacuation, and occupational safety audits.",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "Integrated Industrial Building Management Systems (BMS)",
      "Heavy Commercial Central HVAC Chillers & Air Filtration",
      "High-Voltage Switchgear & Redundant UPS Backup Infrastructure",
      "Occupational Health Clinic Medical Devices & First-Aid Trauma Kits",
      "Cleanroom Modular Wall Paneling & Positive Pressure Zoning",
      "Addressable Fire Alarm & Automated Clean-Agent Sprinkler Skids",
      "Energy Consumption Telemetry & IoT Cloud Sub-Metering",
      "Ergonomic Corporate Office Technical Furniture & Workstations",
      "Industrial Wastewater Neutralization & Effluent Treatment (ETP)",
      "Access Control, RFID Turnstiles & Integrated Security Monitoring",
    ],
    workflow: [
      {
        step: "01",
        title: "Site Assessment & Facility Audit",
        desc: "Assessing plant square footage, electrical load, occupancy patterns, and environmental regulatory criteria.",
      },
      {
        step: "02",
        title: "Engineering Blueprint & Spatial Design",
        desc: "Drafting MEP schematics, CAD layouts, load calculations, and energy efficiency models tailored to client specifications.",
      },
      {
        step: "03",
        title: "Procurement & Precision Installation",
        desc: "Coordinating delivery of industrial-grade equipment, certified on-site rigging, and turnkey MEP commissioning.",
      },
      {
        step: "04",
        title: "Operational Handover & AMC Support",
        desc: "System testing, operator staff training, compliance certification, and continuous 24/7 lifecycle facility maintenance.",
      },
    ],
    benefits: [
      "Single-source turnkey contractor for civil, MEP, power, and medical infrastructure",
      "Proven reduction in operational energy costs and plant utility downtimes",
      "Turnkey on-site occupational healthcare clinics safeguarding workforce productivity",
      "Adherence to OSHA, ISO 9001, ISO 14001, and international environmental codes",
      "Rapid-response engineering maintenance teams available 24/7",
    ],
    targetDepts: [
      "Heavy Manufacturing & Assembly Plants",
      "Multinational Corporate Headquarters & Business Parks",
      "Logistics Hubs & Automated Distribution Centers",
      "Electronics, Engineering & Precision Tooling Facilities",
      "Enterprise Data Centers & High-Tech Campuses",
      "Corporate Employee Health & Wellness Centers",
    ],
    faqs: [
      {
        q: "Can you set up turnkey on-site medical and occupational clinics for our industrial plant?",
        a: "Yes, we design, furnish, and equip complete factory medical centers with emergency trauma beds, ECG, defibrillators, point-of-care diagnostics, and medical supplies.",
      },
      {
        q: "Do you provide energy efficiency audits and BMS automation for corporate headquarters?",
        a: "Yes, our engineers implement smart Building Management Systems (BMS) and IoT power telemetry that routinely reduce corporate building energy costs by 20% to 35%.",
      },
      {
        q: "What maintenance and facility service agreements are offered for industrial facilities?",
        a: "We provide comprehensive 24/7 Annual Maintenance Contracts (AMC/CMC) covering HVAC, electrical panels, backup power generators, fire safety, and plumbing systems.",
      },
    ],
  },
];

// ─── Slug Aliases for Seamless Backward Compatibility ────────────────────────
const SLUG_ALIASES = {
  "military-healthcare": "military-defence",
  "research-centers": "research-institutions",
  "universities": "educational-institutions",
  "pharmaceutical-industry": "pharma-companies",
  "hotels-labs": "diagnostic-labs",
};

export function getIndustryBySlug(slug) {
  if (!slug) return undefined;
  const canonicalSlug = SLUG_ALIASES[slug] || slug;
  return (
    INDUSTRIES_LIST.find((i) => i.slug === canonicalSlug) ||
    INDUSTRIES_LIST.find((i) => i.slug === slug)
  );
}
