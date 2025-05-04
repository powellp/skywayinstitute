import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skywayinstitute.com"

  // Main pages
  const routes = ["", "/about", "/services", "/courses", "/corporate", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Course categories
  const courseCategories = [
    "/courses/aviation",
    "/courses/software-it",
    "/courses/cybersecurity",
    "/courses/business-management",
    "/courses/engineering-cad",
    "/courses/languages",
    "/courses/exam-preparation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Subcategories
  const courseSubcategories = [
    "/courses/aviation/iata",
    "/courses/aviation/icao",
    "/courses/aviation/logistics",
    "/courses/exam-preparation/english-exam",
    "/courses/exam-preparation/entrance-exam",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Individual courses
  const individualCourses = [
    "/courses/aviation/iata/cargo",
    "/courses/aviation/iata/travel-tourism",
    "/courses/exam-preparation/english-exam/ielts",
    "/courses/exam-preparation/english-exam/pte",
    {
      url: `${baseUrl}/courses/aviation/iata/passenger-ground-services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/dangerous-goods-regulations`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/air-transport-fundamentals`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/aviation-security-awareness`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/travel-and-tourism`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/airline-customer-service`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/courses/aviation/iata/airport-ramp-services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ].map((route) => {
    if (typeof route === "string") {
      return {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }
    }
    return route
  })

  return [...routes, ...courseCategories, ...courseSubcategories, ...individualCourses]
}
