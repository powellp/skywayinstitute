"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, Award, ArrowRight, Filter, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type CourseType = {
  id: string
  title: string
  description: string
  duration: string
  level: string
  features: string[]
  image: string
  category?: string
}

type FilterProps = {
  courses: CourseType[]
}

export default function IATACourseFilter({ courses }: FilterProps) {
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(courses)
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    duration: "all",
  })
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique categories, levels, and durations
  const categories = ["all", ...new Set(courses.map((course) => course.category || "Uncategorized"))]
  const levels = ["all", ...new Set(courses.map((course) => course.level))]
  const durations = ["all", ...new Set(courses.map((course) => course.duration))]

  const handleFilterChange = (filterType: string, value: any) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (currentFilters = filters) => {
    let result = [...courses]

    // Filter by category
    if (currentFilters.category !== "all") {
      result = result.filter((course) => course.category === currentFilters.category)
    }

    // Filter by level
    if (currentFilters.level !== "all") {
      result = result.filter((course) => course.level === currentFilters.level)
    }

    // Filter by duration
    if (currentFilters.duration !== "all") {
      result = result.filter((course) => course.duration === currentFilters.duration)
    }

    setFilteredCourses(result)
  }

  const resetFilters = () => {
    setFilters({
      category: "all",
      level: "all",
      duration: "all",
    })
    setFilteredCourses(courses)
  }

  // Add categories to courses based on the title keywords
  const coursesWithCategories = courses.map((course) => {
    // Assign categories based on course title keywords
    let category = "General Aviation"
    if (course.title.toLowerCase().includes("cargo")) category = "Cargo"
    else if (course.title.toLowerCase().includes("security")) category = "Security"
    else if (course.title.toLowerCase().includes("travel") || course.title.toLowerCase().includes("tourism"))
      category = "Travel & Tourism"
    else if (course.title.toLowerCase().includes("airport")) category = "Airport Operations"
    else if (course.title.toLowerCase().includes("safety")) category = "Safety"

    return {
      ...course,
      category,
    }
  })

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">IATA Certification Programs</h2>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <Select value={filters.level} onValueChange={(value) => handleFilterChange("level", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <Select value={filters.duration} onValueChange={(value) => handleFilterChange("duration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration === "all" ? "All Durations" : duration}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button variant="outline" onClick={resetFilters} className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Reset Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {filters.category !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {filters.category}
                  <button onClick={() => handleFilterChange("category", "all")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.level !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Level: {filters.level}
                  <button onClick={() => handleFilterChange("level", "all")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.duration !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Duration: {filters.duration}
                  <button onClick={() => handleFilterChange("duration", "all")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          coursesWithCategories.map((certification) => (
            <Card
              key={certification.id}
              className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={certification.image || "/placeholder.svg?height=200&width=300"}
                  alt={certification.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="bg-skyway-900 text-white p-4">
                <div className="flex justify-between items-center">
                  <Award className="h-6 w-6" />
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                      {certification.duration}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-skyway-100 px-2.5 py-0.5 text-xs font-medium text-skyway-800">
                      {certification.level}
                    </span>
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-bold">{certification.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{certification.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{certification.description}</p>
                <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                <ul className="space-y-2 mb-6">
                  {certification.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-skyway-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button asChild className="w-full">
                    <Link
                      href={`/courses/aviation/iata/${certification.id}`}
                      className="flex items-center justify-center"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact" className="flex items-center justify-center">
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses match your filters</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filter criteria to see more courses.</p>
            <Button onClick={resetFilters}>Reset Filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}
