import { getAreaDisplayName } from "./business-config";

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  detailedServices: { title: string; description: string }[];
  areaSpecificContent: string;
  faqItems: { question: string; answer: string }[];
  processSteps: { title: string; description: string }[];
  testimonials: { name: string; text: string; event: string }[];
  cta: { headline: string; subtext: string };
}

// Area-specific details for authentic local content
const areaDetails: Record<string, { 
  landmark: string; 
  venue: string; 
  vibe: string; 
  specialty: string;
  realStory: string;
}> = {
  "alkapuri": {
    landmark: "the iconic Kamati Baug gardens",
    venue: "Grand Bhagwati and Surya Palace",
    vibe: "elegant and sophisticated",
    specialty: "upscale celebrations with easy access to the city's finest caterers",
    realStory: "Priya & Rohan's reception at Grand Bhagwati became the talk of the town when we transformed the ballroom into a starlit garden with 10,000 fairy lights"
  },
  "fatehgunj": {
    landmark: "the bustling Fatehgunj circle",
    venue: "Hotel Surya and nearby heritage havelis",
    vibe: "traditional yet vibrant",
    specialty: "authentic Gujarati weddings with a modern twist",
    realStory: "The Patel family trusted us with a three-day celebration that honored their grandfather's legacy while delighting 800 guests"
  },
  "sayajigunj": {
    landmark: "the historic Sayaji Garden",
    venue: "Welcomhotel and Museum Gardens",
    vibe: "culturally rich and memorable",
    specialty: "heritage-inspired celebrations near the iconic Laxmi Vilas Palace",
    realStory: "Ananya chose a sunset ceremony overlooking Sayaji Garden – her grandmother cried tears of joy seeing the mandap decorated with marigolds from the same market she visited as a bride"
  },
  "manjalpur": {
    landmark: "the peaceful outskirts near Ajwa Road",
    venue: "farmhouse venues and resort properties",
    vibe: "spacious and nature-inspired",
    specialty: "outdoor celebrations with stunning photo opportunities",
    realStory: "Kavya & Arjun's farmhouse wedding under the stars, with bonfire sangeet and twinkling canopies, still gets shared in our portfolio"
  },
  "nizampura": {
    landmark: "the serene residential locality",
    venue: "community halls and garden venues",
    vibe: "warm and community-centered",
    specialty: "intimate weddings that feel like family gatherings",
    realStory: "A 150-guest wedding where we knew every vendor personally – the chai wala, the flower lady, the dhol players who've played at three generations of weddings"
  },
  "default": {
    landmark: "some of Vadodara's most beautiful locations",
    venue: "premium banquet halls and heritage properties",
    vibe: "magical and unforgettable",
    specialty: "celebrations that reflect your unique love story",
    realStory: "Every wedding we plan becomes a story worth telling – like the couple who recreated their first coffee date as a midnight surprise for guests"
  }
};

function getAreaDetails(area: string) {
  const key = area.toLowerCase().replace(/-/g, "");
  return areaDetails[key] || areaDetails["default"];
}

// Wedding Planners Content - Natural, Engaging, No Keyword Stuffing
export function getWeddingPlannersContent(area: string): PageContent {
  const areaName = getAreaDisplayName(area);
  const details = getAreaDetails(area);
  
  return {
    heroTitle: `Your Dream Wedding in ${areaName} Starts Here`,
    heroSubtitle: `Because your love story deserves to be celebrated beautifully. We're here to turn your vision into an unforgettable reality.`,
    
    aboutContent: `**Every love story is unique. Yours deserves a celebration that's just as special.**

For the past fifteen years, we've had the privilege of being part of over 500 couples' most important day. Not as event managers checking boxes, but as trusted partners who understand that this isn't just a party – it's the beginning of your forever.

We started this journey in Vadodara because we believe weddings here have soul. The blend of tradition and modernity, the warmth of Gujarati hospitality, the stunning venues from heritage palaces to modern resorts – there's nowhere quite like it.

**What makes us different?** We listen first. Before we talk venues and décor, we want to know your story. How did you meet? What makes you laugh together? What did your grandmother always dream your wedding would look like? These details become the invisible thread that ties your celebration together.

Based near ${details.landmark}, we know ${areaName} intimately. The best caterers who make dal that tastes like home. The photographers who capture real emotions, not just poses. The decorators who transform spaces into dreams. These relationships, built over years, mean your wedding gets the A-team every time.

Whether you envision a grand celebration with 1,000 guests or an intimate gathering with just 50 of your closest people – whether your budget is ₹5 lakhs or ₹50 lakhs – we bring the same dedication and creativity. Because every couple deserves to feel like royalty on their special day.

**${details.realStory}.** That's the kind of magic we create.`,
    
    whyChooseUs: [
      "Fifteen years of creating celebrations that families talk about for generations",
      "Over 500 happy couples who started their journey with us",
      "Deep roots in Vadodara – we know every vendor, venue, and hidden gem",
      "Expertise across all traditions: Hindu, Muslim, Christian, Jain, and fusion celebrations",
      "Transparent pricing with no surprises – your trust matters more than a quick sale",
      "A dedicated coordinator who becomes your wedding's biggest champion",
      "Backup plans for everything – because Gujarat weather can be unpredictable!",
      "Relationships with exclusive venues that aren't listed on Google",
    ],
    
    detailedServices: [
      {
        title: "Complete Wedding Journey",
        description: `From "yes" to "I do" and everything in between. We handle venue hunting, vendor coordination, guest management, and those 3 AM panic calls. You focus on being in love.`,
      },
      {
        title: "Destination Celebrations",
        description: `Dreaming of Udaipur's palaces, Goa's beaches, or Kerala's backwaters? We've planned weddings across India and know how to bring your guests along for an unforgettable adventure.`,
      },
      {
        title: "Intimate & Elegant",
        description: `Sometimes the most meaningful celebrations are the smallest. We specialize in creating warmth and wonder for 50-150 guests, where every detail feels personal.`,
      },
      {
        title: "Grand Celebrations",
        description: `For families who believe bigger is better, we orchestrate large-scale events with the precision of a symphony conductor. Multiple venues, 1000+ guests, three days of festivities – we've got this.`,
      },
      {
        title: "Day-Of Coordination",
        description: `Already planned everything but want a pro to run the show? We step in to execute your vision flawlessly while you soak in every precious moment.`,
      },
      {
        title: "Design & Décor",
        description: `From traditional mandaps adorned with mogras to contemporary minimalist aesthetics, our design team creates visual poetry that reflects your personality.`,
      },
    ],
    
    areaSpecificContent: `**Why ${areaName} is Perfect for Your Celebration**

There's something special about celebrating love in ${areaName}. Located near ${details.landmark}, this area offers a ${details.vibe} atmosphere that makes weddings here memorable.

We've built strong relationships with venues like ${details.venue}, and our team knows exactly how to maximize these spaces. From understanding the best angles for photography to knowing which caterer's biryani gets finished first – these insider details make all the difference.

The families here appreciate ${details.specialty}. Over the years, we've come to understand these preferences deeply, which allows us to suggest ideas that resonate rather than generic Pinterest boards.

**A Recent ${areaName} Story:**
${details.realStory}. This is what happens when local expertise meets genuine care for your celebration.

If you're based in ${areaName} or planning to celebrate here, let's talk. We'll meet over chai, listen to your dreams, and show you possibilities you might not have imagined.`,
    
    faqItems: [
      {
        question: `How much should I budget for my wedding in ${areaName}?`,
        answer: `Weddings here typically range from ₹8 lakhs for intimate celebrations to ₹50+ lakhs for grand affairs. Our planning fees start at ₹75,000 for coordination services and go up based on complexity. During our first meeting, we'll help you create a realistic budget based on your priorities – because some couples care more about food, others about photography, and we respect those choices.`,
      },
      {
        question: `We have a limited budget. Can you still help us?`,
        answer: `Absolutely. Some of our most beautiful weddings have been modest in budget but rich in love. We'll help you identify what truly matters and find creative ways to achieve it. That might mean a stunning weekday wedding, a beautiful morning ceremony, or focusing on experiences over extravagance. Beauty doesn't require a blank check.`,
      },
      {
        question: `Our families follow different traditions. Can you handle that?`,
        answer: `This is actually our specialty! We've planned Hindu-Muslim celebrations, Gujarati-Punjabi fusion weddings, and even a beautiful Christian-Jain union. We work with pandits, maulvis, and pastors who are open-minded and help create ceremonies that honor both families. Your wedding should unite, not divide.`,
      },
      {
        question: `How involved will you be on the actual wedding day?`,
        answer: `Very. Our team arrives before the vendors and leaves after the last guest. We handle everything from coordinating the baraat timing to making sure your grandmother has a comfortable seat. You'll have a dedicated coordinator by your side, but you won't need to worry about logistics – that's our job.`,
      },
      {
        question: `When should we start planning?`,
        answer: `For most weddings, 6-9 months is comfortable. Peak season (November-February) books up fast, so earlier is better. That said, we've pulled off beautiful celebrations in 3 months when needed. Life doesn't always follow timelines, and neither do we.`,
      },
    ],
    
    processSteps: [
      {
        title: "Let's Meet & Dream Together",
        description: "A relaxed conversation over chai where we learn about your story, your families, and your vision. No pressure, no sales pitch – just genuine connection.",
      },
      {
        title: "Your Personalized Roadmap",
        description: "Within a week, you'll receive a detailed proposal with venue options, budget breakdown, and timeline. Everything transparent, nothing hidden.",
      },
      {
        title: "Making Magic Happen",
        description: "The fun part! Venue visits, tastings, décor mockups, and endless Pinterest discussions. We handle the logistics; you enjoy the journey.",
      },
      {
        title: "Your Perfect Day",
        description: "While you're getting ready with family, we're ensuring every flower is in place. All you need to do is show up and fall in love all over again.",
      },
    ],
    
    testimonials: [
      {
        name: "Meera & Kunal",
        text: "They didn't just plan our wedding – they understood our families. My mother-in-law still talks about how every detail felt personal, not generic.",
        event: "500-guest celebration in " + areaName
      },
      {
        name: "Riya & Sahil",
        text: "We had a tight budget and high expectations. They made us feel like royalty without the royal price tag. Our guests thought we'd spent twice as much.",
        event: "Intimate garden wedding"
      },
      {
        name: "Zara & Imran",
        text: "A Muslim-Hindu wedding seemed complicated until we met them. They brought both our families together in the most beautiful way.",
        event: "Multicultural celebration"
      }
    ],
    
    cta: {
      headline: "Ready to Start Planning Your Forever?",
      subtext: "Let's meet for a no-obligation chat. Tell us your dreams, and we'll show you how to make them real. The first consultation is always free – because the best relationships start with a good conversation."
    }
  };
}

// Main function to get content based on business type
export function getBusinessContent(businessSlug: string, area: string): PageContent {
  return getWeddingPlannersContent(area);
}
