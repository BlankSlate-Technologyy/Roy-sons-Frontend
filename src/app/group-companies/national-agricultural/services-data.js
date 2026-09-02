// Comprehensive Agribusiness Services Dataset for National Agricultural Corporation (Pvt) Ltd
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  FlaskConical,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users,
  ShieldCheck,
  Sprout,
  Sun,
  Zap,
  Globe,
  Scale,
  Layers,
  Factory,
} from "lucide-react";

export const NATIONAL_AGRICULTURAL_SERVICES = [
  {
    id: "agri-development",
    slug: "agricultural-development-mechanization",
    title: "Agricultural Development & Mechanization",
    subtitle: "Precision Laser Leveling, High-Tech Tractors & Harvesters",
    eyebrow: "Precision Farm Engineering & High-Capacity Machinery",
    tag: "Farm Mechanization",
    icon: Tractor,
    heroImage: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Agricultural Corporation modernizes crop cultivation through precision farm mechanization fleets. From GPS-guided laser land leveling that cuts irrigation losses by up to 35%, to computerized pneumatic seed drills, high-horsepower 4WD tractors, and automated combine harvesting fleets, we boost field operational efficiency, accelerate turnaround times, and maximize farm profitability.",
    metrics: [
      { label: "Land Leveled", value: "350K+ Acres" },
      { label: "Yield Increase", value: "+28% Avg" },
      { label: "Fleet Machinery", value: "200+ Units" },
      { label: "Fuel Efficiency", value: "22% Saved" },
    ],
    deliverables: [
      "GPS satellite-guided millimeter laser land leveling reducing irrigation runoff and water stagnation",
      "Pneumatic precision seed planters for cotton, maize, wheat, and canola with calibrated seed spacing",
      "High-capacity grain combine harvesting fleets with onboard grain loss telemetry sensors",
      "Subsoil deep-ripping and chisel plowing shattering hardpan layers up to 60cm depth",
      "Automated boom sprayers with drift-reduction nozzles for uniform pesticide and foliar application",
      "Farm machinery rental pools and certified technical equipment operator training programs",
    ],
    technicalSpecs: [
      { key: "Leveling Precision", value: "±5mm grade tolerance with dual-slope GPS laser transmitters" },
      { key: "Planting Speed", value: "Up to 12 km/h with 99.2% singulation accuracy" },
      { key: "Tractor Horsepower", value: "85 HP to 240 HP heavy 4WD fleets equipped with autosteer" },
      { key: "Harvesting Capacity", value: "35–45 acres per combine per day with 99.5% grain recovery" },
      { key: "Deep Tillage Depth", value: "450mm to 650mm subsoil hardpan penetration" },
      { key: "Service Coverage", value: "Punjab, Sindh, Balochistan & KP agricultural belts" },
    ],
    pillars: [
      {
        title: "Millimeter Laser Grading",
        desc: "Eliminates high and low spots in fields, ensuring 100% uniform water distribution across every furrow.",
        icon: Scale,
      },
      {
        title: "Pneumatic Seed Singulation",
        desc: "Places each seed at exact depth and spacing, preventing seed wastage and maximizing germination.",
        icon: Sprout,
      },
      {
        title: "Rapid Grain Harvesting",
        desc: "High-throughput combines finish harvesting in hours, avoiding severe weather and post-monsoon damage.",
        icon: Tractor,
      },
      {
        title: "Soil Hardpan Decompaction",
        desc: "Heavy deep-rippers break dense subsurface hardpan, allowing deep root penetration and water infiltration.",
        icon: Layers,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Topographical Field Survey",
        desc: "Laser transmitters map field elevations and calculate cut-fill volumes for minimum soil movement.",
      },
      {
        step: "02",
        title: "Laser Land Grading",
        desc: "Heavy scraper buckets guided by automated hydraulic laser masts grade field benches to true zero slope.",
      },
      {
        step: "03",
        title: "Precision Deep Tillage & Seeding",
        desc: "Deep rippers decompact the soil followed by pneumatic seed drills placing seed and base fertilizer simultaneously.",
      },
      {
        step: "04",
        title: "Automated Crop Harvesting",
        desc: "Modern combine harvesters reap, thresh, clean, and transfer grain directly to bulk transport trailers.",
      },
    ],
    faqs: [
      {
        q: "How does laser land leveling save irrigation water?",
        a: "By flattening field variations to a precise millimeter grade, water flows quickly and evenly across the entire plot without pooling in low spots, reducing water demand by 25% to 35%.",
      },
      {
        q: "What types of machinery can be booked for custom farming?",
        a: "We offer GPS laser levelers, high-horsepower tractors, pneumatic row crop planters, rotavators, disc harrows, self-propelled boom sprayers, and combine harvesters.",
      },
      {
        q: "Do you provide equipment with trained operators?",
        a: "Yes. All our machinery operations include certified agricultural machinery operators and field technicians.",
      },
    ],
  },
  {
    id: "dairy-development",
    slug: "dairy-development-cold-chain",
    title: "Dairy Development & Cold Chain Hubs",
    subtitle: "Automated Milking Parlors & Rapid Milk Chilling Networks",
    eyebrow: "Commercial Dairy Architecture & Farm-to-Processor Logistics",
    tag: "Dairy Infrastructure",
    icon: Building2,
    heroImage: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Agricultural Corporation delivers end-to-end commercial dairy farm engineering. From climate-controlled free-stall sheds with evaporative cooling fans and automated electronic herringbone/rotary milking parlors, to rapid direct-expansion bulk milk chillers and village collection networks, we guarantee hygienic milk production meeting strict international food standards.",
    metrics: [
      { label: "Daily Milk Processed", value: "250K+ Liters" },
      { label: "Cooling Speed", value: "35°C to 4°C in <2hr" },
      { label: "Collection Hubs", value: "120+ Centers" },
      { label: "Bacterial Quality", value: "Grade-A Export" },
    ],
    deliverables: [
      "Turnkey civil design and construction of ventilated free-stall dairy cow sheds and maternity pens",
      "Automated electronic herringbone and rotary milking parlors with computerized milk yield recording",
      "Direct-expansion food-grade stainless steel (SS304) bulk milk chillers with automatic CIP cleaning",
      "Total Mixed Ration (TMR) feed wagon mixers ensuring balanced nutritional intake for dairy cows",
      "High-density corn silage baling and vacuum-wrapping systems preserving year-round feed nutrition",
      "Village-level Milk Collection Centers (MCC) equipped with digital ultrasonic fat and SNF testing analyzers",
    ],
    technicalSpecs: [
      { key: "Milking Parlor Types", value: "Herringbone (2x6 to 2x16) & High-Capacity Rotary Parlors" },
      { key: "Chiller Temperature", value: "Rapid chilling down to 4.0 °C (39.2 °F) with digital datalogging" },
      { key: "Chiller Capacity Range", value: "500 Liters to 15,000 Liters stainless steel tanks" },
      { key: "Milk Testing Metrics", value: "Fat %, Solid-Not-Fat (SNF), Added Water %, Density & Acidity" },
      { key: "Barn Cooling Tech", value: "High-volume low-speed (HVLS) fans with high-pressure mist nozzles" },
      { key: "Compliance Standards", value: "ISO 22000, HACCP & Punjab Food Authority Certified" },
    ],
    pillars: [
      {
        title: "Automated Parlor Milking",
        desc: "Pulsation and vacuum-regulated clusters milk animals gently and hygienically without human touch.",
        icon: Factory,
      },
      {
        title: "Sub-4°C Rapid Chilling",
        desc: "Stops bacterial proliferation instantly by chilling raw milk from 35°C to 4°C within 90 minutes of extraction.",
        icon: ShieldCheck,
      },
      {
        title: "TMR Feed Optimization",
        desc: "Custom mixed rations of corn silage, alfalfa, and concentrates maximize daily milk yield per cow.",
        icon: Wheat,
      },
      {
        title: "Digital Fat/SNF Transparency",
        desc: "Ultrasonic milk testing ensures transparent pricing and quality bonuses for rural smallholder dairy farmers.",
        icon: Award,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Farm Design & Civil Layout",
        desc: "Engineering dairy barn orientation, bedding stalls, feeding lanes, and slurry collection pits.",
      },
      {
        step: "02",
        title: "Milking & Cooling Installation",
        desc: "Erecting food-grade vacuum pipelines, electronic milk meters, and stainless steel bulk chillers.",
      },
      {
        step: "03",
        title: "Silage & Feed Setup",
        desc: "Deploying forage harvesters, bunker silos, and TMR wagon mixers for uninterrupted herd nutrition.",
      },
      {
        step: "04",
        title: "Cold Chain Logistics Integration",
        desc: "Linking farm chillers directly to insulated road milk tankers supplying national dairy processors.",
      },
    ],
    faqs: [
      {
        q: "What capacity dairy farms can National Agricultural Corporation set up?",
        a: "We engineer turn-key dairy farms ranging from commercial 50-cow family herds up to industrial 5,000-cow corporate dairy estates.",
      },
      {
        q: "Why is rapid milk chilling critical for dairy profitability?",
        a: "Raw milk leaves the cow at 35°C, where bacteria double every 20 minutes. Rapid cooling down to 4°C arrests bacterial growth, preventing milk souring and qualifying for premium processor pricing.",
      },
      {
        q: "Do you supply silage baling and packing machinery?",
        a: "Yes. We provide heavy-duty corn silage balers and stretch-film wrappers that preserve high-energy silage for up to 18 months without spoilage.",
      },
    ],
  },
  {
    id: "irrigation",
    slug: "smart-irrigation-water-systems",
    title: "Smart Irrigation & Water Systems",
    subtitle: "Center-Pivot Sprinklers & Solar-Powered Drip Networks",
    eyebrow: "High-Efficiency Water Engineering & Solar Tube-Wells",
    tag: "Water Management",
    icon: Droplets,
    heroImage: "/agri_hero_farm.svg",
    overview:
      "National Agricultural Corporation engineers climate-resilient water management solutions. Specializing in automated center-pivot sprinklers, subsurface and surface drip irrigation systems, solar hybrid pumping stations, and geomembrane-lined farm storage ponds, our systems cut water and energy consumption by up to 50% while increasing crop yields.",
    metrics: [
      { label: "Water Conserved", value: "Up to 50%" },
      { label: "Acreage Under Drip", value: "120K+ Acres" },
      { label: "Solar Pumping", value: "500+ Sites" },
      { label: "Fertigation Savings", value: "40% Fertilizer" },
    ],
    deliverables: [
      "Automated center-pivot irrigation systems irrigating 50 to 200 acres per machine in circular sweeps",
      "Pressure-compensated drip irrigation lines for citrus orchards, olive groves, cotton, and vegetables",
      "Solar-powered submersible tube-wells operating with high-efficiency MPPT variable frequency drives (VFD)",
      "Automated fertigation Venturi dosing injection tanks delivering nutrients directly into irrigation lines",
      "Heavy-duty HDPE geomembrane pond lining preventing seepage loss in sandy soils",
      "Wireless IoT soil moisture sensors and weather station telemetry automating watering cycles",
    ],
    technicalSpecs: [
      { key: "Water Efficiency", value: "90% – 95% application efficiency (vs 40% flood irrigation)" },
      { key: "Drip Emitter Flow", value: "1.2 to 4.0 Liters/hour pressure-compensated emitters" },
      { key: "Center Pivot Span", value: "Galvanized steel spans up to 60 meters each, covering up to 250 acres" },
      { key: "Solar Pumping Power", value: "5 kW to 75 kW solar hybrid submersible pumping systems" },
      { key: "Filter Systems", value: "Automatic backwashing disc filters, sand media filters & hydro-cyclones" },
      { key: "Pipe Lifespan", value: "UV-stabilized virgin polyethylene with 10+ year outdoor warranty" },
    ],
    pillars: [
      {
        title: "Root-Zone Drip Precision",
        desc: "Delivers exact water and fertilizer micro-doses directly to roots, eliminating weed growth and evaporation.",
        icon: Droplets,
      },
      {
        title: "Zero-Electricity Solar Power",
        desc: "Solar VFD pumps draw water reliably throughout sunlight hours with zero diesel or grid electricity costs.",
        icon: Sun,
      },
      {
        title: "Center-Pivot Automation",
        desc: "One single operator can irrigate 150 acres with computerized uniform rainfall simulation.",
        icon: Tractor,
      },
      {
        title: "Fertigation Fertilizer Savings",
        desc: "Injecting soluble nutrients directly into irrigation lines cuts overall fertilizer wastage by 40%.",
        icon: FlaskConical,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Hydraulic Survey & Water Testing",
        desc: "Analyzing water discharge, salinity (EC/TDS), and field topography to calculate pipe sizing.",
      },
      {
        step: "02",
        title: "CAD Hydraulic System Design",
        desc: "Designing mainlines, sub-mains, manifold stations, filtration units, and pressure-compensating dripper grids.",
      },
      {
        step: "03",
        title: "Installation & Solar Integration",
        desc: "Trenching pipes, installing solar arrays, submersible pumps, automatic filter stations, and fertigation tanks.",
      },
      {
        step: "04",
        title: "Commissioning & Farmer Training",
        desc: "Pressure testing, dripper flow calibration, and training farm staff on system maintenance and flushing.",
      },
    ],
    faqs: [
      {
        q: "How much water and electricity does drip irrigation save?",
        a: "Drip irrigation saves 40% to 50% of water compared to traditional canal/flood irrigation, and when paired with solar pumps, reduces electricity/diesel pumping costs to zero.",
      },
      {
        q: "Can drip irrigation be used for field crops like cotton and maize as well as orchards?",
        a: "Yes. We install permanent surface drip for orchards (citrus, mango, olive) and seasonal thin-wall drip tape for row crops like cotton, maize, sugarcane, and vegetables.",
      },
      {
        q: "What maintenance does a smart drip irrigation system require?",
        a: "Regular maintenance involves periodic filter backwashing, routine flush valve opening to clear sediment, and seasonal acid washing to prevent mineral scale build-up in emitters.",
      },
    ],
  },
  {
    id: "livestock",
    slug: "livestock-management-breeding-genetics",
    title: "Livestock Management & Breeding Genetics",
    subtitle: "High-Yield Genetic Improvement & Veterinary Healthcare",
    eyebrow: "Elite Herd Genetics, Artificial Insemination & Herd Health",
    tag: "Animal Husbandry",
    icon: Leaf,
    heroImage: "/agri_dairy_livestock.svg",
    overview:
      "National Agricultural Corporation delivers comprehensive livestock genetic upgrade programs. Featuring imported pedigree Holstein-Friesian, Jersey, and certified pure Sahiwal semen, sexed semen artificial insemination (AI), computerized herd management, and preventative veterinary healthcare protocols, we transform herd milk yield and disease resistance.",
    metrics: [
      { label: "AI Inseminations", value: "150K+ Cattle" },
      { label: "Conception Rate", value: "62% First Service" },
      { label: "Female Calf Ratio", value: "90% Sexed Semen" },
      { label: "Vaccination Coverage", value: "100% Disease Free" },
    ],
    deliverables: [
      "High-genetic-merit sexed semen delivering 90%+ female heifer calf birth rates",
      "Pure pedigree Sahiwal and Cholistani cattle breeding lines preserving indigenous heat tolerance",
      "Liquid nitrogen cryogenic field storage and mobile AI technician dispatch networks",
      "Routine preventative herd vaccination schedules against Foot-and-Mouth Disease (FMD) and HS",
      "RFID digital ear tags and computerized herd health tracking for lactation cycles and heat detection",
      "Custom mineral lick blocks and bypass fat supplements optimizing dairy cow body condition score (BCS)",
    ],
    technicalSpecs: [
      { key: "Semen Genetics", value: "Progeny-tested top 1% international sire lines & certified local pedigree" },
      { key: "Sexed Semen Accuracy", value: "90% female calf gender selection guarantee" },
      { key: "Cryogenic Storage", value: "-196 °C liquid nitrogen transport containers with vacuum insulation" },
      { key: "Veterinary Vaccines", value: "Inactivated oil-adjuvant vaccines for FMD, Hemorrhagic Septicemia (HS), and Anthrax" },
      { key: "Ear Tagging Tech", value: "ISO 11784/11785 compliant RFID HDX/FDX electronic livestock tags" },
      { key: "Advisory Service", value: "Certified veterinary doctors and animal nutritionists" },
    ],
    pillars: [
      {
        title: "Sexed Heifer Semen",
        desc: "Guarantees 90% female calves, enabling dairy farms to expand their milking herds rapidly without buying cattle.",
        icon: Award,
      },
      {
        title: "Indigenous Heat Resilience",
        desc: "Crossbreeding imported high-yield sires with indigenous Sahiwal cows creates high-producing, heat-hardy herds.",
        icon: Sun,
      },
      {
        title: "Preventative Herd Health",
        desc: "Comprehensive vaccination, mastitis testing, and deworming schedules minimize animal mortality.",
        icon: ShieldCheck,
      },
      {
        title: "Digital Heat Detection",
        desc: "Automated RFID collars and pedometers detect cow estrus standing heat timing for optimal insemination.",
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Herd Genetic Audit",
        desc: "Veterinarians assess the current herd's milk yield, body structure, breeding history, and health status.",
      },
      {
        step: "02",
        title: "Sire Selection & Estrus Synchronization",
        desc: "Selecting matching sire genetics and using hormonal protocols to synchronize breeding cycles.",
      },
      {
        step: "03",
        title: "Precision Artificial Insemination",
        desc: "Certified AI technicians inseminate cows using thawed cryogenic straws at the optimal fertile window.",
      },
      {
        step: "04",
        title: "Pregnancy Confirmation & Care",
        desc: "Ultrasound pregnancy confirmation at 35 days, followed by balanced transitional nutrition for pregnant heifers.",
      },
    ],
    faqs: [
      {
        q: "What is sexed semen and how does it benefit dairy farmers?",
        a: "Sexed semen is processed to separate female (X) chromosomes from male (Y) chromosomes. Using sexed semen produces over 90% female heifer calves, eliminating unprofitable male calves and accelerating herd expansion.",
      },
      {
        q: "How does National Agricultural Corporation ensure cold-chain semen viability?",
        a: "All semen straws are stored and transported in dedicated -196°C liquid nitrogen cryogenic flasks monitored daily for nitrogen levels to ensure 100% sperm motility and fertility.",
      },
      {
        q: "Do you provide vaccination and health management services for dairy herds?",
        a: "Yes. We provide scheduled preventative vaccination programs, mastitis management, hoof trimming, deworming, and emergency veterinary call-out support.",
      },
    ],
  },
  {
    id: "seed-tech",
    slug: "seed-technology-crop-nutrition",
    title: "Seed Technology & Crop Nutrition",
    subtitle: "Certified Hybrid Seeds & Organic Bio-Fertilizers",
    eyebrow: "Drought-Resilient Hybrids & Balanced Soil Microbiology",
    tag: "Crop Nutrition",
    icon: FlaskConical,
    heroImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Agricultural Corporation supplies certified high-germination hybrid seeds and advanced crop nutrition solutions. Our research-backed hybrid varieties for wheat, cotton, maize, rice, and oilseeds deliver high drought and heat tolerance, while our organic liquid bio-fertilizers, humic acid, and micronutrient foliar sprays revitalize depleted soil microbiology.",
    metrics: [
      { label: "Germination Rate", value: "> 95% Verified" },
      { label: "Seed Treated", value: "100% Fungicide" },
      { label: "Acreage Cultivated", value: "500K+ Acres" },
      { label: "Organic Bio-Formulas", value: "15+ Blends" },
    ],
    deliverables: [
      "Certified high-yield hybrid wheat, maize, cotton, and rice seeds with laboratory verified germination (>95%)",
      "Pre-treated seeds coated with premium systemic fungicides, insecticides, and biostimulant polymers",
      "Organic liquid humic acid and fulvic acid soil conditioners enhancing nutrient cation exchange capacity (CEC)",
      "Chelated micronutrient foliar sprays (Zinc, Boron, Iron, Manganese, Magnesium) curing crop deficiencies",
      "Soil testing laboratory N-P-K mineral assays with custom soil correction recommendations",
      "Integrated Pest Management (IPM) bio-pesticides reducing synthetic chemical pesticide residues",
    ],
    technicalSpecs: [
      { key: "Germination Standard", value: "95.0% to 98.5% laboratory certified germination" },
      { key: "Seed Purity", value: "> 99.0% physical and genetic purity with zero noxious weed seeds" },
      { key: "Bio-Fertilizer Organic Carbon", value: "> 22% organic matter with active beneficial microbial consortia" },
      { key: "Micronutrient Formulation", value: "EDTA-chelated liquid minerals for rapid 100% foliar absorption" },
      { key: "Packaging Standard", value: "Moisture-proof sealed bags with holographic security anti-counterfeit seals" },
      { key: "Certification Standard", value: "Federal Seed Certification and Registration Department (FSC&RD) certified" },
    ],
    pillars: [
      {
        title: "High Germination Vigor",
        desc: "Certified seeds germinate uniformly within 72 hours, creating dense, vigorous plant stands with strong root systems.",
        icon: Sprout,
      },
      {
        title: "Drought & Heat Resilience",
        desc: "Bred specifically to withstand high peak summer temperatures and intermittent irrigation water shortages.",
        icon: Sun,
      },
      {
        title: "Soil Microbiology Restoration",
        desc: "Liquid bio-fertilizers restore beneficial mycorrhizal fungi and nitrogen-fixing bacteria in depleted soils.",
        icon: FlaskConical,
      },
      {
        title: "Chelated Foliar Absorption",
        desc: "Chelated micro-elements are absorbed directly through plant leaves within 4 hours of spraying.",
        icon: Leaf,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Soil Chemistry Assay",
        desc: "Sampling soil to test pH, organic matter, and baseline nitrogen, phosphorus, and potassium levels.",
      },
      {
        step: "02",
        title: "Custom Seed & Nutrient Prescription",
        desc: "Matching the ideal hybrid seed variety and fertilizer schedule to the farm's soil profile and climate zone.",
      },
      {
        step: "03",
        title: "Pre-Treated Precision Sowing",
        desc: "Sowing polymer-coated disease-resistant seeds at recommended seed rates and calibrated soil depths.",
      },
      {
        step: "04",
        title: "Foliar Nutrition & Growth Monitoring",
        desc: "Applying scheduled foliar micronutrient sprays during critical tillering, flowering, and grain-filling stages.",
      },
    ],
    faqs: [
      {
        q: "Are National Agricultural Corporation seeds certified by government authorities?",
        a: "Yes. All our seed lots are rigorously inspected, tested, and certified by the Federal Seed Certification and Registration Department (FSC&RD) before distribution.",
      },
      {
        q: "What is the advantage of polymer seed coating?",
        a: "Polymer coating embeds systemic fungicides and biostimulants directly onto the seed surface, protecting seedlings from soil-borne fungi and seedling pests for the first 3 weeks of growth.",
      },
      {
        q: "How do bio-fertilizers improve crop yields?",
        a: "Bio-fertilizers introduce active beneficial bacteria that solubilize insoluble phosphorus in the soil, fix atmospheric nitrogen, and improve soil moisture retention, leading to higher root mass and grain weight.",
      },
    ],
  },
  {
    id: "consultancy",
    slug: "agribusiness-advisory-farm-setup",
    title: "Agribusiness Advisory & Farm Setup",
    subtitle: "Turnkey Corporate Farm Planning & Feasibility Audits",
    eyebrow: "Bankable Farm Feasibility, Greenhouse Tech & Supply Chain",
    tag: "Agri Consultancy",
    icon: Wheat,
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Agricultural Corporation provides strategic management consultancy and technical advisory for corporate farm investors, sovereign agricultural funds, institutional landholders, and progressive growers. We formulate bankable feasibility studies, design automated greenhouse operations, optimize supply chains, and secure organic export certifications.",
    metrics: [
      { label: "Corporate Projects", value: "80+ Audited" },
      { label: "ROI Optimization", value: "24% – 32% IRR" },
      { label: "Greenhouses Built", value: "250+ Tunnel Units" },
      { label: "Export Market Setup", value: "Gulf & UK Linkages" },
    ],
    deliverables: [
      "Bankable financial feasibility models, capital expenditure budgets, and 10-year cash flow projections",
      "Climate-controlled high-tunnel and multi-span greenhouse engineering with automated climate computer sensors",
      "Hydroponic and substrate berry, capsicum, and tomato production facility design",
      "GlobalG.A.P. and Organic farming certification audits and international export compliance advisory",
      "Direct off-take contracts and supply chain integration with national supermarkets and Gulf food importers",
      "Full-time corporate farm executive management and agronomic supervisory staff placement",
    ],
    technicalSpecs: [
      { key: "Feasibility Modeling", value: "Comprehensive discounted cash flow (DCF), IRR, NPV, and sensitivity analysis" },
      { key: "Greenhouse Tech", value: "Galvanized steel multi-spans with automated shade screens, pad-and-fan cooling" },
      { key: "Hydroponic Systems", value: "Cocopeat slab drip systems & Nutrient Film Technique (NFT) channels" },
      { key: "Compliance Certifications", value: "GlobalG.A.P., HACCP, USDA Organic & EU Organic compliance alignment" },
      { key: "Staff Placement", value: "Master agronomists, farm managers, and certified irrigation technicians" },
      { key: "Advisory Scope", value: "End-to-end concept design, implementation, and commercial harvesting management" },
    ],
    pillars: [
      {
        title: "Bankable Financial Feasibility",
        desc: "Rigorous financial modeling backed by real-world agronomic cost benchmarks for commercial bank financing.",
        icon: Scale,
      },
      {
        title: "High-Tech Greenhouse Farming",
        desc: "Year-round climate-controlled vegetable and berry production yielding 5x to 8x higher than open fields.",
        icon: Sprout,
      },
      {
        title: "Global Export Linkages",
        desc: "Connecting fresh produce directly to high-margin export markets in the GCC, Europe, and Far East.",
        icon: Globe,
      },
      {
        title: "Turnkey Farm Management",
        desc: "Providing professional farm managers and agronomists to operate client estates with complete accountability.",
        icon: Users,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Site & Soil Due Diligence",
        desc: "Conducting topographical, hydrological, soil, and market viability assessments on the client's land.",
      },
      {
        step: "02",
        title: "Master Planning & Financial Modeling",
        desc: "Formulating crop calendars, machinery requirements, irrigation layouts, and 5-year financial returns.",
      },
      {
        step: "03",
        title: "Turnkey Execution & Setup",
        desc: "Constructing farm infrastructure, greenhouse tunnels, solar tube-wells, and machinery sheds.",
      },
      {
        step: "04",
        title: "Agronomic Oversight & Marketing",
        desc: "Deploying farm managers, supervising crop cycles, and managing post-harvest sales to premium buyers.",
      },
    ],
    faqs: [
      {
        q: "What is included in a National Agricultural Corporation farm feasibility study?",
        a: "Our feasibility studies include soil and water laboratory assays, climate risk analysis, crop suitability recommendations, CAPEX/OPEX budgets, machinery requirements, and projected 10-year financial returns (IRR and payback period).",
      },
      {
        q: "Can you design climate-controlled greenhouses for off-season vegetable production?",
        a: "Yes. We engineer commercial high-tunnel and multi-span automated greenhouses equipped with evaporative cooling pads, thermal shade screens, and fertigation automation.",
      },
      {
        q: "Do you offer complete management services for absentee landholders?",
        a: "Yes. We offer contract farm management services where our team of agronomists, machinery operators, and account managers run your agricultural estate with complete transparency and reporting.",
      },
    ],
  },
];

export function getNationalAgriculturalServiceBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_AGRICULTURAL_SERVICES.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id.toLowerCase() === slug.toLowerCase()
  );
}
