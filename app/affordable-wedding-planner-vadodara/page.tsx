import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Star, Award, CheckCircle, Heart, Images, Sparkles, Mail } from "lucide-react";

const keyword = "Affordable Wedding Planner Vadodara";
const keywordSlug = "affordable-wedding-planner-vadodara";

const pageContent = {
  heroTitle: "Affordable Wedding Planner Vadodara — Dream Weddings Within Your Budget",
  heroSubtitle: "Expert wedding planning services that deliver beautiful celebrations without breaking the bank — because every love story deserves a perfect wedding.",
  mainContent: `Your dream wedding doesn't require a fortune. Affordable wedding planner in Vadodara proves that stunning celebrations are possible within every budget.

**How we keep weddings affordable:**

Affordable wedding planner in Vadodara maximizes your budget through smart vendor negotiations, creative solutions, and years of experience finding the best deals.

**Affordable wedding planner Vadodara offers:**
• Budget-friendly packages
• Cost-effective vendor options
• Smart planning strategies
• DIY guidance
• Value maximization
• Transparent pricing

Affordable wedding planner in Vadodara makes your wedding dreams come true without financial stress!`,

  services: [
    { title: "Budget Planning", description: "Smart allocation from affordable wedding planner Vadodara." },
    { title: "Vendor Negotiations", description: "Best rates by affordable wedding planner Vadodara." },
    { title: "Creative Solutions", description: "Cost-effective ideas from affordable wedding planner Vadodara." },
    { title: "DIY Guidance", description: "Self-help options by affordable wedding planner Vadodara." },
    { title: "Value Packages", description: "All-inclusive deals from affordable wedding planner Vadodara." },
    { title: "Transparent Pricing", description: "No hidden costs by affordable wedding planner Vadodara." }
  ],

  faqs: [
    { question: "How much can I save with your services?", answer: "Affordable wedding planner Vadodara typically saves 15-30% through vendor negotiations and smart planning strategies." },
    { question: "Do budget weddings look cheap?", answer: "Never! Affordable wedding planner Vadodara creates stunning, elegant celebrations that look expensive while staying budget-friendly." },
    { question: "What's your minimum budget requirement?", answer: "Affordable wedding planner Vadodara works with various budgets. Contact us to discuss your specific requirements." },
    { question: "Are there hidden charges?", answer: "No! Affordable wedding planner Vadodara believes in 100% transparent pricing with no surprise costs." }
  ],

  testimonials: [
    { name: "Vikram & Nidhi", text: "Affordable wedding planner Vadodara created magic within our budget! Guests thought we spent much more!" },
    { name: "Sachin & Pooja", text: "Best investment ever! Affordable wedding planner Vadodara saved us money while delivering a dream wedding." },
    { name: "Rohit & Anita", text: "Transparent, honest, and creative! Affordable wedding planner Vadodara made budget planning stress-free." }
  ]
};

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Budget Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Affordable Décor" },
  { id: 3, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Beautiful Wedding" },
  { id: 4, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Value Planning" },
  { id: 5, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Smart Wedding" },
  { id: 6, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Dream Day" },
];

const relatedKeywords = [
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
  { slug: "wedding-planner-cost-vadodara", title: "Planner Cost" },
  { slug: "wedding-planner-packages-vadodara", title: "Packages" },
];

export const metadata: Metadata = {
  title: "Affordable Wedding Planner Vadodara | Budget-Friendly Weddings",
  description: "Affordable wedding planner in Vadodara. Dream weddings within budget, transparent pricing & value packages. Beautiful celebrations without overspending!",
  keywords: "affordable wedding planner vadodara, budget wedding planner vadodara, cheap wedding planner vadodara, low cost wedding vadodara",
  openGraph: { title: "Affordable Wedding Planner Vadodara | Budget Dreams", description: "Budget-friendly wedding planning in Vadodara.", type: "website", locale: "en_IN" },
  alternates: { canonical: `https://weddingplannersinvadodara.in/${keywordSlug}/` },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md sticky top-0 z-50"><div className="container mx-auto px-4 py-4 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><span className="text-2xl">💒</span><span className="font-bold text-lg text-pink-700">Wedding Planners Vadodara</span></Link><div className="flex items-center gap-4"><a href="tel:+916353583148" className="hidden md:flex items-center gap-2 text-pink-600 font-semibold"><Phone className="w-4 h-4" />+91 63535 83148</a><a href="https://wa.me/916353583148" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600">WhatsApp</a></div></div></nav>

      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-green-300" /><span className="text-green-200">Budget Friendly</span></div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{pageContent.heroTitle}</h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-6">{pageContent.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="w-5 h-5 text-pink-300" /><span>Best Value</span></div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="w-5 h-5 text-yellow-400" /><span>5★ Rated</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+916353583148" className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-bold"><Phone className="w-5 h-5" />Get Quote</a>
                <a href="https://wa.me/916353583148?text=Hi, I need an affordable wedding planner in Vadodara" className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-6 py-3 rounded-full font-bold border border-white/30">WhatsApp</a>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Budget Enquiry</h3>
              <p className="text-gray-500 text-center text-sm mb-4">{keyword} • Free Quote</p>
              <KeywordEnquiryForm keyword={keyword} source={`keyword-page-${keywordSlug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-green-50"><div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"><div className="flex flex-col items-center"><Award className="w-10 h-10 text-green-600 mb-2" /><p className="font-bold text-2xl">500+</p><p className="text-gray-600 text-sm">Weddings</p></div><div className="flex flex-col items-center"><Star className="w-10 h-10 text-yellow-500 mb-2" /><p className="font-bold text-2xl">5.0★</p><p className="text-gray-600 text-sm">Rating</p></div><div className="flex flex-col items-center"><CheckCircle className="w-10 h-10 text-green-600 mb-2" /><p className="font-bold text-2xl">30%</p><p className="text-gray-600 text-sm">Savings</p></div><div className="flex flex-col items-center"><Heart className="w-10 h-10 text-pink-600 mb-2" /><p className="font-bold text-2xl">No</p><p className="text-gray-600 text-sm">Hidden Cost</p></div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Your {keyword}</h2><div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: pageContent.mainContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/•/g, '<br/>•') }} /></div></section>

      <section className="py-16 md:py-20 bg-green-50"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{pageContent.services.map((s, i) => (<div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"><h3 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h3><p className="text-gray-600">{s.description}</p></div>))}</div></div></section>

      <section className="py-16 md:py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"><Images className="inline-block w-8 h-8 mr-2 text-green-600" />Gallery</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">{galleryImages.map((img) => (<div key={img.id} className="relative group overflow-hidden rounded-xl shadow-lg"><img src={img.src} alt={`${img.title} - ${keyword}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" /></div>))}</div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Reviews</h2><div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">{pageContent.testimonials.map((t, i) => (<div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100"><div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div><p className="text-gray-600 italic mb-4">&quot;{t.text}&quot;</p><p className="font-bold text-gray-900">{t.name}</p></div>))}</div></div></section>

      <section className="py-16 md:py-20 bg-green-50"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">FAQs</h2><div className="space-y-4">{pageContent.faqs.map((faq, i) => (<details key={i} className="bg-white p-6 rounded-xl shadow-md group"><summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">{faq.question}<span className="text-2xl text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p className="mt-4 text-gray-600">{faq.answer}</p></details>))}</div></div></section>

      <section className="relative py-20 overflow-hidden"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop" alt={keyword} className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80" /><div className="relative container mx-auto px-4 text-center text-white"><h2 className="text-3xl md:text-5xl font-bold mb-4">Dream Wedding, Smart Budget</h2><p className="text-lg md:text-xl opacity-90 mb-8">Beautiful celebrations without overspending!</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+916353583148" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg"><Phone className="w-5 h-5" />Call Now</a><a href="https://wa.me/916353583148" className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30">WhatsApp</a></div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Related Services</h2><div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">{relatedKeywords.map((k) => (<Link key={k.slug} href={`/${k.slug}/`} className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-full border border-green-200">{k.title}</Link>))}</div></div></section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><a href="tel:+916353583148" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20"><Phone className="w-8 h-8 mb-3" /><p className="font-bold">Call</p><p>+91 63535 83148</p></a><a href="mailto:info@weddingplannersinvadodara.in" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20"><Mail className="w-8 h-8 mb-3" /><p className="font-bold">Email</p><p className="text-sm">info@weddingplannersinvadodara.in</p></a><div className="flex flex-col items-center p-6 bg-white/10 rounded-xl"><MapPin className="w-8 h-8 mb-3" /><p className="font-bold">Location</p><p>Vadodara, Gujarat</p></div></div></div></section>

      <a href="https://wa.me/916353583148" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all" aria-label="WhatsApp"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
      <MegaFooter />
    </div>
  );
}
