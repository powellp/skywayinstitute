import type { Metadata } from "next"
import ICAOClientPage from "./ICAOClientPage"

export const metadata: Metadata = {
  title: "ICAO Training Programs | SKYWAY Institute",
  description:
    "Comprehensive ICAO training programs offered by SKYWAY Institute in Dubai. Get globally recognized qualifications in aviation safety, security, and operations.",
}

export default function ICAOPage() {
  return <ICAOClientPage />
}
