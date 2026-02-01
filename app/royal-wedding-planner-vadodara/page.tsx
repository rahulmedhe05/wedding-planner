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
  Castle,
  Gem,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Royal Wedding Planner Vadodara — Celebrations Fit for Royalty",
  heroSubtitle: "Inspired by Rajputana grandeur and timeless elegance. Your royal wedding planner creates majestic celebrations worthy of kings and queens.",
  
  mainContent: `
In the land of Maharajas and grand durbars, weddings were never just ceremonies — they were declarations of legacy. Events that announced prosperity, celebrated lineage, and created memories that echoed through generations.

This is the spirit your royal wedding planner in Vadodara brings to modern celebrations.

**What defines a royal wedding planner?**

A royal wedding planner doesn't simply organize events. We architect experiences that channel centuries of regal tradition while honoring contemporary sensibilities. Think palace settings, brocade drapes, vintage cars, trumpet announcers, and processions that make guests feel like they've stepped into a different era.

Your royal wedding planner in Vadodara brings:
• Deep knowledge of royal Indian wedding traditions
• Access to heritage venues and palace properties
• Expertise in traditional ceremonial elements
• Coordination of regal entertainment and services
• Design vocabulary steeped in royal aesthetics

**The royal wedding planner aesthetic:**

Colors of royalty — deep maroons, regal purples, antique golds. Fabrics that whisper opulence — raw silk, velvet, brocade. Flowers that command attention — marigold cascades, rose walls, lily arrangements fit for darbars.

A royal wedding planner in Vadodara curates every visual element to create an atmosphere of majestic celebration. When guests arrive, they shouldn't just see a wedding — they should feel transported to an era of grandeur.

**Royal wedding planner traditions:**

• Grand baraat processions with horse-drawn carriages or elephants
• Traditional welcome rituals with nadaswarams and shehnais
• Durbar-style seating arrangements
• Vintage royal decor with chandeliers and antique furniture
• Elaborate mehendi ceremonies in zenana style
• Reception styled as royal celebration with royal thrones

**Modern royalty:**

Today's royal wedding planner understands that you want regal feel without outdated traditions. We blend the grandeur of royal celebrations with modern comfort, contemporary cuisine, and current entertainment — creating celebrations that feel majestic yet relevant.

Your royal wedding planner in Vadodara creates the wedding of a Maharaja's dreams, executed with 21st-century precision.

Let your love story have a royal chapter.
  `,

  royalElements: [
    {
      title: "Heritage Venues",
      description: "Your royal wedding planner secures palace properties and heritage venues that set the regal tone."
    },
    {
      title: "Grand Processions",
      description: "Baraat entries worthy of royalty — horses, vintage cars, elephants, or royal carriages coordinated by your royal wedding planner."
    },
    {
      title: "Royal Decor",
      description: "Durbar-style setups, antique elements, and royal color palettes. Royal wedding planner specialty."
    },
    {
      title: "Traditional Music",
      description: "Shehnai, nadaswaram, royal band — your royal wedding planner sources authentic traditional entertainment."
    },
    {
      title: "Regal Attire Coordination",
      description: "Royal wedding planner guidance on traditional royal attire, jewelry, and styling."
    },
    {
      title: "Ceremonial Excellence",
      description: "Every ritual executed with royal precision — the royal wedding planner ensures traditional perfection."
    }
  ],

  services: [
    {
      title: "Royal Full Planning",
      description: "Complete royal wedding planner services — concept to execution with regal excellence.",
      icon: "Crown"
    },
    {
      title: "Palace & Heritage Venues",
      description: "Your royal wedding planner accesses exclusive heritage properties across Gujarat and Rajasthan.",
      icon: "Castle"
    },
    {
      title: "Traditional Ceremony Design",
      description: "Royal wedding planner expertise in authentic ceremonial setups and traditional rituals.",
      icon: "Sparkles"
    },
    {
      title: "Grand Baraat Coordination",
      description: "Processions that announce your arrival in true royal style — royal wedding planner specialty.",
      icon: "Users"
    },
    {
      title: "Royal Entertainment",
      description: "Folk dancers, royal bands, traditional performers — royal wedding planner curation.",
      icon: "Star"
    },
    {
      title: "Regal Guest Experience",
      description: "Your royal wedding planner ensures every guest feels like visiting royalty.",
      icon: "Gem"
    }
  ],

  processSteps: [
    {
      title: "Royal Vision",
      description: "Your royal wedding planner understands your interpretation of regal celebration."
    },
    {
      title: "Heritage Curation",
      description: "We source venues, vendors, and elements that embody royal aesthetics."
    },
    {
      title: "Majestic Planning",
      description: "Every detail planned with the precision of a royal court — from processions to ceremonies."
    },
    {
      title: "Regal Execution",
      description: "Your royal wedding planner delivers a celebration worthy of crown jewels."
    }
  ],

  testimonials: [
    {
      name: "Rajeshwari & Vikram Singh",
      event: "Rajput Heritage Wedding",
      text: "Our royal wedding planner in Vadodara understood our heritage perfectly. The durbar setup, the sword ceremony, the traditional welcome — every element honored our ancestry while creating something uniquely ours."
    },
    {
      name: "Meenakshi & Aditya",
      event: "Palace Wedding",
      text: "We wanted guests to feel like they'd traveled back in time to a Maharaja's wedding. Our royal wedding planner exceeded expectations — from the elephant baraat to the royal reception, pure magic!"
    },
    {
      name: "Priyanka & Gaurav",
      event: "Modern Royal Celebration",
      text: "We wanted royal feel without being old-fashioned. The royal wedding planner balanced tradition with contemporary perfectly. Regal atmosphere, modern comfort. Guests are still talking about it!"
    }
  ],

  faqs: [
    {
      question: "What exactly is a royal wedding planner?",
      answer: "A royal wedding planner in Vadodara specializes in creating celebrations inspired by Indian royal traditions — grand processions, heritage venues, traditional ceremonies, regal decor, and majestic atmosphere. We bring the grandeur of Maharaja-era weddings to modern celebrations."
    },
    {
      question: "Do I need a palace venue for a royal wedding?",
      answer: "Not necessarily! A royal wedding planner can create regal atmosphere in various venues through decor, setup, and ceremonial elements. However, we do have access to heritage and palace properties if you desire authentic settings."
    },
    {
      question: "How much does a royal wedding planner cost?",
      answer: "Royal wedding planner fees range from ₹4-10 lakhs depending on scale and complexity. The overall wedding budget for a royal celebration typically starts at ₹30-40 lakhs and can exceed ₹1-2 crores for elaborate setups."
    },
    {
      question: "Can a royal wedding planner work within traditional community customs?",
      answer: "Absolutely! Your royal wedding planner integrates community-specific traditions within the royal aesthetic. Whether Rajput, Marwari, Gujarati, or any other community, we honor your customs with regal presentation."
    },
    {
      question: "What makes baraat arrangements 'royal'?",
      answer: "A royal wedding planner arranges grand entries — decorated horses, vintage cars, elephants (where permitted), royal bands, sword-bearing guards, and traditional welcome committees. The procession becomes a spectacle worthy of royalty."
    },
    {
      question: "How early should we book a royal wedding planner?",
      answer: "For royal weddings, especially those at heritage venues, book your royal wedding planner 12-18 months in advance. Palace properties and heritage venues have limited dates, and elaborate arrangements need extended planning time."
    }
  ],

  ctaHeadline: "Create Your Royal Wedding Story",
  ctaSubtext: "Every love story deserves a regal chapter. Let our royal wedding planner in Vadodara craft your majestic celebration."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Royal Elegance" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Majestic Setup" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Regal Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Royal Bride" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Palace Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Heritage Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Royal Romance" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Regal Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Royal Florals" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Grand Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Royal Feast" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Grandeur" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "luxury-wedding-planner-vadodara", title: "Luxury Planner" },
  { slug: "palace-wedding-planner-vadodara", title: "Palace Wedding" },
  { slug: "destination-wedding-planner-vadodara", title: "Destination Wedding" },
  { slug: "heritage-wedding-planner-vadodara", title: "Heritage Wedding" },
  { slug: "theme-wedding-planner-vadodara", title: "Theme Wedding" },
];

export const metadata: Metadata = {
  title: "Royal Wedding Planner Vadodara | Regal Celebrations | Palace Weddings",
  description: "Expert royal wedding planner in Vadodara. Create majestic celebrations with heritage venues, grand processions & regal decor. Weddings fit for royalty.",
  keywords: "royal wedding planner vadodara, royal wedding vadodara, palace wedding planner vadodara, heritage wedding planner vadodara, rajputana wedding vadodara",
  openGraph: {
    title: "Royal Wedding Planner Vadodara | Celebrations Fit for Royalty",
    description: "Royal wedding planner in Vadodara. Majestic celebrations inspired by Rajputana grandeur.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/royal-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Royal Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Wedding Planner Vadodara",
    description: "Majestic wedding celebrations. Regal traditions, modern execution.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/royal-wedding-planner-vadodara/",
  },
};

export default function RoyalWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-red-900 via-rose-800 to-amber-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-amber-300" />
                <span className="text-amber-300">Royal Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-rose-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Crown className="w-5 h-5 text-amber-300" />
                  <span>Royal Grandeur</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Castle className="w-5 h-5 text-amber-300" />
                  <span>Palace Venues</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-red-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Royal Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I want a royal wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Your Royal Day
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-6 h-6 text-red-700" />
                <h3 className="text-xl font-bold text-red-800">
                  Royal Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Royal wedding planner Vadodara • Majestic celebrations</p>
              <KeywordEnquiryForm 
                keyword="Royal Wedding Planner Vadodara" 
                source="keyword-page-royal-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Crown className="w-10 h-10 text-red-700 mb-2" />
              <p className="font-bold text-2xl">Royal</p>
              <p className="text-gray-600 text-sm">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-rose-600 mb-2" />
              <p className="font-bold text-2xl">100+</p>
              <p className="text-gray-600 text-sm">Royal Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Castle className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">20+</p>
              <p className="text-gray-600 text-sm">Heritage Venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              The Art of Royal Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-amber-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Royal Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Royal Wedding Planner Elements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regal elements that define our royal wedding planner services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.royalElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-red-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Crown className="w-5 h-5 text-red-700" />
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
              Royal Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Majestic services from your royal wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-amber-600 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-red-100 transition-colors">
                    <Crown className="w-6 h-6 text-amber-600 group-hover:text-red-700" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-red-700" />
              Royal Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Majestic celebrations created by our royal wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Royal Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Royal Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Royal Wedding Planning Journey
            </h2>
            <p className="text-red-200 max-w-2xl mx-auto">
              How our royal wedding planner creates your majestic celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-red-900 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-red-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-red-200 text-sm">{step.description}</p>
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
              Royal Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who celebrated with royal grandeur.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-red-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 60}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-red-700">{testimonial.event}</p>
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
              Royal Wedding Planner FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-red-700 group-open:rotate-45 transition-transform">+</span>
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
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=600&fit=crop"
          alt="Royal Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-amber-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-red-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Royal Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want a royal wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Royal Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Royal Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-800 rounded-full transition-colors border border-red-200 hover:border-red-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-900 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Royal Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for a celebration worthy of royalty? Begin your royal wedding journey.
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
              href="https://wa.me/916353583148?text=Hi, I want a royal wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Royal Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I want a royal wedding planner!"
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
