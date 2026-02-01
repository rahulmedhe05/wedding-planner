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
  Crown,
  Gem,
  Diamond,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Luxury Wedding Planner Vadodara — Where Opulence Meets Elegance",
  heroSubtitle: "For celebrations that deserve nothing but the extraordinary. Vadodara's premier luxury wedding planner for the most discerning couples.",
  
  mainContent: `
There's a wedding. And then there's a luxury wedding.

A luxury wedding isn't about spending more money. It's about experiencing more excellence. More personalization. More unforgettable moments. More of everything that transforms a celebration into a once-in-a-lifetime experience.

As a luxury wedding planner in Vadodara, we understand this distinction intimately.

**What makes a luxury wedding planner different?**

A luxury wedding planner doesn't just execute checklists — they craft experiences. Every detail is considered through the lens of "exceptional." Every vendor is chosen for excellence, not just capability. Every moment is designed for impact.

Your luxury wedding planner in Vadodara brings:
• Access to exclusive venues ordinary planners can't book
• Relationships with the finest vendors who deliver bespoke excellence
• Design thinking that creates one-of-a-kind experiences
• Concierge-level service that anticipates every need
• The confidence that comes from managing the most significant celebrations

**The luxury wedding planner philosophy:**

Luxury isn't about excess — it's about excellence. Your luxury wedding planner in Vadodara focuses on:

Personalization over trends: What do YOU love? Your luxury wedding planner creates celebrations that reflect your unique personality, not what's trending on Instagram.

Quality over quantity: Fewer, better elements. A luxury wedding planner knows that 100 exquisite details beat 500 ordinary ones.

Experience over appearance: How will your wedding FEEL? A luxury wedding planner designs emotional journeys, not just visual spectacles.

Seamlessness over showmanship: True luxury is invisible perfection. Your luxury wedding planner ensures everything flows effortlessly — guests never see the orchestration.

**Beyond standard wedding planning:**

A luxury wedding planner in Vadodara provides services that transcend typical planning:
• Custom-designed invitations from master artisans
• Bespoke menu creation with private chef consultations
• Exclusive entertainment procurement
• International vendor sourcing
• Private guest experiences and gifts
• Post-wedding luxury experiences

**For couples who want the extraordinary:**

If you're looking for a wedding that guests will talk about for decades... if you believe your celebration deserves white-glove service... if you understand that true luxury is in the details...

You need a luxury wedding planner.
  `,

  luxuryElements: [
    {
      title: "Exclusive Venue Access",
      description: "Your luxury wedding planner opens doors to venues that aren't publicly available — private palaces, exclusive resorts, hidden gems."
    },
    {
      title: "Bespoke Design",
      description: "No templates. Your luxury wedding planner creates completely custom designs that exist nowhere else."
    },
    {
      title: "Premium Vendors Only",
      description: "Every vendor curated by your luxury wedding planner represents the finest in their craft."
    },
    {
      title: "Personalized Experiences",
      description: "Luxury wedding planner services include custom guest experiences, personalized gifts, and unique touches."
    },
    {
      title: "White-Glove Service",
      description: "Your luxury wedding planner anticipates needs before they arise. Seamless, invisible perfection."
    },
    {
      title: "International Standards",
      description: "Luxury wedding planner expertise that matches global luxury hospitality standards."
    }
  ],

  services: [
    {
      title: "Luxury Full Planning",
      description: "Complete luxury wedding planner services — every element curated for excellence and personalization.",
      icon: "Crown"
    },
    {
      title: "Exclusive Venue Curation",
      description: "Your luxury wedding planner accesses private venues and negotiates VIP packages.",
      icon: "Gem"
    },
    {
      title: "Bespoke Design Services",
      description: "Custom design creation by your luxury wedding planner — one-of-a-kind aesthetics.",
      icon: "Sparkles"
    },
    {
      title: "Premium Vendor Management",
      description: "Luxury wedding planner curation of the finest photographers, decorators, and caterers.",
      icon: "Star"
    },
    {
      title: "Guest Experience Design",
      description: "Your luxury wedding planner creates memorable experiences for every guest.",
      icon: "Heart"
    },
    {
      title: "Concierge Services",
      description: "White-glove luxury wedding planner support for everything from travel to gifts.",
      icon: "Diamond"
    }
  ],

  processSteps: [
    {
      title: "Luxury Consultation",
      description: "Your luxury wedding planner understands your vision, preferences, and definition of excellence."
    },
    {
      title: "Bespoke Concept Creation",
      description: "We design a completely custom wedding concept that reflects your unique story."
    },
    {
      title: "Excellence Curation",
      description: "Your luxury wedding planner sources the finest venues, vendors, and experiences."
    },
    {
      title: "Flawless Delivery",
      description: "Invisible perfection — where every detail exceeds expectations."
    }
  ],

  testimonials: [
    {
      name: "Riya & Arjun",
      event: "₹2 Crore Celebration",
      text: "We wanted a wedding that felt like a private resort experience. Our luxury wedding planner in Vadodara delivered beyond imagination. Guests said it felt like a royal getaway, not just a wedding."
    },
    {
      name: "Nandini & Vikram",
      event: "Intimate Ultra-Luxury",
      text: "Only 50 guests, but every detail was extraordinary. The luxury wedding planner understood that luxury isn't about scale — it's about excellence. Our small wedding felt more grand than any large celebration."
    },
    {
      name: "Prachi & Rohit",
      event: "Three-City Wedding",
      text: "Events in Mumbai, Vadodara, and Goa — each unique, all extraordinary. Our luxury wedding planner coordinated across locations with seamless perfection. Unparalleled service!"
    }
  ],

  faqs: [
    {
      question: "What qualifies as a luxury wedding?",
      answer: "A luxury wedding isn't defined by budget alone, but by the level of personalization, quality of vendors, exclusivity of experiences, and attention to detail. A luxury wedding planner in Vadodara creates celebrations where every element represents the finest available."
    },
    {
      question: "How much does a luxury wedding planner in Vadodara charge?",
      answer: "Luxury wedding planner fees typically start at ₹5-8 lakhs and can exceed ₹20 lakhs for multi-event, international, or ultra-high-end celebrations. The fee reflects the level of curation, concierge services, and bespoke attention provided."
    },
    {
      question: "What's the typical budget for a luxury wedding in Vadodara?",
      answer: "Couples working with a luxury wedding planner typically invest ₹50 lakhs to ₹3+ crores on their celebrations. However, luxury is about quality, not just budget — even smaller celebrations can achieve luxury through careful curation."
    },
    {
      question: "What vendors does a luxury wedding planner work with?",
      answer: "Your luxury wedding planner in Vadodara works exclusively with premium, vetted vendors who deliver exceptional quality — often including national and international names not accessible to typical clients."
    },
    {
      question: "Can a luxury wedding planner handle destination luxury weddings?",
      answer: "Absolutely! Luxury destination weddings are a specialty. Your luxury wedding planner coordinates private venue access, VIP travel arrangements, and exceptional experiences whether in India or internationally."
    },
    {
      question: "What's included in luxury wedding planner concierge services?",
      answer: "Concierge services include personal shopping assistance, VIP guest management, bespoke gift curation, post-wedding experiences, and any special requests. Your luxury wedding planner is available for all needs beyond traditional planning."
    }
  ],

  ctaHeadline: "Experience Luxury Wedding Planning",
  ctaSubtext: "Your celebration deserves nothing but the extraordinary. Begin your journey with Vadodara's premier luxury wedding planner."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Luxury Elegance" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Opulent Details" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Premium Celebration" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Luxury" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Exquisite Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Exclusive Venues" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Luxury" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Bespoke Elements" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Premium Florals" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Grand Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Gourmet Excellence" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Grandeur" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "royal-wedding-planner-vadodara", title: "Royal Wedding Planner" },
  { slug: "destination-wedding-planner-vadodara", title: "Destination Wedding" },
  { slug: "palace-wedding-planner-vadodara", title: "Palace Wedding" },
  { slug: "top-wedding-planners-in-vadodara", title: "Top Wedding Planners" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Wedding Planner" },
];

export const metadata: Metadata = {
  title: "Luxury Wedding Planner Vadodara | Premium Planning | High-End Celebrations",
  description: "Premier luxury wedding planner in Vadodara. Bespoke planning, exclusive venues, premium vendors & white-glove service for the most discerning couples.",
  keywords: "luxury wedding planner vadodara, premium wedding planner vadodara, high end wedding planner vadodara, exclusive wedding planner vadodara",
  openGraph: {
    title: "Luxury Wedding Planner Vadodara | Opulence Meets Elegance",
    description: "Premier luxury wedding planner in Vadodara. For celebrations that deserve nothing but the extraordinary.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/luxury-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Planner Vadodara",
    description: "Premium wedding planning. For celebrations that deserve the extraordinary.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/luxury-wedding-planner-vadodara/",
  },
};

export default function LuxuryWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-amber-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-amber-300" />
                <span className="text-amber-300">Luxury Wedding Excellence</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-stone-200 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Crown className="w-5 h-5 text-amber-300" />
                  <span>Premium Only</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Excellence</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Gem className="w-5 h-5 text-amber-300" />
                  <span>Bespoke</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Private Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm interested in luxury wedding planning in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Begin Your Journey
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-stone-800">
                  Luxury Consultation
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Luxury wedding planner Vadodara • Exclusive service</p>
              <KeywordEnquiryForm 
                keyword="Luxury Wedding Planner Vadodara" 
                source="keyword-page-luxury-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Crown className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Bespoke</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Excellence Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">150+</p>
              <p className="text-gray-600 text-sm">Luxury Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">Premium</p>
              <p className="text-gray-600 text-sm">Vendors Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              What Defines a Luxury Wedding Planner?
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-amber-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The Luxury Wedding Planner Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elements that define luxury wedding planner services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.luxuryElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-amber-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Gem className="w-5 h-5 text-amber-600" />
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
              Luxury Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium services from your luxury wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-stone-600 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full group-hover:bg-amber-100 transition-colors">
                    <Crown className="w-6 h-6 text-stone-600 group-hover:text-amber-600" />
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
              Luxury Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extraordinary celebrations crafted by our luxury wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Luxury Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Luxury Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Luxury Planning Journey
            </h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              How our luxury wedding planner creates extraordinary celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-stone-900 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-stone-500" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-stone-400 text-sm">{step.description}</p>
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
              Luxury Wedding Planner Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who experienced extraordinary celebrations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-stone-200">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 50}`}
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
              Luxury Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop"
          alt="Luxury Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-amber-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Private Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I'm interested in luxury wedding planning in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Luxury Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Premium Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors border border-stone-300 hover:border-stone-400"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Luxury Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for extraordinary? Begin your luxury wedding planning journey in Vadodara.
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
              href="https://wa.me/916353583148?text=Hi, I'm interested in luxury wedding planning!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Luxury Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm interested in luxury wedding planning!"
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
