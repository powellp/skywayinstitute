import Link from "next/link"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import { ArrowRight } from "lucide-react"

interface CourseCategoryProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  color: string
}

export default function CourseCategory({ icon, title, description, href, color }: CourseCategoryProps) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full course-card overflow-hidden border-0 shadow-md transition-all duration-300 group-hover:shadow-lg">
        <div className={`${color} p-6 text-white relative overflow-hidden`}>
          <div className="relative z-10">{icon}</div>
          <h3 className="mt-4 text-xl font-bold relative z-10">{title}</h3>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
            {icon && React.cloneElement(icon as React.ReactElement, { className: "w-32 h-32" })}
          </div>
        </div>
        <CardContent className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex justify-end">
            <span className="text-skyway-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
