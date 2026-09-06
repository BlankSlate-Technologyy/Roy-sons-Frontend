/**
 * ROYSONS Hospital Engineering & Clean Rooms Architecture Data
 * Specialized clinical engineering, controlled environments, HVAC, filtration & turnkey infrastructure.
 */

import {
  Building2,
  Layers,
  Fan,
  Wind,
  Activity,
  ShieldCheck,
  Sparkles,
  Airplay,
  Gauge,
  Award,
  ThermometerSnowflake,
  Workflow,
  Pill,
  Factory,
  Hospital,
  FlaskConical,
  Cpu,
  Shield,
  Zap,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

export const CORE_CAPABILITIES = [
  {
    id: "hospital-planning",
    number: "01",
    title: "Hospital Planning & Engineering",
    icon: Building2,
    image: "/roys_hospital_interior.png",
    imageAlt: "Hospital architectural planning and clinical facility layout coordination",
    shortDescription:
      "Comprehensive architectural planning, clinical layout zoning, patient/staff movement optimization, and MEP technical infrastructure coordination.",
    overview:
      "ROYSONS provides comprehensive planning and engineering services for healthcare facilities, helping clients organize clinical areas, infrastructure, patient movement, staff workflows, utilities, and technical systems.",
    deliverables: [
      "Hospital architectural planning",
      "Healthcare facility layout development",
      "Departmental planning & zoning",
      "Patient-flow & staff-flow optimization",
      "Material-flow & clinical workflow planning",
      "MEP infrastructure & mechanical systems planning",
      "Electrical infrastructure coordination",
      "Plumbing, utility & structural planning",
      "Technical facility & infrastructure integration",
    ],
  },
  {
    id: "clean-room-design",
    number: "02",
    title: "Clean Room Design & Engineering",
    icon: Layers,
    image: "/pakmedical-about.png",
    imageAlt: "Modular clean-room wall panels, hermetic doors, and walkable ceilings",
    shortDescription:
      "Engineered modular clean-room systems built around ISO 14644 standards, ensuring strict particulate containment, hermetic sealing, and microbial control.",
    overview:
      "ROYSONS develops controlled environments designed to maintain specified levels of air cleanliness, particulate control, temperature, relative humidity, differential pressure, airflow, and contamination control.",
    deliverables: [
      "Modular clean-room wall panels",
      "Modular ceiling & walkable ceiling systems",
      "High-density sandwich panels",
      "Anti-microbial & flush wall surfaces",
      "Hermetic doors & airtight containment systems",
      "Seamless clean-room epoxy flooring",
      "Clean-room double glazing units",
      "Dynamic pass-through boxes & material airlocks",
      "Personnel airlocks & gowning rooms",
    ],
  },
  {
    id: "healthcare-hvac",
    number: "03",
    title: "Healthcare HVAC Systems",
    icon: Fan,
    image: "/pakmedical-card1.png",
    imageAlt: "Healthcare dedicated air handling units and clean room HVAC distribution",
    shortDescription:
      "Specialized healthcare ventilation, dedicated air handling units (AHUs), laminar distribution, and air-change management for infection prevention.",
    overview:
      "HVAC is a critical part of hospital and clean-room engineering because airflow directly affects temperature, contamination control, pressure relationships, humidity, and infection prevention.",
    deliverables: [
      "Dedicated Air Handling Units (AHUs)",
      "Healthcare ventilation & clean-room HVAC",
      "Laminar airflow distribution systems",
      "Fresh-air, supply, return & exhaust air systems",
      "Precision ductwork design & factory fabrication",
      "Air balancing & pressure regulation",
      "Air-change rate management per room class",
      "Psychrometric & thermal-load calculations",
    ],
  },
  {
    id: "hepa-ulpa-filtration",
    number: "04",
    title: "HEPA & ULPA Filtration",
    icon: Wind,
    image: "/pakmedical-card2.png",
    imageAlt: "Certified H14 HEPA and ULPA terminal filtration units",
    shortDescription:
      "Multi-stage air filtration utilizing certified H14 HEPA and ULPA filters with 99.997% particle-capture efficiency at 0.3 microns.",
    overview:
      "The ROYSONS engineering page specifies H14 HEPA and ULPA filtration systems for controlled environments, providing approximately 99.997% particle-capture efficiency at 0.3 microns.",
    deliverables: [
      "Multi-stage pre-filters and fine filters",
      "Certified H14 HEPA filtration units",
      "Ultra-Low Particulate Air (ULPA) filters",
      "Terminal HEPA housings with gel/gasket seals",
      "HEPA filter terminal boxes with test ports",
      "Ceiling laminar-flow filter modules",
      "Continuous filter-integrity differential monitoring",
    ],
  },
  {
    id: "operation-theatre",
    number: "05",
    title: "Operation Theatre Engineering",
    icon: Activity,
    image: "/roys_operation_theatre.png",
    imageAlt: "Turnkey modular operation theatre with laminar airflow ceiling and surgical lights",
    shortDescription:
      "Turnkey modular OT construction with laminar airflow canopies, medical pendants, surgical lights, and hermetic sealing for ultra-clean surgical suites.",
    overview:
      "ROYSONS provides turnkey engineering solutions for modern operating theatres, featuring laminar-flow ceilings delivering sterile air at approximately 0.38 m/s directly over the surgical table.",
    deliverables: [
      "Modular OT construction with anti-microbial panels",
      "Laminar airflow ceilings & distribution canopies",
      "Hermetic automatic sliding doors & sealing",
      "Ceiling-suspended medical pendant systems",
      "Shadowless surgical-light integration",
      "Medical gas outlet terminal integration",
      "OT master touch-screen control panels",
      "Positive-pressure airflow & microclimate control",
    ],
  },
  {
    id: "icu-infrastructure",
    number: "06",
    title: "ICU Engineering & Infrastructure",
    icon: Hospital,
    image: "/roys_ultrasound.png",
    imageAlt: "Critical care ICU infrastructure and airborne infection isolation rooms",
    shortDescription:
      "Controlled environments for intensive care, Airborne Infection Isolation Rooms (AIIR), and Protective Environment (PE) patient units.",
    overview:
      "ROYSONS develops controlled environments for intensive and critical care areas, incorporating specialized isolation cubicles, pressure regimes, and life-support utility integration.",
    deliverables: [
      "ICU layout planning & critical-care engineering",
      "Airborne Infection Isolation Rooms (AIIR)",
      "Protective Environment (PE) immunocompromised units",
      "Negative-pressure infectious containment rooms",
      "Positive-pressure protective recovery rooms",
      "Bedhead medical gas & power integration",
      "Continuous room-differential pressure telemetry",
    ],
  },
  {
    id: "cssd-planning",
    number: "07",
    title: "CSSD Planning & Engineering",
    icon: Sparkles,
    image: "/pakmedical-card6.png",
    imageAlt: "Central sterile services department (CSSD) layout and pass-through autoclaves",
    shortDescription:
      "Central Sterile Services Department engineering with strict three-zone workflows: Decontamination, Packing & Preparation, and Sterile Storage.",
    overview:
      "ROYSONS provides engineering and workflow planning for CSSD facilities, enforcing strict physical barrier separation between contaminated receiving, clean assembly, and sterile storage.",
    deliverables: [
      "Zone 01 — Decontamination (receiving & ultrasonic cleaning)",
      "Zone 02 — Packing & Preparation (inspection & packaging)",
      "Zone 03 — Sterile Storage (controlled distribution)",
      "Pass-through steam sterilizers & autoclaves",
      "Sterile barrier packaging stations",
      "Clean/dirty airflow separation & pressure cascade",
      "Continuous bio-burden monitoring integration",
    ],
  },
  {
    id: "medical-gas-systems",
    number: "08",
    title: "Medical Gas Pipeline Systems (MGPS)",
    icon: Airplay,
    image: "/pakmedical-card3.png",
    imageAlt: "HTM 02-01 compliant medical gas distribution manifold and terminal outlets",
    shortDescription:
      "HTM 02-01 compliant medical gas distribution for Oxygen, Nitrous Oxide, Medical Air, Medical Vacuum, and Anaesthetic Gas Scavenging (AGSS).",
    overview:
      "ROYSONS provides Medical Gas Pipeline Systems (MGPS) designed around healthcare infrastructure standards, including central manifold rooms, pipeline networks, and alarm monitoring.",
    deliverables: [
      "Medical Oxygen (O2) & Nitrous Oxide (N2O) pipelines",
      "Medical Air (4 bar) & Surgical Air (7 bar) systems",
      "Medical Vacuum plant & distribution networks",
      "Anaesthetic Gas Scavenging Systems (AGSS)",
      "Zone valve boxes with pressure sensors",
      "Gas terminal units & bedhead unit integration",
      "Centralized master alarm & telemetry panels",
    ],
  },
  {
    id: "differential-pressure",
    number: "09",
    title: "Differential Pressure Control",
    icon: Gauge,
    image: "/pakmedical-card4.png",
    imageAlt: "Engineered differential room pressure cascades and airflow monitoring",
    shortDescription:
      "Engineered room pressure cascades maintaining positive pressure in sterile surgical zones and negative pressure in infectious isolation suites.",
    overview:
      "Controlled pressure relationships are essential in clean rooms, operating theatres, isolation areas, pharmaceutical facilities, and laboratories to prevent airborne cross-contamination.",
    deliverables: [
      "Positive Pressure: Operating suites & protective environments",
      "Positive Pressure: Pharmaceutical compounding & sterile zones",
      "Negative Pressure: Airborne infection isolation rooms (AIIR)",
      "Negative Pressure: BSL laboratories & containment facilities",
      "Automated pressure-relief dampers & VAV controls",
      "Room pressure monitors with visual/audible alarms",
    ],
  },
  {
    id: "temp-humidity-control",
    number: "10",
    title: "Temperature & Humidity Control",
    icon: ThermometerSnowflake,
    image: "/pakmedical-card5.png",
    imageAlt: "Automated microclimate and relative humidity BMS regulation",
    shortDescription:
      "Automated microclimate regulation maintaining 18°C–22°C temperature and 45%–55% relative humidity with continuous BMS integration.",
    overview:
      "ROYSONS integrates automated microclimate-control systems for controlled environments, maintaining precise clinical parameters around the clock.",
    deliverables: [
      "Precision temperature control (18°C – 22°C)",
      "Relative humidity regulation (45% – 55% RH)",
      "High-precision digital temperature & RH sensors",
      "Direct digital control (DDC) & BMS integration",
      "Steam & ultrasonic humidification systems",
      "Condensing dehumidification and reheat coils",
      "Automated environmental drift alarms",
    ],
  },
  {
    id: "clean-room-validation",
    number: "11",
    title: "Clean Room Validation & Certification",
    icon: Award,
    image: "/biomax_quality_lab.jpg",
    imageAlt: "Clean room qualification, particle testing, and DQ IQ OQ PQ certification",
    shortDescription:
      "Rigorous third-party qualification covering particle-count testing, DOP filter-leak tests, air velocity, recovery times, and DQ/IQ/OQ/PQ protocols.",
    overview:
      "After installation, controlled environments require testing to confirm that their actual performance matches the design requirements under ISO 14644 and cGMP frameworks.",
    deliverables: [
      "Non-viable airborne particle count testing",
      "HEPA & ULPA filter integrity DOP / PAO testing",
      "Airflow velocity & volume measurement",
      "Room air-change rate (ACPH) calculation",
      "Clean room recovery-time testing",
      "Differential-pressure verification & smoke visualization",
      "Comprehensive DQ, IQ, OQ, PQ documentation",
    ],
  },
];

export const CLEAN_ROOM_APPLICATIONS = [
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Manufacturing",
    badge: "cGMP Grade A – D",
    category: "Life Sciences",
    image: "/pakmedical-card1.png",
    imageAlt: "Pharmaceutical manufacturing clean room facility with cGMP Grade A to D classification",
    description:
      "Sterile compounding suites, aseptic processing areas, aseptic filling rooms, Oral Solid Dosage (OSD) facilities, and automated packaging lines engineered to FDA and WHO-GMP requirements.",
    specs: [
      "Aseptic filling & compounding clean suites",
      "Oral Solid Dosage (OSD) containment",
      "Grade A laminar hoods to Grade D packaging",
      "Interlocked personnel & material airlocks",
    ],
  },
  {
    id: "medical-device",
    title: "Medical Device Manufacturing",
    badge: "ISO Class 5 – 8",
    category: "Medical Manufacturing",
    image: "/pakmedical-card2.png",
    imageAlt: "Medical device clean room assembly facility for orthopedic implants and catheters",
    description:
      "Controlled production and assembly facilities supporting manufacturing of orthopedic implants, disposable syringes, vascular catheters, diagnostic test kits, and sterile disposables.",
    specs: [
      "ISO Class 5 assembly workstations",
      "ISO Class 7 primary manufacturing bays",
      "Electrostatic dissipative (ESD) epoxy flooring",
      "Continuous airborne particulate monitoring",
    ],
  },
  {
    id: "operating-theatres",
    title: "Operating Theatres",
    badge: "Ultra-Clean OT Suite",
    category: "Surgical Infrastructure",
    image: "/roys_hospital_interior.png",
    imageAlt: "Turnkey modular operating theatre with laminar airflow ceiling and surgical pendants",
    description:
      "Modular operating theatres engineered for high-precision surgical procedures, featuring laminar-flow ceilings delivering sterile air at approximately 0.38 m/s directly over the operating table.",
    specs: [
      "Laminar air velocity: ~0.38 m/s over table",
      "Hermetically sealed sliding door systems",
      "Ceiling-integrated surgical pendants & lights",
      "Flush-mounted anti-microbial wall panels",
    ],
  },
  {
    id: "intensive-care",
    title: "Intensive Care Units",
    badge: "Positive & Negative Pressure",
    category: "Critical Care",
    image: "/roys_ultrasound.png",
    imageAlt: "ICU critical care room with positive and negative pressure infection isolation",
    description:
      "Infection-controlled critical care wards, Airborne Infection Isolation Rooms (AIIR), and Protective Environment (PE) units combining controlled ventilation, medical gases, and clinical infrastructure.",
    specs: [
      "Airborne Infection Isolation Rooms (AIIR)",
      "Protective Environment (PE) immunocompromised rooms",
      "Medical gas integration & bedhead trunking",
      "Automated pressure cascade monitoring",
    ],
  },
  {
    id: "laboratories",
    title: "Laboratories (BSL-1 to BSL-3)",
    badge: "BSL-1 to BSL-3",
    category: "Diagnostic & Clinical Labs",
    image: "/biomax_research_lab.jpg",
    imageAlt: "Biosafety level BSL-1 to BSL-3 laboratory clean room with biosafety cabinets",
    description:
      "Clinical laboratories, biochemistry, histology, pathology, and diagnostic facilities equipped with certified biosafety cabinets, ductless fume hoods, and specialized negative-pressure exhaust systems.",
    specs: [
      "Class II & III Biosafety Cabinet integration",
      "Dedicated chemical fume exhaust ductwork",
      "Airlock entry with interlocked hermetic doors",
      "High-efficiency particulate containment",
    ],
  },
  {
    id: "research-facilities",
    title: "Research Facilities",
    badge: "High-Containment Clean Suite",
    category: "Scientific Research",
    image: "/pakmedical-card4.png",
    imageAlt: "Scientific clean room research facility with vibration isolation and precision HVAC",
    description:
      "Specialized scientific environments requiring tight environmental stability, vibration isolation, electromagnetic shielding, and particulate-free atmosphere to support sensitive research equipment.",
    specs: [
      "Vibration-isolated optical testing slabs",
      "Electromagnetic shielding (EMF/RFI)",
      "Microclimate stability: ±0.5°C & ±3% RH",
      "Precision testing & analytical suites",
    ],
  },
  {
    id: "biotechnology",
    title: "Biotechnology Facilities",
    badge: "Bio-Clean Sterile Environments",
    category: "Biotech & Genomics",
    image: "/vetvac_rd_lab_ai.jpg",
    imageAlt: "Biotechnology clean room for vaccine processing and cell culture fermentation",
    description:
      "Controlled infrastructure for genetic-engineering laboratories, vaccine-processing facilities, cell-culture facilities, and fermentation suites engineered with strict biosecurity protocols.",
    specs: [
      "Cell culture & viral processing suites",
      "Bioreactor & fermentation clean bays",
      "Strict biosecurity and decontamination locks",
      "CIP/SIP integrated sterile drainage",
    ],
  },
  {
    id: "sterile-processing",
    title: "Sterile Processing Facilities (CSSD)",
    badge: "CSSD Sterile Processing",
    category: "Hospital Support",
    image: "/pakmedical-card6.png",
    imageAlt: "Central Sterile Services Department with pass-through autoclaves and sterile barriers",
    description:
      "Controlled infrastructure for Central Sterile Services Departments featuring sterile barrier systems, steam sterilizer integration, pass-through autoclaves, and continuous bio-burden monitoring.",
    specs: [
      "Complete physical three-zone barrier layout",
      "Double-door pass-through autoclave integration",
      "Sterile pack storage under positive pressure",
      "Continuous bio-burden monitoring integration",
    ],
  },
];

export const EQUIPMENT_PORTFOLIO = [
  {
    id: "clean-room-systems",
    categoryTitle: "Clean Room Systems",
    summary:
      "Engineered modular wall, ceiling, and architectural containment components compliant with ISO 14644.",
    items: [
      { name: "Modular Clean Room Wall Panels", detail: "HPL, powder-coated galvanized steel, or aluminum skin with PIR/rockwool core." },
      { name: "Modular Ceiling Panels", detail: "Interlocking clean room ceiling panels engineered for flush light and filter integration." },
      { name: "Walkable Ceiling Systems", detail: "Heavy-duty structural ceiling grids allowing maintenance personnel access above clean zones." },
      { name: "Sandwich Panels", detail: "Flame-retardant high-density core panels providing thermal and acoustic insulation." },
      { name: "Hermetic Clean Room Doors", detail: "Airtight sliding and hinged doors with drop seals, interlocks, and touchless sensors." },
      { name: "Clean Room Double Glazing", detail: "Flush-mounted tempered safety glass window units with desiccant integration." },
      { name: "Dynamic Pass Boxes", detail: "HEPA-filtered interlocked pass-through boxes with UV sterilization for material transfer." },
      { name: "Static Pass Boxes", detail: "Electromagnetically interlocked stainless-steel transfer chambers between clean zones." },
      { name: "Personnel & Material Airlocks", detail: "Controlled pressure airlocks with interlocking doors preventing cross-contamination." },
      { name: "Seamless Epoxy Flooring Systems", detail: "Self-leveling anti-static chemical-resistant epoxy with integral coving." },
      { name: "Anti-Microbial Wall Surfaces", detail: "Non-porous coatings resistant to harsh cleaning agents and fumigation." },
    ],
  },
  {
    id: "hvac-systems",
    categoryTitle: "Healthcare HVAC Systems",
    summary:
      "Centralized air handling, distribution, ductwork, and microclimate equipment designed for healthcare environments.",
    items: [
      { name: "Dedicated Healthcare AHUs", detail: "Hygienic double-skin Air Handling Units with thermal break frames and smooth interiors." },
      { name: "Fresh Air Handling Units (FAHU)", detail: "100% fresh air treatment units equipped with heat recovery wheels and pre-filters." },
      { name: "Clean Room Recirculation AHUs", detail: "Multi-speed EC fan-driven units capable of maintaining high air-change rates." },
      { name: "Exhaust Air Systems", detail: "Bag-in/bag-out safe-change exhaust filtration systems for infectious and toxic air." },
      { name: "Precision HVAC Ductwork", detail: "Factory-fabricated leak-tested galvanized steel and stainless steel duct networks." },
      { name: "Laminar Flow Systems", detail: "Unidirectional air distribution plenums generating uniform downward velocity." },
      { name: "Air Diffusers & Swirl Grilles", detail: "Clean-room flush air diffusers designed for non-turbulent air delivery." },
      { name: "Pressure-Control Dampers", detail: "Fast-acting motorized modulating dampers maintaining differential room pressures." },
      { name: "Variable Air Volume (VAV) Boxes", detail: "Automated airflow modulation responding dynamically to occupancy and pressure." },
    ],
  },
  {
    id: "air-filtration",
    categoryTitle: "Air Filtration",
    summary:
      "Certified particulate filtration from coarse pre-filters to ultra-high efficiency terminal cleanroom modules.",
    items: [
      { name: "Pre-Filters (G4 / MERV 8)", detail: "Washable synthetic coarse filters protecting downstream cooling and heating coils." },
      { name: "Fine Secondary Filters (F7-F9 / MERV 13-15)", detail: "High-efficiency glass-fiber filters capturing sub-micron particulate loads." },
      { name: "H14 HEPA Filters", detail: "Individually certified 99.997% capture efficiency at 0.3 microns with leak test reports." },
      { name: "ULPA Filters (U15 - U17)", detail: "Ultra-low particulate air filters offering 99.9995% efficiency for ISO Class 1–4 zones." },
      { name: "Terminal HEPA Filter Housings", detail: "Ceiling-mounted housings with DOP test aerosol injection ports and pressure sampling." },
      { name: "Terminal HEPA Boxes with Diffusers", detail: "Integrated ceiling units with perforated face plates and airtight damper connections." },
      { name: "Laminar Flow Filter Fan Modules (FFU)", detail: "Self-powered ceiling filter fan units with variable speed EC motors." },
      { name: "Filter-Integrity Monitoring Sensors", detail: "Differential pressure transmitters across each filtration bank with BMS alerts." },
    ],
  },
  {
    id: "operation-theatre-systems",
    categoryTitle: "Operation Theatre Systems",
    summary:
      "Turnkey surgical suite infrastructure, laminar ceilings, hermetic doors, and surgical service integration.",
    items: [
      { name: "Modular OT Wall & Ceiling Panels", detail: "Pre-engineered stainless steel or antibacterial HPL wall systems with flush utility integration." },
      { name: "Laminar Flow Ceilings (0.38 m/s)", detail: "Sterile air canopies with high-efficiency distribution screen over the surgical field." },
      { name: "Hermetic Sliding Doors", detail: "Automated hermetically sealed doors with hands-free optical and kick-switch sensors." },
      { name: "Dual-Head LED Surgical Lights", detail: "Shadowless high-CRI surgical light heads integrated into the clean ceiling structure." },
      { name: "Medical Supply Pendants", detail: "Ceiling-mounted surgical and anesthesia pendants with articulated arms and gas outlets." },
      { name: "OT Medical Gas Outlets", detail: "Flush-mounted quick-connect outlets for Oxygen, N2O, Medical Air, Vacuum, and AGSS." },
      { name: "OT Master Touch Control Panels", detail: "Integrated display controlling surgical lights, room pressure, temperature, humidity, and timers." },
      { name: "Surgical Scrub Sinks", detail: "Grade 304 stainless steel sensor-operated surgical scrub sinks with thermostatic mixers." },
    ],
  },
  {
    id: "cssd-systems",
    categoryTitle: "CSSD Systems",
    summary:
      "Central Sterile Services Department equipment, pass-through autoclaves, and sterile barrier management.",
    items: [
      { name: "Pass-Through Steam Sterilizers", detail: "Double-door hospital autoclaves ensuring strict separation between packing and sterile zones." },
      { name: "High-Capacity Hospital Autoclaves", detail: "Microprocessor-controlled steam sterilizers with integrated vacuum cycle validation." },
      { name: "Pass-Through Ultrasonic Cleaners", detail: "Automated ultrasonic cleaning basins with enzymatic dosing for delicate surgical tools." },
      { name: "Sterile Barrier Heat Sealers", detail: "Validatable rotary medical pouch sealers with temperature and pressure logging." },
      { name: "Instrument Packing Workstations", detail: "Ergonomic stainless-steel inspection and packaging tables with magnifying illumination." },
      { name: "CSSD Sterile Storage Racks", detail: "Modular wire and solid shelving systems maintaining sterile pack integrity under positive pressure." },
      { name: "Biological & Chemical Integrators", detail: "Continuous process challenge devices (PCD) and bio-burden verification monitors." },
    ],
  },
  {
    id: "medical-gas-systems",
    categoryTitle: "Medical Gas Systems (MGPS)",
    summary:
      "HTM 02-01 compliant pipeline distribution, manifold plant systems, and monitoring panels.",
    items: [
      { name: "Medical Oxygen Pipeline (O2)", detail: "Degreased medical-grade copper pipeline distribution from liquid tanks or cylinder manifolds." },
      { name: "Nitrous Oxide Pipeline (N2O)", detail: "High-pressure pipeline network supplying surgical suites and dental procedure rooms." },
      { name: "Medical Air 4-Bar Pipeline", detail: "Oil-free medical air compressor plant delivering respiratory-grade air." },
      { name: "Surgical Air 7-Bar Pipeline", detail: "High-pressure pneumatic air supply for orthopaedic and surgical power tools." },
      { name: "Medical Vacuum Plant (VAC)", detail: "Duplex and triplex vacuum pump systems with bacterial filtration and exhaust containment." },
      { name: "Anaesthetic Gas Scavenging (AGSS)", detail: "Active disposal plant venting exhaled anaesthetic gases safely outside the facility." },
      { name: "Zone Valve Service Boxes (AVSU)", detail: "Area valve service units with emergency isolation valves and pressure gauge displays." },
      { name: "Master Alarm & Sensor Panels", detail: "Digital alarm annunciators with visual and audible alerts connecting directly to BMS." },
    ],
  },
  {
    id: "environmental-monitoring",
    categoryTitle: "Environmental Monitoring & Controls",
    summary:
      "Real-time telemetry, pressure monitors, particle counters, and automated BMS controllers.",
    items: [
      { name: "Differential Room Pressure Monitors", detail: "Wall-mounted digital displays showing exact room-to-corridor differential pressure in Pascals." },
      { name: "Clean Room Temperature Sensors", detail: "High-precision PT100 RTD sensors providing continuous microclimate feedback." },
      { name: "Relative Humidity Sensors", detail: "Capacitive clean-room humidity transmitters maintaining 45%–55% RH parameters." },
      { name: "Continuous Airborne Particle Counters", detail: "Optical particle sensors logging 0.3μm and 0.5μm counts per ISO 14644-1 requirements." },
      { name: "HVAC Microprocessor Controllers", detail: "Direct digital controllers (DDC) executing automated PID feedback loops." },
      { name: "Building Management System (BMS)", detail: "Centralized SCADA and BMS software integrating all HVAC, gas, and room alarms." },
      { name: "Visual & Audio Clean Room Alarms", detail: "Flush multi-color LED indicator beacons notifying staff of pressure or filter faults." },
    ],
  },
  {
    id: "laboratory-systems",
    categoryTitle: "Laboratory Engineering Systems",
    summary:
      "Biosafety cabinets, chemical containment, specialized exhaust, and diagnostic clean air equipment.",
    items: [
      { name: "Class II Type A2 Biosafety Cabinets", detail: "HEPA-filtered biosafety workstations recirculating 70% air and exhausting 30% through HEPA." },
      { name: "Class II Type B2 Biosafety Cabinets", detail: "100% total exhaust biological safety cabinets for handling volatile chemicals and radionuclides." },
      { name: "Class III Total Containment Glove Boxes", detail: "Airtight gas-tight glove boxes for maximum biological containment (BSL-3/BSL-4)." },
      { name: "Ductless & Ducted Fume Hoods", detail: "Chemical fume hoods with aerodynamic sashes and acid-resistant polypropylene linings." },
      { name: "Specialized Acid & Solvent Exhaust", detail: "Corrosion-proof fiberglass and PVC exhaust blowers with scrubbers." },
      { name: "Controlled Lab Ventilation Plenums", detail: "Dedicated supply air plenums preventing air turbulence inside analytical zones." },
      { name: "Laboratory Gas & Pure Water Taps", detail: "Epoxy-coated lab service fittings for nitrogen, helium, compressed air, and RO water." },
    ],
  },
];

export const PROJECT_LIFECYCLE = [
  {
    step: "01",
    phase: "Phase 01",
    title: "Concept & Architectural Design",
    summary:
      "Comprehensive facility layout planning, clean-room zoning, material/people flow diagrams, 3D BIM modeling, and regulatory mapping.",
    details: [
      "Clinical workflow & departmental zoning",
      "Clean/dirty material & personnel flow separation",
      "Full 3D Revit / BIM architectural coordination",
      "ISO 14644 & cGMP regulatory compliance mapping",
      "MEP service corridor and plant-room spatial allocation",
    ],
  },
  {
    step: "02",
    phase: "Phase 02",
    title: "HVAC & Mechanical Engineering",
    summary:
      "Detailed thermal load calculations, psychrometric analysis, AHU equipment sizing, ductwork fabrication, and differential pressure design.",
    details: [
      "Psychrometric analysis & thermal cooling/heating calculations",
      "Air Handling Unit (AHU) and chiller capacity sizing",
      "CFD airflow modeling & air-change rate (ACPH) calculation",
      "Airtight galvanized and stainless-steel duct fabrication",
      "Pressure cascade calculations between critical rooms",
    ],
  },
  {
    step: "03",
    phase: "Phase 03",
    title: "Modular Installation & Integration",
    summary:
      "On-site erection of clean room sandwich panels, walkable ceilings, hermetic doors, epoxy flooring, HEPA filtration, and medical gas lines.",
    details: [
      "Precision erection of modular wall and ceiling sandwich panels",
      "Walkable ceiling suspension grids & catwalk access",
      "Hermetic door installation and perimeter drop-seal calibration",
      "Self-leveling antibacterial epoxy flooring with coving",
      "Terminal HEPA housing, ductwork, and medical gas pipefitting",
    ],
  },
  {
    step: "04",
    phase: "Phase 04",
    title: "Testing, Validation & Commissioning",
    summary:
      "Comprehensive qualification (DQ, IQ, OQ, PQ), DOP filter-integrity testing, particle counting, airflow verification, and handover.",
    details: [
      "Design, Installation, Operational & Performance Qualification (DQ/IQ/OQ/PQ)",
      "Dispersed Oil Particulate (DOP) HEPA filter leak tests",
      "Optical airborne particle count verification per ISO 14644-1",
      "Airflow velocity, ACPH, and room recovery-time testing",
      "Final validation protocols, as-built documentation & commissioning",
    ],
  },
];

export const STANDARDS_MATRIX = [
  {
    standard: "ISO 14644-1 & 14644-2",
    title: "Cleanrooms and Associated Controlled Environments",
    scope: "Defines particulate air cleanliness classification from ISO Class 1 to ISO Class 9, testing protocols, and continuous monitoring requirements.",
    application: "Medical device plants, clean rooms, precision laboratories, and surgical suites.",
  },
  {
    standard: "cGMP & WHO-GMP",
    title: "Current Good Manufacturing Practice",
    scope: "Frameworks governing facility design, contamination prevention, HVAC air-handling, surface cleanability, and process validation.",
    application: "Pharmaceutical compounding, sterile manufacturing, biotech, and life sciences.",
  },
  {
    standard: "HTM 02-01 (UK NHS Standards)",
    title: "Medical Gas Pipeline Systems (MGPS)",
    scope: "Detailed technical guidance on the design, installation, validation, and verification of piped medical gas and vacuum systems.",
    application: "Hospital wards, operating theatres, intensive care units, and clinical gas manifolds.",
  },
  {
    standard: "ISO Class 5 – 8",
    title: "Medical Device Controlled Environments",
    scope: "Establishes maximum particle concentrations for sterile medical equipment assembly, implants, catheters, and disposable packaging.",
    application: "Clean room production facilities, diagnostic kit assembly, and sterile packaging.",
  },
  {
    standard: "cGMP Grade A – D",
    title: "Pharmaceutical Clean Area Classifications",
    scope: "Defines Grade A (high-risk aseptic operations), Grade B (background for Grade A), and Grades C & D (clean areas for less critical steps).",
    application: "Aseptic filling suites, sterile compounding, fermentation, and oral solid dosage bays.",
  },
  {
    standard: "BSL-1 to BSL-3",
    title: "Biosafety Level Laboratory Standards",
    scope: "Defines biocontainment protocols, negative pressure barriers, HEPA exhaust filtration, and airlock access for biological containment.",
    application: "Clinical pathology, microbiology, infectious disease research, and diagnostic labs.",
  },
];

export const INDUSTRIES_SERVED = [
  "Tertiary Care Hospitals",
  "Medical Centers & Clinics",
  "Operating Theatre Complexes",
  "Intensive Care Units (ICU)",
  "Airborne Infection Isolation Facilities",
  "Pharmaceutical Manufacturing Plants",
  "Biotechnology Facilities",
  "Vaccine Manufacturing Plants",
  "Medical Device Manufacturing",
  "Diagnostic & Pathology Laboratories",
  "Research Institutions",
  "Medical Universities & Colleges",
  "Clinical Research Organizations (CRO)",
  "Central Sterile Services (CSSD)",
  "Blood Transfusion Centers",
  "Radiopharmaceutical Suites",
  "Public Healthcare Departments",
  "Private Healthcare Hospital Chains",
];

export const WHY_CHOOSE_ROYSONS = [
  {
    icon: Building2,
    title: "Specialized Healthcare Engineering",
    description:
      "Engineering solutions designed specifically for complex clinical workflows, infection containment, and ultra-clean environments.",
  },
  {
    icon: Workflow,
    title: "Turnkey Project Execution",
    description:
      "A single integrated platform covering architectural planning, HVAC engineering, modular procurement, installation, validation, and handover.",
  },
  {
    icon: Gauge,
    title: "Environmental Precision",
    description:
      "Synchronized management of laminar airflow, multi-stage HEPA filtration, temperature, humidity, and room differential pressure.",
  },
  {
    icon: Layers,
    title: "Modular Clean Room Technology",
    description:
      "Clean-room and surgical suite infrastructure engineered around modular, anti-microbial, demountable construction methods.",
  },
  {
    icon: Cpu,
    title: "Multidisciplinary Engineering Team",
    description:
      "Architects, mechanical engineers, HVAC specialists, electrical engineers, and biomedical technicians working under one coordinated leadership.",
  },
  {
    icon: FileCheck,
    title: "Compliance-Oriented Approach",
    description:
      "Engineering and qualification designed strictly in accordance with ISO 14644, cGMP, WHO-GMP, and HTM 02-01 frameworks.",
  },
];
