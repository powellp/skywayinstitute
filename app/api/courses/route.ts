import { NextResponse } from "next/server"

// This would typically come from a database
const courses = [
  {
    id: "iata-cargo",
    title: "IATA Cargo Introductory Course",
    category: "Aviation",
    subcategory: "IATA",
    description: "Learn the fundamentals of air cargo operations and regulations.",
    duration: "5 days",
    level: "Beginner",
  },
  {
    id: "iata-travel-tourism",
    title: "IATA Foundation in Travel & Tourism",
    category: "Aviation",
    subcategory: "IATA",
    description: "Gain essential knowledge about the travel and tourism industry.",
    duration: "10 days",
    level: "Beginner",
  },
  // More courses would be listed here
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const query = searchParams.get("q")?.toLowerCase()

  let filteredCourses = courses

  if (category) {
    filteredCourses = filteredCourses.filter(
      (course) =>
        course.category.toLowerCase() === category.toLowerCase() ||
        course.subcategory.toLowerCase() === category.toLowerCase(),
    )
  }

  if (query) {
    filteredCourses = filteredCourses.filter(
      (course) => course.title.toLowerCase().includes(query) || course.description.toLowerCase().includes(query),
    )
  }

  // Add cache control headers for better performance
  return NextResponse.json(filteredCourses, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=600",
    },
  })
}
