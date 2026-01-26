import { weddingKeywords, getKeywordBySlug } from "@/lib/keywords-config";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Star, Users, Award, CheckCircle, Heart, ArrowRight, Images } from "lucide-react";

// Wedding gallery images for keyword pages
const keywordGalleryImages = [
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

// Generate static params for all keywords
export async function generateStaticParams() {
  return weddingKeywords.map((keyword) => ({
    slug: keyword.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const keyword = getKeywordBySlug("wedding-planners", slug);
  
  if (!keyword) {
    return { title: "Page Not Found" };
  }
  
  return {
    title: keyword.title,
    description: keyword.metaDescription,
    keywords: `${keyword.h1}, wedding planner, wedding planners, wedding planning services, Vadodara, Gujarat`,
    openGraph: {
      title: keyword.title,
      description: keyword.metaDescription,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const keyword = getKeywordBySlug("wedding-planners", slug);
  
  if (!keyword) {
    notFound();
  }

  // Get related keywords (exclude current)
  const relatedKeywords = weddingKeywords
    .filter(k => k.slug !== slug)
    .slice(0, 12);

  return (
    <div className="min-h-screen">
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
      <section className="relative min-h-[50vh] md:min-h-[60vh] text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-rose-800/80 to-pink-700/70" />
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center mb-6 text-sm">
              <ol className="flex items-center gap-2 text-pink-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">{keyword.h1}</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {keyword.h1}
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              {keyword.metaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+916353583148"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/916353583148"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white shadow-md relative -mt-6 mx-4 md:mx-8 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-pink-600">500+</p>
              <p className="text-gray-600 text-sm">Weddings in Vadodara</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-rose-600">15+</p>
              <p className="text-gray-600 text-sm">Years in Vadodara</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-pink-600">4.9/5</p>
              <p className="text-gray-600 text-sm">Customer Rating</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-rose-600">40+</p>
              <p className="text-gray-600 text-sm">Vadodara Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                About Our {keyword.h1.replace("in Vadodara", "").replace("Services", "").trim()} Services in Vadodara
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {keyword.content.intro}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-pink-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-pink-800">
                Benefits of Our Services in Vadodara
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {keyword.content.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                What We Offer in Vadodara
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyword.content.features.map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-pink-600" />
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 mb-12">
              <p className="text-gray-700 leading-relaxed text-lg">
                {keyword.content.conclusion}
              </p>
            </div>

            {/* Gallery Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Images className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Wedding Portfolio in Vadodara
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {keywordGalleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-medium">{image.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link 
                  href="/#gallery"
                  className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700"
                >
                  View Full Gallery <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <KeywordEnquiryForm keywordTitle={keyword.h1} />

      {/* Areas We Serve */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Wedding Planner Services Across Vadodara
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 max-w-7xl mx-auto">
            {vadodaraAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 p-2 bg-white rounded-lg text-sm"
              >
                <MapPin className="w-3 h-3 text-pink-600 flex-shrink-0" />
                <span className="text-gray-700">{getAreaDisplayName(area)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Related Wedding Planning Services in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {relatedKeywords.map((kw) => (
              <Link
                key={kw.slug}
                href={`/${kw.slug}`}
                className="px-4 py-2 bg-pink-50 rounded-full text-sm font-medium text-pink-700 hover:bg-pink-600 hover:text-white transition-all"
              >
                {kw.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Plan Your Dream Wedding in Vadodara?
          </h2>
          <p className="text-pink-100 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and let our expert wedding planners in Vadodara create your perfect celebration!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +91 63535 83148
            </a>
            <a
              href="https://wa.me/916353583148"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
