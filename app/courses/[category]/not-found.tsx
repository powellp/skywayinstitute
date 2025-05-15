import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center py-16 bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-skyway-900">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Course Not Found</h2>
          <p className="mt-4 text-xl text-gray-600">The course you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
