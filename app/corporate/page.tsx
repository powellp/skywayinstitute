import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BarChart, Building, Briefcase, LineChart, FileText, PieChart, CheckCircle } from "lucide-react"

export default function CorporatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Corporate Services</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Empowering Businesses Through Skill Development
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Corporate Training Solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our specialized corporate services are designed to help your organization develop the skills and
                capabilities needed to thrive in today's competitive business environment.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Each program is tailored for measurable ROI, ensuring your team gains real-world capabilities aligned
                with your strategic objectives.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Corporate Programs</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a variety of training formats to meet your organization's specific needs.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">1–2 Day Workshops</h3>
                    <p className="mt-2 text-gray-600">Focused training sessions on specific skills or topics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Leadership Training</h3>
                    <p className="mt-2 text-gray-600">Develop effective leaders who can drive organizational success</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Team Building</h3>
                    <p className="mt-2 text-gray-600">Foster collaboration and strengthen team dynamics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Process Coaching</h3>
                    <p className="mt-2 text-gray-600">Optimize workflows and improve operational efficiency</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Consultancy Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Your Strategic Partner in Business Transformation
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Business Growth Advisory</h3>
                    <p className="mt-2 text-gray-600">
                      Strategic guidance to help your business expand and thrive in competitive markets.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Growth strategy development</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Business model optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Market & Industry Analysis</h3>
                    <p className="mt-2 text-gray-600">
                      Comprehensive research and insights to inform your business decisions.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Competitive landscape assessment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Market opportunity identification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Organizational Restructuring</h3>
                    <p className="mt-2 text-gray-600">
                      Expert support for transforming your organization to meet evolving business needs.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Organizational design</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Change management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See how we've helped organizations achieve their goals
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <div className="h-full w-full bg-[url('/placeholder.svg?height=200&width=400')] bg-cover bg-center"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-900">Company {index}</h3>
                  <p className="mt-2 text-sm text-skyway-600">Industry • Service Provided</p>
                  <p className="mt-4 text-gray-600">
                    Brief description of the challenge faced by the client and how SKYWAY Institute helped them overcome
                    it.
                  </p>
                  <div className="mt-4">
                    <Link href="#" className="text-skyway-600 font-medium hover:text-skyway-700">
                      Read case study →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <span className="block">Ready to transform your organization?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Contact us today to discuss how our corporate training and consultancy services can help your business
                  thrive.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Schedule a Consultation</Link>
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
