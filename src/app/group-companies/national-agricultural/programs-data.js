// Comprehensive Impact & Development Programs Dataset for National Agricultural Corporation (Pvt) Ltd
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sprout,
  Sun,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  Scale,
  FlaskConical,
  Building2,
  Sparkles,
  Zap,
} from "lucide-react";

export const NATIONAL_AGRICULTURAL_PROGRAMS = [
  {
    id: "mechanization",
    slug: "smallholder-farmer-mechanization-program",
    title: "Smallholder Farmer Mechanization Program",
    subtitle: "Shared Farm Equipment Pools, Laser Leveling & Precision Seeding",
    eyebrow: "Rural Farmer Empowerment & Custom Machinery Pools",
    category: "Farm Technology",
    tag: "Machinery Access",
    icon: Tractor,
    heroImage: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
    overview:
      "The Smallholder Farmer Mechanization Program bridges the technological divide for small and medium landholders across Pakistan. By establishing village-level agricultural machinery hubs, farmers gain affordable, pay-per-acre access to GPS laser land levelers, pneumatic seed drills, high-horsepower tractors, and modern combine harvesters without high capital expenditure.",
    metrics: [
      { label: "Farmers Enrolled", value: "12K+ Farmers" },
      { label: "Tillage Cost Saved", value: "35% Lower" },
      { label: "Crop Yield Boost", value: "+30% Average" },
      { label: "Acreage Covered", value: "200K+ Acres" },
    ],
    benefits: [
      "Subsidized hourly and per-acre rental rates for GPS-guided laser land leveling equipment",
      "Access to pneumatic precision seed planters reducing seed wastage by over 30%",
      "On-demand combine harvesting support preventing post-monsoon crop spoiling and losses",
      "Free hands-on technical training for rural youth to become certified farm equipment operators",
      "Pay-after-harvest micro-credit financing partnerships for vulnerable subsistence farming families",
      "GPS tracking and transparent digital booking via mobile app and village coordinator desks",
    ],
    operationalComponents: [
      { key: "Target Demographic", value: "Smallholder farmers managing 1 to 25 acres of arable land" },
      { key: "Machinery Pool", value: "Tractors (85–120 HP), Laser levelers, Seed drills, Rotavators & Combines" },
      { key: "Booking Mechanism", value: "Village Community Coordinators & Dedicated USSD/WhatsApp Hotline" },
      { key: "Operator Support", value: "Certified machinery operators and fuel provided with every booking" },
      { key: "Payment Flexibility", value: "Cash on delivery or harvest-linked delayed settlement" },
      { key: "Impact Verification", value: "Pre-season and post-harvest yield benchmarking and soil audits" },
    ],
    pillars: [
      {
        title: "Shared Capital Cost",
        desc: "Small farmers benefit from expensive multimillion-rupee machinery through low-cost shared rentals.",
        icon: Scale,
      },
      {
        title: "Rapid Planting Timelines",
        desc: "Mechanized sowing enables farmers to plant crops within the optimal 10-day seasonal weather window.",
        icon: Sprout,
      },
      {
        title: "Youth Technical Employment",
        desc: "Training rural youth as professional machinery operators, creating sustainable village livelihoods.",
        icon: Users,
      },
      {
        title: "Zero-Harvest Crop Loss",
        desc: "Guaranteed harvest scheduling ensures crops are cut and threshed before unexpected rain damage.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Village Hub Enrollment",
        desc: "Farmers register their land parcel details and seasonal crop schedule with the local coordinator.",
      },
      {
        step: "02",
        title: "Machinery Booking & Scheduling",
        desc: "Farmers schedule laser levelers, planters, or combines via phone or coordinator 48 hours in advance.",
      },
      {
        step: "03",
        title: "Field Execution by Certified Team",
        desc: "Certified machinery operators deploy to the field and complete the required tillage or harvesting.",
      },
      {
        step: "04",
        title: "Post-Service Yield Tracking",
        desc: "Agronomists track germination, growth, and final grain yield to verify productivity gains.",
      },
    ],
    faqs: [
      {
        q: "Who is eligible to participate in the Smallholder Mechanization Program?",
        a: "Any smallholder farmer managing up to 25 acres of land in our operating districts can register for subsidized machinery services through their local village coordinator.",
      },
      {
        q: "How are machinery booking rates calculated?",
        a: "Rates are charged transparently on a per-acre basis inclusive of certified machinery, trained operator, and fuel, with no hidden maintenance fees.",
      },
      {
        q: "Can farming cooperatives book machinery for entire villages?",
        a: "Yes. We offer prioritized scheduling and discounted group rates for registered agricultural cooperatives and village farmer associations.",
      },
    ],
  },
  {
    id: "solar-irrigation",
    slug: "solar-drip-irrigation-water-security-initiative",
    title: "Solar Drip Irrigation & Water Security Initiative",
    subtitle: "Reclaiming Arid Lands with Solar Power & Micro-Drip Technology",
    eyebrow: "Climate-Smart Water Conservation & Arid Zone Greening",
    category: "Water Conservation",
    tag: "Water Security",
    icon: Droplets,
    heroImage: "/agri_hero_farm.svg",
    overview:
      "The Solar Drip Irrigation & Water Security Initiative transforms water-stressed, drought-vulnerable, and off-grid lands into high-yielding productive agro-ecosystems. By combining high-efficiency solar hybrid pumps with pressure-compensated drip irrigation lines, this program eliminates expensive diesel pumping costs and saves over 50% of precious groundwater.",
    metrics: [
      { label: "Water Saved Annually", value: "1.2B Gallons" },
      { label: "Solar Systems Built", value: "650+ Units" },
      { label: "Diesel Costs Cut", value: "100% Zero Fuel" },
      { label: "Arid Land Reclaimed", value: "45K+ Acres" },
    ],
    benefits: [
      "Zero recurring electricity bills and zero diesel fuel costs through high-output solar arrays",
      "Direct root-zone micro-drip water delivery reducing evaporation and weed proliferation by 60%",
      "Integrated solar fertigation dosing tanks that feed dissolved nutrients directly to crops",
      "Complete 10-year warranty on UV-stabilized heavy-duty virgin polyethylene drip tubing",
      "Micro-finance subsidy facilitation with provincial agriculture and energy departments",
      "Remote IoT telemetry monitoring system pressure and water flow rates via mobile dashboard",
    ],
    operationalComponents: [
      { key: "Target Zones", value: "Canal-tail ends, arid zones (Thar, Thal, Cholistan), and off-grid farms" },
      { key: "Solar Array Specs", value: "Tier-1 mono-PERC solar panels with MPPT Variable Frequency Drives" },
      { key: "Drip Emitter Lifespan", value: "Self-flushing pressure-compensated drippers with 10+ year lifespan" },
      { key: "Suitable Crops", value: "Citrus, Mango, Olive, Guava, Cotton, Vegetables, and High-Density Orchards" },
      { key: "Subsidy Support", value: "Assistance with provincial government cost-sharing subsidy programs" },
      { key: "Warranty & Support", value: "3-year free on-site maintenance and seasonal system flushing audits" },
    ],
    pillars: [
      {
        title: "Zero Operational Costs",
        desc: "Solar pumping harnesses free sunlight, freeing farmers from expensive and unreliable diesel fuel supplies.",
        icon: Sun,
      },
      {
        title: "Targeted Water Efficiency",
        desc: "95% application efficiency ensures every drop of pumped water reaches the plant root system directly.",
        icon: Droplets,
      },
      {
        title: "Arid Zone Greening",
        desc: "Enables successful high-value orchard and vegetable farming in previously uncultivated desert areas.",
        icon: Sprout,
      },
      {
        title: "Self-Flushing Durability",
        desc: "Advanced filtration and self-cleaning drippers resist clogging even when operating on brackish tubewell water.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Hydrogeological Water Assay",
        desc: "Testing well depth, static water level, recharge rate, and electrical conductivity (EC) salinity.",
      },
      {
        step: "02",
        title: "Engineering System Design",
        desc: "Calculating required solar wattage, pump head, mainline diameters, and dripper discharge layout.",
      },
      {
        step: "03",
        title: "Turnkey Field Installation",
        desc: "Mounting solar structures, deploying submersible pumps, trenching pipelines, and laying drip lines.",
      },
      {
        step: "04",
        title: "System Handover & Training",
        desc: "Demonstrating filter backwashing, fertigation dosing, and seasonal winterization protocols to the farmer.",
      },
    ],
    faqs: [
      {
        q: "Can solar drip systems operate on cloudy days?",
        a: "Our advanced MPPT Variable Frequency Drives (VFD) adjust pump speeds dynamically during low-light cloudy conditions, ensuring steady water flow without damaging pump motors.",
      },
      {
        q: "What crops benefit most from solar drip irrigation?",
        a: "High-value fruit orchards (Citrus, Mango, Olive, Dates), vineyards, row vegetables (Tomatoes, Chilies, Cucumbers), and high-density cotton crops achieve the highest returns under drip irrigation.",
      },
      {
        q: "Does National Agricultural Corporation assist with government subsidies?",
        a: "Yes. Our team assists eligible landholders with the paperwork, technical drawings, and inspection verifications required for provincial water management subsidy grants.",
      },
    ],
  },
  {
    id: "dairy-genetics",
    slug: "dairy-herd-genetic-improvement-program",
    title: "Dairy Herd Genetic Improvement Program",
    subtitle: "Upgrading Rural Cattle Genetics, Semen Viability & Milk Yield",
    eyebrow: "Sovereign Dairy Productivity & Progeny-Tested Bloodlines",
    tag: "Livestock & Dairy",
    icon: Leaf,
    heroImage: "/agri_dairy_livestock.svg",
    overview:
      "The Dairy Herd Genetic Improvement Program is a transformative rural development initiative aimed at doubling milk production in smallholder dairy farming households. By delivering sexed semen artificial insemination from elite pedigree Holstein-Friesian and pure Sahiwal sires, combined with village-level veterinary health camps and transparent milk chilling hubs, we elevate household dairy incomes permanently.",
    metrics: [
      { label: "Cattle Upgraded", value: "85K+ Cows" },
      { label: "Daily Milk Gain", value: "+8 to 12 Liters" },
      { label: "Female Calves", value: "90% Sexed" },
      { label: "Village Centers", value: "95 Hubs" },
    ],
    benefits: [
      "Access to top 1% progeny-tested international sire genetics and certified pure pedigree Sahiwal semen",
      "Sexed semen technology guaranteeing over 90% female heifer calf birth rates for fast herd expansion",
      "Mobile cryogenic liquid nitrogen delivery network ensuring 100% semen straw fertility at farm gate",
      "Free village veterinary camps providing preventative vaccinations (FMD/HS), deworming, and mastitis checks",
      "Direct linkage to village milk chilling collection centers offering instant digital payments and fat bonuses",
      "Subsidized high-protein corn silage bales and mineral lick supplements for lactating dairy cows",
    ],
    operationalComponents: [
      { key: "Target Demographic", value: "Smallholder dairy farmers owning 2 to 20 cattle in rural dairy belts" },
      { key: "Semen Sourcing", value: "Progeny-tested imported Holstein-Friesian, Jersey, and registered Sahiwal sires" },
      { key: "Technician Network", value: "250+ certified Artificial Insemination (AI) technicians on motorbike dispatch" },
      { key: "Cold Chain Storage", value: "-196 °C liquid nitrogen field flasks with weekly cryogenic replenishment" },
      { key: "Health Support", value: "Ultrasound pregnancy diagnosis at 35 days & emergency veterinary hotline" },
      { key: "Market Linkage", value: "Guaranteed milk purchase contracts with zero middleman deductions" },
    ],
    pillars: [
      {
        title: "Progeny-Tested Genetics",
        desc: "Crossbred offspring produce 18–25 liters of milk daily compared to 5–7 liters from unimproved local cattle.",
        icon: Award,
      },
      {
        title: "Rapid Female Herd Growth",
        desc: "Sexed semen ensures almost every newborn calf is a valuable future milking heifer rather than an unprofitable bull.",
        icon: HeartPulse,
      },
      {
        title: "Preventative Herd Health",
        desc: "Scheduled vaccinations eliminate devastating epidemics like Foot-and-Mouth Disease (FMD).",
        icon: ShieldCheck,
      },
      {
        title: "Direct Milk Remittance",
        desc: "Farmers receive daily digital mobile payments based on transparent ultrasonic fat and SNF testing.",
        icon: Building2,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Herd Tagging & Health Check",
        desc: "Veterinarians register cows, apply digital RFID ear tags, and administer pre-breeding dewormers.",
      },
      {
        step: "02",
        title: "Estrus Detection & Insemination",
        desc: "Farmer reports standing heat; mobile technician arrives within 4 hours to perform precision insemination.",
      },
      {
        step: "03",
        title: "Pregnancy Ultrasound Verification",
        desc: "Veterinary doctors verify pregnancy using portable ultrasound scanners at 35 to 45 days post-AI.",
      },
      {
        step: "04",
        title: "Calf Rearing & Milk Off-take",
        desc: "Heifer calves receive specialized calf starter rations, and mother's milk is collected at village chilling hubs.",
      },
    ],
    faqs: [
      {
        q: "How much does milk yield increase in the first crossbred generation?",
        a: "First-generation crossbred heifers (Holstein-Friesian x Sahiwal) typically produce 18 to 24 liters of milk per day, representing a 200% to 300% increase over indigenous unimproved cattle.",
      },
      {
        q: "What is the fee for artificial insemination under this program?",
        a: "The program is heavily subsidized, with semen straws, liquid nitrogen delivery, and veterinary AI technician visits provided at nominal community rates.",
      },
      {
        q: "How does the program support milk marketing for small farmers?",
        a: "We establish village Milk Collection Centers (MCC) equipped with stainless steel rapid chillers where farmers deliver milk twice daily and receive immediate transparent digital payment.",
      },
    ],
  },
  {
    id: "soil-testing",
    slug: "mobile-soil-testing-crop-health-clinics",
    title: "Mobile Soil Testing & Crop Health Clinics",
    subtitle: "Rapid 30-Minute On-Site Soil Assays & Precision Nutrient Prescriptions",
    eyebrow: "Scientific Soil Health Diagnostics & Fertilizer Cost Reduction",
    tag: "Agritech & Soil",
    icon: FlaskConical,
    heroImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    overview:
      "The Mobile Soil Testing & Crop Health Clinics initiative deploys specialized mobile laboratory vans directly to farmers' fields. Equipped with computerized spectrophotometers and digital soil analyzers, our agronomists deliver instant 30-minute soil fertility reports (N-P-K, pH, EC, Organic Matter) and customized fertilizer prescriptions that cut input costs by up to 25% while restoring soil vitality.",
    metrics: [
      { label: "Soil Tests Completed", value: "45K+ Assays" },
      { label: "Fertilizer Cost Saved", value: "25% Average" },
      { label: "Villages Visited", value: "350+ Clusters" },
      { label: "Turnaround Time", value: "30 Minutes" },
    ],
    benefits: [
      "Rapid 30-minute on-site laboratory testing eliminating weeks of waiting for university lab results",
      "Comprehensive 8-parameter soil assays: Nitrogen (N), Phosphorus (P), Potassium (K), Organic Carbon, pH, EC, Zinc, and Boron",
      "Personalized crop-specific soil health cards detailing exact fertilizer bags required per acre",
      "Prevents costly over-application of urea and DAP fertilizers, cutting farm expenditure by 20%–25%",
      "Identifies soil salinity, sodicity, and hardpan compaction issues before planting season",
      "Digital SMS and WhatsApp advisory updates providing seasonal pest alerts and weather forecasts",
    ],
    operationalComponents: [
      { key: "Fleet Equipment", value: "Custom 4x4 mobile lab vans with onboard spectrophotometers and centrifuges" },
      { key: "Tested Parameters", value: "Available N, P2O5, K2O, Organic Matter %, pH, Electrical Conductivity (EC), Zinc, Boron" },
      { key: "Diagnostic Report", value: "Laminated Physical Soil Health Card + Digital WhatsApp PDF Report" },
      { key: "Staffing", value: "MSc Soil Scientists and Agronomists on board every mobile clinic" },
      { key: "Testing Capacity", value: "60 to 80 comprehensive soil assays per mobile van per day" },
      { key: "Follow-up Support", value: "Foliar crop monitoring and mid-season petiole tissue testing" },
    ],
    pillars: [
      {
        title: "Rapid 30-Minute Results",
        desc: "Farmers receive accurate scientific soil results instantly at their field gate without waiting weeks.",
        icon: Zap,
      },
      {
        title: "Exact Fertilizer Prescription",
        desc: "Eliminates blind over-fertilization, saving thousands of rupees per acre on unnecessary chemicals.",
        icon: Scale,
      },
      {
        title: "Salinity & pH Correction",
        desc: "Identifies alkaline and saline soils early, recommending precise gypsum or organic matter cures.",
        icon: FlaskConical,
      },
      {
        title: "Digital Agro-Advisory",
        desc: "Direct SMS crop advisory tailored to the farmer's specific soil profile throughout the crop life cycle.",
        icon: Award,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Mobile Lab Arrival & Core Sampling",
        desc: "Mobile van arrives at village; agronomists collect representative zigzag soil core samples from the field.",
      },
      {
        step: "02",
        title: "Extraction & Spectrometry",
        desc: "Samples are dried, sieved, mixed with chemical extractants, and analyzed via computerized spectrophotometers.",
      },
      {
        step: "03",
        title: "Soil Health Card Generation",
        desc: "Software prints a color-coded Soil Health Card showing nutrient deficiencies and exact fertilizer formulas.",
      },
      {
        step: "04",
        title: "Agronomist Consultation",
        desc: "Soil scientists explain the results to the farmer and provide tailored sowing and irrigation advice.",
      },
    ],
    faqs: [
      {
        q: "How accurate are mobile on-site soil tests compared to fixed university laboratories?",
        a: "Our mobile laboratories utilize research-grade digital spectrophotometers and certified chemical reagents that achieve 98.5% correlation with fixed central laboratory standards.",
      },
      {
        q: "When is the best time to conduct soil testing?",
        a: "The ideal time is 2 to 4 weeks before sowing a new crop (e.g. before wheat in October/November or before cotton/rice in April/May), allowing time to apply recommended basal soil conditioners.",
      },
      {
        q: "What parameters are tested in a standard soil assay?",
        a: "We test Nitrogen (N), Phosphorus (P), Potassium (K), Organic Matter %, pH (acidity/alkalinity), Electrical Conductivity (salinity), Zinc, and Boron.",
      },
    ],
  },
  {
    id: "women-agri",
    slug: "women-in-agriculture-empowerment-program",
    title: "Women in Agriculture & Agribusiness Empowerment",
    subtitle: "High-Tunnel Vegetables, Hygienic Milking & Organic Poultry Kits",
    eyebrow: "Gender Inclusion, Micro-Agri Enterprises & Household Prosperity",
    tag: "Rural Development",
    icon: Users,
    heroImage: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    overview:
      "The Women in Agriculture Empowerment Program provides rural women with specialized technical training, micro-farming starter kits, and direct market connectivity. Focusing on high-tunnel greenhouse vegetable farming, hygienic livestock milking, backyard poultry enterprises, and post-harvest food processing, the initiative builds financial independence and food security for rural households.",
    metrics: [
      { label: "Women Empowered", value: "6,500+ Women" },
      { label: "Income Increase", value: "+65% Household" },
      { label: "Micro-Kits Distributed", value: "4,000+ Kits" },
      { label: "Villages Active", value: "180+ Villages" },
    ],
    benefits: [
      "Hands-on technical training in off-season walk-in tunnel vegetable and herb cultivation",
      "Free starter kits containing certified hybrid vegetable seeds, drip kits, and organic bio-fertilizers",
      "Backyard organic poultry starter units with vaccinated dual-purpose layers and balanced feed",
      "Hygienic dairy handling training, stainless steel milk pails, and sub-clinical mastitis detection kits",
      "Post-harvest food processing training: solar fruit drying, pickling, jams, and clean produce packaging",
      "Direct market linkage through cooperative aggregators selling fresh organic produce to urban markets",
    ],
    operationalComponents: [
      { key: "Target Demographic", value: "Rural women farmers, female landless laborers, and female-headed households" },
      { key: "Training Focus Areas", value: "Kitchen gardening, Tunnel farming, Dairy hygiene, Poultry, Food preservation" },
      { key: "Starter Kit Types", value: "Tunnel Veg Kit, Backyard Poultry Kit (25 birds), Hygienic Milking Kit" },
      { key: "Trainers", value: "Female master agricultural trainers and certified livestock health workers" },
      { key: "Market Access", value: "Direct cooperative sales desks in district regional markets" },
      { key: "Financial Inclusion", value: "Assistance with opening mobile digital bank accounts (JazzCash/Easypaisa)" },
    ],
    pillars: [
      {
        title: "Female Technical Leadership",
        desc: "Delivered by female master agronomists respecting local cultural norms and community dynamics.",
        icon: Users,
      },
      {
        title: "High-Margin Micro-Farming",
        desc: "Off-season vegetables and backyard poultry generate steady daily household cash flows from small backyard plots.",
        icon: Sprout,
      },
      {
        title: "Child Nutrition & Food Security",
        desc: "Fresh organic eggs, vegetables, and clean dairy milk significantly improve maternal and child nutritional health.",
        icon: HeartPulse,
      },
      {
        title: "Digital Financial Independence",
        desc: "Connecting women directly to mobile wallets ensures their earnings go directly to household education and savings.",
        icon: Award,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Community Mobilization & Selection",
        desc: "Female field officers hold community meetings and identify motivated rural women for enrollment.",
      },
      {
        step: "02",
        title: "5-Day Practical Field Training",
        desc: "Interactive hands-on training in greenhouse vegetable cultivation, dairy hygiene, and poultry care.",
      },
      {
        step: "03",
        title: "Starter Asset Kit Distribution",
        desc: "Beneficiaries receive high-quality input kits (seeds, drip lines, vaccinated poultry, stainless milk pails).",
      },
      {
        step: "04",
        title: "Harvest Aggregation & Market Sale",
        desc: "Produce is aggregated at village collection points and sold to premium supermarket and urban buyers.",
      },
    ],
    faqs: [
      {
        q: "What training programs are offered under the Women in Agriculture initiative?",
        a: "We offer practical courses in off-season tunnel vegetable cultivation, organic kitchen gardening, hygienic dairy milking and mastitis detection, backyard layer poultry farming, and solar food dehydration.",
      },
      {
        q: "What is included in the starter asset kits?",
        a: "Depending on the chosen track, kits include certified hybrid vegetable seeds, 100m drip irrigation lines, 25 vaccinated layer birds with feed, or food-grade stainless steel milk buckets and mastitis testing strips.",
      },
      {
        q: "How does the program help women sell their produce?",
        a: "We establish community aggregation centers where female cooperative members pool their fresh vegetables and eggs for bulk collection and transport to premium urban supermarket buyers.",
      },
    ],
  },
];

export function getNationalAgriculturalProgramBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_AGRICULTURAL_PROGRAMS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  );
}
