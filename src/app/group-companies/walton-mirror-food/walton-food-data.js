// ─────────────────────────────────────────────────────────────
// WALTON & MIRROR FOOD — COMPREHENSIVE DATA LAYER
// Location: src/app/group-companies/walton-mirror-food/walton-food-data.js
// ─────────────────────────────────────────────────────────────

export const COMPANY_INFO = {
  name: "Walton & Mirror Food",
  legalName: "Walton & Mirror Food Processing & Production (Pvt) Ltd.",
  parentGroup: "A Flagship Enterprise of ROYSONS Group",
  tagline: "Food Processing & Industrial Production",
  subtitle: "Pioneering Modern Food Processing, Cryogenic IQF Flash Freezing, Ambient Retort Meals, Dairy Systems & Global Halal FMCG Manufacturing",
  established: "1998",
  headquarters: "Roysons Industrial Complex, Raiwind Road Industrial Area, Lahore, Pakistan",
  regionalFacilities: [
    { city: "Lahore", label: "Central Processing Plant & IQF Freezing Complex", phone: "+92 (42) 3540-1280" },
    { city: "Faisalabad", label: "Grain Milling, Pulses & Oil Extraction Mill", phone: "+92 (41) 8720-450" },
    { city: "Karachi", label: "Maritime Export Logistics & Aseptic Canning Terminal", phone: "+92 (21) 3285-9100" },
    { city: "Multan", label: "Citrus & Mango Aseptic Pulping Center", phone: "+92 (61) 4580-320" },
    { city: "Dubai (UAE)", label: "Middle East & GCC Export Distribution Hub", phone: "+971 4 398 6200" },
  ],
  contacts: {
    generalEmail: "info@waltonmirrorfood.roysons.org",
    exportEmail: "exports@waltonmirrorfood.roysons.org",
    oemEmail: "privatelabel@waltonmirrorfood.roysons.org",
    hotline: "+92 (42) 3540-1280",
    gccHotline: "+971 4 398 6200",
  },
  stats: {
    yearsOfExcellence: "25+",
    productsManufactured: "400+",
    annualCapacity: "120,000 MT",
    exportMarkets: "35+ Countries",
    qaPassRate: "99.8%",
    halalCompliance: "100% Certified",
  },
};

export const HERO_SLIDES = [
  {
    image: "/waltonfood/hero_automated_processing.jpg",
    tag: "Automated Food Processing",
    title: "High-Capacity Industrial Food Processing & Canning",
    desc: "Deploying automated European optical laser sorting, continuous steam blanching, and aseptic canning lines delivering 120,000 metric tons of pure food products annually.",
    statsBadge: "120,000 MT Annual Output",
    metricLabel: "Automated Production",
    href: "#food-listings",
  },
  {
    image: "/waltonfood/hero_iqf_freezing.jpg",
    tag: "Cryogenic IQF Technology",
    title: "Individual Quick Freezing (IQF) at -38°C Sub-Zero",
    desc: "Locking in crisp garden flavor, vibrant natural color, and cellular nutrients within minutes for export-grade vegetables, French fries, parathas, and poultry snacks.",
    statsBadge: "Sub-Zero -38°C Rapid Lock",
    metricLabel: "IQF Frozen Foods",
    href: "#food-listings",
  },
  {
    image: "/waltonfood/hero_canning_retort.jpg",
    tag: "Ambient Retort Ready Meals",
    title: "Chef-Crafted Ready-to-Eat Gourmet Retort Pouches",
    desc: "12-month ambient storage meals cooked to authentic regional perfection with zero chemical preservatives using high-pressure steam sterilization retorts.",
    statsBadge: "12-Month Shelf-Life",
    metricLabel: "Ready-to-Eat Meals",
    href: "#food-listings",
  },
  {
    image: "/waltonfood/hero_dairy_beverage.jpg",
    tag: "Pure Dairy & UHT Processing",
    title: "Homogenized UHT Milk, Pure Butter & Desi Ghee",
    desc: "Farm-to-carton dairy excellence featuring direct steam injection UHT pasteurization, aseptic Tetra Pak filling, cultured creamery butter, and clarified golden desi ghee.",
    statsBadge: "100% Pure Farmstead Milk",
    metricLabel: "Dairy & UHT Line",
    href: "#food-listings",
  },
  {
    image: "/waltonfood/hero_bakery_line.jpg",
    tag: "Artisan Bakery & Flatbreads",
    title: "Automated Commercial Bakery & Biscuit Production Lines",
    desc: "Precision dough laminators, high-heat continuous tunnel ovens, and hermetic barrier packaging creating export-grade flaky parathas, premium butter cookies, and crisp tea rusks.",
    statsBadge: "50,000 Units Hourly",
    metricLabel: "Bakery Automation",
    href: "#food-listings",
  },
];

export const STATS = [
  { value: "25+", label: "Years of Food\nManufacturing Leadership" },
  { value: "400+", label: "Formulated Food\nProducts & SKUs" },
  { value: "120K+", label: "Tons Annual Production\nCapacity (MT)" },
  { value: "35+", label: "International Export\nDestinations" },
  { value: "99.8%", label: "HACCP & ISO 22000\nQA Pass Rate" },
];

export const FOOD_CATEGORIES = [
  "All",
  "IQF Frozen Foods",
  "Ready-to-Eat Retort Meals",
  "Dairy & UHT Line",
  "Beverages & Purees",
  "Grains & Flours",
  "Bakery & Snacks",
  "Sauces & Condiments",
  "Private Label OEM",
];

export const FOOD_LISTINGS = [
  // ─── 1. IQF FROZEN FOODS ───
  {
    id: "wmf-iqf-01",
    name: "Walton Gold Grade-A IQF Crispy French Fries",
    category: "IQF Frozen Foods",
    packaging: "1 kg & 2.5 kg Retail & Foodservice Polybags",
    shelfLife: "24 Months at -18°C",
    origin: "Lahore Processing Hub",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_french_fries.jpg",
    badge: "Top Global Seller",
    moq: "500 Master Cartons",
    summary:
      "Precision-cut shoestring (7mm) and crinkle-cut (9mm) Russet Burbank potatoes, steam-blanched and flash-frozen via cryogenic IQF tunnels for golden crispy frying.",
    specs: {
      "Freezing Technology": "Cryogenic Fluidized Bed IQF (-38°C)",
      "Cut Profiles": "Shoestring (7mm) / Crinkle Cut (9mm) / Steak Cut (11mm)",
      "Cooking Method": "Deep Fry at 175°C for 3-4 mins or Air Fry 12 mins",
      "Carton Specs": "10 x 1kg / 4 x 2.5kg corrugated export master box",
    },
    features: [
      "100% natural potatoes sourced from high-altitude contracted farms",
      "Zero trans fats and partially hydrogenated oils",
      "Exceptional crisp retention up to 25 minutes after frying",
      "Automated optical sorter removes all blemishes and green defects",
    ],
    allergens: "Produced in an allergen-free potato processing facility.",
  },
  {
    id: "wmf-iqf-02",
    name: "Farm-Fresh IQF Garden Sweet Green Peas",
    category: "IQF Frozen Foods",
    packaging: "400g, 1 kg & 10 kg Institutional Bulk",
    shelfLife: "24 Months at -18°C",
    origin: "Punjab Agrozones",
    certifications: "Global GAP · HACCP · Halal Certified",
    image: "/waltonfood/listing_green_peas.jpg",
    badge: "Garden Harvest",
    moq: "300 Master Cartons",
    summary:
      "Tender, naturally sweet spring peas harvested at peak brix maturity, depodded, washed, blanched, and IQF frozen within 3 hours of farm harvesting.",
    specs: {
      "Harvest to Freeze": "Under 180 Minutes Farm-to-Freeze Protocol",
      "Brix Sweetness": "12.5° – 14.5° Natural Brix Rating",
      "Size Grading": "Petit Pois (7.5mm) & Medium Sweet (9.2mm)",
      "Storage Temp": "Strict Cold Chain Integrity at -18°C or Lower",
    },
    features: [
      "Retains bright emerald green color and authentic sweet crunch",
      "No added artificial colors, preservatives, or sugars",
      "Individually frozen — zero clumping, pourable straight from freezer",
      "Triple-washed in micro-filtered ozone sanitizing water",
    ],
    allergens: "Allergen-free vegetable processing line.",
  },
  {
    id: "wmf-iqf-03",
    name: "Artisan Handcrafted Multi-Layer Flaky Parathas",
    category: "IQF Frozen Foods",
    packaging: "5-Piece, 20-Piece & 30-Piece Family Packs",
    shelfLife: "18 Months at -18°C",
    origin: "Lahore Bakery & Frozen Plant",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_flaky_parathas.jpg",
    badge: "Heritage Recipe",
    moq: "400 Master Cartons",
    summary:
      "Traditional South Asian flaky flatbreads rolled with multi-layered dough laminations, interleaved with hygienic parchment sheets for instant stovetop puffing.",
    specs: {
      "Dough Composition": "High-Gluten Enriched Wheat Flour, Pure Ghee / Vegetable Shortening",
      "Lamination": "32 Individual Micro-Layers per Paratha",
      "Preparation": "Pan-fry directly from frozen on pre-heated tava (3 mins)",
      "Packaging": "Printed multi-barrier gas-flushed pouch with zip lock",
    },
    features: [
      "Crispy exterior with pillowy tender, golden buttery layers",
      "Ready in 3 minutes without requiring any additional oil or butter",
      "Interleaved with food-grade baking separators for non-stick handling",
      "Exported to supermarkets across UK, North America, UAE & Saudi Arabia",
    ],
    allergens: "Contains Wheat (Gluten). May contain traces of Milk.",
  },
  {
    id: "wmf-iqf-04",
    name: "Golden Crispy Halal Breaded Chicken Tenders",
    category: "IQF Frozen Foods",
    packaging: "500g, 1 kg & 5 kg Foodservice Box",
    shelfLife: "18 Months at -18°C",
    origin: "Raiwind Poultry Processing Facility",
    certifications: "100% Hand-Slaughtered Halal · HACCP · ISO 22000",
    image: "/waltonfood/listing_chicken_tenders.jpg",
    badge: "100% Pure Breast Meat",
    moq: "500 Master Cartons",
    summary:
      "Whole muscle chicken breast strips marinated in savory spices, coated in Japanese panko crumb, flash-fried, and IQF frozen for maximum crunch.",
    specs: {
      "Meat Content": "100% Whole Muscle Tender Chicken Breast Fillet",
      "Crumb Style": "Dual-Coated Golden Japanese Style Panko",
      "Slaughter Standard": "Strict Hand-Slaughtered Islamic Halal Protocol",
      "Cook Method": "Deep fry at 180°C for 4-5 mins or Oven bake 18 mins",
    },
    features: [
      "Zero mechanically separated meat (MSM) or reconstituted fillers",
      "Infused with natural herb and garlic brine marinade",
      "Maintains tender juicy interior and ultra-crispy outer coating",
      "Export certified for European and GCC luxury food retail",
    ],
    allergens: "Contains Wheat (Gluten), Soy. May contain Milk traces.",
  },

  // ─── 2. READY-TO-EAT RETORT MEALS ───
  {
    id: "wmf-retort-01",
    name: "Shahi Mughlai Chicken Biryani Retort Meal",
    category: "Ready-to-Eat Retort Meals",
    packaging: "300g & 450g 4-Layer Barrier Aluminum Retort Pouches",
    shelfLife: "12 Months at Ambient Room Temperature",
    origin: "Lahore Retort Canning Plant",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_retort_biryani.jpg",
    badge: "Signature Delicacy",
    moq: "600 Master Cartons",
    summary:
      "Aromatic long-grain aged Basmati rice layered with tender bone-in chicken thighs, saffron, fried onions, and whole aromatic garam spices in a shelf-stable retort pouch.",
    specs: {
      "Shelf-Life Technology": "High-Pressure Counter-Pressure Steam Retort (121°C)",
      "Preservatives": "Zero Chemical Preservatives · 100% Thermal Sterilization",
      "Serving Prep": "Microwave pouch 90 seconds or immerse in boiling water 5 mins",
      "Pouch Specs": "PET / AL / NYLON / CPP 4-Ply High-Barrier Foil",
    },
    features: [
      "Authentic royal Mughal aroma with separately defined rice grains",
      "No refrigeration needed during storage, sea freight, or retail display",
      "Portioned for single and double executive consumer servings",
      "Ideal for airline catering, outdoor expeditions, and export markets",
    ],
    allergens: "Contains Milk Solids. May contain traces of Tree Nuts.",
  },
  {
    id: "wmf-retort-02",
    name: "Slow-Simmered Royal Beef Nihari Gourmet Stew",
    category: "Ready-to-Eat Retort Meals",
    packaging: "350g Retort Pouches with Sachet Garnish",
    shelfLife: "12 Months Ambient",
    origin: "Lahore Retort Canning Plant",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_retort_curry.jpg",
    badge: "Traditional Slow-Cook",
    moq: "500 Master Cartons",
    summary:
      "Tender beef shank cuts slow-cooked overnight in a velvety, spice-infused bone marrow gravy, enriched with fennel seeds, ginger, and aromatic piper longum.",
    specs: {
      "Meat Cut": "Prime Prime Halal Beef Shank & Marrow Cuts",
      "Gravy Viscosity": "Traditional Silk-Smooth Flour-Simmered Reduction",
      "Packaging": "Hermetically Sealed Foil Pouch with Julienne Ginger Packet",
      "Storage": "Ambient Store in Cool Dry Place (No Chill Chain Needed)",
    },
    features: [
      "Melt-in-mouth beef texture achieved through controlled thermal retort",
      "Authentic Old Lahore spice balance with rich marrow richness",
      "Eliminates hours of home preparation into a 3-minute gourmet dish",
      "Certified under international veterinary and health export protocols",
    ],
    allergens: "Contains Wheat (Gluten).",
  },
  {
    id: "wmf-retort-03",
    name: "Peshawari Chicken Karahi & Daal Makhani Meal Kit",
    category: "Ready-to-Eat Retort Meals",
    packaging: "Dual Compartment Tray (400g)",
    shelfLife: "12 Months Ambient",
    origin: "Lahore Retort Canning Plant",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_retort_curry.jpg",
    badge: "Combo Feast",
    moq: "450 Master Cartons",
    summary:
      "A complete meal combo featuring wok-seared Peshawari tomato chicken karahi alongside slow-simmered black lentils cooked with butter and cream.",
    specs: {
      "Net Weight": "400g (200g Chicken Karahi + 200g Creamy Daal Makhani)",
      "Barrier Protection": "EVOH High-Barrier Retort Polypropylene Trays",
      "Thermal Treatment": "F0 Lethality Value > 6.0 Continuous Verification",
      "Reheating": "Microwaveable tray with peelable steam-release film",
    },
    features: [
      "Twin-flavor combination delivering a balanced protein dinner",
      "Tangy fresh tomatoes, green chilies, and hand-crushed coriander seeds",
      "Zero artificial flavors, zero MSG, and zero synthetic emulsifiers",
      "Compact stackable retail packaging for supermarket shelf visibility",
    ],
    allergens: "Contains Dairy (Butter, Cream).",
  },

  // ─── 3. DAIRY & UHT LINE ───
  {
    id: "wmf-dairy-01",
    name: "Homogenized UHT Full-Cream Pure Milk (3.5% Fat)",
    category: "Dairy & UHT Line",
    packaging: "1 Litre & 250ml Aseptic Tetra Brik Packages",
    shelfLife: "6 Months at Ambient Room Temp",
    origin: "Raiwind Dairy Processing Complex",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_uht_milk.jpg",
    badge: "100% Pure Milk",
    moq: "1,000 Master Cartons",
    summary:
      "Direct steam injection UHT pasteurized whole cow and buffalo milk, standardized to 3.5% butterfat, fortified with Vitamin A & D3, sealed in 6-layer aseptic cartons.",
    specs: {
      "Processing Method": "Direct steam injection Ultra-High Temperature (142°C for 4s)",
      "Standardization": "3.5% Milk Fat & 8.5% Solid Not Fat (SNF)",
      "Aseptic Pack": "Tetra Pak Aseptic 6-Layer Polyethylene / Paper / Aluminum Foil",
      "Fortification": "Vitamin A (1,500 IU/L) & Vitamin D3 (400 IU/L)",
    },
    features: [
      "Fresh daily collection from contracted disease-free corporate dairy herds",
      "Zero added water, milk powder, adulterants, or chemical stabilizers",
      "Natural rich and creamy taste perfect for tea, coffee, and family nutrition",
      "Fully compliant with Codex Alimentarius dairy standards",
    ],
    allergens: "Contains Milk.",
  },
  {
    id: "wmf-dairy-02",
    name: "Pure Farmstead Cultured Butter & Golden Desi Ghee",
    category: "Dairy & UHT Line",
    packaging: "200g, 400g Butter Blocks & 1kg Tin Containers",
    shelfLife: "12 Months (Butter) / 24 Months (Desi Ghee)",
    origin: "Raiwind Dairy Processing Complex",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_desi_ghee.jpg",
    badge: "Heritage Pure Ghee",
    moq: "350 Master Cartons",
    summary:
      "Clarified butterfat slow-simmered in copper-lined kettles to produce granular golden desi ghee with a rich nutty aroma, alongside cultured creamery salted table butter.",
    specs: {
      "Ghee Purity": "99.8% Pure Milk Fat / Zero Moisture Content",
      "Granulation": "Natural Danedaar Granular Texture",
      "Butter Culturing": "Traditional Lactic Acid Flora Fermentation",
      "Tins": "Food-Grade Lacquered Hermetic Steel Tins with Easy-Open Pull Rings",
    },
    features: [
      "High smoke point (250°C) ideal for gourmet frying and sweets making",
      "Rich in natural fat-soluble vitamins (A, E, and K2)",
      "Zero trans fats, artificial aromas, or synthetic beta-carotene dyes",
      "Trusted by top pastry bakeries, luxury hotels, and export consumers",
    ],
    allergens: "Contains Milk Fat.",
  },
  {
    id: "wmf-dairy-03",
    name: "High-Melt Shredded Mozzarella & Cheddar Pizza Blend",
    category: "Dairy & UHT Line",
    packaging: "2 kg Foodservice Pouches (6 x 2kg Master Carton)",
    shelfLife: "12 Months at -18°C",
    origin: "Raiwind Dairy Processing Complex",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/hero_dairy_beverage.jpg",
    badge: "Foodservice Gold",
    moq: "300 Master Cartons",
    summary:
      "Custom 70/30 blend of low-moisture part-skim Mozzarella and sharp Cheddar shreds engineered for superior stretch, blister coverage, and rich buttery melt on pizzas.",
    specs: {
      "Blend Ratio": "70% Mozzarella (High Stretch) + 30% Aged Cheddar (Sharp Flavor)",
      "Melt Profile": "Rapid Flow at 240°C with 12-Inch Continuous Elastic Stretch",
      "Anti-Caking": "Coated with Natural Potato Starch for Free-Flowing Dispersal",
      "Freezing": "IQF Shredded for Pourable Hand Application Direct from Freezer",
    },
    features: [
      "Consistent golden-brown blistering without oil separation or burning",
      "Engineered specifically for commercial conveyor and deck pizza ovens",
      "High yield and coverage lowering pizza production food cost",
      "Supplied to national pizza franchises and institutional restaurant chains",
    ],
    allergens: "Contains Milk.",
  },

  // ─── 4. BEVERAGES & PUREES ───
  {
    id: "wmf-bev-01",
    name: "Aseptic Chaunsa & Sindhri Mango Pulp & Puree",
    category: "Beverages & Purees",
    packaging: "215 kg Steel Aseptic Drums & 20 kg Bag-in-Box",
    shelfLife: "24 Months at Ambient Storage",
    origin: "Multan Tropical Fruit Processing Facility",
    certifications: "US-FDA Registered · ISO 22000 · Halal · SGF Certified",
    image: "/waltonfood/listing_fruit_juice.jpg",
    badge: "Export Grade Puree",
    moq: "80 Drums (1 FCL Container)",
    summary:
      "World-famous Pakistani Chaunsa and Sindhri mangoes deseeded, refined, de-aerated, flash-sterilized at 108°C, and aseptically packaged into nitrogen-blanketed drums.",
    specs: {
      "Total Soluble Solids": "Minimum 28° – 32° Brix Natural Reading",
      "Acidity (as citric)": "0.45% – 0.65%",
      "Viscosity": "Bostwick (20°C): 8 – 12 cm / 30 sec",
      "Drum Specifications": "215 kg Steel Drums with Sterile Polyethylene Aseptic Liner Bags",
    },
    features: [
      "Intense natural tropical mango bouquet and deep golden color",
      "Zero added sugar, artificial flavors, acids, or preservatives",
      "Raw material for juices, ice creams, yogurts, and confectionery glazes",
      "Shipped worldwide across Europe, GCC, East Asia, and North America",
    ],
    allergens: "Allergen-free fruit puree.",
  },
  {
    id: "wmf-bev-02",
    name: "Cold-Pressed Citrus Juice & Tropical Fruit Nectars",
    category: "Beverages & Purees",
    packaging: "250ml, 1 Litre Tetra Pak & Glass Bottles",
    shelfLife: "12 Months Ambient",
    origin: "Multan Tropical Fruit Processing Facility",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_fruit_juice.jpg",
    badge: "100% Juice",
    moq: "800 Master Cartons",
    summary:
      "Directly squeezed Kinnow mandarin, pomegranate, and guava juices treated with gentle flash pasteurization to preserve natural Vitamin C and crisp orchards aromas.",
    specs: {
      "Juice Content": "100% Pure Fruit Juice & Pulp Nectar Formulations",
      "Thermal Protocol": "Gentle HTST Pasteurization (92°C for 15 sec)",
      "Packaging Options": "Tetra Prisma Aseptic with DreamCap / Embossed Glass Bottle",
      "Vitamin Retention": "Over 92% Natural Vitamin C Preserved",
    },
    features: [
      "Refreshing crisp taste with natural juicy citrus micro-pulps",
      "Non-GMO, free of artificial sweeteners, preservatives, and corn syrup",
      "Rich in antioxidant polyphenols and dietary bioflavonoids",
      "Available for private label supermarket co-packing programs",
    ],
    allergens: "Allergen-free beverage.",
  },

  // ─── 5. GRAINS & FLOURS ───
  {
    id: "wmf-grain-01",
    name: "Chakki Fresh Stone-Ground Fortified Whole Wheat Atta",
    category: "Grains & Flours",
    packaging: "5 kg, 10 kg & 20 kg Multi-Wall Woven Polypropylene Bags",
    shelfLife: "6 Months Cool Dry Storage",
    origin: "Faisalabad Flour Milling Complex",
    certifications: "ISO 22000 · HACCP · Halal · Fortified Standards",
    image: "/waltonfood/listing_chakki_atta.jpg",
    badge: "100% Whole Wheat",
    moq: "500 Bags",
    summary:
      "Traditional stone-ground whole grain wheat flour retaining 100% of the wheat germ and fiber bran, fortified with Iron, Folic Acid, Zinc, and Vitamin B12.",
    specs: {
      "Milling Method": "Traditional Heavy Granite Disc Chakki at Low Temperature",
      "Extraction Rate": "100% Whole Wheat (Bran, Endosperm & Wheat Germ Intact)",
      "Fortification": "WHO Micronutrient Premix (Iron, Folic Acid, Zinc, B-Complex)",
      "Moisture Content": "Strictly Controlled Under 11.5% for Shelf Stability",
    },
    features: [
      "Bakes soft, aromatic rotis that remain tender and warm for hours",
      "High dietary fiber promotes healthy glycemic digestion",
      "Zero chemical bleaching agents, chalk, or potassium bromate additives",
      "Automated optical wheat grain cleaning removes all chaff and impurities",
    ],
    allergens: "Contains Wheat (Gluten).",
  },
  {
    id: "wmf-grain-02",
    name: "Export Reserve Super Kernel Aromatic Basmati Rice",
    category: "Grains & Flours",
    packaging: "1 kg, 5 kg, 10 kg & 25 kg Zipper Burlap & Poly Bags",
    shelfLife: "36 Months Ambient",
    origin: "Punjab Basmati Growing Belt",
    certifications: "ISO 22000 · HACCP · Halal · DNA Pure Certified",
    image: "/waltonfood/listing_basmati_rice.jpg",
    badge: "Aged 2 Years",
    moq: "1 x 20ft Container (24 Metric Tons)",
    summary:
      "Naturally aged authentic Himalayan Super Kernel Basmati rice with an average grain length exceeding 7.4mm, elongating to twice its size upon cooking with sweet aroma.",
    specs: {
      "Grain Length": "7.4 mm Average Raw Grain Length / 16 mm Cooked Length",
      "Aging Duration": "Naturally Matured in Ventilated Silos for 24+ Months",
      "Purity": "98% Minimum Varietal Purity via DNA Testing",
      "Moisture": "Maximum 12.0% Moisture with 0% Chalky Grains",
    },
    features: [
      "Unmatched fragrance and delicate dry slender texture when steamed",
      "Grains cook into long, separate, non-sticky pearlescent needles",
      "Double-polished with Sortex optical lasers eliminating all discolored grains",
      "Shipped to Michelin-star Indian & Pakistani restaurants worldwide",
    ],
    allergens: "Gluten-Free grain.",
  },

  // ─── 6. BAKERY & SNACKS ───
  {
    id: "wmf-bakery-01",
    name: "High-Fiber Whole Grain Digestive Biscuits & Honey Rusk",
    category: "Bakery & Snacks",
    packaging: "100g, 250g & 400g Roll Packs and Tins",
    shelfLife: "12 Months Ambient",
    origin: "Lahore Bakery Plant",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_bakery_cookies.jpg",
    badge: "Wholesome Snack",
    moq: "600 Master Cartons",
    summary:
      "Crunchy golden biscuits baked with coarse stone-ground wheat flour, rolled oats, and pure vegetable oils, alongside double-baked crispy cardamom honey tea rusks.",
    specs: {
      "Oven Technology": "Continuous 60-Meter Indirect Gas-Fired Tunnel Oven",
      "Fiber Content": "6.8g Dietary Fiber per 100g Serving",
      "Sugar Profile": "Reduced Sugar Formula with Natural Blossom Honey",
      "Packaging": "Metalized OPP Moisture-Proof Foil Wrappers",
    },
    features: [
      "Satisfying wholesome crunch with deep toasted grain undertones",
      "Perfect tea and coffee dipping accompaniment",
      "Zero trans fats and zero artificial sweeteners",
      "Strong consumer shelf appeal with tamper-evident flow wrapping",
    ],
    allergens: "Contains Wheat (Gluten), Milk, Soy.",
  },

  // ─── 7. SAUCES & CONDIMENTS ───
  {
    id: "wmf-sauce-01",
    name: "Rich Tomato Ketchup, Chili Garlic & Hygenic Pickles",
    category: "Sauces & Condiments",
    packaging: "300g, 800g Squeeze Bottles, 1kg Pouches & 4kg Tubs",
    shelfLife: "18 Months Ambient",
    origin: "Lahore Condiment Division",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/listing_culinary_sauces.jpg",
    badge: "Tangy & Zesty",
    moq: "500 Master Cartons",
    summary:
      "Thick, lustrous tomato ketchup crafted from red-ripe Roma tomato paste, blended with vinegar and select spices, alongside zesty garlic chili dip and traditional pickles.",
    specs: {
      "Tomato Paste Base": "Cold-Break 28-30° Brix High-Purity Tomato Paste",
      "Viscosity": "Dense Squeeze Texture Passing USDA Grade-A Consistency",
      "Pickle Curing": "Natural Microbial Fermentation in 100% Pure Mustard Oil",
      "Closures": "Silicon-Valved No-Drip Flip Tops on Ergonomic PET Bottles",
    },
    features: [
      "Bursting with tangy vine-ripened tomato flavor and balanced sweetness",
      "Zero artificial food colorants, starches, or chemical thickeners",
      "Traditional mixed pickles include mango, green chili, carrot, and lemon",
      "Widely distributed across fast-food restaurant chains and retail grocers",
    ],
    allergens: "May contain traces of Mustard.",
  },

  // ─── 8. PRIVATE LABEL OEM ───
  {
    id: "wmf-oem-01",
    name: "Turnkey Supermarket Private Label & OEM Co-Packing",
    category: "Private Label OEM",
    packaging: "Custom Brand Packaging (Pouch, Box, Tub, Drum)",
    shelfLife: "Per Product Specification (6 to 24 Months)",
    origin: "Contract Manufacturing Division",
    certifications: "BRCGS · ISO 22000 · HACCP · Halal · FDA Verified",
    image: "/waltonfood/listing_private_label.jpg",
    badge: "OEM / B2B Suite",
    moq: "1 x 20ft FCL Container",
    summary:
      "End-to-end white-label food manufacturing for national supermarket chains and FMCG brands, covering custom recipe formulations, trial batch testing, and packaging.",
    specs: {
      "Contract Capabilities": "IQF Freezing, Retort Pouches, Canning, Bottling, Dry Blending",
      "Packaging Lines": "High-Speed VFFS, Flow Wrap, Tetra Pak, Multi-Barrier Foil, Tins",
      "Batch Scalability": "From 5 Metric Ton Pilot Runs to 1,000+ Ton Production Cycles",
      "Lab Validation": "Complete Accelerated Shelf-Life Testing & Nutritional Labeling",
    },
    features: [
      "Complete client intellectual property (IP) recipe protection and NDAs",
      "Full regulatory compliance with EU, GCC, US-FDA, and UK food safety rules",
      "Dedicated client account managers and real-time factory QC telemetry",
      "Competitive contract manufacturing margins maximizing retailer ROI",
    ],
    allergens: "Configured strictly according to private-label formulation.",
  },
  {
    id: "wmf-oem-02",
    name: "Institutional Foodservice Bulk Pack IQF Vegetables (10kg)",
    category: "Private Label OEM",
    packaging: "10 kg Master Corrugated Export Carton with Blue Poly-Liner",
    shelfLife: "24 Months at -18°C",
    origin: "Lahore Processing Hub",
    certifications: "ISO 22000 · HACCP · Halal Certified",
    image: "/waltonfood/plant_cold_storage.jpg",
    badge: "HORECA Bulk",
    moq: "200 Master Cartons",
    summary:
      "Cost-optimized bulk food-service packs of IQF diced carrots, sweet corn, green peas, and cut green beans tailored for commercial airline caterers, hotels, and food factories.",
    specs: {
      "Net Weight": "1 x 10kg Loose Free-Flowing IQF in Food-Grade Blue Poly-Liner",
      "Dicing Precision": "Uniform 10mm x 10mm Machine Diced Vegetable Cubes",
      "Grade": "Grade-A Export Quality with Minimal Defect Tolerance (<0.5%)",
      "Palletization": "72 Master Boxes per Euro-Pallet (720 kg net weight)",
    },
    features: [
      "Saves back-of-house kitchen preparation labor and zero peeling waste",
      "Consistent piece size ensures uniform cooking and plate presentation",
      "Heavy-duty double-wall corrugated cartons resist cold-storage moisture",
      "Supplied on scheduled recurring contracts to major institutional kitchens",
    ],
    allergens: "Allergen-free vegetable processing.",
  },
];

export const PROCESSING_CAPABILITIES = [
  {
    id: "automated-processing",
    title: "High-Speed Automated Processing & Canning",
    desc: "Equipped with automated continuous optical sorters, vibrating destoners, hydro-coolers, and high-speed rotary vacuum can seamers operating at 400 cans per minute.",
    image: "/waltonfood/hero_automated_processing.jpg",
    metrics: "400 Cans / Minute Speed",
    features: [
      "Automated optical laser sorting removing 99.9% of visual blemish defects",
      "Continuous counter-flow steam blanchers optimizing enzyme deactivation",
      "Aseptic hot-fill and cold-fill lines for sauces, purees, and beverages",
      "In-line vacuum checkweighers and double-seam laser profile monitoring",
    ],
  },
  {
    id: "cryogenic-iqf",
    title: "Sub-Zero Cryogenic IQF Freezing Tunnels (-38°C)",
    desc: "Dual fluidized bed IQF freezing tunnels utilizing sub-zero cold air blasts that instantly freeze food pieces in suspension, locking cellular moisture and crispness.",
    image: "/waltonfood/hero_iqf_freezing.jpg",
    metrics: "8,000 kg / Hour IQF Capacity",
    features: [
      "Ultra-rapid freezing halts cellular moisture migration within 6 minutes",
      "Completely individual free-flowing pieces preventing ice lump formation",
      "Hygienic stainless steel modular belts with automatic CIP wash cycles",
      "Continuous ammonia / CO2 cascade refrigeration reducing carbon impact",
    ],
  },
  {
    id: "retort-sterilization",
    title: "High-Pressure Counter-Pressure Retort Sterilizers",
    desc: "Automated water-spray retort autoclaves delivering precise F0 thermal sterilization for shelf-stable ready meals, curries, and soups without refrigeration.",
    image: "/waltonfood/hero_canning_retort.jpg",
    metrics: "12-Month Ambient Shelf Life",
    features: [
      "Over-pressure steam-air regulation preventing pouch bursting during cooling",
      "Computerized thermal mapping sensors logging core temperature curves",
      "Completely eliminates need for synthetic benzoates or sorbate preservatives",
      "Handles 4-ply aluminum pouches, semi-rigid trays, and glass jars",
    ],
  },
  {
    id: "dairy-processing",
    title: "Aseptic UHT Dairy & Cultured Creamery Systems",
    desc: "Turnkey continuous UHT pasteurization and aseptic packaging plants producing homogenized long-life milk, cultured butter, clarified ghee, and shredded cheeses.",
    image: "/waltonfood/hero_dairy_beverage.jpg",
    metrics: "250,000 Litres / Day Milk",
    features: [
      "Direct steam infusion UHT reaching 142°C for 4 seconds with zero cooked taste",
      "Aseptic Tetra Pak packaging lines with automated downstream case packers",
      "Stainless steel continuous butter churns and vacuum ghee dehydrators",
      "Controlled sanitary cleanrooms with HEPA filtration and positive pressure",
    ],
  },
  {
    id: "food-science-lab",
    title: "Food Science R&D & Sensory Test Kitchen",
    desc: "State-of-the-art pilot kitchens and microbiological laboratories where culinary chefs and certified food technologists formulate next-generation FMCG recipes.",
    image: "/waltonfood/plant_qa_lab.jpg",
    metrics: "400+ Custom Recipes Formulated",
    features: [
      "Accelerated environmental shelf-life chambers testing temperature extremes",
      "Texture analyzers, digital refractometers, and color spectrophotometers",
      "Sensory tasting booths with controlled lighting for consumer panel testing",
      "Clean-label reformulation eliminating artificial E-numbers and sodium",
    ],
  },
  {
    id: "cold-chain-logistics",
    title: "Automated Cold Storage & Global Shipping Hub",
    desc: "Centrally managed automated high-bay sub-zero warehouse with 15,000 pallet positions connected to dedicated reefer fleets and international export sea terminals.",
    image: "/waltonfood/plant_cold_storage.jpg",
    metrics: "15,000 Pallet Cold Capacity",
    features: [
      "Constant -20°C holding temperature with computerized rack stacker cranes",
      "Reefer truck loading docks with inflatable air seals maintaining zero heat gain",
      "Full GS1 barcode batch tracking and real-time IoT temperature telematics",
      "Direct bonded customs export clearing for UK, USA, Europe, and Middle East",
    ],
  },
];

export const QUALITY_STANDARDS = [
  {
    name: "ISO 22000:2018",
    title: "Food Safety Management System",
    desc: "End-to-end food safety governance covering biological, chemical, and physical risk prevention across the entire supply chain.",
  },
  {
    name: "HACCP Certified",
    title: "Hazard Analysis Critical Control Point",
    desc: "Codex Alimentarius validated critical control points with real-time digital logging of temperatures, seam checks, and sanitation.",
  },
  {
    name: "100% Halal Verified",
    title: "Certified Halal Production",
    desc: "Accredited by international Halal certification bodies (SANHA / PNAC / ESMA) ensuring absolute Islamic dietary compliance.",
  },
  {
    name: "BRCGS Compliant",
    title: "Global Standard for Food Safety",
    desc: "Benchmarked to Global Food Safety Initiative (GFSI) requirements for top-tier international supermarket vendor qualification.",
  },
  {
    name: "US-FDA Registered",
    title: "Foreign Food Facility Registration",
    desc: "Full compliance with the US Food Safety Modernization Act (FSMA) and Preventive Controls for Human Food standards.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Contract Farm Sourcing & Traceability",
    desc: "Sourcing premium crops, dairy, and livestock from audited contract growers with strict pesticide and soil testing.",
  },
  {
    num: "02",
    title: "Laboratory Intake & Biochemical Screening",
    desc: "Raw ingredients undergo automated moisture, Brix sweetness, microbiological purity, and heavy metal chromatography tests.",
  },
  {
    num: "03",
    title: "Optical Sorting, Blanching & Cooking",
    desc: "High-precision laser sorters remove defective items before continuous steam blanching, marination, and chef cooking.",
  },
  {
    num: "04",
    title: "Cryogenic IQF Freezing or Retort Canning",
    desc: "Products are flash-frozen at -38°C in minutes or sealed into multi-barrier pouches for high-pressure retort sterilization.",
  },
  {
    num: "05",
    title: "Cleanroom Packaging & In-Line Inspection",
    desc: "Packaging in hermetic nitrogen-flushed containers with dual in-line metal detectors and X-ray inspection systems.",
  },
  {
    num: "06",
    title: "Sub-Zero Storage & Worldwide Export",
    desc: "Stored in our 15,000-pallet automated cold warehouse and dispatched via refrigerated containers to 35+ countries.",
  },
];

export const FAQS = [
  {
    q: "What certifications does Walton & Mirror Food hold for global export?",
    a: "Walton & Mirror Food processing plants operate under ISO 22000:2018, HACCP Codex Alimentarius, Halal Certification (SANHA / PNAC), BRCGS, and US-FDA registration. We meet stringent veterinary and food health standards for the UK, EU, USA, Canada, and GCC markets.",
  },
  {
    q: "What is Individual Quick Freezing (IQF) and how does it preserve food quality?",
    a: "IQF is a specialized cryogenic freezing process at -38°C that freezes each individual food piece (e.g. green pea, French fry, berry, or diced chicken) within minutes. This rapid thermal shock creates micro-crystals that preserve cell membranes, preventing nutrient loss, sogginess, and ice clumping.",
  },
  {
    q: "Does Walton & Mirror Food provide private label (OEM) contract manufacturing?",
    a: "Yes. We offer complete turnkey private-label solutions for supermarket chains, multinational FMCG brand owners, and foodservice distributors. Services include bespoke recipe R&D, pilot trial batches, custom barrier packaging design, and worldwide containerized logistics.",
  },
  {
    q: "What are shelf-stable retort ready-to-eat meals, and do they contain preservatives?",
    a: "Our retort meals (such as Chicken Biryani, Beef Nihari, and Daal) contain ZERO chemical preservatives. They are sealed in 4-ply airtight barrier pouches and sterilized under high-pressure steam counter-pressure retorts at 121°C, achieving up to 12 months of ambient room-temperature shelf life.",
  },
  {
    q: "What is your aggregate manufacturing and cold storage capacity?",
    a: "Walton & Mirror Food operates an annual production capacity of over 120,000 metric tons across 4 processing divisions, backed by a 15,000-pallet automated sub-zero (-20°C) cold chain distribution center in Lahore.",
  },
  {
    q: "How can international buyers request samples or wholesale quotations?",
    a: "International distributors and commercial buyers can use our online 'Inquire Supply' button or contact our Export Desk at exports@waltonmirrorfood.roysons.org / WhatsApp +92-304-7527498. We provide sample shipments via air express and containerized CIF/FOB quotes.",
  },
];
