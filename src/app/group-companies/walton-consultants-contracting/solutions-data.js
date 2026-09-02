// Comprehensive Sectors & Infrastructure Solutions Dataset for Walton Consultants & Contracting (Pvt) Ltd
import {
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  HardHat,
  Users2,
  Sparkles,
  Scale,
  Compass,
  Zap,
  Activity,
  Factory,
  Building,
  Landmark,
} from "lucide-react";

export const WALTON_SOLUTIONS = [
  {
    id: "commercial-high-rises",
    slug: "commercial-high-rise-superstructures",
    name: "WaltonTower Commercial High-Rise Superstructure",
    subtitle: "Turnkey Structural Engineering & Construction of Modern 45-Storey Mega Towers",
    eyebrow: "Grade-A Corporate Skyscrapers & Mixed-Use Commercial Centers",
    category: "Commercial High-Rises",
    tag: "Commercial Superstructure",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonTower is our flagship structural engineering and general contracting package for high-rise corporate headquarters, luxury mixed-use towers, and urban commercial complexes. Featuring deep rotary bored pile foundations (up to 45m depth), multi-level basement retention, post-tensioned beam-less floor plates for expansive column-free offices, dual shear wall seismic resistance, and integrated double-glazed low-E curtain wall facades.",
    metrics: [
      { label: "Tower Heights", value: "Up to 45 Storeys" },
      { label: "Basement Levels", value: "4 Deep Basements" },
      { label: "Column-Free Spans", value: "12+ Meters" },
      { label: "Concrete Grade", value: "8,000 PSI SCC" },
    ],
    deliverables: [
      "Deep rotary bored piling (600mm to 1,500mm diameter) and secant pile basement retention systems",
      "Mass raft foundation casting with computerized temperature logging and low-heat pozzolanic cement",
      "High-speed post-tensioned (PT) floor casting maximizing internal column-free flexible lease space",
      "Central elevator core casting using automated hydraulic self-climbing formwork systems",
      "Unitized architectural curtain wall facade installation with low-E acoustic double glazing",
      "Complete MEP core integration: high-speed destination-dispatch elevators, HVAC, and fire life safety",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "Corporate headquarters, financial institutions, luxury mixed-use developers" },
      { key: "Structural System", value: "Reinforced concrete dual system (Ductile shear wall core + moment frame)" },
      { key: "Seismic Design Code", value: "UBC-97 Seismic Zone 2B/3/4 & ACI 318-19 Seismic Detailing" },
      { key: "Wind Resistance", value: "Engineered for 160 km/h wind loads with tuned mass damper integration options" },
      { key: "Substructure Tanking", value: "Multi-layer HDPE self-adhering waterproofing membrane (Zero basement leaks)" },
      { key: "Elevator Integration", value: "High-speed gearless passenger elevators operating up to 4.0 m/s" },
    ],
    pillars: [
      {
        title: "Maximized Column-Free Area",
        desc: "Post-tensioned slabs eliminate interior drop beams, delivering flexible open-plan corporate office floors.",
        icon: Building2,
      },
      {
        title: "Seismic Dual-Core Resilience",
        desc: "Heavy reinforced central shear wall core absorbs severe earthquake lateral loads and wind shear.",
        icon: ShieldCheck,
      },
      {
        title: "Leak-Proof Deep Basements",
        desc: "Fully vulcanized water-stops and continuous HDPE tanking membranes keep underground parking dry.",
        icon: Compass,
      },
      {
        title: "Energy-Efficient Facades",
        desc: "Thermal-break aluminum curtain wall framing with argon-filled low-E glass cuts building HVAC loads by 30%.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Piling & Substructure Excavation",
        desc: "Drilling 1,200mm bored piles and excavating 4 basement levels under active dewatering control.",
      },
      {
        step: "02",
        title: "Monolithic Raft Foundation Pour",
        desc: "Chilled concrete mass pour with continuous thermocouple logging to prevent thermal cracks.",
      },
      {
        step: "03",
        title: "Core & Post-Tensioned Superstructure",
        desc: "Climbing formwork casts the central core alongside rapid 7-day post-tensioned floor cycles.",
      },
      {
        step: "04",
        title: "Facade Glazing & Commissioning",
        desc: "Installing unitized facade panels, testing elevators, HVAC, and fire life safety systems.",
      },
    ],
    faqs: [
      {
        q: "How fast can Walton cast typical high-rise tower floors?",
        a: "By utilizing high-early strength concrete, post-tensioning, and modular aluminum table formwork, we achieve consistent 6 to 7-day floor-to-floor casting cycles.",
      },
      {
        q: "What measures are taken to protect deep basements from groundwater infiltration?",
        a: "We install contiguous secant pile perimeter walls with ground anchors, bentonite slurry cutoff walls, and multi-layer self-healing waterproofing membranes backed by perimeter French drainage channels.",
      },
      {
        q: "Can Walton handle the complete interior MEP fitout and elevator installation?",
        a: "Yes. Walton offers full turnkey contracting from foundation excavation to luxury interior lobby fitouts, BMS automation, and high-speed elevator commissioning.",
      },
    ],
  },
  {
    id: "industrial-factories",
    slug: "turnkey-industrial-manufacturing-plants",
    name: "WaltonPlant Turnkey Industrial Manufacturing Complex",
    subtitle: "Complete EPC Infrastructure for Heavy Manufacturing, Textiles & Processing Plants",
    eyebrow: "Single-Point Turnkey Delivery for Multi-Acre Industrial Estates",
    category: "Industrial Factories",
    tag: "Industrial EPC Plant",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonPlant is a comprehensive turnkey EPC construction solution engineered for heavy industrial processing plants, textile mills, chemical manufacturing facilities, and food production factories. From dynamic vibration-isolated foundations for heavy machinery to high-voltage substations, industrial utility piping, and heavy structural steel framing, we deliver production-ready facilities with single-point accountability.",
    metrics: [
      { label: "Plant Footprint", value: "Up to 500K Sq Ft" },
      { label: "Heavy Crane Bays", value: "Up to 50 Tons" },
      { label: "Substation Capacity", value: "Up to 132kV Grid" },
      { label: "Safety Record", value: "Zero LTI Milestone" },
    ],
    deliverables: [
      "Heavy industrial machine foundations with dynamic vibration dampening and spring isolation pads",
      "Large-span structural steel factory halls with high-capacity overhead travelling crane gantries",
      "High-voltage electrical power distribution: 11kV/132kV substations, transformers, and automated switchboards",
      "Industrial utility pipe manifolds: steam, compressed air, chilled water, chemical lines, and RO systems",
      "Industrial Effluent Treatment Plants (ETP) and zero-liquid discharge (ZLD) sedimentation tanks",
      "Turnkey cold/hot dry runs, machine laser alignment, performance trials, and staff training",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "Textile industrialists, chemical processors, FMCG manufacturers, automotive plants" },
      { key: "Covered Area Range", value: "50,000 to 500,000+ Square Feet industrial master complexes" },
      { key: "Floor Slab Capacity", value: "Heavy-duty 10 to 20 ton/m² point-load concrete slabs with quartz hardeners" },
      { key: "Crane Clearances", value: "Hook heights up to 14 meters with auxiliary hoist systems" },
      { key: "Piping Standards", value: "ASME B31.1 & B31.3 certified high-pressure welded steam and chemical lines" },
      { key: "Fire Suppression", value: "NFPA-compliant high-density fire sprinkler rings with dedicated diesel fire pumps" },
    ],
    pillars: [
      {
        title: "Dynamic Vibration Isolation",
        desc: "Isolates heavy spinning frames, presses, and turbines to protect precision quality and factory floors.",
        icon: Factory,
      },
      {
        title: "Integrated Utility Manifolds",
        desc: "Pre-engineered overhead pipe racks route steam, gas, and power safely to production machines.",
        icon: Wrench,
      },
      {
        title: "High-Load Industrial Floors",
        desc: "Fiber-reinforced concrete slabs with metallic dry-shake toppings resist chemical spills and heavy forklift traffic.",
        icon: HardHat,
      },
      {
        title: "Fast-Track Production Readiness",
        desc: "Simultaneous civil foundation casting and off-site steel fabrication shaves months off project schedules.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Process Layout & FEED Engineering",
        desc: "Optimizing 3D equipment placement, pipe routes, and electrical load requirements with client engineers.",
      },
      {
        step: "02",
        title: "Civil Works & Deep Machine Pits",
        desc: "Excavating machine pits, casting isolated foundation beds, and erecting structural steel factory bays.",
      },
      {
        step: "03",
        title: "Utility Piping & Substation Setup",
        desc: "Erecting transformers, pulling high-voltage bus ducts, and welding ASME steam and water utility piping.",
      },
      {
        step: "04",
        title: "Equipment Rigging & Handover",
        desc: "Rigging production machinery, laser aligning drive shafts, testing safety interlocks, and commissioning.",
      },
    ],
    faqs: [
      {
        q: "Can Walton construct specialized foundation beds for vibrating heavy machinery?",
        a: "Yes. We perform dynamic finite element modal analysis to design inertia blocks isolated with specialized spring and elastomeric dampers that eliminate vibration transfer to the building.",
      },
      {
        q: "What utilities are included in Walton's turnkey industrial plant scope?",
        a: "We engineer and install high-voltage electrical substations, industrial steam boilers, cooling towers, compressed air manifolds, water treatment plants (RO/ETP), and full NFPA fire safety systems.",
      },
      {
        q: "Does Walton assist with industrial SEZ and utility authority approvals?",
        a: "Yes. We manage all statutory NOCs including EPA environmental clearance, electrical utility grid sanctions, and municipal factory building permits.",
      },
    ],
  },
  {
    id: "highways-bridges",
    slug: "highway-interchanges-bridge-corridors",
    name: "WaltonWay Highway, Interchange & Bridge Corridor",
    subtitle: "Turnkey Expressways, Prestressed Box-Girder Bridges & Multi-Level Interchanges",
    eyebrow: "Heavy Civil Transportation Infrastructure & High-Speed Highway Corridors",
    category: "Highways & Bridges",
    tag: "Transportation Infrastructure",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonWay is our dedicated civil infrastructure package for national highway expansions, multi-level urban interchanges, prestressed concrete flyovers, and river bridges. Engineered to AASHTO LRFD and NHA specifications, we deploy computerized asphalt batching plants, sensor pavers, and on-site precast prestressed girder casting yards to deliver smooth, durable corridors that stand up to heavy multi-axle freight traffic.",
    metrics: [
      { label: "Corridors Completed", value: "450+ Kilometers" },
      { label: "Max Bridge Span", value: "50-Meter Girders" },
      { label: "Pavement Lifespan", value: "20-Year Design Life" },
      { label: "Asphalt Compaction", value: "98%+ Marshall Density" },
    ],
    deliverables: [
      "Multi-lane motorway and expressway construction with performance-grade polymer-modified asphalt",
      "Precast prestressed concrete I-girder and post-tensioned box-girder highway overpasses and river bridges",
      "Mechanically Stabilized Earth (MSE) retaining walls with geosynthetic soil reinforcement straps",
      "Precast reinforced concrete stormwater box culverts, subsurface drainage, and median safety barriers",
      "Intelligent Transportation Systems (ITS): automated electronic tolling plazas and weigh-in-motion stations",
      "Full compliance with National Highway Authority (NHA), AASHTO, and ASTM specifications",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "National Highway Authority (NHA), C&W Departments, LDA, CDA, DHA" },
      { key: "Design Axle Load", value: "AASHTO HS20-44 / Class-A military heavy vehicle loading" },
      { key: "Asphalt Technology", value: "Superpave PG 76-22 polymer-modified bitumen resistant to 50°C summer rutting" },
      { key: "Prestressing System", value: "12.7mm and 15.2mm low-relaxation 7-wire post-tensioned steel strands" },
      { key: "Bridge Bearings", value: "Reinforced elastomeric and pot bearings absorbing multi-axis thermal expansion" },
      { key: "Earthwork Fleet", value: "GPS-guided CAT motor graders, 20-ton vibratory rollers, and heavy excavators" },
    ],
    pillars: [
      {
        title: "Heavy Axle Durability",
        desc: "Engineered subgrades and high-modulus asphalt prevent road rutting under overloaded commercial freight.",
        icon: Layers,
      },
      {
        title: "Off-Site Girder Precasting",
        desc: "Casting 40-meter bridge girders off-site enables rapid night-time installation with zero urban traffic delays.",
        icon: Building2,
      },
      {
        title: "Polymer-Modified Bitumen",
        desc: "Superpave asphalt resists temperature extremes, preventing surface bleeding in summer and cracking in winter.",
        icon: ShieldCheck,
      },
      {
        title: "Engineered Stormwater Drainage",
        desc: "High-capacity box culverts and concrete drainage channels protect road subgrades from monsoon flooding.",
        icon: Activity,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "GPS Survey & Subgrade Compaction",
        desc: "Drone LIDAR mapping and heavy compaction of highway embankments in tested 200mm layers.",
      },
      {
        step: "02",
        title: "Deep Piling & Bridge Substructure",
        desc: "Drilling 1,500mm bored pile foundations and casting reinforced concrete bridge piers and abutments.",
      },
      {
        step: "03",
        title: "Precast Girder Launching",
        desc: "Hydraulic launching gantries place 40-meter prestressed concrete girders across spans with precision.",
      },
      {
        step: "04",
        title: "Sensor Asphalt Paving & ITS",
        desc: "Multi-layer Superpave asphalt paving, thermal joint sealing, LED sign gantries, and automated toll plazas.",
      },
    ],
    faqs: [
      {
        q: "What design standards are followed for highway and bridge projects?",
        a: "We adhere strictly to AASHTO LRFD Bridge Design Specifications, ASTM testing standards, and National Highway Authority (NHA) General Specifications.",
      },
      {
        q: "How does Walton construct flyovers without shutting down busy city traffic?",
        a: "We cast all prestressed concrete bridge girders off-site in dedicated casting yards and deploy hydraulic launching gantries during scheduled night-time hours to erect bridge decks safely.",
      },
      {
        q: "What is the expected lifespan of Walton asphalt pavements?",
        a: "Our Superpave polymer-modified asphalt pavements are designed for a 20-year structural service life under heavy highway axle traffic with minimal maintenance.",
      },
    ],
  },
  {
    id: "logistics-peb-steel",
    slug: "mega-logistics-distribution-centers-peb",
    name: "WaltonHub Mega Logistics Distribution Center & PEB",
    subtitle: "Large-Span Pre-Engineered Structural Steel Warehouses & Superflat Floors",
    eyebrow: "60-Meter Column-Free Clear Spans & FM2 Laser-Screed Logistics Warehouses",
    category: "Logistics & PEB Steel",
    tag: "Logistics & PEB Hub",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonHub is our specialized turnkey construction package for large-span logistics distribution centers, e-commerce fulfillment hubs, automated cold storage facilities, and structural steel warehouses. Featuring up to 60-meter unobstructed column-free spans, FM2 laser-screed superflat concrete floors, fire-rated insulated sandwich panel cladding, and automated dock leveler bays.",
    metrics: [
      { label: "Clear Span Width", value: "Up to 60 Meters" },
      { label: "Floor Levelness", value: "FM2 Superflat Laser" },
      { label: "Erection Rate", value: "5,000 Sqm / Month" },
      { label: "Thermal Insulation", value: "PIR Sandwich Core" },
    ],
    deliverables: [
      "Custom 3D engineered structural steel portal frames fabricated from high-yield ASTM A572 Grade-50 steel",
      "Automated submerged-arc welding (SAW) of built-up tapered I-sections with 100% ultrasonic weld testing",
      "High-density PIR / Rockwool insulated roof and wall sandwich panels with 2-hour fire resistance ratings",
      "Industrial laser-screed concrete floor slabs with dry-shake metallic quartz hardeners (FM2 superflat standard)",
      "Hydraulic dock leveler loading bays, automated sectional overhead doors, and dock shelter seals",
      "Integrated rooftop solar mounting provisions, daylight polycarbonate skylights, and smoke heat exhaust vents",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "3PL logistics operators, e-commerce giants, cold chain companies, FMCG distributors" },
      { key: "Clear-Span Capability", value: "Up to 60 Meters (200 Feet) continuous column-free internal width" },
      { key: "Floor Tolerance", value: "TR34 4th Edition FM2 / ASTM E1155 (FF > 50, FL > 35 for high-reach VNA trucks)" },
      { key: "Steel Coating System", value: "Shot blasted to SA 2.5 with epoxy zinc-rich primer and polyurethane topcoat" },
      { key: "Clear Eave Heights", value: "8 to 16 meters clear stacking height for high-density pallet racking" },
      { key: "Fire Safety", value: "ESFR (Early Suppression Fast Response) ceiling-mounted sprinkler systems" },
    ],
    pillars: [
      {
        title: "60m Column-Free Freedom",
        desc: "Delivers completely unobstructed floor space for automated conveyor systems and high-density racking.",
        icon: Building2,
      },
      {
        title: "FM2 Superflat Floor Slabs",
        desc: "Precision laser screeds eliminate floor ripples, allowing very narrow aisle (VNA) forklifts to run safely at speed.",
        icon: Compass,
      },
      {
        title: "PIR Insulated Fire Panels",
        desc: "Maintains temperature control for cold chains while providing certified 2-hour structural fire barriers.",
        icon: ShieldCheck,
      },
      {
        title: "Turnkey Fast-Track Build",
        desc: "Precision pre-fabricated bolt-together components reduce construction time by over 50% compared to RCC.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "3D Tekla BIM Detailing",
        desc: "Generating millimeter-accurate 3D steel models for automated CNC plasma cutting and robot drilling.",
      },
      {
        step: "02",
        title: "Factory Fabrication & Shot Blasting",
        desc: "Tapered beams are submerged-arc welded, shot-blasted to SA 2.5, and coated with epoxy primers.",
      },
      {
        step: "03",
        title: "Laser Screed Superflat Floor Pour",
        desc: "Somero laser screeds cast concrete floor slabs with dry-shake quartz hardeners and saw-cut joints.",
      },
      {
        step: "04",
        title: "Steel Erection & Cladding Enclosure",
        desc: "Mobile cranes bolt steel frames, install purlins, hoist roof/wall sandwich panels, and fit dock levelers.",
      },
    ],
    faqs: [
      {
        q: "What is the maximum stacking height supported by WaltonHub logistics warehouses?",
        a: "We engineer clear eave heights up to 16 meters (52 feet), allowing high-density 8 to 10-level pallet racking systems.",
      },
      {
        q: "Why are FM2 superflat floors necessary for automated warehouses?",
        a: "When forklifts operate at high mast heights (12+ meters), tiny floor imperfections cause huge mast swaying. FM2 laser-screed floors ensure smooth, safe high-speed operation.",
      },
      {
        q: "Can Walton configure the warehouse for cold storage applications?",
        a: "Yes. We install high-density 150mm PIR insulated floor-to-ceiling panels, insulated floor under-slab heating (to prevent frost heave), and rapid roll-up freezer doors for sub-zero (-25°C) cold chains.",
      },
    ],
  },
  {
    id: "healthcare-campuses",
    slug: "institutional-university-healthcare-campuses",
    name: "WaltonCampus Institutional University & Healthcare",
    subtitle: "Multi-Story Academic Complexes, Specialized Teaching Hospitals & Research Labs",
    eyebrow: "Civic Infrastructure, University Campuses & Modern Healthcare Facilities",
    category: "Healthcare & Campuses",
    tag: "Institutional Campuses",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonCampus is our specialized civil engineering and turnkey contracting solution for large university campuses, medical teaching hospitals, academic auditoriums, and laboratory complexes. Engineered for heavy daily foot traffic, advanced medical MEP services (medical gases, clean rooms, radiation shielding, central HVAC), and sound acoustic isolation, we deliver civic institutions built to endure for generations.",
    metrics: [
      { label: "Campus Projects", value: "35+ Institutions" },
      { label: "Hospital Beds Built", value: "2,500+ Beds" },
      { label: "Acoustic Rating", value: "STC 55+ Soundproof" },
      { label: "Cleanroom Standards", value: "ISO Class 5 – 8" },
    ],
    deliverables: [
      "Multi-story academic faculty blocks, lecture theaters, and high-capacity stepped auditoriums",
      "Specialized hospital construction with integrated medical gas pipelines, central oxygen plants, and cleanroom OT suites",
      "Radiation shielding: heavy barium concrete walls and lead-lined doors for radiology and CT/MRI suites",
      "Integrated Central HVAC with HEPA filtration, positive/negative pressure isolation wards, and laminar flow hoods",
      "Robust architectural finishes: anti-microbial vinyl flooring, hygienic wall cladding, and acoustic acoustic ceilings",
      "Full compliance with Pakistan Medical Commission (PMC) and international healthcare facility standards",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "Public/Private universities, medical colleges, specialist hospitals, research trusts" },
      { key: "Building Typologies", value: "Academic blocks, 500-bed hospitals, student hostels, sports complexes" },
      { key: "Medical Gas Integration", value: "HTM 02-01 compliant medical oxygen, nitrous oxide, vacuum, and air pipelines" },
      { key: "Acoustic Insulation", value: "Sound Transmission Class (STC) > 55 between classrooms and auditoriums" },
      { key: "Electrical Reliability", value: "N+1 redundant standby diesel generators with sub-second automatic transfer" },
      { key: "Accessibility", value: "Universal barrier-free accessibility: ADA-compliant ramps, tactile paving, and bed elevators" },
    ],
    pillars: [
      {
        title: "Medical MEP Specialization",
        desc: "Expertly integrates cleanroom HVAC, medical gas pipelines, and backup electrical grids for life-support equipment.",
        icon: Building2,
      },
      {
        title: "Radiation & Acoustic Shielding",
        desc: "Heavy barium-doped concrete walls protect staff and public from MRI and linear accelerator radiation.",
        icon: ShieldCheck,
      },
      {
        title: "Heavy Foot-Traffic Resilience",
        desc: "Durable granite, anti-microbial terrazzo, and heavy-duty structural frames handle thousands of daily visitors.",
        icon: Users2,
      },
      {
        title: "Universal Barrier-Free Design",
        desc: "Full ADA accessibility with wide corridors, dedicated hospital bed lifts, and tactile navigation pathways.",
        icon: Landmark,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Architectural & Clinical Flow Planning",
        desc: "Designing departmental zoning (OPD, Emergency, ICUs, OTs) with infection control airflow simulations.",
      },
      {
        step: "02",
        title: "Heavy Structural Concrete Framework",
        desc: "Casting reinforced concrete frames with lead/barium radiation shielding in diagnostic basements.",
      },
      {
        step: "03",
        title: "Medical MEP & Cleanroom Installation",
        desc: "Installing HEPA-filtered laminar airflow HVAC, medical gas piping, and vinyl antimicrobial flooring.",
      },
      {
        step: "04",
        title: "Sterility Validation & Commissioning",
        desc: "Validating cleanroom particle counts, testing emergency power transfer, and handing over to hospital board.",
      },
    ],
    faqs: [
      {
        q: "How does Walton ensure sterile environments in operating theaters (OTs)?",
        a: "We install modular hermetically sealed cleanroom wall panels, seamless conductive anti-static vinyl flooring, and ceiling laminar airflow diffusers equipped with 99.997% efficient HEPA filters.",
      },
      {
        q: "Can Walton construct high-capacity stepped university auditoriums?",
        a: "Yes. We engineer large-span stepped concrete raked seating, acoustic timber wall panelling, stage lighting grids, and specialized acoustic ceiling baffles for crystal-clear lecture acoustics.",
      },
      {
        q: "What backup power systems are provided for hospitals?",
        a: "We install N+1 redundant Cummins/Caterpillar diesel generators paired with online uninterruptible power supply (UPS) systems that switch power in under 15 milliseconds, ensuring zero interruption to ICUs.",
      },
    ],
  },
  {
    id: "urban-infrastructure",
    slug: "municipal-infrastructure-stormwater-networks",
    name: "WaltonUrban Municipal Infrastructure & Stormwater",
    subtitle: "Turnkey SEZ Development, Deep Stormwater Box Culverts & Utility Grids",
    eyebrow: "Civil Master Planning, Special Economic Zones & Municipal Utility Networks",
    category: "Highways & Bridges",
    tag: "Urban Infrastructure",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "WaltonUrban provides master civil infrastructure development for industrial Special Economic Zones (SEZs), planned residential housing societies, and municipal urban extensions. From heavy-duty RCC arterial roads and underground stormwater box culvert trunk lines to water distribution networks, underground electrical power cabling, and central sewage treatment plants, we build the vital foundational backbone of modern cities.",
    metrics: [
      { label: "Master Land Developed", value: "15,000+ Acres" },
      { label: "Stormwater Trunk Lines", value: "250+ Kilometers" },
      { label: "Underground Power Grids", value: "11kV Underground" },
      { label: "Water Storage Tanks", value: "20M+ Gallons" },
    ],
    deliverables: [
      "Large-scale earthwork grading, cut-and-fill contouring, and road subgrade stabilization",
      "Heavy-duty reinforced concrete arterial roads, pavers, curb stones, and street lighting networks",
      "Underground gravity stormwater box culvert networks designed for 50-year return monsoon rainfalls",
      "Potable water supply pipelines (HDPE / Ductile Iron), overhead water reservoirs, and tube-well pumping stations",
      "Underground electrical distribution networks (11kV underground cabling, RMUs, and distribution substations)",
      "Central Sewage Treatment Plants (STP) utilizing Moving Bed Biofilm Reactor (MBBR) technology",
    ],
    technicalSpecs: [
      { key: "Target Demographic", value: "Industrial park authorities (FIEDMC, PIEDMC), housing developers (DHA, LDA), municipal bodies" },
      { key: "Hydraulic Drainage Standard", value: "HEC-RAS & EPA-SWMM hydraulic modeling for 50-year storm flood resilience" },
      { key: "Pavement Structure", value: "200mm sub-base, 150mm crushed aggregate base, 100mm asphalt / RCC rigid pavement" },
      { key: "Pipe Materials", value: "High-Density Polyethylene (HDPE PE100) and Class-K9 Ductile Iron (DI) pipes" },
      { key: "Box Culvert Dimensions", value: "Precast & cast-in-situ RCC box culverts up to 4m x 3m double-barrel profiles" },
      { key: "Sewage Treatment Quality", value: "BOD < 10 mg/L, TSS < 10 mg/L (Safe for landscaping reuse)" },
    ],
    pillars: [
      {
        title: "50-Year Flood Resilience",
        desc: "Engineered stormwater box culvert trunk networks evacuate heavy monsoon cloudbursts without surface flooding.",
        icon: Activity,
      },
      {
        title: "Underground Utility Corridors",
        desc: "Buries all power, fiber optic, water, and gas lines neatly beneath footpaths, preventing future road excavations.",
        icon: Compass,
      },
      {
        title: "Rigid Concrete Arterials",
        desc: "Heavy reinforced concrete road pavements withstand turning heavy freight container trailers indefinitely.",
        icon: Layers,
      },
      {
        title: "Circular Sewage Recycling",
        desc: "MBBR sewage treatment plants purify wastewater for recycling as landscape irrigation across the master development.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Master Topo Survey & Earthwork Grading",
        desc: "Drone LIDAR 3D contour mapping and mass earthwork cut-and-fill grading across the entire master parcel.",
      },
      {
        step: "02",
        title: "Stormwater & Sewerage Trunk Lines",
        desc: "Excavating trenches and installing precast concrete box culverts and gravity sewer pipes with manholes.",
      },
      {
        step: "03",
        title: "Water Supply & Underground Power Grids",
        desc: "Laying HDPE water mains, constructing overhead reservoirs, and pulling 11kV underground power cables.",
      },
      {
        step: "04",
        title: "Paved Roadways & Street Furniture",
        desc: "Laying asphalt/RCC road courses, pouring concrete curb stones, planting green verges, and erecting LED street poles.",
      },
    ],
    faqs: [
      {
        q: "What types of master developments has Walton delivered infrastructure for?",
        a: "We have delivered civil master infrastructure for industrial special economic zones (such as M-3 Industrial City), premier residential societies (DHA and LDA schemes), and municipal transport hubs.",
      },
      {
        q: "How does Walton ensure the stormwater drainage network handles monsoon rains?",
        a: "We run comprehensive EPA-SWMM computer hydrology simulations based on 50-year rainfall intensity-duration-frequency (IDF) curves to size box culverts with ample reserve flow capacity.",
      },
      {
        q: "What is the benefit of underground electrical distribution over overhead wires?",
        a: "Underground 11kV cabling eliminates visual clutter, prevents storm-related power outages, and ensures total electrical safety throughout the development.",
      },
    ],
  },
];

export function getWaltonSolutionBySlug(slug) {
  if (!slug) return null;
  return WALTON_SOLUTIONS.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id.toLowerCase() === slug.toLowerCase()
  );
}
