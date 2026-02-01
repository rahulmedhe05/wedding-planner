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
  Wallet,
  Calculator,
  PiggyBank,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Budget Wedding Planner Vadodara — Dream Weddings Within Reach",
  heroSubtitle: "Beautiful weddings don't require unlimited budgets. Our budget wedding planner creates stunning celebrations that respect your financial reality.",
  
  mainContent: `
Here's a secret the wedding industry doesn't want you to know: a beautiful, meaningful wedding doesn't require spending beyond your means.

As a budget wedding planner in Vadodara, we've seen couples stress about finances more than they stress about the actual wedding. That's backwards. Your wedding should be about love, not loans.

**What is a budget wedding planner?**

A budget wedding planner isn't about cheap weddings. It's about smart weddings. It's about knowing where to invest and where to save. It's about creating maximum impact with realistic resources.

Your budget wedding planner in Vadodara helps you:
• Set a realistic budget based on your actual financial situation
• Prioritize spending on what matters most to YOU
• Find quality vendors who offer genuine value
• Avoid the expensive traps couples often fall into
• Create beauty without breaking the bank

**The budget wedding planner difference:**

Any planner can spend money. It takes skill to create beauty within constraints. A budget wedding planner in Vadodara brings:

• Vendor relationships that deliver quality at reasonable prices
• Creative solutions that achieve expensive looks affordably
• Honest budget tracking so there are no surprises
• Experience knowing exactly where you can save
• The ability to say "no" to unnecessary expenses

**Common budget wedding myths debunked:**

Myth: Budget means compromise on quality.
Reality: Your budget wedding planner finds vendors who deliver excellent quality at fair prices — they exist!

Myth: You need to invite fewer guests.
Reality: A budget wedding planner optimizes cost-per-guest, not guest count. 200 guests can be affordable.

Myth: Budget weddings look cheap.
Reality: With a budget wedding planner's strategic approach, guests won't know what you spent — only that it was beautiful.

**Budget wedding planner strategies:**

We've mastered the art of affordable elegance. Our budget wedding planner in Vadodara uses:
• Off-season and weekday discounts
• Multi-service vendor packages
• Smart decor that maximizes visual impact
• Alternative venue options
• Strategic menu planning
• DIY elements that actually work

Your budget is not a limitation — it's a framework for creativity.
  `,

  budgetTips: [
    {
      title: "Prioritize Ruthlessly",
      description: "Your budget wedding planner helps identify what truly matters to you — and saves elsewhere."
    },
    {
      title: "Timing Strategies",
      description: "Budget wedding planner secret: off-season dates can save 20-40% on venues and vendors."
    },
    {
      title: "Smart Vendor Selection",
      description: "We know which budget wedding planner-recommended vendors deliver quality without premium prices."
    },
    {
      title: "Creative Alternatives",
      description: "Budget wedding planner solutions that achieve expensive looks through clever alternatives."
    },
    {
      title: "Avoid Hidden Costs",
      description: "Your budget wedding planner knows every potential extra charge — and negotiates upfront."
    },
    {
      title: "Value Over Price",
      description: "A budget wedding planner focuses on value — sometimes spending slightly more saves money overall."
    }
  ],

  services: [
    {
      title: "Budget Planning & Tracking",
      description: "Your budget wedding planner creates realistic budgets and tracks every rupee carefully.",
      icon: "Calculator"
    },
    {
      title: "Value Vendor Curation",
      description: "Budget wedding planner-vetted vendors who deliver quality at fair, honest prices.",
      icon: "Star"
    },
    {
      title: "Cost Optimization",
      description: "Our budget wedding planner finds savings opportunities without sacrificing beauty.",
      icon: "PiggyBank"
    },
    {
      title: "Strategic Negotiations",
      description: "Budget wedding planner expertise in negotiating best prices and packages.",
      icon: "Wallet"
    },
    {
      title: "Creative Solutions",
      description: "Affordable alternatives that achieve premium looks — budget wedding planner speciality.",
      icon: "Sparkles"
    },
    {
      title: "Complete Coordination",
      description: "Full planning services from your budget wedding planner at accessible fees.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Financial Reality Check",
      description: "Your budget wedding planner starts with honest assessment of what you can actually afford."
    },
    {
      title: "Priority Setting",
      description: "We identify where to invest and where to save based on what matters to you."
    },
    {
      title: "Smart Planning",
      description: "Budget wedding planner strategies to maximize every rupee spent on your celebration."
    },
    {
      title: "Beautiful Execution",
      description: "A stunning wedding that respects your budget and exceeds expectations."
    }
  ],

  testimonials: [
    {
      name: "Kajal & Rahul",
      event: "₹8 Lakh Wedding",
      text: "We had a strict ₹8 lakh budget including everything. Our budget wedding planner in Vadodara created a celebration that looked like we spent double. Guests couldn't believe the budget!"
    },
    {
      name: "Prerna & Amit",
      event: "Smart 300-Guest Wedding",
      text: "Everyone said 300 guests under ₹12 lakhs was impossible. The budget wedding planner proved them wrong. Beautiful venue, delicious food, stunning decor — all within budget!"
    },
    {
      name: "Deepa & Sunil",
      event: "Meaningful Minimalist",
      text: "We wanted meaningful over expensive. Our budget wedding planner understood perfectly. Every element was intentional, beautiful, and affordable. Best decision ever!"
    }
  ],

  faqs: [
    {
      question: "What budget range does a budget wedding planner work with?",
      answer: "Our budget wedding planner in Vadodara works with weddings from ₹3 lakhs to ₹15 lakhs. There's no 'too small' budget — we create beautiful celebrations at every price point."
    },
    {
      question: "How much does a budget wedding planner charge?",
      answer: "Budget wedding planner fees start at ₹35,000 for basic coordination and range up to ₹1.5 lakhs for complete planning. The investment typically saves more than it costs through smart negotiations and cost avoidance."
    },
    {
      question: "Can a budget wedding planner really create a beautiful wedding cheaply?",
      answer: "Absolutely! A budget wedding planner doesn't create 'cheap' weddings — they create smart weddings. Through strategic vendor selection, creative solutions, and careful planning, we achieve beauty within any realistic budget."
    },
    {
      question: "What's the biggest way a budget wedding planner saves money?",
      answer: "Vendor relationships and negotiation skills. A budget wedding planner in Vadodara knows fair market prices, has relationships with value-focused vendors, and negotiates better deals than couples can achieve alone."
    },
    {
      question: "Will guests know we had a budget wedding?",
      answer: "No! A skilled budget wedding planner creates celebrations where the love shows, not the budget. We focus on high-impact elements visible to guests while saving on behind-the-scenes aspects."
    },
    {
      question: "Should we hire a budget wedding planner or DIY to save money?",
      answer: "Surprisingly, hiring a budget wedding planner often costs less than DIY! The savings from better vendor rates, avoided mistakes, and included elements typically exceed the planner fee. Plus, you avoid stress-related overspending."
    }
  ],

  ctaHeadline: "Beautiful Weddings on Real Budgets",
  ctaSubtext: "Your dream wedding is possible within your means. Let our budget wedding planner in Vadodara show you how."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Smart Beauty" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Value Excellence" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Affordable Elegance" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Grace" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Smart Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Value Venues" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Love Focused" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Thoughtful Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Beautiful Florals" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Quality Food" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Touch" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-planner-cost-in-vadodara", title: "Planner Cost" },
  { slug: "wedding-planner-packages-vadodara", title: "Planner Packages" },
  { slug: "affordable-wedding-planner-vadodara", title: "Affordable Planner" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
  { slug: "partial-wedding-planning-in-vadodara", title: "Partial Planning" },
];

export const metadata: Metadata = {
  title: "Budget Wedding Planner Vadodara | Affordable Beautiful Weddings | Smart Planning",
  description: "Expert budget wedding planner in Vadodara. Create stunning weddings within your means. Smart planning, value vendors & creative solutions for affordable celebrations.",
  keywords: "budget wedding planner vadodara, affordable wedding planner vadodara, cheap wedding planner vadodara, low budget wedding vadodara",
  openGraph: {
    title: "Budget Wedding Planner Vadodara | Dream Weddings Within Reach",
    description: "Budget wedding planner in Vadodara. Beautiful weddings don't require unlimited budgets.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/budget-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Budget Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Wedding Planner Vadodara",
    description: "Beautiful weddings within your means. Smart planning for affordable elegance.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/budget-wedding-planner-vadodara/",
  },
};

export default function BudgetWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PiggyBank className="w-5 h-5 text-green-200" />
                <span className="text-green-200">Smart Wedding Planning</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Wallet className="w-5 h-5 text-green-200" />
                  <span>Budget Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>300+ Weddings</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a budget wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Share Your Budget
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <PiggyBank className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-700">
                  Get Budget-Friendly Quote
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Budget wedding planner Vadodara • Any budget welcome</p>
              <KeywordEnquiryForm 
                keyword="Budget Wedding Planner Vadodara" 
                source="keyword-page-budget-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Wallet className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">₹3L+</p>
              <p className="text-gray-600 text-sm">Min Budget</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-emerald-600 mb-2" />
              <p className="font-bold text-2xl">300+</p>
              <p className="text-gray-600 text-sm">Smart Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">30%</p>
              <p className="text-gray-600 text-sm">Avg Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              What a Budget Wedding Planner Really Does
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-emerald-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tips Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Budget Wedding Planner Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How our budget wedding planner in Vadodara creates maximum value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.budgetTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-green-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
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
              Budget Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete services from your budget wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-emerald-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-green-100 transition-colors">
                    <PiggyBank className="w-6 h-6 text-emerald-600 group-hover:text-green-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-green-600" />
              Budget Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful weddings created by our budget wedding planner — proof that budget doesn't mean boring.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Budget Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Smart Budget</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Budget Wedding Planning Process
            </h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              How our budget wedding planner creates beautiful, affordable celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-green-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-green-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-green-300 text-sm">{step.description}</p>
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
              Budget Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who achieved dream weddings within their budgets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 55}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-green-600">{testimonial.event}</p>
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
              Budget Wedding Planner FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-green-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Budget Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a budget wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp for Budget Planning
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
                className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-full transition-colors border border-green-200 hover:border-green-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Budget Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan a beautiful wedding within your budget? Let's talk numbers!
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
              href="https://wa.me/916353583148?text=Hi, I need a budget wedding planner in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Budget Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a budget wedding planner in Vadodara!"
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
