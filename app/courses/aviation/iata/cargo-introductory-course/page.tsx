import type { Metadata } from "next"
import CargoIntroductoryPage from "./CargoIntroductoryPage"

export const metadata: Metadata = {
  title: "IATA Cargo Introductory Course | SKYWAY Institute",
  description:
    "Comprehensive IATA Cargo Introductory Course offered by SKYWAY Institute in Dubai. Learn essential principles of air cargo operations, documentation, and handling procedures.",
}

export default function Page() {
  return <CargoIntroductoryPage />
}
