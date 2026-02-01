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
  Plane,
  Globe,
  Mountain,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Destination Wedding Planner Vadodara — Your Dream Location, Our Expertise",
  heroSubtitle: "Take your love story beyond boundaries. Vadodara's trusted destination wedding planner bringing dream locations to life.",
  
  mainContent: `
Close your eyes. Picture this:

A beach in Goa at sunset. A palace in Udaipur at golden hour. A vineyard in Nashik under starlight. A resort in Kerala surrounded by backwaters. An international escape to Thailand or Bali.

Now imagine celebrating your love there — with every guest comfortable, every detail handled, every moment magical.

That's what a destination wedding planner does. We take impossible logistics and turn them into unforgettable celebrations.

**Why choose a destination wedding planner from Vadodara?**

Because planning a wedding in an unfamiliar location without local expertise is a recipe for stress. Your destination wedding planner from Vadodara brings:

• Extensive location knowledge across India's best wedding destinations
• Trusted vendor networks in popular destination venues
• Travel and accommodation coordination for all guests
• Local insight that only experienced destination wedding planners have
• Budget optimization across locations with different cost structures

A destination wedding planner doesn't just plan an event — we orchestrate a complete experience across geography.

**The destination wedding planner advantage:**

Local wedding planning is complex. Now multiply that complexity by distance, unfamiliar vendors, travel logistics, multiple currencies, and guests who've never been to your chosen location.

Your destination wedding planner in Vadodara handles:
• Destination selection guidance
• Venue scouting and negotiations
• Complete vendor coordination in the destination
• Guest travel and accommodation
• Welcome events and itineraries
• Local legal requirements
• Weather contingencies
• Cultural and regional considerations

**Popular destinations we've planned:**

As an experienced destination wedding planner, we've created celebrations in Udaipur, Jaipur, Jodhpur, Goa, Kerala, Jim Corbett, Rishikesh, Thailand, Bali, Dubai, and more. Each destination has unique charm — and unique challenges that only a destination wedding planner truly understands.

**Your story, our coordinates:**

Whether it's a palace wedding in Rajasthan or a beach celebration in Goa, your destination wedding planner in Vadodara brings local expertise from home combined with destination mastery wherever your heart leads.

Love has no boundaries. Neither should your wedding.
  `,

  destinations: [
    {
      name: "Udaipur",
      description: "Lakes, palaces, and romance. The destination wedding planner's favorite for royal celebrations."
    },
    {
      name: "Goa",
      description: "Beach vibes and sunset ceremonies. Destination wedding planner expertise for coastal celebrations."
    },
    {
      name: "Jaipur",
      description: "Pink City grandeur. Destination wedding planner services for heritage palace weddings."
    },
    {
      name: "Kerala",
      description: "Backwaters and tranquility. Unique destination wedding planner experiences in God's own country."
    },
    {
      name: "Jim Corbett",
      description: "Nature meets celebration. Destination wedding planner adventures in wilderness luxury."
    },
    {
      name: "International",
      description: "Thailand, Bali, Dubai, Maldives. Your destination wedding planner for global celebrations."
    }
  ],

  services: [
    {
      title: "Destination Selection",
      description: "Expert destination wedding planner guidance on choosing the perfect location for your vision and budget.",
      icon: "Globe"
    },
    {
      title: "Venue Scouting",
      description: "Your destination wedding planner personally scouts and negotiates the best venue deals.",
      icon: "Mountain"
    },
    {
      title: "Travel Coordination",
      description: "Complete guest travel management — flights, transport, visas. Full destination wedding planner support.",
      icon: "Plane"
    },
    {
      title: "Accommodation Management",
      description: "Destination wedding planner services include hotel blocks, room assignments, and guest comfort.",
      icon: "MapPin"
    },
    {
      title: "Local Vendor Coordination",
      description: "Our destination wedding planner network ensures quality vendors at every location.",
      icon: "Users"
    },
    {
      title: "Guest Experience Design",
      description: "Welcome dinners, activities, itineraries — the destination wedding planner creates complete experiences.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Dream Discussion",
      description: "Your destination wedding planner understands your vision, preferences, and destination dreams."
    },
    {
      title: "Destination Planning",
      description: "We research, scout, and recommend perfect locations with complete destination wedding planner expertise."
    },
    {
      title: "Complete Coordination",
      description: "Your destination wedding planner handles every detail across geography — vendors, travel, events."
    },
    {
      title: "Magical Execution",
      description: "We're there with you at the destination, ensuring everything unfolds perfectly."
    }
  ],

  testimonials: [
    {
      name: "Ananya & Rohan",
      event: "Udaipur Palace Wedding",
      text: "Planning a wedding in Udaipur from Vadodara seemed impossible. Our destination wedding planner made it effortless. Every guest felt like royalty, and we didn't stress about a single detail."
    },
    {
      name: "Tanya & Akshay",
      event: "Goa Beach Wedding",
      text: "We wanted barefoot-on-beach casual elegance. The destination wedding planner understood perfectly. 150 guests, perfect weather contingency, and the most beautiful sunset ceremony!"
    },
    {
      name: "Pooja & Nikhil",
      event: "Thailand Wedding",
      text: "International destination wedding planner services at their best! Coordinating guests from India, USA, and UK to Thailand was complex but flawlessly handled. Beyond our expectations!"
    }
  ],

  faqs: [
    {
      question: "What destinations does your destination wedding planner service cover?",
      answer: "As a destination wedding planner from Vadodara, we cover all major Indian destinations (Udaipur, Jaipur, Goa, Kerala, Rishikesh, Mussoorie, etc.) and international locations (Thailand, Bali, Dubai, Maldives, Sri Lanka). If you have a dream destination, our destination wedding planner team can make it happen."
    },
    {
      question: "How much does a destination wedding planner cost?",
      answer: "Destination wedding planner fees typically range from ₹3-8 lakhs depending on destination, complexity, and guest count. International destination wedding planner services may be higher. The fee is separate from actual wedding expenses at the destination."
    },
    {
      question: "How early should we hire a destination wedding planner?",
      answer: "For destination weddings, hire your destination wedding planner 12-18 months in advance. Popular venues book early, and visa processing, guest travel coordination, and destination-specific planning need adequate time."
    },
    {
      question: "Will the destination wedding planner travel to our location?",
      answer: "Absolutely! Your destination wedding planner personally visits the destination for venue scouting, vendor meetings, and is present during all wedding events. That's non-negotiable for quality destination wedding planner services."
    },
    {
      question: "How do you handle vendor quality in unfamiliar destinations?",
      answer: "Our destination wedding planner has established networks across popular destinations through years of experience. For new locations, we conduct thorough vetting including in-person meetings and reference checks before recommending any vendor."
    },
    {
      question: "What about guests who've never traveled to the destination?",
      answer: "As your destination wedding planner, we create complete guest guides, coordinate group travel, arrange airport transfers, and plan activities. Every guest gets the information and support they need for a comfortable destination experience."
    }
  ],

  ctaHeadline: "Ready for Your Destination Wedding?",
  ctaSubtext: "Your dream location awaits. Let Vadodara's trusted destination wedding planner turn geography into magic."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Destination Dreams" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Palace Romance" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Beach Wedding" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Exotic Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Heritage Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Sunset Moments" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Location Magic" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Paradise" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Destination Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Culinary Journey" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Elegance" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "luxury-wedding-planner-vadodara", title: "Luxury Planner" },
  { slug: "royal-wedding-planner-vadodara", title: "Royal Wedding Planner" },
  { slug: "palace-wedding-planner-vadodara", title: "Palace Wedding" },
  { slug: "resort-wedding-planner-vadodara", title: "Resort Wedding" },
  { slug: "beach-wedding-planner-vadodara", title: "Beach Wedding" },
];

export const metadata: Metadata = {
  title: "Destination Wedding Planner Vadodara | Udaipur, Goa, International | 200+ Weddings",
  description: "Expert destination wedding planner from Vadodara. Plan dream weddings in Udaipur, Goa, Jaipur, Kerala, Thailand & more. Complete destination wedding coordination.",
  keywords: "destination wedding planner vadodara, destination wedding vadodara, udaipur wedding planner, goa wedding planner, international wedding planner vadodara",
  openGraph: {
    title: "Destination Wedding Planner Vadodara | Dream Locations",
    description: "Destination wedding planner from Vadodara. Expert planning for weddings anywhere in India or abroad.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/destination-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Destination Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destination Wedding Planner Vadodara",
    description: "Expert destination wedding planning. Your dream location, our expertise.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/destination-wedding-planner-vadodara/",
  },
};

export default function DestinationWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-amber-700 via-orange-600 to-rose-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-amber-200" />
                <span className="text-amber-200">Destination Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Plane className="w-5 h-5 text-amber-200" />
                  <span>Any Destination</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>200+ Destinations</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Discuss Destination
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a destination wedding planner from Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Your Escape
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-700">
                  Plan Destination Wedding
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Destination wedding planner Vadodara • Any location</p>
              <KeywordEnquiryForm 
                keyword="Destination Wedding Planner Vadodara" 
                source="keyword-page-destination-wedding-planner-vadodara"
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
              <Globe className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">50+</p>
              <p className="text-gray-600 text-sm">Destinations</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-gray-600 text-sm">Destination Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-rose-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Why Choose a Destination Wedding Planner?
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-orange-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Destination Wedding Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Where our destination wedding planner team creates magic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-amber-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{dest.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{dest.description}</p>
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
              Destination Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete destination wedding planner support from Vadodara to anywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full group-hover:bg-amber-100 transition-colors">
                    <Globe className="w-6 h-6 text-orange-600 group-hover:text-amber-600" />
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
              Destination Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful destination weddings planned by our team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Destination Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Destination Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Destination Wedding Planning Process
            </h2>
            <p className="text-amber-300 max-w-2xl mx-auto">
              How our destination wedding planner brings your dream location to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-amber-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-amber-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-amber-300 text-sm">{step.description}</p>
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
              Destination Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who celebrated love in dream destinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 45}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-200"
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
              Destination Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=600&fit=crop"
          alt="Destination Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Destination Team
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a destination wedding planner from Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp for Destination
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Destination Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for a destination celebration? Let's plan your dream location wedding.
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
                <p className="font-bold">Based In</p>
                <p className="opacity-90">Vadodara, Gujarat</p>
              </div>
            </div>
            <a
              href="https://wa.me/916353583148?text=Hi, I need a destination wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Destination Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a destination wedding planner!"
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
