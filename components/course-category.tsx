import Link from "next/link"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

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
        <div className={`${color} p-6 text-white`}>
          <div>{icon}</div>
          <h3 className="mt-4 text-xl font-bold">{title}</h3>
        </div>
        <CardContent className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
