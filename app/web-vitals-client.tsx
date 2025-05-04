"use client"

import dynamic from "next/dynamic"

// Dynamically import WebVitals with no SSR to avoid hydration issues
const WebVitals = dynamic(() => import("./web-vitals").then((mod) => mod.WebVitals), {
  ssr: false,
})

export default function WebVitalsClient() {
  return <WebVitals />
}
