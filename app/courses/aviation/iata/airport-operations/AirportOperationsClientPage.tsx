"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Clock, Award, Users, BookOpen } from "lucide-react"

export default function AirportOperationsClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Course Content */}
      <div className="flex-grow">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <div className="bg-white sticky top-0 z-10 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <TabsList className="h-16 w-full justify-start bg-transparent space-x-8">
                <TabsTrigger
                  value="overview"
                  className={`text-base ${
                    activeTab === "overview"
                      ? "font-semibold text-skyway-600 border-b-2 border-skyway-600"
                      : "text-gray-500 hover:text-gray-700"
                  } border-0 bg-transparent px-1 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-none rounded-none`}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className={`text-base ${
                    activeTab === "curriculum"
                      ? "font-semibold text-skyway-600 border-b-2 border-skyway-600"
                      : "text-gray-500 hover:text-gray-700"
                  } border-0 bg-transparent px-1 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-none rounded-none`}
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className={`text-base ${
                    activeTab === "benefits"
                      ? "font-semibold text-skyway-600 border-b-2 border-skyway-600"
                      : "text-gray-500 hover:text-gray-700"
                  } border-0 bg-transparent px-1 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-none rounded-none`}
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className={`text-base ${
                    activeTab === "faq"
                      ? "font-semibold text-skyway-600 border-b-2 border-skyway-600"
                      : "text-gray-500 hover:text-gray-700"
                  } border-0 bg-transparent px-1 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-none rounded-none`}
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">IATA Airport Operations Fundamentals</h1>
                  <p className="text-lg text-gray-700 mb-6">
                    The IATA Airport Operations Fundamentals course provides a comprehensive introduction to airport
                    operations, covering key aspects of passenger handling, ramp operations, baggage processing, and
                    airport security. This course is designed for individuals seeking to start or advance their career
                    in airport operations.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Highlights</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Internationally recognized IATA certification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Comprehensive coverage of airport operations fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Practical exercises and case studies from real airport environments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Taught by industry professionals with extensive airport experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Career guidance and job placement assistance</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Who Should Attend</h2>
                  <p className="text-gray-700 mb-6">This course is ideal for:</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Individuals seeking to start a career in airport operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Current airport staff looking to enhance their knowledge and skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Aviation professionals transitioning to airport operations roles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Recent graduates interested in the aviation industry</span>
                    </li>
                  </ul>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Outcomes</h2>
                  <p className="text-gray-700 mb-4">Upon completion of this course, you will be able to:</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Understand the key components of airport operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Apply industry best practices for passenger handling and processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Implement effective baggage handling procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Ensure compliance with airport safety and security regulations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Coordinate effectively with various airport stakeholders</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-1">
                  <Card className="border-0 shadow-lg overflow-hidden mb-6">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="IATA Airport Operations"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-skyway-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-500">Duration</p>
                            <p className="text-gray-700">5 days (40 hours)</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-skyway-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-500">Schedule</p>
                            <p className="text-gray-700">Weekday & Weekend options</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-skyway-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-500">Certification</p>
                            <p className="text-gray-700">IATA Certificate</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-skyway-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-500">Class Size</p>
                            <p className="text-gray-700">Maximum 15 students</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <Button className="w-full" size="lg">
                          Enroll Now
                        </Button>
                        <Button variant="outline" className="w-full" size="lg">
                          Download Brochure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                      <p className="text-gray-700 mb-4">
                        Our education consultants are here to guide you in choosing the right course for your career
                        goals.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">IATA Airport Operations Curriculum</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Our comprehensive curriculum covers all essential aspects of airport operations, providing you with
                  the knowledge and skills needed to excel in this dynamic field.
                </p>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                        <span className="text-skyway-600 font-bold">1</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Introduction to Airport Operations</h2>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Airport types and classifications</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Airport organizational structure</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Key stakeholders in airport operations</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Regulatory framework and compliance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                        <span className="text-skyway-600 font-bold">2</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Passenger Terminal Operations</h2>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Check-in and boarding procedures</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Passenger flow management</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Special passenger handling</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Customer service excellence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                        <span className="text-skyway-600 font-bold">3</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Baggage Handling Systems</h2>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Baggage processing workflows</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Baggage reconciliation systems</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Handling irregular operations</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Baggage tracking and tracing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                        <span className="text-skyway-600 font-bold">4</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Ramp Operations</h2>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Aircraft turnaround coordination</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ground support equipment operations</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ramp safety procedures</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Aircraft loading and unloading</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                        <span className="text-skyway-600 font-bold">5</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Airport Safety and Security</h2>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Security screening processes</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Access control systems</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Emergency response procedures</span>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Safety management systems</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment and Certification</h2>
                  <p className="text-gray-700 mb-4">
                    To earn your IATA Airport Operations certificate, you will need to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Attend at least 90% of the scheduled classes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complete all practical exercises and case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Pass the final assessment with a minimum score of 70%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Benefits of IATA Airport Operations Training</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Investing in IATA-certified airport operations training at SKYWAY Institute offers numerous advantages
                  for your career and professional development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Internationally Recognized Certification
                    </h2>
                    <p className="text-gray-700">
                      Earn an IATA certificate that is recognized by airports, airlines, and aviation organizations
                      worldwide, enhancing your credibility and employability in the global aviation industry.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Industry Networking Opportunities</h2>
                    <p className="text-gray-700">
                      Connect with industry professionals, fellow students, and SKYWAY Institute's extensive network of
                      aviation partners, opening doors to potential employment and collaboration opportunities.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-skyway-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Career Advancement</h2>
                    <p className="text-gray-700">
                      Gain the specialized knowledge and skills needed to progress in your aviation career, whether
                      you're looking to secure your first position or advance to a higher role in airport operations.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Practical, Hands-On Learning</h2>
                    <p className="text-gray-700">
                      Benefit from our practical approach to training, which includes real-world case studies,
                      simulations, and exercises that prepare you for the actual challenges you'll face in airport
                      environments.
                    </p>
                  </div>
                </div>

                <div className="bg-skyway-50 p-8 rounded-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                  <p className="text-gray-700 mb-6">
                    With IATA Airport Operations certification, you'll be qualified for various roles including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Passenger Service Agent</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Handle check-in, boarding, and customer service at airport terminals
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Ramp Agent</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Coordinate aircraft turnaround activities on the airport ramp
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Baggage Handling Supervisor</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Oversee baggage processing and reconciliation operations
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Airport Operations Coordinator</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Manage daily operational activities and coordinate between different airport departments
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Terminal Operations Supervisor</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Oversee passenger terminal operations and staff management
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h3 className="font-semibold text-gray-900">Airport Security Officer</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Implement and monitor security procedures throughout the airport
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-skyway-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">SKYWAY Advantage</h2>
                  </div>
                  <p className="text-gray-700 mb-6">
                    When you choose SKYWAY Institute for your IATA Airport Operations training, you benefit from:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Expert instructors with extensive industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">State-of-the-art training facilities in Dubai</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Small class sizes ensuring personalized attention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Job placement assistance and career counseling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Flexible scheduling options to accommodate working professionals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Find answers to common questions about our IATA Airport Operations course.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      What are the prerequisites for this course?
                    </h2>
                    <p className="text-gray-700">
                      There are no formal prerequisites for the IATA Airport Operations Fundamentals course. However, a
                      high school diploma or equivalent is recommended. Basic English proficiency is required as the
                      course is conducted in English.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      How long is the IATA Airport Operations course?
                    </h2>
                    <p className="text-gray-700">
                      The course is 5 days (40 hours) of intensive training. We offer both weekday and weekend options
                      to accommodate different schedules. The weekday option runs Monday to Friday, while the weekend
                      option spans across three weekends.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Is this course available online?</h2>
                    <p className="text-gray-700">
                      Yes, we offer both in-person and online options for this course. The online version includes live
                      virtual classes with the same instructors and interactive elements as our in-person training.
                      However, we recommend the in-person option for the full hands-on experience when possible.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">What is included in the course fee?</h2>
                    <p className="text-gray-700">
                      The course fee includes all training materials, IATA textbooks, access to our online learning
                      platform, the IATA examination fee, and certification upon successful completion. For in-person
                      training, refreshments during breaks are also provided.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">How is the course assessed?</h2>
                    <p className="text-gray-700">
                      Assessment is conducted through a combination of practical exercises, case studies, and a final
                      written examination. You must achieve a minimum score of 70% on the final exam to receive the IATA
                      certification. Students who do not pass on their first attempt may retake the exam once at no
                      additional cost.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Do you offer job placement after the course?
                    </h2>
                    <p className="text-gray-700">
                      While we don't guarantee job placement, SKYWAY Institute has strong relationships with airports,
                      airlines, and ground handling companies in the UAE and internationally. We provide career
                      counseling, resume building workshops, and connect successful graduates with potential employers.
                      Many of our students secure positions within 3-6 months of completing the course.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Can I pay the course fee in installments?
                    </h2>
                    <p className="text-gray-700">
                      Yes, SKYWAY Institute offers flexible payment plans. You can pay the course fee in up to three
                      installments. Please contact our admissions team for more details on payment options.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">How often do you run this course?</h2>
                    <p className="text-gray-700">
                      We run the IATA Airport Operations course monthly. Please check our course calendar or contact us
                      for the next available dates. We recommend booking at least 2-3 weeks in advance as classes fill
                      up quickly.
                    </p>
                  </div>
                </div>

                <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                  <p className="text-gray-700 mb-6">
                    Our education consultants are here to help you with any additional questions you may have about the
                    IATA Airport Operations course or any other programs at SKYWAY Institute.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      Request a Callback
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Training Options */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Training Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose the training format that best fits your schedule and learning preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-skyway-500 to-skyway-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Classroom Training</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">5 days of in-person instruction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hands-on practical exercises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Direct interaction with instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Networking with fellow professionals</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-skyway-600 mb-4">AED 4,500</p>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Online Live Training</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">5 days of live virtual instruction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Interactive virtual classroom</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Real-time Q&A with instructors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital learning materials</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-skyway-600 mb-4">AED 3,800</p>
                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Training</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customized training for your team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">On-site or virtual delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Company-specific case studies</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-skyway-600 mb-4">Custom Quote</p>
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to advance your aviation career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our IATA Airport Operations course and take the first step towards a rewarding career in
                  airport operations.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-skyway-800">
                    <Link href="/contact">Request Information</Link>
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
