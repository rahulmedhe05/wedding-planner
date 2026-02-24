"use client";

import { BusinessConfig, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords, KeywordConfig } from "@/lib/keywords-config";
import { BusinessNav } from "./business-nav";
import { MegaFooter } from "./mega-footer";
import { BusinessHeroSlider } from "./business-hero-slider";
import { BusinessGallerySection } from "./business-gallery-section";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Tag, Sparkles, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface KeywordPageTemplateProps {
  business: BusinessConfig;
  keyword: KeywordConfig;
  content: {
    heroTitle: string;
    heroSubtitle: string;
    aboutContent: string;
    whyChooseUs: string[];
    detailedServices: { title: string; description: string }[];
    areaSpecificContent: string;
    faqItems: { question: string; answer: string }[];
    processSteps: { title: string; description: string }[];
  };
}

export function KeywordPageTemplate({ business, keyword, content }: KeywordPageTemplateProps) {
  const gradientClass = business.colors.gradient;
  const keywords = businessKeywords[business.slug] || [];
  const keywordName = keyword.keyword || keyword.title;

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Hero Slider with Form */}
      <BusinessHeroSlider 
        business={business} 
        area="vadodara" 
        heroTitle={keyword.h1}
        heroSubtitle={keyword.metaDescription}
        keyword={keywordName}
      />

      {/* Trust Badges */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-pink-600 mb-2" />
              <p className="font-bold text-2xl">2000+</p>
              <p className="text-gray-600 text-sm">Weddings Planned</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">4.9/5</p>
              <p className="text-gray-600 text-sm">Google Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">Since 2010</p>
              <p className="text-gray-600 text-sm">Years of Trust</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">24/7</p>
              <p className="text-gray-600 text-sm">Wedding Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=1920&h=600&fit=crop"
          alt={`${keywordName} services by PrimeOne in Vadodara`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r opacity-80", gradientClass)} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{keywordName}</h2>
            <p className="text-lg md:text-xl opacity-90">PrimeOne Wedding Planners, Vadodara</p>
          </div>
        </div>
      </section>

      {/* About Section - Keyword Density: 3x mentions with Side Image */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About {keyword.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="whitespace-pre-line">{content.aboutContent}</p>
                
                {/* SEO Keyword Density - 3 natural mentions */}
                <p className="mt-4">
                  Looking for the best <strong>{keywordName}</strong> services in Vadodara? We are the leading 
                  provider of <strong>{keywordName}</strong> solutions across all areas of Vadodara including 
                  Alkapuri, Sayajigunj, Fatehgunj, Manjalpur, Karelibaug, and more. Our expert team specializes 
                  in <strong>{keywordName}</strong> to deliver outstanding results for weddings throughout Vadodara and Gujarat.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=500&fit=crop"
                alt={`About ${keywordName} by PrimeOne in Vadodara`}
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wedding Projects */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <ImageIcon className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            {keywordName} — Our Work
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Beautiful moments from our {keywordName.toLowerCase()} projects across Vadodara
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=400&fit=crop", title: "Grand Mandap" },
              { src: "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=600&h=400&fit=crop", title: "Mehndi Ceremony" },
              { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=400&fit=crop", title: "Sangeet Night" },
              { src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop", title: "Floral Decor" },
              { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop", title: "Venue Setup" },
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img.src}
                  alt={`${img.title} - ${keywordName} Vadodara`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{img.title}</p>
                    <p className="text-sm opacity-80">Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive {business.name.toLowerCase()} services tailored to meet your specific needs in Vadodara and surrounding areas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.detailedServices.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{ borderLeftColor: business.colors.primary }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: business.colors.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Venue Showcase */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Venue Transformations by PrimeOne</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See how PrimeOne transforms venues for {keywordName.toLowerCase()} events
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop"
                  alt="Wedding venue before PrimeOne"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">Plain Venue</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=600&h=400&fit=crop"
                  alt="Wedding venue after PrimeOne decoration"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">PrimeOne Magic</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop"
                  alt="Empty wedding hall"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">Empty Hall</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=400&fit=crop"
                  alt="Decorated wedding hall by PrimeOne"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">Grand Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop"
                alt={`Why choose PrimeOne for ${keywordName}`}
                className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose PrimeOne for {keyword.title.replace(" in Vadodara", "").replace(" Vadodara", "")}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: business.colors.primary }} />
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section - All Vadodara Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <MapPin className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            {keywordName} Available in All Vadodara Areas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We provide professional {keywordName.toLowerCase()} services across all major areas in Vadodara city
          </p>
          
          {/* Area Cards with Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
            {vadodaraAreas.slice(0, 10).map((area, index) => (
              <Link
                key={area}
                href={`/${business.slug}/${area}`}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={`https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=300&h=200&fit=crop&q=80`}
                  alt={`${keywordName} in ${getAreaDisplayName(area)}`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <p className="text-white font-semibold p-3 text-sm">{getAreaDisplayName(area)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining Areas as Links */}
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {vadodaraAreas.slice(10).map((area) => (
              <Link
                key={area}
                href={`/${business.slug}/${area}`}
                className="px-4 py-2 bg-white hover:bg-gray-100 rounded-full text-gray-700 transition-colors shadow-sm border border-gray-200 hover:border-gray-300"
              >
                {keywordName} in {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Section - 50 Images */}
      <BusinessGallerySection business={business} keyword={keyword} />

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Happy Couples Love PrimeOne</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real testimonials from couples who trusted PrimeOne for {keywordName.toLowerCase()}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">PM</div>
                <div>
                  <p className="font-bold">Priya & Karan Mehta</p>
                  <p className="text-sm text-gray-500">Alkapuri, Vadodara</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "PrimeOne made our wedding absolutely magical! Every detail was perfect, from mandap to sangeet. Rajesh bhai and team are the best!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xl">SD</div>
                <div>
                  <p className="font-bold">Sneha & Amit Desai</p>
                  <p className="text-sm text-gray-500">Destination Wedding</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "PrimeOne handled our destination wedding in Udaipur flawlessly. From vendor coordination to guest management — 10/10 experience!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">RP</div>
                <div>
                  <p className="font-bold">Ritu & Harsh Patel</p>
                  <p className="text-sm text-gray-500">Budget Wedding, Gotri</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "Tight budget but PrimeOne made our wedding look incredible! Guests still talk about the decoration. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Process - How We Work
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                    style={{ backgroundColor: business.colors.primary }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions - {keyword.title}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1920&h=600&fit=crop"
          alt="PrimeOne Wedding Planners CTA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Dream Wedding?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact PrimeOne for expert {keywordName.toLowerCase()} services in Vadodara
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/916353583148?text=Hi, I need ${keywordName} services in Vadodara`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <Tag className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            Related Services
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of {business.name.toLowerCase()} services in Vadodara
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {keywords
              .filter((k) => k.slug !== keyword.slug)
              .slice(0, 15)
              .map((k) => (
                <Link
                  key={k.slug}
                  href={`/${business.slug}/${k.slug}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors border border-gray-200 hover:border-gray-300"
                >
                  {k.title.replace(" in Vadodara", "").replace(" Vadodara", "")}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={cn("py-16 md:py-20 bg-gradient-to-br text-white", gradientClass)}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch - {keyword.title}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to get started? Contact us today for a free consultation and quote.
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
                href="mailto:hello@primeoneweddings.in"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Mail className="w-8 h-8 mb-3" />
                <p className="font-bold">Email Us</p>
                <p className="opacity-90">hello@primeoneweddings.in</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl">
                <MapPin className="w-8 h-8 mb-3" />
                <p className="font-bold">Visit Us</p>
                <p className="opacity-90">301, Shapath Hexa, Alkapuri, Vadodara</p>
              </div>
            </div>
            <a
              href={`https://wa.me/916353583148?text=Hi, I'm interested in ${keyword.title}`}
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

      <MegaFooter />
      
      {/* WhatsApp Floating Button */}
      <BusinessWhatsAppFloat business={business} area="vadodara" keyword={keyword.title} />
    </div>
  );
}
