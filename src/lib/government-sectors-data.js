import {
  Landmark,
  MapPin,
  Shield,
  GraduationCap,
  Microscope,
  Network,
  Building2,
  FileCheck,
  CheckCircle2,
  Award,
  Globe,
  TrendingUp,
  Activity,
  Zap,
  Layers,
  Wrench,
  Users,
  Briefcase,
} from "lucide-react";

export const GOVERNMENT_SECTORS_LIST = [
  {
    slug: "federal-ministries",
    label: "Federal Ministries",
    title: "Federal Ministries & National Authorities",
    eyebrow: "NATIONAL STRATEGY, POLICY EXECUTION & LARGE-SCALE PROCUREMENT",
    tagline: "Empowering federal ministries and national statutory bodies with strategic infrastructure, technology procurement, healthcare systems, and consulting.",
    icon: Landmark,
    badge: "Federal Government",
    heroImage: "/federal_ministries_hero.jpg",
    overview: [
      "Federal Ministries govern national policies, large-scale developmental infrastructure, public health mandates, and economic security. ROYSONS Group acts as a premier institutional contractor and procurement powerhouse for federal ministries across Pakistan.",
      "From national healthcare procurement for the Ministry of National Health Services and defense medical modernization to civil construction for the Ministry of Housing and Works, we deliver turnkey solutions aligned with federal standards and Public Procurement Regulatory Authority (PPRA) frameworks.",
      "Our federal engagements are backed by robust financial engineering, performance guarantees, multi-year warranty frameworks, and dedicated liaison offices in the federal capital."
    ],
    stats: [
      { value: "$75M+", label: "Federal Contracts Executed" },
      { value: "100%", label: "PPRA Regulatory Compliance" },
      { value: "20+", label: "Federal Ministries Partnered" },
      { value: "15+", label: "Years of National Service" },
    ],
    keyPillars: [
      {
        title: "National Health & Medical Procurement",
        desc: "Turnkey supply of diagnostic imaging suites, critical ICU machinery, and hospital engineering systems for federally administered hospitals (PIMS, Polyclinic, etc.).",
        icon: Activity,
      },
      {
        title: "Federal Civil Infrastructure & MEP",
        desc: "Construction, engineering, and modernization of federal ministry complexes, statutory secretariats, and institutional accommodation facilities.",
        icon: Building2,
      },
      {
        title: "Strategic Advisory & Project Management",
        desc: "Empirical policy consulting, feasibility studies, economic modeling, and project management unit (PMU) support for national initiatives.",
        icon: FileCheck,
      },
      {
        title: "National Energy & Utility Solutions",
        desc: "Grid-scale backup power, solarization of federal administrative buildings, and uninterrupted power supply (UPS) systems for data centers.",
        icon: Zap,
      },
      {
        title: "Disaster Preparedness & Relief Logistics",
        desc: "Emergency stockpile procurement, rapid-response medical kits, mobile health clinics, and crisis logistics for federal disaster agencies.",
        icon: Shield,
      },
      {
        title: "Digital Infrastructure & Enterprise IT",
        desc: "Government-wide secure networking, data center infrastructure, biometric access systems, and automated records management platforms.",
        icon: Network,
      },
    ],
    technologies: [
      "Large-Scale Medical Gas Pipeline Systems (HTM 02-01 Compliant)",
      "High-Volume Multi-Slice CT & MRI Diagnostic Suites",
      "Commercial Building Energy Management & Solarization Plants",
      "Industrial Water Filtration & Municipal Treatment Skids",
      "Enterprise IT Network Infrastructure & Server Rooms",
      "Prefabricated Emergency Field Hospitals & Disaster Units",
      "Automated Security, Surveillance & Biometric Gates",
      "Centralized Medical Waste Shredder-Autoclave Units",
      "Cold-Chain Logistics & Vaccine Fleet Equipment",
      "Structural Steel & Reinforced Concrete Civil Engineering",
    ],
    workflow: [
      {
        step: "01",
        title: "Federal Tender Assessment",
        desc: "Thorough evaluation of federal technical specifications, PC-1 project outlines, and PPRA bidding requirements.",
      },
      {
        step: "02",
        title: "Strategic Sourcing & Engineering Plan",
        desc: "Engaging tier-1 international OEMs, architectural CAD modeling, and coordinated mechanical/electrical engineering schedules.",
      },
      {
        step: "03",
        title: "Transparent Execution & Logistics",
        desc: "Rigorous milestone delivery, customs clearance for imported technologies, and on-site supervisor oversight.",
      },
      {
        step: "04",
        title: "Joint Handover & Multilateral Audits",
        desc: "Third-party inspection, performance testing, official certificate of completion, and structured warranty support.",
      },
    ],
    benefits: [
      "Decades of direct experience in PPRA rules and federal procurement statutes",
      "Multi-million dollar bonding capacity with premier scheduled banks",
      "Nationwide logistical reach across federal territories and special regions",
      "Direct OEM representation ensuring authentic warranties and spare parts",
      "Dedicated government relations and technical compliance divisions",
    ],
    targetBodies: [
      "Ministry of National Health Services, Regulations & Coordination",
      "Ministry of Housing & Works / Pakistan Public Works Department (Pak PWD)",
      "Ministry of Planning, Development & Special Initiatives",
      "Ministry of Energy (Power & Petroleum Divisions)",
      "Ministry of Federal Education & Professional Training",
      "National Disaster Management Authority (NDMA)",
    ],
    faqs: [
      {
        q: "What certifications do your federal contract supplies carry?",
        a: "All equipment and materials comply with ISO 9001, ISO 13485, CE, FDA, and relevant Pakistan Standards and Quality Control Authority (PSQCA) regulations.",
      },
      {
        q: "Can ROYSONS manage multi-province federal projects simultaneously?",
        a: "Yes, ROYSONS operates regional engineering offices in Islamabad, Lahore, Karachi, and Peshawar, enabling simultaneous nationwide project execution.",
      },
      {
        q: "Do you offer post-completion maintenance contracts for federal infrastructure?",
        a: "Yes, we provide multi-year Comprehensive Maintenance Contracts (CMC) and Facility Management Services with guaranteed SLAs.",
      },
    ],
  },
  {
    slug: "provincial-governments",
    label: "Provincial Governments",
    title: "Provincial Governments & Regional Authorities",
    eyebrow: "DECENTRALIZED HEALTHCARE, CIVIL WORKS & CIVIC INFRASTRUCTURE",
    tagline: "Partnering with provincial secretariats, health departments, and communication & works divisions to drive regional economic and social progress.",
    icon: MapPin,
    badge: "Provincial Administration",
    heroImage: "/provincial_gov_hero.jpg",
    overview: [
      "Provincial governments carry the primary mandate for public healthcare delivery, secondary and tertiary hospital administration, provincial highways, municipal water schemes, and agriculture modernization. ROYSONS Group is a premier partner to provincial departments across Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan.",
      "We execute major provincial health development schemes, upgrade District Headquarter (DHQ) and Tehsil Headquarter (THQ) hospitals, install municipal wastewater systems, and deliver sustainable agro-industrial machinery.",
      "Our decentralized regional teams understand local geographic challenges, provincial procurement frameworks, and regional stakeholder coordination, ensuring on-time project completion and measurable civic impact."
    ],
    stats: [
      { value: "100+", label: "Provincial Projects Delivered" },
      { value: "50+", label: "DHQ / THQ Hospitals Equipped" },
      { value: "4", label: "Provinces Actively Served" },
      { value: "100%", label: "Provincial PPRA Compliance" },
    ],
    keyPillars: [
      {
        title: "DHQ & THQ Hospital Revamp Programs",
        desc: "Turnkey equipment supply, modular OT construction, and ICU installation across secondary and tertiary district hospitals.",
        icon: Activity,
      },
      {
        title: "Communication & Works (C&W) Civil Projects",
        desc: "Construction of administrative complexes, institutional facilities, regional training academies, and road infrastructure.",
        icon: Building2,
      },
      {
        title: "Public Health Engineering & Water Supply",
        desc: "Establishment of regional reverse osmosis (RO) filtration plants, chlorination skids, and rural clean water distribution schemes.",
        icon: Wrench,
      },
      {
        title: "Agriculture & Livestock Mechanization",
        desc: "Supplying high-efficiency irrigation systems, agricultural machinery, veterinary diagnostics, and livestock vaccination lines.",
        icon: Layers,
      },
      {
        title: "Provincial Emergency Services (Rescue Support)",
        desc: "Equipping emergency ambulance fleets, patient transport stretchers, cardiac monitors, and mobile medical rescue pods.",
        icon: Shield,
      },
      {
        title: "Solarization of Regional Facilities",
        desc: "Conversion of rural health centers, tehsil government buildings, and educational institutes to off-grid solar power systems.",
        icon: Zap,
      },
    ],
    technologies: [
      "District Hospital High-Efficiency Surgical Theatres",
      "PSA Medical Oxygen Plants & District Gas Pipelines",
      "Reverse Osmosis (RO) Water Purification Plants (10,000–50,000 GPD)",
      "Solar Hybrid Grid-Tie & Off-Grid Solar Power Arrays",
      "Digital Radiography (DR) & Mobile X-Ray Units",
      "Modern Farm Tractors, Planters & Harvester Implements",
      "Automated Clinical Chemistry Analyzers for Tehsil Labs",
      "Commercial Building Heavy HVAC & Climate Control",
      "Precast Concrete Drainage & Stormwater Infrastructure",
      "Hospital Waste Disinfection & Incineration Systems",
    ],
    workflow: [
      {
        step: "01",
        title: "Provincial Scheme Alignment",
        desc: "Reviewing ADP (Annual Development Program) allocations, district health metrics, and technical tender documents.",
      },
      {
        step: "02",
        title: "District-Level Site Surveys",
        desc: "Dispatching regional engineering teams to inspect remote DHQ/THQ locations, power stability, and spatial suitability.",
      },
      {
        step: "03",
        title: "Staged Delivery & Installation",
        desc: "Simultaneous deployment across multiple districts with localized warehousing and certified technical teams.",
      },
      {
        step: "04",
        title: "District Handover & Doctor Training",
        desc: "Conducting user training workshops for medical superintendents and district engineers, followed by signed acceptance.",
      },
    ],
    benefits: [
      "Strong established presence and liaison across all four provincial headquarters",
      "Rapid deployment teams capable of reaching remote tehsil and rural sites",
      "Deep understanding of provincial procurement rules (Punjab PPRA, Sindh PPRA, etc.)",
      "Extensive stock of fast-moving spare parts in regional supply depots",
      "Robust post-handover warranty and scheduled maintenance coverage",
    ],
    targetBodies: [
      "Primary & Secondary Healthcare Departments",
      "Specialized Healthcare & Medical Education Departments",
      "Communication & Works (C&W) Departments",
      "Public Health Engineering Departments (PHED)",
      "Agriculture, Livestock & Dairy Development Departments",
      "Provincial Disaster Management Authorities (PDMA)",
    ],
    faqs: [
      {
        q: "Can ROYSONS manage equipment supply across remote districts in Balochistan or KP?",
        a: "Yes, our dedicated logistics division and mobile engineering teams have extensive operational experience in challenging geographic terrains.",
      },
      {
        q: "Do your medical equipment packages include staff training for district doctors?",
        a: "Yes, comprehensive clinical application and technical troubleshooting training is provided on-site at every district hospital.",
      },
      {
        q: "How are warranty claims handled for equipment installed in remote tehsils?",
        a: "Our regional service centers provide guaranteed 24 to 48-hour on-site technician response for any warranty service requests.",
      },
    ],
  },
  {
    slug: "armed-forces",
    label: "Armed Forces",
    title: "Armed Forces & Defense Institutions",
    eyebrow: "MISSION-CRITICAL DEFENSE HEALTHCARE & TACTICAL INFRASTRUCTURE",
    tagline: "Serving the Armed Forces with ruggedized medical systems, tactical field hospitals, trauma centers, and specialized defense infrastructure.",
    icon: Shield,
    badge: "Defense & Military",
    heroImage: "/armed_forces_hero.jpg",
    overview: [
      "The Armed Forces demand absolute precision, rugged operational durability, military-grade reliability, and highest confidentiality in every project. ROYSONS Group is a registered, trusted defense partner serving the Pakistan Army, Navy, and Air Force medical directorates and engineering corps.",
      "We equip Combined Military Hospitals (CMHs), Naval Hospitals, and PAF medical bases with state-of-the-art diagnostic imaging suites, modular combat surgical rooms, and tactical transportable field hospitals.",
      "Our defense operations comply with stringent military procurement standards, security clearances, and rapid emergency response protocols, ensuring unwavering healthcare readiness for military personnel and their families."
    ],
    stats: [
      { value: "40+", label: "Military Hospitals Equipped" },
      { value: "100%", label: "Defense Security Compliance" },
      { value: "24/7", label: "Priority Military SLA" },
      { value: "<2 Hr", label: "Emergency Breakdown Support" },
    ],
    keyPillars: [
      {
        title: "Combined Military Hospital (CMH) Solutions",
        desc: "Turnkey diagnostic radiology (MRI, CT), surgical suites, and automated pathology laboratories for major military hospital centers.",
        icon: Building2,
      },
      {
        title: "Tactical Mobile & Field Hospitals",
        desc: "Expandable containerized and tent-based surgical suites, ICU modules, and mobile triage units built for rapid military deployment.",
        icon: Shield,
      },
      {
        title: "Combat Casualty & Trauma Care",
        desc: "Ruggedized portable ventilators, battlefield ultrasound, automated external defibrillators (AEDs), and aeromedical evacuation life support.",
        icon: Activity,
      },
      {
        title: "Military Orthopedic & Rehabilitation Centers",
        desc: "Specialized arthroscopy surgical towers, motorized fracture tables, modern prosthetics, and physical therapy equipment.",
        icon: Wrench,
      },
      {
        title: "Rugged Oxygen & Power Systems",
        desc: "Containerized PSA oxygen plants and military-grade isolated uninterruptible power systems designed for severe climatic conditions.",
        icon: Zap,
      },
      {
        title: "Classified & RF-Shielded Enclosures",
        desc: "Copper Faraday cage RF shielding for MRI suites, radiation lead-lining, and secure data infrastructure complying with defense norms.",
        icon: Layers,
      },
    ],
    technologies: [
      "Military-Grade Emergency Transport Ventilators (MIL-STD-810G)",
      "Ruggedized Point-of-Care Ultrasound Scanners with Solar Option",
      "Containerized Expandable Mobile Surgical Units (20ft & 40ft)",
      "Multi-Slice High-Resolution CT & 1.5T/3.0T MRI Diagnostic Suites",
      "Heavy-Duty Hydraulic Combat Fracture Operating Tables",
      "High-Energy Surgical Diathermy & Electrosurgical Workstations",
      "Containerized High-Output Medical Oxygen Generation Skids",
      "Aeromedical Evacuation Intensive Care Transport Modules",
      "Emergency Blood Bank & Plasma Storage Cryo-Units",
      "Tactical Multi-Parameter Vital Signs Patient Monitors",
    ],
    workflow: [
      {
        step: "01",
        title: "Defense Requirement & Clearance",
        desc: "Direct coordination with military healthcare directorates under strict security protocols and confidential clearances.",
      },
      {
        step: "02",
        title: "Ruggedized Product Engineering",
        desc: "Selecting products built to withstand environmental shock, wide temperature ranges, and power volatility.",
      },
      {
        step: "03",
        title: "Base Installation & Commissioning",
        desc: "Deployment by security-vetted engineers to military cantonments and naval/air bases with meticulous precision.",
      },
      {
        step: "04",
        title: "Armed Forces Technical Training",
        desc: "Comprehensive operational training for military doctors, nursing officers, and army biomedical technicians.",
      },
    ],
    benefits: [
      "Registered vendor with defense directorates and military procurement agencies",
      "Ruggedized, military-spec equipment built for high-tempo operations",
      "Dedicated priority biomedical response hotline for armed forces medical centers",
      "Absolute confidentiality and adherence to defense protocols",
      "Comprehensive stockpile of defense-certified spare parts and replacement units",
    ],
    targetBodies: [
      "Medical Directorate, General Headquarters (GHQ)",
      "Combined Military Hospitals (CMH) Network",
      "Pakistan Naval Hospitals (PNS Shifa, PNS Rahat, etc.)",
      "Pakistan Air Force (PAF) Medical Services & Bases",
      "Armed Forces Institute of Cardiology (AFIC / NIHD)",
      "Armed Forces Institute of Pathology (AFIP) & Rehabilitation (AFIRM)",
    ],
    faqs: [
      {
        q: "Do you supply expandable containerized field hospitals?",
        a: "Yes, we design and equip 20ft and 40ft expandable containerized surgical suites, ICU modules, and triage units with integrated power and air filtration.",
      },
      {
        q: "Are your field medical devices certified for aeromedical evacuation?",
        a: "Yes, our transport ventilators, monitors, and suction units comply with international aviation and military vibration standards.",
      },
      {
        q: "What priority response time do you offer for military emergency calls?",
        a: "We maintain 24/7 dedicated military priority lines with guaranteed on-site response times under 2 hours in garrison areas.",
      },
    ],
  },
  {
    slug: "universities",
    label: "Universities",
    title: "Universities & Higher Education Institutions",
    eyebrow: "ACADEMIC EXCELLENCE, MEDICAL TRAINING & CAMPUS INFRASTRUCTURE",
    tagline: "Empowering higher education universities, medical colleges, and engineering faculties with simulation labs, campus civil works, and research setups.",
    icon: GraduationCap,
    badge: "Higher Education & Academia",
    heroImage: "/biomax_ind_university_ai.jpg",
    overview: [
      "Universities and higher education institutes require state-of-the-art academic infrastructure, clinical skills simulation laboratories, digital lecture facilities, and campus engineering to prepare future leaders. ROYSONS Group is a premier partner to public and private universities across Pakistan.",
      "We design and build clinical simulation centers for medical universities, analytical testing laboratories for engineering and chemistry faculties, high-voltage electrical setups, and multi-story academic buildings.",
      "Our solutions bridge theoretical learning and practical professional reality, complying with Higher Education Commission (HEC), Pakistan Medical and Dental Council (PMDC), and Pakistan Engineering Council (PEC) criteria."
    ],
    stats: [
      { value: "35+", label: "Universities Partnered" },
      { value: "50,000+", label: "Students Empowered" },
      { value: "100+", label: "Teaching & Skills Labs Built" },
      { value: "100%", label: "HEC / PMDC / PEC Compliance" },
    ],
    keyPillars: [
      {
        title: "Clinical Simulation & Skills Centers",
        desc: "High-fidelity adult and pediatric patient simulators, virtual reality surgical trainers, CPR mannequins, and OSCE examination stations.",
        icon: Activity,
      },
      {
        title: "Digital Pathology & Microscopy Suites",
        desc: "Multi-head teaching microscopes with 4K camera projection, virtual slide digital histology systems, and automated microtomes.",
        icon: Microscope,
      },
      {
        title: "Engineering & Applied Sciences Laboratories",
        desc: "Civil, mechanical, and electrical engineering lab instrumentation, universal testing machines (UTM), and fluid mechanics benches.",
        icon: Wrench,
      },
      {
        title: "Campus Civil Construction & Facilities",
        desc: "Turnkey construction of academic blocks, central libraries, student hostels, administrative secretariats, and sports auditoriums.",
        icon: Building2,
      },
      {
        title: "Smart Auditoriums & Live Surgical Broadcast",
        desc: "4K audio-visual streaming connecting teaching hospital operating rooms directly to university lecture auditoriums for live learning.",
        icon: Zap,
      },
      {
        title: "Renewable Energy & Solar Campus Systems",
        desc: "Megawatt-scale rooftop and ground-mount solar PV plants reducing university grid electricity expenditures by up to 60%.",
        icon: Layers,
      },
    ],
    technologies: [
      "High-Fidelity Adult, Obstetric & Pediatric Simulation Mannequins",
      "Virtual Reality Laparoscopic & Endoscopic Surgical Simulators",
      "Multi-Head 5/10-User Optical & Digital Teaching Microscopes",
      "3D Interactive Virtual Dissection Anatomy Display Tables",
      "Live 4K OT-to-Auditorium Surgical Broadcasting Systems",
      "Universal Material Testing Machines (UTM 50kN – 1000kN)",
      "Anatomy Cadaver Dissection Tables & Mortuary Preservation Units",
      "Student Physiology & Pharmacology Multi-Channel Data Loggers",
      "Benchtop Automated Clinical Chemistry Training Analyzers",
      "Megawatt-Scale Grid-Tied Solar Photovoltaic Campus Plants",
    ],
    workflow: [
      {
        step: "01",
        title: "Academic Curriculum Alignment",
        desc: "Reviewing faculty requirements against HEC, PMDC, and PEC accreditation guidelines to formulate precise equipment schedules.",
      },
      {
        step: "02",
        title: "Architectural & Spatial Planning",
        desc: "Designing multi-station simulation rooms, control booths with one-way observation glass, and debriefing theaters.",
      },
      {
        step: "03",
        title: "Instrument Installation & Testing",
        desc: "Uncrating, assembly, electrical safety testing, network integration, and calibration of all analytical systems.",
      },
      {
        step: "04",
        title: "Faculty Training & Masterclasses",
        desc: "Comprehensive workshops for professors, demonstrator doctors, and lab instructors to maximize educational impact.",
      },
    ],
    benefits: [
      "Complete alignment with HEC, PMDC, and international WFME standards",
      "State-of-the-art simulation technology preparing students for clinical reality",
      "Turnkey campus construction and MEP execution under one roof",
      "Long-term warranty and academic semester maintenance coverage",
      "Direct technical support during examination and accreditation cycles",
    ],
    targetBodies: [
      "Public Sector General & Technical Universities",
      "Medical & Dental Colleges (Undergraduate & Postgraduate)",
      "University Teaching Hospitals & Clinical Centers",
      "Engineering & Applied Technology Faculties",
      "Nursing & Allied Health Sciences Colleges",
      "Higher Education Commission (HEC) Funded Programs",
    ],
    faqs: [
      {
        q: "Do your medical simulation systems meet PMDC and WFME accreditation requirements?",
        a: "Yes, our clinical skills labs and simulation equipment meet all PMDC and WFME accreditation standards for medical colleges.",
      },
      {
        q: "Can you broadcast live surgical operations from the teaching hospital to university auditoriums?",
        a: "Yes, we install integrated 4K surgical camera systems with two-way audio streaming directly to lecture halls for interactive teaching.",
      },
      {
        q: "Do you construct turnkey university buildings and student hostels?",
        a: "Yes, our civil engineering division executes multi-story academic buildings, libraries, and hostels from foundation to finishing.",
      },
    ],
  },
  {
    slug: "research-institutes",
    label: "Research Institutes",
    title: "Research Institutes & Biotechnology Centers",
    eyebrow: "ADVANCED SCIENTIFIC DISCOVERY & HIGH-TECH CONTAINMENT",
    tagline: "Outfitting national research institutes, genomics centers, and scientific laboratories with precision analytical instrumentation and sterile facilities.",
    icon: Microscope,
    badge: "Scientific Research & R&D",
    heroImage: "/biomax_research_lab.jpg",
    overview: [
      "Scientific discovery, genomics research, and molecular testing require extreme measurement sensitivity, contamination-free clean environments, and repeatable analytical precision. ROYSONS Group partners with national scientific bodies, agricultural research councils, and biotechnology institutes.",
      "We design and build certified Biosafety Level (BSL-2 and BSL-3) cleanrooms, ultra-pure water generation plants (18.2 MΩ·cm), analytical chromatography suites (HPLC, GC), Real-Time PCR genomics facilities, and bio-banking cryogenic repositories.",
      "Our scientific division provides end-to-end laboratory design, equipment qualification (DQ, IQ, OQ, PQ), NIST-traceable calibration, and high-purity chemical and reagent supply agreements."
    ],
    stats: [
      { value: "60+", label: "Research Labs Built" },
      { value: "1,500+", label: "Analytical Instruments Deployed" },
      { value: "BSL-2/3", label: "Biosafety Facilities Certified" },
      { value: "100%", label: "NIST-Traceable Calibration" },
    ],
    keyPillars: [
      {
        title: "Genomics & Molecular Biology Suites",
        desc: "Automated nucleic acid extractors, Real-Time quantitative PCR (qPCR) systems, capillary sequencers, and UV transilluminators.",
        icon: Microscope,
      },
      {
        title: "Analytical Chromatography & Spectroscopy",
        desc: "HPLC systems, Gas Chromatography (GC), double-beam UV-Vis spectrophotometers, and atomic absorption spectrometers.",
        icon: Activity,
      },
      {
        title: "BSL-2 & BSL-3 Cleanroom Facilities",
        desc: "Class II/III biosafety cabinets, negative pressure airlocks, HEPA exhaust filtration, and differential pressure monitoring.",
        icon: Shield,
      },
      {
        title: "Biobanking & Cryogenic Preservation",
        desc: "-86°C ultra-low temperature freezers, liquid nitrogen cryo-storage tanks, and automated temperature alarm telemetry.",
        icon: Layers,
      },
      {
        title: "Cell Culture & Microbial Incubation",
        desc: "CO2 incubators with high-temp sterilization, inverted fluorescent research microscopes, and laminar flow clean benches.",
        icon: Landmark,
      },
      {
        title: "Ultra-Pure Water & Clean Utilities",
        desc: "Type 1 Ultrapure water systems (18.2 MΩ·cm), laboratory gas generators (N2, H2, Zero Air), and chemical fume extraction hoods.",
        icon: Zap,
      },
    ],
    technologies: [
      "Real-Time qPCR Thermal Cyclers (96 & 384 Well High-Throughput)",
      "High-Performance Liquid Chromatography (HPLC) Systems",
      "Class II Type A2 & B2 Biosafety Containment Cabinets",
      "High-Speed Refrigerated Centrifuges (Up to 30,000 x g)",
      "Double-Beam UV-Vis Scanning Spectrophotometers",
      "-86°C Ultra-Low Freezers with Dual Independent Compressors",
      "CO2 Incubators with Infrared Sensors & 180°C Decontamination",
      "Type 1 Ultrapure Water Systems with UV & Ultrafiltration",
      "Digital Inverted Research Epifluorescence Microscopes",
      "Automated Sample Fraction Collectors & Rotary Evaporators",
    ],
    workflow: [
      {
        step: "01",
        title: "Scientific Protocol & BSL Assessment",
        desc: "Evaluating research objectives, chemical handling, and biosafety containment level (BSL-1 to BSL-3).",
      },
      {
        step: "02",
        title: "Laboratory Spatial & Clean Utility Plan",
        desc: "Designing anti-vibration epoxy benching, pure water distribution loops, and dedicated negative pressure ducting.",
      },
      {
        step: "03",
        title: "Instrument Commissioning & IQ/OQ",
        desc: "Delivery, installation, baseline validation, multi-point calibration, and formal qualification documentation.",
      },
      {
        step: "04",
        title: "Application Support & Reagent Supply",
        desc: "On-site protocol optimization by application specialists and scheduled cold-chain reagent deliveries.",
      },
    ],
    benefits: [
      "Direct partnership with world-leading scientific instrumentation brands",
      "NIST-traceable calibration ensuring maximum experimental reproducibility",
      "Turnkey BSL-2 and BSL-3 cleanroom and containment engineering",
      "Certified application scientists assisting in research protocol setup",
      "Continuous supply of high-purity chemical reagents and lab consumables",
    ],
    targetBodies: [
      "National Institute of Health (NIH)",
      "Pakistan Council of Scientific & Industrial Research (PCSIR)",
      "National Institute for Biotechnology & Genetic Engineering (NIBGE)",
      "Pakistan Agricultural Research Council (PARC)",
      "International Center for Chemical & Biological Sciences (ICCBS)",
      "Center of Excellence in Molecular Biology (CEMB)",
    ],
    faqs: [
      {
        q: "Can you design and construct BSL-3 containment laboratories?",
        a: "Yes, we provide full turnkey design, construction, negative pressure HVAC balancing, and validation for BSL-2 and BSL-3 facilities.",
      },
      {
        q: "Do you supply IQ/OQ/PQ validation documentation for research instruments?",
        a: "Yes, all analytical instruments come with certified manufacturer qualification documentation conforming to GLP/GMP standards.",
      },
      {
        q: "Do you maintain cold-chain logistics for sensitive molecular reagents?",
        a: "Yes, our logistics fleet maintains temperature-monitored cold-chain shipping for enzymes, master mixes, primers, and antibodies.",
      },
    ],
  },
  {
    slug: "public-sector-organizations",
    label: "Public Sector Organizations",
    title: "Public Sector Organizations & State Enterprises",
    eyebrow: "INDUSTRIAL INFRASTRUCTURE, PUBLIC CORPORATIONS & UTILITIES",
    tagline: "Partnering with state-owned corporations, utility providers, port authorities, and industrial statutory enterprises on large-scale infrastructure and technology.",
    icon: Network,
    badge: "State Enterprises & Utilities",
    heroImage: "/project-roysons-infrastructure.jpg",
    overview: [
      "State-owned enterprises, public utility corporations, port authorities, railway directorates, and autonomous public entities operate vital economic lifelines. ROYSONS Group is a multidisciplinary contractor and engineering solutions provider for public sector corporations.",
      "We deliver large-scale civil works, industrial backup power generation, corporate MEP installations, specialized manufacturing solutions, and institutional supply chain management for autonomous government bodies.",
      "Our track record of executing mission-critical projects under rigorous public audit guidelines makes ROYSONS the trusted choice for state-owned corporate developments."
    ],
    stats: [
      { value: "150+", label: "Public Sector Deliveries" },
      { value: "$100M+", label: "Combined Project Value" },
      { value: "100%", label: "Audit Clearance Record" },
      { value: "30+", label: "Public Corporations Served" },
    ],
    keyPillars: [
      {
        title: "Industrial Civil Construction & MEP",
        desc: "Heavy industrial complexes, corporate administrative headquarters, warehousing depots, and logistics hubs for public enterprises.",
        icon: Building2,
      },
      {
        title: "Grid & Heavy Power Generation",
        desc: "High-capacity diesel and gas generator skids, medium-voltage substations, transformer switchgear, and utility-scale solar.",
        icon: Zap,
      },
      {
        title: "Industrial Manufacturing & Fabrication",
        desc: "Structural steel fabrication, industrial packaging solutions, corrugated industrial materials, and specialized wood engineering.",
        icon: Wrench,
      },
      {
        title: "Port, Rail & Transportation Infrastructure",
        desc: "Heavy-duty paving, port facility maintenance, cargo handling infrastructure, and specialized transport equipment.",
        icon: Globe,
      },
      {
        title: "Public Sector Employee Health & Medical Units",
        desc: "Equipping dedicated employee hospitals, medical dispensaries, and occupational health units for large public corporations (OGDCL, WAPDA, etc.).",
        icon: Activity,
      },
      {
        title: "Integrated Facility Management (IFM)",
        desc: "Comprehensive operations and maintenance (O&M), HVAC central plant management, and technical staffing for public assets.",
        icon: Layers,
      },
    ],
    technologies: [
      "Heavy Industrial Power Generation Plants (500kVA – 2500kVA)",
      "Medium & High-Voltage Electrical Substations & Switchgear",
      "Automated High-Capacity Corrugated Packaging Machinery",
      "Industrial RO Water Desalination & Demineralization Skids",
      "Heavy Structural Steel Pre-Engineered Buildings (PEB)",
      "Enterprise Corporate Hospital Diagnostic & Surgical Units",
      "Commercial Central Chiller Plants & Building Automation (BMS)",
      "Automated Security Turnstiles, ANPR & Perimeter Surveillance",
      "Industrial Effluent Neutralization & Zero-Liquid-Discharge (ZLD)",
      "Enterprise Fleet Vehicle Logistics & Cargo Tracking Systems",
    ],
    workflow: [
      {
        step: "01",
        title: "Enterprise Scope & Technical Due Diligence",
        desc: "Evaluating public enterprise RFP terms, site conditions, power demand, and structural load calculations.",
      },
      {
        step: "02",
        title: "Engineering Schematics & Procurement",
        desc: "Formulating detailed mechanical, electrical, and civil blueprints, and procuring certified industrial machinery.",
      },
      {
        step: "03",
        title: "Heavy Civil & MEP Construction",
        desc: "Execution by veteran site engineers adhering to strict industrial safety (HSE) and quality control protocols.",
      },
      {
        step: "04",
        title: "Testing, Commissioning & SLA",
        desc: "Full load testing, public audit documentation, operational handover, and long-term facility management support.",
      },
    ],
    benefits: [
      "Turnkey multidisciplinary capabilities across civil, MEP, power, and healthcare",
      "Robust financial capacity to execute massive state-owned enterprise tenders",
      "Strict compliance with national HSE safety regulations and environmental codes",
      "Transparent project milestones with real-time digital progress reporting",
      "Over 15 years of continuous partnership with premier public corporations",
    ],
    targetBodies: [
      "Water & Power Development Authority (WAPDA)",
      "Oil & Gas Development Company Limited (OGDCL)",
      "Pakistan State Oil (PSO) & SNGPL / SSGC",
      "Pakistan Railways & Civil Aviation Authority (CAA)",
      "Port Qasim Authority & Karachi Port Trust (KPT)",
      "National Highway Authority (NHA) & State Industrial Estates",
    ],
    faqs: [
      {
        q: "Can ROYSONS deliver complete turnkey employee hospitals for public corporations?",
        a: "Yes, we specialize in building and equipping dedicated healthcare facilities for public corporate workforces, including emergency rooms, OTs, and diagnostic labs.",
      },
      {
        q: "Do you supply heavy industrial power generators and substations?",
        a: "Yes, our power division delivers, installs, and commissions 500kVA to 2500kVA prime power generator sets with synchronized switchgear and substations.",
      },
      {
        q: "How do you ensure compliance with public sector auditing rules?",
        a: "We maintain exhaustive documentation, third-party inspection certificates, and transparent billing conforming to Auditor General of Pakistan (AGP) guidelines.",
      },
    ],
  },
];

export function getGovernmentSectorBySlug(slug) {
  return GOVERNMENT_SECTORS_LIST.find((s) => s.slug === slug);
}
