"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Clock, Users, GraduationCap, Award, BookOpen, Building, ArrowRight } from "lucide-react"

interface TrainingOption {
  type: string
  schedule: string
  duration: string
  features: string[]
}

interface CourseContent {
  title: string
  description: string
  image: string
  overview: string
  learningOutcomes: string[]
  targetAudience: string[]
  curriculum: {
    modules: {
      title: string
      topics: string[]
    }[]
  }
  benefits: string[]
  trainingOptions: TrainingOption[]
  faqs: {
    question: string
    answer: string
  }[]
  recognition?: string
  examInfo?: string
  materials?: string
}

interface IATACourseTemplateProps {
  course: CourseContent
}

export default function IATACourseTemplate({ course }: IATACourseTemplateProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{course.title}</h1>
              <p className="mt-6 text-xl text-skyway-100">{course.description}</p>
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
                  <Link href="#training-options">View Training Options</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="text-lg">{course.overview}</p>
                  </div>

                  {course.recognition && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Building className="mr-2 h-5 w-5 text-skyway-600" /> IATA Recognition
                      </h3>
                      <p className="text-gray-600">{course.recognition}</p>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-skyway-600" /> Learning Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-skyway-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {course.examInfo && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-skyway-600" /> Exam Preparation & Schedule
                      </h3>
                      <p className="text-gray-600">{course.examInfo}</p>
                    </div>
                  )}

                  {course.materials && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-skyway-600" /> Study Materials
                      </h3>
                      <p className="text-gray-600">{course.materials}</p>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-skyway-600" /> Who Should Attend
                    </h3>
                    <ul className="space-y-3">
                      {course.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-skyway-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{audience}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Highlights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Award className="h-5 w-5 text-skyway-600 mr-3" />
                          <span className="text-gray-600">IATA Certified</span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="h-5 w-5 text-skyway-600 mr-3" />
                          <span className="text-gray-600">Flexible Schedule Options</span>
                        </li>
                        <li className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-skyway-600 mr-3" />
                          <span className="text-gray-600">Expert Instructors</span>
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="h-5 w-5 text-skyway-600 mr-3" />
                          <span className="text-gray-600">Comprehensive Study Materials</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Button asChild className="w-full">
                        <Link href="/contact" className="flex items-center justify-center">
                          Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive curriculum is designed to provide you with the knowledge and skills needed to excel
                  in the aviation industry.
                </p>

                <div className="space-y-8">
                  {course.curriculum.modules.map((module, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-skyway-600" /> Module {index + 1}: {module.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Benefits</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Completing this IATA certification will provide you with numerous benefits for your career in the
                  aviation industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Find answers to common questions about our {course.title} course.
                </p>

                <div className="space-y-6">
                  {course.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Options */}
      <section id="training-options" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Training Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose the training option that best fits your schedule and learning preferences
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {course.trainingOptions.map((option, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="bg-skyway-900 text-white p-6">
                    <h3 className="text-2xl font-bold">{option.type}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-skyway-600 mr-3" />
                        <span className="text-gray-700">{option.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-skyway-600 mr-3" />
                        <span className="text-gray-700">{option.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-skyway-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact" className="flex items-center justify-center">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <span className="block">Ready to advance your aviation career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our {course.title} course and take your career to new heights.
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
                    <Link href="/courses/aviation/iata">View All IATA Courses</Link>
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
