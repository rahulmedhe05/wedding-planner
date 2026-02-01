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
  ClipboardList,
  Calendar,
  Settings,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Planning Services in Vadodara — Your Dream, Our Expertise",
  heroSubtitle: "Comprehensive wedding planning services in Vadodara that transform overwhelming logistics into a joyful journey. Let us handle the details while you enjoy the magic.",
  
  mainContent: `
Planning a wedding is supposed to be one of the happiest times of your life. So why does it feel like a second full-time job?

Between venue research, vendor coordination, family opinions, budget tracking, and endless decisions — the joy can quickly turn to stress. That's exactly why wedding planning services in Vadodara exist. To give you back the excitement.

**What are wedding planning services in Vadodara?**

Think of wedding planning services as hiring a team that's done this hundreds of times to guide your one precious celebration. We know which vendors deliver and which overpromise. We understand how long things actually take. We've seen what works and what causes chaos.

Wedding planning services in Vadodara aren't a luxury — they're a sanity saver.

**The range of wedding planning services we offer:**

Every couple is different. Some want complete handholding from engagement to vidaai. Others just need help on the wedding day. Our wedding planning services in Vadodara flex to your needs:

• Full-service planning that handles everything
• Partial planning for couples who've started but need help
• Month-of coordination for the final stretch
• Day-of management to execute your vision
• Consultation services for DIY couples who want expert guidance

**Why Vadodara couples choose our wedding planning services:**

Because we actually care. Not just about making things pretty (though we do that too), but about making your journey enjoyable. Every phone call, every decision, every crisis averted — it's all part of our wedding planning services in Vadodara.

We've held stressed brides' hands. We've calmed anxious mothers. We've solved problems at midnight. Wedding planning services aren't just logistics — they're peace of mind.

**The wedding planning services difference:**

Couples who use professional wedding planning services in Vadodara don't just have better-organized weddings. They have happier planning experiences. They don't fight over guest lists because we mediate. They don't stress about timelines because we track them. They actually enjoy their engagement period.

That's the gift of good wedding planning services — giving you back the joy.
  `,

  servicesIncluded: [
    {
      title: "Venue Selection & Booking",
      description: "Wedding planning services include finding the perfect venue for your budget, style, and guest count."
    },
    {
      title: "Vendor Curation & Management",
      description: "Our wedding planning services in Vadodara connect you with trusted photographers, caterers, decorators, and more."
    },
    {
      title: "Budget Planning & Tracking",
      description: "Transparent budget management is core to our wedding planning services. Know where every rupee goes."
    },
    {
      title: "Timeline & Schedule Creation",
      description: "Detailed timelines ensure smooth execution. Essential wedding planning services for stress-free celebrations."
    },
    {
      title: "Design & Aesthetic Direction",
      description: "Wedding planning services that make your vision tangible through themes, colors, and cohesive design."
    },
    {
      title: "Guest Management",
      description: "RSVP tracking, seating charts, special accommodations — comprehensive wedding planning services covered."
    }
  ],

  services: [
    {
      title: "Complete Wedding Planning Services",
      description: "End-to-end wedding planning services in Vadodara covering every aspect of your multi-day celebration.",
      icon: "ClipboardList"
    },
    {
      title: "Partial Planning Services",
      description: "Already started? Our wedding planning services pick up where you left off and fill the gaps.",
      icon: "Settings"
    },
    {
      title: "Month-Of Coordination",
      description: "Wedding planning services for the final 4-6 weeks. Perfect for organized couples who need execution support.",
      icon: "Calendar"
    },
    {
      title: "Day-Of Management",
      description: "Wedding planning services focused on the big day itself. You planned it — we'll make it happen flawlessly.",
      icon: "Star"
    },
    {
      title: "Consultation Services",
      description: "Expert guidance without full management. Wedding planning services for DIY couples who want professional input.",
      icon: "Heart"
    },
    {
      title: "Destination Wedding Services",
      description: "Extended wedding planning services for celebrations beyond Vadodara. We travel with our expertise.",
      icon: "MapPin"
    }
  ],

  processSteps: [
    {
      title: "Discovery Session",
      description: "Our wedding planning services begin with understanding your dreams, style, and non-negotiables."
    },
    {
      title: "Custom Planning Roadmap",
      description: "Wedding planning services tailored to your needs — whether full-service or partial support."
    },
    {
      title: "Collaborative Execution",
      description: "Transparent communication throughout. Our wedding planning services keep you informed and involved."
    },
    {
      title: "Flawless Celebration",
      description: "Wedding planning services that culminate in a perfect day you'll remember forever."
    }
  ],

  testimonials: [
    {
      name: "Shreya & Ankit",
      event: "Full-Service Planning",
      text: "We were so overwhelmed before hiring their wedding planning services in Vadodara. They took over everything and gave us back our excitement. Best decision we made!"
    },
    {
      name: "Meera & Jay",
      event: "Month-Of Coordination",
      text: "We'd planned most things ourselves but needed help pulling it together. Their wedding planning services for month-of coordination were exactly what we needed. Flawless execution."
    },
    {
      name: "Nandini & Rohit",
      event: "Destination Wedding Planning",
      text: "Planning a destination wedding from Vadodara seemed impossible until we found their wedding planning services. They handled everything across two cities perfectly."
    }
  ],

  faqs: [
    {
      question: "What's included in wedding planning services in Vadodara?",
      answer: "Our wedding planning services include venue selection, vendor management, budget tracking, timeline creation, design direction, guest management, and day-of coordination. Exact inclusions depend on the package you choose."
    },
    {
      question: "How much do wedding planning services in Vadodara cost?",
      answer: "Wedding planning services range from ₹75,000 for consultation-only to ₹5+ lakhs for full-service luxury planning. Most couples invest ₹1.5-3 lakhs for comprehensive wedding planning services."
    },
    {
      question: "When should we book wedding planning services?",
      answer: "For full wedding planning services, 10-12 months ahead is ideal. Partial planning can start 6-8 months out. Month-of coordination needs at least 6-8 weeks."
    },
    {
      question: "Can we customize the wedding planning services?",
      answer: "Absolutely! Our wedding planning services in Vadodara are flexible. Need vendor management but not design? Want budget tracking but prefer to book yourself? We create custom packages."
    },
    {
      question: "Do wedding planning services include vendor payments?",
      answer: "We coordinate payments and track budgets, but payments flow directly from you to vendors. This keeps our wedding planning services transparent and protects you."
    },
    {
      question: "What if we've already booked some vendors?",
      answer: "Perfect! Our wedding planning services integrate with existing bookings. We'll coordinate with your vendors and fill gaps — that's what partial planning services are designed for."
    }
  ],

  ctaHeadline: "Start Your Wedding Planning Services Journey",
  ctaSubtext: "From overwhelming to overjoyed — our wedding planning services in Vadodara transform your experience. Let's plan something beautiful together."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Planned Perfection" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Service Excellence" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Planning" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Services" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Planning" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Services" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Moments" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Detail Planning" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Services" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Joyful Results" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Catering Planning" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Services" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Wedding Planning" },
  { slug: "partial-wedding-planning-in-vadodara", title: "Partial Planning" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Coordination Services" },
  { slug: "wedding-management-services-in-vadodara", title: "Management Services" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
];

export const metadata: Metadata = {
  title: "Wedding Planning Services in Vadodara | Full to Partial | Since 2009",
  description: "Complete wedding planning services in Vadodara. Full-service, partial planning, month-of coordination & more. Wedding planning services that bring back the joy.",
  keywords: "wedding planning services in vadodara, wedding planning services vadodara, wedding planner services vadodara, wedding coordination services vadodara",
  openGraph: {
    title: "Wedding Planning Services in Vadodara | Expert Team",
    description: "Comprehensive wedding planning services in Vadodara. From full-service to day-of coordination. Transform stress into joy.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-planning-services-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Planning Services in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Planning Services in Vadodara",
    description: "Expert wedding planning services that bring back the joy of celebration.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-planning-services-in-vadodara/",
  },
};

export default function WeddingPlanningServicesInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-teal-700 via-cyan-600 to-teal-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="w-5 h-5 text-teal-200" />
                <span className="text-teal-200">Complete Planning Services</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <ClipboardList className="w-5 h-5 text-teal-200" />
                  <span>Full Services</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Couples</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Explore Services
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm interested in wedding planning services in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ClipboardList className="w-6 h-6 text-teal-700" />
                <h3 className="text-xl font-bold text-teal-700">
                  Enquire About Our Services
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding planning services in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Wedding Planning Services in Vadodara" 
                source="keyword-page-wedding-planning-services-in-vadodara"
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
              <ClipboardList className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">6+</p>
              <p className="text-gray-600 text-sm">Service Types</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Service Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Couples Served</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-cyan-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Understanding Wedding Planning Services in Vadodara
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
                      .replace(/•/g, '<span class="text-teal-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Wedding Planning Services Include
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every aspect covered by our wedding planning services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.servicesIncluded.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-teal-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
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
              Our Wedding Planning Service Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible wedding planning services in Vadodara for every need and budget.
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
                    <ClipboardList className="w-6 h-6 text-cyan-600 group-hover:text-teal-600" />
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
              Results of Our Wedding Planning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our wedding planning services in Vadodara have created for happy couples.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Planning Services in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Service Excellence</p>
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
              Our Wedding Planning Services Process
            </h2>
            <p className="text-teal-300 max-w-2xl mx-auto">
              How our wedding planning services in Vadodara work with you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-teal-800 text-2xl font-bold mx-auto mb-4">
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
              Wedding Planning Services Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What couples say about our wedding planning services in Vadodara.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 70}`}
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
              Wedding Planning Services in Vadodara — FAQs
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
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=600&fit=crop"
          alt="Wedding Planning Services in Vadodara CTA"
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
              Discuss Services
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want to know more about wedding planning services in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Us
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-700 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us for Wedding Planning Services
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to explore our wedding planning services in Vadodara? We&apos;re here to help.
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
              href="https://wa.me/916353583148?text=Hi, I want wedding planning services in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp for Services
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm interested in wedding planning services in Vadodara!"
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
