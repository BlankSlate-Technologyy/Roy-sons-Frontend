// Comprehensive Industries / Sectors We Serve Dataset for Alpha Matrix Defence Systems
import {
  ShieldCheck,
  Landmark,
  MapPin,
  Plane,
  Ship,
  Flame,
  Zap,
  Building2,
  Server,
  Network,
  Building,
  Wrench,
  Camera,
  Fingerprint,
  Shield,
  Radar,
  Radio,
  Eye,
  Lock,
  Activity,
  Cpu,
  Layers,
  FileCheck,
} from "lucide-react";

export const ALPHA_INDUSTRIES = [
  {
    id: "military",
    slug: "military-and-armed-forces",
    title: "Military & Armed Forces",
    eyebrow: "Sovereign Tactical Defense & Reconnaissance",
    tag: "Armed Forces",
    icon: ShieldCheck,
    heroImage: "/armed_forces_hero.jpg",
    overview:
      "Alpha Matrix provides tactical surveillance grids, forward operating base (FOB) perimeter shields, electronic counter-measures, and secure C4ISR communications for military and armed forces operating in high-threat environments.",
    metrics: [
      { label: "Deployments", value: "80+ Bases" },
      { label: "Thermal Range", value: "15km Night" },
      { label: "Encryption", value: "Mil-Grade" },
      { label: "Readiness", value: "24/7/365" },
    ],
    applications: [
      "Forward Operating Base (FOB) multi-layered perimeter intrusion detection and automated alert systems",
      "Thermal infrared target reconnaissance and electro-optical target acquisition turrets",
      "Mobile tactical vehicle-mounted surveillance masts with satellite datalinks",
      "Encrypted combat communication bridges and tactical C4ISR situational awareness consoles",
      "Counter-UAS anti-drone radio frequency detection and directional jamming systems",
      "Armory and weapons cache biometric access control and inventory telemetry",
    ],
    technologies: [
      { key: "Tactical Standards", value: "Mil-STD-810H environmental, Mil-STD-461G electromagnetic compatibility" },
      { key: "Thermal Optics", value: "Continuous optical zoom cooled MWIR thermal imaging sensors" },
      { key: "Communications", value: "Tactical software-defined radio (SDR) with frequency-hopping encryption" },
      { key: "Perimeter Sensors", value: "Taut-wire fence, ground seismic geophones, radar-slaved cameras" },
      { key: "Power Reliability", value: "Hybrid tactical generators, solar panels, Mil-spec battery storage" },
    ],
    pillars: [
      {
        title: "Tactical C4ISR Hubs",
        desc: "Ruggedized mobile command containers integrating all field sensor streams into an actionable 3D tactical map.",
        icon: Server,
      },
      {
        title: "All-Weather Reconnaissance",
        desc: "Cooled thermal infrared imagers capable of detecting vehicle and human heat signatures through sandstorms and smoke.",
        icon: Eye,
      },
      {
        title: "Airspace Drone Defense",
        desc: "Detects hostile reconnaissance and weaponized drones, neutralizing their command links before they breach base perimeters.",
        icon: Radio,
      },
      {
        title: "Armory Access Security",
        desc: "Dual-custody biometric locks, biometric iris scanners, and automated logbook recording for weapons depots.",
        icon: Lock,
      },
    ],
    faqs: [
      {
        q: "Are Alpha Matrix military systems built to withstand extreme battlefield conditions?",
        a: "Yes. All our tactical systems comply with Mil-STD-810H, operating in extreme temperatures (-40°C to +65°C), blowing sand, salt fog, high vibration, and ballistic shock.",
      },
      {
        q: "Can the system be deployed in mobile tactical command vehicles?",
        a: "Yes. We engineer vehicle-mounted pneumatic masts with gyro-stabilized multi-sensor camera turrets for rapid deployment during mobile operations.",
      },
      {
        q: "What encryption is used for military video feeds?",
        a: "All video, audio, and sensor telemetry is encrypted using hardware-accelerated AES-256 with dynamic key rotation to prevent tactical interception.",
      },
    ],
  },
  {
    id: "government",
    slug: "government-organizations",
    title: "Government Organizations",
    eyebrow: "Ministries, Embassies & Diplomatic Enclaves",
    tag: "Government",
    icon: Landmark,
    heroImage: "/alpha_about_facility.svg",
    overview:
      "Alpha Matrix designs and executes holistic physical security architectures for government secretariats, supreme courts, foreign embassies, and administrative compounds requiring zero-compromise access governance.",
    metrics: [
      { label: "Ministries Fortified", value: "35+" },
      { label: "Access Speed", value: "< 0.3s Auth" },
      { label: "Anti-Ram Rating", value: "PAS 68 M50" },
      { label: "Surveillance", value: "4K AI UHD" },
    ],
    applications: [
      "Multi-modal biometric access control gates for civil servants, diplomats, and authorized personnel",
      "Automated Under-Vehicle Inspection Systems (UVIS) with AI foreign object detection at vehicle gates",
      "Executive protection video surveillance with real-time facial recognition and blacklist alert",
      "Centralized government Security Operations Center (SOC) unifying multiple regional department feeds",
      "Hydraulic anti-ram crash bollards and road blockers protecting building entrances",
      "Secure visitor management kiosks with automated passport scanning and background credentialing",
    ],
    technologies: [
      { key: "Biometrics Supported", value: "3D Face Recognition, Dual-Iris scanning, Contactless Palm Vein" },
      { key: "Barrier Standards", value: "ASTM F2656 / PAS 68 M50 crash-rated automatic hydraulic bollards" },
      { key: "Video Analytics", value: "Blacklist matching, VIP recognition, unattended baggage detection" },
      { key: "Network Topology", value: "Isolated government intranet with cryptographic zero-trust gateways" },
      { key: "Visitor Management", value: "Automated OCR passport / National ID chip reader integration" },
    ],
    pillars: [
      {
        title: "Perimeter Hardening",
        desc: "Crash-rated bollards and anti-ram barriers designed to withstand hostile vehicle ramming attempts.",
        icon: Shield,
      },
      {
        title: "Biometric Screening",
        desc: "High-throughput contactless facial recognition speed gates that eliminate credential sharing.",
        icon: Fingerprint,
      },
      {
        title: "Vehicle Chassis AI",
        desc: "Under-vehicle scanners that capture crystal-clear composite images to detect hidden contraband or explosives.",
        icon: Camera,
      },
      {
        title: "Diplomatic VIP Protection",
        desc: "Dedicated AI surveillance zones that detect unauthorized tailgating near executive suites and embassies.",
        icon: Eye,
      },
    ],
    faqs: [
      {
        q: "How does the system prevent unauthorized access in high-security government facilities?",
        a: "We deploy multi-factor authentication (Biometrics + Encrypted Smart Card) combined with anti-tailgating optical speed gates and automated UVIS vehicle scanners at all checkpoints.",
      },
      {
        q: "Can multiple government buildings be managed from a central command center?",
        a: "Yes. Our centralized C4ISR platform can aggregate hundreds of disparate government buildings across the country into one sovereign security dashboard.",
      },
      {
        q: "Is visitor data kept private and compliant with data laws?",
        a: "Yes. All visitor records and biometric hashes are stored in encrypted databases behind hardware security modules, compliant with national privacy regulations.",
      },
    ],
  },
  {
    id: "border-sec",
    slug: "border-security-sector",
    title: "Border Security",
    eyebrow: "International Frontiers & Customs Checkpoints",
    tag: "Border Defense",
    icon: MapPin,
    heroImage: "/alpha_border_security.svg",
    overview:
      "Alpha Matrix provides national border management solutions that combine long-range radar networks, thermal night vision towers, buried acoustic seismic sensors, and automated border crossing biometric portals.",
    metrics: [
      { label: "Frontier Managed", value: "1,200+ km" },
      { label: "Radar Tracking", value: "Simultaneous 500" },
      { label: "Reaction Window", value: "< 10s Alert" },
      { label: "Detection Accuracy", value: "99.8%" },
    ],
    applications: [
      "Long-range ground surveillance radar (GSR) grids monitoring rugged mountain and desert borders",
      "Thermal long-range electro-optical towers with 360-degree autonomous scanning routines",
      "Fiber-optic buried Distributed Acoustic Sensing (DAS) detecting crossing, walking, and tunneling",
      "Automated e-Gates at international border checkpoints with biometric passport validation",
      "Rapid-response mobile command vehicles with pneumatic telescopic sensor masts",
      "Autonomous drone patrol docks that launch upon perimeter seismic alarm triggers",
    ],
    technologies: [
      { key: "Radar Range & Frequency", value: "X-band / Ku-band phased array with 40km vehicle detection" },
      { key: "Thermal Sensor", value: "Cooled InSb/MCT thermal detector with continuous motorized optical zoom" },
      { key: "Acoustic Ground Sensor", value: "Single interrogator covers 50km with 1-meter intrusion pinpointing" },
      { key: "Data Links", value: "Encrypted microwave mesh, satellite communications, tactical 4G/5G" },
      { key: "Autonomous UAS", value: "VTOL drone docks with automatic thermal payload tracking" },
    ],
    pillars: [
      {
        title: "Phased Array Radar Grids",
        desc: "Covers huge expanses of desert and mountainous frontier, tracking multiple moving targets concurrently.",
        icon: Radar,
      },
      {
        title: "Subsurface Seismic Defense",
        desc: "Buried fiber cables that detect ground acoustic shockwaves from footfalls, vehicles, or tunnel excavation.",
        icon: Layers,
      },
      {
        title: "Rapid Drone Scramble",
        desc: "Automated drone hangars that scramble quadcopters to stream live aerial video of suspicious breach points.",
        icon: Radio,
      },
      {
        title: "Border Crossing e-Gates",
        desc: "High-speed biometric traveler clearance at legal crossing points, checking against Interpol & watchlists.",
        icon: Fingerprint,
      },
    ],
    faqs: [
      {
        q: "How does the system perform in zero-visibility weather conditions (sandstorms, thick fog)?",
        a: "Our multi-sensor arrays combine microwave ground radar with long-wave infrared (LWIR) thermal cameras that penetrate atmospheric dust, smoke, and zero-light conditions.",
      },
      {
        q: "What is the false alarm rate of the buried seismic sensors?",
        a: "Advanced AI digital signal processing analyzes the frequency spectrum of ground vibrations, effectively ignoring heavy rain, tree roots, and animal traffic.",
      },
      {
        q: "How is power supplied to remote, uninhabited border towers?",
        a: "Each remote tower operates on an autonomous hybrid power pack combining high-efficiency solar panels, wind micro-turbines, and industrial lithium-iron-phosphate battery banks.",
      },
    ],
  },
  {
    id: "airports",
    slug: "airports-and-aviation",
    title: "Airports & Aviation",
    eyebrow: "Airfield Perimeters, Terminals & Airspace",
    tag: "Aviation",
    icon: Plane,
    heroImage: "/alpha_airport_defense.svg",
    overview:
      "Alpha Matrix protects international civil and military airports through comprehensive perimeter intrusion detection, runway Foreign Object Debris (FOD) scanning, counter-drone airspace shields, and passenger flow analytics.",
    metrics: [
      { label: "Airports Secured", value: "18 Hubs" },
      { label: "Runway Coverage", value: "100% Optical" },
      { label: "Anti-Drone Shield", value: "5km Airspace" },
      { label: "ICAO Compliance", value: "Certified" },
    ],
    applications: [
      "Runway and taxiway perimeter intrusion detection systems (PIDS) with thermal camera verification",
      "Counter-UAS anti-drone airspace radar preventing rogue drone interference in flight paths",
      "Automated optical runway Foreign Object Debris (FOD) continuous scanning systems",
      "Terminal passenger flow optimization, crowd density monitoring, and left-luggage alerts",
      "High-security biometric access control for airside access gates, baggage areas, and control towers",
      "Centralized Airport Security Operations Center (ASOC) coordinating airlines, police, and customs",
    ],
    technologies: [
      { key: "Airfield PIDS", value: "Thermal PTZ cameras, fiber-optic fence sensors, infrared beam curtains" },
      { key: "Counter-Drone", value: "3D micro-radar, RF scanner (400MHz-6GHz), directional smart jammer" },
      { key: "Runway FOD Scanner", value: "Millimeter-wave radar (77GHz) and 4K zoom optical cameras" },
      { key: "Terminal Analytics", value: "Queue wait-time measurement, heatmaps, facial recognition against watchlists" },
      { key: "Regulatory Standards", value: "ICAO Annex 17, TSA, ECAC aviation security compliance" },
    ],
    pillars: [
      {
        title: "Airside Perimeter Defense",
        desc: "Detects unauthorized persons attempting to breach fence lines onto active taxiways or runways.",
        icon: Shield,
      },
      {
        title: "Counter-Drone Airspace Guard",
        desc: "Detects unauthorized drones near runways, safely disrupting their control link without impacting aircraft avionics.",
        icon: Radio,
      },
      {
        title: "Runway FOD Detection",
        desc: "Automated radar and optical cameras that detect minute debris on the runway before takeoff and landing.",
        icon: Eye,
      },
      {
        title: "Terminal Passenger Biometrics",
        desc: "Facilitates seamless contactless boarding while screening passengers against international flight security registries.",
        icon: Fingerprint,
      },
    ],
    faqs: [
      {
        q: "Does the counter-drone system interfere with aircraft navigation systems?",
        a: "No. Our counter-UAS radio frequency countermeasures operate strictly on commercial drone ISM bands and are filtered to prevent interference with ATC radar or avionics.",
      },
      {
        q: "How does the system detect runway debris (FOD)?",
        a: "High-resolution 77GHz millimeter-wave radars placed along the runway detect objects as small as bolts or gravel in under 30 seconds, alerting airport ground operations immediately.",
      },
      {
        q: "What measures are taken for airside employee access control?",
        a: "Airside doors feature biometric dual-authentication mantraps and automated anti-passback turnstiles to ensure only verified, screened personnel enter restricted zones.",
      },
    ],
  },
  {
    id: "seaports",
    slug: "seaports-and-maritime",
    title: "Seaports & Maritime",
    eyebrow: "Container Terminals, Coastal Borders & Harbors",
    tag: "Maritime",
    icon: Ship,
    heroImage: "/alpha_about_facility.svg",
    overview:
      "Alpha Matrix delivers maritime security architectures for international deep-sea ports, container terminals, and oil tanker docks. We integrate coastal radar, container optical character recognition (OCR), underwater sonar, and automated gate systems.",
    metrics: [
      { label: "Ports Protected", value: "12 Hubs" },
      { label: "Coastal Radar", value: "30 Nautical Miles" },
      { label: "Container OCR", value: "99.5% Accuracy" },
      { label: "ISPS Code", value: "Full Compliance" },
    ],
    applications: [
      "Long-range coastal maritime radar tracking vessels and small watercraft entering harbor exclusion zones",
      "Automated container identification (ISO 6346 OCR) and automated gate access systems for cargo trucks",
      "Thermal quayside surveillance monitoring cargo berths, ship docking, and perimeter seawalls",
      "Underwater sonar diver detection systems (DDS) preventing clandestine swimmer intrusions",
      "ATEX-certified explosion-proof cameras and flame detectors for liquid gas and oil tanker piers",
      "Port Security Command Center integrating customs inspection, harbor police, and vessel traffic services (VTS)",
    ],
    technologies: [
      { key: "Coastal Radar", value: "X-band solid-state radar integrated with Automatic Identification System (AIS)" },
      { key: "Container OCR", value: "High-speed line-scan cameras with deep learning container code readers" },
      { key: "Sonar System", value: "Active high-frequency sonar detecting open-circuit and closed-circuit divers" },
      { key: "Harbor Enclosure", value: "Corrosion-resistant Marine Grade 316L stainless steel camera housings" },
      { key: "Statutory Standard", value: "International Ship and Port Facility Security (ISPS) Code compliance" },
    ],
    pillars: [
      {
        title: "Vessel Exclusion Zones",
        desc: "Automatically tracks unauthorized skiffs and boats approaching restricted berths or naval assets.",
        icon: Radar,
      },
      {
        title: "Underwater Diver Detection",
        desc: "Active sonar arrays deployed along piers to detect subsea divers or underwater delivery vehicles.",
        icon: Layers,
      },
      {
        title: "Automated Container Gates",
        desc: "Scans container numbers, truck license plates, and driver biometrics within seconds at port gates.",
        icon: Camera,
      },
      {
        title: "Marine Environmental Housing",
        desc: "Specialized 316L stainless steel hardware built to withstand salt spray, high humidity, and marine storms.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What is the range of the coastal maritime radar?",
        a: "Our coastal surveillance radar can detect commercial cargo ships at 30 nautical miles and small rigid inflatable boats (RIBs) at up to 8 nautical miles.",
      },
      {
        q: "How does the underwater sonar detect divers?",
        a: "Active high-frequency acoustic sonar pulses detect the acoustic reflection of human bodies and scuba gear in the water, calculating range, depth, and trajectory.",
      },
      {
        q: "Are the camera systems protected against saltwater corrosion?",
        a: "Yes. All our maritime cameras and pan-tilt units are forged from Marine Grade 316L stainless steel and coated with specialized anti-corrosion marine paint.",
      },
    ],
  },
  {
    id: "oil-gas",
    slug: "oil-and-gas-refineries",
    title: "Oil & Gas Refineries",
    eyebrow: "Petrochemical Complexes & Cross-Country Pipelines",
    tag: "Oil & Gas",
    icon: Flame,
    heroImage: "/alpha_refinery_security.svg",
    overview:
      "Alpha Matrix secures petrochemical plants, oil refineries, LNG terminals, and vast cross-country pipelines with ATEX-certified explosion-proof cameras, Distributed Acoustic Sensing (DAS), and automated thermal flare/leak detection.",
    metrics: [
      { label: "Pipelines Monitored", value: "3,500+ km" },
      { label: "Safety Rating", value: "ATEX Zone 1/2" },
      { label: "Leak Alert Time", value: "< 3 Seconds" },
      { label: "Anti-Ram Defense", value: "Heavy Rating" },
    ],
    applications: [
      "ATEX and IECEx certified explosion-proof thermal and optical cameras for combustible refinery zones",
      "Fiber-optic pipeline Distributed Acoustic Sensing (DAS) detecting illegal hot-tapping, digging, and leaks",
      "Automated thermal gas and hydrocarbon leak visualization cameras detecting invisible gas plumes",
      "Heavy hydraulic anti-ram crash barriers protecting refinery vehicle gates and tank farm access points",
      "Perimeter fence vibration sensors and microwave barriers surrounding vast refinery sites",
      "Integrated emergency plant evacuation and muster point biometric tracking dashboards",
    ],
    technologies: [
      { key: "Explosion-Proof Certification", value: "ATEX II 2 G Ex db IIC T6 Gb / IECEx Zone 1 and Zone 21" },
      { key: "Pipeline DAS", value: "Real-time acoustic vibration sensing over thousands of kilometers without power along the line" },
      { key: "Optical Gas Imaging (OGI)", value: "Cooled narrow-band 3.2-3.4 µm MWIR thermal cameras for methane/VOC detection" },
      { key: "Perimeter System", value: "Microphonic sensor cables and high-impact crash bollards" },
      { key: "Safety Interoperability", value: "Integration with plant DCS, SCADA, and Emergency Shutdown (ESD) systems" },
    ],
    pillars: [
      {
        title: "ATEX Certified Explosive Safety",
        desc: "Heavy-duty cast housings preventing electrical sparks from igniting volatile hydrocarbon vapors.",
        icon: Flame,
      },
      {
        title: "Pipeline Hot-Tap Defense",
        desc: "Fiber-optic cables along pipelines that detect unauthorized manual digging or welding taps immediately.",
        icon: Layers,
      },
      {
        title: "Thermal Gas Leak Imagery",
        desc: "Visualizes invisible methane and hydrocarbon gas emissions before they reach dangerous flammable concentrations.",
        icon: Eye,
      },
      {
        title: "Emergency Muster Tracking",
        desc: "Real-time biometric headcounts at safe assembly points during hazardous chemical leak alerts.",
        icon: Fingerprint,
      },
    ],
    faqs: [
      {
        q: "What certifications do Alpha Matrix explosion-proof cameras have?",
        a: "Our cameras carry ATEX and IECEx certifications for Zone 1 and Zone 2 explosive gas atmospheres (Ex d IIC T6 Gb) and Zone 21/22 combustible dust environments.",
      },
      {
        q: "How does the pipeline monitoring system detect illegal oil siphoning?",
        a: "Distributed Acoustic Sensing (DAS) turns the fiber optic cable buried alongside the pipeline into thousands of acoustic sensors, detecting vehicle stops, footsteps, and pipe drilling in real time.",
      },
      {
        q: "Can the surveillance platform integrate with our existing refinery DCS/SCADA?",
        a: "Yes. Our systems interface directly with industrial protocols (Modbus, OPC UA) to trigger automatic camera views upon gas sensor or fire alarm trips.",
      },
    ],
  },
  {
    id: "power-plants",
    slug: "power-plants-and-utilities",
    title: "Power Plants & Utilities",
    eyebrow: "Nuclear, Hydroelectric, Thermal & Substation Grids",
    tag: "Energy & Utilities",
    icon: Zap,
    heroImage: "/alpha_critical_infrastructure.svg",
    overview:
      "Alpha Matrix defends electrical generation plants, nuclear energy reactors, hydroelectric dams, and high-voltage transmission substations from physical sabotage, drone attacks, and thermal equipment failures.",
    metrics: [
      { label: "Substations Secured", value: "65+ Grids" },
      { label: "Thermal Delta", value: "± 1°C Precision" },
      { label: "Perimeter Shield", value: "Multi-Layered" },
      { label: "Grid Uptime", value: "99.999%" },
    ],
    applications: [
      "Thermal continuous radiometric monitoring of high-voltage transformers, switchgear, and busbars",
      "Substation perimeter microwave beam barriers and high-tension fence intrusion detection sensors",
      "Counter-UAS anti-drone shields protecting transformer yards from dropped explosive payloads",
      "Hydroelectric dam reservoir optical watercraft tracking and restricted zone alarms",
      "Strict biometric mantrap access control for generator control rooms and grid distribution dispatchers",
      "Cyber-hardened SCADA network security isolating physical cameras from industrial grid controllers",
    ],
    technologies: [
      { key: "Thermal Radiometry", value: "Calibrated thermal sensors measuring temperature anomalies up to 600°C" },
      { key: "High-Voltage Immunity", value: "Fiber-optic non-metallic sensor wiring immune to severe electromagnetic interference (EMI)" },
      { key: "Perimeter Sensors", value: "Digital microwave barriers, microphonic fence cables, laser curtains" },
      { key: "Cybersecurity", value: "NERC CIP compliance, IEC 62443 industrial control system security" },
      { key: "Control System Interface", value: "IEC 61850 substation automation standard interoperability" },
    ],
    pillars: [
      {
        title: "Substation EMI Immunity",
        desc: "All sensor electronics are hardened against intense electromagnetic radiation in 500kV switchyards.",
        icon: Zap,
      },
      {
        title: "Thermal Transformer Monitoring",
        desc: "Continuously tracks transformer bushing and oil temperatures, alerting engineers before catastrophic failure.",
        icon: Eye,
      },
      {
        title: "Perimeter Virtual Shields",
        desc: "Microwave barriers that trigger automated floodlights and sirens when an intruder enters substation grounds.",
        icon: Shield,
      },
      {
        title: "Control Room Airlocks",
        desc: "Biometric dual-auth mantraps protecting central grid dispatch rooms from unauthorized physical entry.",
        icon: Lock,
      },
    ],
    faqs: [
      {
        q: "Are Alpha Matrix sensors affected by high-voltage electromagnetic interference (EMI)?",
        a: "No. Our sensors utilize optical fiber transmission and heavy shielding specifically certified for operation inside high-voltage substations up to 765kV.",
      },
      {
        q: "How does radiometric thermal monitoring prevent power outages?",
        a: "Thermal cameras monitor electrical joints and transformer cooling fins 24/7, detecting microscopic overheating hotspots weeks before a blowout occurs.",
      },
      {
        q: "Do you meet NERC CIP and international critical infrastructure regulations?",
        a: "Yes. Our physical and cyber security architectures fully comply with NERC CIP standards and international critical infrastructure protection mandates.",
      },
    ],
  },
  {
    id: "smart-cities",
    slug: "smart-cities",
    title: "Smart Cities & Urban Safety",
    eyebrow: "Metropolitan Safe City Surveillance Grids",
    tag: "Smart Cities",
    icon: Building2,
    heroImage: "/alpha_surveillance.svg",
    overview:
      "Alpha Matrix deploys metropolitan-scale Safe City networks incorporating city-wide AI video surveillance, automated traffic flow optimization, license plate tracking, emergency public call boxes, and unified municipal command centers.",
    metrics: [
      { label: "Urban Nodes", value: "5,000+ Cameras" },
      { label: "ANPR Accuracy", value: "99.2%" },
      { label: "Dispatch Response", value: "< 2 Minutes" },
      { label: "Crime Reduction", value: "Up to 45%" },
    ],
    applications: [
      "Metropolitan Automated Number Plate Recognition (ANPR / LPR) grids tracking stolen and suspect vehicles",
      "City-wide AI video analytics: crowd stampede alert, illegal street dumping, traffic congestion detection",
      "Integrated emergency SOS panic call boxes with direct two-way video communication to police dispatch",
      "Central municipal Integrated Command and Control Center (ICCC) for police, traffic, and emergency medical services",
      "Smart traffic signal adaptive timing based on real-time vehicle queue camera measurements",
      "Facial recognition algorithms for locating missing persons and high-risk wanted individuals across transit hubs",
    ],
    technologies: [
      { key: "Video Management System", value: "Distributed enterprise VMS scaling to 50,000+ simultaneous IP streams" },
      { key: "AI Engine", value: "Multi-camera cross-tracking, person re-identification (Re-ID), color search" },
      { key: "Storage Architecture", value: "Hierarchical cloud-edge hybrid SAN/NAS storage with automated archiving" },
      { key: "Emergency Integration", value: "Computer-Aided Dispatch (CAD) and GIS municipal mapping" },
      { key: "Public Privacy", value: "Automated video anonymization and cryptographic pixel masking" },
    ],
    pillars: [
      {
        title: "City-Wide Vehicle Tracking",
        desc: "Instantly maps the travel route of a suspect vehicle across hundreds of metropolitan road intersections.",
        icon: Camera,
      },
      {
        title: "Crowd Safety Analytics",
        desc: "Detects sudden running, counter-flow pedestrian movement, and dangerous crowd build-up in public plazas.",
        icon: Eye,
      },
      {
        title: "Unified Police & EMS Hub",
        desc: "A single command floor where traffic police, municipal authorities, and ambulance dispatchers collaborate.",
        icon: Server,
      },
      {
        title: "Interactive SOS Pillars",
        desc: "Public call boxes with 360-degree cameras and panic buttons placed in high-footfall urban centers.",
        icon: Radio,
      },
    ],
    faqs: [
      {
        q: "How does the system protect citizen privacy?",
        a: "Our Safe City platform features dynamic privacy masking, blurring non-involved bystanders' faces and encrypting access logs to ensure video is only viewed during authorized criminal investigations.",
      },
      {
        q: "Can the system find a suspect if they change their clothes?",
        a: "Our advanced person re-identification (Re-ID) neural networks analyze body height, posture, gait, and accessories across multiple camera nodes, even if clothing changes.",
      },
      {
        q: "What bandwidth is required for city-wide video networks?",
        a: "By using intelligent H.265+ encoding and edge AI metadata extraction, we reduce network bandwidth demands by over 70% compared to conventional video grids.",
      },
    ],
  },
  {
    id: "data-centers",
    slug: "data-centers-and-telecom",
    title: "Data Centers & Telecom",
    eyebrow: "Mission-Critical Cloud Infrastructure & Colocation",
    tag: "Data Centers",
    icon: Server,
    heroImage: "/alpha_command_center.svg",
    overview:
      "Alpha Matrix engineers multi-tiered physical and cyber-physical security frameworks for Tier III and Tier IV data centers, telecommunications switching hubs, and submarine cable landing stations.",
    metrics: [
      { label: "Server Racks Secured", value: "25,000+" },
      { label: "Uptime Rating", value: "Tier IV Spec" },
      { label: "Biometric Airlocks", value: "Multi-Factor" },
      { label: "Anti-Tailgate", value: "Laser Curtains" },
    ],
    applications: [
      "Biometric mantrap airlocks with weight-sensor floor mats and laser curtains preventing tailgating",
      "Smart biometric and RFID server rack door locks with continuous open/close logging and temperature sensors",
      "AI thermal cameras monitoring server aisle hot-spots, cold-aisle containment, and power distribution units",
      "Perimeter intrusion detection around data center campuses with anti-ram hydraulic road blockers",
      "Air-gapped electronic key management cabinets with single-use digital authorization tokens",
      "Unified Physical Security Information Management (PSIM) correlating BMS, fire, and access alarms",
    ],
    technologies: [
      { key: "Data Center Tiering", value: "Uptime Institute Tier III & Tier IV physical security compliance" },
      { key: "Biometric Modality", value: "Contactless 3D facial verification + dual-iris authentication" },
      { key: "Rack Locking", value: "Electronic swinghandles with encrypted RS-485 / IP connectivity" },
      { key: "Environmental Security", value: "Very Early Smoke Detection Apparatus (VESDA) and thermal video alerts" },
      { key: "Compliance Standards", value: "SOC 2 Type II, ISO 27001, PCI-DSS physical security alignment" },
    ],
    pillars: [
      {
        title: "Multi-Zone Mantrap Portals",
        desc: "Anti-tailgating airlock chambers where an individual must verify identity, step on weight scales, and clear laser curtains.",
        icon: Lock,
      },
      {
        title: "Individual Rack Governance",
        desc: "Ensures third-party technicians can only unlock their specifically leased server rack, logging every second of access.",
        icon: Server,
      },
      {
        title: "Thermal Aisle Profiling",
        desc: "Thermal imaging monitoring hot/cold aisle temperatures to detect HVAC cooling failures before server throttling.",
        icon: Eye,
      },
      {
        title: "Auditing & Compliance Reports",
        desc: "Instant one-click compliance export logs for SOC 2, ISO 27001, and financial data sovereignty audits.",
        icon: FileCheck,
      },
    ],
    faqs: [
      {
        q: "How do your mantrap airlocks prevent multiple people from entering on one badge?",
        a: "Our mantraps combine 3D stereoscopic overhead vision, volumetric laser curtains, and calibrated weight sensors in the floor to detect if more than one person is present.",
      },
      {
        q: "Can server rack access be scheduled for specific maintenance windows?",
        a: "Yes. System administrators can grant temporary time-bound access windows to specific racks, automatically locking the rack once the maintenance duration expires.",
      },
      {
        q: "What standards are supported for data center physical security audits?",
        a: "Our platforms meet the stringent physical access requirements of SOC 2 Type II, ISO/IEC 27001, HIPAA, and PCI-DSS Level 1.",
      },
    ],
  },
  {
    id: "critical-infra",
    slug: "critical-infrastructure",
    title: "Critical Infrastructure",
    eyebrow: "Water Reservoirs, Financial Reserves & Bridges",
    tag: "National Assets",
    icon: Network,
    heroImage: "/alpha_critical_infrastructure.svg",
    overview:
      "Alpha Matrix safeguards high-value national assets including water treatment plants, central bank cash vaults, telecommunications backbones, and strategic bridge crossings from sabotage, terrorism, and unauthorized access.",
    metrics: [
      { label: "National Assets", value: "120+ Sites" },
      { label: "Layered Defense", value: "5-Tier System" },
      { label: "Vault Security", value: "Class 3 Spec" },
      { label: "Sensor Longevity", value: "10+ Years" },
    ],
    applications: [
      "Water reservoir perimeter radar and acoustic water-surface intrusion detection preventing chemical sabotage",
      "Central bank vault biometric mantraps with time-lock delays and seismic vibration sensors",
      "Strategic suspension bridge and tunnel structural health and vehicular AI surveillance monitoring",
      "Remote telecommunications tower solar-powered security kits with satellite alarm transmission",
      "Underground utility tunnel intrusion detection using fiber-optic acoustic sensing lines",
      "Unified National Critical Infrastructure Protection Command dashboard with instant military alert uplinks",
    ],
    technologies: [
      { key: "Vault Standards", value: "UL 608 Class 1 to 3 bank vault security, seismic vibration sensors" },
      { key: "Water Security", value: "Water-surface Doppler radar, thermal PTZ cameras, water-quality telemetry" },
      { key: "Structural AI", value: "Bridge vibration sensors, overweight vehicle detection, ANPR cameras" },
      { key: "Remote Outposts", value: "Solar/battery powered standalone nodes with satellite and LoRaWAN fallback" },
      { key: "Encryption Model", value: "Hardware data diodes and quantum-safe cryptographic network links" },
    ],
    pillars: [
      {
        title: "Water Reservoir Radar",
        desc: "Scans open water surfaces to detect suspicious boats or swimmers approaching water intake towers.",
        icon: Radar,
      },
      {
        title: "Bank Vault Seismic Sensors",
        desc: "Detects explosive drilling, diamond coring, or jackhammers attempting to breach reinforced concrete walls.",
        icon: Shield,
      },
      {
        title: "Bridge & Tunnel Monitoring",
        desc: "Combines vehicular weight-in-motion sensors, ANPR cameras, and fire detection across strategic transit crossings.",
        icon: Camera,
      },
      {
        title: "Remote Outpost Telemetry",
        desc: "Secures unattended telecommunications repeaters and water pumps across vast uninhabited regions.",
        icon: Radio,
      },
    ],
    faqs: [
      {
        q: "How does the system prevent chemical tampering in water reservoirs?",
        a: "We combine multi-kilometer water-surface radars with long-range thermal PTZ tracking, immediately detecting boats or swimmers before they can reach critical water intake valves.",
      },
      {
        q: "What triggers a bank vault seismic alarm?",
        a: "Seismic sensors detect the unique high-frequency vibrations produced by diamond drill bits, hydraulic cutters, or explosives, ignoring ambient city traffic vibrations.",
      },
      {
        q: "Can remote telecommunications towers be monitored without fiber connectivity?",
        a: "Yes. We deploy standalone solar-powered camera nodes equipped with satellite communication links and edge AI that only transmit high-priority alert packets.",
      },
    ],
  },
  {
    id: "transportation",
    slug: "transportation-and-rail",
    title: "Transportation & Rail",
    eyebrow: "Railways, Transit Stations & Freight Terminals",
    tag: "Transit & Rail",
    icon: Building,
    heroImage: "/alpha_about_facility.svg",
    overview:
      "Alpha Matrix delivers specialized railway track obstruction detection, high-throughput passenger turnstiles, freight yard container tracking, and train pantograph thermal safety cameras.",
    metrics: [
      { label: "Rail Networks", value: "1,800+ km" },
      { label: "Station Throughput", value: "60 Pax / Min" },
      { label: "Track Alerts", value: "< 2 Seconds" },
      { label: "Safety Rating", value: "SIL 2 / SIL 4" },
    ],
    applications: [
      "Railway track intrusion detection systems detecting fallen debris, rockslides, or humans on tracks",
      "High-throughput station turnstiles with QR, contactless NFC, and facial recognition ticketing",
      "Train pantograph and overhead catenary continuous thermal monitoring to prevent wire snaps",
      "Freight yard container inventory tracking and automated rail wagon wheel flat-spot detection",
      "Subway platform edge laser light curtains alerting station masters to passengers falling onto tracks",
      "Transit Police Integrated Command Center displaying live onboard train video and station feeds",
    ],
    technologies: [
      { key: "Track Sensor Tech", value: "Distributed Acoustic Sensing (DAS) fiber lines and track-facing AI cameras" },
      { key: "Thermal Pantograph", value: "High-speed line-scan thermal cameras recording catenary temperatures up to 300 km/h" },
      { key: "Station Turnstiles", value: "High-speed optical flap barriers with 60 passengers per minute capacity" },
      { key: "Platform Safety", value: "Laser Time-of-Flight (ToF) curtains with immediate train braking signal interlocks" },
      { key: "Transit Standards", value: "EN 50121, EN 50155 railway electronic equipment certification" },
    ],
    pillars: [
      {
        title: "Track Obstruction AI",
        desc: "Detects vehicles stuck on railroad crossings or rocks on tracks, automatically signaling approaching trains.",
        icon: Camera,
      },
      {
        title: "High-Speed Pantograph Thermal",
        desc: "Scans train pantographs as they pass at full speed, flagging mechanical friction and electrical arcing.",
        icon: Eye,
      },
      {
        title: "Platform Fall Prevention",
        desc: "Laser beams along station platforms that detect fallen objects or passengers, pausing train departure.",
        icon: Shield,
      },
      {
        title: "Rapid Transit Turnstiles",
        desc: "Facilitates swift pedestrian passage during rush hour while preventing tailgating and fare evasion.",
        icon: Fingerprint,
      },
    ],
    faqs: [
      {
        q: "How does the track obstruction system notify the train driver?",
        a: "When an obstacle is detected on the track or level crossing, the system directly triggers an automatic signal stop and transmits an alert to the locomotive cab and central signaling dispatch.",
      },
      {
        q: "Can the high-speed thermal cameras inspect trains moving at 250+ km/h?",
        a: "Yes. Our high-frequency industrial thermal sensors capture thousands of frames per second, measuring exact pantograph and wheel bearing temperatures without motion blur.",
      },
      {
        q: "What certifications apply to Alpha Matrix railway security hardware?",
        a: "All railway equipment is certified to EN 50155 (Railway applications - Electronic equipment on rolling stock) and EN 50121 (Electromagnetic compatibility).",
      },
    ],
  },
  {
    id: "defense-mfg",
    slug: "defense-manufacturing",
    title: "Defense Manufacturing",
    eyebrow: "Munitions Plants, Aerospace R&D & Heavy Industry",
    tag: "Defense Mfg",
    icon: Wrench,
    heroImage: "/alpha_about_facility.svg",
    overview:
      "Alpha Matrix secures munitions production facilities, aerospace defense R&D compounds, and military heavy engineering plants with classified cleanroom access controls, intellectual property safeguards, and perimeter shielding.",
    metrics: [
      { label: "Plants Secured", value: "22 Facilities" },
      { label: "Classified Zones", value: "Top Secret" },
      { label: "IP Protection", value: "Hardware Airgap" },
      { label: "Hazard Safety", value: "ATEX Compliant" },
    ],
    applications: [
      "Classified R&D cleanroom biometric airlocks with continuous tailgating and mobile phone detector sensors",
      "Factory floor industrial safety video analytics: forklift collision warning, worker PPE compliance",
      "Explosion-proof ATEX cameras and spark detectors inside ammunition assembly and propellent mixing suites",
      "Heavy perimeter taut-wire fences, microwave beams, and hydraulic road blockers around the facility",
      "Cryptographic data loss prevention (DLP) and hardware data diodes protecting defense CAD blueprints",
      "Supply chain component traceability and incoming cargo X-ray pallet scanning integration",
    ],
    technologies: [
      { key: "Classified Access", value: "Multi-factor authentication (Iris + 3D Face + Smart Token) with mantrap airlocks" },
      { key: "Hazard Standards", value: "ATEX Zone 1/21 explosion-proof and electro-static discharge (ESD) safe hardware" },
      { key: "Safety Analytics", value: "AI worker PPE detection (Hardhat, High-vis vest, Safety goggles), restricted zone entry" },
      { key: "IP Defense", value: "Hardware USB port blockers, optical data diodes, air-gapped engineering networks" },
      { key: "Perimeter Rating", value: "PAS 68 M50 crash-rated bollards and anti-climb welded mesh fencing" },
    ],
    pillars: [
      {
        title: "Cleanroom R&D Airlocks",
        desc: "Mantraps that enforce biometric identity and detect unauthorized wireless transmitters or cameras.",
        icon: Lock,
      },
      {
        title: "Explosion-Proof Munitions Tech",
        desc: "Certified ATEX cameras and flame detectors that safely monitor high-hazard artillery and missile assembly.",
        icon: Flame,
      },
      {
        title: "Industrial Safety AI",
        desc: "Computer vision detecting worker proximity to heavy robotic arms and ensuring safety helmet compliance.",
        icon: Eye,
      },
      {
        title: "Blueprint Cyber Protection",
        desc: "Prevents exfiltration of sensitive military aerospace CAD models through hardware-enforced data diodes.",
        icon: Network,
      },
    ],
    faqs: [
      {
        q: "How are classified design laboratories protected from electronic eavesdropping?",
        a: "We integrate physical biometric mantraps with RF signal detectors and acoustic dampening barriers, ensuring zero unauthorized recording devices enter sensitive R&D labs.",
      },
      {
        q: "Can the video analytics ensure worker safety around heavy machinery?",
        a: "Yes. Our AI models establish virtual exclusion zones around robotic machinery and forklifts, automatically cutting machine power if a technician steps into danger.",
      },
      {
        q: "What security measures are in place for ammunition storage bunkers?",
        a: "Ammunition bunkers feature seismic ground intrusion sensors, explosion-proof ATEX thermal cameras, and dual-custody biometric locks.",
      },
    ],
  },
];

export function getAlphaIndustryBySlug(slug) {
  if (!slug) return null;
  return ALPHA_INDUSTRIES.find((i) => i.slug === slug || i.id === slug);
}
