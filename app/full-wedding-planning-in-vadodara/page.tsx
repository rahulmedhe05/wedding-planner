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
  Package,
  Clock,
  Shield,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Full Wedding Planning in Vadodara — From 'Yes' to 'I Do'",
  heroSubtitle: "Complete end-to-end wedding planning where we handle everything. You just show up and get married. That's full wedding planning.",
  
  mainContent: `
You said "yes" to forever. Now what?

Guest lists. Venues. Caterers. Decorators. Photographers. Mehendi artists. Entertainment. Transport. Accommodations. Timing. Coordination. Budget. Family expectations. Cultural rituals. And somewhere in all this chaos — your sanity.

This is where full wedding planning in Vadodara comes in.

**What does full wedding planning actually mean?**

Full wedding planning means everything. We mean actually everything — from the moment you hire us to the moment you leave for your honeymoon. Every decision. Every vendor. Every detail. Every crisis. Every beautiful moment made possible because someone handled all the rest.

Full wedding planning in Vadodara isn't about picking a few services. It's about complete handover. You tell us your vision, your budget, your values — and we build the entire celebration.

**Why couples choose full wedding planning:**

Because life doesn't stop for weddings. You have jobs. Families. Responsibilities. And probably a strong desire to not become a stressed-out monster by your wedding day.

Full wedding planning in Vadodara means:
• No vendor research that consumes weekends
• No awkward budget negotiations you don't want to have
• No family coordination that becomes family drama
• No timeline emergencies that spike your blood pressure
• No day-of chaos that ruins your enjoyment

Just a beautifully planned wedding and a couple who actually enjoyed planning it.

**The full wedding planning journey:**

It starts with understanding you — not just your preferences, but your values, your relationships, your love story. Full wedding planning in Vadodara isn't about templates; it's about translating who you are into celebrations that feel genuinely yours.

Then we handle everything: conceptualization, design, vendor curation, budget management, timeline creation, family coordination, cultural rituals, logistics, emergency handling, and flawless execution.

**Full wedding planning vs. partial planning:**

Some couples want to stay involved in decisions. They want the joy of vendor selection, the thrill of design choices. That's wonderful — partial planning exists for them.

Full wedding planning in Vadodara is for couples who want something different. Who want to trust completely, delegate fully, and focus on what matters most: each other, their families, and the profound experience of getting married.

This is full wedding planning. This is freedom.
  `,

  services: [
    {
      title: "Complete Concept & Design",
      description: "Full wedding planning includes total conceptualization — themes, colors, aesthetics, and cohesive design across all events.",
      icon: "Sparkles"
    },
    {
      title: "Total Vendor Management",
      description: "Research, shortlist, negotiate, book, coordinate — full wedding planning handles every vendor relationship completely.",
      icon: "Users"
    },
    {
      title: "Comprehensive Budget Management",
      description: "Full wedding planning means complete financial oversight with tracking, optimization, and transparent reporting.",
      icon: "Package"
    },
    {
      title: "End-to-End Coordination",
      description: "From pre-wedding events to post-wedding cleanup — full wedding planning coordinates everything seamlessly.",
      icon: "Clock"
    },
    {
      title: "Family & Guest Management",
      description: "Full wedding planning includes RSVP tracking, accommodation arrangements, and guest experience management.",
      icon: "Heart"
    },
    {
      title: "Complete Event Execution",
      description: "Day-of coordination across all events with full wedding planning team ensuring flawless delivery.",
      icon: "Shield"
    }
  ],

  whatsIncluded: [
    "Initial consultation & vision development",
    "Complete theme & design conceptualization",
    "Budget planning & financial tracking",
    "Venue selection & booking",
    "All vendor research, selection & contracts",
    "Invitations & stationery coordination",
    "Guest list management & RSVPs",
    "Accommodation arrangements for guests",
    "Pre-wedding event planning (Sangeet, Mehendi, Haldi)",
    "Main ceremony coordination",
    "Reception planning & execution",
    "Post-wedding brunch (if applicable)",
    "Complete timeline creation",
    "Day-of coordination & management",
    "Emergency handling & crisis management",
    "Post-wedding vendor settlement"
  ],

  processSteps: [
    {
      title: "Vision Discovery",
      description: "Full wedding planning begins with deeply understanding your dreams, values, and vision."
    },
    {
      title: "Complete Planning",
      description: "We handle every aspect of planning — vendors, design, logistics, family, budget, everything."
    },
    {
      title: "Seamless Coordination",
      description: "Full wedding planning includes coordinating all moving parts as your wedding approaches."
    },
    {
      title: "Flawless Execution",
      description: "You experience your wedding while we manage every detail behind the scenes."
    }
  ],

  testimonials: [
    {
      name: "Meera & Karan",
      event: "Full Planning Experience",
      text: "We live abroad and could only visit twice before our wedding. Full wedding planning in Vadodara made it possible. They understood us in two meetings and created a wedding that felt completely ours. Magical!"
    },
    {
      name: "Priya & Ankit",
      event: "500-Guest Celebration",
      text: "I didn't want to become a 'bridezilla.' Full wedding planning was our answer. I approved designs, showed up for fittings, and walked into the most beautiful wedding I could imagine. Zero stress."
    },
    {
      name: "Nisha & Raj",
      event: "Destination Wedding",
      text: "Both families in different states, wedding in Vadodara. Full wedding planning handled everything — including things we didn't know needed handling. True professionals!"
    }
  ],

  faqs: [
    {
      question: "What exactly is covered in full wedding planning?",
      answer: "Full wedding planning in Vadodara covers absolutely everything: concept development, design, all vendor management, budget tracking, family coordination, guest management, pre-wedding events, ceremony, reception, and post-wedding wrap-up. If it's wedding-related, it's included."
    },
    {
      question: "How much involvement do we need with full wedding planning?",
      answer: "Minimal involvement is required — that's the point! With full wedding planning, you'll approve major decisions (venues, vendors, designs) but all research, coordination, and execution is handled by us. Your time commitment is maybe 5-10 hours total."
    },
    {
      question: "What's the cost of full wedding planning in Vadodara?",
      answer: "Full wedding planning typically costs ₹3-8 lakhs depending on wedding scale, complexity, and number of events. For luxury celebrations, full wedding planning may be ₹10+ lakhs. This includes everything — no hidden costs."
    },
    {
      question: "How early should we book full wedding planning services?",
      answer: "For comprehensive full wedding planning in Vadodara, book 9-12 months ahead. With 6-8 months, full wedding planning is possible but with limited venue/vendor options. Under 6 months is emergency planning — possible but premium priced."
    },
    {
      question: "Can you do full wedding planning for out-of-town couples?",
      answer: "Absolutely! Many couples choosing full wedding planning in Vadodara are NRIs or live in other cities. Full wedding planning includes video consultations, detailed presentations, and maximum 2-3 in-person visits from you."
    },
    {
      question: "What if we want to be more involved in certain areas?",
      answer: "Full wedding planning is flexible! If you want to personally select your lehenga or choose the photographer, we accommodate that. Full wedding planning adapts to your preferences — we're comprehensive but not controlling."
    }
  ],

  ctaHeadline: "Ready for Complete Full Wedding Planning?",
  ctaSubtext: "Hand over everything. Get married stress-free. Full wedding planning in Vadodara for couples who deserve to enjoy their journey."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Complete Planning" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Full Service" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "End-to-End" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Elegance" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Excellence" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Magic" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Moments" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Full Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Design" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Culinary" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "partial-wedding-planning-in-vadodara", title: "Partial Planning" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
  { slug: "luxury-wedding-planner-vadodara", title: "Luxury Planner" },
  { slug: "destination-wedding-planner-vadodara", title: "Destination Wedding" },
  { slug: "wedding-management-services-in-vadodara", title: "Management Services" },
];

export const metadata: Metadata = {
  title: "Full Wedding Planning in Vadodara | Complete End-to-End Services | 500+ Weddings",
  description: "Comprehensive full wedding planning in Vadodara. Complete end-to-end planning from engagement to honeymoon. Total vendor management, design & execution included.",
  keywords: "full wedding planning vadodara, complete wedding planning vadodara, end to end wedding planning vadodara, total wedding planning services vadodara",
  openGraph: {
    title: "Full Wedding Planning in Vadodara | Complete End-to-End",
    description: "Comprehensive full wedding planning in Vadodara. Hand over everything and enjoy your journey.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/full-wedding-planning-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Full Wedding Planning in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Wedding Planning in Vadodara",
    description: "Complete end-to-end wedding planning. Everything handled for you.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/full-wedding-planning-in-vadodara/",
  },
};

export default function FullWeddingPlanningInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-violet-800 via-purple-700 to-fuchsia-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-violet-200" />
                <span className="text-violet-200">Complete Wedding Experience</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-violet-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Package className="w-5 h-5 text-violet-200" />
                  <span>Everything Included</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Weddings</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-full font-bold hover:bg-violet-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Discuss Full Planning
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm interested in full wedding planning in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="w-6 h-6 text-violet-600" />
                <h3 className="text-xl font-bold text-violet-700">
                  Start Full Planning
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Full wedding planning in Vadodara • Everything included</p>
              <KeywordEnquiryForm 
                keyword="Full Wedding Planning in Vadodara" 
                source="keyword-page-full-wedding-planning-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Package className="w-10 h-10 text-violet-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">All-Inclusive</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Full Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">Zero</p>
              <p className="text-gray-600 text-sm">Stress for You</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              What is Full Wedding Planning?
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-violet-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-fuchsia-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What's Included in Full Wedding Planning
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete full wedding planning in Vadodara — every single element handled for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {pageContent.whatsIncluded.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex items-start gap-3 border-l-4 border-violet-500"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
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
              Full Wedding Planning Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key areas covered by our full wedding planning in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-fuchsia-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-fuchsia-100 p-3 rounded-full group-hover:bg-violet-100 transition-colors">
                    <Package className="w-6 h-6 text-fuchsia-600 group-hover:text-violet-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-violet-600" />
              Full Wedding Planning Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful weddings created through full wedding planning in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Full Wedding Planning in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Full Planning</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-violet-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Full Wedding Planning Journey
            </h2>
            <p className="text-violet-300 max-w-2xl mx-auto">
              How full wedding planning in Vadodara unfolds from first call to last dance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-violet-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-violet-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-violet-300 text-sm">{step.description}</p>
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
              Full Wedding Planning Success Stories — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who experienced the freedom of full wedding planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-violet-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 35}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-violet-600">{testimonial.event}</p>
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
              Full Wedding Planning Questions — Vadodara
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-violet-600 group-open:rotate-45 transition-transform">+</span>
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
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=600&fit=crop"
          alt="Full Wedding Planning in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-fuchsia-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-full font-bold hover:bg-violet-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Start Full Planning
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want full wedding planning in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp for Full Planning
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
                className="px-4 py-2 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-full transition-colors border border-violet-200 hover:border-violet-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-800 to-fuchsia-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact for Full Wedding Planning
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for complete freedom? Let's begin your full wedding planning in Vadodara journey.
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
              href="https://wa.me/916353583148?text=Hi, I need full wedding planning in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Full Planning Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need full wedding planning in Vadodara!"
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
