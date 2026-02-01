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
  Gem,
  Clock,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Planners in Vadodara Who Actually Get It",
  heroSubtitle: "Finding the right wedding planners in Vadodara isn't about who has the fanciest portfolio. It's about finding people who understand that this day matters more than any other.",
  
  mainContent: `
You've probably searched "wedding planners in Vadodara" more times than you'd like to admit. And every website looks the same — generic promises, stock photos of flowers, and packages that don't quite fit what you're imagining.

We're different. We're wedding planners in Vadodara who started this journey because we fell in love with love itself.

**The thing about Vadodara weddings?** They're not like weddings anywhere else. There's a warmth here, a sense of community, a way families come together that's uniquely Gujarati yet beautifully diverse. The city has seen royal celebrations at heritage venues and simple, soulful ceremonies in family backyards — and we've been privileged to be part of both.

As wedding planners in Vadodara for over 15 years, we've learned something important: the best weddings aren't the most expensive ones. They're the ones where every guest feels like family. Where the bride's nervous laugh turns into the most radiant smile. Where the groom tears up during the varmala because he can't believe this is really happening.

**What do wedding planners in Vadodara actually do?**

Everything. And we mean everything. From that first excited phone call where you tell us all about how you met, to the moment we wave goodbye as you drive off into your new life together — we're there.

But here's what makes us different from other wedding planners in Vadodara: we don't just execute a checklist. We become invested in your story. We remember that you mentioned wanting your late grandfather's favorite song played during dinner. We notice when you're overwhelmed and need someone to just make decisions for a while. We celebrate your wins and problem-solve through challenges together.

**Our promise as your wedding planners in Vadodara:**

Your wedding will feel like coming home — surrounded by love, laughter, and the kind of details that make people ask, "How did they know to do that?"
  `,

  services: [
    {
      title: "Full-Service Wedding Planning",
      description: "As complete wedding planners in Vadodara, we handle every detail from engagement to reception. You enjoy the journey; we manage the logistics.",
      icon: "Heart"
    },
    {
      title: "Wedding Design & Styling",
      description: "Our Vadodara wedding planners create cohesive visual experiences — from invitations to farewell gifts, every element tells your story.",
      icon: "Gem"
    },
    {
      title: "Vendor Curation & Management",
      description: "We've spent 15 years building relationships with the best vendors. As your wedding planners, we bring this trusted network to your celebration.",
      icon: "Users"
    },
    {
      title: "Timeline & Logistics",
      description: "Wedding planners in Vadodara know that timing is everything. We create seamless schedules so every moment flows perfectly.",
      icon: "Clock"
    },
    {
      title: "Family Coordination",
      description: "Indian weddings mean big families with bigger opinions. As experienced wedding planners, we navigate family dynamics with grace.",
      icon: "Users"
    },
    {
      title: "On-Site Wedding Management",
      description: "On your wedding day, our planners are everywhere — solving problems before you even know they exist.",
      icon: "Calendar"
    }
  ],

  whyUs: [
    "We've planned 500+ weddings in Vadodara — we know this city inside out",
    "Our wedding planners speak fluent Gujarati, Hindi, and Wedding (yes, it's a language)",
    "We have exclusive relationships with Vadodara's top venues and vendors",
    "Transparent pricing — no hidden costs, no surprises, no awkward conversations",
    "We're available 24/7 in the final week because we know that's when panic sets in",
    "Our past couples become friends — we're still invited to anniversaries!"
  ],

  processSteps: [
    {
      title: "Discovery Call",
      description: "We listen to your dreams, understand your families, and start envisioning your perfect celebration together."
    },
    {
      title: "Custom Proposal",
      description: "Your wedding planners create a tailored plan — budget, timeline, design concepts — everything mapped out clearly."
    },
    {
      title: "Planning & Design",
      description: "We curate vendors, design experiences, and handle negotiations. You get to enjoy the fun parts of planning."
    },
    {
      title: "Your Wedding Week",
      description: "We take complete charge. You focus on being pampered, celebrated, and present for every magical moment."
    }
  ],

  testimonials: [
    {
      name: "Sneha & Kunal",
      event: "Grand Wedding, March 2024",
      text: "We interviewed five wedding planners in Vadodara before choosing them. The difference? They asked about our love story before asking about our budget. That told us everything we needed to know."
    },
    {
      name: "Riya & Dhruv",
      event: "Destination Wedding from Vadodara",
      text: "Planning our Udaipur wedding from Vadodara seemed crazy. These wedding planners made it feel effortless. Every video call, every site visit they did on our behalf — perfection."
    },
    {
      name: "Kavya & Siddharth",
      event: "Intimate Wedding, November 2024",
      text: "We wanted 80 guests max. Other wedding planners in Vadodara kept pushing us toward bigger. These guys celebrated our vision and made those 80 guests feel like the most special people on earth."
    }
  ],

  faqs: [
    {
      question: "How do I choose between wedding planners in Vadodara?",
      answer: "Look beyond portfolios. Meet them. Do they listen more than they talk? Do they ask about YOU, not just your budget? Do you feel comfortable being honest with them? The right wedding planners in Vadodara will feel like trusted friends from the first conversation."
    },
    {
      question: "What's the average cost of wedding planners in Vadodara?",
      answer: "Wedding planners in Vadodara typically charge 10-15% of your overall wedding budget, or offer fixed packages. We offer both options and are always transparent about costs from day one. No hidden fees, ever."
    },
    {
      question: "When should we book wedding planners in Vadodara?",
      answer: "Ideally 10-12 months before your wedding date. Popular wedding planners in Vadodara book up quickly, especially for peak wedding season (November-February). But we've also helped couples with shorter timelines — just reach out!"
    },
    {
      question: "Do wedding planners in Vadodara handle small weddings?",
      answer: "Absolutely! Some of our most meaningful work has been for intimate celebrations. Whether you're planning for 50 guests or 500, your wedding deserves professional wedding planners who care."
    },
    {
      question: "Can wedding planners help with destination weddings?",
      answer: "Yes! As established wedding planners in Vadodara, we've planned celebrations in Udaipur, Goa, Jaipur, and internationally. We handle all logistics so you can enjoy your destination stress-free."
    },
    {
      question: "What if our families have very different expectations?",
      answer: "Welcome to Indian weddings! As experienced wedding planners in Vadodara, we're experts at bridging family expectations. We help facilitate conversations, find compromises, and ensure everyone feels heard and honored."
    }
  ],

  ctaHeadline: "Let's Write Your Love Story Together",
  ctaSubtext: "The best wedding planners in Vadodara aren't just vendors — they're partners in creating the most important day of your life. Let's start that partnership today."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Couple Portrait" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Reception Setup" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Ceremony Moments" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Floral Design" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Venue Magic" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "First Dance" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Ring Details" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Art" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Sweet Moments" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Traditional Beauty" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Wedding Planner" },
  { slug: "top-wedding-planners-in-vadodara", title: "Top Wedding Planners" },
  { slug: "professional-wedding-planner-in-vadodara", title: "Professional Wedding Planner" },
  { slug: "wedding-planning-services", title: "Wedding Planning Services" },
  { slug: "wedding-coordination-services-in-vadodara", title: "Wedding Coordination" },
];

export const metadata: Metadata = {
  title: "Wedding Planners in Vadodara | Trusted by 500+ Couples Since 2009",
  description: "Searching for wedding planners in Vadodara who truly care? We've helped 500+ couples create unforgettable celebrations. Your love story deserves the best wedding planners.",
  keywords: "wedding planners in vadodara, vadodara wedding planners, wedding planners vadodara, best wedding planners vadodara, top wedding planners in vadodara",
  openGraph: {
    title: "Wedding Planners in Vadodara | Creating Magical Celebrations",
    description: "The best wedding planners in Vadodara don't just plan events — they craft experiences. 15+ years, 500+ happy couples, countless beautiful moments.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-planners-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Planners in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Planners in Vadodara | 500+ Love Stories Crafted",
    description: "Your wedding deserves planners who care as much as you do. Let's create magic together.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-planners-in-vadodara/",
  },
};

export default function WeddingPlannersInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-pink-300" />
                <span className="text-pink-200">Trusted Wedding Planners Since 2009</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>500+ Couples</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5" />
                  <span>15+ Years</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Talk to Us
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm looking for wedding planners in Vadodara for my upcoming wedding!"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Free Consultation
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold mb-2 text-center text-pink-700">
                Connect with Wedding Planners in Vadodara
              </h3>
              <p className="text-gray-500 text-center text-sm mb-4">Share your vision • Get expert guidance</p>
              <KeywordEnquiryForm 
                keyword="Wedding Planners in Vadodara" 
                source="keyword-page-wedding-planners-in-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Weddings Planned</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-gray-600 text-sm">Couple Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years of Trust</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-red-500 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Love Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Why Choose Our Wedding Planners in Vadodara?
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Services from Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our wedding planners in Vadodara offer comprehensive services designed to make your celebration flawless and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-rose-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors">
                    <Sparkles className="w-6 h-6 text-rose-600" />
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`${image.title} - Wedding Planners in Vadodara`}
                  className="w-full h-40 md:h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  loading="lazy"
                />
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Couples Choose Our Wedding Planners in Vadodara
              </h2>
              <div className="space-y-4">
                {pageContent.whyUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-rose-600" />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <Images className="inline-block w-8 h-8 mr-2 text-rose-600" />
              Portfolio: Wedding Planners in Vadodara at Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every image represents a couple who trusted our wedding planners in Vadodara with their most special day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Planners in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Vadodara Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Wedding Planners in Vadodara Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From first hello to final farewell — here&apos;s how our wedding planners in Vadodara bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-rose-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-rose-400" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
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
              What Couples Say About Wedding Planners in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from real couples who chose our wedding planners in Vadodara for their celebration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 30}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-rose-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-rose-600">{testimonial.event}</p>
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
              FAQs About Wedding Planners in Vadodara
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-rose-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Planners in Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-pink-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-700 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Wedding Planners
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I'm searching for the best wedding planners in Vadodara. Can we discuss my wedding?"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Wedding Planning Services in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-full transition-colors border border-rose-200 hover:border-rose-300"
              >
                {keyword.title} in Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-700 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Wedding Planners in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to meet the wedding planners in Vadodara who&apos;ll make your dream wedding happen? We&apos;re just a call away.
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
                <p className="font-bold">Visit Us</p>
                <p className="opacity-90">Vadodara, Gujarat</p>
              </div>
            </div>
            <a
              href="https://wa.me/916353583148?text=Hi, I want to connect with the best wedding planners in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Wedding Planners Now
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need wedding planners in Vadodara!"
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
