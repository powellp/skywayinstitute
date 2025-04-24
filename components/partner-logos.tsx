export default function PartnerLogos() {
  // In a real implementation, these would be actual partner logos
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="flex justify-center">
          <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500 font-medium">Partner {index}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
