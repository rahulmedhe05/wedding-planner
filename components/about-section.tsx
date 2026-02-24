import { Crown, Users, Award, Heart, Clock, Shield, Palette, CheckCircle, IndianRupee, Sparkles } from "lucide-react"

const features = [
  {
    icon: IndianRupee,
    title: "Weddings for Every Budget",
    description: "From intimate ceremonies to grand celebrations — we create magical weddings that fit your budget perfectly",
  },
  {
    icon: Clock,
    title: "Flawless Timeline Management",
    description: "Every function starts on time, every ritual happens seamlessly — we manage it all so you can enjoy your day",
  },
  {
    icon: Users,
    title: "Dedicated Wedding Team",
    description: "A personal wedding coordinator, decorator, and on-ground crew committed to making your vision a reality",
  },
  {
    icon: Palette,
    title: "Complete Wedding Solutions",
    description: "Venue, décor, catering, entertainment, photography — everything under one roof with PrimeOne",
  },
  {
    icon: CheckCircle,
    title: "Attention to Every Detail",
    description: "From flower arrangements to guest seating — we obsess over every detail so nothing is overlooked",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden costs or last-minute surprises — clear, upfront pricing with detailed breakdowns",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">About PrimeOne Wedding Planners</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Crafting Dream Weddings Since 2010
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono mb-6">
            {
              "Welcome to PrimeOne Wedding Planners — Vadodara's most trusted name in wedding planning. Since 2010, we've been turning love stories into unforgettable celebrations. From traditional Gujarati weddings to grand destination affairs, our passion lies in creating moments that families cherish forever."
            }
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "With 2000+ weddings planned and a 4.9-star rating, our team of experienced planners, decorators, and coordinators brings creativity, precision, and heart to every celebration. Founded by Rajesh Patel, PrimeOne has grown into one of Gujarat's most sought-after wedding planning companies."
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              Our Vision
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To be the most loved wedding planning company in Gujarat — known for creating celebrations that are as unique as every couple's love story. We envision a world where every bride and groom gets the wedding of their dreams, regardless of budget.
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border border-border hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Our Mission
            </h3>
            <p className="text-muted-foreground font-mono leading-relaxed">
              To deliver flawless, stress-free wedding experiences by combining traditional Indian values with modern planning expertise. Every wedding we plan reflects the couple's personality, respects family traditions, and creates memories that last a lifetime.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Choose PrimeOne Wedding Planners?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Process</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              How We Plan Your Dream Wedding
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Share Your Vision</h4>
              <p className="text-muted-foreground font-mono text-sm">Tell us about your dream wedding — the theme, budget, guest count, and every little detail you've imagined.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Custom Proposal</h4>
              <p className="text-muted-foreground font-mono text-sm">We create a personalized wedding plan with venue options, décor concepts, vendor selections, and a transparent cost breakdown.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Design & Finalize</h4>
              <p className="text-muted-foreground font-mono text-sm">Review mood boards, décor themes, and vendor portfolios. We finalize every detail together before the big day.</p>
            </div>
            <div className="relative bg-background rounded-lg p-6 border border-border hover:shadow-xl transition-shadow text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
              <h4 className="text-lg font-bold text-foreground mt-4 mb-3">Your Perfect Day</h4>
              <p className="text-muted-foreground font-mono text-sm">Sit back and enjoy every moment. Our team manages everything on-ground — from mandap setup to bidaai — flawlessly.</p>
            </div>
          </div>
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop"
              alt="PrimeOne Wedding Planners - Beautiful Indian Wedding Setup"
              className="rounded-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Your Dream Wedding, Our Expertise</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "At PrimeOne Wedding Planners, we believe every love story deserves a celebration as unique as the couple. Our expert team brings together creativity, cultural understanding, and meticulous planning to craft weddings that exceed expectations."
              }
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              {
                "From intimate home ceremonies to grand palace weddings, PrimeOne delivers premium quality, perfect coordination, and exceptional service across Vadodara, Gujarat, and destination locations across India."
              }
            </p>
            <ul className="space-y-3">
              {[
                "Complete wedding planning & coordination",
                "Stunning décor & theme design",
                "Venue selection & management",
                "Catering, entertainment & DJ services",
                "Bridal makeup & mehndi arrangements",
                "Photography & videography coordination",
                "Guest management & hospitality",
                "Destination wedding planning across India",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
