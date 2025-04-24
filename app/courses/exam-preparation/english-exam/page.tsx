import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "English Exam Preparation | SKYWAY Institute",
  description: "Comprehensive preparation for international English proficiency tests at SKYWAY Institute Dubai",
}

const englishExams = [
  {
    id: "pte",
    title: "PTE (Pearson Test of English)",
    description: "Computer-based English language test for study abroad and immigration",
    features: ["Speaking & Writing", "Reading", "Listening"],
    image: "/placeholder.svg?height=300&width=500&text=PTE",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "ielts",
    title: "IELTS (International English Language Testing System)",
    description: "The world's most popular English language test for higher education and global migration",
    features: ["Listening", "Reading", "Writing", "Speaking"],
    image: "/placeholder.svg?height=300&width=500&text=IELTS",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },
  {
    id: "celpip",
    title: "CELPIP (Canadian English Language Proficiency Index Program)",
    description: "Entirely computer-delivered English language testing program",
    features: ["Listening", "Reading", "Writing", "Speaking"],
    image: "/placeholder.svg?height=300&width=500&text=CELPIP",
    color: "bg-gradient-to-br from-sky-500 to-blue-600",
  },
  {
    id: "duolingo",
    title: "Duolingo English Test",
    description: "Modern and convenient English proficiency assessment",
    features: ["Literacy", "Comprehension", "Conversation", "Production"],
    image: "/placeholder.svg?height=300&width=500&text=Duolingo",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    id: "ukvi-ielts",
    title: "UKVI IELTS",
    description: "Approved Secure English Language Test for UK visa and immigration",
    features: ["Listening", "Reading", "Writing", "Speaking"],
    image: "/placeholder.svg?height=300&width=500&text=UKVI+IELTS",
    color: "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    id: "sat",
    title: "SAT (Scholastic Assessment Test)",
    description: "Standardized test for college admissions in the United States",
    features: ["Reading", "Writing & Language", "Math", "Essay (optional)"],
    image: "/placeholder.svg?height=300&width=500&text=SAT",
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
]

export default function EnglishExamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">English Exam Preparation</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Comprehensive preparation for international English proficiency tests
            </p>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your English Exam</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Select from our comprehensive range of English exam preparation courses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {englishExams.map((exam) => (
              <Link key={exam.id} href={`/courses/exam-preparation/english-exam/${exam.id}`} className="block group">
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
                Why Choose SKYWAY for English Exam Preparation
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our comprehensive approach ensures you achieve your target scores and gain the English proficiency
                needed for your academic and professional goals.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Expert Instructors</h3>
                    <p className="mt-2 text-gray-600">
                      Learn from certified trainers with proven success records in English exam preparation.
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
                    <h3 className="text-lg font-medium text-gray-900">Comprehensive Materials</h3>
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
                    <h3 className="text-lg font-medium text-gray-900">Personalized Approach</h3>
                    <p className="mt-2 text-gray-600">
                      Customized learning plans tailored to your strengths and weaknesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800&text=English+Exam+Preparation')] bg-cover bg-center"></div>
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
                  <span className="block">Ready to achieve your target score?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join SKYWAY Institute's English exam preparation courses and open doors to global opportunities.
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
