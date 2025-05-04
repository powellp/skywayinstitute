"use client"

import { useEffect } from "react"

// Define types for the metrics
type WebVitalsMetric = {
  name: string
  value: number
  id: string
}

export function WebVitals() {
  useEffect(() => {
    // Function to send metrics to your analytics
    const sendMetric = ({ name, value, id }: WebVitalsMetric) => {
      // Replace with your analytics service
      console.log(`Web Vital: ${name}`, { value, id })

      // Example: Send to Google Analytics
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        ;(window as any).gtag("event", name, {
          value: Math.round(name === "CLS" ? value * 1000 : value),
          metric_id: id,
          metric_value: value,
          metric_delta: 0, // Calculate delta if needed
        })
      }
    }

    // We'll load web-vitals dynamically to avoid the module loading issue
    const loadWebVitals = async () => {
      try {
        // Dynamic import of web-vitals
        const webVitals = await import("web-vitals")

        // Monitor Core Web Vitals
        webVitals.onCLS(sendMetric)
        webVitals.onFID(sendMetric)
        webVitals.onLCP(sendMetric)

        // Additional metrics
        webVitals.onFCP(sendMetric)
        webVitals.onTTFB(sendMetric)
      } catch (error) {
        console.warn("Failed to load web-vitals:", error)
      }
    }

    // Load web-vitals
    loadWebVitals()
  }, [])

  return null
}
