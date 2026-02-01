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
  Moon,
  BookOpen,
  Gem,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Muslim Wedding Planner Vadodara — Nikah Celebrations with Grace",
  heroSubtitle: "Beautiful Muslim wedding ceremonies that honor Islamic traditions while creating elegant, memorable celebrations for your families.",
  
  mainContent: `
A Muslim wedding is a beautiful covenant — a sacred contract witnessed by loved ones, blessed by prayers, celebrated with joy. The Nikah ceremony, steeped in meaning, deserves planning that respects its significance.

This is why you need a Muslim wedding planner in Vadodara who understands.

**Understanding Islamic wedding traditions:**

Muslim weddings have beautiful simplicity at their core, with the Nikah ceremony being the essential religious requirement. Yet the celebrations surrounding this sacred moment can be as elaborate as you wish.

Your Muslim wedding planner in Vadodara must understand:
• Nikah ceremony requirements and protocols
• Mehr negotiations and presentation
• The role of Qazi/Maulvi in the ceremony
• Segregation considerations when required
• Mehndi and sangeet traditions
• Walima celebration customs
• Regional variations across communities

**The importance of specialized planning:**

Muslim weddings have specific requirements that general planners may not understand. From ensuring appropriate ceremony setups to respecting segregation preferences, from coordinating prayer times to creating halal menus — details matter.

A Muslim wedding planner in Vadodara ensures:
• Proper Nikah ceremony arrangements
• Coordination with religious officiants
• Respectful treatment of all traditions
• Appropriate venue setup for your preferences
• Halal catering coordination
• Beautiful decor within Islamic guidelines

**Regional traditions we honor:**

Muslim weddings vary beautifully across communities. A North Indian Muslim wedding includes vibrant mehndi celebrations. A South Indian Muslim wedding may feature different customs. Bohri, Sunni, Shia traditions each have unique elements.

Your Muslim wedding planner in Vadodara understands these nuances, ensuring your specific customs are perfectly honored.

**Modern Muslim celebrations:**

Today's couples often want celebrations that honor religious requirements while embracing modern aesthetics. A skilled Muslim wedding planner creates events that are both traditionally appropriate and contemporary in style.

Whether you prefer segregated functions or mixed gatherings, traditional decor or modern minimalism — we respect and execute your vision.

Muslim wedding planner in Vadodara — where faith meets celebration, where tradition meets today.
  `,

  muslimRituals: [
    {
      title: "Nikah Ceremony",
      description: "The sacred marriage contract arranged with proper protocols by your Muslim wedding planner."
    },
    {
      title: "Mehndi Celebration",
      description: "Colorful pre-wedding festivities planned by Muslim wedding planner with traditional joy."
    },
    {
      title: "Mehr Ceremony",
      description: "The sacred gift to the bride — Muslim wedding planner ensures beautiful presentation."
    },
    {
      title: "Walima Reception",
      description: "Post-wedding feast celebrating the union — Muslim wedding planner grand arrangements."
    },
    {
      title: "Sangeet Night",
      description: "Musical celebration when desired — Muslim wedding planner creates memorable entertainment."
    },
    {
      title: "Rukhsati Moment",
      description: "The emotional farewell beautifully orchestrated by your Muslim wedding planner."
    }
  ],

  services: [
    {
      title: "Complete Nikah Planning",
      description: "End-to-end Muslim wedding planner services from mehndi to walima with religious sensitivity.",
      icon: "Moon"
    },
    {
      title: "Ceremony Coordination",
      description: "Muslim wedding planner coordination with Qazi, managing Nikah requirements professionally.",
      icon: "BookOpen"
    },
    {
      title: "Halal Catering Management",
      description: "Your Muslim wedding planner ensures completely halal food services from trusted caterers.",
      icon: "CheckCircle"
    },
    {
      title: "Appropriate Decor Design",
      description: "Beautiful aesthetics within Islamic guidelines — Muslim wedding planner creativity.",
      icon: "Sparkles"
    },
    {
      title: "Venue Arrangements",
      description: "Muslim wedding planner sources venues appropriate for your ceremony preferences.",
      icon: "Heart"
    },
    {
      title: "Family Coordination",
      description: "Both families guided gracefully through traditions by your Muslim wedding planner.",
      icon: "Users"
    }
  ],

  processSteps: [
    {
      title: "Tradition Understanding",
      description: "Your Muslim wedding planner learns your family's specific customs and preferences."
    },
    {
      title: "Ceremony Planning",
      description: "Nikah arrangements coordinated with religious requirements properly addressed."
    },
    {
      title: "Celebration Design",
      description: "Muslim wedding planner creates beautiful events respecting all guidelines."
    },
    {
      title: "Blessed Execution",
      description: "Every function executed with grace, every tradition honored with respect."
    }
  ],

  testimonials: [
    {
      name: "Fatima & Imran",
      event: "Traditional Nikah Celebration",
      text: "Finding a Muslim wedding planner in Vadodara who truly understood our traditions was such a relief. The Nikah arrangements were perfect, the walima was grand, and every detail respected our customs. Wonderful experience!"
    },
    {
      name: "Ayesha & Danish",
      event: "Modern Muslim Wedding",
      text: "We wanted modern elegance while keeping things halal and appropriate. Our Muslim wedding planner understood exactly what we needed — contemporary aesthetics with traditional values. Our families were impressed!"
    },
    {
      name: "Zainab & Faraz",
      event: "Grand Walima Reception",
      text: "The Muslim wedding planner created a stunning walima that reflected our style while honoring traditions. The decor was beautiful, food was exceptional, and the event flow was perfect. Couldn't have asked for more!"
    }
  ],

  faqs: [
    {
      question: "What makes a Muslim wedding planner different from regular planners?",
      answer: "A Muslim wedding planner in Vadodara understands specific Islamic requirements — Nikah protocols, coordination with religious officiants, halal catering needs, appropriate decor guidelines, and various community traditions (Sunni, Shia, Bohri, etc.). This specialized knowledge ensures your celebration is both beautiful and religiously appropriate."
    },
    {
      question: "Can you accommodate segregated wedding functions?",
      answer: "Absolutely! Your Muslim wedding planner can arrange fully segregated events, partially segregated functions, or mixed gatherings based on your family's preferences. We ensure appropriate arrangements while maintaining elegance and comfort."
    },
    {
      question: "How do you handle Nikah ceremony arrangements?",
      answer: "Your Muslim wedding planner coordinates with your chosen Qazi/Maulvi, arranges proper ceremony setup, manages witness requirements, organizes Mehr presentation, and ensures all religious protocols are followed correctly and respectfully."
    },
    {
      question: "What about halal food arrangements?",
      answer: "We exclusively work with certified halal caterers for Muslim weddings. Your Muslim wedding planner verifies halal certification, ensures no cross-contamination concerns, and creates menus that are both delicious and completely compliant."
    },
    {
      question: "Can you plan both traditional and modern Muslim weddings?",
      answer: "Yes! Whether you want a traditional celebration with classic elements or a contemporary event with modern aesthetics, your Muslim wedding planner creates celebrations that honor your preferences while respecting religious guidelines."
    },
    {
      question: "Do you understand different Muslim community traditions?",
      answer: "Absolutely. Muslim wedding planner expertise covers traditions across communities — North Indian, South Indian, Bohri, Sunni, Shia, and others. We learn your specific customs and ensure they're perfectly incorporated."
    }
  ],

  ctaHeadline: "Celebrate Your Sacred Union",
  ctaSubtext: "Let a Muslim wedding planner in Vadodara create celebrations that honor your faith while crafting beautiful, memorable moments."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Elegant Nikah" },
  { id: 2, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 3, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Setup" },
  { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Elegance" },
  { id: 5, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Wedding Ceremony" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Detailed Decor" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Moment" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Walima Joy" },
  { id: 9, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Guest Welcome" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Feast Setup" },
  { id: 12, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Beautiful Venue" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "religious-wedding-planner-vadodara", title: "Religious Wedding" },
  { slug: "traditional-wedding-planner-vadodara", title: "Traditional Wedding" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
  { slug: "wedding-catering-services-vadodara", title: "Catering Services" },
];

export const metadata: Metadata = {
  title: "Muslim Wedding Planner Vadodara | Nikah Ceremonies | Islamic Weddings",
  description: "Expert Muslim wedding planner in Vadodara. Beautiful Nikah ceremonies, walima receptions & halal celebrations honoring Islamic traditions with elegance.",
  keywords: "muslim wedding planner vadodara, nikah planner vadodara, islamic wedding vadodara, walima planner vadodara, muslim wedding vadodara",
  openGraph: {
    title: "Muslim Wedding Planner Vadodara | Nikah Celebrations with Grace",
    description: "Muslim wedding planner in Vadodara. Beautiful ceremonies honoring Islamic traditions.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/muslim-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Muslim Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslim Wedding Planner Vadodara",
    description: "Beautiful Islamic wedding celebrations with traditional grace.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/muslim-wedding-planner-vadodara/",
  },
};

export default function MuslimWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-200">Muslim Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Moon className="w-5 h-5 text-emerald-200" />
                  <span>Nikah Expertise</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Gem className="w-5 h-5 text-cyan-200" />
                  <span>Halal Standards</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Nikah Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a Muslim wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Muslim Wedding
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Moon className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Muslim Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Muslim wedding planner Vadodara • Nikah services</p>
              <KeywordEnquiryForm 
                keyword="Muslim Wedding Planner Vadodara" 
                source="keyword-page-muslim-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Moon className="w-10 h-10 text-emerald-600 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-gray-600 text-sm">Muslim Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Halal Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-cyan-600 mb-2" />
              <p className="font-bold text-2xl">All</p>
              <p className="text-gray-600 text-sm">Communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Beautiful Muslim Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-teal-600">$1</em>')
                      .replace(/•/g, '<span class="text-emerald-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Muslim Rituals Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Muslim Wedding Ceremonies We Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every celebration honored by your Muslim wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.muslimRituals.map((ritual, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-emerald-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Moon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{ritual.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{ritual.description}</p>
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
              Muslim Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for Islamic celebrations in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-teal-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full group-hover:bg-emerald-500 transition-colors">
                    <Moon className="w-6 h-6 text-teal-600 group-hover:text-white" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-emerald-600" />
              Muslim Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful celebrations created by our Muslim wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Muslim Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Muslim Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Muslim Wedding Planning Journey
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              How your Muslim wedding planner creates blessed celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-emerald-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-emerald-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-emerald-100 text-sm">{step.description}</p>
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
              Muslim Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Families who celebrated blessed unions with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 30}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-emerald-600">{testimonial.event}</p>
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
              Muslim Wedding Planner FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-emerald-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Muslim Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Nikah Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a Muslim wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Muslim Wedding Team
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
                className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-full transition-colors border border-emerald-200 hover:border-emerald-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Muslim Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your blessed celebration? Let's begin your journey together.
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
              href="https://wa.me/916353583148?text=Hi, I need a Muslim wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Muslim Wedding Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a Muslim wedding planner!"
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
