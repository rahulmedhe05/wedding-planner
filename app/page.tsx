"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { weddingKeywords } from "@/lib/keywords-config";
import { MegaFooter } from "@/components/mega-footer";
import { Phone, ArrowRight, MapPin, Star, Users, Award, CheckCircle, Heart, Calendar, Camera, Music, Utensils, Sparkles, ChevronLeft, ChevronRight, MessageCircle, Images, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Metadata needs to be in a separate layout or use generateMetadata for client components
// Moving metadata to a server component or removing from client component

// Wedding slider images from Unsplash
const sliderImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&h=1080&fit=crop",
];

// Wedding gallery images - 50 beautiful wedding photos
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Bride & Groom Portrait" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Wedding Reception" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Wedding Ceremony" },
  { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop", title: "Bridal Portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop", title: "Wedding Decor" },
  { id: 6, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop", title: "Wedding Venue" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Couple Dance" },
  { id: 8, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=600&fit=crop", title: "Wedding Rings" },
  { id: 9, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Wedding Bouquet" },
  { id: 10, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", title: "Groom Portrait" },
  { id: 11, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&h=600&fit=crop", title: "Wedding Celebration" },
  { id: 12, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop", title: "Wedding Cake" },
  { id: 13, src: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&h=600&fit=crop", title: "Wedding Table Setting" },
  { id: 14, src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=600&fit=crop", title: "Indian Wedding" },
  { id: 15, src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=600&h=600&fit=crop", title: "Wedding Mandap" },
  { id: 16, src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=600&fit=crop", title: "Wedding Couple" },
  { id: 17, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop", title: "Wedding First Look" },
  { id: 18, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop", title: "Destination Wedding" },
  { id: 19, src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&h=600&fit=crop", title: "Wedding Vows" },
  { id: 20, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop", title: "Wedding Hall" },
  { id: 21, src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=600&fit=crop", title: "Bridal Makeup" },
  { id: 22, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=600&fit=crop", title: "Wedding Jewellery" },
  { id: 23, src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=600&fit=crop", title: "Wedding Photography" },
  { id: 24, src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=600&fit=crop", title: "Wedding Dance Floor" },
  { id: 25, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop", title: "Wedding Flowers" },
  { id: 26, src: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=600&h=600&fit=crop", title: "Wedding Dress" },
  { id: 27, src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&h=600&fit=crop", title: "Wedding Party" },
  { id: 28, src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=600&fit=crop", title: "Wedding Entrance" },
  { id: 29, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Wedding Sparklers" },
  { id: 30, src: "https://images.unsplash.com/photo-1546193126-3d94f3e9d0b0?w=600&h=600&fit=crop", title: "Wedding Invitation" },
  { id: 31, src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=600&fit=crop", title: "Beach Wedding" },
  { id: 32, src: "https://images.unsplash.com/photo-1529636444744-adffc9135a5e?w=600&h=600&fit=crop", title: "Garden Wedding" },
  { id: 33, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=600&fit=crop", title: "Wedding Kiss" },
  { id: 34, src: "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?w=600&h=600&fit=crop", title: "Wedding Car" },
  { id: 35, src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=600&fit=crop", title: "Wedding Gift" },
  { id: 36, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop", title: "Wedding Toast" },
  { id: 37, src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467b22?w=600&h=600&fit=crop", title: "Palace Wedding" },
  { id: 38, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop", title: "Royal Wedding" },
  { id: 39, src: "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=600&h=600&fit=crop", title: "Mehndi Ceremony" },
  { id: 40, src: "https://images.unsplash.com/photo-1585652757141-8837d676054c?w=600&h=600&fit=crop", title: "Sangeet Night" },
  { id: 41, src: "https://images.unsplash.com/photo-1580824456624-eb60e546de5d?w=600&h=600&fit=crop", title: "Haldi Ceremony" },
  { id: 42, src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=600&fit=crop", title: "Wedding Moments" },
  { id: 43, src: "https://images.unsplash.com/photo-1565784249160-1524451fc3f7?w=600&h=600&fit=crop", title: "Wedding Stage" },
  { id: 44, src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=600&h=600&fit=crop", title: "Wedding Catering" },
  { id: 45, src: "https://images.unsplash.com/photo-1549037173-e3b717902c57?w=600&h=600&fit=crop", title: "Wedding Music" },
  { id: 46, src: "https://images.unsplash.com/photo-1470290449668-02dd93d9420a?w=600&h=600&fit=crop", title: "Wedding Couple Walk" },
  { id: 47, src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=600&h=600&fit=crop", title: "Wedding Details" },
  { id: 48, src: "https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?w=600&h=600&fit=crop", title: "Wedding Fireworks" },
  { id: 49, src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&h=600&fit=crop", title: "Wedding Fun" },
  { id: 50, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop", title: "Wedding Memories" },
];

// Wedding services list
const weddingServices = [
  { icon: Heart, title: "Complete Wedding Planning", desc: "End-to-end wedding planning services" },
  { icon: MapPin, title: "Destination Weddings", desc: "Plan your dream destination wedding" },
  { icon: Sparkles, title: "Luxury Weddings", desc: "Premium luxury wedding experiences" },
  { icon: Calendar, title: "Wedding Coordination", desc: "Day-of coordination services" },
  { icon: Camera, title: "Photography & Video", desc: "Capture every precious moment" },
  { icon: Music, title: "Entertainment & DJ", desc: "Music and entertainment planning" },
  { icon: Utensils, title: "Catering Management", desc: "Delicious culinary experiences" },
  { icon: Star, title: "Decor & Themes", desc: "Stunning wedding decorations" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    eventType: "",
    weddingStyle: "",
    eventDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Hi, I'm interested in Wedding Planning Services!

*Details:*
- Name: ${formData.fullName}
- Mobile: ${formData.mobile}
- Event Type: ${formData.eventType}
- Wedding Style: ${formData.weddingStyle}
- Expected Date: ${formData.eventDate}

Please share more information about your services and packages.`;

    const whatsappUrl = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
        {/* Background Slider Images */}
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 h-full min-h-[90vh] md:min-h-screen flex items-center">
          <div className="grid md:grid-cols-5 gap-8 items-center w-full py-20 md:py-0">
            {/* Left Side - Text Content */}
            <div className="md:col-span-3 text-white">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-500/30 to-pink-500/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
                ✨ #1 Wedding Planner in Vadodara
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
                  Wedding Planner
                </span>{" "}
                in Vadodara
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">
                Your trusted <strong>professional wedding planner</strong> for creating unforgettable celebrations. 
                We offer <strong>destination wedding planning</strong>, <strong>luxury weddings</strong>, and 
                <strong> budget-friendly packages</strong>.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">500+ Weddings</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-rose-400" />
                  <span className="text-sm font-medium">15+ Years Exp.</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">40 Areas Covered</span>
                </div>
              </div>

              {/* CTA Buttons - Mobile Only */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:hidden">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/916353583148?text=Hi, I'm interested in wedding planning services"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Get Free Quote</h2>
                  <p className="text-gray-600 text-sm">Plan Your Dream Wedding Today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />

                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />

                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Engagement">Engagement</SelectItem>
                      <SelectItem value="Reception">Reception</SelectItem>
                      <SelectItem value="Destination Wedding">Destination Wedding</SelectItem>
                      <SelectItem value="Pre-Wedding">Pre-Wedding Events</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.weddingStyle}
                    onValueChange={(value) => setFormData({ ...formData, weddingStyle: value })}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Wedding Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Traditional">Traditional</SelectItem>
                      <SelectItem value="Luxury">Luxury</SelectItem>
                      <SelectItem value="Theme-Based">Theme-Based</SelectItem>
                      <SelectItem value="Budget-Friendly">Budget-Friendly</SelectItem>
                      <SelectItem value="Royal">Royal Wedding</SelectItem>
                      <SelectItem value="Destination">Destination</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Expected Event Date (e.g., December 2025)"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="bg-gray-50 border-gray-200"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-6 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Wedding Quote
                  </Button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting, you agree to be contacted via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md relative -mt-8 mx-4 md:mx-8 rounded-2xl z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-pink-600">500+</p>
              <p className="text-gray-600">Weddings Planned</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-rose-600">40+</p>
              <p className="text-gray-600">Areas in Vadodara</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-pink-600">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-rose-600">4.9/5</p>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Wedding Planning Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              As the <strong>best wedding planner in Vadodara</strong>, we offer comprehensive 
              <strong> wedding planning services</strong> including <strong>full wedding planning</strong>, 
              <strong> partial wedding planning</strong>, and <strong>wedding coordination services</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {weddingServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-pink-100 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={galleryImages[idx].src} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <service.icon className="w-10 h-10 text-pink-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-semibold mb-4">
              <Images className="w-4 h-4" />
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Wedding Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse through our stunning collection of <strong>wedding photography</strong> showcasing 
              our work as the <strong>best wedding planner in Vadodara</strong>
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {(showAllGallery ? galleryImages : galleryImages.slice(0, 15)).map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm md:text-base">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-bold text-lg hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg"
            >
              {showAllGallery ? "Show Less" : "View All 50 Photos"}
              <ArrowRight className={`w-5 h-5 transition-transform ${showAllGallery ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={selectedImage.src.replace("600", "1200")}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop" 
                  alt="Wedding Planning"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop" 
                  alt="Wedding Venue"
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop" 
                  alt="Wedding Reception"
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop" 
                  alt="Wedding Couple"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Wedding Planner Services?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  As the <strong>best wedding planner in Vadodara</strong>, we understand that your wedding day 
                  is one of the most important days of your life. Our team of <strong>professional wedding planners</strong> 
                  brings 15+ years of experience in creating unforgettable celebrations.
                </p>
                <p>
                  Whether you're looking for a <strong>luxury wedding planner</strong> for an extravagant celebration, 
                  a <strong>budget wedding planner</strong> for a beautiful yet affordable wedding, or a 
                  <strong> destination wedding planner</strong> for your dream location wedding – we have you covered.
                </p>
                <p>
                  Our <strong>wedding planning services</strong> cater to all traditions - we are experts in 
                  <strong> Indian wedding planning</strong>, <strong>Hindu wedding planning</strong>, 
                  <strong> Muslim wedding planning</strong>, <strong>Christian wedding planning</strong>, 
                  <strong> Gujarati wedding planning</strong>, <strong>Punjabi wedding planning</strong>, and 
                  <strong> South Indian wedding planning</strong>.
                </p>
                <p>
                  From <strong>palace wedding planning</strong> at heritage venues to <strong>beach wedding planning</strong> 
                  at exotic locations, from <strong>hotel wedding planning</strong> to <strong>garden wedding planning</strong> – 
                  our <strong>wedding event management company</strong> handles it all with perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 40 Areas Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wedding Planner Services in All 40 Areas of Vadodara
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our <strong>local wedding planner</strong> services cover all areas of Vadodara. 
              Find <strong>wedding planner near me</strong> in your neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 max-w-7xl mx-auto">
            {vadodaraAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-pink-100"
              >
                <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0" />
                <span className="font-medium text-sm">{getAreaDisplayName(area)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Types of Wedding Planning We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service Types */}
            <div className="bg-pink-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=200&fit=crop" 
                alt="Wedding Planning Services"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-800">By Service Level</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Full Wedding Planning</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Partial Wedding Planning</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Wedding Coordination Services</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Wedding Decor Planning</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Wedding Management Services</li>
                </ul>
              </div>
            </div>

            {/* By Budget */}
            <div className="bg-rose-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=200&fit=crop" 
                alt="Wedding Budget Options"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-rose-800">By Budget</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Budget Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Low Budget Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Affordable Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Luxury Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Royal Wedding Planner</li>
                </ul>
              </div>
            </div>

            {/* By Culture */}
            <div className="bg-pink-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=200&fit=crop" 
                alt="Indian Wedding Cultures"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-800">By Culture/Community</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Indian Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Hindu Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Muslim Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Christian Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Gujarati Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Punjabi Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> South Indian Wedding Planner</li>
                </ul>
              </div>
            </div>

            {/* By Venue */}
            <div className="bg-rose-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=200&fit=crop" 
                alt="Wedding Venues"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-rose-800">By Venue Type</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Palace Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Resort Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Beach Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Heritage Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Hotel Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Garden Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Outdoor Wedding Planner</li>
                </ul>
              </div>
            </div>

            {/* International */}
            <div className="bg-pink-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=200&fit=crop" 
                alt="Destination Weddings"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-800">International Weddings</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> International Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Destination Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Overseas Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Global Wedding Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-pink-600" /> Foreign Wedding Planner</li>
                </ul>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-rose-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=200&fit=crop" 
                alt="Wedding Photography & Services"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-rose-800">Additional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Decor Services</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Photography Coordination</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Videography Planner</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Makeup Artist Booking</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Catering Management</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-rose-600" /> Wedding Logistics Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Quick Links */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Explore Our Wedding Planning Services
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Click on any service below to learn more about our specialized <strong>wedding planner</strong> offerings
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {weddingKeywords.slice(0, 40).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md border border-pink-100"
              >
                {keyword.title.split("|")[0].trim()}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-900 to-rose-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why We Are the Best Wedding Planner in Vadodara
            </h2>
            <p className="text-pink-200 text-lg max-w-2xl mx-auto">
              Our <strong>professional wedding planners</strong> are committed to making your dream wedding a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Top-Rated Wedding Planners</h3>
              <p className="text-pink-200">
                4.9/5 rating from 500+ happy couples
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Wedding Team</h3>
              <p className="text-pink-200">
                Professional wedding planners with 15+ years experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Award-Winning Services</h3>
              <p className="text-pink-200">
                Recognized as top wedding planners in Gujarat
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Complete Wedding Solutions</h3>
              <p className="text-pink-200">
                Full wedding planning to wedding coordination services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Planner Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Wedding Planner Cost & Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Budget Package</h3>
              <p className="text-gray-600 mb-4">Perfect for budget wedding planner needs</p>
              <p className="text-3xl font-bold text-pink-600 mb-4">₹50,000+</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Wedding Coordination Services</li>
                <li>✓ Vendor Recommendations</li>
                <li>✓ Timeline Management</li>
                <li>✓ Day-of Coordination</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-400 transform scale-105">
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              <h3 className="text-2xl font-bold mb-2 mt-2">Premium Package</h3>
              <p className="text-gray-600 mb-4">Full wedding planning services</p>
              <p className="text-3xl font-bold text-pink-600 mb-4">₹1,50,000+</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Complete Wedding Planning</li>
                <li>✓ Venue Selection & Booking</li>
                <li>✓ All Vendor Management</li>
                <li>✓ Decor & Theme Design</li>
                <li>✓ Full Coordination</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Luxury Package</h3>
              <p className="text-gray-600 mb-4">Luxury wedding planner experience</p>
              <p className="text-3xl font-bold text-pink-600 mb-4">₹5,00,000+</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Premium Wedding Planning</li>
                <li>✓ Luxury Venues & Decor</li>
                <li>✓ International Wedding Planning</li>
                <li>✓ Destination Wedding Management</li>
                <li>✓ VIP Guest Services</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-600">
            Contact us for custom <strong>wedding planner packages</strong> and <strong>wedding planner price</strong> quotes
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What is the wedding planner cost in Vadodara?</h3>
              <p className="text-gray-600">Our wedding planner charges in India start from ₹50,000 for basic coordination. Full wedding planning services range from ₹1.5 lakhs to ₹5+ lakhs depending on wedding scale and services required.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer budget wedding planner services?</h3>
              <p className="text-gray-600">Yes! We are known as an affordable wedding planner in Vadodara. Our low budget wedding planner packages help you celebrate beautifully within your means.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can you plan destination weddings?</h3>
              <p className="text-gray-600">Absolutely! As a destination wedding planner, we handle weddings across India and internationally. Our destination wedding management includes travel coordination, venue booking, and local vendor management.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer luxury wedding planner services?</h3>
              <p className="text-gray-600">Yes, our luxury wedding planner services include palace weddings, royal wedding planning, and premium international wedding planning with exclusive venues and high-end services.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Which areas do you serve in Vadodara?</h3>
              <p className="text-gray-600">Our local wedding planner services cover all 40 areas of Vadodara including Alkapuri, Gotri, Manjalpur, Sayajigunj, Fatehgunj, and more. We are your wedding planner near me solution!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Contact the <strong>best wedding planner in Vadodara</strong> today for a free consultation. 
            Our <strong>professional wedding planners</strong> are ready to create your perfect celebration!
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
              href="https://wa.me/916353583148?text=Hi, I'm looking for a wedding planner in Vadodara. Please share details."
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
