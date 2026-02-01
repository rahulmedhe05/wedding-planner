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
  Building2,
  Briefcase,
  Shield,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Event Management Company in Vadodara — Professional Excellence",
  heroSubtitle: "When you partner with an established wedding event management company, you get structure, systems, and the security of professional accountability.",
  
  mainContent: `
Choosing between an individual planner and a wedding event management company is one of the first decisions you'll make. For many couples, the security and reliability of an established company provides peace of mind that no solo operator can match.

**Why choose a wedding event management company?**

A wedding event management company in Vadodara brings institutional strength to your celebration. This means:

• **Team Depth:** If one coordinator is unwell, another steps in seamlessly. Your wedding never depends on a single person's availability.

• **Vendor Relationships:** Wedding event management companies have established networks with hundreds of vendors, often securing better pricing and priority service.

• **Financial Security:** Established companies have the financial stability to back their commitments, handle large deposits professionally, and weather any challenges.

• **Systematic Processes:** Years of experience refined into proven processes. A wedding event management company doesn't improvise — they execute tested systems.

**The company advantage:**

When you hire an individual planner, you get their personal attention — valuable, but limited. When you partner with a wedding event management company in Vadodara, you get a department dedicated to your wedding.

Consider what our wedding event management company provides:

*Dedicated Planning Team:* Not just one planner, but a lead coordinator supported by assistants, ensuring nothing falls through cracks.

*Vendor Management Department:* Professionals who specialize in sourcing, negotiating, and managing vendors — their full-time focus.

*Design & Creative Team:* Conceptual development handled by specialists in aesthetics and visual planning.

*Operations Team:* Day-of execution managed by logistics experts who've coordinated hundreds of events.

*Administrative Support:* Contracts, payments, documentation — handled professionally with full accountability.

**Professional accountability:**

A wedding event management company has reputation, brand value, and long-term business interests at stake. This creates powerful motivation for excellence that goes beyond any individual relationship.

Our wedding event management company in Vadodara has served hundreds of families. That legacy isn't something we take lightly — every wedding is an opportunity to reinforce our reputation.

**When to choose a company:**

Large weddings with multiple events benefit enormously from the bandwidth a wedding event management company provides. Destination weddings need the network and logistics capability only companies can offer. Complex celebrations requiring diverse expertise are perfectly suited for team-based execution.

Wedding event management company in Vadodara — where professional infrastructure meets personal celebration.
  `,

  companyAdvantages: [
    {
      title: "Team Backup",
      description: "Wedding event management company strength means no single point of failure. Your event is never at risk."
    },
    {
      title: "Vendor Networks",
      description: "Years of relationships mean better rates and priority treatment — wedding event management company leverage."
    },
    {
      title: "Financial Stability",
      description: "Established companies handle large budgets professionally with full accountability."
    },
    {
      title: "Proven Systems",
      description: "Wedding event management company processes refined over hundreds of events ensure consistency."
    },
    {
      title: "Specialized Departments",
      description: "Design, operations, vendor management — each handled by dedicated specialists."
    },
    {
      title: "Brand Accountability",
      description: "Reputation matters. Wedding event management companies are motivated by long-term brand value."
    }
  ],

  services: [
    {
      title: "Complete Wedding Management",
      description: "End-to-end services from our wedding event management company — concept to farewell.",
      icon: "Building2"
    },
    {
      title: "Multi-Event Coordination",
      description: "Engagement to reception — our wedding event management company handles entire wedding seasons.",
      icon: "Briefcase"
    },
    {
      title: "Vendor Management",
      description: "Professional sourcing, contracting, and supervision by our wedding event management company team.",
      icon: "Users"
    },
    {
      title: "Budget Administration",
      description: "Transparent financial management with full documentation — wedding event management company standards.",
      icon: "Shield"
    },
    {
      title: "Design & Decor Services",
      description: "Creative departments within our wedding event management company conceptualize and execute decor.",
      icon: "Sparkles"
    },
    {
      title: "Logistics & Operations",
      description: "Professional event operations managed by experienced wedding event management company staff.",
      icon: "CheckCircle"
    }
  ],

  processSteps: [
    {
      title: "Initial Consultation",
      description: "Meet the wedding event management company leadership team to understand your vision."
    },
    {
      title: "Proposal & Planning",
      description: "Comprehensive proposals with team assignments and clear deliverables."
    },
    {
      title: "Execution Phase",
      description: "Our wedding event management company deploys appropriate teams for each function."
    },
    {
      title: "Post-Event Support",
      description: "Professional follow-up and documentation — wedding event management company commitment."
    }
  ],

  testimonials: [
    {
      name: "Priya & Ketan's Family",
      event: "500+ Guest Wedding",
      text: "We specifically wanted a wedding event management company, not an individual planner. The scale of our wedding needed a team. This company delivered — multiple coordinators, dedicated vendor manager, design team. True corporate professionalism!"
    },
    {
      name: "Seema & Rajat",
      event: "3-Day Destination Wedding",
      text: "Organizing our destination wedding from Mumbai needed an established wedding event management company in Vadodara we could trust. They had the network, the team, and the financial capacity to handle everything professionally."
    },
    {
      name: "Nidhi & Vishal",
      event: "Multi-City Wedding Events",
      text: "Events in Delhi and Vadodara needed coordination. This wedding event management company handled both locations with local teams, unified design, and seamless communication. Only a company could do this!"
    }
  ],

  faqs: [
    {
      question: "What's the difference between a wedding planner and a wedding event management company?",
      answer: "An individual wedding planner typically works alone or with minimal support. A wedding event management company in Vadodara has multiple team members, specialized departments, established infrastructure, and institutional accountability. Companies offer more bandwidth, backup systems, and professional business practices."
    },
    {
      question: "Are wedding event management companies more expensive?",
      answer: "Not necessarily. While established companies may have higher base fees, their vendor relationships often secure better pricing that offsets the difference. Wedding event management companies also offer more predictable, comprehensive pricing with fewer surprises."
    },
    {
      question: "Will I get personal attention from a wedding event management company?",
      answer: "Absolutely! Good wedding event management companies assign dedicated coordinators as your primary contact while providing the backup and support of a larger team. You get personal relationships plus institutional support — the best of both worlds."
    },
    {
      question: "How do I verify a wedding event management company's credentials?",
      answer: "Check their business registration, years of operation, portfolio of past events, team strength, office infrastructure, and client references. Established wedding event management companies in Vadodara will readily provide verification of their professional status."
    },
    {
      question: "What if I want to make changes after hiring the company?",
      answer: "Professional wedding event management companies have clear processes for scope changes, documented in contracts. Changes are handled professionally with transparent pricing adjustments. This formal approach protects both parties."
    },
    {
      question: "Do wedding event management companies handle small weddings?",
      answer: "Yes! Many wedding event management companies offer tiered packages suitable for intimate celebrations. The advantages of professional systems and vendor networks apply to weddings of all sizes."
    }
  ],

  ctaHeadline: "Partner with Professionals",
  ctaSubtext: "When your wedding matters, choose the security and capability of an established wedding event management company in Vadodara."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Managed Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Professional Setup" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Corporate Excellence" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Coordinated Events" },
  { id: 5, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Team Execution" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Attention to Detail" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Beautiful Results" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Professional Touch" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Excellence" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Grand Celebrations" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Managed Events" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Company Quality" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Planner" },
  { slug: "wedding-management-services-in-vadodara", title: "Management Services" },
  { slug: "top-wedding-planners-in-vadodara", title: "Top Planners" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Planning" },
];

export const metadata: Metadata = {
  title: "Wedding Event Management Company in Vadodara | Professional Planning | Established",
  description: "Established wedding event management company in Vadodara. Professional teams, vendor networks & corporate reliability for your dream wedding.",
  keywords: "wedding event management company vadodara, wedding management company vadodara, event management company vadodara, professional wedding company vadodara, wedding company vadodara",
  openGraph: {
    title: "Wedding Event Management Company in Vadodara | Professional Excellence",
    description: "Wedding event management company in Vadodara. Corporate professionalism for personal celebrations.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-event-management-company-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Event Management Company Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Event Management Company Vadodara",
    description: "Established company bringing professional excellence to weddings.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-event-management-company-in-vadodara/",
  },
};

export default function WeddingEventManagementCompanyVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400">Established Event Management Company</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Professional Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <span>Corporate Standards</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Corporate Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm looking for a wedding event management company in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Connect with Company
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-6 h-6 text-slate-700" />
                <h3 className="text-xl font-bold text-slate-800">
                  Company Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding event management company Vadodara • Professional services</p>
              <KeywordEnquiryForm 
                keyword="Wedding Event Management Company Vadodara" 
                source="keyword-page-wedding-event-management-company-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Building2 className="w-10 h-10 text-slate-700 mb-2" />
              <p className="font-bold text-2xl">10+</p>
              <p className="text-gray-600 text-sm">Years Established</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Company Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">20+</p>
              <p className="text-gray-600 text-sm">Team Members</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Events Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              The Company Difference
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-slate-600">$1</em>')
                      .replace(/•/g, '<span class="text-amber-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-zinc-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Wedding Event Management Company Advantages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why choose an established company for your wedding in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.companyAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-slate-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{advantage.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
              Company Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional services from our wedding event management company in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-amber-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-slate-700 transition-colors">
                    <Building2 className="w-6 h-6 text-amber-600 group-hover:text-white" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-slate-700" />
              Company Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Events managed by our wedding event management company team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Event Management Company Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Event Management</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Company Process
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Professional workflow from our wedding event management company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-slate-500" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
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
              Company Client Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Families who trusted our wedding event management company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 50}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.event}</p>
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
              Company FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-slate-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Event Management Company Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-zinc-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Corporate Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a wedding event management company in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Company
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Professional Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-full transition-colors border border-slate-200 hover:border-slate-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Our Company
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for professional wedding management? Connect with our team.
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
              href="https://wa.me/916353583148?text=Hi, I need a wedding event management company!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Company Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a wedding event management company!"
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
