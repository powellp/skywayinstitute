"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, Users, Calendar, Award, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function IELTSPage() {
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
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=IELTS+Exam')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-skyway-900/90 to-skyway-800/70"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">IELTS Exam Preparation</h1>
            <p className="mt-6 text-xl text-skyway-100">
              Master the International English Language Testing System with SKYWAY Institute
            </p>
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
            <span className="text-skyway-600 font-medium">IELTS</span>
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
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    International English Language Testing System (IELTS)
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    IELTS is the world's most popular English language test for higher education and global migration,
                    accepted by over 11,000 organizations worldwide. The test assesses your ability to listen, read,
                    write and speak in English across academic and general training formats.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    SKYWAY Institute's IELTS preparation course is designed to help you achieve your target band score
                    through comprehensive training in all four test components, taught by certified IELTS instructors.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Experienced IELTS Trainers</h3>
                        <p className="mt-1 text-gray-600">
                          Learn from instructors with extensive experience in IELTS preparation and high success rates.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Complete Test Coverage</h3>
                        <p className="mt-1 text-gray-600">
                          Comprehensive preparation for all four test components: Listening, Reading, Writing, and
                          Speaking.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Practice Tests & Feedback</h3>
                        <p className="mt-1 text-gray-600">
                          Multiple full-length practice tests with detailed feedback and improvement strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                    <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800&text=IELTS+Course')] bg-cover bg-center"></div>
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
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Listening</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Note-taking strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Prediction techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Understanding different accents</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Question type practice</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Time management skills</span>
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
                            <span>Skimming and scanning techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Identifying main ideas</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Vocabulary building</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Question type strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Speed reading practice</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Writing</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Task 1: Data interpretation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Task 2: Essay structure</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Grammar and vocabulary enhancement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Coherence and cohesion</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Common topics and model answers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Speaking</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Part 1: Introduction strategies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Part 2: Cue card techniques</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Part 3: Discussion skills</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Pronunciation and fluency</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 mt-0.5" />
                            <span>Mock interviews and feedback</span>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Targeted Band Score Improvement</h3>
                    <p className="text-gray-600">
                      Our structured approach helps you achieve your required band score through focused strategies and
                      practice.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Small Group Classes</h3>
                    <p className="text-gray-600">
                      Limited class sizes ensure personalized attention and maximum speaking practice opportunities.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Official IELTS Materials</h3>
                    <p className="text-gray-600">
                      Study with authentic and up-to-date IELTS practice materials to familiarize yourself with the
                      actual test format.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mock Tests & Evaluation</h3>
                    <p className="text-gray-600">
                      Regular practice tests under exam conditions with detailed feedback and band score assessment.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-skyway-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-skyway-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Course Support</h3>
                    <p className="text-gray-600">
                      Additional assistance and resources available even after course completion until your test date.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-12 bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Take IELTS?</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    IELTS is ideal for individuals planning to study, work or migrate to English-speaking countries like
                    the UK, Australia, Canada, New Zealand, and increasingly, the USA.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">IELTS Academic vs. General Training</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2">Academic Module</h5>
                      <p className="text-gray-600 mb-4">
                        For those applying to study at undergraduate or postgraduate levels, or seeking professional
                        registration in an English-speaking environment.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2">General Training Module</h5>
                      <p className="text-gray-600 mb-4">
                        For those migrating to Australia, Canada, New Zealand and the UK, or applying for secondary
                        education, training programs or work experience in an English-speaking environment.
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
                          How long is the IELTS preparation course?
                        </h3>
                        <p className="text-gray-600">
                          Our standard IELTS preparation course is 30 hours, typically conducted over 4-6 weeks. We also
                          offer intensive courses (2 weeks) and extended courses (8-10 weeks) depending on your starting
                          level and target band score.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          What's the difference between IELTS Academic and General Training?
                        </h3>
                        <p className="text-gray-600">
                          The Listening and Speaking sections are the same for both versions, but the Reading and
                          Writing sections differ. Academic is typically required for university admission, while
                          General Training is used for immigration and certain work situations. Our course covers both
                          versions.
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
                          Our course includes 5 full-length practice tests with detailed feedback. These tests simulate
                          actual exam conditions to help you become familiar with the format and timing of the IELTS
                          test.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Can you help me register for the official IELTS test?
                        </h3>
                        <p className="text-gray-600">
                          Yes, we provide guidance on the registration process and can help you select the most suitable
                          test date and center. However, the test fee is separate from our course fee and paid directly
                          to the test center.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          What band score improvement can I expect?
                        </h3>
                        <p className="text-gray-600">
                          Most students improve by 0.5-1.5 bands after completing our course, depending on their
                          starting level, attendance, and practice outside class. Students who fully engage with the
                          course and complete all homework and practice tests typically see the best results.
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
              <div className="bg-indigo-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classroom Training</h3>
                <p className="text-gray-600 mb-4">
                  Face-to-face instruction with interactive sessions and immediate feedback from our expert trainers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">30 hours of instruction</span>
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
              <div className="bg-indigo-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Virtual Training</h3>
                <p className="text-gray-600 mb-4">
                  Interactive online classes with the same quality instruction as our classroom courses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">30 hours of live instruction</span>
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
              <div className="bg-indigo-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">One-on-One Training</h3>
                <p className="text-gray-600 mb-4">
                  Personalized instruction tailored to your specific needs, weaknesses, and target band score.
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
                  <span className="block">Ready to achieve your target IELTS score?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Join SKYWAY Institute's IELTS preparation course and open doors to international opportunities in
                  education, career, and migration.
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
