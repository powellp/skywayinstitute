import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About SKYWAY Institute</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">Empowering Minds Since 2021</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                SKYWAY Institute, approved by Dubai's Department of Economic Development (DED) and the Knowledge and
                Human Development Authority (KHDA), is dedicated to transforming careers and organizations through
                quality education and training.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2021, we've quickly established ourselves as a premier destination for professional growth in
                Dubai. Our commitment to excellence and practical, industry-relevant training has helped thousands of
                professionals advance their careers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We're not just a training center—we're your long-term partner in success. Our approach combines
                theoretical knowledge with hands-on practice, ensuring our students are workplace-ready from day one.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-skyway-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Enhance Individual Performance</h3>
                      <p className="mt-2 text-gray-600">
                        We help professionals build confidence and skills that drive career advancement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-skyway-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Build Leadership Capabilities</h3>
                      <p className="mt-2 text-gray-600">
                        Our programs develop critical decision-making and leadership skills for today's complex business
                        environment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-skyway-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Develop Future-Ready Workforce</h3>
                      <p className="mt-2 text-gray-600">
                        We prepare professionals with adaptable skills to thrive in rapidly evolving industries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-skyway-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Drive Business Growth</h3>
                      <p className="mt-2 text-gray-600">
                        Our custom corporate training solutions help organizations achieve their strategic objectives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the experts behind SKYWAY Institute's success
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[url('/placeholder.svg?height=160&width=160')] bg-cover bg-center"></div>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Team Member {index}</h3>
                <p className="text-skyway-600">Position Title</p>
                <p className="mt-2 text-gray-500">
                  Brief description about the team member's experience and expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Accreditations</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              SKYWAY Institute is proud to be recognized by leading authorities
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex justify-center">
                <div className="h-24 w-40 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Accreditation {index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
