import type { Metadata } from "next"
import IATAClientPage from "./IATAClientPage"

export const metadata: Metadata = {
  title: "IATA Certification Programs | SKYWAY Institute",
  description:
    "Explore our IATA-certified courses for aviation, travel, and cargo professionals. Globally recognized qualifications to advance your career.",
}

export default function IATAPage() {
  return <IATAClientPage />
}
