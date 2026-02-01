import { MegaFooter } from "@/components/mega-footer";
import { KeywordEnquiryForm } from "@/components/keyword-enquiry-form";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Star, Award, CheckCircle, Heart, Images, Sparkles, Mail } from "lucide-react";

const keyword = "Pre Wedding Shoot Vadodara";
const keywordSlug = "pre-wedding-shoot-vadodara";

const pageContent = {
  heroTitle: "Pre Wedding Shoot Vadodara — Capture Your Romance Before the Big Day",
  heroSubtitle: "Create stunning pre-wedding photos and videos at beautiful Vadodara locations — from heritage sites to modern settings.",
  mainContent: `Your pre-wedding shoot is where you get to be romantic, playful, and completely yourselves. Pre wedding shoot in Vadodara captures the excitement before your big day in stunning imagery.

**Why do a pre-wedding shoot:**

Pre wedding shoot in Vadodara lets you practice posing, get comfortable with the camera, and create beautiful memories. These photos become engagement announcements, save-the-dates, and lifelong keepsakes.

**Pre wedding shoot Vadodara offers:**
• Outdoor location shoots
• Heritage site sessions
• Destination pre-wedding
• Indoor studio shoots
• Themed concept shoots
• Video pre-wedding reels

Pre wedding shoot in Vadodara turns your love story into art before the wedding celebrations begin!`,

  services: [
    { title: "Outdoor Shoot", description: "Beautiful locations for pre wedding shoot Vadodara." },
    { title: "Heritage Sites", description: "Iconic backdrops for pre wedding shoot Vadodara." },
    { title: "Destination Shoot", description: "Travel shoots from pre wedding shoot Vadodara team." },
    { title: "Studio Shoot", description: "Controlled settings by pre wedding shoot Vadodara." },
    { title: "Themed Concepts", description: "Creative ideas from pre wedding shoot Vadodara." },
    { title: "Video Reels", description: "Cinematic reels by pre wedding shoot Vadodara." }
  ],

  faqs: [
    { question: "What are the best locations for pre-wedding shoots?", answer: "Pre wedding shoot Vadodara recommends Lakshmi Vilas Palace, Sayaji Garden, Pavagadh, Champaner, and beautiful farm locations around the city." },
    { question: "How long does a pre-wedding shoot take?", answer: "Pre wedding shoot Vadodara sessions typically take 4-8 hours depending on locations and outfit changes planned." },
    { question: "How many outfits can we wear?", answer: "Pre wedding shoot Vadodara usually allows 2-4 outfit changes depending on the package selected." },
    { question: "When should we do our pre-wedding shoot?", answer: "Pre wedding shoot Vadodara recommends 2-3 months before the wedding for editing time and using images on invites." }
  ],

  testimonials: [
    { name: "Rahul & Meera", text: "Pre wedding shoot Vadodara captured our love beautifully! The Lakshmi Vilas Palace backdrop was magical." },
    { name: "Kunal & Pooja", text: "Amazing creativity! Pre wedding shoot Vadodara gave us magazine-worthy photos. Friends are so jealous!" },
    { name: "Vivek & Anita", text: "The video reel from pre wedding shoot Vadodara is our favorite! Shared it everywhere." }
  ]
};

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop", title: "Pre-Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Romantic Shoot" },
  { id: 3, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Couple Photos" },
  { id: 4, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop", title: "Love Story" },
  { id: 5, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Beautiful Moments" },
  { id: 6, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Outdoor Shoot" },
];

const relatedKeywords = [
  { slug: "wedding-photography-services-vadodara", title: "Photography" },
  { slug: "wedding-videography-services-vadodara", title: "Videography" },
  { slug: "wedding-planner-in-vadodara", title: "Wedding Planner" },
];

export const metadata: Metadata = {
  title: "Pre Wedding Shoot Vadodara | Beautiful Locations & Concepts",
  description: "Stunning pre wedding shoot services in Vadodara. Heritage locations, creative concepts, cinematic videos & beautiful memories. Book now!",
  keywords: "pre wedding shoot vadodara, pre wedding photography vadodara, pre wedding video vadodara, couple shoot vadodara",
  openGraph: { title: "Pre Wedding Shoot Vadodara | Romantic Photos", description: "Beautiful pre-wedding photography in Vadodara.", type: "website", locale: "en_IN" },
  alternates: { canonical: `https://weddingplannersinvadodara.in/${keywordSlug}/` },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md sticky top-0 z-50"><div className="container mx-auto px-4 py-4 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><span className="text-2xl">💒</span><span className="font-bold text-lg text-pink-700">Wedding Planners Vadodara</span></Link><div className="flex items-center gap-4"><a href="tel:+916353583148" className="hidden md:flex items-center gap-2 text-pink-600 font-semibold"><Phone className="w-4 h-4" />+91 63535 83148</a><a href="https://wa.me/916353583148" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600">WhatsApp</a></div></div></nav>

      <section className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-rose-300" /><span className="text-rose-200">Love Stories</span></div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{pageContent.heroTitle}</h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6">{pageContent.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Heart className="w-5 h-5 text-red-300" /><span>Romantic</span></div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Star className="w-5 h-5 text-yellow-400" /><span>5★ Rated</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+916353583148" className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-bold"><Phone className="w-5 h-5" />Book Shoot</a>
                <a href="https://wa.me/916353583148?text=Hi, I want to book a pre wedding shoot in Vadodara" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold">WhatsApp</a>
              </div>
            </div>
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Shoot Enquiry</h3>
              <p className="text-gray-500 text-center text-sm mb-4">{keyword} • Romantic Shoots</p>
              <KeywordEnquiryForm keyword={keyword} source={`keyword-page-${keywordSlug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rose-50"><div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"><div className="flex flex-col items-center"><Award className="w-10 h-10 text-rose-600 mb-2" /><p className="font-bold text-2xl">300+</p><p className="text-gray-600 text-sm">Shoots Done</p></div><div className="flex flex-col items-center"><Star className="w-10 h-10 text-yellow-500 mb-2" /><p className="font-bold text-2xl">5.0★</p><p className="text-gray-600 text-sm">Rating</p></div><div className="flex flex-col items-center"><CheckCircle className="w-10 h-10 text-green-600 mb-2" /><p className="font-bold text-2xl">50+</p><p className="text-gray-600 text-sm">Locations</p></div><div className="flex flex-col items-center"><Heart className="w-10 h-10 text-pink-600 mb-2" /><p className="font-bold text-2xl">Love</p><p className="text-gray-600 text-sm">Stories</p></div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Beautiful {keyword}</h2><div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: pageContent.mainContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/•/g, '<br/>•') }} /></div></section>

      <section className="py-16 md:py-20 bg-rose-50"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">{pageContent.services.map((s, i) => (<div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-rose-500"><h3 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h3><p className="text-gray-600">{s.description}</p></div>))}</div></div></section>

      <section className="py-16 md:py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"><Images className="inline-block w-8 h-8 mr-2 text-rose-600" />Gallery</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">{galleryImages.map((img) => (<div key={img.id} className="relative group overflow-hidden rounded-xl shadow-lg"><img src={img.src} alt={`${img.title} - ${keyword}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" /></div>))}</div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Reviews</h2><div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">{pageContent.testimonials.map((t, i) => (<div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100"><div className="flex gap-1 mb-3">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div><p className="text-gray-600 italic mb-4">&quot;{t.text}&quot;</p><p className="font-bold text-gray-900">{t.name}</p></div>))}</div></div></section>

      <section className="py-16 md:py-20 bg-rose-50"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">FAQs</h2><div className="space-y-4">{pageContent.faqs.map((faq, i) => (<details key={i} className="bg-white p-6 rounded-xl shadow-md group"><summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">{faq.question}<span className="text-2xl text-rose-600 group-open:rotate-45 transition-transform">+</span></summary><p className="mt-4 text-gray-600">{faq.answer}</p></details>))}</div></div></section>

      <section className="relative py-20 overflow-hidden"><img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&h=600&fit=crop" alt={keyword} className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-pink-800/80" /><div className="relative container mx-auto px-4 text-center text-white"><h2 className="text-3xl md:text-5xl font-bold mb-4">Create Your Love Story</h2><p className="text-lg md:text-xl opacity-90 mb-8">Stunning pre-wedding memories await!</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+916353583148" className="inline-flex items-center justify-center gap-2 bg-white text-rose-700 px-8 py-4 rounded-full font-bold text-lg"><Phone className="w-5 h-5" />Call Now</a><a href="https://wa.me/916353583148" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp</a></div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Related Services</h2><div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">{relatedKeywords.map((k) => (<Link key={k.slug} href={`/${k.slug}/`} className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-full border border-rose-200">{k.title}</Link>))}</div></div></section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-500 to-pink-500 text-white"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><a href="tel:+916353583148" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20"><Phone className="w-8 h-8 mb-3" /><p className="font-bold">Call</p><p>+91 63535 83148</p></a><a href="mailto:info@weddingplannersinvadodara.in" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20"><Mail className="w-8 h-8 mb-3" /><p className="font-bold">Email</p><p className="text-sm">info@weddingplannersinvadodara.in</p></a><div className="flex flex-col items-center p-6 bg-white/10 rounded-xl"><MapPin className="w-8 h-8 mb-3" /><p className="font-bold">Location</p><p>Vadodara, Gujarat</p></div></div></div></section>

      <a href="https://wa.me/916353583148" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all" aria-label="WhatsApp"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
      <MegaFooter />
    </div>
  );
}
