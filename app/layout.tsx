import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { organizationSchema } from "./structured-data"
// Add this import
import WebVitalsClient from "./web-vitals-client"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: {
    template: "%s | SKYWAY Institute Dubai",
    default: "SKYWAY Institute - Dubai's Premier Destination for Professional Growth",
  },
  description:
    "SKYWAY Institute delivers high-impact training programs tailored to your goals with flexible learning formats—online, onsite, or at your workplace.",
  keywords: [
    "training institute dubai",
    "professional courses dubai",
    "IATA certification dubai",
    "KHDA approved courses",
    "career development dubai",
    "corporate training uae",
  ],
  authors: [{ name: "SKYWAY Institute" }],
  creator: "SKYWAY Institute",
  publisher: "SKYWAY Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://skywayinstitute.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-AE": "/ar-AE",
    },
  },
  openGraph: {
    title: "SKYWAY Institute - Dubai's Premier Destination for Professional Growth",
    description:
      "SKYWAY Institute delivers high-impact training programs tailored to your goals with flexible learning formats.",
    url: "https://skywayinstitute.com",
    siteName: "SKYWAY Institute",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKYWAY Institute - Dubai's Premier Destination for Professional Growth",
    description:
      "SKYWAY Institute delivers high-impact training programs tailored to your goals with flexible learning formats.",
    creator: "@skywayinstitute",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optimize the layout for better performance */}

        {/* Add preload for critical fonts */}
        <link rel="preload" href={inter.src} as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Add a preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add a preload hint for the main navigation */}
        <link rel="preload" href="/courses/aviation" as="fetch" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={inter.className}>
        {/* Web Vitals measurement - loaded client-side only */}
        <WebVitalsClient />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {/* Add priority to critical images in the Header component */}
          {/* Update the Header component to include a performance prop */}
          <Header priority={true} />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
