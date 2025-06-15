import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Plane, ArrowRight } from "lucide-react"
import { getFeaturedCourses } from "@/lib/courses"
import { Code, Building, Languages, Users, BarChart } from "lucide-react"
import CourseCategory from "@/components/course-category"

const courseCategories = [
  {
    id: "aviation",
    icon: <Plane className="h-8 w-8" />,
    title: "IATA & Aviation",
    description: "IATA Certifications, Airport Operations, Travel & Tourism Management",
    courses: [
      "IATA Certifications",
      "Airport Operations",
      "Travel & Tourism Management",
      "Airline Customer Service",
      "Aviation Safety",
    ],
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    id: "cybersecurity",
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "CEH, CND, CHFI, Pen Testing, ISO 27001, Risk Management",
    courses: [
      "Certified Ethical Hacker (CEH)",
      "Certified Network Defender (CND)",
      "Computer Hacking Forensic Investigator (CHFI)",
      "ISO 27001 Lead Auditor",
      "Cybersecurity Risk Management",
    ],
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  // Keep other categories as they are
]

export default async function CoursesPage() {
  const featuredCourses = await getFeaturedCourses(3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Course Offerings</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Industry-Aligned Training for Every Career Path
            </p>
          </div>
        </div>
      </section>

      {/* All Course Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Course Categories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We offer KHDA & DED-approved courses across multiple domains
            </p>
          </div>

          {/* First set of categories using CourseCategory component */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <CourseCategory
              icon={<Code className="h-8 w-8" />}
              title="Software & IT Development"
              description="Web development, programming languages, mobile apps, data science, and more"
              href="/courses/software-it"
              color="bg-gradient-to-br from-sky-500 to-indigo-600"
            />

            <CourseCategory
              icon={<Shield className="h-8 w-8" />}
              title="Cybersecurity"
              description="CEH, CND, CHFI, Pen Testing, ISO 27001, risk management"
              href="/courses/cybersecurity"
              color="bg-gradient-to-br from-purple-500 to-pink-600"
            />

            <CourseCategory
              icon={<BarChart className="h-8 w-8" />}
              title="Business & Management"
              description="PMP, Agile, HR, digital marketing, sales, communication"
              href="/courses/business-management"
              color="bg-gradient-to-br from-amber-500 to-orange-600"
            />

            <CourseCategory
              icon={<Building className="h-8 w-8" />}
              title="Engineering & CAD"
              description="AutoCAD, Revit, SolidWorks, STAAD.Pro, ETABS, HVAC design"
              href="/courses/engineering-cad"
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
            />

            <CourseCategory
              icon={<Languages className="h-8 w-8" />}
              title="Languages & Communication"
              description="English, Business English, Arabic, public speaking, business writing"
              href="/courses/languages"
              color="bg-gradient-to-br from-rose-500 to-red-600"
            />

            <CourseCategory
              icon={<Users className="h-8 w-8" />}
              title="Corporate Training"
              description="Custom workshops, leadership training, team building, consultancy"
              href="/courses/corporate-training"
              color="bg-gradient-to-br from-blue-500 to-violet-600"
            />
          </div>

          {/* Second set of categories using courseCategories array */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseCategories.map((category) => (
              <Link key={category.id} href={`/courses/${category.id}`} className="block group">
                <Card className="h-full course-card overflow-hidden border-0 shadow-md transition-all duration-300 group-hover:shadow-lg">
                  <div className={`${category.color} p-6 text-white`}>
                    <div>{category.icon}</div>
                    <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
                  </div>
                  <CardContent className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-1">
                      {category.id === "aviation"
                        ? // Show all courses for aviation category
                          category.courses.map((course, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                            >
                              • {course}
                            </li>
                          ))
                        : // For other categories, show only first 3
                          category.courses
                            .slice(0, 3)
                            .map((course, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                • {course}
                              </li>
                            ))}
                      {category.id !== "aviation" && category.courses.length > 3 && (
                        <li className="text-sm text-skyway-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                          + more courses
                        </li>
                      )}
                    </ul>
                    <div className="mt-4 flex justify-end">
                      <span className="text-skyway-600 text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Courses</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our most popular and in-demand professional training programs
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {featuredCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.category.toLowerCase()}/${course.id}`}
                  className="block group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg?height=600&width=800"}
                        alt={course.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-skyway-600 text-white rounded-md mb-2">
                          {course.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                      <div className="mt-4 flex justify-end">
                        <span className="text-skyway-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
                    <Link href="/courses/corporate-training">Corporate Training</Link>
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
