import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Laptop, GraduationCap, Award, Briefcase, ChevronRight, Star, Clock, UsersIcon } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsSection from "@/components/stats-section"
import PartnerLogos from "@/components/partner-logos"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-skyway-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-skyway-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Choose SKYWAY Institute
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We're not just a training center—we're your long-term partner in success.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-skyway-500 to-skyway-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8" />
              </div>
              <div className="pt-8 text-center">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">KHDA & DED Approved</h3>
                <p className="mt-4 text-base text-gray-500">Officially recognized by Dubai's regulatory authorities</p>
                <div className="mt-6 h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/certification.png"
                    alt="KHDA & DED Certification"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-skyway-500 to-skyway-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Laptop className="h-8 w-8" />
              </div>
              <div className="pt-8 text-center">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">Flexible Learning</h3>
                <p className="mt-4 text-base text-gray-500">Online, onsite, or at your workplace—learn your way</p>
                <div className="mt-6 h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/flexible-learning.png"
                    alt="Flexible Learning Options"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-skyway-500 to-skyway-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="pt-8 text-center">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">Expert Instructors</h3>
                <p className="mt-4 text-base text-gray-500">Learn from certified industry professionals</p>
                <div className="mt-6 h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/expert-instructors.png"
                    alt="Expert Instructors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-skyway-500 to-skyway-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-8 w-8" />
              </div>
              <div className="pt-8 text-center">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">Job-Ready Skills</h3>
                <p className="mt-4 text-base text-gray-500">Practical curriculum with hands-on training</p>
                <div className="mt-6 h-32 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/practical-training.png"
                    alt="Practical Training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/patterns/grid-pattern.png')",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-skyway-100 text-skyway-800 rounded-full mb-4">
              Featured Programs
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Popular Courses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover our most in-demand courses designed to boost your career
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Course 1 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/courses/airport-operations.png"
                  alt="Airport Operations Course"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-skyway-100 text-skyway-800 rounded-full">
                  Aviation
                </div>
                <div className="absolute top-4 right-4 flex items-center px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                  <span>4.9</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    <span>120+ enrolled</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-skyway-600 transition-colors">
                  Airport Operations
                </h3>
                <p className="text-gray-600 mb-5">
                  Comprehensive training in airport operations and management with hands-on experience
                </p>
                <div className="flex justify-end items-center">
                  <Link
                    href="/courses/aviation/iata/airport-operations"
                    className="flex items-center text-skyway-600 font-medium hover:text-skyway-700 transition-colors"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/courses/cybersecurity.png"
                  alt="Cybersecurity Course"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
                  Cybersecurity
                </div>
                <div className="absolute top-4 right-4 flex items-center px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                  <span>4.8</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    <span>95+ enrolled</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-skyway-600 transition-colors">
                  Certified Ethical Hacker
                </h3>
                <p className="text-gray-600 mb-5">
                  Learn to think like a hacker and protect systems from sophisticated cyber threats
                </p>
                <div className="flex justify-end items-center">
                  <Link
                    href="/courses/cybersecurity/certified-ethical-hacker"
                    className="flex items-center text-skyway-600 font-medium hover:text-skyway-700 transition-colors"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/courses/cabin-crew.png"
                  alt="Cabin Crew Training Course"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-skyway-100 text-skyway-800 rounded-full">
                  Aviation
                </div>
                <div className="absolute top-4 right-4 flex items-center px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    <span>150+ enrolled</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-skyway-600 transition-colors">
                  Airline Cabin Crew Training
                </h3>
                <p className="text-gray-600 mb-5">
                  Comprehensive training for aspiring and current cabin crew members with practical exercises
                </p>
                <div className="flex justify-end items-center">
                  <Link
                    href="/courses/aviation/iata/airline-cabin-crew-training"
                    className="flex items-center text-skyway-600 font-medium hover:text-skyway-700 transition-colors"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/courses" className="flex items-center">
                Explore All Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-skyway-50 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-skyway-50 to-transparent opacity-70 rounded-tr-full"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-skyway-100 text-skyway-800 rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What Our Students Say
            </h2>
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
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-skyway-100 text-skyway-800 rounded-full mb-4">
              Trusted By
            </span>
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
      <section className="py-20 bg-gradient-to-br from-skyway-900 to-skyway-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-skyway-700 opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-skyway-700 opacity-20"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full mb-4">
                Get Started Today
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="mt-6 text-lg text-skyway-100">
                Join SKYWAY Institute today and take a confident step toward your future success. Our expert instructors
                and industry-aligned curriculum will help you achieve your professional goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100 px-8 rounded-full">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 rounded-full"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cta/success-story.png" alt="Student Success Story" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image src="/images/cta/certificate.png" alt="Course Certificate" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
