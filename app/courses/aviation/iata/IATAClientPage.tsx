"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Award, ArrowRight } from "lucide-react"

const iataCertifications = [
  {
    id: "airport-operations-fundamentals",
    title: "IATA Airport Operations Fundamentals",
    description:
      "Learn the essential principles of airport operations, including terminal management, ground handling, and safety procedures.",
    duration: "3 weeks",
    level: "Foundation",
    features: [
      "Airport infrastructure and layout",
      "Passenger flow management",
      "Ground handling operations",
      "Safety and security procedures",
      "Airport service quality management",
    ],
    image: "/images/iata/airport-operations.jpg", // Updated image path
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
    image: "/images/iata/cabin-crew.jpg", // Updated image path
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
    id: "ground-operations-management",
    title: "IATA Ground Operations Management",
    description:
      "Advanced training for professionals managing ground operations, focusing on efficiency, safety, and service quality.",
    duration: "5 weeks",
    level: "Advanced",
    features: [
      "Ground operations planning and control",
      "Resource management and optimization",
      "Performance monitoring and improvement",
      "Risk management in ground operations",
      "Leadership in ground handling teams",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cargo-introductory-course",
    title: "IATA Cargo Introductory Course",
    description:
      "Introduction to air cargo operations, documentation, and handling procedures for those entering the cargo sector.",
    duration: "3 weeks",
    level: "Foundation",
    features: [
      "Air cargo industry overview",
      "Cargo documentation and procedures",
      "Cargo handling equipment and techniques",
      "Dangerous goods regulations",
      "Cargo security requirements",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "air-cargo-advanced-marketing",
    title: "IATA Air Cargo Advanced Marketing",
    description:
      "Advanced course on cargo marketing strategies, customer relationship management, and business development in air cargo.",
    duration: "4 weeks",
    level: "Advanced",
    features: [
      "Cargo market analysis and segmentation",
      "Cargo product development and pricing",
      "Customer relationship management",
      "Digital marketing for air cargo",
      "Business development strategies",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cargo-supply-chain-transport-modes",
    title: "IATA Cargo Supply Chain and Transport Modes",
    description:
      "Comprehensive overview of the cargo supply chain and various transport modes in the logistics industry.",
    duration: "4 weeks",
    level: "Intermediate",
    features: [
      "Supply chain management principles",
      "Multimodal transport operations",
      "Logistics network optimization",
      "Transport regulations and compliance",
      "Technology in supply chain management",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "aviation-security-awareness",
    title: "IATA Aviation Security Awareness",
    description:
      "Essential training on aviation security principles, threat detection, and security procedures for aviation personnel.",
    duration: "2 weeks",
    level: "Foundation",
    features: [
      "Security threats in aviation",
      "Security regulations and compliance",
      "Passenger and baggage screening",
      "Security incident response",
      "Security culture development",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cargo-security-awareness",
    title: "IATA Cargo Security Awareness",
    description:
      "Specialized security training for cargo operations, focusing on threat detection, screening, and secure supply chains.",
    duration: "2 weeks",
    level: "Foundation",
    features: [
      "Cargo security threats and risks",
      "Secure supply chain management",
      "Cargo screening methods",
      "Security documentation and procedures",
      "Regulatory compliance in cargo security",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "safety-management-systems",
    title: "IATA Safety Management Systems Fundamentals",
    description: "Comprehensive training on implementing and managing safety systems in aviation operations.",
    duration: "3 weeks",
    level: "Intermediate",
    features: [
      "Safety management principles",
      "Hazard identification and risk assessment",
      "Safety performance monitoring",
      "Safety culture development",
      "Regulatory requirements for SMS",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "live-animals-cargo-personnel",
    title: "IATA Live Animals for Cargo Personnel",
    description:
      "Specialized training for handling and transporting live animals in air cargo operations safely and humanely.",
    duration: "2 weeks",
    level: "Specialized",
    features: [
      "Live animal handling procedures",
      "Container requirements and specifications",
      "Animal welfare regulations",
      "Documentation for animal transport",
      "Emergency procedures for live animal shipments",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "travel-tourism-consultant",
    title: "IATA Travel and Tourism Consultant",
    description:
      "Professional training for travel consultants covering booking systems, customer service, and travel product knowledge.",
    duration: "4 weeks",
    level: "Intermediate",
    features: [
      "Travel industry operations",
      "Customer needs assessment",
      "Travel product knowledge",
      "Booking and reservation systems",
      "Customer service excellence",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "travel-tourism-amadeus",
    title: "IATA Foundation in Travel & Tourism with Amadeus Diploma",
    description:
      "Comprehensive training in travel and tourism fundamentals with specialized training in the Amadeus reservation system.",
    duration: "8 weeks",
    level: "Foundation",
    features: [
      "Travel industry fundamentals",
      "Amadeus system navigation and functions",
      "Flight, hotel, and car reservations",
      "Fare calculations and ticketing",
      "Customer service and sales techniques",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "travel-tourism-galileo",
    title: "IATA Foundation in Travel & Tourism with Galileo Diploma",
    description:
      "Comprehensive training in travel and tourism fundamentals with specialized training in the Galileo reservation system.",
    duration: "8 weeks",
    level: "Foundation",
    features: [
      "Travel industry fundamentals",
      "Galileo system navigation and functions",
      "Flight, hotel, and car reservations",
      "Fare calculations and ticketing",
      "Customer service and sales techniques",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "travel-tourism-sabre",
    title: "IATA Foundation in Travel & Tourism with Sabre Diploma",
    description:
      "Comprehensive training in travel and tourism fundamentals with specialized training in the Sabre reservation system.",
    duration: "8 weeks",
    level: "Foundation",
    features: [
      "Travel industry fundamentals",
      "Sabre system navigation and functions",
      "Flight, hotel, and car reservations",
      "Fare calculations and ticketing",
      "Customer service and sales techniques",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "quality-management-systems",
    title: "IATA Quality Management Systems",
    description:
      "Training on implementing and managing quality systems in aviation operations to ensure service excellence.",
    duration: "3 weeks",
    level: "Advanced",
    features: [
      "Quality management principles",
      "Process mapping and improvement",
      "Quality auditing techniques",
      "Corrective and preventive actions",
      "Quality culture development",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "pharma-products-vaccines",
    title: "IATA Transport of Pharma Products and Vaccines by Air",
    description:
      "Specialized training for handling temperature-sensitive pharmaceutical products and vaccines in air transport.",
    duration: "3 weeks",
    level: "Specialized",
    features: [
      "Pharmaceutical logistics requirements",
      "Temperature-controlled supply chains",
      "Packaging and container specifications",
      "Regulatory compliance for pharma transport",
      "Quality management in pharma logistics",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function IATAClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">IATA Certification Programs</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Globally recognized qualifications for aviation, travel, and logistics professionals
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose IATA Certifications?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                IATA (International Air Transport Association) certifications are globally recognized qualifications
                that validate your knowledge and skills in the aviation industry. As an IATA Authorized Training Center,
                SKYWAY Institute offers comprehensive IATA certification programs that can boost your career prospects
                in aviation, travel, and logistics.
              </p>
              <div className="mt-8">
                <ul className="space-y-4">
                  {[
                    "Globally recognized qualifications",
                    "Industry-relevant curriculum developed by experts",
                    "Enhanced career opportunities worldwide",
                    "Access to IATA's global network",
                    "Training delivered by certified instructors",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-skyway-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <div className="relative h-64 w-full lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/iata/hero-image.jpg" // Updated from placeholder
                  alt="IATA Certification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our IATA Certification Programs
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose from our comprehensive range of IATA-certified courses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {iataCertifications.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                </div>
                <CardHeader className="bg-skyway-900 text-white p-4">
                  <div className="flex justify-between items-center">
                    <Award className="h-6 w-6" />
                    <div className="flex space-x-2">
                      <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                        {cert.duration}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{cert.title}</h3>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6">
                    {cert.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={`/courses/aviation/iata/${cert.id}`} className="flex items-center justify-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Career Opportunities</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              IATA certifications open doors to exciting career paths in aviation
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Airlines",
                description:
                  "Roles in passenger services, cabin crew, operations, cargo handling, and management positions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Airports",
                description: "Positions in ground handling, terminal operations, security, and airport management.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Travel Agencies",
                description: "Careers in travel consulting, ticketing, tour operations, and agency management.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Cargo & Logistics",
                description:
                  "Opportunities in freight forwarding, cargo operations, supply chain management, and logistics.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Regulatory Bodies",
                description: "Roles in aviation authorities, compliance departments, and regulatory agencies.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Consultancy",
                description: "Opportunities as aviation consultants, trainers, and industry specialists.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-skyway-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((career, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                  {career.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                <p className="text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to advance your aviation career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our IATA certification programs and take your career to new heights.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-skyway-800"
                  >
                    <Link href="/courses/aviation">View All Aviation Courses</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
