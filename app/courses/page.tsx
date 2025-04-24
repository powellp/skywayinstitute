import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Shield,
  BarChart,
  Building,
  Languages,
  FileSpreadsheet,
  Monitor,
  Palette,
  HardHat,
  Plane,
  Leaf,
  Stethoscope,
  FileText,
  ArrowRight,
  Truck,
  Target,
  Users,
} from "lucide-react"

const courseCategories = [
  {
    id: "aviation",
    icon: <Plane className="h-8 w-8" />,
    title: "IATA & Aviation",
    description: "IATA Certifications, Airport Operations, Travel & Tourism Management",
    courses: [
      "IATA Certifications",
      "Airport Operations",
      "Travel & Tourism Management",
      "Airline Customer Service",
      "Aviation Safety",
    ],
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    id: "software-it",
    icon: <Code className="h-8 w-8" />,
    title: "Software & IT Development",
    description: "Full Stack Web Development, Java, Python, Mobile Apps, Data Science, AI, ML, Testing",
    courses: [
      "Full Stack Web Development",
      "Java, Python, C++, C#, PHP, R",
      "Mobile App Development",
      "Data Science & AI",
      "Testing & QA",
    ],
    color: "bg-gradient-to-br from-sky-500 to-indigo-600",
  },
  {
    id: "cybersecurity",
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "CEH, CND, CHFI, Pen Testing, ISO 27001, Risk Management",
    courses: [
      "Certified Ethical Hacker (CEH)",
      "Certified Network Defender (CND)",
      "Computer Hacking Forensic Investigator (CHFI)",
      "ISO 27001 Lead Auditor",
      "Cybersecurity Risk Management",
    ],
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    id: "accounting-finance",
    icon: <FileSpreadsheet className="h-8 w-8" />,
    title: "Accounting & Finance",
    description: "QuickBooks, Tally ERP 9, Financial Modeling, Budgeting, VAT Compliance",
    courses: [
      "QuickBooks",
      "Tally ERP 9",
      "Financial Modeling",
      "Budgeting & Forecasting",
      "VAT Compliance & Corporate Tax",
    ],
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    id: "logistics-supply-chain",
    icon: <Truck className="h-8 w-8" />,
    title: "Logistics & Supply Chain Management",
    description: "Supply Chain Management, Procurement, Inventory Management, Logistics Operations",
    courses: [
      "Supply Chain Management",
      "Procurement & Purchasing",
      "Inventory Management",
      "Logistics Operations",
      "Warehouse Management",
    ],
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    id: "languages",
    icon: <Languages className="h-8 w-8" />,
    title: "Languages & Communication",
    description: "IELTS, EmSAT, Arabic, Business English, Public Speaking, Business Writing",
    courses: [
      "IELTS Preparation",
      "EmSAT Preparation",
      "Arabic for Beginners",
      "Business English",
      "Public Speaking & Business Writing",
    ],
    color: "bg-gradient-to-br from-rose-500 to-red-600",
  },
  {
    id: "engineering-cad",
    icon: <Building className="h-8 w-8" />,
    title: "Engineering & CAD",
    description: "AutoCAD, Revit, SolidWorks, STAAD.Pro, ETABS, HVAC Design",
    courses: ["AutoCAD", "Revit", "SolidWorks", "STAAD.Pro & ETABS", "HVAC & Piping Design"],
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: "healthcare",
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Healthcare & Pharmaceuticals",
    description: "Medical Coding & Billing, Health Informatics, Regulatory Affairs",
    courses: [
      "Medical Coding & Billing",
      "Health Informatics",
      "Regulatory Affairs",
      "Healthcare Management",
      "Pharmaceutical Quality Control",
    ],
    color: "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    id: "soft-skills",
    icon: <Users className="h-8 w-8" />,
    title: "Soft Skills & Personality Development",
    description: "Communication Skills, Emotional Intelligence, Time Management, Teamwork",
    courses: [
      "Communication Skills",
      "Emotional Intelligence",
      "Time Management",
      "Teamwork & Collaboration",
      "Presentation Skills",
    ],
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: "management-leadership",
    icon: <Target className="h-8 w-8" />,
    title: "Management & Leadership",
    description: "Leadership Development, Strategic Management, Change Management, Team Building",
    courses: [
      "Leadership Development",
      "Strategic Management",
      "Change Management",
      "Team Building",
      "Executive Coaching",
    ],
    color: "bg-gradient-to-br from-blue-500 to-violet-600",
  },
  {
    id: "business-management",
    icon: <BarChart className="h-8 w-8" />,
    title: "Business & Management",
    description: "PMP, Agile, HR, Digital Marketing, Sales, Communication",
    courses: [
      "Project Management Professional (PMP)",
      "Agile & Scrum",
      "HR & Performance Management",
      "Digital Marketing",
      "Business Communication",
    ],
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    id: "office-productivity",
    icon: <Monitor className="h-8 w-8" />,
    title: "Office Productivity",
    description: "Microsoft Office, Power BI, Advanced Excel",
    courses: [
      "Microsoft Word, Excel, PowerPoint, Outlook",
      "Power BI",
      "Advanced Excel",
      "Office 365",
      "Google Workspace",
    ],
    color: "bg-gradient-to-br from-blue-500 to-sky-600",
  },
  {
    id: "design-multimedia",
    icon: <Palette className="h-8 w-8" />,
    title: "Design & Multimedia",
    description: "Photoshop, Illustrator, Premiere Pro, After Effects, 3D Animation",
    courses: [
      "Adobe Photoshop & Illustrator",
      "Premiere Pro & After Effects",
      "3D Animation (Blender)",
      "Motion Graphics",
      "UI/UX Design",
    ],
    color: "bg-gradient-to-br from-fuchsia-500 to-purple-600",
  },
  {
    id: "health-safety",
    icon: <HardHat className="h-8 w-8" />,
    title: "Health & Safety",
    description: "Occupational Health & Safety, First Aid & CPR, ISO 14001",
    courses: [
      "Occupational Health & Safety",
      "First Aid & CPR",
      "ISO 14001 – Environmental Management",
      "Fire Safety",
      "NEBOSH & IOSH",
    ],
    color: "bg-gradient-to-br from-yellow-500 to-amber-600",
  },
  {
    id: "sustainability",
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainability",
    description: "Solar & Wind Energy Systems, Sustainability in Business",
    courses: [
      "Solar Energy Systems",
      "Wind Energy Systems",
      "Sustainability in Business",
      "Green Building Design",
      "Environmental Impact Assessment",
    ],
    color: "bg-gradient-to-br from-green-500 to-lime-600",
  },
  {
    id: "exam-preparation",
    icon: <FileText className="h-8 w-8" />,
    title: "Exam Preparation",
    description: "Comprehensive preparation for international and entrance exams",
    courses: [
      "English Exams (PTE, IELTS, CELPIP)",
      "Entrance Exams (EmSAT, GRE, GMAT)",
      "Professional Certification Exams",
      "University Admission Tests",
      "Language Proficiency Tests",
    ],
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
]

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-skyway-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Course Offerings</h1>
            <p className="mt-6 mx-auto max-w-2xl text-xl text-skyway-100">
              Industry-Aligned Training for Every Career Path
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Course Categories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We offer KHDA & DED-approved courses across multiple domains
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseCategories.map((category) => (
              <Link key={category.id} href={`/courses/${category.id}`} className="block group">
                <Card className="h-full course-card overflow-hidden border-0 shadow-md transition-all duration-300 group-hover:shadow-lg">
                  <div className={`${category.color} p-6 text-white`}>
                    <div>{category.icon}</div>
                    <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
                  </div>
                  <CardContent className="p-6 bg-white group-hover:bg-gray-50 transition-all duration-300">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-1">
                      {category.courses.slice(0, 3).map((course, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          • {course}
                        </li>
                      ))}
                      {category.courses.length > 3 && (
                        <li className="text-sm text-skyway-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                          + more courses
                        </li>
                      )}
                    </ul>
                    <div className="mt-4 flex justify-end">
                      <span className="text-skyway-600 text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-skyway-900 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to advance your career?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-skyway-100">
                  Contact us today to discuss your training needs and find the perfect course for your career goals.
                </p>
                <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild size="lg" className="bg-white text-skyway-900 hover:bg-gray-100">
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-skyway-900"
                  >
                    <Link href="/corporate">Corporate Training</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
