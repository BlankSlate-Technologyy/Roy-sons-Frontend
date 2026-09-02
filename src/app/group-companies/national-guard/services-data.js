// Comprehensive Services Dataset for National Guard Security Services (Pvt) Ltd
import {
  UserCheck,
  Radio,
  Camera,
  ClipboardCheck,
  Users,
  Building2,
  ShieldCheck,
  Clock,
  Shield,
  Zap,
  Award,
  Lock,
  Eye,
  Search,
  FileText,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Flame,
} from "lucide-react";

export const NATIONAL_GUARD_SERVICES = [
  {
    id: "manned-guarding",
    slug: "manned-guarding",
    title: "Manned Guarding Services",
    eyebrow: "Armed & Unarmed Physical Protection",
    subtitle: "Highly Trained Uniformed Security Officers",
    tag: "Physical Security",
    icon: UserCheck,
    heroImage: "/national-guard-manned-guarding.png",
    overview:
      "National Guard provides highly disciplined, ex-military and civilian-trained uniformed security personnel for commercial complexes, corporate headquarters, industrial estates, diplomatic missions, and premier residential communities across Pakistan. Every guard undergoes rigorous physical fitness training, weapons safety drills, and thorough NADRA biometric background clearance before deployment.",
    metrics: [
      { label: "Active Guards", value: "500+" },
      { label: "Background Checks", value: "100% NADRA" },
      { label: "Supervisor Visits", value: "Day & Night" },
      { label: "Licensing Status", value: "Govt Certified" },
    ],
    deliverables: [
      "Rigorous visitor screening, physical baggage inspection, and automated logbook maintenance",
      "Perimeter access control, entrance turnstile operation, and anti-tailgating enforcement",
      "Armed ex-military static guards equipped with licensed 12-gauge shotguns and 9mm sidearms",
      "Vehicle undercarriage search mirror checks and boot inspections at main entry gates",
      "Continuous coordination with 24/7 central operations room via encrypted VHF/UHF wireless radios",
      "Emergency first response during physical trespassing, medical crises, and fire alarm triggers",
    ],
    technicalSpecs: [
      { key: "Guard Verification", value: "NADRA Biometric + Special Branch Police Clearance" },
      { key: "Armed Guard Profile", value: "Ex-Armed Forces / SSG Veterans with licensed firearms" },
      { key: "Shift Rotations", value: "Standard 8-hour / 12-hour shifts with zero unmonitored changeovers" },
      { key: "Field Supervision", value: "Dedicated Mobile Area Officers conducting 3+ daily surprise inspections" },
      { key: "Equipment Standard", value: "Smart body armor, tactical flashlights, metal detectors, wireless comms" },
      { key: "Replacement SLA", value: "Guaranteed standby relief guard replacement within 60 minutes" },
    ],
    pillars: [
      {
        title: "Rigorous Vetting & Training",
        desc: "Strict multi-stage background checks, police verifications, and monthly refresher training in firearm safety and de-escalation.",
        icon: Award,
      },
      {
        title: "Strict Gate & Access SOPs",
        desc: "Meticulous visitor logging, ID badge issuance, vehicle search mirrors, and zero-compromise perimeter vigilance.",
        icon: Lock,
      },
      {
        title: "24/7 Surprise Supervision",
        desc: "Mobile patrol field inspectors perform scheduled and unscheduled night checks to guarantee 100% alert status on duty.",
        icon: ShieldCheck,
      },
      {
        title: "Direct Command Integration",
        desc: "Guards are wirelessly linked to our central control room and rapid response units (QRT) for instant backup support.",
        icon: Radio,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Site Vulnerability Audit",
        desc: "Our senior operations officers assess entry points, blind spots, perimeter walls, and peak visitor traffic flows.",
      },
      {
        step: "02",
        title: "Post Orders & SOP Design",
        desc: "We formulate tailored Post Orders, emergency contact trees, gate protocols, and guard duty schedules.",
      },
      {
        step: "03",
        title: "Guard Induction & Briefing",
        desc: "Handpicked, verified guards are inducted on-site, familiarized with your facility rules, and equipped with smart gear.",
      },
      {
        step: "04",
        title: "Active Duty & 24/7 Oversight",
        desc: "Continuous field operations backed by GPS-tagged checkpoint patrols and round-the-clock supervisor audits.",
      },
    ],
    faqs: [
      {
        q: "Are all National Guard security personnel licensed and verified?",
        a: "Yes. Every single guard undergoes mandatory NADRA biometric verification, local police clearance certificate authentication, and weapons safety licensing before deployment.",
      },
      {
        q: "What is the difference between armed and unarmed guarding?",
        a: "Our armed guards are predominantly ex-military and SSG veterans trained in tactical firearm safety and perimeter defense. Unarmed guards specialize in customer-facing reception security, access turnstile management, and visitor logging.",
      },
      {
        q: "How fast can you deploy guards to our premises?",
        a: "Standard guard placements can be mobilized within 24 to 48 hours. For emergency situations or special events, we can deploy rapid response units within 2 to 4 hours.",
      },
      {
        q: "What happens if a guard falls ill or misses a shift?",
        a: "National Guard maintains dedicated standby relief squads in every operational sector. In case of absence, a trained relief officer is dispatched within 60 minutes.",
      },
    ],
  },
  {
    id: "mobile-patrol",
    slug: "mobile-patrol",
    title: "Mobile Patrol Services",
    eyebrow: "Vehicular Security & Rapid Intervention",
    subtitle: "24/7 Marked Security Cruisers & Quick Response Units",
    tag: "Patrol & QRT",
    icon: Radio,
    heroImage: "/national-guard-mobile-patrol.png",
    overview:
      "National Guard operates a fleet of high-visibility marked security cruisers, heavy-duty 4x4 response vehicles, and motorcycle squads. Designed to provide dynamic perimeter deterrence, rapid emergency response, and verified premises lockup checks, our mobile patrol units ensure complete peace of mind for spread-out facilities and housing sectors.",
    metrics: [
      { label: "Patrol Cruisers", value: "25+ Fleet" },
      { label: "Emergency Response", value: "< 7 Mins" },
      { label: "GPS Tracking", value: "Real-Time" },
      { label: "Patrol Coverage", value: "24/7/365" },
    ],
    deliverables: [
      "Scheduled and random mobile patrols across commercial zones, residential sectors, and industrial estates",
      "Rapid intervention during alarm triggers, SOS signals, and distress calls from client premises",
      "Automated electronic NFC/GPS checkpoint tag-ins providing verifiable digital patrol audit trails",
      "Physical lockup verification, boundary wall inspections, and illumination assessments after business hours",
      "Armed escort for high-value cargo transport, cash movements, and senior executive transits",
      "Direct wireless interface with local law enforcement and emergency medical rescue services",
    ],
    technicalSpecs: [
      { key: "Fleet Specifications", value: "Marked 4x4 Toyota Hilux cruisers, high-power searchlights, VHF base stations" },
      { key: "Patrol Verification", value: "RFID / GPS digital wanding at predetermined perimeter checkpoints" },
      { key: "Crew Composition", value: "Armed tactical team (Ex-SSG driver + armed response commander)" },
      { key: "Response Time SLA", value: "Under 7 minutes average urban response time upon panic button activation" },
      { key: "Telemetry Links", value: "Live satellite vehicle tracking integrated into central control room" },
      { key: "Onboard Equipment", value: "Fire extinguisher, trauma first-aid kit, tactical body cameras, tactical spotlight" },
    ],
    pillars: [
      {
        title: "High-Visibility Deterrence",
        desc: "Marked patrol vehicles with strobe lights and armed crews act as powerful deterrents against opportunistic crime and vandalism.",
        icon: Shield,
      },
      {
        title: "Rapid Emergency Scramble",
        desc: "Quick Response Teams (QRT) are strategically stationed across city sectors, enabling lightning-fast intervention on distress alarms.",
        icon: Zap,
      },
      {
        title: "Digital Proof of Patrol",
        desc: "Electronic GPS checkpoint tags guarantee that every corner of your perimeter is physically visited and inspected on schedule.",
        icon: CheckCircle2,
      },
      {
        title: "After-Hours Lockup Checks",
        desc: "Patrol officers physically verify doors, windows, gates, and perimeter fencing after business closing hours.",
        icon: Lock,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Route & Checkpoint Mapping",
        desc: "We map physical NFC checkpoint tags around your perimeter, entry gates, and blind alleyways.",
      },
      {
        step: "02",
        title: "Patrol Schedule Matrix",
        desc: "A randomized yet consistent patrol schedule is established to prevent predictable patterns for potential intruders.",
      },
      {
        step: "03",
        title: "Active Patrol Execution",
        desc: "Armed crews conduct vehicular and foot walk-arounds, wanding RFID tags and logging observations in real time.",
      },
      {
        step: "04",
        title: "Digital Reporting & Alerts",
        desc: "Detailed digital patrol summaries and instant anomaly alerts are transmitted to your facility management team.",
      },
    ],
    faqs: [
      {
        q: "How do we know the mobile patrol actually visited our premises?",
        a: "Our officers carry electronic RFID/GPS patrol wands that must touch physical tags fixed to your perimeter. You receive automated digital timestamp reports confirming exact arrival and check-in times.",
      },
      {
        q: "What equipment do Mobile Patrol Quick Response Teams carry?",
        a: "Each patrol cruiser is equipped with licensed tactical firearms, body armor, long-range searchlights, high-band VHF communication, first-aid trauma supplies, and automotive recovery gear.",
      },
      {
        q: "Can mobile patrol services be combined with static manned guards?",
        a: "Absolutely. In fact, our hybrid model—combining static on-site guards with supervisory mobile patrol checks—provides the highest tier of security and operational efficiency.",
      },
    ],
  },
  {
    id: "cctv-monitoring",
    slug: "cctv-monitoring",
    title: "CCTV & Central Monitoring",
    eyebrow: "Digital Surveillance & 24/7 Control Room",
    subtitle: "Real-Time Threat Detection & Remote Video Auditing",
    tag: "Surveillance",
    icon: Camera,
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard operates state-of-the-art 24/7 Central Monitoring Control Rooms staffed by certified surveillance specialists. We integrate high-definition IP video feeds, AI-powered perimeter tripwire analytics, automatic license plate recognition (ANPR), and remote panic button monitoring to preempt security breaches before they occur.",
    metrics: [
      { label: "Monitored Cameras", value: "2,500+" },
      { label: "Control Room Uptime", value: "99.9%" },
      { label: "Alarm Alert Time", value: "< 15 Secs" },
      { label: "Video Archiving", value: "Encrypted Cloud" },
    ],
    deliverables: [
      "24/7 real-time video surveillance supervision by trained central control room dispatchers",
      "AI video analytics integration: virtual tripwires, unauthorized loitering, unattended baggage, and crowd gathering",
      "Immediate audio talk-down broadcasting through on-site IP horn speakers to deter intruders live",
      "Silent panic alarm button monitoring for banks, cash registers, jewelry stores, and residences",
      "Comprehensive video auditing, incident timestamp clipping, and legal evidence compilation",
      "Scheduled virtual guard tours replacing or supplementing physical night patrols for cost efficiency",
    ],
    technicalSpecs: [
      { key: "Control Room Structure", value: "Tier-3 resilient operations center with dual-ISP and generator redundancy" },
      { key: "Analytics Capabilities", value: "Perimeter line crossing, license plate OCR, facial match, thermal heatmaps" },
      { key: "Bandwidth Optimization", value: "Smart H.265+ video stream compression and edge storage buffering" },
      { key: "Remote Audio Talk-Down", value: "Two-way full-duplex VoIP audio speaker integration for live deterrence" },
      { key: "Incident Response Link", value: "Instant radio dispatch link to closest National Guard Mobile Patrol unit" },
      { key: "Data Compliance", value: "End-to-end AES-256 encrypted video telemetry with tamper-evident audit logs" },
    ],
    pillars: [
      {
        title: "Proactive Live Intervention",
        desc: "Instead of just recording crime after it happens, our controllers spot suspicious movements live and dispatch units immediately.",
        icon: Eye,
      },
      {
        title: "AI Virtual Tripwires",
        desc: "Automated perimeter sensors flag any human or vehicular boundary crossing during restricted nighttime hours.",
        icon: ShieldCheck,
      },
      {
        title: "Live Audio Horn Broadcast",
        desc: "Controllers can verbally warn trespassers through site loudspeakers: 'You are under surveillance, leave immediately.'",
        icon: Headphones,
      },
      {
        title: "Evidence Chain of Custody",
        desc: "All incident clips are watermarked, securely archived, and packaged for law enforcement investigation.",
        icon: FileText,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Camera & Network Audit",
        desc: "We analyze your on-site camera angles, resolution, lighting, and secure network connection to our monitoring hub.",
      },
      {
        step: "02",
        title: "Rule & Tripwire Setup",
        desc: "We configure custom AI tripwire boundaries, alarm trigger schedules, and emergency contact hierarchy.",
      },
      {
        step: "03",
        title: "24/7 Live Surveillance",
        desc: "Our controllers monitor live alert cues, verify triggers, and filter out false alarms (animals, swaying branches).",
      },
      {
        step: "04",
        title: "Incident Intervention & Dispatch",
        desc: "Upon confirmed threat, we trigger on-site audio warnings, scramble our nearest QRT squad, and notify police.",
      },
    ],
    faqs: [
      {
        q: "Can National Guard monitor our existing CCTV cameras?",
        a: "Yes. In most cases, our central monitoring software is compatible with standard ONVIF, RTSP, and modern IP NVR/DVR camera systems without requiring you to replace existing hardware.",
      },
      {
        q: "How do you avoid false alarms from weather or animals?",
        a: "We deploy AI deep-learning human/vehicle classification filters combined with human verification. Our controllers review the video clip within seconds before initiating any escalation.",
      },
      {
        q: "What happens if our local internet connection goes down?",
        a: "We deploy dual-SIM 4G/5G failover cellular routers and on-site edge storage buffers so recording continues uninterrupted and auto-syncs upon connection restoration.",
      },
    ],
  },
  {
    id: "risk-assessment",
    slug: "risk-assessment",
    title: "Risk Assessment & Security Audits",
    eyebrow: "Strategic Consulting & Vulnerability Analysis",
    subtitle: "Comprehensive Threat Identification & Mitigation Architecture",
    tag: "Consulting",
    icon: ClipboardCheck,
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    overview:
      "Led by retired senior military intelligence and police commanders, National Guard’s Risk Assessment division delivers in-depth security audits for commercial complexes, industrial plants, and multinational enterprises. We systematically identify physical entry vulnerabilities, emergency evacuation bottlenecks, electronic blind spots, and procedural flaws to create actionable security blueprints.",
    metrics: [
      { label: "Audits Completed", value: "350+" },
      { label: "Threat Coverage", value: "360-Degree" },
      { label: "SOP Standardization", value: "ISO Aligned" },
      { label: "Audit Turnaround", value: "3-5 Days" },
    ],
    deliverables: [
      "Comprehensive physical perimeter, gatehouse, barrier, and lighting vulnerability inspections",
      "Access control auditing: employee badging, visitor screening, and loading dock security reviews",
      "Emergency evacuation, active threat response, and fire hazard preparedness evaluation",
      "Standard Operating Procedure (SOP) design, revision, and staff emergency training modules",
      "Regulatory compliance verification with provincial Private Security Companies Ordinances",
      "Cost-benefit analysis for optimizing guard headcount versus electronic automation systems",
    ],
    technicalSpecs: [
      { key: "Methodology Standard", value: "ISO 31000 Risk Management principles & ASIS International guidelines" },
      { key: "Survey Team", value: "Retired Armed Forces Lieutenant Colonels & Certified Protection Professionals (CPP)" },
      { key: "Deliverable Format", value: "Executive Summary + Detailed Threat Matrix + Prioritized Action Roadmap" },
      { key: "Audit Duration", value: "2 to 5 days on-site inspection followed by comprehensive formal report" },
      { key: "Re-Audit Cycle", value: "Recommended bi-annual compliance audit and annual emergency drill" },
    ],
    pillars: [
      {
        title: "Perimeter & Structural Audit",
        desc: "Examines boundary walls, fence integrity, gate strength, outdoor lighting, and landscape blind spots.",
        icon: Search,
      },
      {
        title: "Procedural SOP Review",
        desc: "Evaluates daily guard gate logs, visitor management, contractor vetting, and key custody protocols.",
        icon: FileText,
      },
      {
        title: "Crisis & Disaster Planning",
        desc: "Develops step-by-step contingency protocols for fire emergencies, mob trespassing, and active shooter scenarios.",
        icon: AlertTriangle,
      },
      {
        title: "Resource Optimization",
        desc: "Recommends the ideal balance of armed personnel, physical barriers, and digital sensors to maximize safety and lower operational costs.",
        icon: ShieldCheck,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Initial Stakeholder Briefing",
        desc: "We align with your leadership on facility history, critical assets, high-value inventory, and specific threat concerns.",
      },
      {
        step: "02",
        title: "Comprehensive Physical Inspection",
        desc: "Our senior audit team conducts daylight and nighttime on-site surveys, testing physical and procedural defenses.",
      },
      {
        step: "03",
        title: "Threat Matrix & Gap Analysis",
        desc: "We analyze gathered data against industry benchmarks, grading identified risks by probability and impact.",
      },
      {
        step: "04",
        title: "Actionable Blueprint Presentation",
        desc: "We deliver a formal report with executive summaries, photographic evidence, and cost-effective remedy roadmaps.",
      },
    ],
    faqs: [
      {
        q: "Why should my organization conduct a professional security audit?",
        a: "Most security breaches occur due to overlooked blind spots, outdated SOPs, or lax contractor access. A professional audit exposes hidden vulnerabilities before criminals can exploit them.",
      },
      {
        q: "How long does a full facility security audit take?",
        a: "A typical commercial or industrial facility audit requires 2 to 3 days of on-site survey (including day and night shifts), with the comprehensive final report delivered within 5 to 7 business days.",
      },
      {
        q: "Do you help implement the recommendations from the audit?",
        a: "Yes. National Guard can provide both the physical guarding force and technical hardware recommendations to execute the audit's findings seamlessly.",
      },
    ],
  },
  {
    id: "event-security",
    slug: "event-security",
    title: "Event Security & Crowd Control",
    eyebrow: "VIP Protection & Public Gathering Safety",
    subtitle: "High-Density Event Management & Executive Escorts",
    tag: "Events & VIP",
    icon: Users,
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    overview:
      "From high-profile international corporate conferences and diplomatic summits to private galas, concerts, and sports tournaments, National Guard delivers flawless event security. Our specialized teams manage high-density spectator queues, operate walk-through metal detection arches, coordinate VIP close protection (CPO), and maintain absolute order.",
    metrics: [
      { label: "Events Secured", value: "400+" },
      { label: "VIP Close Protection", value: "Ex-Commandos" },
      { label: "Screening Equipment", value: "Metal & X-Ray" },
      { label: "Crowd Safety Record", value: "100% Incident-Free" },
    ],
    deliverables: [
      "Multi-tiered event perimeter access control, ticket validation, and wristband/badge checking",
      "Walk-through metal detector arches and handheld scanning wand checkpoints at all guest gates",
      "Dedicated Close Protection Officers (CPO) and armed executive convoys for VIP dignitaries",
      "Female security officers for courteous, culturally sensitive family and female guest bag screening",
      "Stage security, backstage access restriction, and artist/speaker dressing room protection",
      "Emergency medical corridor maintenance and evacuation route management with local authorities",
    ],
    technicalSpecs: [
      { key: "Screening Equipment", value: "Multi-zone walk-through metal gates, handheld wands, under-car search mirrors" },
      { key: "VIP Officer Profile", value: "Special Services Group (SSG) / Elite Force veterans trained in evasive driving & CQC" },
      { key: "Crowd Control Gear", value: "Tactical queue management barriers, high-output megaphones, tactical radios" },
      { key: "Liaison Protocol", value: "Direct coordination with local Police Special Branch and District Administration" },
      { key: "Event Scales Managed", value: "From intimate 50-guest board meetings to 25,000+ attendee public festivals" },
    ],
    pillars: [
      {
        title: "Guest Screening Gates",
        desc: "Multi-channel entry lanes equipped with metal detectors ensuring rapid guest flow without compromising thoroughness.",
        icon: ShieldCheck,
      },
      {
        title: "VIP Executive Escorts",
        desc: "Tactically trained close protection officers escorting keynotes, celebrities, and diplomats from airport to venue.",
        icon: Award,
      },
      {
        title: "Crowd Flow & De-Escalation",
        desc: "Experienced officers trained in conflict de-escalation, preventing stampedes and maintaining a welcoming atmosphere.",
        icon: Users,
      },
      {
        title: "Emergency Exit Corridors",
        desc: "Clear, unblocked emergency evacuation pathways with marshals positioned for instant crisis response.",
        icon: AlertTriangle,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Venue & Flow Planning",
        desc: "We survey venue floor plans, entry bottlenecks, VIP green rooms, and emergency escape routes.",
      },
      {
        step: "02",
        title: "Equipment & Staff Allocation",
        desc: "We calculate the exact number of metal gates, handheld wands, armed guards, female searchers, and VIP escorts required.",
      },
      {
        step: "03",
        title: "Advance Venue Sweeps",
        desc: "Hours before doors open, our officers conduct complete sweeps of the venue, backstage, and parking areas.",
      },
      {
        step: "04",
        title: "Active Event Execution",
        desc: "Flawless gate screening, perimeter vigilance, stage protection, and smooth post-event guest dispersal.",
      },
    ],
    faqs: [
      {
        q: "Do you provide female security staff for event searches?",
        a: "Yes. We maintain dedicated teams of trained female security officers to ensure courteous, culturally respectful bag and body searches for female guests and families.",
      },
      {
        q: "What screening equipment do you provide for large events?",
        a: "We supply multi-zone walk-through metal detectors, handheld wand scanners, under-vehicle inspection mirrors, bag-check tables, and queue stanchion barriers.",
      },
      {
        q: "Can you provide armed VIP close protection (bodyguards)?",
        a: "Yes. Our Close Protection Officers (CPOs) are ex-military commandos trained in defensive driving, executive protection, and tactical firearms handling.",
      },
    ],
  },
  {
    id: "facility-protection",
    slug: "facility-protection",
    title: "Facility & Corporate Protection",
    eyebrow: "Enterprise Campuses & Commercial Real Estate",
    subtitle: "Integrated Multi-Tiered Security Architecture",
    tag: "Corporate Security",
    icon: Building2,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard delivers end-to-end facility security solutions designed specifically for corporate headquarters, IT business parks, multinational office towers, and distribution complexes. We combine front-desk security concierge services, automated turnstile badging, loading bay oversight, after-hours facility lockups, and fire safety marshaling into a synchronized security ecosystem.",
    metrics: [
      { label: "Corporate Campuses", value: "180+" },
      { label: "Turnstile Compliance", value: "100%" },
      { label: "Loading Dock Checks", value: "24/7 Logging" },
      { label: "Fire Safety Wardens", value: "Certified" },
    ],
    deliverables: [
      "Polite, well-groomed security receptionists and concierge access officers managing main lobby turnstiles",
      "Loading dock inventory checking, commercial delivery vehicle seals, and driver identification logging",
      "Executive floor access control, anti-tailgating surveillance, and visitor badge expiration management",
      "After-hours building lockup, HVAC/electrical hazard monitoring, and night floor-by-floor inspections",
      "Underground parking access control, automated number plate logging, and reserved bay management",
      "Certified Fire Safety and First Aid Wardens integrated into corporate emergency evacuation teams",
    ],
    technicalSpecs: [
      { key: "Guard Uniform Standard", value: "Executive corporate blazers / formal security dress with badge credentials" },
      { key: "Visitor System", value: "Digital tablet visitor management with automated SMS host notification" },
      { key: "Loading Bay Controls", value: "Inward/outward material gate passes with dual-signatory verification" },
      { key: "CSO Management", value: "Dedicated on-site Chief Security Officer (CSO) for large enterprise campuses" },
      { key: "Emergency Readiness", value: "Quarterly fire drills, certified CPR first responders, AED emergency kits" },
    ],
    pillars: [
      {
        title: "Executive Concierge Security",
        desc: "Professional security receptionists that enhance corporate prestige while strictly vetting all incoming visitors.",
        icon: Award,
      },
      {
        title: "Loading Dock Material Tracking",
        desc: "Rigorous inspection of cargo bills, vehicle seals, and contractor toolkits to prevent inventory shrinkage.",
        icon: Lock,
      },
      {
        title: "Basement & Perimeter Vigilance",
        desc: "Regular checks of parking decks, utility sub-stations, generator rooms, and emergency stairwells.",
        icon: ShieldCheck,
      },
      {
        title: "Life Safety & Evacuation",
        desc: "Trained fire wardens and first responders ready to guide hundreds of employees to safety during building emergencies.",
        icon: AlertTriangle,
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Campus Access Mapping",
        desc: "We analyze employee flows, visitor lobbies, vendor delivery routes, and emergency exit capacities.",
      },
      {
        step: "02",
        title: "Corporate SOP Formulation",
        desc: "We establish visitor badging guidelines, VIP executive protocols, loading bay check procedures, and night lockup checklists.",
      },
      {
        step: "03",
        title: "Uniformed Officer Deployment",
        desc: "Officers trained in both hospitality etiquette and tactical alertness are posted at turnstiles and control points.",
      },
      {
        step: "04",
        title: "Continuous Site Management",
        desc: "Daily operations overseen by on-site security supervisors with periodic service reviews and emergency drill audits.",
      },
    ],
    faqs: [
      {
        q: "What kind of training do corporate facility security guards receive?",
        a: "In addition to tactical security and emergency training, our corporate guards undergo extensive training in customer service etiquette, professional communication, visitor management software, and fire safety.",
      },
      {
        q: "How do you handle after-hours building access for contractors or cleaners?",
        a: "All after-hours entries must have pre-approved electronic gate passes. Our guards verify contractor IDs, log in/out times, inspect toolbags, and escort workers in sensitive zones.",
      },
      {
        q: "Can you provide a dedicated on-site Security Supervisor / CSO?",
        a: "Yes. For multi-story commercial towers and enterprise campuses, we provide a full-time on-site Chief Security Officer who coordinates all shifts, liaises with facility management, and manages emergency readiness.",
      },
    ],
  },
];

export function getNationalGuardServiceBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_GUARD_SERVICES.find(
    (svc) => svc.slug.toLowerCase() === slug.toLowerCase() || svc.id.toLowerCase() === slug.toLowerCase()
  );
}
