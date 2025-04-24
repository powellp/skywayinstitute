import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrance Exam Preparation | SKYWAY Institute",
  description: "Comprehensive preparation for university and college entrance examinations at SKYWAY Institute Dubai",
}

const entranceExams = [
  {
    id: "emsat-english",
    title: "EmSAT English",
    description: "Standardized computer-based test measuring English proficiency for UAE higher education",
    features: ["Reading", "Writing", "Listening", "Speaking"],
    image: "/placeholder.svg?height=300&width=500&text=EmSAT+English",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "emsat-biology",
    title: "EmSAT Biology",
    description: "Computer-based test assessing biology knowledge for UAE higher education admission",
    features: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"],
    image: "/placeholder.svg?height=300&width=500&text=EmSAT+Biology",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    id: "emsat-arabic",
    title: "EmSAT Arabic",
    description: "Assessment of Arabic language proficiency for UAE university admission",
    features: ["Reading Comprehension", "Grammar", "Writing", "Vocabulary"],
    image: "/placeholder.svg?height=300&width=500&text=EmSAT+Arabic",
    color: "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    id: "emsat-math",
    title: "EmSAT Math",
    description: "Standardized test measuring mathematical knowledge and skills",
    features: ["Algebra", "Geometry", "Calculus", "Statistics"],
    image: "/placeholder.svg?height=300&width=500&text=EmSAT+Math",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    id: "gre",
    title: "GRE (Graduate Record Examination)",
    description: "Standardized test for graduate school admissions worldwide",
    features: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
    image: "/placeholder.svg?height=300&width=500&text=GRE",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    id: "gmat",
    title: "GMAT (Graduate Management Admission Test)",
    description: "Assessment for business school admissions globally",
    features: ["Verbal Reasoning", "Quantitative Reasoning", "Integrated Reasoning", "Analytical Writing"],
    image: "/placeholder.svg?height=300&width=500&text=GMAT",
    color: "bg-gradient-to-br from-sky-500 to-blue-600",
  },
]

export default function EntranceExamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Entrance Exam Preparation</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Comprehensive preparation for university and college entrance examinations
            </p>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Entrance Exam</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Select from our comprehensive range of entrance exam preparation courses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {entranceExams.map((exam) => (
              <Link key={exam.id} href={`/courses/exam-preparation/entrance-exam/${exam.id}`} className="block group">
                <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${exam.image})` }}
                    ></div>
                    <div className={`absolute inset-0 opacity-60 ${exam.color}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center px-4">{exam.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <p className="text-gray-600 mb-4">{exam.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">Key Components:</p>
                      <ul className="space-y-1">
                        {exam.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <span className="text-skyway-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose SKYWAY for Entrance Exam Preparation
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our comprehensive approach ensures you achieve your target scores and gain admission to your desired
                educational institutions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Subject Matter Experts</h3>
                    <p className="mt-2 text-gray-600">
                      Learn from instructors specialized in each exam type and subject area.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Comprehensive Study Materials</h3>
                    <p className="mt-2 text-gray-600">
                      Access to extensive practice tests, study guides, and the latest exam patterns.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Proven Track Record</h3>
                    <p className="mt-2 text-gray-600">
                      Our students consistently achieve high scores and gain admission to top institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800&text=Entrance+Exam+Preparation')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to secure your academic future?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join SKYWAY Institute's entrance exam preparation courses and gain admission to your dream
                  institution.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
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
