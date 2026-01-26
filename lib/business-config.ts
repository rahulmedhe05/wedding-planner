// Business Configuration for Wedding Planners Only

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// 40 Areas of Vadodara
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "race-course",
  "ellora-park",
  "new-sama-road",
  "productivity-road",
  "nizampura",
  "gorwa",
  "bil",
  "sevasi",
  "undera",
  "ajwa-road",
  "padra",
  "karjan",
  "dabhoi-road",
  "nandesari",
  "sindhrot",
  "bajwa",
  "vemali",
  "navapura",
  "laxmipura",
];

export const businesses: BusinessConfig[] = [
  {
    id: "wedding-planners",
    name: "Wedding Planners",
    slug: "wedding-planners",
    tagline: "Create Your Dream Wedding with Expert Planning",
    description: "Professional wedding planning services in Vadodara",
    colors: {
      primary: "#BE185D", // Magenta
      secondary: "#F472B6", // Light Magenta
      accent: "#9D174D", // Dark Magenta
      gradient: "from-pink-700 to-rose-600",
    },
    icon: "💒",
    services: [
      "Complete Wedding Planning",
      "Destination Wedding",
      "Venue Selection",
      "Catering Services",
      "Decoration & Themes",
      "Photography & Videography",
      "Entertainment & DJ",
      "Bridal Makeup",
      "Invitation Cards",
      "Guest Management",
      "Mehndi & Sangeet Planning",
      "Wedding Coordination",
      "Budget Planning",
      "Vendor Management",
      "Royal Wedding Planning",
      "Luxury Wedding Services",
      "Traditional Wedding Planning",
      "Modern Wedding Planning",
      "Palace Wedding Planning",
      "Beach Wedding Planning",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    vadodara: "Vadodara",
    alkapuri: "Alkapuri",
    akota: "Akota",
    "old-padra-road": "Old Padra Road",
    gotri: "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    manjalpur: "Manjalpur",
    sama: "Sama",
    karelibaug: "Karelibaug",
    "waghodia-road": "Waghodia Road",
    chhani: "Chhani",
    harni: "Harni",
    kalali: "Kalali",
    atladara: "Atladara",
    "vadsar-road": "Vadsar Road",
    tarsali: "Tarsali",
    sayajigunj: "Sayajigunj",
    subhanpura: "Subhanpura",
    tandalja: "Tandalja",
    makarpura: "Makarpura",
    fatehgunj: "Fatehgunj",
    "race-course": "Race Course",
    "ellora-park": "Ellora Park",
    "new-sama-road": "New Sama Road",
    "productivity-road": "Productivity Road",
    nizampura: "Nizampura",
    gorwa: "Gorwa",
    bil: "Bil",
    sevasi: "Sevasi",
    undera: "Undera",
    "ajwa-road": "Ajwa Road",
    padra: "Padra",
    karjan: "Karjan",
    "dabhoi-road": "Dabhoi Road",
    nandesari: "Nandesari",
    sindhrot: "Sindhrot",
    bajwa: "Bajwa",
    vemali: "Vemali",
    navapura: "Navapura",
    laxmipura: "Laxmipura",
  };
  return areaNames[area] || area;
};

export const allAreas = vadodaraAreas;
