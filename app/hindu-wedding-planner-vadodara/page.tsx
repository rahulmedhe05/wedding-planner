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
  Flame,
  Sun,
  BookOpen,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Hindu Wedding Planner Vadodara — Sacred Ceremonies, Beautiful Celebrations",
  heroSubtitle: "Where ancient vedic traditions meet modern elegance. Your Hindu wedding planner honors every ritual while creating unforgettable experiences.",
  
  mainContent: `
A Hindu wedding is not merely an event — it's a sacred journey. Seven steps around the fire. Promises that bind souls across lifetimes. Blessings that invoke divine grace. These rituals carry the weight of millennia.

This is why you need a Hindu wedding planner in Vadodara who truly understands.

**The depth of Hindu wedding traditions:**

Hindu weddings are among the world's most beautiful and complex ceremonies. From the Ganesh Puja that opens festivities to the Vidaai that brings tears, each ritual carries profound meaning.

Your Hindu wedding planner in Vadodara must understand:
• Pre-wedding ceremonies: Roka, Tilak, Sagai, Sangeet, Mehendi, Haldi
• The wedding day: Baraat, Milni, Varmala, Kanyadaan, Saptapadi, Sindoor
• Post-wedding rituals: Vidaai, Griha Pravesh, Reception
• Regional variations: Gujarati, North Indian, South Indian styles
• Astrological considerations: Muhurat timing, auspicious days

**Why specialized Hindu wedding planning matters:**

A generic wedding planner might organize vendors efficiently but miss the soul of Hindu ceremonies. When the pandit begins mantras, when the sacred fire is lit, when seven pheras commence — these moments need someone who understands their weight.

Your Hindu wedding planner in Vadodara ensures:
• Correct ritual sequence and timing
• Proper ceremonial setup for each function
• Coordination with pandits and priests
• Traditional aesthetic appropriate to each event
• Modern comforts that don't compromise tradition

**Honoring regional traditions:**

Hindu weddings vary beautifully across regions. A Gujarati Hindu wedding includes garba and the sweet tradition of mameru. A Punjabi Hindu wedding features the vibrant jaggo ceremony. South Indian Hindu weddings have the elegant muhurtham.

Your Hindu wedding planner in Vadodara understands these nuances, ensuring your specific customs are honored perfectly.

**Modern Hindu weddings:**

Today's couples want tradition without tedium. They want meaning without marathon ceremonies. A skilled Hindu wedding planner creates celebrations that honor essential rituals while respecting modern sensibilities.

We help you choose which traditions matter most, design comfortable experiences for guests, and create timelines that flow beautifully.

Hindu wedding planner in Vadodara — where dharma meets design, where tradition meets today.
  `,

  hinduRituals: [
    {
      title: "Engagement Ceremonies",
      description: "Hindu wedding planner expertise in Roka, Tilak, and Sagai with proper protocols and setups."
    },
    {
      title: "Mehendi & Sangeet",
      description: "Colorful pre-wedding functions planned by your Hindu wedding planner with traditional flair."
    },
    {
      title: "Haldi Ceremony",
      description: "The turmeric blessing arranged beautifully — Hindu wedding planner attention to auspicious details."
    },
    {
      title: "Baraat & Milni",
      description: "Grand groom's procession and family meetings orchestrated by your Hindu wedding planner."
    },
    {
      title: "Wedding Ceremony",
      description: "Kanyadaan, Saptapadi, Sindoor — sacred rituals honored by expert Hindu wedding planner coordination."
    },
    {
      title: "Reception & Griha Pravesh",
      description: "Post-wedding celebrations planned with Hindu wedding planner professionalism."
    }
  ],

  services: [
    {
      title: "Complete Hindu Wedding Planning",
      description: "From engagement to reception — comprehensive Hindu wedding planner services for all ceremonies.",
      icon: "Sun"
    },
    {
      title: "Ritual Coordination",
      description: "Your Hindu wedding planner ensures proper ceremony flow with pandit coordination.",
      icon: "Flame"
    },
    {
      title: "Traditional Decor Design",
      description: "Mandaps, torans, flower decorations in Hindu wedding planner traditional aesthetics.",
      icon: "Sparkles"
    },
    {
      title: "Muhurat Scheduling",
      description: "Hindu wedding planner scheduling respects astrological considerations and auspicious timings.",
      icon: "BookOpen"
    },
    {
      title: "Vendor Management",
      description: "Hindu wedding planner network includes specialists in traditional services and cuisine.",
      icon: "Users"
    },
    {
      title: "Family Guidance",
      description: "Your Hindu wedding planner helps families navigate traditions with grace.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Tradition Discovery",
      description: "Your Hindu wedding planner understands your family's specific customs and preferences."
    },
    {
      title: "Ritual Planning",
      description: "We map all ceremonies with proper sequence, timing, and requirements."
    },
    {
      title: "Vendor Coordination",
      description: "Hindu wedding planner assembles specialists who understand traditional needs."
    },
    {
      title: "Sacred Execution",
      description: "Every ritual honored, every tradition respected, every moment cherished."
    }
  ],

  testimonials: [
    {
      name: "Pooja & Rahul Sharma",
      event: "Traditional North Indian Wedding",
      text: "Finding a Hindu wedding planner in Vadodara who understood our customs perfectly was a blessing. Every ritual — from haldi to pheras — was organized beautifully. Our families were so impressed by the traditional correctness!"
    },
    {
      name: "Dipti & Kartik Patel",
      event: "Gujarati Hindu Wedding",
      text: "Our Gujarati Hindu wedding needed someone who understood our specific traditions. The Hindu wedding planner coordinated beautifully — mameru, garba, the wedding day flow. Everything felt authentically ours!"
    },
    {
      name: "Sneha & Aditya",
      event: "Modern Hindu Celebration",
      text: "We wanted traditional ceremonies without 6-hour events. Our Hindu wedding planner helped us choose meaningful rituals and create a wedding that honored tradition while keeping modern comfort. Perfect balance!"
    }
  ],

  faqs: [
    {
      question: "What makes a Hindu wedding planner different from a regular planner?",
      answer: "A Hindu wedding planner in Vadodara specializes in understanding the complexity of Hindu ceremonies — the sequence of rituals, coordination with pandits, proper mandap setups, muhurat scheduling, and regional variations. This specialized knowledge ensures your sacred ceremonies are honored correctly."
    },
    {
      question: "Can a Hindu wedding planner help with different regional traditions?",
      answer: "Absolutely! A good Hindu wedding planner understands variations across communities — Gujarati, Marwari, Punjabi, Bengali, South Indian, and more. We customize planning to honor your specific family traditions and regional customs."
    },
    {
      question: "How does muhurat timing affect Hindu wedding planning?",
      answer: "Muhurat — auspicious timing determined by astrology — is central to Hindu weddings. Your Hindu wedding planner schedules ceremonies around these sacred windows, ensuring the pheras and other key rituals occur at designated times while building realistic event flow."
    },
    {
      question: "What about modern couples who want shorter ceremonies?",
      answer: "Your Hindu wedding planner can help identify essential rituals vs. optional traditions, creating meaningful yet efficient ceremonies. We ensure nothing sacred is compromised while respecting modern time sensibilities. Many couples choose curated ceremonies of 2-3 hours."
    },
    {
      question: "How does a Hindu wedding planner coordinate with the pandit?",
      answer: "We work closely with your family pandit or help source one. The Hindu wedding planner provides detailed timelines, ensures proper ceremony setups, coordinates samagri (ritual items), and facilitates communication to ensure smooth ritual flow."
    },
    {
      question: "Can you plan multi-day Hindu wedding celebrations?",
      answer: "Yes! Traditional Hindu weddings often span 2-5 days. Your Hindu wedding planner creates comprehensive schedules for all functions — from initial puja ceremonies through engagement, sangeet, mehendi, haldi, wedding, and reception — ensuring each event flows smoothly."
    }
  ],

  ctaHeadline: "Honor Your Sacred Journey",
  ctaSubtext: "Let a Hindu wedding planner in Vadodara create celebrations that respect every tradition while crafting unforgettable memories."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Sacred Mandap" },
  { id: 2, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Hindu Rituals" },
  { id: 3, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 4, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Ceremony" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Traditional Details" },
  { id: 6, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Mandap" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Sacred Love" },
  { id: 8, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Setup" },
  { id: 9, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Vedic Ceremony" },
  { id: 10, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Wedding Joy" },
  { id: 11, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 12, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Festive Feast" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "gujarati-wedding-planner-vadodara", title: "Gujarati Wedding" },
  { slug: "traditional-wedding-planner-vadodara", title: "Traditional Wedding" },
  { slug: "religious-wedding-planner-vadodara", title: "Religious Wedding" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
];

export const metadata: Metadata = {
  title: "Hindu Wedding Planner Vadodara | Traditional Ceremonies | Vedic Weddings",
  description: "Expert Hindu wedding planner in Vadodara. Traditional ceremonies, mandap design, ritual coordination & vedic wedding services. Honor every sacred tradition.",
  keywords: "hindu wedding planner vadodara, hindu wedding vadodara, vedic wedding planner vadodara, traditional hindu wedding vadodara, indian wedding planner vadodara",
  openGraph: {
    title: "Hindu Wedding Planner Vadodara | Sacred Ceremonies, Beautiful Celebrations",
    description: "Hindu wedding planner in Vadodara. Where vedic traditions meet modern elegance.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/hindu-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hindu Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindu Wedding Planner Vadodara",
    description: "Traditional Hindu weddings with sacred ceremonies honored perfectly.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/hindu-wedding-planner-vadodara/",
  },
};

export default function HinduWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-yellow-300" />
                <span className="text-yellow-200">Hindu Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-orange-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Flame className="w-5 h-5 text-orange-300" />
                  <span>Sacred Traditions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <BookOpen className="w-5 h-5 text-yellow-200" />
                  <span>Vedic Expertise</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-orange-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Traditional Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a Hindu wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Hindu Wedding
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-orange-600">
                  Hindu Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Hindu wedding planner Vadodara • Traditional services</p>
              <KeywordEnquiryForm 
                keyword="Hindu Wedding Planner Vadodara" 
                source="keyword-page-hindu-wedding-planner-vadodara"
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
              <Flame className="w-10 h-10 text-orange-500 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Hindu Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-red-500 mb-2" />
              <p className="font-bold text-2xl">All</p>
              <p className="text-gray-600 text-sm">Regional Traditions</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-rose-600 mb-2" />
              <p className="font-bold text-2xl">Vedic</p>
              <p className="text-gray-600 text-sm">Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Sacred Hindu Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-600">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-red-600">$1</em>')
                      .replace(/•/g, '<span class="text-orange-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hindu Rituals Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Hindu Wedding Ceremonies We Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every sacred ritual honored by your Hindu wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.hinduRituals.map((ritual, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Flame className="w-5 h-5 text-orange-500" />
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
              Hindu Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for traditional Hindu celebrations in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-red-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full group-hover:bg-orange-500 transition-colors">
                    <Sun className="w-6 h-6 text-red-600 group-hover:text-white" />
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
              Hindu Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sacred ceremonies beautifully executed by our Hindu wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Hindu Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Hindu Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hindu Wedding Planning Journey
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              How your Hindu wedding planner creates sacred, beautiful celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-orange-900 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-orange-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-orange-100 text-sm">{step.description}</p>
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
              Hindu Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Families who celebrated sacred unions with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 25}`}
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
              Hindu Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=600&fit=crop"
          alt="Hindu Wedding Planner Vadodara CTA"
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
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-orange-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Traditional Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a Hindu wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Hindu Wedding Team
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Hindu Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your traditional Hindu celebration? Let's begin your sacred journey.
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
              href="https://wa.me/916353583148?text=Hi, I need a Hindu wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Hindu Wedding Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a Hindu wedding planner!"
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
