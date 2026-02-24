"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services does PrimeOne Wedding Planners offer?",
    answer:
      "PrimeOne Wedding Planners offers complete wedding planning services including venue selection, décor & theme design, catering management, entertainment & DJ, bridal makeup & mehndi, photography & videography coordination, guest management, invitation design, and day-of coordination across Vadodara and Gujarat.",
  },
  {
    question: "How much does a wedding planner cost in Vadodara?",
    answer:
      "Our wedding packages start from ₹1,50,000 for intimate ceremonies and go up to custom quotes for grand destination weddings. Every package includes a dedicated wedding coordinator, vendor management, and on-ground execution. We work with every budget to create your dream wedding.",
  },
  {
    question: "Do you plan destination weddings outside Vadodara?",
    answer:
      "Yes! We specialize in destination weddings across India — from royal palaces in Rajasthan to beach venues in Goa and Kerala. Our team handles everything from travel logistics to on-site coordination, so you can enjoy a stress-free destination celebration.",
  },
  {
    question: "How far in advance should I book a wedding planner?",
    answer:
      "We recommend booking 6-12 months in advance for the best venue and vendor availability. However, we also handle last-minute weddings with our experienced rapid-planning team. Contact us anytime — we'll work around your timeline.",
  },
  {
    question: "Do you handle all types of weddings — Hindu, Muslim, Christian?",
    answer:
      "Absolutely! Our team has deep experience planning Hindu, Muslim, Christian, Jain, Sikh, and inter-faith weddings. We understand the rituals, customs, and traditions of each ceremony and ensure every cultural detail is honored perfectly.",
  },
  {
    question: "Can you work within a tight budget?",
    answer:
      "Yes, we pride ourselves on creating beautiful weddings for every budget. Our team has strong vendor relationships across Vadodara that allow us to negotiate the best rates. We'll maximize your budget without compromising on quality or experience.",
  },
  {
    question: "What areas in Vadodara do you serve?",
    answer:
      "We serve all areas of Vadodara including Alkapuri, Gotri, Manjalpur, Fatehgunj, Karelibaug, Akota, Waghodia Road, Harni, Sama, Tandalja, and surrounding areas. We also plan weddings across Gujarat and pan-India destinations.",
  },
  {
    question: "How do I get started with PrimeOne Wedding Planners?",
    answer:
      "Getting started is easy! Call us at +91 63535 83148, WhatsApp us, or fill out the enquiry form on our website. We'll schedule a free consultation to understand your vision, guest count, budget, and preferences — and then craft a personalized wedding proposal just for you.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions About Wedding Planning
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Find answers to common questions about our wedding planning services in Vadodara
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground leading-relaxed font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
