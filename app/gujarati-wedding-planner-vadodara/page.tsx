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
  Sun,
  Gem,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Gujarati Wedding Planner Vadodara — Celebrating Gujju Traditions",
  heroSubtitle: "Authentic Gujarati wedding celebrations with colorful garba nights, joyful pithi ceremonies, and traditional rituals that make your wedding truly special.",
  
  mainContent: `
A Gujarati wedding is a festival of colors, music, and pure joy! From the vibrant Mehndi to the energetic Garba, from the sacred Grah Shanti to the emotional Vidaai — every ceremony overflows with life and laughter.

This is why you need a Gujarati wedding planner in Vadodara who lives these traditions.

**Born from Gujarati soil:**

We are Vadodara's own. We grew up dancing Garba at Navratri. We know the difference between Patidars, Lohanas, and Banias' wedding customs. We understand regional variations from Saurashtra to Kutch to South Gujarat.

Your Gujarati wedding planner in Vadodara brings:
• Deep understanding of community traditions
• Knowledge of regional wedding variations
• Expertise in authentic ceremony execution
• Connections with traditional priests and vendors
• Understanding of family dynamics and expectations

**The beauty of Gujarati ceremonies:**

Gujarati weddings aren't just events — they're experiences. The pithi ceremony where turmeric paste is lovingly applied. The Garba night where families dance until dawn. The Mandap Muhurat with sacred mantras.

A Gujarati wedding planner ensures:
• Grah Shanti Puja arrangements
• Pithi/Haldi ceremony coordination
• Mehndi function planning
• Sangeet and Garba night organization
• Mandap ceremony perfection
• Saptapadi and Vidaai management

**Colorful, joyful celebrations:**

Gujarati weddings are famous for their colors — bright bandhani fabrics, marigold garlands, colorful dupattas. The visual spectacle matches the emotional warmth.

Your Gujarati wedding planner in Vadodara creates:
• Authentic decor using traditional elements
• Vibrant color palettes true to Gujarati aesthetics
• Proper bandhani and mirror work styling
• Traditional yet contemporary setups

**Food that feeds the soul:**

Gujarati cuisine at weddings is legendary. The perfect undhiyu, the right sweetness in shrikhand, the authentic fafda-jalebi at morning functions — these details matter!

Gujarati wedding planner in Vadodara — where tradition dances, colors celebrate, and love wins!
  `,

  gujaratiRituals: [
    {
      title: "Grah Shanti Puja",
      description: "Planetary blessings ceremony arranged beautifully by your Gujarati wedding planner."
    },
    {
      title: "Pithi Ceremony",
      description: "Turmeric application ritual coordinated by Gujarati wedding planner with family warmth."
    },
    {
      title: "Garba & Sangeet",
      description: "Energetic dance celebrations planned by Gujarati wedding planner with authentic music."
    },
    {
      title: "Mandap Muhurat",
      description: "Sacred wedding ceremony executed perfectly by your Gujarati wedding planner."
    },
    {
      title: "Saptapadi",
      description: "Seven sacred vows arranged with proper rituals by Gujarati wedding planner."
    },
    {
      title: "Vidaai Ceremony",
      description: "Emotional farewell managed with sensitivity by your Gujarati wedding planner."
    }
  ],

  services: [
    {
      title: "Complete Gujarati Wedding",
      description: "End-to-end Gujarati wedding planner services from engagement to reception.",
      icon: "Flower2"
    },
    {
      title: "Garba Night Spectacular",
      description: "Gujarati wedding planner creates unforgettable Garba celebrations with authentic music.",
      icon: "Sun"
    },
    {
      title: "Traditional Ceremony Execution",
      description: "Proper ritual coordination by Gujarati wedding planner with experienced priests.",
      icon: "Gem"
    },
    {
      title: "Gujarati Catering Excellence",
      description: "Authentic cuisine arranged by Gujarati wedding planner from trusted caterers.",
      icon: "Sparkles"
    },
    {
      title: "Vibrant Decor Design",
      description: "Colorful, traditional aesthetics created by Gujarati wedding planner expertise.",
      icon: "Heart"
    },
    {
      title: "Family Coordination",
      description: "Gujarati wedding planner manages both families with cultural understanding.",
      icon: "Users"
    }
  ],

  processSteps: [
    {
      title: "Community Understanding",
      description: "Gujarati wedding planner learns your specific community customs and preferences."
    },
    {
      title: "Celebration Design",
      description: "Traditional yet unique celebrations designed respecting your traditions."
    },
    {
      title: "Vendor Coordination",
      description: "Gujarati wedding planner brings together trusted traditional vendors."
    },
    {
      title: "Joyful Execution",
      description: "Your colorful, vibrant Gujarati wedding celebrated perfectly!"
    }
  ],

  testimonials: [
    {
      name: "Priya & Harsh Patel",
      event: "Traditional Patidar Wedding",
      text: "Finding a Gujarati wedding planner in Vadodara who truly understood our Patidar traditions was amazing! The Garba night was spectacular, the ceremonies were perfect, and our families were so happy with every detail!"
    },
    {
      name: "Foram & Dhruv Shah",
      event: "Vibrant Gujarati Celebration",
      text: "Our Gujarati wedding planner made our dreams come true! The colors, the energy, the authentic food — everything was exactly what we wanted. The Pithi ceremony made everyone emotional, and the Garba went till 4 AM!"
    },
    {
      name: "Hetal & Ravi Desai",
      event: "Grand Lohana Wedding",
      text: "The Gujarati wedding planner understood our Lohana customs perfectly. From the Grah Shanti to the Vidaai, every ceremony was conducted properly. Our wedding was a true celebration of our heritage!"
    }
  ],

  faqs: [
    {
      question: "Do you understand different Gujarati community traditions?",
      answer: "Absolutely! Our Gujarati wedding planner in Vadodara has extensive experience with various communities — Patidar, Lohana, Bania, Brahmin, Kshatriya, Rajput, and more. We understand regional variations from Saurashtra, Kutch, North Gujarat, and South Gujarat."
    },
    {
      question: "Can you plan an authentic Garba night?",
      answer: "Yes! Our Gujarati wedding planner creates spectacular Garba celebrations with authentic live folk musicians, traditional dhol players, proper dandiya arrangements, and energetic atmospheres that keep guests dancing till dawn!"
    },
    {
      question: "What about authentic Gujarati catering?",
      answer: "Food is crucial at Gujarati weddings! Your Gujarati wedding planner works with trusted caterers who prepare authentic cuisine — from perfect dal-dhokli and undhiyu to traditional sweets like mohanthal and ghughra."
    },
    {
      question: "How do you handle traditional ceremony requirements?",
      answer: "Our Gujarati wedding planner coordinates with experienced priests who know authentic mantras and rituals. We ensure proper setup for Grah Shanti, Mandap, and all ceremonies with required samagri and arrangements."
    },
    {
      question: "Can you create traditional yet modern celebrations?",
      answer: "Yes! Many couples want traditional customs with contemporary styling. Your Gujarati wedding planner blends authentic rituals with modern aesthetics — honoring heritage while creating Instagram-worthy moments!"
    },
    {
      question: "What makes your Gujarati wedding planning different?",
      answer: "We're Vadodara natives who grew up with these traditions. Our Gujarati wedding planner doesn't just know customs academically — we've lived them, celebrated them, and understand the emotional significance of each ritual."
    }
  ],

  ctaHeadline: "Celebrate Your Gujarati Heritage",
  ctaSubtext: "Let a Gujarati wedding planner in Vadodara create colorful, joyful celebrations that honor your traditions beautifully."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Mandap Ceremony" },
  { id: 2, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Gujarati Bride" },
  { id: 3, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Garba Night" },
  { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Vibrant Florals" },
  { id: 5, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Colorful Celebration" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Traditional Decor" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Family Joy" },
  { id: 9, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Dance Celebration" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Wedding Feast" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Pithi Ceremony" },
  { id: 12, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Beautiful Venue" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "hindu-wedding-planner-vadodara", title: "Hindu Wedding" },
  { slug: "traditional-wedding-planner-vadodara", title: "Traditional Wedding" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
  { slug: "wedding-catering-services-vadodara", title: "Catering Services" },
];

export const metadata: Metadata = {
  title: "Gujarati Wedding Planner Vadodara | Traditional Gujarati Weddings | Garba",
  description: "Expert Gujarati wedding planner in Vadodara. Authentic Gujarati traditions, colorful Garba nights, Pithi ceremonies & joyful celebrations honoring your heritage.",
  keywords: "gujarati wedding planner vadodara, gujju wedding vadodara, garba night wedding vadodara, patidar wedding planner vadodara, gujarati shaadi vadodara",
  openGraph: {
    title: "Gujarati Wedding Planner Vadodara | Colorful Traditional Celebrations",
    description: "Gujarati wedding planner in Vadodara. Authentic traditions with joyful celebrations.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/gujarati-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gujarati Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujarati Wedding Planner Vadodara",
    description: "Authentic Gujarati wedding celebrations with colorful traditions.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/gujarati-wedding-planner-vadodara/",
  },
};

export default function GujaratiWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-yellow-200" />
                <span className="text-yellow-200">Gujarati Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Sun className="w-5 h-5 text-yellow-200" />
                  <span>Garba Experts</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Flower2 className="w-5 h-5 text-orange-200" />
                  <span>All Communities</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Wedding Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a Gujarati wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Gujarati Wedding
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sun className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-orange-600">
                  Gujarati Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Gujarati wedding planner Vadodara • Traditional celebrations</p>
              <KeywordEnquiryForm 
                keyword="Gujarati Wedding Planner Vadodara" 
                source="keyword-page-gujarati-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Sun className="w-10 h-10 text-orange-500 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Gujarati Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">All</p>
              <p className="text-gray-600 text-sm">Communities</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-red-500 mb-2" />
              <p className="font-bold text-2xl">12+</p>
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
              Authentic Gujarati Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-600">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-amber-600">$1</em>')
                      .replace(/•/g, '<span class="text-orange-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gujarati Rituals Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Gujarati Wedding Ceremonies We Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every colorful tradition honored by your Gujarati wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.gujaratiRituals.map((ritual, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Sun className="w-5 h-5 text-orange-500" />
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
              Gujarati Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for colorful Gujarati celebrations in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-amber-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-orange-500 transition-colors">
                    <Sun className="w-6 h-6 text-amber-600 group-hover:text-white" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-orange-500" />
              Gujarati Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Colorful celebrations created by our Gujarati wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Gujarati Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Gujarati Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gujarati Wedding Planning Journey
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              How your Gujarati wedding planner creates colorful celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-orange-500 text-2xl font-bold mx-auto mb-4">
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
              Gujarati Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Families who celebrated colorful traditions with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 40}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-orange-600">{testimonial.event}</p>
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
              Gujarati Wedding Planner FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-orange-500 group-open:rotate-45 transition-transform">+</span>
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
          alt="Gujarati Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Gujarati Wedding Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a Gujarati wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Gujarati Wedding Team
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
                className="px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-full transition-colors border border-orange-200 hover:border-orange-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Gujarati Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your colorful celebration? Let's begin your journey together!
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
              href="https://wa.me/916353583148?text=Hi, I need a Gujarati wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Gujarati Wedding Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a Gujarati wedding planner!"
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
