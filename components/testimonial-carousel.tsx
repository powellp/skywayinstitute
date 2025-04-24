"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    id: 1,
    content:
      "I made the right decision by choosing SKYWAY Institute as my mentor and consultant. The training exceeded my expectations.",
    author: "Naresh Kade",
    position: "Senior HR Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The instructors are industry experts who provide practical knowledge that I could immediately apply in my workplace.",
    author: "Sarah Ahmed",
    position: "Software Developer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "SKYWAY Institute's corporate training program transformed our team's productivity and collaboration skills.",
    author: "Mohammed Al-Farsi",
    position: "Operations Director",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content:
      "The flexible learning options allowed me to balance my job while gaining new skills that helped me advance in my career.",
    author: "Priya Sharma",
    position: "Project Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()

  const itemsPerPage = isMobile ? 1 : 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const startIdx = currentIndex * itemsPerPage
  const visibleTestimonials = testimonials.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Student Testimonials</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border border-gray-200">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-skyway-500 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-skyway-600" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
