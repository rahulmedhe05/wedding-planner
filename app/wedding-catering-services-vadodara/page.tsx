import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Star,
  Users,
  Award,
  CheckCircle,
  Heart,
  ArrowRight,
  Images,
  Sparkles,
  Mail,
  ChefHat,
  UtensilsCrossed,
  Cake,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Catering Services Vadodara — Feasts That Tell Love Stories",
  heroSubtitle: "Exquisite wedding catering that delights every palate with authentic flavors, artistic presentation, and service that impresses your guests.",
  
  mainContent: `
They say the way to the heart is through the stomach. At weddings, this couldn't be more true. Your guests might forget the decorations. They'll definitely remember the food.

This is why wedding catering services in Vadodara deserve as much attention as your lehenga.

**Food is the soul of celebration:**

A Gujarati wedding without the perfect dal-dhokli? A reception without a spectacular live counter? Impossible! Your wedding catering sets the tone for how guests remember your celebration.

Great wedding catering services deliver:
• Delicious flavors that people rave about
• Variety that satisfies every palate
• Quality ingredients that you can taste
• Service that flows seamlessly
• Presentation that photographs beautifully

**The complexity of wedding catering:**

Wedding catering isn't just cooking — it's logistics, timing, variety, and service at scale. Feeding 300 guests with multiple cuisines, managing live counters while serving plated desserts, accommodating dietary restrictions — it's an art.

Wedding catering services in Vadodara must master:
• Menu design for diverse tastes
• Bulk cooking without quality loss
• Temperature control and food safety
• Service staff coordination
• Real-time guest management
• Multiple cuisine expertise

**The Vadodara food culture:**

Vadodara has a sophisticated food culture. From traditional Gujarati to Punjabi, from South Indian to Continental, from street food counters to live pasta stations — your guests expect variety and quality.

Wedding catering services here must understand:
• Authentic Gujarati cuisine execution
• Regional cuisine variations
• Modern fusion preferences
• Live counter entertainment value
• Sweet and dessert excellence

**Beyond food to experience:**

Today's wedding catering is about experience. Live dosa counters, interactive chaat stations, molecular gastronomy desserts, elaborate live grills — food becomes entertainment.

Wedding catering services in Vadodara — where every bite becomes a memory, every meal becomes a story!
  `,

  cateringElements: [
    {
      title: "Multi-Cuisine Menus",
      description: "Wedding catering services creating diverse menus that satisfy every taste preference."
    },
    {
      title: "Live Food Counters",
      description: "Interactive stations that make wedding catering services an entertainment experience."
    },
    {
      title: "Traditional Gujarati",
      description: "Authentic local cuisine excellence from wedding catering services who know flavors."
    },
    {
      title: "Elegant Service",
      description: "Professional staff through wedding catering services ensuring smooth guest experience."
    },
    {
      title: "Dessert Artistry",
      description: "Sweet endings crafted by wedding catering services that wow visually and taste-wise."
    },
    {
      title: "Dietary Accommodations",
      description: "Jain, vegan, gluten-free options from wedding catering services respecting all needs."
    }
  ],

  services: [
    {
      title: "Complete Catering Management",
      description: "End-to-end wedding catering services from menu design to execution.",
      icon: "ChefHat"
    },
    {
      title: "Caterer Selection",
      description: "Wedding catering services connecting you with vetted, quality caterers.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Menu Customization",
      description: "Personalized menus created through wedding catering services for your taste.",
      icon: "Sparkles"
    },
    {
      title: "Tasting Sessions",
      description: "Trial meals organized by wedding catering services before final selection.",
      icon: "Heart"
    },
    {
      title: "Service Coordination",
      description: "Wedding catering services ensure smooth flow from kitchen to guests.",
      icon: "Users"
    },
    {
      title: "Presentation Design",
      description: "Beautiful food displays arranged through wedding catering services expertise.",
      icon: "Cake"
    }
  ],

  processSteps: [
    {
      title: "Taste Preferences",
      description: "Wedding catering services understand your family's flavor preferences and requirements."
    },
    {
      title: "Menu Design",
      description: "Customized menu created balancing variety, quality, and budget beautifully."
    },
    {
      title: "Caterer Selection",
      description: "Wedding catering services match you with perfect caterers after tastings."
    },
    {
      title: "Flawless Execution",
      description: "Your guests delighted with exceptional food and impeccable service!"
    }
  ],

  testimonials: [
    {
      name: "Mira & Rajiv",
      event: "500-Guest Wedding",
      text: "The wedding catering services in Vadodara arranged by our planner were exceptional! Live pasta counter, traditional Gujarati thali, and that chocolate fountain — guests couldn't stop eating. Three months later, relatives still mention the food!"
    },
    {
      name: "Pooja & Vivek",
      event: "Traditional Gujarati Wedding",
      text: "Finding wedding catering services that could do authentic Gujarati cuisine for 600 people without compromising quality seemed impossible. But the dal-dhokli was just like homemade, the undhiyu was perfect. We were so happy!"
    },
    {
      name: "Sneha & Kunal",
      event: "Multi-Cuisine Reception",
      text: "We wanted variety — Gujarati, North Indian, Chinese, and Continental. The wedding catering services coordinated multiple caterers seamlessly. Eight cuisine stations, zero confusion, all delicious. Our guests were impressed!"
    }
  ],

  faqs: [
    {
      question: "How do you manage wedding catering for different cuisines?",
      answer: "Our wedding catering services work with specialized caterers for different cuisines when needed. We coordinate between vendors, ensure consistent quality, manage kitchen space allocation, and create seamless service despite multiple sources."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! Wedding catering services include Jain food (no root vegetables), pure vegetarian, vegan options, gluten-free dishes, low-sugar desserts, and any other dietary needs. We ensure these aren't afterthoughts but quality offerings."
    },
    {
      question: "What about food tasting before finalizing?",
      answer: "Essential! Our wedding catering services arrange tasting sessions with shortlisted caterers. You'll sample actual dishes from your menu before making decisions. We typically organize 2-3 tastings to find your perfect match."
    },
    {
      question: "How do you ensure food quality for large gatherings?",
      answer: "Wedding catering services vet caterers for their capacity and consistency. We check kitchen facilities, taste previous work, verify hygiene standards, and coordinate cooking schedules to ensure freshness despite large volumes."
    },
    {
      question: "What about live counters and interactive stations?",
      answer: "We love live counters! Wedding catering services can arrange live dosa stations, pasta counters, chaat stalls, live grills, chocolate fountains, and molecular gastronomy desserts. These add entertainment value to dining."
    },
    {
      question: "How is wedding catering pricing structured?",
      answer: "Wedding catering services pricing is typically per plate (per person). Costs vary based on menu complexity, cuisine variety, service style (buffet vs. sit-down), and special elements like live counters. We work within your budget while maximizing quality."
    }
  ],

  ctaHeadline: "Feed Their Hearts Through Their Stomachs",
  ctaSubtext: "Let wedding catering services in Vadodara create a feast that your guests will remember and talk about for years to come."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=600&fit=crop", title: "Grand Buffet" },
  { id: 2, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop", title: "Delicious Cuisine" },
  { id: 3, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop", title: "Food Artistry" },
  { id: 4, src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=600&fit=crop", title: "Feast Display" },
  { id: 5, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop", title: "Elegant Setup" },
  { id: 6, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Decor" },
  { id: 7, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Wedding Feast" },
  { id: 8, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 9, src: "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?w=600&h=600&fit=crop", title: "Sweet Delights" },
  { id: 10, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Guest Dining" },
  { id: 11, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&fit=crop", title: "Live Counter" },
  { id: 12, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Beautiful Event" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "gujarati-wedding-planner-vadodara", title: "Gujarati Wedding" },
  { slug: "wedding-event-management-company-in-vadodara", title: "Event Management" },
  { slug: "budget-wedding-planner-in-vadodara", title: "Budget Wedding" },
];

export const metadata: Metadata = {
  title: "Wedding Catering Services Vadodara | Multi-Cuisine | Gujarati Food",
  description: "Expert wedding catering services in Vadodara. Multi-cuisine menus, authentic Gujarati food, live counters & impeccable service for unforgettable wedding feasts.",
  keywords: "wedding catering services vadodara, wedding caterers vadodara, gujarati wedding food vadodara, wedding menu planning vadodara, wedding food services",
  openGraph: {
    title: "Wedding Catering Services Vadodara | Feasts That Tell Love Stories",
    description: "Wedding catering services in Vadodara. Delicious food that guests remember forever.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-catering-services-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Catering Services Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Catering Services Vadodara",
    description: "Exceptional wedding food that guests remember forever.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-catering-services-vadodara/",
  },
};

export default function WeddingCateringServicesVadodaraPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">💒</span>
              <span className="font-bold text-lg text-pink-700">Wedding Planners Vadodara</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="tel:+916353583148"
                className="hidden md:flex items-center gap-2 text-pink-600 font-semibold"
              >
                <Phone className="w-4 h-4" />
                +91 63535 83148
              </a>
              <a
                href="https://wa.me/916353583148"
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-5 h-5 text-amber-200" />
                <span className="text-amber-200">Culinary Excellence</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <UtensilsCrossed className="w-5 h-5 text-amber-200" />
                  <span>Multi-Cuisine</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <ChefHat className="w-5 h-5 text-orange-200" />
                  <span>Expert Caterers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-amber-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Catering Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need wedding catering services in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Discuss Menu Options
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ChefHat className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-700">
                  Catering Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding catering services Vadodara • Delicious feasts</p>
              <KeywordEnquiryForm 
                keyword="Wedding Catering Services Vadodara" 
                source="keyword-page-wedding-catering-services-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ChefHat className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Catered</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Food Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-orange-600 mb-2" />
              <p className="font-bold text-2xl">20+</p>
              <p className="text-gray-600 text-sm">Cuisine Types</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-700 mb-2" />
              <p className="font-bold text-2xl">50+</p>
              <p className="text-gray-600 text-sm">Partner Caterers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Exceptional Wedding Catering Excellence
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-orange-600">$1</em>')
                      .replace(/•/g, '<span class="text-amber-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catering Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Makes Our Catering Special
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence delivered through wedding catering services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.cateringElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-amber-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <ChefHat className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{element.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Wedding Catering Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive food services for unforgettable wedding feasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full group-hover:bg-amber-500 transition-colors">
                    <ChefHat className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <Images className="inline-block w-8 h-8 mr-2 text-amber-600" />
              Catering Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delicious moments created through our wedding catering services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Catering Services Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Wedding Catering</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catering Planning Journey
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              How wedding catering services create your perfect feast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-amber-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-amber-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-amber-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Couples Say About Our Food
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Families who served unforgettable feasts with our help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 55}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-amber-600">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Wedding Catering FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-amber-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=600&fit=crop"
          alt="Wedding Catering Services Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold hover:bg-amber-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Catering Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need wedding catering services in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Catering Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Wedding Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full transition-colors border border-amber-200 hover:border-amber-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Wedding Catering Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your wedding feast? Let's create something delicious together!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="tel:+916353583148"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone className="w-8 h-8 mb-3" />
                <p className="font-bold">Call Us</p>
                <p className="opacity-90">+91 63535 83148</p>
              </a>
              <a
                href="mailto:info@weddingplannersinvadodara.in"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Mail className="w-8 h-8 mb-3" />
                <p className="font-bold">Email Us</p>
                <p className="opacity-90">info@weddingplannersinvadodara.in</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl">
                <MapPin className="w-8 h-8 mb-3" />
                <p className="font-bold">Location</p>
                <p className="opacity-90">Vadodara, Gujarat</p>
              </div>
            </div>
            <a
              href="https://wa.me/916353583148?text=Hi, I need wedding catering services!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Catering Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need wedding catering services!"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <MegaFooter />
    </div>
  );
}
