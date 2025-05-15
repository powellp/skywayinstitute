"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Arabic navigation structure
const navigation = [
  { name: "الرئيسية", href: "/ar-AE" },
  { name: "من نحن", href: "/ar-AE/about" },
  { name: "ماذا نقدم", href: "/ar-AE/services" },
  { name: "الدورات", href: "/ar-AE/courses" },
  { name: "تدريب الشركات", href: "/ar-AE/corporate" },
  { name: "اتصل بنا", href: "/ar-AE/contact" },
]

// Arabic courses data
const allCourses = [
  // IATA & Aviation
  { name: "شهادات إياتا", href: "/ar-AE/courses/aviation/iata", category: "إياتا والطيران" },
  { name: "عمليات المطار", href: "/ar-AE/courses/aviation/airport-operations", category: "إياتا والطيران" },
  // Other courses omitted for brevity
]

export default function HeaderAr() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)

    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const filteredResults = allCourses
      .filter((course) => course.name.includes(query) || course.category.includes(query))
      .slice(0, 5)

    setSearchResults(filteredResults)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/ar-AE" className="-m-1.5 p-1.5">
            <span className="sr-only">معهد سكاي واي</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-skyway-800">سكاي واي</span>
              <span className="mr-1 text-2xl font-light text-skyway-600">معهد</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 text-gray-900 hover:text-skyway-600 relative py-2",
                pathname === item.href &&
                  "text-skyway-600 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-skyway-600",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <Button asChild className="mr-6">
            <Link href="/ar-AE/contact" className="text-sm font-semibold leading-6">
              سجل الآن
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/ar-AE" className="-m-1.5 p-1.5">
                  <span className="sr-only">معهد سكاي واي</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-skyway-800">سكاي واي</span>
                    <span className="mr-1 text-2xl font-light text-skyway-600">معهد</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">إغلاق القائمة</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button asChild className="w-full">
                      <Link href="/ar-AE/contact" onClick={() => setMobileMenuOpen(false)}>
                        سجل الآن
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
