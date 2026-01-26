import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Best Wedding Planner in Vadodara | Professional Wedding Planners | Wedding Planning Services",
  description:
    "Looking for the best wedding planner in Vadodara? We are professional wedding planners offering complete wedding planning services, destination wedding planning, luxury wedding planning, budget wedding planner services across all 40 areas of Vadodara. Top wedding planners with 500+ weddings.",
  keywords:
    "wedding planner, wedding planners, best wedding planner, professional wedding planner, top wedding planners, wedding planning services, destination wedding planner, luxury wedding planner, budget wedding planner, wedding planner in Vadodara, wedding planner near me, wedding planner cost, wedding planner packages, indian wedding planner, hindu wedding planner, gujarati wedding planner",
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
    title: "Best Wedding Planner in Vadodara | Professional Wedding Planners",
    description:
      "Your trusted wedding planner in Vadodara for dream weddings. Full wedding planning, destination weddings, luxury weddings, budget weddings. 500+ successful weddings.",
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
    title: "Best Wedding Planner in Vadodara",
    description: "Professional wedding planners offering complete wedding planning services, destination weddings, luxury weddings in Vadodara",
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
        description: "Best wedding planner in Vadodara offering professional wedding planning services, destination wedding planning, luxury wedding planning, budget wedding planner services. 500+ successful weddings planned.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
