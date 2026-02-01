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
  Palette,
  Gem,
  Crown,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Wedding Makeup Artist Vadodara — Be the Most Beautiful Bride",
  heroSubtitle: "Professional bridal makeup artists creating stunning looks that enhance your natural beauty and make you feel like royalty on your special day.",
  
  mainContent: `
That moment when you first see yourself in the mirror as a bride — fully dressed, perfectly made up, glowing from within. This is a moment every bride dreams about.

A wedding makeup artist in Vadodara makes this moment magical.

**Why bridal makeup is different:**

Wedding makeup isn't everyday makeup enhanced. It's a specialized art form. Your wedding makeup artist understands that your look must last 12+ hours, photograph beautifully, complement your outfit, and make you feel absolutely stunning.

A professional wedding makeup artist delivers:
• HD makeup for photography
• Long-lasting formulas
• Skin-tone matching expertise
• Eye-enhancing techniques
• Flawless base creation
• Heat and humidity resistance

**Finding your perfect artist:**

Not every makeup artist understands bridal requirements. Your wedding makeup artist in Vadodara should have extensive experience with Indian weddings — the colors, the durations, the emotions, the photography.

What to look for in a wedding makeup artist:
• Extensive bridal portfolio
• Multiple function expertise
• Skin type understanding
• Outfit coordination sense
• Trial session offerings
• Reliable availability

**The bridal beauty journey:**

From engagement to reception, each event needs a different look. A skilled wedding makeup artist creates varied looks that complement each outfit and occasion while maintaining your personal style.

Through your wedding makeup artist:
• Engagement glam looks
• Mehendi fresh beauty
• Sangeet dramatic eyes
• Wedding day bridal perfection
• Reception sophisticated elegance
• Multiple outfit coordination

**More than just makeup:**

The best wedding makeup artist experience includes hair styling, draping assistance, and emotional support. On your wedding morning, your makeup artist becomes your calm anchor in the chaos.

Wedding makeup artist in Vadodara — where artistry meets emotion, where beauty meets confidence.
  `,

  makeupElements: [
    {
      title: "Bridal Makeup",
      description: "Stunning wedding day looks created by your wedding makeup artist for the main ceremony."
    },
    {
      title: "Hair Styling",
      description: "Elegant hairdos coordinated by your wedding makeup artist to complement your look."
    },
    {
      title: "Mehendi Look",
      description: "Fresh, glowing makeup by your wedding makeup artist for mehendi celebrations."
    },
    {
      title: "Engagement Beauty",
      description: "Glamorous looks by your wedding makeup artist for engagement ceremonies."
    },
    {
      title: "Reception Elegance",
      description: "Sophisticated evening looks from your wedding makeup artist for reception parties."
    },
    {
      title: "Trial Sessions",
      description: "Practice sessions with your wedding makeup artist to perfect your desired look."
    }
  ],

  services: [
    {
      title: "Artist Selection",
      description: "Finding the perfect wedding makeup artist matching your style and budget.",
      icon: "Palette"
    },
    {
      title: "Trial Coordination",
      description: "Scheduling and coordinating trial sessions with your wedding makeup artist.",
      icon: "Heart"
    },
    {
      title: "Multi-Event Planning",
      description: "Wedding makeup artist coordination for all your wedding functions.",
      icon: "Crown"
    },
    {
      title: "Family Makeup",
      description: "Wedding makeup artist services extended to family members as well.",
      icon: "Users"
    },
    {
      title: "Touch-Up Services",
      description: "Wedding makeup artist availability for day-of touch-ups and maintenance.",
      icon: "Sparkles"
    },
    {
      title: "Complete Beauty",
      description: "Wedding makeup artist packages including hair, draping, and accessories.",
      icon: "Gem"
    }
  ],

  processSteps: [
    {
      title: "Style Consultation",
      description: "Understanding your vision and connecting you with the right wedding makeup artist."
    },
    {
      title: "Portfolio Review",
      description: "Presenting curated wedding makeup artist options matching your aesthetic."
    },
    {
      title: "Trial Session",
      description: "Coordinating trial sessions to finalize your perfect bridal look."
    },
    {
      title: "Wedding Day Beauty",
      description: "Your wedding makeup artist transforms you into the most beautiful bride!"
    }
  ],

  testimonials: [
    {
      name: "Meera & Yash",
      event: "Traditional Wedding",
      text: "The wedding makeup artist team helped me find was absolutely incredible! She understood exactly what I wanted — traditional yet modern. I looked stunning in all my photos and the makeup lasted perfectly through all the rituals!"
    },
    {
      name: "Priya & Amit",
      event: "Destination Wedding",
      text: "Finding a wedding makeup artist who could travel for our destination wedding was challenging. But the coordination was perfect! She managed all four days of events and each look was more beautiful than the last!"
    },
    {
      name: "Shreya & Nikhil",
      event: "Contemporary Wedding",
      text: "I wanted a dewy, natural bridal look but was worried artists would go heavy. The wedding makeup artist recommendation was spot-on! She created the exact ethereal look I had dreamed of. Best decision ever!"
    }
  ],

  faqs: [
    {
      question: "How do you select a wedding makeup artist for me?",
      answer: "We understand your style preferences, skin type, budget, and wedding aesthetic first. Then we present curated wedding makeup artist options from our vetted network — professionals with proven bridal expertise and consistent quality."
    },
    {
      question: "Is a trial session necessary?",
      answer: "Absolutely! We always recommend a trial session with your wedding makeup artist before the wedding. This helps finalize the look, test products on your skin, and build comfort and trust. We coordinate all trial sessions."
    },
    {
      question: "Can one wedding makeup artist handle all my events?",
      answer: "Yes! Most professional wedding makeup artists offer multi-event packages. We coordinate schedules, different looks for each function, and ensure your wedding makeup artist is available for all events."
    },
    {
      question: "What about makeup for family members?",
      answer: "Wedding makeup artist packages often include family makeup — mother of bride, sisters, bridesmaids. We can coordinate group packages or recommend additional artists as needed."
    },
    {
      question: "How do I ensure my makeup lasts all day?",
      answer: "Professional wedding makeup artists use long-lasting, HD formulas and proper techniques. We also coordinate touch-up kits and can arrange for the wedding makeup artist to be available for touch-ups during the event."
    },
    {
      question: "What should I discuss during the trial?",
      answer: "Discuss your outfit colors, jewelry, venue lighting, and personal preferences with your wedding makeup artist. Share inspiration photos. The trial is also time to test products for any skin reactions."
    }
  ],

  ctaHeadline: "Be Your Most Beautiful Self",
  ctaSubtext: "Let us connect you with a wedding makeup artist in Vadodara who'll make you feel like the most stunning bride."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Ready" },
  { id: 3, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop", title: "Glowing Bride" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Getting Ready" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Elegant Look" },
  { id: 7, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Beauty Details" },
  { id: 8, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Happy Bride" },
  { id: 9, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Shot" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Bridal Glow" },
  { id: 11, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Family Joy" },
  { id: 12, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Special Moment" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "bridal-makeup-services-vadodara", title: "Bridal Makeup" },
  { slug: "wedding-photography-services-vadodara", title: "Photography" },
  { slug: "mehndi-artist-vadodara", title: "Mehndi Artist" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Décor Planning" },
];

export const metadata: Metadata = {
  title: "Wedding Makeup Artist Vadodara | Bridal Makeup & Hair Styling",
  description: "Expert wedding makeup artist services in Vadodara. Bridal makeup, hair styling, mehendi looks & all function beauty services for brides and families.",
  keywords: "wedding makeup artist vadodara, bridal makeup vadodara, bridal makeup artist vadodara, wedding makeup vadodara, hair styling vadodara",
  openGraph: {
    title: "Wedding Makeup Artist Vadodara | Beautiful Bridal Looks",
    description: "Professional wedding makeup artist services in Vadodara. Be your most beautiful self.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/wedding-makeup-artist-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Wedding Makeup Artist Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Makeup Artist Vadodara",
    description: "Professional bridal makeup creating stunning looks.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/wedding-makeup-artist-vadodara/",
  },
};

export default function WeddingMakeupArtistVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-rose-700 via-pink-700 to-fuchsia-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1920')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-rose-300" />
                <span className="text-rose-200">Bridal Beauty Excellence</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Palette className="w-5 h-5 text-rose-300" />
                  <span>HD Makeup</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Artists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-pink-300" />
                  <span>Bridal Specialists</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-rose-700 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Beauty Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a wedding makeup artist in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Find Perfect Artist
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Bridal Beauty Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Wedding Makeup Artist Vadodara • Stunning Looks</p>
              <KeywordEnquiryForm 
                keyword="Wedding Makeup Artist Vadodara" 
                source="keyword-page-wedding-makeup-artist-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Crown className="w-10 h-10 text-rose-600 mb-2" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-gray-600 text-sm">Brides Beautified</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">30+</p>
              <p className="text-gray-600 text-sm">Vetted Artists</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Happy Brides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Transform Into the Most Beautiful Bride
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-rose-600">$1</em>')
                      .replace(/•/g, '<span class="text-rose-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Bridal Beauty Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete beauty coordination through wedding makeup artist services in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.makeupElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-rose-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{element.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{element.description}</p>
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
              Complete Beauty Coordination
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end wedding makeup artist coordination services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-pink-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full group-hover:bg-rose-600 transition-colors">
                    <Palette className="w-6 h-6 text-pink-600 group-hover:text-white" />
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
      <section className="py-16 md:py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              <Images className="inline-block w-8 h-8 mr-2 text-rose-600" />
              Bridal Beauty Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stunning brides transformed by our wedding makeup artist network.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Makeup Artist Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Bridal Beauty</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-700 via-pink-700 to-fuchsia-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Bridal Beauty Journey
            </h2>
            <p className="text-pink-100 max-w-2xl mx-auto">
              How we connect you with your perfect wedding makeup artist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-rose-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-300" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-pink-100 text-sm">{step.description}</p>
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
              Beautiful Brides Share Their Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brides who found their perfect wedding makeup artist through us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 21}`}
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
      <section className="py-16 md:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Wedding Makeup Artist FAQs
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
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=600&fit=crop"
          alt="Wedding Makeup Artist Vadodara CTA"
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
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-700 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Beauty Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a wedding makeup artist in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Beauty Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Wedding Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-full transition-colors border border-rose-200 hover:border-rose-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-700 via-pink-700 to-fuchsia-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Beauty Team
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to find your perfect wedding makeup artist? Let's make you the most beautiful bride!
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
              href="https://wa.me/916353583148?text=Hi, I need a wedding makeup artist!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Beauty Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a wedding makeup artist!"
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
