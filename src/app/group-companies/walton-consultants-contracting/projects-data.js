// Comprehensive Signature Projects Dataset for Walton Consultants & Contracting (Pvt) Ltd
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
  MapPin,
  Calendar,
} from "lucide-react";

export const WALTON_PROJECTS = [
  {
    id: "lahore-ring-road-interchange",
    slug: "lahore-ring-road-southern-loop-interchange",
    name: "Lahore Ring Road Southern Loop Flyover & Interchange",
    subtitle: "Turnkey EPC 6-Lane Grade-Separated Expressway, Flyovers & Box-Girder Bridges",
    eyebrow: "Signature Heavy Highway Infrastructure & Grade-Separated Interchange",
    category: "Highways & Bridges",
    tag: "Highway Interchange",
    location: "Southern Loop SL-3, Lahore, Punjab",
    status: "Completed & Commissioned",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton Consultants & Contracting executed the complete turnkey EPC construction of the Lahore Ring Road Southern Loop Section SL-3 multi-level interchange and 6-lane access-controlled expressway. Featuring multi-span post-tensioned concrete box girders, Mechanically Stabilized Earth (MSE) retaining wall approaches, Superpave polymer-modified asphalt paving, and automated electronic toll plazas.",
    metrics: [
      { label: "Expressway Length", value: "8.5 Kilometers" },
      { label: "Bridge Deck Area", value: "32,000 Sq Meters" },
      { label: "Earthwork Embankment", value: "450,000 m³" },
      { label: "Daily Traffic Flow", value: "100K+ Vehicles" },
    ],
    deliverables: [
      "Multi-span post-tensioned reinforced concrete box-girder flyover structures over major urban intersections",
      "Mechanically Stabilized Earth (MSE) retaining walls with architectural precast facing panels and geogrid reinforcement",
      "8.5 km 6-lane access-controlled expressway with Superpave polymer-modified asphalt wearing courses",
      "Reinforced concrete stormwater box culverts and subsurface perforated drainage collector systems",
      "Intelligent Transportation Systems: high-mast LED floodlighting, crash cushions, and automated tolling plazas",
      "Commissioned ahead of contractual schedule with 100% compliance with NHA and AASHTO specifications",
    ],
    technicalSpecs: [
      { key: "Client / Authority", value: "Lahore Ring Road Authority (LRRA) & C&W Department Punjab" },
      { key: "Contract Model", value: "Turnkey EPC Design-Build Contract / FIDIC Conditions" },
      { key: "Structural System", value: "Continuous prestressed concrete box girders on reinforced concrete circular piers" },
      { key: "Deep Foundations", value: "1,200mm diameter bored cast-in-place concrete piles (28m depth)" },
      { key: "Pavement Structure", value: "Superpave PG 76-22 asphalt (100mm binder course + 50mm polymer wearing course)" },
      { key: "Safety Barriers", value: "AASHTO TL-4 crash-tested reinforced concrete New Jersey barriers" },
    ],
    pillars: [
      {
        title: "Fast-Track Urban Delivery",
        desc: "Completed ahead of deadline by executing night-time girder erection with zero prolonged traffic closures.",
        icon: Zap,
      },
      {
        title: "High-Axle Pavement Life",
        desc: "Polymer-modified asphalt resists high summer temperatures and heavy multi-axle freight loading.",
        icon: Layers,
      },
      {
        title: "Seismic Elastomeric Bearings",
        desc: "Multi-directional pot bearings absorb dynamic earthquake ground motions and thermal deck movements.",
        icon: ShieldCheck,
      },
      {
        title: "Zero-Flood Stormwater Design",
        desc: "Precast concrete culverts evacuate heavy monsoon rains instantly, safeguarding structural road embankments.",
        icon: Activity,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Traffic Diversion & Piling",
        desc: "Implementing safe traffic diversions and drilling 1,200mm bored piles for flyover piers and abutments.",
      },
      {
        step: "02",
        title: "Pier Casting & MSE Wall Erection",
        desc: "Casting reinforced concrete piers and building Mechanically Stabilized Earth (MSE) retaining ramps.",
      },
      {
        step: "03",
        title: "Box-Girder Concreting & Post-Tensioning",
        desc: "Casting multi-span box girders on heavy falsework and tensioning high-strength steel tendon cables.",
      },
      {
        step: "04",
        title: "Superpave Asphalt & Commissioning",
        desc: "Sensor-guided asphalt paving, bridge expansion joints, LED lighting installation, and opening to traffic.",
      },
    ],
    faqs: [
      {
        q: "What was the total completion timeline for the Lahore Ring Road SL-3 project?",
        a: "The project was executed in a record 14 months, achieving full operational commissioning ahead of the contractual timeline.",
      },
      {
        q: "How many vehicles utilize this interchange daily?",
        a: "Over 100,000 passenger cars and commercial freight trucks use this strategic transit interchange daily.",
      },
      {
        q: "What quality control testing was conducted on this highway?",
        a: "We conducted continuous core density nuclear testing on asphalt, ultrasonic concrete flaw detection on bridge piers, and 100% radiographic weld inspections on structural steel components.",
      },
    ],
  },
  {
    id: "sundar-textile-plant",
    slug: "sundar-industrial-estate-mega-textile-plant",
    name: "Sundar Industrial Estate Mega Textile Manufacturing Plant",
    subtitle: "Complete Civil Superstructure & PEB Steel Erection for 280,000 Sq Ft Complex",
    eyebrow: "Turnkey Industrial Complex & Heavy Machine Vibration Foundations",
    category: "Industrial Complexes",
    tag: "Industrial EPC Plant",
    location: "Sundar Industrial Estate, Lahore, Punjab",
    status: "Fully Commissioned & Operational",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton delivered the turnkey civil, structural, and MEP construction for a mega textile spinning and weaving manufacturing complex in Sundar Industrial Estate. Spanning over 280,000 square feet, the facility features dynamic vibration-isolated foundations for heavy spinning machinery, 50-meter clear-span structural steel halls, an integrated Effluent Treatment Plant (ETP), and an 11kV electrical power substation.",
    metrics: [
      { label: "Covered Floor Area", value: "280,000 Sq Ft" },
      { label: "PEB Steel Erection", value: "2,200 Metric Tons" },
      { label: "Substation Capacity", value: "11kV / 8.5 MVA" },
      { label: "ETP Plant Output", value: "1.5M Liters / Day" },
    ],
    deliverables: [
      "Dynamic vibration-dampened foundation rafts isolating high-speed spinning frames and carding machines",
      "50-meter clear-span structural steel portal frames fabricated from high-strength ASTM A572 Grade-50 steel",
      "High-density PIR insulated sandwich wall and roof cladding providing 2-hour fire barrier protection",
      "Laser-screed superflat concrete floor slabs with dry-shake metallic quartz hardeners (FM2 standard)",
      "Integrated 1.5 MLD industrial biological Effluent Treatment Plant (ETP) with membrane bioreactors",
      "Central 11kV electrical substation, 8.5 MVA transformer yards, compressed air loops, and fire ring mains",
    ],
    technicalSpecs: [
      { key: "Client", value: "Leading Corporate Export Textile Conglomerate" },
      { key: "Scope of Contract", value: "Turnkey EPC (Civil, Structural Steel PEB, MEP, ETP, Roads)" },
      { key: "Clear Span Width", value: "50.0 Meters unobstructed internal manufacturing floor span" },
      { key: "Machine Foundations", value: "Spring-isolated dynamic concrete inertia blocks (Zero resonant vibration)" },
      { key: "Floor Flatness", value: "FM2 Superflat (TR34 4th Edition) for heavy automated AGV transport" },
      { key: "Fire Rating", value: "NFPA-13 compliant automatic wet sprinkler system with 500,000-gallon water tank" },
    ],
    pillars: [
      {
        title: "Dynamic Vibration Isolation",
        desc: "Engineered foundation inertia blocks isolate heavy machinery vibration, protecting yarn quality.",
        icon: Factory,
      },
      {
        title: "50m Column-Free Spans",
        desc: "Structural steel portal frames provide flexible floor space for streamlined automated spinning lines.",
        icon: Building2,
      },
      {
        title: "FM2 Superflat Floors",
        desc: "Laser-screed floor slabs handle continuous automated guided vehicle (AGV) material handling.",
        icon: Compass,
      },
      {
        title: "Turnkey ETP Integration",
        desc: "On-site effluent plant treats industrial dye wastewater to national environmental standards for reuse.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Site Earthwork & Deep Piling",
        desc: "Grading 25-acre parcel and drilling pile foundations for heavy machinery beds and steel columns.",
      },
      {
        step: "02",
        title: "Vibration Foundations & Slabs",
        desc: "Casting isolated machine foundation pits and laser-screed superflat concrete floors.",
      },
      {
        step: "03",
        title: "PEB Steel Erection & Cladding",
        desc: "Erecting 2,200 tons of structural steel frames and installing insulated fire-rated sandwich panels.",
      },
      {
        step: "04",
        title: "MEP Piping, Substation & ETP",
        desc: "Installing 11kV substation, steam piping, ETP plant, and completing production dry runs.",
      },
    ],
    faqs: [
      {
        q: "How long did it take to construct this 280,000 sq ft industrial complex?",
        a: "The entire complex was designed, fabricated, erected, and commissioned in 10 months from ground-breaking.",
      },
      {
        q: "What is the capacity of the on-site Effluent Treatment Plant (ETP)?",
        a: "The ETP treats 1.5 Million liters of textile dyeing wastewater daily using biological MBBR technology, discharging clean water compliant with Punjab Environmental Quality Standards (PEQS).",
      },
      {
        q: "Did Walton manage the electrical power connection from the utility grid?",
        a: "Yes. We constructed the 11kV step-down substation, high-voltage switchgear rooms, and coordinated grid synchronization with LESCO.",
      },
    ],
  },
  {
    id: "m3-industrial-city-sez",
    slug: "m3-industrial-city-sez-master-infrastructure",
    name: "M-3 Industrial City Special Economic Zone Infrastructure",
    subtitle: "Master Civil Development across 150 Acres including Roads, Box Culverts & Power Grids",
    eyebrow: "Master Civil Infrastructure, Industrial Special Economic Zones & Utilities",
    category: "Industrial Complexes",
    tag: "SEZ Master Infrastructure",
    location: "M-3 Industrial City, FIEDMC, Faisalabad, Punjab",
    status: "Completed & Energized",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton was entrusted with the master civil infrastructure development across 150 acres of prime industrial land within the M-3 Industrial City Special Economic Zone (SEZ). The comprehensive project scope encompassed 22 kilometers of heavy-duty reinforced concrete arterial roads, large precast stormwater box culverts, underground 11kV electrical power networks, overhead water reservoirs, and central sewerage collection trunk lines.",
    metrics: [
      { label: "Master Area Developed", value: "150 Acres Industrial" },
      { label: "Arterial Concrete Roads", value: "22 Kilometers" },
      { label: "Box Culvert Networks", value: "14 Kilometers" },
      { label: "Water Storage Reservoirs", value: "2.5M Gallons" },
    ],
    deliverables: [
      "Mass earthwork grading, site contour cut-and-fill, and chemical subgrade lime stabilization across 150 acres",
      "Heavy-duty rigid concrete arterial roads designed to support 80-ton multi-axle industrial freight container trucks",
      "14 kilometers of precast reinforced concrete double-barrel stormwater box culverts and monsoon retention swales",
      "Complete underground 11kV electrical power distribution network, Ring Main Units (RMUs), and feeder pillars",
      "2.5 Million gallon elevated and underground potable water reservoirs with integrated high-pressure booster pumps",
      "Central sewage collection trunk lines, manholes, and sewage pumping station ready for industrial tenants",
    ],
    technicalSpecs: [
      { key: "Client", value: "Faisalabad Industrial Estate Development & Management Company (FIEDMC)" },
      { key: "Road Pavement Design", value: "250mm reinforced concrete rigid pavement (4,500 PSI) on crushed stone base" },
      { key: "Box Culvert Dimensions", value: "3.5m x 2.5m precast reinforced concrete double-barrel culverts" },
      { key: "Water Network Pipes", value: "High-Density Polyethylene (HDPE PE100 PN16) pressure pipelines" },
      { key: "Underground Power", value: "11kV XLPE insulated 3-core copper underground armored cabling" },
      { key: "Street Infrastructure", value: "Galvanized octagonal poles with smart solar-hybrid LED lighting" },
    ],
    pillars: [
      {
        title: "Rigid Heavy-Duty Pavements",
        desc: "250mm reinforced concrete roads withstand heavy industrial container transport without rutting.",
        icon: Layers,
      },
      {
        title: "100% Underground Utilities",
        desc: "All power, fiber optic, and water pipelines are buried beneath footpaths, preventing road excavations.",
        icon: Compass,
      },
      {
        title: "Monsoon Flood Immunity",
        desc: "High-capacity precast box culverts evacuate torrential rainfall, keeping industrial plots completely dry.",
        icon: Activity,
      },
      {
        title: "Turnkey SEZ Readiness",
        desc: "Fully energized power grids and water supplies allow new industrial investors to plug in immediately.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Drone Survey & Mass Grading",
        desc: "Drone LIDAR mapping and heavy earthwork grading across 150 acres with sheep-foot vibratory rollers.",
      },
      {
        step: "02",
        title: "Box Culvert & Deep Sewerage Laying",
        desc: "Trenching and laying 14 km of precast double-barrel concrete box culverts and gravity sewer pipes.",
      },
      {
        step: "03",
        title: "Underground 11kV Grid & Water Mains",
        desc: "Laying HDPE water supply networks, constructing 2.5M gallon reservoirs, and pulling underground power cables.",
      },
      {
        step: "04",
        title: "Concrete Road Paving & Handover",
        desc: "Slip-form paving of 22 km rigid concrete arterial roads, installing curb stones, LED lighting, and signage.",
      },
    ],
    faqs: [
      {
        q: "Why was reinforced concrete (RCC) chosen over asphalt for the SEZ roads?",
        a: "Rigid concrete pavements provide superior durability under turning heavy freight trailers and resist diesel/oil chemical spillage, providing a 40-year maintenance-free service life.",
      },
      {
        q: "How does the water supply network maintain pressure across 150 acres?",
        a: "We constructed a 2.5 Million gallon central reservoir system equipped with variable-frequency drive (VFD) booster pumps that maintain a constant 3.5 bar water pressure throughout the estate.",
      },
      {
        q: "Is the underground electrical network expandable for future industrial factories?",
        a: "Yes. The 11kV underground network utilizes modular Ring Main Units (RMUs) and spare conduit banks allowing future industrial tenants to connect without digging up paved roadways.",
      },
    ],
  },
  {
    id: "dha-phase-9-twin-towers",
    slug: "dha-phase-9-corporate-twin-towers",
    name: "DHA Phase-9 Corporate Twin High-Rise Towers",
    subtitle: "32-Storey Commercial Skyscraper with 4 Underground Basements & Post-Tensioned Slabs",
    eyebrow: "Grade-A Corporate Skyscraper & Iconic Urban Commercial Center",
    category: "Commercial High-Rises",
    tag: "Commercial High-Rise",
    location: "Main Commercial Boulevard, DHA Phase-9, Lahore, Punjab",
    status: "Under Construction – 32 Storeys",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "DHA Phase-9 Corporate Twin Towers is an iconic 32-storey commercial high-rise development featuring 4 levels of deep underground basement parking. Walton is executing the complete structural engineering and civil construction, utilizing 1,200mm diameter rotary bored piles down to 35 meters, post-tensioned beam-less floor plates for massive column-free offices, automated hydraulic climbing core formwork, and unitized double-glazed low-E curtain wall facades.",
    metrics: [
      { label: "Tower Height", value: "32 Storeys / 125m" },
      { label: "Bored Pile Depth", value: "35 Meters Deep" },
      { label: "Covered Floor Area", value: "650,000 Sq Ft" },
      { label: "Basement Parking", value: "1,200 Vehicles" },
    ],
    deliverables: [
      "1,200mm diameter rotary bored pile foundations down to 35 meters embedded into dense gravel strata",
      "Contiguous secant pile retaining walls and ground anchor tie-backs for safe 4-level deep basement excavation",
      "High-strength post-tensioned (PT) concrete floor plates creating open, column-free flexible commercial spaces",
      "Hydraulic self-climbing formwork casting dual central elevator and stair core shafts simultaneously",
      "High-performance double-glazed unitized curtain wall facade with argon gas thermal insulation",
      "Integrated MEP building management systems, high-speed destination-dispatch elevators, and central HVAC",
    ],
    technicalSpecs: [
      { key: "Client", value: "Premier Commercial Real Estate Development Group" },
      { key: "Structural System", value: "Dual concrete frame with central shear core and perimeter moment frames" },
      { key: "Seismic Design Code", value: "UBC-97 Seismic Zone 2B (Engineered with ductile seismic detailing)" },
      { key: "Concrete Specifications", value: "Self-consolidating concrete (SCC) 7,500 PSI for vertical shear walls" },
      { key: "Post-Tensioning System", value: "Mono-strand unbonded post-tensioned tendons (ASTM A416 Grade 270)" },
      { key: "Vertical Transportation", value: "12 high-speed gearless passenger elevators operating at 3.5 m/s" },
    ],
    pillars: [
      {
        title: "Column-Free Office Layouts",
        desc: "Post-tensioned slabs eliminate obstructive interior beams, delivering premium corporate office floors.",
        icon: Building2,
      },
      {
        title: "Secure 4-Level Basements",
        desc: "Secant piling and multi-layer waterproofing ensure zero water ingress and provide 1,200 parking spots.",
        icon: Compass,
      },
      {
        title: "High-Speed Climbing Forms",
        desc: "Automated hydraulic core formwork casts vertical shear walls efficiently on a 6-day floor cycle.",
        icon: Zap,
      },
      {
        title: "Seismic Wind Ductility",
        desc: "Dual-frame structural engineering withstands extreme wind buffetings and earthquake ground motions.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Secant Piling & Deep Excavation",
        desc: "Installing interlocking secant piles and excavating 16-meter deep basements under active dewatering.",
      },
      {
        step: "02",
        title: "Monolithic Foundation Raft Pour",
        desc: "Pouring 2.5m thick raft foundation using chilled concrete batching to eliminate thermal hydration cracks.",
      },
      {
        step: "03",
        title: "Hydraulic Core & PT Floor Construction",
        desc: "Hydraulic climbing formwork ascends the twin cores alongside post-tensioned floor slab casting.",
      },
      {
        step: "04",
        title: "Curtain Wall Glazing & Interior Fitout",
        desc: "Installing unitized low-E curtain wall panels, elevator banks, central BMS, and fire life safety systems.",
      },
    ],
    faqs: [
      {
        q: "What makes post-tensioned floor slabs ideal for commercial office towers?",
        a: "Post-tensioned slabs are thinner than conventional reinforced concrete slabs, reduce building dead weight by 20%, eliminate interior drop beams, and provide expansive 12-meter column-free spans for modern open-plan offices.",
      },
      {
        q: "How are the 4 basement parking levels kept waterproof?",
        a: "We deploy a multi-barrier waterproofing defense consisting of secant pile retaining walls, vulcanized PVC waterstops at all concrete construction joints, and continuous self-adhering HDPE tanking membranes.",
      },
      {
        q: "What is the expected completion date for the twin towers?",
        a: "The structural superstructure is progressing on schedule with topping-out planned ahead of the commercial delivery milestone.",
      },
    ],
  },
  {
    id: "islamabad-i15-flyover",
    slug: "islamabad-sector-i15-flyover-bridge",
    name: "Islamabad Sector I-15 Mega Flyover & Expressway Bridge",
    subtitle: "480-Meter Prestressed Concrete Bridge Span with Dual Carriageways & LED Lighting",
    eyebrow: "Civic Transportation Corridor, Prestressed Highway Flyovers & Bridges",
    category: "Highways & Bridges",
    tag: "Highway Flyover",
    location: "Kashmir Highway Extension, Sector I-15, Islamabad",
    status: "Completed & Operational",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton executed the complete civil engineering and bridge construction of the 480-meter Sector I-15 Mega Flyover on the Kashmir Highway Extension in Islamabad. Comprising 12 continuous spans of 40-meter precast prestressed concrete I-girders, heavy reinforced concrete hammerhead piers, elastomeric seismic bearings, and multi-lane Superpave asphalt concrete paving.",
    metrics: [
      { label: "Bridge Span Length", value: "480 Meters (12 Spans)" },
      { label: "Precast Girders Erected", value: "72 Girders (40m)" },
      { label: "Design Life", value: "100-Year Bridge Standard" },
      { label: "Axle Load Rating", value: "Class-A / AASHTO HS20" },
    ],
    deliverables: [
      "12 continuous 40-meter bridge spans utilizing high-strength precast prestressed concrete I-girders",
      "Reinforced concrete hammerhead piers and heavy bored pile foundations embedded in solid rock strata",
      "Dual 3-lane carriageway concrete bridge deck slabs with polymer expansion joints and waterproof membranes",
      "Mechanically Stabilized Earth (MSE) retaining wall approach ramps with decorative architectural panels",
      "Superpave polymer-modified asphalt paving, crash-tested New Jersey barriers, and LED architectural lighting",
      "Completed and opened to traffic on schedule, eliminating major urban traffic bottlenecks in Islamabad",
    ],
    technicalSpecs: [
      { key: "Client / Authority", value: "Capital Development Authority (CDA), Islamabad" },
      { key: "Design Standard", value: "AASHTO LRFD Bridge Design Specifications (100-Year Design Life)" },
      { key: "Girder Dimensions", value: "Precast post-tensioned I-Girders (2.0m depth, 40m length, 85 tons each)" },
      { key: "Bridge Bearings", value: "Heavy-duty elastomeric rubber bearings with PTFE sliding layers" },
      { key: "Expansion Joints", value: "Modular multi-cell elastomeric bridge expansion joints (Zero water leakage)" },
      { key: "Deck Drainage", value: "Stainless steel deck scuppers and continuous PVC downpipe discharge network" },
    ],
    pillars: [
      {
        title: "100-Year Structural Lifespan",
        desc: "High-density concrete, epoxy-coated rebar, and elastomeric bearings ensure enduring civic service.",
        icon: Award,
      },
      {
        title: "Off-Site Girder Precasting",
        desc: "All 72 girders were cast in a controlled off-site yard, guaranteeing concrete strength and fast erection.",
        icon: Building2,
      },
      {
        title: "Hydraulic Gantry Launching",
        desc: "Heavy launching gantries placed 85-ton girders across spans safely during night-time traffic windows.",
        icon: Truck,
      },
      {
        title: "Seismic Shock Absorption",
        desc: "Elastomeric pot bearings dissipate earthquake energy and accommodate extreme thermal expansion.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Rock Piling & Pier Casting",
        desc: "Drilling 1,500mm pile foundations into rock strata and casting reinforced concrete hammerhead piers.",
      },
      {
        step: "02",
        title: "Off-Site Girder Precasting",
        desc: "Casting 72 post-tensioned 40m I-girders in on-site precasting beds with high-early strength concrete.",
      },
      {
        step: "03",
        title: "Hydraulic Gantry Erection",
        desc: "Launching and seating 85-ton girders onto elastomeric bridge bearings across all 12 spans.",
      },
      {
        step: "04",
        title: "Deck Concreting & Asphalt Paving",
        desc: "Casting monolithic deck slab, applying waterproofing, paving Superpave asphalt, and testing lighting.",
      },
    ],
    faqs: [
      {
        q: "What is the weight and length of each bridge girder on the I-15 flyover?",
        a: "Each precast prestressed concrete I-girder measures 40 meters (131 feet) in length and weighs approximately 85 metric tons.",
      },
      {
        q: "How does the bridge handle thermal expansion during extreme summer heat?",
        a: "The bridge deck is fitted with modular multi-cell elastomeric expansion joints and PTFE sliding pot bearings that allow up to 150mm of longitudinal movement without stress buildup.",
      },
      {
        q: "Was the project completed on time?",
        a: "Yes. The flyover was completed and inaugurated on time, significantly easing commuter traffic between Rawalpindi and Islamabad.",
      },
    ],
  },
  {
    id: "port-qasim-logistics-hub",
    slug: "port-qasim-logistics-hub-cold-storage",
    name: "Port Qasim Multi-Modal Logistics Hub & Cold Storage",
    subtitle: "55-Meter Clear-Span Structural Steel PEB Warehouse with -20°C Cold Chain Facilities",
    eyebrow: "Multi-Modal Freight Hubs, Large-Span PEBs & Cold Storage Distribution",
    category: "Logistics & PEB",
    tag: "Logistics & PEB Hub",
    location: "Port Qasim Industrial Area, Karachi, Sindh",
    status: "Operational – 55m Clear Span",
    heroImage: "/walton_hero_construction.svg",
    overview:
      "Walton constructed the Port Qasim Multi-Modal Logistics Hub and Temperature-Controlled Cold Storage terminal in Karachi. Featuring 55-meter continuous clear-span pre-engineered structural steel portal frames, FM2 laser-screed superflat floor slabs, 150mm PIR insulated freezer panels (-20°C temperature rating), and 16 automated hydraulic dock loading bays for high-throughput container freight logistics.",
    metrics: [
      { label: "Clear Span Width", value: "55 Meters Column-Free" },
      { label: "Cold Storage Temp", value: "-20°C Multi-Zone" },
      { label: "Dock Loading Bays", value: "16 Hydraulic Docks" },
      { label: "Floor Tolerance", value: "FM2 Superflat Laser" },
    ],
    deliverables: [
      "55-meter column-free structural steel portal frames fabricated from high-yield ASTM A572 Grade-50 steel",
      "Heavy industrial laser-screed concrete floor slabs with dry-shake metallic quartz hardeners (FM2 superflat)",
      "High-density 150mm PIR insulated freezer sandwich panels maintaining -20°C temperatures with zero thermal bridging",
      "Under-slab electric heating grid beneath freezer rooms preventing subsoil moisture frost heave",
      "16 automated hydraulic dock levelers, inflatable dock seals, and heavy-duty sectional overhead doors",
      "Central ammonia/freon industrial refrigeration system, automated backup power, and digital temperature telemetry",
    ],
    technicalSpecs: [
      { key: "Client", value: "International Maritime & Cold-Chain Logistics Operator" },
      { key: "Structural Steel Standard", value: "AISC 360-16 / MBMA Large-Span Industrial PEB Standard" },
      { key: "Cold Storage Capacity", value: "12,000 Pallet positions in temperature-controlled racking (-20°C to +4°C)" },
      { key: "Floor Slab Load", value: "15 Ton/m² heavy container point loads with zero floor joint spalling" },
      { key: "Corrosion Protection", value: "Marine-grade C5-M epoxy coating system resisting coastal sea salt air" },
      { key: "Fire Protection", value: "ESFR ceiling-mounted sprinkler network with diesel fire pump backup" },
    ],
    pillars: [
      {
        title: "55m Column-Free Space",
        desc: "Provides total layout flexibility for high-density 12-meter pallet racking and automated sorting conveyors.",
        icon: Building2,
      },
      {
        title: "-20°C Cold Chain Integrity",
        desc: "PIR insulated panels and under-slab frost protection maintain sub-zero freezing with minimal energy loss.",
        icon: ShieldCheck,
      },
      {
        title: "FM2 Superflat Floors",
        desc: "Laser-screed superflat floors allow high-reach narrow aisle (VNA) forklifts to operate at peak speed.",
        icon: Compass,
      },
      {
        title: "Marine-Grade Steel Coating",
        desc: "Specialized C5-M protective coatings prevent coastal corrosion from Karachi's humid sea atmosphere.",
        icon: Wrench,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Marine Piling & Soil Improvement",
        desc: "Installing driven precast concrete piles and stone columns in soft coastal soils for heavy floor loads.",
      },
      {
        step: "02",
        title: "Frost-Protected Superflat Floor Pour",
        desc: "Installing under-slab heating grid and laser-screeding FM2 superflat floor slabs with metallic hardeners.",
      },
      {
        step: "03",
        title: "55m PEB Steel Erection",
        desc: "Heavy cranes hoist 55-meter tapered steel portal frames coated with marine-grade C5-M epoxy paint.",
      },
      {
        step: "04",
        title: "Cold Cladding & Dock Installation",
        desc: "Mounting 150mm PIR freezer panels, installing 16 hydraulic dock levelers, and commissioning refrigeration.",
      },
    ],
    faqs: [
      {
        q: "Why is under-slab heating necessary under freezer cold rooms?",
        a: "Sub-zero temperatures (-20°C) can freeze the groundwater beneath the concrete slab over time, creating ice lenses that expand and crack the building floor (frost heave). Our under-slab heating grid maintains a constant 4°C buffer, eliminating frost heave.",
      },
      {
        q: "How does the steel structure resist coastal corrosion at Port Qasim?",
        a: "All steel elements undergo centrifugal shot blasting to SA 2.5 followed by high-build zinc-rich epoxy primers and aliphatic polyurethane topcoats certified for ISO 12944 C5-M high-salinity marine environments.",
      },
      {
        q: "How many shipping containers can be loaded simultaneously at this facility?",
        a: "The facility features 16 automated hydraulic dock levelers allowing up to 16 forty-foot shipping containers to be loaded or unloaded simultaneously.",
      },
    ],
  },
];

export function getWaltonProjectBySlug(slug) {
  if (!slug) return null;
  return WALTON_PROJECTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  );
}
