import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exam Preparation Courses | SKYWAY Institute",
  description: "Comprehensive preparation for international and entrance exams at SKYWAY Institute Dubai",
}

const examCategories = [
  {
    id: "english-exam",
    title: "English Exams",
    description: "Prepare for international English proficiency tests required for study, work, or immigration",
    exams: ["PTE", "IELTS", "CELPIP", "Duolingo", "UKVI IELTS", "SAT"],
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "entrance-exam",
    title: "Entrance Exams",
    description: "Comprehensive preparation for university and college entrance examinations",
    exams: [
      "EmSAT English",
      "EmSAT Biology",
      "EmSAT Arabic",
      "EmSAT Math",
      "EmSAT Physics",
      "EmSAT Chemistry",
      "EmSAT Computer Science",
      "EmSAT Training in Abu Dhabi",
      "GRE",
      "GMAT",
      "PSAT",
      "NEET",
    ],
    icon: <GraduationCap className="h-8 w-8" />,
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
]

export default function ExamPreparationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Exam Preparation</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Comprehensive preparation for international and entrance exams
            </p>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Exam Category</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Select from our comprehensive range of exam preparation courses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {examCategories.map((category) => (
              <Link key={category.id} href={`/courses/exam-preparation/${category.id}`} className="block group">
                <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className={`${category.color} p-8 text-white`}>
                    <div className="flex justify-between items-start">
                      <div>{category.icon}</div>
                      <ArrowRight className="h-5 w-5 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{category.title}</h3>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.exams.slice(0, 6).map((exam, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 rounded-md bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300"
                        >
                          <FileText className="h-4 w-4 text-skyway-600 mr-2" />
                          <span className="text-sm text-gray-700">{exam}</span>
                        </div>
                      ))}
                    </div>
                    {category.exams.length > 6 && (
                      <p className="mt-3 text-sm text-skyway-600 font-medium">
                        + {category.exams.length - 6} more exams
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose SKYWAY for Exam Preparation
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our comprehensive approach ensures you achieve your target scores
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from certified trainers with proven success records in exam preparation and high student
                achievement rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Approach</h3>
              <p className="text-gray-600">
                Personalized learning plans tailored to your strengths and weaknesses, ensuring efficient and effective
                preparation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Materials</h3>
              <p className="text-gray-600">
                Access to extensive practice tests, study guides, and the latest exam patterns to ensure you're fully
                prepared.
              </p>
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
                  <span className="block">Ready to ace your exams?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join SKYWAY Institute's exam preparation courses and achieve your target scores with confidence.
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
