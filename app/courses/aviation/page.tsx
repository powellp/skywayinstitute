import type { Metadata } from "next"
import AviationClientPage from "./AviationClientPage"

// Update the metadata to improve SEO for aviation courses
export const metadata: Metadata = {
  title: "Aviation & IATA Courses | SKYWAY Institute Dubai",
  description:
    "Comprehensive aviation training programs with IATA, ICAO, and FIATA certifications at SKYWAY Institute Dubai. Advance your career with our industry-recognized courses.",
  keywords: [
    "IATA courses Dubai",
    "aviation training Dubai",
    "ICAO certification UAE",
    "airline training programs",
    "cargo and logistics courses",
    "travel and tourism certification",
    "airport operations training",
    "cabin crew certification",
  ],
  alternates: {
    canonical: "/courses/aviation",
  },
}

export default function AviationPage() {
  return <AviationClientPage />
}
