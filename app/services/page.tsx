import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Users, Building, GraduationCap, FileText, BarChart3, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">What We Do</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">Flexible Learning. Real Results.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Training Solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                SKYWAY Institute provides a wide range of professional development and corporate training solutions
                designed to meet the diverse needs of individuals and organizations.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We use a Training Needs Analysis (TNA) to ensure every participant receives the most relevant,
                career-focused guidance. Our programs also feature hands-on training and job simulations to ensure
                you're workplace-ready from day one.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* Training Formats */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Training Formats</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer flexible learning options to accommodate different schedules and preferences.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">At Our Institute</h3>
                    <p className="mt-2 text-gray-600">
                      Learn in our modern, well-equipped training facilities in Dubai.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Onsite Corporate</h3>
                    <p className="mt-2 text-gray-600">
                      We bring our expertise to your workplace for convenient team training.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">External Venues</h3>
                    <p className="mt-2 text-gray-600">Training at conference centers and hotels for larger groups.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Laptop className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Online Learning</h3>
                    <p className="mt-2 text-gray-600">
                      Interactive virtual classrooms for remote learning flexibility.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Training Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              What makes SKYWAY Institute's training methodology effective
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Training Needs Analysis</h3>
                    <p className="mt-2 text-gray-600">
                      We begin with a comprehensive assessment to identify specific skill gaps and learning objectives.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Personalized learning paths</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Targeted skill development</span>
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
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Hands-On Training</h3>
                    <p className="mt-2 text-gray-600">
                      Our practical approach ensures participants can apply what they learn immediately.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Real-world scenarios</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Interactive workshops</span>
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
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900">Outcome Measurement</h3>
                    <p className="mt-2 text-gray-600">
                      We track progress and measure results to ensure training effectiveness.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">Performance assessments</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-skyway-600 mr-2" />
                        <span className="text-sm text-gray-600">ROI evaluation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
