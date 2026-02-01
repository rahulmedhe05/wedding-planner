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
  Church,
  Cross,
  Music,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Christian Wedding Planner Vadodara — Church Ceremonies & Receptions",
  heroSubtitle: "Beautiful Christian wedding celebrations that honor your faith with elegant church ceremonies, heartfelt vows, and joyful receptions.",
  
  mainContent: `
A Christian wedding is a covenant before God — a sacred promise exchanged in His presence, witnessed by loved ones, sealed with prayer. The beauty of walking down the aisle, the solemnity of vows, the joy of celebration.

This is why you need a Christian wedding planner in Vadodara who understands.

**The sacredness of Christian ceremonies:**

Christian weddings center on the church ceremony — the exchange of vows, the blessing of rings, the pronouncement that joins two into one. It's a worship service as much as a wedding.

Your Christian wedding planner in Vadodara ensures:
• Proper church ceremony coordination
• Pastor/priest coordination and requirements
• Pre-marital counseling scheduling
• Traditional ceremony elements honored
• Scripture readings and hymn selection
• Unity candle or sand ceremony arrangements
• Church decoration guidelines followed

**Celebration planning excellence:**

After the sacred ceremony comes joyful celebration. The reception, the dinner, the first dance, the toasts — all planned with the same care given to the ceremony itself.

A Christian wedding planner in Vadodara creates:
• Elegant reception venues
• Graceful dinner arrangements
• Traditional cake cutting ceremonies
• First dance and parent dance moments
• Meaningful toast organization
• Entertainment within your preferences

**Denominational understanding:**

Catholic, Protestant, Orthodox, CSI, CNI — Christian traditions vary beautifully. A Christian wedding planner must understand your specific denominational requirements.

Whether you need:
• Full nuptial mass with communion
• Protestant worship-style ceremony
• Orthodox traditions honored
• Inter-denominational coordination
• Civil and church ceremony combination

Your Christian wedding planner in Vadodara navigates these with grace.

**Modern Christian celebrations:**

Today's Christian couples often want celebrations that honor tradition while embracing contemporary elegance. Your wedding can be both deeply spiritual and beautifully modern.

Christian wedding planner in Vadodara — where faith meets celebration, where sacred vows become joyful unions.
  `,

  christianElements: [
    {
      title: "Church Ceremony",
      description: "Sacred ceremony coordination by Christian wedding planner with proper protocols honored."
    },
    {
      title: "Pastor Coordination",
      description: "Christian wedding planner ensures smooth communication with officiating clergy."
    },
    {
      title: "Bridal Procession",
      description: "The beautiful walk down the aisle arranged perfectly by Christian wedding planner."
    },
    {
      title: "Reception Celebration",
      description: "Joyful post-ceremony celebration planned by your Christian wedding planner."
    },
    {
      title: "Wedding Choir/Music",
      description: "Hymns and worship songs coordinated by Christian wedding planner for sacred moments."
    },
    {
      title: "Unity Ceremony",
      description: "Candle, sand, or cord ceremonies arranged by Christian wedding planner with meaning."
    }
  ],

  services: [
    {
      title: "Complete Church Wedding",
      description: "End-to-end Christian wedding planner services from ceremony to reception planning.",
      icon: "Church"
    },
    {
      title: "Ceremony Coordination",
      description: "Christian wedding planner coordination with church and pastor for perfect ceremonies.",
      icon: "Cross"
    },
    {
      title: "Reception Excellence",
      description: "Beautiful celebrations planned by Christian wedding planner with joy and elegance.",
      icon: "Music"
    },
    {
      title: "Floral & Decor Design",
      description: "Church and venue decoration by Christian wedding planner within guidelines.",
      icon: "Sparkles"
    },
    {
      title: "Vendor Management",
      description: "Christian wedding planner coordinates photographers, caterers, musicians together.",
      icon: "Users"
    },
    {
      title: "Day-Of Coordination",
      description: "Seamless execution by Christian wedding planner on your blessed day.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Faith Understanding",
      description: "Christian wedding planner learns your denomination, church, and specific traditions."
    },
    {
      title: "Church Coordination",
      description: "Booking, requirements, and pastor coordination handled professionally."
    },
    {
      title: "Celebration Planning",
      description: "Christian wedding planner designs reception honoring your preferences."
    },
    {
      title: "Blessed Execution",
      description: "Your sacred ceremony and joyful celebration executed perfectly."
    }
  ],

  testimonials: [
    {
      name: "Rebecca & Joshua",
      event: "Traditional Church Wedding",
      text: "Our Christian wedding planner in Vadodara understood exactly what a church wedding means to us. The ceremony was beautiful, the reception was joyful, and every detail honored our faith. Truly blessed experience!"
    },
    {
      name: "Maria & Daniel",
      event: "Catholic Nuptial Mass",
      text: "Finding a Christian wedding planner who understood Catholic wedding requirements was crucial. The coordination with our parish, the nuptial mass arrangements — everything was handled with such care and respect."
    },
    {
      name: "Sarah & Peter",
      event: "Elegant Reception",
      text: "Our Christian wedding planner created the most beautiful celebration! From the church ceremony to the reception, every moment was perfect. The attention to both traditional elements and modern touches was amazing!"
    }
  ],

  faqs: [
    {
      question: "Do you understand different Christian denomination requirements?",
      answer: "Yes! Our Christian wedding planner in Vadodara has experience with Catholic, Protestant, Orthodox, CSI, CNI, and other denominations. We understand nuptial mass requirements, Protestant ceremony traditions, and denominational variations to ensure your wedding honors your specific faith tradition."
    },
    {
      question: "Can you coordinate with our church and pastor?",
      answer: "Absolutely! Your Christian wedding planner handles all church coordination — booking confirmations, pastor meeting schedules, ceremony requirements, rehearsal arrangements, and decoration guidelines. We ensure everything meets church protocols."
    },
    {
      question: "What about church decoration restrictions?",
      answer: "Churches often have specific decoration guidelines. Your Christian wedding planner understands these restrictions and creates beautiful arrangements within permitted parameters — ensuring both compliance and elegance."
    },
    {
      question: "Do you plan Catholic nuptial mass ceremonies?",
      answer: "Yes! Our Christian wedding planner coordinates full nuptial mass ceremonies including communion arrangements, altar coordination, scripture reading selections, and all liturgical requirements. We work closely with your parish for perfect execution."
    },
    {
      question: "Can you plan both ceremony and reception?",
      answer: "Absolutely! Christian wedding planner services cover complete wedding planning — from sacred church ceremony to joyful reception. We ensure seamless transition between venues and consistent styling throughout."
    },
    {
      question: "What makes your Christian wedding planning different?",
      answer: "Our Christian wedding planner approaches your celebration with reverence for its spiritual significance. We don't just plan events — we honor the sacred covenant you're making, ensuring your wedding reflects your faith beautifully."
    }
  ],

  ctaHeadline: "Celebrate Your Sacred Covenant",
  ctaSubtext: "Let a Christian wedding planner in Vadodara create celebrations that honor your faith with beautiful ceremonies and joyful receptions."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Church Ceremony" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Walking the Aisle" },
  { id: 3, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Beauty" },
  { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Reception Florals" },
  { id: 5, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Joyful Moment" },
  { id: 6, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Elegant Setup" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=600&fit=crop", title: "First Dance" },
  { id: 9, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Celebration" },
  { id: 10, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", title: "Ring Exchange" },
  { id: 11, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Wedding Feast" },
  { id: 12, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Beautiful Venue" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "religious-wedding-planner-vadodara", title: "Religious Wedding" },
  { slug: "church-wedding-planner-vadodara", title: "Church Wedding" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
  { slug: "wedding-catering-services-vadodara", title: "Catering Services" },
];

export const metadata: Metadata = {
  title: "Christian Wedding Planner Vadodara | Church Ceremonies | Catholic & Protestant",
  description: "Expert Christian wedding planner in Vadodara. Beautiful church ceremonies, Catholic nuptial mass, Protestant weddings & elegant receptions with faith & elegance.",
  keywords: "christian wedding planner vadodara, church wedding planner vadodara, catholic wedding vadodara, protestant wedding vadodara, christian wedding vadodara",
  openGraph: {
    title: "Christian Wedding Planner Vadodara | Church Ceremonies with Grace",
    description: "Christian wedding planner in Vadodara. Beautiful church ceremonies honoring your faith.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/christian-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Christian Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Wedding Planner Vadodara",
    description: "Beautiful church wedding celebrations with faith and elegance.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/christian-wedding-planner-vadodara/",
  },
};

export default function ChristianWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Church className="w-5 h-5 text-blue-200" />
                <span className="text-blue-200">Christian Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Church className="w-5 h-5 text-blue-200" />
                  <span>Church Ceremonies</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Cross className="w-5 h-5 text-purple-200" />
                  <span>All Denominations</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Wedding Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I need a Christian wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Plan Church Wedding
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Church className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-700">
                  Christian Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Christian wedding planner Vadodara • Church ceremonies</p>
              <KeywordEnquiryForm 
                keyword="Christian Wedding Planner Vadodara" 
                source="keyword-page-christian-wedding-planner-vadodara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Church className="w-10 h-10 text-blue-600 mb-2" />
              <p className="font-bold text-2xl">150+</p>
              <p className="text-gray-600 text-sm">Church Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-indigo-600 mb-2" />
              <p className="font-bold text-2xl">All</p>
              <p className="text-gray-600 text-sm">Denominations</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">10+</p>
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
              Meaningful Christian Wedding Planning
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-indigo-600">$1</em>')
                      .replace(/•/g, '<span class="text-blue-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Christian Elements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Christian Wedding Elements We Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every sacred moment honored by your Christian wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.christianElements.map((element, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-blue-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Church className="w-5 h-5 text-blue-600" />
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
              Christian Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for beautiful Christian celebrations in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-indigo-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-blue-500 transition-colors">
                    <Church className="w-6 h-6 text-indigo-600 group-hover:text-white" />
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
              Christian Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful celebrations created by our Christian wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Christian Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Church Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Christian Wedding Planning Journey
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              How your Christian wedding planner creates blessed celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-blue-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.description}</p>
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
              Christian Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who celebrated blessed unions with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 35}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-300"
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
              Christian Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop"
          alt="Christian Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Church Wedding Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I need a Christian wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              WhatsApp Wedding Team
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
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors border border-blue-200 hover:border-blue-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Christian Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to plan your blessed celebration? Let's begin your journey together.
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
              href="https://wa.me/916353583148?text=Hi, I need a Christian wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Christian Wedding Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I need a Christian wedding planner!"
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
