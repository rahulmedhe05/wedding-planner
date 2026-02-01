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
  Clock,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Professional Wedding Planner in Vadodara — Where Expertise Meets Emotion",
  heroSubtitle: "Your wedding deserves more than enthusiasm. It deserves a professional wedding planner in Vadodara who brings skill, systems, and heart to your celebration.",
  
  mainContent: `
There's a difference between someone who loves weddings and a professional wedding planner in Vadodara. Both care about your big day — but only one has the expertise to handle the thousand things that can go wrong.

**Why professionalism matters in wedding planning:**

Picture this: It's your wedding day. The caterer calls — their truck broke down. The decorator is running behind. Your aunt just announced she's bringing 20 extra guests. A professional wedding planner in Vadodara doesn't panic. They have backup caterers on speed dial, built buffer time into the schedule, and planned for exactly this kind of chaos.

That's the difference. A professional wedding planner in Vadodara has systems. Contingencies. Relationships. Experience.

**What makes us a truly professional wedding planner in Vadodara?**

We've invested 15 years in building not just skills, but infrastructure. Our team includes certified event managers, trained coordinators, and specialists who understand everything from Gujarati rituals to contemporary fusion ceremonies. As a professional wedding planner in Vadodara, we bring:

• Detailed project management with timelines, checklists, and milestones
• Vendor contracts that protect YOU, not just them
• Insurance and backup plans for every major element
• Clear communication channels and regular updates
• Professional conduct that earns respect from all vendors

**The professional wedding planner difference:**

Amateur planners hope things go well. A professional wedding planner in Vadodara ensures they do.

We've seen vendors try to cut corners. We've caught them. We've handled emergencies at 2 AM without waking the bride. We've renegotiated contracts when quality didn't match promises. A professional wedding planner in Vadodara is your advocate, your shield, and your problem-solver.

Your family hired you to be the bride or groom — not the crisis manager. Let a professional wedding planner in Vadodara handle the complexity while you savor every moment.

**Professionalism doesn't mean cold:**

Some people worry that "professional" means impersonal. Not with us. Being a professional wedding planner in Vadodara means we're skilled enough to handle logistics AND emotionally present enough to share your joy. We'll manage your vendor timeline with precision — and still tear up during your vows.

That's true professionalism. Technical excellence wrapped in genuine care.
  `,

  professionalStandards: [
    {
      title: "Certified Team",
      description: "Every coordinator on our team is trained in event management. A professional wedding planner in Vadodara invests in expertise."
    },
    {
      title: "Documented Processes",
      description: "Nothing left to memory. Checklists, timelines, and tracking ensure nothing falls through the cracks."
    },
    {
      title: "Vendor Vetting",
      description: "We personally verify every vendor we recommend. As a professional wedding planner in Vadodara, we stake our reputation on it."
    },
    {
      title: "Contract Protection",
      description: "Legal-reviewed contracts that protect your interests. Professional means professional — in every document."
    },
    {
      title: "Liability Coverage",
      description: "We carry professional insurance. Because a true professional wedding planner in Vadodara prepares for everything."
    },
    {
      title: "Ethical Standards",
      description: "No hidden commissions. Transparent pricing. Honest advice. Always. That's the professional wedding planner way."
    }
  ],

  services: [
    {
      title: "Full-Service Professional Planning",
      description: "From engagement to honeymoon, a professional wedding planner in Vadodara manages every detail with precision.",
      icon: "Briefcase"
    },
    {
      title: "Corporate-Level Event Management",
      description: "We bring corporate event standards to wedding celebrations. Systematic. Reliable. Professional.",
      icon: "CheckCircle"
    },
    {
      title: "Vendor Management & Negotiation",
      description: "Professional wedding planner expertise means better deals and better accountability from every vendor.",
      icon: "Shield"
    },
    {
      title: "Timeline & Logistics Mastery",
      description: "Military-precision scheduling that keeps your celebration flowing smoothly and stress-free.",
      icon: "Clock"
    },
    {
      title: "Budget Management & Reporting",
      description: "Professional financial tracking with detailed reports. Know exactly where every rupee goes.",
      icon: "Star"
    },
    {
      title: "Crisis Prevention & Management",
      description: "A professional wedding planner in Vadodara anticipates problems before they happen — and solves them if they do.",
      icon: "Award"
    }
  ],

  processSteps: [
    {
      title: "Professional Consultation",
      description: "Structured discovery session to understand your vision, constraints, and priorities. The professional wedding planner approach starts with listening."
    },
    {
      title: "Detailed Planning Phase",
      description: "Comprehensive proposal with timelines, budgets, and deliverables. A professional wedding planner in Vadodara puts everything in writing."
    },
    {
      title: "Systematic Execution",
      description: "Regular check-ins, progress reports, and milestone tracking. Professional wedding planner standards ensure nothing slips."
    },
    {
      title: "Flawless Delivery",
      description: "Your wedding day runs like clockwork while you enjoy every moment. That's the professional wedding planner guarantee."
    }
  ],

  testimonials: [
    {
      name: "Shreya & Vikram",
      event: "Corporate Executive Wedding",
      text: "As business people, we appreciate professionalism. Finding a professional wedding planner in Vadodara who matched our standards was refreshing. Their systems, communication, and execution were impeccable."
    },
    {
      name: "Dr. Nidhi & Dr. Pranav",
      event: "Doctor's Destination Wedding",
      text: "With our schedules, we needed a professional wedding planner in Vadodara who could work independently. They sent weekly reports, flagged decisions needing our input, and delivered beyond expectations."
    },
    {
      name: "Kavya & Rohan",
      event: "500-Guest Traditional Wedding",
      text: "Managing 500 guests across 4 events required serious professionalism. This professional wedding planner in Vadodara coordinated everything seamlessly. Not a single hiccup in 4 days."
    }
  ],

  faqs: [
    {
      question: "What makes a wedding planner 'professional' versus just experienced?",
      answer: "Experience is part of it, but a professional wedding planner in Vadodara also has formal training, documented processes, proper contracts, insurance, and ethical standards. We have all of these and more."
    },
    {
      question: "How does a professional wedding planner in Vadodara handle vendor issues?",
      answer: "With contracts that have teeth. We include performance clauses, maintain backup vendor relationships, and aren't afraid to hold vendors accountable. Our reputation ensures vendors bring their A-game."
    },
    {
      question: "What kind of reporting does a professional wedding planner provide?",
      answer: "Weekly progress updates, budget tracking reports, decision logs, and timeline status. As a professional wedding planner in Vadodara, we believe you should always know exactly where things stand."
    },
    {
      question: "Is a professional wedding planner in Vadodara more expensive?",
      answer: "Professional standards don't always mean higher prices. In fact, our vendor relationships and negotiation skills often save clients more than our fee. Packages start from ₹2.5 lakhs."
    },
    {
      question: "How early should we book a professional wedding planner?",
      answer: "Professional wedding planner services in Vadodara book up 8-12 months ahead for peak season. Earlier booking means more vendor options and better pricing."
    },
    {
      question: "Do you handle destination weddings professionally?",
      answer: "Absolutely. A professional wedding planner in Vadodara brings the same systematic approach to destinations across India. We've executed in Udaipur, Goa, Jaipur, and internationally."
    }
  ],

  ctaHeadline: "Hire a Professional Wedding Planner in Vadodara",
  ctaSubtext: "Your wedding is too important for amateur hour. Trust a professional wedding planner in Vadodara who brings expertise, systems, and heart to your celebration."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Elegant Setup" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Planning" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Coordination" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Excellence" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Precision" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Mastery" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Details" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Perfect Execution" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Design" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration Joy" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Culinary Excellence" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Beauty" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Wedding Planner" },
  { slug: "top-wedding-planners-in-vadodara", title: "Top Wedding Planners" },
  { slug: "wedding-event-management-company-in-vadodara", title: "Event Management" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Wedding Planning" },
  { slug: "luxury-wedding-planner", title: "Luxury Wedding Planner" },
];

export const metadata: Metadata = {
  title: "Professional Wedding Planner in Vadodara | Expert Planning | 500+ Weddings",
  description: "Hire a professional wedding planner in Vadodara with certified team, documented processes & 15+ years expertise. Professional standards, personal care.",
  keywords: "professional wedding planner in vadodara, professional wedding planner vadodara, certified wedding planner vadodara, expert wedding planner vadodara",
  openGraph: {
    title: "Professional Wedding Planner in Vadodara | Expert Services",
    description: "Professional wedding planner in Vadodara bringing corporate-level expertise to your celebration. Certified team, proven processes, guaranteed results.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/professional-wedding-planner-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional Wedding Planner in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Wedding Planner in Vadodara",
    description: "Expert wedding planning with professional standards and personal touch.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/professional-wedding-planner-in-vadodara/",
  },
};

export default function ProfessionalWeddingPlannerInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Certified Professional Wedding Planners</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span>Certified Team</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span>15+ Years</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Weddings</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Consult a Professional
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a professional wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Professional Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-6 h-6 text-slate-700" />
                <h3 className="text-xl font-bold text-slate-800">
                  Professional Consultation
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Professional wedding planner in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Professional Wedding Planner in Vadodara" 
                source="keyword-page-professional-wedding-planner-in-vadodara"
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
              <Shield className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Certified Team</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-10 h-10 text-slate-700 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Professional</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Managed</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Why Choose a Professional Wedding Planner in Vadodara?
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-blue-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Professional Wedding Planner Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the standards that define us as a professional wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.professionalStandards.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-600"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
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
              Professional Wedding Planner Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services from a professional wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                    <Briefcase className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-blue-600" />
              Professional Wedding Planner Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the professional standards in action across our weddings in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Professional Wedding Planner in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Professional Quality</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Professional Wedding Planner Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our systematic approach as a professional wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-blue-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
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
              Professional Wedding Planner Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from clients who experienced our professional wedding planner services in Vadodara.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 50}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.event}</p>
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
              Professional Wedding Planner in Vadodara — FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-blue-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Professional Wedding Planner in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call for Professional Consult
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a professional wedding planner in Vadodara for my wedding!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Professional Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            More Wedding Planning Services in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-full transition-colors border border-slate-200 hover:border-slate-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Our Professional Wedding Planner Team in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for professional-grade wedding planning? Reach out to the professional wedding planner in Vadodara today.
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
              href="https://wa.me/916353583148?text=Hi, I want to hire a professional wedding planner in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Professional Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm looking for a professional wedding planner in Vadodara!"
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
