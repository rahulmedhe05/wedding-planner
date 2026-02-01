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
  Trophy,
  ThumbsUp,
  Crown,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "The Best Wedding Planner in Vadodara? Let Our Work Speak.",
  heroSubtitle: "Everyone claims to be the best wedding planner in Vadodara. We'd rather show you 500+ couples who call us that — and mean it.",
  
  mainContent: `
Let's be honest — when you Google "best wedding planner in Vadodara," every result claims to be number one. So how do you actually find the best?

Here's a secret: the best wedding planner in Vadodara isn't always the one with the biggest ads or flashiest Instagram. It's the one whose couples can't stop talking about them months after the wedding.

**What makes someone the best wedding planner in Vadodara?**

It's not about having the most followers. It's about having the most heart.

The best wedding planner in Vadodara remembers that you mentioned wanting lilies because they were your grandmother's favorite — and finds a way to incorporate them even when they're out of season. The best wedding planner notices when the groom's mother looks overwhelmed and quietly arranges for her favorite tea to be ready. The best wedding planner doesn't just manage vendors; they create experiences that make guests whisper, "This is the most beautiful wedding I've ever attended."

**Why couples call us the best wedding planner in Vadodara:**

We've been doing this for 15 years. Not because we wanted to build a business, but because we fell in love with the magic of two people choosing each other forever. Every wedding we plan still gives us goosebumps. Every couple's story moves us.

That passion? It shows. It shows in the way we obsess over details others might overlook. It shows in how we treat every wedding — whether it's a 50-person gathering or a 500-guest extravaganza — with the same dedication. It shows in our 4.9-star rating and the couples who become friends.

**The truth about being the best wedding planner in Vadodara:**

We don't call ourselves the best. Our couples do. And that's the only title that matters.

We've planned weddings in palace banquet halls and simple community centers. We've worked with budgets of 3 lakhs and 30 lakhs. And every single time, our goal remains the same: make this the most beautiful day of your life.

The best wedding planner in Vadodara doesn't just execute a checklist. They become part of your family for those precious months of planning. They celebrate your wins, calm your anxieties, and shed happy tears right alongside you on the big day.

That's who we are. That's who we've always been.
  `,

  whatMakesUsBest: [
    {
      title: "15+ Years of Experience",
      description: "We've seen it all — and learned from everything. The best wedding planner in Vadodara grows with every celebration."
    },
    {
      title: "500+ Happy Couples",
      description: "Not just completed weddings — genuinely happy couples who still tag us in anniversary posts years later."
    },
    {
      title: "Unmatched Local Knowledge",
      description: "As the best wedding planner in Vadodara, we know every venue, every vendor, every hidden gem in this city."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise charges. The best wedding planner is upfront about every rupee."
    },
    {
      title: "24/7 Availability",
      description: "Wedding anxiety doesn't follow business hours. Neither do we. Especially in that final week."
    },
    {
      title: "Personalized Approach",
      description: "Cookie-cutter weddings? Not here. The best wedding planner creates celebrations as unique as your love story."
    }
  ],

  services: [
    {
      title: "Luxury Wedding Planning",
      description: "When only the finest will do, trust the best wedding planner in Vadodara to deliver an extraordinary experience.",
      icon: "Crown"
    },
    {
      title: "Complete Wedding Management",
      description: "From engagement to vidaai, the best wedding planner handles every single detail so you don't have to.",
      icon: "CheckCircle"
    },
    {
      title: "Destination Weddings",
      description: "Want to marry in Udaipur? Goa? The best wedding planner in Vadodara makes destination dreams reality.",
      icon: "MapPin"
    },
    {
      title: "Intimate Celebrations",
      description: "Small doesn't mean simple. The best wedding planner creates intimate weddings that feel grand in emotion.",
      icon: "Heart"
    },
    {
      title: "Traditional Ceremonies",
      description: "Hindu, Muslim, Christian, Jain — the best wedding planner respects and beautifully executes every tradition.",
      icon: "Star"
    },
    {
      title: "Wedding Day Coordination",
      description: "Already planned but need the best wedding planner for execution? We step in seamlessly.",
      icon: "Award"
    }
  ],

  processSteps: [
    {
      title: "The Connection Call",
      description: "We don't start with budgets. The best wedding planner starts with your story — how you met, what you dream of, what matters most."
    },
    {
      title: "Vision & Strategy",
      description: "Together, we create a roadmap. The best wedding planner in Vadodara turns dreams into actionable plans."
    },
    {
      title: "Curated Execution",
      description: "Handpicked vendors, bespoke designs, seamless coordination. Watch your wedding come to life."
    },
    {
      title: "The Perfect Day",
      description: "You enjoy every moment. The best wedding planner works behind the scenes, making sure everything is perfect."
    }
  ],

  testimonials: [
    {
      name: "Aisha & Rahul",
      event: "Royal Wedding, January 2025",
      text: "We interviewed eight wedding planners. Within five minutes of meeting them, we knew we'd found the best wedding planner in Vadodara. They just GOT us. Our wedding was beyond anything we imagined."
    },
    {
      name: "Pooja & Nikhil",
      event: "Intimate Garden Wedding",
      text: "People kept asking how we found such an amazing planner. The answer was simple — we searched for the best wedding planner in Vadodara, and the reviews led us right to them. Worth every rupee."
    },
    {
      name: "Tanvi & Aryan",
      event: "Destination Wedding, Udaipur",
      text: "Planning a destination wedding from Vadodara was terrifying until we hired them. Now I tell everyone — if you want the best wedding planner in Vadodara, look no further."
    }
  ],

  faqs: [
    {
      question: "How do I know you're really the best wedding planner in Vadodara?",
      answer: "Don't take our word for it. Read our 200+ Google reviews (4.9 stars), talk to our past couples, check our portfolio. The best wedding planner in Vadodara is proven by results, not claims."
    },
    {
      question: "What makes you different from other wedding planners claiming to be the best?",
      answer: "Experience (15+ years), track record (500+ weddings), and most importantly — passion. We still cry at weddings. We still get excited about details. The best wedding planner never loses that magic."
    },
    {
      question: "Is the best wedding planner in Vadodara also the most expensive?",
      answer: "Not necessarily. We offer packages across budgets because the best wedding planner believes everyone deserves an amazing wedding. We've done stunning celebrations at 5 lakhs and 50 lakhs."
    },
    {
      question: "Can the best wedding planner handle my unique requirements?",
      answer: "Unique is our specialty. Fusion wedding? Themed celebration? Specific religious requirements? The best wedding planner in Vadodara loves a creative challenge."
    },
    {
      question: "How far in advance should I book the best wedding planner?",
      answer: "Ideally 10-12 months, especially for peak season (November-February). The best wedding planner in Vadodara books up fast, but we always try to accommodate. Call us — let's see what's possible."
    },
    {
      question: "What if I've already booked some vendors?",
      answer: "Perfect! The best wedding planner in Vadodara integrates seamlessly with existing bookings. We'll coordinate with your vendors and fill in the gaps."
    }
  ],

  ctaHeadline: "Ready to Work with the Best?",
  ctaSubtext: "Your wedding deserves the best wedding planner in Vadodara. Let's create something extraordinary together — a celebration your guests will talk about for years."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Couple Magic" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Reception" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Sacred Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Elegance" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Excellence" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Stunning Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Moments" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Precious Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Beauty" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Joyful Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Sweet Delights" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Indian Splendor" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-planners-in-vadodara", title: "Wedding Planners" },
  { slug: "top-wedding-planners-in-vadodara", title: "Top Wedding Planners" },
  { slug: "luxury-wedding-planner", title: "Luxury Wedding Planner" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Planner" },
  { slug: "destination-wedding-planner", title: "Destination Wedding Planner" },
];

export const metadata: Metadata = {
  title: "Best Wedding Planner in Vadodara | #1 Rated | 500+ Happy Couples",
  description: "Looking for the best wedding planner in Vadodara? 15+ years experience, 500+ weddings, 4.9★ rating. The best wedding planner creates magic. Let us prove it.",
  keywords: "best wedding planner in vadodara, best wedding planner vadodara, top rated wedding planner vadodara, number one wedding planner vadodara",
  openGraph: {
    title: "Best Wedding Planner in Vadodara | Proven Excellence",
    description: "Don't settle for less than the best wedding planner in Vadodara. 500+ couples trust us. 15+ years experience. Your dream wedding awaits.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/best-wedding-planner-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Best Wedding Planner in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wedding Planner in Vadodara | #1 Choice",
    description: "When only the best wedding planner in Vadodara will do. 500+ couples agree.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/best-wedding-planner-in-vadodara/",
  },
};

export default function BestWeddingPlannerInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-amber-700 via-orange-600 to-amber-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-amber-200">#1 Rated Wedding Planner in Vadodara</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Trophy className="w-5 h-5 text-yellow-300" />
                  <span>#1 Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Couples</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call the Best
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm looking for the best wedding planner in Vadodara!"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-700">
                  Connect with the Best
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Best wedding planner in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Best Wedding Planner in Vadodara" 
                source="keyword-page-best-wedding-planner-in-vadodara"
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
              <Trophy className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">#1</p>
              <p className="text-gray-600 text-sm">Rated in Vadodara</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Google Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Happy Couples</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Finding the Best Wedding Planner in Vadodara
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
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Best Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Makes the Best Wedding Planner in Vadodara?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren't just features — they're promises that make us the best wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.whatMakesUsBest.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-amber-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
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
              Services from the Best Wedding Planner in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The best wedding planner in Vadodara offers comprehensive services for every type of celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-amber-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-amber-200 transition-colors">
                    <Crown className="w-6 h-6 text-amber-600" />
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
              Work by the Best Wedding Planner in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every image is proof of why couples call us the best wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Best Wedding Planner in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Best in Vadodara</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How the Best Wedding Planner in Vadodara Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The best wedding planner in Vadodara has a proven process that turns your dreams into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-amber-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
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
              Why Couples Say We're the Best Wedding Planner in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from couples who found the best wedding planner in Vadodara — and never looked back.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 40}`}
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
              Best Wedding Planner in Vadodara — FAQs
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
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=600&fit=crop"
          alt="Best Wedding Planner in Vadodara CTA"
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
              Call the Best Planner
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want to work with the best wedding planner in Vadodara for my wedding!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp the Best
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
                className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full transition-colors border border-amber-200 hover:border-amber-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-700 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact the Best Wedding Planner in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to experience why we&apos;re called the best wedding planner in Vadodara? Reach out today.
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
              href="https://wa.me/916353583148?text=Hi, I want to hire the best wedding planner in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp the Best Planner
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm looking for the best wedding planner in Vadodara!"
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
