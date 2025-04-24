import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Laptop,
  Users,
  Building,
  GraduationCap,
  Award,
  BarChart,
  Shield,
  Code,
  Languages,
  Briefcase,
} from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CourseCategory from "@/components/course-category"
import StatsSection from "@/components/stats-section"
import PartnerLogos from "@/components/partner-logos"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose SKYWAY Institute</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We're not just a training center—we're your long-term partner in success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">KHDA & DED Approved</h3>
              <p className="mt-2 text-base text-gray-500">Officially recognized by Dubai's regulatory authorities</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                <Laptop className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Flexible Learning</h3>
              <p className="mt-2 text-base text-gray-500">Online, onsite, or at your workplace—learn your way</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Expert Instructors</h3>
              <p className="mt-2 text-base text-gray-500">Learn from certified industry professionals</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Job-Ready Skills</h3>
              <p className="mt-2 text-base text-gray-500">Practical curriculum with hands-on training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Aligned Training for Every Career Path
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our KHDA & DED-approved courses across multiple domains
            </p>
          </div>

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
              href="/corporate"
              color="bg-gradient-to-br from-blue-500 to-violet-600"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Students Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from professionals who have transformed their careers with SKYWAY Institute
            </p>
          </div>

          <div className="mt-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Partners</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We collaborate with leading organizations to deliver world-class training
            </p>
          </div>

          <div className="mt-16">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="mt-4 text-lg">
                Join SKYWAY Institute today and take a confident step toward your future success. Our expert instructors
                and industry-aligned curriculum will help you achieve your professional goals.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
