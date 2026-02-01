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
  Clock,
  CheckCheck,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Coordination Services in Vadodara — Your Day, Perfectly Orchestrated",
  heroSubtitle: "You've planned your dream wedding. Now let professional wedding coordination services ensure every detail unfolds flawlessly.",
  
  mainContent: `
You've chosen the venue, booked the vendors, selected the menu. You have a vision. Now you need someone to make it all come together perfectly on the big day.

That's where wedding coordination services in Vadodara step in.

**What are wedding coordination services?**

Unlike full wedding planning (which starts from scratch), wedding coordination services focus on the final weeks and the wedding day itself. We take your plans, your vendor contracts, your vision — and orchestrate perfect execution.

Wedding coordination services in Vadodara include:
• Vendor timeline coordination
• Day-of schedule management
• Ceremony and reception flow direction
• Guest management and assistance
• Emergency problem-solving
• Final detail confirmation with all vendors

**Why you need wedding coordination services:**

Even the most organized couples face one truth: *You cannot be a bride or groom AND coordinate your own wedding.* On your wedding day, you deserve to be fully present — enjoying every moment, feeling every emotion, savoring every second.

Wedding coordination services in Vadodara free you to do exactly that.

Imagine walking down the aisle without worrying whether the caterer started on time. Picture enjoying your first dance without checking if the DJ has the right song queued. Experience receiving congratulations without mentally tracking the next event.

**What wedding coordination services handle:**

*Final Vendor Confirmation:* Two weeks before your wedding, our wedding coordination services confirm every detail with every vendor — arrival times, setup requirements, contact numbers, special requests.

*Master Timeline Creation:* We create minute-by-minute schedules that ensure seamless flow from getting-ready to farewell. Wedding coordination services account for travel, turnovers, and transitions.

*Day-of Management:* On your wedding day, we're the point of contact for all vendors, the problem-solver for unexpected issues, and the director ensuring everything happens when it should.

*Family & Guest Assistance:* While you're getting ready, wedding coordination services keep your families informed, guide guests, and ensure everyone knows where to be.

**The coordinator difference:**

Without wedding coordination services, couples often tell us: "I was so stressed, I barely remember my wedding." With professional coordination, you'll remember every magical moment — because you lived it fully.

Wedding coordination services in Vadodara — because your wedding deserves your full presence.
  `,

  coordinationServices: [
    {
      title: "Vendor Communication",
      description: "Wedding coordination services include finalizing details with all vendors 2-4 weeks before your event."
    },
    {
      title: "Timeline Management",
      description: "Detailed schedules ensure every moment flows perfectly — core wedding coordination services expertise."
    },
    {
      title: "Ceremony Direction",
      description: "From processional lineup to vows — wedding coordination services guide every ceremonial element."
    },
    {
      title: "Reception Flow",
      description: "First dances, toasts, cake cutting, farewells — wedding coordination services keep celebrations moving."
    },
    {
      title: "Emergency Problem-Solving",
      description: "Backup plans, quick fixes, vendor substitutes — wedding coordination services handle the unexpected."
    },
    {
      title: "Guest Experience",
      description: "Transportation, seating, special needs — wedding coordination services ensure guest comfort."
    }
  ],

  services: [
    {
      title: "Day-of Coordination",
      description: "Essential wedding coordination services for couples who've planned everything but need day-of execution.",
      icon: "ClipboardList"
    },
    {
      title: "Month-of Coordination",
      description: "Wedding coordination services starting 4-6 weeks before — timeline, vendor management, rehearsal.",
      icon: "Clock"
    },
    {
      title: "Weekend Coordination",
      description: "For destination weddings or multi-day celebrations — comprehensive wedding coordination services.",
      icon: "CheckCheck"
    },
    {
      title: "Vendor Liaison",
      description: "Wedding coordination services that manage all vendor communications and logistics.",
      icon: "Users"
    },
    {
      title: "Rehearsal Direction",
      description: "Professional wedding coordination services for ceremony practice and party organization.",
      icon: "Sparkles"
    },
    {
      title: "Emergency Support",
      description: "Wedding coordination services that prepare backup plans and handle last-minute issues.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Plan Review",
      description: "Wedding coordination services begin with understanding your complete vision and existing plans."
    },
    {
      title: "Vendor Coordination",
      description: "We connect with all vendors, confirm details, and create comprehensive timelines."
    },
    {
      title: "Rehearsal",
      description: "Wedding coordination services direct your rehearsal ensuring everyone knows their role."
    },
    {
      title: "Perfect Execution",
      description: "On your day, we orchestrate every element while you enjoy every moment."
    }
  ],

  testimonials: [
    {
      name: "Tanvi & Rohan",
      event: "Self-Planned Wedding",
      text: "We did all our own planning but knew we couldn't coordinate on the day. Best decision ever! The wedding coordination services in Vadodara handled everything — vendors, timing, emergencies. We actually enjoyed our wedding!"
    },
    {
      name: "Neelam & Akash",
      event: "Family-Planned Wedding",
      text: "Family had done most planning, but nobody wanted to manage on the day. The wedding coordination services were a lifesaver. They kept everything on track while family actually celebrated with us."
    },
    {
      name: "Preeti & Darshan",
      event: "Destination Wedding",
      text: "Coming from Mumbai for a Vadodara wedding, we needed local wedding coordination services. They liaised with all vendors, managed the weekend schedule, and made our destination wedding stress-free!"
    }
  ],

  faqs: [
    {
      question: "What's the difference between wedding coordination services and full wedding planning?",
      answer: "Full wedding planning starts from scratch — helping choose vendors, design concepts, manage budgets. Wedding coordination services in Vadodara focus on the final 4-8 weeks and the wedding day itself, taking your existing plans and ensuring perfect execution. Coordination assumes planning is already done."
    },
    {
      question: "When should I book wedding coordination services?",
      answer: "Book wedding coordination services 3-6 months before your wedding. This gives time to understand your plans, meet key vendors, and ensure smooth handover. Last-minute bookings (less than 1 month) are possible but not ideal."
    },
    {
      question: "What do wedding coordination services cost in Vadodara?",
      answer: "Day-of wedding coordination services range from ₹25,000-50,000. Month-of coordination (starting 4-6 weeks before) ranges from ₹40,000-75,000. Weekend packages for multi-day events range from ₹75,000-1,50,000."
    },
    {
      question: "Can I hire wedding coordination services even if I have a venue coordinator?",
      answer: "Absolutely! Venue coordinators focus on their venue's logistics only. Wedding coordination services in Vadodara manage ALL vendors, the complete timeline, and your full celebration — far beyond what venue coordinators provide."
    },
    {
      question: "What documents do wedding coordination services need from me?",
      answer: "We need vendor contracts, contact information, payment schedules, floor plans, seating charts, and any notes about your vision. Wedding coordination services create master timelines from your existing information."
    },
    {
      question: "Will wedding coordination services attend my rehearsal?",
      answer: "Yes! Professional wedding coordination services include directing your rehearsal — walking through the ceremony, positioning the wedding party, and ensuring everyone understands the day's flow."
    }
  ],

  ctaHeadline: "Focus on Love, Not Logistics",
  ctaSubtext: "Your wedding day should be about emotions, not coordination. Let professional wedding coordination services in Vadodara handle the details."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Coordinated Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Perfect Timing" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Flow" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bride Ready" },
  { id: 5, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Setup Check" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Detail Management" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Moments" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Reception Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Setup" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Guest Management" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Flow" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "partial-wedding-planning-in-vadodara", title: "Partial Planning" },
  { slug: "wedding-management-services-in-vadodara", title: "Wedding Management" },
  { slug: "full-wedding-planning-in-vadodara", title: "Full Planning" },
  { slug: "wedding-organizer-in-vadodara", title: "Wedding Organizer" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Planner" },
];

export const metadata: Metadata = {
  title: "Wedding Coordination Services in Vadodara | Day-of Coordinator | Event Management",
  description: "Professional wedding coordination services in Vadodara. Day-of coordination, month-of management & timeline execution. Enjoy your wedding stress-free.",
  keywords: "wedding coordination services vadodara, day of coordinator vadodara, wedding coordinator vadodara, month of coordination vadodara, wedding day management vadodara",
  openGraph: {
    title: "Wedding Coordination Services in Vadodara | Perfectly Orchestrated",
    description: "Wedding coordination services in Vadodara. Professional day-of coordination for stress-free celebrations.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-coordination-services-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Coordination Services Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Coordination Services Vadodara",
    description: "Professional coordination for your planned wedding. Flawless execution guaranteed.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-coordination-services-in-vadodara/",
  },
};

export default function WeddingCoordinationServicesVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="w-5 h-5 text-sky-200" />
                <span className="text-sky-200">Day-of Coordination Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-sky-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-cyan-200" />
                  <span>Timeline Experts</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCheck className="w-5 h-5 text-teal-200" />
                  <span>Flawless Execution</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 px-6 py-3 rounded-full font-bold hover:bg-sky-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Coordination Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need wedding coordination services in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Coordinated
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ClipboardList className="w-6 h-6 text-sky-600" />
                <h3 className="text-xl font-bold text-sky-700">
                  Coordination Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding coordination services Vadodara • Day-of management</p>
              <KeywordEnquiryForm 
                keyword="Wedding Coordination Services Vadodara" 
                source="keyword-page-wedding-coordination-services-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ClipboardList className="w-10 h-10 text-sky-600 mb-2" />
              <p className="font-bold text-2xl">300+</p>
              <p className="text-gray-600 text-sm">Weddings Coordinated</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-cyan-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Timeline Success</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-teal-600 mb-2" />
              <p className="font-bold text-2xl">Zero</p>
              <p className="text-gray-600 text-sm">Coordination Stress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Wedding Coordination Services Explained
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-cyan-600">$1</em>')
                      .replace(/•/g, '<span class="text-teal-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Coordination Services Include
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive wedding coordination services for flawless execution in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.coordinationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-sky-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-sky-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              Wedding Coordination Service Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible wedding coordination services to match your needs in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-cyan-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full group-hover:bg-sky-500 transition-colors">
                    <ClipboardList className="w-6 h-6 text-cyan-600 group-hover:text-white" />
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
              <Images className="inline-block w-8 h-8 mr-2 text-sky-600" />
              Coordinated Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfectly executed weddings through our coordination services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Coordination Services Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Coordination Services</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wedding Coordination Process
            </h2>
            <p className="text-sky-100 max-w-2xl mx-auto">
              How our wedding coordination services create flawless execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-sky-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-cyan-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sky-100 text-sm">{step.description}</p>
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
              Coordination Services Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who enjoyed stress-free wedding days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 35}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-300"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-sky-600">{testimonial.event}</p>
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
              Coordination Services FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-sky-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Coordination Services Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-teal-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 px-8 py-4 rounded-full font-bold hover:bg-sky-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Coordination Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need wedding coordination services in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Coordinator
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Planning Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-full transition-colors border border-sky-200 hover:border-sky-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Coordination Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready for a stress-free wedding day? Let's discuss coordination services.
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
              href="https://wa.me/916353583148?text=Hi, I need wedding coordination services!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Coordination Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need wedding coordination services!"
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
