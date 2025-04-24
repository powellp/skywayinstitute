"use client"

import { useEffect } from "react"
import { onCLS, onFID, onLCP, onFCP, onTTFB } from "web-vitals"

export function WebVitals() {
  useEffect(() => {
    // Function to send metrics to your analytics
    const sendMetric = ({ name, value, id }) => {
      // Replace with your analytics service
      console.log(`Web Vital: ${name}`, { value, id })

      // Example: Send to Google Analytics
      if (typeof window.gtag === "function") {
        window.gtag("event", name, {
          value: Math.round(name === "CLS" ? value * 1000 : value),
          metric_id: id,
          metric_value: value,
          metric_delta: 0, // Calculate delta if needed
        })
      }
    }

    // Monitor Core Web Vitals
    onCLS(sendMetric)
    onFID(sendMetric)
    onLCP(sendMetric)

    // Additional metrics
    onFCP(sendMetric)
    onTTFB(sendMetric)
  }, [])

  return null
}
