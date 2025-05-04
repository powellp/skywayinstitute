import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
      <p className="text-xl text-gray-600 mb-4 max-w-2xl">
        We couldn't find the IATA course you're looking for. It may have been moved, renamed, or is no longer offered.
      </p>
      <p className="text-md text-gray-500 mb-8 max-w-2xl">
        If you reached this page by clicking a link, please let us know so we can fix it. You can try browsing all our
        IATA courses to find what you're looking for.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/courses/aviation/iata">View All IATA Courses</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
