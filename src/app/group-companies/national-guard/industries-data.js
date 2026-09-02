// Comprehensive Industries & Sectors Dataset for National Guard Security Services (Pvt) Ltd
import {
  Landmark,
  Building,
  Home as HomeIcon,
  ShoppingBag,
  Factory,
  Stethoscope,
  GraduationCap,
  Hotel,
  HardHat,
  Warehouse,
  Network,
  ShieldCheck,
  Shield,
  Lock,
  Eye,
  Camera,
  Users,
  Radio,
  Clock,
  Award,
  Zap,
  CheckCircle2,
  FileCheck,
  Layers,
  Search,
} from "lucide-react";

export const NATIONAL_GUARD_INDUSTRIES = [
  {
    id: "government",
    slug: "government-organizations",
    title: "Government Organizations & Embassies",
    eyebrow: "Sovereign Facilities, Consulates & Diplomatic Enclaves",
    tag: "Government Sector",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard delivers high-security physical guarding and perimeter hardening for federal and provincial ministries, foreign consulates, court complexes, and administrative enclaves. Our ex-military armed officers enforce multi-tier identity checks, undercarriage bomb inspections, and restricted zone entry protocols.",
    metrics: [
      { label: "State Facilities", value: "45+ Sites" },
      { label: "Armed Response", value: "Ex-SSG Forces" },
      { label: "Anti-Sabotage", value: "PAS 68 Standard" },
      { label: "Vigilance Cycle", value: "24/7 Red Alert" },
    ],
    applications: [
      "Armed static post sentries with 12-bore shotguns and bulletproof guard cabins",
      "Automated and manual Under-Vehicle Inspection (UVIS) with search mirrors and detection mirrors",
      "Multi-channel walk-through metal detectors and explosive trace detection screening",
      "Diplomatic VIP escort convoys and liaison with Islamabad/Provincial Police Special Branch",
      "Perimeter razor-wire fence surveillance and anti-intrusion thermal camera monitoring",
      "Strict visitor credentialing, digital passport scanning, and temporary badge custody",
    ],
    technologies: [
      { key: "Armed Personnel Profile", value: "Retired Armed Forces / SSG commandos with special weapon qualifications" },
      { key: "Screening Equipment", value: "Garrett multi-zone walk-through metal arches, handheld wands, search mirrors" },
      { key: "Comms Encryption", value: "Dedicated encrypted VHF radio repeaters linked to regional police stations" },
      { key: "Gate Barrier Systems", value: "Heavy-duty hydraulic tyre killers, automatic boom barriers, anti-ram drop arms" },
      { key: "Protocol Compliance", value: "Diplomatic Security Service (DSS) and Ministry of Interior security mandates" },
    ],
    pillars: [
      {
        title: "Perimeter Barrier Hardening",
        desc: "Strict approach road zigzag barriers, tire spikes, and crash-rated drop arms to prevent hostile vehicle access.",
        icon: Shield,
      },
      {
        title: "Ex-Military Armed Sentry",
        desc: "Disciplined armed guards positioned in elevated watchtowers with clear overlapping fields of fire.",
        icon: Award,
      },
      {
        title: "Diplomatic Visitor Vetting",
        desc: "Multi-layered ID checking and baggage X-ray screening before any civilian or official enters the premises.",
        icon: Lock,
      },
      {
        title: "Emergency Police Hotline",
        desc: "Direct hotlines to Police Special Branch, Elite Force, and National Guard Central Operations Room.",
        icon: Radio,
      },
    ],
    faqs: [
      {
        q: "Are the guards assigned to government premises armed?",
        a: "Yes. For government and diplomatic installations, we deploy ex-military and SSG veterans armed with licensed automatic firearms and sidearms with full police verification.",
      },
      {
        q: "How do you coordinate with state security forces?",
        a: "Our field commanders maintain direct radio and phone contact with local police stations, Special Branch, and city emergency rescue units for synchronized crisis management.",
      },
      {
        q: "What anti-sabotage equipment do your guards operate?",
        a: "Our teams operate walk-through metal detectors, handheld body scanners, under-vehicle search mirrors, baggage inspection benches, and automated gate barriers.",
      },
    ],
  },
  {
    id: "corporate",
    slug: "corporate-offices",
    title: "Corporate Offices & Commercial Towers",
    eyebrow: "Enterprise Headquarters & High-Rise Real Estate",
    tag: "Corporate Real Estate",
    icon: Building,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard safeguards corporate headquarters, IT business parks, financial towers, and multinational suites. We combine smart, well-groomed security receptionists with automated turnstile access control, executive floor protection, loading bay audits, and round-the-clock facility vigilance.",
    metrics: [
      { label: "Office Towers", value: "120+ Towers" },
      { label: "Turnstile Screening", value: "< 2 Secs / Pax" },
      { label: "Supervision", value: "24/7 Day & Night" },
      { label: "Safety Drill Rate", value: "Quarterly" },
    ],
    applications: [
      "Polite, bilingual security concierge personnel managing front reception desks and visitor passes",
      "RFID badge and optical turnstile barrier enforcement preventing unauthorized floor access",
      "Executive suite protection, confidential board meeting guards, and anti-tailgating surveillance",
      "Basement and multi-level parking deck surveillance with vehicle number plate registration",
      "After-hours floor-by-floor physical lockups, HVAC power checks, and fire safety inspections",
      "Loading dock freight checks, contractor tool screening, and asset removal gate passes",
    ],
    technologies: [
      { key: "Uniform Standard", value: "Formal corporate blazers with embroidered National Guard insignia" },
      { key: "Visitor System", value: "Automated digital visitor check-in kiosks with photo ID capture and badge printing" },
      { key: "Turnstile Integration", value: "Optical speed gates with anti-passback and emergency fire release triggers" },
      { key: "Fire Safety Wardens", value: "Civil Defence certified fire wardens and first-aid medical responders on every floor" },
      { key: "Key Management", value: "Electronic tamper-proof key cabinets with digital audit logs" },
    ],
    pillars: [
      {
        title: "Front Desk Concierge",
        desc: "Creating an impeccable first impression for multinational clients while maintaining strict access verification.",
        icon: Users,
      },
      {
        title: "Floor Access Governance",
        desc: "Restricting elevators and stairwells so visitors and contractors cannot access sensitive corporate departments.",
        icon: Lock,
      },
      {
        title: "After-Hours Floor Patrols",
        desc: "Regular night checks of server rooms, conference rooms, fire exits, and power distribution boards.",
        icon: Eye,
      },
      {
        title: "Emergency Evacuation",
        desc: "Experienced wardens directing employees calmly down escape stairwells during fire alarms or power outages.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "What is the dress code and grooming standard for corporate guards?",
        a: "Our corporate officers wear premium navy blazers, crisp white shirts, formal ties, and clean shined shoes, ensuring they match high corporate aesthetic standards.",
      },
      {
        q: "Can you manage visitor parking and contractor loading bays?",
        a: "Yes. We manage multi-story parking decks, VIP reserved bays, and delivery bays, ensuring all contractor toolboxes and material dispatches are logged.",
      },
      {
        q: "Do your guards receive customer service training?",
        a: "Yes. All corporate-assigned personnel undergo our Corporate Etiquette & Hospitality Security training module focusing on polite de-escalation and professional communication.",
      },
    ],
  },
  {
    id: "residential",
    slug: "residential-communities",
    title: "Residential Communities & Housing Societies",
    eyebrow: "Gated Townships, Housing Societies & Luxury Condos",
    tag: "Residential Security",
    icon: HomeIcon,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard provides comprehensive security solutions for housing societies, gated residential schemes, and luxury apartment complexes. We operate boom barriers, computerized resident RFID verification, guest intercom confirmation, and motorized mobile night patrols to guarantee tranquility and protection for families.",
    metrics: [
      { label: "Societies Protected", value: "85+ Schemes" },
      { label: "Resident Families", value: "50,000+" },
      { label: "Motorcycle Patrols", value: "Continuous" },
      { label: "SOS Response Time", value: "< 3 Mins" },
    ],
    applications: [
      "Main gate barrier operations, visitor computerized verification, and resident RFID car tag recognition",
      "Motorcycle and vehicle mobile patrols conducting continuous sweep rounds across residential sectors",
      "Delivery rider (courier, food delivery) verification, helmet removal, and time-bound entry logging",
      "Perimeter boundary wall sensor monitoring, barbed wire inspection, and alleyway illumination checks",
      "Parks, community centers, and children playground vigilance preventing unauthorized outsiders",
      "Resident emergency assistance for medical crises, electrical short circuits, and suspicious noises",
    ],
    technologies: [
      { key: "Access Automation", value: "Long-range RFID windshield tags for residents + automatic boom barriers" },
      { key: "Visitor Check-in", value: "Tablet-based guest logging with resident phone confirmation and QR passes" },
      { key: "Patrol Units", value: "Marked motorbikes equipped with high-beam searchlights and wireless comms" },
      { key: "CCTV Street Feeds", value: "Central society monitoring room supervising sector road intersections" },
      { key: "Resident App Support", value: "Integration with society management mobile apps for pre-approved guest entry" },
    ],
    pillars: [
      {
        title: "Main Gate Gatekeeping",
        desc: "Zero unauthorized entries. Every guest, cab driver, and domestic helper is logged before the barrier opens.",
        icon: Lock,
      },
      {
        title: "Sector Night Patrols",
        desc: "Motorcycle patrol units roving through streets all night with blinking beacon lights to deter burglars.",
        icon: Radio,
      },
      {
        title: "Perimeter Wall Defense",
        desc: "Guards stationed along society boundary walls and secluded green belts to prevent trespassers hopping fences.",
        icon: Shield,
      },
      {
        title: "Family SOS Assistance",
        desc: "Rapid guard response within 3 minutes whenever a resident calls the society security helpline.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "How do guards manage food delivery riders and online shopping couriers?",
        a: "Delivery riders must surrender their CNIC/ID, remove helmets for camera logging, and state the exact street and house number. Time limits are enforced for every delivery.",
      },
      {
        q: "Do you patrol residential streets throughout the night?",
        a: "Yes. Our motorcycle and cruiser squads operate continuously from dusk till dawn, checking locked houses, parked cars, and boundary corners.",
      },
      {
        q: "Can you provide personal armed guards for individual villas?",
        a: "Yes. In addition to society-wide protection, we deploy dedicated static guards and armed bodyguards for individual VIP residences.",
      },
    ],
  },
  {
    id: "retail",
    slug: "shopping-malls",
    title: "Shopping Malls & Retail Megastores",
    eyebrow: "Commercial Plazas, Department Stores & Retail Chains",
    tag: "Retail & Malls",
    icon: ShoppingBag,
    heroImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard protects mega shopping centers, retail plazas, and international fashion outlets. We deploy trained security personnel for main entrance metal screening, active loss prevention, shoplifting deterrence, parking crowd control, and courteous female searchers for family safety.",
    metrics: [
      { label: "Malls & Stores", value: "60+ Malls" },
      { label: "Daily Shoppers", value: "100,000+" },
      { label: "Female Searchers", value: "On Every Gate" },
      { label: "Shrinkage Rate", value: "< 0.05%" },
    ],
    applications: [
      "Entrance walk-through metal detectors, bag X-ray scanning, and courteous body wanding",
      "Dedicated female security officers managing family screening cabins with cultural sensitivity",
      "Uniformed floor wardens and plainclothes loss prevention officers deterring shoplifting and pickpocketing",
      "Cash collection escort and high-value brand store security (jewelry, electronics, designer luxury)",
      "Food court and central atrium crowd control during peak festival sales and celebrity promotions",
      "Underground parking traffic marshaling, anti-theft car surveillance, and emergency exit clearance",
    ],
    technologies: [
      { key: "Screening Arches", value: "Multi-zone digital walk-through metal gates with passenger traffic counters" },
      { key: "EAS Integration", value: "Electronic Article Surveillance (EAS) antenna monitoring at retail shop exits" },
      { key: "Female Search Cabins", value: "Fully enclosed, discreet search booths with female certified guards" },
      { key: "Under-Car Inspection", value: "High-clarity optical chassis cameras and convex search mirrors at parking entry" },
      { key: "Lost Child Protocol", value: "Immediate gate-lockdown protocol and control room camera tracking for lost children" },
    ],
    pillars: [
      {
        title: "Family Friendly Screening",
        desc: "Courteous, welcoming entry procedures that keep dangerous items out without causing frustrating customer delays.",
        icon: Users,
      },
      {
        title: "Loss Prevention & Shoplifting",
        desc: "Sharp-eyed floor officers trained in body language cues to catch shoplifters and protect store inventory.",
        icon: Eye,
      },
      {
        title: "Cash Counter Escort",
        desc: "Armed protection during end-of-day store revenue collections and bank deposit movements.",
        icon: Lock,
      },
      {
        title: "Crowd Safety & Fire Routes",
        desc: "Ensuring all mall emergency exits remain clear and managing heavy foot traffic during holiday sales.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "Do you provide female security officers for shopping mall entrance gates?",
        a: "Yes. All mall assignments include trained female security personnel stationed at dedicated family entry booths for bag and body searches.",
      },
      {
        q: "How do your officers handle shoplifting incidents?",
        a: "Our officers follow strict legal protocols: detaining the suspect politely with video evidence, recovering inventory, and coordinating immediately with local police.",
      },
      {
        q: "Can you provide parking attendants and traffic wardens for mall parking?",
        a: "Yes. We manage both vehicular access security and internal parking slot direction to prevent gridlock during busy shopping weekends.",
      },
    ],
  },
  {
    id: "industrial",
    slug: "industrial-facilities",
    title: "Industrial Plants & Manufacturing Units",
    eyebrow: "Textile Mills, Automotive Plants & Chemical Complexes",
    tag: "Industrial & Manufacturing",
    icon: Factory,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard delivers multi-tiered industrial plant security for heavy manufacturing, chemical production, textile mills, and automotive assembly lines. We manage gatehouse weighbridge checks, raw material inward/outward gate passes, perimeter watchtowers, shift change worker body searches, and fire hazard safety.",
    metrics: [
      { label: "Factories Secured", value: "95+ Plants" },
      { label: "Truck Gate Passes", value: "100% Audited" },
      { label: "Watchtowers", value: "Armed 24/7" },
      { label: "Pilferage Rate", value: "Zero Tolerance" },
    ],
    applications: [
      "Gatehouse truck weight verification, delivery challan inspection, and container seal checking",
      "Raw material, scrap metal, and finished goods inward/outward gate pass double-verification",
      "Shift change worker bag checking and metal scanning preventing tool theft and raw material pilferage",
      "Perimeter boundary watchtowers with armed guards overlooking vast industrial land plots",
      "Hazardous chemical storage and fuel tank security with strict smoking prohibition enforcement",
      "Labor union gathering monitoring and peaceful dispute de-escalation outside factory gates",
    ],
    technologies: [
      { key: "Gate Pass Software", value: "Digital ERP-linked material pass verification with driver biometric capture" },
      { key: "Weighbridge Protocol", value: "Automated license plate logging + tare weight discrepancy alarms" },
      { key: "Watchtower Gear", value: "High-power long-range searchlights, siren alert horns, VHF base stations" },
      { key: "Fire & Safety", value: "Industrial safety PPE compliance enforcement + daily fire hydrant audits" },
      { key: "Perimeter Defense", value: "Concertina razor coils, taut-wire vibration sensors, solar floodlights" },
    ],
    pillars: [
      {
        title: "Material Gate Pass Audits",
        desc: "No vehicle leaves the factory without dual authorization, preventing unauthorized scrap or inventory removal.",
        icon: FileCheck,
      },
      {
        title: "Shift Change Searches",
        desc: "Efficient body and bag scans during thousands of worker shift changeovers to prevent internal shrinkage.",
        icon: Users,
      },
      {
        title: "Boundary Watchtowers",
        desc: "Elevated armed positions providing an unobstructed view over sprawling factory yards and back fences.",
        icon: Shield,
      },
      {
        title: "Hazard & Fire Watch",
        desc: "Continuous night patrols around boiler houses, transformer rooms, and chemical storage sheds.",
        icon: Zap,
      },
    ],
    faqs: [
      {
        q: "How do you prevent factory scrap and finished goods theft?",
        a: "We enforce strict two-person material gate passes, under-vehicle chassis scans, driver photo logging, and weighbridge cross-checks against delivery invoices.",
      },
      {
        q: "Can your guards handle large labor shift changeovers without delays?",
        a: "Yes. We configure multi-lane screening turnstiles with handheld wands, enabling hundreds of workers to pass through in minutes while maintaining strict security.",
      },
      {
        q: "Are industrial guards trained in fire emergencies?",
        a: "Yes. All our industrial guards are certified in operating CO2 and dry chemical fire extinguishers, managing assembly points, and sounding plant alarm sirens.",
      },
    ],
  },
  {
    id: "healthcare",
    slug: "healthcare-centers",
    title: "Healthcare Centers & Hospitals",
    eyebrow: "Tertiary Hospitals, Medical Institutes & Clinics",
    tag: "Healthcare Sector",
    icon: Stethoscope,
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard provides specialized, compassionate security for tertiary hospitals, medical universities, diagnostic centers, and emergency trauma wards. Our personnel are trained in rapid conflict de-escalation, doctor and nurse protection, visitor pass enforcement, and ambulance driveway traffic clearance.",
    metrics: [
      { label: "Hospitals Protected", value: "40+ Hospitals" },
      { label: "Ambulance Bay Flow", value: "100% Clear" },
      { label: "De-escalation", value: "Certified Staff" },
      { label: "Pharmacy Security", value: "24/7 Monitored" },
    ],
    applications: [
      "Emergency Room (ER) de-escalation officers protecting doctors and nursing staff from aggressive attendants",
      "Ambulance bay traffic marshaling ensuring uninterrupted zero-delay patient emergency arrivals",
      "Patient visitor pass system restricting ward access to authorized attendants only during visiting hours",
      "Pharmacy, narcotic medicine storage, and diagnostic laboratory high-security access control",
      "Morgue, ICU, and neonatal nursery protection preventing unauthorized intrusion and child abduction",
      "Hospital basement parking access and patient wheelchair transport assistance at main entrances",
    ],
    technologies: [
      { key: "De-escalation Standard", value: "Non-violent crisis intervention and psychological de-escalation training" },
      { key: "Visitor Pass Protocol", value: "Color-coded electronic attendant wristbands and biometric ICU access" },
      { key: "Emergency Code Response", value: "Immediate tactical guard response to Code Blue, Code Red, and Code Gray alerts" },
      { key: "Pharmacy Guarding", value: "Dual-custody key logs and CCTV surveillance over restricted drug safes" },
      { key: "Ambulance Lane Control", value: "Dedicated barrier-free emergency vehicle priority lanes" },
    ],
    pillars: [
      {
        title: "Medical Staff Defense",
        desc: "Stationed in emergency wards to protect doctors and staff from emotional outbursts and physical aggression.",
        icon: ShieldCheck,
      },
      {
        title: "Ambulance Bay Clearance",
        desc: "Keeping hospital emergency driveways completely clear of parked cars and unauthorized pedestrian crowds.",
        icon: Clock,
      },
      {
        title: "Restricted Ward Access",
        desc: "Controlling visitor passes in ICUs, neonatal units, and operating rooms to maintain sterile environments.",
        icon: Lock,
      },
      {
        title: "Pharmacy & Narcotic Safes",
        desc: "Guarding expensive medical equipment, testing supplies, and controlled pharmaceutical inventories.",
        icon: Eye,
      },
    ],
    faqs: [
      {
        q: "How do your guards handle angry patient attendants in the Emergency Room?",
        a: "Our hospital guards undergo specialized de-escalation training to defuse tense situations empathetically and calmly, protecting healthcare staff without escalating conflict.",
      },
      {
        q: "Can you enforce strict visiting hours across multiple hospital wards?",
        a: "Yes. We issue color-coded visitor wristbands and maintain ward entry checkpoints, ensuring patients get peaceful rest outside visiting hours.",
      },
      {
        q: "Do hospital guards carry firearms?",
        a: "Internal ward guards are unarmed and trained in customer service and de-escalation. Armed guards are stationed only at external hospital perimeter gates and cash counters.",
      },
    ],
  },
  {
    id: "education",
    slug: "educational-institutions",
    title: "Educational Campuses & Universities",
    eyebrow: "Universities, International Schools & Colleges",
    tag: "Education Sector",
    icon: GraduationCap,
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard safeguards school branches, colleges, and vast university campuses with rigid access control, student ID verification, morning/afternoon vehicle drop-off marshaling, anti-narcotics watch, and armed perimeter defense compliant with provincial School Safety SOPs.",
    metrics: [
      { label: "Campuses Secured", value: "75+ Institutes" },
      { label: "Students Protected", value: "120,000+" },
      { label: "Govt School SOPs", value: "100% Compliant" },
      { label: "Perimeter Defense", value: "Armed Sentries" },
    ],
    applications: [
      "Armed entrance sentries enforcing strict student ID card scanning and visitor computerized logging",
      "Morning and afternoon school bus and parent vehicle traffic marshaling ensuring safe student drop-offs",
      "Strict anti-trespassing measures, boundary wall razor wire inspections, and security watchtowers",
      "Female security guards for girls' school gates, parent reception, and kindergarten wings",
      "Zero-tolerance anti-narcotics and unauthorized vendor prohibition outside school perimeter gates",
      "Hostel security, after-hours campus gate lockups, and periodic emergency fire/active threat drills",
    ],
    technologies: [
      { key: "Safety SOP Compliance", value: "Fully compliant with Home Department and Police School Security Directives" },
      { key: "Student ID Badging", value: "RFID turnstile card tap-in with instant parent SMS arrival notifications" },
      { key: "Emergency Panic Link", value: "Police Special Branch SOS panic buttons installed at guard gatehouses" },
      { key: "Perimeter Standard", value: "Minimum 8-foot boundary wall, razor wire, elevated sentry bunkers" },
      { key: "Hostel Oversight", value: "Biometric hostel resident in/out time logging and curfew enforcement" },
    ],
    pillars: [
      {
        title: "Safe Drop-Off Corridors",
        desc: "Traffic wardens and guards organizing school buses and cars so young children cross streets safely.",
        icon: Users,
      },
      {
        title: "Armed Boundary Sentry",
        desc: "Ex-military armed sentries positioned in reinforced bunkers to deter any external hostile threat.",
        icon: Shield,
      },
      {
        title: "Student ID & Visitor Vetting",
        desc: "No outsider enters school premises without appointment verification and national ID surrender.",
        icon: Lock,
      },
      {
        title: "Campus & Hostel Vigilance",
        desc: "Regular night checks around sports complexes, university hostels, and laboratory wings.",
        icon: Eye,
      },
    ],
    faqs: [
      {
        q: "Do your school security protocols meet government safety standards?",
        a: "Yes. Our school security matrices strictly adhere to Home Department School Security Guidelines, including boundary wall heights, razor wire, armed guards, and direct police panic alarms.",
      },
      {
        q: "How do you handle student pick-up and drop-off traffic safely?",
        a: "We deploy dedicated road marshals who manage vehicle queues, assist young children crossing roads, and verify parent/driver pickup authorization cards.",
      },
      {
        q: "Do you provide security guards for university hostels?",
        a: "Yes. We provide 24/7 security for female and male hostels, maintaining biometric entry logs and enforcing strict visitor curfew rules.",
      },
    ],
  },
  {
    id: "hospitality",
    slug: "hotels-hospitality",
    title: "Hotels, Resorts & Hospitality",
    eyebrow: "5-Star Luxury Hotels, Resorts & Banquet Halls",
    tag: "Hospitality & Leisure",
    icon: Hotel,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard provides discreet, prestigious security for five-star hotels, luxury resorts, conference venues, and wedding banquet halls. We blend warm hospitality greeting with rigorous vehicle undercarriage screening, luggage X-ray checks, VIP floor surveillance, and seamless banquet crowd control.",
    metrics: [
      { label: "Hotels & Venues", value: "50+ Venues" },
      { label: "VIP Dignitaries", value: "Heads of State" },
      { label: "Luggage X-Ray", value: "100% Screened" },
      { label: "Discretion Level", value: "Elite Standard" },
    ],
    applications: [
      "Vehicle drop-arm inspection, trunk checks, and undercarriage scanner cameras at hotel driveways",
      "Lobby entrance walk-through metal detectors and conveyor belt baggage X-ray scanner operations",
      "Guest privacy protection, presidential suite guards, and foreign delegation close protection",
      "Banquet hall, wedding, and convention crowd flow management and anti-gatecrashing security",
      "Swimming pool, spa, and rooftop lounge security ensuring exclusive guest access",
      "Service dock and supplier delivery screening verifying food, beverages, and linen shipments",
    ],
    technologies: [
      { key: "X-Ray Equipment", value: "Multi-energy dual-view conveyor X-ray inspection machines for luggage" },
      { key: "Concierge Uniform", value: "Luxury hotel style formal suits with discrete earpiece communications" },
      { key: "Vehicle Scanners", value: "Automated color under-vehicle inspection system with license plate match" },
      { key: "VIP Room Security", value: "Dedicated RFID elevator floor lockout and executive floor sentries" },
      { key: "Service Bay Checks", value: "Supplier gate pass management and vendor staff biometric verification" },
    ],
    pillars: [
      {
        title: "Discreet Guest Welcoming",
        desc: "Providing rigorous security screening without compromising the welcoming luxury experience of five-star guests.",
        icon: Award,
      },
      {
        title: "Luggage & Vehicle Sweeps",
        desc: "Advanced X-ray inspection of all guest luggage and driveway undercarriage scans for explosive safety.",
        icon: Search,
      },
      {
        title: "VIP Delegation Protection",
        desc: "Guarding state dignitaries, corporate executives, and international sports teams staying at the hotel.",
        icon: ShieldCheck,
      },
      {
        title: "Banquet & Wedding Security",
        desc: "Managing guest lists, parking flow, and gift security during high-profile society weddings.",
        icon: Users,
      },
    ],
    faqs: [
      {
        q: "How do your guards maintain luxury hotel customer service standards?",
        a: "Our hospitality security teams are trained to greet guests warmly and respectfully while maintaining sharp tactical vigilance and operating screening equipment effortlessly.",
      },
      {
        q: "What equipment do you operate at hotel entrance gates?",
        a: "We operate driveway hydraulic road blockers, under-vehicle chassis search cameras, walk-through metal detectors, and conveyor X-ray baggage scanners.",
      },
      {
        q: "Can you provide extra security guards for large wedding events?",
        a: "Yes. We provide temporary reinforcement squads for large wedding banquets, musical concerts, and corporate summits on 24 hours' notice.",
      },
    ],
  },
  {
    id: "financial",
    slug: "financial-institutions",
    title: "Banks & Financial Institutions",
    eyebrow: "Commercial Banks, Vaults, Microfinance & Money Exchanges",
    tag: "Financial Sector",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard secures commercial bank branches, central currency vaults, microfinance institutions, and currency exchange houses across Pakistan. We deploy armed ex-military guards equipped with automatic 12-gauge shotguns, CCTV monitoring, silent police panic alarms, and cash-in-transit (CIT) armed escorts.",
    metrics: [
      { label: "Bank Branches", value: "220+ Branches" },
      { label: "Armed Sentry Record", value: "100% Ex-Military" },
      { label: "Vault Protection", value: "State Bank Spec" },
      { label: "Cash Escorts", value: "Daily CIT Ops" },
    ],
    applications: [
      "Armed entrance sentries with licensed 12-bore shotguns and tactical body armor on bank branch doors",
      "Customer queue discipline, helmet/sunglass removal enforcement, and metal detector wanding",
      "Cash counter, manager cabin, and strongroom vault door static armed protection",
      "Silent under-counter panic alarm button monitoring connected to local police stations and QRT units",
      "24/7 ATM booth surveillance, anti-skimming device inspections, and night security patrols",
      "Cash-in-Transit (CIT) armed convoy escorts for inter-branch cash and bullion transfers",
    ],
    technologies: [
      { key: "Armed Guard Credentials", value: "Retired Armed Forces / SSG veterans with licensed pump-action shotguns" },
      { key: "State Bank Compliance", value: "Fully compliant with State Bank of Pakistan (SBP) Security Framework Regulations" },
      { key: "Silent Alarm Link", value: "Wireless panic buttons with automatic GSM cellular dialer to Police 15" },
      { key: "Strongroom Protocols", value: "Dual-custody key and biometric vault locks with seismic vibration sensors" },
      { key: "ATM Security", value: "Vibration sensors, anti-cutting alarms, and remote thermal camera integration" },
    ],
    pillars: [
      {
        title: "Armed Ex-Military Sentry",
        desc: "Sharp, alert armed guards posted outside the branch and inside the teller hall with tactical situational awareness.",
        icon: Award,
      },
      {
        title: "Cash Counter Vigilance",
        desc: "Monitoring customer lines and preventing unauthorized individuals from approaching cash dispatch counters.",
        icon: Lock,
      },
      {
        title: "Silent Police Panic Alarms",
        desc: "Concealed foot and hand buttons enabling tellers and guards to summon police reinforcements silently.",
        icon: Radio,
      },
      {
        title: "ATM Booth Security",
        desc: "Regular inspections of ATM card slots for skimming hardware and round-the-clock physical deterrence.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "Do your bank security guards comply with State Bank of Pakistan regulations?",
        a: "Yes. All National Guard bank security protocols, firearm licensing, biometric background checks, and relief replacement SLAs fully comply with SBP security regulations.",
      },
      {
        q: "What weapons do your bank guards carry?",
        a: "Our armed bank guards carry licensed 12-gauge pump-action shotguns and 9mm sidearms, backed by ballistic body armor plates.",
      },
      {
        q: "Do you provide armed escorts for cash transfer vehicles?",
        a: "Yes. We provide armed escort vehicles and trained tactical crew to accompany bank cash delivery vans between regional currency vaults and local branches.",
      },
    ],
  },
  {
    id: "construction",
    slug: "construction-sites",
    title: "Construction & Infrastructure Projects",
    eyebrow: "Commercial High-Rises, Highways & Housing Developments",
    tag: "Construction & Civil",
    icon: HardHat,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard safeguards construction sites, infrastructure projects, real estate mega-developments, and highway civil works. We prevent expensive heavy machinery theft, copper/steel scrap scavenging, worker unauthorized entry, and enforce mandatory site PPE safety gear compliance.",
    metrics: [
      { label: "Active Project Sites", value: "70+ Sites" },
      { label: "Machinery Safeguarded", value: "Heavy Cranes & Earthmovers" },
      { label: "Material Loss", value: "Zero Shrinkage" },
      { label: "Night Patrols", value: "Hourly Checks" },
    ],
    applications: [
      "Main construction gate access control, daily worker badge registration, and subcontract laborer logging",
      "Steel rebar, cement bags, electrical copper cables, and fuel tank theft prevention and inventory audits",
      "Heavy construction equipment (cranes, bulldozers, generators) overnight watch and battery theft deterrence",
      "Site PPE compliance enforcement: hard hats, high-visibility reflective vests, and safety boots at gates",
      "Night mobile perimeter walk-arounds and temporary perimeter fence integrity inspections",
      "Material delivery truck inspection, delivery challan verification, and scrap dispatch control",
    ],
    technologies: [
      { key: "Temporary Guard Cabins", value: "Portable solar-powered security cabins with high-output searchlights" },
      { key: "Worker Logbook", value: "Barcode / Fingerprint biometric daily contractor attendance scanners" },
      { key: "Material Passes", value: "Stamped delivery dispatch logs cross-checked by site project engineers" },
      { key: "Site PPE Enforcement", value: "Gate turnstiles that deny entry without safety helmet and steel-toe boots" },
      { key: "Fuel Tank Locks", value: "Heavy-duty anti-siphon locks and daily diesel dipstick measurement logs" },
    ],
    pillars: [
      {
        title: "Machinery & Fuel Defense",
        desc: "Guarding expensive excavators, generators, and diesel fuel storage tanks from overnight theft and vandalism.",
        icon: Shield,
      },
      {
        title: "Material Scrap Control",
        desc: "Preventing costly steel rebars, copper wiring, and power tools from being smuggled out of the site.",
        icon: Lock,
      },
      {
        title: "Subcontractor Vetting",
        desc: "Ensuring only verified laborers wearing required PPE equipment are granted access to high-risk build zones.",
        icon: Users,
      },
      {
        title: "Night Perimeter Sweeps",
        desc: "Continuous hourly patrols with searchlights along unfinished boundary fences and dark construction trenches.",
        icon: Eye,
      },
    ],
    faqs: [
      {
        q: "How do you stop diesel fuel and battery theft from heavy machinery on site?",
        a: "Our night guards conduct hourly fuel gauge and battery inspections, parking machinery in well-lit designated staging yards under continuous surveillance.",
      },
      {
        q: "Can guards enforce PPE safety compliance before workers enter the site?",
        a: "Yes. Our guards act as safety gatekeepers, ensuring every laborer, engineer, and visitor wears a hard hat, safety boots, and high-vis vest before stepping onto the site.",
      },
      {
        q: "Do you supply temporary security lighting and guard cabins?",
        a: "Yes. For remote construction projects without utility power, we deploy solar-powered guard booths equipped with floodlights and wireless radios.",
      },
    ],
  },
  {
    id: "logistics",
    slug: "logistics-warehouses",
    title: "Logistics Hubs & Warehouses",
    eyebrow: "Distribution Centers, Cold Storage & Freight Depots",
    tag: "Logistics & Supply Chain",
    icon: Warehouse,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard protects massive logistics distribution centers, bonded warehouses, cold storage facilities, and container freight yards. We manage dock bay loading oversight, container bolt seal inspections, delivery driver credentialing, and overnight yard patrols to secure high-value supply chains.",
    metrics: [
      { label: "Warehouses Secured", value: "110+ Hubs" },
      { label: "Container Seals", value: "100% Inspected" },
      { label: "Dock Bay Auditing", value: "24/7 Logging" },
      { label: "Supply Chain Uptime", value: "99.9%" },
    ],
    applications: [
      "Inbound and outbound commercial container bolt seal verification and ISO number logging",
      "Delivery truck driver ID registration, license verification, and breathalyzer safety checks",
      "Loading dock bay surveillance, pallet headcount verification, and damage logging",
      "High-value inventory caged area access control with dual-custody authorization",
      "Overnight container yard mobile patrols and perimeter fence breach monitoring",
      "Warehouse fire hazard monitoring, electrical panel inspections, and emergency exit clearance",
    ],
    technologies: [
      { key: "Container Seal Protocol", value: "High-resolution photo logging of numbered bolt seals on all trailer doors" },
      { key: "Dock Management", value: "Synchronized gatehouse and dock bay time-stamp entry/exit logs" },
      { key: "Yard Patrol Gear", value: "Mobile patrol cruisers with high-power searchlights and wireless comms" },
      { key: "High-Value Cage Locks", value: "Biometric dual-auth access control for electronics, cosmetics, and tobacco inventory" },
      { key: "Fire Safety", value: "Quarterly warehouse evacuation drills and sprinkler valve monitoring" },
    ],
    pillars: [
      {
        title: "Container Seal Verification",
        desc: "Checking and photographing every bolt seal before a truck enters or leaves the logistics compound.",
        icon: Lock,
      },
      {
        title: "Loading Dock Oversight",
        desc: "Preventing inventory theft and unauthorized cargo loading during hectic distribution shifts.",
        icon: Eye,
      },
      {
        title: "High-Value Caged Storage",
        desc: "Restricting access to premium inventory zones with strict dual-signatory access authorizations.",
        icon: ShieldCheck,
      },
      {
        title: "Overnight Yard Security",
        desc: "Guards patrolling container staging lanes, trailer parking, and dark boundary fence lines all night.",
        icon: Shield,
      },
    ],
    faqs: [
      {
        q: "How do guards prevent warehouse inventory shrinkage and collusion?",
        a: "We maintain strict separation of duties: security guards independently verify carton counts and seal numbers against delivery invoices, and conduct random bag checks on warehouse staff upon exit.",
      },
      {
        q: "Can you provide 24/7 security for cold storage and pharmaceutical warehouses?",
        a: "Yes. In addition to physical security, our guards monitor cold storage temperature gauges and generator power status to protect perishable goods from spoilage.",
      },
      {
        q: "What is your procedure when an incoming truck arrives with a broken container seal?",
        a: "The truck is held in a quarantine lane, the supervisor photographs the seal immediately, and the warehouse operations manager is alerted before opening the doors.",
      },
    ],
  },
  {
    id: "critical-infra",
    slug: "critical-infrastructure",
    title: "Critical Infrastructure & Energy Sites",
    eyebrow: "Power Grids, Telecom Towers, Oil Depots & Water Utilities",
    tag: "Critical National Assets",
    icon: Network,
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    overview:
      "National Guard protects critical national infrastructure including high-voltage electric substations, solar/wind farms, telecommunications switching hubs, oil pumping terminals, and municipal water treatment plants against sabotage, trespassing, and metal theft in urban and remote locations.",
    metrics: [
      { label: "Infrastructure Sites", value: "65+ Assets" },
      { label: "Remote Outposts", value: "Solar Powered" },
      { label: "Armed Sentry Force", value: "Ex-Military SSG" },
      { label: "Perimeter Integrity", value: "Continuous Vigilance" },
    ],
    applications: [
      "Armed sentries in reinforced guard bunkers defending high-voltage transformer yards and fuel valves",
      "Remote solar-powered telecom tower static guarding and generator diesel theft deterrence",
      "Solar park and wind turbine vast acreage perimeter mobile patrol checks and fence repair alerts",
      "Municipal water reservoir perimeter surveillance and restricted water intake tower protection",
      "Strict biometric access control and visitor vetting for electrical grid control rooms and SCADA hubs",
      "Emergency coordination with national security agencies and provincial emergency disaster squads",
    ],
    technologies: [
      { key: "Remote Outpost Power", value: "Autonomous solar power kits with lithium battery storage for guard cabins" },
      { key: "High-Voltage Hardening", value: "Non-metallic fiber optic communications immune to 500kV substation EMI" },
      { key: "Armed Profile", value: "Ex-Army and Rangers veterans trained in long-range perimeter sentry defense" },
      { key: "Satellite/Radio Links", value: "Long-range VHF repeaters and satellite emergency alarm transmitters" },
      { key: "Perimeter System", value: "Double concertina wire fencing, solar LED searchlights, and alarm sirens" },
    ],
    pillars: [
      {
        title: "High-Alert Armed Sentries",
        desc: "Ex-military guards posted at vital transformers, fuel valves, and pipeline junctions on continuous alert.",
        icon: Award,
      },
      {
        title: "Remote Outpost Defense",
        desc: "Self-sustaining solar-powered security setups for remote telecom towers and desert utility sites.",
        icon: Zap,
      },
      {
        title: "Anti-Sabotage Perimeter",
        desc: "Reinforced fences, clear fire lanes, and searchlights preventing unauthorized access to critical assets.",
        icon: Shield,
      },
      {
        title: "SCADA Control Room Airlocks",
        desc: "Restricting access to power grid dispatch centers so only certified engineers enter operational hubs.",
        icon: Lock,
      },
    ],
    faqs: [
      {
        q: "How do you provide security for remote utility sites with no electricity or water?",
        a: "We deploy self-contained tactical security modules equipped with solar panels, battery banks, water reservoirs, sleeping cabins, and satellite communication links.",
      },
      {
        q: "Are the guards stationed at critical infrastructure sites armed?",
        a: "Yes. All infrastructure security outposts are manned by ex-military and armed forces veterans with licensed automatic shotguns and rifles.",
      },
      {
        q: "How do guards communicate from remote mountain or desert sites?",
        a: "We deploy high-gain VHF radio repeaters, dual-SIM commercial cellular boosters, and satellite emergency communicators linked directly to our central control room.",
      },
    ],
  },
];

export function getNationalGuardIndustryBySlug(slug) {
  if (!slug) return null;
  return NATIONAL_GUARD_INDUSTRIES.find(
    (ind) => ind.slug.toLowerCase() === slug.toLowerCase() || ind.id.toLowerCase() === slug.toLowerCase()
  );
}
