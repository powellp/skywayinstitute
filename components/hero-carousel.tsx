"use client"

import dynamic from "next/dynamic"

// Dynamically import the client component
const HeroCarouselClient = dynamic(() => import("./hero-carousel-client"), {
  ssr: false,
})

export default function HeroCarousel() {
  return <HeroCarouselClient />
}
