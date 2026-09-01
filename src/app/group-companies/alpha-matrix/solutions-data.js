// Comprehensive Solutions Dataset for Alpha Matrix Defence Systems
import {
  Camera,
  Landmark,
  Server,
  Fingerprint,
  Shield,
  Network,
  Cpu,
  Radar,
  Eye,
  Radio,
  Lock,
  Zap,
  Activity,
  CheckCircle2,
  ScanFace,
  Satellite,
  ShieldCheck,
  Building2,
  MapPin,
  Layers,
  FileCheck,
} from "lucide-react";

export const ALPHA_SOLUTIONS = [
  {
    id: "surveillance",
    slug: "surveillance-systems",
    title: "Surveillance Systems",
    eyebrow: "AI-Powered Optical & Thermal Vision",
    tag: "Surveillance",
    icon: Camera,
    heroImage: "/alpha_surveillance.svg",
    overview:
      "Alpha Matrix engineers mission-critical optical and thermal surveillance architectures equipped with edge AI video analytics. Our multi-spectral cameras, automated target recognition, and deep-learning video telemetry provide uninterrupted 24/7 situational awareness across military perimeters, high-threat borders, and urban centers.",
    metrics: [
      { label: "Optical Zoom", value: "86x Ultra" },
      { label: "Thermal Range", value: "Up to 15km" },
      { label: "AI Latency", value: "< 25ms Edge" },
      { label: "System Uptime", value: "99.99%" },
    ],
    capabilities: [
      "Real-time deep learning facial recognition & automated license plate recognition (ANPR / LPR)",
      "Cooled & uncooled multi-spectral thermal infrared cameras for zero-light target detection",
      "Autonomous Pan-Tilt-Zoom (PTZ) radar-slaved target tracking and continuous coordinate lock",
      "Behavioral anomaly classification (crowd surge, perimeter breach, loitering, abandoned object)",
      "Edge-processed neural video networks reducing bandwidth consumption by up to 80%",
      "Ruggedized military-spec IP68 / NEMA 4X all-weather housing with automated defogging wipers",
    ],
    technicalSpecs: [
      { key: "Sensor Resolution", value: "4K UHD Optical / 640x512 to 1280x1024 High-Res Thermal" },
      { key: "Thermal Sensitivity (NETD)", value: "≤ 30mK @ f/1.0 for ultra-subtle temperature differentials" },
      { key: "Video Analytics Engine", value: "Convolutional Neural Networks (CNN) with TensorRT edge acceleration" },
      { key: "Video Encoding & Streams", value: "H.265+ / H.264 High Profile, ONVIF Profile S/G/T/M compliance" },
      { key: "Integration Protocols", value: "RTSP, RESTful API, C4ISR SDK, Mil-STD-810H environmental rating" },
    ],
    pillars: [
      {
        title: "Multi-Spectral Sensor Fusion",
        desc: "Simultaneous overlay of high-resolution optical video and thermal heat signatures for target acquisition in dense fog, smoke, or total darkness.",
        icon: Eye,
      },
      {
        title: "Edge AI Video Analytics",
        desc: "On-camera neural processing units that filter out environmental noise (wind, rain, animals) to achieve near-zero false alarm rates.",
        icon: Cpu,
      },
      {
        title: "Radar & Geo-Slaving Lock",
        desc: "Seamless handoff between ground radar track coordinates and ultra long-range PTZ turrets for automated visual verification.",
        icon: Radar,
      },
      {
        title: "Tactical Redundant Uplinks",
        desc: "Encrypted wireless mesh, fiber-optic backbone, and satellite communications guaranteeing real-time low-latency video feed delivery.",
        icon: Radio,
      },
    ],
    workflow: [
      { step: "01", title: "Optical Reconnaissance", desc: "Continuous 360-degree high-definition sensor scanning of the tactical area." },
      { step: "02", title: "Edge Threat Detection", desc: "Embedded neural networks detect, classify, and verify target intrusion instantly." },
      { step: "03", title: "Automated Tracking", desc: "PTZ camera locks onto the target trajectory, updating live GPS coordinates." },
      { step: "04", title: "Command Dispatch", desc: "Real-time HD video feed and telemetry forwarded to tactical command centers." },
    ],
    faqs: [
      {
        q: "What is the detection distance of Alpha Matrix long-range surveillance cameras?",
        a: "Our long-range thermal and electro-optical multi-sensor turrets can detect human targets at distances exceeding 8km and motorized vehicles up to 15km in complete darkness or harsh weather.",
      },
      {
        q: "How does edge AI reduce false alarms in outdoor security?",
        a: "Our deep learning models are trained on hundreds of thousands of defense-grade threat scenarios, distinguishing real intruders from trees swaying, shadows, rain, or wildlife.",
      },
      {
        q: "Can the system operate in remote areas without grid power?",
        a: "Yes. We deploy standalone off-grid tactical surveillance outposts powered by solar photovoltaic arrays, wind micro-turbines, and long-life lithium battery banks.",
      },
    ],
  },
  {
    id: "border-security",
    slug: "border-security",
    title: "Border Security",
    eyebrow: "Frontier & Coastal Multi-Layer Defense",
    tag: "Border Defense",
    icon: Landmark,
    heroImage: "/alpha_border_security.svg",
    overview:
      "Alpha Matrix delivers integrated frontier defense platforms uniting ground surveillance radar grids, buried fiber-optic seismic sensors, electro-optical long-range observation towers, and tactical drone patrols to enforce sovereign border integrity.",
    metrics: [
      { label: "Radar Grid Coverage", value: "40km / Node" },
      { label: "Vibration Precision", value: "± 2.5m Sensor" },
      { label: "Reaction Time", value: "< 5 Seconds" },
      { label: "Frontier Integrity", value: "100% Monitored" },
    ],
    capabilities: [
      "High-frequency ground surveillance radar (GSR) with automated micro-Doppler human walking detection",
      "Distributed Acoustic Sensing (DAS) fiber-optic cable detecting walking, crawling, and tunneling",
      "Autonomous tactical UAV drone docks programmed for perimeter patrol and intercept sorties",
      "Maritime coastal surveillance radars integrated with Automatic Identification System (AIS)",
      "Solar and hybrid-powered standalone remote border sensor masts with satellite uplinks",
      "Interoperable tactical dispatch routing live threat coordinates to border patrol units",
    ],
    technicalSpecs: [
      { key: "Radar Frequency Band", value: "Ku-Band / X-Band Electronic Scanning Active Phased Array" },
      { key: "Fiber Sensing Range", value: "Up to 50km per interrogator unit with 1m spatial resolution" },
      { key: "Detection Classification", value: "Pedestrian, vehicle, low-flying drone, maritime vessel, digging/tunneling" },
      { key: "Tactical Data Links", value: "Encrypted UHF/VHF, Satellite (SATCOM), 4G/5G Private Tactical Mesh" },
      { key: "Operating Temperature", value: "-40°C to +65°C, IP67 military sand and moisture resistance" },
    ],
    pillars: [
      {
        title: "Active Radar Grid Matrix",
        desc: "Covers vast open terrains, sand dunes, and mountainous ridges, automatically tracking multiple simultaneous moving targets.",
        icon: Radar,
      },
      {
        title: "Subsurface Seismic Detection",
        desc: "Buried fiber cables that measure minute acoustic shockwaves in the soil caused by footsteps, vehicle movement, or tunneling.",
        icon: Layers,
      },
      {
        title: "Autonomous Drone Intercept",
        desc: "Docking stations that automatically deploy tactical quadcopters to inspect alarm coordinates within seconds of breach.",
        icon: Radio,
      },
      {
        title: "Unified Common Operating Picture",
        desc: "Aggregates all radar tracks, optical video, and fence alarms into a single geospatial 3D map for rapid commander decisions.",
        icon: MapPin,
      },
    ],
    workflow: [
      { step: "01", title: "Early Radar Acquisition", desc: "Target detected at long range by Ku-band phased array radar grid." },
      { step: "02", title: "Optical Verification", desc: "Long-range thermal turret auto-slews to target coordinate for visual confirmation." },
      { step: "03", title: "Ground Sensor Correlation", desc: "Subsurface fiber-optic sensors correlate intrusion path and speed." },
      { step: "04", title: "Intercept Deployment", desc: "Autonomous drone or patrol unit dispatched to exact GPS intercept vector." },
    ],
    faqs: [
      {
        q: "How does the border radar differentiate between people and animals?",
        a: "Advanced micro-Doppler signal processing analyzes the kinetic movement signatures of walking humans versus quadrupeds, filtering out wildlife reliably.",
      },
      {
        q: "Can buried fiber-optic cables detect underground tunneling?",
        a: "Yes. Distributed Acoustic Sensing (DAS) monitors seismic ground frequencies, detecting subterranean digging, drilling, and underground movement with high spatial precision.",
      },
      {
        q: "What happens if communication cables are severed?",
        a: "Each border sensor node features redundant satellite fallbacks and localized recording buffers to preserve operational telemetry without data loss.",
      },
    ],
  },
  {
    id: "command-control",
    slug: "command-and-control-centers",
    title: "Command & Control Centers",
    eyebrow: "C4ISR Situational Awareness Platforms",
    tag: "C4ISR Hub",
    icon: Server,
    heroImage: "/alpha_command_center.svg",
    overview:
      "Alpha Matrix designs and integrates state-of-the-art C4ISR (Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance) centers. We unify hundreds of video feeds, sensor telemetry, geospatial mapping, and tactical communications into an interactive operational dashboard.",
    metrics: [
      { label: "Display Scaling", value: "8K Video Walls" },
      { label: "Sensor Capacity", value: "10,000+ Nodes" },
      { label: "Failover Speed", value: "Zero Downtime" },
      { label: "Security Protocol", value: "Zero-Trust Encrypted" },
    ],
    capabilities: [
      "Ultra-high-definition interactive video wall management with multi-window dynamic layout switching",
      "Geographic Information System (GIS) 3D tactical map displaying live assets, units, and alerts",
      "Automated standard operating procedure (SOP) workflow engines for incident crisis management",
      "Unified mission audio console: interoperable digital radio, satellite phones, and VoIP communication",
      "Comprehensive telemetry data recording, incident audit trails, and post-mission forensic analysis",
      "Resilient air-gapped server infrastructure with redundant hot-standby clustering",
    ],
    technicalSpecs: [
      { key: "Video Wall Engine", value: "Hardware FPGA video matrix processors with sub-frame 0ms latency" },
      { key: "C4ISR Middleware", value: "Open-architecture microservices compliant with STANAG 4586 / MIL-STD" },
      { key: "Network Security", value: "Dual air-gapped architecture with hardware data diodes (unidirectional flow)" },
      { key: "Database Resiliency", value: "Distributed time-series database with automated real-time geo-replication" },
      { key: "Operator Ergonomics", value: "24/7 ISO 11064 compliant mission-critical command console furniture" },
    ],
    pillars: [
      {
        title: "Dynamic Visual Matrix",
        desc: "Displays real-time video, thermal telemetry, satellite imagery, and radar plots across large multi-screen command displays seamlessly.",
        icon: Server,
      },
      {
        title: "Geospatial Common Picture",
        desc: "3D GIS tactical map synchronizing all stationary sensors and mobile forces into a single synchronized operational view.",
        icon: MapPin,
      },
      {
        title: "Incident Escalation Engines",
        desc: "Automated standard operating procedure guidance that leads operators through step-by-step crisis containment protocols.",
        icon: FileCheck,
      },
      {
        title: "Resilient Defense Architecture",
        desc: "Hardened infrastructure designed to withstand cyber disruption, power outages, and electronic warfare attacks.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      { step: "01", title: "Telemetry Ingestion", desc: "Sensors, cameras, and radars feed high-speed data into the central C4ISR engine." },
      { step: "02", title: "Correlation & AI Synthesis", desc: "Automated algorithms correlate multiple data streams to identify genuine threats." },
      { step: "03", title: "Tactical Visualization", desc: "Threat vector displayed prominently on operator dashboards and video walls." },
      { step: "04", title: "Coordinated Response", desc: "One-touch mission dispatch coordinates field security teams and first responders." },
    ],
    faqs: [
      {
        q: "What standards do Alpha Matrix command centers adhere to?",
        a: "Our command and control centers comply with ISO 11064 (Ergonomic design of control centers) and international military C4ISR interoperability protocols.",
      },
      {
        q: "Can third-party cameras and legacy sensors be integrated?",
        a: "Yes. Our open-architecture middleware integrates legacy analog/IP cameras, access control databases, fire alarms, and military tactical data links.",
      },
      {
        q: "How does the system ensure uninterrupted 24/7 uptime?",
        a: "We utilize dual redundant server clusters, hot-swappable power supplies, industrial UPS battery systems, and automated real-time database replication.",
      },
    ],
  },
  {
    id: "access-control",
    slug: "access-control",
    title: "Access Control",
    eyebrow: "Biometric Identity & Facility Perimeter Control",
    tag: "Access Defense",
    icon: Fingerprint,
    heroImage: "/alpha_access_control.svg",
    overview:
      "Alpha Matrix provides high-security identity management and physical access control systems for defense ministries, government data centers, airports, and restricted military compounds. We deploy multi-modal biometric authentication, smart mantrap airlocks, and automated vehicle inspection.",
    metrics: [
      { label: "Auth Speed", value: "< 0.2 Seconds" },
      { label: "False Match Rate", value: "< 0.0001%" },
      { label: "Scalability", value: "100,000+ Users" },
      { label: "Anti-Spoofing", value: "3D Liveness" },
    ],
    capabilities: [
      "Multi-modal biometric terminals: contactless 3D facial recognition, iris recognition, and palm vein scanning",
      "Anti-tailgating smart speed gates with optical light curtain detection and motorized glass barriers",
      "Automated Under-Vehicle Inspection Systems (UVIS) with AI threat scanning and license plate logging",
      "High-security encrypted PKI smart cards, mobile NFC/BLE credentials, and visitor management kiosks",
      "Mantrap airlocks with interlocked doors for critical server vaults and weapons storage armories",
      "Instant global credential revocation and emergency lockdown trigger with single-keystroke activation",
    ],
    technicalSpecs: [
      { key: "Biometric Algorithms", value: "NIST-ranked deep learning facial recognition with active 3D liveness detection" },
      { key: "Card Reader Standards", value: "OSDP v2.2 with Secure Channel Protocol (SCP), MIFARE DESFire EV3" },
      { key: "Barrier Rating", value: "High-throughput optical turnstiles rated for > 5 million open/close cycles" },
      { key: "Vehicle Scanner", value: "Color area scan camera up to 4K resolution at vehicle speeds up to 60 km/h" },
      { key: "Database Security", value: "AES-256 encrypted biometric template storage, GDPR/privacy compliant hashing" },
    ],
    pillars: [
      {
        title: "Multi-Modal Biometrics",
        desc: "Combines 3D facial geometry, iris scans, and fingerprints to prevent spoofing with 3D silicon masks or photograph prints.",
        icon: ScanFace,
      },
      {
        title: "Mantrap Vault Interlocks",
        desc: "Hardware-enforced double-door airlocks ensuring the second door cannot unlock until the first is secured and identity confirmed.",
        icon: Lock,
      },
      {
        title: "AI Vehicle Undercarriage Scanning",
        desc: "High-speed optical scanners that generate a high-definition composite image of vehicle undersides, flagging foreign objects or explosives.",
        icon: Camera,
      },
      {
        title: "Centralized Identity Governance",
        desc: "Synchronizes physical badge permissions with enterprise Active Directory and defense clearance authorization levels.",
        icon: Fingerprint,
      },
    ],
    workflow: [
      { step: "01", title: "Contactless Approach", desc: "User approaches turnstile; 3D camera verifies live face within 2 meters." },
      { step: "02", title: "Liveness & Privilege Check", desc: "Neural network confirms biological liveness and checks security clearance." },
      { step: "03", title: "Tailgate Detection", desc: "Optical sensor curtain confirms single-person entry before opening gate." },
      { step: "04", title: "Audit Trail Logging", desc: "Entry timestamp and photo verification recorded in secure C4ISR database." },
    ],
    faqs: [
      {
        q: "Can photos or video screens fool the biometric facial recognition?",
        a: "No. Our systems employ dual-lens RGB + IR cameras with 3D structured light to verify skin texture, depth contours, and micro-movements, neutralizing spoofing attempts.",
      },
      {
        q: "How does the Under-Vehicle Inspection System (UVIS) detect threats?",
        a: "The UVIS system captures an ultra-high-resolution scan of the vehicle chassis and uses AI to compare it against a clean baseline model, highlighting anomalies like contraband or explosives.",
      },
      {
        q: "What happens during a facility emergency or fire alarm?",
        a: "All turnstiles and perimeter doors automatically fail-safe to open for rapid emergency evacuation while logging the event for accountability.",
      },
    ],
  },
  {
    id: "perimeter-protection",
    slug: "perimeter-protection",
    title: "Perimeter Protection",
    eyebrow: "Electronic & Physical Anti-Intrusion Barriers",
    tag: "Physical Defense",
    icon: Shield,
    heroImage: "/alpha_critical_infrastructure.svg",
    overview:
      "Alpha Matrix designs and deploys physical and electronic perimeter security barriers that detect, delay, and neutralize intrusions before attackers reach critical facility assets. We integrate smart fence sensors, microwave barriers, crash-rated bollards, and anti-drone airspace shields.",
    metrics: [
      { label: "Intrusion Delay", value: "Certified Stop" },
      { label: "Crash Rating", value: "M50 / K12" },
      { label: "False Alarms", value: "< 1 per Year" },
      { label: "Fence Coverage", value: "Multi-Kilometer" },
    ],
    capabilities: [
      "Taut-wire and microphonic sensor cables detecting fence climbing, cutting, or lifting",
      "Invisible active microwave and infrared beam barriers creating multi-tier virtual perimeters",
      "Hydraulic anti-ram road blockers and crash-rated automatic bollards (ASTM F2656 / PAS 68)",
      "Integrated drone detection sensors and Radio Frequency (RF) tactical anti-UAS jammers",
      "Automated target illumination floodlights and directional acoustic deterrent sirens",
      "Rapid integration with central surveillance cameras for immediate visual alarm verification",
    ],
    technicalSpecs: [
      { key: "Fence Sensor Technology", value: "Piezoelectric microphonic sensor cables and fiber-optic interferometry" },
      { key: "Microwave Barrier Range", value: "Up to 500m per link with digital signal processing (DSP)" },
      { key: "Bollard Impact Resistance", value: "7,500 kg truck impact at 80 km/h with zero vehicle penetration (M50/P1)" },
      { key: "Counter-UAS Capabilities", value: "Multi-band drone RF detection (433MHz to 5.8GHz) with directional jamming" },
      { key: "Environmental Protection", value: "IP66 / NEMA 4X all-weather waterproof and corrosion-proof construction" },
    ],
    pillars: [
      {
        title: "Vibration Fence Electronics",
        desc: "Sensors along chainlink or weldmesh fences that detect mechanical vibrations from cutting tools or climbing weight.",
        icon: Shield,
      },
      {
        title: "Invisible Microwave Curtains",
        desc: "Creates an electromagnetic detection volumetric zone that cannot be bypassed by crawling or jumping.",
        icon: Zap,
      },
      {
        title: "High-Impact Hydraulic Bollards",
        desc: "Heavy-duty steel bollards engineered to stop heavy commercial vehicles attempting hostile ramming attacks.",
        icon: Lock,
      },
      {
        title: "Counter-Drone Airspace Shield",
        desc: "Monitors airspace above the facility, detecting unauthorized drones and disrupting command telemetry safely.",
        icon: Radio,
      },
    ],
    workflow: [
      { step: "01", title: "Physical Contact Detection", desc: "Intruder attempts to cut or scale fence; microphonic sensors activate." },
      { step: "02", title: "PTZ Slew-to-Cue", desc: "Thermal camera automatically pivots to the exact fence zone." },
      { step: "03", title: "Deterrent Trigger", desc: "High-intensity strobe lights and audible tactical warning sirens fire." },
      { step: "04", title: "Barrier Enforcement", desc: "Automatic hydraulic gates lock down; rapid response force mobilized." },
    ],
    faqs: [
      {
        q: "What crash rating do your road blockers and bollards provide?",
        a: "Our hydraulic blockers and bollards are certified to ASTM F2656 M50 / PAS 68 standards, capable of stopping a 7.5-ton truck traveling at 80 km/h with zero chassis penetration.",
      },
      {
        q: "Can the fence sensors operate during heavy storms and wind?",
        a: "Yes. Advanced digital signal processors (DSP) continuously adapt to ambient environmental noise, filtering out rain, wind gusts, and passing traffic.",
      },
      {
        q: "How does the anti-drone protection system work?",
        a: "Our RF scanners detect drone control and video frequencies, tracking the drone's position and, if authorized, jamming the RF control link to force safe landing.",
      },
    ],
  },
  {
    id: "cyber-defense",
    slug: "cyber-defense",
    title: "Cyber Defense",
    eyebrow: "Zero-Trust Infrastructure & Tactical Encryption",
    tag: "Cyber Resilience",
    icon: Network,
    heroImage: "/alpha_cyber_defense.svg",
    overview:
      "Alpha Matrix defends critical electronic security networks, telemetry pipelines, and command centers against nation-state cyber warfare, malware infiltration, and unauthorized data interception. We implement hardware data diodes, zero-trust architectures, and end-to-end military encryption.",
    metrics: [
      { label: "Encryption Grade", value: "AES-256 Military" },
      { label: "Network Model", value: "Zero-Trust" },
      { label: "Threat Hunting", value: "24/7 AI-SOC" },
      { label: "Data Diode", value: "Hardware Air-Gap" },
    ],
    capabilities: [
      "Hardware-enforced unidirectional data diodes preventing incoming cyber intrusions",
      "End-to-end 256-bit AES cryptographic encryption for all IP video, sensor telemetry, and audio feeds",
      "24/7 Security Operations Center (SOC) threat intelligence and automated incident mitigation",
      "Air-gapped tactical defense server architectures with zero public internet exposure",
      "Vulnerability assessment, penetration testing, and SCADA / industrial ICS network hardening",
      "Strict role-based access control (RBAC) with cryptographic hardware security keys (FIPS 140-2)",
    ],
    technicalSpecs: [
      { key: "Encryption Standard", value: "AES-256-GCM, RSA-4096, TLS 1.3 for all in-transit and at-rest data" },
      { key: "Hardware Data Diodes", value: "Photodiode-based physical optical one-way data transfer with 10Gbps throughput" },
      { key: "SIEM & AI Detection", value: "Behavioral heuristic anomaly detection with automated MITRE ATT&CK mapping" },
      { key: "Security Compliance", value: "NIST SP 800-53, ISO 27001, IEC 62443 (Industrial Cybersecurity standard)" },
      { key: "Hardware Security Modules", value: "FIPS 140-2 Level 3 certified cryptographic key management" },
    ],
    pillars: [
      {
        title: "Hardware Data Diodes",
        desc: "Physical light-emitting diodes that allow data to only flow outwards, making it physically impossible for external cyber attackers to inject commands.",
        icon: Lock,
      },
      {
        title: "End-to-End Cryptography",
        desc: "Ensures that even if physical fiber lines are tapped, video and sensor data remains indecipherable without quantum-safe decryption keys.",
        icon: Network,
      },
      {
        title: "SCADA & ICS Hardening",
        desc: "Defends critical facility PLC controllers, electrical switches, and camera firmware from malware and malicious firmware flashing.",
        icon: Cpu,
      },
      {
        title: "24/7 AI Threat Hunting",
        desc: "Continuous neural network surveillance across all network packets, flagging suspicious lateral movements and privilege escalation attempts.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      { step: "01", title: "Continuous Packet Inspection", desc: "Network sensors monitor all sensor and video telemetry in real time." },
      { step: "02", title: "Anomaly Detection", desc: "AI heuristics flag unauthorized connection requests or abnormal packet floods." },
      { step: "03", title: "Automated Quarantine", desc: "Compromised ports or devices are severed from the core network in under 10ms." },
      { step: "04", title: "Forensic Audit Log", desc: "Incident telemetry encrypted and archived for digital forensic reporting." },
    ],
    faqs: [
      {
        q: "What is a hardware data diode and why is it superior to firewalls?",
        a: "A data diode uses physical fiber optics (a transmitter LED on one side and a receiver on the other) to enforce unidirectional data transfer. Unlike software firewalls, it cannot be hacked because return data physically cannot travel backwards.",
      },
      {
        q: "How does Alpha Matrix protect video surveillance feeds from being intercepted?",
        a: "All camera video streams are encrypted directly on the camera chip using AES-256 before being transmitted over the network, ensuring complete confidentiality.",
      },
      {
        q: "Are the systems compliant with international cybersecurity frameworks?",
        a: "Yes. Our architectures comply with NIST SP 800-53, ISO/IEC 27001, and IEC 62443 standards for mission-critical industrial control and defense networks.",
      },
    ],
  },
];

export function getAlphaSolutionBySlug(slug) {
  if (!slug) return null;
  return ALPHA_SOLUTIONS.find((s) => s.slug === slug || s.id === slug);
}
