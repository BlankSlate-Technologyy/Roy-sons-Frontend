// Comprehensive Minerals & Commodities Dataset for National Mines Corporation (Pvt) Ltd
import {
  Mountain,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Sparkles,
  Layers,
  Factory,
  ShieldCheck,
  Zap,
  Globe,
  Truck,
  HardHat,
  Drill,
  Scale,
  FileText,
} from "lucide-react";

export const NATIONAL_MINES_MINERALS = [
  {
    id: "gold",
    slug: "gold-au",
    name: "Gold (Au)",
    eyebrow: "Certified Metallurgical Grade & Precious Bullion",
    category: "Precious Metals",
    grade: "99.4% Certified Assay",
    origin: "Chagai & Northern Concessions",
    tag: "Precious Metals",
    heroImage: "/mine gold.png",
    overview:
      "National Mines Corporation extracts and refines high-grade gold from epithermal quartz vein systems and alluvial placer deposits across the mineral-rich Tethyan Metallogenic Belt in Balochistan and northern concessions. Utilizing gravity concentration, cyanide-free froth flotation, and advanced induction smelting, we produce export-certified doré bullion bars, high-grade placer concentrates, and mineral specimens with verified chain of custody.",
    metrics: [
      { label: "Assay Purity", value: "99.4% Au" },
      { label: "Annual Output", value: "500+ kg" },
      { label: "Concession Area", value: "450 sq km" },
      { label: "Certification", value: "LBMA Aligned" },
    ],
    deliverables: [
      "Certified 99.4% refined gold doré bars with individualized serial engraving and assay assay certificates",
      "High-grade raw gold placer concentrate for sovereign and industrial refinery processing",
      "Comprehensive X-ray fluorescence (XRF) and fire assay laboratory purity documentation with every shipment",
      "Armored vehicular logistics and secure insured vaulting up to international export transit terminals",
      "Ethical, conflict-free extraction certified under responsible mineral sourcing guidelines",
      "Direct commercial trading desk offering flexible spot, forward, and volume allocation contracts",
    ],
    technicalSpecs: [
      { key: "Chemical Symbol", value: "Au (Element 79)" },
      { key: "Refined Bullion Grade", value: "99.4% – 99.9% Pure Gold" },
      { key: "Raw Ore Grade", value: "2.8 g/t to 7.5 g/t Au (High-Grade Veins)" },
      { key: "Specific Gravity", value: "19.32 g/cm³" },
      { key: "Melting Point", value: "1,064.18 °C" },
      { key: "Packaging & Transport", value: "Tamper-evident sealed security cases / Brinks insured transport" },
    ],
    pillars: [
      {
        title: "Epithermal Vein Mining",
        desc: "Selective precision underground and open-cut extraction targeting high-grade gold quartz veins.",
        icon: Mountain,
      },
      {
        title: "Gravity & Flotation",
        desc: "Eco-friendly centrifugal gravity concentrators and closed-loop flotation circuits for 94% metal recovery.",
        icon: FlaskConical,
      },
      {
        title: "Certified Fire Assay",
        desc: "Rigorous laboratory testing using pyrometallurgical fire assay and atomic absorption spectrometry.",
        icon: Award,
      },
      {
        title: "High-Security Transport",
        desc: "Continuous GPS tracked armored convoys and secure bonded customs clearance for global buyers.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Vein Mapping & Core Drilling",
        desc: "High-precision diamond core drilling and geophysical trenching map the gold mineralized quartz lodes.",
      },
      {
        step: "02",
        title: "Precision Extraction",
        desc: "Controlled selective blasting and electric hydraulic excavator loading minimize ore dilution.",
      },
      {
        step: "03",
        title: "Beneficiation & Smelting",
        desc: "Multi-stage ball milling, Knelson gravity concentration, and induction furnace smelting produce doré bars.",
      },
      {
        step: "04",
        title: "Assay & Vault Dispatch",
        desc: "Final spectrometer assay verification, bar serializing, and delivery to bonded vaults for international export.",
      },
    ],
    faqs: [
      {
        q: "What is the purity standard of National Mines gold?",
        a: "Our refined gold doré bars average 99.4% to 99.9% purity, accompanied by comprehensive fire assay certificates from accredited metallurgical laboratories.",
      },
      {
        q: "What are the minimum order quantities for gold purchases?",
        a: "We accommodate commercial orders starting from 1 kilogram doré bars up to multi-hundred kilogram annual sovereign supply agreements.",
      },
      {
        q: "How is gold shipped to international buyers?",
        a: "Shipments are executed through bonded armored logistics (e.g., Brink's / Malca-Amit) with full CIF insurance up to the buyer's designated refinery or bullion bank vault.",
      },
    ],
  },
  {
    id: "copper",
    slug: "copper-cu",
    name: "Copper (Cu)",
    eyebrow: "Porphyry Copper Concentrate & Cathode",
    category: "Industrial Base Metals",
    grade: "28% – 32% Concentrate",
    origin: "Balochistan Porphyry Belt",
    tag: "Base Metals",
    heroImage: "/mine copper.png",
    overview:
      "National Mines Corporation operates world-class copper porphyry concessions across the Chagai mineral volcanic arc. Our processing facilities utilize high-efficiency semi-autogenous grinding (SAG) mills and multi-stage froth flotation to produce high-grade chalcopyrite and bornite copper concentrate with exceptional copper content and valuable precious metal credits.",
    metrics: [
      { label: "Concentrate Grade", value: "28% – 32% Cu" },
      { label: "Annual Capacity", value: "150,000 Tons" },
      { label: "By-Product Credits", value: "Gold & Silver" },
      { label: "Moisture Content", value: "< 8.5%" },
    ],
    deliverables: [
      "High-grade flotation copper concentrate (28%–32% Cu) tailored for international smelters",
      "Low moisture (<8.5%) concentrate ready for bulk vessel ocean freight and sealed container transport",
      "Valuable precious metal credits including associated gold (Au) and silver (Ag) content",
      "Low penalty element profile: arsenic (As), antimony (Sb), and bismuth (Bi) well below smelter thresholds",
      "Certificate of weight and quality issued by independent international surveyors (SGS / Bureau Veritas)",
      "Long-term off-take contracts and spot FOB Gwadar / Karachi or CIF Asian/European ports",
    ],
    technicalSpecs: [
      { key: "Mineralogy", value: "Chalcopyrite (CuFeS2) and Bornite (Cu5FeS4)" },
      { key: "Copper Content (Cu)", value: "28.0% to 32.5% Dry Basis" },
      { key: "Gold Credit (Au)", value: "1.5 g/t to 4.2 g/t in concentrate" },
      { key: "Silver Credit (Ag)", value: "25 g/t to 60 g/t in concentrate" },
      { key: "Particle Size", value: "80% passing 75 microns (P80 = 75 µm)" },
      { key: "Transport Mode", value: "Lined 20ft sea containers / bulk vessel chartered holds" },
    ],
    pillars: [
      {
        title: "Bulk Open-Pit Extraction",
        desc: "Large-scale surface mining using 90-ton haul trucks and continuous bench blast optimization.",
        icon: Truck,
      },
      {
        title: "Froth Flotation Refining",
        desc: "Advanced multi-stage cleaner flotation cells separating high-purity chalcopyrite from gangue silicates.",
        icon: FlaskConical,
      },
      {
        title: "Low Deleterious Elements",
        desc: "Rigorous metallurgical circuits keep penalty elements like arsenic and lead far below international thresholds.",
        icon: ShieldCheck,
      },
      {
        title: "Global Ocean Freight",
        desc: "Direct bulk rail and road logistics connecting our beneficiation plants to Gwadar and Karachi deep-sea ports.",
        icon: Globe,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Open-Pit Blast & Excavation",
        desc: "Porphyry ore bodies are blasted with precision patterns and loaded into heavy mining dumpers.",
      },
      {
        step: "02",
        title: "Crushing & SAG Milling",
        desc: "Primary gyratory crushing and SAG ball mills grind run-of-mine ore into fine slurry.",
      },
      {
        step: "03",
        title: "Flotation Concentration",
        desc: "Collectors and frothers selectively float copper sulfide minerals, producing thick copper froth.",
      },
      {
        step: "04",
        title: "Filtration & Bulk Loading",
        desc: "Pressure filtration dewaters concentrate to <8.5% moisture for secure containerized export.",
      },
    ],
    faqs: [
      {
        q: "What is the standard copper concentrate grade you supply?",
        a: "Our standard export concentrate grade is 28% to 32% Cu, with premium batches reaching up to 34% Cu depending on the ore body zone.",
      },
      {
        q: "Are independent third-party assays available?",
        a: "Yes. Every shipment is sampled and certified at the port of loading by international inspection authorities such as SGS, Alfred H Knight, or Alex Stewart.",
      },
      {
        q: "Can you supply copper cathodes as well as concentrate?",
        a: "We currently supply bulk flotation concentrate, with custom refined cathode sheet allocations available through our metallurgical smelting partners.",
      },
    ],
  },
  {
    id: "iron-ore",
    slug: "iron-ore-fe",
    name: "Iron Ore (Fe)",
    eyebrow: "High-Grade Magnetite & Hematite Lumps and Fines",
    category: "Ferrous Minerals",
    grade: "62% – 65% Fe Content",
    origin: "Kalabagh & Chigendik Reserves",
    tag: "Ferrous Metals",
    heroImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation mines and processes high-grade magnetite and hematite iron ore reserves. Beneficiated through dry magnetic separation and optical lump sorting, our iron ore products deliver high iron content (62%–65% Fe) and minimal silica/phosphorus, serving as premier feedstock for domestic steel mills, blast furnaces, and direct reduced iron (DRI) plants.",
    metrics: [
      { label: "Fe Content", value: "62% – 65%" },
      { label: "Annual Output", value: "800,000+ Tons" },
      { label: "Silica Content", value: "< 4.5%" },
      { label: "Sizing Options", value: "Lumps & Fines" },
    ],
    deliverables: [
      "Calibrated lump ore (10mm to 40mm) for direct charging into blast furnaces and cupolas",
      "High-grade iron ore fines (0mm to 10mm) optimized for sinter and pelletizing plants",
      "Low silica (SiO2 < 4.5%) and low alumina (Al2O3 < 2.0%) chemical profile",
      "Extremely low trace phosphorus (P < 0.05%) and sulfur (S < 0.04%) preventing metal embrittlement",
      "Daily trainload rail dispatch and bulk tipper truck delivery across Pakistan industrial corridors",
      "Long-term guaranteed price and volume contracts for commercial steel rebar and billet manufacturers",
    ],
    technicalSpecs: [
      { key: "Ore Type", value: "Magnetite (Fe3O4) & Hematite (Fe2O3)" },
      { key: "Total Iron (Fe)", value: "62.0% to 65.5% Basis" },
      { key: "Silica (SiO2)", value: "3.2% – 4.5% Maximum" },
      { key: "Alumina (Al2O3)", value: "1.2% – 2.0% Maximum" },
      { key: "Phosphorus (P)", value: "< 0.045%" },
      { key: "Supply Format", value: "Bulk railway rakes / 40-ton dump trailer loads" },
    ],
    pillars: [
      {
        title: "Magnetic Beneficiation",
        desc: "High-intensity dry and wet magnetic drums upgrade raw 45% ore into 64%+ Fe concentrate.",
        icon: Zap,
      },
      {
        title: "Precision Lump Sizing",
        desc: "Multi-deck vibrating screens produce consistent 10–40mm furnace lumps with zero oversize.",
        icon: Layers,
      },
      {
        title: "Low Slag Residue",
        desc: "Low silica and alumina content ensures high furnace thermal efficiency and minimal slag build-up.",
        icon: Factory,
      },
      {
        title: "Dedicated Rail Sidings",
        desc: "Direct freight railway siding connections enabling rapid 2,000-ton bulk trainload dispatches.",
        icon: Truck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Mass Surface Quarrying",
        desc: "Heavy hydraulic excavators rip and extract thick magnetite bands with minimal overburden waste.",
      },
      {
        step: "02",
        title: "Primary & Secondary Crushing",
        desc: "Heavy jaw and cone crushers reduce run-of-mine boulders down to uniform feed sizes.",
      },
      {
        step: "03",
        title: "Magnetic Separation",
        desc: "Continuous neodymium magnetic drum separators isolate high-density iron grains from silica waste.",
      },
      {
        step: "04",
        title: "Screening & Rail Loadout",
        desc: "Sized into 10–40mm lumps and 0–10mm fines, then loaded directly onto commercial freight trains.",
      },
    ],
    faqs: [
      {
        q: "What sizes of iron ore do you supply?",
        a: "We supply calibrated lumps (10mm–40mm) for blast furnaces and fine ore (0mm–10mm) for sintering and pelletizing operations.",
      },
      {
        q: "What is the average Fe percentage of your iron ore?",
        a: "Our standard commercial batches average 62% to 65% Fe content, with premium grades reaching up to 66.5% Fe.",
      },
      {
        q: "Can you handle bulk supply contracts for large steel plants?",
        a: "Yes. We operate dedicated trainload loadouts capable of delivering over 50,000 to 100,000 metric tons per month to large steel manufacturing mills.",
      },
    ],
  },
  {
    id: "coal",
    slug: "coal-anthracite-bituminous",
    name: "Coal (Anthracite & Bituminous)",
    eyebrow: "High-Calorific Energy Fuel & Industrial Reductant",
    category: "Energy Resources",
    grade: "6,200+ kcal/kg GCV",
    origin: "Salt Range & Lakhra Fields",
    tag: "Energy Minerals",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation supplies high-calorific thermal and semi-anthracite coal extracted from deep underground shafts and open-cast fields. Featuring low inherent moisture, consistent volatile matter, and high heat output (6,200+ kcal/kg), our coal powers cement rotary kilns, industrial boilers, brick kilns, and captive power generation plants.",
    metrics: [
      { label: "Calorific Value", value: "6,200+ kcal/kg" },
      { label: "Fixed Carbon", value: "52% – 58%" },
      { label: "Total Moisture", value: "< 7.5%" },
      { label: "Monthly Output", value: "60,000 Tons" },
    ],
    deliverables: [
      "High-energy steam coal with gross calorific values ranging from 6,000 to 6,800 kcal/kg",
      "Calibrated lump coal (25mm–75mm) and crushed stoker sizes (10mm–25mm) for industrial boilers",
      "Low moisture content ensuring rapid ignition and high flame temperature in cement calciner kilns",
      "Controlled ash content (12%–16%) with high ash fusion temperatures preventing furnace clinkering",
      "Continuous daily weighbridge-monitored fleet delivery directly to client factory silos",
      "Custom blending services combining domestic coal with imported coals for optimum cost per GCV",
    ],
    technicalSpecs: [
      { key: "Gross Calorific Value (GCV)", value: "6,200 – 6,800 kcal/kg (Air-Dried Basis)" },
      { key: "Fixed Carbon", value: "52.0% to 58.5%" },
      { key: "Volatile Matter", value: "32.0% – 38.0%" },
      { key: "Total Moisture (TM)", value: "5.5% – 7.5%" },
      { key: "Total Sulfur", value: "1.8% – 3.2% Controlled" },
      { key: "Size Distribution", value: "0–25mm fines, 25–75mm lumps, run-of-mine bulk" },
    ],
    pillars: [
      {
        title: "High Heat Density",
        desc: "Delivers maximum thermal output per ton, cutting fuel consumption costs for heavy industries.",
        icon: Zap,
      },
      {
        title: "Uniform Sizing & Crushing",
        desc: "Clean screening eliminates stone contamination and ensures consistent feed into automatic boiler stokers.",
        icon: Layers,
      },
      {
        title: "Low Inherent Moisture",
        desc: "Dried and processed to prevent spontaneous combustion and maximize net usable calorific value.",
        icon: ShieldCheck,
      },
      {
        title: "Guaranteed Year-Round Supply",
        desc: "Massive strategic stockpiles prevent supply disruptions during peak winter heating and monsoon seasons.",
        icon: Truck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Underground & Open Seam Mining",
        desc: "Continuous shearers and room-and-pillar extraction harvest thick bituminous coal seams.",
      },
      {
        step: "02",
        title: "Washing & Destoning",
        desc: "Dense-medium cyclones and rotary wash trommels separate heavy shale rock from carbonaceous coal.",
      },
      {
        step: "03",
        title: "Grading & Screening",
        desc: "Vibrating deck screens separate coal into custom sizes: 0–25mm, 25–75mm, and bulk blocks.",
      },
      {
        step: "04",
        title: "Weighbridge Bulk Dispatch",
        desc: "Automated volumetric loading and computer weighbridge invoicing dispatch coal to industrial kilns.",
      },
    ],
    faqs: [
      {
        q: "What is the calorific value of your industrial coal?",
        a: "Our coal ranges from 6,000 kcal/kg up to 6,800 kcal/kg Gross Calorific Value (GCV), ideal for high-temperature cement kilns and industrial steam boilers.",
      },
      {
        q: "Do you supply coal in specific sizes?",
        a: "Yes. We provide 0–25mm pulverized boiler feed, 25–75mm lump coal for kilns, and uncrushed run-of-mine bulk.",
      },
      {
        q: "What is the minimum supply contract?",
        a: "We cater to single 40-ton trailer deliveries as well as long-term monthly corporate contracts exceeding 20,000 metric tons.",
      },
    ],
  },
  {
    id: "limestone",
    slug: "limestone-caco3",
    name: "Limestone (CaCO3)",
    eyebrow: "High-Calcium Chemical & Construction Limestone",
    category: "Construction Materials",
    grade: "94%+ Calcium Carbonate",
    origin: "Margalla & Salt Range Quarries",
    tag: "Construction",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation operates extensive high-purity limestone quarries supplying cement plants, steel flux operations, paper fillers, glass manufacturers, and infrastructure aggregate projects. With calcium carbonate (CaCO3) concentrations exceeding 94.5% and low magnesium/silica impurities, our limestone delivers superior chemical reactivity and mechanical strength.",
    metrics: [
      { label: "CaCO3 Purity", value: "> 94.5%" },
      { label: "Annual Quarrying", value: "2M+ Tons" },
      { label: "MgO Content", value: "< 1.8%" },
      { label: "Crush Formats", value: "Micro to Boulders" },
    ],
    deliverables: [
      "High-calcium limestone boulders for clinker calcination in major cement manufacturing plants",
      "Steelmaking metallurgical flux stone (30mm–80mm) with rapid slag-forming dissolution properties",
      "Calibrated crushed road base aggregates (Sub-base, Base course, and asphalt chips)",
      "Micronized calcium carbonate (Ground Calcium Carbonate - GCC) for paints, plastics, and paper",
      "Agricultural limestone powder for soil pH neutralization and fertilizer enrichment",
      "High-capacity bulk tipper transport operating 24/7 directly from quarry face to manufacturing lines",
    ],
    technicalSpecs: [
      { key: "Calcium Carbonate (CaCO3)", value: "94.5% – 97.2% Minimum" },
      { key: "Calcium Oxide (CaO)", value: "52.8% – 54.5%" },
      { key: "Magnesium Oxide (MgO)", value: "< 1.8% Maximum" },
      { key: "Silica (SiO2)", value: "< 2.0% Low Abrasiveness" },
      { key: "Compressive Strength", value: "90 – 120 MPa" },
      { key: "Grading Sizes", value: "0–5mm sand, 10–20mm chips, 40–80mm flux, raw rip-rap boulders" },
    ],
    pillars: [
      {
        title: "High Chemical Reactivity",
        desc: "High CaO concentration ensures rapid calcination in rotary kilns, lowering energy costs.",
        icon: FlaskConical,
      },
      {
        title: "Massive Quarry Capacity",
        desc: "Heavy multi-bench open quarries capable of supplying 10,000+ tons daily with zero supply lapses.",
        icon: Mountain,
      },
      {
        title: "Low Impurity Levels",
        desc: "Negligible MgO and alkalis comply with the strictest ASTM C150 Type I/II cement specifications.",
        icon: ShieldCheck,
      },
      {
        title: "Custom Aggregate Sizing",
        desc: "Tertiary impact crushers and multi-deck screens produce exact aggregate curves for road asphalt.",
        icon: Layers,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Bench Blasting & Ripping",
        desc: "Controlled precision blasting fragments pure massive limestone formations into manageable blocks.",
      },
      {
        step: "02",
        title: "Multi-Stage Crushing",
        desc: "Heavy jaw crushers and secondary impact crushers break stone down into custom commercial sizes.",
      },
      {
        step: "03",
        title: "Vibratory Screening",
        desc: "Screen decks separate crushed stone into specific aggregate fractions (0–5mm, 10mm, 20mm, 40mm).",
      },
      {
        step: "04",
        title: "Direct Plant Delivery",
        desc: "Continuous fleets of heavy tippers deliver limestone directly into cement plant hoppers and steelworks.",
      },
    ],
    faqs: [
      {
        q: "What is the calcium carbonate purity of your limestone?",
        a: "Our limestone tests consistently above 94.5% to 97.2% CaCO3, making it ideal for high-spec Portland cement clinker and steel flux.",
      },
      {
        q: "Do you supply limestone aggregates for highway and construction projects?",
        a: "Yes. We supply sub-base, base course, asphalt chips (10mm, 20mm), and rip-rap stone compliant with NHA (National Highway Authority) standards.",
      },
      {
        q: "Can you guarantee continuous daily supply for cement factories?",
        a: "Yes. We maintain multi-million-ton quarry concessions and dedicated fleets capable of delivering thousands of tons daily under long-term supply SLAs.",
      },
    ],
  },
  {
    id: "gypsum",
    slug: "gypsum-caso4",
    name: "Gypsum (CaSO4·2H2O)",
    eyebrow: "High-Purity Natural Dihydrate Gypsum",
    category: "Industrial Minerals",
    grade: "92%+ Purity",
    origin: "Daudkhel & Kohat Formations",
    tag: "Industrial Minerals",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation extracts high-grade crystalline rock gypsum from world-class evaporite deposits. With dihydrate purity exceeding 92% and bright white color characteristics, our gypsum is the preferred material for Portland cement setting regulators, plaster of Paris, gypsum wallboards, and agricultural soil desalinization.",
    metrics: [
      { label: "Gypsum Purity", value: "> 92% Dihydrate" },
      { label: "Whiteness Index", value: "88% – 92%" },
      { label: "Combined Water", value: "19.5% – 20.5%" },
      { label: "Annual Reserves", value: "10M+ Tons" },
    ],
    deliverables: [
      "Natural lump gypsum (50mm–150mm) for Portland cement manufacturing retarder additives",
      "High-whiteness plaster-grade gypsum for Plaster of Paris (POP) and medical casting bandages",
      "Fine gypsum powder for drywall board manufacturing and architectural moldings",
      "Agricultural gypsum powder for reclaiming sodic saline soils and boosting crop yields",
      "Low chloride (Cl < 0.02%) and low silica profiles preventing corrosion in cement manufacturing",
      "Bulk vessel export and bagged container supply for international regional markets",
    ],
    technicalSpecs: [
      { key: "Chemical Formula", value: "CaSO4·2H2O (Calcium Sulfate Dihydrate)" },
      { key: "Purity (CaSO4·2H2O)", value: "92.0% to 95.5% Minimum" },
      { key: "Sulfur Trioxide (SO3)", value: "42.5% – 44.5%" },
      { key: "Calcium Oxide (CaO)", value: "31.5% – 32.8%" },
      { key: "Combined Water (H2O)", value: "19.8% – 20.4%" },
      { key: "Chloride Content (Cl)", value: "< 0.015%" },
    ],
    pillars: [
      {
        title: "High Dihydrate Purity",
        desc: "Over 92% purity ensures accurate setting time control in cement milling circuits.",
        icon: FlaskConical,
      },
      {
        title: "Bright White Color",
        desc: "Naturally low iron and organic impurities yield high whiteness indices for architectural plaster.",
        icon: Sparkles,
      },
      {
        title: "Agricultural Sodic Cure",
        desc: "Replaces excess sodium ions in agricultural soil, restoring soil permeability and fertility.",
        icon: Mountain,
      },
      {
        title: "Custom Micronized Milling",
        desc: "Available as raw mined rock, 50mm lumps, or fine 200-mesh micronized powder.",
        icon: Layers,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Selective Horizon Quarrying",
        desc: "White crystalline gypsum seams are selectively quarried to avoid clay and marl interbeds.",
      },
      {
        step: "02",
        title: "Washing & Sorting",
        desc: "High-pressure washing removes surface dust and clay coatings, enhancing mineral purity.",
      },
      {
        step: "03",
        title: "Crushing & Sizing",
        desc: "Cone crushers size gypsum into 50–150mm cement lumps or feed it to fine pulverizer mills.",
      },
      {
        step: "04",
        title: "Bulk & Bagged Distribution",
        desc: "Dispatched in bulk dumpers, 50kg polypropylene bags, or 1-ton jumbo bags for export.",
      },
    ],
    faqs: [
      {
        q: "What is the purity of your raw gypsum?",
        a: "Our natural gypsum tests above 92% to 95.5% CaSO4·2H2O dihydrate purity with combined water exceeding 19.8%.",
      },
      {
        q: "Can you supply gypsum for agricultural soil conditioning?",
        a: "Yes. We supply finely ground agricultural gypsum (80–100 mesh) that neutralizes sodic alkali soils and enriches soil with calcium and sulfur.",
      },
      {
        q: "What packaging options are available for gypsum?",
        a: "We offer loose bulk tipper delivery, 50kg moisture-resistant woven bags, and 1,000kg (1-ton) jumbo export bags.",
      },
    ],
  },
  {
    id: "chromite",
    slug: "chromite-cr2o3",
    name: "Chromite (Cr2O3)",
    eyebrow: "High Cr:Fe Ratio Metallurgical & Refractory Chromite",
    category: "Strategic Minerals",
    grade: "46% – 48% Metallurgical Grade",
    origin: "Muslim Bagh Mineral Belt",
    tag: "Strategic Minerals",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Mines Corporation mines world-renowned high-grade chromite ore from the Muslim Bagh ophiolite belt. Characterized by high chromic oxide (Cr2O3 46%–48%) concentrations and an outstanding Chromium-to-Iron (Cr:Fe) ratio of 3.0:1 or greater, our chromite is the prime global standard for ferrochrome alloys, stainless steel manufacturing, and high-temperature refractory furnace linings.",
    metrics: [
      { label: "Cr2O3 Grade", value: "46% – 48% Min" },
      { label: "Cr:Fe Ratio", value: "3.0 : 1" },
      { label: "Silica (SiO2)", value: "< 3.5%" },
      { label: "Ore Structure", value: "Dense Lumpy" },
    ],
    deliverables: [
      "Premium metallurgical lump chromite ore (46%–48% Cr2O3) for high-carbon ferrochrome smelting",
      "Refractory grade chromite ore with high alumina and thermal stability for steel furnace bricks",
      "Chemical grade chromite concentrate for chromium salt and sodium dichromate production",
      "Low silica (SiO2 < 3.5%) and low phosphorus profile preventing slag contamination",
      "Containerized sea freight export in heavy-duty 20ft containers with customs seal verification",
      "Certified SGS / Alex Stewart chemical assay certificates provided with every export container",
    ],
    technicalSpecs: [
      { key: "Chemical Formula", value: "FeCr2O4 (Iron Chromium Oxide)" },
      { key: "Chromium Oxide (Cr2O3)", value: "46.0% to 48.5% Metallurgical Basis" },
      { key: "Cr : Fe Ratio", value: "3.0 : 1 to 3.2 : 1 Premium" },
      { key: "Silica (SiO2)", value: "2.5% – 3.5% Maximum" },
      { key: "Alumina (Al2O3)", value: "12.0% – 14.5%" },
      { key: "Physical Form", value: "Hard dense lumpy ore (10mm to 100mm)" },
    ],
    pillars: [
      {
        title: "High Cr:Fe Ratio",
        desc: "A 3:1 Cr:Fe ratio guarantees maximum ferrochrome yield and lower electric smelting power consumption.",
        icon: Award,
      },
      {
        title: "Dense Lumpy Hardness",
        desc: "Hard crystalline lumpy structure withstands high mechanical loads inside submerged arc furnaces.",
        icon: Mountain,
      },
      {
        title: "High Refractory Melting Point",
        desc: "Withstands operating temperatures above 1,900°C without thermal degradation in furnace linings.",
        icon: Zap,
      },
      {
        title: "Containerized Export Logistics",
        desc: "Secure container stuffings with heavy moisture barriers dispatched through Karachi ports.",
        icon: Globe,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Underground & Open Pod Mining",
        desc: "Podiform chromite bodies are mined along serpentinized ultramafic ophiolite complexes.",
      },
      {
        step: "02",
        title: "Manual & Optical Sorting",
        desc: "High-grade dense black chromite lumps are hand-picked and optically sorted from dunite host rock.",
      },
      {
        step: "03",
        title: "Laboratory Spectrometry",
        desc: "Every batch is analyzed via XRF spectrometry for Cr2O3 percentage and Cr:Fe ratio grading.",
      },
      {
        step: "04",
        title: "Container Loading & Port Transit",
        desc: "Stuffed into lined 20ft sea containers, weighed, sealed, and trucked to Karachi export terminals.",
      },
    ],
    faqs: [
      {
        q: "What is the Cr2O3 content and Cr:Fe ratio of your chromite?",
        a: "Our metallurgical grade chromite features 46% to 48% Cr2O3 with a premier Chromium-to-Iron ratio of 3.0:1 to 3.2:1.",
      },
      {
        q: "What industries use your chromite ore?",
        a: "Primary buyers include stainless steel manufacturers, ferrochrome smelters, chrome chemical producers, and refractory furnace brick makers.",
      },
      {
        q: "How is chromite packaged for export?",
        a: "We pack chromite in 1.5-ton heavy-duty jumbo bags or direct loose container stuffings inside reinforced 20ft sea containers.",
      },
    ],
  },
  {
    id: "marble-onyx",
    slug: "marble-and-onyx",
    name: "Marble & Onyx",
    eyebrow: "World-Renowned Green Onyx & Architectural Marble",
    category: "Architectural Stones",
    grade: "Grade-A Export Slabs & Blocks",
    origin: "Chagai & Mohmand Quarries",
    tag: "Dimension Stones",
    heroImage: "/mine copper.png",
    overview:
      "National Mines Corporation quarries and fabricates world-famous Green Onyx, Dark Green Onyx, Ziarat White, Black & Gold (Michaelangelo), and Golden Marble. Extracted with advanced diamond wire saw cutting technology to preserve natural grain integrity without micro-cracks, our architectural stone blocks and polished slabs adorn luxury projects globally.",
    metrics: [
      { label: "Block Dimension", value: "Up to 25 Tons" },
      { label: "Compressive Strength", value: "> 110 MPa" },
      { label: "Varieties Quarried", value: "12+ Types" },
      { label: "Export Destinations", value: "30+ Countries" },
    ],
    deliverables: [
      "Square, uncracked Grade-A gangsaw dimensional marble and onyx blocks for international stone processors",
      "Polished, honed, brushed, and leather-finish slabs calibrated in 20mm and 30mm thicknesses",
      "Exotic Translucent Green Onyx for luxury backlit feature walls, vanity tops, and hotel lobbies",
      "High-density Ziarat White and Verona White marble for high-footfall commercial flooring",
      "Custom CNC cut-to-size floor tiles, stair treads, bathroom vanities, and decorative columns",
      "Sturdy wooden crate packaging with shockproof styrofoam padding for global container shipping",
    ],
    technicalSpecs: [
      { key: "Stone Type", value: "Metamorphic Calcite Marble & Cryptocrystalline Travertine Onyx" },
      { key: "Specific Gravity", value: "2.68 – 2.75 g/cm³" },
      { key: "Water Absorption", value: "< 0.15% (Extremely Low)" },
      { key: "Compressive Strength", value: "105 – 130 MPa" },
      { key: "Mohs Hardness", value: "3.5 – 4.5" },
      { key: "Export Formats", value: "Rough rectangular blocks, 2cm/3cm gangsaw slabs, cut-to-size tiles" },
    ],
    pillars: [
      {
        title: "Diamond Wire Saw Extraction",
        desc: "Zero-explosive cutting prevents internal thermal shock and preserves crystal grain translucency.",
        icon: Mountain,
      },
      {
        title: "Translucent Green Onyx",
        desc: "Unique banded jade-green onyx that diffuses light brilliantly when backlit with LED panels.",
        icon: Sparkles,
      },
      {
        title: "Automated Gangsaw Polishing",
        desc: "Italian 16-head automated polishing lines achieving deep mirror gloss finishes (95+ gloss units).",
        icon: Factory,
      },
      {
        title: "Reinforced Wooden Bundles",
        desc: "Heavy fumigated timber A-frames and seaworthy packaging guarantee zero transit breakage.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Diamond Wire Bench Cutting",
        desc: "Diamond wire saws slice 200-ton mountain stone benches smoothly without destructive micro-cracks.",
      },
      {
        step: "02",
        title: "Block Dressing & Squaring",
        desc: "Heavy stone blocks are squared into standardized gangsaw dimensions (e.g. 280cm x 160cm x 150cm).",
      },
      {
        step: "03",
        title: "Gangsaw Slicing & Polishing",
        desc: "Multi-blade gang saws slice blocks into 2cm or 3cm slabs, followed by multi-stage diamond polishing.",
      },
      {
        step: "04",
        title: "Crating & Export Containerization",
        desc: "Slabs are packed in fumigated wooden A-frame crates and loaded into 20ft heavy-duty containers.",
      },
    ],
    faqs: [
      {
        q: "What types of marble and onyx do you extract?",
        a: "We extract Green Onyx, Dark Onyx, Multi-Green Onyx, Ziarat White, Black & Gold, Golden Marble, and Botticino Fancy.",
      },
      {
        q: "Can you supply rough blocks for overseas stone cutting factories?",
        a: "Yes. We supply dressed rectangular blocks ranging from 10 to 25 metric tons per block for overseas gangsaw plants in Italy, China, and the Middle East.",
      },
      {
        q: "How do you protect marble slabs from breaking during ocean transit?",
        a: "Slabs are strapped onto ISPM-15 heat-treated fumigated wooden A-frames with foam padding and heavy steel bands inside 20ft heavy-cargo shipping containers.",
      },
    ],
  },
  {
    id: "granite",
    slug: "granite-dimensional-stone",
    name: "Granite",
    eyebrow: "Heavy-Duty Igneous Granite Slabs & Rough Blocks",
    category: "Architectural Stones",
    grade: "Export Quality Commercial Stone",
    origin: "Nagar Parkar & Mansehra Formations",
    tag: "Dimension Stones",
    heroImage: "/mine gold.png",
    overview:
      "National Mines Corporation quarries premium natural igneous granite featuring exceptional mechanical hardness, uniform crystalline speckling, and ultra-low water absorption. Resistant to chemical weathering, acid stains, and high abrasion, our granite blocks, flamed pavers, and polished slabs are designed for airport terminals, commercial plazas, and heavy infrastructure facades.",
    metrics: [
      { label: "Mohs Hardness", value: "6.5 – 7.0" },
      { label: "Compressive Strength", value: "> 180 MPa" },
      { label: "Water Absorption", value: "< 0.08%" },
      { label: "Colors Available", value: "Pink, Grey, Black" },
    ],
    deliverables: [
      "Rough quarried dimensional granite blocks for heavy monument and civil engineering projects",
      "High-gloss mirror polished granite slabs (20mm, 30mm, 40mm) for commercial countertops and lobbies",
      "Flamed, bush-hammered, and sandblasted anti-slip granite tiles for airport and public walkways",
      "Heavy infrastructure kerbstones, cobblestones, and bridge pier cladding elements",
      "Ultra-high abrasion resistance preventing wear in high-footfall metropolitan transit hubs",
      "Rigid seaworthy wooden crate bundling for bulk export shipments worldwide",
    ],
    technicalSpecs: [
      { key: "Rock Classification", value: "Plutonic Igneous Granite (Quartz, Feldspar, Mica)" },
      { key: "Specific Gravity", value: "2.72 – 2.80 g/cm³" },
      { key: "Compressive Strength", value: "185 – 220 MPa (Ultra High)" },
      { key: "Water Absorption", value: "0.05% – 0.08% Negligible" },
      { key: "Hardness", value: "6.5 to 7.0 on Mohs Scale" },
      { key: "Surface Finishes", value: "Polished, Flamed, Honed, Bush-Hammered, Sandblasted" },
    ],
    pillars: [
      {
        title: "Extreme Structural Hardness",
        desc: "Mohs 7 hardness resists deep scratching, knife cuts, and heavy vehicle traffic with zero wear.",
        icon: Mountain,
      },
      {
        title: "Weather & Acid Resistance",
        desc: "Impervious to acid rain, freeze-thaw cycles, and chemical spills in harsh industrial environments.",
        icon: ShieldCheck,
      },
      {
        title: "Uniform Color Granulation",
        desc: "Large quarry faces guarantee consistent color and grain matching across multi-thousand-square-meter projects.",
        icon: Sparkles,
      },
      {
        title: "Custom Architectural Finishes",
        desc: "Flamed thermal finishes create textured slip-resistant surfaces for outdoor public squares.",
        icon: Factory,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Drill & Hydraulic Wedge Splitting",
        desc: "Diamond drilling and hydraulic rock splitters carve massive granite monoliths without blasting fissures.",
      },
      {
        step: "02",
        title: "Dimensional Block Dressing",
        desc: "Monoliths are trimmed into regular geometric blocks ready for gangsaw or circular blade slicing.",
      },
      {
        step: "03",
        title: "Surface Texturing & Polishing",
        desc: "Slabs receive high-temperature flaming, bush-hammering, or multi-head diamond mirror polishing.",
      },
      {
        step: "04",
        title: "Quality Grading & Crating",
        desc: "Color-sorted, calibrated for thickness, and secured in reinforced wooden crates for shipment.",
      },
    ],
    faqs: [
      {
        q: "What colors of granite do you quarry?",
        a: "We quarry Royal Pink, Platinum Grey, Charcoal Grey, Jet Black, and Golden Sand granite variations.",
      },
      {
        q: "Is granite suitable for outdoor public plazas and pavements?",
        a: "Yes. With a compressive strength exceeding 180 MPa and flamed slip-resistant surface finishes, our granite is ideal for high-traffic public walkways and exterior plazas.",
      },
      {
        q: "What is the water absorption rate of your granite?",
        a: "Our granite has an exceptionally low water absorption rate under 0.08%, preventing freeze-thaw cracking and organic staining.",
      },
    ],
  },
  {
    id: "silica-sand",
    slug: "silica-sand-sio2",
    name: "Silica Sand (SiO2)",
    eyebrow: "High-Purity Washed & Low-Iron Industrial Silica",
    category: "Industrial Minerals",
    grade: "99.2% Washed Silica",
    origin: "Mianwali & Surghar Range",
    tag: "Industrial Minerals",
    heroImage: "/mine copper.png",
    overview:
      "National Mines Corporation produces ultra-pure, double-washed silica sand from high-grade quartz sandstone formations. Beneficiated through attrition scrubbing, hydro-cyclone classification, and high-gradient magnetic separation, our silica sand features SiO2 concentrations above 99.2% and ultra-low iron oxide (Fe2O3 < 0.025%), making it the prime raw material for high-transmission solar glass, container bottles, foundry casting molds, and chemical silicates.",
    metrics: [
      { label: "SiO2 Purity", value: "> 99.2%" },
      { label: "Iron (Fe2O3)", value: "< 0.025%" },
      { label: "Grain Fineness", value: "AFS 45 – 55" },
      { label: "Washing Cycles", value: "Double Scrubbed" },
    ],
    deliverables: [
      "Low-iron silica sand for high-transmission solar photovoltaic glass and ultra-clear float glass",
      "Standard washed silica sand for container glass, beverage bottles, and tableware manufacturing",
      "Uniform grain size foundry sand for casting automotive engine blocks, valves, and steel molds",
      "High-purity quartz sand for sodium silicate chemical synthesis, paints, and epoxy coatings",
      "Hydraulic fracturing proppant sand for oil and gas well stimulation",
      "Supplied in bulk dry tankers, 50kg polypropylene bags, and 1.5-ton weatherproof jumbo bags",
    ],
    technicalSpecs: [
      { key: "Silicon Dioxide (SiO2)", value: "99.2% – 99.6% Minimum" },
      { key: "Iron Oxide (Fe2O3)", value: "0.018% – 0.025% (Ultra-Low)" },
      { key: "Alumina (Al2O3)", value: "< 0.35%" },
      { key: "Titanium Dioxide (TiO2)", value: "< 0.03%" },
      { key: "Grain Shape", value: "Sub-angular to rounded quartz grains" },
      { key: "Grain Size Range", value: "100–300 microns (AFS 45 to 55 calibrated)" },
    ],
    pillars: [
      {
        title: "Ultra-Low Iron Content",
        desc: "Fe2O3 below 0.025% prevents greenish tints in glass, maximizing light transmission for solar panels.",
        icon: FlaskConical,
      },
      {
        title: "Attrition Scrubbing & Washing",
        desc: "High-pressure scrubbers strip clay and iron stains from quartz grain surfaces.",
        icon: Zap,
      },
      {
        title: "Precise Grain Size Distribution",
        desc: "Hydro-cyclone classifiers ensure sharp grain sizing with zero dust or oversized grains.",
        icon: Layers,
      },
      {
        title: "Foundry Refractory Stability",
        desc: "High sintering point (>1,650°C) prevents mold deformation during molten iron casting.",
        icon: Factory,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Quartz Sandstone Quarrying",
        desc: "Friable high-grade quartz sandstone is mined from pure geological strata.",
      },
      {
        step: "02",
        title: "Attrition Scrubbing & Washing",
        desc: "High-shear attrition cells and spiral classifiers wash away clay, silt, and surface oxides.",
      },
      {
        step: "03",
        title: "Magnetic Separation & Sizing",
        desc: "High-gradient rare earth magnetic separators remove minute iron minerals, followed by hydro-sizing.",
      },
      {
        step: "04",
        title: "Fluid-Bed Drying & Bagging",
        desc: "Sand is dried in clean gas-fired fluid beds and packaged into dry bulk tankers or 1-ton jumbo bags.",
      },
    ],
    faqs: [
      {
        q: "What is the iron content of your solar and float glass silica sand?",
        a: "Our glass-grade silica sand features iron oxide (Fe2O3) below 0.025% (down to 0.018%), guaranteeing maximum optical transparency.",
      },
      {
        q: "Do you supply silica sand for foundry casting?",
        a: "Yes. We produce high-refractory sub-angular silica sand with calibrated AFS fineness (AFS 45–55) for grey iron and steel foundry casting molds.",
      },
      {
        q: "How is silica sand delivered?",
        a: "We deliver dry sand in pneumatic bulk tankers, 50kg sealed bags, or 1.5-ton weatherproof jumbo bags.",
      },
    ],
  },
];

export function getNationalMinesMineralBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_MINES_MINERALS.find(
    (m) => m.slug.toLowerCase() === slug.toLowerCase() || m.id.toLowerCase() === slug.toLowerCase()
  );
}
