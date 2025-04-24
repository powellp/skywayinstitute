"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Package, ArrowRight } from "lucide-react"

const logisticsPrograms = [
  {
    id: "fiata-diploma",
    title: "FIATA Diploma in Freight Forwarding",
    description: "Comprehensive training program covering all aspects of international freight forwarding operations.",
    duration: "6 months",
    level: "Professional",
    features: [
      "Introduction to freight forwarding",
      "Maritime transport operations",
      "Air cargo operations",
      "Multimodal transport",
      "Customs procedures and documentation",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cargo-operations",
    title: "Cargo Operations Management",
    description: "Specialized training in managing cargo operations, handling procedures, and operational efficiency.",
    duration: "4 weeks",
    level: "Intermediate",
    features: [
      "Cargo handling equipment and procedures",
      "Warehouse management",
      "Inventory control systems",
      "Cargo security protocols",
      "Performance management in cargo operations",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management",
    description: "Comprehensive training on managing the flow of goods and services from suppliers to customers.",
    duration: "5 weeks",
    level: "Advanced",
    features: [
      "Supply chain strategy and design",
      "Procurement and supplier management",
      "Inventory management",
      "Transportation and distribution",
      "Supply chain technology and systems",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "dangerous-goods",
    title: "Dangerous Goods Regulations",
    description: "Specialized training on the regulations and handling procedures for dangerous goods in transport.",
    duration: "3 weeks",
    level: "Intermediate",
    features: [
      "Classification of dangerous goods",
      "Packaging requirements",
      "Documentation procedures",
      "Handling and storage protocols",
      "Emergency response procedures",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "air-cargo-security",
    title: "Air Cargo Security",
    description: "Training on security measures and compliance requirements for air cargo operations.",
    duration: "2 weeks",
    level: "Intermediate",
    features: [
      "Security threats to air cargo",
      "Screening methods and technologies",
      "Secure supply chain procedures",
      "Regulatory compliance",
      "Security management systems",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LogisticsClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Logistics & Cargo Programs</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Globally recognized qualifications for logistics, freight forwarding, and supply chain professionals
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
                Why Choose Logistics & Cargo Training?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                The logistics and cargo industry is a vital component of global trade and commerce. SKYWAY Institute
                offers comprehensive training programs that prepare you for a successful career in this dynamic and
                growing field, with certifications from leading organizations like FIATA.
              </p>
              <div className="mt-8">
                <ul className="space-y-4">
                  {[
                    "Internationally recognized qualifications",
                    "Practical skills for immediate application",
                    "Industry-relevant curriculum developed by experts",
                    "Enhanced career opportunities worldwide",
                    "Training delivered by experienced professionals",
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Logistics Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Logistics & Cargo Programs
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose from our comprehensive range of logistics and cargo courses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {logisticsPrograms.map((program) => (
              <Card
                key={program.id}
                className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader className="bg-skyway-900 text-white p-4">
                  <div className="flex justify-between items-center">
                    <Package className="h-6 w-6" />
                    <div className="flex space-x-2">
                      <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{program.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link
                      href={`/courses/aviation/logistics/${program.id}`}
                      className="flex items-center justify-center"
                    >
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
              Logistics and cargo training opens doors to exciting career paths in global trade
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Freight Forwarding",
                description:
                  "Roles in international freight forwarding, customs clearance, and shipping documentation.",
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
                title: "Supply Chain Management",
                description: "Positions in supply chain planning, procurement, and logistics management.",
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
                title: "Air Cargo Operations",
                description: "Careers in air cargo handling, operations management, and cargo security.",
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
                title: "Warehouse Management",
                description: "Opportunities in warehouse operations, inventory management, and distribution centers.",
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
                title: "Shipping & Maritime",
                description: "Roles in shipping lines, port operations, and maritime logistics.",
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
                title: "E-commerce Logistics",
                description: "Opportunities in e-commerce fulfillment, last-mile delivery, and returns management.",
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
                  <span className="block">Ready to advance your logistics career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our logistics and cargo programs and become a specialist in global trade and supply chain
                  management.
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
