"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import LanguageSwitcher from "@/components/language-switcher"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/services" },
  {
    name: "Courses",
    href: "/courses",
    submenu: [
      {
        name: "IATA & Aviation",
        href: "/courses/aviation",
        subcategories: [
          { name: "IATA Certifications", href: "/courses/aviation/iata" },
          { name: "Airport Operations", href: "/courses/aviation/airport-operations" },
          { name: "Travel & Tourism", href: "/courses/aviation/travel-tourism" },
        ],
      },
      {
        name: "Software & IT",
        href: "/courses/software-it",
        subcategories: [
          { name: "Web Development", href: "/courses/software-it/web-development" },
          { name: "Data Science & AI", href: "/courses/software-it/data-science" },
          { name: "Mobile App Development", href: "/courses/software-it/mobile-apps" },
        ],
      },
      {
        name: "Cybersecurity",
        href: "/courses/cybersecurity",
        subcategories: [
          { name: "Ethical Hacking", href: "/courses/cybersecurity/ethical-hacking" },
          { name: "Network Security", href: "/courses/cybersecurity/network-security" },
        ],
      },
      {
        name: "Languages",
        href: "/courses/languages",
        subcategories: [
          { name: "IELTS Preparation", href: "/courses/languages/ielts" },
          { name: "EmSAT Preparation", href: "/courses/languages/emsat" },
          { name: "Business English", href: "/courses/languages/business-english" },
        ],
      },
      { name: "All Courses", href: "/courses" },
    ],
  },
  { name: "Corporate", href: "/corporate" },
  { name: "Contact", href: "/contact" },
]

const allCourses = [
  // IATA & Aviation
  { name: "IATA Certifications", href: "/courses/aviation/iata", category: "IATA & Aviation" },
  { name: "Airport Operations", href: "/courses/aviation/airport-operations", category: "IATA & Aviation" },
  { name: "Travel & Tourism", href: "/courses/aviation/travel-tourism", category: "IATA & Aviation" },

  // Software & IT
  { name: "Web Development", href: "/courses/software-it/web-development", category: "Software & IT" },
  { name: "Data Science & AI", href: "/courses/software-it/data-science", category: "Software & IT" },
  { name: "Mobile App Development", href: "/courses/software-it/mobile-apps", category: "Software & IT" },

  // Cybersecurity
  { name: "Ethical Hacking", href: "/courses/cybersecurity/ethical-hacking", category: "Cybersecurity" },
  { name: "Network Security", href: "/courses/cybersecurity/network-security", category: "Cybersecurity" },

  // Languages
  { name: "IELTS Preparation", href: "/courses/languages/ielts", category: "Languages" },
  { name: "EmSAT Preparation", href: "/courses/languages/emsat", category: "Languages" },
  { name: "Business English", href: "/courses/languages/business-english", category: "Languages" },

  // Engineering & CAD
  { name: "AutoCAD", href: "/courses/engineering-cad/autocad", category: "Engineering & CAD" },
  { name: "3D Modeling", href: "/courses/engineering-cad/3d-modeling", category: "Engineering & CAD" },

  // Accounting & Finance
  {
    name: "Financial Accounting",
    href: "/courses/accounting-finance/financial-accounting",
    category: "Accounting & Finance",
  },
  {
    name: "Investment Management",
    href: "/courses/accounting-finance/investment-management",
    category: "Accounting & Finance",
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)

  // Handle search functionality
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([])
        return
      }

      try {
        const response = await fetch(`/api/courses?q=${encodeURIComponent(searchQuery)}`)
        if (response.ok) {
          const data = await response.json()
          setSearchResults(data.slice(0, 5)) // Limit to 5 results
        }
      } catch (error) {
        console.error("Error searching courses:", error)
      }
    }

    // Debounce the search to avoid too many requests
    const timeoutId = setTimeout(() => {
      fetchSearchResults()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // Handle click outside to close search results
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearching(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchRef])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SKYWAY Institute</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-skyway-800">SKYWAY</span>
              <span className="ml-1 text-2xl font-light text-skyway-600">Institute</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            !item.submenu ? (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 text-gray-900 hover:text-skyway-600 relative py-2",
                  pathname === item.href &&
                    "text-skyway-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-skyway-600",
                )}
              >
                {item.name}
              </Link>
            ) : (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-skyway-600">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[280px] p-2">
                  <div className="grid grid-cols-1 gap-1">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.name} className="space-y-1">
                        {subitem.subcategories ? (
                          <>
                            <Link
                              href={subitem.href}
                              className="block w-full rounded-md px-3 py-2 text-sm font-medium text-skyway-800 hover:bg-skyway-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                            <div className="pl-3 space-y-1 border-l-2 border-skyway-100 ml-3">
                              {subitem.subcategories.map((subcategory) => (
                                <DropdownMenuItem key={subcategory.name} asChild className="px-3 py-1 text-xs">
                                  <Link
                                    href={subcategory.href}
                                    className="w-full text-gray-600 hover:text-skyway-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subcategory.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          </>
                        ) : (
                          <DropdownMenuItem key={subitem.name} asChild className="px-3 py-2">
                            <Link
                              href={subitem.href}
                              className="w-full font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4 lg:justify-end">
          <LanguageSwitcher />
          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setIsSearching(!isSearching)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search courses"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dropdown search panel */}
            {isSearching && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full py-2 pl-10 pr-4 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-skyway-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  {searchQuery && (
                    <button
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Search Results */}
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
                            <span className="ml-2 text-xs text-gray-500">in {course.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="px-3 py-3 text-sm text-gray-700">No courses found for "{searchQuery}"</div>
                )}
              </div>
            )}
          </div>

          <Button asChild>
            <Link href="/contact" className="text-sm font-semibold leading-6">
              Enroll Now
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Add search bar to mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">SKYWAY Institute</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-skyway-800">SKYWAY</span>
                    <span className="ml-1 text-2xl font-light text-skyway-600">Institute</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mt-4 relative">
                <div className="flex items-center border rounded-md border-gray-300 bg-gray-50">
                  <div className="flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full py-2.5 pl-2 pr-4 text-sm bg-transparent focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button className="pr-3 text-gray-400 hover:text-gray-600" onClick={() => setSearchQuery("")}>
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Mobile Search Results */}
                {searchResults.length > 0 && (
                  <div className="w-full mt-2 bg-white rounded-md shadow-sm border border-gray-200">
                    <ul className="py-1 overflow-auto max-h-60">
                      {searchResults.map((course, index) => (
                        <li key={index}>
                          <Link
                            href={course.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setSearchQuery("")
                            }}
                          >
                            <span className="font-medium">{course.name}</span>
                            <span className="ml-2 text-xs text-gray-500">in {course.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="w-full mt-2 bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="px-4 py-3 text-sm text-gray-700">No courses found for "{searchQuery}"</div>
                  </div>
                )}
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {!item.submenu ? (
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <>
                            <div className="-mx-3 px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                              {item.name}
                            </div>
                            <div className="ml-4 space-y-2">
                              {item.submenu.map((subitem) => (
                                <div key={subitem.name}>
                                  <Link
                                    href={subitem.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subitem.name}
                                  </Link>
                                  {subitem.subcategories && (
                                    <div className="ml-4 space-y-1 border-l-2 border-skyway-100 pl-2">
                                      {subitem.subcategories.map((subcategory) => (
                                        <Link
                                          key={subcategory.name}
                                          href={subcategory.href}
                                          className="-mx-3 block rounded-lg px-3 py-1 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {subcategory.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        Enroll Now
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
