import type { Metadata } from "next"
import LogisticsClientPage from "./LogisticsClientPage"

export const metadata: Metadata = {
  title: "Logistics & Cargo Programs | SKYWAY Institute",
  description:
    "Comprehensive logistics and cargo training programs offered by SKYWAY Institute in Dubai. Get globally recognized qualifications in freight forwarding and supply chain management.",
}

export default function LogisticsPage() {
  return <LogisticsClientPage />
}
