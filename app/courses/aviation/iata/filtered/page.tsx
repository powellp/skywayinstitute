import type { Metadata } from "next"
import IATACourseFilter from "@/components/iata-course-filter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "IATA Courses | Filter and Compare | SKYWAY Institute",
  description:
    "Filter and compare IATA certification programs by category, level, duration, and price to find the perfect course for your career goals.",
}

// This data would normally come from your database or API
const iataCertifications = [
  {
    id: "airport-operations-fundamentals",
    title: "IATA Airport Operations Fundamentals",
    description:
      "The IATA Airport Operations Training course is one of the most sought-after certification programs in the UAE. Learn essential principles of airport operations, including terminal management, ground handling, and safety procedures.",
    duration: "2 months",
    level: "Foundation",
    features: [
      "Understand aviation history and airports' economic role",
      "Identify airport customers and partners",
      "Learn operational and business functions of airports",
      "Apply knowledge within an airport environment",
      "Gain insights into future airport technologies",
    ],
    image: "/images/iata/airport-operations.jpg",
  },
  {
    id: "airline-cabin-crew-training",
    title: "IATA Airline Cabin Crew Training",
    description:
      "Comprehensive training for aspiring cabin crew members covering safety procedures, customer service, and emergency management.",
    duration: "4 weeks",
    level: "Foundation",
    features: [
      "Cabin safety procedures and equipment",
      "Customer service excellence",
      "Emergency response protocols",
      "Passenger handling techniques",
      "Grooming and presentation standards",
    ],
    image: "/images/iata/cabin-crew.jpg",
  },
  {
    id: "passenger-ground-services",
    title: "IATA Passenger Ground Services",
    description:
      "Training for ground staff handling passenger services including check-in, boarding, and special assistance.",
    duration: "4 weeks",
    level: "Intermediate",
    features: [
      "Check-in procedures and systems",
      "Boarding process management",
      "Special service requests handling",
      "Irregular operations management",
      "Customer service excellence",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "airport-ramp-service",
    title: "IATA Airport Ramp Service",
    description:
      "Specialized training for ramp service operations including aircraft handling, loading, and safety procedures.",
    duration: "3 weeks",
    level: "Intermediate",
    features: [
      "Aircraft marshalling and parking",
      "Baggage and cargo loading",
      "Aircraft servicing procedures",
      "Ramp safety management",
      "Ground support equipment operation",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "dangerous-goods-regulations",
    title: "IATA Dangerous Goods Regulations (DGR)",
    description:
      "Essential training for handling, accepting, and processing dangerous goods in air transport according to international regulations.",
    duration: "5 days",
    level: "Specialized",
    features: [
      "Classification of dangerous goods",
      "Packaging requirements and specifications",
      "Documentation and labeling",
      "Acceptance procedures",
      "Emergency response",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "air-transport-fundamentals",
    title: "IATA Air Transport Fundamentals",
    description:
      "A comprehensive introduction to the air transport industry covering airlines, airports, regulations, and key operational aspects.",
    duration: "2 weeks",
    level: "Foundation",
    features: [
      "Aviation industry structure",
      "Airline business models",
      "Airport operations",
      "Regulatory frameworks",
      "Industry trends and challenges",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "aviation-security-awareness",
    title: "IATA Aviation Security Awareness",
    description:
      "Essential security training for aviation personnel to identify threats, implement security measures, and ensure compliance with international regulations.",
    duration: "2 days",
    level: "Foundation",
    features: [
      "Security threats and countermeasures",
      "Passenger and baggage screening",
      "Access control procedures",
      "Security incident reporting",
      "Regulatory compliance",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "travel-and-tourism",
    title: "IATA Travel and Tourism",
    description:
      "Comprehensive training on travel industry operations, including airline reservations, ticketing, tourism products, and customer service excellence.",
    duration: "4 weeks",
    level: "Foundation",
    features: [
      "Travel industry fundamentals",
      "Reservation systems overview",
      "Travel documentation requirements",
      "Tourism products and services",
      "Customer service skills",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function FilteredIATACoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">IATA Course Finder</h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-skyway-100">
              Filter and compare IATA certification programs to find the perfect match for your career goals
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/courses/aviation/iata">
                <ArrowLeft className="h-4 w-4" /> Back to All IATA Courses
              </Link>
            </Button>
          </div>

          <IATACourseFilter courses={iataCertifications} />
        </div>
      </section>
    </div>
  )
}
