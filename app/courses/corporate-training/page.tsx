import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Users, Award, Building, Clock, BarChart, FileText, ArrowRight } from "lucide-react"

export default function CorporateTrainingPage() {
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
                  href="/courses/corporate-training"
                  className="text-skyway-100 hover:text-white text-sm font-medium"
                >
                  Corporate Training
                </Link>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Corporate Training in Dubai</h1>
              <p className="mt-4 text-xl text-skyway-100">Elevate Your Workforce with SkywayInstitute</p>
              <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900"
                >
                  <Link href="/contact?inquiry=corporate">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Corporate+Training"
                alt="Corporate Training"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="approach">Our Approach</TabsTrigger>
              <TabsTrigger value="accreditations">Accreditations</TabsTrigger>
              <TabsTrigger value="testimonials">Success Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600">
                    In the dynamic business landscape of Dubai, investing in corporate training is essential for
                    fostering a skilled and adaptable workforce. SkywayInstitute stands out as a premier provider of
                    corporate training solutions, offering a comprehensive range of programs designed to meet the unique
                    needs of your organization.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose SkywayInstitute?</h3>
                    <ul className="grid grid-cols-1 gap-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Extensive Course Offerings:</strong> With over 200 certification courses, we cater to
                          both technical and soft skills, ensuring a well-rounded development program for your
                          employees.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Tailored Training Solutions:</strong> Our programs are customized to align with your
                          company's specific requirements, ensuring relevance and effectiveness.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          <strong>Practical Learning Experiences:</strong> Engage your team with interactive and
                          hands-on activities that enhance learning retention and application.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Serving over 10 industrial sectors, SkywayInstitute demonstrates versatility and expertise across
                      various fields. Whether your business operates in healthcare, finance, or technology, our training
                      programs are adapted to meet your specific needs.
                    </p>
                  </div>
                </div>

                <div>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Training Options</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Customized corporate programs</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Ready-to-take standard courses</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">On-site training at your location</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Training at our premises</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Program Highlights</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <Award className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">KHDA & ISO 9001:2015 Certified</span>
                          </li>
                          <li className="flex items-center">
                            <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">Flexible Scheduling Options</span>
                          </li>
                          <li className="flex items-center">
                            <Users className="h-5 w-5 text-skyway-600 mr-2" />
                            <span className="text-gray-600">Expert Industry Instructors</span>
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

            <TabsContent value="approach" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Structured Training Approach</h2>
                <p className="text-gray-600 mb-8">
                  Our five-step training approach ensures a clear and structured framework for delivering effective
                  corporate training programs:
                </p>
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Identifying Objectives</h3>
                    <p className="text-gray-600 mb-4">
                      We work closely with you to understand your business goals and tailor our programs accordingly.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Needs assessment and gap analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Alignment with business strategy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Defining measurable outcomes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Customizing the Course</h3>
                    <p className="text-gray-600 mb-4">
                      Our experts craft a personalized curriculum that aligns with your company's objectives.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Industry-specific content development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Tailored case studies and examples</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Customized learning materials</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Delivering Training</h3>
                    <p className="text-gray-600 mb-4">
                      Flexible delivery methods include in-person and online sessions to accommodate your team's needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Interactive workshops and sessions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Hands-on practical exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Blended learning approaches</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 4: Evaluating Outcomes</h3>
                    <p className="text-gray-600 mb-4">
                      Post-training assessments and feedback collection ensure the effectiveness of our programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Performance metrics analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Participant feedback and surveys</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">ROI measurement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 5: Awarding Certifications</h3>
                    <p className="text-gray-600 mb-4">
                      Upon completion, participants receive accredited certificates from Dubai Knowledge and Human
                      Development Authority (KHDA) and ISO 9001:2015.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Internationally recognized certifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Digital and physical certificate options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-skyway-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Verification services for employers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accreditations" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Accreditations</h2>
                <p className="text-gray-600 mb-8">
                  SkywayInstitute is proud to be accredited by renowned organizations such as EC-Council, CompTIA, and
                  Autodesk. These partnerships ensure that our courses are up-to-date with the latest industry
                  standards, providing your team with current and applicable knowledge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=100&width=100&text=EC-Council"
                          alt="EC-Council"
                          width={80}
                          height={80}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">EC-Council</h3>
                      <p className="text-gray-600">
                        Certified provider of cybersecurity training and certification programs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=100&width=100&text=CompTIA"
                          alt="CompTIA"
                          width={80}
                          height={80}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">CompTIA</h3>
                      <p className="text-gray-600">Leading provider of vendor-neutral IT certifications.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=100&width=100&text=Autodesk"
                          alt="Autodesk"
                          width={80}
                          height={80}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Autodesk</h3>
                      <p className="text-gray-600">Official certification provider for Autodesk software products.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accredited Certifications</h3>
                  <p className="text-gray-600 mb-6">
                    Our course-completion certificates are reputable and indicate adherence to high standards, providing
                    assurance of the quality and value of our training programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">KHDA Certified</h4>
                        <p className="text-gray-600">Recognized by Dubai Knowledge and Human Development Authority</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">ISO 9001:2015</h4>
                        <p className="text-gray-600">Compliant with international quality management standards</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Industry-Recognized</h4>
                        <p className="text-gray-600">Certificates valued by employers across various industries</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-skyway-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="h-6 w-6 text-skyway-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Verifiable Credentials</h4>
                        <p className="text-gray-600">Digital verification system for authenticating certificates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <p className="text-gray-600 mb-8">
                  With over 400 trained individuals and 500 completed sessions, SkywayInstitute has a proven track
                  record of success. Our testimonials and success stories provide insights into the real-world benefits
                  of our programs, offering social proof of their effectiveness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-200">
                      <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400&text=Company+Case+Study')] bg-cover bg-center"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl text-gray-900">Dubai Tech Solutions</h3>
                      <p className="mt-2 text-sm text-skyway-600">IT Services • Leadership Training</p>
                      <p className="mt-4 text-gray-600">
                        "SkywayInstitute's corporate training program transformed our leadership team, resulting in a
                        30% improvement in project delivery times and enhanced team collaboration."
                      </p>
                      <div className="mt-4">
                        <Link href="#" className="text-skyway-600 font-medium hover:text-skyway-700">
                          Read case study →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-200">
                      <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400&text=Company+Case+Study')] bg-cover bg-center"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl text-gray-900">Gulf Financial Group</h3>
                      <p className="mt-2 text-sm text-skyway-600">Banking • Customer Service Excellence</p>
                      <p className="mt-4 text-gray-600">
                        "After implementing SkywayInstitute's customer service training, our customer satisfaction
                        scores increased by 25% and employee retention improved significantly."
                      </p>
                      <div className="mt-4">
                        <Link href="#" className="text-skyway-600 font-medium hover:text-skyway-700">
                          Read case study →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Training Impact</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-skyway-600 mb-2">400+</div>
                      <p className="text-gray-700">Professionals Trained</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-skyway-600 mb-2">500+</div>
                      <p className="text-gray-700">Training Sessions Completed</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-skyway-600 mb-2">10+</div>
                      <p className="text-gray-700">Industry Sectors Served</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Custom Corporate Training Approaches</h2>
            <p className="mt-4 text-xl text-gray-500">
              Choose the training format that best fits your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Customized Programs</h3>
                  <Building className="h-6 w-6 text-skyway-600" />
                </div>
                <p className="text-gray-600 mb-6">
                  Tailored training solutions designed specifically for your organization's unique challenges and
                  objectives.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Flexible scheduling based on your needs</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Customized duration and intensity</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Needs assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Custom curriculum development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Industry-specific case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Post-training evaluation and reporting</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Ready-to-Take Programs</h3>
                  <FileText className="h-6 w-6 text-skyway-600" />
                </div>
                <p className="text-gray-600 mb-6">
                  Pre-designed training programs covering essential skills and knowledge areas, ready for immediate
                  implementation.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Regular scheduled sessions</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-skyway-600 mr-2" />
                    <span className="text-gray-600">Standard program duration</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Comprehensive training materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Hands-on practical exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Industry-standard certification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Access to online resources</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Venues */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Training Venues and Facilities</h2>
            <p className="mt-4 text-xl text-gray-500">
              Choose from a variety of training venues to suit your team's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400&text=Our+Premises')] bg-cover bg-center"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-gray-900">At Our Premises</h3>
                <p className="mt-4 text-gray-600">
                  Train at our state-of-the-art facilities equipped with the latest technology and comfortable learning
                  environments.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Modern training rooms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">High-speed internet</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Refreshments provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400&text=Your+Location')] bg-cover bg-center"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-gray-900">At Your Location</h3>
                <p className="mt-4 text-gray-600">
                  We bring the training to you, minimizing disruption to your team's workflow and maximizing
                  convenience.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">No travel time for your team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Familiar environment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Customized setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400&text=Selected+Hotel')] bg-cover bg-center"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-gray-900">At Selected Hotels</h3>
                <p className="mt-4 text-gray-600">
                  Conduct training in premium hotel venues across Dubai, offering a professional and neutral
                  environment.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Professional atmosphere</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Full catering options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                    <span className="text-sm text-gray-600">Central locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to elevate your workforce?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Contact us today to discuss how our corporate training solutions can help your business thrive in
                  Dubai's competitive landscape.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Schedule a Consultation</Link>
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
