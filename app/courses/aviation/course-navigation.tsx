"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export default function CourseNavigation() {
  const pathname = usePathname()

  const aviationRoutes = [
    { name: "All Aviation Courses", href: "/courses/aviation" },
    { name: "IATA Certifications", href: "/courses/aviation/iata" },
    { name: "ICAO Programs", href: "/courses/aviation/icao" },
    { name: "Logistics & Cargo", href: "/courses/aviation/logistics" },
  ]

  return (
    <nav className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide">
            {aviationRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === route.href
                    ? "bg-skyway-50 text-skyway-700"
                    : "text-gray-600 hover:text-skyway-600 hover:bg-gray-50",
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:block">
            <Link href="/courses" className="flex items-center text-sm text-gray-500 hover:text-skyway-600">
              All Courses <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
