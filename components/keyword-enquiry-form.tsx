"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";

interface KeywordEnquiryFormProps {
  keywordTitle: string;
}

const whyChooseUs = [
  "500+ Weddings Successfully Planned",
  "15+ Years of Experience in Vadodara",
  "Dedicated Wedding Planning Team",
  "Transparent Pricing & No Hidden Costs",
  "End-to-End Wedding Management",
  "40+ Areas Covered in Vadodara",
];

export function KeywordEnquiryForm({ keywordTitle }: KeywordEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    eventType: "",
    weddingStyle: "",
    eventDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Hi, I'm interested in ${keywordTitle} in Vadodara!

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
    <section className="py-12 md:py-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Get Free Wedding Planning Quote in Vadodara
            </h2>
            <p className="text-gray-600">
              Fill the form below and our wedding planning experts will contact you within 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200 py-6"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200 py-6"
                  />
                </div>

                <div>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200 py-6">
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
                </div>

                <div>
                  <Select
                    value={formData.weddingStyle}
                    onValueChange={(value) => setFormData({ ...formData, weddingStyle: value })}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200 py-6">
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
                </div>

                <div>
                  <Input
                    placeholder="Expected Event Date (e.g., December 2025)"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="bg-gray-50 border-gray-200 py-6"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Quote via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info & Why Choose Us */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us Now</h3>
                    <p className="text-white/80 text-sm mb-2">Mon-Sun: 10 AM - 9 PM</p>
                    <a href="tel:+916353583148" className="text-lg font-semibold hover:underline">
                      +91 63535 83148
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp Us</h3>
                    <p className="text-white/80 text-sm mb-2">Quick Response Guaranteed</p>
                    <a
                      href="https://wa.me/916353583148?text=Hi, I'm planning a wedding in Vadodara and need assistance"
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-rose-700">Why Choose Us in Vadodara?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
