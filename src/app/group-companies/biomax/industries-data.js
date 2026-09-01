import {
  HeartPulse,
  Microscope,
  GraduationCap,
  Pill,
  Dna,
  FlaskConical,
  Building2,
  Award,
  Target,
  ShieldCheck,
  Zap,
  Activity,
  Sparkles,
  Layers,
  CheckCircle2,
  Users,
} from "lucide-react";

export const BIOMAX_INDUSTRIES = [
  {
    id: "healthcare-diagnostics",
    slug: "healthcare-diagnostics",
    title: "Healthcare & Diagnostics",
    shortTitle: "Healthcare Labs",
    tagline: "Clinical Pathology, Hospital Diagnostics & Point-of-Care Systems",
    badge: "Clinical Healthcare Sector",
    heroImage: "/biomax_ind_healthcare_ai.jpg",
    icon: HeartPulse,
    desc: "Equipping hospital clinical laboratories, emergency diagnostics units, and independent pathology centers with automated biochemistry, hematology, and immunoassay instrumentation for rapid patient diagnosis.",
    stats: [
      { label: "Partner Hospitals", value: "180+" },
      { label: "Daily Tests Run", value: "50,000+" },
      { label: "Diagnostic Accuracy", value: "99.8%" },
      { label: "LIS Integration", value: "100%" },
    ],
    overview: {
      subtitle: "CRITICAL CLINICAL CARE & DIAGNOSTIC PATHOLOGY",
      heading: "Enabling Accurate, Rapid Patient Diagnosis When Every Second Counts",
      paragraph1:
        "Clinical laboratories in hospitals and diagnostic centers are under intense pressure to deliver rapid, error-free diagnostic results. BioMax Corporation equips healthcare institutions with automated random-access biochemistry analyzers, 5-part hematology systems, and blood gas analyzers that streamline routine and emergency STAT testing.",
      paragraph2:
        "Every diagnostic solution is backed by complete CE-IVD certified reagents, automated calibration protocols, and seamless integration with hospital Laboratory Information Systems (LIS) to eliminate manual entry errors and accelerate clinical decisions.",
    },
    keyApplications: [
      {
        title: "Emergency STAT Blood Testing",
        desc: "Rapid turnaround testing for cardiac biomarkers, electrolytes, and arterial blood gases in critical care settings.",
      },
      {
        title: "Routine Biochemical & Metabolic Panels",
        desc: "Comprehensive liver function, renal profile, lipid profiling, and diabetic glycemic monitoring.",
      },
      {
        title: "Complete Hematological Profiling",
        desc: "Automated 5-part differential blood counts detecting anemias, infections, and hematologic malignancies.",
      },
      {
        title: "Immunodiagnostic Disease Screening",
        desc: "Ultra-sensitive chemiluminescence assays for thyroid hormones, infectious viruses, and oncology markers.",
      },
    ],
    technologiesProvided: [
      "Automated Clinical Chemistry Analyzers (400-800 T/H)",
      "5-Part Differential Laser Flow Hematology Analyzers",
      "Point-of-Care Electrolyte & Blood Gas Systems",
      "Semi-Automated & Fully Automated Coagulation Analyzers",
      "Sterile Diagnostic Consumables & Barcoded Reagent Kits",
    ],
    workflow: [
      {
        step: "01",
        title: "Laboratory Workflow Audit",
        desc: "Assessing daily sample throughput, test menu requirements, and LIS network architecture.",
      },
      {
        step: "02",
        title: "Instrument Installation & Commissioning",
        desc: "Setting up analyzers with uninterruptible power, water purification, and waste neutralization.",
      },
      {
        step: "03",
        title: "LIS Synchronization & Validation",
        desc: "Establishing bi-directional HL7 data exchange and running multi-level control verification.",
      },
      {
        step: "04",
        title: "24/7 Clinical Reagent Supply & Support",
        desc: "Ensuring steady reagent cold-chain supply, scheduled calibration, and prompt biomedical engineer support.",
      },
    ],
    benefits: [
      "Immediate reduction in diagnostic turnaround time for critical emergency patients",
      "Substantially lower cost per test with micro-volume reagent consumption",
      "Elimination of transcription errors through automated LIS bi-directional integration",
      "Full compliance with CAP, ISO 15189, and JCI laboratory accreditation standards",
      "Uninterrupted 24/7 operation with automated maintenance and standby modes",
    ],
    targetSectors: [
      "Tertiary & Secondary Care Hospitals",
      "Private Pathology & Diagnostic Chains",
      "Emergency & Trauma Centers",
      "Blood Transfusion Centers",
      "Outpatient Polyclinics & Specialized Diagnostic Units",
    ],
    faqs: [
      {
        q: "How quickly can BioMax diagnostic systems process emergency STAT samples?",
        a: "Our analyzers feature dedicated STAT priority racks that yield electrolyte and blood gas results in under 60 seconds and complete metabolic panels in under 8 minutes.",
      },
      {
        q: "Are the diagnostic reagents compatible with existing third-party analyzers?",
        a: "We offer both dedicated barcoded reagents for BioMax instruments and universal validated liquid-stable reagents adaptable to most open-channel clinical chemistry analyzers.",
      },
      {
        q: "What certifications accompany BioMax clinical healthcare equipment?",
        a: "All healthcare diagnostic systems are manufactured under ISO 13485 (Medical Devices) and hold CE-IVD (In-Vitro Diagnostic Directive) certifications.",
      },
    ],
  },
  {
    id: "research-institutions",
    slug: "research-institutions",
    title: "Research Institutions",
    shortTitle: "Research Institutes",
    tagline: "Advanced Scientific Hardware for Scientific R&D & Discovery",
    badge: "Scientific Discovery",
    heroImage: "/biomax_ind_research_ai.jpg",
    icon: Microscope,
    desc: "Empowering national scientific research organizations, governmental laboratories, and independent R&D institutes with high-precision analytical instruments, thermal cyclers, and molecular biology workstations.",
    stats: [
      { label: "Research Centers", value: "95+" },
      { label: "Scientific Publications", value: "1,500+" },
      { label: "Measurement Accuracy", value: "Sub-PPM" },
      { label: "Warranty Coverage", value: "Up to 3 Years" },
    ],
    overview: {
      subtitle: "ADVANCED SCIENTIFIC RESEARCH & INNOVATION",
      heading: "Providing High-Precision Instrumentation for Groundbreaking Discoveries",
      paragraph1:
        "Scientific breakthroughs require tools that eliminate experimental ambiguity. BioMax Corporation supplies national academies of science, environmental research institutes, and materials laboratories with world-class spectrophotometers, high-speed centrifuges, and chromatography systems.",
      paragraph2:
        "Our scientific equipment is designed for high repeatability, robust data integrity compliant with GLP standards, and versatility across diverse scientific disciplines including chemistry, genetics, physics, and environmental analytics.",
    },
    keyApplications: [
      {
        title: "Genomic & Molecular Research",
        desc: "High-resolution real-time PCR, DNA extraction, and electrophoresis for genetic sequencing preparation.",
      },
      {
        title: "Materials & Chemical Characterization",
        desc: "UV-Vis spectral scanning, chromatography separations, and micro-weighing for synthetic compounds.",
      },
      {
        title: "Environmental & Water Analytics",
        desc: "Trace contaminant detection, heavy metal analysis, and multi-parameter electrochemical monitoring.",
      },
      {
        title: "Cellular & Tissue Biology",
        desc: "Advanced fluorescent inverted microscopy, CO₂ incubation, and sterile cell culture workflows.",
      },
    ],
    technologiesProvided: [
      "Double-Beam UV-Vis Spectrophotometers",
      "High-Performance Liquid Chromatography (HPLC) Modules",
      "Real-Time Quantitative PCR (qPCR) Thermal Cyclers",
      "High-Speed Refrigerated Centrifuges (up to 30,000 x g)",
      "High-Precision Analytical Microbalances (0.1mg Readability)",
    ],
    workflow: [
      {
        step: "01",
        title: "Research Scope Evaluation",
        desc: "Consulting with principal investigators to align instrument sensitivity with specific research grants.",
      },
      {
        step: "02",
        title: "Customized Hardware Configuration",
        desc: "Selecting custom optics, specialized rotors, and analytical software tailored to experimental protocols.",
      },
      {
        step: "03",
        title: "Certified Installation & IQ/OQ",
        desc: "Performing rigorous baseline noise tests, thermal gradient verification, and operator software training.",
      },
      {
        step: "04",
        title: "Long-Term Collaborative Support",
        desc: "Providing annual maintenance contracts, software upgrades, and application specialist guidance.",
      },
    ],
    benefits: [
      "Publishable, peer-reviewed reproducibility with traceable NIST calibration",
      "Open-software architecture enabling seamless data export to R, MATLAB, and Excel",
      "Robust hardware built for multi-user shared scientific facility environments",
      "Comprehensive application support from experienced laboratory scientists",
    ],
    targetSectors: [
      "National Science & Technology Councils",
      "Environmental Protection & Water Research Bodies",
      "Agricultural & Botanical Research Institutes",
      "Materials Science & Nanotechnology Centers",
      "Defense & Strategic R&D Establishments",
    ],
    faqs: [
      {
        q: "Can BioMax instruments handle high-volume multi-user shared university cores?",
        a: "Yes. Our instruments feature multi-user profile logins, automated audit trails, and heavy-duty components engineered for continuous multi-operator bench use.",
      },
      {
        q: "Do you offer grant consultation and technical specification drafting?",
        a: "Yes. Our technical team assists academic and research teams with detailed equipment specification sheets and budgetary proposals for research grant submissions.",
      },
    ],
  },
  {
    id: "universities-education",
    slug: "universities-education",
    title: "Universities & Educational Institutions",
    shortTitle: "Universities & Academia",
    tagline: "Durable, Safe & Intuitive Equipment for Teaching & Student Labs",
    badge: "Higher Education & Academia",
    heroImage: "/biomax_ind_university_ai.jpg",
    icon: GraduationCap,
    desc: "Supplying universities, medical colleges, and technical institutes with durable, student-friendly laboratory instruments, teaching microscopes, glassware, and consumables built for hands-on learning.",
    stats: [
      { label: "Universities Equipped", value: "70+" },
      { label: "Student Workstations", value: "4,500+" },
      { label: "Safety Rating", value: "100% Compliant" },
      { label: "Bulk Packages", value: "Turnkey Labs" },
    ],
    overview: {
      subtitle: "STEM EDUCATION & PRACTICAL TRAINING",
      heading: "Fostering the Next Generation of Scientists with Reliable Teaching Hardware",
      paragraph1:
        "Academic institutions require laboratory equipment that balances scientific accuracy with exceptional physical durability and user safety. BioMax Corporation provides comprehensive laboratory outfitting for biology, chemistry, pharmacology, and biomedical engineering faculties.",
      paragraph2:
        "From student binocular microscopes with anti-fungal coated lenses to shatter-resistant borosilicate glassware and intuitive benchtop centrifuges, our educational packages ensure safe, engaging hands-on experiments for thousands of students each semester.",
    },
    keyApplications: [
      {
        title: "Undergraduate Biology & Histology",
        desc: "Optical microscopy, slide preparation, and basic histological staining for life sciences students.",
      },
      {
        title: "General & Organic Chemistry Labs",
        desc: "Titration stations, heating mantles, magnetic stirrers, and Class A volumetric glassware sets.",
      },
      {
        title: "Biochemistry & Genetics Practicals",
        desc: "Gel electrophoresis, microcentrifugation, spectrophotometric enzyme assays, and DNA extraction.",
      },
      {
        title: "Medical & Nursing Laboratory Skills",
        desc: "Basic hematology smear preparation, urinalysis testing, and clinical diagnostic simulator tools.",
      },
    ],
    technologiesProvided: [
      "LED Educational Binocular & Monocular Microscopes",
      "Compact Digital Centrifuges with Safety Interlocks",
      "Digital Heating Plates & Magnetic Stirrers",
      "Complete Borosilicate 3.3 Glassware Starter Sets",
      "Classroom Micropipette Sets with Low Ejection Force",
    ],
    workflow: [
      {
        step: "01",
        title: "Curriculum & Lab Space Planning",
        desc: "Designing workstation layouts and equipment quantities based on class sizes and curriculum syllabus.",
      },
      {
        step: "02",
        title: "Bulk Supply & Turnkey Packaging",
        desc: "Consolidating equipment, safety gear, and consumables into organized department bundles.",
      },
      {
        step: "03",
        title: "Laboratory Setup & Faculty Orientation",
        desc: "Assembling benches, testing electrical safety, and conducting faculty train-the-trainer workshops.",
      },
      {
        step: "04",
        title: "Semester-End Maintenance Support",
        desc: "Providing scheduled annual optical cleaning, calibration tune-ups, and replenishment consumables.",
      },
    ],
    benefits: [
      "Long-lasting hardware durability engineered to withstand heavy student usage",
      "Built-in electronic safety lid locks, overheat protection, and shatterproof casing",
      "Affordable bulk institutional pricing maximizing educational departmental budgets",
      "Simplified controls allowing students to focus on scientific concepts rather than complex interfaces",
    ],
    targetSectors: [
      "Public & Private Universities",
      "Medical Colleges & Healthcare Institutes",
      "Polytechnic & Vocational Institutes",
      "Pre-Medical & STEM Higher Secondary Colleges",
      "Post-Graduate Research Departments",
    ],
    faqs: [
      {
        q: "Are the educational microscopes protected against mold and humid environments?",
        a: "Yes. All BioMax educational microscopes feature anti-fungal treated optical glass elements and sealed prism heads designed for tropical and humid climates.",
      },
      {
        q: "Can BioMax supply custom lab starter bundles for new university campuses?",
        a: "Yes. We offer complete turnkey laboratory bundles including furniture, instruments, glassware kits, safety eyewash stations, and consumable packs customized per student batch.",
      },
    ],
  },
  {
    id: "pharmaceutical-industry",
    slug: "pharmaceutical-industry",
    title: "Pharmaceutical Industry",
    shortTitle: "Pharma QA/QC",
    tagline: "GMP/GLP Compliant Analytical Hardware for Drug Quality & Stability",
    badge: "Pharmaceutical QA/QC",
    heroImage: "/biomax_scientific_instruments_ai.jpg",
    icon: Pill,
    desc: "Supporting pharmaceutical manufacturing facilities, formulation R&D, and quality control laboratories with 21 CFR Part 11 compliant HPLC systems, dissolution testers, spectrophotometers, and stability testing equipment.",
    stats: [
      { label: "GMP Facilities Equipped", value: "45+" },
      { label: "Data Integrity", value: "21 CFR Part 11" },
      { label: "Audit Pass Rate", value: "100%" },
      { label: "Validation Documents", value: "Full IQ/OQ/PQ" },
    ],
    overview: {
      subtitle: "PHARMACEUTICAL QUALITY ASSURANCE & FORMULATION",
      heading: "Ensuring Regulatory Compliance, Drug Purity & Batch Integrity",
      paragraph1:
        "In pharmaceutical manufacturing, regulatory compliance and data integrity are paramount. BioMax Corporation provides comprehensive analytical solutions for active pharmaceutical ingredient (API) synthesis, finished dosage quality control, and accelerated stability testing.",
      paragraph2:
        "Our HPLC systems, UV-Vis spectrophotometers, analytical microbalances, and dissolution workstations are backed by rigorous 21 CFR Part 11 compliance software, tamper-proof audit trails, and turnkey IQ/OQ/PQ validation protocols accepted by global regulatory authorities.",
    },
    keyApplications: [
      {
        title: "Active Ingredient (API) Assay Testing",
        desc: "Quantitative HPLC assay determination of drug potency, impurities, and degradation products.",
      },
      {
        title: "Finished Dosage Dissolution Profiling",
        desc: "Multi-vessel USP dissolution testing evaluating tablet and capsule release kinetics.",
      },
      {
        title: "Raw Material Identification & Testing",
        desc: "UV-Vis spectral confirmation and analytical moisture determination on incoming excipients.",
      },
      {
        title: "Environmental & Cleanroom Microbiology",
        desc: "Airborne microbial samplers, sterile filtration manifolds, and microbiological incubators.",
      },
    ],
    technologiesProvided: [
      "Quaternary Gradient HPLC Systems with Autosamplers",
      "Double-Beam UV-Vis Spectrophotometers with 21 CFR Software",
      "Electronic Analytical Balances with Internal Calibration",
      "Pharmaceutical Glassware & Purity-Certified Filter Tips",
      "Digital Karl Fischer Moisture Titrators",
    ],
    workflow: [
      {
        step: "01",
        title: "Pharmacopeial Method Review",
        desc: "Matching hardware specifications with USP, BP, and EP monograph testing requirements.",
      },
      {
        step: "02",
        title: "Turnkey IQ/OQ/PQ Execution",
        desc: "Comprehensive documentation of installation, operational, and performance qualification with certified standards.",
      },
      {
        step: "03",
        title: "User Privilege & Audit Trail Setup",
        desc: "Configuring multi-tier role permissions, encrypted database storage, and electronic signatures.",
      },
      {
        step: "04",
        title: "Annual Calibration & Recertification",
        desc: "Executing scheduled NIST-traceable calibration routines to maintain audit readiness year-round.",
      },
    ],
    benefits: [
      "Zero audit observations regarding data integrity or unauthorized record modifications",
      "Sub-percentage relative standard deviation (RSD) in routine batch potency testing",
      "Comprehensive qualification documentation ready for immediate regulatory inspection",
      "Minimized instrument downtime through proactive quarterly preventive maintenance visits",
    ],
    targetSectors: [
      "Finished Formulation Pharmaceutical Plants",
      "Active Pharmaceutical Ingredient (API) Manufacturers",
      "Contract Research & Manufacturing Organizations (CRO/CDMO)",
      "Nutraceutical & Herbal Medicine Producers",
      "Vaccine & Biologics Manufacturing Facilities",
    ],
    faqs: [
      {
        q: "Are complete IQ/OQ validation protocols included with BioMax pharmaceutical instruments?",
        a: "Yes. Every instrument comes with standardized bound IQ/OQ/PQ protocol templates executed and signed on-site by our factory-certified validation engineers.",
      },
      {
        q: "How does the software handle user logins and electronic signatures?",
        a: "Our chromatography and spectroscopy software integrates Windows Active Directory authentication, enforced password expiration, reason-for-change prompts, and dual-signature verification.",
      },
    ],
  },
  {
    id: "biotechnology",
    slug: "biotechnology",
    title: "Biotechnology",
    shortTitle: "Biotech Sector",
    tagline: "Genomics, Recombinant DNA, Cell Culture & Bioprocessing Systems",
    badge: "Biotech & Genomics",
    heroImage: "/biomax_biotech_solutions_ai.jpg",
    icon: Dna,
    desc: "Supplying biotechnology enterprises, genetic engineering laboratories, and biomanufacturing facilities with real-time qPCR systems, automated nucleic acid extractors, laminar airflow workstations, and bioreactor culture tools.",
    stats: [
      { label: "Biotech Labs Equipped", value: "60+" },
      { label: "PCR Dynamic Range", value: "1-10¹⁰ Copies" },
      { label: "Biosafety Grade", value: "Class II Type A2/B2" },
      { label: "Extraction Speed", value: "<30 Mins / 96 Samples" },
    ],
    overview: {
      subtitle: "ADVANCED BIOTECHNOLOGY & GENOMICS",
      heading: "Fueling Innovation in Genetic Engineering, Proteomics & Bioprocessing",
      paragraph1:
        "Modern biotechnology requires an exceptional fusion of sterility, thermal stability, and optical detection sensitivity. BioMax Corporation provides cutting-edge tools for molecular biology workflows, from high-throughput automated nucleic acid isolation to multiplex real-time PCR quantification.",
      paragraph2:
        "Our biosafety cabinets, CO₂ cell culture incubators, and low-retention aerosol barrier consumables ensure that sensitive recombinant cell lines and viral vectors are cultivated and analyzed under flawless, contamination-free conditions.",
    },
    keyApplications: [
      {
        title: "Quantitative Gene Expression & Viral Load",
        desc: "6-channel multiplex real-time PCR for pathogen detection, gene knockouts, and transcriptomics.",
      },
      {
        title: "High-Throughput Genomic DNA/RNA Isolation",
        desc: "Automated magnetic bead isolation extracting pure nucleic acids from 96 samples simultaneously.",
      },
      {
        title: "Sterile Mammalian & Stem Cell Culture",
        desc: "Class II biosafety containment with laminar airflow and precise CO₂/O₂ gas regulation.",
      },
      {
        title: "Protein Purification & Recombinant Analysis",
        desc: "Spectrophotometric protein quantification, refrigerated centrifugation, and gel documentation.",
      },
    ],
    technologiesProvided: [
      "96-Well 6-Channel Real-Time qPCR Systems",
      "Automated Magnetic Bead Nucleic Acid Extraction Systems",
      "EN 12469 Certified Class II Type A2 Biosafety Cabinets",
      "Direct-Heat Infrared CO₂ Incubators with UV Sterilization",
      "Certified DNase/RNase-Free Low-Retention Consumables",
    ],
    workflow: [
      {
        step: "01",
        title: "Molecular Suite Zoning & Planning",
        desc: "Structuring unidirectional workflow corridors (Reagent Prep → Extraction → Amplification) to prevent amplicon contamination.",
      },
      {
        step: "02",
        title: "Instrumentation Commissioning & Optical Alignment",
        desc: "Calibrating multi-channel fluorescence matrix filters and validating cleanroom particle counts.",
      },
      {
        step: "03",
        title: "Assay Optimization & Training",
        desc: "Assisting laboratory molecular biologists with primer-probe multiplexing and baseline threshold optimization.",
      },
      {
        step: "04",
        title: "Continuous Quality Supply Chain",
        desc: "Delivering batch-tested sterile filter tips, PCR microplates, and extraction magnetic beads.",
      },
    ],
    benefits: [
      "Uncompromised molecular sensitivity capable of single-copy gene target detection",
      "Total containment of biological biohazards protecting both personnel and samples",
      "Massive reduction in manual bench pipetting time through automated magnetic extraction",
      "Universal open-chemistry compatibility with leading global master mix brands",
    ],
    targetSectors: [
      "Biopharmaceutical Drug Discovery Hubs",
      "Agricultural Genetics & Seed Breeding Enterprises",
      "Cell & Gene Therapy Development Laboratories",
      "Veterinary Virology & Pathogen Surveillance Units",
      "Industrial Biocatalysis & Fermentation Facilities",
    ],
    faqs: [
      {
        q: "What multiplex dye combinations are supported on BioMax real-time PCR cyclers?",
        a: "Our optical systems support 6 detection channels capable of simultaneous excitation and emission detection for FAM, VIC/HEX, NED/TAMRA, ROX/Texas Red, Cy5, and Quasar 705.",
      },
      {
        q: "Are BioMax biosafety cabinets suitable for handling viral vectors?",
        a: "Yes. Our Class II Type A2 and Type B2 cabinets feature dual HEPA H14 filtration providing 99.999% efficiency for 0.3µm particles, ensuring complete viral biohazard containment.",
      },
    ],
  },
  {
    id: "food-agriculture",
    slug: "food-agriculture",
    title: "Food & Agriculture",
    shortTitle: "Food & Agri Labs",
    tagline: "Nutrient Analysis, Food Safety, Pesticide Screening & Soil Testing",
    badge: "Agri-Food & Safety",
    heroImage: "/biomax_consumables_ai.jpg",
    icon: FlaskConical,
    desc: "Equipping food processing quality control labs, agricultural soil testing stations, and dairy laboratories with moisture analyzers, spectrophotometers, incubators, and testing consumables.",
    stats: [
      { label: "Agri-Food Labs", value: "50+" },
      { label: "Pesticide Detection", value: "Sub-PPB" },
      { label: "Moisture Accuracy", value: "0.01%" },
      { label: "Food Safety Standards", value: "HACCP & ISO 22000" },
    ],
    overview: {
      subtitle: "AGRICULTURAL PRODUCTIVITY & FOOD INTEGRITY",
      heading: "Ensuring Food Safety, Nutritional Quality & Agricultural Yields",
      paragraph1:
        "Global food supply chains demand stringent microbiological screening, pesticide residue testing, and proximate nutritional analysis. BioMax Corporation provides comprehensive testing instrumentation for grain elevators, dairy processors, food manufacturers, and soil testing laboratories.",
      paragraph2:
        "From rapid halogen moisture balances and Kjeldahl nitrogen determination apparatus to microbiological incubators for pathogen screening (E. coli, Salmonella, Listeria), our solutions safeguard consumer health and optimize agricultural outputs.",
    },
    keyApplications: [
      {
        title: "Food Pathogen & Microbial Safety",
        desc: "Incubation, membrane filtration, and PCR screening for foodborne pathogens and spoilage organisms.",
      },
      {
        title: "Proximate Nutritional & Moisture Analysis",
        desc: "Rapid halogen moisture determination, crude protein analysis, and lipid fat extractions.",
      },
      {
        title: "Pesticide & Heavy Metal Residue Screening",
        desc: "Chromatographic and spectrophotometric quantification of chemical residues in agricultural crops.",
      },
      {
        title: "Soil Fertility & Fertilizer Quality Testing",
        desc: "Electrochemical pH/EC measurement, available nitrogen, phosphorus, and potassium (NPK) profiling.",
      },
    ],
    technologiesProvided: [
      "Precision Halogen Moisture Analyzers (0.01% Readability)",
      "Microbiological & BOD Incubators for Shelf-Life Testing",
      "Multi-Parameter Soil pH & Conductivity Meters",
      "UV-Vis Spectrophotometers for Nitrate & Phosphate Assays",
      "Sterile Sampling Bags, Petri Dishes & Filtration Consumables",
    ],
    workflow: [
      {
        step: "01",
        title: "Testing Protocol Assessment",
        desc: "Aligning laboratory instrumentation with AOAC, ISO 17025, and local food safety standards.",
      },
      {
        step: "02",
        title: "Hardware Commissioning & Calibration",
        desc: "Installing moisture balances, heating blocks, and optical analyzers with certified test standards.",
      },
      {
        step: "03",
        title: "Operator Training on Rapid Methods",
        desc: "Instructing QA staff on sample homogenization, rapid moisture testing, and microbial plating.",
      },
      {
        step: "04",
        title: "Consumable Supply & Calibration",
        desc: "Supplying certified filter membranes, sterile swabs, and calibration weight sets.",
      },
    ],
    benefits: [
      "Rapid release of food batches with 5-minute halogen moisture determination",
      "Compliance with HACCP, ISO 22000, and FDA food safety regulations",
      "Protection against costly product recalls through sensitive microbial pathogen detection",
      "Optimized agricultural fertilizer applications through precise soil nutrient profiling",
    ],
    targetSectors: [
      "Commercial Dairy & Beverage Processing Plants",
      "Grain Mills, Silos & Edible Oil Refineries",
      "Agricultural Soil & Fertilizer Testing Laboratories",
      "Packaged Food Manufacturers & Exporters",
      "Government Food Safety & Standards Authorities",
    ],
    faqs: [
      {
        q: "How fast can the BioMax halogen moisture balance analyze food samples?",
        a: "Our halogen moisture analyzer provides stable, accurate moisture percentages in 3 to 7 minutes depending on sample fat and water content, with automatic shut-off criteria.",
      },
      {
        q: "Do you supply testing consumables for milk and dairy quality testing?",
        a: "Yes. We supply Gerber centrifuges, butyrometers, sterile sampling bottles, and rapid antibiotic residue testing kits for raw and pasteurized milk.",
      },
    ],
  },
  {
    id: "industrial-laboratories",
    slug: "industrial-laboratories",
    title: "Industrial Laboratories",
    shortTitle: "Industrial QA/QC",
    tagline: "Materials Testing, Chemical Analysis & Manufacturing QC",
    badge: "Industrial QC & Testing",
    heroImage: "/biomax_lab_equipment_ai.jpg",
    icon: Building2,
    desc: "Supporting petrochemical refineries, chemical synthesis plants, paint & polymer manufacturers, and heavy industrial facilities with heavy-duty testing equipment, viscometers, flashpoint testers, and microbalances.",
    stats: [
      { label: "Industrial Plants", value: "80+" },
      { label: "Continuous Duty", value: "24/7 Operations" },
      { label: "Chemical Resistance", value: "Extreme Grade" },
      { label: "Calibration Standard", value: "ISO/IEC 17025" },
    ],
    overview: {
      subtitle: "INDUSTRIAL QUALITY CONTROL & MATERIALS ANALYSIS",
      heading: "Robust Hardware Engineered for Heavy-Duty Factory & Field Environments",
      paragraph1:
        "Industrial quality control laboratories operate in harsh, continuous-duty environments where equipment must resist corrosive chemical vapors, thermal shocks, and non-stop operational cycles. BioMax Corporation delivers robust testing hardware for heavy manufacturing industries.",
      paragraph2:
        "Whether testing polymer melt indices, measuring petroleum viscosity, analyzing textile dyes, or weighing bulk raw materials, our industrial equipment combines physical ruggedness with sub-milligram analytical precision.",
    },
    keyApplications: [
      {
        title: "Petroleum & Chemical Quality Control",
        desc: "Density measurement, kinematic viscosity, flashpoint testing, and acid number determination.",
      },
      {
        title: "Polymer, Plastics & Coating Testing",
        desc: "Melt flow index, tensile sample preparation, colorimetric spectrophotometry, and thermal stability.",
      },
      {
        title: "Water Treatment & Effluent Monitoring",
        desc: "Heavy-metal detection, chemical oxygen demand (COD), and total dissolved solids (TDS) compliance.",
      },
      {
        title: "Metallurgical & Mining Mineral Assay",
        desc: "High-temperature muffle furnaces, analytical weighing, and sample digestion extraction stations.",
      },
    ],
    technologiesProvided: [
      "Heavy-Duty Analytical Microbalances with Anti-Static Housing",
      "Chemical-Resistant Heating Mantles & Hotplate Magnetic Stirrers",
      "Digital Rotational Viscometers & Rheology Tools",
      "High-Temperature Muffle Furnaces (up to 1200°C)",
      "Corrosion-Proof Polypropylene Glassware & Heavy-Duty Tubing",
    ],
    workflow: [
      {
        step: "01",
        title: "Industrial Environment Audit",
        desc: "Assessing chemical vapor exposure, vibration levels, and electrical power stability in the facility.",
      },
      {
        step: "02",
        title: "Ruggedized Equipment Specification",
        desc: "Selecting stainless steel housings, PTFE-coated components, and explosion-proof accessories.",
      },
      {
        step: "03",
        title: "On-Site Calibration & Certification",
        desc: "Executing ISO 17025 traceable multi-point calibration on site under actual operational conditions.",
      },
      {
        step: "04",
        title: "Heavy-Duty Spare Parts & Maintenance",
        desc: "Maintaining local stock of heating elements, replacement sensors, and scheduled maintenance service.",
      },
    ],
    benefits: [
      "Extreme durability withstanding aggressive chemical fumes and continuous 24/7 testing",
      "Immediate detection of off-spec production batches saving thousands in raw material costs",
      "Compliance with ASTM, ISO, and national environmental discharge standards",
      "Low maintenance costs backed by local engineering support and accessible genuine spare parts",
    ],
    targetSectors: [
      "Petrochemical Refineries & Lubricant Plants",
      "Polymer, Resin & Plastic Packaging Manufacturers",
      "Textile Processing & Dye Manufacturing Units",
      "Paints, Coatings & Adhesive Producers",
      "Mining Assaying & Metallurgy Laboratories",
    ],
    faqs: [
      {
        q: "Can BioMax hotplate stirrers handle corrosive acid vapors in industrial testing?",
        a: "Yes. Our industrial hotplates feature glass-ceramic tops and seamless sealed aluminum alloy housings coated with chemical-resistant epoxy to prevent acid vapor penetration.",
      },
      {
        q: "What viscosity ranges are supported by BioMax rotational viscometers?",
        a: "Our digital viscometers support viscosity ranges from 1 mPa.s up to 80,000,000 mPa.s with interchangeable spindles suitable for solvents, paints, pastes, and heavy greases.",
      },
    ],
  },
];

export function getBiomaxIndustryBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();

  // Direct match
  const direct = BIOMAX_INDUSTRIES.find((i) => i.id === normalized || i.slug === normalized);
  if (direct) return direct;

  // Aliases
  if (normalized.includes("health") || normalized.includes("diagnostic")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "healthcare-diagnostics");
  }
  if (normalized.includes("research")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "research-institutions");
  }
  if (normalized.includes("univ") || normalized.includes("educat") || normalized.includes("academia")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "universities-education");
  }
  if (normalized.includes("pharma")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "pharmaceutical-industry");
  }
  if (normalized.includes("biotech")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "biotechnology");
  }
  if (normalized.includes("food") || normalized.includes("agri")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "food-agriculture");
  }
  if (normalized.includes("industr")) {
    return BIOMAX_INDUSTRIES.find((i) => i.id === "industrial-laboratories");
  }

  return null;
}
