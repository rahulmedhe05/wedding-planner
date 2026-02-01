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
  Palette,
  Gem,
  Crown,
  Flower2,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Bridal Makeup Services Vadodara — Radiant Beauty for Your Big Day",
  heroSubtitle: "Complete bridal makeup services transforming you into a breathtaking bride with flawless skin, stunning eyes, and a glow that lasts all day.",
  
  mainContent: `
Your wedding day look will be remembered forever — in photographs, in videos, in the minds of everyone who sees you walk down the aisle. This is the day you deserve to look absolutely extraordinary.

This is why bridal makeup services in Vadodara go beyond ordinary beauty.

**What makes bridal makeup special:**

Bridal makeup services are an art form perfected for the most important day of your life. Every element — from base to blush, from eyes to lips — is designed to enhance your features while ensuring longevity and photogenic perfection.

Professional bridal makeup services include:
• Flawless HD foundation application
• Color-correcting and contouring
• Long-lasting eye makeup
• Perfect brow shaping
• Lip color that stays
• Strategic highlighting

**The complete bridal experience:**

Great bridal makeup services extend beyond the face. Hair styling, draping guidance, jewelry coordination — your bridal look is a complete package that requires expert attention to every detail.

Comprehensive bridal makeup services offer:
• Pre-wedding skincare guidance
• Hair styling and setting
• Dupatta/saree draping assistance
• Jewelry placement advice
• Touch-up kits provided
• Day-of support available

**Multi-event beauty planning:**

Indian weddings span multiple days, each requiring different looks. Bridal makeup services in Vadodara understand this — from fresh mehendi looks to glamorous sangeet vibes to traditional wedding beauty.

Through bridal makeup services:
• Engagement party glam
• Mehendi ceremony freshness
• Sangeet evening drama
• Wedding day perfection
• Reception sophistication
• Consistent beauty thread

**Finding your perfect look:**

Your bridal makeup services should understand your vision. Natural? Dramatic? Traditional? Contemporary? The right artist brings your dream look to life while enhancing your natural beauty.

Bridal makeup services in Vadodara — where every bride becomes the most beautiful version of herself.
  `,

  bridalElements: [
    {
      title: "Skin Preparation",
      description: "Bridal makeup services begin with perfect skin prep for flawless application."
    },
    {
      title: "HD Foundation",
      description: "Camera-ready base through bridal makeup services using premium HD products."
    },
    {
      title: "Eye Artistry",
      description: "Stunning eye looks created by bridal makeup services that enhance and captivate."
    },
    {
      title: "Hair Styling",
      description: "Elegant updos and styling included in complete bridal makeup services."
    },
    {
      title: "Draping Support",
      description: "Bridal makeup services assistance with dupatta and saree draping."
    },
    {
      title: "Touch-Up Care",
      description: "Touch-up kits and support from bridal makeup services throughout your day."
    }
  ],

  services: [
    {
      title: "Bridal Makeup Package",
      description: "Complete bridal makeup services for your wedding day — face, eyes, lips, and setting.",
      icon: "Crown"
    },
    {
      title: "Hair Styling",
      description: "Bridal makeup services including elegant hairdos matching your outfit and jewelry.",
      icon: "Sparkles"
    },
    {
      title: "Pre-Wedding Functions",
      description: "Bridal makeup services for engagement, mehendi, sangeet, and haldi ceremonies.",
      icon: "Flower2"
    },
    {
      title: "Family Makeup",
      description: "Bridal makeup services extended to mothers, sisters, and bridesmaids.",
      icon: "Users"
    },
    {
      title: "Trial Session",
      description: "Bridal makeup services trial to perfect your look before the big day.",
      icon: "Heart"
    },
    {
      title: "Airbrush Makeup",
      description: "Premium airbrush bridal makeup services for ultra-smooth, long-lasting finish.",
      icon: "Palette"
    }
  ],

  processSteps: [
    {
      title: "Consultation",
      description: "Bridal makeup services consultation to understand your vision and style preferences."
    },
    {
      title: "Trial Session",
      description: "Practice session with bridal makeup services to finalize your perfect look."
    },
    {
      title: "Event Planning",
      description: "Coordinating bridal makeup services schedule for all your wedding events."
    },
    {
      title: "Bridal Transformation",
      description: "Your bridal makeup services team transforms you into a stunning bride!"
    }
  ],

  testimonials: [
    {
      name: "Ruchi & Parth",
      event: "Traditional Wedding",
      text: "The bridal makeup services team understood exactly what I wanted! I looked radiant but still like myself. My makeup lasted through all the pheras and even the tears! Absolutely perfect experience!"
    },
    {
      name: "Tanvi & Jatin",
      event: "Destination Wedding",
      text: "I was worried about humidity affecting my look for our beach wedding. The bridal makeup services were incredible — my makeup stayed flawless for 14 hours! Every photo looks like a dream!"
    },
    {
      name: "Mira & Kunal",
      event: "Multi-Day Wedding",
      text: "Four days, four different looks — and each one was more beautiful than the last! The bridal makeup services coordination was seamless. I felt like a princess every single day!"
    }
  ],

  faqs: [
    {
      question: "What's included in bridal makeup services packages?",
      answer: "Comprehensive bridal makeup services typically include skin prep, HD/airbrush foundation, contouring, eye makeup, brow styling, lip color, setting spray, and often hair styling. We help you understand and compare different packages."
    },
    {
      question: "How far in advance should I book bridal makeup services?",
      answer: "We recommend booking bridal makeup services 3-6 months before your wedding, especially during peak wedding season. This allows time for consultations, trials, and any skincare improvements needed."
    },
    {
      question: "Is a trial session necessary for bridal makeup services?",
      answer: "Absolutely! Trial sessions are essential for bridal makeup services. They help finalize your look, test products on your skin for reactions, and build rapport with your artist. We always recommend trials."
    },
    {
      question: "Can bridal makeup services handle multiple events?",
      answer: "Yes! Professional bridal makeup services offer multi-event packages covering engagement, mehendi, sangeet, haldi, wedding, and reception with different looks for each function."
    },
    {
      question: "What about makeup for family members?",
      answer: "Most bridal makeup services offer family packages for mother of the bride, sisters, and bridesmaids. We can coordinate group bookings and ensure everyone looks their best."
    },
    {
      question: "How do I ensure my makeup lasts all day?",
      answer: "Professional bridal makeup services use long-wear products, setting techniques, and waterproof formulas. Touch-up kits are typically provided, and artists can be available for touch-ups during extended events."
    }
  ],

  ctaHeadline: "Become the Most Beautiful Bride",
  ctaSubtext: "Let bridal makeup services in Vadodara transform you into a radiant, stunning bride on your special day."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 2, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Stunning Bride" },
  { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Ready" },
  { id: 4, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop", title: "Bridal Glow" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Getting Ready" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Elegant Look" },
  { id: 7, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Beauty Details" },
  { id: 8, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Happy Bride" },
  { id: 9, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Moment" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Radiant Beauty" },
  { id: 11, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 12, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Perfect Day" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-makeup-artist-vadodara", title: "Makeup Artist" },
  { slug: "mehndi-artist-vadodara", title: "Mehndi Artist" },
  { slug: "wedding-photography-services-vadodara", title: "Photography" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Décor Planning" },
];

export const metadata: Metadata = {
  title: "Bridal Makeup Services Vadodara | HD & Airbrush Bridal Makeup",
  description: "Professional bridal makeup services in Vadodara. HD makeup, airbrush foundation, hair styling & complete bridal beauty for all wedding functions.",
  keywords: "bridal makeup services vadodara, bridal makeup vadodara, hd bridal makeup vadodara, airbrush bridal makeup vadodara, wedding makeup vadodara",
  openGraph: {
    title: "Bridal Makeup Services Vadodara | Radiant Bridal Beauty",
    description: "Complete bridal makeup services in Vadodara. Be your most beautiful self.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/bridal-makeup-services-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bridal Makeup Services Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Makeup Services Vadodara",
    description: "Professional bridal makeup creating stunning looks.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/bridal-makeup-services-vadodara/",
  },
};

export default function BridalMakeupServicesVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-fuchsia-700 via-pink-600 to-rose-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gem className="w-5 h-5 text-pink-300" />
                <span className="text-pink-200">Premium Bridal Beauty</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Palette className="w-5 h-5 text-pink-300" />
                  <span>HD Makeup</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Crown className="w-5 h-5 text-rose-300" />
                  <span>Bridal Specialists</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-fuchsia-700 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Bridal Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need bridal makeup services in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Book Bridal Makeup
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-6 h-6 text-fuchsia-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Bridal Makeup Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Bridal Makeup Services Vadodara • Radiant Beauty</p>
              <KeywordEnquiryForm 
                keyword="Bridal Makeup Services Vadodara" 
                source="keyword-page-bridal-makeup-services-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Crown className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">600+</p>
              <p className="text-gray-600 text-sm">Brides Beautified</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Bride Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">25+</p>
              <p className="text-gray-600 text-sm">Expert Artists</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Complete Bridal Beauty Transformation
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-fuchsia-600">$1</em>')
                      .replace(/•/g, '<span class="text-fuchsia-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-fuchsia-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Complete Bridal Makeup Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every element of beauty covered through bridal makeup services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.bridalElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-fuchsia-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-fuchsia-100 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-fuchsia-600" />
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
              Our Bridal Makeup Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive bridal makeup services for every wedding celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full group-hover:bg-fuchsia-600 transition-colors">
                    <Gem className="w-6 h-6 text-pink-600 group-hover:text-white" />
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
      <section className="py-16 md:py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <Images className="inline-block w-8 h-8 mr-2 text-fuchsia-600" />
              Bridal Beauty Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stunning transformations through our bridal makeup services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Bridal Makeup Services Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Bridal Makeup</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-fuchsia-700 via-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Bridal Makeup Journey
            </h2>
            <p className="text-pink-100 max-w-2xl mx-auto">
              How bridal makeup services create your perfect wedding look.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-fuchsia-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-300" />
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
              Happy Brides Share Their Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brides who experienced our bridal makeup services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-fuchsia-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 30}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-fuchsia-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-fuchsia-600">{testimonial.event}</p>
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
      <section className="py-16 md:py-20 bg-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Bridal Makeup Services FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-fuchsia-600 group-open:rotate-45 transition-transform">+</span>
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
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=600&fit=crop"
          alt="Bridal Makeup Services Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/90 to-pink-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-fuchsia-700 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Bridal Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need bridal makeup services in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Bridal Team
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
                className="px-4 py-2 bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-700 rounded-full transition-colors border border-fuchsia-200 hover:border-fuchsia-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-fuchsia-700 via-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Bridal Beauty Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to become the most beautiful bride? Let's create your dream bridal look!
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
              href="https://wa.me/916353583148?text=Hi, I need bridal makeup services!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Bridal Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need bridal makeup services!"
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
