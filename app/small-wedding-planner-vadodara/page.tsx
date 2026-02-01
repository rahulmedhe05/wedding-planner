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
  Gem,
  Flower2,
  Camera,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Small Wedding Planner Vadodara — Intimate Celebrations with Big Love",
  heroSubtitle: "Beautiful intimate weddings for 50-150 guests with personalized attention, meaningful moments, and celebrations that feel like home.",
  
  mainContent: `
Not every wedding needs a thousand guests. Sometimes the most beautiful celebrations happen when you're surrounded by the people who truly matter — the faces you recognize, the voices you love, the souls who've shaped your journey.

This is what a small wedding planner in Vadodara helps you create.

**The beauty of intimate weddings:**

Small weddings aren't about compromise — they're about choice. The choice to prioritize quality over quantity. To have real conversations, not crowd management. To see the emotions on faces, not just a sea of people.

A small wedding offers:
• Personal connection with every guest
• Higher quality in every element
• More meaningful ceremony moments
• Better food, better décor, better everything
• Reduced stress for the couple and families
• Actual memories with each loved one

**Why small wedding planning is different:**

Planning a small wedding isn't about scaling down a big wedding. It's about a completely different approach — one that emphasizes detail over spectacle.

Your small wedding planner in Vadodara focuses on:
• Personalized guest experiences
• Intimate venue selection
• Customized décor for smaller spaces
• Meaningful ceremony design
• Quality over quantity in every element
• Creating warmth and connection

**Intimate doesn't mean simple:**

A small wedding can be as elegant as any grand celebration. With fewer guests, your budget stretches further on quality. The venue becomes more personal. The food becomes extraordinary. The décor becomes intricate.

Small wedding planner expertise delivers:
• Boutique venue recommendations
• High-quality catering for discerning palates
• Exquisite décor that creates intimate ambiance
• Photography that captures every guest
• Personalized touches throughout

**Perfect for modern couples:**

More couples today choose intimate celebrations. Whether it's a pandemic mindset, eco-consciousness, budget wisdom, or simply preferring quality time — small weddings are trending for good reason.

Small wedding planner in Vadodara — where every guest matters, every moment counts, and love fills the room.
  `,

  smallWeddingBenefits: [
    {
      title: "Quality Time",
      description: "Small wedding planner creates celebrations where you actually spend time with guests."
    },
    {
      title: "Budget Stretches Further",
      description: "Better food, better décor, better everything — small wedding planner optimizes budgets."
    },
    {
      title: "Meaningful Moments",
      description: "Ceremonies with personal touches designed by your small wedding planner."
    },
    {
      title: "Less Stress",
      description: "Small wedding planner reduces overwhelm for couples and families alike."
    },
    {
      title: "Intimate Venues",
      description: "Beautiful boutique spaces sourced by small wedding planner that feel like home."
    },
    {
      title: "Personalized Attention",
      description: "Every detail receives focus — small wedding planner perfectionism at work."
    }
  ],

  services: [
    {
      title: "Intimate Wedding Planning",
      description: "Complete small wedding planner services for celebrations of 50-150 guests.",
      icon: "Heart"
    },
    {
      title: "Boutique Venue Sourcing",
      description: "Small wedding planner finds perfect intimate spaces that feel special.",
      icon: "Gem"
    },
    {
      title: "Personalized Décor",
      description: "Thoughtful designs created by small wedding planner for intimate ambiance.",
      icon: "Flower2"
    },
    {
      title: "Premium Catering",
      description: "Quality cuisine arranged by small wedding planner for discerning guests.",
      icon: "Sparkles"
    },
    {
      title: "Detailed Photography",
      description: "Small wedding planner ensures photographers capture every meaningful moment.",
      icon: "Camera"
    },
    {
      title: "Guest Experience",
      description: "Personal touches for each guest managed by your small wedding planner.",
      icon: "Users"
    }
  ],

  processSteps: [
    {
      title: "Vision Session",
      description: "Small wedding planner understands your intimate celebration dreams."
    },
    {
      title: "Perfect Venue",
      description: "Boutique spaces that match your guest count and style selected."
    },
    {
      title: "Detailed Design",
      description: "Small wedding planner crafts every personal detail with care."
    },
    {
      title: "Intimate Celebration",
      description: "Your perfect small wedding executed with warmth and joy!"
    }
  ],

  testimonials: [
    {
      name: "Kavita & Mihir",
      event: "75-Guest Garden Wedding",
      text: "We chose a small wedding planner in Vadodara because we wanted quality over quantity. The result was beyond beautiful! We actually talked to every guest, remembered every moment, and the food and décor were exceptional!"
    },
    {
      name: "Tanvi & Ankit",
      event: "50-Guest Intimate Celebration",
      text: "Our small wedding planner understood exactly what we wanted — no crowds, no chaos, just love and laughter. The intimate venue, the personalized touches — it felt like a warm hug from everyone we love!"
    },
    {
      name: "Reshma & Kunal",
      event: "100-Guest Boutique Wedding",
      text: "Best decision ever to go with a small wedding planner! With 100 guests, we could afford premium everything. The food was restaurant-quality, the décor was stunning, and we weren't exhausted meeting strangers!"
    }
  ],

  faqs: [
    {
      question: "What guest count qualifies as a small wedding?",
      answer: "Our small wedding planner services are ideal for celebrations with 50-150 guests. This range allows for intimate celebrations while still including extended family and close friends. We can work with even smaller groups of 20-50 for micro-weddings."
    },
    {
      question: "Are small weddings actually cheaper?",
      answer: "Often yes, but the real benefit is value. With fewer guests, your small wedding planner can allocate budget to quality — better food per plate, premium décor, quality entertainment. You spend less overall but get more per person."
    },
    {
      question: "Can we still have all traditional ceremonies with small weddings?",
      answer: "Absolutely! Small wedding planner services include all ceremonies — Mehndi, Sangeet, Wedding, Reception. Intimate settings often make rituals more meaningful as every guest can witness and participate properly."
    },
    {
      question: "What venues work best for small weddings?",
      answer: "Your small wedding planner recommends boutique hotels, heritage properties, farmhouses, private gardens, and smaller banquet halls. These spaces feel intimate rather than empty, creating warmth and connection."
    },
    {
      question: "How do you handle guests who expect large weddings?",
      answer: "Our small wedding planner helps you communicate your vision to families. We also design celebrations that feel complete and special — nobody feels the 'small' aspect, they feel the quality and intimacy."
    },
    {
      question: "Can small weddings be elegant and luxurious?",
      answer: "Absolutely! With fewer guests, small wedding planner can create extraordinary experiences — think gourmet multi-course meals, imported flowers, premium entertainment. Small doesn't mean simple — it means focused excellence."
    }
  ],

  ctaHeadline: "Celebrate Love, Not Numbers",
  ctaSubtext: "Let a small wedding planner in Vadodara create an intimate celebration where every guest matters and every moment is meaningful."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Intimate Ceremony" },
  { id: 2, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Beautiful Bride" },
  { id: 3, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Cozy Setup" },
  { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Details" },
  { id: 5, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Warm Moments" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Elegant Décor" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Guest Joy" },
  { id: 9, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Intimate Dining" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Quality Feast" },
  { id: 12, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Beautiful Venue" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "intimate-wedding-planner-vadodara", title: "Intimate Wedding" },
  { slug: "budget-wedding-planner-in-vadodara", title: "Budget Wedding" },
  { slug: "affordable-wedding-planner-vadodara", title: "Affordable Wedding" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Décor Planning" },
  { slug: "wedding-catering-services-vadodara", title: "Catering Services" },
];

export const metadata: Metadata = {
  title: "Small Wedding Planner Vadodara | Intimate Weddings | 50-150 Guests",
  description: "Expert small wedding planner in Vadodara. Beautiful intimate celebrations for 50-150 guests with personalized attention, quality focus & meaningful moments.",
  keywords: "small wedding planner vadodara, intimate wedding planner vadodara, micro wedding vadodara, boutique wedding planner, small celebration vadodara",
  openGraph: {
    title: "Small Wedding Planner Vadodara | Intimate Celebrations with Big Love",
    description: "Small wedding planner in Vadodara. Intimate celebrations where every guest matters.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/small-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Small Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Wedding Planner Vadodara",
    description: "Intimate wedding celebrations with personalized attention.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/small-wedding-planner-vadodara/",
  },
};

export default function SmallWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-rose-200" />
                <span className="text-rose-200">Intimate Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-rose-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 text-rose-200" />
                  <span>50-150 Guests</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Gem className="w-5 h-5 text-pink-200" />
                  <span>Quality Focus</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-bold hover:bg-rose-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Intimate Wedding Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a small wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Small Wedding
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-6 h-6 text-rose-500" />
                <h3 className="text-xl font-bold text-rose-600">
                  Small Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Small wedding planner Vadodara • Intimate celebrations</p>
              <KeywordEnquiryForm 
                keyword="Small Wedding Planner Vadodara" 
                source="keyword-page-small-wedding-planner-vadodara"
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
              <Heart className="w-10 h-10 text-rose-500 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-gray-600 text-sm">Intimate Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Personal Touch</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">10+</p>
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
              Beautiful Intimate Wedding Planning
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
                      .replace(/•/g, '<span class="text-rose-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small Wedding Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Benefits of Small Weddings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every advantage crafted by your small wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.smallWeddingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-rose-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Heart className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              Small Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for intimate celebrations in Vadodara.
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
                    <Heart className="w-6 h-6 text-pink-600 group-hover:text-white" />
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
              Small Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Intimate celebrations created by our small wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Small Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Intimate Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Small Wedding Planning Journey
            </h2>
            <p className="text-rose-100 max-w-2xl mx-auto">
              How your small wedding planner creates intimate celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-rose-500 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-rose-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-rose-100 text-sm">{step.description}</p>
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
              Small Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who chose intimate celebrations with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 50}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-rose-300"
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
              Small Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop"
          alt="Small Wedding Planner Vadodara CTA"
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
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-rose-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Intimate Wedding Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a small wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Small Wedding Team
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
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-full transition-colors border border-rose-200 hover:border-rose-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Small Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your intimate celebration? Let's create something beautiful together!
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
              href="https://wa.me/916353583148?text=Hi, I need a small wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Small Wedding Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a small wedding planner!"
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
