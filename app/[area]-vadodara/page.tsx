import { vadodaraAreas, getAreaDisplayName, businesses } from "@/lib/business-config";
import { getWeddingPlannersContent } from "@/lib/content-generator";
import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { notFound } from "next/navigation";
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
  Clock,
  ArrowRight,
  Images,
  Sparkles,
  Calendar,
  Mail,
} from "lucide-react";

// Wedding gallery images
const areaGalleryImages = [
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

// Generate static params for all areas
export async function generateStaticParams() {
  return vadodaraAreas
    .filter((area) => area !== "vadodara") // Exclude "vadodara" itself as it would create /vadodara-vadodara/
    .map((area) => ({
      "area-vadodara": `${area}-vadodara`,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ "area-vadodara": string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams["area-vadodara"];
  
  // Handle undefined slug
  if (!slug) {
    return { title: "Page Not Found" };
  }
  
  // Extract area from slug (remove "-vadodara" suffix)
  const area = slug.replace(/-vadodara$/, "");
  
  if (!vadodaraAreas.includes(area) || area === "vadodara") {
    return { title: "Page Not Found" };
  }
  
  const areaName = getAreaDisplayName(area);
  
  return {
    title: `Best Wedding Planner in ${areaName}, Vadodara | Professional Wedding Planning Services`,
    description: `Looking for the best wedding planner in ${areaName}, Vadodara? We offer complete wedding planning services including venue selection, decoration, catering, photography & more. 15+ years experience. Call now!`,
    keywords: `wedding planner ${areaName}, wedding planner in ${areaName} vadodara, best wedding planner ${areaName}, wedding planning services ${areaName}, destination wedding ${areaName}, wedding decorator ${areaName}, vadodara wedding planner`,
    openGraph: {
      title: `Best Wedding Planner in ${areaName}, Vadodara`,
      description: `Professional wedding planning services in ${areaName}, Vadodara. Complete wedding solutions from venue selection to day-of coordination. 500+ happy couples.`,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
          width: 1200,
          height: 630,
          alt: `Wedding Planner in ${areaName}, Vadodara`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Wedding Planner in ${areaName}, Vadodara`,
      description: `Professional wedding planning services in ${areaName}. 15+ years experience, 500+ happy couples.`,
    },
    alternates: {
      canonical: `https://weddingplannersinvadodara.in/${area}-vadodara/`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ "area-vadodara": string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams["area-vadodara"];
  
  // Handle undefined slug
  if (!slug) {
    notFound();
  }
  
  // Extract area from slug (remove "-vadodara" suffix)
  const area = slug.replace(/-vadodara$/, "");
  
  if (!vadodaraAreas.includes(area) || area === "vadodara") {
    notFound();
  }
  
  const areaName = getAreaDisplayName(area);
  const content = getWeddingPlannersContent(area);
  const business = businesses[0]; // Wedding Planners business config
  
  // Get other areas for internal linking (exclude current area)
  const otherAreas = vadodaraAreas.filter((a) => a !== area && a !== "vadodara").slice(0, 15);

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
                <MapPin className="w-5 h-5" />
                <span className="text-pink-200">Serving {areaName}, Vadodara</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {content.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">
                {content.heroSubtitle}
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
                  Call Now
                </a>
                <a
                  href={`https://wa.me/916353583148?text=Hi, I'm looking for a wedding planner in ${areaName}, Vadodara`}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-center text-pink-700">
                Get Free Wedding Planning Quote
              </h3>
              <KeywordEnquiryForm 
                keyword={`Wedding Planner in ${areaName}`} 
                source={`area-page-${area}`}
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
              <p className="text-gray-600 text-sm">Customer Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-red-500 mb-2" />
              <p className="font-bold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Best Wedding Planner in {areaName}, Vadodara
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {content.aboutContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600" dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {areaGalleryImages.slice(0, 4).map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`${image.title} - Wedding in ${areaName}`}
                  className="w-full h-40 md:h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  loading="lazy"
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
              Our Wedding Planning Services in {areaName}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer comprehensive wedding planning services tailored to your dreams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.detailedServices.map((service, index) => (
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
              Our Wedding Portfolio in {areaName}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through some of our most memorable weddings planned in {areaName} and across Vadodara
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {areaGalleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={`${image.title} - Wedding Planner ${areaName}`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm opacity-80">{areaName}, Vadodara</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Specific Content */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              <MapPin className="inline-block w-8 h-8 mr-2 text-pink-600" />
              Wedding Planning in {areaName}
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {content.areaSpecificContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4" dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-700">$1</strong>')
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=500&fit=crop"
                alt={`Why choose our wedding planner in ${areaName}`}
                className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Choose Us for Your Wedding in {areaName}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-pink-600" />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Wedding Planning Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From your first call to your last dance, here's how we make your dream wedding in {areaName} a reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < content.processSteps.length - 1 && (
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
              What Our Couples Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from couples who trusted us with their special day
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial, index) => (
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
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
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
              Frequently Asked Questions - Wedding Planner in {areaName}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.cta.headline}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {content.cta.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/916353583148?text=Hi, I need a wedding planner in ${areaName}, Vadodara`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              Get Free Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            <MapPin className="inline-block w-8 h-8 mr-2 text-pink-600" />
            Wedding Planner in Other Areas of Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {otherAreas.map((otherArea) => (
              <Link
                key={otherArea}
                href={`/${otherArea}-vadodara/`}
                className="px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-full transition-colors border border-pink-200 hover:border-pink-300"
              >
                Wedding Planner in {getAreaDisplayName(otherArea)}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold"
            >
              View All Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-700 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us - Wedding Planner in {areaName}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to start planning your dream wedding? Get in touch with us today!
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
                <p className="opacity-90">{areaName}, Vadodara, Gujarat</p>
              </div>
            </div>
            <a
              href={`https://wa.me/916353583148?text=Hi, I'm interested in wedding planning services in ${areaName}, Vadodara`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/916353583148?text=Hi, I need a wedding planner in ${areaName}, Vadodara`}
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
