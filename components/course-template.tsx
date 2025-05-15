import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, BarChart, Users, Award, ArrowRight } from "lucide-react"
import type { CourseData } from "@/lib/course-types"

interface CourseTemplateProps {
  course: CourseData
}

export default function CourseTemplate({ course }: CourseTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/courses" className="text-skyway-100 hover:text-white text-sm font-medium">
                  Courses
                </Link>
                <span className="text-skyway-100">/</span>
                <Link
                  href={`/courses/${course.category.toLowerCase()}`}
                  className="text-skyway-100 hover:text-white text-sm font-medium"
                >
                  {course.category}
                </Link>
                {course.subcategory && (
                  <>
                    <span className="text-skyway-100">/</span>
                    <Link
                      href={`/courses/category/${course.subcategory.toLowerCase()}`}
                      className="text-skyway-100 hover:text-white text-sm font-medium"
                    >
                      {course.subcategory}
                    </Link>
                  </>
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{course.title}</h1>
              <p className="mt-4 text-xl text-skyway-100">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {course.level && (
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-skyway-300 mr-2" />
                    <span className="text-skyway-100">{course.level}</span>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-skyway-300 mr-2" />
                    <span className="text-skyway-100">{course.duration}</span>
                  </div>
                )}
              </div>
              <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900"
                >
                  <Link href="/contact?inquiry=course">Request Information</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg?height=600&width=800"}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                  <p className="text-gray-600">{course.overview}</p>

                  {course.recognition && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Recognition</h3>
                      <p className="text-gray-600">{course.recognition}</p>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Outcomes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.learningOutcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Who Should Attend</h3>
                      <ul className="space-y-3">
                        {course.targetAudience?.map((audience, index) => (
                          <li key={index} className="flex items-start">
                            <Users className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{audience}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Course Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <Award className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">Professional Certification</span>
                          </li>
                          <li className="flex items-center">
                            <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">Flexible Schedule Options</span>
                          </li>
                          <li className="flex items-center">
                            <Users className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">Expert Instructors</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Button asChild className="w-full">
                          <Link href="/contact">
                            <span className="flex items-center justify-center">
                              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum?.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Module {index + 1}: {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {course.examInfo && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Examination</h3>
                  <p className="text-gray-600">{course.examInfo}</p>
                </div>
              )}

              {course.materials && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Course Materials</h3>
                  <p className="text-gray-600">{course.materials}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {course.faqs?.map((faq, index) => (
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

      {/* Training Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Training Options</h2>
            <p className="mt-4 text-xl text-gray-500">Choose the training format that best fits your schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.trainingOptions?.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{option.type}</h3>
                    <Award className="h-6 w-6 text-skyway-600" />
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                      <span className="text-gray-600">{option.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-skyway-600 mr-2" />
                      <span className="text-gray-600">{option.duration}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                  <span className="block">Ready to advance your career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Enroll in our {course.title} course and gain the skills and knowledge to excel in your field.
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
