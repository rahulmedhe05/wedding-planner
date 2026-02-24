import { weddingKeywords, getKeywordBySlug } from "@/lib/keywords-config";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Star, Users, Award, CheckCircle, Heart, ArrowRight, Images } from "lucide-react";

// Wedding gallery images for keyword pages - Indian wedding themed
const keywordGalleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Indian Bride & Groom" },
  { id: 2, src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=600&h=600&fit=crop", title: "Wedding Mandap" },
  { id: 3, src: "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=600&h=600&fit=crop", title: "Mehndi Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=600&fit=crop", title: "Indian Wedding Decor" },
  { id: 5, src: "https://images.unsplash.com/photo-1585652757141-8837d676054c?w=600&h=600&fit=crop", title: "Haldi Ceremony" },
  { id: 6, src: "https://images.unsplash.com/photo-1580824456624-eb60e546de5d?w=600&h=600&fit=crop", title: "Sangeet Night" },
  { id: 7, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Portrait" },
  { id: 8, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Wedding Venue" },
  { id: 9, src: "https://images.unsplash.com/photo-1565784249160-1524451fc3f7?w=600&h=600&fit=crop", title: "Wedding Stage" },
  { id: 10, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Wedding Celebration" },
  { id: 11, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop", title: "Wedding Hall" },
  { id: 12, src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467b22?w=600&h=600&fit=crop", title: "Palace Wedding" },
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
              <img src="/icon.svg" alt="PrimeOne" className="w-8 h-8" />
              <span className="font-bold text-lg text-pink-700">PrimeOne Wedding Planners</span>
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

      {/* Hero Section with Slider + Booking Form */}
      <section className="relative min-h-[90vh] md:min-h-screen text-white overflow-hidden">
        {/* Background Slider */}
        {[
          "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=1920&h=1080&fit=crop",
          "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1920&h=1080&fit=crop",
          "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=1920&h=1080&fit=crop",
          "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=1920&h=1080&fit=crop",
        ].map((img, idx) => (
          <div key={idx} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})`, opacity: 0.3 }} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-rose-800/80 to-pink-700/70" />
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - text */}
            <div>
              <nav className="flex mb-6 text-sm">
                <ol className="flex items-center gap-2 text-pink-200">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li className="text-white">{keyword.h1}</li>
                </ol>
              </nav>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-3xl">
                {keyword.metaDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>2000+ Weddings</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5" />
                  <span>Since 2010</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:hidden">
                <a href="tel:+916353583148" className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-6 py-3 rounded-full font-bold">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </div>
            
            {/* Right side - Booking Form */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold mb-1 text-center text-pink-700">Get Free Wedding Quote</h3>
              <p className="text-sm text-gray-500 text-center mb-4">PrimeOne Wedding Planners</p>
              <KeywordEnquiryForm keywordTitle={keyword.h1} source={`keyword-${slug}`} inline />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white shadow-md relative -mt-6 mx-4 md:mx-8 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-pink-600">2000+</p>
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
      <KeywordEnquiryForm keywordTitle={keyword.h1} source={`keyword-${slug}-bottom`} />

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What Our Happy Couples Say About PrimeOne
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}</div>
              <p className="text-gray-600 italic text-sm mb-4">"PrimeOne made our wedding absolutely magical! Every detail was perfect, from mandap to sangeet."</p>
              <p className="font-bold text-sm">Priya & Karan Mehta</p>
              <p className="text-xs text-pink-600">Grand Wedding, Alkapuri</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}</div>
              <p className="text-gray-600 italic text-sm mb-4">"Best decision we made was hiring PrimeOne. They handled our destination wedding flawlessly."</p>
              <p className="font-bold text-sm">Sneha & Amit Desai</p>
              <p className="text-xs text-pink-600">Destination Wedding, Udaipur</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>)}</div>
              <p className="text-gray-600 italic text-sm mb-4">"Tight budget but PrimeOne made our wedding look like a million bucks! Guests still talk about it."</p>
              <p className="font-bold text-sm">Ritu & Harsh Patel</p>
              <p className="text-xs text-pink-600">Budget Wedding, Gotri</p>
            </div>
          </div>
        </div>
      </section>

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
            Contact PrimeOne Wedding Planners today for a free consultation and let our expert team in Vadodara create your perfect celebration!
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
