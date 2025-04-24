import type { Metadata } from "next"
import AviationClientPage from "./AviationClientPage"

export const metadata: Metadata = {
  title: "Aviation & IATA Courses | SKYWAY Institute Dubai",
  description:
    "Comprehensive aviation training programs with IATA, ICAO, UFTAA, and FIATA certifications at SKYWAY Institute Dubai. Advance your career in the aviation industry.",
  keywords: [
    "IATA courses Dubai",
    "aviation training Dubai",
    "ICAO certification UAE",
    "airline training programs",
    "cargo and logistics courses",
    "travel and tourism certification",
  ],
  alternates: {
    canonical: "/courses/aviation",
  },
}

export default function AviationPage() {
  return <AviationClientPage />
}
