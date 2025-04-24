import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "../globals.css"
import Header from "@/components/header-ar"
import Footer from "@/components/footer-ar"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import { organizationSchema } from "../structured-data"

const cairo = Cairo({ subsets: ["arabic"], display: "swap" })

export const metadata: Metadata = {
  title: {
    template: "%s | معهد سكاي واي دبي",
    default: "معهد سكاي واي - الوجهة الأولى في دبي للنمو المهني",
  },
  description:
    "يقدم معهد سكاي واي برامج تدريبية عالية التأثير مصممة لأهدافك مع تنسيقات تعليمية مرنة - عبر الإنترنت أو في الموقع أو في مكان عملك.",
  keywords: [
    "معهد تدريب دبي",
    "دورات مهنية دبي",
    "شهادة إياتا دبي",
    "دورات معتمدة من هيئة المعرفة والتنمية البشرية",
    "تطوير مهني دبي",
    "تدريب الشركات الإمارات",
  ],
  alternates: {
    canonical: "/ar-AE",
    languages: {
      "en-US": "/",
      "ar-AE": "/ar-AE",
    },
  },
}

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={cairo.className}>
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
