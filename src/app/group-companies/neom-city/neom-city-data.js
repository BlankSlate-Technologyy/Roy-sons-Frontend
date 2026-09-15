// ─────────────────────────────────────────────────────────────
// NEOM CITY CORPORATION — COMPREHENSIVE DATA LAYER
// Location: src/app/group-companies/neom-city/neom-city-data.js
// ─────────────────────────────────────────────────────────────

export const COMPANY_INFO = {
  name: "Neom City Corporation",
  shortName: "Neom City",
  legalName: "Neom City Corporation (Pvt) Ltd.",
  parentGroup: "A Flagship Enterprise of ROYSONS Group",
  tagline: "Smart Cities & Urban Development",
  subtitle: "Pioneering Sustainable Metropolises, Intelligent Infrastructure & Next-Generation Urban Ecosystems",
  established: "2001",
  headquarters: "Roysons Corporate Complex, Sector G-5, Islamabad, Pakistan",
  regionalOffices: [
    { city: "Islamabad", label: "Corporate Master Development HQ", phone: "+92 (51) 844-3150" },
    { city: "Lahore", label: "Smart Urban Planning & Design Studio", phone: "+92 (42) 3578-9400" },
    { city: "Karachi", label: "Coastal & Maritime Concessions Desk", phone: "+92 (21) 3455-8950" },
    { city: "Riyadh (KSA)", label: "GCC Regional Urban Liaison Office", phone: "+966 11 482 9200" },
    { city: "Dubai (UAE)", label: "Smart Infrastructure Advisory Desk", phone: "+971 4 398 5300" },
  ],
  contacts: {
    generalEmail: "info@neomcity.roysons.org",
    investorEmail: "invest@neomcity.roysons.org",
    planningEmail: "masterplanning@neomcity.roysons.org",
    hotline: "+92 (51) 844-3150",
    ksaHotline: "+966 11 482 9200",
  },
  stats: {
    yearsOfExcellence: "25+",
    projectsDelivered: "150+",
    hectaresPlanned: "35,000+",
    developmentValue: "$14.5B+",
    smartGridConnectivity: "100%",
    leedStandard: "LEED Platinum",
  },
};

export const HERO_SLIDES = [
  {
    image: "/neomcity/hero_smart_city.jpg",
    tag: "Next-Generation Smart Metropolises",
    title: "Master Planning Sustainable Future Cities",
    desc: "Transforming raw landscapes into self-sustaining, net-zero carbon smart cities through advanced spatial GIS analytics, subterranean utility networks, and automated municipal digital twins.",
    statsBadge: "35,000+ Hectares Zoned",
    metricLabel: "Smart Megacity Concessions",
    href: "/group-companies/neom-city/solutions#smart-megacities",
  },
  {
    image: "/neomcity/hero_financial_district.jpg",
    tag: "High-Density Commercial & Financial Districts",
    title: "World-Class Grade-A Corporate Central Business Bays",
    desc: "Engineering high-density commercial towers, international banking headquarters, centralized 25,000 TR district cooling grids, and pedestrianized skywalks for regional commerce.",
    statsBadge: "50+ Corporate Towers",
    metricLabel: "Commercial CBD Centers",
    href: "/group-companies/neom-city/solutions#financial-districts",
  },
  {
    image: "/neomcity/hero_eco_residential.jpg",
    tag: "Zero-Carbon Sustainable Eco-Communities",
    title: "Intelligent Residential Enclaves & Green Urbanism",
    desc: "Master-planned residential neighborhoods integrating rooftop solar microgrids, autonomous waste pneumatic tubes, sponge city stormwater retention, and biometric community security.",
    statsBadge: "85,000+ Smart Homes",
    metricLabel: "Sustainable Housing Units",
    href: "/group-companies/neom-city/solutions#eco-communities",
  },
  {
    image: "/neomcity/hero_transit_infrastructure.jpg",
    tag: "Smart Transit & Autonomous Multi-Modal Mobility",
    title: "Zero-Emission High-Speed Transit & Micro-Mobility Corridors",
    desc: "Grade-separated mass transit networks, electric autonomous shuttle lines, smart traffic AI sensors, and integrated EV hyper-charging corridors designed for 15-minute city accessibility.",
    statsBadge: "350+ KM Smart Corridors",
    metricLabel: "Mobility Infrastructure",
    href: "/group-companies/neom-city/solutions#mobility",
  },
];

export const STATS = [
  { value: "25+", label: "Years of Urban\nDevelopment" },
  { value: "150+", label: "Smart Infrastructure\nProjects Delivered" },
  { value: "35,000+", label: "Hectares Master\nPlanned & Zoned" },
  { value: "$14.5B+", label: "Gross Development\nValue (GDV)" },
  { value: "100%", label: "LEED Platinum &\nSmart Grid Standard" },
];

export const DEVELOPMENT_CATEGORIES = [
  "All",
  "Smart Megacities",
  "Financial Districts",
  "Eco-Residential Enclaves",
  "High-Tech AI Innovation",
  "Industrial SEZs",
  "Clean Energy & Microgrids",
  "Smart Mobility & Transit",
];

export const MASTER_DEVELOPMENTS = [
  // ─── 1. SMART MEGACITIES ───
  {
    id: "nc-dev-01",
    name: "Neom Grand Smart Metropolis Concession",
    category: "Smart Megacities",
    location: "Capital Region Growth Corridor & M-2 Junction",
    totalArea: "5,200 Hectares (12,850 Acres)",
    investmentValue: "$4.8 Billion USD",
    status: "Active Construction – Phase 2 Civil Works",
    zoning: "Mixed-Use Comprehensive Smart Metropolis (Residential, Commercial, High-Tech, Civic)",
    capacity: "650,000 Residents & 220,000 Commercial Jobs",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "100% Subterranean Common Walkable Utility Corridors (water, fiber, power, waste)",
      "Sponge city stormwater retention reservoirs and zero-runoff bio-swales",
      "Unified Municipal AI Operations Center with IoT digital twin telemetry",
      "LEED for Cities & Communities Platinum Certified Masterplan",
    ],
    specs: {
      "Master Area": "5,200 Hectares (100% Master Planned)",
      "Grid Connection": "Dedicated 500kV High-Voltage Substation + 1.2 GW Solar Microgrid",
      "Transit Integration": "Integrated Mass Rapid Transit (MRT) + 45 KM BRT Bus Lines",
      "District Cooling": "Centralized 60,000 TR Automated Chiller Plants",
    },
    certifications: "LEED Platinum for Cities · Envision Gold · ISO 37120 Smart City",
  },
  {
    id: "nc-dev-02",
    name: "Neom South Eco-Metropolis Satellite City",
    category: "Smart Megacities",
    location: "Southern Coastal Belt & Ring Road Arterial",
    totalArea: "2,800 Hectares (6,920 Acres)",
    investmentValue: "$2.6 Billion USD",
    status: "Groundwork & Trunk Infrastructure Ready",
    zoning: "Sustainable Coastal Urban Habitat & Technology Innovation",
    capacity: "320,000 Residents",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "Seawater reverse osmosis desalination plant powered entirely by off-grid solar",
      "Smart micro-climate urban ventilation corridors cooling city center by 3.5°C",
      "Automated pneumatic solid waste collection conduits connected to recycling plants",
      "Car-free pedestrian zones with 5-minute access to essential civic amenities",
    ],
    specs: {
      "Master Area": "2,800 Hectares",
      "Desalination Capacity": "120,000 m³ / Day Potable Water Output",
      "Green Cover": "42% Dedicated Public Parks, Mangroves & Eco-Sanctuaries",
    },
    certifications: "BREEAM Communities Outstanding · LEED Gold",
  },

  // ─── 2. FINANCIAL DISTRICTS ───
  {
    id: "nc-dev-03",
    name: "Neom Financial Center & Central Business Bay",
    category: "Financial Districts",
    location: "CBD Central Avenue & Sovereign Banking Zone",
    totalArea: "450 Hectares (1,110 Acres)",
    investmentValue: "$3.4 Billion USD",
    status: "Active Execution – 18 Commercial High-Rise Towers",
    zoning: "Grade-A Commercial High-Density CBD (FAR up to 1:14)",
    capacity: "140,000 Professional Workforce & 35 Corporate Headquarters",
    image: "/neomcity/hero_financial_district.jpg",
    features: [
      "18 Landmark Skyscraper Towers up to G+55 floors with aerodynamic wind harvesters",
      "Underground multi-tier automated vehicular transit and 12,000-bay parking silos",
      "Grade-separated air-conditioned glass skywalks connecting all corporate towers",
      "Dedicated sovereign data centers with Tier-IV uptime and dual optical rings",
    ],
    specs: {
      "Built-Up Area": "4.2 Million Square Meters of Grade-A Commercial Space",
      "Cooling Infrastructure": "Centralized 35,000 TR District Cooling Network",
      "Telecom Density": "Direct Gigabit Fiber Mesh & Sovereign 5G Micro-Cells",
    },
    certifications: "WiredScore Platinum · LEED Platinum Core & Shell",
  },
  {
    id: "nc-dev-04",
    name: "Neom International Trade & Stock Exchange Square",
    category: "Financial Districts",
    location: "Capital Gateway & Diplomatic Financial Enclave",
    totalArea: "180 Hectares (445 Acres)",
    investmentValue: "$1.2 Billion USD",
    status: "Completed & Operational",
    zoning: "Commercial Banking, Securities & FinTech Tech Hub",
    capacity: "45,000 Financial Professionals",
    image: "/neomcity/hero_financial_district.jpg",
    features: [
      "Securities trading floor with ultra-low latency financial data connectivity",
      "Civic ceremonial plaza with dynamic programmable water choreography",
      "High-speed multi-lane drop-off concourses with automated license plate recognition",
      "LEED Gold certified corporate convention center for 5,000 delegates",
    ],
    specs: {
      "Tower Count": "8 Commercial High-Rise Buildings",
      "Auditorium Capacity": "5,000-Seat Plenary Convention Hall",
    },
    certifications: "LEED Gold · ISO 27001 Certified Security Perimeter",
  },

  // ─── 3. ECO-RESIDENTIAL ENCLAVES ───
  {
    id: "nc-dev-05",
    name: "Neom Horizon Sustainable Eco-Community",
    category: "Eco-Residential Enclaves",
    location: "Green Belt Valley Sector 4 & 5",
    totalArea: "920 Hectares (2,270 Acres)",
    investmentValue: "$1.9 Billion USD",
    status: "Active Delivery – 4,200 Luxury Smart Villas & Townhomes",
    zoning: "Low-to-Medium Density Eco-Residential (Smart Villas & Garden Apartments)",
    capacity: "55,000 Residents",
    image: "/neomcity/hero_eco_residential.jpg",
    features: [
      "Every residence equipped with bifacial rooftop solar PV and home battery storage",
      "Continuous 18-kilometer pedestrian and electric bicycle greenway network",
      "Smart greywater treatment recycling 100% of household water for landscape irrigation",
      "Biometric community security access and automated drone parcel delivery landing pads",
    ],
    specs: {
      "Residential Units": "4,200 Luxury Villas + 2,800 Garden View Condominiums",
      "Energy Autonomy": "85% Net Energy Self-Sufficiency Across Community",
      "Parks & Lakes": "14 Central Neighborhood Parks + 3 Artificial Eco-Lakes",
    },
    certifications: "LEED for Homes Platinum · WELL Community Standard",
  },
  {
    id: "nc-dev-06",
    name: "Neom Pine Valley Wellness Living Enclave",
    category: "Eco-Residential Enclaves",
    location: "Scenic Foothills & Nature Reserve Perimeter",
    totalArea: "640 Hectares (1,580 Acres)",
    investmentValue: "$980 Million USD",
    status: "Infrastructure Fully Installed · Open for Home Construction",
    zoning: "Ultra-Luxury Eco-Villas & Organic Agricultural Living",
    capacity: "18,000 Residents",
    image: "/neomcity/hero_eco_residential.jpg",
    features: [
      "Community organic permaculture farms and farm-to-table cooperative dining",
      "Geothermal earth cooling systems reducing residential HVAC loads by 45%",
      "Private wellness clubhouse, equestrian center, and Olympic sports pavilion",
      "Dark-Sky compliant lighting preserving celestial stargazing visibility",
    ],
    specs: {
      "Plot Density": "1 to 2 Acre Landscaped Forest Plots",
      "Nature Preserves": "60% Guaranteed Undisturbed Forestry Buffer",
    },
    certifications: "Living Community Challenge Petal Certified",
  },

  // ─── 4. HIGH-TECH AI INNOVATION ───
  {
    id: "nc-dev-07",
    name: "Neom Silicon Valley & Artificial Intelligence Campus",
    category: "High-Tech AI Innovation",
    location: "Innovation Corridor & Science City West",
    totalArea: "550 Hectares (1,360 Acres)",
    investmentValue: "$2.1 Billion USD",
    status: "Phase 1 Open · Phase 2 Cleanrooms Under Construction",
    zoning: "Research, Semiconductor Fabrication & Enterprise AI Development",
    capacity: "85,000 Engineers, Data Scientists & Researchers",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "Class 100 and Class 1000 certified cleanroom facilities for microelectronics",
      "High-performance supercomputing data center with liquid immersion cooling",
      "Dedicated incubator campuses, university research labs, and venture capital hubs",
      "Fully autonomous electric micro-transit fleet serving the entire campus",
    ],
    specs: {
      "Laboratory Space": "650,000 Square Meters of Advanced R&D Facilities",
      "Computing Capacity": "150 Petaflops Sovereign AI Computing Cluster",
    },
    certifications: "ISO 14644 Cleanroom Certified · LEED Platinum",
  },
  {
    id: "nc-dev-08",
    name: "Neom Life Sciences & Genomic Research City",
    category: "High-Tech AI Innovation",
    location: "Bio-Medical Innovation Zone 8",
    totalArea: "320 Hectares (790 Acres)",
    investmentValue: "$1.4 Billion USD",
    status: "Active Execution",
    zoning: "Biotechnology, Clinical Trials & Pharmaceutical Manufacturing",
    capacity: "35,000 Scientists & Medical Professionals",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "BSL-3 and BSL-4 certified clinical pathogen containment laboratories",
      "Robotic automated biological sample repository with cryogenic storage",
      "Direct helipad connectivity to regional tertiary medical complexes",
    ],
    specs: {
      "Cleanrooms": "45 Modular Biomanufacturing Suites",
      "Power Reliability": "Triple-Redundant Substation with N+2 Flywheel Backup",
    },
    certifications: "FDA & GMP Validated · WHO Bio-Risk Compliant",
  },

  // ─── 5. INDUSTRIAL SEZS ───
  {
    id: "nc-dev-09",
    name: "Neom Special Economic Zone (SEZ) & Logistics Dry Port",
    category: "Industrial SEZs",
    location: "National Freight Rail Corridor & CPEC Motorway Arterial",
    totalArea: "2,200 Hectares (5,430 Acres)",
    investmentValue: "$2.8 Billion USD",
    status: "Operational – 85 International Tenants Mobilized",
    zoning: "Special Economic Zone (Tax-Free Export Processing, Logistics, Manufacturing)",
    capacity: "120,000 Industrial Personnel & 450,000 Annual TEU Capacity",
    image: "/neomcity/card_industrial_sez.jpg",
    features: [
      "Automated railway container handling dry port with direct links to seaports",
      "Bonded customs clearance terminal with AI automated container scanning",
      "Solar rooftop arrays across 2 million square meters of warehousing space",
      "Heavy industrial grade utilities: 132kV dedicated substation & treated industrial water",
    ],
    specs: {
      "Warehouse Space": "2.5 Million Square Meters of High-Bay Storage",
      "Railway Siding": "6 Dedicated 1,200-Meter Intermodal Freight Tracks",
      "Tax Incentives": "10-Year Corporate Tax Exemption & 0% Duty on Capital Machinery",
    },
    certifications: "ISO 9001 · ISO 14001 · Authorized Economic Operator (AEO)",
  },
  {
    id: "nc-dev-10",
    name: "Neom Advanced Electric Mobility & Battery Gigafactory Park",
    category: "Industrial SEZs",
    location: "Automotive Technology Cluster Sector 12",
    totalArea: "750 Hectares (1,850 Acres)",
    investmentValue: "$1.6 Billion USD",
    status: "Under Construction",
    zoning: "Heavy Clean Manufacturing & Battery Chemical Assembly",
    capacity: "25,000 Specialized Technicians",
    image: "/neomcity/card_industrial_sez.jpg",
    features: [
      "Lithium-ion and solid-state battery cell manufacturing facility (35 GWh annual capacity)",
      "Zero-effluent discharge (ZLD) closed-loop water treatment recycling 98% water",
      "High-voltage test tracks for commercial electric trucks and autonomous buses",
    ],
    specs: {
      "Gigafactory Output": "35 GWh Annual Battery Storage Production",
      "Power Feed": "220kV High-Capacity Transmission Grid Line",
    },
    certifications: "LEED Platinum Manufacturing · ISO 50001 Energy Management",
  },

  // ─── 6. CLEAN ENERGY & MICROGRIDS ───
  {
    id: "nc-dev-11",
    name: "Neom 2.5 GW Solar Photovoltaic & Hydrogen Energy Hub",
    category: "Clean Energy & Microgrids",
    location: "Solar Plateau Sector & Desert Perimeter",
    totalArea: "4,000 Hectares (9,880 Acres)",
    investmentValue: "$2.2 Billion USD",
    status: "Phase 1 Operational (1.0 GW) · Phase 2 Under Expansion",
    zoning: "Utility-Scale Renewable Energy & Green Hydrogen Synthesis",
    capacity: "Powers 1.2 Million City Inhabitants Cleanly",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "Bifacial solar tracking panels generating continuous green energy with zero carbon",
      "4,000 MWh utility-scale containerized lithium-iron-phosphate battery storage",
      "Green hydrogen electrolysis synthesis plant producing 250 metric tons/day",
      "Smart digital SCADA automated load balancing with AI weather predictive algorithms",
    ],
    specs: {
      "Peak Generation": "2,500 Megawatts (2.5 GW) Clean Solar Electricity",
      "Battery Storage": "4,000 Megawatt-Hours (MWh) Peak Shifting Capacity",
      "Carbon Offset": "3.8 Million Metric Tons CO2 Avoided Annually",
    },
    certifications: "Gold Standard Renewable Energy · IREC Verified",
  },

  // ─── 7. SMART MOBILITY & TRANSIT ───
  {
    id: "nc-dev-12",
    name: "Neom Autonomous Mass Transit & Hyper-Mobility Corridor",
    category: "Smart Mobility & Transit",
    location: "Citywide Central Loop & Subterranean Arterials",
    totalArea: "350 Kilometers of Integrated Transit Corridors",
    investmentValue: "$1.7 Billion USD",
    status: "Phase 1 Lines A & B Operational",
    zoning: "Grade-Separated Public Transit & Automated Transportation",
    capacity: "850,000 Daily Passenger Journeys",
    image: "/neomcity/hero_transit_infrastructure.jpg",
    features: [
      "Elevated magnetic levitation automated train system operating at 3-minute headways",
      "Autonomous electric feeder buses connecting residential zones to main stations",
      "Universal smart transit card and biometric facial payment across all modes",
      "Integrated micro-mobility docks with 15,000 shared electric bikes and scooters",
    ],
    specs: {
      "Fleet Size": "120 Autonomous Rail Cars + 450 Electric Low-Floor Buses",
      "Station Count": "48 Grade-Separated Smart Multimodal Passenger Stations",
      "Accessibility": "100% Barrier-Free Universal Mobility Design",
    },
    certifications: "ISO 9001 Transit Operations · Zero Direct Emission",
  },
];

export const URBAN_SERVICES = [
  {
    id: "smart-city-planning",
    title: "Smart City Master Planning & GIS Spatial Zoning",
    desc: "Comprehensive master planning for megacities using GIS analytics, digital 3D spatial simulations, and climate-resilient zoning frameworks.",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "Parametric 3D urban massing and solar shadow path optimization",
      "Integrated 15-minute city spatial zoning and mixed-use density modeling",
      "Environmental impact assessments and flood hydrology simulation",
      "Comprehensive regulatory municipal building codes and design guidelines",
    ],
  },
  {
    id: "urban-infrastructure",
    title: "Civil Infrastructure & Subterranean Utility Corridors",
    desc: "Engineering heavy trunk infrastructure, common walkable utility tunnels, sponge stormwater retention, and deep foundation engineering.",
    image: "/neomcity/hero_transit_infrastructure.jpg",
    features: [
      "Multi-compartment walkable underground utility duct systems",
      "Sponge city stormwater lakes and automated subterranean drainage",
      "Seismic and geohazard mitigation for high-density foundations",
      "Turnkey EPC project execution with certified safety standards",
    ],
  },
  {
    id: "commercial-development",
    title: "Financial Districts & Grade-A Mixed-Use Towers",
    desc: "Developing high-density commercial centers, banking headquarters, corporate tech hubs, and centralized district cooling systems.",
    image: "/neomcity/hero_financial_district.jpg",
    features: [
      "Architectural engineering of high-rise commercial landmark skyscrapers",
      "Centralized district cooling networks reducing energy consumption by 40%",
      "Automated subterranean robotic parking silos and multi-tier drop-offs",
      "LEED Platinum Core & Shell sustainable engineering certification",
    ],
  },
  {
    id: "eco-residential",
    title: "Zero-Carbon Eco-Communities & Smart Housing",
    desc: "Master-planned residential neighborhoods integrating rooftop solar microgrids, autonomous waste vacuum networks, and smart home automation.",
    image: "/neomcity/hero_eco_residential.jpg",
    features: [
      "Bifacial solar rooftop arrays and community microgrid storage",
      "Pneumatic automated waste collection piping system",
      "Pedestrianized green linear parks and micro-mobility lanes",
      "Smart domestic greywater recycling for community landscaping",
    ],
  },
  {
    id: "industrial-zones",
    title: "Special Economic Zones (SEZs) & Logistics Dry Ports",
    desc: "Planning and building Special Economic Zones, automated logistics dry ports, and heavy manufacturing parks tailored for global trade.",
    image: "/neomcity/card_industrial_sez.jpg",
    features: [
      "Direct intermodal railway siding and container dry port terminals",
      "Bonded customs inspection facilities with automated AI scanners",
      "Heavy industrial utilities: 132kV power lines and gas connections",
      "Investor concession management and 10-year fiscal tax packages",
    ],
  },
  {
    id: "digital-city-solutions",
    title: "Digital Twin Municipal Analytics & AI Microgrids",
    desc: "Deploying high-speed city fiber rings, municipal IoT sensor arrays, integrated command centers, and net-zero solar microgrids.",
    image: "/neomcity/hero_smart_city.jpg",
    features: [
      "Real-time 3D digital twin visualization of municipal operations",
      "AI-optimized smart traffic signal management and adaptive routing",
      "IoT sensor mesh for water quality, air pollution, and energy loads",
      "Citywide municipal cybersecurity and sovereign cloud governance",
    ],
  },
];

export const SECTOR_SOLUTIONS = [
  {
    title: "Smart Megacity Concessions",
    tag: "Megacity Development",
    desc: "35,000+ Hectares master planning, subterranean utility corridors, sponge stormwater lakes, and unified municipal digital twin operations.",
    image: "/neomcity/hero_smart_city.jpg",
    metric: "35,000+ Hectares Zoned",
  },
  {
    title: "Financial Business Bays",
    tag: "Commercial CBD",
    desc: "High-density Grade-A corporate towers, 35,000 TR centralized district cooling, automated parking silos, and pedestrian skywalk networks.",
    image: "/neomcity/hero_financial_district.jpg",
    metric: "50+ Corporate Towers",
  },
  {
    title: "Sustainable Eco-Communities",
    tag: "Green Urbanism",
    desc: "Rooftop solar microgrids, sponge city water management, biometric community security, and 18 KM uninterrupted greenway parks.",
    image: "/neomcity/hero_eco_residential.jpg",
    metric: "85,000+ Smart Homes",
  },
  {
    title: "Autonomous Transit Corridors",
    tag: "Smart Mobility",
    desc: "Elevated magnetic transit lines, electric autonomous feeder bus routes, and integrated EV hyper-charging corridors.",
    image: "/neomcity/hero_transit_infrastructure.jpg",
    metric: "350+ KM Smart Corridors",
  },
  {
    title: "Special Economic Zones (SEZs)",
    tag: "Industrial Logistics",
    desc: "Automated container dry ports, bonded warehousing, heavy utility infrastructure, and favorable fiscal trade concessions.",
    image: "/neomcity/card_industrial_sez.jpg",
    metric: "2,200+ Hectares Industrial",
  },
  {
    title: "Clean Energy Microgrids",
    tag: "Renewable Power",
    desc: "2.5 GW utility-scale solar PV fields, 4,000 MWh battery storage banks, and green hydrogen synthesis facilities.",
    image: "/neomcity/hero_smart_city.jpg",
    metric: "2.5 GW Clean Energy",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Strategic Visioning & Feasibility Analysis",
    desc: "Evaluating geographic terrain, economic growth catalysts, demographic projections, climate resilience, and macro investment models.",
  },
  {
    num: "02",
    title: "GIS Master Planning & Spatial Zoning",
    desc: "Creating 3D digital parametric masterplans, land-use zoning (FAR), environmental hydrology corridors, and transport networks.",
  },
  {
    num: "03",
    title: "Trunk Civil Infrastructure & Utilities",
    desc: "Engineering subterranean walkable utility conduits, primary road grids, stormwater retention reservoirs, and high-voltage substations.",
  },
  {
    num: "04",
    title: "Developer Concessions & Land Allocation",
    desc: "Structuring public-private partnerships (PPP), auctioning zoned land parcels to commercial developers, and enforcing architectural codes.",
  },
  {
    num: "05",
    title: "Vertical Construction & District Systems",
    desc: "Building landmark commercial towers, residential clusters, centralized district cooling chiller plants, and mass transit stations.",
  },
  {
    num: "06",
    title: "Digital Twin Launch & City Governance",
    desc: "Commissioning citywide IoT sensor meshes, unified municipal command and control centers, and continuous smart city operations.",
  },
];

export const FAQS = [
  {
    q: "What is Neom City Corporation's role in smart city development?",
    a: "Neom City Corporation acts as a master concessionaire, urban planner, and infrastructure developer. We take raw greenfield or urban renewal sites and deliver full-cycle master planning, trunk civil engineering, subterranean utility tunnels, smart grid integration, and investor concession structuring.",
  },
  {
    q: "How does Neom City ensure sustainability and net-zero targets?",
    a: "Every master development is engineered under LEED for Cities Platinum guidelines. We mandate 100% subterranean common utility corridors, 15-minute city walkability, sponge city stormwater retention, centralized district cooling that cuts power draw by 40%, and clean renewable energy microgrids.",
  },
  {
    q: "Can private developers or multinational investors acquire plots in Neom City projects?",
    a: "Yes. We offer fully titled, infrastructure-ready land parcels across commercial, residential, high-tech, and industrial SEZ zones with certified FAR guidelines, utility hookups at the plot boundary, and guaranteed fiscal incentives in our Special Economic Zones.",
  },
  {
    q: "What is a 'Subterranean Common Utility Duct' and why is it essential?",
    a: "Unlike traditional cities where roads are repeatedly dug up for cable and pipe repairs, our smart cities feature walkable underground reinforced concrete utility tunnels. High-voltage electricity, district cooling pipes, potable water, treated greywater, and optical fiber all run through dedicated service bays with automated sensor monitoring.",
  },
  {
    q: "How do municipal authorities commission Neom City for urban planning?",
    a: "Municipalities and government development authorities can submit a formal Request for Proposal (RFP) or schedule an Urban Planning Consultation through our executive liaison desk. We provide comprehensive feasibility studies, GIS spatial zoning, and financial structuring models.",
  },
];
