import {
  Hospital,
  Pill,
  Layers,
  HardHat,
  Sprout,
  Monitor,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Zap,
  Wrench,
  Globe,
  TrendingUp,
  Cpu,
  Sparkles,
  FileCheck,
  Award,
} from "lucide-react";

export const PRIVATE_SECTORS_LIST = [
  {
    slug: "hospitals",
    label: "Hospitals",
    title: "Private Hospitals & Healthcare Networks",
    eyebrow: "PREMIUM HEALTHCARE SYSTEMS & TURNKEY MEDICAL SUITES",
    tagline: "Outfitting leading private hospitals, specialized surgical centers, and diagnostic networks with advanced diagnostic imaging and ICU infrastructure.",
    icon: Hospital,
    badge: "Private Healthcare",
    heroImage: "/roys_hospital_interior.png",
    overview: [
      "Private healthcare institutions and tertiary hospital groups require cutting-edge medical technologies, world-class patient comfort, and reliable uptime to deliver five-star clinical care. ROYSONS Group delivers comprehensive medical equipment and hospital engineering solutions tailored for private healthcare providers.",
      "From high-field MRI scanners and 128-slice CT machines to luxury modular operating rooms and critical care ICUs, our solutions combine medical precision with patient-centric aesthetics.",
      "We partner with tier-1 international medical manufacturers (Siemens, Philips, GE, BD) to provide turnkey room installations, certified calibration, clinician masterclasses, and 24/7 priority maintenance SLAs."
    ],
    stats: [
      { value: "200+", label: "Private Hospitals Equipped" },
      { value: "99.8%", label: "System Uptime Rate" },
      { value: "5,000+", label: "Private Beds Outfitted" },
      { value: "24/7", label: "Priority Technical Support" },
    ],
    keyPillars: [
      {
        title: "Diagnostic Imaging Suites",
        desc: "Turnkey delivery of 1.5T/3.0T MRI scanners, multi-slice CT rooms, digital fluoroscopy, and 4D color Doppler ultrasound units.",
        icon: Activity,
      },
      {
        title: "Luxury Modular Operating Theatres",
        desc: "Sterile antibacterial HPL wall cladding, laminar airflow ceilings, LED shadowless surgical lighting, and integrated OT video towers.",
        icon: Building2,
      },
      {
        title: "Intensive Care & Critical Life Support",
        desc: "Invasive ICU ventilators, telemetry multi-parameter monitors, volumetric infusion pumps, and central nursing monitoring hubs.",
        icon: ShieldCheck,
      },
      {
        title: "Hospital Medical Gas Networks (MGPS)",
        desc: "Centralized medical gas manifolds, liquid oxygen storage, vacuum compressor skids, and luxury bedhead units complying with HTM 02-01.",
        icon: Zap,
      },
      {
        title: "Executive Ward & Patient Room Furniture",
        desc: "5-function motorized electric luxury beds, hydraulic attendant furniture, ergonomic overbed tables, and bespoke medical cabinetry.",
        icon: Layers,
      },
      {
        title: "Biomedical Asset Management (AMC / CMC)",
        desc: "Dedicated on-site biomedical engineering teams, annual calibration certifications, and guaranteed emergency breakdown response.",
        icon: Wrench,
      },
    ],
    technologies: [
      "High-Field 1.5T & 3.0T Magnetic Resonance Imaging (MRI)",
      "Multi-Slice Computed Tomography (CT 64/128 Slice)",
      "Advanced ICU Invasive & Non-Invasive Mechanical Ventilators",
      "Wireless Telemetry Patient Vital Signs Monitoring Systems",
      "HTM 02-01 Compliant Medical Gas Pipeline Systems (MGPS)",
      "Double-Door Pass-Through Steam Autoclaves & Plasma Sterilizers",
      "Luxury 5-Function Motorized Electric ICU Hospital Beds",
      "Integrated 4K Laparoscopic & Endoscopic Surgical Towers",
      "Isolated Power Supply (IPS) Panels with Line Insulation Monitors",
      "Picture Archiving & Communication Systems (PACS / RIS Software)",
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Scope & Space Planning",
        desc: "Evaluating private hospital specialty departments, patient footfall, and spatial architectural layouts.",
      },
      {
        step: "02",
        title: "Turnkey MEP & Equipment Selection",
        desc: "Coordinating HVAC clean air zoning, radiation lead shielding, medical gas piping, and OEM equipment sourcing.",
      },
      {
        step: "03",
        title: "Precision Installation & Calibration",
        desc: "Factory-trained biomedical engineers execute installation, software commissioning, and certified calibration.",
      },
      {
        step: "04",
        title: "Staff Masterclasses & AMC Support",
        desc: "Hands-on clinician training followed by structured preventive maintenance and guaranteed emergency SLAs.",
      },
    ],
    benefits: [
      "Access to global tier-1 medical brands with authentic factory warranties",
      "Luxury interior aesthetics and durable medical-grade finishing",
      "Complete turnkey execution from civil room prep to final clinical training",
      "Guaranteed uptime above 99.8% preventing surgical delays and cancellations",
      "Flexible commercial terms and customized hospital equipment leasing",
    ],
    targetClients: [
      "Private Multi-Specialty Tertiary Hospitals",
      "Specialized Heart, Cancer & Orthopedic Institutes",
      "Executive Day-Care Surgery & Ambulatory Centers",
      "Private Diagnostic & Radiology Imaging Chains",
      "Maternity, Women & Child Specialized Hospitals",
      "Corporate Healthcare Clinics & Diagnostic Hubs",
    ],
    faqs: [
      {
        q: "Can ROYSONS handle complete turnkey setup for a new private hospital?",
        a: "Yes, we provide end-to-end turnkey packages covering architectural planning, medical gas piping, OTs, diagnostic radiology, and luxury ward furniture.",
      },
      {
        q: "What brands of MRI and CT scanners do you supply for private centers?",
        a: "We supply brand-new and factory-refurbished systems from Siemens Healthineers, Philips Healthcare, and GE Healthcare with full OEM warranties.",
      },
      {
        q: "How fast is your technical response for private hospital emergency calls?",
        a: "Our certified biomedical engineers provide guaranteed on-site response times under 2 hours for critical ICU and surgical equipment.",
      },
    ],
  },
  {
    slug: "pharmaceutical-industries",
    label: "Pharmaceutical Industries",
    title: "Pharmaceutical & Biotech Manufacturing Industries",
    eyebrow: "WHO-GMP CLEANROOMS, PROCESS ENGINEERING & CLEAN UTILITIES",
    tagline: "Partnering with pharmaceutical manufacturers, biotech innovators, and sterile formulation plants on turnkey GMP cleanrooms and clean utilities.",
    icon: Pill,
    badge: "Pharma Manufacturing",
    heroImage: "/biomax_qa_scientist_ai.jpg",
    overview: [
      "Pharmaceutical production requires ultra-sterile environments, strict differential air pressure cascades, validated clean utilities (PW, WFI, Pure Steam), and uncompromising compliance with WHO-GMP and PIC/S standards. ROYSONS Group is a premier engineering partner to leading pharmaceutical and biotechnology corporations.",
      "We design, manufacture, and validate EU GMP Class A, B, C, and D modular cleanrooms, hygienic Air Handling Units (AHUs), orbital-welded Water-for-Injection (WFI) distribution loops, and tablet/liquid formulation packaging lines.",
      "Our pharma engineering specialists guide manufacturers through complete qualification lifecycles: Design Qualification (DQ), Installation & Operational Qualification (IQ/OQ), Performance Qualification (PQ), and international export audit defense."
    ],
    stats: [
      { value: "40+", label: "GMP Facilities Built" },
      { value: "100%", label: "Regulatory Audit Pass Rate" },
      { value: "ISO 14644", label: "Cleanroom Validation" },
      { value: "Zero", label: "Contamination Track Record" },
    ],
    keyPillars: [
      {
        title: "Modular Cleanroom Construction (EU GMP)",
        desc: "Prefabricated sandwich partition panels, walk-on ceiling grids, flush silicone sealing, and hermetic automatic doors.",
        icon: Layers,
      },
      {
        title: "HVAC & Climate Control Cascades",
        desc: "Hygienic AHUs with terminal H14 HEPA filtration, desiccant dehumidification, and computerized BMS pressure balancing.",
        icon: Zap,
      },
      {
        title: "Purified Water & WFI Generation Skids",
        desc: "RO + EDI Purified Water plants, Multiple Effect WFI Stills, Pure Steam Generators, and orbital-welded SS316L sanitary loops.",
        icon: Wrench,
      },
      {
        title: "Sterile Injectable & Aseptic Processing",
        desc: "Class A Laminar Air Flow (LAF) filling stations, depyrogenation tunnels, vial washing, and pass-through terminal sterilizers.",
        icon: ShieldCheck,
      },
      {
        title: "Solid Oral Dosage & Blister Lines",
        desc: "High-speed rotary tablet presses, fluid bed dryers, auto-coaters, and high-output blister packaging machinery.",
        icon: Pill,
      },
      {
        title: "Quality Control (QC) Analytical Laboratories",
        desc: "Complete QC analytical lab setup including HPLC, GC, UV-Vis, stability chambers, and dissolution testing suites.",
        icon: Activity,
      },
    ],
    technologies: [
      "Modular Anti-Microbial Cleanroom Wall & Ceiling Sandwich Panels",
      "Terminal H14 HEPA & U15 ULPA Air Filtration Modules",
      "RO + EDI Purified Water Generation Plants (500L – 5,000L/hr)",
      "Multi-Effect Water-for-Injection (WFI) Distillation Systems",
      "Pure Steam Generators with Pyrogen-Free Clean Steam Output",
      "Orbital-Welded SS316L Sanitary Piping Loops with Boroscopic Logs",
      "Dynamic & Static Pass Boxes with Integrated UV-C Disinfection",
      "Automated High-Speed Rotary Tablet Press & Blister Packaging Lines",
      "ICH-Compliant Walk-In Pharmaceutical Stability Testing Chambers",
      "Class A Laminar Air Flow (LAF) Filling & Aseptic Sampling Booths",
    ],
    workflow: [
      {
        step: "01",
        title: "Process Flow & Site Master Plan (SMP)",
        desc: "Designing unidirectional personnel and material flows, airlock cascades, and architectural layouts adhering to WHO-GMP.",
      },
      {
        step: "02",
        title: "Clean Utility & Cleanroom Engineering",
        desc: "Formulating detailed cleanroom CAD designs, AHU ducting, WFI generation, and sanitary piping isometrics.",
      },
      {
        step: "03",
        title: "Fabrication & Orbital Welding",
        desc: "On-site construction by certified cleanroom technicians with 100% boroscopic video logging of sanitary welds.",
      },
      {
        step: "04",
        title: "Validation & Regulatory Audit Clearance",
        desc: "Executing DQ/IQ/OQ/PQ protocols, cleanroom particle count testing, DOP filter testing, and regulatory audit representation.",
      },
    ],
    benefits: [
      "Single-point engineering accountability from greenfield design to GMP certification",
      "Sanitary SS316L orbital welding with zero dead-legs preventing biofilm formation",
      "Guaranteed particle count and microbiological validation conforming to ISO 14644",
      "Energy-efficient HVAC design reducing plant operational power costs by up to 30%",
      "Complete validation documentation ready for national and international health audits",
    ],
    targetClients: [
      "Finished Dosage Formulation (FDF) Pharmaceutical Plants",
      "Active Pharmaceutical Ingredient (API) Synthesis Units",
      "Sterile Injectable, Ophthalmic & Biopharma Facilities",
      "Nutraceutical, Herbal & Dietary Supplement Manufacturers",
      "Veterinary Medicine & Vaccine Production Plants",
      "Medical Device & Sterile Disposable Manufacturers",
    ],
    faqs: [
      {
        q: "Do you supply automated orbital welding for WFI distribution loops?",
        a: "Yes, our certified sanitary piping teams utilize computer-controlled orbital welding machines and provide video boroscope inspection logs for every weld.",
      },
      {
        q: "What cleanroom validation protocols are executed prior to handover?",
        a: "We conduct airborne particle count testing, HEPA filter integrity (DOP/PAO), air velocity, differential pressure balancing, and recovery time validation.",
      },
      {
        q: "Can you assist in upgrading an older manufacturing facility for WHO-GMP accreditation?",
        a: "Yes, we perform complete GAP audits, layout restructuring, and clean utility retrofitting to achieve WHO-GMP and PIC/S compliance.",
      },
    ],
  },
  {
    slug: "manufacturing-industries",
    label: "Manufacturing Industries",
    title: "Manufacturing & Industrial Enterprises",
    eyebrow: "INDUSTRIAL PACKAGING, AUTOMATION & POWER INFRASTRUCTURE",
    tagline: "Equipping manufacturing enterprises, consumer goods plants, and industrial complexes with heavy corrugated packaging, automation, and backup power.",
    icon: Layers,
    badge: "Industrial Manufacturing",
    heroImage: "/maxpak header.png",
    overview: [
      "High-throughput manufacturing enterprises require robust industrial packaging, continuous heavy electrical power, specialized material handling, and custom fabrication to protect their supply chain efficiency. ROYSONS Group is an industrial powerhouse serving leading multinational and national manufacturers.",
      "Through our specialized group companies (such as Max Pak Corporation and Max Power), we manufacture heavy-duty multi-wall corrugated cartons, industrial master shippers, automated packaging machinery, and industrial diesel/gas generator sets.",
      "We deliver high-tensile industrial packaging and turnkey power solutions designed to withstand rough transit, export shipping conditions, and continuous 24/7 factory operations."
    ],
    stats: [
      { value: "500+", label: "Industrial Clients" },
      { value: "50M+", label: "Cartons Produced Annually" },
      { value: "100%", label: "On-Time Dispatch Rate" },
      { value: "24/7", label: "Industrial Power Support" },
    ],
    keyPillars: [
      {
        title: "Heavy-Duty Corrugated Packaging",
        desc: "3-ply, 5-ply, and 7-ply heavy industrial cartons, export master boxes, die-cut packaging, and printed consumer product shippers.",
        icon: Layers,
      },
      {
        title: "Industrial Prime & Standby Power",
        desc: "Heavy industrial diesel and gas generators (100kVA – 2500kVA), synchronized control panels, and medium-voltage transformer substations.",
        icon: Zap,
      },
      {
        title: "Industrial Automation & Conveyor Systems",
        desc: "Automated case erectors, carton sealers, robotic palletizers, roller conveyor networks, and automated shrink wrapping lines.",
        icon: Cpu,
      },
      {
        title: "Industrial Water Treatment & Effluent Plants",
        desc: "Industrial reverse osmosis (RO) plants, demineralization skids, and Effluent Treatment Plants (ETP) adhering to environmental standards.",
        icon: Wrench,
      },
      {
        title: "Structural Steel PEB Buildings & Warehouses",
        desc: "Pre-Engineered Steel Buildings (PEB), industrial factory sheds, logistics warehouses, and heavy gantry crane supporting structures.",
        icon: Building2,
      },
      {
        title: "Industrial Safety & Facility Management",
        desc: "Fire suppression networks, industrial HVAC ventilation, epoxy factory floor coatings, and integrated security access systems.",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "High-Speed Automatic 5-Ply & 7-Ply Corrugator Production Lines",
      "Multi-Color Flexographic Printing & Precision Rotary Die-Cutters",
      "Heavy Industrial Diesel Generator Sets (Cummins, Perkins, Caterpillar)",
      "Automated Case Erectors, Case Packers & Strapping Systems",
      "Heavy Structural Steel Pre-Engineered Building (PEB) Structures",
      "Industrial Reverse Osmosis (RO) & Demineralization Skids (10,000+ GPD)",
      "Industrial Effluent Neutralization & Wastewater ETP Systems",
      "Heavy Gantry & Overhead Industrial Bridge Cranes (5T – 50T)",
      "High-Build Chemical & Abrasion Resistant Epoxy Floor Coatings",
      "Automatic Synchronizing & Load-Sharing Power Switchgear",
    ],
    workflow: [
      {
        step: "01",
        title: "Factory Load & Packaging Audit",
        desc: "Analyzing production throughput, box bursting strength (ECT/BST), stacking load, and factory electrical power requirements.",
      },
      {
        step: "02",
        title: "Custom Engineering & Sampling",
        desc: "Custom structural carton design, automated machinery layout, generator sizing calculations, and prototype box drop-testing.",
      },
      {
        step: "03",
        title: "High-Volume Production & Delivery",
        desc: "Automated high-speed manufacturing with strict quality testing and JIT (Just-In-Time) scheduled delivery to client factories.",
      },
      {
        step: "04",
        title: "On-Site Installation & SLA Support",
        desc: "Installation of packaging lines and power generators by factory technicians with continuous 24/7 maintenance agreements.",
      },
    ],
    benefits: [
      "High bursting strength (BST) packaging preventing in-transit product damage",
      "Uninterrupted factory power preventing costly production downtime",
      "End-to-end industrial solutions from packaging and power to steel buildings",
      "Automated manufacturing capacity handling millions of units per month",
      "Dedicated account managers and guaranteed emergency service SLAs",
    ],
    targetClients: [
      "Fast-Moving Consumer Goods (FMCG) Manufacturers",
      "Textile, Garment & Export Processing Industries",
      "Food & Beverage Processing Plants",
      "Automotive Parts & Heavy Engineering Factories",
      "Chemical, Paints & Industrial Adhesive Manufacturers",
      "Electronics, Appliances & Consumer Goods Producers",
    ],
    faqs: [
      {
        q: "What types of corrugated boxes do you manufacture for industrial clients?",
        a: "We manufacture 3-ply, 5-ply, and heavy-duty 7-ply corrugated cartons with customized flute profiles (B, C, E, BC, and AAA flutes) and high Edge Crush Test (ECT) ratings.",
      },
      {
        q: "Can you provide continuous prime power generators for factories in off-grid zones?",
        a: "Yes, our power division delivers heavy-duty continuous prime diesel and gas generator sets designed for continuous 24/7 factory operation.",
      },
      {
        q: "Do you supply customized packaging samples for drop and compression testing?",
        a: "Yes, our CAD packaging design center creates customized sample boxes for physical drop, vibration, and compression testing before mass production.",
      },
    ],
  },
  {
    slug: "construction-companies",
    label: "Construction Companies",
    title: "Construction Companies & Real Estate Developers",
    eyebrow: "CIVIL INFRASTRUCTURE, MEP ENGINEERING & SPECIALIZED MATERIALS",
    tagline: "Partnering with construction contractors, civil developers, and commercial builders on specialized MEP, infrastructure, and material supply.",
    icon: HardHat,
    badge: "Civil & Infrastructure",
    heroImage: "/project-roysons-infrastructure.jpg",
    overview: [
      "Commercial construction, high-rise real estate, master-planned housing communities, and civil infrastructure require robust engineering, precision MEP coordination, and dependable material supply chains. ROYSONS Group is a premier civil contractor and engineering supplier to construction developers across Pakistan.",
      "We execute heavy civil contracting, commercial MEP installations, high-voltage electrical substations, central HVAC chiller plants, plumbing and fire suppression networks, and custom architectural woodwork.",
      "Through our multidisciplinary contracting divisions, we deliver projects on time, within budget, and in full compliance with Pakistan Engineering Council (PEC) and international building codes."
    ],
    stats: [
      { value: "100+", label: "Commercial Projects Completed" },
      { value: "10M+", label: "Sq. Ft. Built & Fitted" },
      { value: "PEC C-A", label: "No Limit Construction License" },
      { value: "100%", label: "Safety & HSE Compliance" },
    ],
    keyPillars: [
      {
        title: "Commercial MEP Contracting",
        desc: "Complete Mechanical, Electrical, and Plumbing engineering including central HVAC, high-voltage switchgear, and plumbing risers.",
        icon: Wrench,
      },
      {
        title: "Central HVAC & Chiller Plant Systems",
        desc: "Water-cooled and air-cooled centrifugal/screw chillers, variable refrigerant flow (VRF) units, AHUs, and automated building management systems.",
        icon: Zap,
      },
      {
        title: "Fire Protection & Life Safety Networks",
        desc: "UL/FM certified fire hydrant pumps, automatic sprinkler networks, FM-200 clean agent gas suppression, and fire alarm systems.",
        icon: ShieldCheck,
      },
      {
        title: "Pre-Engineered Steel Buildings (PEB)",
        desc: "Design, structural fabrication, and on-site erection of heavy steel warehouse frameworks, industrial sheds, and sports arenas.",
        icon: Building2,
      },
      {
        title: "High-Voltage Substations & Power Distribution",
        desc: "11kV/132kV electrical substations, transformer switchgear, power distribution panels, and heavy backup generators.",
        icon: Layers,
      },
      {
        title: "Architectural Woodwork & Interior Fit-Outs",
        desc: "Custom architectural wood paneling, luxury doors, corporate office furniture, and executive interior fit-outs.",
        icon: Sparkles,
      },
    ],
    technologies: [
      "Centrifugal & Screw Central Water-Cooled Chiller Plants",
      "UL-Listed / FM-Approved Fire Hydrant & Sprinkler Pump Sets",
      "11kV Medium-Voltage Electrical Substations & Vacuum Circuit Breakers",
      "Building Management Systems (BMS) with Direct Digital Control (DDC)",
      "High-Volume Variable Refrigerant Flow (VRF) Multi-Zone Inverters",
      "Pre-Engineered Steel Structural Frameworks (PEB Design & Erection)",
      "Automated Standby Generator Synchronizing & Transfer Panels",
      "Precision Laser Concrete Leveling & Industrial Floor Hardening",
      "High-Density Polyethylene (HDPE) & PPR Water Distribution Piping",
      "Architectural CNC Woodworking & Acoustic Wall Cladding Panels",
    ],
    workflow: [
      {
        step: "01",
        title: "BIM & Engineering Coordination",
        desc: "Developing 3D Building Information Modeling (BIM) schematics to detect MEP clashes and optimize material routing.",
      },
      {
        step: "02",
        title: "Material Procurement & Staging",
        desc: "Sourcing certified engineering materials, chillers, electrical panels, and structural steel from verified manufacturers.",
      },
      {
        step: "03",
        title: "On-Site Execution & HSE Oversight",
        desc: "Deployment of certified civil and MEP engineers following strict Health, Safety, and Environment (HSE) protocols.",
      },
      {
        step: "04",
        title: "Testing, Balancing & Handover",
        desc: "Comprehensive hydrostatic pressure testing, HVAC air balancing (TAB), electrical load testing, and formal project handover.",
      },
    ],
    benefits: [
      "Pakistan Engineering Council (PEC) certified contracting capabilities",
      "Single-source civil and MEP execution eliminating sub-contractor finger-pointing",
      "BIM modeling ensuring zero on-site spatial clashes and fast installation",
      "UL/FM certified life safety systems meeting strict insurance requirements",
      "Experienced project managers ensuring adherence to construction timelines",
    ],
    targetClients: [
      "Commercial High-Rise & Corporate Tower Developers",
      "Master-Planned Gated Community & Housing Developers",
      "Shopping Malls & Multi-Level Retail Complexes",
      "Industrial Park & Free Zone Infrastructure Contractors",
      "Hotel, Hospitality & Luxury Resort Developers",
      "General Construction & Civil Engineering Prime Contractors",
    ],
    faqs: [
      {
        q: "What category of PEC construction license does ROYSONS hold?",
        a: "ROYSONS Group companies hold top-tier Pakistan Engineering Council (PEC) licenses with no financial limit for civil, electrical, and mechanical engineering projects.",
      },
      {
        q: "Do you supply complete HVAC central chiller plants for commercial towers?",
        a: "Yes, we handle complete central HVAC design, equipment supply (water-cooled chillers, cooling towers, pumps, AHUs), duct fabrication, and testing & balancing (TAB).",
      },
      {
        q: "Are your fire suppression pump sets UL listed and FM approved?",
        a: "Yes, our fire fighting pumps, valves, and sprinkler heads are UL-listed and FM-approved, conforming strictly to NFPA standards.",
      },
    ],
  },
  {
    slug: "agricultural-enterprises",
    label: "Agricultural Enterprises",
    title: "Agricultural Enterprises & Agro-Allied Industries",
    eyebrow: "MODERN FARMING, IRRIGATION & AGRO-PROCESSING INFRASTRUCTURE",
    tagline: "Empowering agricultural corporations, corporate farms, livestock ventures, and food processing plants with high-efficiency mechanization and storage.",
    icon: Sprout,
    badge: "Agro & Farming",
    heroImage: "/national agriculture header.png",
    overview: [
      "Modern agriculture demands advanced mechanization, high-efficiency precision irrigation, temperature-controlled post-harvest cold storage, and bio-security infrastructure. ROYSONS Group is a pioneer in corporate farming solutions, agricultural machinery supply, and agro-allied engineering.",
      "Through our dedicated agricultural divisions, we deliver high-efficiency center-pivot and drip irrigation systems, grain silos, farm tractors and implements, dairy and livestock equipment, and agro-chemical supply.",
      "Our solutions are engineered to maximize crop yields, conserve water, reduce post-harvest grain losses, and modernize farming practices across Pakistan's fertile agricultural belt."
    ],
    stats: [
      { value: "100,000+", label: "Acres Mechanized" },
      { value: "50+", label: "Corporate Farms Outfitted" },
      { value: "40%", label: "Water Savings with Drip" },
      { value: "Zero", label: "Post-Harvest Grain Loss" },
    ],
    keyPillars: [
      {
        title: "High-Efficiency Precision Irrigation",
        desc: "Center-pivot irrigation systems, automated drip irrigation networks, solar-powered agricultural water pumps, and filtration stations.",
        icon: Sprout,
      },
      {
        title: "Grain Silos & Post-Harvest Storage",
        desc: "Corrugated galvanized steel grain storage silos (500T – 10,000T), grain drying towers, bucket elevators, and aeration monitoring systems.",
        icon: Building2,
      },
      {
        title: "Modern Farm Machinery & Implements",
        desc: "Heavy-duty farm tractors, precision seed drills, disc plows, rotavators, boom sprayers, and automated combine harvesters.",
        icon: Wrench,
      },
      {
        title: "Controlled-Atmosphere Cold Storage",
        desc: "Cold storage facilities for fruits, vegetables, seeds, and potatoes with precision temperature and relative humidity telemetry.",
        icon: Layers,
      },
      {
        title: "Dairy & Livestock Infrastructure",
        desc: "Automated milking parlors, cattle cooling fans, livestock feeding systems, veterinary vaccines, and artificial insemination equipment.",
        icon: Activity,
      },
      {
        title: "Agro-Chemical & Quality Fertilizer Supply",
        desc: "High-grade certified crop nutrients, bio-fertilizers, soil conditioners, and targeted plant protection solutions.",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "Automated Center-Pivot & Linear Move Irrigation Machines",
      "High-Efficiency Subsurface & Surface Drip Irrigation Lines",
      "Heavy-Duty Galvanized Steel Grain Silos (Up to 10,000 MT Capacity)",
      "Industrial Continuous-Flow Grain Drying & Aeration Towers",
      "Solar-Powered Submersible Agricultural Water Pumping Stations",
      "Controlled-Atmosphere Cold Storage Rooms with Freon/Ammonia Chillers",
      "Precision GPS-Guided Farm Tractors & Multi-Row Planters",
      "Automated Rotary & Herringbone Dairy Milking Parlors",
      "Soil Moisture Sensors & Telemetry-Based Irrigation Controllers",
      "High-Clearance Self-Propelled Crop Spraying Machines",
    ],
    workflow: [
      {
        step: "01",
        title: "Soil, Water & Crop Topography Survey",
        desc: "Conducting soil analysis, water electrical conductivity (EC) testing, and GPS topographic mapping of farm acreage.",
      },
      {
        step: "02",
        title: "Hydraulic & Mechanization Design",
        desc: "Calculating irrigation flow rates, pipeline friction loss, solar pump capacity, and grain storage volume requirements.",
      },
      {
        step: "03",
        title: "Machinery Deployment & Pipeline Erection",
        desc: "Trenching, HDPE pipe fusion, solar array installation, and on-site assembly of center-pivots and grain silos.",
      },
      {
        step: "04",
        title: "Commissioning & Agronomist Support",
        desc: "System pressure testing, operator training for farm managers, and continuous seasonal agronomy advisory support.",
      },
    ],
    benefits: [
      "Up to 40-50% reduction in agricultural water and power consumption",
      "Significant increase in crop yield per acre through uniform fertigation",
      "Prevention of post-harvest grain spoilage and pest contamination",
      "Rugged equipment built to withstand extreme rural climatic conditions",
      "Comprehensive warranty and readily available spare parts in rural depots",
    ],
    targetClients: [
      "Corporate Farming Enterprises & Landed Estates",
      "Grain Storage & Flour Milling Corporations",
      "Fruit, Vegetable & Seed Exporting Companies",
      "Commercial Dairy Farms & Livestock Breeding Centers",
      "Sugar Mills, Cotton Ginning & Oilseed Extraction Plants",
      "Agricultural Cooperatives & Rural Development Trusts",
    ],
    faqs: [
      {
        q: "How much water do your drip irrigation systems save compared to flood irrigation?",
        a: "Our drip irrigation networks save between 40% and 60% of water while delivering fertilizers directly to crop roots, increasing yield by 20-35%.",
      },
      {
        q: "Can you supply and erect large-scale commercial grain storage silos?",
        a: "Yes, we design, supply, and erect flat-bottom and hopper-bottom corrugated galvanized steel grain silos from 500 to 10,000 metric tons capacity.",
      },
      {
        q: "Do you supply solar-powered agricultural tubewells?",
        a: "Yes, we install turnkey solar-powered agricultural pumping systems (10HP to 100HP) eliminating reliance on grid electricity and diesel fuel.",
      },
    ],
  },
  {
    slug: "technology-companies",
    label: "Technology Companies",
    title: "Technology Companies & Digital Enterprises",
    eyebrow: "DATA CENTERS, IT INFRASTRUCTURE & DIGITAL TRANSFORMATION",
    tagline: "Empowering tech enterprises, software houses, fintechs, and telecom operators with tier-3 data center infrastructure, clean power, and IT hardware.",
    icon: Monitor,
    badge: "Digital & IT Infrastructure",
    heroImage: "/custom_dev_code.jpg",
    overview: [
      "Technology enterprises, software export houses, telecom carriers, and fintech startups require mission-critical computing environments, 99.999% clean power uptime, high-density server room cooling, and secure physical infrastructure. ROYSONS Group is a technology infrastructure partner to the digital economy.",
      "We design and build Tier-2 and Tier-3 data centers, precision in-row server cooling systems, high-density modular server racks, UPS clean power filtration, and high-speed structured fiber cabling networks.",
      "Our solutions provide the resilient physical backbone that enables cloud providers, software exporters, and enterprise IT companies to run 24/7 global operations without interruption."
    ],
    stats: [
      { value: "50+", label: "Data Centers & IT Hubs Built" },
      { value: "99.999%", label: "Clean Power Reliability" },
      { value: "10,000+", label: "Structured Cable Drops" },
      { value: "24/7", label: "Critical Facility SLA" },
    ],
    keyPillars: [
      {
        title: "Tier-2 / Tier-3 Data Center Construction",
        desc: "Turnkey design and construction of certified data centers with raised access flooring, fire-rated modular walls, and acoustic containment.",
        icon: Building2,
      },
      {
        title: "Precision In-Row Server Room Cooling (CRAC)",
        desc: "Computer Room Air Conditioning (CRAC) and precision in-row DX/chilled water cooling maintaining exact 22°C and 45% RH conditions.",
        icon: Zap,
      },
      {
        title: "Uninterruptible Clean Power & Online UPS",
        desc: "Modular online double-conversion UPS systems, static transfer switches (STS), lithium-ion battery banks, and transient surge suppressors.",
        icon: ShieldCheck,
      },
      {
        title: "High-Density Server Racks & Containment",
        desc: "42U/48U server racks, hot/cold aisle containment systems, intelligent rack power distribution units (iPDUs), and cable management.",
        icon: Layers,
      },
      {
        title: "Structured Copper & Fiber Optic Cabling",
        desc: "Cat6A / Cat7 shielded copper cabling, multi-mode OM4 and single-mode OS2 optical fiber backbones, and fusion splicing certification.",
        icon: Cpu,
      },
      {
        title: "Physical Security, Biometrics & DCIM",
        desc: "Biometric dual-factor access control, environmental temperature/water leak sensors, and Data Center Infrastructure Management (DCIM) software.",
        icon: Monitor,
      },
    ],
    technologies: [
      "Precision In-Row Computer Room Air Conditioners (CRAC Units)",
      "Modular Online Double-Conversion 3-Phase UPS Systems (10kVA – 500kVA)",
      "Hot Aisle / Cold Aisle Server Containment Pod Enclosures",
      "Intelligent Metered & Switched Rack Power Distribution Units (iPDUs)",
      "High-Performance Shielded Cat6A & 10G/40G/100G Fiber Backbones",
      "FM-200 / Novec 1230 Clean Agent Fire Suppression Gas Systems",
      "Very Early Warning Aspirating Smoke Detection (VESDA) Systems",
      "Data Center Infrastructure Management (DCIM) Real-Time Telemetry",
      "Anti-Static Raised Access Flooring with High Concentrated Load Rating",
      "Dual-Factor Biometric & RFID Server Room Entry Control Gates",
    ],
    workflow: [
      {
        step: "01",
        title: "Computing Load & Tier Rating Audit",
        desc: "Calculating total kW server power density, cooling heat dissipation (BTU/hr), and required uptime tier rating (Tier 1 to Tier 3).",
      },
      {
        step: "02",
        title: "MEP & Spatial Thermal Modeling",
        desc: "Designing hot/cold aisle air balancing, CFD thermal airflow simulation, UPS runtime calculations, and electrical schematics.",
      },
      {
        step: "03",
        title: "Modular Installation & Splicing",
        desc: "Raised flooring erection, precision cooling ducting, fiber optic fusion splicing, and power busway installation.",
      },
      {
        step: "04",
        title: "Load Testing, Commissioning & DCIM",
        desc: "Executing full electrical load bank testing, thermal imaging audits, DCIM sensor calibration, and tier compliance handover.",
      },
    ],
    benefits: [
      "99.999% power and thermal reliability preventing costly server outages",
      "Modular scalable design allowing tech companies to expand rack by rack",
      "Significant reduction in data center Power Usage Effectiveness (PUE < 1.3)",
      "Compliant with TIA-942 and Uptime Institute international standards",
      "24/7 emergency response with stocked critical spare parts and hot-swappable UPS modules",
    ],
    targetClients: [
      "Software Export Houses & IT Development Studios",
      "Fintech, Payment Gateway & Banking Data Hubs",
      "Telecom Carriers, ISPs & Cloud Hosting Providers",
      "E-Commerce & Digital Platform Infrastructure Hubs",
      "Artificial Intelligence & High-Performance Computing (HPC) Labs",
      "Corporate Enterprise IT & Server Room Facilities",
    ],
    faqs: [
      {
        q: "What Tier standards do your data center designs comply with?",
        a: "Our data center solutions are designed in accordance with TIA-942 Telecommunications Infrastructure Standards and Uptime Institute Tier-2 and Tier-3 benchmarks.",
      },
      {
        q: "Do you supply precision cooling systems for high-density server racks?",
        a: "Yes, we install precision in-row Computer Room Air Conditioners (CRAC) with hot/cold aisle containment capable of cooling high-density loads up to 20kW+ per rack.",
      },
      {
        q: "What fire protection is safe for active computer servers and data centers?",
        a: "We install eco-friendly FM-200 and Novec 1230 clean agent gas suppression systems combined with VESDA laser smoke detection, which extinguish fires without damaging electronics.",
      },
    ],
  },
];

export function getPrivateSectorBySlug(slug) {
  return PRIVATE_SECTORS_LIST.find((s) => s.slug === slug);
}
