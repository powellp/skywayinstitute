import type React from "react"
import CourseNavigation from "@/components/course-navigation"

export default function CybersecurityLayout({ children }: { children: React.ReactNode }) {
  const cybersecurityRoutes = [
    { name: "All Cybersecurity Courses", href: "/courses/cybersecurity" },
    { name: "Ethical Hacking", href: "/courses/cybersecurity/ethical-hacking" },
    { name: "Security Certifications", href: "/courses/cybersecurity/certifications" },
    { name: "Network Security", href: "/courses/cybersecurity/network-security" },
  ]

  return (
    <>
      <CourseNavigation routes={cybersecurityRoutes} backLink={{ name: "All Courses", href: "/courses" }} />
      {children}
    </>
  )
}
