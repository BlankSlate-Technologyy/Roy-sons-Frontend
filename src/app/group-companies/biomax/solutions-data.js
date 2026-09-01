import {
  Microscope,
  HeartPulse,
  Dna,
  FlaskConical,
  Target,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  Package,
  Boxes,
  Gauge,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export const BIOMAX_SOLUTIONS = [
  {
    id: "lab-equipment",
    slug: "lab-equipment",
    title: "Laboratory Equipment",
    shortTitle: "Lab Equipment",
    eyebrow: "CATEGORY 01",
    tagline: "Advanced Equipment for Research, Testing & Diagnostics",
    badge: "Core Laboratory Systems",
    heroImage: "/biomax_lab_equipment_ai.jpg",
    icon: Microscope,
    desc: "Robust, high-precision laboratory equipment engineered for academic universities, clinical pathology centers, and commercial R&D testing facilities. Designed for continuous duty, digital accuracy, and long-term durability.",
    stats: [
      { label: "Instruments Catalog", value: "85+" },
      { label: "Speed Accuracy", value: "±0.5%" },
      { label: "Temp Stability", value: "±0.1°C" },
      { label: "Active Deployments", value: "1,200+" },
    ],
    overview: {
      subtitle: "PRECISION RESEARCH & DIAGNOSTIC HARDWARE",
      heading: "Reliable Laboratory Infrastructure Built for Scientific Discovery",
      paragraph1:
        "Modern laboratories demand dependable hardware that delivers consistent results across thousands of operating cycles. BioMax Corporation supplies world-class centrifuges, digital incubators, optical and fluorescence microscopes, magnetic stirrers, and temperature-controlled water baths.",
      paragraph2:
        "Every piece of equipment is manufactured under ISO 9001 and CE certifications, incorporating brushless induction drive motors, anti-vibration damping, and programmable microprocessors that simplify complex analytical protocols for technicians and scientists.",
    },
    corePillars: [
      {
        icon: Cpu,
        title: "Microprocessor Digital Control",
        desc: "Precision digital regulation of speed, temperature, and cycle duration with memory presets.",
      },
      {
        icon: ShieldCheck,
        title: "Vibration & Acoustic Damping",
        desc: "Ultra-quiet brushless motors and dynamic counterbalance chambers ensuring silent operation.",
      },
      {
        icon: Gauge,
        title: "Thermal Uniformity",
        desc: "Multi-point heating jackets and forced-air convection delivering consistent temperature profiles.",
      },
      {
        icon: Award,
        title: "GLP/GMP Compliance",
        desc: "Certified data logging, calibration ports, and electronic safety interlocks on all moving parts.",
      },
    ],
    productCatalog: [
      {
        title: "High-Speed Refrigerated Centrifuges",
        desc: "Up to 21,000 RPM with rapid brushless cooling down to -20°C for sensitive bio-samples.",
        specs: "Max RCF 30,000 x g | Brushless Motor",
      },
      {
        title: "Digital CO₂ & Microbiological Incubators",
        desc: "Infrared CO₂ sensors and high-temperature decontamination cycles for sensitive cell cultures.",
        specs: "Temp Range: Amb +5°C to 65°C | IR CO₂ Sensor",
      },
      {
        title: "Advanced Binocular & Trinocular Microscopes",
        desc: "Plan-achromatic infinity optics, LED Kohler illumination, and 4K digital camera ports.",
        specs: "Magnification: 40x to 1000x | Infinity Corrected",
      },
      {
        title: "Orbital Shakers & Vortex Mixers",
        desc: "Heavy-duty continuous agitation with variable orbital diameters and universal clamps.",
        specs: "Speed: 30 to 500 RPM | Timer & Continuous Mode",
      },
    ],
    technicalSpecs: [
      { label: "Motor Type", value: "Maintenance-Free Brushless DC / Induction" },
      { label: "Control Interface", value: "LCD / Touchscreen Programmable Microprocessor" },
      { label: "Safety Systems", value: "Electronic Lid Lock, Imbalance Detection, Over-Temp Cutoff" },
      { label: "Housing Material", value: "Powder-Coated Steel & Chemical-Resistant Polymer" },
      { label: "Compliance Standards", value: "ISO 9001:2015, CE, IEC 61010-1 Electrical Safety" },
      { label: "Power Supply", value: "220V–240V / 50–60Hz Auto-Switching" },
    ],
    workflow: [
      {
        step: "01",
        title: "Requirement Consultation",
        desc: "Assessing laboratory throughput, sample volumes, and required analytical precision.",
      },
      {
        step: "02",
        title: "Equipment Specification & Delivery",
        desc: "Direct delivery with batch test certificates, calibration documents, and accessories.",
      },
      {
        step: "03",
        title: "On-Site Installation & IQ/OQ",
        desc: "Certified installation qualification and operational testing by trained BioMax engineers.",
      },
      {
        step: "04",
        title: "Preventive Maintenance & Calibration",
        desc: "Annual calibration visits, genuine spare parts supply, and responsive technical support.",
      },
    ],
    benefits: [
      "Zero downtime through robust industrial-grade construction",
      "Repeatable, verifiable test data meeting GLP accreditation standards",
      "Ergonomic design reducing user fatigue during routine testing",
      "Energy-efficient brushless technology lowering laboratory utility costs",
      "Complete warranty and responsive domestic technical assistance",
    ],
    targetClients: [
      "Academic Universities & Science Faculties",
      "Government Testing & Forensic Laboratories",
      "Clinical Pathology & Medical Centers",
      "Industrial Quality Control Laboratories",
      "Biotechnology & Pharmaceutical R&D Facilities",
    ],
    faqs: [
      {
        q: "Do BioMax centrifuges come with interchangeable rotor options?",
        a: "Yes. Our centrifuges support angle rotors, swing-out bucket rotors, and microplate carriers accommodating PCR tubes (0.2ml) up to 750ml bottles.",
      },
      {
        q: "What calibration certifications are provided with analytical equipment?",
        a: "Every unit is shipped with factory calibration certificates traceable to NIST and international standards, including speed, temperature, and timer verification.",
      },
      {
        q: "What is the warranty period on BioMax laboratory equipment?",
        a: "We provide a comprehensive 12 to 24-month manufacturer warranty with available extended service contracts and rapid spare parts availability.",
      },
      {
        q: "How does BioMax assist with laboratory equipment installation?",
        a: "Our certified engineering team handles unboxing, level installation, electrical safety testing, IQ/OQ validation protocols, and staff operational training.",
      },
    ],
  },
  {
    id: "diagnostic-equipment",
    slug: "diagnostic-equipment",
    title: "Diagnostic Equipment",
    shortTitle: "Diagnostic Systems",
    eyebrow: "CATEGORY 02",
    tagline: "High-Throughput Clinical Testing & Pathology Solutions",
    badge: "Clinical Diagnostic Range",
    heroImage: "/biomax_diagnostic_equipment_ai.jpg",
    icon: HeartPulse,
    desc: "Automated clinical chemistry analyzers, hematology counters, electrolyte meters, and rapid immunoassay readers providing hospital pathology centers with unmatched speed, diagnostic sensitivity, and LIS network connectivity.",
    stats: [
      { label: "Tests Per Hour", value: "Up to 800" },
      { label: "Sample Accuracy", value: "99.8%" },
      { label: "LIS Integration", value: "HL7 & ASTM" },
      { label: "Diagnostic Panels", value: "60+ Parameters" },
    ],
    overview: {
      subtitle: "CLINICAL PATHOLOGY & AUTOMATION",
      heading: "Accelerating Patient Diagnostics with Automated Clinical Systems",
      paragraph1:
        "Clinical laboratories require diagnostic systems that combine high sample throughput with razor-sharp analytical sensitivity. BioMax Corporation delivers fully automated biochemistry analyzers, 3-part and 5-part differential hematology systems, and point-of-care coagulation analyzers.",
      paragraph2:
        "Designed to reduce manual handling errors, our diagnostic platforms feature automated barcode tube scanning, clot detection sensors, liquid level sensing, and bi-directional Laboratory Information System (LIS) connectivity for instantaneous medical reporting.",
    },
    corePillars: [
      {
        icon: Activity,
        title: "High Analytical Precision",
        desc: "Sub-microliter sample pipetting with optical spectrophotometry delivering reproducible clinical titers.",
      },
      {
        icon: Zap,
        title: "Rapid Turnaround Times",
        desc: "Emergency STAT sample priority lanes and automated washing cycles for 24/7 continuous operation.",
      },
      {
        icon: ShieldCheck,
        title: "Integrated Quality Control",
        desc: "Automated Levey-Jennings QC charting, Westgard rule evaluation, and calibration drift alerts.",
      },
      {
        icon: Boxes,
        title: "LIS & Hospital Networking",
        desc: "Direct bi-directional HL7 data transmission directly into hospital electronic medical records (EMR).",
      },
    ],
    productCatalog: [
      {
        title: "Automated Clinical Chemistry Analyzers",
        desc: "Discrete random-access testing with 400 to 800 tests/hour throughput and refrigerated reagent carousel.",
        specs: "400-800 Tests/hr | 80 Sample Positions | 80 Reagent Positions",
      },
      {
        title: "5-Part Differential Hematology Analyzers",
        desc: "Laser scatter and chemical dye flow cytometry analyzing 28 blood parameters in under 60 seconds.",
        specs: "60 Samples/hr | 28 Parameters | Laser Flow Cytometry",
      },
      {
        title: "Electrolyte & Blood Gas Analyzers",
        desc: "Ion-selective electrode (ISE) technology measuring Na+, K+, Cl-, Ca2+, and pH in whole blood.",
        specs: "Sample Volume: 65µL | Result in 35 seconds | Zero Maintenance Cartridges",
      },
      {
        title: "Chemiluminescence Immunoassay (CLIA) Systems",
        desc: "Ultra-sensitive magnetic particle immunoassay detecting thyroid, fertility, tumor, and cardiac markers.",
        specs: "180 Tests/hr | High Sensitivity pg/mL | Magnetic Particle CLIA",
      },
    ],
    technicalSpecs: [
      { label: "Throughput Capacity", value: "60 to 800 tests/hour (Model Dependent)" },
      { label: "Sample Types", value: "Serum, Plasma, Whole Blood, Urine, Cerebrospinal Fluid" },
      { label: "Pipetting Precision", value: "CV < 1.0% at 2µL to 35µL sample volume" },
      { label: "Optics System", value: "Halogen / Solid-State LED, 340nm to 800nm Wavelengths" },
      { label: "Data Protocols", value: "Bi-directional HL7, ASTM, RS-232, TCP/IP Ethernet" },
      { label: "Certifications", value: "CE-IVD, ISO 13485 Medical Devices, FDA 510(k)" },
    ],
    workflow: [
      {
        step: "01",
        title: "Clinical Workload Assessment",
        desc: "Analyzing test volume and peak operational hours to recommend optimal analyzer capacity.",
      },
      {
        step: "02",
        title: "Reagent & Control Standardization",
        desc: "Supplying dedicated barcoded reagents, calibrators, and multi-level quality control materials.",
      },
      {
        step: "03",
        title: "LIS Interface & Validation",
        desc: "Configuring network data handshakes and running precision validation test batches.",
      },
      {
        step: "04",
        title: "Continuous Field Support",
        desc: "Providing scheduled preventative maintenance, software updates, and rapid reagent supply lines.",
      },
    ],
    benefits: [
      "Substantial reduction in cost-per-test through low reagent consumption",
      "Immediate reporting for critical emergency patient samples",
      "Elimination of transcription errors through automated LIS synchronization",
      "Verified compliance with international clinical pathology accreditation standards",
      "Minimized sample re-run rates through automated clot and bubble detection",
    ],
    targetClients: [
      "Tertiary Care Hospital Laboratories",
      "Independent Clinical Pathology Centers",
      "Private Diagnostic Clinics & Polyclinics",
      "Blood Transfusion & Donor Centers",
      "Government Medical Research Institutes",
    ],
    faqs: [
      {
        q: "Does BioMax offer open or closed reagent diagnostic analyzers?",
        a: "We offer both dedicated closed-system analyzers with barcoded pre-calibrated reagents and open-system analyzers that can run third-party certified reagents.",
      },
      {
        q: "How does the analyzer handle emergency STAT patient samples?",
        a: "All BioMax clinical chemistry and hematology systems feature dedicated STAT priority positions that immediately interrupt the standard batch run for urgent patient samples.",
      },
      {
        q: "What training is provided to laboratory technicians?",
        a: "We provide comprehensive on-site operational, calibration, and troubleshooting training with certified completion certificates for all participating laboratory technologists.",
      },
      {
        q: "Is automated daily washing and maintenance supported?",
        a: "Yes. Our analyzers execute automated start-up optical checks, cuvette washing, and shutdown sanitization cycles with zero manual intervention.",
      },
    ],
  },
  {
    id: "biotech-solutions",
    slug: "biotech-solutions",
    title: "Biotechnology Solutions",
    shortTitle: "Biotech & Genomics",
    eyebrow: "CATEGORY 03",
    tagline: "Molecular Biology, PCR Systems & Cell Culture Technologies",
    badge: "Genomics & Cell Biology",
    heroImage: "/biomax_biotech_solutions_ai.jpg",
    icon: Dna,
    desc: "Cutting-edge molecular biology instrumentation, real-time qPCR thermal cyclers, nucleic acid extraction workstations, biosafety cabinets, and cell culture bioreactors for advanced life sciences research.",
    stats: [
      { label: "Thermal Ramp Rate", value: "Up to 8.5°C/s" },
      { label: "Detection Channels", value: "6 Optical Channels" },
      { label: "HEPA Filtration", value: "99.999% @ 0.3µm" },
      { label: "Genomics Systems", value: "40+ Models" },
    ],
    overview: {
      subtitle: "ADVANCED MOLECULAR & GENETIC TOOLS",
      heading: "Empowering Molecular Biology, Genetics & Cell Cultivation",
      paragraph1:
        "Biotechnology research demands absolute thermal precision, sterile containment, and optical sensitivity. BioMax Corporation provides next-generation qualitative and real-time quantitative PCR cyclers, automated DNA/RNA magnetic extraction systems, and Class II Type A2/B2 biological safety cabinets.",
      paragraph2:
        "Whether performing genetic sequencing preparation, pathogen nucleic acid detection, recombinant protein expression, or mammalian cell culture, our instrumentation ensures zero cross-contamination, high yields, and reproducible amplification curves.",
    },
    corePillars: [
      {
        icon: Dna,
        title: "Thermal Cycling Uniformity",
        desc: "Advanced Peltier heating and cooling blocks ensuring ±0.1°C well-to-well thermal uniformity.",
      },
      {
        icon: ShieldCheck,
        title: "Class II Biosafety Containment",
        desc: "Ultra-clean laminar airflow protecting both the laboratory operator and sensitive cell cultures.",
      },
      {
        icon: Sparkles,
        title: "Multi-Channel Optical Detection",
        desc: "High-sensitivity photon sensors supporting FAM, VIC, ROX, Cy5, and custom fluorescent multiplex dyes.",
      },
      {
        icon: Layers,
        title: "Automated Magnetic Extraction",
        desc: "Magnetic rod bead transfer processing 96 viral or genomic samples in under 30 minutes.",
      },
    ],
    productCatalog: [
      {
        title: "Real-Time Quantitative PCR (qPCR) Systems",
        desc: "96-well 6-channel optical detection with Peltier ramp rates up to 8.5°C/second and multiplex gene analysis.",
        specs: "96 Wells | 6 Optical Channels | Dynamic Range 1-10¹⁰ Copies",
      },
      {
        title: "Automated Nucleic Acid Extractors",
        desc: "High-throughput magnetic bead extraction workstation with built-in UV decontamination and heating blocks.",
        specs: "32 / 96 Sample Capacity | Extraction Time: 15-30 Mins | High Yield",
      },
      {
        title: "Class II Type A2 Biosafety Cabinets",
        desc: "Dual DC motor airflow compensation, motorized sash, and certified 99.999% H14 HEPA filtration.",
        specs: "EN 12469 Certified | H14 HEPA Filters | Low Noise < 58 dB",
      },
      {
        title: "CO₂ Tri-Gas Hypoxic Incubators",
        desc: "Precision O₂ (1-20%) and CO₂ control for stem cell, IVF, and tumor microenvironment studies.",
        specs: "O₂ & CO₂ Controlled | High-Temp Decontamination | 180 Litres",
      },
    ],
    technicalSpecs: [
      { label: "Thermal Ramp Rate", value: "Heating up to 8.5°C/s; Cooling up to 6.5°C/s" },
      { label: "Optical Excitation", value: "Long-Life High-Power LEDs with Photodiode/CCD Detection" },
      { label: "Extraction Principle", value: "Superparamagnetic Silica Bead Isolation Technology" },
      { label: "Air Cleanliness", value: "ISO Class 5 / Class 100 inside work zone" },
      { label: "Data Analysis Software", value: "Relative/Absolute Quantification, SNP Genotyping, HRM Analysis" },
      { label: "Communication Ports", value: "USB, LAN, Standalone Android/Windows Touch Controller" },
    ],
    workflow: [
      {
        step: "01",
        title: "Molecular Workflow Mapping",
        desc: "Auditing pre-PCR, extraction, amplification, and post-PCR zoning requirements to prevent amplicon carryover.",
      },
      {
        step: "02",
        title: "Instrument & Reagent Matching",
        desc: "Validating compatible master mixes, primers, and extraction magnetic beads for target nucleic acids.",
      },
      {
        step: "03",
        title: "Installation & Optical Calibration",
        desc: "Laser optical matrix calibration, thermal gradient testing, and HEPA filter particle validation.",
      },
      {
        step: "04",
        title: "Method Validation & Protocol Support",
        desc: "Assisting researchers with threshold cycle (Ct) optimization and multi-target multiplex design.",
      },
    ],
    benefits: [
      "Highest amplification efficiency with reliable detection down to single-copy targets",
      "Total operator and sample protection from hazardous biological pathogens",
      "Streamlined extraction workflows saving up to 80% of technician bench time",
      "Flexible open-platform chemistry compatible with major commercial reagent kits",
      "Intuitive software with automatic melting curve and threshold analysis",
    ],
    targetClients: [
      "Molecular Biology & Genomics Institutes",
      "Biopharmaceutical Drug Discovery Centers",
      "Agricultural Genetics & Seed Testing Labs",
      "Veterinary Virology & Pathogen Surveillance Labs",
      "In-Vitro Fertilization (IVF) & Stem Cell Clinics",
    ],
    faqs: [
      {
        q: "What dyes and reporter probes are supported on BioMax real-time PCR systems?",
        a: "Our 6-channel optical system supports all standard fluorophores including FAM, SYBR Green I, VIC, HEX, JOE, TAMRA, ROX, Texas Red, Cy3, and Cy5.",
      },
      {
        q: "Can the automated nucleic acid extractor process different sample types?",
        a: "Yes. It extracts DNA and RNA from whole blood, serum, viral swabs, plant tissues, cultured cells, and paraffin-embedded (FFPE) tissue samples.",
      },
      {
        q: "Are the biosafety cabinets certified to international safety standards?",
        a: "Yes. All BioMax Class II biological safety cabinets are certified to European Standard EN 12469 and NSF/ANSI 49 standards.",
      },
      {
        q: "Is software licensing restricted to a single workstation?",
        a: "No. Our analysis software comes with site licenses allowing researchers to analyze PCR data on multiple laboratory computers without extra licensing fees.",
      },
    ],
  },
  {
    id: "consumables",
    slug: "consumables",
    title: "Laboratory Consumables",
    shortTitle: "Lab Consumables",
    eyebrow: "CATEGORY 04",
    tagline: "Certified Purity Glassware, Plasticware & Liquid Handling",
    badge: "Essential Supplies",
    heroImage: "/biomax_consumables_ai.jpg",
    icon: FlaskConical,
    desc: "A comprehensive catalog of high-purity laboratory plasticware, volumetric borosilicate 3.3 glassware, universal low-retention pipette tips, microcentrifuge tubes, and sterile cell culture vessels engineered to eliminate contamination.",
    stats: [
      { label: "Purity Grade", value: "DNase/RNase Free" },
      { label: "Glass Quality", value: "Borosilicate 3.3" },
      { label: "Pipette Retention", value: "<0.1% Loss" },
      { label: "SKU Catalog", value: "500+ Items" },
    ],
    overview: {
      subtitle: "PURITY-CERTIFIED LABORATORY PLASTIC & GLASS",
      heading: "Preventing Cross-Contamination & Ensuring Liquid Precision",
      paragraph1:
        "Experimental accuracy depends on the purity and surface inertness of everyday laboratory consumables. BioMax Corporation manufactures medical-grade virgin polypropylene consumables and heavy-duty borosilicate 3.3 glassware in Class 100,000 cleanrooms.",
      paragraph2:
        "Certified free from detectable DNase, RNase, human DNA, endotoxins, and heavy metals, our consumable range delivers maximum sample recovery, extreme thermal tolerance from -80°C to +121°C, and unmatched volumetric calibration precision.",
    },
    corePillars: [
      {
        icon: ShieldCheck,
        title: "Cleanroom Manufactured",
        desc: "Molded in ISO Class 8 cleanrooms with zero human contact and continuous bioburden monitoring.",
      },
      {
        icon: Sparkles,
        title: "Ultra-Low Retention Surfaces",
        desc: "Hydrophobic polymer molding ensuring maximum sample recovery of expensive enzymes and reagents.",
      },
      {
        icon: ThermometerSnowflake,
        title: "Extreme Temperature Tolerance",
        desc: "Withstands autoclavability at 121°C and cryogenic vapor phase storage down to -196°C.",
      },
      {
        icon: Package,
        title: "Volumetric Class A Accuracy",
        desc: "Individually calibrated borosilicate volumetric flasks and pipettes with batch conformity certificates.",
      },
    ],
    productCatalog: [
      {
        title: "Filter Pipette Tips & Micro-Tips",
        desc: "Aerosol barrier filter tips compatible with all major pipettor brands, sterile and individually racked.",
        specs: "Sizes: 10µL, 20µL, 100µL, 200µL, 1000µL | Low Retention",
      },
      {
        title: "Microcentrifuge & Falcon Conical Tubes",
        desc: "High-clarity virgin polypropylene tubes with frosted writing surfaces and leak-proof screw/snap caps.",
        specs: "0.5ml, 1.5ml, 2.0ml, 15ml, 50ml | RCF up to 20,000 x g",
      },
      {
        title: "Borosilicate 3.3 Laboratory Glassware",
        desc: "Beakers, Erlenmeyer flasks, graduated cylinders, and reagent bottles with high chemical resistance.",
        specs: "ISO 3819 & ASTM E960 Compliant | Class A Graduation",
      },
      {
        title: "Tissue Culture Treated Dishes & Plates",
        desc: "Vacuum plasma surface treated 6, 12, 24, 96-well culture plates for uniform adherent cell attachment.",
        specs: "Sterile | Non-Pyrogenic | Optically Clear Polystyrene",
      },
    ],
    technicalSpecs: [
      { label: "Raw Material", value: "Medical-Grade Virgin Polypropylene (PP) / Borosilicate 3.3 Glass" },
      { label: "Sterilization Method", value: "Gamma Irradiation (Cobalt-60) / E-Beam with SAL 10⁻⁶" },
      { label: "Certified Purity", value: "Free of DNase, RNase, Endotoxins (<0.005 EU/ml), PCR Inhibitors" },
      { label: "Thermal Range", value: "-80°C to +121°C (Plasticware); -50°C to +500°C (Glassware)" },
      { label: "Packaging Standards", value: "Sterile individually bagged, blister-packed, or bulk autoclavable bags" },
      { label: "Centrifugation Limits", value: "15ml & 50ml Conical Tubes tested to 12,000 x g" },
    ],
    workflow: [
      {
        step: "01",
        title: "Purity Grade Selection",
        desc: "Matching research requirements (standard, sterile, filter barrier, or low-retention) with the right SKU.",
      },
      {
        step: "02",
        title: "Bulk Supply Logistics",
        desc: "Guaranteed standing inventory in regional warehouses with batch Lot release documentation.",
      },
      {
        step: "03",
        title: "Clean Storage & Handling",
        desc: "Delivering double-bagged, radiation-sterilized packages protected against dust and humidity.",
      },
      {
        step: "04",
        title: "Waste Reduction & Recycling Support",
        desc: "Providing eco-friendly reload tip systems and recyclable packaging formats.",
      },
    ],
    benefits: [
      "Total elimination of PCR false positives caused by contaminated consumables",
      "Near-zero sample loss when handling low-volume precious bio-reagents",
      "Universal fit across Gilson, Eppendorf, Thermo, and Sartorius pipettes",
      "Heavy-duty glassware durability reducing annual laboratory replacement expenses",
      "Guaranteed batch-to-batch manufacturing consistency",
    ],
    targetClients: [
      "Molecular Biology & Genetic Testing Labs",
      "Clinical Pathology & Hospital Blood Banks",
      "Pharmaceutical QA/QC & Formulation Labs",
      "Academic Chemistry & Biology Teaching Labs",
      "Food Safety & Environmental Testing Facilities",
    ],
    faqs: [
      {
        q: "Are BioMax pipette tips universally compatible with major pipettor brands?",
        a: "Yes. Our tip bevels and collar dimensions are precision-engineered to form an airtight seal with Eppendorf, Gilson, Thermo Finnpipette, Sartorius, and Biohit pipettes.",
      },
      {
        q: "What is low-retention technology and why is it important?",
        a: "Low-retention tips feature a specialized hydrophobic polymer blend that prevents sticky liquids (such as glycerol, master mixes, and blood plasma) from adhering to tip walls.",
      },
      {
        q: "Can BioMax glassware be heated over direct Bunsen burner flames?",
        a: "Yes. Our borosilicate 3.3 beakers and flasks possess a very low coefficient of thermal expansion (3.3 x 10⁻⁶/K) and withstand direct flame heating and rapid thermal transitions.",
      },
      {
        q: "How can we obtain Lot-specific certificates of analysis (CoA)?",
        a: "Every box features a unique Lot and QR code that allows instant download of purity and sterility certificates directly from our digital portal.",
      },
    ],
  },
  {
    id: "scientific-instruments",
    slug: "scientific-instruments",
    title: "Scientific Instruments",
    shortTitle: "Analytical Instruments",
    eyebrow: "CATEGORY 05",
    tagline: "Precision Measurement, HPLC & Spectrophotometry",
    badge: "Precision Analytics",
    heroImage: "/biomax_scientific_instruments_ai.jpg",
    icon: Target,
    desc: "High-performance analytical instruments including double-beam UV-Vis spectrophotometers, High-Performance Liquid Chromatography (HPLC) systems, digital analytical microbalances, and electrochemistry meters for quantitative analysis.",
    stats: [
      { label: "Wavelength Range", value: "190 – 1100 nm" },
      { label: "Weighing Readability", value: "0.0001 g (0.1 mg)" },
      { label: "HPLC Pressure", value: "Up to 600 Bar" },
      { label: "Compliance", value: "21 CFR Part 11" },
    ],
    overview: {
      subtitle: "QUANTITATIVE CHEMICAL & SPECTRAL ANALYSIS",
      heading: "Delivering Sub-PPM Chemical Identification & High Reproducibility",
      paragraph1:
        "Chemical formulation, environmental compliance, and pharmaceutical testing require uncompromising analytical sensitivity. BioMax Corporation manufactures and integrates advanced double-beam UV-Vis spectrophotometers, isocratic and quaternary HPLC chromatography systems, and microbalances.",
      paragraph2:
        "Engineered with 21 CFR Part 11 compliant audit trails, electronic signature capabilities, and automatic internal mass calibration, our instruments give analytical chemists the precision needed for regulatory submissions and critical quality decisions.",
    },
    corePillars: [
      {
        icon: Target,
        title: "Sub-Milligram Weighing Precision",
        desc: "Electromagnetic force compensation technology delivering steady 0.1mg readability.",
      },
      {
        icon: Sparkles,
        title: "Double-Beam Optical Purity",
        desc: "Deuterium and tungsten lamps with concave holographic grating minimizing stray light to <0.03%.",
      },
      {
        icon: Activity,
        title: "High-Pressure Liquid Chromatography",
        desc: "Pulse-free dual-piston solvent pumps and high-sensitivity variable wavelength UV-Vis detectors.",
      },
      {
        icon: Award,
        title: "21 CFR Part 11 Data Integrity",
        desc: "Encrypted audit logs, multi-tier user permissions, and tamper-proof electronic reporting.",
      },
    ],
    productCatalog: [
      {
        title: "Double-Beam UV-Vis Spectrophotometers",
        desc: "Split-beam optical system covering 190nm to 1100nm with 1.0nm spectral bandwidth and quantitative software.",
        specs: "Wavelength: 190-1100nm | Bandwidth: 1.0nm | Stray Light: <0.03%T",
      },
      {
        title: "Modular HPLC Chromatography Systems",
        desc: "Quaternary gradient low-pressure mixing pump with autosampler and temperature-controlled column oven.",
        specs: "Pressure up to 600 Bar | Flow Rate: 0.001 to 10 ml/min | Variable UV-Vis",
      },
      {
        title: "Analytical Microbalances & Precision Scales",
        desc: "Internal automatic calibration with anti-static glass draft shield and rapid 2.5-second stabilization.",
        specs: "Capacity: 220g | Readability: 0.1mg | Internal Motor Calibration",
      },
      {
        title: "Multi-Parameter Digital Benchtop Meters",
        desc: "Simultaneous measurement of pH, conductivity, TDS, salinity, and dissolved oxygen with data logging.",
        specs: "pH Range: -2.00 to 20.00 | Auto Temp Compensation | USB Data Export",
      },
    ],
    technicalSpecs: [
      { label: "Wavelength Accuracy", value: "±0.3 nm (UV-Vis Spectrophotometer)" },
      { label: "Photometric Range", value: "-0.3 to 3.0 A; 0 to 200% T" },
      { label: "Pump Flow Precision", value: "RSD < 0.1% (HPLC Solvent Delivery)" },
      { label: "Draft Shield", value: "Three-door glass chamber with anti-static conductive coating" },
      { label: "Software Compatibility", value: "Windows 11 / Client-Server LIMS with 21 CFR Part 11 compliance" },
      { label: "Connectivity", value: "RS-232, USB, Ethernet, Direct Thermal Printer Output" },
    ],
    workflow: [
      {
        step: "01",
        title: "Analytical Method Evaluation",
        desc: "Reviewing target analytes, detection limits (LOD/LOQ), and chemical matrices to configure optimal hardware.",
      },
      {
        step: "02",
        title: "Column & Detector Matching",
        desc: "Selecting stationary phases, guard columns, and optical flow cells calibrated for the application.",
      },
      {
        step: "03",
        title: "IQ/OQ/PQ Performance Qualification",
        desc: "Executing full validation protocols using certified reference standards to establish system suitability.",
      },
      {
        step: "04",
        title: "Method Development & Training",
        desc: "Assisting analytical chemists with gradient programming, calibration curves, and peak integration.",
      },
    ],
    benefits: [
      "Guaranteed data integrity for pharmaceutical and environmental regulatory audits",
      "Exceptional baseline stability and lowest signal-to-noise ratio in trace analytics",
      "Intuitive chromatography workstation software simplifying batch sample sequences",
      "Robust hardware engineered for continuous 24/7 multi-user testing environments",
      "Low maintenance downtime backed by certified calibration standards",
    ],
    targetClients: [
      "Pharmaceutical QA/QC & Stability Testing Labs",
      "Environmental Monitoring & Water Quality Agencies",
      "Food & Beverage Chemical Analysis Facilities",
      "Chemical Synthesis & Petrochemical Laboratories",
      "Forensic Science & Toxicology Institutes",
    ],
    faqs: [
      {
        q: "Does the BioMax HPLC software comply with 21 CFR Part 11 regulations?",
        a: "Yes. Our chromatography data system (CDS) features full user access hierarchy, electronic signatures, non-editable encrypted audit trails, and automatic project archiving.",
      },
      {
        q: "What light sources are utilized in the UV-Vis spectrophotometers?",
        a: "The spectrophotometer uses a long-life pre-aligned Hamamatsu Deuterium lamp for the UV spectrum (190–340nm) and a high-intensity Tungsten-Halogen lamp for visible light (340–1100nm).",
      },
      {
        q: "How does the internal calibration on analytical balances operate?",
        a: "The balance features an internal motorized standard mass that automatically triggers calibration when ambient room temperature shifts or at pre-set time intervals.",
      },
      {
        q: "Can the pH and conductivity meters be used with non-aqueous solvents?",
        a: "Yes. We provide specialized glass-body sleeve junction electrodes and organic-solvent resistant conductivity probes designed specifically for non-aqueous and petrochemical samples.",
      },
    ],
  },
];

export function getBiomaxSolutionBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();

  // Direct match
  const direct = BIOMAX_SOLUTIONS.find((s) => s.id === normalized || s.slug === normalized);
  if (direct) return direct;

  // Aliases
  if (normalized === "equipment" || normalized === "laboratory-equipment" || normalized === "lab") {
    return BIOMAX_SOLUTIONS.find((s) => s.id === "lab-equipment");
  }
  if (normalized === "diagnostic" || normalized === "diagnostics" || normalized === "diagnostic-equipment") {
    return BIOMAX_SOLUTIONS.find((s) => s.id === "diagnostic-equipment");
  }
  if (normalized === "biotech" || normalized === "biotechnology" || normalized === "biotechnology-solutions") {
    return BIOMAX_SOLUTIONS.find((s) => s.id === "biotech-solutions");
  }
  if (normalized === "consumable" || normalized === "lab-consumables" || normalized === "consumables") {
    return BIOMAX_SOLUTIONS.find((s) => s.id === "consumables");
  }
  if (normalized === "instruments" || normalized === "scientific" || normalized === "scientific-instruments") {
    return BIOMAX_SOLUTIONS.find((s) => s.id === "scientific-instruments");
  }

  return null;
}
