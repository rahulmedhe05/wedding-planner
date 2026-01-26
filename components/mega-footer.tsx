"use client";

import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { weddingKeywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from "lucide-react";

export function MegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Wedding Services Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Wedding Planning Services</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 max-w-7xl mx-auto">
            {weddingKeywords.slice(0, 30).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm py-1"
              >
                {keyword.h1.replace(" in Vadodara", "").replace(" Services", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Areas We Serve */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4 text-center">Wedding Planner in All Areas of Vadodara</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
            {vadodaraAreas.map((area) => (
              <span
                key={area}
                className="text-gray-400 text-sm"
              >
                Wedding Planner in {getAreaDisplayName(area)} •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-400">+91 63535 83148</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-400">info@weddingplannersvadodara.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">Alkapuri, Vadodara - 390007</p>
                <p className="text-gray-400">Gujarat, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 text-xs text-center max-w-4xl mx-auto">
            Best Wedding Planner | Professional Wedding Planners | Top Wedding Planners | Wedding Planning Services | 
            Destination Wedding Planner | Luxury Wedding Planner | Budget Wedding Planner | Royal Wedding Planner | 
            Indian Wedding Planner | Hindu Wedding Planner | Muslim Wedding Planner | Christian Wedding Planner | 
            Gujarati Wedding Planner | Palace Wedding Planner | Beach Wedding Planner | Wedding Planner in Vadodara | 
            Wedding Planner Near Me | Wedding Planner Cost | Wedding Planner Packages | International Wedding Planner
          </p>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="font-semibold">Wedding Planners Vadodara</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Wedding Planners Vadodara. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
