"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Arabic navigation structure
const navigation = [
  { name: "الرئيسية", href: "/ar-AE" },
  { name: "من نحن", href: "/ar-AE/about" },
  { name: "ماذا نقدم", href: "/ar-AE/services" },
  {
    name: "الدورات",
    href: "/ar-AE/courses",
    submenu: [
      {
        name: "إياتا والطيران",
        href: "/ar-AE/courses/aviation",
        subcategories: [
          { name: "شهادات إياتا", href: "/ar-AE/courses/aviation/iata" },
          { name: "عمليات المطار", href: "/ar-AE/courses/aviation/airport-operations" },
          { name: "السفر والسياحة", href: "/ar-AE/courses/aviation/travel-tourism" },
        ],
      },
      // Other categories omitted for brevity
      { name: "جميع الدورات", href: "/ar-AE/courses" },
    ],
  },
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
          {navigation.map((item) =>
            !item.submenu ? (
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
            ) : (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-skyway-600">
                    {item.name} <ChevronDown className="mr-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[280px] p-2">
                  {/* Dropdown content */}
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </div>

        {/* Search and CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4 lg:justify-end">
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setIsSearching(!isSearching)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="البحث عن الدورات"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Search dropdown */}
            {isSearching && (
              <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث عن الدورات..."
                    className="w-full py-2 pr-10 pl-4 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-skyway-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Search results */}
                {searchResults.length > 0 && (
                  <div className="mt-2">
                    <ul className="py-1 overflow-auto max-h-60">
                      {searchResults.map((course, index) => (
                        <li key={index}>
                          <Link
                            href={course.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-skyway-50 rounded-md"
                            onClick={() => {
                              setIsSearching(false)
                              setSearchQuery("")
                            }}
                          >
                            <span className="font-medium">{course.name}</span>
                            <span className="mr-2 text-xs text-gray-500">في {course.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <Button asChild>
            <Link href="/ar-AE/contact" className="text-sm font-semibold leading-6">
              سجل الآن
            </Link>
          </Button>

          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-skyway-600">
            English
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="lg:hidden fixed inset-0 z-50 bg-white">{/* Mobile menu content */}</div>}
    </header>
  )
}
