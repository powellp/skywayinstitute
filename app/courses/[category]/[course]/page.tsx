import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CourseTemplate from "@/components/course-template"
import { getCourseBySlug } from "@/lib/courses"

interface CoursePageProps {
  params: {
    category: string
    course: string
  }
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = await getCourseBySlug(params.category, params.course)

  if (!course) {
    return {
      title: "Course Not Found | SKYWAY Institute",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | SKYWAY Institute`,
    description: course.description,
    openGraph: {
      title: `${course.title} | SKYWAY Institute`,
      description: course.description,
      images: [{ url: course.image }],
    },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = await getCourseBySlug(params.category, params.course)

  if (!course) {
    notFound()
  }

  return <CourseTemplate course={course} />
}
