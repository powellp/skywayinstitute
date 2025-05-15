import type React from "react"
import CourseNavigation from "@/components/course-navigation"

export default function AviationLayout({ children }: { children: React.ReactNode }) {
  const aviationRoutes = [
    { name: "All Aviation Courses", href: "/courses/aviation" },
    { name: "IATA Certifications", href: "/courses/aviation/iata" },
    { name: "ICAO Programs", href: "/courses/aviation/icao" },
    { name: "Logistics & Cargo", href: "/courses/aviation/logistics" },
  ]

  return (
    <>
      <CourseNavigation routes={aviationRoutes} backLink={{ name: "All Courses", href: "/courses" }} />
      {children}
    </>
  )
}
