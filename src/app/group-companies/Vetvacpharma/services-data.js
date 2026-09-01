import {
  Bird,
  Wheat,
  Sprout,
  Stethoscope,
  Factory,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  FlaskConical,
  Microscope,
  HeartPulse,
} from "lucide-react";

export const VETVAC_SERVICES = [
  {
    id: "poultry",
    slug: "poultry",
    title: "Poultry Veterinary Solutions",
    shortTitle: "Poultry",
    tagline: "Healthier Flocks. Stronger Production.",
    badge: "Avian Healthcare & Immunization",
    heroImage: "/vetvac_poultry_service.jpg",
    icon: Bird,
    desc: "Comprehensive veterinary healthcare, live and inactivated vaccine programs, and flock biosecurity management engineered for commercial broiler, layer, and breeder operations.",
    stats: [
      { label: "Flock Protection Rate", value: "99.4%" },
      { label: "Vaccine Formulations", value: "35+" },
      { label: "Active Poultry Farms", value: "1,200+" },
      { label: "Average FCR Improvement", value: "+8.5%" },
    ],
    overview: {
      subtitle: "PRECISION AVIAN BIOMEDICINE",
      heading: "Optimizing Flock Health, Viability & Farm Performance",
      paragraph1:
        "Commercial poultry production demands rigorous disease prevention and strict flock immunity. VET VAC PHARMA provides poultry producers with industry-leading veterinary biologics, live and inactivated vaccines, and precision nutritional supplements designed to counter Newcastle Disease, Infectious Bronchitis, Gumboro (IBD), and avian influenza.",
      paragraph2:
        "Our avian health specialists work directly with poultry farm operators and hatchery managers to implement customized vaccination schedules, water-sanitation protocols, and serological titer monitoring that maximize flock uniformity, reduce chick mortality, and elevate overall profitability.",
    },
    pillars: [
      {
        icon: ShieldCheck,
        title: "Live & Inactivated Vaccines",
        desc: "State-of-the-art antigenic strains providing high antibody titers against viral and bacterial avian pathogens.",
      },
      {
        icon: ThermometerSnowflake,
        title: "Cold-Chain Integrity",
        desc: "Strict 2°C–8°C temperature-monitored logistics ensuring peak vaccine potency from lab to hatchery.",
      },
      {
        icon: Activity,
        title: "Flock Biosecurity Protocols",
        desc: "Comprehensive farm perimeter disinfection, water line sanitization, and pathogen exclusion systems.",
      },
      {
        icon: Microscope,
        title: "Serological Titer Auditing",
        desc: "Routine ELISA blood profiling to confirm flock antibody response and adjust booster timing accurately.",
      },
    ],
    products: [
      {
        title: "Avian Viral Immunization Regimens",
        desc: "High-titer multi-strain vaccines protecting day-old chicks and layers against ND, IB, and IBD.",
        badge: "Biologics",
      },
      {
        title: "Gut Health & Anti-Coccidials",
        desc: "Therapeutic and preventive solutions ensuring optimal nutrient absorption and intestinal integrity.",
        badge: "Therapeutics",
      },
      {
        title: "Hatchery Sanitation Sprays",
        desc: "High-grade virucidal and bactericidal formulations for incubators, setters, and chick processing rooms.",
        badge: "Biosecurity",
      },
      {
        title: "Immuno-Nutritional Tonics",
        desc: "Liquid amino-acid and electrolyte formulations administered via drinking water during stress periods.",
        badge: "Nutrition",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Flock Risk & Pathology Audit",
        desc: "Comprehensive diagnostic assessment of prevailing regional pathogens and historical farm mortality.",
      },
      {
        step: "02",
        title: "Custom Vaccine Schedule Design",
        desc: "Formulation of age-specific hatchery and farm immunization timelines tailored to flock genetics.",
      },
      {
        step: "03",
        title: "Supervised Administration",
        desc: "Technical guidance on automated spray cabinets, eye-drop administration, and drinking water dosing.",
      },
      {
        step: "04",
        title: "Post-Vaccination Serology",
        desc: "Laboratory titer analysis and continuous flock health tracking to ensure sustained commercial yield.",
      },
    ],
    benefits: [
      "Substantial reduction in chick and flock mortality rates",
      "Improved Feed Conversion Ratio (FCR) and faster weight gain",
      "Robust immunity against high-consequence viral outbreaks",
      "Compliance with international antibiotic-reduction mandates",
      "Uniform flock growth and enhanced egg production in layers",
    ],
    targetSectors: [
      "Commercial Broiler Operations",
      "Commercial Layer Farms",
      "Breeder & Parent Stock Facilities",
      "Automated Hatcheries",
      "Poultry Processing Integrators",
    ],
    faqs: [
      {
        q: "What storage conditions are required for VetVac poultry vaccines?",
        a: "All live and inactivated poultry vaccines must be stored in continuous cold-chain conditions between 2°C and 8°C. Do not freeze live vaccines, and protect them from direct sunlight.",
      },
      {
        q: "How does VetVac assist with drinking water vaccine administration?",
        a: "We provide chlorine-neutralizing dye stabilizers and dosage calculation charts to ensure the vaccine strain remains viable and evenly consumed by every bird in the flock.",
      },
      {
        q: "Can vaccination schedules be customized for specific farm genetics?",
        a: "Yes. Our veterinary team analyzes maternal antibody levels and local epidemiological risks to formulate tailored vaccination schedules for Cobb, Ross, and layer lines.",
      },
      {
        q: "How do you verify vaccine efficacy post-administration?",
        a: "We conduct periodic serological blood sampling (ELISA) 2 to 3 weeks post-vaccination to measure mean antibody titers and coefficient of variation (%CV).",
      },
    ],
  },
  {
    id: "livestock",
    slug: "livestock",
    title: "Livestock Health & Herd Management",
    shortTitle: "Livestock",
    tagline: "Supporting Healthy & Productive Livestock",
    badge: "Ruminant Healthcare & Productivity",
    heroImage: "/vetvac_livestock_service.jpg",
    icon: Wheat,
    desc: "Preventive medicine, herd immunization, parasite management, and metabolic support engineered for beef cattle, sheep, goats, and pastoral operations.",
    stats: [
      { label: "Herd Outbreak Reduction", value: "98.8%" },
      { label: "Pharmaceutical Formulas", value: "40+" },
      { label: "Cattle & Small Ruminants", value: "250K+" },
      { label: "Feedlot ADG Boost", value: "+12%" },
    ],
    overview: {
      subtitle: "ADVANCED RUMINANT MEDICINE",
      heading: "Safeguarding Herd Wellbeing & Sustainable Pastoral Yields",
      paragraph1:
        "Modern livestock producers face complex challenges including Foot-and-Mouth Disease (FMD), Blackleg, Haemorrhagic Septicaemia, parasitic burdens, and respiratory infections. VET VAC PHARMA delivers high-efficacy vaccines, broad-spectrum anti-parasitics, and targeted injectable antibiotics that keep herds resilient and thriving.",
      paragraph2:
        "Whether managing commercial feedlots, extensive pastoral ranches, or small ruminant flocks, our dedicated veterinary team provides evidence-based herd health schedules, strategic deworming programs, and vital trace mineral formulations to accelerate weight gain and improve meat quality.",
    },
    pillars: [
      {
        icon: ShieldCheck,
        title: "Multivalent Herd Immunization",
        desc: "Broad-spectrum coverage against clostridial diseases, FMD, anthrax, and bovine respiratory pathogens.",
      },
      {
        icon: HeartPulse,
        title: "Parasite Control & Deworming",
        desc: "Strategic pour-on, oral, and injectable antiparasitics controlling internal helminths and external ectoparasites.",
      },
      {
        icon: FlaskConical,
        title: "Feedlot Growth Therapeutics",
        desc: "Metabolic stimulants, liver protectors, and rumen buffers maximizing daily weight gain and feed efficiency.",
      },
      {
        icon: Layers,
        title: "Reproductive & Calving Health",
        desc: "Comprehensive maternal healthcare reducing dystocia, retained placenta, and post-calving infections.",
      },
    ],
    products: [
      {
        title: "Clostridial & FMD Multivalent Vaccines",
        desc: "High-potency oil-adjuvanted vaccines giving long-lasting active immunity to cattle, sheep, and goats.",
        badge: "Biologics",
      },
      {
        title: "Long-Acting Antibiotic Injectables",
        desc: "Extended-release oxytetracyclines and florfenicol for respiratory and systemic bacterial infections.",
        badge: "Therapeutics",
      },
      {
        title: "Ivermectin & Triclabendazole Formulations",
        desc: "Complete eradication of gastrointestinal roundworms, lungworms, and liver flukes.",
        badge: "Antiparasitic",
      },
      {
        title: "Trace Mineral & Vitamin Injections",
        desc: "Chelated copper, selenium, zinc, and vitamin AD3E boosters promoting rapid recovery and vigor.",
        badge: "Nutritional",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Herd Epidemiological Assessment",
        desc: "Evaluating geographical disease risks, soil mineral deficiencies, and seasonal parasite cycles.",
      },
      {
        step: "02",
        title: "Seasonal Vaccine & Dosing Calendar",
        desc: "Customizing annual pre-monsoon and pre-winter immunization and drenching timelines.",
      },
      {
        step: "03",
        title: "Standardized Field Application",
        desc: "Delivering sterile injectables and dosing equipment with clear administration guidelines.",
      },
      {
        step: "04",
        title: "Performance & Weight Tracking",
        desc: "Benchmarking Average Daily Gain (ADG), body condition scores, and mortality reductions.",
      },
    ],
    benefits: [
      "Substantial drop in herd morbidity and emergency veterinary costs",
      "Maximized Average Daily Gain (ADG) in commercial feedlots",
      "Prevention of catastrophic seasonal viral and bacterial epidemics",
      "Enhanced female fertility, conception rates, and weaning weights",
      "Protection of animal welfare and superior meat quality",
    ],
    targetSectors: [
      "Commercial Beef Feedlots",
      "Cattle Breeding Ranches",
      "Sheep & Goat Pastoral Farms",
      "Livestock Quarantine Stations",
      "Government Livestock Research Centres",
    ],
    faqs: [
      {
        q: "When is the best time to administer FMD and Clostridial vaccines?",
        a: "We recommend initial vaccination at 3–4 months of age with a booster 3–4 weeks later, followed by annual or bi-annual boosters prior to high-risk seasonal windows.",
      },
      {
        q: "How does VetVac address liver fluke in marshy pastoral zones?",
        a: "We supply combination triclabendazole and ivermectin drenches that eliminate both early immature and mature liver flukes along with internal nematodes.",
      },
      {
        q: "What are the withdrawal periods for injectable therapeutics?",
        a: "Each VetVac product has clearly specified meat and milk withdrawal periods ranging from 7 to 28 days depending on the active molecule to ensure food safety.",
      },
      {
        q: "Do you offer on-farm veterinary herd consultations?",
        a: "Yes. Our field veterinary teams conduct on-site herd diagnostics, post-mortem examinations, and custom health program design.",
      },
    ],
  },
  {
    id: "dairy-farming",
    slug: "dairy-farming",
    title: "Dairy Farming Veterinary & Udder Health",
    shortTitle: "Dairy Farming",
    tagline: "Protecting Animal Health Across Dairy Operations",
    badge: "Bovine Lactation & Mastitis Defense",
    heroImage: "/vetvac_dairy_service.jpg",
    icon: Sprout,
    desc: "Targeted clinical solutions for high-yielding dairy herds, focusing on mastitis prevention, lactation longevity, reproductive wellness, and calf survival.",
    stats: [
      { label: "Mastitis Incidence Drop", value: "-65%" },
      { label: "Peak Milk Yield Boost", value: "+14%" },
      { label: "Dairy Herds Covered", value: "850+" },
      { label: "Somatic Cell Count (SCC)", value: "<180K" },
    ],
    overview: {
      subtitle: "DAIRY HEALTH & MILK PURITY",
      heading: "Maximizing Milk Quality, Cow Longevity & Lactation Cycles",
      paragraph1:
        "High-producing dairy cows require specialized veterinary care to maintain peak lactation while safeguarding udder health. Mastitis, metritis, milk fever, and subclinical ketosis represent the greatest economic drains on dairy operations. VET VAC PHARMA provides targeted preventive and therapeutic solutions engineered specifically for modern dairy animals.",
      paragraph2:
        "From pre-milking antiseptic barrier dips and dry-cow intramammary infusions to high-potency calcium gels and calf immunity boosters, our comprehensive dairy solutions empower farm managers to sustain superior milk quality, reduce Somatic Cell Counts (SCC), and prolong productive cow life.",
    },
    pillars: [
      {
        icon: ShieldCheck,
        title: "Intensive Mastitis Control",
        desc: "Pre/post-milking teat sanitizers, rapid California Mastitis Test (CMT) kits, and dry-cow therapy tubes.",
      },
      {
        icon: Zap,
        title: "Transition Cow Metabolic Care",
        desc: "Fast-absorbing oral calcium formulations and propylene glycol energy supplements preventing ketosis.",
      },
      {
        icon: HeartPulse,
        title: "Reproductive & Uterine Health",
        desc: "Post-partum uterine infusions, hormone protocols, and estrus synchronization support.",
      },
      {
        icon: ThermometerSnowflake,
        title: "Calf Rearing & Early Immunity",
        desc: "Colostrum supplements, electrolyte rehydration formulas, and respiratory vaccines for calves.",
      },
    ],
    products: [
      {
        title: "Dry-Cow Intramammary Infusions",
        desc: "Extended-release broad-spectrum cephalosporin and cloxacillin tubes protecting teats through the dry period.",
        badge: "Udder Health",
      },
      {
        title: "Barrier Teat Dip Formulations",
        desc: "Iodine and chlorhexidine-based film-forming dips protecting the teat canal against environmental bacteria.",
        badge: "Hygiene",
      },
      {
        title: "Calcium & Energy Gels",
        desc: "High-bioavailability calcium chloride/propionate paste preventing hypocalcemia (milk fever) at calving.",
        badge: "Metabolic",
      },
      {
        title: "Calf Electrolytes & Probiotics",
        desc: "Fast-acting oral rehydration salts and gut probiotics curing neonatal calf scours rapidly.",
        badge: "Calf Care",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Milking Parlour & SCC Audit",
        desc: "Assessing milking routine, liner hygiene, water quality, and bulk tank somatic cell count history.",
      },
      {
        step: "02",
        title: "Dry-Cow & Lactation Protocol Setup",
        desc: "Standardizing dry-off infusions, barrier dips, and transition cow metabolic supplementation.",
      },
      {
        step: "03",
        title: "Milking Hygiene Implementation",
        desc: "Staff training on proper pre-dipping, strip-testing, post-dipping, and cluster disinfection.",
      },
      {
        step: "04",
        title: "Milk Yield & Quality Benchmarking",
        desc: "Ongoing monitoring of milk quality grade, Somatic Cell Count reduction, and cow longevity.",
      },
    ],
    benefits: [
      "Up to 65% reduction in clinical and subclinical mastitis cases",
      "Marked decrease in bulk tank Somatic Cell Counts (SCC)",
      "Higher peak lactation yield and extended lactation curves",
      "Significant decrease in calf mortality and scouring episodes",
      "Premium milk pricing through enhanced hygiene and zero residue",
    ],
    targetSectors: [
      "Commercial Automated Dairy Farms",
      "Corporate Dairy Milk Integrators",
      "Holstein & Jersey Breeding Farms",
      "Milk Collection Centres",
      "Dairy Farming Cooperatives",
    ],
    faqs: [
      {
        q: "What is dry-cow therapy and why is it essential?",
        a: "Dry-cow therapy involves infusing a long-acting intramammary antibiotic into each teat at the end of lactation. It eliminates existing subclinical infections and prevents new infections during the dry period.",
      },
      {
        q: "How quickly does VetVac Calcium Gel work for milk fever?",
        a: "Our oral calcium gel begins absorbing within 15–30 minutes, delivering rapid ionized calcium into the bloodstream to support muscle tone and prevent recumbency.",
      },
      {
        q: "How can we reduce high Somatic Cell Counts (SCC) on our farm?",
        a: "We recommend a combination of pre-milking disinfection, post-milking barrier dips, routine CMT testing, and proper milking machine vacuum maintenance.",
      },
      {
        q: "What is the recommended protocol for newborn dairy calves?",
        a: "Newborn calves must receive high-quality colostrum within the first 2 hours of life, followed by VetVac neonatal electrolytes and intranasal respiratory vaccines.",
      },
    ],
  },
  {
    id: "veterinary-professionals",
    slug: "veterinary-professionals",
    title: "Veterinary Professionals Clinical Support",
    shortTitle: "Veterinary Professionals",
    tagline: "Supporting Veterinary Expertise",
    badge: "Clinical Pharmacology & Diagnostics",
    heroImage: "/vetvac_rd_lab_ai.jpg",
    icon: Stethoscope,
    desc: "Supplying practicing veterinarians, veterinary colleges, and animal hospitals with hospital-grade therapeutics, clinical diagnostics, dosing charts, and direct scientific consultation.",
    stats: [
      { label: "Partner Veterinarians", value: "2,400+" },
      { label: "Clinical Molecules", value: "60+" },
      { label: "Diagnostic Accuracy", value: "99.2%" },
      { label: "Technical Support Desks", value: "24/7" },
    ],
    overview: {
      subtitle: "SCIENTIFIC CLINICAL PARTNERSHIP",
      heading: "Empowering Animal Doctors with Precision Medicines & Diagnostics",
      paragraph1:
        "Veterinary surgeons, clinicians, and field doctors require dependable, high-purity pharmaceutical compounds, rapid diagnostic test kits, and accurate pharmacokinetics. VET VAC PHARMA stands as a trusted clinical ally, offering pharmaceutical formulations manufactured under strict cGMP standards with verified bioequivalence.",
      paragraph2:
        "In addition to hospital-grade injectables, surgical anesthetics, and targeted antimicrobial agents, we provide continuous professional development webinars, clinical diagnostic handbooks, and direct access to our pharmaceutical research scientists for complex case consultations.",
    },
    pillars: [
      {
        icon: FlaskConical,
        title: "Hospital-Grade Formulations",
        desc: "High-purity sterile injectables, anesthetics, analgesics, and antibiotics with precise therapeutic indices.",
      },
      {
        icon: Microscope,
        title: "Point-of-Care Diagnostics",
        desc: "Rapid lateral flow antigen/antibody test cassettes delivering accurate field results within 10 minutes.",
      },
      {
        icon: Award,
        title: "Continuing Medical Education",
        desc: "Workshops, scientific monographs, and dosage manuals curated by leading veterinary pharmacologists.",
      },
      {
        icon: Zap,
        title: "24/7 Clinical Advisory Desk",
        desc: "Direct telephone and digital support connecting field clinicians with our board-certified veterinary consultants.",
      },
    ],
    products: [
      {
        title: "Injectable Anesthetics & Analgesics",
        desc: "Xylazine, ketamine, and meloxicam solutions ensuring smooth surgical induction and pain management.",
        badge: "Surgical",
      },
      {
        title: "Targeted Broad-Spectrum Antibiotics",
        desc: "Ceftiofur, enrofloxacin, and amoxicillin-clavulanate sterile vials for severe systemic infections.",
        badge: "Antibiotics",
      },
      {
        title: "Rapid Diagnostic Test Cassettes",
        desc: "Canine Parvovirus, Feline Panleukopenia, Bovine Brucellosis, and Avian Influenza antigen test kits.",
        badge: "Diagnostics",
      },
      {
        title: "Emergency Shock & Resuscitation Fluids",
        desc: "Balanced electrolyte infusions, dexamethasone, and atropine for critical clinical resuscitations.",
        badge: "Emergency",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Hospital Requirement Audit",
        desc: "Assessing hospital surgical, diagnostic, and pharmacy volume to establish tailored supply lines.",
      },
      {
        step: "02",
        title: "Direct Cold-Chain Delivery",
        desc: "Direct pharmaceutical supply with batch-certified potency and verified temperature logs.",
      },
      {
        step: "03",
        title: "Diagnostic & Dosage Handbooks",
        desc: "Providing attending clinicians with reference guides, pharmacokinetic tables, and drug-interaction charts.",
      },
      {
        step: "04",
        title: "Pharmacovigilance & Case Feedback",
        desc: "Continuous post-market monitoring and dedicated scientific support for challenging clinical cases.",
      },
    ],
    benefits: [
      "Guaranteed batch-to-batch chemical purity and biological efficacy",
      "Fast, accurate point-of-care diagnostics for rapid clinical decision making",
      "Direct technical consultation with pharmaceutical research scientists",
      "Compliant with international pharmacovigilance and cGMP standards",
      "Access to specialized veterinary dosage literature and seminars",
    ],
    targetSectors: [
      "Private Veterinary Hospitals & Clinics",
      "Veterinary University Teaching Hospitals",
      "Government Animal Husbandry Dispensaries",
      "Equine & Specialized Animal Care Centres",
      "Zoos & Wildlife Conservation Reserves",
    ],
    faqs: [
      {
        q: "How can veterinary practitioners place direct orders with VetVac?",
        a: "Licensed veterinarians and clinics can order directly through our verified digital ordering portal or through authorized regional clinical distributors.",
      },
      {
        q: "Are VetVac pharmaceutical compounds manufactured under cGMP?",
        a: "Yes. All VetVac medicines and biologics are manufactured in certified cGMP facilities with full automated sterile filling lines and comprehensive batch testing.",
      },
      {
        q: "What rapid diagnostic kits are currently available for clinical practice?",
        a: "We offer rapid lateral-flow test cassettes for Brucella, FMD antibody, Canine Parvo/Corona, Feline Leukemia/FIV, and Avian ND/IB with results in 10 minutes.",
      },
      {
        q: "Does VetVac provide pharmacokinetic and compatibility charts?",
        a: "Yes. We supply comprehensive prescribing monographs, intravenous fluid compatibility charts, and species-specific dosing guidelines.",
      },
    ],
  },
  {
    id: "commercial-farming",
    slug: "commercial-farming",
    title: "Commercial Farming Biosecurity & Performance",
    shortTitle: "Commercial Farming",
    tagline: "Solutions for Modern Animal Production",
    badge: "Industrial Biosecurity & Scale Operations",
    heroImage: "/vetvac_vaccines_ai.jpg",
    icon: Factory,
    desc: "Industrial-scale preventive healthcare architectures, high-density biosecurity perimeters, automated mass immunization, and integrated farm yield analytics.",
    stats: [
      { label: "Industrial Complexes", value: "450+" },
      { label: "Biosecurity Efficacy", value: "99.8%" },
      { label: "Annual Animals Protected", value: "50M+" },
      { label: "Yield ROI Improvement", value: "+18%" },
    ],
    overview: {
      subtitle: "ENTERPRISE BIOSECURITY & AUTOMATION",
      heading: "Engineering High-Density Animal Production with Zero Outbreak Risk",
      paragraph1:
        "As commercial agriculture transitions to high-density, automated production systems, biosecurity risks multiply exponentially. A single pathogen breach can jeopardize millions of dollars in livestock assets. VET VAC PHARMA delivers enterprise-level biosecurity systems, automated mass-medication setups, and predictive pathogen monitoring designed for modern agro-industrial complexes.",
      paragraph2:
        "Our industrial veterinary engineers integrate automated aerosol vaccination, water sanitation grids, vehicle disinfection arches, and real-time disease surveillance software, safeguarding animal welfare, ensuring regulatory compliance, and driving maximum return on investment.",
    },
    pillars: [
      {
        icon: ShieldCheck,
        title: "Perimeter Biosecurity Arches",
        desc: "Automated high-pressure vehicle spray tunnels, footbath sanitizers, and air filtration disinfection.",
      },
      {
        icon: Zap,
        title: "Automated Mass Medication",
        desc: "Proportional dosing pumps and automated aerosol spray vaccination compatible with climate computers.",
      },
      {
        icon: Activity,
        title: "Pathogen Early-Warning Surveillance",
        desc: "Environmental PCR swabs and automated air sampling detecting viral shed before clinical outbreaks.",
      },
      {
        icon: Layers,
        title: "Enterprise Yield Analytics",
        desc: "Digital dashboards correlating animal healthcare inputs with daily mortality, FCR, and slaughter weight.",
      },
    ],
    products: [
      {
        title: "Industrial Virucidal Disinfectants",
        desc: "Glutaraldehyde and quaternary ammonium complexes effective against African Swine Fever, Avian Influenza, and FMD.",
        badge: "Biosecurity",
      },
      {
        title: "Mass Aerosol Vaccines",
        desc: "Ultra-pure lyophilized vaccine strains designed specifically for automated high-volume sprayers.",
        badge: "Biologics",
      },
      {
        title: "Water-Line Acidifiers & Sanitizers",
        desc: "Organic acid blends that remove biofilm and maintain ideal gut pH throughout intensive grow-out cycles.",
        badge: "Water Tech",
      },
      {
        title: "Continuous Air Decontamination Units",
        desc: "Vaporized dry-mist disinfection systems safe for operation in populated animal sheds.",
        badge: "Equipment",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Industrial Facility Vulnerability Audit",
        desc: "Comprehensive engineering inspection of farm perimeters, water sources, ventilation, and feed pathways.",
      },
      {
        step: "02",
        title: "Biosecurity & Automation Blueprint",
        desc: "Designing automated disinfection gates, water sanitization setups, and mass vaccination protocols.",
      },
      {
        step: "03",
        title: "Turnkey Installation & Commissioning",
        desc: "Installation of dosing equipment, automated sprayers, and staff training on biosecurity standard operating procedures.",
      },
      {
        step: "04",
        title: "Automated Pathogen Monitoring & ROI Review",
        desc: "Continuous swab testing, antibody titer tracking, and financial benchmarking of input costs versus yield.",
      },
    ],
    benefits: [
      "Total containment and exclusion of devastating high-consequence epidemics",
      "Substantial savings in farm labor through automated dosing and vaccination",
      "Optimization of Feed Conversion Ratios across multi-million animal batches",
      "Verified compliance with global food safety and meat export certifications",
      "Clear, traceable return on investment through reduced mortality and condemnation",
    ],
    targetSectors: [
      "Large-Scale Integrated Poultry Complexes",
      "Industrial Swine & Porcine Production Units",
      "Mega Dairy & Feedlot Operations",
      "Commercial Grain & Livestock Aggregators",
      "Export-Oriented Meat Processing Corporations",
    ],
    faqs: [
      {
        q: "How effective are VetVac industrial disinfectants against airborne viruses?",
        a: "Our glutaraldehyde/QAC formulations achieve a 99.999% (5-log) reduction of Avian Influenza, Newcastle Disease, and Foot-and-Mouth viruses within 10 minutes of contact time.",
      },
      {
        q: "Can VetVac automated vaccination systems integrate with existing farm computers?",
        a: "Yes. Our automated spray cabinets and proportional water medicators easily connect to Fancom, Rotem, and standard environmental controllers.",
      },
      {
        q: "How does water acidification benefit commercial broilers and livestock?",
        a: "Acidifying drinking water to pH 5.5–6.0 inhibits Salmonella and E. coli multiplication in the crop and stomach, improving nutrient absorption and reducing wet litter.",
      },
      {
        q: "What training is provided for farm operations staff?",
        a: "Our technical specialists provide on-site biosecurity training, personal protective equipment protocols, and certified SOP manuals for all farm personnel.",
      },
    ],
  },
];

export function getVetvacServiceBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();

  // Handle direct id match
  const direct = VETVAC_SERVICES.find((s) => s.id === normalized || s.slug === normalized);
  if (direct) return direct;

  // Handle aliases
  if (normalized === "dairy" || normalized === "dairy-farming") {
    return VETVAC_SERVICES.find((s) => s.id === "dairy-farming");
  }
  if (normalized === "vets" || normalized === "veterinary" || normalized === "veterinary-professionals") {
    return VETVAC_SERVICES.find((s) => s.id === "veterinary-professionals");
  }
  if (normalized === "commercial" || normalized === "commercial-farming") {
    return VETVAC_SERVICES.find((s) => s.id === "commercial-farming");
  }

  return null;
}
