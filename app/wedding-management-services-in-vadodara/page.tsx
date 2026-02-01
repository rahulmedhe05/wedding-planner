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
  Briefcase,
  Shield,
  Settings,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Management Services in Vadodara — Excellence in Every Detail",
  heroSubtitle: "Professional wedding management services that ensure your celebration runs flawlessly. From vendor coordination to crisis handling, we manage it all.",
  
  mainContent: `
Managing a wedding is like running a complex project with zero room for error and maximum emotional stakes. Miss a deadline? Someone's heart breaks. Budget overrun? Family stress. Vendor no-show? Disaster.

That's why wedding management services in Vadodara exist. Not to simply plan pretty events, but to professionally manage every moving piece of your celebration with the precision of corporate project management and the heart of a family celebration.

**What are wedding management services?**

Think of wedding management services as hiring a CEO for your wedding project. Someone who doesn't just have ideas but has systems. Someone who tracks milestones, manages vendors, handles crises, reports progress, and ensures delivery — on time, on budget, beyond expectations.

Wedding management services in Vadodara are for couples who understand that execution matters as much as vision.

**The wedding management services approach:**

We bring corporate-level management discipline to wedding celebrations. Our wedding management services include:

• Project management with timelines, milestones, and deliverables
• Vendor management with contracts, performance tracking, and accountability  
• Budget management with detailed tracking and regular reporting
• Risk management with contingency planning for every major element
• Quality management ensuring every detail meets your standards
• Communication management keeping all stakeholders informed

**Why Vadodara weddings need professional management:**

Vadodara weddings often involve 300-800+ guests, multiple events, dozens of vendors, and two families with different expectations. Managing this complexity without professional wedding management services is like running a company without management — possible, but chaotic.

Our wedding management services in Vadodara bring order to this complexity. We create systems that track everything, processes that prevent problems, and communication channels that keep everyone aligned.

**The wedding management services difference:**

Amateur planners hope things work out. Professional wedding management services in Vadodara ensure they do. We don't just create beautiful designs — we create accountability structures. We don't just book vendors — we manage their performance. We don't just track budgets — we optimize spending.

That's the difference between wedding planning and wedding management services.
  `,

  managementAreas: [
    {
      title: "Project Management",
      description: "Complete wedding management services with timelines, milestones, and systematic tracking of all elements."
    },
    {
      title: "Vendor Management",
      description: "Wedding management services that ensure vendor accountability through contracts, check-ins, and performance monitoring."
    },
    {
      title: "Budget Management",
      description: "Financial tracking and optimization as part of comprehensive wedding management services in Vadodara."
    },
    {
      title: "Risk Management",
      description: "Contingency planning for everything. Wedding management services that anticipate and prevent problems."
    },
    {
      title: "Quality Management",
      description: "Standards and checkpoints ensuring every detail meets expectations. Professional wedding management services."
    },
    {
      title: "Communication Management",
      description: "Wedding management services include keeping families, vendors, and couples perfectly aligned."
    }
  ],

  services: [
    {
      title: "Complete Wedding Management",
      description: "End-to-end wedding management services covering every aspect from planning to post-wedding wrap-up.",
      icon: "Briefcase"
    },
    {
      title: "Vendor Management Services",
      description: "Dedicated wedding management services focused on vendor coordination and performance.",
      icon: "Settings"
    },
    {
      title: "Day-Of Management",
      description: "Professional wedding management services ensuring flawless execution on your wedding day.",
      icon: "Shield"
    },
    {
      title: "Multi-Event Management",
      description: "Wedding management services for complex celebrations with multiple events and venues.",
      icon: "Star"
    },
    {
      title: "Budget & Financial Management",
      description: "Detailed financial wedding management services with tracking, reporting, and optimization.",
      icon: "Award"
    },
    {
      title: "Crisis Management",
      description: "When things go wrong, wedding management services that handle problems before you know they existed.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Management Assessment",
      description: "Wedding management services begin with understanding your needs, complexity, and management requirements."
    },
    {
      title: "Systems Setup",
      description: "We establish tracking systems, communication protocols, and management frameworks for your wedding."
    },
    {
      title: "Active Management",
      description: "Our wedding management services actively oversee all aspects with regular reporting and adjustments."
    },
    {
      title: "Flawless Delivery",
      description: "Wedding management services culminating in perfectly managed events you can enjoy stress-free."
    }
  ],

  testimonials: [
    {
      name: "Aditya & Sneha",
      event: "Corporate-Style Wedding",
      text: "Both of us work in management consulting. We appreciated how their wedding management services in Vadodara brought the same discipline to our wedding. Weekly reports, risk tracking, vendor scorecards — professional excellence!"
    },
    {
      name: "Ritika & Harsh",
      event: "700-Guest Celebration",
      text: "Managing 700 guests across 4 events seemed impossible. Their wedding management services handled everything systematically. Not a single thing fell through the cracks."
    },
    {
      name: "Diya & Sameer",
      event: "High-Stakes Family Wedding",
      text: "Our families had very different ideas. The wedding management services team diplomatically managed everyone's expectations while delivering our vision. True management expertise!"
    }
  ],

  faqs: [
    {
      question: "What makes wedding management services different from wedding planning?",
      answer: "Wedding planning focuses on design and creativity. Wedding management services in Vadodara add systematic project management — tracking, reporting, vendor accountability, risk mitigation, and performance management. We bring corporate discipline to celebrations."
    },
    {
      question: "What kind of reporting do wedding management services provide?",
      answer: "Our wedding management services include weekly progress reports, budget tracking dashboards, vendor status updates, and milestone completion summaries. You'll always know exactly where your wedding stands."
    },
    {
      question: "How do wedding management services handle vendor problems?",
      answer: "Through contracts with performance clauses, regular vendor check-ins, quality inspections, and backup plans. Our wedding management services in Vadodara ensure vendor accountability from booking to delivery."
    },
    {
      question: "What's the cost of wedding management services in Vadodara?",
      answer: "Wedding management services range from ₹1.5 lakhs for partial management to ₹6+ lakhs for comprehensive luxury management. Most couples invest ₹2.5-4 lakhs for full wedding management services."
    },
    {
      question: "Can wedding management services work with our existing vendors?",
      answer: "Absolutely. Our wedding management services integrate with vendors you've already booked. We'll review contracts, establish communication protocols, and manage them alongside any new vendors we help you select."
    },
    {
      question: "Do wedding management services include day-of coordination?",
      answer: "Yes! Day-of execution is a crucial part of wedding management services. Our team manages the entire wedding day, ensuring all planned elements come together perfectly."
    }
  ],

  ctaHeadline: "Get Professional Wedding Management Services",
  ctaSubtext: "Your wedding deserves more than hope — it deserves management. Professional wedding management services in Vadodara for celebrations that run flawlessly."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Managed Excellence" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Professional Execution" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Management" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Coordination" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Management" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Oversight" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Focus" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Detail Management" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Coordination" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration Control" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Catering Management" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Excellence" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-organizer-in-vadodara", title: "Wedding Organizer" },
  { slug: "wedding-event-management-company-in-vadodara", title: "Event Management" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Coordination Services" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Planner" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
];

export const metadata: Metadata = {
  title: "Wedding Management Services in Vadodara | Professional Management | 500+ Weddings",
  description: "Expert wedding management services in Vadodara. Project management, vendor oversight, budget tracking & crisis handling. Professional wedding management that delivers.",
  keywords: "wedding management services vadodara, wedding management in vadodara, wedding project management vadodara, wedding vendor management vadodara",
  openGraph: {
    title: "Wedding Management Services in Vadodara | Professional Excellence",
    description: "Professional wedding management services in Vadodara. Systematic management for celebrations that run flawlessly.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-management-services-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Management Services in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Management Services in Vadodara",
    description: "Professional wedding management. Systematic excellence for your celebration.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-management-services-in-vadodara/",
  },
};

export default function WeddingManagementServicesInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-indigo-800 via-blue-700 to-indigo-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-200" />
                <span className="text-blue-200">Professional Management Services</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Briefcase className="w-5 h-5 text-blue-200" />
                  <span>Full Management</span>
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call for Management
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need wedding management services in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-700">
                  Get Management Quote
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding management services in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Wedding Management Services in Vadodara" 
                source="keyword-page-wedding-management-services-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Briefcase className="w-10 h-10 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Managed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Service Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Managed</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Managing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Understanding Wedding Management Services
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-blue-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Areas Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Wedding Management Services Cover
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive management areas covered by our wedding management services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.managementAreas.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-indigo-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
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
              Wedding Management Service Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional wedding management services in Vadodara for every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-indigo-100 transition-colors">
                    <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-indigo-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-indigo-600" />
              Weddings We've Managed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the results of professional wedding management services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Management Services in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Professionally Managed</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Wedding Management Process
            </h2>
            <p className="text-indigo-300 max-w-2xl mx-auto">
              How our wedding management services in Vadodara deliver excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-indigo-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-indigo-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-indigo-300 text-sm">{step.description}</p>
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
              Wedding Management Services Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who experienced our professional wedding management services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 30}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-indigo-600">{testimonial.event}</p>
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
              Wedding Management Services FAQs — Vadodara
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-indigo-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Management Services in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call for Management
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need wedding management services in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Management Team
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
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full transition-colors border border-indigo-200 hover:border-indigo-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-800 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Wedding Management Services
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for professionally managed wedding excellence? Reach out for wedding management services in Vadodara.
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
              href="https://wa.me/916353583148?text=Hi, I need wedding management services in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Management Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need wedding management services in Vadodara!"
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
