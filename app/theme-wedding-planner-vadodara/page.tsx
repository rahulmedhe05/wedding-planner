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
  Wand2,
  Drama,
} from "lucide-react";

// Unique content for this keyword page
const pageContent = {
  heroTitle: "Theme Wedding Planner Vadodara — Where Imagination Meets Celebration",
  heroSubtitle: "From Bollywood romance to vintage elegance, from royal durbar to beach paradise. Your theme wedding planner transforms dreams into immersive experiences.",
  
  mainContent: `
Some couples dream of a fairy tale wedding. Others imagine Bollywood glamour. Still others envision rustic charm or royal grandeur. What's your dream?

As a theme wedding planner in Vadodara, we believe your wedding should be a portal — a gateway that transports you and your guests into a world created just for your love story.

**Beyond decoration — immersive storytelling:**

A theme wedding planner doesn't just decorate. We design experiences. Every element — from invitations to farewell gifts — weaves into a cohesive narrative that reflects your personality, your relationship, and your dreams.

Your theme wedding planner in Vadodara crafts:
• Complete visual narratives that immerse guests
• Coordinated elements across all wedding functions
• Custom props and installations that define spaces
• Attire guidance that complements your theme
• Entertainment that enhances the story
• Menu curation that fits your world

**Popular themes we create:**

*Bollywood Romance:* Film-style stages, dramatic lighting, movie-poster invites, dance performances, star-worthy photo ops. Your theme wedding planner brings filmy dreams to life.

*Vintage Elegance:* Old-world charm with antique furniture, sepia tones, classic cars, gramophone music, elegant serif typography. Timeless beauty orchestrated by your theme wedding planner.

*Rustic Charm:* Barn-style setups, burlap accents, fairy lights, wildflower arrangements, farm-fresh cuisine. Your theme wedding planner creates pastoral perfection.

*Royal Indian:* Palatial grandeur with durbar setups, rich fabrics, traditional elements, royal processions. Theme wedding planner specialty for heritage lovers.

*Beach Paradise:* Coastal vibes with blue palettes, shells, flowing fabrics, sunset ceremonies, seafood feasts. Theme wedding planner magic for destination feels.

*Enchanted Forest:* Whimsical woodland with fairy lights, moss, greenery walls, ethereal lighting, nature-inspired details. Theme wedding planner fantasy.

**Custom themes:**

The best theme wedding planner in Vadodara doesn't limit you to preset options. Tell us your passions — travel, books, music, films, eras — and we'll create a theme uniquely yours. Your story deserves original storytelling.

Let your wedding be more than an event. Let it be a world.
  `,

  themeIdeas: [
    {
      title: "Bollywood Glamour",
      description: "Theme wedding planner magic: Red carpets, paparazzi walls, filmy stages, dramatic entries."
    },
    {
      title: "Vintage Victorian",
      description: "Elegant era styling: Classic furniture, lace details, muted palettes. Theme wedding planner artistry."
    },
    {
      title: "Tropical Paradise",
      description: "Island vibes: Palm fronds, vibrant colors, beachy elements. Theme wedding planner destination feels."
    },
    {
      title: "Minimalist Modern",
      description: "Clean aesthetics: Geometric shapes, monochrome palettes, architectural details. Modern theme wedding planner vision."
    },
    {
      title: "Enchanted Garden",
      description: "Floral fantasy: Living walls, hanging gardens, botanical abundance. Theme wedding planner nature magic."
    },
    {
      title: "Rustic Romance",
      description: "Country charm: Wood textures, mason jars, wildflowers, organic elements. Theme wedding planner warmth."
    }
  ],

  services: [
    {
      title: "Theme Concept Development",
      description: "Your theme wedding planner discovers your vision and develops a cohesive concept that runs through every element.",
      icon: "Palette"
    },
    {
      title: "Complete Visual Design",
      description: "Theme wedding planner creates mood boards, color palettes, and visual guides that define your celebration.",
      icon: "Wand2"
    },
    {
      title: "Custom Prop Creation",
      description: "Unique installations, backdrops, and props designed specifically for your theme. Theme wedding planner artistry.",
      icon: "Drama"
    },
    {
      title: "Coordinated Decor",
      description: "Every function — from mehendi to reception — follows your theme with your theme wedding planner's guidance.",
      icon: "Sparkles"
    },
    {
      title: "Entertainment Curation",
      description: "Theme wedding planner sources performers, music, and activities that enhance your chosen narrative.",
      icon: "Star"
    },
    {
      title: "Guest Experience Design",
      description: "From arrivals to departures, your theme wedding planner ensures guests live your story.",
      icon: "Heart"
    }
  ],

  processSteps: [
    {
      title: "Dream Discovery",
      description: "Your theme wedding planner explores your interests, stories, and vision."
    },
    {
      title: "Concept Creation",
      description: "We develop a unique theme concept with detailed visual direction."
    },
    {
      title: "Element Curation",
      description: "Every detail sourced and created to serve your theme perfectly."
    },
    {
      title: "Immersive Execution",
      description: "Your theme wedding planner brings your world to life completely."
    }
  ],

  testimonials: [
    {
      name: "Shruti & Mohit",
      event: "Travel Theme Wedding",
      text: "We love traveling together, and our theme wedding planner in Vadodara created a 'Journey of Love' theme — each function was a different destination! Mehendi was Morocco, sangeet was Paris, wedding was India. Guests felt like they traveled the world!"
    },
    {
      name: "Neha & Ankit",
      event: "Bollywood Theme Wedding",
      text: "We wanted full Bollywood drama! Our theme wedding planner delivered — red carpet, paparazzi corners, film posters with our faces, dance performances, the works! Felt like a premiere, not just a wedding!"
    },
    {
      name: "Pooja & Chirag",
      event: "Vintage Theme Wedding",
      text: "Vintage-style was our vision — sepia tones, old Bollywood songs, vintage props, classic cars. The theme wedding planner sourced antiques, designed everything in old-world style. Pure elegance!"
    }
  ],

  faqs: [
    {
      question: "What can a theme wedding planner do that regular planners can't?",
      answer: "A theme wedding planner specializes in creating immersive experiences. While regular planners focus on logistics and standard decor, a theme wedding planner in Vadodara develops complete visual narratives, sources or creates custom props, coordinates all elements into a cohesive story, and ensures every touchpoint reinforces your theme."
    },
    {
      question: "How do I choose the right theme for my wedding?",
      answer: "Your theme wedding planner will guide you through discovery sessions exploring your interests, relationship story, aesthetic preferences, and dreams. Sometimes themes emerge from shared hobbies, memorable dates, dream destinations, or simply colors and moods that resonate. Your theme should feel authentically you!"
    },
    {
      question: "Are theme weddings more expensive than regular weddings?",
      answer: "Theme weddings can range from budget-friendly to elaborate depending on complexity. Simple themes with color coordination might add 10-20% while elaborate custom installations could double decor costs. Your theme wedding planner can work within any budget to maximize impact."
    },
    {
      question: "Can you do custom themes we create?",
      answer: "Absolutely! The best theme wedding planner doesn't limit you to preset options. Whether it's a Harry Potter theme, a 70s disco theme, or something completely original, we'll bring your unique vision to life. Your imagination is the only limit!"
    },
    {
      question: "How does the theme extend across all wedding functions?",
      answer: "Your theme wedding planner ensures consistency across mehendi, sangeet, wedding, and reception. This might mean evolving interpretations of the theme (like different destinations for a travel theme) or consistent elements with variations (same color palette, different applications)."
    },
    {
      question: "What if family members don't understand modern themes?",
      answer: "A skilled theme wedding planner respects tradition while introducing creative elements. We often blend themes with cultural elements — a royal Indian theme satisfies traditional parents while allowing creative expression. We'll help bridge generational preferences."
    }
  ],

  ctaHeadline: "What's Your Dream World?",
  ctaSubtext: "Every couple deserves a wedding that feels like stepping into their shared dream. Tell your theme wedding planner in Vadodara what you imagine."
};

// Gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop", title: "Elegant Theme" },
  { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Royal Setup" },
  { id: 3, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Creative Decor" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Styled Bride" },
  { id: 5, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Themed Ceremony" },
  { id: 6, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Vintage Vibes" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Romantic Theme" },
  { id: 8, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Floral Fantasy" },
  { id: 9, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Theme Dining" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Styled Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Heritage Theme" },
  { id: 12, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Themed Details" },
];

// Related keywords for internal linking
const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-decor-planning-in-vadodara", title: "Decor Planning" },
  { slug: "royal-wedding-planner-vadodara", title: "Royal Wedding" },
  { slug: "luxury-wedding-planner-vadodara", title: "Luxury Wedding" },
  { slug: "destination-wedding-planner-vadodara", title: "Destination Wedding" },
  { slug: "best-wedding-planner-in-vadodara", title: "Best Planner" },
];

export const metadata: Metadata = {
  title: "Theme Wedding Planner Vadodara | Creative Wedding Themes | Unique Concepts",
  description: "Creative theme wedding planner in Vadodara. Bollywood, vintage, royal, rustic & custom themes. Transform your wedding into an immersive experience.",
  keywords: "theme wedding planner vadodara, theme wedding vadodara, bollywood theme wedding vadodara, vintage wedding planner vadodara, creative wedding planner vadodara",
  openGraph: {
    title: "Theme Wedding Planner Vadodara | Where Imagination Meets Celebration",
    description: "Theme wedding planner in Vadodara. Immersive wedding experiences with creative themes.",
    type: "website",
    locale: "en_IN",
    url: "https://weddingplannersinvadodara.in/theme-wedding-planner-vadodara/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Theme Wedding Planner Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theme Wedding Planner Vadodara",
    description: "Creative wedding themes that transport you to another world.",
  },
  alternates: {
    canonical: "https://weddingplannersinvadodara.in/theme-wedding-planner-vadodara/",
  },
};

export default function ThemeWeddingPlannerVadodaraPage() {
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
      <section className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-pink-200" />
                <span className="text-pink-200">Theme Wedding Specialists</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {pageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {pageContent.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Wand2 className="w-5 h-5 text-yellow-300" />
                  <span>Creative Magic</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>5★ Service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Drama className="w-5 h-5 text-pink-200" />
                  <span>Unique Themes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-full font-bold hover:bg-pink-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Creative Consultation
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I want a theme wedding planner in Vadodara"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Share Your Vision
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Palette className="w-6 h-6 text-violet-600" />
                <h3 className="text-xl font-bold text-violet-700">
                  Theme Wedding Enquiry
                </h3>
              </div>
              <p className="text-gray-500 text-center text-sm mb-4">Theme wedding planner Vadodara • Creative concepts</p>
              <KeywordEnquiryForm 
                keyword="Theme Wedding Planner Vadodara" 
                source="keyword-page-theme-wedding-planner-vadodara"
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
              <Palette className="w-10 h-10 text-violet-600 mb-2" />
              <p className="font-bold text-2xl">50+</p>
              <p className="text-gray-600 text-sm">Unique Themes</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">5.0★</p>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-fuchsia-600 mb-2" />
              <p className="font-bold text-2xl">200+</p>
              <p className="text-gray-600 text-sm">Theme Weddings</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">Vadodara's</p>
              <p className="text-gray-600 text-sm">Creative Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Theme Wedding Planner Expertise
            </h2>
            <div className="prose prose-lg max-w-none">
              {pageContent.mainContent.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-violet-700">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-fuchsia-600">$1</em>')
                      .replace(/•/g, '<span class="text-pink-500">•</span>')
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Theme Ideas Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Theme Wedding Ideas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inspiring theme wedding planner concepts we bring to life in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.themeIdeas.map((theme, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-gradient-to-r from-violet-500 to-pink-500"
                style={{ borderTopColor: ['#8b5cf6', '#d946ef', '#ec4899', '#f43f5e', '#f97316', '#eab308'][index] }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-violet-500 to-pink-500 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{theme.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{theme.description}</p>
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
              Theme Wedding Planner Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive creative services from your theme wedding planner in Vadodara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-fuchsia-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-violet-100 to-pink-100 p-3 rounded-full group-hover:from-violet-500 group-hover:to-pink-500 transition-all">
                    <Wand2 className="w-6 h-6 text-fuchsia-600 group-hover:text-white" />
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
              Theme Wedding Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creative worlds brought to life by our theme wedding planner team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Theme Wedding Planner Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">Theme Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Theme Wedding Creative Process
            </h2>
            <p className="text-pink-100 max-w-2xl mx-auto">
              How our theme wedding planner transforms imagination into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageContent.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-violet-600 text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < pageContent.processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-pink-200" />
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
              Theme Wedding Planner Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Couples who stepped into their dream worlds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-violet-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 45}`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-fuchsia-300"
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
              Theme Wedding Planner FAQs
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
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&h=600&fit=crop"
          alt="Theme Wedding Planner Vadodara CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-pink-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageContent.ctaHeadline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {pageContent.ctaSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-full font-bold hover:bg-pink-100 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Creative Consultation
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi! I want a theme wedding planner in Vadodara!"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all text-lg"
            >
              Share Your Theme Ideas
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Related Creative Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}/`}
                className="px-4 py-2 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-full transition-colors border border-violet-200 hover:border-violet-300"
              >
                {keyword.title} Vadodara
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Theme Wedding Planner
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to create your unique wedding world? Tell us your vision.
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
              href="https://wa.me/916353583148?text=Hi, I want a theme wedding planner!"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Creative Team
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/916353583148?text=Hi, I want a theme wedding planner!"
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
