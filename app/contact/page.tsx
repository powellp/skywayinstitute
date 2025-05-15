"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission with a POST request
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        })
      } else {
        // Handle error case
        console.error("Form submission failed:", response.status)
        alert("Form submission failed. Please try again.")
      }
    } catch (error) {
      console.error("An error occurred:", error)
      alert("An error occurred during form submission. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Get in touch with SKYWAY Institute to start your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and our team will get back to you shortly.
              </p>

              <Card className="mt-8">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">Thank you for contacting us!</h3>
                      <p className="mt-2 text-gray-600">
                        We've received your message and will get back to you as soon as possible.
                      </p>
                      <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest">Area of Interest</Label>
                          <Select value={formState.interest} onValueChange={handleSelectChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="software-it">Software & IT</SelectItem>
                              <SelectItem value="business">Business & Management</SelectItem>
                              <SelectItem value="engineering">Engineering & CAD</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                              <SelectItem value="languages">Languages</SelectItem>
                              <SelectItem value="corporate">Corporate Training</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-4 text-lg text-gray-600">
                Reach out to us directly or visit our training center in Dubai.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="mt-2 text-gray-600">
                      Dubai, United Arab Emirates
                      <br />
                      [Specific Address Details]
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-2 text-gray-600">
                      +971 4 XXX XXXX
                      <br />
                      +971 5X XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-2 text-gray-600">
                      info@skywayinstitute.com
                      <br />
                      admissions@skywayinstitute.com
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skyway-100 text-skyway-800">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                    <p className="mt-2 text-gray-600">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Find Us</h3>
                <div className="mt-4 aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-64 w-full bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about our courses and services
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How do I enroll in a course?",
                answer:
                  "You can enroll by filling out the contact form on this page, calling our admissions team, or visiting our institute in person.",
              },
              {
                question: "Are your courses certified?",
                answer:
                  "Yes, all our courses are approved by Dubai's Department of Economic Development (DED) and the Knowledge and Human Development Authority (KHDA).",
              },
              {
                question: "Do you offer online courses?",
                answer:
                  "Yes, we offer flexible learning options including online courses through interactive virtual classrooms.",
              },
              {
                question: "How long are the courses?",
                answer:
                  "Course duration varies depending on the subject and level. Most professional courses range from a few days to several weeks.",
              },
              {
                question: "Do you provide corporate training?",
                answer:
                  "Yes, we offer customized corporate training programs that can be delivered at your office, our institute, or external venues.",
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer:
                  "We have a satisfaction guarantee policy. Please contact our customer service team for specific details about our refund policy.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
