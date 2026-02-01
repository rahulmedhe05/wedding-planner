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
  TrendingUp,
  Medal,
  Crown,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Top Wedding Planners in Vadodara — The Names Everyone Trusts",
  heroSubtitle: "When families across Gujarat ask for recommendations, certain names come up again and again. Here's why we're among the top wedding planners in Vadodara.",
  
  mainContent: `
How do you become one of the top wedding planners in Vadodara? It's not overnight. It's not through marketing. It's through years of creating celebrations so beautiful that families can't help but recommend you.

**The journey to becoming top wedding planners in Vadodara:**

Every wedding teaches you something. After 500+ weddings in 15 years, we've learned more than any textbook could teach. We've learned that the best decoration means nothing if the bride is stressed. That perfect timing matters more than perfect venues. That small gestures — a favorite flower, a childhood song — create memories that last forever.

The top wedding planners in Vadodara didn't just plan weddings. We absorbed every lesson. Every challenge made us stronger. Every happy couple made us more passionate.

**What sets the top wedding planners in Vadodara apart?**

Anyone can book vendors. The top wedding planners in Vadodara do something deeper — we become invested in your happiness. We lose sleep over your seating chart. We obsess over lighting angles. We personally taste the food to make sure it's perfect.

Being among the top wedding planners in Vadodara means our reputation is on the line with every celebration. And we protect that reputation fiercely by delivering excellence every single time.

**Recognition and recommendations:**

We don't buy awards. We earn them. Featured in wedding publications, recommended by top venues, and most importantly — referred by couple after couple. When someone's daughter gets engaged, the first call often goes to whoever planned their best friend's wedding. That's how you become one of the top wedding planners in Vadodara.

**The top wedding planners difference:**

Other planners see your wedding as an event. The top wedding planners in Vadodara see it as your family's most important celebration. Every decision we make comes from that understanding.

We've been trusted with royal family celebrations and intimate court marriages. Tech billionaire weddings and teacher couples with humble budgets. The top wedding planners in Vadodara treat every celebration with the same dedication because love doesn't have a price tag.

**Our promise as top wedding planners in Vadodara:**

We didn't become top wedding planners by being ordinary. We won't start now. Your wedding will receive our complete attention, creativity, and care. That's not a marketing promise — it's our reputation on the line.
  `,

  whyWereTop: [
    {
      title: "500+ Successful Celebrations",
      description: "Numbers don't lie. Top wedding planners in Vadodara have a track record you can verify."
    },
    {
      title: "Highest Google Rating",
      description: "4.9 stars from 200+ reviews. The top wedding planners in Vadodara are rated by real couples."
    },
    {
      title: "Venue Partnerships",
      description: "Top venues choose to partner with us. Being one of the top wedding planners in Vadodara opens doors."
    },
    {
      title: "Industry Recognition",
      description: "Featured in publications, invited to speak at events. Top wedding planners get noticed."
    },
    {
      title: "Repeat & Referral Clients",
      description: "70% of our business comes from referrals. That's what being top wedding planners in Vadodara means."
    },
    {
      title: "Elite Vendor Network",
      description: "The best photographers, decorators, caterers all want to work with top wedding planners in Vadodara."
    }
  ],

  services: [
    {
      title: "Signature Full Planning",
      description: "The complete top wedding planners experience — every detail curated, every moment perfected.",
      icon: "Crown"
    },
    {
      title: "Luxury Celebrations",
      description: "When you want the very best, top wedding planners in Vadodara deliver extraordinary experiences.",
      icon: "Sparkles"
    },
    {
      title: "Multi-Day Wedding Events",
      description: "Mehendi, sangeet, wedding, reception — top wedding planners seamlessly manage extended celebrations.",
      icon: "Star"
    },
    {
      title: "Destination Excellence",
      description: "Take the expertise of top wedding planners in Vadodara to destinations across India.",
      icon: "MapPin"
    },
    {
      title: "Celebrity & VIP Weddings",
      description: "Discreet, sophisticated, exceptional. Top wedding planners handle high-profile celebrations.",
      icon: "Award"
    },
    {
      title: "Royal Theme Weddings",
      description: "Grand palace-style celebrations designed by top wedding planners in Vadodara.",
      icon: "Medal"
    }
  ],

  processSteps: [
    {
      title: "Personal Introduction",
      description: "Meet the team that makes us one of the top wedding planners in Vadodara. Feel the difference immediately."
    },
    {
      title: "Vision Crafting",
      description: "Top wedding planners in Vadodara help you articulate dreams you didn't know you had."
    },
    {
      title: "Elite Execution",
      description: "Best-in-class vendors, premium coordination. Top wedding planner standards throughout."
    },
    {
      title: "Unforgettable Delivery",
      description: "A celebration worthy of the top wedding planners in Vadodara reputation — yours forever."
    }
  ],

  testimonials: [
    {
      name: "Priya & Aakash",
      event: "Grand Celebration, 800 Guests",
      text: "We interviewed several planners but immediately knew these were the top wedding planners in Vadodara. The attention to detail, the vendor relationships, the seamless execution — everything was premium."
    },
    {
      name: "Ananya & Karan",
      event: "Destination Wedding, Jaipur",
      text: "Even for our destination wedding, we insisted on having top wedding planners from Vadodara. They flew in, coordinated everything perfectly, and gave us a fairytale celebration."
    },
    {
      name: "Mira & Dev",
      event: "Intimate Luxury Wedding",
      text: "Small guest list but we wanted perfection. Only the top wedding planners in Vadodara could deliver the quality we envisioned. Every detail was exquisite."
    }
  ],

  faqs: [
    {
      question: "What makes you one of the top wedding planners in Vadodara?",
      answer: "15+ years experience, 500+ weddings, 4.9★ rating, venue partnerships, industry recognition, and most importantly — the trust of hundreds of families who recommend us to others."
    },
    {
      question: "Are the top wedding planners in Vadodara more expensive?",
      answer: "Our pricing reflects the value we deliver. But top wedding planners in Vadodara often save clients money through vendor negotiations and avoiding costly mistakes. Packages from ₹2.5 lakhs to ₹25+ lakhs."
    },
    {
      question: "How far ahead should we book top wedding planners?",
      answer: "Top wedding planners in Vadodara book up quickly, especially for peak season. We recommend 10-12 months advance for guaranteed availability, though we sometimes accommodate shorter timelines."
    },
    {
      question: "Can top wedding planners handle destination weddings from Vadodara?",
      answer: "Absolutely! Being among the top wedding planners in Vadodara, we've executed destination weddings in Udaipur, Jaipur, Goa, Kerala, and even Thailand. Our systems travel with us."
    },
    {
      question: "What if we have a smaller budget?",
      answer: "Top wedding planners in Vadodara believe excellence isn't only for the wealthy. We have packages for various budgets and always deliver top-tier service regardless of scale."
    },
    {
      question: "How do we verify your top wedding planner credentials?",
      answer: "Check our Google reviews (200+), ask for references, visit our portfolio, or speak with venues like Sayaji or Grand Bhagwati — they'll confirm why we're among the top wedding planners in Vadodara."
    }
  ],

  ctaHeadline: "Experience the Top Wedding Planners in Vadodara",
  ctaSubtext: "Your wedding deserves more than good enough. Trust the top wedding planners in Vadodara to create something extraordinary."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Top-Tier Magic" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Excellence" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Premium Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Elite Styling" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Luxury Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Stunning Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Vision" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Perfect Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Artistry" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Joyful Moments" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Gourmet Excellence" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Cultural Beauty" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "best-wedding-planner-in-vadodara", title: "Best Wedding Planner" },
  { slug: "wedding-planners-in-vadodara", title: "Wedding Planners" },
  { slug: "luxury-wedding-planner", title: "Luxury Wedding Planner" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Planner" },
  { slug: "wedding-event-management-company-in-vadodara", title: "Event Management" },
  { slug: "destination-wedding-planner", title: "Destination Wedding Planner" },
];

export const metadata: Metadata = {
  title: "Top Wedding Planners in Vadodara | #1 Rated | 15+ Years Excellence",
  description: "Discover the top wedding planners in Vadodara with 500+ celebrations, 4.9★ rating & elite vendor network. Top wedding planners trusted by families across Gujarat.",
  keywords: "top wedding planners in vadodara, top wedding planners vadodara, best rated wedding planners vadodara, leading wedding planners vadodara",
  openGraph: {
    title: "Top Wedding Planners in Vadodara | Elite Wedding Services",
    description: "Trust the top wedding planners in Vadodara for your celebration. 15+ years, 500+ weddings, and a reputation built on excellence.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/top-wedding-planners-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Top Wedding Planners in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Wedding Planners in Vadodara",
    description: "The top wedding planners in Vadodara trusted by hundreds of families.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/top-wedding-planners-in-vadodara/",
  },
};

export default function TopWeddingPlannersInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span className="text-purple-200">Top-Rated Wedding Planners</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-purple-200 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Medal className="w-5 h-5 text-yellow-400" />
                  <span>Top Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Weddings</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-800 px-6 py-3 rounded-full font-bold hover:bg-purple-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Top Planners
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm looking for top wedding planners in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Medal className="w-6 h-6 text-purple-700" />
                <h3 className="text-xl font-bold text-purple-800">
                  Connect with Top Planners
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Top wedding planners in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Top Wedding Planners in Vadodara" 
                source="keyword-page-top-wedding-planners-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">#1</p>
              <p className="text-gray-600 text-sm">Top Rated</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">200+ Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Planned</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years at Top</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              How We Became Top Wedding Planners in Vadodara
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Top Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why We're Among Top Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Credentials that make us one of the top wedding planners in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.whyWereTop.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-purple-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Services from Top Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium services that define top wedding planners in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-indigo-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-purple-100 transition-colors">
                    <Crown className="w-6 h-6 text-indigo-600 group-hover:text-purple-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-purple-600" />
              Portfolio by Top Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every image shows why we're recognized as top wedding planners in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Top Wedding Planners in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Top Quality</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Top Wedding Planners Experience
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              How the top wedding planners in Vadodara bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-800 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-purple-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-purple-300 text-sm">{step.description}</p>
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
              What Couples Say About Top Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reviews from couples who chose the top wedding planners in Vadodara.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 60}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-purple-600">{testimonial.event}</p>
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
              Top Wedding Planners in Vadodara — FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-purple-600 group-open:rotate-45 transition-transform">+</span>
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
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=600&fit=crop"
          alt="Top Wedding Planners in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-800 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Top Planners
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want to work with top wedding planners in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Top Planners
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            More Wedding Planner Services in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full transition-colors border border-purple-200 hover:border-purple-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Top Wedding Planners in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to work with the top wedding planners in Vadodara? Reach out today.
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
              href="https://wa.me/916353583148?text=Hi, I want to hire top wedding planners in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Top Planners
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm looking for top wedding planners in Vadodara!"
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
