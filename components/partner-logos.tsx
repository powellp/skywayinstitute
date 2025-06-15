"use client"

import Image from "next/image"
import { useState } from "react"

export default function PartnerLogos() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const partners = [
    {
      id: 1,
      name: "IATA",
      logo: "https://th.bing.com/th/id/OIP.2i2UCcH-tHMFNTvepBLkhQHaEn?rs=1&pid=ImgDetMain",
      fallback: "IATA",
    },
    {
      id: 2,
      name: "KHDA",
      logo: "https://teachmiddleeastmag.com/wp-content/uploads/2015/04/khda.jpg",
      fallback: "KHDA",
    },
    {
      id: 3,
      name: "EC-Council",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ec_Council_Logo.png",
      fallback: "EC-Council",
    },
    {
      id: 4,
      name: "CompTIA",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1qB6b4lEYQB3nSUm50x6ya4PchPbLrH8FvQ9qgFUurVjONiYWys2Cq6aC0h7VnlZnws&usqp=CAU",
      fallback: "CompTIA",
    },
    {
      id: 5,
      name: "Autodesk",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5jhsn07SHRjqzsGxar1NNDxulDqW18qKsQ&s",
      fallback: "Autodesk",
    },
    {
      id: 6,
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      fallback: "Microsoft",
    },
  ]

  const handleImageError = (partnerId: number) => {
    setImageErrors((prev) => ({ ...prev, [partnerId]: true }))
  }

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {partners.map((partner) => (
        <div key={partner.id} className="flex justify-center">
          <div className="h-16 w-32 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-3">
            {imageErrors[partner.id] ? (
              <div className="text-gray-600 font-semibold text-sm text-center">{partner.fallback}</div>
            ) : (
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={48}
                className="object-contain max-w-full max-h-full"
                unoptimized
                onError={() => handleImageError(partner.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
