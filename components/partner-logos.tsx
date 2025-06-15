import Image from "next/image"

export default function PartnerLogos() {
  const partners = [
    { id: 1, name: "IATA", logo: "/images/partners/partner-1.png" },
    { id: 2, name: "KHDA", logo: "/images/partners/partner-2.png" },
    { id: 3, name: "EC-Council", logo: "/images/partners/partner-3.png" },
    { id: 4, name: "CompTIA", logo: "/images/partners/partner-4.png" },
    { id: 5, name: "Autodesk", logo: "/images/partners/partner-5.png" },
    { id: 6, name: "Microsoft", logo: "/images/partners/partner-6.png" },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {partners.map((partner) => (
        <div key={partner.id} className="flex justify-center">
          <div className="h-16 w-32 relative">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
