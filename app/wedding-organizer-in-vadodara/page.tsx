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
  Clipboard,
  Settings,
  Target,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Organizer in Vadodara — Your Vision, Brilliantly Organized",
  heroSubtitle: "Some couples need a planner. Some need a coordinator. You need a wedding organizer in Vadodara who does it all — someone who turns chaos into celebration.",
  
  mainContent: `
Let's talk about what wedding planning actually feels like without help.

It starts exciting. Pinterest boards, venue tours, tasting sessions. Fun! Then reality hits. Vendor follow-ups. Contract negotiations. Family opinions. Budget tracking. Guest list drama. Timeline conflicts. Seating chart nightmares.

Suddenly, planning your wedding feels less like preparing for the happiest day and more like managing a small corporation. That's where a wedding organizer in Vadodara becomes essential.

**What does a wedding organizer in Vadodara actually do?**

Everything. And we mean everything.

A wedding organizer in Vadodara is your single point of contact for all wedding-related matters. Instead of juggling 15 vendor calls, you make one call — to us. Instead of tracking 50 tasks, you check in with us. Instead of stress-eating at 2 AM over seating charts, you sleep peacefully knowing your wedding organizer has it handled.

**The wedding organizer role goes beyond planning:**

Planning is just one part. A wedding organizer in Vadodara also coordinates, negotiates, troubleshoots, designs, budgets, schedules, and most importantly — absorbs stress so you don't have to.

We organize:
• Vendor research, vetting, and relationships
• Contract negotiations and payment schedules
• Design concepts and décor execution
• Timeline creation and management
• Guest communications and RSVPs
• Family coordination (yes, that includes managing opinions)
• Day-of execution down to the last detail

**Why Vadodara couples need a dedicated wedding organizer:**

Vadodara weddings are special. They blend tradition with modernity, Gujarati customs with contemporary style. They involve extended families, multiple events, and high expectations. A wedding organizer in Vadodara understands this unique cultural context.

We know that your wedding isn't just about you — it's about families coming together. A good wedding organizer in Vadodara manages not just logistics but relationships, ensuring everyone feels included while your vision stays central.

**The wedding organizer difference:**

With a wedding organizer in Vadodara, you transform from stressed planner to excited couple. You attend your events as guests of honor, not as logistics managers. You create memories instead of spreadsheets.

That's the gift of a great wedding organizer — returning the joy to your journey.
  `,

  whatWeOrganize: [
    {
      title: "Complete Vendor Ecosystem",
      description: "Your wedding organizer in Vadodara researches, vets, negotiates with, and manages all your vendors as one unified team."
    },
    {
      title: "Budget & Finances",
      description: "Organized budget tracking, payment schedules, and financial reporting. Know exactly where your money goes."
    },
    {
      title: "Design & Aesthetics",
      description: "Your wedding organizer in Vadodara creates cohesive visual concepts across all events and venues."
    },
    {
      title: "Timelines & Schedules",
      description: "Detailed timelines for planning milestones and event-day schedules. Everything organized to the minute."
    },
    {
      title: "Guest Management",
      description: "Invitations, RSVPs, dietary requirements, accommodations — your wedding organizer handles all guest logistics."
    },
    {
      title: "Family Coordination",
      description: "The wedding organizer in Vadodara you need to diplomatically manage family dynamics and expectations."
    }
  ],

  services: [
    {
      title: "Full Wedding Organization",
      description: "Complete wedding organizer services from engagement to honeymoon. We organize everything.",
      icon: "Clipboard"
    },
    {
      title: "Partial Organization Support",
      description: "Already started? Your wedding organizer in Vadodara picks up where you are and fills the gaps.",
      icon: "Settings"
    },
    {
      title: "Multi-Event Organization",
      description: "Mehendi, sangeet, wedding, reception — your wedding organizer manages all events cohesively.",
      icon: "Target"
    },
    {
      title: "Destination Wedding Organization",
      description: "Taking your celebration elsewhere? Your wedding organizer in Vadodara travels with expertise.",
      icon: "MapPin"
    },
    {
      title: "Day-Of Coordination",
      description: "You planned, now we execute. Wedding organizer services for seamless day-of management.",
      icon: "Star"
    },
    {
      title: "Virtual Organization Support",
      description: "Planning from abroad? Your wedding organizer in Vadodara manages on-ground details remotely.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Organization Assessment",
      description: "Your wedding organizer in Vadodara evaluates where you are, what you need, and creates a roadmap."
    },
    {
      title: "System Setup",
      description: "We establish communication channels, tracking systems, and organizational structures for your wedding."
    },
    {
      title: "Ongoing Management",
      description: "Your wedding organizer in Vadodara actively manages all elements, keeping you informed but unstressed."
    },
    {
      title: "Flawless Execution",
      description: "On event days, your wedding organizer orchestrates everything while you enjoy every moment."
    }
  ],

  testimonials: [
    {
      name: "Neha & Kunal",
      event: "Traditional Gujarati Wedding",
      text: "We both work demanding jobs and had zero time to plan. Our wedding organizer in Vadodara literally organized our entire wedding from scratch. All we did was show up and enjoy!"
    },
    {
      name: "Priyanka & Amit",
      event: "NRI Wedding from USA",
      text: "Planning from California was terrifying until we found this wedding organizer in Vadodara. They handled everything on the ground while keeping us updated. Perfect organization!"
    },
    {
      name: "Swati & Raj",
      event: "Multi-Venue Wedding Week",
      text: "Five events, three venues, 800 guests, two families with very different ideas. Our wedding organizer in Vadodara coordinated everyone and everything. Absolute lifesaver!"
    }
  ],

  faqs: [
    {
      question: "What's the difference between a wedding planner and a wedding organizer?",
      answer: "While the terms overlap, a wedding organizer in Vadodara emphasizes the systematic management aspect — creating order from complexity. We focus on organization, coordination, and ensuring nothing falls through the cracks."
    },
    {
      question: "How does a wedding organizer in Vadodara help with family dynamics?",
      answer: "We diplomatically gather input from both families, synthesize sometimes conflicting opinions, and create solutions that honor everyone while keeping your vision central. We've managed many complex family situations!"
    },
    {
      question: "Can the wedding organizer handle vendor problems?",
      answer: "Absolutely. Your wedding organizer in Vadodara becomes the point of contact for all vendors. If something goes wrong, we handle it. You won't even know there was an issue in most cases."
    },
    {
      question: "How much does a wedding organizer in Vadodara cost?",
      answer: "Wedding organizer services range from ₹1 lakh for partial support to ₹5+ lakhs for complete luxury organization. Most couples invest ₹2-3 lakhs for comprehensive organizing services."
    },
    {
      question: "What if we've already booked some vendors?",
      answer: "Perfect! Your wedding organizer in Vadodara integrates with existing bookings. We'll take over vendor communication, ensure contracts are solid, and fill any gaps in your vendor team."
    },
    {
      question: "Do you provide wedding organizer services for destination weddings?",
      answer: "Yes! As a wedding organizer in Vadodara, we bring our organizational systems to destinations across India. We've organized weddings in Udaipur, Goa, and beyond."
    }
  ],

  ctaHeadline: "Hire Your Wedding Organizer in Vadodara",
  ctaSubtext: "Stop managing, start celebrating. A wedding organizer in Vadodara who transforms complexity into seamless celebration awaits your call."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Organized Beauty" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Systematic Planning" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Perfect" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Organization" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Decor Coordination" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Management" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Focus" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Detail Oriented" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Systems" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Joy Organized" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Catering Coordination" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Order" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Coordination Services" },
  { slug: "wedding-management-services-in-vadodara", title: "Management Services" },
  { slug: "event-planner-for-wedding-in-vadodara", title: "Event Planner" },
  { slug: "wedding-planning-services-in-vadodara", title: "Planning Services" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Wedding Planning" },
];

export const metadata: Metadata = {
  title: "Wedding Organizer in Vadodara | Complete Organization | 500+ Weddings",
  description: "Expert wedding organizer in Vadodara transforming chaos into celebration. Complete wedding organization services. Your vision, brilliantly organized.",
  keywords: "wedding organizer in vadodara, wedding organizer vadodara, wedding organization services vadodara, wedding coordinator vadodara",
  openGraph: {
    title: "Wedding Organizer in Vadodara | Chaos to Celebration",
    description: "Your dedicated wedding organizer in Vadodara. Complete organization services that let you enjoy your celebration stress-free.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-organizer-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Organizer in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Organizer in Vadodara",
    description: "Stop managing, start celebrating. Expert wedding organization services.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-organizer-in-vadodara/",
  },
};

export default function WeddingOrganizerInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clipboard className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-200">Complete Wedding Organization</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clipboard className="w-5 h-5 text-emerald-200" />
                  <span>Full Organization</span>
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Organizer
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a wedding organizer in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clipboard className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Get Organized
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding organizer in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Wedding Organizer in Vadodara" 
                source="keyword-page-wedding-organizer-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clipboard className="w-10 h-10 text-emerald-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Organized</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Organized</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Organizing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Why You Need a Wedding Organizer in Vadodara
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-emerald-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Organize Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Your Wedding Organizer in Vadodara Handles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every aspect of your wedding, meticulously organized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.whatWeOrganize.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-emerald-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
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
              Wedding Organizer Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible organization services from your wedding organizer in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-teal-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full group-hover:bg-emerald-100 transition-colors">
                    <Clipboard className="w-6 h-6 text-teal-600 group-hover:text-emerald-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-emerald-600" />
              Weddings We've Organized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the results of professional wedding organization in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Organizer in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Organized Perfectly</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Your Wedding Organizer Works
            </h2>
            <p className="text-emerald-300 max-w-2xl mx-auto">
              The systematic approach your wedding organizer in Vadodara follows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-emerald-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-emerald-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-emerald-300 text-sm">{step.description}</p>
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
              Wedding Organizer Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who trusted their wedding organizer in Vadodara.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 20}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-emerald-600">{testimonial.event}</p>
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
              Wedding Organizer in Vadodara — FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-emerald-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Organizer in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Organizer
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a wedding organizer in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Organizer
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
                className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-full transition-colors border border-emerald-200 hover:border-emerald-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Your Wedding Organizer in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to get organized? Your wedding organizer in Vadodara is just a call away.
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
              href="https://wa.me/916353583148?text=Hi, I need a wedding organizer in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Organizer
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm looking for a wedding organizer in Vadodara!"
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
