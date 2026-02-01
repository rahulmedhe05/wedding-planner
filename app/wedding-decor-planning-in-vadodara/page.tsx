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
  Flower2,
  Lightbulb,
  Brush,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Decor Planning in Vadodara — Visual Poetry for Your Celebration",
  heroSubtitle: "Your love story told through colors, flowers, fabrics, and light. Expert wedding decor planning that transforms venues into dreamscapes.",
  
  mainContent: `
Close your eyes and imagine your wedding. What do you see? Perhaps cascading florals in blush and ivory. Maybe twinkling fairy lights against a starlit sky. Or bold, vibrant mandaps that command attention.

This vision is why wedding decor planning matters.

**What is wedding decor planning?**

Wedding decor planning in Vadodara transforms empty venues into emotional experiences. It's the art of selecting colors that evoke feelings, arranging flowers that tell stories, designing installations that take breath away.

Beyond simple decoration, wedding decor planning encompasses:
• Color palette development that reflects your personality
• Floral design concepts for all wedding functions
• Lighting design that creates atmosphere
• Table settings and dining aesthetics
• Installation art and statement pieces
• Stage and mandap design
• Photo backdrop creation

**The difference decor makes:**

Your venue provides walls and floors. Wedding decor planning provides soul.

When guests enter a beautifully planned space, they feel something before seeing anything specific. That feeling — of romance, celebration, warmth, elegance — comes from thoughtful wedding decor planning in Vadodara.

**Beyond the mandap:**

While the wedding mandap rightfully gets attention, comprehensive wedding decor planning considers every space. The entrance that sets first impressions. The waiting areas where guests mingle. The dining spaces where conversations flow. The farewell point where memories linger.

Wedding decor planning in Vadodara creates cohesive experiences across every touchpoint.

**Decor styles we create:**

*Romantic & Soft:* Blush tones, soft draping, candles, roses, vintage touches. Wedding decor planning for hopeless romantics.

*Bold & Vibrant:* Rich colors, dramatic florals, statement pieces, contemporary designs. Wedding decor planning with impact.

*Minimalist Modern:* Clean lines, greenery, geometric shapes, sophisticated restraint. Wedding decor planning for modern couples.

*Traditional Grandeur:* Classic motifs, marigolds, brass elements, cultural authenticity. Wedding decor planning rooted in heritage.

**The planning process:**

Good wedding decor planning starts with questions: What colors make you happy? What flowers remind you of love? What aesthetic defines your relationship? From answers, we create visual stories unique to you.

Wedding decor planning in Vadodara — where your venue becomes your love letter.
  `,

  decorElements: [
    {
      title: "Floral Design",
      description: "Wedding decor planning includes complete floral concepts — centerpieces, installations, mandap florals, and personal flowers."
    },
    {
      title: "Lighting Design",
      description: "Fairy lights, chandeliers, spotlights, candles — wedding decor planning creates magical atmospheres."
    },
    {
      title: "Mandap Design",
      description: "The ceremony centerpiece deserves exceptional attention — expert wedding decor planning hallmark."
    },
    {
      title: "Entrance Concepts",
      description: "First impressions matter. Wedding decor planning creates arrivals that set the tone."
    },
    {
      title: "Dining Aesthetics",
      description: "Table settings, linens, centerpieces — comprehensive wedding decor planning extends to every surface."
    },
    {
      title: "Installation Art",
      description: "Statement pieces that photograph beautifully — wedding decor planning signature elements."
    }
  ],

  services: [
    {
      title: "Complete Decor Planning",
      description: "End-to-end wedding decor planning from concept to installation for all wedding functions.",
      icon: "Flower2"
    },
    {
      title: "Concept Development",
      description: "Wedding decor planning starts with mood boards, color palettes, and visual direction.",
      icon: "Lightbulb"
    },
    {
      title: "Floral Services",
      description: "From bouquets to installations — wedding decor planning includes all floral elements.",
      icon: "Sparkles"
    },
    {
      title: "Stage & Mandap Design",
      description: "Ceremony focal points designed by expert wedding decor planning team.",
      icon: "Brush"
    },
    {
      title: "Lighting Solutions",
      description: "Ambient, decorative, and functional lighting as part of wedding decor planning.",
      icon: "Heart"
    },
    {
      title: "Vendor Coordination",
      description: "Wedding decor planning includes managing all decor vendors for seamless execution.",
      icon: "Users"
    }
  ],

  processSteps: [
    {
      title: "Vision Discovery",
      description: "Wedding decor planning begins with understanding your aesthetic dreams."
    },
    {
      title: "Concept Creation",
      description: "We develop mood boards, color schemes, and design direction for approval."
    },
    {
      title: "Vendor Selection",
      description: "Wedding decor planning includes sourcing the best decorators, florists, and craftsmen."
    },
    {
      title: "Magical Execution",
      description: "On-site installation that transforms your vision into reality."
    }
  ],

  testimonials: [
    {
      name: "Riya & Sagar",
      event: "Romantic Garden Theme",
      text: "The wedding decor planning in Vadodara exceeded our wildest dreams! They understood our vision of romantic elegance and created spaces that looked like they came from a magazine. Every corner was photo-worthy!"
    },
    {
      name: "Meghna & Harsh",
      event: "Traditional Gujarati Wedding",
      text: "We wanted traditional without being predictable. The wedding decor planning team combined classic elements with fresh interpretations. Marigolds never looked so contemporary! Guests couldn't stop complimenting."
    },
    {
      name: "Prerna & Ronak",
      event: "Modern Minimalist Wedding",
      text: "We wanted clean, sophisticated, minimal. So many decorators didn't understand — but this wedding decor planning team got it immediately. Less was definitely more, and the result was stunning!"
    }
  ],

  faqs: [
    {
      question: "What does wedding decor planning include vs. just decorators?",
      answer: "Wedding decor planning in Vadodara is comprehensive — it includes concept development, color palette creation, vendor selection, design coordination across all functions, and execution management. A decorator simply executes instructions. Wedding decor planning creates the entire visual strategy."
    },
    {
      question: "How early should we start wedding decor planning?",
      answer: "Start wedding decor planning 6-9 months before your wedding. This allows time for concept development, vendor selection, custom fabrication if needed, and seasonal flower planning. Complex designs may need even more lead time."
    },
    {
      question: "How much does wedding decor planning cost in Vadodara?",
      answer: "Wedding decor planning fees typically range from ₹50,000-2,00,000+ depending on scope and complexity. Actual decor execution costs depend on your choices — ranging from ₹3-5 lakhs for modest decor to ₹15-30+ lakhs for elaborate setups."
    },
    {
      question: "Can wedding decor planning work with my limited budget?",
      answer: "Absolutely! Smart wedding decor planning maximizes impact within any budget. We prioritize high-impact areas, suggest cost-effective alternatives, and create designs that look expensive without breaking the bank."
    },
    {
      question: "Do you handle all wedding functions or just the main ceremony?",
      answer: "Comprehensive wedding decor planning covers all functions — engagement, mehendi, sangeet, haldi, wedding ceremony, and reception. Each event gets appropriate styling while maintaining visual cohesion across your celebration."
    },
    {
      question: "What if I don't know what style I want?",
      answer: "That's exactly what wedding decor planning expertise is for! Through discovery conversations, Pinterest reviews, and inspiration sharing, we help you identify your aesthetic preferences and develop a cohesive vision you'll love."
    }
  ],

  ctaHeadline: "Let Your Venue Tell Your Story",
  ctaSubtext: "Every love story deserves visual poetry. Let expert wedding decor planning in Vadodara transform your celebration spaces."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Elegant Decor" },
  { id: 2, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Magic" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Setup" },
  { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Reception Style" },
  { id: 5, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Mandap Design" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Detailed Beauty" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Setting" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Table Settings" },
  { id: 9, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Creative Concept" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebratory Decor" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Dining Elegance" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Charm" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "theme-wedding-planner-vadodara", title: "Theme Wedding" },
  { slug: "luxury-wedding-planner-vadodara", title: "Luxury Wedding" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Planning" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
];

export const metadata: Metadata = {
  title: "Wedding Decor Planning in Vadodara | Floral & Stage Design | Venue Decoration",
  description: "Expert wedding decor planning in Vadodara. Beautiful mandaps, stunning florals, elegant lighting & complete venue transformation for your dream wedding.",
  keywords: "wedding decor planning vadodara, wedding decoration vadodara, mandap decoration vadodara, floral design vadodara, wedding stage decoration vadodara",
  openGraph: {
    title: "Wedding Decor Planning in Vadodara | Visual Poetry for Celebrations",
    description: "Wedding decor planning in Vadodara. Transform venues into dreamscapes with expert decor services.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-decor-planning-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Decor Planning Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Decor Planning Vadodara",
    description: "Transform your wedding venue into visual poetry. Expert decor planning services.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-decor-planning-in-vadodara/",
  },
};

export default function WeddingDecorPlanningVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="w-5 h-5 text-pink-200" />
                <span className="text-pink-200">Decor Design Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Flower2 className="w-5 h-5 text-pink-200" />
                  <span>Floral Artists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-yellow-200" />
                  <span>Creative Concepts</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-bold hover:bg-pink-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Decor Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need wedding decor planning in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Share Your Vision
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flower2 className="w-6 h-6 text-rose-500" />
                <h3 className="text-xl font-bold text-rose-600">
                  Decor Planning Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding decor planning Vadodara • Visual transformation</p>
              <KeywordEnquiryForm 
                keyword="Wedding Decor Planning Vadodara" 
                source="keyword-page-wedding-decor-planning-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Flower2 className="w-10 h-10 text-rose-500 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Venues Transformed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">50+</p>
              <p className="text-gray-600 text-sm">Decor Partners</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">Artistic</p>
              <p className="text-gray-600 text-sm">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              The Art of Wedding Decor Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-600">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-pink-600">$1</em>')
                      .replace(/•/g, '<span class="text-fuchsia-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decor Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Wedding Decor Planning Elements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive decor elements we design and execute in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.decorElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4"
                style={{ borderTopColor: ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#6366f1'][index] }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-rose-500" />
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
              Decor Planning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete wedding decor planning services for Vadodara celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full group-hover:bg-rose-500 transition-colors">
                    <Flower2 className="w-6 h-6 text-pink-600 group-hover:text-white" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-rose-500" />
              Decor Portfolio Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visual transformations created by our wedding decor planning team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Decor Planning Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Decor Planning</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wedding Decor Planning Process
            </h2>
            <p className="text-pink-100 max-w-2xl mx-auto">
              How we transform your decor vision into breathtaking reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-rose-500 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-pink-100 text-sm">{step.description}</p>
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
              Decor Planning Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who fell in love with their transformed venues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 40}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-rose-600">{testimonial.event}</p>
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
              Decor Planning FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-rose-500 group-open:rotate-45 transition-transform">+</span>
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
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=600&fit=crop"
          alt="Wedding Decor Planning Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-pink-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-pink-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Decor Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need wedding decor planning in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Decor Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Planning Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-full transition-colors border border-rose-200 hover:border-rose-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Decor Planning Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to transform your venue? Share your decor vision with us.
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
              href="https://wa.me/916353583148?text=Hi, I need wedding decor planning!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Decor Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need wedding decor planning!"
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
