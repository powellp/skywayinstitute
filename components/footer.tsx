import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-skyway-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">SKYWAY</span>
              <span className="ml-1 text-2xl font-light text-skyway-300">Institute</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Dubai's Premier Destination for Professional Growth. Empowering professionals and businesses since 2021.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-sm text-gray-300 hover:text-white">
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300">Popular Courses</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/courses/software-it" className="text-sm text-gray-300 hover:text-white">
                  Software & IT Development
                </Link>
              </li>
              <li>
                <Link href="/courses/business-management" className="text-sm text-gray-300 hover:text-white">
                  Business & Management
                </Link>
              </li>
              <li>
                <Link href="/courses/engineering-cad" className="text-sm text-gray-300 hover:text-white">
                  Engineering & CAD
                </Link>
              </li>
              <li>
                <Link href="/courses/cybersecurity" className="text-sm text-gray-300 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/courses/languages" className="text-sm text-gray-300 hover:text-white">
                  Languages & Communication
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300">Contact Us</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-skyway-300 mr-2 mt-0.5" />
                <span className="text-sm text-gray-300">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-skyway-300 mr-2" />
                <span className="text-sm text-gray-300">+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-skyway-300 mr-2" />
                <span className="text-sm text-gray-300">info@skywayinstitute.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} SKYWAY Institute. All rights reserved. Approved by Dubai's Department of
            Economic Development (DED) and the Knowledge and Human Development Authority (KHDA).
          </p>
        </div>
      </div>
    </footer>
  )
}
