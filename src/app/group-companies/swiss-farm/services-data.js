// Comprehensive Dairy & Livestock Services Dataset for Swiss Farms (Pvt) Ltd
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
  Zap,
  Package,
  Scale,
  FlaskConical,
  Building2,
  Layers,
  Factory,
  Sun,
  Activity,
} from "lucide-react";

export const SWISS_FARM_SERVICES = [
  {
    id: "dairy-production",
    slug: "high-volume-dairy-production",
    title: "High-Volume Dairy Production",
    subtitle: "Automated Rotary Milking & Instant 4°C Cold Chain Chilling",
    eyebrow: "Untouched By Hand Industrial Dairy Extraction",
    tag: "Milk Production",
    icon: Truck,
    heroImage: "/swiss-card1.png",
    overview:
      "Swiss Farms operates modern 80-stall computerized rotary milking parlors producing pure, wholesome Grade-A milk with zero human touch. Cows are milked in pristine, stress-free acoustic environments with automated pre-dip sanitization, electronic yield telemetry, and instant plate-heat exchange cooling that drops raw milk temperature to 3.5°C within seconds of extraction, arresting bacterial growth completely.",
    metrics: [
      { label: "Daily Milk Output", value: "350K+ Liters" },
      { label: "Chilling Temperature", value: "3.5°C Instant" },
      { label: "Rotary Capacity", value: "80 Stalls Auto" },
      { label: "Butterfat Range", value: "3.8% – 4.2%" },
    ],
    deliverables: [
      "Continuous Grade-A raw milk supply chilled to 3.5°C and loaded into insulated stainless steel tankers",
      "Automated robotic Clean-In-Place (CIP) sterilization of all milk lines and storage silos after every milking session",
      "Daily laboratory assay sheets certifying butterfat, solid-not-fat (SNF), somatic cell count (SCC), and zero antibiotics",
      "Dedicated food-grade 30,000-liter refrigerated road tankers with real-time GPS temperature datalogging",
      "Guaranteed zero-adulteration and zero-water dilution backed by electronic freezing-point depression spectrometry",
      "Long-term B2B off-take contracts with customized delivery schedules for commercial dairy and cheese factories",
    ],
    technicalSpecs: [
      { key: "Parlor Technology", value: "80-Stall Electronic Rotary with automated teat spray & cluster takeoff" },
      { key: "Chilling System", value: "Double-stage plate heat exchanger with food-grade glycol chiller" },
      { key: "Storage Capacity", value: "150,000 Liters vertical insulated stainless steel (SS316) farm silos" },
      { key: "Somatic Cell Count (SCC)", value: "< 150,000 cells/mL (Premium International Standard)" },
      { key: "Total Bacterial Count (TBC)", value: "< 25,000 CFU/mL (Exceeds European export hygiene specs)" },
      { key: "Compliance Certifications", value: "ISO 22000:2018, HACCP, Halal Certified, Punjab Food Authority Grade-A" },
    ],
    pillars: [
      {
        title: "Untouched By Hand Purity",
        desc: "Closed-loop stainless steel vacuum pipelines move milk directly from udder to chilling silos without air exposure.",
        icon: ShieldCheck,
      },
      {
        title: "Instant 3.5°C Rapid Cooling",
        desc: "Cools milk in under 60 seconds, stopping lactic acid formation and locking in natural farm-fresh flavor.",
        icon: Factory,
      },
      {
        title: "Individual Cow Yield Sensors",
        desc: "Electronic milk meters analyze yield, flow rates, and electrical conductivity per quarter in real time.",
        icon: Activity,
      },
      {
        title: "Refrigerated Tanker Logistics",
        desc: "Insulated double-wall road tankers maintain milk under 4°C during transit to processing facilities across Pakistan.",
        icon: Truck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Gentle Udder Sanitization",
        desc: "Automated foaming pre-dips sanitize teats and wipe clean with individual sterile microfiber towels.",
      },
      {
        step: "02",
        title: "Rotary Extraction & Metering",
        desc: "Computerized vacuum clusters attach gently, recording milk volume, fat indicators, and flow curves.",
      },
      {
        step: "03",
        title: "Instant Plate Chilling to 3.5°C",
        desc: "Milk passes through sanitary plate heat exchangers cooled by glycol, dropping to 3.5°C instantly.",
      },
      {
        step: "04",
        title: "Lab Assay & Tanker Dispatch",
        desc: "On-site lab tests every batch for purity and zero antibiotics before pumping into sealed road tankers.",
      },
    ],
    faqs: [
      {
        q: "What is the butterfat and SNF content of Swiss Farms bulk milk?",
        a: "Our milk averages 3.8% to 4.2% Butterfat and 8.5% to 8.8% Solid-Not-Fat (SNF), with custom standardization options available for commercial processors.",
      },
      {
        q: "How does Swiss Farms guarantee zero antibiotic residues in every tanker?",
        a: "Every cow receiving veterinary medicine is electronically tagged with automated milk diversion to separate disposal lines. Furthermore, every road tanker is tested using rapid SNAP beta-lactam and tetracycline test kits before leaving the farm gate.",
      },
      {
        q: "What are the minimum volume contracts for commercial milk supply?",
        a: "We accommodate commercial supply agreements starting from 5,000 liters daily up to 100,000+ liters per day for large-scale institutional dairy processors.",
      },
    ],
  },
  {
    id: "livestock",
    slug: "livestock-management-housing",
    title: "Livestock Management & Housing",
    subtitle: "Climate-Controlled Cross-Ventilated Barns & Comfort-First Care",
    eyebrow: "World-Class Animal Welfare & Stress-Free Herd Husbandry",
    tag: "Herd Care",
    icon: Users,
    heroImage: "/swiss-card2.png",
    overview:
      "Swiss Farms houses over 25,000 head of healthy pedigree dairy cattle across expansive, climate-controlled cross-ventilated barns. Featuring deep inorganic washed sand bedding that eliminates bacterial growth, automated high-volume low-speed (HVLS) cooling fans with high-pressure misting systems, robotic grooming brushes, and RFID rumination tracking collars, we provide an environment where cows thrive.",
    metrics: [
      { label: "Cattle Under Management", value: "25K+ Cattle" },
      { label: "Barn Temperature", value: "15°C Cooler in Summer" },
      { label: "Sand Bedding Depth", value: "300mm Soft" },
      { label: "Daily Resting Time", value: "14+ Hours / Day" },
    ],
    deliverables: [
      "Spacious cross-ventilated free-stall housing with continuous fresh air circulation and thermal heat index (THI) control",
      "Deep inorganic river sand bedding replaced and leveled daily, preventing joint trauma and environmental mastitis",
      "High-pressure evaporative mist cooling lines and 24-foot HVLS fans keeping cows cool during peak 45°C summers",
      "Individual electronic RFID transponder collars monitoring rumination minutes, feeding visits, and standing heat",
      "Automated robotic alley scrapers operating 24/7 to maintain dry, clean, non-slip walking surfaces",
      "Dedicated maternity calving pavilions with 24-hour veterinary monitoring and neonatal calf warming units",
    ],
    technicalSpecs: [
      { key: "Barn Ventilation", value: "Cross-tunnel ventilation with variable-speed baffled exhaust fans" },
      { key: "Cooling Tech", value: "High-pressure 1,000 PSI atomizing misting lines combined with 7.3m HVLS fans" },
      { key: "Bedding Medium", value: "Recycled washed inorganic silica sand (Zero bacterial culture medium)" },
      { key: "Space Allocation", value: "12.5 square meters of loafing and stall space per adult lactating cow" },
      { key: "Health Monitoring", value: "SCR Allflex rumination and activity ear tags/collars with real-time alerts" },
      { key: "Drinking Water", value: "Continuous stainless steel tipping water troughs with UV-filtered chilled water" },
    ],
    pillars: [
      {
        title: "Deep Sand Comfort",
        desc: "Inorganic sand bedding cushions cows' knees and hocks while preventing environmental bacterial growth.",
        icon: Building2,
      },
      {
        title: "Thermal Stress Mitigation",
        desc: "Evaporative cooling drops barn temperatures by up to 15°C during intense heat waves, preventing milk drop.",
        icon: Sun,
      },
      {
        title: "24/7 Digital Health Telemetry",
        desc: "Collars track rumination minutes and detect metabolic issues 48 hours before physical symptoms appear.",
        icon: Activity,
      },
      {
        title: "Hygiene & Clean Flooring",
        desc: "Continuous robotic manure scrapers keep floors clean and hooves dry, eliminating digital dermatitis.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Daily Bedding Grooming",
        desc: "Tractor-mounted rakes fluff and level deep sand beds twice daily to ensure maximum cow resting comfort.",
      },
      {
        step: "02",
        title: "Automated Climate Regulation",
        desc: "Sensors trigger misting cycles and fan speeds automatically whenever the temperature-humidity index rises.",
      },
      {
        step: "03",
        title: "Rumination Telemetry Audit",
        desc: "Computer software scans herd rumination data daily to flag individual cows needing nutritional or health checks.",
      },
      {
        step: "04",
        title: "Fresh TMR Feed Pushing",
        desc: "Robotic feed pushers constantly push Total Mixed Rations toward cow stalls, encouraging 24-hour feed intake.",
      },
    ],
    faqs: [
      {
        q: "Why does Swiss Farms use sand bedding instead of straw or rubber mats?",
        a: "Inorganic sand does not support bacterial growth (unlike straw or manure solids), keeps cows cool in summer, and molds to the cow's body, providing the best joint support and mastitis prevention in the world.",
      },
      {
        q: "How do you protect Holstein cows from severe summer heat in Pakistan?",
        a: "We utilize cross-ventilated enclosed barns with massive 24-foot fans and high-pressure evaporative misting that continually evaporates water to lower ambient barn temperatures by up to 15°C.",
      },
      {
        q: "What health indicators are tracked electronically on each cow?",
        a: "Our electronic collars track daily rumination minutes, feeding time, walking steps, body temperature trends, and standing heat spikes.",
      },
    ],
  },
  {
    id: "breeding",
    slug: "genetic-breeding-reproduction",
    title: "Genetic Breeding & Reproduction",
    subtitle: "Pedigree Sexed Semen, Embryo Transfer & Genomic Selection",
    eyebrow: "Elite Genomic Bloodlines & 90% Female Heifer Guarantee",
    tag: "Breeding Genetics",
    icon: Leaf,
    heroImage: "/swiss-card3.png",
    overview:
      "Swiss Farms conducts elite genetic improvement programs combining imported pedigree Holstein-Friesian, Jersey, and indigenous Sahiwal bloodlines. Utilizing sexed semen artificial insemination, genomic DNA testing, and in-vitro embryo transfer, we breed animals with superior lifetime milk production, high butterfat percentages, strong hoof conformation, and exceptional heat resilience.",
    metrics: [
      { label: "Female Calf Ratio", value: "92% Sexed Semen" },
      { label: "Sire Genetic Ranking", value: "Top 1% TPI Bulls" },
      { label: "Conception Rate", value: "64% First Service" },
      { label: "Breeding Herd", value: "Pedigree Certified" },
    ],
    deliverables: [
      "100% sexed semen artificial insemination ensuring over 90% female replacement heifer calf births",
      "Progeny-tested imported sire genetics with Total Performance Index (TPI) exceeding +2,900 points",
      "Genomic DNA hair-sample screening of all newborn calves to predict lifetime lactation and butterfat potential",
      "Embryo transfer (ET) and In-Vitro Fertilization (IVF) from elite donor cows to multiply top cow families",
      "Indigenous Sahiwal and Cholistani genetic conservation breeding programs maintaining pure heat-hardy strains",
      "Cryogenic liquid nitrogen semen bank and mobile dispatch service for commercial partner dairy farms",
    ],
    technicalSpecs: [
      { key: "Sire Selection Criteria", value: "TPI > +2,900, Net Merit $ > +850, Productive Life > +4.5 years" },
      { key: "Sexed Semen Purity", value: "Flow-cytometry sorted semen with 92% female (X) chromosome purity" },
      { key: "Cryogenic Storage", value: "-196 °C liquid nitrogen storage tanks with automated level monitoring" },
      { key: "Pregnancy Detection", value: "Ultrasound scanning at 32 days with fetal sex identification at 60 days" },
      { key: "Heifer Sales", value: "Certified pedigree pregnant heifers (5–7 months gestation) available for purchase" },
      { key: "Genetic Database", value: "Complete computerized 5-generation lineage registration and calving records" },
    ],
    pillars: [
      {
        title: "Top 1% Global Sires",
        desc: "Using semen exclusively from world-champion progeny-tested bulls to advance milk yield and udder health.",
        icon: Award,
      },
      {
        title: "92% Female Calving Rate",
        desc: "Sexed semen eliminates unwanted bull calves, enabling rapid self-sustained milking herd expansion.",
        icon: Sparkles,
      },
      {
        title: "Genomic Herd Profiling",
        desc: "DNA profiling identifies top heifer calves at birth, optimizing rearing and feeding investment.",
        icon: FlaskConical,
      },
      {
        title: "Indigenous Heat Adaptation",
        desc: "Sahiwal crossbreeding captures hybrid vigor, providing natural tick resistance and tropical heat tolerance.",
        icon: Leaf,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Genomic Screening & Sire Matching",
        desc: "Computerized breeding software matches each cow's DNA profile to the ideal bull to correct traits.",
      },
      {
        step: "02",
        title: "Automated Estrus Detection",
        desc: "Activity collar sensors identify standing heat peaks, timing insemination to the exact optimal fertile hour.",
      },
      {
        step: "03",
        title: "Precision Insemination",
        desc: "Certified veterinarians thaw sexed semen straws in regulated water baths and perform intrauterine AI.",
      },
      {
        step: "04",
        title: "Ultrasound Pregnancy Verification",
        desc: "High-resolution ultrasound confirms pregnancy at 32 days, monitoring fetal heartbeat and growth.",
      },
    ],
    faqs: [
      {
        q: "What is the genetic origin of Swiss Farms dairy cattle?",
        a: "Our foundation herd stems from imported pedigree North American and European Holstein-Friesian and Jersey genetics, bred over generations for optimal performance in local climatic conditions.",
      },
      {
        q: "Can other commercial dairy farms purchase live pregnant heifers from Swiss Farms?",
        a: "Yes. We offer batches of certified disease-free, 5 to 7-month pregnant heifers with full pedigree genomic certificates and complete lifetime vaccination records.",
      },
      {
        q: "Do you supply sexed semen straws to external dairy producers?",
        a: "Yes. We supply cryogenic sexed semen straws from top international sires directly to commercial dairy farmers with nationwide cold-chain delivery.",
      },
    ],
  },
  {
    id: "veterinary",
    slug: "veterinary-healthcare-disease-prevention",
    title: "Veterinary Healthcare & Disease Prevention",
    subtitle: "On-Farm Hospital, Preventative Vaccines & Biosecurity Protocols",
    eyebrow: "24/7 Veterinary Hospital & Zero-Harm Medical Standards",
    tag: "Veterinary Care",
    icon: HeartPulse,
    heroImage: "/swiss-card1.png",
    overview:
      "Swiss Farms maintains a dedicated on-site veterinary hospital staffed 24/7 by experienced veterinary surgeons and diagnostic pathologists. Enforcing strict biosecurity perimeters, vehicle disinfection showers, comprehensive preventative vaccination schedules, and daily microbiological testing, we ensure an antibiotic-free, disease-free dairy ecosystem.",
    metrics: [
      { label: "Veterinary Team", value: "24/7 On-Site" },
      { label: "Antibiotic Residue", value: "0.00% Zero Tolerance" },
      { label: "Vaccination Record", value: "100% Up-To-Date" },
      { label: "Biosecurity Status", value: "Closed Farm Gate" },
    ],
    deliverables: [
      "On-site diagnostic pathology laboratory conducting daily blood counts, fecal floats, and milk cultures",
      "Strict biosecurity perimeter with automated vehicular underbody disinfectant sprays and personnel air showers",
      "Comprehensive vaccination schedule against Foot-and-Mouth Disease (FMD), Hemorrhagic Septicemia (HS), and Brucellosis",
      "Electronic mastitis early-detection system routing any abnormal milk away from commercial bulk silos automatically",
      "Routine hydraulic chute hoof trimming and preventative copper-sulfate antibacterial footbaths",
      "Zero-antibiotic residue milk testing using rapid multi-panel spectrometry before every tanker dispatch",
    ],
    technicalSpecs: [
      { key: "Lab Capabilities", value: "Automated blood biochemistry, milk agar culture, antibiotic sensitivity testing" },
      { key: "Biosecurity Standard", value: "Closed-herd biosecurity protocol with mandatory 30-day isolation quarantine" },
      { key: "Vaccine Schedule", value: "Bi-annual FMD oil-adjuvant, annual HS, Blackleg, and Brucellosis S19 calfhood" },
      { key: "Hoof Care Facilities", value: "Hydraulic rollover hoof trimming chutes with certified bovine podiatrists" },
      { key: "Recovery Wards", value: "Negative-pressure veterinary hospital pens with dedicated milking units" },
      { key: "Traceability", value: "100% electronic health record log from birth to maturity for every animal" },
    ],
    pillars: [
      {
        title: "Strict Biosecurity Shield",
        desc: "Guards against outside pathogen introduction through automated vehicle washes and sterile entry protocols.",
        icon: ShieldCheck,
      },
      {
        title: "Zero Antibiotic Residue",
        desc: "Cows under treatment are isolated; their milk is diverted, and every road tanker is certified residue-free.",
        icon: FlaskConical,
      },
      {
        title: "Preventative Vaccination",
        desc: "Proactive immunizations prevent catastrophic herd outbreaks and eliminate reliance on therapeutic drugs.",
        icon: HeartPulse,
      },
      {
        title: "Bovine Podiatry Care",
        desc: "Regular professional hoof trimming keeps cows comfortable, active, and visiting feed bunks frequently.",
        icon: Activity,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Daily Morning Herd Rounds",
        desc: "Veterinarians inspect all fresh calving cows, hospital pens, and calf nurseries before morning feeding.",
      },
      {
        step: "02",
        title: "Automated Parlor Health Alerts",
        desc: "Computer alerts flag cows with abnormal milk conductivity or temperature for immediate veterinary evaluation.",
      },
      {
        step: "03",
        title: "Laboratory Diagnostic Culture",
        desc: "Milk and blood samples are cultured on-site to identify exact pathogens and prescribe targeted treatments.",
      },
      {
        step: "04",
        title: "Discharge Purity Clearance",
        desc: "Recovered cows undergo a 72-hour milk clearance test before re-entering the main milking string.",
      },
    ],
    faqs: [
      {
        q: "What happens to the milk of a cow that is treated with antibiotics?",
        a: "The cow's electronic RFID collar automatically locks the rotary milking stall, diverting all milk into a separate disposal tank. The cow remains in the recovery pen until veterinary lab tests confirm zero drug residue.",
      },
      {
        q: "How does Swiss Farms prevent Foot-and-Mouth Disease (FMD)?",
        a: "We maintain a 100% closed-herd policy, disinfect all incoming feed delivery vehicles, and administer certified bi-annual multi-strain FMD vaccinations to every animal on the farm.",
      },
      {
        q: "Is Swiss Farms certified free of Brucellosis and Tuberculosis?",
        a: "Yes. Our entire herd is routinely tested and certified negative for Bovine Tuberculosis and Brucellosis by government veterinary reference laboratories.",
      },
    ],
  },
  {
    id: "nutrition",
    slug: "animal-nutrition-silage-rations",
    title: "Animal Nutrition & Silage Rations",
    subtitle: "Total Mixed Ration (TMR) Precision Formulations & Silage Pits",
    eyebrow: "Scientific Bovine Nutrition & High-Energy Forage",
    tag: "Feed & Silage",
    icon: Sparkles,
    heroImage: "/swiss-card2.png",
    overview:
      "Swiss Farms formulates customized Total Mixed Rations (TMR) engineered by international bovine nutritionists. Utilizing high-energy whole-crop corn silage fermented in anaerobic bunker pits, premium alfalfa hay, soybean meal, bypass fats, and custom mineral premixes, our precision feeding protocols maximize milk yield, optimize butterfat synthesis, and maintain herd health.",
    metrics: [
      { label: "Daily Feed Mixed", value: "450+ Tons / Day" },
      { label: "Silage Dry Matter", value: "32% – 35% Ideal" },
      { label: "Crude Protein", value: "16.5% – 17.5% Diet" },
      { label: "NIR Assay Speed", value: "Instant Laboratory" },
    ],
    deliverables: [
      "Scientific Total Mixed Ration (TMR) diets formulated for specific lactation groups (High, Mid, Dry, Heifers)",
      "High-density whole-crop corn silage fermented with homofermentative lactic acid bacterial inoculants",
      "Computerized vertical twin-auger feed mixer wagons ensuring 100% homogeneous ration blending",
      "Near-Infrared (NIR) spectrometry laboratory on-farm testing dry matter, protein, starch, and NDF daily",
      "Custom bypass protein, rumen-protected methionine/lysine, and trace mineral lick supplement blocks",
      "Commercial sales of 500kg and 1,000kg vacuum-wrapped silage bales to partner dairy farms across Pakistan",
    ],
    technicalSpecs: [
      { key: "TMR Mixing Tech", value: "Self-propelled vertical auger mixers with programmable computerized scales" },
      { key: "Corn Silage Specs", value: "Chop length 12–19mm with 95%+ kernel processing score (KPS > 70%)" },
      { key: "Fermentation Quality", value: "pH 3.8 to 4.2 with high lactic acid and zero butyric acid or mold" },
      { key: "Forage Sources", value: "Whole-crop hybrid maize, premium alfalfa hay, ryegrass, and Rhodes grass" },
      { key: "Quality Testing", value: "Foss NIR feed spectrometer testing daily forage moisture and starch" },
      { key: "Packaging Formats", value: "Loose bulk bunker silage or 500kg/1,000kg high-density plastic wrapped bales" },
    ],
    pillars: [
      {
        title: "Homogeneous TMR Mixing",
        desc: "Prevents cows from sorting feed, ensuring every bite contains the exact balanced ratio of forage and minerals.",
        icon: Sparkles,
      },
      {
        title: "Anaerobic Silage Fermentation",
        desc: "Packed to 240 kg/m³ density and sealed with oxygen-barrier films to lock in peak carbohydrates and vitamins.",
        icon: Package,
      },
      {
        title: "Daily NIR Moisture Testing",
        desc: "Adjusts feed mixer recipe weights daily based on real-time moisture changes in silage bunkers.",
        icon: FlaskConical,
      },
      {
        title: "Rumen Health & Buffer Salts",
        desc: "Sodium bicarbonate and live yeast cultures stabilize rumen pH, preventing subacute ruminal acidosis (SARA).",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Corn Harvesting & Kernel Processing",
        desc: "Chopping hybrid corn at 33% dry matter with heavy roller mills crushing every grain for full digestion.",
      },
      {
        step: "02",
        title: "Bunker Compaction & Inoculation",
        desc: "Heavy tractors pack silage in layers while spraying biological inoculants, followed by vacuum airtight sealing.",
      },
      {
        step: "03",
        title: "Computerized Ration Loading",
        desc: "Precision loaders add silage, alfalfa, grains, and minerals into computerized mixing wagons.",
      },
      {
        step: "04",
        title: "Fresh Bunk Delivery & Pushing",
        desc: "Delivering fresh TMR rations along barn feeding lanes 3 times daily to stimulate continuous feeding.",
      },
    ],
    faqs: [
      {
        q: "What makes Swiss Farms corn silage superior for dairy cattle?",
        a: "Our silage is harvested at peak 33% dry matter using high-tech forage harvesters that crush 95%+ of corn kernels (KPS > 70%), inoculated with lactic bacteria, and compacted heavily to ensure rapid lactic fermentation with zero spoilage.",
      },
      {
        q: "Can external dairy farms purchase vacuum-wrapped silage bales from Swiss Farms?",
        a: "Yes. We supply 500kg and 1,000kg UV-resistant stretch-wrapped silage bales with guaranteed 18-month shelf life and nationwide trailer delivery.",
      },
      {
        q: "How often is the nutritional quality of the feed tested?",
        a: "We test moisture, starch, and protein content daily in our on-farm NIR laboratory to adjust feed wagon recipes dynamically.",
      },
    ],
  },
  {
    id: "sustainability",
    slug: "sustainable-bio-energy-farm-infrastructure",
    title: "Sustainable Bio-Energy & Farm Infrastructure",
    subtitle: "Manure Biogas Digesters & Organic Bio-Compost Production",
    eyebrow: "Zero-Waste Circular Agritech & Renewable Power Generation",
    tag: "Circular Agritech",
    icon: Zap,
    heroImage: "/swiss-card3.png",
    overview:
      "Swiss Farms operates a cutting-edge circular sustainability model that turns dairy farm by-products into valuable resources. Our anaerobic biogas digesters process thousands of tons of cattle manure daily, generating renewable electrical power for the farm complex, while mechanical solid-liquid separators yield organic bio-compost and recycled bedding that nourish agricultural soils.",
    metrics: [
      { label: "Clean Electricity", value: "2.5 MW Generated" },
      { label: "Organic Compost", value: "50K+ Tons / Year" },
      { label: "Carbon Offset", value: "40K Tons CO2e" },
      { label: "Water Recycled", value: "90% Wash Water" },
    ],
    deliverables: [
      "Continuous renewable electricity generation from anaerobic biogas digesters powering the entire farm complex",
      "High-nutrient matured organic bio-compost fertilizer for corporate agriculture and orchard plantations",
      "Mechanical solid-liquid manure separation recycling clean inorganic sand bedding and bio-solids",
      "Closed-loop wastewater sedimentation lagoons recycling wash water for barn cleaning and field fertigation",
      "Surplus solar photovoltaic arrays generating clean solar energy during peak daytime hours",
      "Extensive eucalyptus and moringa shelterbelt plantations around farm perimeters capturing carbon and cooling winds",
    ],
    technicalSpecs: [
      { key: "Biogas Generation", value: "2.5 MW combined heat and power (CHP) biogas generator engines" },
      { key: "Digester Capacity", value: "Four 5,000 m³ continuous stirred-tank anaerobic digesters (CSTR)" },
      { key: "Compost Quality", value: "Matured aerobically for 60 days with > 45% organic matter and zero weed seeds" },
      { key: "Water Recycling", value: "Multi-stage settling basins with high-rate anaerobic and aerobic polishing" },
      { key: "Solar Installation", value: "1.2 MW rooftop solar PV system integrated with farm micro-grid" },
      { key: "Emissions Standard", value: "UN Clean Development Mechanism (CDM) aligned methane mitigation" },
    ],
    pillars: [
      {
        title: "Clean Methane Capture",
        desc: "Prevents atmospheric methane emissions by capturing gas in digesters to produce renewable electricity.",
        icon: Zap,
      },
      {
        title: "Organic Bio-Fertilizer",
        desc: "Composted manure restores organic carbon and beneficial microbes to depleted agricultural soils.",
        icon: Leaf,
      },
      {
        title: "90% Closed-Loop Water Reuse",
        desc: "Cleansed parlour wash water is recycled for cooling systems and furrow crop fertigation.",
        icon: FlaskConical,
      },
      {
        title: "Micro-Grid Energy Resilience",
        desc: "Biogas and solar energy ensure 100% uninterrupted electricity for milk chillers during utility blackouts.",
        icon: Sun,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Continuous Slurry Collection",
        desc: "Automatic scrapers move cattle manure to reception pits, where sand is settled and separated.",
      },
      {
        step: "02",
        title: "Anaerobic Digestion & Methane Capture",
        desc: "Manure is heated to 38°C inside sealed digesters where anaerobic microbes generate rich methane biogas.",
      },
      {
        step: "03",
        title: "CHP Power Generation",
        desc: "Biogas is scrubbed of hydrogen sulfide and combusted in CHP engines to generate electricity and hot water.",
      },
      {
        step: "04",
        title: "Aerobic Compost Maturation",
        desc: "Separated bio-solids are aerated in windrows for 60 days, producing weed-free organic bio-compost.",
      },
    ],
    faqs: [
      {
        q: "How much clean electricity does the Swiss Farms biogas plant produce?",
        a: "Our biogas digester complex produces over 2.5 Megawatts (MW) of continuous electrical energy, making the entire dairy complex self-sufficient in power.",
      },
      {
        q: "Can farmers purchase Swiss Farms organic compost?",
        a: "Yes. We supply fully matured, weed-free organic bio-compost in 50kg bags or bulk tipper trucks to orchards, vegetable growers, and corporate farms.",
      },
      {
        q: "How does the farm recycle its water?",
        a: "All milking parlor and cooling wash water is collected in lined separation lagoons, where solids settle out and clarified water is reused for flushing barns and crop fertigation.",
      },
    ],
  },
];

export function getSwissFarmServiceBySlug(slug) {
  if (!slug) return null;
  return SWISS_FARM_SERVICES.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id.toLowerCase() === slug.toLowerCase()
  );
}
