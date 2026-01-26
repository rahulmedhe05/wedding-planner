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
}

// Wedding Planners Content
export function getWeddingPlannersContent(area: string): PageContent {
  const areaName = getAreaDisplayName(area);
  
  return {
    heroTitle: `Best Wedding Planner in ${areaName}, Vadodara`,
    heroSubtitle: `Create your dream wedding with the best wedding planner in ${areaName}. Our professional wedding planners offer complete wedding planning services, destination wedding planning, luxury weddings, and budget wedding planner options.`,
    aboutContent: `Welcome to the most trusted wedding planner in ${areaName}, Vadodara. With over 15 years of experience in creating magical celebrations, we have established ourselves as the leading wedding planners in the region. Our team of professional wedding planners combines creativity with meticulous planning to deliver unforgettable wedding experiences.

As your dedicated wedding planner in ${areaName}, we understand that every love story is unique. Whether you're looking for a luxury wedding planner for an extravagant celebration, a budget wedding planner for a beautiful yet affordable wedding, or a destination wedding planner for your dream location wedding – we have you covered.

Our wedding planning services in ${areaName}, Vadodara, encompass every aspect of your celebration. From full wedding planning that covers engagement to reception, to partial wedding planning for specific needs, to wedding coordination services for day-of management – we offer flexible wedding planner packages tailored to your requirements.

We are proud to be recognized as one of the top wedding planners in Gujarat, serving all communities with equal dedication. Our expertise spans Indian wedding planning, Hindu wedding planning, Muslim wedding planning, Christian wedding planning, Gujarati wedding planning, Punjabi wedding planning, and South Indian wedding planning.

Our wedding event management company has successfully planned over 500+ weddings, including royal weddings at heritage venues, palace wedding planning at prestigious locations, beach wedding planning at exotic destinations, and intimate garden weddings. We bring the same level of dedication and creativity to every celebration, regardless of scale or budget.

What sets us apart as the best wedding planner in ${areaName} is our attention to detail, transparent wedding planner pricing, and commitment to creating personalized experiences. Our wedding decor services transform venues into magical spaces, while our vendor network ensures access to the best photographers, caterers, decorators, and entertainment providers in Vadodara.`,
    
    whyChooseUs: [
      "15+ years of experience as professional wedding planners in Vadodara",
      "500+ successful weddings planned across all communities",
      "Certified wedding coordination services team",
      "Free consultation and detailed wedding planner packages",
      "Transparent wedding planner cost with no hidden fees",
      "Expertise in luxury wedding planning and budget wedding planning",
      "Destination wedding planner for national and international locations",
      "Complete wedding management services from planning to execution",
      "Expert in Indian, Hindu, Muslim, Christian, and regional wedding traditions",
      "24/7 support and dedicated wedding coordination on your special day",
    ],
    
    detailedServices: [
      {
        title: "Full Wedding Planning",
        description: `Complete end-to-end wedding planning services in ${areaName}. From venue selection to guest management, our wedding planners handle every detail of your celebration.`,
      },
      {
        title: "Destination Wedding Planning",
        description: `Expert destination wedding planner services for weddings in Goa, Rajasthan, Kerala, and international locations. We handle travel, accommodation, and local coordination.`,
      },
      {
        title: "Luxury Wedding Planning",
        description: `Premium luxury wedding planner services for discerning couples. Access to exclusive venues, designer decor, and high-end vendors for a royal wedding experience.`,
      },
      {
        title: "Budget Wedding Planning",
        description: `Affordable wedding planner services that maximize value without compromising beauty. Our budget wedding planner expertise creates stunning celebrations within your means.`,
      },
      {
        title: "Wedding Coordination Services",
        description: `Professional day-of wedding coordination in ${areaName}. Our wedding coordinators ensure seamless execution while you enjoy every moment.`,
      },
      {
        title: "Wedding Decor Services",
        description: `Creative wedding decor planning including mandap decoration, stage design, floral arrangements, and themed decorations for your celebration.`,
      },
      {
        title: "Cultural Wedding Planning",
        description: `Expert Indian wedding planner services for Hindu, Muslim, Christian, Gujarati, Punjabi, and South Indian weddings with authentic traditions.`,
      },
      {
        title: "Venue-Based Wedding Planning",
        description: `Specialized palace wedding planner, beach wedding planner, resort wedding planner, and garden wedding planner services at premier venues.`,
      },
      {
        title: "International Wedding Planning",
        description: `International wedding planner services for overseas weddings. Our global wedding planner network ensures seamless celebrations anywhere in the world.`,
      },
    ],
    
    areaSpecificContent: `${areaName} is a prestigious locality in Vadodara, known for its beautiful venues and excellent connectivity. As leading wedding planners in ${areaName}, we have extensive experience with the various wedding venues, banquet halls, and outdoor spaces in this area.

Our local expertise as a wedding planner in ${areaName} gives us unique advantages – from knowing the best timing for outdoor ceremonies to having established relationships with top local vendors. We understand the preferences and traditions of families in ${areaName}, allowing us to create personalized celebrations.

Whether you're looking for an intimate wedding in a boutique venue or a grand celebration at a luxury hotel in ${areaName}, our wedding planning services adapt to your vision. Our destination wedding management also covers transportation and accommodation for guests visiting ${areaName} for your wedding.

Many of our successful weddings in ${areaName} have come through referrals from happy couples who experienced our wedding planner services firsthand. We take pride in our reputation as the best wedding planner in ${areaName} and continue to exceed expectations with every celebration.`,
    
    faqItems: [
      {
        question: `What is the wedding planner cost in ${areaName}, Vadodara?`,
        answer: `Wedding planner cost in ${areaName} varies based on services. Basic wedding coordination services start from ₹50,000, while full wedding planning packages range from ₹1.5 lakhs to ₹5+ lakhs. Luxury wedding planner services for destination or royal weddings are customized based on requirements. We offer transparent wedding planner pricing with no hidden costs.`,
      },
      {
        question: `Do you offer budget wedding planner services in ${areaName}?`,
        answer: `Yes! We are known as an affordable wedding planner in ${areaName}. Our budget wedding planner services help you create beautiful celebrations within your means. We optimize costs through smart vendor selection and creative alternatives while maintaining quality and beauty.`,
      },
      {
        question: `Can you plan destination weddings from ${areaName}?`,
        answer: `Absolutely! As a destination wedding planner based in ${areaName}, we plan weddings across India (Goa, Rajasthan, Kerala, Udaipur) and internationally. Our destination wedding management includes travel coordination, venue booking, local vendor sourcing, and guest logistics.`,
      },
      {
        question: `What types of weddings do you plan as a wedding planner in ${areaName}?`,
        answer: `We are expert in all types of weddings - Hindu wedding planning, Muslim wedding planning, Christian wedding planning, Gujarati wedding planning, Punjabi wedding planning, and South Indian wedding planning. We also specialize in palace weddings, beach weddings, garden weddings, and modern theme weddings.`,
      },
      {
        question: `How early should I book a wedding planner in ${areaName}?`,
        answer: `We recommend booking your wedding planner at least 6-12 months before your wedding date, especially for peak season (October-February). For destination weddings or luxury weddings, earlier booking of 12-18 months is advisable to secure your preferred dates and venues.`,
      },
    ],
    
    processSteps: [
      {
        title: "Initial Consultation",
        description: "Free consultation to understand your wedding vision, budget, and preferences. Our wedding planner discusses your dream celebration.",
      },
      {
        title: "Custom Proposal",
        description: "Receive a detailed wedding planner package with services, timeline, and transparent pricing tailored to your needs.",
      },
      {
        title: "Planning & Design",
        description: "Our wedding planners create your celebration - venue selection, vendor coordination, decor planning, and timeline management.",
      },
      {
        title: "Execution & Coordination",
        description: "Flawless wedding coordination on your special day. Our team manages every detail while you enjoy your celebration.",
      },
    ],
  };
}

// Main function to get content based on business type
export function getBusinessContent(businessSlug: string, area: string): PageContent {
  return getWeddingPlannersContent(area);
}
