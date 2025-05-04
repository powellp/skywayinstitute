import type { Metadata } from "next"
import AirportOperationsPage from "./AirportOperationsPage"

export const metadata: Metadata = {
  title: "IATA Airport Operations Fundamentals | SKYWAY Institute",
  description:
    "Comprehensive IATA Airport Operations training program offered by SKYWAY Institute in Dubai. Learn essential principles of airport operations, including terminal management, ground handling, and safety procedures.",
}

export default function Page() {
  return <AirportOperationsPage />
}
