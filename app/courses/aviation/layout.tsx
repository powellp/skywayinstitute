import type React from "react"
import type { Metadata } from "next"
import CourseNavigation from "./course-navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | SKYWAY Institute Dubai",
    default: "Aviation Courses | SKYWAY Institute Dubai",
  },
  description: "Explore our comprehensive aviation training programs at SKYWAY Institute Dubai.",
}

export default function AviationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <CourseNavigation />
      {children}
    </div>
  )
}
