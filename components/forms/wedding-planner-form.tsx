"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

interface WeddingPlannerFormProps {
  area?: string;
  keyword?: string;
}

export function WeddingPlannerForm({ area, keyword }: WeddingPlannerFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    eventType: "",
    weddingStyle: "",
    eventDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = ["Wedding", "Engagement", "Reception", "Destination Wedding"];
  const weddingStyles = ["Traditional", "Luxury", "Theme-Based"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `💍 *WEDDING PLANNER ENQUIRY*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    message += `💒 *Event Type:* ${formData.eventType}\n`;
    message += `✨ *Wedding Style:* ${formData.weddingStyle}\n`;
    message += `📅 *Event Date:* ${formData.eventDate}\n`;
    if (area) message += `📍 *Area:* ${area}\n`;
    if (keyword) message += `🔍 *Interest:* ${keyword}\n`;
    message += `\n_From: weddingplannersvadodara.com_`;

    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  const whyChooseUs = [
    "500+ Successful Weddings Planned",
    "End-to-End Wedding Management",
    "Network of Trusted Vendors",
    "Transparent Pricing",
    "Destination Wedding Experts",
    "Customized Wedding Packages",
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="enquiry-form">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rose-700">
              Plan Your Dream Wedding
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Let us create magical moments for your special day
              {area && ` in ${area}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, eventType: type })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.eventType === type
                            ? "bg-rose-600 text-white border-rose-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-rose-400"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Wedding Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {weddingStyles.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setFormData({ ...formData, weddingStyle: style })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.weddingStyle === style
                            ? "bg-rose-600 text-white border-rose-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-rose-400"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Date
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., December 2026"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Wedding Quote
                </Button>
              </form>
            </div>

            {/* Contact Info */}
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
                      +91 98765 43210
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
                      href="https://wa.me/916353583148?text=Hi, I'm planning a wedding and need assistance"
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-rose-700">Why Choose Us?</h3>
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
