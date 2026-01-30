export const siteConfig = {
  name: "OMG Arcade",
  location: "Trincomalee, Sri Lanka",
  tagline: "Trincomalee’s Premium Gaming & Indoor Recreation Hub",
  description:
    "OMG Arcade is a premium gaming and indoor recreation lounge in Trincomalee offering next-gen console play, simulators, and community-driven tournaments.",
  address: "189 Thirugnanasampanthar Street, Trincomalee 31000",
  phone: "+94 77 730 0512",
  whatsapp: "+94777300512",
  hours: {
    days: "Daily",
    time: "10:00 – 22:00"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  }
};

export const pricingConfig = {
  ps5: {
    label: "PS5 Zone",
    pricing: [
      { players: "1 Player", price: 400 },
      { players: "2 Players", price: 700 },
      { players: "3 Players", price: 1000 },
      { players: "4 Players", price: 1300 }
    ]
  },
  ps4: {
    label: "PS4 Lounge",
    pricing: [
      { players: "1 Player", price: 350 },
      { players: "2 Players", price: 600 }
    ]
  },
  pool: {
    label: "Pro Pool Table",
    pricing: [
      { players: "Table", price: 1000 },
      { players: "Per Person", price: 400 }
    ]
  },
  wheel: {
    label: "Racing Wheel Simulator",
    pricing: [
      { players: "15 min", price: 300 },
      { players: "30 min", price: 500 },
      { players: "45 min", price: 750 },
      { players: "60 min", price: 1000 },
      { players: "90 min", price: 1500 }
    ]
  },
  vr: {
    label: "VR Arena",
    pricing: [
      { players: "30 min", price: 600 },
      { players: "60 min", price: 1000 }
    ]
  }
};

export const offersConfig = [
  {
    title: "Student Hour",
    description: "Weekdays 2 PM – 5 PM. Show a valid student ID for discounted rates.",
    tag: "Midweek Deal"
  },
  {
    title: "Group Rush",
    description: "Book 4+ seats and enjoy a complimentary soft drink each.",
    tag: "Best Value"
  },
  {
    title: "Night Owls",
    description: "Late-night sessions from 8 PM with bonus playtime.",
    tag: "Limited"
  }
];

export const seatConfig = {
  ps5: ["PS-01", "PS-02", "PS-03", "PS-04"],
  wheel: ["WHEEL-01"],
  vr: ["VR-01"],
  pool: ["POOL-01"]
};

export const galleryImages = [
  {
    id: "ps5-1",
    category: "PS5",
    src: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
    alt: "PS5 gaming setup"
  },
  {
    id: "wheel-1",
    category: "Wheel",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    alt: "Racing wheel simulator"
  },
  {
    id: "pool-1",
    category: "Pool",
    src: "https://images.unsplash.com/photo-1543954890-5f72d6c0c6c0",
    alt: "Pool table lounge"
  },
  {
    id: "carrom-1",
    category: "Carrom",
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    alt: "Indoor board games"
  },
  {
    id: "interior-1",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    alt: "Premium gaming lounge"
  },
  {
    id: "ps5-2",
    category: "PS5",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    alt: "Console wall"
  },
  {
    id: "wheel-2",
    category: "Wheel",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Gaming rig closeup"
  }
];

export const eventConfig = [
  {
    title: "Weekly WWE Rankings",
    date: "Every Friday",
    fee: "LKR 500",
    prize: "Leaderboard glory + sponsor perks",
    rules: ["16-player ladder", "Best of 3 matches", "Respect the queue"]
  },
  {
    title: "Weekend FIFA Face-Off",
    date: "Saturday 5:00 PM",
    fee: "LKR 750",
    prize: "Cash prize + free hours",
    rules: ["Group stage then knockout", "Bring your controller", "Arrival 15 mins early"]
  }
];
