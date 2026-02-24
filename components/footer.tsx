"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent">PrimeOne Wedding Planners</h3>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {
                "Where dreams meet celebration. PrimeOne Wedding Planners crafts stunning weddings for couples across Vadodara and Gujarat since 2010."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Gallery", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Complete Wedding Planning</li>
              <li>Destination Wedding</li>
              <li>Venue Selection & Booking</li>
              <li>Wedding Decor & Themes</li>
              <li>Photography & Videography</li>
              <li>Catering & Entertainment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    PrimeOne Wedding Planners,
                    <br />
                    301, Shapath Hexa, Near Gujarat High Court,
                    <br />
                    Alkapuri, Vadodara - 390007, Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+916353583148"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 63535 83148
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@primeoneweddings.in"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  hello@primeoneweddings.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Wedding Planning Services - All Areas of Vadodara</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Covering wedding planning services across Vadodara's premium localities including Alkapuri, Gotri, Manjalpur, Sayajigunj, Fatehgunj, Karelibaug, Akota, Subhanpura, Race Course, and surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Complete Wedding Planning | ✓ Destination Weddings | ✓ Budget to Luxury Celebrations
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2026 PrimeOne Wedding Planners Vadodara. All rights reserved. | Vadodara's Premier Wedding Planning Company
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding planner Vadodara, best wedding planner in Vadodara, wedding planners near me, wedding planning services Vadodara, destination wedding planner Gujarat, affordable wedding planner Vadodara, luxury wedding planner, Indian wedding planner, mehndi planning, sangeet planning, bridal makeup Vadodara, wedding decorator Vadodara, PrimeOne Wedding Planners
      </div>
    </footer>
  )
}
