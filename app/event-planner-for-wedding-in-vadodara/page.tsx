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
  Calendar,
  PartyPopper,
  Gift,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Event Planner for Wedding in Vadodara — Beyond Ordinary Celebrations",
  heroSubtitle: "Not just a wedding planner — a complete event planner for wedding celebrations who transforms every function into an unforgettable experience.",
  
  mainContent: `
A wedding isn't one event. It's many. And each deserves the same attention, creativity, and flawless execution.

That's why you need more than a traditional wedding planner. You need a complete event planner for wedding celebrations in Vadodara who understands that the sangeet should be as magical as the ceremony. That the mehendi deserves as much planning as the reception. That every event in your wedding journey should feel special.

**What does an event planner for wedding do differently?**

Most wedding planners focus on the main ceremony. An event planner for wedding in Vadodara sees the bigger picture. We understand that your wedding week is a series of interconnected experiences, each with its own mood, energy, and requirements.

The intimate mehendi needs warm, cozy vibes. The sangeet needs party energy. The wedding needs grandeur and emotion. The reception needs sophisticated celebration. An event planner for wedding ensures each event has its own identity while feeling like part of one beautiful story.

**The events we manage as your event planner for wedding:**

• Engagement ceremony — where it all begins
• Roka and Sagaai — traditional blessings
• Mehendi — intimate beauty and bonding
• Sangeet — music, dance, and joy
• Haldi — vibrant family celebrations
• Wedding ceremony — the sacred moment
• Reception — celebrating with the world

As your event planner for wedding in Vadodara, we don't see these as separate checklists. We see them as chapters in your love story.

**Why Vadodara families choose us as their event planner for wedding:**

Because we genuinely understand event dynamics. We know that energy flows differently in a 50-person mehendi versus a 500-person reception. We plan accordingly. Lighting, music, flow, timing — everything calibrated to each event's unique needs.

That's the difference an experienced event planner for wedding brings. Not just logistics management, but atmosphere creation.

**The event planner for wedding advantage:**

When you hire us as your event planner for wedding in Vadodara, you're getting event expertise applied to wedding celebrations. The precision of corporate events. The creativity of lifestyle events. The emotion of family celebrations. All combined.

Your guests won't just attend your wedding events. They'll experience them.
  `,

  eventsWeManage: [
    {
      title: "Engagement Ceremonies",
      description: "As your event planner for wedding journey, we create memorable engagement events that set the perfect tone."
    },
    {
      title: "Mehendi Functions",
      description: "Event planner for wedding excellence includes intimate, beautifully coordinated mehendi celebrations."
    },
    {
      title: "Sangeet Nights",
      description: "Party planning expertise from your event planner for wedding — lights, sound, choreography, magic."
    },
    {
      title: "Haldi Ceremonies",
      description: "Vibrant, joyful haldi events planned by your event planner for wedding with traditional perfection."
    },
    {
      title: "Wedding Ceremonies",
      description: "The main event, planned with precision and emotion. Event planner for wedding at its finest."
    },
    {
      title: "Grand Receptions",
      description: "Sophisticated celebration design from an experienced event planner for wedding in Vadodara."
    }
  ],

  services: [
    {
      title: "Multi-Event Wedding Planning",
      description: "Complete event planner for wedding services covering every function in your celebration week.",
      icon: "Calendar"
    },
    {
      title: "Theme Integration",
      description: "Your event planner for wedding creates cohesive themes that flow beautifully across all events.",
      icon: "Sparkles"
    },
    {
      title: "Entertainment Coordination",
      description: "Music, dance, performances — event planner for wedding expertise in creating memorable moments.",
      icon: "PartyPopper"
    },
    {
      title: "Decor Management",
      description: "Different looks for each event, unified by your story. Event planner for wedding aesthetic vision.",
      icon: "Gift"
    },
    {
      title: "Guest Experience Design",
      description: "From welcome to farewell, every touchpoint designed by your event planner for wedding in Vadodara.",
      icon: "Heart"
    },
    {
      title: "Day-Of Event Coordination",
      description: "Flawless execution of every event. The event planner for wedding you can trust completely.",
      icon: "Award"
    }
  ],

  processSteps: [
    {
      title: "Event Mapping",
      description: "Your event planner for wedding creates a comprehensive map of every function in your celebration."
    },
    {
      title: "Individual Event Design",
      description: "Each event gets its own plan while maintaining connection to your wedding story."
    },
    {
      title: "Vendor Coordination",
      description: "As your event planner for wedding in Vadodara, we coordinate all vendors across all events seamlessly."
    },
    {
      title: "Flawless Multi-Event Execution",
      description: "Every event flows into the next beautifully. Event planner for wedding perfection achieved."
    }
  ],

  testimonials: [
    {
      name: "Riya & Sameer",
      event: "5-Day Wedding Celebration",
      text: "We had 6 events over 5 days. Finding an event planner for wedding who could handle all of them brilliantly seemed impossible — until we found them. Each event was perfect and unique!"
    },
    {
      name: "Kavitha & Arjun",
      event: "Multi-City Wedding Events",
      text: "Our engagement was in Mumbai, wedding in Vadodara. We needed an event planner for wedding who could coordinate across cities. They pulled it off flawlessly. Incredible team!"
    },
    {
      name: "Simran & Vikrant",
      event: "Traditional Punjabi Wedding",
      text: "Our sangeet needed to be spectacular — it's a big deal in Punjabi weddings! The event planner for wedding understood this completely. Best sangeet our guests had ever attended."
    }
  ],

  faqs: [
    {
      question: "What's the difference between a wedding planner and an event planner for wedding?",
      answer: "A traditional wedding planner often focuses primarily on the main ceremony. An event planner for wedding in Vadodara manages all functions — engagement, mehendi, sangeet, haldi, wedding, reception — with equal expertise and attention."
    },
    {
      question: "Can your event planner for wedding handle different themes for each event?",
      answer: "Absolutely! That's our specialty. Each event gets its own look and feel while maintaining a cohesive story. Your sangeet might be Bollywood glam while your wedding is traditionally elegant — we make both perfect."
    },
    {
      question: "How does pricing work for event planner for wedding services?",
      answer: "We price based on number of events, complexity, and guest counts. Packages for multi-event weddings typically range from ₹2.5 lakhs to ₹10+ lakhs depending on scale."
    },
    {
      question: "Do you provide event planner for wedding services outside Vadodara?",
      answer: "Yes! As an event planner for wedding based in Vadodara, we travel across Gujarat and India for destination celebrations. Additional travel fees may apply."
    },
    {
      question: "How many events can you manage in one wedding?",
      answer: "We regularly manage 5-7 events per wedding as your event planner. We've handled up to 10 events for elaborate celebrations. Each gets dedicated planning and coordination."
    },
    {
      question: "What if some events have different venues?",
      answer: "Common scenario! Your event planner for wedding in Vadodara coordinates across multiple venues, managing separate vendor teams, logistics, and timelines for each location."
    }
  ],

  ctaHeadline: "Hire an Event Planner for Wedding Excellence",
  ctaSubtext: "Every event in your wedding deserves to be extraordinary. Trust an experienced event planner for wedding in Vadodara to make them all unforgettable."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Events" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Grand Reception" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Magic" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Events" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Event Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Sangeet Vibes" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Celebration" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Detailed Planning" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Events" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Joy Moments" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Reception Events" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Events" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-event-management-company-in-vadodara", title: "Event Management" },
  { slug: "wedding-organizer-in-vadodara", title: "Wedding Organizer" },
  { slug: "wedding-management-services-in-vadodara", title: "Management Services" },
  { slug: "sangeet-organizers-in-vadodara", title: "Sangeet Organizers" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Coordination Services" },
];

export const metadata: Metadata = {
  title: "Event Planner for Wedding in Vadodara | All Events Expert | 500+ Weddings",
  description: "Complete event planner for wedding in Vadodara. From engagement to reception, every event planned perfectly. Event planner for wedding expertise since 2009.",
  keywords: "event planner for wedding vadodara, wedding event planner vadodara, event planner for wedding celebrations, wedding function planner vadodara",
  openGraph: {
    title: "Event Planner for Wedding in Vadodara | Multi-Event Expert",
    description: "Every wedding event deserves perfection. Event planner for wedding in Vadodara managing engagements, sangeets, ceremonies & receptions.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/event-planner-for-wedding-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Event Planner for Wedding in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Planner for Wedding in Vadodara",
    description: "Multi-event wedding planning excellence. Every function, perfectly executed.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/event-planner-for-wedding-in-vadodara/",
  },
};

export default function EventPlannerForWeddingInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-fuchsia-800 via-pink-700 to-rose-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PartyPopper className="w-5 h-5 text-pink-200" />
                <span className="text-pink-200">Complete Event Planning for Weddings</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5 text-pink-200" />
                  <span>All Events</span>
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-fuchsia-700 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Event Planner
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need an event planner for wedding in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <PartyPopper className="w-6 h-6 text-fuchsia-600" />
                <h3 className="text-xl font-bold text-fuchsia-700">
                  Plan Your Events
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Event planner for wedding in Vadodara • Free consultation</p>
              <KeywordEnquiryForm 
                keyword="Event Planner for Wedding in Vadodara" 
                source="keyword-page-event-planner-for-wedding-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">7+</p>
              <p className="text-gray-600 text-sm">Event Types</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9★</p>
              <p className="text-gray-600 text-sm">Event Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <PartyPopper className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">2000+</p>
              <p className="text-gray-600 text-sm">Events Managed</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-rose-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Why You Need an Event Planner for Wedding
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-fuchsia-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/•/g, '<span class="text-pink-600">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events We Manage Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Events Managed by Your Event Planner for Wedding
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every wedding function, expertly planned and executed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.eventsWeManage.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-fuchsia-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-fuchsia-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-fuchsia-600" />
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
              Event Planner for Wedding Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services from your event planner for wedding in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full group-hover:bg-fuchsia-100 transition-colors">
                    <PartyPopper className="w-6 h-6 text-pink-600 group-hover:text-fuchsia-600" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-fuchsia-600" />
              Event Planner for Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the events created by your event planner for wedding in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Event Planner for Wedding in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Event Excellence</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-fuchsia-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Your Event Planner for Wedding Works
            </h2>
            <p className="text-pink-300 max-w-2xl mx-auto">
              Our proven process as an event planner for wedding in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-fuchsia-700 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-pink-300 text-sm">{step.description}</p>
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
              Event Planner for Wedding Reviews — Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who trusted us as their event planner for wedding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 80}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-fuchsia-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-fuchsia-600">{testimonial.event}</p>
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
              Event Planner for Wedding FAQs — Vadodara
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-fuchsia-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Event Planner for Wedding in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/90 to-pink-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-fuchsia-700 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Event Planner
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need an event planner for wedding in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Event Team
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
                className="px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-full transition-colors border border-pink-200 hover:border-pink-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-fuchsia-800 to-pink-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Your Event Planner for Wedding
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan every wedding event perfectly? Connect with your event planner for wedding in Vadodara.
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
              href="https://wa.me/916353583148?text=Hi, I need an event planner for wedding in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Event Planner
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I'm looking for an event planner for wedding in Vadodara!"
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
