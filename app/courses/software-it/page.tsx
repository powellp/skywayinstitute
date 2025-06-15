import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code } from "lucide-react"

export default function SoftwareITPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Software Development Courses in Dubai
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Master Software Development with SkywayInstitute
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elevate Your Tech Career</h2>
              <p className="mt-4 text-lg text-gray-600">
                In the rapidly evolving digital landscape of Dubai, mastering software development is crucial for both
                individuals and organizations aiming to stay ahead in the tech-driven world. SkywayInstitute offers
                comprehensive software development courses designed to equip you with the skills needed to design,
                build, deploy, secure, and scale applications across various platforms.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're interested in programming languages like PHP, C#, Java, Angular, JavaScript, or emerging
                technologies like Artificial Intelligence and Blockchain, our courses have you covered.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-skyway-600 hover:bg-skyway-700">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Software Development Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose SkywayInstitute?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We offer industry-leading software development training with a focus on practical skills
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-skyway-600 text-white flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Extensive Course Offerings</h3>
                <p className="mt-4 text-gray-600">
                  With over 200 certification courses, we cater to both technical and soft skills, ensuring a
                  well-rounded development program.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-skyway-600 text-white flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tailored Training Solutions</h3>
                <p className="mt-4 text-gray-600">
                  Our programs are customized to align with your specific requirements, ensuring relevance and
                  effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-skyway-600 text-white flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Practical Learning Experiences</h3>
                <p className="mt-4 text-gray-600">
                  Engage with interactive and hands-on activities that enhance learning retention and application in
                  real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Software Development Courses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive training programs to build your technical expertise
            </p>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Course Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Certification
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Training Mode
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      name: "Artificial Intelligence",
                      days: "7 Days",
                      cert: "SkywayInstitute & KHDA",
                      mode: "Classroom/Online",
                    },
                    { name: "Big Data", days: "4 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                    { name: "Blockchain", days: "5 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                    {
                      name: "Internet of Things",
                      days: "6 Days",
                      cert: "SkywayInstitute & KHDA",
                      mode: "Classroom/Online",
                    },
                    {
                      name: "Machine Learning with Python",
                      days: "5 Days",
                      cert: "SkywayInstitute & KHDA",
                      mode: "Classroom/Online",
                    },
                    {
                      name: "Automation Testing",
                      days: "5 Days",
                      cert: "SkywayInstitute & KHDA",
                      mode: "Classroom/Online",
                    },
                    { name: "Selenium", days: "5 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                    { name: "C++", days: "5 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                    { name: "Elasticsearch", days: "3 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                    { name: "Angular 8", days: "5 Days", cert: "SkywayInstitute & KHDA", mode: "Classroom/Online" },
                  ].map((course, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.days}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.cert}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.mode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-skyway-600 text-skyway-600 hover:bg-skyway-50">
                <Link href="/contact">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Accreditations</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              SkywayInstitute is proud to be accredited by renowned organizations
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="EC-Council" width={80} height={80} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">EC-Council</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="CompTIA" width={80} height={80} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">CompTIA</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="Autodesk" width={80} height={80} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Autodesk</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Structured Training Approach
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our five-step training approach ensures a clear and structured framework
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            {[
              { step: "1", title: "Identifying Objectives", desc: "We work closely with you to understand your goals" },
              { step: "2", title: "Customizing the Course", desc: "Our experts craft a personalized curriculum" },
              {
                step: "3",
                title: "Delivering Training",
                desc: "Flexible delivery methods include in-person and online sessions",
              },
              { step: "4", title: "Evaluating Outcomes", desc: "Post-training assessments ensure effectiveness" },
              { step: "5", title: "Awarding Certifications", desc: "Participants receive accredited certificates" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-skyway-600 text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <Card className="border-0 shadow-md mt-6 pt-8">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-skyway-200 -translate-x-1/2"></div>
                )}
              </div>
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
                  <span className="block">Ready to advance your tech career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Contact us today to discuss your training needs and find the perfect course for your career goals.
                </p>
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
