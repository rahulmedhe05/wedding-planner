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
  Clock,
  Shield,
} from "lucide-react";

// Page-specific content - Unique, emotionally engaging
const pageContent = {
  heroTitle: "Wedding Planner in Vadodara — Your Love Story Awaits",
  heroSubtitle: "As your trusted wedding planner in Vadodara, we don't just plan events. We craft the first chapter of your forever — with heart, soul, and attention to every detail.",
  
  mainContent: `
Remember the moment you said yes? That rush of joy, the tears, the laughter — as your wedding planner in Vadodara, we want that feeling woven into every second of your celebration.

We're not your typical wedding planners in Vadodara. We're dreamers, listeners, and detail-obsessed romantics who believe your wedding should feel like *you*. Not a Pinterest board come to life, but something deeper — a celebration that makes your grandmother cry happy tears and your best friend say, "This is SO them."

**Why choose a wedding planner in Vadodara?** This city has its own rhythm. From the grandeur of Lakshmi Vilas Palace-inspired celebrations to intimate garden affairs near Sayaji Gardens, every corner of Vadodara holds potential for magic. And as a local wedding planner, we know every inch of it — the hidden gems, the best vendors, the venues that photographs beautifully.

Over 15 years as wedding planners in Vadodara, we've had the privilege of being part of 500+ love stories. We've seen nervous grooms become confident, teary-eyed husbands. We've watched brides transform — not just in their lehengas, but in the way they glow when they walk toward their future.

**What makes our wedding planning services different?**

We listen. Really listen. Not just to what you want, but to what you're not saying. The way your eyes light up when you mention your grandmother's recipes. How you both laugh when talking about your first date disaster. These tiny details? They become the soul of your wedding celebration.

As experienced wedding planners, we don't believe in cookie-cutter celebrations. Your sangeet shouldn't look like everyone else's. Your pheras should feel sacred, personal, and deeply yours. Whether you need a complete wedding planner in Vadodara or partial planning support — we adapt to your needs.
  `,

  services: [
    {
      title: "Complete Wedding Planning in Vadodara",
      description: "From the first 'let's do this' to the final farewell, your wedding planner handles everything. You just focus on being in love.",
      icon: "Heart"
    },
    {
      title: "Venue Selection & Design",
      description: "As your Vadodara wedding planner, we'll find spaces that take your breath away and transform them into your dream wedding venue.",
      icon: "MapPin"
    },
    {
      title: "Wedding Vendor Coordination",
      description: "Our trusted network of Vadodara photographers, caterers, decorators, and artists — handpicked by your wedding planner over 15 years.",
      icon: "Users"
    },
    {
      title: "Day-of Wedding Coordination",
      description: "On your wedding day, you won't lift a finger. Your wedding planner handles the chaos so you can soak in every precious moment.",
      icon: "Calendar"
    },
    {
      title: "Wedding Budget Management",
      description: "Dream big, spend smart. As your wedding planner in Vadodara, we'll stretch every rupee without compromising on the magic.",
      icon: "Shield"
    },
    {
      title: "Guest Experience Design",
      description: "From welcome kits to farewell gifts — your wedding planner ensures guests feel the love from the moment they arrive in Vadodara.",
      icon: "Sparkles"
    }
  ],

  processSteps: [
    {
      title: "The First Conversation",
      description: "We meet over chai (or coffee, we don't judge) and you tell us everything — your vision, your worries, your weird ideas. Nothing is too small or too wild."
    },
    {
      title: "The Blueprint",
      description: "We create a detailed plan that captures your essence. Timelines, budgets, mood boards — everything laid out so you can breathe easy."
    },
    {
      title: "The Magic-Making",
      description: "We bring in our dream team — each vendor carefully selected to match your vision. You approve, we execute."
    },
    {
      title: "The Celebration",
      description: "You dance, you cry happy tears, you marry your person. We handle everything behind the scenes."
    }
  ],

  testimonials: [
    {
      name: "Priya & Rohan",
      event: "December 2024 Wedding",
      text: "They understood us better than we understood ourselves. When the dhol started playing our favorite song as a surprise, I knew we'd made the right choice. Best decision we made."
    },
    {
      name: "Ananya & Vikram", 
      event: "Palace Wedding, February 2024",
      text: "Planning a wedding from London seemed impossible until we found them. Every video call, every update — it felt like they were right there with us. Our guests are still talking about it."
    },
    {
      name: "Meera & Arjun",
      event: "Intimate Wedding, October 2024",
      text: "We wanted small and meaningful, not small and forgettable. They gave us exactly that — 50 guests, endless memories, and not a single moment of stress."
    }
  ],

  faqs: [
    {
      question: "How early should we hire a wedding planner in Vadodara?",
      answer: "Ideally, contact your wedding planner 8-12 months before to secure the best Vadodara venues and vendors. But we've pulled off stunning weddings in 3 months too — so if you're in a rush, don't panic. Just call your wedding planner."
    },
    {
      question: "What's included in wedding planner packages in Vadodara?",
      answer: "Everything from initial concept to final goodbye. Your wedding planner handles venue scouting, vendor negotiations, design, logistics, guest management, and day-of coordination. We tailor wedding planning packages based on what you need."
    },
    {
      question: "Can a wedding planner work within our budget?",
      answer: "Absolutely. As wedding planners in Vadodara, we've created magical celebrations across all budgets. Whether you have 5 lakhs or 50 lakhs, your wedding planner will make it count. Honest conversations about money from day one."
    },
    {
      question: "Do Vadodara wedding planners handle destination weddings?",
      answer: "Yes! As your wedding planner, we've planned weddings in Udaipur, Goa, Thailand, and even Tuscany. Vadodara is our home base, but your wedding planner can take your celebration anywhere love leads."
    },
    {
      question: "What if we just need a wedding planner on the day?",
      answer: "Our day-of wedding coordination package is perfect for couples who've done the planning but want an expert wedding planner on the big day. We take over so you can be fully present."
    },
    {
      question: "How involved will we need to be with our wedding planner?",
      answer: "As much or as little as you want. Some couples love being hands-on with their wedding planner; others want to show up and be surprised. Your Vadodara wedding planner adapts to your style."
    }
  ],

  ctaHeadline: "Your Forever Starts Here",
  ctaSubtext: "Let's have a conversation about your dream wedding. No pressure, no sales pitch — just two people who love weddings talking to someone who's found their person."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Bride & Groom" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Wedding Reception" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Wedding Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Wedding Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Wedding Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Dance" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Wedding Rings" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Wedding Bouquet" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Wedding Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Wedding Cake" },
  { id: 12, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Indian Wedding" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "best-wedding-planner-in-vadodara", title: "Best Wedding Planner" },
  { slug: "luxury-wedding-planner", title: "Luxury Wedding Planner" },
  { slug: "budget-wedding-planner", title: "Budget Wedding Planner" },
  { slug: "destination-wedding-planner", title: "Destination Wedding Planner" },
  { slug: "indian-wedding-planner-in-vadodara", title: "Indian Wedding Planner" },
  { slug: "wedding-decor-services-in-vadodara", title: "Wedding Decor Services" },
];

export const metadata: Metadata = {
  title: "Wedding Planner in Vadodara | Trusted Wedding Planning Since 2009",
  description: "Looking for a wedding planner in Vadodara who actually cares? 15+ years, 500+ happy couples, and countless magical moments. Let's plan your forever together.",
  keywords: "wedding planner in vadodara, vadodara wedding planner, wedding planning vadodara, wedding organizer vadodara, marriage planner vadodara",
  openGraph: {
    title: "Wedding Planner in Vadodara | Your Love Story, Beautifully Planned",
    description: "We don't just plan weddings — we craft the first chapter of your forever. 500+ couples trust us with their most important day.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-planner-in-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Planner in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Planner in Vadodara | 15+ Years of Creating Magic",
    description: "Your wedding day should feel like YOU. Let's create something unforgettable together.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-planner-in-vadodara/",
  },
};

export default function WeddingPlannerInVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-pink-700 via-rose-600 to-pink-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-300" />
                <span className="text-pink-200">Crafting Love Stories Since 2009</span>
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
                  <span>500+ Weddings</span>
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
                  Let&apos;s Talk
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm planning my wedding in Vadodara and would love to chat!"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold mb-2 text-center text-pink-700">
                Start Planning Your Dream Wedding
              </h3>
              <p className="text-gray-500 text-center text-sm mb-4">Free consultation • No obligations</p>
              <KeywordEnquiryForm 
                keyword="Wedding Planner in Vadodara" 
                source="keyword-page-wedding-planner-in-vadodara"
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
              <p className="text-gray-600 text-sm">Happy Couples</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-gray-600 text-sm">Google Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-red-500 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Happy Endings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Wedding Planner in Vadodara — Where Your Story Comes First
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
              Wedding Planner Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As your dedicated wedding planner in Vadodara, every service is designed around one goal — making your wedding day feel effortless and unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-200 transition-colors">
                    <Sparkles className="w-6 h-6 text-pink-600" />
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <Images className="inline-block w-8 h-8 mr-2 text-pink-600" />
              Weddings Planned by Your Vadodara Wedding Planner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real weddings, real couples, real magic — see what your wedding planner in Vadodara can create for you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Planner in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Vadodara</p>
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
              How Your Wedding Planner in Vadodara Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No chaos. No stress. Your wedding planner creates a clear path from &quot;we&apos;re engaged!&quot; to &quot;we&apos;re married!&quot;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-400" />
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
              Wedding Planner Reviews from Vadodara Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t take our word for it — hear from couples who chose us as their wedding planner in Vadodara
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 20}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-pink-600">{testimonial.event}</p>
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
              Wedding Planner in Vadodara — FAQs
            </h2>
            <div className="space-y-4">
              {pageContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.question}
                    <span className="text-2xl text-pink-600 group-open:rotate-45 transition-transform">+</span>
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
          alt="Wedding Planner CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-rose-800/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I'm looking for a wedding planner in Vadodara. Would love to discuss my wedding plans!"
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
            More Wedding Planner Services in Vadodara
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-700 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Your Wedding Planner in Vadodara
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Whether you have all the details figured out or just a dream — your wedding planner is here to make it real.
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
              href="https://wa.me/916353583148?text=Hi, I'm interested in wedding planning services in Vadodara!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start a Conversation on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a wedding planner in Vadodara!"
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
