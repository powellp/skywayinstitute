"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, Users, Calendar, Award, ChevronRight, Brain } from "lucide-react"
import { motion } from "framer-motion"

export default function GREPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-skyway-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=GRE+Exam')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-skyway-900/90 to-skyway-800/70"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">GRE Exam Preparation</h1>
            <p className="mt-6 text-xl text-skyway-100">Your Gateway to Graduate Programs Worldwide</p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900 text-base"
              >
                <Link href="#course-details">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/courses" className="hover:text-skyway-600">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/courses/exam-preparation" className="hover:text-skyway-600">
              Exam Preparation
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/courses/exam-preparation/entrance-exam" className="hover:text-skyway-600">
              Entrance Exam
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-skyway-600 font-medium">GRE</span>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <section id="course-details" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <motion.div
                initial="hidden"
                animate={activeTab === "overview" ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 gap-12 lg:grid-cols-2"
              >
                <motion.div variants={fadeIn}>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Graduate Record Examination (GRE)</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    The GRE (Graduate Record Examination) is a standardized test that is an admissions requirement for
                    many graduate schools worldwide. The GRE aims to measure verbal reasoning, quantitative reasoning,
                    analytical writing, and critical thinking skills that have been acquired over a long period of
                    learning.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    SKYWAY Institute's GRE preparation course is designed to help you achieve your target score through
                    comprehensive training in all test sections, taught by experienced instructors who understand the
                    nuances of the exam.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Expert GRE Instructors</h3>
                        <p className="mt-1 text-gray-600">
                          Learn from trainers with proven success in GRE preparation and high student achievement rates.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Comprehensive Test Coverage</h3>
                        <p className="mt-1 text-gray-600">
                          In-depth preparation for all three test sections: Verbal Reasoning, Quantitative Reasoning,
                          and Analytical Writing.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Adaptive Learning Technology</h3>
                        <p className="mt-1 text-gray-600">
                          Practice with computer-adaptive tests that simulate the actual GRE experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                    <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800&text=GRE+Course')] bg-cover bg-center"></div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="curriculum">
              <motion.div
                initial="hidden"
                animate={activeTab === "curriculum" ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                  Course Curriculum
                </motion.h2>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Verbal Reasoning</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Reading comprehension strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Text completion techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Sentence equivalence methods</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Vocabulary enhancement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Critical reasoning skills</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Quantitative Reasoning</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Arithmetic and number properties</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Algebra and functions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Geometry and measurement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Data analysis and statistics</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Problem-solving strategies</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Analytical Writing</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Analyze an Issue task strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Analyze an Argument task techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Essay structure and organization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Critical thinking development</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Grammar and style enhancement</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Test-Taking Strategies</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Time management techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Computer-adaptive test strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Stress management and test anxiety</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Process of elimination methods</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Score maximization techniques</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="benefits">
              <motion.div
                initial="hidden"
                animate={activeTab === "benefits" ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                  Course Highlights & Benefits
                </motion.h2>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Study Materials</h3>
                    <p className="text-gray-600">
                      Access to official GRE materials, practice tests, and our proprietary study guides designed for
                      maximum score improvement.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptive Learning Technology</h3>
                    <p className="text-gray-600">
                      Our computer-adaptive practice tests adjust to your performance level, just like the actual GRE,
                      providing targeted preparation.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule Options</h3>
                    <p className="text-gray-600">
                      Choose from weekday, weekend, or evening classes to fit your personal and professional
                      commitments.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Score Improvement Guarantee</h3>
                    <p className="text-gray-600">
                      We're confident in our program's effectiveness. If your score doesn't improve, you can retake the
                      course at no additional cost.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Progress Tracking</h3>
                    <p className="text-gray-600">
                      Regular assessments and detailed analytics help identify your strengths and areas for improvement.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Graduate School Admissions Support</h3>
                    <p className="text-gray-600">
                      Guidance on program selection, application strategies, and understanding how GRE scores factor
                      into admissions decisions.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-12 bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Take the GRE?</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    The GRE is designed for prospective graduate and business school applicants from all around the
                    world. It's accepted by thousands of graduate and business schools worldwide for masters, MBA,
                    specialized master's in business, and doctoral programs.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">GRE General Test vs. GRE Subject Tests</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2">GRE General Test</h5>
                      <p className="text-gray-600 mb-4">
                        Measures verbal reasoning, quantitative reasoning, critical thinking and analytical writing
                        skills—skills that have been developed over a long period of time and are not related to any
                        specific field of study.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2">GRE Subject Tests</h5>
                      <p className="text-gray-600 mb-4">
                        Measure achievement in specific fields of study, such as Biology, Chemistry, Literature in
                        English, Mathematics, Physics, and Psychology. These are typically required for specialized
                        graduate programs.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="faq">
              <motion.div
                initial="hidden"
                animate={activeTab === "faq" ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                  Frequently Asked Questions
                </motion.h2>

                <motion.div variants={staggerContainer} className="space-y-6">
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          How long is the GRE preparation course?
                        </h3>
                        <p className="text-gray-600">
                          Our standard GRE preparation course is 40 hours, typically conducted over 6-8 weeks. We also
                          offer intensive courses (3-4 weeks) and extended courses (10-12 weeks) depending on your
                          starting level and target score.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">What's the format of the GRE exam?</h3>
                        <p className="text-gray-600">
                          The GRE is a computer-based test that takes about 3 hours and 45 minutes. It consists of six
                          sections: one Analytical Writing section with two tasks (30 minutes each), two Verbal
                          Reasoning sections (30 minutes each), two Quantitative Reasoning sections (35 minutes each),
                          and one unscored section that can be either verbal or quantitative.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">How is the GRE scored?</h3>
                        <p className="text-gray-600">
                          The GRE has three scores: Verbal Reasoning (130-170), Quantitative Reasoning (130-170), and
                          Analytical Writing (0-6). The Verbal and Quantitative sections are scored in 1-point
                          increments, while the Analytical Writing section is scored in half-point increments.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          How many practice tests are included in the course?
                        </h3>
                        <p className="text-gray-600">
                          Our course includes 5 full-length computer-adaptive practice tests that simulate the actual
                          GRE experience. These tests provide detailed score reports and personalized feedback to help
                          you track your progress and focus your study efforts.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">How long are GRE scores valid?</h3>
                        <p className="text-gray-600">
                          GRE scores are valid for five years from the test date. This gives you ample time to apply to
                          multiple programs or defer your graduate education if needed.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Training Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose the learning format that works best for you
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classroom Training</h3>
                <p className="text-gray-600 mb-4">
                  Face-to-face instruction with interactive sessions and immediate feedback from our expert trainers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">40 hours of instruction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Maximum 12 students per class</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Weekday & weekend options</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Virtual Training</h3>
                <p className="text-gray-600 mb-4">
                  Interactive online classes with the same quality instruction as our classroom courses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">40 hours of live instruction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Access to recorded sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Flexible scheduling options</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">One-on-One Training</h3>
                <p className="text-gray-600 mb-4">
                  Personalized instruction tailored to your specific needs, weaknesses, and target score.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Customized learning plan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Accelerated progress</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to achieve your target GRE score?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join SKYWAY Institute's GRE preparation course and open doors to prestigious graduate programs
                  worldwide.
                </p>
                <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900"
                  >
                    <Link href="/contact">Request Information</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
