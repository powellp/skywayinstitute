import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { organizationSchema } from "./structured-data"
// Import the WebVitals component at the top
import { WebVitals } from "./web-vitals"

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={inter.className}>
        <WebVitals />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
