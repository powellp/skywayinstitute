import type { Metadata } from "next"
import AirlineCabinCrewPage from "./AirlineCabinCrewPage"

export const metadata: Metadata = {
  title: "IATA Airline Cabin Crew Training | SKYWAY Institute",
  description:
    "Comprehensive IATA Cabin Crew training program offered by SKYWAY Institute in Dubai. Learn essential skills for a successful career as a cabin crew member, including safety procedures, customer service, and emergency management.",
}

export default function Page() {
  return <AirlineCabinCrewPage />
}
