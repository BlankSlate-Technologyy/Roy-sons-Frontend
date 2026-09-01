import {
  Syringe,
  FlaskConical,
  Bird,
  Wheat,
  Pill,
  ShieldCheck,
  Sprout,
  Activity,
  Award,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  Microscope,
  HeartPulse,
  Droplets,
  Factory,
  Zap,
} from "lucide-react";

export const VETVAC_PRODUCTS = [
  {
    id: "veterinary-vaccines",
    slug: "veterinary-vaccines",
    title: "Veterinary Vaccines",
    shortTitle: "Vaccines",
    tagline: "Preventive Immunity & Controlled Biological Quality",
    badge: "Active Immunization Portfolio",
    heroImage: "/vetvac_vaccines_ai.jpg",
    icon: Syringe,
    desc: "Engineered live and inactivated multivalent vaccines providing robust, durable humoral and cellular immunity against high-consequence viral and bacterial pathogens in commercial poultry and livestock.",
    stats: [
      { label: "Antigenic Purity", value: "99.9%" },
      { label: "Target Species", value: "Poultry & Ruminants" },
      { label: "Batch Efficacy Rate", value: "99.8%" },
      { label: "Cold-Chain Integrity", value: "2°C – 8°C Monitored" },
    ],
    overview: {
      subtitle: "ADVANCED VACCINOLOGY & IMMUNOPROTECTION",
      heading: "Safeguarding Farmed Herds & Flocks with Precision Biologics",
      paragraph1:
        "Vaccination is the cornerstone of modern preventive veterinary medicine. VET VAC PHARMA manufactures high-titer live attenuated and oil-emulsion inactivated vaccines formulated to stimulate sustained immune memory without compromising animal growth rates.",
      paragraph2:
        "Our vaccines undergo rigorous potency, sterility, and safety testing in state-of-the-art sterile cleanrooms. Each batch is accompanied by temperature-logged cold-chain certification to ensure zero loss of biological titer from formulation to field administration.",
    },
    keyAreas: [
      "Poultry live & inactivated viral vaccines (ND, IB, IBD, AI)",
      "Livestock multivalent bacterial vaccines (Clostridial, Anthrax, HS)",
      "Bovine Foot-and-Mouth Disease (FMD) oil-adjuvanted antigens",
      "Automated hatchery spray cabinet compatibility",
      "Drinking water stabilizer and dye administration protocols",
      "Continuous serological titer validation & ELISA profiling",
    ],
    pillars: [
      {
        icon: ShieldCheck,
        title: "High Antigenic Potency",
        desc: "Optimized antigenic payloads stimulating rapid antibody titer surges and durable mucosal immunity.",
      },
      {
        icon: ThermometerSnowflake,
        title: "Cold-Chain Integrity",
        desc: "Continuous smart temperature-logged packaging maintaining 2°C to 8°C throughout distribution.",
      },
      {
        icon: Microscope,
        title: "Rigorous Safety Testing",
        desc: "Certified free from adventitious agents, mycoplasmas, and endotoxins with zero post-vaccine shock.",
      },
      {
        icon: Activity,
        title: "Field Adaptability",
        desc: "Formulated for mass administration via automated hatchery sprayers, drinking water, or intramuscular injection.",
      },
    ],
    technicalSpecs: [
      { label: "Formulation Types", value: "Lyophilized Live & Inactivated Oil Emulsion" },
      { label: "Target Pathogens", value: "Newcastle, Gumboro, Bronchitis, Clostridium, FMD, Pasteurella" },
      { label: "Storage Temperature", value: "2°C – 8°C (Do Not Freeze Live Strains)" },
      { label: "Shelf Life", value: "24 Months from Manufacturing Date" },
      { label: "Route of Admin", value: "Coarse Spray, Eye-Drop, Drinking Water, IM / SC Injection" },
      { label: "Packaging Formats", value: "500, 1000, 2500 & 5000 Dose Vials" },
    ],
    workflow: [
      {
        step: "01",
        title: "Epidemiological Strain Selection",
        desc: "Isolating and sequencing regionally prevalent wild-type strains to formulate cross-protective vaccines.",
      },
      {
        step: "02",
        title: "cGMP Bioreactor Cultivation",
        desc: "High-density sterile cell culture and egg-based propagation under computer-monitored bioprocess parameters.",
      },
      {
        step: "03",
        title: "Inactivation & Adjuvant Blending",
        desc: "Precise beta-propiolactone (BPL) inactivation and ultra-refined mineral oil emulsification for depot effect.",
      },
      {
        step: "04",
        title: "Quality Release & Cold Dispatch",
        desc: "Multi-point sterility, safety in target animals, and potencies verified prior to cold-chain shipment.",
      },
    ],
    benefits: [
      "Maximum flock and herd survival rates under heavy pathogen pressure",
      "Significant reduction in antibiotic usage through proactive disease prevention",
      "Stable antibody titers providing uniform flock protection",
      "Minimal post-vaccination reaction, preserving feed conversion efficiency",
      "Full compliance with international veterinary biologic regulatory standards",
    ],
    targetAnimals: [
      "Commercial Broilers & Layers",
      "Breeder & Parent Stock Birds",
      "Dairy & Beef Cattle",
      "Sheep, Lambs & Commercial Goats",
      "Commercial Breeding Livestock",
    ],
    faqs: [
      {
        q: "What is the difference between live and inactivated vaccines?",
        a: "Live attenuated vaccines mimic natural mild infection to stimulate rapid mucosal and cellular immunity, ideal for early life. Inactivated vaccines contain killed antigens with adjuvants, providing long-lasting, high-titer circulating antibodies ideal for breeders and layers.",
      },
      {
        q: "How should vaccine vials be handled upon arrival at the farm?",
        a: "Inspect cold-chain temperature tags immediately. Store vials in dedicated veterinary refrigerators at 2°C–8°C. Do not store in domestic refrigerator doors where temperature fluctuates.",
      },
      {
        q: "Can poultry vaccines be administered via drinking water?",
        a: "Yes. Use chlorine-free water and add a skimmed milk or dye stabilizer 15 minutes before mixing the reconstituted vaccine. Ensure birds consume the water within 90–120 minutes.",
      },
      {
        q: "Are maternal antibodies an issue when vaccinating day-old chicks?",
        a: "Yes, high maternal antibody titers can neutralize live vaccines. We provide diagnostic Deventer formula calculators to determine the exact optimal vaccination age for your flock.",
      },
    ],
  },
  {
    id: "biological-products",
    slug: "biological-products",
    title: "Biological Products",
    shortTitle: "Biologicals",
    tagline: "Safe, Effective & Non-Antibiotic Animal Healthcare",
    badge: "Biotechnology & Immunomodulators",
    heroImage: "/vetvac_biologics_ai.jpg",
    icon: FlaskConical,
    desc: "Advanced biotechnology formulations, immune-response modulators, hyperimmune serums, and natural bio-sanitation agents designed to enhance physiological defense mechanisms without inducing antimicrobial resistance.",
    stats: [
      { label: "Antibiotic-Free", value: "100% Compliant" },
      { label: "Cellular Bioactivity", value: "Verified Active" },
      { label: "Immune Response Surge", value: "+32%" },
      { label: "Gut Barrier Integrity", value: "99.4%" },
    ],
    overview: {
      subtitle: "NEXT-GENERATION BIOTHERAPEUTICS",
      heading: "Harnessing Biological Defense Systems for Sustainable Livestock Yields",
      paragraph1:
        "Global animal agriculture is rapidly phasing out prophylactic antibiotic usage. VET VAC PHARMA's biological product division leads this transition by formulating bioactive peptides, immunomodulators, natural competitive exclusion flora, and specific hyperimmune globulins.",
      paragraph2:
        "Our biologicals reinforce the animal's innate mucosal barrier, stabilize the gut microbiome during dietary transitions, and prime macrophage activity, ensuring high livability and superior weight gain under commercial farm conditions.",
    },
    keyAreas: [
      "Innate immune response modulators and beta-glucan complexes",
      "Hyperimmune bovine colostrum fortifiers for newborn calves",
      "Competitive exclusion probiotics restoring intestinal microflora",
      "Biological biosecurity and non-chemical surface sanitizers",
      "Targeted non-antibiotic anti-inflammatory biocompounds",
      "Anti-toxin biological neutralizers for mycotoxins and enterotoxins",
    ],
    pillars: [
      {
        icon: Sparkles,
        title: "Immune Modulation",
        desc: "Activates heterophils, macrophages, and natural killer cells to neutralize opportunistic bacteria rapidly.",
      },
      {
        icon: Layers,
        title: "Microbiome Stabilization",
        desc: "Colonizes mucosal surfaces with beneficial lactic acid bacteria, outcompeting Salmonella and E. coli.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Chemical Residues",
        desc: "Naturally metabolized compounds with zero withdrawal periods in meat, milk, and eggs.",
      },
      {
        icon: HeartPulse,
        title: "Stress Resilience",
        desc: "Mitigates physiological immunosuppression caused by heat stress, transportation, and overcrowding.",
      },
    ],
    technicalSpecs: [
      { label: "Product Class", value: "Immunomodulators, Bio-Protectors & Probiotics" },
      { label: "Active Compounds", value: "Beta-Glucans, Mannan-Oligosaccharides, Immunoglobulins, Bacillus Subtilis" },
      { label: "Withdrawal Period", value: "0 Days (Zero Milk & Meat Residue)" },
      { label: "Compatibility", value: "Safe with standard feed milling & drinking water systems" },
      { label: "Stability", value: "Thermal stability up to 85°C for feed pelleting" },
      { label: "Presentation", value: "Micro-encapsulated powders and concentrated liquid suspensions" },
    ],
    workflow: [
      {
        step: "01",
        title: "Bioactive Molecule Characterization",
        desc: "Screening specific yeast cell-wall fractions and probiotic strains for target macrophage binding affinity.",
      },
      {
        step: "02",
        title: "Fermentation & Bio-Purification",
        desc: "Controlled submerged anaerobic fermentation yielding standardized concentrations of active bio-molecules.",
      },
      {
        step: "03",
        title: "Micro-Encapsulation",
        desc: "Protecting sensitive biologicals from gastric acid degradation, ensuring release in the small intestine.",
      },
      {
        step: "04",
        title: "In-Vivo Performance Validation",
        desc: "Verifying improved villus height-to-crypt depth ratios and reduced intestinal lesion scores.",
      },
    ],
    benefits: [
      "Significant reduction in routine therapeutic antibiotic dependency",
      "Accelerated recovery following viral outbreaks or stressful farm events",
      "Enhanced antibody response when administered concurrently with vaccines",
      "Zero chemical residue risk, supporting export-grade animal production",
      "Improved intestinal morphology and maximum nutrient bioavailability",
    ],
    targetAnimals: [
      "Commercial Poultry (Broilers, Layers, Breeders)",
      "Neonatal & Weaning Calves",
      "High-Yielding Lactating Dairy Cows",
      "Feedlot Beef Steers",
      "Commercial Aquaculture & Small Ruminants",
    ],
    faqs: [
      {
        q: "Can biological products replace antibiotics completely?",
        a: "Biologicals serve as powerful preventive tools that dramatically reduce the incidence of bacterial disease. In active severe clinical infections, targeted therapeutics may still be required, but overall antibiotic usage drops by up to 70%.",
      },
      {
        q: "Are VetVac biological products pelleting-stable?",
        a: "Yes. Our micro-encapsulated powder formulations withstand steam conditioning and pelleting temperatures up to 85°C without loss of bioactivity.",
      },
      {
        q: "What is the recommended timing for immunomodulator administration?",
        a: "Administer 3 days prior to vaccination, beak trimming, shed transfer, or anticipated weather extremes to prime the animal's immune system.",
      },
      {
        q: "Do biological products require a withdrawal period before slaughter?",
        a: "No. All VetVac biological products are non-toxic, all-natural bio-compounds with zero withdrawal periods for both meat and milk.",
      },
    ],
  },
  {
    id: "poultry-health-solutions",
    slug: "poultry-health-solutions",
    title: "Poultry Health Solutions",
    shortTitle: "Poultry Health",
    tagline: "Healthier Flocks • Efficient Production",
    badge: "Avian Commercial Healthcare",
    heroImage: "/vetvac_poultry_service.jpg",
    icon: Bird,
    desc: "Complete preventive, therapeutic, and biosecurity solutions engineered to maximize livability, accelerate daily weight gain, and protect commercial broiler, layer, and breeder flocks against endemic avian challenges.",
    stats: [
      { label: "Flock Livability Rate", value: "98.7%" },
      { label: "Broiler FCR Reduction", value: "-0.12 pts" },
      { label: "Hatchery Cleanliness", value: "99.9%" },
      { label: "Protected Flocks", value: "1,500+" },
    ],
    overview: {
      subtitle: "TOTAL AVIAN HEALTH MANAGEMENT",
      heading: "Precision Healthcare from Day-Old Chick to Processing",
      paragraph1:
        "Commercial poultry operations operate with tight margins where small disease challenges can result in severe financial losses. VET VAC PHARMA provides an integrated approach combining high-potency vaccines, gut health stabilizers, water disinfectants, and respiratory tonics.",
      paragraph2:
        "Our avian specialists design comprehensive health protocols covering hatchery sanitation, early brooding immunity, coccidiosis control, and environmental shed decontamination, ensuring uniform growth curves and premium processing grades.",
    },
    keyAreas: [
      "Live and inactivated viral vaccines for ND, IB, IBD, and Reovirus",
      "Gut health and anticoccidial rotations preventing necrotic enteritis",
      "Hatchery sanitization and automated spray vaccination equipment",
      "Drinking water bio-stabilizers and chlorine-neutralizing reagents",
      "Avian respiratory herbal and essential oil bronchial decongestants",
      "Eggshell quality and layer mineral fortifiers for peak laying cycles",
    ],
    pillars: [
      {
        icon: ShieldCheck,
        title: "Outbreak Prevention",
        desc: "Early mucosal protection neutralizing field viruses before they establish systemic viremia.",
      },
      {
        icon: Activity,
        title: "Intestinal Integrity",
        desc: "Prevents clostridial colonization and coccidial oocyst shedding, preserving intestinal villi.",
      },
      {
        icon: Droplets,
        title: "Water Line Biosecurity",
        desc: "Continuous organic acid and disinfectant treatment eliminating biofilm and bacterial loads.",
      },
      {
        icon: Award,
        title: "Flock Uniformity",
        desc: "Ensures even growth rates and body weight targets across 50,000+ bird commercial sheds.",
      },
    ],
    technicalSpecs: [
      { label: "Target Species", value: "Commercial Broilers, Commercial Layers, Broiler Breeders" },
      { label: "Primary Focus", value: "Gumboro, Newcastle, Avian Bronchitis, Coccidiosis, Salmonellosis" },
      { label: "Delivery Methods", value: "Automated Spray Cabinet, In-Ovo, Drinking Water, Feed Pre-Mix" },
      { label: "Dosage Monitoring", value: "ELISA titer baseline charts and flock autopsy kits included" },
      { label: "Compatibility", value: "Compatible with standard automated farm climate and water systems" },
    ],
    workflow: [
      {
        step: "01",
        title: "Hatchery Day-0 Immunization",
        desc: "Automated coarse spray and subcutaneous vaccination protecting chicks within hours of hatching.",
      },
      {
        step: "02",
        title: "Brooding Gut Colonization",
        desc: "Administering live probiotic flora and early-life electrolytes via drinking lines during days 1 to 5.",
      },
      {
        step: "03",
        title: "Mid-Growout Booster & Coccidial Defense",
        desc: "Scheduled field booster vaccination and natural anticoccidial rotation protecting peak growth phase.",
      },
      {
        step: "04",
        title: "Pre-Harvest Audit & Sanitization",
        desc: "Terminal shed fogging and water line disinfection preparing the facility for the next placement cycle.",
      },
    ],
    benefits: [
      "Consistent 0.08 to 0.15 improvement in Feed Conversion Ratio (FCR)",
      "Near-zero chick mortality during critical first 7 days of brooding",
      "Protection against devastating Gumboro (IBD) immune destruction",
      "Maximized egg output and shell strength across extended layer cycles",
      "Hygienic processing carcasses with zero chemical or antibiotic residues",
    ],
    targetAnimals: [
      "Commercial Broiler Integrators",
      "Commercial Egg Layer Producers",
      "Parent Stock & Grandparent Breeder Farms",
      "Industrial Commercial Hatcheries",
      "Organic and Free-Range Poultry Farms",
    ],
    faqs: [
      {
        q: "What causes wet litter and how does VetVac help solve it?",
        a: "Wet litter is commonly caused by poor gut health, coccidiosis, or water-line biofilm. Our organic acid water sanitizers combined with gut stabilizers restore intestinal absorption, yielding dry droppings and clean paw health.",
      },
      {
        q: "How does VetVac address respiratory stress during winter brooding?",
        a: "We formulate micro-nebulized eucalyptus and menthol bronchial tonics that clear mucus build-up, soothe tracheal inflammation, and improve oxygenation in closed sheds.",
      },
      {
        q: "How often should serological ELISA tests be performed on layers?",
        a: "We recommend baseline testing at 6, 12, and 18 weeks, followed by quarterly monitoring throughout the egg-laying cycle to verify sustained antibody titers.",
      },
      {
        q: "Are the poultry vaccines effective against variant field strains?",
        a: "Yes. Our R&D laboratories continuously monitor field isolates and formulate multi-strain cross-protective vaccines ensuring defense against emerging variants.",
      },
    ],
  },
  {
    id: "livestock-health-solutions",
    slug: "livestock-health-solutions",
    title: "Livestock Health Solutions",
    shortTitle: "Livestock Health",
    tagline: "Preventive Care • Herd Wellbeing",
    badge: "Ruminant Veterinary Care",
    heroImage: "/vetvac_livestock_service.jpg",
    icon: Wheat,
    desc: "Specialized clinical and preventive healthcare for beef cattle, high-yielding dairy herds, sheep, and goats, focusing on infectious disease control, parasite management, and metabolic performance.",
    stats: [
      { label: "Herd Morbidity Drop", value: "-78%" },
      { label: "Average Daily Gain", value: "+14%" },
      { label: "Dairy Longevity", value: "+1.8 Lactations" },
      { label: "Herds Protected", value: "900+" },
    ],
    overview: {
      subtitle: "ADVANCED RUMINANT MEDICINE",
      heading: "Sustaining Herd Vitality, Reproduction & Meat/Milk Yields",
      paragraph1:
        "Livestock operations face persistent productivity barriers from infectious epidemics like Foot-and-Mouth Disease, clostridial toxemias, parasitic gastroenteritis, and metabolic disorders at calving. VET VAC PHARMA delivers an integrated ruminant healthcare portfolio.",
      paragraph2:
        "Our dedicated large-animal veterinarians provide complete preventative calendars, injectable sterile antibiotics, potent antiparasitic drenches, and rapid metabolic emergency infusions that keep animals healthy, fertile, and commercially productive.",
    },
    keyAreas: [
      "Multivalent Clostridial and FMD oil-adjuvanted vaccine protocols",
      "Broad-spectrum injectable and pour-on antiparasitic formulations",
      "Bovine respiratory disease (BRD) prevention and targeted therapeutics",
      "Dairy transition cow calcium, energy, and ketosis management",
      "Reproductive wellness, post-calving uterine infusions, and fertility support",
      "Trace mineral chelated injectables (Copper, Zinc, Selenium, Vit AD3E)",
    ],
    pillars: [
      {
        icon: ShieldCheck,
        title: "Epidemic Barrier",
        desc: "High-adjuvant vaccines providing solid active immunity against FMD, Blackleg, and Anthrax.",
      },
      {
        icon: HeartPulse,
        title: "Parasite Eradication",
        desc: "Eliminates gastrointestinal nematodes, liver flukes, and external ticks/lice across herds.",
      },
      {
        icon: Zap,
        title: "Metabolic Optimization",
        desc: "Rapid-acting calcium gels and energy pastes preventing milk fever and downer cow syndrome.",
      },
      {
        icon: Factory,
        title: "Feedlot Growth Acceleration",
        desc: "Rumen buffers and liver tonics maximizing Average Daily Gain (ADG) in commercial feedlots.",
      },
    ],
    technicalSpecs: [
      { label: "Target Species", value: "Beef Cattle, Dairy Cows, Sheep, Goats, Calves" },
      { label: "Primary Indications", value: "FMD, Clostridial Enterotoxemia, HS, Mastitis, Internal/External Parasites" },
      { label: "Administration Routes", value: "Subcutaneous, Intramuscular, Oral Drench, Topical Pour-On" },
      { label: "Storage Requirements", value: "Vaccines 2°C–8°C; Pharmaceuticals 15°C–25°C protected from light" },
      { label: "Safety Margin", value: "High therapeutic index safe in pregnant and lactating animals" },
    ],
    workflow: [
      {
        step: "01",
        title: "Herd Risk Profile & Soil Audit",
        desc: "Evaluating pasture mineral deficiencies, seasonal tick burdens, and historical herd mortality patterns.",
      },
      {
        step: "02",
        title: "Customized Seasonal Health Calendar",
        desc: "Formulating annual pre-monsoon and pre-winter vaccination, drenching, and mineral schedules.",
      },
      {
        step: "03",
        title: "Targeted Field Administration",
        desc: "Providing high-purity sterile injectables, drench guns, and certified dosing guidelines to farm staff.",
      },
      {
        step: "04",
        title: "Post-Treatment Performance Audit",
        desc: "Benchmarking daily weight gains, milk yield curves, somatic cell counts, and reproductive conception rates.",
      },
    ],
    benefits: [
      "Zero catastrophic herd losses during high-risk viral epidemic seasons",
      "Maximized Average Daily Gain (ADG) and dressing percentage in feedlots",
      "Significant decrease in mastitis, retained placenta, and metritis in dairy cows",
      "Higher lambing and kidding percentages in small ruminant pastoral operations",
      "Protection of animal welfare, longevity, and long-term farm equity",
    ],
    targetAnimals: [
      "Commercial Beef Feedlots",
      "High-Producing Dairy Cattle Herds",
      "Pastoral Sheep & Goat Operations",
      "Livestock Quarantine & Export Facilities",
      "Dairy Farmer Cooperatives & Integrators",
    ],
    faqs: [
      {
        q: "What is the optimal deworming schedule for grazing cattle?",
        a: "We recommend a strategic deworming treatment at spring pasture turn-out and a comprehensive broad-spectrum treatment in autumn after the first hard frost to clear both roundworms and liver flukes.",
      },
      {
        q: "How does VetVac assist with Bovine Respiratory Disease (BRD)?",
        a: "We combine intranasal viral vaccines for early mucosal immunity in feedlot calves with long-acting florfenicol/flunixin injectables for immediate clinical relief.",
      },
      {
        q: "Are the livestock vaccines safe for pregnant cows?",
        a: "Our inactivated oil-adjuvanted FMD and clostridial vaccines are completely safe during pregnancy and pass vital protective maternal antibodies through colostrum to the newborn calf.",
      },
      {
        q: "What mineral deficiencies are most common in livestock?",
        a: "Selenium, copper, and zinc deficiencies frequently cause poor conception, weak calves, and retained placenta. Our injectable multi-mineral complexes restore optimum systemic levels rapidly.",
      },
    ],
  },
  {
    id: "veterinary-medicines",
    slug: "veterinary-medicines",
    title: "Veterinary Medicines & Pharmaceuticals",
    shortTitle: "Medicines",
    tagline: "High-Purity Therapeutics & Targeted Clinical Care",
    badge: "cGMP Pharmaceutical Range",
    heroImage: "/vetvac_rd_lab_ai.jpg",
    icon: Pill,
    desc: "Hospital-grade sterile injectables, targeted broad-spectrum antimicrobials, anti-inflammatories, and metabolic therapeutics formulated under strict cGMP international quality standards.",
    stats: [
      { label: "Pharmaceutical Formulas", value: "45+" },
      { label: "cGMP Certified", value: "100%" },
      { label: "Bioavailability", value: "Maximized" },
      { label: "Sterility Assurance", value: "10⁻⁶ SAL" },
    ],
    overview: {
      subtitle: "PRECISION PHARMACOLOGY",
      heading: "Engineered for Rapid Clinical Recovery & High Bioavailability",
      paragraph1:
        "When clinical bacterial infections, acute trauma, or metabolic distress occur, veterinary doctors require dependable pharmaceuticals with verified pharmacokinetic release curves. VET VAC PHARMA produces advanced sterile injectables and oral therapeutics.",
      paragraph2:
        "Manufactured in automated HEPA-filtered cleanrooms with continuous particle monitoring, our pharmaceuticals deliver guaranteed chemical purity, predictable tissue distribution, and clear withdrawal documentation.",
    },
    keyAreas: [
      "Extended-release long-acting oxytetracycline and florfenicol sterile injectables",
      "Non-steroidal anti-inflammatory drugs (Meloxicam, Flunixin Meglumine, Ketoprofen)",
      "Targeted respiratory fluoroquinolones and beta-lactamase inhibitors",
      "Metabolic liver tonics, B-complex vitamins, and phosphorus stimulants",
      "Intramammary mastitis treatment and uterine post-calving formulations",
      "Rapid rehydration balanced electrolyte infusions for critical care",
    ],
    pillars: [
      {
        icon: FlaskConical,
        title: "cGMP Cleanroom Purity",
        desc: "Formulated with USP/BP grade active pharmaceutical ingredients in sterile grade-A cleanrooms.",
      },
      {
        icon: Activity,
        title: "Extended Therapeutic Tissue Levels",
        desc: "Advanced carrier matrices maintaining effective minimum inhibitory concentration (MIC) for up to 72 hours.",
      },
      {
        icon: ShieldCheck,
        title: "Minimal Tissue Reaction",
        desc: "pH-buffered formulations ensuring painless injection and zero local muscle necrosis.",
      },
      {
        icon: HeartPulse,
        title: "Rapid Anti-Pyretic Relief",
        desc: "Fast-acting NSAIDs providing immediate fever reduction and pain relief within 30 minutes.",
      },
    ],
    technicalSpecs: [
      { label: "Dosage Forms", value: "Sterile Injectable Vials, Oral Solutions, Water-Soluble Powders" },
      { label: "Quality Standards", value: "cGMP, ISO 9001:2015, WHO Technical Report Series compliant" },
      { label: "Packaging Sizes", value: "50ml, 100ml, 250ml & 500ml amber glass vials" },
      { label: "Sterilization", value: "Terminal Autoclaving & Aseptic Sterile Filtration (0.22 micron)" },
      { label: "Preservative System", value: "Multi-dose bacteriostatic benzyl alcohol formulation" },
    ],
    workflow: [
      {
        step: "01",
        title: "API Quality & Assay Verification",
        desc: "HPLC assay and impurity profiling of all raw pharmaceutical molecules prior to formulation.",
      },
      {
        step: "02",
        title: "Aseptic Blending & Sterile Filtration",
        desc: "Automated nitrogen-blanketed formulation tanks and 0.22-micron filtration under Class 100 laminar flow.",
      },
      {
        step: "03",
        title: "Automated Vial Filling & Crimping",
        desc: "Laser-guided sterile filling lines and automated vision inspection detecting zero particulate matter.",
      },
      {
        step: "04",
        title: "Stability Testing & Pharmacovigilance",
        desc: "Accelerated climatic zone IV stability testing confirming potency across extreme temperature environments.",
      },
    ],
    benefits: [
      "Rapid resolution of life-threatening respiratory and systemic bacterial infections",
      "Single-dose convenience reducing animal handling stress and labor costs",
      "Verified withdrawal periods ensuring complete food safety in meat and milk",
      "Immediate fever and pain relief restoring animal appetite quickly",
      "Reliable efficacy backed by clinical bioequivalence and pharmacokinetics",
    ],
    targetAnimals: [
      "Veterinary Hospitals & Surgical Clinics",
      "Commercial Dairy & Feedlot Operations",
      "Poultry Broiler & Layer Farms",
      "Equine Clinics & Breeding Stables",
      "Government Animal Health Dispensaries",
    ],
    faqs: [
      {
        q: "What is the advantage of long-acting antibiotic formulations?",
        a: "Long-acting injectables maintain therapeutic blood levels for 48 to 72 hours from a single injection. This minimizes animal handling, reduces stress, and eliminates missed subsequent doses.",
      },
      {
        q: "Are VetVac anti-inflammatories safe for pregnant animals?",
        a: "Meloxicam and Flunixin Meglumine are well-tolerated when used at recommended dosages. Always verify specific contraindications listed on the product package insert.",
      },
      {
        q: "How should opened multi-dose sterile vials be stored?",
        a: "Once broached with a sterile needle, store the vial in a clean, dark place at 15°C–25°C and use within 28 days to prevent bacterial contamination.",
      },
      {
        q: "How do you test for bioequivalence and potency?",
        a: "Every batch is analyzed via High-Performance Liquid Chromatography (HPLC) and tested for sterility and bacterial endotoxins (LAL test) before release.",
      },
    ],
  },
  {
    id: "nutritional-supplements",
    slug: "nutritional-supplements",
    title: "Animal Nutritional Supplements & Tonics",
    shortTitle: "Supplements",
    tagline: "Optimizing Metabolic Vitality & Growth Efficiency",
    badge: "Bioavailable Nutrition & Pre-Mixes",
    heroImage: "/vetvac_contact_ai.jpg",
    icon: Sprout,
    desc: "Chelated trace minerals, high-potency vitamin complexes, liver protectants, and oral energy electrolytes formulated to prevent metabolic deficiencies and maximize feed conversion efficiency.",
    stats: [
      { label: "Bio-Absorption Rate", value: "98.5%" },
      { label: "Trace Element Purity", value: "Chelated" },
      { label: "FCR Improvement", value: "+9.2%" },
      { label: "Formulations Available", value: "30+" },
    ],
    overview: {
      subtitle: "ADVANCED ANIMAL NUTRITION",
      heading: "Fueling Peak Growth, Fertility & Metabolic Health",
      paragraph1:
        "Even with balanced basal rations, high-producing commercial animals frequently encounter subclinical trace mineral and vitamin deficiencies during peak production, gestation, lactation, and environmental heat stress. VET VAC PHARMA delivers high-bioavailability nutritional formulations.",
      paragraph2:
        "Our liquid oral tonics, water-soluble micro-nutrients, and chelated trace mineral pre-mixes are instantly absorbed through the gut wall, restoring enzymatic function, boosting liver metabolism, and enhancing skeletal and muscular development.",
    },
    keyAreas: [
      "Liquid oral amino acid and vitamin AD3E stress tonics",
      "Chelated multi-mineral oral drenches (Zinc, Copper, Manganese, Cobalt, Selenium)",
      "High-potency oral calcium, magnesium, and phosphorus solutions for dairy cows",
      "Liver stimulants, lipotropic factors, and choline chloride metabolism boosters",
      "Electrolyte rehydration salts for dehydration and heat stress recovery",
      "Enzyme and probiotic water pre-mixes improving nutrient absorption",
    ],
    pillars: [
      {
        icon: Sparkles,
        title: "Chelated Mineral Technology",
        desc: "Organic amino-acid chelation prevents mineral antagonism in the rumen and boosts gut absorption by 300%.",
      },
      {
        icon: HeartPulse,
        title: "Liver Protection",
        desc: "Detoxifies metabolic by-products, regenerates hepatocytes, and enhances fat breakdown.",
      },
      {
        icon: Zap,
        title: "Rapid Rehydration",
        desc: "Restores cellular osmolarity and blood pH within 1 hour during severe heat stress or diarrhea.",
      },
      {
        icon: Sprout,
        title: "Fertility & Egg Quality",
        desc: "Supplies essential selenium and vitamin E improving sperm motility, ovulation, and shell hardness.",
      },
    ],
    technicalSpecs: [
      { label: "Physical Forms", value: "Liquid Oral Tonics, Micro-Granulated Powders, Oral Gels" },
      { label: "Key Active Ingredients", value: "Chelated Minerals, Vitamin Complex (A, D3, E, B-Group), Sorbitol, Carnitine" },
      { label: "Solubility", value: "100% water-soluble with zero sedimentation in automatic drinkers" },
      { label: "Compatibility", value: "Safe for simultaneous use with vitamins, vaccines, and anthelmintics" },
      { label: "Packaging", value: "100ml, 500ml, 1 Litre & 5 Litre HDPE Bottles" },
    ],
    workflow: [
      {
        step: "01",
        title: "Nutritional Deficiency Mapping",
        desc: "Analyzing regional forage and grain mineral profiles to identify limiting micro-nutrients.",
      },
      {
        step: "02",
        title: "Organic Chelation Synthesis",
        desc: "Bonding essential metal ions to amino acid ligands for optimal absorption through intestinal peptide channels.",
      },
      {
        step: "03",
        title: "Homogenized Liquid Blending",
        desc: "High-shear emulsification ensuring stable vitamin dispersion without separation or oxidation.",
      },
      {
        step: "04",
        title: "Field Dosing & Growth Tracking",
        desc: "Monitoring body weight curves, egg production persistence, and milk fat percentage improvements.",
      },
    ],
    benefits: [
      "Immediate reversal of stress-induced anorexia and growth slumps",
      "Higher peak egg production and extended laying persistence in poultry",
      "Accelerated recovery of scoured calves and dehydrated animals",
      "Prevention of post-calving hypocalcemia (milk fever) and downer syndrome",
      "Noticeably shinier hair coats, stronger hooves, and robust flock feathering",
    ],
    targetAnimals: [
      "Commercial Broilers & Layer Birds",
      "Lactating Dairy Cows & Breeding Bulls",
      "Feedlot Cattle & Small Ruminants",
      "Racehorses & Performance Animals",
      "Commercial Aquaculture & Fish Farms",
    ],
    faqs: [
      {
        q: "Why are chelated minerals superior to inorganic mineral salts?",
        a: "Inorganic minerals (sulfates, oxides) easily bind to dietary phytates and antagonists in the gut and are excreted. Chelated minerals are bound to amino acids, allowing them to pass directly through peptide transport pathways with up to 3x higher bioavailability.",
      },
      {
        q: "Can nutritional supplements be given through automated poultry water lines?",
        a: "Yes. Our liquid tonics are fully water-soluble and specially formulated to prevent nozzle clogging, algal growth, or sediment build-up in nipple drinker systems.",
      },
      {
        q: "When should liver tonics be administered to broilers?",
        a: "Administer during days 18–24 when birds transition to high-energy finisher rations and during recovery after any disease challenge to optimize hepatic lipid metabolism.",
      },
      {
        q: "How does oral calcium gel differ from intravenous calcium borogluconate?",
        a: "Intravenous calcium provides immediate emergency calcium for recumbent cows with milk fever. Oral calcium gel delivers sustained ionized calcium over 24 hours, preventing relapse and supporting muscle tone.",
      },
    ],
  },
];

export function getVetvacProductBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();

  // Direct match
  const direct = VETVAC_PRODUCTS.find((p) => p.id === normalized || p.slug === normalized);
  if (direct) return direct;

  // Aliases
  if (normalized === "vaccines" || normalized === "vaccine" || normalized === "veterinary-vaccines") {
    return VETVAC_PRODUCTS.find((p) => p.id === "veterinary-vaccines");
  }
  if (normalized === "biologicals" || normalized === "biologics" || normalized === "biological-products") {
    return VETVAC_PRODUCTS.find((p) => p.id === "biological-products");
  }
  if (normalized === "poultry-health" || normalized === "poultry-health-solutions" || normalized === "poultry") {
    return VETVAC_PRODUCTS.find((p) => p.id === "poultry-health-solutions");
  }
  if (normalized === "livestock-health" || normalized === "livestock-health-solutions" || normalized === "livestock") {
    return VETVAC_PRODUCTS.find((p) => p.id === "livestock-health-solutions");
  }
  if (normalized === "medicines" || normalized === "medicine" || normalized === "pharmaceuticals" || normalized === "veterinary-medicines") {
    return VETVAC_PRODUCTS.find((p) => p.id === "veterinary-medicines");
  }
  if (normalized === "supplements" || normalized === "nutrition" || normalized === "nutritional-supplements") {
    return VETVAC_PRODUCTS.find((p) => p.id === "nutritional-supplements");
  }

  return null;
}
