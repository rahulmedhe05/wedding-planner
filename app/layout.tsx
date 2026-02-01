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
  metadataBase: new URL("https://weddingplannervadodara.in"),
  alternates: {
    canonical: "https://weddingplannervadodara.in",
  },
  openGraph: {
    title: "Wedding Planner in Vadodara | 500+ Dream Weddings Crafted",
    description:
      "Every love story deserves a perfect celebration. We bring 15 years of expertise, creativity, and heart to make your wedding unforgettable. Let's plan your special day together.",
    url: "https://weddingplannervadodara.in",
    siteName: "Wedding Planner Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://weddingplannervadodara.in/og-image.jpg",
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
    images: ["https://weddingplannervadodara.in/og-image.jpg"],
    creator: "@weddingplannervadodara",
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
        "@id": "https://weddingplannervadodara.in/#organization",
        name: "Wedding Planner Vadodara",
        image: "https://weddingplannervadodara.in/logo.png",
        description: "Vadodara's trusted wedding planning team since 2010. We transform wedding dreams into reality with personalized service, creative vision, and meticulous attention to detail.",
        url: "https://weddingplannervadodara.in",
        telephone: "+916353583148",
        email: "info@weddingplannersvadodara.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alkapuri",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        sameAs: [],
        priceRange: "₹₹",
        serviceArea: {
          "@type": "City",
          name: "Vadodara",
        },
        areaServed: ["Vadodara", "Alkapuri", "Gotri", "Manjalpur", "Sayajigunj", "Fatehgunj", "Karelibaug", "Akota", "Subhanpura", "Tandalja", "Harni", "Makarpura", "Nizampura", "Race Course", "Ellora Park"],
      },
      {
        "@type": "Organization",
        "@id": "https://weddingplannervadodara.in/#organization",
        name: "Wedding Planner Vadodara",
        url: "https://weddingplannervadodara.in",
        logo: "https://weddingplannervadodara.in/logo.png",
        foundingDate: "2010",
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
