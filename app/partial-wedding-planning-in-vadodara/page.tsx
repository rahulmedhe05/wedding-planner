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
  Puzzle,
  Clock,
  Wallet,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Partial Wedding Planning in Vadodara — Expert Help Where You Need It",
  heroSubtitle: "Love being involved in your wedding planning but need professional support for specific parts? That's exactly what partial wedding planning offers.",
  
  mainContent: `
Some brides dream of full control. They want to choose every napkin color, interview every vendor, and oversee every setup. They love the planning process — they just don't want to do it alone.

Enter partial wedding planning in Vadodara.

**Understanding partial wedding planning:**

Partial wedding planning is exactly what it sounds like — professional planning support for specific parts of your wedding while you handle the rest. It's collaborative, flexible, and perfectly suited for couples who want involvement without overwhelm.

Maybe you love designing décor but hate budget spreadsheets. Perhaps you've found your dream photographer but need help with catering logistics. Partial wedding planning in Vadodara gives you expert help exactly where you need it.

**Who chooses partial wedding planning?**

Couples who:
• Want to stay involved but need guidance
• Have some vendors already selected
• Are comfortable with research but need execution help
• Have specific budget constraints
• Enjoy the planning process but lack time for certain aspects
• Have family handling some elements
• Want professional advice without full handover

Partial wedding planning in Vadodara is perfect for the engaged couple who's neither completely hands-off nor completely stressed out — just sensibly seeking help.

**The beauty of partial wedding planning flexibility:**

Every partial wedding planning package looks different because every couple's needs differ. Some need:
• Vendor management only
• Day-of coordination only  
• Design and décor planning only
• Budget tracking and negotiations only
• Timeline and logistics management only

With partial wedding planning in Vadodara, you choose what you need. Nothing more, nothing less.

**Partial vs. full planning — not better, just different:**

Partial wedding planning isn't discount full planning. It's a different approach for a different kind of couple. Some couples thrive with full handover. Others feel disconnected if they're not involved.

Partial wedding planning in Vadodara respects that you have preferences, capabilities, and involvement desires. We work alongside you, not instead of you.

This is partnership planning. This is your wedding, your way, with professional support.
  `,

  partialOptions: [
    {
      title: "Design & Concept Planning",
      description: "Partial wedding planning focused on themes, aesthetics, and visual cohesion while you handle vendor booking."
    },
    {
      title: "Vendor Management Only",
      description: "Partial wedding planning for vendor research, negotiations, and coordination — you make final selections."
    },
    {
      title: "Day-Of Coordination",
      description: "You plan everything; we execute on the day. Essential partial wedding planning for DIY planners."
    },
    {
      title: "Budget & Financial Planning",
      description: "Partial wedding planning focused on budget creation, tracking, and financial management."
    },
    {
      title: "Pre-Wedding Events",
      description: "Partial wedding planning covering Sangeet, Mehendi, and Haldi while you focus on main events."
    },
    {
      title: "Custom Hybrid Package",
      description: "Mix and match elements — the ultimate partial wedding planning flexibility."
    }
  ],

  services: [
    {
      title: "Selective Vendor Support",
      description: "Partial wedding planning where we handle specific vendor categories you find challenging.",
      icon: "Users"
    },
    {
      title: "Design Consultation",
      description: "Professional design guidance as part of partial wedding planning — concepts, mood boards, styling.",
      icon: "Sparkles"
    },
    {
      title: "Timeline Management",
      description: "Partial wedding planning for complete timeline creation and logistics coordination.",
      icon: "Clock"
    },
    {
      title: "Budget Advisory",
      description: "Financial planning and tracking through partial wedding planning services.",
      icon: "Wallet"
    },
    {
      title: "Execution Support",
      description: "Day-of coordination when you've done the planning — key partial wedding planning service.",
      icon: "CheckCircle"
    },
    {
      title: "Month-Of Coordination",
      description: "Partial wedding planning where we take over final month preparations and execution.",
      icon: "Puzzle"
    }
  ],

  processSteps: [
    {
      title: "Needs Assessment",
      description: "Partial wedding planning begins with understanding what help you need and where you're self-sufficient."
    },
    {
      title: "Custom Package",
      description: "We create a partial wedding planning package tailored exactly to your requirements."
    },
    {
      title: "Collaborative Work",
      description: "Partial wedding planning means working together — we support while you stay involved."
    },
    {
      title: "Perfect Execution",
      description: "Whether planned together or separately, everything comes together beautifully."
    }
  ],

  testimonials: [
    {
      name: "Rhea & Varun",
      event: "Design-Focused Partial Planning",
      text: "I'm very particular about aesthetics but terrible with logistics. Partial wedding planning in Vadodara was perfect — I designed everything while they handled all the coordination. Best of both worlds!"
    },
    {
      name: "Swati & Arjun",
      event: "Day-Of Coordination",
      text: "We did all our own planning for 8 months. Then hired partial wedding planning for day-of coordination. On our wedding day, we didn't worry about a thing. Perfect decision!"
    },
    {
      name: "Neha & Kunal",
      event: "Vendor Management",
      text: "Finding and negotiating with vendors was our weakness. Partial wedding planning handled all vendor work while we made the creative decisions. Saved money and stress!"
    }
  ],

  faqs: [
    {
      question: "What exactly is covered in partial wedding planning?",
      answer: "Partial wedding planning in Vadodara covers specific services you choose — vendor management, design, day-of coordination, budget tracking, or any combination. It's completely customizable to your needs."
    },
    {
      question: "How much does partial wedding planning cost in Vadodara?",
      answer: "Partial wedding planning costs vary by services selected. Day-of coordination starts around ₹75,000. Month-of coordination around ₹1.25 lakhs. Design + coordination packages from ₹1.75 lakhs. Custom partial wedding planning is quoted based on your specific needs."
    },
    {
      question: "Can I switch from partial to full wedding planning mid-way?",
      answer: "Absolutely! Many couples start with partial wedding planning in Vadodara and realize they want more support. We can easily upgrade your package at any point."
    },
    {
      question: "Is partial wedding planning right for DIY couples?",
      answer: "Yes! Partial wedding planning is perfect for DIY couples who want professional execution support. You do the planning, we handle the wedding day coordination."
    },
    {
      question: "What if I only need one specific service?",
      answer: "No problem! Partial wedding planning in Vadodara can be as minimal as one service — say, only vendor negotiations or only day-of coordination. We're flexible."
    },
    {
      question: "How early should I book partial wedding planning?",
      answer: "It depends on what you need. Day-of coordination: 2-3 months ahead. Month-of coordination: 3-4 months. Design + coordination: 6+ months. For vendor management, partial wedding planning should start 8-10 months before."
    }
  ],

  ctaHeadline: "Need Partial Wedding Planning Support?",
  ctaSubtext: "Stay involved while getting expert help. Partial wedding planning in Vadodara for couples who want the best of both worlds."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Partial Planning" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Collaborative Work" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Support Where Needed" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Your Vision" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Flexible Support" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Excellence" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Together" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Every Detail" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Design" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Culinary" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Planning" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Coordination Services" },
  { slug: "budget-wedding-planner-vadodara", title: "Budget Planner" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
  { slug: "wedding-organizer-in-vadodara", title: "Wedding Organizer" },
];

export const metadata: Metadata = {
  title: "Partial Wedding Planning in Vadodara | Flexible Planning Support | 500+ Weddings",
  description: "Customizable partial wedding planning in Vadodara. Get expert help for specific services while staying involved. Day-of coordination, vendor management & more.",
  keywords: "partial wedding planning vadodara, flexible wedding planning vadodara, day of coordination vadodara, wedding planning support vadodara",
  openGraph: {
    title: "Partial Wedding Planning in Vadodara | Flexible Support",
    description: "Partial wedding planning in Vadodara. Expert help where you need it while staying involved.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/partial-wedding-planning-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Partial Wedding Planning in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partial Wedding Planning in Vadodara",
    description: "Flexible wedding planning support. Expert help where you need it.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/partial-wedding-planning-in-vadodara/",
  },
};

export default function PartialWeddingPlanningInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-cyan-700 via-teal-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Puzzle className="w-5 h-5 text-teal-200" />
                <span className="text-teal-200">Flexible Wedding Support</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Puzzle className="w-5 h-5 text-teal-200" />
                  <span>Customizable</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>Collaborative</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Discuss Your Needs
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm interested in partial wedding planning in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Puzzle className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-bold text-teal-700">
                  Get Custom Package
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Partial wedding planning in Vadodara • Flexible options</p>
              <KeywordEnquiryForm 
                keyword="Partial Wedding Planning in Vadodara" 
                source="keyword-page-partial-wedding-planning-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Puzzle className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Customizable</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-gray-600 text-sm">Partial Plans</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-cyan-600 mb-2" />
              <p className="font-bold text-2xl">Flexible</p>
              <p className="text-gray-600 text-sm">Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Understanding Partial Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-teal-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-cyan-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partial Options Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Partial Wedding Planning Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose what works for you. Partial wedding planning in Vadodara — completely flexible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.partialOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-teal-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{option.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
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
              Partial Wedding Planning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Individual services available through partial wedding planning in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-cyan-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full group-hover:bg-teal-100 transition-colors">
                    <Puzzle className="w-6 h-6 text-cyan-600 group-hover:text-teal-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-teal-600" />
              Partial Planning Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful weddings created with partial wedding planning in Vadodara support.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Partial Wedding Planning in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Partial Planning</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Partial Wedding Planning Works
            </h2>
            <p className="text-teal-300 max-w-2xl mx-auto">
              The collaborative partial wedding planning in Vadodara process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-teal-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-teal-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-teal-300 text-sm">{step.description}</p>
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
              Partial Wedding Planning Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who found the perfect balance with partial wedding planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 40}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-teal-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-teal-600">{testimonial.event}</p>
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
              Partial Wedding Planning FAQs — Vadodara
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-teal-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Partial Wedding Planning in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Discuss Partial Planning
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need partial wedding planning in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp for Custom Package
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Wedding Services in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-full transition-colors border border-teal-200 hover:border-teal-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-800 to-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact for Partial Wedding Planning
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to create your custom package? Let's discuss partial wedding planning in Vadodara.
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
              href="https://wa.me/916353583148?text=Hi, I need partial wedding planning in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp for Partial Planning
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need partial wedding planning in Vadodara!"
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
