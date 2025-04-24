import type { Metadata } from "next"
import IATAClientPage from "./IATAClientPage"

export const metadata: Metadata = {
  title: "IATA Certification Programs | SKYWAY Institute",
  description:
    "Comprehensive IATA certification programs offered by SKYWAY Institute in Dubai. Get globally recognized qualifications in aviation, travel, and logistics.",
}

export default function IATAPage() {
  return <IATAClientPage />
}
