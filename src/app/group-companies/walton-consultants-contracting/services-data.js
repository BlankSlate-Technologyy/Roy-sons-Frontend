// Comprehensive Civil Engineering & General Contracting Services Dataset for Walton Consultants & Contracting (Pvt) Ltd
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
} from "lucide-react";

export const WALTON_SERVICES = [
  {
    id: "civil-engineering",
    slug: "civil-engineering-structural-superstructures",
    title: "Civil Engineering & Structural Superstructures",
    subtitle: "High-Rise Commercial Towers, Post-Tensioned Slabs & Deep Foundations",
    eyebrow: "Heavy Reinforced Concrete & Seismic Superstructure Engineering",
    tag: "Civil Superstructures",
    icon: Building2,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton Consultants & Contracting executes high-rise commercial towers, residential complexes, and civic structural superstructures. Utilizing rotary bored piling down to 45 meters, post-tensioned (PT) beam-less floor plates for massive column-free spans, dual shear wall seismic frames designed to UBC-97 / ACI 318 standards, and architectural curtain wall facades, we build resilient landmarks that define urban skylines.",
    metrics: [
      { label: "High-Rises Delivered", value: "45+ Towers" },
      { label: "Concrete Strength", value: "C50/60 High-Grade" },
      { label: "Max Tower Height", value: "150+ Meters" },
      { label: "Seismic Design", value: "Zone 2B/3/4 UBC-97" },
    ],
    deliverables: [
      "Rotary bored piling (diameter 600mm to 1,500mm) and contiguous secant pile basement retaining walls",
      "High-strength post-tensioned (PT) concrete slabs engineered to maximize column-free interior floor plans",
      "High-rise dual structural shear wall core systems and ductile moment-resisting concrete frame casting",
      "Integrated double-glazed thermal break curtain wall glazing, spider fittings, and ACP architectural cladding",
      "Advanced multi-level subterranean basement dewatering, waterproofing, and perimeter tanking membranes",
      "Full compliance with Pakistan Building Code (PBC), ACI 318, ASTM, and British Standard (BS) specifications",
    ],
    technicalSpecs: [
      { key: "Structural Design Codes", value: "ACI 318-19, UBC-97 (Zone 2B/3/4), ASCE 7-16 Seismic Standards" },
      { key: "Concrete Specifications", value: "Self-compacting concrete (SCC) up to 8,000 PSI with silica fume additives" },
      { key: "Rebar Grade", value: "Deformed Grade-60 & Grade-75 high-yield steel (ASTM A615 / A706)" },
      { key: "Formwork Technology", value: "Automated hydraulic climbing core formwork and Doka aluminum table form systems" },
      { key: "Deep Foundation Piles", value: "Bored cast-in-place concrete piles with polymer drilling slurries" },
      { key: "Quality Assurance", value: "On-site destructive/non-destructive Schmidt hammer, ultrasonic, and core testing" },
    ],
    pillars: [
      {
        title: "Seismic Resilient Cores",
        desc: "Engineered dual shear wall cores withstand extreme dynamic wind forces and earthquake ground accelerations.",
        icon: ShieldCheck,
      },
      {
        title: "Post-Tensioned Clear Spans",
        desc: "Unbonded mono-strand tendons create wide 12-meter column-free spans, maximizing leasable floor area.",
        icon: Layers,
      },
      {
        title: "Deep Basement Retention",
        desc: "Secant pile walls and ground anchor tie-backs ensure zero settlement risk to adjacent neighboring buildings.",
        icon: Building2,
      },
      {
        title: "Precision Laser Leveling",
        desc: "Laser-guided concrete screeds achieve floor flatness tolerances (FF/FL) exceeding international standards.",
        icon: Compass,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Geotechnical Core Drilling & Piling",
        desc: "Rotary drilling rigs install deep bored piles and contiguous retaining walls to retain multi-level basements.",
      },
      {
        step: "02",
        title: "Raft Foundation & Substructure",
        desc: "Mass concrete raft pour with ice-chilled batching to control thermal hydration cracking in thick slabs.",
      },
      {
        step: "03",
        title: "Climbing Core & PT Floor Construction",
        desc: "Hydraulic self-climbing forms cast central elevator cores alongside high-speed post-tensioned floor casting.",
      },
      {
        step: "04",
        title: "Curtain Wall Facade & Handover",
        desc: "Installing unitized low-E curtain wall panels, MEP integration, vertical elevator testing, and commissioning.",
      },
    ],
    faqs: [
      {
        q: "What maximum height commercial towers has Walton constructed?",
        a: "Walton has executed towers up to 45 storeys (150+ meters in height) with up to 4 underground basement parking levels utilizing advanced hydraulic slip-formwork and deep piling.",
      },
      {
        q: "How do you ensure concrete quality in mass foundation pours?",
        a: "We utilize automated on-site batching plants with liquid nitrogen or flake ice chillers, low-heat pozzolanic cement mixes, and embedded digital thermocouple sensors to monitor core-to-surface temperature gradients.",
      },
      {
        q: "Does Walton manage the architectural facade and glazing installation?",
        a: "Yes. We offer complete building envelope solutions including unitized double-glazed curtain walls, structural spider glazing, and ventilated porcelain/aluminum cladding.",
      },
    ],
  },
  {
    id: "epc-projects",
    slug: "turnkey-epc-heavy-industrial-projects",
    title: "Turnkey EPC Heavy Industrial Projects",
    subtitle: "End-to-End Engineering, Procurement, Construction & Handover",
    eyebrow: "Single-Point EPC Delivery for Manufacturing & Processing Plants",
    tag: "Turnkey EPC Contracting",
    icon: Truck,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton delivers turnkey Engineering, Procurement, and Construction (EPC) services for large-scale industrial processing facilities, chemical factories, textile complexes, food manufacturing plants, and captive power stations. From heavy machine dynamic vibration foundations to high-voltage electrical substations, industrial piping manifolds, and boiler rooms, we manage the entire project lifecycle with single-point accountability.",
    metrics: [
      { label: "Industrial Plants Built", value: "85+ Plants" },
      { label: "Covered Floor Area", value: "8.5M+ Sq Ft" },
      { label: "Electrical Substations", value: "Up to 132kV" },
      { label: "Safety Milestone", value: "10M LTI-Free Hours" },
    ],
    deliverables: [
      "Process plant structural layout engineering and heavy equipment dynamic vibration isolation foundations",
      "Procurement, customs clearance, and heavy mechanical rigging of industrial reactors, furnaces, and silos",
      "High-voltage electrical grid substations (11kV to 132kV), central motor control centers (MCC), and bus ducts",
      "Industrial utility piping networks: high-pressure steam, chilled glycol, compressed air, and RO water",
      "Automated fire sprinkler rings, FM200 clean agent gas suppression, and explosion-proof electrical fittings",
      "Cold and hot commissioning runs, performance guarantee benchmarking, and client operations handover",
    ],
    technicalSpecs: [
      { key: "EPC Delivery Model", value: "Turnkey Lump-Sum EPC / FIDIC Silver Book Contract Standard" },
      { key: "Vibration Foundations", value: "Dynamic finite element design isolated with spring and elastomeric dampers" },
      { key: "Mechanical Rigging", value: "Heavy tandem crane lifts up to 250 metric tons single-piece capacity" },
      { key: "Piping Fabrication", value: "ASME B31.3 process piping in carbon steel (A106) and stainless steel (SS316L)" },
      { key: "Electrical Infrastructure", value: "IEC-compliant switchgear, vacuum circuit breakers, and SCADA monitoring" },
      { key: "Environmental Compliance", value: "Integrated Industrial Effluent Treatment Plants (ETP) and bag-house filters" },
    ],
    pillars: [
      {
        title: "Single-Point Accountability",
        desc: "Eliminates contractor interface conflicts by managing civil, mechanical, electrical, and piping in-house.",
        icon: Award,
      },
      {
        title: "Dynamic Vibration Isolation",
        desc: "Specialized foundation engineering isolates heavy stamping presses and turbines from surrounding structures.",
        icon: Factory,
      },
      {
        title: "Heavy Mechanical Rigging",
        desc: "Certified heavy crane operations position multi-ton industrial vessels and silos with millimeter accuracy.",
        icon: Truck,
      },
      {
        title: "Turnkey Commissioning",
        desc: "We test all mechanical, electrical, and control loops together before handing over production-ready keys.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Front-End Engineering Design (FEED)",
        desc: "Developing process flow integration, equipment layout 3D models, and geotechnical dynamic site assays.",
      },
      {
        step: "02",
        title: "Civil Works & Heavy Equipment Foundations",
        desc: "Casting deep foundation piles, machine pits, concrete retaining silos, and reinforced substation yards.",
      },
      {
        step: "03",
        title: "Mechanical Erection & Piping Networks",
        desc: "Positioning industrial machinery, welding ASME process piping lines, and installing electrical switchgear.",
      },
      {
        step: "04",
        title: "Integrated Cold & Hot Commissioning",
        desc: "Testing pressure, calibrating electrical protection relays, running trial batches, and handing over facility.",
      },
    ],
    faqs: [
      {
        q: "What types of industrial manufacturing plants does Walton construct under EPC?",
        a: "We have built integrated textile spinning and dyeing complexes, chemical blending factories, food processing and dairy plants, automotive assembly lines, and steel rolling mills.",
      },
      {
        q: "Does Walton handle government environmental and electrical utility approvals?",
        a: "Yes. Our turnkey EPC scope includes statutory Environmental Protection Agency (EPA) clearances, WAPDA/DISCO grid connection sanctioning, and civil defense fire safety NOCs.",
      },
      {
        q: "How do you handle heavy industrial machinery installation?",
        a: "We deploy our own fleet of heavy mobile cranes (up to 250 tons), hydraulic jacking gantries, and laser optical alignment tools operated by certified rigging engineers.",
      },
    ],
  },
  {
    id: "infrastructure-development",
    slug: "highways-bridges-transportation-corridors",
    title: "Highways, Bridges & Transportation Corridors",
    subtitle: "Prestressed Concrete Girders, Flyovers & Highway Interchanges",
    eyebrow: "Heavy Civil Roadworks, Prestressed Bridges & Transport Corridors",
    tag: "Highways & Infrastructure",
    icon: Layers,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton's Transportation Infrastructure Division constructs multi-lane expressways, urban flyovers, prestressed concrete highway bridges, railway overpasses, and stormwater box culverts. Utilizing laser-guided paving machines, computerized asphalt batching plants, and on-site precast prestressed concrete girder yards, we build heavy-duty transport corridors engineered for heavy freight traffic and extreme weather cycles.",
    metrics: [
      { label: "Highway Corridors Built", value: "450+ Kilometers" },
      { label: "Bridges & Flyovers", value: "65+ Structures" },
      { label: "Asphalt Paving Rate", value: "3,000 Tons / Day" },
      { label: "Design Axle Load", value: "Class-A / AASHTO HS20" },
    ],
    deliverables: [
      "Multi-lane expressway construction with Superpave Performance-Grade (PG) asphalt concrete wearing courses",
      "Precast prestressed concrete I-girder and post-tensioned box-girder highway overpasses and river bridges",
      "Mechanically Stabilized Earth (MSE) retaining walls with geosynthetic soil reinforcement and architectural panels",
      "Precast reinforced concrete box culverts, subsurface drainage pipes, and concrete roadside swales",
      "Intelligent Transportation Systems (ITS): automated toll collection plazas, weigh-in-motion stations, and LED gantries",
      "Strict compliance with National Highway Authority (NHA) and AASHTO highway design specifications",
    ],
    technicalSpecs: [
      { key: "Bridge Design Codes", value: "AASHTO LRFD Bridge Design Specifications & NHA General Specifications" },
      { key: "Asphalt Paving Tech", value: "Vögele sensor pavers with electronic sonic grade averaging beams" },
      { key: "Girder Prestressing", value: "Post-tensioned strands with high-density polyethylene ducts and vacuum grouting" },
      { key: "Bridge Bearings", value: "Elastomeric rubber and pot bearings with multi-directional seismic displacement" },
      { key: "Pavement Testing", value: "Nuclear density gauge compaction, Marshall stability, and Falling Weight Deflectometer" },
      { key: "Earthwork Fleet", value: "GPS-guided motor graders, vibratory sheep-foot rollers, and heavy scrapers" },
    ],
    pillars: [
      {
        title: "AASHTO Heavy Axle Engineering",
        desc: "Designed to carry multi-axle commercial freight trailers without rutting, cracking, or bridge fatigue.",
        icon: Layers,
      },
      {
        title: "Precast Girder Yard Casting",
        desc: "Casting 40-meter bridge girders in controlled yards accelerates construction and eliminates traffic congestion.",
        icon: Building2,
      },
      {
        title: "Superpave Modified Bitumen",
        desc: "Polymer-modified asphalt resists high 50°C summer pavement temperatures, preventing road rutting.",
        icon: ShieldCheck,
      },
      {
        title: "Integrated Highway Drainage",
        desc: "Comprehensive box culvert networks evacuate monsoon stormwater rapidly, protecting road subgrades.",
        icon: Activity,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Topographical Survey & Earthwork Embankments",
        desc: "GPS drone LIDAR mapping and heavy compaction of highway subgrade embankments in 200mm tested layers.",
      },
      {
        step: "02",
        title: "Bridge Piling & Substructure Casting",
        desc: "Drilling heavy bored pile foundations, casting bridge piers, abutments, and reinforced elastomeric caps.",
      },
      {
        step: "03",
        title: "Prestressed Girder Erection",
        desc: "Launching 40-meter precast concrete girders using specialized hydraulic launching gantries across spans.",
      },
      {
        step: "04",
        title: "Multi-Layer Asphalt Paving",
        desc: "Laying base course, asphalt binder, and polymer wearing course followed by road marking and signage.",
      },
    ],
    faqs: [
      {
        q: "What standards does Walton follow for highway and bridge construction?",
        a: "We adhere strictly to AASHTO LRFD Bridge Design Specifications, ASTM testing benchmarks, and National Highway Authority (NHA) standards.",
      },
      {
        q: "Can Walton construct highway bridges without disrupting live urban traffic?",
        a: "Yes. By utilizing off-site precast prestressed concrete girders and night-time hydraulic launching gantries, we erect bridge spans with minimal traffic disruption.",
      },
      {
        q: "What is Walton's daily asphalt production and paving capability?",
        a: "We operate computerized 240 TPH asphalt batching plants capable of producing and paving over 3,000 metric tons of hot-mix asphalt per day.",
      },
    ],
  },
  {
    id: "industrial-construction",
    slug: "pre-engineered-buildings-peb-warehouses",
    title: "Pre-Engineered Buildings (PEB) & Warehouses",
    subtitle: "Structural Steel Fabrication, Logistics Hubs & Cold Storage",
    eyebrow: "Large-Span Structural Steel Fabrication & Industrial Logistics Hubs",
    tag: "PEB Steel Construction",
    icon: Wrench,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton's Structural Steel & PEB Division designs, fabricates, and erects large-span pre-engineered steel buildings, logistics distribution warehouses, overhead crane gantries, and temperature-controlled cold chains. Featuring clear spans up to 60 meters without internal columns, automated submerged arc welded tapered beams, insulated fire-rated sandwich cladding, and FM2 laser-screed superflat concrete floors.",
    metrics: [
      { label: "Steel Fabricated Annually", value: "35K+ Metric Tons" },
      { label: "Max Clear Span", value: "60 Meters Column-Free" },
      { label: "Laser Screed Floor", value: "FM2 Superflat Finish" },
      { label: "Erection Speed", value: "5,000 Sqm / Month" },
    ],
    deliverables: [
      "Custom 3D engineered structural steel portal frames utilizing high-yield ASTM A572 Grade-50 steel",
      "Automated submerged-arc welding (SAW) of built-up tapered I-sections with ultrasonic weld testing",
      "High-density PIR / Rockwool insulated roof and wall sandwich panels with 2-hour fire resistance ratings",
      "Industrial laser-screed concrete floor slabs with dry-shake metallic quartz hardeners (FM2 superflat standard)",
      "Integrated overhead bridge crane runway beams, mezzanines, daylight polycarbonate skylights, and ridge ventilators",
      "Fast-track turnkey erection with certified steel riggers, torque-controlled bolts, and safety netting",
    ],
    technicalSpecs: [
      { key: "Structural Steel Standard", value: "AISC 360-16 / MBMA (Metal Building Manufacturers Association) Standards" },
      { key: "Welding Specification", value: "AWS D1.1 Structural Welding Code with 100% NDT inspection" },
      { key: "Surface Treatment", value: "Shot blasting to SA 2.5 with epoxy zinc-phosphate primer and polyurethane topcoat" },
      { key: "Secondary Framing", value: "Galvanized cold-formed Z & C purlins (275 g/m² zinc coating)" },
      { key: "Floor Slab Tolerance", value: "TR34 4th Edition FM2 / ASTM E1155 (FF > 50, FL > 35)" },
      { key: "Crane Capacity", value: "Engineered for single/double girder overhead cranes up to 50 tons" },
    ],
    pillars: [
      {
        title: "60-Meter Column-Free Spans",
        desc: "Maximizes logistics floor area and racking layout flexibility without obstructive interior columns.",
        icon: Building2,
      },
      {
        title: "FM2 Superflat Laser Screed Floors",
        desc: "Perfect level concrete slabs prevent high-reach forklift vibration and allow rapid pallet movement.",
        icon: Compass,
      },
      {
        title: "PIR Insulated Fire Cladding",
        desc: "Energy-efficient sandwich panels maintain cold storage temperatures and provide certified fire barriers.",
        icon: ShieldCheck,
      },
      {
        title: "Rapid Erection Timelines",
        desc: "Pre-fabricated bolt-together components reduce construction timelines by over 50% compared to RCC.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "3D BIM Steel Modeling & Detailing",
        desc: "Tekla Structures 3D modeling generates precision shop drawings for CNC cutting and automated drilling.",
      },
      {
        step: "02",
        title: "Factory Fabrication & Shot Blasting",
        desc: "Plates are plasma cut, submerged-arc welded, shot-blasted to SA 2.5, and coated with epoxy primers.",
      },
      {
        step: "03",
        title: "Laser Screed Superflat Floor Casting",
        desc: "Somero laser screeds cast concrete floor slabs with dry-shake quartz hardeners and saw-cut joints.",
      },
      {
        step: "04",
        title: "Crane Erection & Panel Cladding",
        desc: "Mobile cranes bolt steel frames, install purlins, hoist roof/wall sandwich panels, and seal flashing.",
      },
    ],
    faqs: [
      {
        q: "What is the maximum clear-span width Walton can fabricate without internal columns?",
        a: "We can design and fabricate clear-span pre-engineered steel buildings up to 60 meters (200 feet) in continuous unobstructed width.",
      },
      {
        q: "Why are FM2 laser-screed floor slabs essential for modern warehouses?",
        a: "FM2 superflat floors ensure very narrow aisle (VNA) forklifts operate safely at high mast heights (12+ meters) without tilting or tipping over uneven joints.",
      },
      {
        q: "Can Walton incorporate overhead bridge cranes into PEB structures?",
        a: "Yes. We engineer heavy crane runway girders, bracket corbels, and structural columns designed to support overhead travelling cranes up to 50 metric tons capacity.",
      },
    ],
  },
  {
    id: "project-management",
    slug: "project-management-bim-qa-qc-supervision",
    title: "Project Management & BIM QA/QC Supervision",
    subtitle: "Primavera P6 Scheduling, 3D BIM Coordination & Material Testing",
    eyebrow: "Digital BIM Coordination, Critical Path Management & Quality Control",
    tag: "BIM & Project Management",
    icon: ClipboardList,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton provides comprehensive Construction Project Management (CPM) and Building Information Modeling (BIM) supervision services. Utilizing Primavera P6 cloud scheduling, 3D/4D BIM clash resolution software, independent accredited on-site material testing laboratories, and strict OSHA-compliant safety enforcement, we ensure mega-projects are completed on time, within budget, and to exact specifications.",
    metrics: [
      { label: "BIM Clashes Resolved", value: "5,000+ Pre-Build" },
      { label: "Schedule Compliance", value: "98.5% On-Time" },
      { label: "Lab Test Certified", value: "ISO/IEC 17025" },
      { label: "Cost Savings via VE", value: "12% Average" },
    ],
    deliverables: [
      "Full 3D Building Information Modeling (BIM LOD 400) clash resolution across architectural, structural, and MEP systems",
      "4D construction schedule simulation and 5D real-time cost budget telemetry using Primavera P6 and Navisworks",
      "On-site ISO-compliant testing laboratory verifying concrete compressive strength, steel tensile rebar, and compaction",
      "Comprehensive Earned Value Management (EVM) reporting, milestone auditing, and contractor payment certification",
      "Rigorous on-site HSE (Health, Safety, and Environment) compliance enforcing zero-harm site safety protocols",
      "Digital as-built asset documentation, operation & maintenance (O&M) manuals, and client staff training",
    ],
    technicalSpecs: [
      { key: "BIM Software Stack", value: "Autodesk Revit, Navisworks Manage, Tekla Structures, AutoCAD Plant 3D" },
      { key: "Scheduling Tools", value: "Oracle Primavera P6 Enterprise Project Portfolio Management (EPPM)" },
      { key: "Quality Standards", value: "ISO 9001:2015 Quality Management & ISO 14001:2015 Environmental" },
      { key: "Safety Standards", value: "ISO 45001:2018 Occupational Health & Safety / OSHA 1926 Construction Standards" },
      { key: "Lab Capabilities", value: "2,000 kN concrete compression machine, ultrasonic pulse velocity, soil Proctor tests" },
      { key: "Reporting Telemetry", value: "Weekly cloud dashboards with drone 4K aerial photogrammetry progress mapping" },
    ],
    pillars: [
      {
        title: "Zero-Clash 3D BIM",
        desc: "Detects and resolves MEP conduit and structural beam collisions in the computer before pouring concrete.",
        icon: Compass,
      },
      {
        title: "Primavera P6 Critical Path",
        desc: "Rigorous daily milestone tracking prevents project bottlenecks and guarantees contractual completion dates.",
        icon: ClipboardList,
      },
      {
        title: "Certified Independent QA/QC",
        desc: "Third-party accredited material testing ensures zero sub-standard steel or concrete reaches the job site.",
        icon: ShieldCheck,
      },
      {
        title: "Value Engineering (VE)",
        desc: "Optimizes structural geometry and material specifications to shave costs without compromising strength.",
        icon: Scale,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "BIM Model Integration & Clash Audit",
        desc: "Combining architectural, structural, and MEP models into Navisworks to eliminate all spatial collisions.",
      },
      {
        step: "02",
        title: "Baseline Schedule & Budget Setup",
        desc: "Establishing the Critical Path Method (CPM) baseline schedule and cash-flow milestone forecasting in P6.",
      },
      {
        step: "03",
        title: "On-Site Daily Quality & Safety Audits",
        desc: "Inspectors test rebar placement, concrete slump, torque bolts, and enforce 100% OSHA safety protocols.",
      },
      {
        step: "04",
        title: "Digital Handover & As-Built Archive",
        desc: "Delivering complete digital BIM as-built models, warranty documentation, and facility maintenance manuals.",
      },
    ],
    faqs: [
      {
        q: "How does 3D BIM clash detection save money on construction projects?",
        a: "By identifying routing clashes between HVAC ducts, plumbing pipes, and structural concrete beams digitally during design, BIM eliminates expensive site re-work and demolitions, saving up to 10%–15% in project costs.",
      },
      {
        q: "What testing equipment does Walton deploy in its on-site laboratories?",
        a: "We deploy calibrated computerized 2,000 kN concrete compression machines, rebar tensile testing benches, nuclear soil density gauges, and non-destructive ultrasonic concrete testers.",
      },
      {
        q: "Can Walton act as an independent Project Management Consultant (PMC)?",
        a: "Yes. Walton frequently serves as Owner's Representative and Project Management Consultant (PMC) for corporate developers, financial institutions, and government authorities.",
      },
    ],
  },
  {
    id: "engineering-consultancy",
    slug: "engineering-consultancy-feasibility-studies",
    title: "Engineering Consultancy & Feasibility Studies",
    subtitle: "Geotechnical Surveys, Structural Peer Reviews & Tender BOQs",
    eyebrow: "Front-End Geotechnical Surveys, Structural Modeling & Cost Advisory",
    tag: "Engineering Advisory",
    icon: Hammer,
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton's Engineering Consultancy Division provides high-level technical advisory services before breaking ground. From geotechnical borehole core drilling, soil electrical resistivity surveys, and seismic hazard micro-zonation to finite element structural modeling in ETABS/SAP2000, Environmental Impact Assessments (EIA), and precision Bill of Quantities (BOQ) tender preparation, we de-risk investments for corporate clients.",
    metrics: [
      { label: "Feasibilities Completed", value: "300+ Studies" },
      { label: "Soil Borings Drilled", value: "25K+ Meters" },
      { label: "BOQ Accuracy", value: "±2% Budget Precision" },
      { label: "Authority Approvals", value: "100% Clearance Rate" },
    ],
    deliverables: [
      "Geotechnical soil boring investigations, Standard Penetration Tests (SPT), and plate load bearing capacity audits",
      "Advanced 3D structural analysis and seismic peer reviews using ETABS, SAP2000, SAFE, and CSI Bridge software",
      "Comprehensive Environmental Impact Assessments (EIA) and Initial Environmental Examinations (IEE) for EPA approvals",
      "Precision computerized Bill of Quantities (BOQ) preparation, rate analysis, and contractor tender evaluation reports",
      "Structural integrity assessments, non-destructive concrete core testing, and retrofitting designs for existing buildings",
      "Statutory building authority NOC facilitation (LDA, CDA, DHA, Cantonment Boards, Civil Aviation Authority)",
    ],
    technicalSpecs: [
      { key: "Analysis Software", value: "ETABS Ultimate 20, SAP2000 v24, SAFE 20, PLAXIS 3D Geotechnical" },
      { key: "Geotechnical Equipment", value: "Hydraulic rotary core drilling rigs, electronic piezocone (CPTu) rigs" },
      { key: "Cost Estimation", value: "MasterFormat / UniFormat standardized itemized rate breakdown database" },
      { key: "Retrofit Methodologies", value: "Carbon-Fiber Reinforced Polymer (CFRP) wrapping and steel plate jacketing" },
      { key: "Hydrology Modeling", value: "HEC-RAS and EPA-SWMM stormwater watershed runoff simulations" },
      { key: "Accreditations", value: "Pakistan Engineering Council (PEC) Registered Consulting Engineers" },
    ],
    pillars: [
      {
        title: "Subsurface Geotechnical Accuracy",
        desc: "Core drilling identifies exact soil strata and water tables, preventing unforeseen foundation over-expenditures.",
        icon: Hammer,
      },
      {
        title: "Seismic & Wind Peer Reviews",
        desc: "Finite element modeling optimizes structural steel and concrete tonnage while ensuring full life-safety.",
        icon: ShieldCheck,
      },
      {
        title: "Precise Budget BOQs",
        desc: "Accurate material take-offs and market-indexed rate analyses eliminate contractor claims and cost overruns.",
        icon: Scale,
      },
      {
        title: "Fast Regulatory Approvals",
        desc: "Experienced liaison with municipal building authorities secures rapid statutory construction NOC approvals.",
        icon: Compass,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Site Geotechnical & Topo Investigation",
        desc: "Drilling soil boreholes, testing water tables, and surveying site contours with laser total stations.",
      },
      {
        step: "02",
        title: "Finite Element Structural Modeling",
        desc: "Engineering 3D structural models in ETABS under wind, seismic, and live dead load combinations.",
      },
      {
        step: "03",
        title: "Cost Analysis & BOQ Tender Dossier",
        desc: "Drafting comprehensive technical specifications, tender conditions, and itemized Bill of Quantities.",
      },
      {
        step: "04",
        title: "Authority NOCs & Tender Evaluation",
        desc: "Submitting structural vetting documents for statutory clearances and evaluating contractor tender bids.",
      },
    ],
    faqs: [
      {
        q: "Why is geotechnical borehole investigation mandatory before starting design?",
        a: "Soil core drilling reveals the exact bearing capacity, settlement profile, and groundwater depth of the site, ensuring structural engineers design the most cost-effective foundation without catastrophic settlement risks.",
      },
      {
        q: "Can Walton perform structural integrity vetting on old or damaged buildings?",
        a: "Yes. We conduct non-destructive testing (NDT), ultrasonic pulse velocity tests, rebar corrosion mapping, and design Carbon-Fiber (CFRP) retrofitting to restore building strength.",
      },
      {
        q: "What municipal authorities does Walton interface with for structural vetting?",
        a: "We secure approvals from Lahore Development Authority (LDA), Capital Development Authority (CDA), Karachi Development Authority (KDA), DHA across all chapters, and Cantonment Boards.",
      },
    ],
  },
];

export function getWaltonServiceBySlug(slug) {
  if (!slug) return null;
  return WALTON_SERVICES.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id.toLowerCase() === slug.toLowerCase()
  );
}
