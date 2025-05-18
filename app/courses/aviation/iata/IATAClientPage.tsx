"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Award, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// IATA course data
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
      "Learn operational and business functions of airports",
      "Apply knowledge within an airport environment",
      "Gain insights into future airport technologies",
    ],
    image: "/images/iata/airport-operations.jpg",
    href: "/courses/aviation/iata/airport-operations-fundamentals",
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
    href: "/courses/aviation/iata/airline-cabin-crew-training",
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
    href: "/courses/aviation/iata/passenger-ground-services",
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
    href: "/courses/aviation/iata/airport-ramp-service",
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
    href: "/courses/aviation/iata/ground-operations-management",
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
    href: "/courses/aviation/iata/cargo-introductory-course",
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
    href: "/courses/aviation/iata/air-cargo-advanced-marketing",
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
    href: "/courses/aviation/iata/cargo-supply-chain-transport-modes",
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
    href: "/courses/aviation/iata/aviation-security-awareness",
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
    href: "/courses/aviation/iata/cargo-security-awareness",
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
    href: "/courses/aviation/iata/safety-management-systems",
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
    href: "/courses/aviation/iata/live-animals-cargo-personnel",
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
    href: "/courses/aviation/iata/travel-tourism-consultant",
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
    href: "/courses/aviation/iata/travel-tourism-amadeus",
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
    href: "/courses/aviation/iata/travel-tourism-galileo",
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
    href: "/courses/aviation/iata/travel-tourism-sabre",
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
    href: "/courses/aviation/iata/quality-management-systems",
  },
  {
    id: "pharma-products-vaccines",
    title: "IATA Temperature Controlled Pharmaceutical Products (TCP) & Vaccines",
    description:
      "Training on the handling and transporting of pharmaceutical products and vaccines that require temperature control.",
    duration: "2 weeks",
    level: "Specialized",
    features: [
      "Temperature control requirements",
      "Packaging and labeling",
      "Storage and handling",
      "Documentation",
      "Regulatory compliance",
    ],
    image: "/placeholder.svg?height=200&width=300",
    href: "/courses/aviation/iata/pharma-products-vaccines",
  },
]

// Career opportunities
const careerOpportunities = [
  {
    title: "Airline Operations",
    description: "Positions in airline management, flight operations, and customer service.",
  },
  {
    title: "Airport Management",
    description: "Careers in airport operations, terminal management, and ground handling services.",
  },
  {
    title: "Travel Agencies",
    description: "Roles as travel consultants, ticketing agents, and tour operators.",
  },
  {
    title: "Cargo Operations",
    description: "Opportunities in air cargo handling, logistics, and supply chain management.",
  },
  {
    title: "Aviation Security",
    description: "Careers in aviation security, threat assessment, and security management systems.",
  },
  {
    title: "Ground Handling Services",
    description: "Positions in ground handling companies, providing services to airlines at airports.",
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
              Globally recognized qualifications for aviation, travel, and cargo professionals
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-skyway-800"
              >
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="careers">Career Paths</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">IATA Training Overview</h2>
                  <p className="text-gray-600 mb-4">
                    The International Air Transport Association (IATA) is the trade association for the world's
                    airlines, representing some 290 airlines or 83% of total air traffic. IATA supports many areas of
                    aviation activity and helps formulate industry policy on critical aviation issues.
                  </p>
                  <p className="text-gray-600 mb-4">
                    SKYWAY Institute is proud to be an IATA Authorized Training Center (ATC), offering a comprehensive
                    range of IATA-certified courses designed to meet the needs of aviation professionals at all levels.
                    Our courses cover various aspects of the aviation industry, including airport operations, airline
                    management, cargo handling, travel and tourism, and more.
                  </p>
                  <p className="text-gray-600">
                    Whether you're looking to start a career in aviation or advance your existing career, our
                    IATA-certified courses provide the knowledge, skills, and credentials you need to succeed in this
                    dynamic industry.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose IATA Certification?</h3>
                    <ul className="grid grid-cols-1 gap-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Global Recognition:</strong> IATA certifications are recognized worldwide by airlines,
                          airports, and aviation-related organizations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Industry-Relevant Skills:</strong> Courses are developed by industry experts and focus
                          on practical, applicable knowledge.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Career Advancement:</strong> IATA certifications can open doors to new career
                          opportunities and advancement in the aviation industry.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Up-to-Date Content:</strong> Courses are regularly updated to reflect the latest
                          industry standards, regulations, and best practices.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Networking Opportunities:</strong> Connect with industry professionals and expand your
                          professional network.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">SKYWAY Institute Advantages</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">IATA Authorized Training Center</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Experienced industry instructors</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Flexible training schedules</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">State-of-the-art training facilities</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Practical, hands-on training</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Career guidance and placement assistance</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Training Options</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-600">Regular weekday programs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-600">Weekend programs for working professionals</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-600">Corporate training packages</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-600">Online and hybrid learning options</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Button asChild className="w-full">
                          <Link href="/contact">
                            <span className="flex items-center justify-center">
                              Request Information <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">IATA Certification Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {iataCertifications.map((certification) => (
                    <Card
                      key={certification.id}
                      className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={certification.image || "/placeholder.svg?height=200&width=300"}
                          alt={certification.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="bg-skyway-900 text-white p-4">
                        <div className="flex justify-between items-center">
                          <Award className="h-6 w-6" />
                          <div className="flex space-x-2">
                            <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                              {certification.duration}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                              {certification.level}
                            </span>
                          </div>
                        </div>
                        <h3 className="mt-2 text-xl font-bold">{certification.title}</h3>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4">{certification.description}</p>
                        <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                        <ul className="space-y-2 mb-6">
                          {certification.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-2">
                          <Button asChild className="w-full">
                            <Link href={certification.href} className="flex items-center justify-center">
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                            <Link href="/contact" className="flex items-center justify-center">
                              Enroll Now
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="careers" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                <p className="text-gray-600 mb-8">
                  IATA certifications open doors to a wide range of career opportunities in the aviation industry. Here
                  are some of the career paths you can pursue with IATA certifications:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {careerOpportunities.map((career, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                      <p className="text-gray-600">{career.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Demand</h3>
                  <p className="text-gray-600 mb-4">
                    The aviation industry in the UAE and globally continues to grow, creating a high demand for
                    qualified professionals with IATA certifications. Dubai's strategic location as a global aviation
                    hub and the expansion of airlines and airports in the region make it an ideal place to pursue a
                    career in aviation.
                  </p>
                  <p className="text-gray-600">
                    SKYWAY Institute's IATA-certified courses are designed to meet this industry demand by providing
                    students with the knowledge, skills, and credentials needed to succeed in the aviation industry.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "What is IATA and why are their certifications important?",
                      answer:
                        "IATA (International Air Transport Association) is the trade association for the world's airlines, representing some 290 airlines or 83% of total air traffic. IATA certifications are globally recognized in the aviation industry and demonstrate that you have met international standards of knowledge and competence in your field.",
                    },
                    {
                      question: "Do I need prior experience in aviation to take IATA courses?",
                      answer:
                        "Most entry-level IATA courses do not require prior experience in aviation. These courses are designed to provide a solid foundation for those new to the industry. However, some advanced courses may have prerequisites or recommend prior knowledge or experience.",
                    },
                    {
                      question: "How long are IATA courses?",
                      answer:
                        "The duration of IATA courses varies depending on the specific course and training format. Courses can range from a few days to several weeks. We offer flexible scheduling options, including regular weekday programs, weekend programs, and corporate training packages.",
                    },
                    {
                      question: "Are IATA certifications recognized internationally?",
                      answer:
                        "Yes, IATA certifications are recognized globally by airlines, airports, travel agencies, freight forwarders, and other aviation-related organizations. This international recognition makes IATA certifications valuable for career advancement in the global aviation industry.",
                    },
                    {
                      question: "What is the difference between IATA and ICAO courses?",
                      answer:
                        "IATA (International Air Transport Association) represents airlines and focuses on commercial aspects of air transport, while ICAO (International Civil Aviation Organization) is a UN specialized agency that sets standards for aviation safety, security, and efficiency. Both offer valuable certifications, with IATA courses often focusing more on commercial operations and ICAO on regulatory standards.",
                    },
                    {
                      question: "How often do I need to renew my IATA certification?",
                      answer:
                        "The renewal requirements for IATA certifications vary depending on the specific certification. Some certifications require renewal every 1-3 years, while others may be valid for longer periods. We provide information on renewal requirements for each certification and offer recurrent training courses.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to take your aviation career to new heights?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our IATA certification programs and gain the skills and knowledge to excel in the aviation
                  industry.
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
