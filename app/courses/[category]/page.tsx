import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, BarChart } from "lucide-react"
import { getCoursesByCategory } from "@/lib/courses"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const courses = await getCoursesByCategory(params.category)

  if (courses.length === 0) {
    return {
      title: "Category Not Found | SKYWAY Institute",
      description: "The requested course category could not be found.",
    }
  }

  const categoryName = courses[0].category

  return {
    title: `${categoryName} Courses | SKYWAY Institute`,
    description: `Explore our comprehensive range of ${categoryName.toLowerCase()} courses at SKYWAY Institute Dubai.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const courses = await getCoursesByCategory(params.category)

  if (courses.length === 0) {
    notFound()
  }

  const categoryName = courses[0].category

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{categoryName} Courses</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Comprehensive training programs to advance your career in {categoryName.toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${params.category}/${course.id}`} className="block group">
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
                      <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      {course.level && (
                        <div className="flex items-center text-sm text-gray-500">
                          <BarChart className="h-4 w-4 mr-1 text-skyway-600" />
                          <span>{course.level}</span>
                        </div>
                      )}
                      {course.duration && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1 text-skyway-600" />
                          <span>{course.duration}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <span className="text-skyway-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
                  <span className="block">Ready to advance your career in {categoryName}?</span>
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
                    <Link href="/corporate">Corporate Training</Link>
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
