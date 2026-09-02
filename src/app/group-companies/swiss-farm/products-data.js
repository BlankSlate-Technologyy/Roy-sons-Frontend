// Comprehensive Dairy Products & Genetics Dataset for Swiss Farms (Pvt) Ltd
import {
  Truck,
  Users,
  Leaf,
  ShieldCheck,
  HeartPulse,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Package,
  Scale,
  FlaskConical,
  Building2,
  Layers,
  Factory,
  Sun,
  Activity,
  Zap,
} from "lucide-react";

export const SWISS_FARM_PRODUCTS = [
  {
    id: "bulk-raw-milk",
    slug: "grade-a-bulk-raw-chilled-milk",
    name: "Grade-A Bulk Raw Chilled Milk",
    subtitle: "Untouched Farm-Fresh Whole Milk Chilled to 3.5°C in Insulated Tankers",
    eyebrow: "Grade-A Certified Raw Milk for Dairy & Cheese Processors",
    category: "Bulk Raw Milk",
    tag: "Commercial B2B Supply",
    heroImage: "/swiss-card1.png",
    overview:
      "Swiss Farms Grade-A Bulk Raw Milk is extracted in fully automated electronic rotary parlors and instantly chilled to 3.5°C within seconds through sanitary plate heat exchangers. Untouched by human hands from udder to delivery tanker, our milk features a guaranteed natural butterfat range of 3.8% to 4.2%, minimum 8.5% Solid-Not-Fat (SNF), ultra-low somatic cell count (SCC < 150,000), and verified zero antibiotic residues.",
    metrics: [
      { label: "Butterfat Range", value: "3.8% – 4.2%" },
      { label: "SNF Content", value: "> 8.5% Minimum" },
      { label: "Chilled Temperature", value: "3.5°C Instant" },
      { label: "Antibiotic Status", value: "0.00% Zero Residue" },
    ],
    deliverables: [
      "Daily bulk deliveries in dedicated 30,000-liter food-grade stainless steel (SS316) refrigerated road tankers",
      "Real-time GPS temperature logging ensuring milk remains under 4°C throughout highway transit",
      "Certified batch laboratory assay certificates for butterfat %, SNF %, protein %, acidity, and bacterial purity",
      "Rapid SNAP multi-panel testing verifying 100% absence of beta-lactam and tetracycline antibiotics",
      "Freezing-point depression cryoscope certification guaranteeing zero added water adulteration",
      "Custom supply contracts with volume price tiering for major commercial dairy, yogurt, and cheese manufacturers",
    ],
    technicalSpecs: [
      { key: "Butterfat Percentage", value: "3.80% to 4.20% (Natural Unadulterated Full-Cream)" },
      { key: "Solid-Not-Fat (SNF)", value: "8.50% to 8.80% Minimum" },
      { key: "Milk Protein", value: "3.20% to 3.45% High-Quality Casein" },
      { key: "Somatic Cell Count (SCC)", value: "< 150,000 cells/mL (International Grade-A Benchmark)" },
      { key: "Total Plate Count (TPC)", value: "< 25,000 CFU/mL (Significantly better than national standards)" },
      { key: "Delivery Mode", value: "Food-grade insulated road milk tankers (5,000L to 30,000L)" },
    ],
    pillars: [
      {
        title: "Untouched Closed Pipeline",
        desc: "Closed sanitary vacuum lines protect raw milk from dust, air, and environmental contamination.",
        icon: ShieldCheck,
      },
      {
        title: "Sub-4°C Instant Cooling",
        desc: "Plate heat exchange cools milk in seconds, locking in fresh farm sweetness and halting acidity buildup.",
        icon: Factory,
      },
      {
        title: "High Natural Butterfat",
        desc: "Formulated TMR feeds deliver rich 3.8%–4.2% butterfat ideal for premium butter, cheese, and yogurt.",
        icon: Sparkles,
      },
      {
        title: "Zero-Adulteration Guarantee",
        desc: "Daily laboratory spectrometry guarantees 100% pure raw milk with zero preservatives or water dilution.",
        icon: Award,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Rotary Automated Milking",
        desc: "Cows are milked in electronic rotary parlors with automated cup detach and real-time yield recording.",
      },
      {
        step: "02",
        title: "Instant 3.5°C Plate Chilling",
        desc: "Milk passes through sanitary plate heat exchangers, dropping from 35°C to 3.5°C within 60 seconds.",
      },
      {
        step: "03",
        title: "Laboratory Chemical Assay",
        desc: "On-site lab analyzes fat, SNF, protein, somatic cells, and tests for zero antibiotic residues.",
      },
      {
        step: "04",
        title: "Insulated Tanker Dispatch",
        desc: "Loaded into sanitized insulated road tankers and sealed with security tamper-evident customs tags.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum volume order for Swiss Farms bulk raw milk?",
        a: "We supply commercial clients starting from 5,000 liters per delivery up to full 30,000-liter dedicated road tankers on daily or scheduled weekly contracts.",
      },
      {
        q: "Can Swiss Farms customize butterfat levels for cheese or ice cream makers?",
        a: "Yes. Through herd nutritional adjustments and batch allocations, we can supply dedicated milk streams with higher butterfat (up to 4.3%+) tailored for cheese and artisanal ice cream manufacturing.",
      },
      {
        q: "How do you verify tanker temperature during transit?",
        a: "Every Swiss Farms road tanker is equipped with an electronic digital temperature datalogger connected via GPS telemetry, providing the buyer with a complete temperature log upon arrival.",
      },
    ],
  },
  {
    id: "pasteurized-milk",
    slug: "htst-pasteurized-institutional-milk",
    name: "HTST Pasteurized Institutional Milk",
    subtitle: "Continuous-Flow HTST Pasteurized Milk in Food-Grade 20L & 50L Drums",
    eyebrow: "Sanitized Institutional Dairy for Hotels, Hospitals & Bakeries",
    tag: "Hygienic Pasteurized",
    heroImage: "/swiss-card2.png",
    overview:
      "Swiss Farms HTST Pasteurized Milk is processed using continuous High-Temperature Short-Time (72°C for 15 seconds) pasteurization and immediate homogenization. This precision process eliminates all harmful pathogens and bacteria while preserving 100% of the natural calcium, vitamins, enzymes, and fresh flavor. Supplied in sealed food-grade 20-liter and 50-liter reusable stainless drums for luxury hotels, commercial bakeries, catering institutions, and hospitals.",
    metrics: [
      { label: "Pasteurization Temp", value: "72°C for 15s" },
      { label: "Standardized Fat", value: "3.50% Fat" },
      { label: "Refrigerated Life", value: "10 Days at <4°C" },
      { label: "Packaging Size", value: "20L & 50L Drums" },
    ],
    deliverables: [
      "Precision continuous-flow HTST pasteurization destroying 100% of pathogenic microorganisms",
      "High-pressure homogenization breaking fat globules uniformly for a smooth, creamy mouthfeel",
      "Standardized at 3.5% fat and 8.5% SNF for consistent cooking, baking, and beverage recipes",
      "Sealed food-grade stainless steel (SS304) returnable drums and bag-in-box institutional packaging",
      "Refrigerated city delivery fleets delivering directly to commercial kitchens across major cities",
      "Certified Punjab Food Authority (PFA) and Halal laboratory compliance certificates with every consignment",
    ],
    technicalSpecs: [
      { key: "Pasteurization Method", value: "Continuous High-Temperature Short-Time (HTST) 72°C–75°C for 15–20 sec" },
      { key: "Homogenization Pressure", value: "Two-stage homogenization at 200 bar (2,900 PSI)" },
      { key: "Fat Standardization", value: "Standardized 3.50% Full-Cream (or 1.50% Low-Fat on custom order)" },
      { key: "Shelf Life", value: "10 to 12 Days stored at continuous 2°C to 4°C refrigerated temperatures" },
      { key: "Packaging Options", value: "20-Liter Food-Grade Drums, 50-Liter SS304 Containers, 1,000L Tote Bins" },
      { key: "Pathogen Status", value: "Zero Salmonella, Listeria, E. coli, or Staphylococcus aureus" },
    ],
    pillars: [
      {
        title: "HTST Thermal Safety",
        desc: "Eliminates 100% of bacteria without boiling or scorching the milk, preserving vital nutrients and natural taste.",
        icon: FlaskConical,
      },
      {
        title: "Two-Stage Homogenization",
        desc: "Blends butterfat microscopically, preventing cream separation and ensuring consistent texture in recipes.",
        icon: Factory,
      },
      {
        title: "Tamper-Evident Packaging",
        desc: "Sanitized food-grade containers sealed with unique serial security locks prevent any adulteration in transit.",
        icon: Package,
      },
      {
        title: "Direct Kitchen Logistics",
        desc: "Early morning refrigerated van deliveries direct to hotel storerooms and institutional commissary kitchens.",
        icon: Truck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Raw Milk Standardization",
        desc: "Raw milk is separated, standardized to 3.5% fat, and deaerated under vacuum.",
      },
      {
        step: "02",
        title: "HTST Heating & Homogenization",
        desc: "Heated rapidly to 72°C for 15 seconds, passed through two-stage homogenizer, and cooled instantly to 2°C.",
      },
      {
        step: "03",
        title: "Sterile Drum Filling",
        desc: "Packed into automated clean-in-place sanitized stainless steel drums under laminar airflow hoods.",
      },
      {
        step: "04",
        title: "Chilled Dispatch",
        desc: "Loaded into refrigerated delivery vans maintained at 2°C–4°C and delivered to commercial kitchens.",
      },
    ],
    faqs: [
      {
        q: "How does HTST pasteurization differ from UHT long-life milk?",
        a: "UHT milk is heated to extreme temperatures (135°C–150°C), altering its protein structure and natural fresh taste. HTST pasteurization (72°C for 15 sec) destroys all pathogens while preserving the raw milk's natural fresh flavor, enzymes, and vitamins.",
      },
      {
        q: "What packaging sizes are available for commercial kitchens?",
        a: "We supply pasteurized milk in food-grade returnable 20-liter and 50-liter stainless steel drums, as well as 1,000-liter insulated bulk tote bins for industrial food plants.",
      },
      {
        q: "What is the shelf life of Swiss Farms pasteurized milk?",
        a: "When kept continuously refrigerated between 2°C and 4°C, our pasteurized milk maintains fresh Grade-A quality for 10 to 12 days.",
      },
    ],
  },
  {
    id: "holstein-heifers",
    slug: "pedigree-holstein-friesian-heifers",
    name: "Pedigree Holstein-Friesian Heifers",
    subtitle: "Certified Disease-Free 5–7 Month Pregnant Heifers with Verified Genomic Linages",
    eyebrow: "Elite Live Cattle Genetics with Certified Calving Lineages",
    tag: "Elite Live Cattle",
    heroImage: "/swiss-card3.png",
    overview:
      "Swiss Farms breeds and supplies top-tier pregnant and maiden Holstein-Friesian and Jersey dairy heifers. Reared on balanced nutritional TMR diets in climate-controlled cross-ventilated barns, each heifer features certified 5-generation genomic parentage from top 1% TPI international sires, certified disease-free status (FMD, TB, Brucellosis negative), and guaranteed first-lactation milk potential exceeding 8,500 kg.",
    metrics: [
      { label: "Lactation Potential", value: "8,500+ Liters / Year" },
      { label: "Pregnancy Stage", value: "5–7 Months Gestation" },
      { label: "Health Certification", value: "100% Disease-Free" },
      { label: "Sire Genetic Merit", value: "Top 1% TPI Ranking" },
    ],
    deliverables: [
      "Certified 5 to 7-month pregnant heifers confirmed via ultrasound with sexed female calf guarantee",
      "Official 5-generation pedigree certificate showing verified US/European genomic parentage and TPI ratings",
      "Complete lifetime veterinary vaccination passport (FMD, HS, Anthrax, Brucellosis S19 vaccinated)",
      "Screened and certified 100% free of Bovine Viral Diarrhea (BVD), Johne's Disease, and Leucosis",
      "Acclimatized to local climatic conditions and trained on automatic free-stall rotary milking parlors",
      "Safe, humane livestock transport in specialized multi-deck ventilated cattle haulers with veterinary escorts",
    ],
    technicalSpecs: [
      { key: "Breed Classification", value: "100% Purebred Holstein-Friesian (Black & White) / Pedigree Jersey" },
      { key: "Age at Sale", value: "20 to 24 Months of age (Pregnant with first calf)" },
      { key: "Body Weight", value: "520 kg to 580 kg (Optimal Body Condition Score 3.25 to 3.50)" },
      { key: "Estimated First Lactation", value: "28 to 35 Liters daily peak milk yield (8,500 – 10,500 kg per 305-day lactation)" },
      { key: "Service Sire", value: "Bred to top genomic calving-ease sexed bulls (Sire Calving Ease < 1.8%)" },
      { key: "Selection Process", value: "Buyers welcome to physically inspect and select individual animals on farm" },
    ],
    pillars: [
      {
        title: "Top 1% TPI Sire Lineage",
        desc: "Bred from world-class sires selected for high milk solids, strong teat placement, and long productive life.",
        icon: Award,
      },
      {
        title: "Sexed Heifer Calves Guaranteed",
        desc: "Every pregnant heifer carries a confirmed female calf, ensuring buyer herds expand immediately upon calving.",
        icon: Sparkles,
      },
      {
        title: "Climate-Acclimatized Animals",
        desc: "Reared in local conditions with high immunity, adapting smoothly to new farm environments without milk drop.",
        icon: Sun,
      },
      {
        title: "Certified Disease-Free Status",
        desc: "Backed by rigorous laboratory blood screening ensuring buyers bring only clean, healthy genetics to their farm.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Buyer Consultation & Pedigree Review",
        desc: "Buyers review genomic catalogs and inspect heifers in dedicated presentation pens on farm.",
      },
      {
        step: "02",
        title: "Veterinary Re-Screening & Ultrasound",
        desc: "On-site ultrasound confirms pregnancy viability and fetal health in the presence of the buyer.",
      },
      {
        step: "03",
        title: "Health Passport & Export Clearance",
        desc: "Veterinarians issue official health certificates, vaccination records, and pedigree registration papers.",
      },
      {
        step: "04",
        title: "Specialized Livestock Transport",
        desc: "Loaded onto padded livestock haulers with bedding, fresh water, and feed for safe transit to buyer's farm.",
      },
    ],
    faqs: [
      {
        q: "What is the expected daily milk yield of Swiss Farms first-calving heifers?",
        a: "Under proper nutritional management (TMR feeding), our Holstein-Friesian heifers peak at 28 to 35 liters of milk per day in their first lactation, averaging over 8,500 to 10,000 liters across 305 lactation days.",
      },
      {
        q: "Can buyers inspect animals on the farm before purchasing?",
        a: "Yes. We invite prospective buyers and their veterinary advisors to tour our facilities, review individual animal records, and select their preferred heifers directly from our pens.",
      },
      {
        q: "Do you arrange transportation for purchased cattle?",
        a: "Yes. We arrange specialized padded cattle transport trucks equipped with rubber non-slip flooring and feed/water provisions to deliver cattle safely anywhere in Pakistan.",
      },
    ],
  },
  {
    id: "semen-straws",
    slug: "sexed-bovine-semen-straws",
    name: "Sexed Bovine Semen Straws",
    subtitle: "Cryogenically Preserved 92% Female-Sorted Semen from Elite International Sires",
    eyebrow: "Flow-Cytometry Sorted Bovine Genetics & Cryogenic Logistics",
    tag: "Genetic Technology",
    heroImage: "/swiss-farm-hero.png",
    overview:
      "Swiss Farms provides high-fertility sexed bovine semen straws sorted via high-speed laser flow-cytometry. Featuring over 90% female (X-chromosome) purity from world-champion progeny-tested Holstein-Friesian, Jersey, and certified pure Sahiwal sires (TPI > +2,900), our cryogenically preserved semen accelerates herd genetic gain, eliminates unprofitable bull calves, and guarantees easy calving.",
    metrics: [
      { label: "Female Gender Purity", value: "92% Female Calves" },
      { label: "Sire Performance", value: "TPI > +2,900" },
      { label: "Sperm Motility", value: "> 75% Post-Thaw" },
      { label: "Cryogenic Storage", value: "-196°C Nitrogen" },
    ],
    deliverables: [
      "0.25 mL French cryo-straws containing 4.0 Million high-motility sex-sorted viable sperm cells",
      "Guaranteed 90%+ female heifer calf probability verified through international flow-cytometry benchmarks",
      "Progeny-tested genetics with proven positive proofs for Milk (+1,800 lbs), Fat (+95 lbs), and Protein (+65 lbs)",
      "Low Calving Ease ratings (< 1.8% SCE) minimizing dystocia risk on maiden heifers",
      "Cryogenic liquid nitrogen shipping flasks maintaining -196°C cold-chain to farm gates nationwide",
      "Technical training and thaw-protocol advisory support for on-farm Artificial Insemination (AI) technicians",
    ],
    technicalSpecs: [
      { key: "Sorting Technology", value: "Dual-laser flow-cytometer cell sorting with orienting nozzle technology" },
      { key: "Straw Specifications", value: "0.25 mL plastic straws color-coded and laser-printed with bull ID and NAAB code" },
      { key: "Post-Thaw Progressive Motility", value: "Minimum 75% forward progressive motility at 37°C incubation" },
      { key: "Genomic Traits Included", value: "Feed Efficiency, Mastitis Resistance, Daughter Pregnancy Rate (+2.0)" },
      { key: "Available Breeds", value: "Holstein-Friesian, Jersey, Fleckvieh Simmental, Pure Registered Sahiwal" },
      { key: "Packaging", value: "Canes of 5 or 10 straws immersed in liquid nitrogen cryogenic vapor shippers" },
    ],
    pillars: [
      {
        title: "92% Female Calving Rate",
        desc: "Produces female replacement heifers almost exclusively, doubling herd internal expansion rates.",
        icon: Sparkles,
      },
      {
        title: "Top 1% Global TPI Genetics",
        desc: "Transmits superior genetics for high milk components, shallow udders, and strong feet and legs.",
        icon: Award,
      },
      {
        title: "Easy Calving Traits",
        desc: "Selected for low birth weights and small calf size, ensuring safe, unassisted heifer deliveries.",
        icon: HeartPulse,
      },
      {
        title: "-196°C Guaranteed Cold Chain",
        desc: "Delivered in dedicated liquid nitrogen dry vapor shippers guaranteeing 100% post-thaw viability.",
        icon: Factory,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Genetic Consultation & Bull Selection",
        desc: "Our geneticists review the buyer herd's traits and recommend the best corrective sire straws.",
      },
      {
        step: "02",
        title: "Cryogenic Flask Packing",
        desc: "Straws are transferred into liquid nitrogen shippers (-196°C) and sealed for transport.",
      },
      {
        step: "03",
        title: "Direct-to-Farm Delivery",
        desc: "Dedicated technicians deliver the flask and transfer straws into the buyer's farm nitrogen tank.",
      },
      {
        step: "04",
        title: "AI Thaw Protocol Demonstration",
        desc: "We provide water bath temperature calibrators and train farm technicians on optimal 37°C thawing.",
      },
    ],
    faqs: [
      {
        q: "What is the conception rate of sexed semen compared to conventional semen?",
        a: "With proper estrus detection, skilled AI technicians, and correct 37°C thawing protocols, modern sexed semen achieves conception rates of 55% to 65% on maiden heifers, comparable to conventional semen while delivering 92% female calves.",
      },
      {
        q: "How should sexed semen straws be stored and handled on the farm?",
        a: "Straws must remain submerged in liquid nitrogen at -196°C at all times. When ready to breed, straws are thawed in a clean 37°C water bath for exactly 45 seconds before immediate loading into the AI gun.",
      },
      {
        q: "Do you supply pure indigenous Sahiwal breed semen?",
        a: "Yes. We maintain cryopreserved semen from registered champion Sahiwal sires with verified maternal milk records exceeding 4,000 liters per lactation.",
      },
    ],
  },
  {
    id: "corn-silage",
    slug: "high-energy-whole-crop-corn-silage",
    name: "High-Energy Whole-Crop Corn Silage",
    subtitle: "Precision-Chopped & Inoculated Hybrid Maize Bales (500kg & 1000kg)",
    eyebrow: "Anaerobically Fermented Lactation Fuel for High-Yield Herds",
    tag: "Animal Nutrition",
    heroImage: "/swiss-card1.png",
    overview:
      "Swiss Farms High-Energy Corn Silage is harvested from prime hybrid maize crops at the optimal 33% dry matter milk-line stage. Utilizing precision forage harvesters equipped with heavy-duty kernel processors that crush over 95% of grain, our silage is inoculated with homofermentative lactic acid bacteria and vacuum-wrapped in UV-resistant heavy-duty plastic bales. This ensures high energy density, lactic fermentation (pH < 4.0), and guaranteed 18-month outdoor shelf life.",
    metrics: [
      { label: "Dry Matter (DM)", value: "32% – 35%" },
      { label: "Crude Protein", value: "8.5% – 9.2%" },
      { label: "Kernel Processing", value: "KPS > 70% Crushed" },
      { label: "Packaging Bales", value: "500kg & 1000kg" },
    ],
    deliverables: [
      "Precision-chopped (12mm–19mm) whole-crop maize with 100% crushed starch kernels for full rumen digestion",
      "Biological lactic acid bacterial inoculation ensuring fast lactic fermentation and stable pH below 4.0",
      "High-density commercial bales (500kg and 1,000kg) wrapped in 6 layers of UV-resistant stretch film",
      "Guaranteed 18-month outdoor storage life with zero spoilage, mold, or nutrient oxidation",
      "Complete Near-Infrared (NIR) feed laboratory certificates with dry matter, starch, and NDF metrics",
      "Nationwide flatbed trailer dispatch delivering directly to commercial dairy and cattle feedlot gates",
    ],
    technicalSpecs: [
      { key: "Harvesting Window", value: "Harvested at 1/2 to 2/3 milk-line kernel maturity (32%–35% Dry Matter)" },
      { key: "Starch Content", value: "28.0% to 34.0% High-Energy Lactation Density" },
      { key: "Neutral Detergent Fiber (NDF)", value: "38.0% – 42.0% with high in-vitro NDF digestibility (NDFD > 58%)" },
      { key: "Fermentation Acids", value: "Lactic Acid > 6.0%, Acetic Acid < 2.0%, Butyric Acid 0.00%" },
      { key: "Bale Densification", value: "High-density compaction (> 850 kg/m³ wet basis) eliminating all trapped oxygen" },
      { key: "Wrapping Standard", value: "Multi-layer co-extruded virgin polyethylene with 100% UV barrier" },
    ],
    pillars: [
      {
        title: "Kernel Cracking Mastery",
        desc: "Crushes 95%+ of corn kernels completely, unlocking full starch digestion without passing undigested in manure.",
        icon: Factory,
      },
      {
        title: "Lactic Inoculation",
        desc: "Fast natural lactic acid fermentation drops pH under 4.0 in 48 hours, preserving carbohydrates and proteins.",
        icon: FlaskConical,
      },
      {
        title: "18-Month Vacuum Shelf Life",
        desc: "Airtight vacuum wrapping allows outdoor farm storage in all weather conditions without bunker spoilage.",
        icon: Package,
      },
      {
        title: "Convenient Bale Feeding",
        desc: "Easy to open, transport, and mix into TMR feed wagons without dedicated bunker silo excavation machinery.",
        icon: Truck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Field Moisture Benchmarking",
        desc: "Agronomists test whole-crop moisture daily to identify the exact 33% dry matter harvest window.",
      },
      {
        step: "02",
        title: "Precision Chopping & Inoculation",
        desc: "Forage harvesters chop corn to 15mm, crush kernels with roller mills, and spray live bacterial inoculants.",
      },
      {
        step: "03",
        title: "High-Density Baling & Wrapping",
        desc: "Heavy hydraulic balers compress 1,000kg bales and wrap them immediately with 6 layers of UV-film.",
      },
      {
        step: "04",
        title: "NIR Quality Assay & Dispatch",
        desc: "Sample bales are tested for starch and protein before loading onto transport flatbeds for delivery.",
      },
    ],
    faqs: [
      {
        q: "Why is vacuum-baled corn silage better than traditional pit silage?",
        a: "Baled silage experiences zero surface spoilage, does not dry out or rot like open pits, preserves 15% more nutrients, and can be stored outdoors for up to 18 months without requiring heavy pit-digging equipment.",
      },
      {
        q: "How many silage bales can fit on a standard truck delivery?",
        a: "A standard long-wheelbase flatbed trailer carries approximately 24 to 28 one-ton bales (24–28 metric tons), delivered directly to your farm gate.",
      },
      {
        q: "How much corn silage should a dairy cow eat per day?",
        a: "A high-yielding lactating dairy cow typically consumes 20 to 25 kg of fresh corn silage per day as part of a balanced Total Mixed Ration (TMR) alongside alfalfa and protein concentrates.",
      },
    ],
  },
  {
    id: "bio-compost",
    slug: "matured-bovine-bio-compost",
    name: "Matured Bovine Bio-Compost",
    subtitle: "Aerobically Fermented Organic Fertilizer & Soil Carbon Conditioner",
    eyebrow: "100% Organic Soil Enrichment & Microbial Activation",
    tag: "Eco Soil Enhancer",
    heroImage: "/swiss-farm-about.png",
    overview:
      "Swiss Farms Matured Bovine Bio-Compost is produced through 60-day controlled aerobic windrow thermophilic fermentation of pure cattle manure and organic bedding solids. Reaching sustained internal core temperatures above 65°C that destroy all weed seeds, fly larvae, and pathogens, our rich dark bio-compost delivers over 45% organic matter, optimal Carbon-to-Nitrogen ratio (C:N 18:1), and diverse beneficial microbial flora that permanently restore soil water retention and crop yields.",
    metrics: [
      { label: "Organic Matter", value: "> 45% High Carbon" },
      { label: "Composting Cycle", value: "60-Day Thermophilic" },
      { label: "Weed Seeds & Pests", value: "0% 100% Sterilized" },
      { label: "C:N Ratio", value: "18 : 1 Balanced" },
    ],
    deliverables: [
      "Fully matured, dark crumbly organic bio-compost with pleasant earthy aroma and zero foul manure odors",
      "Thermophilic sterilization destroying 100% of weed seeds, nematode cysts, and enteric pathogens (E. coli, Salmonella)",
      "High natural concentrations of slow-release Nitrogen (N), Phosphorus (P2O5), Potassium (K2O), and Humic Acid",
      "Increases sandy soil water holding capacity by up to 40%, reducing crop irrigation frequency",
      "Supplied in 50kg moisture-resistant woven polypropylene bags or bulk open-top tipper trucks",
      "Certified organic fertilizer compliant with national environmental and organic agriculture standards",
    ],
    technicalSpecs: [
      { key: "Organic Carbon", value: "24.0% to 28.0% (Organic Matter > 45.0%)" },
      { key: "Total Nitrogen (N)", value: "1.80% to 2.40% (Slow-release organic form)" },
      { key: "Available Phosphorus (P2O5)", value: "1.20% – 1.60%" },
      { key: "Potassium (K2O)", value: "1.50% – 2.00%" },
      { key: "pH Level", value: "6.8 to 7.4 (Neutral pH safe for all crop types)" },
      { key: "Moisture Content", value: "25% – 30% (Optimum for active microbial viability)" },
    ],
    pillars: [
      {
        title: "65°C Thermophilic Sterilization",
        desc: "Sustained high heat kills all weed seeds and harmful bacteria, leaving only beneficial aerobic composting microbes.",
        icon: Sun,
      },
      {
        title: "Water Retention Boost",
        desc: "Humic substances act as microscopic sponges in sandy soils, holding moisture during hot dry spells.",
        icon: Leaf,
      },
      {
        title: "Slow-Release Nutrition",
        desc: "Feeds crop roots gradually throughout the entire growing season without chemical burning or fertilizer leaching.",
        icon: FlaskConical,
      },
      {
        title: "Soil Microbial Rejuvenation",
        desc: "Inoculates depleted agricultural soils with billions of beneficial fungi and nitrogen-fixing bacteria.",
        icon: Sparkles,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Manure Solids Separation",
        desc: "Mechanical separators extract organic cattle manure solids and mix with organic carbon bedding.",
      },
      {
        step: "02",
        title: "Aerobic Windrow Composting",
        desc: "Formed into 3-meter windrows turned weekly with specialized compost turners for 60 days.",
      },
      {
        step: "03",
        title: "Thermophilic Heat Pasteurization",
        desc: "Internal temperatures maintain 65°C for 21+ days, eliminating all weed seeds and pathogens.",
      },
      {
        step: "04",
        title: "Screening & Packaging",
        desc: "Rotary trommel screens refine compost to a fine 6mm particle size before bagging in 50kg bags.",
      },
    ],
    faqs: [
      {
        q: "How does Swiss Farms compost differ from raw uncomposted farmyard manure (FYM)?",
        a: "Raw farmyard manure is filled with viable weed seeds, fungal spores, fly larvae, and harmful pathogens, and generates heat that burns plant roots. Our matured bio-compost is fully thermophilically sterilized at 65°C, completely weed-free, odor-free, and ready for immediate plant uptake.",
      },
      {
        q: "What is the recommended application rate per acre?",
        a: "For field crops (Wheat, Cotton, Maize), we recommend 2 to 4 metric tons per acre. For fruit orchards and tunnel vegetables, apply 5 to 8 tons per acre during basal land preparation.",
      },
      {
        q: "What packaging options are available for bio-compost?",
        a: "We supply bio-compost in convenient 50kg bags for horticulture and landscaping, or in loose 20-ton and 40-ton tipper trailers for large agricultural estates.",
      },
    ],
  },
];

export function getSwissFarmProductBySlug(slug) {
  if (!slug) return null;
  return SWISS_FARM_PRODUCTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  );
}
