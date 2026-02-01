import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedding Planner in Vadodara | Crafting Dream Weddings Since 2010",
  description:
    "Turn your wedding dreams into reality with Vadodara's most trusted planning team. From intimate ceremonies to grand celebrations, we've orchestrated 500+ magical weddings. Free consultation available.",
  keywords:
    "wedding planner Vadodara, destination wedding Gujarat, luxury wedding planning, Indian wedding coordinator",
  authors: [{ name: "Wedding Planners Vadodara" }],
  creator: "Wedding Planners Vadodara",
  publisher: "Wedding Planners Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://weddingplannersinvadodara.in"),
  alternates: {
    canonical: "https://weddingplannersinvadodara.in",
  },
  openGraph: {
    title: "Wedding Planner in Vadodara | 500+ Dream Weddings Crafted",
    description:
      "Every love story deserves a perfect celebration. We bring 15 years of expertise, creativity, and heart to make your wedding unforgettable. Let's plan your special day together.",
    url: "https://weddingplannersinvadodara.in",
    siteName: "Wedding Planners Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://weddingplannersinvadodara.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Wedding Planner in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Dream Wedding Awaits in Vadodara",
    description: "From first consultation to final dance – we handle every detail so you can savor every moment. 15 years of creating magical celebrations.",
    images: ["https://weddingplannersinvadodara.in/og-image.jpg"],
    creator: "@weddingplannersvadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://weddingplannersinvadodara.in/#business",
        name: "Wedding Planners Vadodara",
        image: "https://weddingplannersinvadodara.in/logo.png",
        description: "Vadodara's trusted wedding planning team since 2010. We transform wedding dreams into reality with personalized service, creative vision, and meticulous attention to detail.",
        url: "https://weddingplannersinvadodara.in",
        telephone: "+916353583148",
        email: "info@weddingplannersinvadodara.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alkapuri",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.3072",
          longitude: "73.1812"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00"
          }
        ],
        priceRange: "₹₹-₹₹₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "523",
          bestRating: "5",
          worstRating: "1"
        },
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "22.3072",
            longitude: "73.1812"
          },
          geoRadius: "50000"
        },
        areaServed: ["Vadodara", "Alkapuri", "Gotri", "Manjalpur", "Sayajigunj", "Fatehgunj", "Karelibaug", "Akota", "Subhanpura", "Tandalja", "Harni", "Makarpura", "Nizampura", "Race Course", "Ellora Park", "Chhani", "Waghodia Road", "Old Padra Road", "Ajwa Road"],
      },
      {
        "@type": "Organization",
        "@id": "https://weddingplannersinvadodara.in/#organization",
        name: "Wedding Planners Vadodara",
        url: "https://weddingplannersinvadodara.in",
        logo: {
          "@type": "ImageObject",
          url: "https://weddingplannersinvadodara.in/logo.png",
          width: "200",
          height: "200"
        },
        foundingDate: "2010",
        founder: {
          "@type": "Person",
          name: "Wedding Planners Vadodara Team"
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+916353583148",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Gujarati"],
          areaServed: "IN"
        },
        knowsAbout: [
          "Wedding Planning",
          "Destination Wedding",
          "Luxury Wedding",
          "Budget Wedding",
          "Indian Wedding Planning",
          "Hindu Wedding Planning",
          "Muslim Wedding Planning",
          "Christian Wedding Planning",
          "Gujarati Wedding Planning",
          "Wedding Coordination",
          "Wedding Decor",
          "Wedding Management",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://weddingplannersinvadodara.in/#service",
        name: "Wedding Planning Services",
        provider: {
          "@id": "https://weddingplannersinvadodara.in/#business"
        },
        serviceType: "Wedding Planning",
        description: "Complete wedding planning services including venue selection, vendor management, decor, catering coordination, and day-of coordination.",
        areaServed: {
          "@type": "City",
          name: "Vadodara",
          containedInPlace: {
            "@type": "State",
            name: "Gujarat"
          }
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wedding Planning Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Wedding Planning",
                description: "Complete end-to-end wedding planning from venue selection to honeymoon"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Partial Wedding Planning",
                description: "Select services based on your specific needs"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Day-of Coordination",
                description: "Professional coordination on your wedding day"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Destination Wedding Planning",
                description: "Planning weddings at exotic locations across India"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://weddingplannersinvadodara.in/#website",
        url: "https://weddingplannersinvadodara.in",
        name: "Wedding Planners Vadodara",
        publisher: {
          "@id": "https://weddingplannersinvadodara.in/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://weddingplannersinvadodara.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://weddingplannersinvadodara.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://weddingplannersinvadodara.in/"
          }
        ]
      }
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
