"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, Users, Calendar, Award, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Note: In a real implementation, you would need to install framer-motion:
// npm install framer-motion

export default function PTEPage() {
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
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=PTE+Exam')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-skyway-900/90 to-skyway-800/70"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">PTE Exam Preparation</h1>
            <p className="mt-6 text-xl text-skyway-100">Unlock Global Opportunities with English Proficiency</p>
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
            <Link href="/courses/exam-preparation/english-exam" className="hover:text-skyway-600">
              English Exam
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-skyway-600 font-medium">PTE</span>
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
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pearson Test of English (PTE)</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    In today's interconnected world, mastering English is vital for academic, professional, and personal
                    growth. The Pearson Test of English (PTE) is a key requirement for non-native speakers aiming to
                    study, work, or migrate to English-speaking countries.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    Skyway Institute's PTE Course in Dubai equips you with the skills to excel in all test
                    sections—Reading, Writing, Speaking, and Listening—through a curriculum aligned with the latest exam
                    standards.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Expert Instructors</h3>
                        <p className="mt-1 text-gray-600">
                          Learn from certified trainers with proven success in PTE preparation.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Personalized Support</h3>
                        <p className="mt-1 text-gray-600">
                          Small class sizes ensure individual attention for optimal progress.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Proven Strategies</h3>
                        <p className="mt-1 text-gray-600">
                          Gain practical techniques and real-world application to boost confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                    <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800&text=PTE+Course')] bg-cover bg-center"></div>
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
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Speaking & Writing</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Personal introduction techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Read aloud strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Describe image methodologies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Essay writing frameworks</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Summarize written text approaches</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Reading</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Multiple-choice reading techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Re-order paragraphs strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Fill in the blanks approaches</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Speed reading techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Vocabulary enhancement</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Listening</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Summarize spoken text methods</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Multiple-choice listening techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Fill in the blanks strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Highlight correct summary approaches</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Select missing word techniques</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Practice & Assessment</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>5 Full-length mock tests</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Section-wise practice tests</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Personalized feedback sessions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Error analysis and improvement strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Score improvement tracking</span>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Skill Development</h3>
                    <p className="text-gray-600">
                      Master English proficiency across all test modules with our structured curriculum designed by PTE
                      experts.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">
                      Engage in dynamic sessions with case studies, discussions, and collaborative activities that
                      enhance retention.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Training Options</h3>
                    <p className="text-gray-600">
                      Choose from classroom, live virtual, or corporate training options to fit your schedule and
                      learning preferences.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Globally Recognized Certification</h3>
                    <p className="text-gray-600">
                      Earn a credential validating your English proficiency that's accepted by thousands of institutions
                      worldwide.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5 Mock Exams</h3>
                    <p className="text-gray-600">
                      Simulate test conditions to identify strengths and areas for improvement with our comprehensive
                      practice exams.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Designed Curriculum</h3>
                    <p className="text-gray-600">
                      Our course is developed by PTE experts to address exam challenges effectively and maximize your
                      score.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-12 bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Benefits from PTE Certification?</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Professionals across sectors like IT, Healthcare, Finance, Engineering, Tourism, and Immigration
                    Services rely on PTE scores to advance careers or pursue opportunities abroad.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">Steps to PTE Success</h4>
                  <ol className="space-y-4 mt-4">
                    <li className="flex">
                      <span className="flex h-8 w-8 rounded-full bg-skyway-600 text-white items-center justify-center mr-4">
                        1
                      </span>
                      <div>
                        <h5 className="font-medium text-gray-900">Enroll in Expert-Led Training</h5>
                        <p className="text-gray-600">
                          Build skills through structured lessons with our certified instructors.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex h-8 w-8 rounded-full bg-skyway-600 text-white items-center justify-center mr-4">
                        2
                      </span>
                      <div>
                        <h5 className="font-medium text-gray-900">Schedule Your Exam</h5>
                        <p className="text-gray-600">Book a convenient test date post-preparation.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex h-8 w-8 rounded-full bg-skyway-600 text-white items-center justify-center mr-4">
                        3
                      </span>
                      <div>
                        <h5 className="font-medium text-gray-900">Ace the Test</h5>
                        <p className="text-gray-600">
                          Approach the exam with confidence and achieve your target score.
                        </p>
                      </div>
                    </li>
                  </ol>
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
                          What is the duration of the PTE course?
                        </h3>
                        <p className="text-gray-600">
                          Our standard PTE course runs for 30 hours, typically spread over 2-4 weeks depending on your
                          schedule preference. We offer weekday and weekend options to accommodate different needs.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Do I need to have a certain English level to join the course?
                        </h3>
                        <p className="text-gray-600">
                          No prerequisites are required. Our course welcomes all learners, regardless of current English
                          level. We assess your starting point and tailor our approach accordingly.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          What materials are provided with the course?
                        </h3>
                        <p className="text-gray-600">
                          Students receive comprehensive study materials including practice tests, workbooks, and access
                          to our online learning platform with additional resources and practice exercises.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          How soon after completing the course should I take the actual PTE exam?
                        </h3>
                        <p className="text-gray-600">
                          We recommend scheduling your exam within 2-4 weeks after completing the course while the
                          strategies and practice are still fresh in your mind. Your instructor will help you determine
                          the optimal timing based on your progress.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer any score guarantee?</h3>
                        <p className="text-gray-600">
                          While we can't guarantee specific scores as results depend on individual effort and starting
                          level, our students consistently achieve significant improvements. We offer additional support
                          sessions for students who don't reach their target score on their first attempt.
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
              <div className="bg-skyway-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classroom Training</h3>
                <p className="text-gray-600 mb-4">
                  Live sessions with interactive lectures, multimedia tools, and practice exams in our state-of-the-art
                  facilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">30 hours of instruction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Small batch sizes</span>
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
              <div className="bg-skyway-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Virtual Training</h3>
                <p className="text-gray-600 mb-4">
                  30-hour instructor-led classes with flexible weekday/weekend schedules from the comfort of your home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Interactive online platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Live instructor feedback</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Recorded sessions for review</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-skyway-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Training</h3>
                <p className="text-gray-600 mb-4">
                  Tailored programs with flexible pricing and post-training support for organizations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Customized curriculum</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Onsite or virtual options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Group discounts available</span>
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
                  <span className="block">Invest in Your Future Today</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Skyway Institute's PTE Course in Dubai is your gateway to global opportunities. Join us to transform
                  your English skills and achieve your aspirations.
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
