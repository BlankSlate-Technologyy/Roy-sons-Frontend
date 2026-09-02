// Comprehensive Industries Dataset for National Mines Corporation (Pvt) Ltd
import {
  Building,
  Landmark,
  Factory,
  Building2,
  Zap,
  Layers,
  Globe,
  HardHat,
  TrendingUp,
  Mountain,
  FlaskConical,
  Truck,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const NATIONAL_MINES_INDUSTRIES = [
  {
    id: "construction",
    slug: "construction-aggregates",
    title: "Construction & Aggregates",
    eyebrow: "High-Strength Quarry Aggregates, Limestone & Granite",
    tag: "Construction & Civil",
    icon: Building,
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation supplies high-density limestone aggregates, granite sub-base, crushed sand, and heavy rip-rap boulders for commercial skyscrapers, residential mega-developments, and bridge structures. With high compressive strength and low flakiness indices, our quarry aggregates comply with ASTM C33 standards.",
    metrics: [
      { label: "Daily Output", value: "15,000+ Tons" },
      { label: "Compressive Load", value: "> 120 MPa" },
      { label: "Grading Curves", value: "ASTM C33 Spec" },
      { label: "Quarry Concessions", value: "8 Sites" },
    ],
    applications: [
      "High-performance concrete (HPC) coarse aggregate (10mm, 20mm, 40mm) with low alkali-silica reactivity",
      "Highway sub-base, water-bound macadam (WBM), and asphalt wearing course chips",
      "High-density granite and limestone rip-rap stone for flood protection embankments and retaining walls",
      "Manufactured sand (M-Sand) replacing depleted river sand for sustainable plaster and mortar",
      "Dedicated high-capacity volumetric truck loadout stations guaranteeing zero project downtime",
    ],
    technologies: [
      { key: "Quality Standard", value: "ASTM C33, BS 882 & National Highway Authority (NHA) certified" },
      { key: "Los Angeles Abrasion", value: "< 18% (Superior mechanical resistance)" },
      { key: "Flakiness Index", value: "< 12% (Cubical particle shape for optimum concrete workability)" },
      { key: "Alkali-Silica Reactivity", value: "Non-reactive certified petrographic testing" },
      { key: "Supply Logistics", value: "24/7 dedicated 40-ton tipper fleet & rail freight siding integration" },
    ],
    pillars: [
      {
        title: "Cubical Particle Shaping",
        desc: "Tertiary impact crushers produce cubical aggregate shapes that maximize concrete compressive strength.",
        icon: Factory,
      },
      {
        title: "Low Water Absorption",
        desc: "High-density limestone and granite aggregates minimize water demand in ready-mix concrete batches.",
        icon: Mountain,
      },
      {
        title: "Continuous Rail Sidings",
        desc: "Direct freight train connections dispatching 2,000 tons per train to regional metro centers.",
        icon: Truck,
      },
      {
        title: "Rigorous Sieve Assays",
        desc: "Automated laboratory sieving guarantees strict aggregate grading curves with zero dust contamination.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What aggregate sizes do you produce for construction?",
        a: "We produce 0–5mm manufactured sand, 10mm chips, 20mm aggregate, 40mm coarse base, and 100mm+ rip-rap stone.",
      },
      {
        q: "Do your aggregates meet National Highway Authority (NHA) standards?",
        a: "Yes. All our aggregate products are fully tested and certified for NHA highway, bridge, and airport runway specifications.",
      },
      {
        q: "Can you guarantee delivery for high-volume ready-mix concrete plants?",
        a: "Yes. We maintain multi-thousand-ton buffer stockpiles and dedicated transport fleets delivering round-the-clock.",
      },
    ],
  },
  {
    id: "infrastructure",
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    eyebrow: "Motorways, Dams, Airports & Deep-Sea Ports",
    tag: "Infrastructure & Heavy Civil",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation is the strategic raw resource supplier for national mega infrastructure projects including CPEC motorways, hydroelectric dams, airport runways, and deep-sea marine harbors. We deliver massive volumes of high-spec limestone base, ballast rock, granite armor stones, and specialized cement feedstocks.",
    metrics: [
      { label: "Megaprojects Supplied", value: "35+ Projects" },
      { label: "Armor Rock Weight", value: "Up to 8 Tons" },
      { label: "Railway Ballast", value: "AREMA Certified" },
      { label: "Delivery Speed", value: "24/7 Dispatch" },
    ],
    applications: [
      "Heavy coastal armor stone and breakwater core rocks for deep-sea port terminals and seawalls",
      "High-toughness railway ballast stone complying with AREMA and Pakistan Railways high-speed track standards",
      "Hydroelectric dam roller-compacted concrete (RCC) aggregate and massive spillway rockfill",
      "Motorway multi-lane asphalt concrete chips with high skid resistance and polished stone value (PSV)",
      "Airport runway subgrade stabilization limestone and high-durability aircraft apron materials",
    ],
    technologies: [
      { key: "Railway Ballast Standard", value: "AREMA / Pakistan Railways Class-1 specification (Quartzite/Granite)" },
      { key: "Armor Stone Density", value: "Min 2.65 g/cm³ with zero spalling in marine saltwater environments" },
      { key: "Polished Stone Value (PSV)", value: "> 55 (High anti-skid friction for wet highway braking)" },
      { key: "Crushing Capacity", value: "Mobile on-site crushing trains capable of 800 tons/hour deployment" },
      { key: "Logistics Fleet", value: "Multi-axle heavy transport trailers & dedicated rail freight wagons" },
    ],
    pillars: [
      {
        title: "Breakwater Armor Stone",
        desc: "Massive 3 to 8-ton granite and hard limestone blocks engineered to dissipate high oceanic wave energy.",
        icon: Mountain,
      },
      {
        title: "High-Speed Rail Ballast",
        desc: "Angled, durable ballast stone that locks track ties securely under heavy locomotive axle loads.",
        icon: Layers,
      },
      {
        title: "Motorway Asphalt Chips",
        desc: "High PSV aggregate ensuring maximum tire grip and reduced wet-weather hydroplaning on motorways.",
        icon: HardHat,
      },
      {
        title: "Mobile On-Site Crushing",
        desc: "Deploying self-powered crushing plants directly along remote pipeline and dam construction alignments.",
        icon: Factory,
      },
    ],
    faqs: [
      {
        q: "What types of rock do you supply for marine harbor breakwaters?",
        a: "We supply massive granite and dense limestone armor stones (1-ton to 8-ton boulders) resistant to saltwater abrasion and wave impact.",
      },
      {
        q: "Can you set up on-site crushing operations for remote dam or highway projects?",
        a: "Yes. We have mobile tracked crushing and screening units capable of processing up to 800 metric tons per hour directly at your project location.",
      },
      {
        q: "Do your railway ballast materials meet international railway standards?",
        a: "Yes. Our ballast rock is laboratory certified for impact value, abrasion resistance, and flakiness under AREMA and BS standards.",
      },
    ],
  },
  {
    id: "steel",
    slug: "steel-alloys-manufacturing",
    title: "Steel & Alloys Manufacturing",
    eyebrow: "Iron Ore, Metallurgical Chromite & Flux Stones",
    tag: "Metallurgy & Steel",
    icon: Factory,
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation delivers essential metallic feeds and chemical fluxes to integrated steel mills, induction furnaces, and ferroalloy smelters. We supply high-grade magnetite/hematite iron ore (62%–65% Fe), metallurgical chromite (Cr2O3 46%–48%, Cr:Fe 3:1), high-calcium limestone flux, and low-silica dolomite.",
    metrics: [
      { label: "Iron Ore Supply", value: "62% – 65% Fe" },
      { label: "Chromite Cr:Fe", value: "3.0 : 1 Ratio" },
      { label: "Flux Stone Grade", value: "> 53% CaO" },
      { label: "Furnace Efficiency", value: "High Yield" },
    ],
    applications: [
      "Direct charging lump iron ore (10mm–40mm) for blast furnaces and sponge iron DRI plants",
      "High Cr:Fe ratio lumpy chromite ore for high-carbon ferrochrome smelting and stainless steel alloying",
      "High-reactivity metallurgical limestone and dolomite flux for basic oxygen furnace (BOF) desulfurization",
      "Silica and quartz pebbles for ferrosilicon production and electrical resistance furnaces",
      "Consistent chemical grade batches minimizing slag volume and electrical melting costs",
    ],
    technologies: [
      { key: "Iron Ore Chemical Spec", value: "Fe 62%–65%, SiO2 < 4.5%, Al2O3 < 2.0%, P < 0.045%, S < 0.04%" },
      { key: "Chromite Alloy Spec", value: "Cr2O3 46%–48%, Cr:Fe 3.0:1 to 3.2:1, Hard dense lumpy ore" },
      { key: "Flux Reactivity", value: "Fast dissolution rate with > 95% CaCO3 and ultra-low silica" },
      { key: "Inspection Standard", value: "XRF spectrometer batch certification + physical shatter test verification" },
      { key: "Delivery Cadence", value: "Scheduled continuous trainloads and tipper convoys directly to mill hoppers" },
    ],
    pillars: [
      {
        title: "High Fe Metal Yield",
        desc: "62%–65% Fe ore maximizes hot metal production while reducing energy consumption per ton of steel.",
        icon: Zap,
      },
      {
        title: "Premium Ferrochrome Feed",
        desc: "3:1 Cr:Fe ratio chromite yields superior grade ferrochrome for domestic and export stainless steel makers.",
        icon: Award,
      },
      {
        title: "Rapid Slag Fluxing",
        desc: "Pure limestone and dolomite flux stones strip sulfur and phosphorus cleanly from molten steel baths.",
        icon: FlaskConical,
      },
      {
        title: "Guaranteed Grade Uniformity",
        desc: "Strict quality control ensures zero grade fluctuations that could disrupt continuous furnace operations.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What iron ore specifications do you supply for steel manufacturing?",
        a: "We supply 62% to 65% Fe calibrated lumps (10–40mm) with low silica (<4.5%) and ultra-low phosphorus for blast furnaces and DRI sponge iron plants.",
      },
      {
        q: "Is your chromite suitable for stainless steel ferroalloy production?",
        a: "Yes. Our chromite features 46%–48% Cr2O3 with a 3.0:1 Cr:Fe ratio, making it the premier global benchmark for ferrochrome production.",
      },
      {
        q: "Do you supply limestone and dolomite flux stone for steel furnaces?",
        a: "Yes. We supply washed, high-calcium metallurgical limestone (30–80mm) and low-silica dolomite for slag removal and desulfurization.",
      },
    ],
  },
  {
    id: "cement",
    slug: "cement-building-materials",
    title: "Cement & Building Materials",
    eyebrow: "Limestone, Gypsum, Clay & Pozzolanic Shales",
    tag: "Cement & Clinker",
    icon: Building2,
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation is the core raw material backbone for leading cement manufacturing plants across Pakistan. We supply millions of tons of pure limestone (CaCO3 > 94.5%), natural crystalline gypsum (CaSO4·2H2O > 92%), silica clay, and iron corrective additives under long-term continuous supply contracts.",
    metrics: [
      { label: "Limestone Supplied", value: "2M+ Tons / Yr" },
      { label: "Gypsum Retarder", value: "> 92% Purity" },
      { label: "Cement Plants Fed", value: "18 Plants" },
      { label: "Supply Reliability", value: "99.9% Uptime" },
    ],
    applications: [
      "Primary raw clinker limestone feed with consistent calcium oxide (CaO) and low magnesium (MgO < 1.8%)",
      "High-dihydrate natural rock gypsum for final cement mill grinding to control hydration and setting time",
      "High-silica shale and clay additives for optimal clinker lime saturation factor (LSF) balance",
      "Iron ore corrective additives ensuring correct alumina-to-iron (A/F) burnability modulus in kilns",
      "Captive quarry management and contract open-pit extraction for mega cement manufacturing groups",
    ],
    technologies: [
      { key: "Limestone Chemical Standard", value: "CaCO3 > 94.5%, CaO 53%–54.5%, MgO < 1.8%, Alkalis (Na2O+K2O) < 0.4%" },
      { key: "Gypsum Standard", value: "CaSO4·2H2O > 92%, SO3 42.5%–44%, Moisture < 2%, Chlorides < 0.015%" },
      { key: "Clinker Ratio Compliance", value: "Ensures perfect LSF, SM (Silica Modulus), and AM (Alumina Modulus) in kiln feed" },
      { key: "Quarry Fleet Capacity", value: "50+ heavy dumpers and multi-bench surface drill rigs operating 24/7" },
      { key: "Contract Model", value: "Long-term volume off-take agreements with price stability formulas" },
    ],
    pillars: [
      {
        title: "High Kiln Thermal Efficiency",
        desc: "Uniform low-silica limestone calcines easily, reducing fuel consumption in preheater tower kilns.",
        icon: Zap,
      },
      {
        title: "Accurate Setting Retardation",
        desc: "92%+ pure gypsum delivers precise initial and final setting times for Portland cement compliance.",
        icon: FlaskConical,
      },
      {
        title: "Low Alkali Impurities",
        desc: "Strictly controlled alkalis prevent alkali-silica reaction (ASR) degradation in finished concrete structures.",
        icon: ShieldCheck,
      },
      {
        title: "Massive Continuous Supply",
        desc: "Dedicated logistics pipelines feeding thousands of tons daily directly into cement factory silos.",
        icon: Truck,
      },
    ],
    faqs: [
      {
        q: "How much limestone can National Mines supply to a cement plant monthly?",
        a: "We can supply from 50,000 to over 200,000 metric tons of clinker-grade limestone per month under structured supply agreements.",
      },
      {
        q: "What is the purity of the gypsum you supply for cement grinding?",
        a: "Our natural gypsum tests above 92% to 95.5% CaSO4·2H2O dihydrate purity with low chloride content (<0.015%).",
      },
      {
        q: "Do you supply corrective materials like iron ore and silica clay for kiln feed?",
        a: "Yes. We supply calibrated iron ore fines and silica-rich shale to balance the chemical modulus of cement kiln feeds.",
      },
    ],
  },
  {
    id: "energy",
    slug: "energy-power-generation",
    title: "Energy & Captive Power Generation",
    eyebrow: "Thermal Steam Coal & Industrial Energy Feedstocks",
    tag: "Energy & Power",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation supplies high-calorific thermal steam coal, washed bituminous coal, and anthracite energy minerals for captive industrial power plants, textile mills, paper manufacturers, and chemical processing facilities. Our coal delivers high energy density (6,200+ kcal/kg), low moisture, and reliable combustion characteristics.",
    metrics: [
      { label: "Calorific Output", value: "6,200+ kcal/kg" },
      { label: "Fixed Carbon", value: "52% – 58%" },
      { label: "Total Moisture", value: "< 7.5%" },
      { label: "Power Plants Fed", value: "25+ Captive Units" },
    ],
    applications: [
      "Circulating Fluidized Bed (CFB) and pulverized coal (PC) boiler feedstocks for industrial power plants",
      "High-temperature combustion coal for brick kilns, lime calcination shafts, and metallurgy furnaces",
      "Low-moisture steam coal for captive power generation in textile and chemical manufacturing complexes",
      "Custom coal blending combining domestic high-reactivity coal with imported steam coal",
      "Strategic stockpile management ensuring continuous uninterrupted power generation through all seasons",
    ],
    technologies: [
      { key: "Gross Calorific Value", value: "6,200 to 6,800 kcal/kg (Air-Dried Basis)" },
      { key: "Fixed Carbon / Volatile Ratio", value: "Optimized 1.4:1 ratio for stable flame propagation" },
      { key: "Ash Fusion Temperature", value: "> 1,250 °C (Prevents boiler tube slagging and clinkering)" },
      { key: "Moisture Control", value: "5.5% – 7.5% total moisture with covered storage management" },
      { key: "Delivery Mode", value: "Direct tipper trailer convoys & railway bulk hoppers" },
    ],
    pillars: [
      {
        title: "Maximum GCV Value",
        desc: "6,200+ kcal/kg coal generates more steam per ton, reducing overall fuel procurement costs.",
        icon: Zap,
      },
      {
        title: "High Ash Fusion Point",
        desc: "High melting temperature of coal ash prevents slagging and boiler tube fouling during long runs.",
        icon: Factory,
      },
      {
        title: "Uniform Sizing",
        desc: "Precise 10–25mm and 25–75mm screening ensures smooth feed into automatic boiler conveyors.",
        icon: Layers,
      },
      {
        title: "Reliable Stockpiling",
        desc: "Massive strategic storage yards ensure zero power interruptions during peak winter demand.",
        icon: Truck,
      },
    ],
    faqs: [
      {
        q: "Is your coal suitable for captive industrial power boilers?",
        a: "Yes. Our coal is specifically washed and graded for Circulating Fluidized Bed (CFB) and stoker-fired industrial steam boilers.",
      },
      {
        q: "What is the Gross Calorific Value (GCV) of your power coal?",
        a: "Our thermal coal ranges between 6,200 kcal/kg and 6,800 kcal/kg GCV with fixed carbon between 52% and 58%.",
      },
      {
        q: "Can you provide custom blended coal to reduce fuel costs?",
        a: "Yes. We operate mechanical coal blending plants that blend high-GCV domestic coal with cost-effective options to meet your exact boiler parameters.",
      },
    ],
  },
  {
    id: "chemicals",
    slug: "industrial-chemicals-foundry",
    title: "Industrial Chemicals & Foundry",
    eyebrow: "Silica Sand, High-Purity Calcium, Gypsum & Binders",
    tag: "Chemicals & Foundry",
    icon: Layers,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation supplies high-purity industrial minerals for chemical synthesis, glass manufacturing, metal foundry casting, paints, and polymer plastics. Our washed silica sand (SiO2 > 99.2%, Fe2O3 < 0.025%), micronized calcium carbonate, and high-purity gypsum meet strict international industrial chemical specifications.",
    metrics: [
      { label: "Silica Purity", value: "> 99.2% SiO2" },
      { label: "Iron Content", value: "< 0.025% Fe2O3" },
      { label: "Foundry Refractoriness", value: "> 1,650 °C" },
      { label: "Chemical Grade", value: "Ultra-Pure" },
    ],
    applications: [
      "Ultra-clear solar glass and container bottle manufacturing with ultra-low iron silica sand",
      "Foundry mold and core casting sand (AFS 45–55) for automotive engine blocks, pumps, and valves",
      "Sodium silicate, silicone resin, and industrial chemical synthesis raw materials",
      "Precipitated and ground calcium carbonate (GCC) for paints, plastics, paper, and adhesives",
      "Chemical-grade gypsum for ammonium sulfate fertilizer and industrial plaster production",
    ],
    technologies: [
      { key: "Silica Chemical Standard", value: "SiO2 > 99.2%, Fe2O3 < 0.025%, Al2O3 < 0.35%, Low LOI" },
      { key: "Foundry Sand Sintering Point", value: "> 1,650 °C with high permeability and mold stability" },
      { key: "Micronized GCC Particle Size", value: "Fine D50 down to 2.5 microns with 95+ brightness index" },
      { key: "Packaging Standard", value: "50kg multi-wall moisture-proof bags & 1.5-ton jumbo export bags" },
      { key: "Testing Protocol", value: "XRF spectrometry, laser diffraction particle sizing & LOI chemical assays" },
    ],
    pillars: [
      {
        title: "Ultra-Low Iron Glass Sand",
        desc: "Low iron oxide (<0.025%) maximizes optical clarity in solar photovoltaic and high-transmission float glass.",
        icon: FlaskConical,
      },
      {
        title: "High-Permeability Foundry Sand",
        desc: "Calibrated sub-angular quartz grains ensure smooth gas venting and perfect surface finish on metal castings.",
        icon: Factory,
      },
      {
        title: "High-Brightness Fillers",
        desc: "Pure white calcium carbonate enhances opacity, whiteness, and structural strength in polymer compounds.",
        icon: Sparkles,
      },
      {
        title: "Moisture-Proof Packaging",
        desc: "Dry fluid-bed processing and sealed poly-lined jumbo bags guarantee zero moisture absorption.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What is the purity of your glass-grade silica sand?",
        a: "Our washed silica sand tests above 99.2% to 99.6% SiO2 with iron oxide (Fe2O3) strictly controlled below 0.025% (down to 0.018%).",
      },
      {
        q: "Do you supply AFS graded foundry sand for automotive casting?",
        a: "Yes. We supply sub-angular foundry sand calibrated to AFS 45–55 with high thermal refractoriness (>1,650°C).",
      },
      {
        q: "Can you supply micronized calcium carbonate for paint and plastics?",
        a: "Yes. We supply ground calcium carbonate (GCC) in fine particle sizes (200-mesh to 1,200-mesh) with high whiteness.",
      },
    ],
  },
  {
    id: "exports",
    slug: "international-bulk-exports",
    title: "International Bulk Export Markets",
    eyebrow: "Seaborne Commodity Shipments & Bulk Vessel Charters",
    tag: "Global Trade & Exports",
    icon: Globe,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation operates an international commodity trading and bulk export division. Exporting copper concentrate, high-grade chromite ore, marble/onyx blocks, and industrial minerals to trading partners in China, East Asia, the Middle East, and Europe through deep-sea bulk vessel charters and containerized sea freight from Gwadar and Karachi ports.",
    metrics: [
      { label: "Export Destinations", value: "25+ Countries" },
      { label: "Annual Seaborne", value: "300,000+ Tons" },
      { label: "Surveyor Assays", value: "SGS Certified" },
      { label: "Ports of Loading", value: "Gwadar & Karachi" },
    ],
    applications: [
      "Bulk vessel chartering and ocean freight for mineral concentrates and crushed metallurgical ores",
      "Containerized heavy freight (20ft heavy-duty containers) for chromite, marble slabs, and silica sand",
      "Independent third-party inspection, draft survey, and quality certificates (SGS / Bureau Veritas / Intertek)",
      "Structured trade finance: Letters of Credit (L/C at sight), CAD, and forward off-take contracts",
      "Customs clearing, bonded warehousing, and export terminal stevedoring management",
    ],
    technologies: [
      { key: "Incoterms Supported", value: "FOB Gwadar / Karachi, CFR, CIF Global Destination Ports" },
      { key: "Container Stuffing Standard", value: "Moisture-barrier lining, heavy timber shoring, ISO customs seals" },
      { key: "Vessel Charter Capacity", value: "Handysize & Supramax bulk vessel charters (25,000 to 55,000 DWT)" },
      { key: "Quality Assays", value: "Double-checked port-of-loading sampling by accredited international inspection agencies" },
      { key: "Documentation Compliance", value: "Certificate of Origin, Form-E, Bill of Lading, Full Assay Certification" },
    ],
    pillars: [
      {
        title: "Deep-Sea Port Logistics",
        desc: "Strategic proximity to Gwadar and Karachi ports ensures rapid ship loading and low ocean freight transit times.",
        icon: Globe,
      },
      {
        title: "Independent SGS Certification",
        desc: "Every export container and bulk hold is certified by third-party surveyors for weight, moisture, and chemical grade.",
        icon: Award,
      },
      {
        title: "Structured Trade Finance",
        desc: "Accepting standard international Letters of Credit (L/C) and flexible multi-shipment supply frameworks.",
        icon: Layers,
      },
      {
        title: "Heavy Cargo Shoring",
        desc: "Export containers and bulk vessels undergo specialized shoring to prevent cargo shift during ocean voyages.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What international Incoterms do you offer for mineral exports?",
        a: "We offer FOB Karachi/Gwadar, CFR, and CIF to major worldwide ports in China, East Asia, the Middle East, and Europe.",
      },
      {
        q: "How do you verify chemical grade and weight for international shipments?",
        a: "All export shipments are inspected, sampled, and certified by independent international inspection companies such as SGS or Bureau Veritas.",
      },
      {
        q: "What payment terms are accepted for export contracts?",
        a: "We accept 100% Irrevocable Documentary Letters of Credit (L/C at sight) and flexible milestone payments for approved corporate buyers.",
      },
    ],
  },
  {
    id: "government",
    slug: "government-strategic-projects",
    title: "Government Strategic Projects",
    eyebrow: "Sovereign Mineral Reserves & National Strategic Reserves",
    tag: "Government & Sovereign",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation partners with federal and provincial governments on national resource development, strategic mineral reserves, geological surveys, and public infrastructure supply. We operate under full regulatory compliance, ethical environmental standards, and transparent royalty frameworks to maximize sovereign resource value.",
    metrics: [
      { label: "Govt Concessions", value: "50+ Leases" },
      { label: "Regulatory Compliance", value: "100% Certified" },
      { label: "Community Jobs", value: "5,000+ Local" },
      { label: "ESG Standard", value: "National Benchmark" },
    ],
    applications: [
      "Strategic mineral reserve management and sovereign bullion supply to national central banks",
      "Public infrastructure raw material supply for national highways, railway networks, and energy dams",
      "Collaborative geological mapping and mineral exploration with Geological Survey of Pakistan (GSP)",
      "Local community development, water filtration plants, schools, and healthcare in mining districts",
      "Transparent royalty and tax remittance supporting national and provincial economic development",
    ],
    technologies: [
      { key: "Licensing Framework", value: "Fully compliant with Mines & Minerals Act and provincial regulatory rules" },
      { key: "Resource Reporting", value: "JORC / NI 43-101 aligned geological resource estimation and bankable feasibility" },
      { key: "Environmental Clearance", value: "EPA Environmental Impact Assessment (EIA) certified on all concessions" },
      { key: "Community Investment", value: "Mandatory corporate social responsibility (CSR) community development programs" },
      { key: "Safety Record", value: "Zero-harm safety policies with full Mines Inspectorate compliance" },
    ],
    pillars: [
      {
        title: "Sovereign Value Creation",
        desc: "Transforming raw underground resources into domestic wealth, industrial raw materials, and export revenue.",
        icon: Landmark,
      },
      {
        title: "Strict Mining Governance",
        desc: "100% adherence to mineral concessions laws, environmental guidelines, and worker safety mandates.",
        icon: ShieldCheck,
      },
      {
        title: "Local Community Uplift",
        desc: "Building clean water schemes, schools, vocational training, and healthcare clinics in mining districts.",
        icon: Mountain,
      },
      {
        title: "National Self-Reliance",
        desc: "Replacing expensive mineral imports with high-grade domestically extracted and refined commodities.",
        icon: Award,
      },
    ],
    faqs: [
      {
        q: "Are your mining concessions fully licensed by the government?",
        a: "Yes. All National Mines exploration licenses, mining leases, and processing concessions are fully certified by Provincial Mines & Minerals Departments.",
      },
      {
        q: "What social and community development programs do you run in mining areas?",
        a: "We invest heavily in local clean drinking water plants, medical dispensaries, schools, road infrastructure, and local workforce technical training.",
      },
      {
        q: "How do you ensure environmental sustainability in government projects?",
        a: "We practice simultaneous bench revegetation, closed-loop 92% water recycling, and dry-stack tailings management compliant with EPA regulations.",
      },
    ],
  },
  {
    id: "metallurgy",
    slug: "heavy-machinery-metallurgy",
    title: "Heavy Machinery & Metallurgy",
    eyebrow: "Refractory Linings, Ferroalloys & Precision Casting",
    tag: "Heavy Industry & Metallurgy",
    icon: HardHat,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation supplies specialized refractory minerals, metallurgical ores, and heavy casting materials for heavy machinery manufacturers, automotive foundry complexes, and defense engineering plants. From high-grade chromite refractory bricks to washed quartz casting sand and high-carbon ferroalloys, we ensure superior thermal and structural resilience.",
    metrics: [
      { label: "Thermal Stability", value: "> 1,900 °C" },
      { label: "Hardness Index", value: "Mohs 7.0" },
      { label: "Foundry Accuracy", value: "Ultra Precision" },
      { label: "Machinery Plants", value: "30+ Supported" },
    ],
    applications: [
      "Refractory furnace lining chromite and magnesite bricks for high-temperature smelting furnaces",
      "Precision sub-angular foundry casting silica sand for heavy engine blocks, pumps, and gearboxes",
      "Ferroalloy and metallic additive supplies for high-tensile steel, ductile iron, and special alloy castings",
      "Heavy ballast counterweights for mobile cranes, harbor ship loaders, and excavator stabilizers",
      "Thermal insulation minerals protecting heavy equipment and casting ladles from molten metal erosion",
    ],
    technologies: [
      { key: "Refractory Melting Point", value: "> 1,900 °C without deformation under high chemical slag attack" },
      { key: "Foundry Sand Sintering Point", value: "> 1,650 °C with low thermal expansion coefficient" },
      { key: "Heavy Aggregate Density", value: "High-density magnetite and iron aggregate for crane counterweights" },
      { key: "Quality Testing", value: "Pyrometric Cone Equivalent (PCE) testing and high-temperature XRF analysis" },
      { key: "Supply Delivery", value: "Direct palletized bulk container delivery to industrial foundry bays" },
    ],
    pillars: [
      {
        title: "Extreme Thermal Endurance",
        desc: "Refractory chromite withstands intense molten metal erosion inside smelting ladles and arc furnaces.",
        icon: Zap,
      },
      {
        title: "Precision Foundry Molds",
        desc: "High-permeability quartz sand delivers smooth surface finishes on complex engine and pump castings.",
        icon: Factory,
      },
      {
        title: "Heavy Density Counterweights",
        desc: "High-specific-gravity magnetite aggregates engineered for heavy machinery ballast blocks.",
        icon: HardHat,
      },
      {
        title: "Strict Chemical Purity",
        desc: "Low sulfur and phosphorus prevent porosity, inclusions, and cracks in heavy structural castings.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What refractory materials do you provide for furnace linings?",
        a: "We supply refractory-grade chromite ore, high-purity magnesite, and silica stone capable of withstanding operating temperatures above 1,900°C.",
      },
      {
        q: "Do you supply heavy density minerals for crane counterweights?",
        a: "Yes. We supply high-density magnetite iron ore and heavy aggregates specifically for mixing high-density concrete counterweights in cranes and earthmovers.",
      },
      {
        q: "Can you supply foundry sand for casting automotive engine parts?",
        a: "Yes. We provide washed, calibrated silica sand (AFS 45–55) with low clay content (<0.2%) for grey iron and ductile iron automotive castings.",
      },
    ],
  },
  {
    id: "gemology",
    slug: "gemological-precious-metals",
    title: "Gemological & Precious Metals",
    eyebrow: "Bullion Refining, Rare Gemstones & Luxury Architectural Stones",
    tag: "Luxury & Precious Metals",
    icon: TrendingUp,
    heroImage: "/mine gold.png",
    overview:
      "National Mines Corporation extracts and refines certified gold bullion, precious gemstones, and world-class architectural dimension stones (Translucent Green Onyx, Black & Gold Marble). Combining artisanal stone selection with certified laboratory assay testing, we supply the international jewelry trade, sovereign bullion markets, and ultra-luxury architectural developers.",
    metrics: [
      { label: "Gold Assay", value: "99.4% – 99.9%" },
      { label: "Gemstone Quality", value: "Natural Unheated" },
      { label: "Onyx Translucency", value: "Grade-A Jade" },
      { label: "Global Clients", value: "Bullion & Luxury" },
    ],
    applications: [
      "Certified 99.4%–99.9% gold bullion doré bars for sovereign reserves, jewelry fabrication, and investment",
      "Translucent Green Onyx and Dark Onyx for backlit luxury hotel feature walls and presidential suites",
      "Rare natural gemstone specimens (Aquamarine, Peridot, Tourmaline, Emerald) from northern mineral belts",
      "High-polish dimension stone blocks and slabs with unique gold, black, and green natural crystal veining",
      "Secure armored vaulting, individualized bullion certificates, and insured worldwide delivery",
    ],
    technologies: [
      { key: "Bullion Refining", value: "High-frequency induction melting & fire assay laboratory purity certification" },
      { key: "Stone Cutting Tech", value: "Diamond wire saw zero-shock extraction preserving crystal translucency" },
      { key: "Gemstone Grading", value: "GIA-aligned grading for color, clarity, carat weight, and natural origin" },
      { key: "Packaging Security", value: "Tamper-evident holographic bullion seals and insured vault transport" },
      { key: "Traceability", value: "100% mine-to-market ethical chain of custody certification" },
    ],
    pillars: [
      {
        title: "Certified Bullion Refining",
        desc: "Accredited laboratory fire assay and spectrometer testing verify 99.4%+ gold purity.",
        icon: Award,
      },
      {
        title: "Translucent Jade Green Onyx",
        desc: "Rare cryptocrystalline travertine onyx that diffuses backlight into a warm luxury ambiance.",
        icon: Sparkles,
      },
      {
        title: "Conflict-Free Ethics",
        desc: "All gold and gemstones are 100% ethically sourced with verified chain-of-custody documentation.",
        icon: ShieldCheck,
      },
      {
        title: "Insured Global Custody",
        desc: "Armored logistics and bonded vault clearance ensure secure transit to international bullion banks.",
        icon: Globe,
      },
    ],
    faqs: [
      {
        q: "How can buyers verify the purity of National Mines gold bullion?",
        a: "Each gold bar is serialized and accompanied by an official fire assay certificate from certified metallurgical laboratories.",
      },
      {
        q: "What makes your Green Onyx unique in international markets?",
        a: "Our Green Onyx from Chagai features deep emerald and jade green banding with high crystal translucency, making it the most sought-after backlit architectural stone globally.",
      },
      {
        q: "Do you supply raw gemstone specimens as well as cut stones?",
        a: "Yes. We supply natural rough gemstone parcels as well as calibrated faceting-grade rough to international gem dealers.",
      },
    ],
  },
];

export function getNationalMinesIndustryBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_MINES_INDUSTRIES.find(
    (ind) => ind.slug.toLowerCase() === slug.toLowerCase() || ind.id.toLowerCase() === slug.toLowerCase()
  );
}
