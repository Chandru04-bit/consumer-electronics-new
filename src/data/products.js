// Mock Product Catalog for VOLTIX Audio & Smart Wearables

export const CATEGORIES = [
  {
    id: "all",
    name: "All Products",
    count: 20,
    icon: "LayoutGrid"
  },
  {
    id: "earbuds",
    name: "Wireless Earbuds",
    count: 6,
    icon: "Headphones",
    description: "True wireless earbuds with Active Noise Cancellation and deep bass",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "smartwatches",
    name: "Smart Watches",
    count: 5,
    icon: "Watch",
    description: "Rugged & AMOLED smartwatches with health tracking & Bluetooth calling",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "headphones",
    name: "Headphones",
    count: 4,
    icon: "Disc",
    description: "Studio-grade wireless over-ear headphones with 70hr battery life",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "speakers",
    name: "Speakers",
    count: 3,
    icon: "Radio",
    description: "Portable 360° surround sound Bluetooth speakers with RGB sync",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "accessories",
    name: "Accessories",
    count: 2,
    icon: "Zap",
    description: "High-speed GaN fast chargers, magnetic docks, and armor cables",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop"
  }
];

export const PRODUCTS = [
  // --- WIRELESS EARBUDS ---
  {
    id: "voltix-pods-pro-anc",
    name: "Voltix Pods Pro ANC",
    slug: "voltix-pods-pro-anc",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 3499,
    originalPrice: 7999,
    discountPercentage: 56,
    rating: 4.8,
    reviewsCount: 1420,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 42,
    tagline: "42dB Hybrid ANC • 50Hr Playtime • Spatial Audio",
    description: "Elevate your acoustic world with Voltix Pods Pro. Engineered with Hybrid 42dB Active Noise Cancellation, custom 11mm Titanium Drivers, and Quad-Mic ENC for crystal clear call quality even in howling winds.",
    colors: [
      { name: "Obsidian Black", hex: "#111827", code: "black" },
      { name: "Arctic Frost", hex: "#F8FAFC", code: "white" },
      { name: "Electric Cyan", hex: "#00F0FF", code: "cyan" }
    ],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "42dB Hybrid Active Noise Cancellation with Transparency Mode",
      "11mm Custom Titanium Diaphragm for deep thumping bass",
      "Up to 50 Hours total playback with ASAP™ Fast Charge (10min = 5hr)",
      "Quad-Mic AI Environmental Noise Cancellation for studio voice calls",
      "Ultra-Low 38ms Beast Mode™ for lag-free mobile gaming",
      "IPX5 Water & Sweat Resistance for intense workouts"
    ],
    specs: {
      "Driver Size": "11mm Dynamic Titanium",
      "Bluetooth Version": "v5.3 Low Energy",
      "Battery Life": "10 Hrs (Buds) + 40 Hrs (Case)",
      "Charging Time": "45 Mins (Type-C Fast Charge)",
      "Noise Cancellation": "42dB Hybrid ANC",
      "Latency": "38ms Ultra-Low Gaming Mode",
      "Water Resistance": "IPX5 Splash Resistant",
      "Microphones": "4x MEMS Microphones with AI ENC",
      "Warranty": "1 Year Replacement Warranty"
    },
    customerReviews: [
      {
        id: "r1",
        author: "Aarav Sharma",
        rating: 5,
        date: "2 days ago",
        verified: true,
        title: "Mindblowing ANC and Punchy Bass!",
        comment: "The noise cancellation completely blocks out metro and cafe background noise. Soundstage is punchy without distorting vocals. Best value ANC earbuds hands down!"
      },
      {
        id: "r2",
        author: "Priya Nair",
        rating: 5,
        date: "1 week ago",
        verified: true,
        title: "Super comfortable for all-day zoom calls",
        comment: "The mic clarity is exceptional. My colleagues noticed the difference right away. The Arctic Frost color looks gorgeous."
      },
      {
        id: "r3",
        author: "Karan Verma",
        rating: 4,
        date: "2 weeks ago",
        verified: true,
        title: "Great battery life",
        comment: "Charges super fast and lasts almost a whole week without charging the case. ANC is very solid for this price."
      }
    ]
  },
  {
    id: "voltix-aerobass-2",
    name: "Voltix AeroBass 2",
    slug: "voltix-aerobass-2",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 1999,
    originalPrice: 4499,
    discountPercentage: 55,
    rating: 4.6,
    reviewsCount: 890,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 65,
    tagline: "Mega 13mm Bass Drivers • 60Hr Battery • Dual Pairing",
    description: "Engineered for pure adrenaline. AeroBass 2 pumps out concert-grade bass with oversized 13mm neodymium drivers and seamless dual-device connectivity.",
    colors: [
      { name: "Midnight Black", hex: "#0F172A", code: "black" },
      { name: "Volt Green", hex: "#10B981", code: "green" },
      { name: "Crimson Red", hex: "#EF4444", code: "red" }
    ],
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "13mm BoomBass™ Drivers for explosive lows",
      "60 Hours marathon playtime with pocket-sized case",
      "Instant Wake & Pair (IWP™) with Bluetooth 5.3",
      "Dual Device Multi-Point connection",
      "Touch sensor controls with voice assistant support"
    ],
    specs: {
      "Driver Size": "13mm Extra Bass Neodymium",
      "Bluetooth Version": "v5.3",
      "Battery Life": "60 Hours Total",
      "Charging Time": "60 Mins",
      "Latency": "45ms",
      "Water Resistance": "IPX4",
      "Warranty": "1 Year Replacement Warranty"
    },
    customerReviews: [
      {
        id: "r4",
        author: "Devendra Rathore",
        rating: 5,
        date: "3 days ago",
        verified: true,
        title: "Unreal bass for the price",
        comment: "If you love EDM or hip hop, don't think twice. AeroBass 2 hits hard!"
      }
    ]
  },
  {
    id: "voltix-pulse-gaming-buds",
    name: "Voltix Pulse Gaming TWS",
    slug: "voltix-pulse-gaming-buds",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 2299,
    originalPrice: 4999,
    discountPercentage: 54,
    rating: 4.7,
    reviewsCount: 620,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 28,
    tagline: "28ms Ultra Latency • Cyberpunk RGB Glow • 3D Positional Audio",
    description: "Designed for competitive gamers. Instant audio response with 28ms ultra-low latency, dynamic Breathing RGB LEDs, and 3D positional footsteps sound engine.",
    colors: [
      { name: "Cyberpunk Black", hex: "#18181B", code: "black" },
      { name: "Neon Yellow", hex: "#EAB308", code: "yellow" }
    ],
    images: [
      "https://images.unsplash.com/photo-1631867675167-90a456a90863?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "28ms Zero-Lag Gaming Mode for instant weapon firing feedback",
      "Dynamic Breathing RGB glow on both buds and charging capsule",
      "3D Positional Audio to pinpoint enemy footsteps",
      "40 Hours gaming endurance"
    ],
    specs: {
      "Driver Size": "10mm Gaming Tuned Drivers",
      "Latency": "28ms Ultra Low Latency",
      "Battery Life": "40 Hours Total",
      "RGB Effects": "7-Color Breathing LED",
      "Water Resistance": "IPX5",
      "Warranty": "1 Year Warranty"
    },
    customerReviews: [
      {
        id: "r5",
        author: "Rohan M.",
        rating: 5,
        date: "5 days ago",
        verified: true,
        title: "PUBG and BGMI beast",
        comment: "Zero delay while gaming. The positional sound gives me an actual competitive edge."
      }
    ]
  },
  {
    id: "voltix-air-flow-lite",
    name: "Voltix AirFlow Lite TWS",
    slug: "voltix-air-flow-lite",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 1299,
    originalPrice: 2999,
    discountPercentage: 56,
    rating: 4.5,
    reviewsCount: 340,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 80,
    tagline: "Ultra Featherweight 3.2g • Crisp Hi-Fi • 35Hr Playtime",
    description: "Featherlight comfort you won't even feel. Weighing only 3.2g per earbud with half-in-ear ergonomic styling and crystal clear vocal reproduction.",
    colors: [
      { name: "Cloud White", hex: "#FFFFFF", code: "white" },
      { name: "Pastel Pink", hex: "#F472B6", code: "pink" },
      { name: "Slate Grey", hex: "#64748B", code: "grey" }
    ],
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "3.2g ultra-light half-in-ear fit",
      "35 Hours Total Playtime",
      "10mm Dynamic Audio Drivers",
      "Smart Touch Sensor Controls"
    ],
    specs: {
      "Weight": "3.2g per earbud",
      "Battery Life": "35 Hours Total",
      "Bluetooth": "v5.3",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-sport-hook-pro",
    name: "Voltix SportHook Pro TWS",
    slug: "voltix-sport-hook-pro",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 2799,
    originalPrice: 5999,
    discountPercentage: 53,
    rating: 4.9,
    reviewsCount: 512,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    stockCount: 35,
    tagline: "Secure-Fit Ear Hooks • IPX7 Waterproof • 55Hr Battery",
    description: "Locked-in stability for marathon runners, gym beasts, and extreme sports enthusiasts. Flexible silicone ear hooks never fall off.",
    colors: [
      { name: "Matte Black", hex: "#1E293B", code: "black" },
      { name: "Electric Orange", hex: "#FF7A00", code: "orange" }
    ],
    images: [
      "https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Flexible Ergonomic Soft-Silicone Ear Hooks",
      "IPX7 Full Submersion Waterproofing",
      "55 Hours Total Playtime with digital LED case",
      "BassBooster 12mm drivers"
    ],
    specs: {
      "Waterproofing": "IPX7 Hydro-Shield",
      "Battery Life": "55 Hours",
      "Bluetooth": "v5.3",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-tws-crystal-clear",
    name: "Voltix Crystal Clear ANC",
    slug: "voltix-tws-crystal-clear",
    category: "earbuds",
    categoryName: "Wireless Earbuds",
    price: 2999,
    originalPrice: 6499,
    discountPercentage: 54,
    rating: 4.7,
    reviewsCount: 420,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 19,
    tagline: "Transparent Cyber Aesthetic • 35dB ANC • Hi-Res Audio",
    description: "Futuristic transparent aesthetic showing the internal architecture, paired with 35dB Active Noise Cancellation and Hi-Res wireless audio support.",
    colors: [
      { name: "Clear Smoked Glass", hex: "#334155", code: "smoke" },
      { name: "Clear Crystal", hex: "#E2E8F0", code: "crystal" }
    ],
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Transparent futuristic chassis design",
      "35dB Active Noise Cancellation",
      "Hi-Res Wireless Audio with LDAC support",
      "45 Hours Total Battery"
    ],
    specs: {
      "Battery Life": "45 Hours",
      "ANC": "35dB Active Cancellation",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },

  // --- SMART WATCHES ---
  {
    id: "voltix-horizon-ultra-amoled",
    name: "Voltix Horizon Ultra AMOLED",
    slug: "voltix-horizon-ultra-amoled",
    category: "smartwatches",
    categoryName: "Smart Watches",
    price: 3999,
    originalPrice: 8999,
    discountPercentage: 55,
    rating: 4.9,
    reviewsCount: 2180,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 50,
    tagline: "2.04\" 3D Curved AMOLED • Bluetooth Calling • Stainless Steel Frame",
    description: "The pinnacle of wrist luxury and smartwatch tech. Featuring an ultra-crisp 2.04-inch Always-On AMOLED display with 1000 nits peak brightness, aerospace-grade metallic body, single-chip BT calling, and 120+ sports modes.",
    colors: [
      { name: "Titanium Silver", hex: "#94A3B8", code: "silver" },
      { name: "Carbon Black", hex: "#0F172A", code: "black" },
      { name: "Champagne Gold", hex: "#F59E0B", code: "gold" }
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "2.04\" Super AMOLED Display with 368x448 resolution & 60Hz refresh rate",
      "1000 Nits High Brightness for crystal clear outdoor sunlight readability",
      "Advanced TruSync™ Single-Chip Bluetooth Calling with dial pad & contacts",
      "Complete Health Suite: 24/7 Heart Rate, SpO2, Sleep Tracking & Stress Monitor",
      "120+ Sports Modes with auto-workout recognition",
      "Premium Zinc Alloy Casing with functional rotating digital crown",
      "Up to 10 Days battery life on typical use"
    ],
    specs: {
      "Display": "2.04\" Always-On AMOLED (368x448 px, 60Hz)",
      "Peak Brightness": "1000 Nits",
      "Casing Material": "Aerospace Grade Zinc Alloy",
      "Battery Life": "Up to 10 Days (3-4 Days with BT Calling)",
      "Calling": "Single-chip BT 5.3 with HD Speaker & Mic",
      "Waterproof Rating": "IP68 Dust & Water Resistant",
      "Sensors": "Optical Heart Rate, SpO2, Accelerometer, Barometer",
      "Compatibility": "Android 6.0+ & iOS 10.0+",
      "Warranty": "1 Year Replacement Guarantee"
    },
    customerReviews: [
      {
        id: "r6",
        author: "Vikram Malhotra",
        rating: 5,
        date: "Yesterday",
        verified: true,
        title: "Looks and feels like a $400 flagship watch!",
        comment: "The 2.04 AMOLED display is astonishingly bright and responsive with smooth 60fps scrolling. The rotating crown is metallic and feels tactile. Absolute 10/10."
      },
      {
        id: "r7",
        author: "Ananya Desai",
        rating: 5,
        date: "4 days ago",
        verified: true,
        title: "Battery life really surprised me",
        comment: "Easily lasts a week with all health monitoring active. The calling speaker is crisp and loud even inside the car."
      }
    ]
  },
  {
    id: "voltix-velocity-rugged-pro",
    name: "Voltix Velocity Rugged Pro",
    slug: "voltix-velocity-rugged-pro",
    category: "smartwatches",
    categoryName: "Smart Watches",
    price: 3299,
    originalPrice: 7499,
    discountPercentage: 56,
    rating: 4.8,
    reviewsCount: 1120,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 38,
    tagline: "Military-Grade Shockproof • Built-in GPS • 15-Day Battery",
    description: "Built for conquerors and outdoor explorers. Features reinforced armor bezel, 1.96-inch HD display, dual-band GPS route tracking, altitude barometer, and 15 days of unbreakable endurance.",
    colors: [
      { name: "Tactical Green", hex: "#166534", code: "green" },
      { name: "Stealth Black", hex: "#0F172A", code: "black" },
      { name: "Desert Sand", hex: "#D97706", code: "sand" }
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "MIL-STD-810H Military Shockproof & Extreme Temperature Certified",
      "Built-in GPS & Compass Navigation",
      "1.96\" Sapphire Glass Impact-Resistant Screen",
      "15 Days Expedition Battery Life",
      "130+ Extreme Sports & Trail Tracking Modes"
    ],
    specs: {
      "Display": "1.96\" HD Toughened Glass",
      "Durability": "MIL-STD-810H Tested",
      "Battery Life": "15 Days Normal / 30 Days Standby",
      "Water Resistance": "5ATM (50 Meters Deep Water)",
      "Sensors": "GPS, Compass, Altimeter, SpO2, HR",
      "Warranty": "1 Year Replacement Warranty"
    },
    customerReviews: [
      {
        id: "r8",
        author: "Major Sandeep K.",
        rating: 5,
        date: "3 weeks ago",
        verified: true,
        title: "Tough as steel",
        comment: "Survived tough trekking expeditions and mountain rain. The GPS accuracy is spot on!"
      }
    ]
  },
  {
    id: "voltix-edge-slim-smartwatch",
    name: "Voltix Edge Slim",
    slug: "voltix-edge-slim-smartwatch",
    category: "smartwatches",
    categoryName: "Smart Watches",
    price: 2499,
    originalPrice: 5999,
    discountPercentage: 58,
    rating: 4.6,
    reviewsCount: 780,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 45,
    tagline: "8.8mm Ultra-Slim Profile • 1.85\" IPS • Female Health Suite",
    description: "Sleek elegance meets wellness tracking. Featuring an ultra-thin 8.8mm aluminum chassis, responsive 1.85\" HD IPS display, 200+ cloud watch faces, and 24/7 vitals monitoring.",
    colors: [
      { name: "Rose Gold", hex: "#FB7185", code: "rosegold" },
      { name: "Silver Starlight", hex: "#E2E8F0", code: "silver" },
      { name: "Space Grey", hex: "#475569", code: "grey" }
    ],
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "8.8mm featherweight sleek design",
      "1.85\" Vivid Full-Touch HD IPS Display",
      "Female Menstrual & Ovulation Cycle Tracking",
      "Bluetooth calling with quick reply presets",
      "IP67 Water Resistant"
    ],
    specs: {
      "Thickness": "8.8mm Ultra Slim",
      "Display": "1.85\" HD IPS",
      "Battery Life": "7 Days",
      "Water Resistance": "IP67",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-dial-classic-round",
    name: "Voltix Dial Classic Round",
    slug: "voltix-dial-classic-round",
    category: "smartwatches",
    categoryName: "Smart Watches",
    price: 3499,
    originalPrice: 7999,
    discountPercentage: 56,
    rating: 4.7,
    reviewsCount: 650,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    stockCount: 22,
    tagline: "1.43\" Round AMOLED • Leather Strap • Rotating Bezel",
    description: "Timeless analog charm infused with cutting-edge smart functionality. Features a circular 1.43\" AMOLED 466x466 display, genuine leather band, and full biometric tracking.",
    colors: [
      { name: "Vintage Tan Leather", hex: "#B45309", code: "tan" },
      { name: "Classic Black Leather", hex: "#18181B", code: "black" }
    ],
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "1.43\" Circular AMOLED 466x466 high resolution",
      "Handcrafted genuine Italian leather strap included",
      "AI Voice Assistant (Siri / Google Assistant)",
      "Wireless magnetic charging dock"
    ],
    specs: {
      "Display": "1.43\" Circular AMOLED (466x466)",
      "Battery Life": "8 Days",
      "Charging": "Magnetic Wireless Puck",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-fit-active-plus",
    name: "Voltix FitActive Plus",
    slug: "voltix-fit-active-plus",
    category: "smartwatches",
    categoryName: "Smart Watches",
    price: 1899,
    originalPrice: 3999,
    discountPercentage: 52,
    rating: 4.5,
    reviewsCount: 410,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 60,
    tagline: "Fitness Band + Smartwatch Hybrid • 14-Day Battery",
    description: "Lightweight fitness tracker with 1.69\" curved screen, continuous calorie burn tracking, real-time heart rate zones, and camera shutter control.",
    colors: [
      { name: "Navy Blue", hex: "#1E3A8A", code: "blue" },
      { name: "Carbon Black", hex: "#18181B", code: "black" }
    ],
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "1.69\" Curved Touch Display",
      "14 Days long battery endurance",
      "100+ Watch faces",
      "Sedentary & Hydration reminders"
    ],
    specs: {
      "Battery Life": "14 Days",
      "Water Resistance": "IP68",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },

  // --- HEADPHONES ---
  {
    id: "voltix-apex-studio-wireless",
    name: "Voltix Apex Studio ANC",
    slug: "voltix-apex-studio-wireless",
    category: "headphones",
    categoryName: "Headphones",
    price: 4999,
    originalPrice: 11999,
    discountPercentage: 58,
    rating: 4.9,
    reviewsCount: 1870,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 30,
    tagline: "45dB Adaptive ANC • 40mm Bio-Cellulose Drivers • 70Hr Playtime",
    description: "Immerse yourself in audiophile-grade acoustic mastery. The Apex Studio features custom 40mm Bio-Cellulose drivers, 45dB Adaptive Active Noise Cancellation, memory foam plush earcups, and an astonishing 70 hours of non-stop playback.",
    colors: [
      { name: "Matte Cosmic Black", hex: "#0F172A", code: "black" },
      { name: "Silver Mist", hex: "#CBD5E1", code: "silver" },
      { name: "Royal Navy", hex: "#1E3A8A", code: "navy" }
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "45dB Adaptive Hybrid Active Noise Cancellation with Transparency Mode",
      "40mm High-Resolution Bio-Cellulose Acoustic Drivers for true Hi-Fi sound",
      "Unmatched 70 Hours Battery Life (50 Hours with ANC active)",
      "Ultra-Plush CloudFoam™ Memory Earcups for hours of fatigue-free listening",
      "Dual Mode: Wireless Bluetooth 5.3 + Zero-loss 3.5mm AUX wired cable",
      "Foldable swivel hinge design with premium protective hardshell travel case"
    ],
    specs: {
      "Driver": "40mm Custom Bio-Cellulose Neodymium",
      "Frequency Response": "16Hz - 40,000Hz (Hi-Res Certified)",
      "Battery Life": "70 Hours (ANC Off) / 50 Hours (ANC On)",
      "Charging": "Type-C Turbo Charge (15 min = 10 hrs)",
      "Bluetooth": "v5.3 Multi-Point Dual Connect",
      "Impedance": "32 Ohms",
      "Weight": "245g Lightweight Ergonomic",
      "Accessories Included": "Hard Shell EVA Case, 3.5mm Braided Cable, Airplane Adapter, USB-C Cable",
      "Warranty": "1 Year Replacement Warranty"
    },
    customerReviews: [
      {
        id: "r9",
        author: "Dr. Siddharth Sen",
        rating: 5,
        date: "2 days ago",
        verified: true,
        title: "Audiophile perfection at a fraction of Sony/Bose cost",
        comment: "The clarity across mid frequencies and treble is pristine. ANC cancels airplane engine drone effortlessly. I use them 8 hours daily without any ear fatigue."
      },
      {
        id: "r10",
        author: "Meera Krishnan",
        rating: 5,
        date: "1 week ago",
        verified: true,
        title: "The battery really lasts forever!",
        comment: "Charged it on Monday and still had 40% battery by Sunday. Build quality feels like luxury studio monitors."
      }
    ]
  },
  {
    id: "voltix-bassmax-over-ear",
    name: "Voltix BassMax 500",
    slug: "voltix-bassmax-over-ear",
    category: "headphones",
    categoryName: "Headphones",
    price: 2999,
    originalPrice: 6999,
    discountPercentage: 57,
    rating: 4.7,
    reviewsCount: 940,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    stockCount: 40,
    tagline: "BassBoost™ Engine • 50Hr Playtime • Foldable Design",
    description: "Pumps heart-vibrating bass frequencies with dedicated hardware BassEQ button, 50-hour battery, and ultra-comfy breathable protein leather pads.",
    colors: [
      { name: "Deep Charcoal", hex: "#1E293B", code: "charcoal" },
      { name: "Neon Blue Accent", hex: "#0284C7", code: "blue" }
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Hardware BassEQ toggle switch for 10dB extra sub-bass boost",
      "50 Hours Continuous Playback",
      "Foldable & compact travel hinges",
      "Built-in HD microphone for hands-free calls"
    ],
    specs: {
      "Driver": "50mm Bass Dynamic Drivers",
      "Battery Life": "50 Hours",
      "Weight": "230g",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-sonar-gaming-headset",
    name: "Voltix Sonar RGB Gaming Headset",
    slug: "voltix-sonar-gaming-headset",
    category: "headphones",
    categoryName: "Headphones",
    price: 3499,
    originalPrice: 7499,
    discountPercentage: 53,
    rating: 4.8,
    reviewsCount: 720,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 25,
    tagline: "7.1 Spatial Surround • Detachable Boom Mic • RGB Flow",
    description: "Engineered for esports dominance. Features 7.1 virtual surround audio, broadcast-grade noise-cancelling detachable microphone, and customizable RGB lighting.",
    colors: [
      { name: "Vortex Black", hex: "#0F172A", code: "black" },
      { name: "Arctic Camo", hex: "#94A3B8", code: "camo" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "7.1 Virtual Spatial Surround Sound",
      "Detachable AI Noise-Filtering Broadcast Boom Mic",
      "Prismatic Flow RGB Earcups",
      "Compatible with PC, PS5, Xbox Series X, Switch & Mobile"
    ],
    specs: {
      "Connectivity": "2.4GHz Wireless USB Dongle + BT 5.3 + 3.5mm",
      "Latency": "20ms Esports Speed",
      "Battery Life": "40 Hours (RGB Off)",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-air-flow-on-ear",
    name: "Voltix AirMove Wireless",
    slug: "voltix-air-flow-on-ear",
    category: "headphones",
    categoryName: "Headphones",
    price: 1799,
    originalPrice: 3999,
    discountPercentage: 55,
    rating: 4.4,
    reviewsCount: 310,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 50,
    tagline: "Featherlight On-Ear • 30Hr Playtime • Vibrant Colors",
    description: "Compact, ultra-light on-ear headphones with rich balanced acoustics, swivel earcups, and intuitive physical track/volume buttons.",
    colors: [
      { name: "Pastel Teal", hex: "#14B8A6", code: "teal" },
      { name: "Jet Black", hex: "#1E293B", code: "black" }
    ],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Ultra-compact on-ear design",
      "30 Hours battery life",
      "Dual-mode wired and wireless",
      "HD voice calling"
    ],
    specs: {
      "Battery Life": "30 Hours",
      "Weight": "165g",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },

  // --- BLUETOOTH SPEAKERS ---
  {
    id: "voltix-boombox-360-pro",
    name: "Voltix BoomBox 360 Pro",
    slug: "voltix-boombox-360-pro",
    category: "speakers",
    categoryName: "Speakers",
    price: 3799,
    originalPrice: 8499,
    discountPercentage: 55,
    rating: 4.8,
    reviewsCount: 1340,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 36,
    tagline: "40W Omnidirectional 360° Sound • IPX7 Waterproof • PartySync",
    description: "Fill every corner of any room or outdoor gathering. Packing 40W RMS dual passive radiators, 360-degree omnidirectional acoustics, beat-synced 360 RGB ring lights, and IPX7 floating waterproof durability.",
    colors: [
      { name: "Stealth Black", hex: "#0F172A", code: "black" },
      { name: "Ocean Blue", hex: "#0284C7", code: "blue" },
      { name: "Forest Camo", hex: "#15803D", code: "camo" }
    ],
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "40W Peak RMS Omnidirectional Room-Filling Audio",
      "Dual Bass Radiators for room-shaking low frequency resonance",
      "IPX7 100% Floating Waterproof for pool parties and beach trips",
      "PartySync™: Wirelessly link up to 100+ Voltix speakers",
      "24 Hours Continuous Battery with built-in PowerBank output"
    ],
    specs: {
      "Output Power": "40W RMS (Dual Active + Dual Passive Radiators)",
      "Battery Capacity": "6600mAh (Up to 24 Hours Playback)",
      "Waterproof Rating": "IPX7 Floating Waterproof",
      "Bluetooth": "v5.3 with 30m Range",
      "Charging Port": "Type-C Fast Charge + USB-A PowerBank Out",
      "Dimensions": "190 x 78 x 78 mm",
      "Warranty": "1 Year Replacement Warranty"
    },
    customerReviews: [
      {
        id: "r11",
        author: "Kavita Rao",
        rating: 5,
        date: "5 days ago",
        verified: true,
        title: "Monster sound in a compact cylinder!",
        comment: "Took it on our camping trip and it played all weekend on one charge. The 360 sound distribution is phenomenal."
      }
    ]
  },
  {
    id: "voltix-soundwave-mini",
    name: "Voltix SoundWave Mini",
    slug: "voltix-soundwave-mini",
    category: "speakers",
    categoryName: "Speakers",
    price: 1499,
    originalPrice: 3499,
    discountPercentage: 57,
    rating: 4.6,
    reviewsCount: 820,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    stockCount: 70,
    tagline: "12W Pocket Rocket • Carabiner Clip • 16Hr Playtime",
    description: "Take booming sound everywhere you roam. The SoundWave Mini clips onto your backpack or bicycle with 12W punchy audio and rugged rubberized drop resistance.",
    colors: [
      { name: "Storm Grey", hex: "#475569", code: "grey" },
      { name: "Sunset Orange", hex: "#EA580C", code: "orange" },
      { name: "Teal Blue", hex: "#0D9488", code: "teal" }
    ],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "12W RMS dynamic audio with bass radiator",
      "Integrated heavy-duty aluminum carabiner",
      "IPX6 Splash and dust proof",
      "16 Hours playback"
    ],
    specs: {
      "Output": "12W RMS",
      "Battery Life": "16 Hours",
      "Water Resistance": "IPX6",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-partyblaster-rgb",
    name: "Voltix PartyBlaster RGB 80W",
    slug: "voltix-partyblaster-rgb",
    category: "speakers",
    categoryName: "Speakers",
    price: 6999,
    originalPrice: 14999,
    discountPercentage: 53,
    rating: 4.9,
    reviewsCount: 540,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    stockCount: 15,
    tagline: "80W Beast Sound • Dual Wireless Karaoke Mics • Strobes",
    description: "The ultimate portable party monster. 80W RMS thunderous dual woofers, full-panel strobe light show, dual wireless UHF karaoke mics, and guitar input.",
    colors: [
      { name: "Black Panther", hex: "#09090B", code: "black" }
    ],
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "80W Massive RMS Bass Explosion",
      "Dual UHF Wireless Karaoke Microphones included",
      "Full-frontal beat-synced RGB LED light show",
      "Guitar & 6.35mm Instrument inputs",
      "18 Hours party battery endurance"
    ],
    specs: {
      "Output": "80W RMS Peak 160W",
      "Battery Life": "18 Hours",
      "Inputs": "Bluetooth 5.3, USB, TF Card, AUX, 6.35mm Mic/Guitar",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },

  // --- ACCESSORIES ---
  {
    id: "voltix-65w-gan-fast-charger",
    name: "Voltix GaNPro 65W Turbo Charger",
    slug: "voltix-65w-gan-fast-charger",
    category: "accessories",
    categoryName: "Accessories",
    price: 1699,
    originalPrice: 3499,
    discountPercentage: 51,
    rating: 4.8,
    reviewsCount: 680,
    isNew: true,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    stockCount: 55,
    tagline: "Gallium Nitride (GaN III) • 3 Ports (2x USB-C + 1x USB-A) • PD 3.0",
    description: "Charge your laptops, smartwatches, smartphones, and earbuds simultaneously with cutting-edge Gallium Nitride (GaN III) technology. 50% smaller than standard 65W bricks with intelligent temperature control.",
    colors: [
      { name: "Pure White", hex: "#F8FAFC", code: "white" },
      { name: "Midnight Grey", hex: "#1E293B", code: "grey" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609592424364-7e8e64c24385?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "65W Power Delivery 3.0 & PPS fast charging support",
      "Next-Gen GaN III Semiconductor Architecture",
      "Charges MacBook Pro 50% in just 30 mins",
      "MultiProtect 9-tier surge and overheat protection"
    ],
    specs: {
      "Power Output": "65W Max",
      "Ports": "2x USB Type-C + 1x USB-A",
      "Technology": "GaN III Fast Power Delivery",
      "Warranty": "1 Year"
    },
    customerReviews: []
  },
  {
    id: "voltix-3in1-magcharge-dock",
    name: "Voltix MagCharge 3-in-1 Dock",
    slug: "voltix-3in1-magcharge-dock",
    category: "accessories",
    categoryName: "Accessories",
    price: 2499,
    originalPrice: 4999,
    discountPercentage: 50,
    rating: 4.7,
    reviewsCount: 430,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    stockCount: 30,
    tagline: "Simultaneous 15W Magnetic Wireless for Phone + Watch + Buds",
    description: "Declutter your bedside or desk with the futuristic floating magnetic charging station. Fast charges your phone, smartwatch, and wireless earbuds all at once with subtle LED ambient illumination.",
    colors: [
      { name: "Space Grey", hex: "#334155", code: "grey" },
      { name: "Pearl White", hex: "#FFFFFF", code: "white" }
    ],
    images: [
      "https://images.unsplash.com/photo-1609592424364-7e8e64c24385?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Strong N52 Neodymium Magnetic Snap-On Mount",
      "15W Fast Wireless Phone Stand + 5W Watch Puck + 5W Earbud Pad",
      "Foldable travel-friendly alloy hinge",
      "Soft breathing nightstand ambient glow"
    ],
    specs: {
      "Wireless Output": "15W / 10W / 7.5W / 5W",
      "Input": "Type-C 9V/3A 27W",
      "Material": "Anodized Aluminum Alloy + Soft Touch Silicone",
      "Warranty": "1 Year"
    },
    customerReviews: []
  }
];

export const BRAND_STATS = [
  { label: "Happy Customers", value: "1.5M+", suffix: "Users" },
  { label: "Products Sold", value: "3.2M+", suffix: "Units" },
  { label: "Global Presence", value: "24+", suffix: "Countries" },
  { label: "Design Awards", value: "18", suffix: "Awards" },
  { label: "Customer Satisfaction", value: "99.4%", suffix: "Rating" }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rohan Kapoor",
    role: "Sound Engineer & Music Producer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "The audio separation and bass response of Voltix Apex Studio rivals $350 international studio monitors. Remarkable craftsmanship.",
    product: "Voltix Apex Studio ANC"
  },
  {
    id: "t2",
    name: "Sneha Mukherjee",
    role: "Marathon Runner & Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "Voltix Horizon Ultra display is razor sharp even under blazing summer sunlight. The heart-rate tracking matches my dedicated chest strap accurately.",
    product: "Voltix Horizon Ultra AMOLED"
  },
  {
    id: "t3",
    name: "Arjun Mehta",
    role: "Tech Reviewer & Content Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    quote: "Voltix has completely disrupted the budget-premium audio market. The build quality, ANC performance, and companion tuning are unparalleled.",
    product: "Voltix Pods Pro ANC"
  }
];
